# Ralph Wiggum Autonomous Loop

## What This Is

Ralph is a development methodology based on continuous AI agent loops. As Geoffrey Huntley describes it: **"Ralph is a Bash loop"** — a simple `while true` that repeatedly feeds an agent the same prompt file, letting it iteratively improve its work until completion.

Named after Ralph Wiggum from The Simpsons, embodying persistent iteration despite setbacks.

## How It Works

A Stop hook intercepts the agent's exit attempts:

```
You run ONCE:
  /ralph-loop "Your task description" --completion-promise "DONE"

Then automatically:
  1. Claude works on the task
  2. Claude tries to exit
  3. Stop hook blocks the exit
  4. Stop hook feeds the SAME prompt back
  5. Repeat until completion
```

The loop happens **inside the current session** — no external bash loop needed.

This creates a self-referential feedback loop where:
- The prompt never changes between iterations
- Previous work persists in files
- Each iteration sees the modified files and git history
- The agent improves autonomously by reading its own past work

---

## Usage

```bash
/ralph-loop "<prompt>" --max-iterations <n> --completion-promise "<text>"
```

**Options:**
- `--max-iterations <n>` — stop after N iterations (default: unlimited)
- `--completion-promise <text>` — the exact phrase that signals completion

**Cancel an active loop:**
```bash
/cancel-ralph
```

**Full example:**
```bash
/ralph-loop "Build a REST API for todos. Requirements: CRUD operations, input validation, tests. Output <promise>COMPLETE</promise> when done." --completion-promise "COMPLETE" --max-iterations 50
```

---

## Writing Loop Prompts

The prompt is the entire operator interface. Everything depends on writing it well.

### 1. Clear completion criteria

❌ "Build a todo API and make it good."

✅
```markdown
Build a REST API for todos.

When complete:
- All CRUD endpoints working
- Input validation in place
- Tests passing (coverage > 80%)
- README with API docs
- Output: <promise>COMPLETE</promise>
```

### 2. Incremental goals

❌ "Create a complete e-commerce platform."

✅
```markdown
Phase 1: User authentication (JWT, tests)
Phase 2: Product catalog (list/search, tests)
Phase 3: Shopping cart (add/remove, tests)

Output <promise>COMPLETE</promise> when all phases done.
```

### 3. Self-correction built in

❌ "Write code for feature X."

✅
```markdown
Implement feature X following TDD:
1. Write failing tests
2. Implement feature
3. Run tests
4. If any fail, debug and fix
5. Refactor if needed
6. Repeat until all green
7. Output: <promise>COMPLETE</promise>
```

### 4. Escape hatches

**Always set `--max-iterations`.** It's the primary safety mechanism, not a nicety.

```bash
/ralph-loop "Try to implement feature X" --max-iterations 20
```

And build the stuck case into the prompt itself:

```markdown
After 15 iterations, if not complete:
- Document what's blocking progress
- List what was attempted
- Suggest alternative approaches
```

**Important limitation:** `--completion-promise` uses exact string matching, so you cannot express multiple completion conditions (like "SUCCESS" vs. "BLOCKED"). Rely on `--max-iterations` as the real backstop.

---

## Philosophy

**Iteration > perfection.** Don't aim for perfect on the first try. Let the loop refine the work.

**Failures are data.** "Deterministically bad" means failures are predictable and informative. Use them to tune the prompt.

**Operator skill matters.** Success depends on writing good prompts, not just having a good model.

**Persistence wins.** Keep trying until success. The loop handles retry logic automatically.

---

## When to Use Ralph

**Good for:**
- Well-defined tasks with clear success criteria
- Tasks requiring iteration and refinement — getting tests to pass, chasing down a build error
- Greenfield projects where you can walk away
- Tasks with automatic verification (tests, linters, type checkers)

**Not good for:**
- Tasks requiring human judgment or design decisions
- One-shot operations
- Tasks with unclear success criteria
- Production debugging — use targeted debugging instead

The distinguishing question: **can the loop tell whether it succeeded without you?** If there's no automatic signal, the loop has nothing to iterate against.

---

## Cost and Safety

An unbounded loop bills every iteration. Before starting:

- Set `--max-iterations` — always
- Run in a git repo so each iteration's work is recoverable
- Start with a low iteration cap on a new prompt, review the output, then raise it
- Consider a scratch branch or worktree so a bad loop can't damage main
- Know how to reach `/cancel-ralph`

Reported results from the technique's users include six repositories generated overnight in Y Combinator hackathon testing, a $50k contract completed for $297 in API costs, and an entire programming language built over three months. Your mileage depends heavily on prompt quality.

---

## Learn More

- Original technique: https://ghuntley.com/ralph/
- Ralph Orchestrator: https://github.com/mikeyobrien/ralph-orchestrator
