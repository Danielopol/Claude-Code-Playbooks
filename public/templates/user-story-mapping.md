# User Story Mapping

Create a hierarchical story map (segment → persona → narrative → activities → steps → tasks) organized as a left-to-right user journey with vertical priority. Visualize *how* users accomplish goals to inform *what* to build.

Not a backlog — a strategic artifact showing the user journey, used to prioritize and identify gaps.

## The Jeff Patton Framework

**Horizontal:** activities → steps → tasks (user journey over time).
**Vertical:** priority (top = MVP, bottom = future).

```
[Activity 1] → [Activity 2] → [Activity 3] → [Activity 4]
     ↓              ↓              ↓              ↓
  Step 1.1       Step 2.1       Step 3.1       Step 4.1
  Step 1.2       Step 2.2       Step 3.2       Step 4.2
     ↓              ↓              ↓              ↓
  Task 1.1.1     Task 2.1.1     Task 3.1.1     Task 4.1.1
  Task 1.1.2     Task 2.1.2     Task 3.1.2     Task 4.1.2
```

## When to Use

- New product or major feature kickoff
- Aligning stakeholders on user workflow
- Prioritizing backlog by user need
- Identifying MVP vs. future releases

**Don't use:** trivial features, constantly-changing workflows, as a stories replacement.

## Application

### Step 1: Define Context

```markdown
### Segment:
[Specific target, e.g., "Freelance graphic designers managing 5-10 clients"]

### Persona:
[Demographics, behaviors, pains, goals — reference proto-persona]

### Narrative:
[One-sentence outcome-focused goal, e.g., "Complete a client project from kickoff to payment"]
```

### Step 2: Identify 3-5 Activities (Backbone)

Sequential, user actions (not product features), left-to-right.

Example:
1. Negotiate scope and pricing
2. Execute design work
3. Deliver final assets
4. Send invoice and receive payment

### Step 3: Break Activities into 3-5 Steps

For each activity, what does the user do?

```markdown
**Activity 1: Negotiate scope**
- Step 1: Review client brief
- Step 2: Draft proposal
- Step 3: Negotiate timeline + budget
```

### Step 4: Break Steps into 5-7 Tasks

Granular, observable, prioritizable actions.

```markdown
**Step 1.1: Review brief**
- Read brief document
- Identify deliverables
- Note budget constraints
- Clarify timeline
- List open questions
```

### Step 5: Prioritize Vertically

- Top rows: MVP / Release 1
- Middle: Release 2
- Bottom: Future / nice-to-have

Draw horizontal release lines.

### Step 6: Identify Gaps

- Missing steps or tasks?
- Pain points not addressed?
- Opportunities to delight?
- Logical flow?

## Common Pitfalls

1. **Activities are features, not behaviors** — "Use the dashboard" vs. "Monitor project progress."
2. **Too many activities** — 10+ means you're mixing activities with steps. Aim for 3-5.
3. **Vague tasks** — "Do the thing." Be specific: "Enter client email in 'Bill To' field."
4. **No vertical prioritization** — all tasks at one level = no MVP clarity.
5. **Mapping in isolation** — PM creates alone. Map with product, design, engineering together.

## References

- `skills/proto-persona` — defines the persona
- `skills/jobs-to-be-done` — informs narrative + activities
- `skills/user-story` — tasks become stories
- `skills/problem-statement` — frames the narrative
- Jeff Patton, *User Story Mapping* (2014)
