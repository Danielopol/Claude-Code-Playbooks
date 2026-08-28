#!/usr/bin/env node
/**
 * Stage 1 — find candidate repositories.
 *
 * Output: data/repos.jsonl (one record per unique repo, with license metadata)
 *
 * Four independent discovery channels, run in increasing order of cost and
 * decreasing order of reliability. They are deliberately independent: GitHub's
 * code search API is the richest source but also the most restricted and the
 * most likely to be throttled or refuse a query, so it must never be the only
 * channel. If it fails entirely, the other three still produce a usable corpus.
 *
 *   1. Awesome lists   — raw markdown fetches, no rate limit, huge seed yield
 *   2. Seed repos      — hand-picked high-density sources
 *   3. Topic + text    — repo search, sharded by stars past the 1,000 cap
 *   4. Code search     — finds files directly, sharded by size
 *
 * Every channel funnels into the same deduped store, so overlap is free.
 *
 * Usage:
 *   node scripts/pipeline/discover.mjs                 # all channels
 *   node scripts/pipeline/discover.mjs --skip-code     # omit code search
 *   node scripts/pipeline/discover.mjs --max-pages 3   # quick smoke test
 */
import { api, searchAll, searchCount, rawFile, checkToken, stats, graphqlRepos } from './lib/github.mjs';
import { JsonlStore, Checkpoint, progress, endProgress } from './lib/store.mjs';
import { extractRepoRefs } from './lib/parse.mjs';
import {
  TOPICS,
  REPO_QUERIES,
  AWESOME_LISTS,
  SEED_REPOS,
  STAR_SHARDS,
  SIZE_SHARDS,
  isPermissive,
} from './lib/targets.mjs';

const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};

const MAX_PAGES = Number(opt('max-pages', '10'));
const SKIP_CODE = flag('skip-code');
const SKIP_SEARCH = flag('skip-search');
const INCLUDE_ADJACENT = flag('include-adjacent');

const repos = new JsonlStore('repos.jsonl', (r) => r.full_name.toLowerCase());
const checkpoint = new Checkpoint('discover.checkpoint');

/** Normalize a GitHub search repo object into our record shape. */
function toRecord(repo, source) {
  return {
    full_name: repo.full_name,
    owner: repo.owner?.login ?? repo.full_name.split('/')[0],
    name: repo.name ?? repo.full_name.split('/')[1],
    default_branch: repo.default_branch ?? null,
    stars: repo.stargazers_count ?? 0,
    // license can be null (all-rights-reserved) — recorded, filtered later
    license: repo.license?.spdx_id ?? null,
    permissive: isPermissive(repo.license?.spdx_id),
    size_kb: repo.size ?? null,
    pushed_at: repo.pushed_at ?? null,
    archived: Boolean(repo.archived),
    fork: Boolean(repo.fork),
    description: (repo.description ?? '').slice(0, 300),
    discovered_via: source,
  };
}

function addRepo(repo, source) {
  if (!repo?.full_name) return false;
  return repos.add(toRecord(repo, source));
}

// ---------------------------------------------------------------------------
// Channel 1 — awesome lists
// ---------------------------------------------------------------------------

async function channelAwesomeLists() {
  console.log('\n[1/4] Awesome lists (free — no rate limit)');
  const candidates = new Set();

  // Low-signal lists (MCP servers, general AI agents) contribute thousands of
  // refs that are mostly off-target. Each ref later costs a tree call against
  // the 5,000/hr core budget, so they're opt-in rather than default.
  const lists = INCLUDE_ADJACENT
    ? AWESOME_LISTS
    : AWESOME_LISTS.filter(([, , , , weight]) => weight !== 'low');
  const skipped = AWESOME_LISTS.length - lists.length;
  if (skipped) {
    console.log(`  (${skipped} low-signal lists skipped — pass --include-adjacent to crawl them)`);
  }

  for (const [owner, repo, branch, file] of lists) {
    const id = `awesome:${owner}/${repo}`;
    if (checkpoint.has(id)) continue;

    // Try the given branch, then the other common default.
    let text = await rawFile(owner, repo, branch, file);
    if (!text) text = await rawFile(owner, repo, branch === 'main' ? 'master' : 'main', file);
    if (!text) {
      console.log(`  - ${owner}/${repo}: unreachable, skipping`);
      checkpoint.mark(id);
      continue;
    }

    const refs = extractRepoRefs(text);
    refs.forEach((r) => candidates.add(r));
    console.log(`  - ${owner}/${repo}: ${refs.length} repo refs`);
    checkpoint.mark(id);
  }

  // Also fold in the explicit seeds; they go through the same metadata lookup.
  for (const [o, n] of SEED_REPOS) candidates.add(`${o}/${n}`);

  // Resolve metadata (license, default branch) for anything new. Batched via
  // GraphQL — 100 repos per request instead of one REST call each, which is the
  // difference between ~40 requests and ~4,000 against the hourly budget.
  const unresolved = [...candidates].filter(
    (fullName) => !repos.seen.has(fullName.toLowerCase())
  );
  console.log(
    `  resolving metadata for ${unresolved.length} repos (GraphQL, ~${Math.ceil(unresolved.length / 100)} requests)...`
  );

  const BATCH = 100;
  for (let i = 0; i < unresolved.length; i += BATCH) {
    const slice = unresolved.slice(i, i + BATCH);
    const resolved = await graphqlRepos(slice);
    for (const repo of resolved) addRepo(repo, 'awesome-list');
    progress('  resolve', Math.min(i + BATCH, unresolved.length), unresolved.length, `| kept ${repos.size}`);
  }
  endProgress();
  console.log(`  total repos after channel 1: ${repos.size}`);
}

// ---------------------------------------------------------------------------
// Channel 2 + 3 — repo search by topic and free text, sharded by stars
// ---------------------------------------------------------------------------

async function runShardedRepoSearch(baseQuery, source) {
  // A query under the 1,000 ceiling needs no sharding; above it, split by stars.
  const total = await searchCount('repositories', baseQuery);
  if (total === 0) return 0;

  const shards =
    total <= 1000 ? [baseQuery] : STAR_SHARDS.map((s) => `${baseQuery} stars:${s}`);

  let found = 0;
  for (const q of shards) {
    let page = 0;
    for await (const repo of searchAll('repositories', q, { cap: MAX_PAGES * 100 })) {
      if (addRepo(repo, source)) found++;
      if (++page >= MAX_PAGES * 100) break;
    }
  }
  return found;
}

async function channelTopics() {
  if (SKIP_SEARCH) return console.log('\n[2/4] Topic search — skipped');
  console.log('\n[2/4] Topic search');

  for (const topic of TOPICS) {
    const id = `topic:${topic}`;
    if (checkpoint.has(id)) continue;
    try {
      const n = await runShardedRepoSearch(`topic:${topic}`, `topic:${topic}`);
      console.log(`  - topic:${topic} → +${n} new (total ${repos.size})`);
      checkpoint.mark(id);
    } catch (err) {
      console.log(`  - topic:${topic} failed: ${err.message}`);
    }
  }
}

async function channelTextSearch() {
  if (SKIP_SEARCH) return console.log('\n[3/4] Text search — skipped');
  console.log('\n[3/4] Repo text search');

  for (const q of REPO_QUERIES) {
    const id = `query:${q}`;
    if (checkpoint.has(id)) continue;
    try {
      const n = await runShardedRepoSearch(`${q} in:name,description,readme`, `query:${q}`);
      console.log(`  - "${q}" → +${n} new (total ${repos.size})`);
      checkpoint.mark(id);
    } catch (err) {
      console.log(`  - "${q}" failed: ${err.message}`);
    }
  }
}

// ---------------------------------------------------------------------------
// Channel 4 — code search
// ---------------------------------------------------------------------------

/**
 * Code search finds the files themselves, which surfaces repos that no topic
 * or description would ever reveal. It is also the most fragile channel:
 * 10 requests/minute, a hard 1,000-result ceiling per query, and it rejects
 * some qualifier combinations outright. Sharded by file size to see past the
 * ceiling; failures are logged and skipped rather than aborting the run.
 */
const CODE_QUERIES = [
  'filename:SKILL.md',
  'path:.claude/skills',
  'path:.claude/agents',
  'path:.claude/commands',
  'filename:AGENTS.md',
  'filename:.cursorrules',
  'path:.cursor/rules extension:mdc',
  'filename:.windsurfrules',
  'filename:copilot-instructions.md',
  'filename:marketplace.json path:.claude-plugin',
  'filename:CLAUDE.md',
];

async function channelCodeSearch() {
  if (SKIP_CODE) return console.log('\n[4/4] Code search — skipped (--skip-code)');
  console.log('\n[4/4] Code search (slowest: 10 req/min)');

  for (const base of CODE_QUERIES) {
    for (const size of SIZE_SHARDS) {
      const q = `${base} size:${size}`;
      const id = `code:${q}`;
      if (checkpoint.has(id)) continue;

      try {
        let found = 0;
        for await (const item of searchAll('code', q, { perPage: 100, cap: 1000 })) {
          if (item.repository && addRepo(item.repository, `code:${base}`)) found++;
        }
        console.log(`  - ${q} → +${found} new (total ${repos.size})`);
        checkpoint.mark(id);
      } catch (err) {
        console.log(`  - ${q} failed: ${err.message}`);
      }
    }
  }
}

// ---------------------------------------------------------------------------

async function main() {
  const started = Date.now();
  console.log('=== Stage 1: repository discovery ===');
  await checkToken();
  console.log(`  resuming with ${repos.size} repos already discovered`);

  await channelAwesomeLists();
  await channelTopics();
  await channelTextSearch();
  await channelCodeSearch();

  const all = [...repos.seen];
  const s = stats();
  console.log('\n=== Discovery complete ===');
  console.log(`  unique repos      : ${all.length}`);
  console.log(`  API requests      : ${s.totalRequests}`);
  console.log(`  time spent waiting: ${(s.totalWaitMs / 60000).toFixed(1)}m`);
  console.log(`  elapsed           : ${((Date.now() - started) / 60000).toFixed(1)}m`);
  console.log(`\n  → data/repos.jsonl`);
  console.log('  Next: node scripts/pipeline/harvest.mjs');

  repos.close();
  checkpoint.close();
}

main().catch((err) => {
  console.error('\nFATAL:', err.message);
  repos.close();
  checkpoint.close();
  process.exit(1);
});
