# Subagent-Driven Development

Execute an implementation plan by dispatching a fresh subagent per task, reviewing each task for spec compliance and code quality as it lands, and running one broad review across the whole branch at the end.

**Why subagents:** delegate each task to an agent with isolated context. Precisely crafted instructions keep it focused and successful — it never inherits your session's history, you construct exactly what it needs. This also preserves your own context for coordination work instead of burning it on implementation detail.

**Core principle:** fresh subagent per task + a task review (spec + quality) after each + one broad final review = high quality, fast iteration.

## When to Use

Use this when you have a real implementation plan, its tasks are mostly independent, and you're staying in the current session. If tasks are tightly coupled, execute manually or go back to planning. If you'd rather hand execution to a separate parallel session, use a plan-execution workflow instead of this in-session one.

Compared to a parallel-session handoff, subagent-driven development stays in the same session (no context switch), dispatches a fresh subagent per task (no context pollution from prior tasks), reviews after each task plus a broad review at the end, and iterates faster because there's no human-in-the-loop pause between tasks.

## Continuous Execution

Don't pause to check in between tasks. Execute all tasks from the plan without stopping. "Should I continue?" prompts and progress summaries waste the time of whoever asked you to execute the plan — they asked for execution, not narration. Between tool calls, narrate at most one short line; a ledger and the tool results carry the actual record.

**Rulings, not stalls.** A running plan does not wait on a human for every fork. Conflicts, ambiguities, plan defects, a cap you'd have asked to exceed — decide them yourself. The spec (if one exists) is the binding authority, the plan is its argument, and your judgment settles what neither answers. Record every such decision as a ruling: what you decided, why, and what it costs if you're wrong. A wrong ruling costs visible, undoable rework; a session parked on a question costs a whole day and buys nothing.

**Only four things actually stop you:**
1. An irreversible or destructive operation.
2. A security-sensitive action.
3. A side effect outside the current workspace that norms say you ask about first (a merge, a push to a shared branch, a publish).
4. A plan so broken that every path forward is a guess.

For those, and only those, stop and ask.

## Setup

Do the work in an isolated workspace (a git worktree or equivalent) — never start implementation directly on a main/protected branch without explicit consent.

**Track progress in a ledger file, not only in your own memory or todos.** Conversation memory does not survive a compaction or a session restart, and a controller that loses its place tends to re-dispatch entire completed task sequences — the single most expensive failure mode in this workflow.

- Give each plan its own workspace directory (e.g. `.workspace/<plan-name>/`, git-ignored) holding the ledger, subagent briefs, and review reports for that plan alone. Never read or write another plan's directory.
- Before starting, check for this plan's ledger. If a task already has a `Task <N>: complete` line, it's done — don't re-dispatch it; resume at the first task without one. A task whose last line is mid-fix-round resumes the loop at the next round.
- Create the ledger with its identity as the first line (e.g. `# Ledger — plan: <plan file path>`).
- Trust the ledger and `git log` over your own recollection after any compaction or restart — the commits it names exist in git even when your context doesn't remember creating them.

Read the plan once, note its constraints, and create a todo per task. If the plan names a spec, read that too — the spec is the authority the plan argues from; conflicts inside the plan resolve against it. A plan with no reachable spec gets a ledger note saying so, and any ruling made without one is provisional.

## The Process

For each task, in order:

1. **Dispatch a fresh implementer subagent** with exactly the context it needs for this one task — the relevant plan section, constraints, and pointers to affected files. It implements, tests, commits, and self-reviews before returning.
2. **If the implementer asks questions**, answer them with the context it's missing, then let it continue.
3. **Generate a review package and dispatch a task reviewer** — a separate fresh subagent whose only job is checking this one task against the plan's spec and code-quality bar. It has not seen the implementation happen; it only sees the diff and the requirement.
4. **If spec and quality are both approved**, append a completion line to the ledger, mark the todo done, and move to the next task.
5. **If not approved, and the finding conflicts with the plan's own text**, rule on the conflict yourself and record the ruling in the ledger before proceeding.
6. **Run a bounded fix loop, capped at 5 rounds.** Rounds 1–3 resume the same implementer subagent with the reviewer's findings. Rounds 4–5 dispatch a fresh implementer, optionally on a more capable model, since the same agent re-trying the same fix twice without success is a signal to change something structural, not just retry.
7. **After each fix round, dispatch a scoped re-review** — the reviewer checks only the specific findings it raised, not the whole diff again.
8. **If all findings are addressed**, complete the task as in step 4.
9. **If round 5 is reached with findings still open**, adjudicate each one yourself: if any is load-bearing (breaks correctness or the spec), rule and continue — stop only if every path forward is a genuine guess. If none is load-bearing, park the remainder in the ledger with your rulings and complete the task anyway; don't let cosmetic disagreement block real progress.

Once every task is complete, dispatch one **final code reviewer** across the whole branch — the broad pass a single-task review can't give, checking cross-task consistency and integration issues. If it raises findings, run exactly one fix dispatch and one scoped re-review, then adjudicate any residuals the same way as the per-task loop. Once that final review is clean, close out the plan: clean up the workspace directory, and follow your project's normal branch-finishing process (PR, merge, whatever applies).

## Tips

- The ledger is the single most important artifact in this workflow — treat writing to it as part of completing a task, not an optional afterthought, because it's the only thing that survives a compaction.
- Resist the urge to skip the task reviewer on "obviously simple" tasks. The review is cheap relative to the cost of a subtly wrong task compounding into three more tasks built on top of it.
- When round 4–5 kicks in, actually switch to a stronger model if one is available — repeating the same approach with the same model rarely breaks the pattern that caused rounds 1–3 to fail.
- A ruling recorded without a reachable spec is provisional — flag it as such in the ledger so a later human review knows exactly which decisions to double-check first.

## Limitations

- Assumes tasks in the plan are genuinely independent enough to implement in isolation — tightly coupled tasks (each depending on live context from the last) fight this model and are better handled by manual, continuous execution.
- The fix-loop cap (5 rounds) is a deliberate circuit breaker, not a guarantee of success — a plan that consistently blows through it on the same task usually has a plan defect, not an implementation problem; treat repeated cap-outs as a signal to revisit the plan itself.
- Best suited to a session with real subagent-dispatch capability (parallel or sequential Task/Agent tooling) — without it, the "fresh subagent per task" isolation this whole approach depends on isn't available.
