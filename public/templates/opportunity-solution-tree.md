# Opportunity Solution Tree (OST)

Build a Teresa Torres-style Opportunity Solution Tree by extracting target outcomes from stakeholder requests, generating opportunity options (problems to solve), mapping potential solutions, and selecting the best proof-of-concept (POC) based on feasibility, impact, and market fit. Move from vague requests to structured discovery — avoiding feature-factory syndrome and premature solution convergence.

Not a roadmap generator — a structured discovery process that outputs validated opportunities with testable solution hypotheses.

## What is an OST?

Visual framework (from Teresa Torres, *Continuous Discovery Habits*) connecting:

```
         Desired Outcome (1)
                |
    +-----------+-----------+
    |           |           |
Opportunity  Opportunity  Opportunity (3)
    |           |           |
  +-+-+       +-+-+       +-+-+
  | | |       | | |       | | |
 S1 S2 S3    S1 S2 S3    S1 S2 S3 (9 solutions)
                |
           Experiments (tests)
```

1. **Desired Outcome** (business metric to move)
2. **Opportunities** (customer problems/needs driving the outcome)
3. **Solutions** (ways to address each opportunity)
4. **Experiments** (tests to validate solutions)

## Why This Works

- **Outcome-driven** — starts with business goal, not feature requests
- **Divergent before convergent** — explores multiple opportunities before picking solutions
- **Problem-focused** — opportunities are problems, not solutions in disguise
- **Testable** — each solution maps to experiments
- **POC selection** — evaluates feasibility, impact, market fit before committing

## Anti-Patterns

- Not a feature list (opportunities = customer problems, not "we need dark mode")
- Not solution-first ("customers struggle with Y," not "we should build X")
- Not a project plan (discovery tool, not delivery)
- Not one-time (evolves with experiments)

## When to Use

**Use:** Stakeholder requests a feature, starting discovery, vague OKRs, prioritizing problems, aligning team on outcomes.
**Don't use:** Problem already validated, tactical bug fixes, stakeholders demand specific solution.

## Application (Two-Phase)

### Phase 1: Generate OST

#### Step 0: Gather Context

- Stakeholder request / product initiative
- Existing materials: PRD drafts, OKRs, strategy memos, customer complaints, research
- Product context: positioning, competitor reviews, usage data, support tickets, churn reasons

#### Question 1: Desired Outcome

1. **Revenue growth** — ARR, expansion, new streams
2. **Customer retention** — churn, activation, engagement
3. **Customer acquisition** — sign-ups, trial conversion, growth
4. **Product efficiency** — support costs, time-to-value, operations

**Make it measurable:** "Increase trial-to-paid conversion from 15% to 25%" — not "improve conversion."

#### Question 2: Identify Opportunities (3)

For the outcome, list **3 customer problems** that could drive it. Each with evidence from context.

**Example (Outcome = Increase trial-to-paid):**
1. Users don't experience value during trial — evidence: onboarding analytics, exit surveys
2. Pricing unclear or misaligned — evidence: funnel drop-off at pricing, sales objections
3. Free plan is "good enough" — evidence: freemium retention, support tickets for workarounds

**Critical:** Opportunities must be **problems**, not solutions disguised ("we need a mobile app" is disguised).

#### Question 3: Solutions (3 per opportunity, 9 total)

For the selected opportunity, generate **3 solutions** each with hypothesis and experiment.

**Example (Opportunity 1):**
1. Guided onboarding checklist — structured guidance increases completion; A/B test activation
2. Time-to-value triggers — proactive nudges prevent drop-off; track engagement with prompts
3. Human-assisted onboarding — personal touch for high-intent; offer to 50 users, measure vs. control

### Phase 2: Select POC

#### Question 4: Evaluate Solutions

Score each on **Feasibility** (1=months, 5=days), **Impact** (1=minimal, 5=major shift), **Market Fit** (1=no care, 5=actively request).

| Solution | Feasibility | Impact | Market Fit | Total |
|----------|-------------|--------|------------|-------|
| Guided checklist | 4 | 4 | 5 | 13 |
| Time-to-value triggers | 3 | 3 | 4 | 10 |
| Human-assisted | 5 | 5 | 3 | 13 |

**Recommended POC:** Balance of feasibility + impact + market fit.

#### Question 5: Define Experiment

1. **A/B test** — Build MVP, show 50%, compare conversion (quantitative, needs traffic)
2. **Prototype + usability test** — Clickable prototype, 10 users, qualitative (early-stage, low traffic)
3. **Manual concierge** — Run manually with 20 users, measure outcomes (learn fast, no dev)

## Output Structure

```markdown
# OST + POC Plan

## Desired Outcome
Outcome: [From Q1]
Target metric: [Measurable goal]

## Opportunity Map
### Opportunity 1: [Name]
Problem: [Description] / Evidence: [Data]
Solutions: 1. [A] 2. [B] 3. [C]

[... Opportunity 2, 3 ...]

## Selected POC
Opportunity: [Selected] / Solution: [Selected]
Hypothesis: "If we [X], then [metric] will [change] because [rationale]"
Experiment: [Type, participants, duration, success criteria]
Scores: F=__ I=__ MF=__ Total=__

## Next Steps
1. Build experiment
2. Run
3. Measure
4. Decide
```

## Examples

```markdown
Outcome: Trial-to-paid 15% → 25%
Opportunity: Users don't reach "aha" moment
Solution: Guided onboarding checklist
Experiment: A/B test, 50% of trials, 2 weeks
```

## Common Pitfalls

1. **Opportunities disguised as solutions** — "We need a mobile app" → reframe as "Mobile-first users can't access product on the go"
2. **Jumping to one solution** — Force 3+ per opportunity
3. **Vague outcome** — "Improve UX" unmeasurable; use "NPS 30 → 50"
4. **No experiments** — Every solution maps to a test
5. **Analysis paralysis** — Cap at 3 opportunities, 3 solutions each; pick POC, run

## References

- `problem-statement` — Frames opportunities as customer problems
- `jobs-to-be-done` — Identifies opportunities from JTBD
- `epic-hypothesis` — Turns validated solutions into testable epics
- `discovery-interview-prep` — Validates opportunities
- Teresa Torres, *Continuous Discovery Habits* (2021)
- Jeff Patton, *User Story Mapping* (2014)
- Ash Maurya, *Running Lean* (2012)
