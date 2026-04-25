# Recommendation Canvas (AI Product Decisions)

Evaluate and propose AI product solutions using a structured canvas: business outcomes, customer outcomes, problem framing, solution hypotheses, positioning, risks, value justification. Built for high-uncertainty AI features that need defensible recommendations.

Not a feature spec. A strategic proposal articulating *why* this is worth building, *what* assumptions need validating, and *how* you'll measure success.

## The 10 Canvas Components

1. **Business Outcome** — what's in it for the business?
2. **Product Outcome** — what's in it for the customer?
3. **Problem Statement** — persona-centric problem framing
4. **Solution Hypothesis** — if/then with experiments
5. **Positioning Statement** — value prop + differentiation
6. **Assumptions & Unknowns** — what could invalidate this?
7. **PESTEL Risks** — political, economic, social, technological, environmental, legal
8. **Value Justification** — convince C-level
9. **Success Metrics** — SMART
10. **What's Next** — strategic next steps

## Why This Works

- **Outcome-driven** — clarity on business AND customer value
- **Hypothesis-centric** — solution as bet to validate, not commitment
- **Risk-explicit** — assumptions visible upfront
- **Executive-friendly** — comprehensive but structured for review
- **AI-appropriate** — high-uncertainty features benefit from explicit framing

**Anti-patterns:** Not a PRD. Not a business case (informs it). Not a feature list.

## When to Use

**Use:** New AI product/feature, exec pitch for budget/sponsorship, evaluating AI investment, cross-functional alignment (product + eng + data science + business).
**Don't use:** Trivial features, before any discovery, as experimentation replacement.

## Application

### Step 1: Gather Context

Problem understanding (`problem-statement`), persona (`proto-persona`), market context, business constraints. Run discovery first if missing.

### Step 2: Define Outcomes

**Business Outcome:**
Format: `[Direction] [Metric] [Outcome] [Context] [Acceptance Criteria]`
Example: "Reduce by 25% the churn of existing customers using our existing product"

**Product Outcome (customer POV):**
Example: "Reduce by 60% the time spent manually processing invoices for small business owners"

### Step 3: Frame the Problem

Use `problem-statement`. 2-3 sentence persona narrative from their POV.

Example: "Sarah is a freelance designer managing 10 clients. She spends 8 hours/month manually tracking invoices and chasing late payments. By the time she follows up, some clients have moved to other designers."

### Step 4: Solution Hypothesis

```markdown
**If we** [action for persona]
**for** [persona]
**Then we will** [desirable outcome]
```

**Tiny Acts of Discovery** — 2-3 lightweight experiments (prototype + 5 users, A/B test, post-test survey).

**Proof-of-Life:**
```markdown
We know our hypothesis is valid if within [timeframe] we observe:
- [Quantitative: e.g., "80% of users send AI reminders"]
- [Qualitative: e.g., "8/10 users report saving 5+ hours/month"]
```

### Step 5: Positioning

Use `positioning-statement`:
- **For** [target] **that need** [need], [product] **is a** [category] **that** [benefit]
- **Unlike** [competitor], [product] **provides** [differentiation]

### Step 6: Assumptions & Unknowns

```markdown
- **[Assumption 1]** - [e.g., "Users will trust AI-generated reminders"]
- **[Unknown 1]** - [e.g., "We don't know if users prefer email or SMS"]
```

### Step 7: PESTEL Risks

**Investigate (high priority):** Political / Economic / Social / Technological / Environmental / Legal — each specific to your product.

**Monitor (lower priority):** Future regulations, FX, norms, emerging competitors.

### Step 8: Value Justification

```markdown
### Is this Valuable?
- [Absolutely yes / Yes with caveats / No with alternatives / Absolutely NO]

### Justification (for C-level)
1. [Addresses #1 pain point per research]
2. [Differentiates from competitors who only offer manual]
3. [Low technical risk — leverages existing AI infrastructure]
```

### Step 9: SMART Success Metrics

Specific, Measurable, Attainable, Relevant, Time-Bound:
- "80% of active users adopt AI reminders within 3 months"
- "Time on payment follow-ups decreases 50% within 6 months"
- "NPS for invoicing increases from 6 to 8 within 6 months"

### Step 10: What's Next

1. Run 2-week prototype test with 10 beta users
2. Build lightweight AI model for timing
3. Legal review (GDPR)
4. Present findings to exec team
5. If validated, add to Q2 roadmap

## Common Pitfalls

1. **Vague outcomes** ("increase revenue") → use formula
2. **Solution-first thinking** ("we need AI X") → frame from user POV
3. **Skipping experiments** → define 2-3 lightweight tests
4. **Generic PESTEL** ("regulations might change") → be specific
5. **Weak value justification** → use data, dollar amounts, risk-adjusted

## References

- `problem-statement` — narrative
- `epic-hypothesis` — hypothesis structure
- `positioning-statement` — positioning section
- `proto-persona` — target persona
- `jobs-to-be-done` — customer outcomes

**External:** Osterwalder VPC, PESTEL, SMART goals.

Created for Productside "AI Innovation for Product Managers."
