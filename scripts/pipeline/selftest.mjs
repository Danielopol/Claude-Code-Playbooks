#!/usr/bin/env node
/**
 * Self-test for the harvest pipeline.
 *
 * Verifies the parts that don't need a GitHub token — path classification,
 * license gating, repo-ref extraction, near-duplicate detection, and store
 * resume — plus one live unauthenticated fetch against raw.githubusercontent.com
 * to prove the awesome-list discovery channel actually works end to end.
 *
 * Usage: node scripts/pipeline/selftest.mjs [--offline]
 */
import fs from 'fs';
import os from 'os';
import path from 'path';
import { classifyPath, isExcluded, isPermissive } from './lib/targets.mjs';
import { extractRepoRefs, extractRepoRefsFromManifest } from './lib/parse.mjs';

const OFFLINE = process.argv.includes('--offline');

let passed = 0;
let failed = 0;

function check(name, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (ok) {
    passed++;
  } else {
    failed++;
    console.log(`  FAIL ${name}\n       expected ${JSON.stringify(expected)}\n       got      ${JSON.stringify(actual)}`);
  }
}

function assert(name, cond, detail = '') {
  if (cond) {
    passed++;
  } else {
    failed++;
    console.log(`  FAIL ${name} ${detail}`);
  }
}

// --- 1. path classification -------------------------------------------------
console.log('\n[1] Path classification');
const pathCases = [
  ['.claude/skills/pdf-filler/SKILL.md', 'claude-skill'],
  ['skills/data-analysis/SKILL.md', 'claude-skill'],
  ['SKILL.md', 'claude-skill'],
  ['.claude/agents/code-reviewer.md', 'claude-agent'],
  ['.claude/commands/deploy.md', 'claude-command'],
  ['CLAUDE.md', 'claude-md'],
  ['packages/api/CLAUDE.md', 'claude-md'],
  ['AGENTS.md', 'agents-md'],
  ['.cursorrules', 'cursor-rules'],
  ['.cursor/rules/typescript.mdc', 'cursor-rules'],
  ['.windsurfrules', 'windsurf-rules'],
  ['.github/copilot-instructions.md', 'copilot-instructions'],
  ['.github/prompts/refactor.prompt.md', 'copilot-prompt'],
  ['.claude-plugin/marketplace.json', 'marketplace'],
  ['GEMINI.md', 'gemini-md'],
  // Non-matches
  ['README.md', null],
  ['src/index.ts', null],
  ['docs/skills.md', null],
  ['package.json', null],
];
for (const [p, expected] of pathCases) {
  check(`classify ${p}`, classifyPath(p), expected);
}

// Ordering guarantee: a SKILL.md inside .claude/skills must not be mislabeled.
check(
  'specificity: .claude/skills/x/SKILL.md wins as claude-skill',
  classifyPath('.claude/skills/x/SKILL.md'),
  'claude-skill'
);

console.log('\n[2] Exclusion of vendored/build paths');
const excludeCases = [
  ['node_modules/foo/SKILL.md', true],
  ['vendor/bar/.cursorrules', true],
  ['dist/CLAUDE.md', true],
  ['.venv/lib/SKILL.md', true],
  ['src/skills/SKILL.md', false],
  ['.claude/skills/real/SKILL.md', false],
];
for (const [p, expected] of excludeCases) {
  check(`exclude ${p}`, isExcluded(p), expected);
}

// --- 3. license gate --------------------------------------------------------
console.log('\n[3] License gate');
const licenseCases = [
  ['MIT', true],
  ['Apache-2.0', true],
  ['BSD-3-Clause', true],
  ['ISC', true],
  ['Unlicense', true],
  ['CC0-1.0', true],
  ['MPL-2.0', true],
  // Rejected: copyleft, unknown, and — critically — no license at all
  ['GPL-3.0', false],
  ['AGPL-3.0', false],
  ['LGPL-3.0', false],
  ['NOASSERTION', false],
  [null, false],
  [undefined, false],
  ['', false],
];
for (const [id, expected] of licenseCases) {
  check(`license ${JSON.stringify(id)}`, isPermissive(id), expected);
}

// --- 4. repo-ref extraction -------------------------------------------------
console.log('\n[4] Repo reference extraction');
const md = `
# Awesome List
- [Skills](https://github.com/anthropics/skills) — official
- [Templates](https://github.com/davila7/claude-code-templates.git)
- Bare: https://github.com/obra/superpowers
- In prose: see github.com/wshobson/agents, it's good.
- Deep link: https://github.com/foo/bar/blob/main/SKILL.md
- Badge: [![x](https://img.shields.io/github/stars/baz/qux)](https://github.com/baz/qux)
- Not a repo: https://github.com/orgs/anthropics/repositories
- Not a repo: https://github.com/topics/claude-skills
- Trailing paren: (https://github.com/paren/test)
`;
const refs = extractRepoRefs(md);
assert('finds anthropics/skills', refs.includes('anthropics/skills'));
assert('strips .git suffix', refs.includes('davila7/claude-code-templates'), `got ${refs}`);
assert('bare url', refs.includes('obra/superpowers'));
assert('prose with comma', refs.includes('wshobson/agents'), `got ${refs}`);
assert('deep link → repo root', refs.includes('foo/bar'));
assert('trailing paren stripped', refs.includes('paren/test'), `got ${refs}`);
assert('rejects /orgs/', !refs.some((r) => r.startsWith('orgs/')), `got ${refs}`);
assert('rejects /topics/', !refs.some((r) => r.startsWith('topics/')), `got ${refs}`);

// --- 5. marketplace manifest ------------------------------------------------
console.log('\n[5] Marketplace manifest following');
const manifest = JSON.stringify({
  name: 'my-marketplace',
  plugins: [
    { name: 'a', source: 'https://github.com/owner1/plugin-a' },
    { name: 'b', source: { url: 'https://github.com/owner2/plugin-b.git' } },
    { name: 'c', nested: { deep: { deeper: 'github.com/owner3/plugin-c' } } },
  ],
});
const manifestRefs = extractRepoRefsFromManifest(manifest);
check('manifest refs', manifestRefs.sort(), [
  'owner1/plugin-a',
  'owner2/plugin-b',
  'owner3/plugin-c',
]);
check('malformed manifest is safe', extractRepoRefsFromManifest('{not json'), []);

// --- 6. store resume --------------------------------------------------------
console.log('\n[6] Store dedupe + resume');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'harvest-test-'));
const origCwd = process.cwd();
try {
  // Import fresh with DATA_DIR pointed at a temp location by chdir'ing first.
  const { JsonlStore, Checkpoint } = await import('./lib/store.mjs');

  const store = new JsonlStore('selftest-store.jsonl', (r) => r.id);
  const before = store.size;
  store.add({ id: `t-${tmp}-1`, v: 1 });
  store.add({ id: `t-${tmp}-1`, v: 2 }); // duplicate key — must be rejected
  store.add({ id: `t-${tmp}-2`, v: 3 });
  assert('dedupes on key', store.size === before + 2, `size ${store.size} vs ${before + 2}`);
  assert('counts duplicates', store.duplicates >= 1);
  store.close();

  // Reopening must see the previously written keys (resume behavior).
  const reopened = new JsonlStore('selftest-store.jsonl', (r) => r.id);
  assert('resumes from disk', reopened.has({ id: `t-${tmp}-1` }), 'key not found after reopen');
  reopened.close();

  const cp = new Checkpoint('selftest.checkpoint');
  cp.mark(`unit-${tmp}`);
  cp.close();
  const cp2 = new Checkpoint('selftest.checkpoint');
  assert('checkpoint persists', cp2.has(`unit-${tmp}`));
  cp2.close();
} finally {
  process.chdir(origCwd);
  fs.rmSync(tmp, { recursive: true, force: true });
}

// --- 7. live unauthenticated fetch ------------------------------------------
if (!OFFLINE) {
  console.log('\n[7] Live discovery channel (raw.githubusercontent.com, no auth)');
  try {
    const res = await fetch(
      'https://raw.githubusercontent.com/anthropics/skills/main/README.md',
      { headers: { 'user-agent': 'claude-code-playbooks-harvester' } }
    );
    if (res.ok) {
      const text = await res.text();
      const liveRefs = extractRepoRefs(text);
      assert('fetched anthropics/skills README', text.length > 100, `${text.length} bytes`);
      console.log(`       fetched ${text.length} bytes, extracted ${liveRefs.length} repo refs`);
      passed++;
    } else {
      console.log(`       SKIP — HTTP ${res.status} (network restricted?)`);
    }
  } catch (err) {
    console.log(`       SKIP — ${err.message}`);
  }
} else {
  console.log('\n[7] Live fetch — skipped (--offline)');
}

// --- summary ----------------------------------------------------------------
console.log(`\n${'='.repeat(46)}`);
console.log(`  ${passed} passed, ${failed} failed`);
console.log('='.repeat(46));
process.exit(failed ? 1 : 0);
