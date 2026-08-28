#!/usr/bin/env node
/**
 * Health check for the hardcoded discovery seeds.
 *
 * Seed repos get renamed, archived, and deleted. A dead entry doesn't error —
 * it silently removes a whole branch of the discovery graph, and you only
 * notice as a smaller corpus weeks later. Run this before a big crawl.
 *
 * Uses raw.githubusercontent.com only, so it needs no token and consumes no
 * API budget.
 *
 * Usage: node scripts/pipeline/verify-sources.mjs
 */
import { AWESOME_LISTS, SEED_REPOS } from './lib/targets.mjs';
import { extractRepoRefs } from './lib/parse.mjs';

async function tryFetch(owner, repo, branch, file) {
  const branches = [branch, branch === 'main' ? 'master' : 'main'];
  for (const br of branches) {
    for (const f of [file, file.toLowerCase(), 'README.md', 'readme.md']) {
      try {
        const res = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/${br}/${f}`);
        if (res.ok) return { branch: br, file: f, text: await res.text() };
      } catch {
        /* try next */
      }
    }
  }
  return null;
}

const dead = [];
const allRefs = new Set();

console.log('=== Awesome lists ===');
for (const [owner, repo, branch, file, weight = 'high'] of AWESOME_LISTS) {
  const hit = await tryFetch(owner, repo, branch, file);
  const label = `${owner}/${repo}`.padEnd(44);
  if (!hit) {
    dead.push(`AWESOME_LISTS: ${owner}/${repo}`);
    console.log(`  DEAD ${label} (${weight})`);
    continue;
  }
  const refs = extractRepoRefs(hit.text);
  refs.forEach((r) => allRefs.add(r));
  const drift =
    hit.branch !== branch || hit.file !== file ? `  <- actually ${hit.branch}/${hit.file}` : '';
  console.log(
    `  OK   ${label} ${String(hit.text.length).padStart(8)}b ${String(refs.length).padStart(5)} refs  (${weight})${drift}`
  );
}

console.log('\n=== Seed repos ===');
for (const [owner, repo] of SEED_REPOS) {
  const hit = await tryFetch(owner, repo, 'main', 'README.md');
  const label = `${owner}/${repo}`.padEnd(44);
  if (!hit) {
    dead.push(`SEED_REPOS: ${owner}/${repo}`);
    console.log(`  DEAD ${label}`);
  } else {
    console.log(`  OK   ${label} ${String(hit.text.length).padStart(8)}b`);
  }
}

console.log(`\n${'='.repeat(60)}`);
console.log(`  unique repos reachable from seeds alone: ${allRefs.size}`);
console.log(`  dead sources: ${dead.length}`);
if (dead.length) {
  console.log('\n  Fix or remove these in lib/targets.mjs:');
  for (const d of dead) console.log(`    - ${d}`);
}
console.log('='.repeat(60));

process.exit(dead.length ? 1 : 0);
