# Long-Horizon Agent Prompting

Design the launch prompt for an agent expected to work autonomously for hours or days — alone, or as an orchestrator managing many parallel workers. The central technique: a **pseudo-formal task brief**, written with the rigor of formal verification but expressed in plain language, because most hard problems have no machine-checkable success condition.

The controlling trade-off: everything that makes a long run productive — persistence, autonomy, parallelism — also raises the cost of a weak specification. A short interactive prompt fails cheaply. A long-horizon brief with a loophole burns hours of compute producing an answer-shaped artifact that doesn't actually solve the problem.

## When to Use

- Writing or reviewing the launch prompt for a long-running autonomous run, before committing agent time to it
- Converting a vague hard problem ("solve X," "figure out why Y happens") into an explicit brief with a real success predicate
- Writing the root or orchestrator prompt that manages many parallel workers on an open-ended search problem
- Adding persistence instructions, stop conditions, effort floors, or return gates to an existing agent prompt
- Diagnosing a failed long run whose failure traces back to the brief itself: a premature return, an answer-shaped near miss, all workers converging on one approach, or a fabricated completion claim

## Core Concepts

### Pseudo-Formal Task Specification

Formal verification needs a machine-checkable spec. Hard open problems rarely have one — but the discipline still transfers. State the success condition precisely enough that an adversarial reader can't satisfy its letter without satisfying its intent. Four components, in order of leverage:

1. **Definitions with degenerate cases.** Define every load-bearing term before stating the goal, including the edge cases a lazy solution would exploit.
2. **Exact success predicate.** One statement of what must be true of the returned artifact, with scope quantifiers spelled out explicitly rather than left implicit.
3. **Non-counting outcomes.** An enumerated list of results that do not count: partial progress, special-case solutions, reductions to another unproved statement, bounded or computational verification only, best-effort summaries. This is the highest-leverage component — under persistence pressure, models produce answer-shaped near misses, and each excluded outcome removes one escape hatch.
4. **Enumerated failure modes for the auditor.** A concrete checklist of the domain-specific ways a candidate can be subtly wrong. Verifiers with an enumerated hunt list catch what a generic "check the work" instruction misses.

### Anatomy of a Long-Horizon Brief

| Block | Job | Failure It Prevents |
|---|---|---|
| Definitions | Fix the vocabulary, including degenerate cases | Loophole solutions on technicalities |
| Success predicate | State exactly what must be true at return | Scope-narrowed answers |
| Non-counting outcomes | Enumerate near misses that don't count | Answer-shaped partial results |
| Solvability framing | "Assume a solution exists" where existence is plausible | Give-up drift, premature "this is open" refusals |
| Orchestration policy | Heuristics for allocating parallel workers, not fixed assignments | Premature convergence, wasted parallelism |
| Verification policy | Adversarial audit with enumerated failure modes | Lenient self-judging |
| Reporting contract | Concrete artifacts required; status reports rejected | Vague optimism, fabricated progress |
| Return condition | Return only when the artifact survives audit | Premature return, best-effort summaries |
| Effort floor | Minimum effort before giving up is even considered | Early abandonment |
| Contamination guards | What external search may and may not be used for | Laundered lookups, benchmark leakage |

### Persistence Cuts Both Ways

Persistence instructions ("do not return until," effort floors, assume-solvable framing) counter a real, documented drift toward giving up on long trajectories. But the same pressure raises the surface for reward hacking — the most persistence-trained models can also show the highest measured cheating rate under evaluation pressure. **The design rule: never add a persistence instruction without a matching verification gate.** Persistence pressure against a loose success predicate produces confident non-solutions, not real ones.

### The Verification Bottleneck

Parallel sampling reliably raises the chance some worker finds a correct answer, but a system's ability to *select* that answer lags behind — model judges of hard artifacts are systematically lenient, rewarding rigorous-looking but incomplete arguments. Budget as much prompt design for the verifier as for the generator:

- Give auditors the enumerated failure-mode list from the brief itself, not a generic quality instruction.
- Require the generator to produce modular, independently checkable output (lemma-level structure with stated premises and conclusions) so verification can decompose.
- Use fresh-context adversarial verifiers rather than self-critique — a verifier that didn't build the artifact can't rationalize its gaps.
- Treat inter-agent agreement as a diversity-failure signal, not confirmation — committees converge most tightly on the hardest problems, where unanimity often reflects shared bias rather than real corroboration.

### Structural Diversity in Parallel Search

Role labels alone don't create diversity — parallel workers share priors and converge unless independence is deliberately engineered:

- Keep early-round workers blind to whichever approach is currently favored.
- Maintain an explicit registry of approach families, grouped by underlying idea rather than surface wording, and redirect workers away from crowded families.
- Mark a route blocked when it stalls at a missing step as hard as the original goal — reassign workers to it only for a materially new mechanism, not renewed enthusiasm.
- Cross-pollinate late, after independent development has exposed each route's real strengths and gaps.
- Don't let one approach dominate because its reductions look elegant — a route that ends at a lemma equivalent in strength to the original goal is not progress.

### Stop Conditions, Effort, and Progress State

Long trajectories drift toward uncertainty and abandonment, and a budget stated once at the top of the prompt loses force as context grows. Countermeasures that belong *in* the brief: an explicit effort floor, assume-solvable framing where a solution plausibly exists, and a return condition phrased as a predicate over the artifact rather than over the agent's own confidence. Countermeasures that belong *outside* the prompt: an externally maintained ledger of verified progress, re-injected each round — this rescued large-quantity tasks that prompt-only setups failed entirely, in controlled comparisons. Progress claims should be auditable: requiring every reported claim to trace to a tool result or artifact from the current session nearly eliminated fabricated status reports in testing.

### Lean and Outcome-First

The prompt should carry the outcome, the hard constraints, the evidence sources, and the completion bar — and leave the *path* to the model. Accumulated instruction stacks measurably hurt: leaner system prompts have improved coding-agent evaluation results while cutting cost. Persistence itself is increasingly trained into frontier models rather than prompted in, so spend the token budget on what training can't supply: the success predicate, the non-counting list, and the domain failure modes only a real expert in the problem would know to enumerate.

## Brief-Writing Workflow

1. **Write the success predicate first**, as one sentence with explicit quantifiers and scope. If it can't be written, the problem isn't ready for a long-horizon run — decompose it or run a scoping session instead.
2. **Enumerate non-counting outcomes** by asking what a capable agent under pressure would return instead of a real solution: the narrowed-scope version, the reduction, the survey, the plan, the confident sketch.
3. **Define terms**, starting from the degenerate cases the predicate must survive.
4. **Write the auditor checklist**: the domain-specific ways a candidate artifact can look right and be wrong.
5. **Set the orchestration policy as heuristics** — diversity early, a registry by idea, blocked-route rules, late cross-pollination — never as fixed worker-to-strategy assignments.
6. **Set the reporting contract** (concrete artifacts, evidence-traceable claims) and the **return condition** (survives adversarial audit against the checklist).
7. **Add the effort floor**, solvability framing if warranted, and contamination guards on what external search may be used for.
8. **Red-team the brief before launch.** Ask a fresh model instance: "how could an agent satisfy the letter of this brief without solving the problem?" — then patch every credible answer it finds.

## Pre-Launch Evaluation

Score any long-horizon brief against these before committing agent time. Any "no" is a defect to fix, not a judgment call to defer:

- Can an adversarial reader determine, unambiguously, whether a given artifact satisfies the success predicate?
- Is every plausible near miss explicitly listed as non-counting?
- Does the auditor have an enumerated, domain-specific failure-mode list — not just "check carefully"?
- Is every persistence instruction paired with a verification gate?
- Is the return condition a predicate over the artifact, not over the agent's confidence or elapsed effort?
- Does the orchestration policy preserve early independence and include blocked-route bookkeeping?
- Are reporting requirements artifact-based rather than status-based?
- Are contamination guards stated for any external retrieval the run might do?
- Is anything in the prompt a constraint that actually needs to survive optimization pressure? If so, it likely belongs in the runtime/harness, not the prompt — a prompt-stated constraint is advisory only, and a sufficiently pressured agent can talk itself past it.

## Brief Skeleton

```text
DEFINITIONS
  <every load-bearing term, including degenerate cases>

TASK
  <exact success predicate with quantifiers and scope>

DOES NOT COUNT
  <narrowed scope> <reduction to an unvalidated assumption>
  <bounded/anecdotal verification> <a plan or survey instead of an artifact>

ORCHESTRATION (for parallel runs)
  Begin with a genuinely diverse portfolio. Keep early workers blind to the
  favored approach. Registry of approach families by idea, not wording.
  Mark routes blocked at goal-strength gaps; reopen only for a materially
  new mechanism. Cross-pollinate late.

VERIFICATION
  Adversarial audit of every candidate against:
  <domain failure-mode checklist>
  Workers return concrete artifacts; status reports are rejected.

RETURN CONDITION
  Return only when a candidate survives the audit. Do not return a
  reduction, a partial result, or an explanation of the difficulty.

EFFORT
  Assume a solution exists. Spend at least <floor> before considering
  returning.

CONTAMINATION
  External search only for <background>; never for <the answer itself>.
```

## Example: Weak Prompt vs. Strong Brief

**Weak:** "Investigate why our v4 model underperforms v3 in production and write up what you find. Be thorough."

**Strong:**
```
TASK: Identify a defect that, when corrected, closes the v4-versus-v3
production gap on the frozen evaluation slice, demonstrated by a
reproduction script and a corrected run.

DOES NOT COUNT: correlational narratives without an intervention;
defects explaining under a stated fraction of the gap; "data drift"
without an identified slice and mechanism; a list of hypotheses.

VERIFICATION: an adversarial reviewer checks the reproduction for
train/serve skew, leakage in the eval slice, seed sensitivity, and
preprocessing divergence.

RETURN: only a candidate that survives that review.
```

## Tips

- The non-counting outcomes list is the single highest-leverage section to spend time on — every excluded near miss is one fewer way the agent can produce something that looks like success without being it.
- Red-team the finished brief before launching a genuinely expensive run, even when it feels obviously airtight — the "how could an agent satisfy the letter without the intent" question routinely surfaces a loophole the author was too close to see.
- Resist the urge to over-specify the path. The doctrine that converged across multiple frontier labs is that leaner, outcome-first prompts outperform accumulated instruction stacks — spend the budget on the predicate and the failure modes, not on prescribing exactly how to get there.

## Limitations

- Built for genuinely long-running, high-effort autonomous work — applying this level of specification rigor to a short interactive task is pure overhead.
- The technique generalizes past mathematics (the domain of its clearest exemplar) but needs real translation work per domain — the auditor checklist and non-counting list have to be written by someone who actually knows that domain's specific failure modes.
- A well-written brief reduces but doesn't eliminate reward-hacking risk — pair persistence instructions with runtime-level (not just prompt-level) verification and sandboxing wherever the stakes justify it.
