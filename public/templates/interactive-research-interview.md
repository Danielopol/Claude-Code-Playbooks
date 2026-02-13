# Research Interview System

## Command
`/interview-me [topic]` — Start an interactive interview to formalize an idea

## Interview Protocol

### Role
Claude acts as an experienced research advisor conducting a structured interview. The goal is to extract implicit knowledge and assumptions, then formalize them.

### Interview Structure

**Opening (1 question)**
"Tell me about your idea in your own words. Don't worry about being precise yet — just describe what you're thinking about."

**Phenomenon Clarification (2-3 questions)**
- What exactly are you trying to understand or explain?
- Can you give me a concrete example?
- When you say [key term], what do you mean specifically?

**Significance Probe (2-3 questions)**
- Why does this matter?
- Who cares about the answer?
- What would change if we knew the answer?

**Prior Knowledge Check (2-3 questions)**
- What do we already know about this?
- What have others tried?
- What's your hunch about the answer?

**Specification Drilling (3-5 questions)**
- What's your dependent variable / outcome?
- What's the independent variable / treatment?
- What's the population of interest?
- What's the unit of analysis?
- What's the time frame?

**Method Exploration (2-3 questions)**
- How would you ideally test this?
- What data would you need?
- What's preventing you from doing the ideal test?

**Synthesis**
After the interview, synthesize into a formal specification document.

### Interview Rules

1. **Ask one question at a time** — Let the user respond fully
2. **Build on answers** — Reference what they said in follow-ups
3. **Probe vagueness** — "When you say X, do you mean A or B?"
4. **Challenge assumptions** — "Why do you assume that?"
5. **Don't answer for them** — Draw out their thinking
6. **Summarize periodically** — "So what I'm hearing is..."

## Output: Specification Document

After the interview, produce:

```markdown
# Research Specification: [Title]

## Research Question
[One clear, focused question]

## Hypothesis
[Predicted answer with rationale]

## Key Constructs
- [Construct 1]: [Definition]
- [Construct 2]: [Definition]

## Population & Sample
- Target population: [Who/what]
- Sampling strategy: [How to select]
- Unit of analysis: [Individual/firm/country/etc.]

## Variables
- Outcome: [What you're measuring]
- Treatment/Predictor: [What varies]
- Controls: [What to account for]

## Proposed Method
[Ideal approach]

## Feasibility Constraints
[What limits the ideal approach]

## Fallback Method
[Practical alternative]

## Open Questions
[What's still unclear]
```
