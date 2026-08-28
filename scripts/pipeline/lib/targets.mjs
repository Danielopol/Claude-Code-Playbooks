/**
 * What the harvester is looking for, and where it looks.
 *
 * The unit of value is "a file containing reusable instructions for an AI
 * coding agent". Claude's SKILL.md is the canonical form, but the same content
 * shows up under a dozen other filenames across the Cursor / Windsurf / Copilot
 * / Cline ecosystems, and all of it converts to a CLAUDE.md playbook. Limiting
 * to SKILL.md alone leaves the large majority of the corpus on the table.
 */

/**
 * Path matchers, most-specific first. `kind` is carried through the corpus so
 * the conversion stage can prompt differently per source format.
 *
 * Ordering matters: a file matches the first rule that accepts it, so
 * `.claude/skills/foo/SKILL.md` is tagged `claude-skill`, not `agents-md`.
 */
export const FILE_RULES = [
  // --- Claude Code native -------------------------------------------------
  { kind: 'claude-skill', test: (p) => /(^|\/)SKILL\.mdx?$/i.test(p) },
  { kind: 'claude-skill', test: (p) => /(^|\/)\.claude\/skills\/.+\.mdx?$/i.test(p) },
  { kind: 'claude-agent', test: (p) => /(^|\/)\.claude\/agents\/.+\.mdx?$/i.test(p) },
  { kind: 'claude-command', test: (p) => /(^|\/)\.claude\/commands\/.+\.mdx?$/i.test(p) },
  { kind: 'claude-md', test: (p) => /(^|\/)CLAUDE\.md$/i.test(p) },

  // --- Plugin / marketplace manifests (followed, not converted) -----------
  { kind: 'marketplace', test: (p) => /(^|\/)\.claude-plugin\/marketplace\.json$/i.test(p) },
  { kind: 'plugin-manifest', test: (p) => /(^|\/)\.claude-plugin\/plugin\.json$/i.test(p) },

  // --- Cross-tool agent instructions --------------------------------------
  { kind: 'agents-md', test: (p) => /(^|\/)AGENTS\.md$/i.test(p) },
  { kind: 'cursor-rules', test: (p) => /(^|\/)\.cursorrules$/i.test(p) },
  { kind: 'cursor-rules', test: (p) => /(^|\/)\.cursor\/rules\/.+\.mdc$/i.test(p) },
  { kind: 'windsurf-rules', test: (p) => /(^|\/)\.windsurfrules$/i.test(p) },
  { kind: 'windsurf-rules', test: (p) => /(^|\/)\.windsurf\/rules\/.+\.md$/i.test(p) },
  { kind: 'copilot-instructions', test: (p) => /(^|\/)\.github\/copilot-instructions\.md$/i.test(p) },
  { kind: 'copilot-prompt', test: (p) => /(^|\/)\.github\/prompts\/.+\.prompt\.md$/i.test(p) },
  { kind: 'cline-rules', test: (p) => /(^|\/)\.clinerules(\/.+\.md)?$/i.test(p) },
  { kind: 'roo-rules', test: (p) => /(^|\/)\.roo(rules|\/rules\/.+\.md)$/i.test(p) },
  { kind: 'gemini-md', test: (p) => /(^|\/)GEMINI\.md$/i.test(p) },
  { kind: 'codex-md', test: (p) => /(^|\/)\.codex\/.+\.mdx?$/i.test(p) },
  { kind: 'continue-rules', test: (p) => /(^|\/)\.continue\/rules\/.+\.md$/i.test(p) },

  // --- Convention-based collections (lower confidence) --------------------
  // The densest sources don't use the .claude/ prefix at all. Notably
  // davila7/claude-code-templates keeps hundreds of agents and commands under
  // cli-tool/components/{agents,commands}/*.md — a layout the rules above miss
  // entirely. These broader patterns recover that material at the cost of some
  // false positives (a docs/commands/ CLI reference will match), which the
  // quality floor and dedupe stages are already there to remove. Tagged
  // distinctly so the conversion stage can apply stricter screening.
  { kind: 'agent-collection', test: (p) => /(^|\/)agents?\/[^/]+\.mdx?$/i.test(p) },
  { kind: 'command-collection', test: (p) => /(^|\/)commands?\/[^/]+\.mdx?$/i.test(p) },
  { kind: 'skill-collection', test: (p) => /(^|\/)skills?\/[^/]+\.mdx?$/i.test(p) },
  { kind: 'prompt-collection', test: (p) => /(^|\/)prompts?\/[^/]+\.mdx?$/i.test(p) },
  { kind: 'rules-collection', test: (p) => /(^|\/)rules\/[^/]+\.(md|mdc)$/i.test(p) },
];

/**
 * Kinds recovered by convention rather than an explicit tool-specific path.
 * Higher false-positive rate — the conversion stage should hold these to a
 * stricter quality bar than the tool-native kinds.
 */
export const LOW_CONFIDENCE_KINDS = new Set([
  'agent-collection',
  'command-collection',
  'skill-collection',
  'prompt-collection',
  'rules-collection',
]);

/** Manifests we parse for onward discovery rather than convert into playbooks. */
export const MANIFEST_KINDS = new Set(['marketplace', 'plugin-manifest']);

export function classifyPath(p) {
  for (const rule of FILE_RULES) {
    if (rule.test(p)) return rule.kind;
  }
  return null;
}

/**
 * Paths that match a rule but are noise: vendored dependencies, build output,
 * test fixtures, and the harvester's own corpus if anyone ever points it at
 * this repo. Checked before classifyPath to avoid wasting content fetches.
 */
const EXCLUDE = [
  /(^|\/)node_modules\//i,
  /(^|\/)vendor\//i,
  /(^|\/)\.git\//i,
  /(^|\/)dist\//i,
  /(^|\/)build\//i,
  /(^|\/)\.next\//i,
  /(^|\/)coverage\//i,
  /(^|\/)__tests__\//i,
  /(^|\/)fixtures?\//i,
  /(^|\/)testdata\//i,
  /(^|\/)examples?\/.*\/node_modules\//i,
  /(^|\/)site-packages\//i,
  /(^|\/)\.venv\//i,
];

export function isExcluded(p) {
  return EXCLUDE.some((re) => re.test(p));
}

/**
 * SPDX ids we treat as safe to redistribute with attribution.
 *
 * Deliberately excludes copyleft (GPL/AGPL/LGPL) and — critically — repos with
 * NO license, which GitHub reports as null. A repo without a LICENSE file is
 * "all rights reserved" by default, regardless of it being publicly readable.
 */
export const PERMISSIVE_LICENSES = new Set([
  'mit',
  'mit-0',
  'apache-2.0',
  'bsd-2-clause',
  'bsd-3-clause',
  'bsd-3-clause-clear',
  'isc',
  'unlicense',
  'cc0-1.0',
  'cc-by-4.0',
  '0bsd',
  'mpl-2.0',
  'zlib',
  'wtfpl',
  'artistic-2.0',
  'postgresql',
  'ncsa',
]);

export function isPermissive(spdxId) {
  if (!spdxId) return false;
  const id = String(spdxId).toLowerCase();
  if (id === 'noassertion' || id === 'other') return false;
  return PERMISSIVE_LICENSES.has(id);
}

/**
 * GitHub topics that reliably surface repos in this ecosystem.
 * Each becomes its own sharded repo-search query.
 */
export const TOPICS = [
  'claude-skills',
  'claude-skill',
  'claude-code',
  'claude-code-plugin',
  'claude-code-skills',
  'claude-code-agents',
  'claude-code-commands',
  'claude-plugin',
  'claude-agents',
  'claude-md',
  'agent-skills',
  'anthropic-skills',
  'anthropic-claude',
  'awesome-claude-code',
  'cursorrules',
  'cursor-rules',
  'awesome-cursorrules',
  'cursor-ai',
  'windsurf-rules',
  'copilot-instructions',
  'github-copilot-instructions',
  'agents-md',
  'ai-rules',
  'llm-instructions',
  'ai-coding-assistant',
  'cline-rules',
  'roocode',
];

/** Free-text repo searches for repos that never bothered with topics. */
export const REPO_QUERIES = [
  'claude skills',
  'claude code skills',
  'claude code plugin',
  'claude code templates',
  'claude code subagents',
  'claude code commands',
  'awesome claude',
  'claude.md collection',
  'skill.md',
  'agent skills',
  'cursorrules',
  'cursor rules collection',
  'windsurf rules',
  'copilot instructions',
  'agents.md',
  'ai coding rules',
  'llm agent prompts',
];

/**
 * Curated aggregators. These are markdown files that link to hundreds of repos
 * each — the cheapest discovery channel available, since a single raw fetch
 * yields a large seed set and costs nothing against any rate limit.
 */
/**
 * Every entry below was verified reachable. Dead seeds are worse than useless:
 * they burn a request and silently drop a whole branch of the graph, so this
 * list is checked by `npm run pipeline:verify` rather than trusted.
 *
 * `weight` reflects on-target density, not size. The MCP-server lists are
 * enormous (3,300+ repo refs between them) but are mostly protocol servers
 * rather than instruction sets — worth crawling only after the high-signal
 * sources are exhausted, since each ref costs a tree call from the core budget.
 */
export const AWESOME_LISTS = [
  // High signal — Claude-native skill/agent/command collections
  ['hesreallyhim', 'awesome-claude-code', 'main', 'README.md', 'high'],
  ['hesreallyhim', 'awesome-claude-code-agents', 'main', 'README.md', 'high'],
  ['ComposioHQ', 'awesome-claude-skills', 'master', 'README.md', 'high'],
  ['VoltAgent', 'awesome-claude-code-subagents', 'main', 'README.md', 'high'],
  ['zebbern', 'claude-code-guide', 'main', 'README.md', 'high'],
  ['Njengah', 'claude-code-cheat-sheet', 'main', 'README.md', 'high'],
  ['anthropics', 'knowledge-work-plugins', 'main', 'README.md', 'high'],

  // High signal — cross-tool rule collections
  ['PatrickJS', 'awesome-cursorrules', 'main', 'README.md', 'high'],
  ['kinopeee', 'cursorrules', 'main', 'README.md', 'high'],
  ['sanjeed5', 'awesome-cursor-rules-mdc', 'main', 'README.md', 'high'],
  ['pontusab', 'directories', 'main', 'README.md', 'high'],
  ['ichoosetoaccept', 'awesome-windsurf', 'main', 'README.md', 'high'],
  ['SchneiderSam', 'awesome-windsurfrules', 'main', 'README.md', 'high'],
  ['github', 'awesome-copilot', 'main', 'README.md', 'high'],
  ['steipete', 'agent-rules', 'main', 'README.md', 'high'],
  ['dontriskit', 'awesome-ai-system-prompts', 'main', 'README.md', 'high'],

  // Lower signal — adjacent ecosystems, huge but mostly off-target.
  // Skipped unless --include-adjacent is passed to discover.mjs.
  ['e2b-dev', 'awesome-ai-agents', 'main', 'README.md', 'low'],
  ['wong2', 'awesome-mcp-servers', 'main', 'README.md', 'low'],
  ['punkpeye', 'awesome-mcp-servers', 'main', 'README.md', 'low'],
];

/**
 * Repos known to contain large numbers of skills. Seeded explicitly because
 * a single one of these can yield hundreds of artifacts, and several rank
 * poorly in topic search despite being the densest sources available.
 */
export const SEED_REPOS = [
  ['anthropics', 'skills'],
  ['anthropics', 'claude-code'],
  ['anthropics', 'knowledge-work-plugins'],
  ['anthropics', 'claude-cookbooks'],
  ['davila7', 'claude-code-templates'],
  ['obra', 'superpowers'],
  ['wshobson', 'agents'],
  ['wshobson', 'commands'],
  ['VoltAgent', 'awesome-claude-code-subagents'],
  ['ComposioHQ', 'awesome-claude-skills'],
  ['iannuttall', 'claude-agents'],
  ['hesreallyhim', 'awesome-claude-code'],
  ['centminmod', 'my-claude-code-setup'],
  ['Leonxlnx', 'taste-skill'],
  ['PatrickJS', 'awesome-cursorrules'],
  ['sanjeed5', 'awesome-cursor-rules-mdc'],
  ['pontusab', 'directories'],
  ['github', 'awesome-copilot'],
  ['zebbern', 'claude-code-guide'],
  ['bmadcode', 'BMAD-METHOD'],
  ['snarktank', 'ai-dev-tasks'],
];

/** Star buckets used to shard past the 1,000-result-per-query search ceiling. */
export const STAR_SHARDS = [
  '>=1000',
  '500..999',
  '200..499',
  '100..199',
  '50..99',
  '25..49',
  '12..24',
  '6..11',
  '3..5',
  '2',
  '1',
  '0',
];

/** Byte-size shards for code search, same purpose as STAR_SHARDS. */
export const SIZE_SHARDS = [
  '<500',
  '500..1500',
  '1500..3000',
  '3000..6000',
  '6000..12000',
  '12000..25000',
  '>25000',
];
