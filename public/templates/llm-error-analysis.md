# LLM Error Analysis

Systematically identify and categorize the failure modes of an LLM pipeline by reading its traces, so you build evaluators grounded in how the system actually fails rather than in borrowed, generic metrics. Use when starting a new eval project, after a significant pipeline change (new features, model switch, prompt rewrite), when production metrics drop, or after an incident.

## Overview

1. Collect ~100 representative traces.
2. Read each one, judge pass/fail, and note what went wrong.
3. Group similar failures into categories.
4. Label every trace against those categories.
5. Compute failure rates to decide what to fix first.

## Step 1: Collect Traces

Capture the **full** trace — input, every intermediate LLM call, tool uses, retrieved documents, reasoning steps, and final output. Not just the final answer.

**Target ~100 traces** — roughly where new traces stop revealing new kinds of failures (the exact number depends on system complexity). From real user data: random sample for small volumes; sample across key dimensions (query type, user segment, feature area) for large volumes, using embedding clustering (K-means) to ensure diversity. When real data is sparse, generate synthetic queries, run them through the full pipeline, and capture complete traces.

## Step 2: Read Traces and Take Notes

For each trace, ask: **did the system produce a good result — pass or fail?** For failures, note what went wrong, and focus on the **first thing that went wrong** — errors cascade, and downstream symptoms disappear once the root cause is fixed, so don't chase every issue in one trace.

Write observations, not explanations: "SQL missed the budget constraint," not "the model probably didn't understand the budget."

```
| Trace ID | Trace | What went wrong | Pass/Fail |
|----------|-------|-----------------|-----------|
| 001 | [full trace] | Missing filter: pet-friendly requirement ignored in SQL | Fail |
| 002 | [full trace] | Proposed unavailable times despite calendar conflicts | Fail |
| 003 | [full trace] | Used casual tone for luxury client; wrong property type | Fail |
| 004 | [full trace] | - | Pass |
```

Do **not** start from a pre-defined failure list — let categories emerge from what you actually see. If you're stuck articulating what feels wrong, prompt with common types: made-up facts, malformed output, ignored requirements, wrong tone, tool misuse.

## Step 3: Group Failures into Categories

After 30–50 traces, start grouping similar notes — don't wait for all 100; grouping early sharpens what to look for in the rest. Split notes that look alike but have different root causes; group notes with the same root cause.

- **Split:** "made up property features (solar panels)" vs. "made up a client activity (scheduled a tour never requested)" — one fabricates external facts, the other fabricates user intent.
- **Group:** "missing bedroom filter" + "missing pet-friendly filter" + "missing price filter" → **Missing Query Constraints**.

Aim for **5–10 categories** that are distinct (each failure belongs to one), clear enough for someone else to apply consistently, and actionable (each points to a specific fix). LLM-assisted clustering is fine *after* you've reviewed 30–50 traces yourself — but always review its groupings, because LLMs cluster by surface similarity (lumping "app crashes" with "login is slow" because both mention login).

## Step 4: Label Every Trace

Go back through all traces and apply a binary label per category (one column per category). Use whatever tool the user prefers — spreadsheet, annotation app, or a simple script.

## Step 5: Compute Failure Rates

```python
failure_rates = labeled_df[failure_columns].sum() / len(labeled_df)
failure_rates.sort_values(ascending=False)
```

The most frequent category is where to focus first.

## Step 6: Decide What to Do About Each Failure

Work through categories in this order:

1. **Can we just fix it?** Many failures have obvious fixes needing no evaluator at all — the prompt never asked for the thing (add the instruction), a tool is missing or misconfigured (add/fix it), or there's an engineering bug in retrieval/parsing/integration (fix the code). Do these first.
2. **Is an evaluator worth it?** Not every remaining failure needs one — building and maintaining evaluators has real cost. Ask: does it happen often enough to matter? what's the business impact when it does (a rare revenue-losing failure can outrank a frequent annoyance)? will the evaluator actually be used to iterate, or is it checkbox work? Reserve evaluators for failures you'll iterate on repeatedly, starting with the highest-frequency, highest-impact category.
3. **For failures that warrant one:** prefer code-based checks (regex, parsing, schema validation) for anything objective; use an LLM judge only for failures that genuinely require judgment. Safety/compliance criteria may warrant an evaluator as a guardrail even after the prompt is fixed.

## Step 7: Iterate

Expect 2–3 rounds. After each: merge overlapping categories, split too-broad ones, clarify definitions where you'd hesitate, and re-label. **Stop** when new traces aren't revealing new kinds of failures — roughly ~100 reviewed with no new types in the last 20.

## Trace Sampling Strategies

| Strategy | When | Method |
|---|---|---|
| Random | Default starting point | Sample uniformly from recent traces |
| Outlier | Surface unusual behavior | Sort by length, latency, tool-call count; review extremes |
| Failure-driven | After violations or complaints | Prioritize flagged traces |
| Uncertainty | When automated judges exist | Focus where judges disagree or have low confidence |
| Stratified | Ensure coverage | Sample within each user segment |

## Anti-Patterns

- Brainstorming failure categories before reading traces (confirmation bias — read first).
- Starting from pre-defined categories.
- Skipping the human/domain expert for the first 30–50 traces.
- Using generic scores ("hallucination score", "helpfulness") as categories instead of grounded failure modes.
- Building evaluators before fixing obvious prompt/tool/code problems.
- Treating this as one-time — re-run after every significant change.

Based on the error-analysis methodology from Hamel Husain (hamel.dev): "Your AI Product Needs Evals" and "A Field Guide to Improving AI Products".
