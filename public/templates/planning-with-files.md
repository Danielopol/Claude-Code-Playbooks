# Planning with Files

Persistent, file-based planning for multi-step work: keep `task_plan.md`, `findings.md`, and `progress.md` on disk so work survives a context reset, a compaction, or a session restart. Use for any research task, build, or multi-step project needing 5+ tool calls.

## The Core Pattern

```
Context window = RAM (volatile, limited)
Filesystem = disk (persistent, effectively unlimited)

→ Anything important gets written to disk, not just held in context.
```

A context reset or compaction doesn't erase the filesystem. A task tracked only in conversation memory is one compaction away from being re-derived from scratch, or — worse — silently re-done because the agent no longer remembers it already finished.

## When to Use

**Use for:**
- Multi-step tasks (3+ real steps)
- Research tasks
- Building or creating a non-trivial project
- Anything spanning many tool calls
- Any work a compaction or session restart might interrupt

**Skip for:**
- Simple questions
- Single-file edits
- Quick lookups

## The Three Files

| File | Purpose | When to Update |
|---|---|---|
| `task_plan.md` | Phases, progress, decisions | After each phase |
| `findings.md` | Research, discoveries | After any discovery |
| `progress.md` | Session log, test results | Throughout the session |

Create them in a dedicated directory per task (e.g. `.planning/<date>-<task-slug>/`) rather than scattering them at the project root — this keeps multiple in-flight tasks from overwriting each other's state, and makes it obvious at a glance which plan belongs to which effort.

## Critical Rules

### 1. Create the Plan First

Never start a complex task without `task_plan.md`. Non-negotiable — this is the first thing written, before any real work begins.

### 2. The 2-Action Rule

> After every 2 view/browser/search operations, immediately save key findings to `findings.md`.

This prevents visual or multimodal information — a screenshot, a page you browsed — from being lost the moment it scrolls out of context. Nothing persists that content except writing it down.

### 3. Read Before You Decide

Before any major decision, re-read the plan file. This keeps the actual goal in the agent's attention window instead of drifting toward whatever felt urgent three tool calls ago.

### 4. Update After You Act

After completing any phase:
- Mark its status: `in_progress` → `complete`
- Log any errors encountered
- Note which files were created or modified

### 5. Log Every Error

Every error goes in the plan file, in a table:

```markdown
## Errors Encountered
| Error | Attempt | Resolution |
|---|---|---|
| FileNotFoundError | 1 | Created default config |
| API timeout | 2 | Added retry logic |
```

This builds real knowledge across the session and prevents repeating a mistake three tool calls later because it was never written down the first time.

### 6. Never Repeat a Failure

```
if action_failed:
    next_action != same_action
```

Track what's already been tried. Mutate the approach on the next attempt rather than re-running the exact same failing action and hoping.

### 7. Continue After "Completion"

When all planned phases are done but the user requests more work, add new phases (Phase 6, Phase 7, ...) to `task_plan.md`, log a new entry in `progress.md`, and keep going — don't treat the original plan as a ceiling that blocks legitimate follow-up work.

## The 3-Strike Error Protocol

```
ATTEMPT 1: Diagnose & Fix
  → Read the error carefully
  → Identify the root cause
  → Apply a targeted fix

ATTEMPT 2: Alternative Approach
  → Same error again? Try a genuinely different method
  → Different tool, different library, different angle
  → Never repeat the exact same failing action

ATTEMPT 3: Broader Rethink
  → Question the underlying assumptions
  → Search for a different class of solution
  → Consider whether the plan itself needs updating

AFTER 3 FAILURES: Escalate to the user
  → Explain what was tried, in order
  → Share the specific error
  → Ask for guidance rather than attempt a 4th variation alone
```

## Read vs. Write Decision Matrix

| Situation | Action | Reason |
|---|---|---|
| Just wrote a file | Don't re-read it | Content is still in context |
| Viewed an image or PDF | Write findings now | Multimodal content doesn't persist — capture it as text before it's gone |
| Browser returned data | Write it to a file | A screenshot's content doesn't survive past the current turn |
| Starting a new phase | Read the plan and findings | Re-orient if context has gone stale |
| An error occurred | Read the relevant file | Need current state to actually fix it |
| Resuming after a gap | Read all three planning files | Recover full state before acting |

## The 5-Question Reboot Test

If these five questions can all be answered from the files on disk, context management is solid — this is worth running as a self-check after any compaction or session restart:

| Question | Answer Source |
|---|---|
| Where am I? | Current phase in `task_plan.md` |
| Where am I going? | Remaining phases |
| What's the goal? | Goal statement in the plan |
| What have I learned? | `findings.md` |
| What have I done? | `progress.md` |

## Parallel Tasks

For independent tasks in the same repository, give each its own dedicated planning directory (e.g. `.planning/2026-09-15-backend-refactor/` and `.planning/2026-09-15-incident-investigation/`) and keep each session pinned to its own directory for the duration of that task — don't let a second, unrelated task's session read or write into the first task's files. If multiple agents are genuinely collaborating on *one* task, designate a single orchestrator as the plan owner; other workers report through their own ledgers rather than independently rewriting the shared plan file.

## Tips

- Writing to `findings.md` is cheap; losing a discovery because it wasn't written down before the context that produced it scrolled away is expensive — err toward writing more, not less.
- The 3-strike protocol's real value is forcing a genuinely different approach on attempt 2, not just a more careful retry of attempt 1 — if attempt 2 looks like attempt 1 with extra caution, it doesn't count.
- Treat "continue after completion" (rule 7) as the default, not an edge case — real projects rarely end exactly where the original plan predicted, and the planning files should grow with the actual scope, not lock it in.

## Limitations

- This is a pattern for a single agent (or a small, coordinated set) working a bounded task — it's not a replacement for a team-facing project tracker or issue system.
- The three-file structure is a starting point, not a rigid schema — adapt file names and structure to what the actual task needs; forcing an awkward fit wastes the pattern's value.
- Works best when the agent actually has persistent filesystem access across the session — in a fully ephemeral or sandboxed environment with no disk persistence between turns, the core "context window = RAM, filesystem = disk" premise doesn't hold.
