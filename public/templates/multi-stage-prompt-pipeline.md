# Multi-Stage Prompt Pipeline (Meta-Prompts)

Create prompts optimized for Claude-to-Claude pipelines — where one prompt's output is another prompt's input — across research, planning, and execution stages. Each prompt's output is structured for efficient machine parsing by the next stage, and every run also produces a short human-readable `SUMMARY.md` so a person can scan progress without reading full artifacts.

## The Core Idea

A single prompt that tries to research, plan, and implement all at once produces a muddled result and is impossible to iterate on. Splitting the work into staged prompts — each with one job, a durable output artifact, and clear provenance — makes each stage reviewable, re-runnable, and composable. The convention: each prompt gets its own folder under `.prompts/{number}-{topic}-{purpose}/` containing its output artifact (structured for the next Claude to consume) and a `SUMMARY.md` (for a human to scan).

## The Four Purposes

Every prompt has exactly one purpose. Infer it from the request's keywords, or ask if unclear:

| Purpose | For | Keyword signals |
|---|---|---|
| **Research** | Gather information or understand something | research, understand, learn, gather, analyze, explore |
| **Plan** | Create an approach, roadmap, or strategy | plan, roadmap, approach, strategy, decide, phases |
| **Do** | Execute a task and produce an artifact | implement, build, create, fix, add, refactor |
| **Refine** | Improve an existing research or plan output | refine, improve, deepen, expand, iterate, update |

## Workflow

1. **Intake** — determine the purpose (Research / Plan / Do / Refine) and gather requirements. If no context was given, ask the purpose question first, then "what do you want to accomplish?"
2. **Chain detection** — scan `.prompts/*/` for existing `*-research.md` and `*-plan.md` files and ask whether this new prompt should reference any of them (match by topic keyword when possible).
3. **Generate** — write the prompt using the purpose-specific pattern.
4. **Save** — create `.prompts/{number}-{topic}-{purpose}/` and write the prompt there.
5. **Present** — show the user how to run it (and what it depends on).
6. **Execute** — run the prompt(s) with dependency-aware ordering.
7. **Summarize** — write `SUMMARY.md` for human scanning.

## Output Structure

Outputs that later prompts will consume are structured with XML tags and metadata so the next stage can parse them reliably rather than re-interpreting prose. Research and plan artifacts should carry, at minimum:

- `<confidence>` — how settled this output is
- `<dependencies>` — what it relied on
- `<open_questions>` — what's still unresolved
- `<assumptions>` — what was taken as given

Every run also writes a `SUMMARY.md` with four fixed sections so a human gets the gist in seconds:

```markdown
# <Topic> <Purpose> Summary

**<One-line headline — the single most important takeaway>**

## Key Findings
• ...

## Decisions Needed
<none, or the specific decisions>

## Blockers
<none, or what's blocking>

## Next Step
<the concrete next prompt or action>
```

The one-line headline must be substantive ("JWT with jose + httpOnly cookies recommended"), never generic ("Research completed").

## Dependency-Aware Execution

Prompts reference each other with `@.prompts/{number}-{topic}/` paths. Build a dependency graph from those references, detect cycles (error if found), and run in layers — independent prompts in parallel, dependent ones after their inputs land:

```
Layer 1 (parallel): 001-api-research, 002-db-research
Layer 2 (after 1):  003-architecture-plan
Layer 3 (after 2):  004-implement
```

When a prompt has no explicit `@` references, infer dependencies from purpose: Research prompts have none (parallelizable); Plan prompts depend on same-topic Research; Do prompts depend on the same-topic Plan. Explicit references always override the inference.

If a prompt references an output that doesn't exist, check whether it's another prompt in this session (will be created) or already completed in `.prompts/*/`; if it's genuinely missing, warn the user and offer to create the missing upstream prompt first, continue anyway, or cancel.

## Validate Each Stage Before Chaining

After each prompt completes, verify before feeding its output downstream:

1. **File exists** — the output artifact was actually written.
2. **Not empty** — it has real content (more than ~100 chars).
3. **Metadata present** (research/plan) — the required XML tags (`<confidence>`, `<dependencies>`, `<open_questions>`, `<assumptions>`) are there.
4. **SUMMARY.md exists** and has all four sections.
5. **Headline is substantive** — not a generic "done" line.

On validation failure, report exactly what's missing and offer: retry the prompt, continue anyway (for non-critical issues), or stop and investigate. In a sequential chain, a hard failure stops the chain immediately rather than feeding a broken artifact into the next stage.

## Refine Without Destroying History

A Refine prompt improves an existing research or plan output. Version the previous output (e.g. move it to an `archive/` subfolder as `*-v1.md`) rather than overwriting it, so the provenance chain and the reasoning that led to the current state stay inspectable.
