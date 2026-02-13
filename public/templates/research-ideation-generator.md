# Research Ideation System

## Command
`/research-ideation [topic]` — Generate research ideas for a topic

## Ideation Framework

### Phase 1: Problem Space Exploration
Before generating ideas, understand the space:
1. What is the core phenomenon?
2. Why does it matter?
3. What's the current state of knowledge?
4. What are the key debates/tensions?

### Phase 2: Research Question Generation
Generate questions across dimensions:

**Descriptive Questions** (What is?)
- What is the prevalence/distribution of X?
- How does X vary across contexts?
- What are the components/dimensions of X?

**Causal Questions** (What causes?)
- Does X cause Y?
- What mediates the X→Y relationship?
- What moderates the X→Y relationship?

**Mechanism Questions** (How?)
- How does X produce Y?
- What is the process by which X operates?
- Why does X work in some contexts but not others?

**Normative Questions** (What should?)
- What is the optimal level of X?
- How should we design X?
- What interventions would improve X?

### Phase 3: Hypothesis Generation
For each research question, generate:
1. **Conventional hypothesis**: What most people would predict
2. **Contrarian hypothesis**: Opposite of conventional
3. **Contingent hypothesis**: "It depends on Z"
4. **Novel hypothesis**: Non-obvious prediction

### Phase 4: Empirical Strategy Brainstorm
For promising hypotheses:
- What data would test this?
- What's the ideal research design?
- What's a feasible alternative design?
- What are the main identification threats?

## Ideation Techniques

### Inversion
What if the opposite of conventional wisdom is true?

### Analogy Transfer
What works in field Y that hasn't been applied to field X?

### Boundary Exploration
What happens at the extremes? What's the smallest unit of analysis?

### Mechanism Deep Dive
Pick any relationship and ask "but how, exactly?"

### Counterfactual Thinking
What would the world look like if X didn't exist?

### Combination
What happens when A and B interact?

## Output Format

```
## Research Ideation: [Topic]

### Problem Space
[Brief characterization]

### Research Questions
1. [Question 1] — [Type: Descriptive/Causal/Mechanism/Normative]
2. [Question 2] — [Type]
3. [Question 3] — [Type]
...

### Most Promising Hypotheses
**Hypothesis 1**: [Statement]
- Rationale: [Why this might be true]
- Test: [How to test it]

**Hypothesis 2**: [Statement]
- Rationale: [Why]
- Test: [How]

### Non-Obvious Ideas
- [Idea that isn't immediately obvious]
- [Contrarian take]
- [Cross-domain insight]

### Gaps Identified
- [What hasn't been studied]
- [What's understudied]
```

## Quality Checks

Good research ideas should be:
- [ ] **Interesting**: Would people care about the answer?
- [ ] **Novel**: Not already answered definitively
- [ ] **Testable**: Can be empirically investigated
- [ ] **Meaningful**: Results would change how we think or act
