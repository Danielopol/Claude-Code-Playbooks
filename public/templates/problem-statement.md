# Problem Statement

Write a user-centered problem statement using the empathy-driven framework: who is blocked, what they're trying to do, why it matters, and how it feels. A human-centered narrative that ensures you're solving a problem worth solving.

Not a requirements doc. Not a solution in disguise.

## The Framework

```markdown
**I am:** [persona experiencing the problem]
**Trying to:** [desired outcomes the persona cares about]
**But:** [barriers preventing the outcomes]
**Because:** [root cause]
**Which makes me feel:** [emotional impact]
```

Plus **Context & Constraints** (geographic, tech, time, demographic) and a **Final Problem Statement** (one-sentence empathetic summary).

## Why This Structure Works

- **Persona-centric** — see the problem through user's eyes
- **Outcome-focused** — emphasizes results, not tasks
- **Root cause** — pushes past symptoms
- **Emotional validation** — humanizes the problem
- **Contextual** — acknowledges real-world constraints

**Anti-patterns:** Not a solution in disguise ("we lack AI analytics"). Not a business problem ("revenue down"). Not a feature request ("users need a dashboard"). Not generic ("better UX").

## When to Use

**Use:** Discovery kickoff, stakeholder alignment, socializing problems with eng/design/exec, pitching why a problem matters.
**Don't use:** Before any user research (interview first), internal operational problems, as PRD substitute.

## Application

### Step 1: Gather User Context

- User interviews/research (quotes, behaviors, pains)
- JTBD insights (`jobs-to-be-done`)
- Persona clarity (`proto-persona`)
- Constraints data

If missing: run discovery. Don't fabricate.

### Step 2: Draft the Problem Framing Narrative

```markdown
**I am:** [Persona, 3-4 key characteristics]
- [Pain/characteristic 1]
- [Pain/characteristic 2]
- [Pain/characteristic 3]

**Trying to:**
- [Desired outcomes the persona cares most about]

**But:**
- [Barrier 1]
- [Barrier 2]
- [Barrier 3]

**Because:**
- [Root cause, empathetically described]

**Which makes me feel:**
- [Real emotions from research]
```

**Quality checks:** Specific persona, outcome-focused "trying to," real barriers, root cause (not symptom), authentic emotions.

### Step 3: Document Context & Constraints

```markdown
## Context & Constraints
- [Geographic / tech / time / demographic factor]
- [e.g., "Must work offline in rural areas"]
- [e.g., "Used by non-technical users"]
- [e.g., "Decisions must be made within 24 hours"]
```

### Step 4: Craft the Final Problem Statement

Formula: `[Persona] needs a way to [desired outcome] because [root cause], which currently [emotional/practical impact].`

**Example:** "Enterprise IT admins need a way to provision user accounts in under 5 minutes because current processes take 2+ hours with manual approvals, which causes project delays and frustrated end-users."

**Quality:** One sentence, measurable, empathetic, shareable.

### Step 5: Validate & Socialize

- Read aloud to people who experience it. Do they say "Yes, exactly!"?
- Share with product/eng/design/exec
- Iterate if anyone says "that's not the real problem"

## Mini Example

```markdown
**I am:** A software developer on a distributed team
**Trying to:** Communicate in real-time without losing context
**But:** Email is too slow and IM is ephemeral
**Because:** No tool combines real-time chat with searchable history
**Which makes me feel:** Frustrated and disconnected
```

## Common Pitfalls

1. **Solution smuggling** ("we don't have feature X") → reframe around outcome
2. **Business problem disguised** ("users want to increase our revenue") → user perspective
3. **Generic personas** ("busy professional") → specific role + behavior
4. **Symptom instead of root cause** ("UI is confusing") → keep asking why
5. **Fabricated emotions** ("makes me feel empowered") → use real interview quotes

## References

- `jobs-to-be-done` — informs "Trying to" and "But"
- `proto-persona` — defines "I am"
- `positioning-statement` — problem informs positioning
- `user-story` — guides story prioritization

**External:** Christensen *Jobs to Be Done*, Osterwalder *Value Proposition Canvas*, Dave Gray *Empathy Mapping*.
