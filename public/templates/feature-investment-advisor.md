# Feature Investment Advisor

Evaluate whether to build a feature based on financial impact. Assess **revenue connection** (direct or indirect), **cost structure** (dev + COGS + OpEx), **ROI calculation**, and **strategic value** — then deliver an actionable build/don't-build recommendation with supporting math.

Not a generic prioritization framework. A financial lens that complements RICE, value-vs-effort, and user research when financial impact is a key decision factor.

## The Framework

1. **Revenue Connection** — Direct (new tier, add-on, usage charge) or Indirect (retention, conversion, expansion)
2. **Cost Structure** — Development (one-time), COGS (ongoing infra/processing), OpEx (ongoing support/maintenance)
3. **ROI Calculation** — Direct: Revenue / Dev cost. Retention: LTV impact / Dev cost. Factor in gross margin.
4. **Strategic Value** — Competitive moat, platform enabler, market positioning, risk reduction (may override pure ROI)

## When to Use

**Use when:** Prioritizing quantifiable-impact features, evaluating >1 engineer-month work, build/buy/partner decisions, defending prioritization to stakeholders, direct vs. indirect monetization choice.

**Don't use when:** Feature is table stakes, impact is purely qualitative, problem isn't validated, feature is <1 week of work.

## Application (4 Adaptive Questions)

### Step 0: Gather Context

- **Feature:** Description + target segment
- **Business context:** MRR/ARR, ARPU/ARPA, monthly churn, gross margin %
- **Constraints:** Dev cost estimate, ongoing COGS/OpEx?

### Step 1: Identify Revenue Connection

1. **Direct monetization** — Charge for it (new tier, paid add-on, usage fee)
2. **Retention improvement** — Addresses key churn reason
3. **Conversion improvement** — Trial-to-paid lift
4. **Expansion enabler** — Upsell/cross-sell/usage expansion
5. **No direct revenue** — Table stakes or strategic only

Calculations per path:

- **Direct:** `Monthly Revenue = Customer Base × Adoption Rate × Price`
- **Retention:** `LTV Impact = Increase in Customer Lifetime × Base × ARPU × Margin`
- **Conversion:** `Additional MRR = Trial Users × Conversion Lift × ARPU`
- **Expansion:** `Expansion MRR = Base × Expansion Rate × ARPU Increase`

### Step 2: Assess Cost Structure

- **Development (one-time):** team size × time → $
- **COGS (ongoing):** hosting, infra, processing → $/month
- **OpEx (ongoing):** support, maintenance → $/month

Flags:
- COGS > 20% of projected revenue → ⚠️ significantly dilutes margins
- High ongoing cost vs. revenue → ⚠️ sustainability concern

### Step 3: Evaluate Constraints and Timing

1. Time-sensitive competitive threat → strategic value increases, urgency factor
2. Limited budget/team → compare ROI vs. backlog, stack rank
3. Dependencies on other work → flag risk, suggest sequencing
4. No major constraints → proceed to recommendations

### Step 4: Deliver Recommendation

Four recommendation patterns:

#### Pattern 1: Strong Financial Case (Build Now)

When: ROI >3:1 direct, or LTV >10:1 retention. Positive margin. No red flags.

```markdown
**Build now** — Strong financial case

Revenue Impact: [Calculation]
- Conservative: $___/month
- Optimistic: $___/month
Cost: Dev $___ / Ongoing $___/month / Margin impact ___%
ROI: Year 1 ___:1 / Payback ___ months

Next steps:
1. Validate pricing/adoption with research
2. Build MVP to test core value
3. Monitor [metric] for impact
```

#### Pattern 2: Weak Financial, Build Anyway (Strategic)

When: ROI <2:1, but high strategic value (competitive moat, platform, compliance).

```markdown
**Build for strategic reasons (financial case marginal)**

Financial: Revenue $___ / Dev $___ / ROI ___:1 (below threshold)
Strategic: [Moat / Enabler / Market requirement]

Recommendation: Build but monitor.
1. Track adoption vs. projections
2. Measure churn impact (target: ___%)
3. Re-evaluate after 6 months if adoption low

Risk: Opportunity cost
```

#### Pattern 3: Don't Build (Poor ROI)

When: ROI <1:1. Margin-diluting. No compelling strategic value.

```markdown
**Don't build** — Financial case doesn't support investment

Revenue: $___/month / Dev: $___ / ROI ___:1 (below breakeven)
Margin: Dilutes ___% → ___%

Alternatives:
1. Reduce scope (50% cost simpler version?)
2. Change monetization (charge more/differently?)
3. Deprioritize for [higher-ROI alternative]

What would change: If adoption reaches ___% or dev drops to $___, viable.
```

#### Pattern 4: Build Later / Need Data

When: Assumptions highly uncertain, unvalidated hypotheses, medium strategic value.

```markdown
**Build later** — Validate assumptions first

Uncertainty:
- Adoption rate ___% (unvalidated)
- Churn impact ___% reduction (hypothesis)
- Pricing unknown

Validate:
1. Feature demand survey with 50+ customers
2. Prototype + willingness-to-pay test
3. Interview churned to confirm addresses churn

Decision criteria:
- If ___% say they'd pay $___, build
- If churn interviews confirm top-3 reason, build
- Otherwise deprioritize

Timeline: 2-4 weeks validation
```

## Common Pitfalls

1. **Confusing revenue with profit** — $1M at 20% margin = $200K profit. Fix: always use contribution margin.
2. **Ignoring payback period** — 36-month payback with 24-month customer lifetime → never recover. Fix: payback < lifetime.
3. **Overestimating adoption** — 100% of customers won't use a paid add-on. Fix: conservative 10-20%, validate with willingness-to-pay.
4. **Building without validation** — "We think this reduces churn" with no interviews. Fix: validate top-3 churn reasons first.
5. **Ignoring opportunity cost** — Building 2:1 ROI while 10:1 waits in backlog. Fix: compare ROI across options.
6. **Strategic value as excuse** — "ROI is terrible but it's strategic!" Fix: define strategic precisely (moat/enabler/compliance).
7. **Margin dilution blindness** — $500K revenue with $400K COGS destroys unit economics. Fix: check contribution margin.
8. **Vanity metric celebration** — "Increases engagement!" without revenue/retention tie. Fix: tie to business outcomes.
9. **Ignoring time value of money** — $1 in 5 years ≈ $0.65 today. Fix: NPV for payback >24 months.
10. **Loud minority features** — 50 requests out of 10,000 = 0.5%. Fix: weight by revenue impact or segment.

## Examples

**Ex 1 (Direct — Time tracking add-on):** 1,000 customers × 10 users × 20% adoption × $10 = $20K/mo = $240K/yr × 80% margin = $192K profit; dev $100K. ROI 1.92:1 year 1, payback 5 months. **Build now.**

**Ex 2 (Retention — Data export):** 5% monthly churn × 30% cite export × 500 customers × $4K ARPA = $276K MRR at risk. 50% reduction → $140K/yr × 24-mo lifetime = $3.36M LTV saved. Dev $150K. ROI 22:1. **Build immediately.**

**Ex 3 (Poor ROI — Dark mode):** 50 requests out of 2,000 (2.5%), no churn data. Optimistic: 5 saves × $250 × 24 months = $360K. Dev $80K. ROI 4.5:1 but unsupported. **Build later — validate first.**

## References

- `saas-revenue-growth-metrics` — Revenue, ARPU, churn, NRR used in calculations
- `saas-economics-efficiency-metrics` — ROI, payback, contribution margin
- `finance-metrics-quickref` — Formulas and benchmarks
- **RICE** — Reach × Impact × Confidence / Effort (adds financial lens)
- **Value vs. Effort Matrix** — Quantifies "value" financially
- Teresa Torres, **Opportunity Solution Tree** — Map opportunities before calculating ROI
