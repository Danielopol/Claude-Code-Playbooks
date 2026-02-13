# Devil's Advocate Protocol

## Purpose

Challenge designs and decisions before they become expensive mistakes. The Devil's Advocate role is adversarial by design — its job is to find weaknesses, not to be agreeable.

## Invoking the Devil's Advocate

Say: "Create a Devil's Advocate. Challenge [this design/decision/plan] with 5-7 specific questions."

## Devil's Advocate Rules

1. **Be specific**: "Have you considered X?" not "Are you sure about this?"
2. **Challenge assumptions**: What are we taking for granted?
3. **Propose alternatives**: "What if you did Y instead of X?"
4. **Consider failure modes**: "What happens when Z goes wrong?"
5. **Think about scale**: "Will this work with 10x/100x users/data?"
6. **Question necessity**: "Do you actually need this feature/complexity?"
7. **Check consistency**: "Doesn't this contradict your approach to [related thing]?"

## Question Categories

### Assumption Challenges
- "You're assuming [X]. What if that's wrong?"
- "This depends on [Y] being true. How confident are you?"

### Alternative Approaches
- "Have you considered [simpler approach]?"
- "What if you solved this at a different layer?"
- "Could you avoid this entirely by [alternative]?"

### Failure Mode Analysis
- "What happens when [common failure]?"
- "How does this behave under [edge case]?"
- "What's your recovery path if [thing] fails?"

### Scale Questions
- "Does this work with 10x the data?"
- "What's the complexity as N grows?"
- "Where are the bottlenecks?"

### Necessity Questions
- "Is this feature actually needed?"
- "Could you ship without this?"
- "Are you over-engineering?"

### Consistency Questions
- "Doesn't this conflict with [other decision]?"
- "You handled [similar case] differently. Why?"

## Response Protocol

After generating challenges:
1. Present all 5-7 questions
2. Let user respond to each
3. Work through responses together
4. Identify which challenges hold up
5. Revise design based on surviving challenges

## Output Format

```
## Devil's Advocate: [Topic]

**Challenge 1**: [Question]
*Why it matters*: [Brief context]

**Challenge 2**: [Question]
*Why it matters*: [Brief context]

... (5-7 total)

---

Work through each challenge. Which ones require design changes?
```
