# Autonomous Skill Optimizer

Evaluate and iteratively improve `SKILL.md` files using a 9-dimension quality rubric, validation-gated editing, and human-in-the-loop checkpoints. Combines an evaluation methodology inspired by Microsoft Research's SkillLens rubric and SkillOpt's validation-gated design with a core insight from controlled testing: absolute LLM-judge scores are too noisy for keep/revert decisions, but the same judge comparing two versions side by side in one call is reliable.

**Core loop:** evaluate → improve → test → human confirms → keep or revert → repeat.

## Why Not Pure Structural Review

The difference from a plain structural lint: it doesn't just check whether the SKILL.md is written to spec — it checks whether the skill's actual real-world output, tested with and without the skill loaded, is measurably better.

## The 9-Dimension Rubric (100 Points)

Grounded in the empirical finding that LLM-as-judge evaluation of skill quality is only about 46% accurate on its own — close to random — and rises to about 74% once three "meta-skill" dimensions (failure-mode coverage, explicit checkpoints, an anti-pattern blacklist) are added. This rubric weights those three dimensions accordingly.

### Structural Dimensions (59 pts) — Static Analysis

| # | Dimension | Weight | Scoring criteria |
|---|---|---|---|
| 1 | Frontmatter quality | 7 | Proper `name`; description states what it does, when to use it, and trigger words; ≤1024 characters; no vague closing filler like "apply flexibly as needed" |
| 2 | Workflow clarity | 12 | Steps are explicit, numbered, executable, each with a clear input/output |
| 3 | Failure-mode coverage | 12 | Explicitly encodes "if X fails → Y" branches with fallback/recovery paths; a skill that only describes the happy path loses at least 3 points here |
| 4 | Checkpoint design | 6 | Real user-confirmation gates before key decisions, visibly marked (🔴/STOP/CHECKPOINT) — soft phrasing like "you might want to..." doesn't count |
| 5 | Actionable specificity | 18 | Concrete parameters, formats, and examples, not vague; hedging language ("consider," "as appropriate," "use judgment") appearing 3+ times loses at least 3 points |
| 6 | Resource integration | 4 | References to scripts/assets/other files are correct and reachable |

### Effectiveness Dimensions (35 pts) — Requires Real Testing

| # | Dimension | Weight | Scoring criteria |
|---|---|---|---|
| 7 | Overall architecture | 12 | Clear structure, no redundancy or gaps, internally consistent; generic filler phrases lose 1 point per occurrence |
| 8 | Real-world performance | 23 | Run 2–3 test prompts through the skill and score output quality against what the skill claims to do |

### Meta-Skill Dimension (6 pts) — Anti-Patterns and Blacklist

| # | Dimension | Weight | Scoring criteria |
|---|---|---|---|
| 9 | Anti-patterns and blacklist | 6 | The skill must have an explicit "don't do X" list; only positive instructions with no negative examples loses at least 3 points; red flags/anti-patterns should be their own labeled section |

**Scoring**: dimensions 1–7 and 9 each score 1–10, multiplied by weight; dimension 8 (real-world performance) scores 1–10 from actually running 2–3 test prompts. Total = Σ(dimension score × weight) / 10, out of 100.

**Critical caveat**: absolute total scores are for triage only — deciding which skill is weakest and should be worked on first — never for a keep/revert decision. In controlled testing, re-scoring the exact same unmodified text with a different judge swung the total by as much as 8 points; a skill that only gained three 🔴 checkpoint characters scored 8.5 points *lower* on a single re-judge, purely from judge calibration drift, not real regression. Keep/revert decisions always use the paired comparison in Phase 2, never a re-run of the absolute score.

## Runtime Neutrality Gate (Independent of the 9 Dimensions)

A skill should work across every skills-compatible agent runtime it might be installed into — otherwise phrasing like "in Claude Code" or "Claude Code skill" gets an unrelated agent runtime to reject it outright as "not meant for me," even when the actual instructions are perfectly general.

Run this scan once during baseline evaluation:

```bash
grep -nE "(for Claude Code|Claude Code skill|Claude Code user|Cursor only|in Codex|~/\.claude/skills/[a-z]|/plugin install\b)" SKILL.md README.md 2>/dev/null
```

A non-empty result is a candidate red flag — but read the matched line's context before acting on it. False positives include: the grep pattern's own text appearing in documentation, a line explicitly citing the anti-pattern as an example of what to avoid, or a meta-statement explaining this very rule. Only an actual instructional use ("this skill only works in Claude Code") counts as a real hit. A confirmed hit forces the first optimization round to be a P0 runtime-neutrality fix.

**Allowed exceptions** — these are legitimate and not red flags: frontmatter trigger words, references to other skill names within the same internal ecosystem, an explicitly labeled runtime-specific section, or a commit message.

## The Optimization Loop

### Phase 0: Initialize

1. Confirm scope — all skills in a directory, or a user-specified list.
2. Create a working branch for the optimization run.
3. Initialize (or read) a results log tracking every prior round's decision.

### Phase 0.5: Design Test Prompts

Before any scoring, design 2–3 test prompts per skill — this step is mandatory, since without test prompts, dimension 8 (real-world performance) simply can't be scored. Cover the most typical use case (happy path) and one moderately complex or ambiguous case. Save them per skill, alongside a short description of the expected output for each. Show all test prompts to the user and get confirmation before scoring begins — the quality of these prompts determines whether the whole optimization is aimed correctly.

### Phase 1: Baseline Evaluation (Triage Only)

For each skill in scope:

1. **Structural scoring** — read the full SKILL.md, score dimensions 1–7 and 9 with a brief rationale each.
2. **Effectiveness scoring** — for each test prompt, spawn an independent sub-agent to run it with the skill loaded, and another to run the same prompt as a baseline without the skill. Compare the two outputs to score dimension 8.
3. If sub-agents aren't available (timeout, environment limits), score dimension 8 via a dry-run: read the skill and mentally simulate the test prompt's execution, noting this as a dry run rather than skipping the dimension entirely — a simulated pass is still better than not looking at effectiveness at all. If dry runs make up more than roughly 30% of all scored skills, flag the whole evaluation as lower-confidence.
4. Sum the weighted total per skill and present a scorecard (skill, score, weakest structural dimension, weakest effectiveness dimension).

**Checkpoint — stop and wait for user confirmation before entering the optimization loop.**

### Phase 2: Optimization Loop

Once confirmed, sort by baseline score ascending and optimize the weakest skills first. For each skill, up to a maximum number of rounds (default 3):

**Step 1 — Diagnose.** Find the dimension with the largest *weighted* gap: `weighted_gap = weight × (10 - score) / 10`. Use the weighted gap, not the raw lowest score — a low-weight dimension with a big raw gap can look like the priority while a high-weight dimension with a smaller raw gap is actually worth far more total score. When weighted gaps are close (within about 1.0 on the same scale), fall back to raw-score ascending. Watch for correlated dimension clusters (workflow clarity, failure-mode coverage, and checkpoint design tend to move together) — check the whole cluster before deciding whether a fix should touch more than one dimension.

**Step 2 — Propose one specific improvement** for that dimension: what changes (which paragraph/line), why (which rubric criterion it addresses), and the expected point gain.

**Step 3 — Execute the edit** and commit it with a message summarizing the change.

**Step 4 — Paired re-evaluation, not absolute re-scoring.** Spawn an odd number of independent judges (default 3, raise to 5 for a close call). Each judge reads *both* versions — the previous kept version and the new working version — within the same call, and returns `better` / `worse` / `tie` with a confidence margin (`clear`/`slight`) and one sentence of reasoning, judged as a head-to-head comparison against the 9-dimension rubric, never as two separate absolute scores. This within-judge comparison is what makes it reliable: the same judge's calibration quirks apply equally to both versions it's comparing, so they cancel out — which is exactly the mechanism that fails when comparing two *separately generated* absolute scores.

**Step 5 — Decide by majority vote**, not by "new total > old total": if the number of judges voting `better` (including ties) is at least the number voting `worse`, **keep** the change. If a genuine majority votes `worse`, **revert** the change with a new commit (never a hard reset) and log the vote count and stated reasoning. A negative delta on a single absolute re-score is *not* itself a revert signal — only a real paired-majority `worse` verdict is, because a single-judge score swing is exactly the ±8 noise this whole design exists to filter out.

**Stopping early**: if two consecutive rounds both get a majority verdict of `tie` or `slight` improvement, stop optimizing that skill and move to the next one — chasing marginal, uncertain gains past that point isn't worth the risk of a real regression slipping through.

## Reporting

For every skill, produce a before/after summary: starting score, ending score (for triage context only), every kept change with its rationale, every reverted change with the paired-vote reasoning that caused the revert, and the final runtime-neutrality status.
