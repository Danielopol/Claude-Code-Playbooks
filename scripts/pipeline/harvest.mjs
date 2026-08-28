#!/usr/bin/env node
/**
 * Stage 2 — walk each repo and pull down every matching artifact.
 *
 * Input:  data/repos.jsonl   (from discover.mjs)
 * Output: data/corpus.jsonl  (one record per harvested file, with content)
 *         data/repos-extra.jsonl (repos found via plugin marketplaces)
 *
 * The cost model here is what makes a crawl this size feasible:
 *
 *   - ONE core-budget request per repo (`git/trees?recursive=1`) reveals the
 *     entire file listing. No per-directory traversal.
 *   - Content then comes from raw.githubusercontent.com, which does NOT draw
 *     on the 5,000/hr core budget. So content fetching scales out with
 *     concurrency while repo traversal stays within the API budget.
 *
 * That split means the binding constraint is ~5,000 repos/hour, and the number
 * of files per repo is nearly free — which is exactly the right shape, since
 * the highest-value sources are mega-repos holding hundreds of skills each.
 *
 * Usage:
 *   node scripts/pipeline/harvest.mjs
 *   node scripts/pipeline/harvest.mjs --all-licenses   # ignore license gate
 *   node scripts/pipeline/harvest.mjs --limit 50       # smoke test
 */
import matter from 'gray-matter';
import { repoTree, rawFile, mapLimit, api, checkToken, stats } from './lib/github.mjs';
import { JsonlStore, Checkpoint, readJsonl, progress, endProgress } from './lib/store.mjs';
import {
  classifyPath,
  isExcluded,
  MANIFEST_KINDS,
  isPermissive,
  LOW_CONFIDENCE_KINDS,
} from './lib/targets.mjs';
import { extractRepoRefsFromManifest } from './lib/parse.mjs';

const args = process.argv.slice(2);
const flag = (n) => args.includes(`--${n}`);
const opt = (n, d) => {
  const i = args.indexOf(`--${n}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : d;
};

const ALL_LICENSES = flag('all-licenses');
const LIMIT = Number(opt('limit', '0'));
const FILE_CONCURRENCY = Number(opt('concurrency', '12'));

/** Skip anything too small to be a real instruction set, or absurdly large. */
const MIN_BYTES = 200;
const MAX_BYTES = 400_000;
/** Guard against a single repo dominating the corpus with generated files. */
const MAX_FILES_PER_REPO = 800;

const corpus = new JsonlStore('corpus.jsonl', (r) => `${r.repo}@${r.path}`);
const extraRepos = new JsonlStore('repos-extra.jsonl', (r) => r.full_name.toLowerCase());
const checkpoint = new Checkpoint('harvest.checkpoint');

/** Pull a title/description out of frontmatter when the format carries it. */
function parseMeta(text, kind) {
  let title = null;
  let description = null;
  let frontmatter = null;

  try {
    const parsed = matter(text);
    if (parsed.data && Object.keys(parsed.data).length) {
      frontmatter = parsed.data;
      title = parsed.data.name ?? parsed.data.title ?? null;
      description = parsed.data.description ?? null;
    }
  } catch {
    /* not frontmatter-bearing */
  }

  if (!title) {
    const h1 = text.match(/^#\s+(.+)$/m);
    if (h1) title = h1[1].trim();
  }

  return {
    title: title ? String(title).slice(0, 200) : null,
    description: description ? String(description).slice(0, 500) : null,
    frontmatter,
    kind,
  };
}

async function harvestRepo(repo) {
  const id = repo.full_name.toLowerCase();
  if (checkpoint.has(id)) return { skipped: true };

  const branch = repo.default_branch || 'main';
  let tree;
  try {
    tree = await repoTree(repo.owner, repo.name, branch);
  } catch {
    checkpoint.mark(id);
    return { error: true };
  }

  if (!tree.files.length) {
    checkpoint.mark(id);
    return { empty: true };
  }

  // Classify before fetching anything — we only pay for content we want.
  const candidates = [];
  for (const node of tree.files) {
    if (isExcluded(node.path)) continue;
    const kind = classifyPath(node.path);
    if (!kind) continue;
    if (node.size != null && (node.size < MIN_BYTES || node.size > MAX_BYTES)) {
      // Manifests are small by nature; don't apply the floor to them.
      if (!MANIFEST_KINDS.has(kind)) continue;
    }
    candidates.push({ path: node.path, kind, size: node.size ?? null, sha: node.sha });
    if (candidates.length >= MAX_FILES_PER_REPO) break;
  }

  if (!candidates.length) {
    checkpoint.mark(id);
    return { files: 0, truncated: tree.truncated };
  }

  // Content comes from raw — free against the core budget, so parallelize.
  const fetched = await mapLimit(candidates, FILE_CONCURRENCY, async (c) => {
    const text = await rawFile(repo.owner, repo.name, branch, c.path);
    if (!text) return null;
    return { ...c, text };
  });

  let kept = 0;
  const discoveredRepos = new Set();

  for (const f of fetched) {
    if (!f || !f.text) continue;

    if (MANIFEST_KINDS.has(f.kind)) {
      extractRepoRefsFromManifest(f.text).forEach((r) => discoveredRepos.add(r));
      continue; // manifests are navigation, not content
    }

    if (f.text.length < MIN_BYTES || f.text.length > MAX_BYTES) continue;

    const meta = parseMeta(f.text, f.kind);
    const added = corpus.add({
      repo: repo.full_name,
      owner: repo.owner,
      path: f.path,
      kind: f.kind,
      // Convention-matched kinds carry more false positives than tool-native
      // ones; the conversion stage should hold them to a stricter bar.
      confidence: LOW_CONFIDENCE_KINDS.has(f.kind) ? 'low' : 'high',
      title: meta.title,
      description: meta.description,
      frontmatter: meta.frontmatter,
      content: f.text,
      bytes: f.text.length,
      sha: f.sha,
      branch,
      stars: repo.stars,
      license: repo.license,
      permissive: repo.permissive,
      source_url: `https://github.com/${repo.full_name}/blob/${branch}/${f.path}`,
      repo_url: `https://github.com/${repo.full_name}`,
      harvested_at: new Date().toISOString(),
    });
    if (added) kept++;
  }

  checkpoint.mark(id);
  return { files: kept, newRepos: [...discoveredRepos], truncated: tree.truncated };
}

async function resolveAndQueue(fullNames, seenNames) {
  const fresh = fullNames.filter((n) => !seenNames.has(n.toLowerCase()));
  const queued = [];
  for (const fullName of fresh) {
    seenNames.add(fullName.toLowerCase());
    const r = await api(`/repos/${fullName}`);
    if (!r?.full_name) continue;
    const rec = {
      full_name: r.full_name,
      owner: r.owner.login,
      name: r.name,
      default_branch: r.default_branch,
      stars: r.stargazers_count ?? 0,
      license: r.license?.spdx_id ?? null,
      permissive: isPermissive(r.license?.spdx_id),
      pushed_at: r.pushed_at,
      archived: Boolean(r.archived),
      fork: Boolean(r.fork),
      description: (r.description ?? '').slice(0, 300),
      discovered_via: 'marketplace-manifest',
    };
    extraRepos.add(rec);
    queued.push(rec);
  }
  return queued;
}

async function main() {
  const started = Date.now();
  console.log('=== Stage 2: harvest ===');
  await checkToken();

  const discovered = [...readJsonl('repos.jsonl'), ...readJsonl('repos-extra.jsonl')];
  if (!discovered.length) {
    console.error('  No repos found. Run: node scripts/pipeline/discover.mjs');
    process.exit(1);
  }

  // Dedupe, then apply the license gate unless explicitly overridden.
  const byName = new Map();
  for (const r of discovered) byName.set(r.full_name.toLowerCase(), r);
  let queue = [...byName.values()];

  const beforeLicense = queue.length;
  if (!ALL_LICENSES) {
    queue = queue.filter((r) => r.permissive);
  }
  // Archived repos are fine (content is still valid); forks are usually
  // byte-identical duplicates of their parent and get caught in dedupe anyway,
  // but skipping them here saves a lot of wasted tree calls.
  queue = queue.filter((r) => !r.fork);

  // Densest sources first, so an interrupted run still captures the best material.
  queue.sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0));
  if (LIMIT) queue = queue.slice(0, LIMIT);

  console.log(`  discovered repos : ${beforeLicense}`);
  console.log(`  after license gate: ${queue.length}  ${ALL_LICENSES ? '(gate disabled)' : '(permissive only, no forks)'}`);
  console.log(`  already harvested : ${checkpoint.size}`);
  console.log(`  corpus so far     : ${corpus.size} files\n`);

  const seenNames = new Set(byName.keys());
  let processed = 0;
  let filesTotal = 0;
  let truncatedRepos = 0;
  const pending = [...queue];

  while (pending.length) {
    const repo = pending.shift();
    const result = await harvestRepo(repo);
    processed++;

    if (result.files) filesTotal += result.files;
    if (result.truncated) truncatedRepos++;

    // Marketplace manifests can add repos mid-run; fold them into the queue.
    if (result.newRepos?.length) {
      const added = await resolveAndQueue(result.newRepos, seenNames);
      const eligible = added.filter((r) => (ALL_LICENSES || r.permissive) && !r.fork);
      pending.push(...eligible);
      if (eligible.length) {
        console.log(`\n  +${eligible.length} repos from ${repo.full_name} marketplace manifest`);
      }
    }

    progress(
      'harvest',
      processed,
      processed + pending.length,
      `| ${corpus.size} files | ${repo.full_name.slice(0, 40)}`
    );
  }
  endProgress();

  const s = stats();
  console.log('\n=== Harvest complete ===');
  console.log(`  repos processed : ${processed}`);
  console.log(`  files harvested : ${corpus.size} (${filesTotal} this run)`);
  console.log(`  API requests    : ${s.totalRequests}`);
  console.log(`  elapsed         : ${((Date.now() - started) / 60000).toFixed(1)}m`);
  if (truncatedRepos) {
    console.log(
      `  note: ${truncatedRepos} repo tree(s) were truncated by GitHub (>100k files); ` +
        'some artifacts in those may have been missed.'
    );
  }
  console.log(`\n  → data/corpus.jsonl`);
  console.log('  Next: node scripts/pipeline/report.mjs');

  corpus.close();
  extraRepos.close();
  checkpoint.close();
}

main().catch((err) => {
  console.error('\nFATAL:', err.message);
  corpus.close();
  extraRepos.close();
  checkpoint.close();
  process.exit(1);
});
