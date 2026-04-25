# User Story Mapping Workshop

Run a Jeff Patton story mapping workshop with adaptive questions and a structured 2D map output (backbone activities horizontal, tasks vertical by priority, release slices). Move from flat backlogs to visual story maps that communicate the big picture.

Not a backlog generator — a visual communication framework organized by user workflow (horizontal) and priority (vertical).

## The 2D Structure

**Horizontal (left → right):** Activities in narrative/workflow order — the sequence you'd use explaining the system.

**Vertical (top → bottom):** Priority within each activity, most essential at top.

Walking Skeleton = top row across all activities = minimum viable end-to-end product.

## When to Use

- Starting a new product or major feature
- Reframing an existing flat backlog
- Aligning stakeholders on scope and priority
- Planning MVP and incremental releases

**Don't use:** single-feature projects, well-understood + already-prioritized backlogs, technical refactoring with no user workflow.

## Adaptive Questions (5)

### Q1: Scope
1. Entire product
2. Major feature area (onboarding, checkout, reporting)
3. User journey (job-to-be-done)
4. Redesign / refactor

### Q2: Users / Personas
1. Single persona
2. Multiple personas, shared workflow
3. Multiple personas, different workflows
4. Roles within an organization

### Q3: Generate Backbone (5-8 activities, left-to-right)

Example (e-commerce checkout):
```
Browse → Add to Cart → Review Cart → Shipping → Payment → Confirm → Receive Confirmation
```

### Q4: User Tasks Under Each Activity (3-5 each, top = must-have)

Example (Add to Cart):
```
- Add single item (R1)
- Adjust quantity (R1)
- Add multiple items (R2)
- Save for later (R3)
- Gift wrapping (R3)
```

### Q5: Release Slices

- **Release 1 (Walking Skeleton):** top tasks across ALL activities → end-to-end MVP
- **Release 2 (Enhanced):** second-priority enhancements
- **Release 3 (Polish):** nice-to-haves, edge cases

## Output Template

```markdown
# User Story Map: [Scope]

## Backbone
[A1] → [A2] → [A3] → [A4] → [A5] → [A6]

## Full Map
### A1 [Name]
- Task 1.1 — Must (R1)
- Task 1.2 — Should (R2)
- Task 1.3 — Nice (R3)

[...all activities...]

## Release Slices
### R1: Walking Skeleton (MVP)
- Task 1.1, 2.1, 3.1, 4.1, 5.1, 6.1

### R2: Enhanced
- Task 1.2, 2.2, 3.2, ...

### R3: Polish
- Task 1.3, 2.3, ...
```

## Common Pitfalls

1. **Flat backlog in disguise** — vertical list with no horizontal narrative. Force activities across the top.
2. **Technical architecture as backbone** — "Frontend → Backend → DB". Map user workflow instead.
3. **Feature-complete waterfall** — "R1: build Activity 1 fully". Walking skeleton = thin slice across ALL activities.
4. **Too much detail too soon** — every edge case mapped upfront. Start with backbone, refine later.
5. **Map hidden in a tool** — lives in Jira/Miro, never displayed. Print and post for daily visibility.

## References

- `skills/user-story-mapping` — component skill with mapping template
- `skills/user-story` — converts tasks into detailed stories
- `skills/proto-persona` — defines map users
- `skills/jobs-to-be-done` — informs backbone
- Jeff Patton, *User Story Mapping* (2014)
