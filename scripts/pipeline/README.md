# Harvest pipeline

Crawls GitHub for reusable AI-agent instruction files and produces a deduplicated
corpus ready for conversion into playbooks.

**This stage does not write anything into the site.** It only produces JSONL in
`scripts/pipeline/data/` (gitignored). Conversion is a separate pipeline.

## Setup

A GitHub token is required. Unauthenticated crawling is capped at 60 requests/hour,
which is unusable at this scale; authenticated gives 5,000/hour.

Create one at https://github.com/settings/tokens with **public repo read access
only** — no write scopes are needed.

```bash
export GITHUB_TOKEN=ghp_xxxxxxxxxxxx      # bash
$env:GITHUB_TOKEN="ghp_xxxxxxxxxxxx"      # PowerShell
```

## Running it

```bash
npm run pipeline:verify      # check the hardcoded seeds are still alive (no token needed)
npm run pipeline:test        # unit tests for classification/dedupe (no token needed)

npm run pipeline:discover    # stage 1 → data/repos.jsonl
npm run pipeline:harvest     # stage 2 → data/corpus.jsonl
npm run pipeline:report      # stage 3 → funnel + dedupe stats
```

Every stage is **resumable**. Interrupt with Ctrl-C and re-run; completed work is
checkpointed and skipped. This matters — a full crawl runs for hours.

### Quick smoke test before committing to a full run

```bash
node scripts/pipeline/discover.mjs --skip-code --max-pages 1
node scripts/pipeline/harvest.mjs --limit 25
node scripts/pipeline/report.mjs
```

## How it works

### Stage 1 — discover (`discover.mjs`)

Four independent channels, deliberately not interdependent. GitHub's code search
API is the richest source but also the most restricted (10 req/min, rejects some
qualifier combinations); if it fails entirely the other three still produce a
usable corpus.

| Channel | Cost | Notes |
|---|---|---|
| Awesome lists | free | Unauthenticated raw fetches. ~3,900 repos before spending any API quota. |
| Seed repos | cheap | Hand-picked high-density sources. |
| Topic + text search | 30 req/min | Sharded by star count to see past the 1,000-result cap. |
| Code search | 10 req/min | Finds files directly; sharded by file size. |

**The 1,000-result ceiling is the thing to understand.** Every GitHub search
query returns at most 1,000 results no matter how many matches exist. A query
with 40,000 matches silently returns 1,000. The only way past it is sharding the
same query along an orthogonal axis (`stars:`, `size:`) and unioning the results.

Flags: `--skip-code`, `--skip-search`, `--include-adjacent`, `--max-pages N`

### Stage 2 — harvest (`harvest.mjs`)

For each repo: **one** `git/trees?recursive=1` call returns the entire file
listing. Matching paths are then fetched from `raw.githubusercontent.com`, which
does **not** consume the 5,000/hr core budget.

That split is what makes this feasible. The binding constraint is ~5,000
repos/hour; files-per-repo is nearly free — exactly the right shape, since the
highest-value sources are mega-repos holding hundreds of skills each.

Marketplace manifests (`.claude-plugin/marketplace.json`) are parsed for onward
repo references and queued mid-run, so discovery continues during harvest.

Flags: `--all-licenses`, `--limit N`, `--concurrency N`

### Stage 3 — report (`report.mjs`)

Raw file counts are misleading. This ecosystem runs on copying — forks, vendored
skill directories, awesome-list mirrors — so the same SKILL.md appears in dozens
of repos. Two passes:

1. **Exact** — SHA-1 over trimmed content.
2. **Near** — MinHash + LSH banding, O(n) rather than O(n²).

`--threshold` is the most consequential knob in the pipeline. Skills share heavy
structural boilerplate (`## Your Role`, `## Workflow`, `## Output Format`), so
two documents on completely different subjects can still score 0.7+ on shingle
overlap.

| Threshold | Behavior |
|---|---|
| 0.70 | Aggressive — collapses same-shape docs on different topics |
| **0.85** | **Default** — collapses real copies, keeps distinct topics |
| 0.95 | Conservative — near-exact matches only |

Since thin near-duplicate pages are precisely what scaled-content penalties
target, err toward collapsing.

```bash
node scripts/pipeline/report.mjs --threshold 0.85 --write-unique
```

## What gets collected

Claude-native: `SKILL.md`, `.claude/skills/`, `.claude/agents/`,
`.claude/commands/`, `CLAUDE.md`

Cross-tool: `AGENTS.md`, `.cursorrules`, `.cursor/rules/*.mdc`, `.windsurfrules`,
`.github/copilot-instructions.md`, `.github/prompts/*.prompt.md`, `.clinerules`,
`GEMINI.md`, `.continue/rules/`

Convention-based (tagged `confidence: "low"`): `**/agents/*.md`,
`**/commands/*.md`, `**/skills/*.md`, `**/prompts/*.md`, `**/rules/*.md`

That last group exists because the densest sources don't use the `.claude/`
prefix at all — `davila7/claude-code-templates` keeps hundreds of agents under
`cli-tool/components/agents/`. Broad patterns recover that material at the cost
of some false positives, which the quality floor and dedupe remove. Conversion
should hold `confidence: "low"` records to a stricter bar.

## Licensing

Default is **permissive only**: MIT, Apache-2.0, BSD, ISC, MPL-2.0, CC0,
Unlicense, and similar.

Repos with **no license** are excluded. A public repo without a LICENSE file is
"all rights reserved" by default — being publicly readable is not permission to
redistribute. `--all-licenses` overrides this, but read it as a deliberate legal
decision rather than a tuning flag.

Every corpus record keeps `license`, `source_url`, and `repo_url` so downstream
playbooks can carry attribution.

## Output

`data/corpus.jsonl` — one record per harvested file:

```jsonc
{
  "repo": "anthropics/skills",
  "path": "document-skills/pdf/SKILL.md",
  "kind": "claude-skill",
  "confidence": "high",
  "title": "PDF Processing",
  "description": "...",
  "frontmatter": { "name": "pdf", "description": "..." },
  "content": "# PDF Processing\n\n## Your Role\n...",
  "bytes": 4213,
  "stars": 1200,
  "license": "MIT",
  "permissive": true,
  "source_url": "https://github.com/anthropics/skills/blob/main/document-skills/pdf/SKILL.md",
  "repo_url": "https://github.com/anthropics/skills"
}
```

`data/unique.jsonl` (with `--write-unique`) — deduplicated, permissive,
substantial records only. This is the conversion stage's input.

## Expected throughput

| Phase | Duration | Bound by |
|---|---|---|
| Discovery | 1–3 h | Search rate limits |
| Harvest | 3–10 h | 5,000 repos/hr core budget |
| Report | 1–5 min | Local CPU (MinHash) |

Run it overnight. Everything is resumable, so an interrupted run costs nothing
but the time already spent.
