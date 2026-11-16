# LLM Eval Audit

Audit an existing LLM eval pipeline and surface its problems — missing error analysis, unvalidated judges, vanity metrics — as a prioritized list with concrete fixes. Use when inheriting an eval system, when unsure whether your evals are trustworthy, or as a starting point when there's no eval infrastructure yet. (To build an evaluator from scratch instead, start with error analysis.)

## Overview

1. Gather eval artifacts: traces, evaluator configs, judge prompts, labeled data, metrics dashboards.
2. Run the diagnostic checks across six areas.
3. Produce a findings report ordered by impact, each finding linked to a fix.

If an observability platform (Phoenix, Braintrust, LangSmith, or similar) is connected, pull traces, evaluator definitions, and experiment results from it. Otherwise ask for local files: CSVs, JSON trace exports, notebooks, eval scripts. If there are no artifacts at all, jump to "No Eval Infrastructure."

## Diagnostic Checks

Inspect the actual artifacts for each check — don't run this as a checklist without looking. Record a finding only where the problem actually exists, and order findings by impact on the product.

### 1. Error Analysis

- **Has systematic error analysis been done on real or synthetic traces?** Look for labeled trace datasets, failure-category definitions, trace-review notes. Evaluators that exist with no documented failure categories mean error analysis was skipped — and evaluators built without it measure generic qualities ("helpfulness", "coherence") instead of the system's actual failure modes.
- **Were failure categories observed or brainstormed?** Generic labels borrowed from research ("hallucination", "toxicity", "coherence") signal brainstorming; application-grounded categories ("missing query constraints", "wrong client tone", "fabricated property features") signal real observation. Brainstormed categories score well on paper and miss real problems.

### 2. Evaluator Design

- **Are evaluators binary pass/fail?** Flag Likert scales (1–5), letter grades, or numeric scores with no clear threshold. Annotators disagree on a 3 vs. a 4, and judges inherit that noise — convert to binary with explicit definitions.
- **Do LLM-judge prompts target one specific failure mode?** Flag holistic judges ("Is this response helpful?", "Rate the quality"). Each judge should check exactly one failure mode with explicit pass/fail definitions and few-shot examples.
- **Are code-based checks used where possible?** Flag LLM judges used for objectively checkable things (format, schema conformance, keyword presence, constraint satisfaction). Replace those with code; reserve judges for criteria that genuinely need interpretation.
- **Are similarity metrics the primary evaluator?** Flag ROUGE, BERTScore, cosine similarity, or embedding distance as the main quality measure. They capture surface overlap, not correctness — fine for retrieval ranking, wrong for generation quality.

### 3. Judge Validation

- **Are LLM judges validated against human labels?** An unvalidated judge running in production is a critical finding — it may consistently miss failures or flag passing traces. Measure alignment with TPR and TNR on a held-out test set.
- **Is alignment measured with TPR/TNR, not raw accuracy?** Under class imbalance, accuracy is misleading: a judge that always says "Pass" scores 90% accuracy when 90% of traces pass while catching zero failures. TPR and TNR map directly to bias correction.
- **Is there a real train/dev/test split?** If a judge prompt's few-shot examples come from the same data used to measure its performance, alignment scores are inflated and real judge failures are hidden.

### 4. Human Review Process

- **Who reviews traces?** General annotators catch formatting errors but miss domain-specific failures (wrong dosage, incorrect legal citation). Involve a domain expert.
- **Do reviewers see full traces or just final outputs?** Output-only review hides where the pipeline actually broke — show input, intermediate steps, tool calls, retrieved context, and final output.
- **How is data shown to reviewers?** Raw JSON or unformatted cells make reviewers parse instead of judge. Render markdown, syntax-highlight code, show tables as tables.

### 5. Labeled Data

- **Is there enough?** Rough targets: ~100 traces for error-analysis saturation; ~50 Pass and ~50 Fail for reliable judge TPR/TNR. If sparse, collect more by sampling smarter: always include a **random** sample (to find unknown issues), **cluster** by semantic similarity and review representatives, analyze **statistics** (latency, turns, tool calls, tokens) for outliers, use existing evals/models to **classify** likely-problematic traces (with caution), and filter by explicit customer **feedback**.

### 6. Pipeline Hygiene

- **Is error analysis re-run after significant changes?** Failure modes shift after a model switch, prompt rewrite, or new feature; evaluators built for the old pipeline miss new failures.
- **Are evaluators maintained?** Set-and-forget judges degrade as the pipeline evolves — re-validate against fresh human labels and refresh eval datasets.

## No Eval Infrastructure

If there are no traces, evaluators, or labeled data:

1. Start with **error analysis** on a sample of real traces.
2. If no production data exists, generate synthetic test inputs, run them through the pipeline, then do error analysis on the resulting traces.
3. Do **not** recommend building evaluators, judges, or dashboards before error analysis is complete.

## Report Format

Order findings by impact; group under the six areas; omit areas with no problems.

```
### [Problem Title]
**Status:** [Problem exists / OK / Cannot determine]
[1-2 sentences on the specific problem found in THIS pipeline]
**Fix:** [Concrete action]
```

## Anti-Patterns

- Running the audit as a checklist without inspecting actual artifacts.
- Reporting generic advice disconnected from what the pipeline actually shows.
- Recommending evaluators before error analysis is done.
- Suggesting LLM judges for failures a code check would handle.
- Treating the audit as one-time — re-audit after significant pipeline changes.

Based on the eval methodology from Hamel Husain (hamel.dev), including "Your AI Product Needs Evals", "Creating an LLM Judge That Drives Business Results", and the "Who Validates the Validators?" research (arXiv:2404.12272).
