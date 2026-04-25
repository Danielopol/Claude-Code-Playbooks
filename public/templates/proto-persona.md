# Proto-Persona

Create a lightweight, hypothesis-driven persona from current research, market signals, and team knowledge. A working customer profile that prevents design-by-committee while acknowledging you don't have all the answers yet.

Not a validated persona. Not demographic data alone. Not permanent.

## Proto vs. Validated

| Proto-Persona | Validated Persona |
|---------------|-------------------|
| Hours/days | Weeks/months |
| Assumptions + limited research | Extensive user research |
| Aligns teams early | Guides detailed design |
| Evolves rapidly | Stable |
| Good enough to start | High confidence |

## Why Use Proto-Personas

- **Speed** — align teams without months of research
- **Focus** — shared "who we're building for"
- **Hypothesis framing** — assumptions explicit, then validate
- **Prevents generic design** — design for everyone = design for no one

**Anti-patterns:** Not validated research. Not a research replacement. Not demographics alone. Not permanent.

## When to Use

**Use:** Early-stage development, new feature/pivot kickoff, stakeholder alignment, identifying research gaps.
**Don't use:** After extensive research (graduate to validated), mature products with known segments, as quantitative substitute.

## Application

### Step 1: Gather Available Context

- User research (interviews, surveys, tickets)
- Analytics (usage, demographics, behaviors)
- Market data (industry reports, competitors)
- Stakeholder insights (sales, support, CS)
- Product context (`problem-statement`)

If missing: note gaps. Don't fabricate.

### Step 2: Define Identity

**Name** — alliterative, memorable ("Manager Mike," "Startup Sarah").

**Bio & Demographics** (only those that influence product decisions):
- Age range
- Geographic location
- Social status
- Online presence
- Leisure activities
- Career status

Behavioral, not just demographic. "Works remotely, active in Slack communities" beats "30-40, lives in SF."

### Step 3: Capture Voice

**Quotes** (real or representative):
- Reveal mindset, not just facts
- "I'm drowning in manual work and can't focus on strategy" beats "I need better tools"

If no real quotes: tag `[PLACEHOLDER—NEEDS RESEARCH]`.

### Step 4: Document Context

**Pains** — specific problems related to your product space.

**What they're trying to accomplish** — observable behaviors/outcomes (not internal goals).

**Goals** — short-term + long-term, personal + professional.

### Step 5: Understand Influences

**Decision-Making Authority** — yes/no + context (budget limits, approval levels).

**Decision Influencers** — boss, peer Slack channels, analyst reports, Twitter, etc.

**Beliefs & Attitudes** — focus on those affecting adoption ("skeptical of training-heavy tools," "values data-driven decisions").

### Step 6: Validate & Iterate

- Share with team — does it resonate?
- Tag uncertainties: `[ASSUMPTION—VALIDATE]`
- Plan research to fill gaps
- Update as you learn; graduate to validated when confident

## Mini Example

```markdown
### Name
Manager Mike

### Quotes
- "I spend more time in status meetings than actually building product."
- "My team expects answers immediately, but I'm constantly searching for data."

### Pains
- 10 hours/week in low-value meetings
- Can't find historical decisions across tools

### Trying to accomplish
- Deliver projects 2 weeks ahead of schedule
- Make data-driven decisions without 3-hour data hunts
```

## Common Pitfalls

1. **Demographics without behavior** → add "remote, async-first, 5 Slack communities"
2. **Treating proto as fact** → use `[ASSUMPTION—VALIDATE]` tags
3. **10 proto-personas** → start with 1-2 (primary + secondary)
4. **Fabricated quotes** → mark as placeholder until research
5. **Never validating** → plan research sprints; graduate when confident

## References

- `problem-statement` — persona informs "I am"
- `jobs-to-be-done` — informs pains/goals
- `positioning-statement` — persona is "For [target]"
- `user-story` — "As a [persona]"

**External:**
- Alan Cooper, *The Inmates Are Running the Asylum* (1998)
- Jeff Gothelf, *Lean UX* (2013) — proto-personas
- Indi Young, *Mental Models* (2008)
