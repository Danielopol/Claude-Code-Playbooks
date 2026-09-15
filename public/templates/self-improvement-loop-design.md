# Self-Improvement Loop Design

For systems where the harness itself is the optimization target: an agent mines its own failures and edits its own scaffold, a meta-agent searches over harness code, a population of workflow candidates evolves against an evaluator, or the mechanism that produces context is itself versioned and improved. The design question shifts from "how do I control one loop" to "how do I let a loop rewrite parts of itself without corrupting the signal that steers it."

**The controlling constraint across every such system:** the loop optimizes whatever signal it's given, including that signal's own weaknesses. Design assuming the optimizer will find every gap between the metric and the actual intent.

## When to Use

- Building a loop where an agent proposes edits to its own harness, prompts, or playbook based on mined failure patterns
- Designing meta-level search over harness or scaffold code
- Choosing acceptance criteria for any self-modifying agent system
- Evolving the mechanism that manages context, rather than hand-editing the context artifact itself
- Diagnosing a degenerating self-improvement loop: reward hacking, diversity collapse, context collapse, or silent stagnation
- Deciding which level of the optimization ladder a recurring failure should actually be fixed at

## The Optimization Ladder

Self-improvement systems can target progressively deeper objects. Each rung up buys a larger design space and more leverage, and costs more per evaluation with a larger surface for gaming:

| Rung | Optimized Object | Example |
|---|---|---|
| 1 | Instruction prompts | Prompt-level mutation and search |
| 2 | Structured context | An itemized playbook of bullets |
| 3 | Context mechanism | The skill/process that produces the context |
| 4 | Workflow graph | Search over pipeline/agent-graph shape |
| 5 | Harness code | Bounded self-edits to the running scaffold |
| 6 | Optimizer code | The improver improves the improver |

**Fix a recurring failure at the lowest rung that can express the fix.** A stale-library failure is a context fix, not a workflow rewrite — inject current docs into task context rather than reaching for machinery. Only move up a rung when failure clusters at the current rung persist across candidates.

## The Loop Is Not the Intelligence

Recursive structure amplifies base-model quality in both directions: the same recursive-improver design that compounds gains with a strong model degrades mean performance across iterations with a weaker one. Two implications:

1. Run a capability-validation check before enabling recursion at all — a fixed number of iterations on a held-out task set, counting the loop as net-negative if the trajectory declines.
2. Detect the degenerate stagnation mode explicitly. A broken improver that silently returns its input unchanged looks like stability in aggregate metrics — track edit diffs, not just scores, or stagnation reads as convergence.

## The Outside-the-Loop Invariant

The evaluator, its instrumentation, permission control, and budget enforcement must live **outside** the surface the loop can modify. Every documented reward hack broke this invariant — agents that could see scoring code removed the logging markers a hallucination detector depended on, or overwrote timing functions and monkey-patched evaluators to return perfect scores. Hacking frequency measurably rises with evaluator visibility.

Operational rules:

- Constraints stated only in prompt text get evolved away. Enforce budgets, permissions, and sandbox boundaries in the runtime, never in the mutable prompt or harness code.
- Hide the scoring implementation from the proposer. Expose scores and traces, never evaluator source.
- Sandbox at the OS or container level. Framework-level permission gates can be bypassed through side channels the loop discovers.
- Treat any detected exploit as a failed candidate, never a high score — an unnoticed exploit inflates the very metric steering the loop.

## Empirical Acceptance, Never Rationale

Accept a self-modification only on measured evidence, using two splits: a **held-in** split checking the targeted weakness was actually resolved, and a **held-out** split the proposer never sees, checking nothing else regressed.

```python
def accept(candidate, baseline, held_in, held_out, repeats=3):
    d_in = mean_score(candidate, held_in, repeats) - mean_score(baseline, held_in, repeats)
    d_out = mean_score(candidate, held_out, repeats) - mean_score(baseline, held_out, repeats)
    if d_in < 0 or d_out < 0:
        return False              # no regression on either split
    return max(d_in, d_out) > 0   # strict improvement on at least one
```

Reject a candidate that trades one split against the other even when the sum improves. Log rejected candidates with their evidence, so the proposer stops rediscovering an already-refuted idea.

## Filesystem Experience Archive

Store every candidate as a directory containing its source, its scores, and its raw execution traces:

```text
search-run/
  candidates/
    c0041/
      harness.py       # full candidate source
      scores.json       # per-split, per-repeat results
      traces/            # raw prompts, tool calls, outputs, state updates
      lineage.txt        # parent id, diff summary, decision, evidence
  frontier.json           # current Pareto set over (quality, cost)
  rejected.jsonl          # rejected candidates with reasons, append-only
```

Let the proposer navigate this archive with search tools (grep-style queries over files) instead of stuffing history into its context window. A proposer with full raw-trace access materially outperforms both a scores-only proposer and one fed LLM-written summaries of the same traces — summaries recover none of the lost signal, and sometimes hurt. Don't pre-summarize the archive; curate access paths, not content.

## Diversity Preservation

Evolutionary and RL-style loops collapse toward variants of the current best candidate unless diversity is actively engineered in:

- Keep an archive of every candidate that retains core capability — never hill-climb only the latest version. Stepping stones pay off many iterations after they're discovered.
- Select parents with fitness pressure discounted by offspring count, so heavily-mined candidates lose priority while every archive member keeps nonzero selection probability.
- Reject near-duplicate proposals by embedding similarity, before paying the evaluation cost.
- Keep a persistent route back to the seed or blank candidate in the selection distribution, as an escape hatch from a local optimum.

## Anatomy of a Failure-Driven Self-Edit Loop

The strongest published pattern for an agent improving its own harness has three stages:

1. **Weakness mining.** Cluster failed traces by a three-part signature: the verifier-level cause (what was rejected), the causal status of the agent behavior (was it actually responsible), and the abstract mechanism the trace exposes. Never cluster on error strings alone — a timeout is a symptom shared by unrelated mechanisms. Apply an addressability filter: exclude clusters that reflect task difficulty or capability limits rather than an actual harness defect.
2. **Bounded proposal.** Give the proposer exactly four inputs: the declared editable surfaces, the mined failure patterns, records of passing behaviors that must be preserved, and summaries of previously attempted edits. Require proposals to be minimal (touch one surface), mutually distinct across parallel candidates, and accompanied by an audit record stating the targeted pattern, expected effect, and regression risks.
3. **Validation and merge.** Apply the two-split acceptance gate above. Merge compatible accepted edits; log rejected ones without touching the active harness. Every transition records changed surfaces, split outcomes, and the decision, so the lineage is fully auditable later.

## Meta-Level Search Over Harness Code

When searching whole harness programs from outside, rather than editing a running harness from within:

- Keep the outer loop minimal — no hand-tuned mutation operators or parent-selection heuristics. Delegate diagnosis and edit decisions to a strong coding-agent proposer, so the system improves as coding agents themselves improve.
- Initialize from the strongest available harness, not from scratch. Winning edits are typically small and additive (an environment bootstrap, an artifact-creation instruction); prompt and completion-flow rewrites are empirically high-risk.
- Maintain a Pareto frontier over the objectives that actually matter (accuracy, context cost, latency) rather than collapsing everything to one scalar score.
- Structure search memory per candidate, with recorded modification outcomes. Dumping the whole archive into the proposer's prompt degrades sharply as history grows — per-node experience records with credit assignment beat archive-in-context conditioning.
- Re-run the search when the executor model changes. Discovered harnesses are executor-dependent and don't transfer freely across base models.

## Context Evolution as Self-Improvement

Context playbooks that update themselves are the entry-level self-improvement loop, with two named failure modes:

- **Brevity bias** — optimizers collapse toward short, generic instructions, dropping exactly the domain-specific heuristics that carried the real value.
- **Context collapse** — letting a model rewrite accumulated context monolithically can shrink it catastrophically in a single step, below the no-adaptation baseline.

The working pattern: represent context as itemized entries with stable identifiers and helpful/harmful counters; produce incremental deltas, merged by deterministic non-model logic (the curator never rewrites the whole artifact); deduplicate by embedding similarity; and gate the whole mechanism on feedback quality — without reliable execution signals, self-managed context degrades below a static baseline.

One level up, version the *mechanism* that produces context separately from the context it produces, evolve that mechanism against a validation split only, and warm-start each iteration from the prior best artifact plus its rollout results. Check the train-validation gap explicitly each iteration to catch mechanism overfitting.

## What Belongs to Humans

Humans move up the stack rather than out of the loop. Reserve these as human decision points: changes to the evaluator or acceptance gate, expansion of editable surfaces, promotion of a discovered harness to production, and abandonment decisions for research directions. Models trained mostly on successful outcomes are poorly calibrated on when to abandon a line of work — and preserved negative results are the cheapest way to trim a successor's search space. Make failed candidates first-class, retained artifacts, not deleted noise.

## Loop-Readiness Checklist

Don't enable self-modification until every item holds:

1. A fast, deterministic, automatable evaluator exists. Slow, ambiguous, or judge-only evaluation is where this whole loop family fails.
2. A held-out split exists that the proposer never sees, refreshed if the loop runs long enough to risk overfitting it.
3. Budgets, permissions, and sandboxing are enforced by the runtime, outside every editable surface.
4. Editable surfaces are explicitly declared; everything else is locked, with immutability re-verified programmatically after each candidate.
5. An archive with full diff lineage exists; audits read diffs and raw traces, never just the fitness signal.
6. Evaluation spending is staged — cheap smoke checks before a full evaluation run, repeated runs where scoring is noisy.
7. A capability-validation run has shown the base model actually clears the recursion threshold on this task family.
8. Human decision points are wired in for evaluator changes, surface expansion, and production promotion.

## Choosing the Loop Level

| Recurring Failure | Fix At | Loop Pattern |
|---|---|---|
| Missing domain heuristics, repeated known mistakes | Structured context | Itemized playbook with delta updates |
| The context playbook itself plateaus across tasks | Context mechanism | Evolve the skill against validation data |
| Wrong sequencing, missing verification steps | Workflow | Search over workflow graphs with per-node experience |
| Failure clusters persist across workflow candidates | Harness code | Failure-driven bounded self-edits, or meta-level search |
| The improvement strategy itself is weak | Optimizer code | Only with strong models and a locked meta-evaluation |

## Gotchas

- **Prompt-stated constraints evolve away.** Budget limits and safety rules stated only in the seed prompt get dropped during self-rewrites — explicit warnings don't reduce this. Only runtime enforcement survives real optimization pressure.
- **Visible scorers get gamed.** Exposing the scoring function to the proposer invites monkey-patching and detector disabling; hacking frequency rises directly with evaluator visibility. Expose scores and traces, never evaluator internals.
- **Self-reported success inherits over-optimism.** A loop that evaluates from the agent's own report files inherits noise declared as signal, bugs read as breakthroughs, unfavorable runs quietly omitted. Bind every reported number to a raw artifact at write time.
- **Monolithic rewrite collapse.** Asking a model to rewrite its accumulated playbook wholesale can shrink it by orders of magnitude in one step, below the never-adapted baseline. Update by itemized deltas with deterministic merge instead.
- **Hill-climbing only the latest candidate** gets stuck after one bad modification. Archive-based parent selection recovers from a regression many iterations later; discarding history doesn't.
- **Stagnation disguised as stability.** A degenerate improver returning its input unchanged produces flat metrics indistinguishable from convergence — alarm on empty or trivial diffs, not only on score drops.
- **Same-model generator and evaluator** lets optimization pressure exploit shared blind spots, so the measured score diverges from true quality. Use an independent evaluator, ideally grounded in execution rather than judgment.
- **Benchmark-shaped improvements** often encode evaluation-set specifics and executor-model quirks rather than general capability. Validate on a distribution shift before promoting, and re-run the search after a model upgrade rather than porting the discovered harness forward.
- **Cross-stage score cherry-picking.** When a reporting stage can see a whole pool of intermediate scores, it tends to select the most favorable one rather than the score of what actually shipped — bind reported scores to the submitted candidate deterministically.

## Tips

- The outside-the-loop invariant is the single most load-bearing rule here — nearly every documented failure in this design space traces back to a constraint or an evaluator that the loop itself could see or touch.
- When a loop seems to have converged, check the edit diffs before believing it — a broken improver that returns its input unchanged produces flat, stable-looking metrics that are indistinguishable from real convergence unless something is actually tracking the diffs.
- Fix at the lowest rung the failure actually supports. A team reaching straight for a harness-code edit when the real fix is "inject current API docs into context" is the most common way this design space gets over-engineered.

## Limitations

- This is design guidance for systems where self-modification is genuinely warranted — for a single autonomous loop that doesn't modify itself, the relevant concerns (locked surfaces, rollback, approval boundaries) are a related but distinct topic.
- Requires a fast, deterministic, automatable evaluator to work at all — domains with slow, ambiguous, or judge-only scoring are explicitly where this whole loop family fails, per the readiness checklist.
- Discovered harnesses and context mechanisms are executor-model-dependent — don't assume a self-improvement result transfers cleanly across a model upgrade without re-running the search.
