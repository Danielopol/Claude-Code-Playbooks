# Claude Code Cost Optimizer

Audit a project's Claude Code setup for the handful of well-known cost leaks and output a prioritized remediation list. This is a static inspection — no pricing API calls, no guesswork about past spend, just the structural things that quietly inflate per-turn token cost.

## When to Use

- "My Claude Code bill doubled this month — what's going on?"
- "Audit this project for token waste."
- "Why is my session context always huge?"
- A post-mortem after a runaway agent run.

## What to Check

Run each check and record `PASS` / `WARN` / `FAIL` with a short note.

### 1. CLAUDE.md Size

```bash
wc -l CLAUDE.md .claude/CLAUDE.md 2>/dev/null
```

- **PASS:** under 100 lines
- **WARN:** 100–300 lines
- **FAIL:** over 300 lines — this file is prepended to every message, so every line costs tokens on every single turn, forever.

Fix: move reference material (API keys, runbooks, verbose examples) into skill files or `docs/`, and leave CLAUDE.md as a thin pointer to them.

### 2. Memory File Bloat

```bash
find ~/.claude/projects -name 'MEMORY.md' -exec wc -l {} \;
find .claude/memory -type f -exec wc -l {} \; 2>/dev/null
```

- **WARN** if any memory file is over 500 lines.
- **FAIL** if over 1500 lines — memory should be a curated index with links to detail files, not a dump.

Fix: extract old sections into `memory/<topic>.md` detail files and link them from the index.

### 3. Unused or Shadowed Skills

```bash
ls ~/.claude/skills/ .claude/skills/ 2>/dev/null
```

Cross-reference against the skills actually invoked recently (shell history or session logs, if available). A skill that is never invoked but has a large `SKILL.md` body (over ~300 lines) still gets loaded into the skill index every turn — prune it.

### 4. Subagent Fan-Out Patterns

```bash
grep -rn 'TaskCreate\|subagent\|parallel.*agent' --include='*.md' --include='*.js' --include='*.ts' .
```

- **WARN** if the repo spawns more than ~5 parallel subagents per run with no aggregation step — each one spins up its own context window.
- **FAIL** if subagents re-read the whole repo instead of receiving a scoped prompt.

Fix: pass each subagent a short brief plus a handful of specific file paths, not the entire CLAUDE.md context.

### 5. Prompt Cache Hygiene

Look at `.claude/settings.json` for an unusually short cache TTL, or for hooks that invalidate the cache every message (e.g. a hook that echoes a timestamp into the system prompt).

- **FAIL** any hook that injects `date`, `uuidgen`, or otherwise-random content into every turn — it breaks the prompt cache, which can roughly 10x cost.

### 6. Model Selection

```bash
grep -rn 'opus\|sonnet\|haiku' .claude/ CLAUDE.md 2>/dev/null
```

- **WARN** if the most capable (and most expensive) model is pinned for routine tasks a mid-tier model could handle. Recommend a per-task estimate before pinning the top model project-wide.

### 7. Session File Size

```bash
du -sh ~/.claude/projects/*/sessions 2>/dev/null | sort -h | tail -5
```

Large session directories suggest long-running threads that are never compacted. Suggest periodic compaction of long threads.

## Output Format

Print a ranked list — top of the list is the biggest win per unit of effort.

```
Cost Optimizer — <project>

Priority 1 (FAIL)
  [CLAUDE.md]      412 lines — prepended every turn. Extract sections into skills/.
  [cache hygiene]  .claude/settings.json hook injects `date +%s` on SessionStart. Remove it.

Priority 2 (WARN)
  [memory]         MEMORY.md is 820 lines. Index at top, details linked out.
  [model pinning]  Top-tier model pinned in 4 skill files — 2 could drop to a mid-tier model.

Priority 3 (nice-to-have)
  [skills]         3 skills never invoked in the last 30 days.

Estimated impact: roughly halving per-turn overhead — validate with a before/after /cost check.
```

Do not invent dollar savings. You can estimate *relative* impact ("~30% smaller context") but not absolute currency unless the user provides their current bill.

## Example Invocations

- "Audit this project for Claude Code cost waste."
- "My CLAUDE.md feels too big — what should I cut?"
- "Why is my prompt cache missing every turn?"
