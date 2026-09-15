# Creative Thinking Frameworks for Research

Eight empirically grounded frameworks from cognitive science, applied to computer science and AI research ideation. Unlike ad-hoc brainstorming, each framework here is backed by real creativity research — from Koestler's bisociation to Kauffman's adjacent possible — and each targets a distinct cognitive operation: combining, reformulating, analogizing, constraining, inverting, abstracting, exploring boundaries, and holding contradictions.

## When to Use

- Generating genuinely novel ideas, not incremental extensions of prior work
- Feeling stuck in a local optimum of thinking within one subfield
- Wanting to systematically apply creativity heuristics instead of waiting for inspiration
- Preparing for a research retreat or a deep ideation session
- Bridging between fields and seeking structural, not superficial, connections

**Don't use this for**: structured project-level brainstorming workflows with practical filters (pair with a dedicated brainstorming process for that instead — this skill supplies the deeper cognitive engines, a brainstorming workflow supplies the diverge-converge-refine structure around them); a well-defined problem that just needs execution help; or a literature survey.

## Framework 1: Combinatorial Creativity (Bisociation)

Novel ideas arise from combining existing concepts in unexpected ways — Arthur Koestler's **bisociation**: connecting two previously unrelated frames of reference, distinct from routine association within a single frame. Meta-research consistently shows breadth of knowledge is a precursor to creative output; the combination itself is the creative act. (Biological evolution → optimization gave genetic algorithms; statistical physics → machine learning gave energy-based models.)

**Workflow**:
1. Select two domains you have at least passing familiarity with.
2. List 5–10 core primitives in each domain.
3. Build a cross-product matrix: rows are Domain A concepts, columns are Domain B concepts.
4. For each cell, ask: "What would it mean to apply A's concept to B's problem?"
5. Filter for combinations that produce a non-trivial, testable research question.
6. Validate structural depth: is the connection mechanistic, or merely a metaphor?

**Quality test**: a strong bisociation isn't a surface metaphor ("the network is like a brain") — it's a structural mapping where the actual mechanism transfers.

**Self-check**: Is the connection structural or merely verbal? Does the combination generate testable predictions? Would an expert in both fields find it non-obvious but sound?

## Framework 2: Problem Reformulation (Representational Change)

Gestalt psychologists found that breakthroughs often come not from solving the problem as stated, but from re-representing the problem itself. The key shift: from "how do I solve this?" to "am I even thinking about this correctly?"

**Reformulation strategies**: change the objective ("make it faster" → "eliminate the need for this computation"), change the formalism (a graph problem → a linear algebra problem), change the granularity (per-token → per-span), change the agent ("how should the model learn?" → "how should the data teach?"), change the timescale, or invert the direction (forward simulation → inverse problem).

**Workflow**:
1. State the current problem in one sentence.
2. Identify the hidden assumptions in that statement — the formalism, the objective, the granularity, the implicit agent.
3. For each assumption, generate its alternative: "what if [the opposite]?"
4. Ask whether each alternative makes the problem easier, harder, or usefully different.
5. A reformulation that makes a hard problem easy is often a publishable insight on its own.

## Framework 3: Analogical Reasoning (Structure-Mapping)

Dedre Gentner's structure-mapping theory and Kevin Dunbar's studies of real scientists show analogy is a core engine of scientific creativity — and that **distant** analogies, not nearby ones, drive the most important discoveries; nearby analogies mostly just refine ideas already in hand.

**Depth matters**: surface analogies ("a neural network is like a brain") are low-value; relational analogies (allocation mechanisms transfer across domains) are medium; structural analogies (a deep causal mechanism genuinely maps across domains) are high-value.

**Workflow**:
1. Describe the problem using only relational/causal language — strip out domain-specific nouns.
2. Search for structural matches: what other systems face the same underlying shape of problem?
3. Pick the most *distant* match with genuine structural fidelity, not the closest one.
4. Map how the source domain actually solves it.
5. Transfer and adapt: what changes carrying that mechanism into the new domain?
6. Generate a prediction — the analogy should tell you something you didn't already know.

**Validation checklist**: Does the mapping preserve causal/relational structure, not just labels? Is there at least one testable prediction? Would an expert in the source domain confirm the mechanism is correctly understood? Is it non-obvious to the target audience?

## Framework 4: Constraint Manipulation (Boden's Framework)

Margaret Boden distinguishes three forms of creativity by how they interact with constraints: **exploratory** (search within the existing space — hyperparameter tuning), **combinational** (combine elements from different spaces — multi-task learning), and **transformational** (change the rules of the space itself — dropping the assumption that training needs labels). Transformational creativity is the rarest and highest-impact: it changes what even counts as a valid solution.

**Workflow**:
1. List 5–10 constraints of the current approach — computational, methodological, architectural, evaluative.
2. Classify each: **hard** (physically or logically necessary), **soft** (convention or historical accident), or **hidden** (not stated but implicitly assumed — the most fertile category).
3. For each soft or hidden constraint, ask: what if it were relaxed? Tightened? Replaced entirely?
4. The most productive move is usually exposing and dropping a hidden constraint nobody had named as a constraint at all.

**Classic transformations**: "data must fit in memory" dropped → streaming algorithms. "Training requires labels" dropped → self-supervised learning. "Models must be deterministic" dropped → diffusion models.

## Framework 5: Negation and Inversion

Take a core assumption in the field and negate it — formalized in De Bono's lateral thinking and engineering's TRIZ methodology. The pattern: "what if [widely held assumption] is wrong, unnecessary, or invertible?"

**Workflow**:
1. List 5–10 core assumptions in the subfield — the things "everyone knows."
2. Negate each one and ask what system would follow.
3. Evaluate: incoherent → discard; already explored → check whether the conditions have since changed; unexplored and coherent → a real research direction.

**Negation hall of fame**: "we need strong consistency" negated → eventual consistency, CRDTs. "We need exact answers" negated → sketches, approximate nearest neighbors. "Errors must be prevented" negated → speculative decoding, self-correction.

**TRIZ-inspired moves to try directly**: inversion (reverse the process — generative vs. discriminative), segmentation (monolithic → modular), merging (combine separate steps — end-to-end learning), nesting (one system inside another — meta-learning), dynamization (make a static thing adaptive).

## Framework 6: Abstraction and Generalization Laddering

Moving up and down the abstraction ladder is a fundamental creative act — Polya's heuristics: "can you solve a more general problem? A more specific one? An analogous one?"

**Generalize** ("is my result a special case of something broader?") when there are results but no explanation. **Specialize** (add extreme constraints — tiny data, adversarial inputs, real-time requirements — and see what breaks) when there's theory but no grounding; the failure case often reveals the method's true hidden assumptions. **Analogize** (Framework 3) when stuck in either direction.

## Framework 7: The Adjacent Possible

Stuart Kauffman's concept, popularized by Steven Johnson: innovation happens at the boundary of what's currently reachable. A new idea becomes thinkable only once its prerequisites exist — which is exactly why simultaneous independent discovery is so common; multiple people reach the same boundary around the same time.

**Workflow**:
1. List recent enablers (the last 1–3 years): new hardware capability, a new dataset or benchmark, a new open-source tool, a new theoretical result, a new regulatory or social condition.
2. For each, ask: what was previously impossible or impractical that this now permits?
3. Combine enablers — the most powerful adjacent possibles usually arise at the intersection of two or more new ones.
4. Check for competition: if many people can see the same adjacent possible at once, speed or a genuinely unique angle matters.

**Timing signal**: if an idea needs technology that doesn't exist yet, it's beyond the adjacent possible — park it. If it could have been done 5 years ago, someone probably already did it — check the literature. The sweet spot is an idea that became feasible in roughly the last 6–18 months.

## Framework 8: Janusian and Dialectical Thinking

Albert Rothenberg's studies of eminent creators found that holding two contradictory ideas simultaneously — named for Janus, the two-faced god — is a real hallmark of creative thinking. It doesn't resolve a contradiction by picking a side; it generates a new framework that transcends the opposition entirely. (Consistency *and* availability, formalized rather than chosen-between, produced the CAP theorem and then practical middle grounds like CRDTs.)

**Workflow**:
1. Identify a binary in the field — two approaches or goals treated as opposites.
2. Resist choosing a side. Ask instead: what would a system look like that achieves both? Under what conditions is the trade-off not actually fundamental? Is the opposition itself an artifact of how the problem got formalized?
3. Seek a synthesis — usually a new abstraction that reframes the relationship rather than splitting the difference.
4. Test whether the synthesis can be demonstrated empirically, not just argued for.

**Self-check**: Is the contradiction held genuinely, not prematurely resolved? Is the synthesis a real new idea, not a compromise? Does it change how people think about the problem, not just the solution?

## Combining Frameworks: A Creative Thinking Protocol

The frameworks are most powerful combined into one session:

**Phase 1 — Map the space**: constraint manipulation (F4) to list what's hard/soft/hidden in the current paradigm; adjacent possible (F7) to list recent enablers changing the feasibility landscape.

**Phase 2 — Generate disruptions**: negation (F5) on 3 soft/hidden constraints; bisociation (F1) with a genuinely distant field; problem reformulation (F2) — restate the problem 3 different ways.

**Phase 3 — Deepen promising leads**: analogical reasoning (F3) for a structural analogy and a real prediction on each promising idea; abstraction laddering (F6) up and down; Janusian thinking (F8) on any tensions that surfaced.

**Phase 4 — Evaluate**: apply a two-sentence test to every survivor — *"[Domain] currently struggles with [problem] because [reason]. We [approach] by [mechanism], which works because [insight]."* An idea that survives all four phases and passes this test is worth pursuing.

## Common Creative Blocks and Which Framework Unblocks Them

| Block | Symptom | Apply |
|---|---|---|
| Fixation | Can't stop thinking about the problem one way | Problem Reformulation (F2) |
| Tunnel vision | Every idea comes from the same subfield | Bisociation (F1) or Analogical Reasoning (F3) |
| Self-censoring | Dismissing ideas as "too weird" before exploring | Negation (F5) — weird is the point; evaluate after generating |
| Incrementalism | Every idea is "+2% on benchmark X" | Constraint Manipulation (F4) |
| Analysis paralysis | Too many options, can't commit | Adjacent Possible (F7) |
| False dichotomy | Stuck choosing between two approaches | Janusian Thinking (F8) |

## Usage Guidance

1. **Assess the block first** — which failure mode above matches what's actually happening?
2. **Select 2–3 frameworks** based on that block, not all eight at once.
3. **Walk through each interactively**, with the researcher supplying the actual domain-specific content — the frameworks are cognitive scaffolding, not a source of domain knowledge.
4. **Push for structural depth.** If an analogy or combination reads as surface-level, probe further before accepting it.
5. **Keep a running list of everything generated**, including the unusual ideas — premature filtering is the most common way this kind of session underperforms.
6. **Apply the two-sentence test** only to candidates that survive exploration, not as a gate on generation itself.

## Tips

- Generative mode first, evaluative mode second — filtering too early is the single most common way a creative session collapses back into incrementalism.
- Distant analogies are more valuable than nearby ones, but they need more validation work before trusting them — don't skip the structural-fidelity check just because a distant analogy feels exciting.
- The researcher's actual domain expertise is essential to every framework here — none of these substitute for knowing the field; they scaffold how to think *about* it differently.

## Limitations

- These are ideation frameworks, not evaluation or prioritization tools — pair with a structured brainstorming or research-planning process for converging on what to actually pursue.
- Best suited to genuinely open-ended ideation; a well-scoped problem that just needs execution doesn't benefit from this level of cognitive scaffolding.
- The frameworks generate candidates; they don't validate feasibility, novelty against the literature, or resource requirements — treat survivors as hypotheses worth investigating, not finished research directions.
