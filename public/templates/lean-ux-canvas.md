# Lean UX Canvas (v2)

Guide product managers through **Jeff Gothelf's Lean UX Canvas (v2)** — a one-page facilitation tool that frames work around a **business problem to solve**, not a **solution to implement**. Align cross-functional teams around assumptions, craft testable hypotheses, and ensure learning happens every sprint.

Not a roadmap or feature list — an **"insurance policy"** that turns assumptions into experiments before committing to full development.

## Canvas Structure (8 Boxes)

```
┌─────────────────────┬──────────────┬───────────────────────┐
│ 1. Business Problem │              │ 2. Business Outcomes  │
├─────────────────────┤ 5. Solutions ├───────────────────────┤
│ 3. Users            │              │ 4. User Outcomes      │
│                     │              │    & Benefits         │
├─────────────────────┤──────────────┼───────────────────────┤
│ 6. Hypotheses       │ 7. Learn     │ 8. Experiments        │
│                     │    First     │                       │
└─────────────────────┴──────────────┴───────────────────────┘
```

Fill in order: 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8.

## Key Distinctions

- **Box 2 (Business Outcomes) vs. Box 4 (User Outcomes):** Box 2 = measurable behavior change (metrics). Box 4 = goals/benefits/emotions (empathy).
- **Box 5 Solutions = hypotheses, not commitments.** List candidate features, policies, business model shifts — explore, don't commit.
- **Hypotheses must be testable.** Template: "We believe [outcome] will be achieved if [user] attains [benefit] with [solution]."

## Anti-Patterns

- Not a feature list (solutions = ideas to test)
- Not a project plan (frames learning, not delivery)
- Not a replacement for strategy (executes strategy)
- Not a one-time exercise (re-visit as you learn)

## When to Use

**Use:** New initiative, reframing existing project, aligning cross-functional on assumptions, discovery sprint / MVP planning, solution-driven stakeholders.
**Don't use:** Problem + solution already validated, tactical fixes, stakeholders committed regardless of evidence.

## Application (8 Adaptive Questions)

### Step 0: Gather Context

- **Business:** Stakeholder request, brief, metrics (revenue, churn, growth), OKRs
- **User:** Research, personas, JTBD, feedback, churn reasons, competitor analysis

### Question 1: Business Problem (Box 1)

"What problem does the business have that you are trying to solve?"

Describe: **current state** (how business delivers value today), **what changed** (market shift, competitive threat, customer behavior), **why it matters** (why isn't current situation meeting expectations?).

**Good:** "Checkout conversion dropped 15% after mobile traffic surpassed desktop. Competitors have one-tap checkout."
**Bad:** "We need to increase revenue" (no context on what changed)

### Question 2: Business Outcomes (Box 2)

"How will you know you solved it? What will you measure?"

Focus on measurable **behavior change** (leading indicators welcome).

Examples: "Mobile conversion 45% → 60%" / "Enterprise onboarding 3 weeks → 3 days" / "AOV $50 → $75" / "Support tickets -30%"

**Important:** This is behavior change metrics, NOT emotions (those go in Box 4).

### Question 3: Users (Box 3)

"Which persona(s) should you focus on first?"

Consider: who **buys**, **uses**, **configures**, **administers**? Don't say "everyone." Pick one persona to start.

Examples: "SMB owners (1-10 employees) in professional services" / "Enterprise IT admins configuring SSO for 500+ employees"

### Question 4: User Outcomes & Benefits (Box 4)

"Why would users seek your product? What benefit do they gain?"

Focus on **goals, benefits, emotions, empathy** — not metrics.

Examples: "Save 10 hrs/week on data entry (spend more time with family)" / "Get promoted by delivering faster" / "Avoid embarrassment of failed checkout"

### Question 5: Solutions (Box 5)

"What can we make that solves the business problem AND meets user needs?"

List **features, initiatives, policies, systems, business model shifts**. Encourage wide exploration (big/small, innovative, "weird," non-technical).

Examples: One-tap mobile checkout / self-service onboarding wizard / AI recommendations / concierge onboarding / usage-based pricing

Force 3+ candidate solutions.

### Question 6: Hypotheses (Box 6)

Combine Boxes 2-5 using this template:

> **We believe that** [business outcome] **will be achieved if** [user] **attains** [benefit] **with** [solution].

Each hypothesis focuses on **one** solution from Box 5.

Example: "We believe that increasing mobile conversion 45%→60% will be achieved if mobile-first millennials attain friction-free checkout with one-tap Apple Pay."

### Question 7: Learn First (Box 7)

For each hypothesis, identify riskiest assumption. Types of risk:

- **Value risk:** Will users use this? Do they care?
- **Usability risk:** Can they figure out how?
- **Feasibility risk:** Can we build it?
- **Viability risk:** Will this achieve the business outcome?

**Hint:** Early on, prioritize **value** risk over feasibility.

### Question 8: Experiments (Box 8)

Design smallest experiment to validate/invalidate riskiest assumption.

**Experiment types:**
- **Customer interviews** — 5-10 interviews test value hypothesis
- **Landing page** — Fake door, measure interest
- **Concierge** — Manual, high-touch before automating
- **Wizard-of-Oz** — Humans behind the scenes
- **Smoke test** — Announce feature, measure signups

If >2 weeks, break it down smaller.

### Step 9: Review and Iterate

Run experiment → document learnings → update canvas (revise hypotheses, pick next riskiest) → iterate until confidence to build.

## Examples

```markdown
Box 1: Mobile checkout conversion 15% lower than desktop
Box 2: Mobile conversion 45% → 60%
Box 3: Mobile-first millennials, 25-35
Box 4: Friction-free checkout, avoid abandonment embarrassment
Box 5: One-tap Apple Pay; autofill; guest checkout; reduced form fields
Box 6: We believe conversion 45→60% achieved if millennials attain friction-free checkout with one-tap Apple Pay
Box 7: Value risk — will they trust one-tap without seeing itemized charges?
Box 8: Wizard-of-Oz test with 50 users, measure trust signals and completion
```

## Common Pitfalls

1. **Starting with solutions, not problems** — Box 1 says "build X" instead of describing what changed
2. **Vague outcomes** — "Increase revenue" has no measurable behavior change
3. **Too-broad users** — "All users" prevents targeted experiments
4. **Confusing Box 2 and Box 4** — Metrics go in 2, empathy in 4
5. **One solution in Box 5** — Force 3+; stakeholders already decided is a red flag
6. **Skipping experiments** — "We'll build and see" wastes months on wrong thing

## References

- `problem-statement` — Frame problem before Box 1
- `problem-framing-canvas` — MITRE framing before canvas
- `proto-persona` — Personas for Box 3
- `jobs-to-be-done` — Benefits for Box 4
- `epic-hypothesis` — Testable hypotheses (Box 6)
- `discovery-interview-prep` — Interviews for Box 8
- `pol-probe-advisor` — Choose experiment type for Box 8
- **Jeff Gothelf** — *Lean UX* (O'Reilly, 2013; 2nd ed. 2016), [Lean UX Canvas v2](https://jeffgothelf.com/blog/leanuxcanvas-v2/)
