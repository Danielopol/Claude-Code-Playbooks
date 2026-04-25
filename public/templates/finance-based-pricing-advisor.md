# Finance-Based Pricing Advisor

Evaluate the **financial impact** of pricing changes (price increases, new tiers, add-ons, discounts) using ARPU/ARPA analysis, conversion impact, churn risk, NRR effects, and CAC payback implications. Data-driven go/no-go decisions with supporting math and risk assessment.

**What this is:** Financial impact evaluation for pricing decisions you're already considering.
**What this is NOT:** Value-based pricing design, willingness-to-pay research, packaging architecture, competitive positioning.

## The Pricing Impact Framework

1. **Revenue Impact** — Direct revenue lift vs. loss from reduced conversion or churn → net revenue impact
2. **Conversion Impact** — Higher prices may reduce trial-to-paid; better packaging may improve it
3. **Churn Risk** — Grandfathering strategy, churn by segment, elasticity
4. **Expansion Impact** — New tier creates upsell path; usage-based enables expansion; add-ons cross-sell
5. **CAC Payback Impact** — Higher ARPU = faster payback; lower conversion = higher effective CAC

## Pricing Change Types

**Direct:** Price increase, new premium tier, paid add-on, usage-based
**Discounts:** Annual prepay, volume, promotional
**Packaging:** Bundling, unbundling, pricing metric change (seats → usage)

## When to Use

**Use when:** Specific pricing change to evaluate, need to quantify trade-offs, choosing between options, presenting to leadership.
**Don't use when:** Designing pricing from scratch, WTP not validated, no baseline metrics, change too small (<5%, <10% of customers).

## Application (4 Adaptive Questions)

### Step 0: Gather Context

- **Current pricing:** ARPU/ARPA, tiers, monthly churn, trial-to-paid conversion
- **Proposed change:** Type, new pricing, affected segment (all/new/specific)
- **Business context:** Total customers (or MRR/ARR), CAC, NRR

### Step 1: Identify Pricing Change Type

1. **Price increase** — New, existing, or both
2. **New premium tier** — Higher-priced tier with added features
3. **Paid add-on** — Monetize new or existing feature
4. **Usage-based pricing** — Seats, API calls, storage, transactions
5. **Discount strategy** — Annual prepay, volume, promotional
6. **Packaging change** — Rebundle, change metric, restructure tiers

### Step 2: Assess Expected Impact

- **Revenue:** Current ARPU → new ARPU, lift %
- **Conversion:** Current rate → expected rate
- **Churn:** Current → expected after change (low/med/high risk)
- **Expansion:** New NRR expected; upgrade path created?

### Step 3: Evaluate Current State

- MRR/ARR, customers, ARPU, monthly churn, NRR, CAC, LTV
- Growth rate (current vs. target)
- Competitive position (priced below, at, or above market)

### Step 4: Deliver Recommendation

Four recommendation patterns:

#### Pattern 1: Implement Broadly

**When:** Net revenue impact clearly positive (>10% ARPU lift, <5% churn risk), strong value justification.

```markdown
**Implement this pricing change** — Strong financial case

Revenue: Current MRR $___ / ARPU lift ___% / MRR increase +$___/mo
Churn Risk: Low — increase ___% → ___%, MRR loss -$___/mo
Net MRR impact: +$___/mo ✅
Conversion impact: Minimal
CAC payback: ___ → ___ months (faster)

Implementation:
1. Grandfather existing customers
2. Communicate value (features, outcomes, ROI)
3. Monitor conversion (>__%), churn (<__%), feedback

Timeline: M1 +$___, M3 +$___, M6 +$___, Y1 +$___ ARR
Success criteria: Conversion >___%, churn <___%, NRR >___%
```

#### Pattern 2: Test First (A/B Test)

**When:** Wide confidence interval on impact, moderate risk, large customer base.

```markdown
**Test with a segment before broad rollout**

Cohort A (control): Current pricing $___ | ___ customers
Cohort B (test): New pricing $___ | ___ customers
Duration: 60-90 days (statistical significance)

Track: Conversion, ARPU, 30-day retention, 90-day churn, NRR
Roll out if: Conversion B >___% of A, churn <___% higher, net revenue >___% higher
Don't roll out if: Conversion drops >___%, churn +>___%, net negative

Risk: Medium — test mitigates before broad rollout
```

#### Pattern 3: Modify Approach

**When:** Original proposal has significant risk, better alternative exists.

```markdown
**Modify your approach**

Problem: [e.g., "20% increase will cause 10% churn, wiping out gains"]

Alternatives:
- Smaller increase (___% instead of ___%)
- Grandfather existing, raise for new only
- Value-based pricing (SMB flat, enterprise +___%)

Recommended: [option with reasoning]
```

#### Pattern 4: Don't Change Pricing

**When:** Net revenue negative or marginal, high churn risk without offsetting gains.

```markdown
**Don't change pricing** — Risks outweigh benefits

Revenue lift: +$___/mo / Churn loss: -$___/mo / Net: -$___/mo 🚨

What would need to change:
- Churn stays below ___%
- OR conversion stays above ___%

Alternative strategies:
1. Improve retention (churn ___% → ___%)
2. Expand within base (NRR ___% → ___%)
3. Reduce CAC

Revisit pricing after retention improves, WTP validated, or competitive shift.
```

### Step 5: Sensitivity Analysis (Optional)

1. **Optimistic case** — Higher ARPU lift, lower churn
2. **Pessimistic case** — Lower ARPU lift, higher churn
3. **Breakeven** — What churn rate makes this neutral?

## Examples

**Ex 1 (Good price increase):** 20% for new only. ARPU $100 → $120, 1,000 customers, churn 3%. Existing grandfathered = low risk. Net +$12K/year. **Implement.**

**Ex 2 (Risky price increase):** 30% for all. ARPU $50 → $65, 5,000 customers, churn 5%→8%. Gain +$75K MRR; loss -$9.75K MRR/mo; accelerating churn. **Don't change — fix retention first.**

**Ex 3 (New premium tier):** $500/mo tier, 10% adoption of 500 top-tier customers. Upsell +$15K MRR, NRR 105%→110%. Low cannibalization. **Implement.**

## Common Pitfalls

1. Ignoring churn impact — model conservative/base/optimistic scenarios
2. Not grandfathering existing customers — churn spike from betrayal
3. Testing without statistical power (10 customers isn't significant)
4. Pricing changes without value justification — churn
5. Ignoring CAC payback impact — higher ARPU with lower conversion can make payback worse
6. Annual discounts that hurt margin (limit to 10-15%)
7. Copycat pricing (competitor raised, so we should) — different unit economics
8. Premature optimization (47 A/B tests on 5% changes) — big structural changes matter more
9. Forgetting expansion revenue — land and expand beats maximizing upfront
10. No communication plan — surprise customers churn; give 30-60 days notice

## References

- `saas-revenue-growth-metrics` — ARPU, ARPA, churn, NRR
- `saas-economics-efficiency-metrics` — CAC payback
- `finance-metrics-quickref` — Formulas quick lookup
- `feature-investment-advisor` — Features that enable pricing changes
- **External:** Van Westendorp price sensitivity, conjoint analysis, good-better-best packaging, Patrick Campbell (ProfitWell)
