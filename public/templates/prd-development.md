# PRD Development

Build a structured PRD (Product Requirements Document) connecting problem, users, solution, and success criteria. Move from scattered Slack threads to a clear, comprehensive document that aligns stakeholders and provides engineering context.

Not a waterfall spec. A living document that captures strategic context, customer problems, proposed solutions, and metrics — and evolves as you learn through delivery.

## What a PRD Answers

1. What problem are we solving?
2. For whom?
3. Why now?
4. What are we building?
5. How will we measure success?
6. What are the requirements?
7. What are we NOT building?

## Standard Structure

```markdown
# [Feature/Product Name] PRD

## 1. Executive Summary
One-paragraph: problem + solution + impact

## 2. Problem Statement
Who, what, why painful, evidence

## 3. Target Users & Personas
Primary + secondary personas, JTBD

## 4. Strategic Context
Business goals (OKRs), market opportunity, competitive context, why now

## 5. Solution Overview
High-level description, user flows, key features

## 6. Success Metrics
Primary, secondary, guardrails

## 7. User Stories & Requirements
Epic hypothesis, stories with acceptance criteria, edge cases

## 8. Out of Scope
What we're NOT building and why

## 9. Dependencies & Risks
Technical, external, team dependencies + mitigations

## 10. Open Questions
Unresolved decisions
```

## When to Use

**Use:** Major feature/product initiative, cross-functional alignment needed, documenting decisions for future reference, onboarding new team members.
**Don't use:** Small bug fixes, problem already aligned (just write stories), continuous discovery experiments (use Lean UX Canvas).

## Application: 8 Phases over 2-4 Days

### Phase 1: Executive Summary (30 min)

Format: "We're building [solution] for [persona] to solve [problem], which will result in [impact]."

Write first (forces clarity), refine last.

### Phase 2: Problem Statement (60 min)

Use `problem-statement`. Include:
- **Who:** Specific persona (not "users")
- **What:** The actual problem (not solution disguise)
- **Why painful:** User + business impact
- **Evidence:** Customer quotes, analytics, support tickets

### Phase 3: Target Users & Personas (30 min)

Use `proto-persona`. Document primary + secondary personas: role, company size, tech savvy, goals, pains, current behavior.

### Phase 4: Strategic Context (45 min)

- **Business goals** linked to OKRs
- **Market opportunity** — `tam-sam-som-calculator` (optional)
- **Competitive landscape**
- **Why now** — urgency rationale

### Phase 5: Solution Overview (60 min)

High-level (2-3 paragraphs), user flows, key features. Optional: wireframes, story map (`user-story-mapping-workshop`).

Keep high-level. Let design own UI details.

### Phase 6: Success Metrics (30 min)

- **Primary metric** — the ONE you optimize for (current → target, timeline)
- **Secondary metrics** — additional indicators
- **Guardrail metrics** — what must NOT regress

### Phase 7: User Stories & Requirements (90-120 min)

Use `epic-hypothesis`, `epic-breakdown-advisor`, `user-story`. Output: hypothesis + 3-10 stories with acceptance criteria + constraints/edge cases.

### Phase 8: Out of Scope & Dependencies (30 min)

- **Out of scope** with rationale
- **Dependencies** — design, engineering, external
- **Risks + mitigations**
- **Open questions**

## Workflow Summary

```
Day 1: Phases 1-4 (summary, problem, personas, strategy)
Day 2: Phases 5-7 (solution, metrics, stories)
Day 3: Phase 8 + review/refine
Day 4 (optional): Stakeholder review
```

**Time investment:** Fast track 1.5-2 days; typical 2-3 days; complex 3-4 days.

## Common Pitfalls

1. **PRD written in isolation** → collaborate on stories with design + eng before finalizing
2. **No evidence in problem statement** → quotes, analytics, tickets required
3. **Solution too prescriptive (pixel-level UI)** → keep high-level; let design own details
4. **No success metrics** → always define primary metric
5. **Out of scope undocumented** → explicit list prevents scope creep

## References

**Phase 2:** `problem-statement`, `problem-framing-canvas`, `customer-journey-mapping-workshop`
**Phase 3:** `proto-persona`, `jobs-to-be-done`
**Phase 4:** `tam-sam-som-calculator`
**Phase 5:** `user-story-mapping-workshop`
**Phase 7:** `epic-hypothesis`, `epic-breakdown-advisor`, `user-story`

**External:**
- Martin Eriksson, *How to Write a Good PRD* (2012)
- Marty Cagan, *Inspired* (2017)
- Amazon, *Working Backwards* (PR/FAQ alternative)
