# Writing for AI Agents — A Craft Reference

Reference for writing any document an AI agent consumes: a skill, a `CLAUDE.md`/`AGENTS.md`, a reference doc reached by a pointer. The packaging differs; the writing doesn't — the same levers make each one predictable, because the agent takes the same *process* every run rather than producing the same output a human writer would.

Use this whenever you're drafting or editing a skill, a `CLAUDE.md`, or any doc an agent is meant to follow reliably.

## Context Pointers

A **context pointer** is a reference held in the agent's context that names some out-of-context material and encodes the condition for reaching it. A skill's description is one; a line in `CLAUDE.md` naming a doc is the same object. The pointer's *wording*, not its target, decides when the agent reaches the material, and how reliably. A must-have target behind a weakly worded pointer is a variance bug: sharpen the wording first, and only inline the material if sharpening fails.

A pointer does two jobs: state what the material is, and list the **branches** that should trigger reaching it (a branch is a distinct case the document handles — different runs take different paths through it). Every word of an always-loaded pointer costs on every turn, so it earns even harder pruning than the body:

- **Front-load the leading word** — the pointer is where it does its triggering work.
- **One trigger per branch.** Synonyms that rename a single branch are one branch written twice — collapse them and keep only genuinely distinct branches.
- **Cut identity the body already carries.**

## The Two Loads

Every document and pointer you add spends one of two budgets:

- **Context load** — the cost of always-loaded material on the agent's window: a `CLAUDE.md` line, a skill description, anything sitting in context every turn, spending tokens and attention whether or not it fires.
- **Cognitive load** — the cost on the human: which documents exist, and when to reach for each. The human is the index. Not a cost to minimize — it's the price of human agency; spend it where human judgment matters, remove it where it doesn't.

Material reached only through a pointer escapes context load at the price of the pointer's own line; material with no pointer at all rides entirely on cognitive load.

## Information Hierarchy

A document is built from two content types: **steps** (the ordered actions the agent performs) and **reference** (definitions, rules, facts consulted on demand). They mix freely — all steps (a recipe), all reference (a review's rule list), or both. The core decision is where each piece sits on the **information hierarchy**, ranked by how immediately the agent needs the material:

1. **In-file step** — the primary tier: what the agent does, in order.
2. **In-file reference** — consulted on demand, often a legitimately flat peer-set (every rule on one rung — a fine arrangement, not a smell).
3. **Disclosed reference** — pushed into a separate file, reached by a context pointer, loaded only when the pointer fires.

Push too little down and the top bloats; push too much and you hide material the agent actually needs. That tension is the whole decision.

**Progressive disclosure** is the move down the ladder — out of the main file and behind a pointer — so the top stays legible. Not primarily a token optimization; it's how the hierarchy is protected. Branching is the cleanest disclosure test: inline what every branch needs, push behind a pointer what only some branches reach.

**Co-location** is the within-file companion: where the ladder decides *how far down* a piece sits, co-location decides *what sits beside it* once it's there. Keep a concept's definition, rules, and caveats under one heading rather than scattered, so reading one part brings its neighbors with it. Distinct from duplication (which repeats one meaning in two places) — scattering fragments one meaning across many.

**Sprawl** is the failure mode here: a document simply too long, even when every line is live and unique. Attention thins across the excess. The cure is the ladder — disclose reference behind pointers, split by branch or sequence so each path carries only what it needs.

## Steps and Completion Criteria

Every step ends on a **completion criterion** — the condition that tells the agent the work is done. Two properties make it a lever:

- **Clarity.** Can the agent tell done from not-done? A vague bound ("understanding reached") invites **premature completion** — ending the step before it's genuinely done. Defend in order: sharpen the bound first (cheap, local); only if it's irreducibly fuzzy *and* you observe the rush, hide the later steps by splitting the sequence across a real context boundary (a hand-off or subagent dispatch — an inline call leaves the later steps in context and clears nothing).
- **Demand.** How much the criterion requires. "Every modified model accounted for" forces thorough work where "produce a change list" doesn't. Demand drives **legwork** — the digging the agent does, latent in the wording rather than written as its own step — and it isn't step-bound: "every rule applied" binds a body of flat reference just as "every step done" binds a sequence.

The strongest criteria are both checkable and exhaustive.

## When to Split

Splitting one document into two spends one of the two loads, so split only when the cut earns it:

- **By sequence** — split a run of steps where the post-completion steps tempt the agent to rush the one in front of it. Keeping them out of view drives more legwork on the current task. Beware the reverse: merging sequences exposes each step's later steps to what follows, inviting premature completion.
- **By invocation** — when a document really covers several unrelated triggers, split so each pointer fires only the part it needs, rather than one bloated document everything routes through.

## Leading Words

A **leading word** is a compact concept already living in the model's pretraining that the agent thinks with while running the document (*lesson*, *fog of war*, *tracer bullet*). Repeated as a token, never as a sentence, it accumulates a distributed definition and anchors a whole region of behavior in the fewest tokens, by recruiting priors the model already holds. Coining your own works if you define it clearly, but a made-up word recruits no priors — you pay in definition tokens what a pretrained word gives free; reach for an existing word first.

It anchors twice. In the body, *execution*: the agent reaches for the same behavior every time the word appears. In a pointer, *invocation*: when the same word lives in your prompts, your docs, and your codebase, the agent links that shared language to the material and reaches it more reliably.

Hunt for opportunities to refactor with leading words — a triad spelled out at three sites, a pointer spending a sentence to gesture at one idea. Each is a passage begging to collapse into a single token:

- "fast, deterministic, low-overhead" → *tight* (a *tight* loop)
- "a loop you believe in" → *red*, turning a fuzzy gate into a binary observable state

You win twice: fewer tokens, and a sharper hook for the agent to hang its thinking on.

**Negation** is the failure mode beside this lever: steering by prohibition drags the forbidden behavior into context and makes it *more* available, not less. Prompt the **positive** — state the target behavior ("write one-line comments") so the banned one is never spoken. A prohibition earns its place only as a hard guardrail you can't phrase positively, and even then, pair it with the positive target.

## Pruning

- Keep each meaning in a **single source of truth** — one authoritative place, so changing the behavior is a one-place edit. **Duplication** (the same meaning stated in more than one place) costs maintenance and tokens, and inflates that meaning's prominence past its real rank.
- The **environment** is a source of truth too (`package.json` scripts, config files, directory layout, `--help` output), and a document restating it is a **cache** — a copy of a lookup, earning its load only when the lookup is genuinely expensive. Cache what the agent can't find by looking: the unwritten convention, the reason behind a choice, the gotcha no config confesses. Leave one-file, one-command lookups to the environment, where they can't go stale.
- Check every line for **relevance** — does it still bear on what the document does? A line loses relevance by never bearing on the task (mere exposition, or a branch that should be disclosed), or by going stale as the behavior or world it describes changes. Without a pruning discipline the default fate is **sediment**: stale layers that settle because adding feels safe and removing feels risky, until you must dig through them to find what's still live.
- Hunt **no-ops** sentence by sentence — an instruction the model already obeys by default pays load to say nothing. The test (does it change behavior versus the default?) is model-relative, not reader-relative. When a sentence fails, delete the whole sentence rather than trim words from it. The test also grades leading words: a word too weak to beat the default (*be thorough* when the agent is already thorough-ish) is a no-op, and the fix is a stronger word (*relentless*), not a different technique.

## Applying This to CLAUDE.md

The same ladder applies directly to a project's `CLAUDE.md`:

- Keep the top level to what every session needs — build commands, architecture orientation, the handful of standing rules that apply on every turn.
- Push project-specific deep-dives (a subsystem's internals, a migration's full history, a one-off script's usage) into linked reference files, and point to them with a sharply worded line rather than inlining them.
- If `CLAUDE.md` has grown long and the model seems to be missing rules buried in the middle, that's the sprawl failure mode — restructure with the ladder rather than trimming words from individual sentences.
