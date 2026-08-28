#!/usr/bin/env node
/**
 * Stage 3 — corpus report.
 *
 * Answers the only question that matters after a crawl: how many *usable,
 * distinct* playbooks did we actually get, as opposed to raw file count?
 *
 * Raw counts are wildly misleading here. This ecosystem is built on copying:
 * forks, vendored skill directories, and awesome-list mirrors mean the same
 * SKILL.md can appear in dozens of repos. Near-duplicate detection via MinHash
 * is what turns "42,000 files" into a real number.
 *
 * Usage:
 *   node scripts/pipeline/report.mjs
 *   node scripts/pipeline/report.mjs --write-unique   # emit unique.jsonl
 */
import crypto from 'crypto';
import fs from 'fs';
import { readJsonl, dataPath } from './lib/store.mjs';

const args = process.argv.slice(2);
const WRITE_UNIQUE = args.includes('--write-unique');

/**
 * Jaccard similarity above which two documents are treated as the same
 * playbook. This is the single most consequential knob in the pipeline —
 * it decides how many playbooks you actually end up with.
 *
 * Skills in this ecosystem share heavy structural boilerplate ("## Your Role",
 * "## Workflow", "## Output Format"), so two documents on genuinely different
 * subjects can still score 0.7+ on shingle overlap. Lower = fewer, more
 * distinct playbooks. Higher = more playbooks, more near-identical pages.
 *
 *   0.70  aggressive — collapses same-shape docs on different topics
 *   0.85  balanced (default) — collapses real copies, keeps distinct topics
 *   0.95  conservative — near-exact matches only
 *
 * Since thin near-duplicate pages are exactly what scaled-content penalties
 * target, err toward collapsing rather than keeping.
 */
const THRESHOLD = (() => {
  const i = args.indexOf('--threshold');
  const v = i >= 0 && args[i + 1] ? Number(args[i + 1]) : 0.85;
  return Number.isFinite(v) && v > 0 && v <= 1 ? v : 0.85;
})();

// --- MinHash / LSH ---------------------------------------------------------
// Exact-hash dedupe only catches byte-identical copies. Most duplication in
// this corpus is *near* — a copied skill with the project name swapped, or a
// reformatted fork. MinHash estimates Jaccard similarity in linear time; LSH
// banding avoids the O(n^2) all-pairs comparison that would be hopeless here.

const NUM_HASHES = 96;
const BANDS = 24; // 24 bands x 4 rows => catches pairs at ~0.7 similarity
const ROWS = NUM_HASHES / BANDS;

const SEEDS = Array.from({ length: NUM_HASHES }, (_, i) => i * 2654435761 + 1);

function shingles(text, k = 6) {
  const words = text
    .toLowerCase()
    .replace(/```[\s\S]*?```/g, ' ') // code fences vary too much to be signal
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
  const out = new Set();
  for (let i = 0; i + k <= words.length; i++) {
    out.add(words.slice(i, i + k).join(' '));
  }
  return out;
}

function hash32(str, seed) {
  let h = seed >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

function minhash(shingleSet) {
  const sig = new Uint32Array(NUM_HASHES).fill(0xffffffff);
  for (const sh of shingleSet) {
    for (let i = 0; i < NUM_HASHES; i++) {
      const h = hash32(sh, SEEDS[i]);
      if (h < sig[i]) sig[i] = h;
    }
  }
  return sig;
}

function jaccardFromSig(a, b) {
  let same = 0;
  for (let i = 0; i < NUM_HASHES; i++) if (a[i] === b[i]) same++;
  return same / NUM_HASHES;
}

function bandKeys(sig) {
  const keys = [];
  for (let b = 0; b < BANDS; b++) {
    const slice = Array.from(sig.slice(b * ROWS, (b + 1) * ROWS)).join(',');
    keys.push(`${b}:${crypto.createHash('md5').update(slice).digest('hex').slice(0, 16)}`);
  }
  return keys;
}

// ---------------------------------------------------------------------------

function pct(n, total) {
  return total ? `${((n / total) * 100).toFixed(1)}%` : '0%';
}

function table(title, counts, total) {
  console.log(`\n${title}`);
  const rows = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const width = Math.max(...rows.map(([k]) => k.length), 4);
  for (const [k, v] of rows) {
    console.log(`  ${k.padEnd(width)}  ${String(v).padStart(7)}  ${pct(v, total).padStart(7)}`);
  }
}

function main() {
  const corpus = readJsonl('corpus.jsonl');
  const repos = [...readJsonl('repos.jsonl'), ...readJsonl('repos-extra.jsonl')];

  if (!corpus.length) {
    console.error('data/corpus.jsonl is empty. Run discover.mjs then harvest.mjs first.');
    process.exit(1);
  }

  console.log('=== Corpus report ===\n');
  console.log(`  repos discovered : ${new Set(repos.map((r) => r.full_name.toLowerCase())).size}`);
  console.log(`  repos harvested  : ${new Set(corpus.map((c) => c.repo)).size}`);
  console.log(`  files harvested  : ${corpus.length}`);

  const byKind = {};
  const byLicense = {};
  const byConfidence = {};
  for (const c of corpus) {
    byKind[c.kind] = (byKind[c.kind] ?? 0) + 1;
    byLicense[c.license ?? 'NONE'] = (byLicense[c.license ?? 'NONE'] ?? 0) + 1;
    byConfidence[c.confidence ?? 'high'] = (byConfidence[c.confidence ?? 'high'] ?? 0) + 1;
  }
  table('By artifact kind', byKind, corpus.length);
  table('By license', byLicense, corpus.length);
  table('By match confidence', byConfidence, corpus.length);

  // --- exact dedupe --------------------------------------------------------
  const byHash = new Map();
  for (const c of corpus) {
    const h = crypto.createHash('sha1').update(c.content.trim()).digest('hex');
    if (!byHash.has(h)) byHash.set(h, []);
    byHash.get(h).push(c);
  }
  const exactUnique = byHash.size;
  console.log(`\nExact duplicates`);
  console.log(`  distinct contents : ${exactUnique}`);
  console.log(`  redundant copies  : ${corpus.length - exactUnique} (${pct(corpus.length - exactUnique, corpus.length)})`);

  // Keep the highest-starred copy of each identical file.
  const exactReps = [...byHash.values()].map((group) =>
    group.reduce((best, c) => ((c.stars ?? 0) > (best.stars ?? 0) ? c : best))
  );

  // --- near-duplicate dedupe ----------------------------------------------
  console.log(`\nNear-duplicates (MinHash, ${THRESHOLD} Jaccard)`);
  process.stdout.write('  computing signatures...');
  const sigs = exactReps.map((c) => minhash(shingles(c.content)));
  process.stdout.write(' done\n');

  const buckets = new Map();
  sigs.forEach((sig, i) => {
    for (const key of bandKeys(sig)) {
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(i);
    }
  });

  // Union-find over candidate pairs surfaced by LSH banding.
  const parent = exactReps.map((_, i) => i);
  const find = (x) => {
    while (parent[x] !== x) parent[x] = parent[(x = parent[x])];
    return x;
  };
  const union = (a, b) => {
    const ra = find(a);
    const rb = find(b);
    if (ra !== rb) parent[rb] = ra;
  };

  const compared = new Set();
  for (const idxs of buckets.values()) {
    if (idxs.length < 2 || idxs.length > 400) continue; // giant buckets are noise
    for (let i = 0; i < idxs.length; i++) {
      for (let j = i + 1; j < idxs.length; j++) {
        const key = idxs[i] < idxs[j] ? `${idxs[i]},${idxs[j]}` : `${idxs[j]},${idxs[i]}`;
        if (compared.has(key)) continue;
        compared.add(key);
        if (jaccardFromSig(sigs[idxs[i]], sigs[idxs[j]]) >= THRESHOLD) union(idxs[i], idxs[j]);
      }
    }
  }

  const clusters = new Map();
  exactReps.forEach((_, i) => {
    const root = find(i);
    if (!clusters.has(root)) clusters.set(root, []);
    clusters.get(root).push(i);
  });

  const uniqueCount = clusters.size;
  console.log(`  distinct after near-dedupe : ${uniqueCount}`);
  console.log(`  collapsed as near-dupes    : ${exactReps.length - uniqueCount}`);

  // --- headline ------------------------------------------------------------
  const unique = [...clusters.values()].map((idxs) =>
    idxs.map((i) => exactReps[i]).reduce((best, c) => ((c.stars ?? 0) > (best.stars ?? 0) ? c : best))
  );
  const permissive = unique.filter((c) => c.permissive);
  const substantial = permissive.filter((c) => c.bytes >= 800);

  console.log('\n=== Funnel ===');
  console.log(`  harvested files          : ${corpus.length}`);
  console.log(`  after exact dedupe       : ${exactUnique}`);
  console.log(`  after near-dedupe        : ${uniqueCount}`);
  console.log(`  permissively licensed    : ${permissive.length}`);
  console.log(`  substantial (>=800 bytes): ${substantial.length}   <-- convertible playbooks`);

  const topRepos = {};
  for (const c of unique) topRepos[c.repo] = (topRepos[c.repo] ?? 0) + 1;
  const top = Object.entries(topRepos).sort((a, b) => b[1] - a[1]).slice(0, 15);
  console.log('\nTop sources (unique artifacts)');
  for (const [repo, n] of top) console.log(`  ${String(n).padStart(5)}  ${repo}`);

  if (WRITE_UNIQUE) {
    const out = dataPath('unique.jsonl');
    fs.writeFileSync(out, substantial.map((c) => JSON.stringify(c)).join('\n') + '\n');
    console.log(`\n  → data/unique.jsonl (${substantial.length} records, ready for conversion)`);
  } else {
    console.log('\n  Re-run with --write-unique to emit data/unique.jsonl for the conversion stage.');
  }
}

main();
