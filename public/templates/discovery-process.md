# Discovery Process

Guide product managers through a complete discovery cycle—from initial problem hypothesis to validated solution—by orchestrating problem framing, customer interviews, synthesis, and experimentation into a structured 6-phase process.

This is not a one-time research project. It's a continuous discovery practice that runs in parallel with delivery, typically 1–2 cycles per quarter.

## The Six Phases (Teresa Torres, Marty Cagan)

1. **Frame the Problem** — Define what you're investigating and why
2. **Conduct Research** — Gather qualitative and quantitative evidence
3. **Synthesize Insights** — Identify patterns, pain points, opportunities
4. **Generate Solutions** — Explore multiple options
5. **Validate Solutions** — Test assumptions through experiments
6. **Decide & Document** — Commit to build, pivot, or kill

## What This Is NOT

- **Not waterfall research** — Discovery runs continuously, not once before dev
- **Not user testing** — Discovery validates problems; testing validates solutions
- **Not a substitute for shipping** — Informs delivery, doesn't replace it

---

## Phase 1: Frame the Problem (Day 1–2)

**Goal:** Define what you're investigating, who's affected, success criteria.

### Activities

1. **Problem Framing Canvas** — Interactive (MITRE), 120 min, PM + design + eng lead → Problem statement + "How Might We"
2. **Formal Problem Statement** — 30 min, PM → Structured statement with hypothesis
3. **Proto-Personas** (if needed) — 60 min → Hypothesis-driven personas
4. **Jobs-to-be-Done** (if needed) — 60 min → JTBD statements

### Outputs

- Problem hypothesis: "We believe [persona] struggles with [problem] because [root cause], leading to [consequence]."
- 3–5 research questions
- Success criteria: what would validate/invalidate?

### Decision Point 1: Enough context to start research?

**No →** gather existing data first (support tickets, churn surveys, NPS, analytics, competitors). +2–3 days.

---

## Phase 2: Research Planning (Day 3)

**Goal:** Design research approach, recruit participants, prepare guide.

### Activities

1. **Prep Discovery Interviews** — Interactive, 90 min → Interview plan
2. **Recruit Participants** — 5–10 per cycle (Torres: 1/week ongoing)
   - Channels: existing customers (email/in-app), churned customers (exit), cold outreach (LinkedIn, communities)
   - Incentive: $50–100 gift card or product credit
3. **Schedule Interviews** — 45–60 min each, spread 1–2 weeks, record with consent

### Outputs

- Interview guide (5–7 open-ended Mom Test questions)
- Participant roster (5–10 scheduled)
- Synthesis plan

---

## Phase 3: Conduct Research (Week 1–2)

**Goal:** Gather qualitative evidence.

### Activities

1. **Conduct Interviews** — PM + optional observer, 5–10 over 1–2 weeks
   - Past behavior: "Tell me about the last time you [experienced problem]"
   - Workarounds: "How do you currently handle this?"
   - Alternatives: "Have you tried other solutions? Why stop?"
   - Pain intensity: "How much time/money does this cost you?"

2. **Structured Notes** per interview:
   - Participant (name, role, company size)
   - Context (when/where problem occurs)
   - Actions (step-by-step)
   - Pain points, workarounds, quotes, insights

3. **Review Support Tickets & Analytics (Parallel)**
   - Support: tag top 10 issues by theme
   - Analytics: drop-off points, feature usage, cohort behavior
   - Surveys: NPS comments, exit surveys, feature requests

### Outputs

- Interview transcripts + notes
- Support ticket themes (top 10)
- Analytics insights ("60% abandon onboarding at step 3")

### Decision Point 2: Saturation?

Saturation = same pain points across 3+ interviews, no new insights.

**No →** schedule 3–5 more. +1 week.

---

## Phase 4: Synthesize Insights (End Week 2)

**Goal:** Identify patterns, prioritize pain points, map opportunities.

### Activities

1. **Affinity Mapping** — 90–120 min
   - Write insights/quotes on sticky notes
   - Group by theme
   - Count frequency per theme
   - Output: themed clusters

2. **Customer Journey Map** (optional) — 90 min, if pain spans multiple phases → Map with opportunities ranked by impact

3. **Prioritize Pain Points** — Score 1–5 on:
   - **Frequency:** How many mentioned?
   - **Intensity:** How painful? (time, money, emotion)
   - **Strategic fit:** Aligns with business goals?
   Output: ranked top 3–5

4. **Update Problem Statement** — Did hypothesis hold? Refine.

### Outputs

- Affinity map with frequencies
- Top 3–5 pain points (frequency × intensity × strategic fit)
- 3–5 verbatim quotes per pain point
- Validated problem statement

---

## Phase 5: Generate & Validate Solutions (Week 3)

**Goal:** Explore options, design experiments, validate assumptions.

### Activities

1. **Opportunity Solution Tree** — 90 min, PM + design + eng lead → 3 opportunities × 3 solutions + POC recommendation
   - Alternative: **Lean UX Canvas** for hypothesis-driven approach

2. **Design Experiments** — "Least work to learn next most important thing"
   - **Concierge test:** Manually deliver to 10 customers
   - **Prototype test:** Clickable mockup, usability test with 10
   - **Landing page test:** Fake door, measure interest
   - **A/B test:** Minimal version, 50% of users
   Define: success criteria, metric/behavior that validates

3. **Run Experiments** — 1–2 weeks each → validation data

### Outputs

- 3–9 solution options
- Experiment results (validated/invalidated)
- Qualitative feedback on prototypes

### Decision Point 3: Validated?

**No →** pivot to next solution, re-run. +1–2 weeks.

---

## Phase 6: Decide & Document (End Week 3–4)

**Goal:** Commit to build, document, communicate.

### Activities

1. **Go/No-Go Decision** based on:
   - Problem validated? (Phase 3–4)
   - Solution validated? (Phase 5)
   - Strategic fit?
   - Feasible? (capacity, complexity)
   - Result: **GO** (roadmap + epics), **PIVOT** (alternative solution), or **KILL** (de-prioritize)

2. **Epic Hypotheses** (if GO) — 60 min per epic → Testable epic statements

3. **PRD** (if GO) — 1–2 days → Structured PRD with problem, solution, success metrics

4. **Communicate Findings** — 30-min readout
   - Problem validation (Phase 3–4)
   - Solution validation (Phase 5)
   - Recommendation
   Output: exec alignment

### Outputs

- Decision: GO / PIVOT / KILL
- Epic hypotheses (if GO)
- PRD (if GO)
- Stakeholder alignment

---

## End-to-End Timeline

```
Week 1: Frame problem → Plan research → Start interviews
Week 2: Complete interviews → Synthesize → Decision: saturated?
Week 3: Generate solutions → Run experiments → Decision: validated?
Week 4: Decide & document → Communicate findings

Total: 3 weeks (fast) / 4 weeks (typical) / 6–8 weeks (thorough)
```

## Common Pitfalls

1. **Skipping customer interviews** — Analytics + support only misses the "why." Fix: always interview 5–10.
2. **Asking leading questions** — "Would you use feature X?" → confirmation bias. Fix: Mom Test past behavior.
3. **Not reaching saturation** — 2–3 interviews isn't representative. Fix: continue until patterns emerge across 3+ customers (typically 5–7 minimum).
4. **Analysis paralysis** — 6 weeks synthesizing. Fix: time-box to 3–4 weeks; move to execution.
5. **Discovery as one-time activity** — Done once, never repeated. Fix: continuous discovery — 1 interview/week, ongoing.

## References

- Teresa Torres, *Continuous Discovery Habits* (2021) — Weekly touchpoints, OST framework
- Rob Fitzpatrick, *The Mom Test* (2013) — Interview questions
- Marty Cagan, *Inspired* (2017) — Discovery principles
