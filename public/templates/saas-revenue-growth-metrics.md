# SaaS Revenue & Growth Metrics

Calculate SaaS revenue, retention, and growth metrics: MRR/ARR, ARPU/ARPA, ACV, churn, NRR, expansion, quick ratio. Diagnose momentum, retention problems, and product-market-fit signals.

Not a BI tool. A framework for which metrics matter, how to calculate correctly, and what to do based on numbers.

## Two Metric Families

### Revenue
- **Revenue** — sum of all customer payments. Track growth rate vs. cost growth
- **ARPU** = Revenue / Users. Per-seat monetization. B2C $5-50/mo; B2B $50-500+/mo
- **ARPA** = MRR / Active Accounts. Account-level deal size. SMB $100-1K; Mid $1-10K; Ent $10K+
- **ACV** — annual recurring revenue per contract (excludes setup/services). SMB $5-25K; Mid $25-100K; Ent $100K+
- **MRR/ARR** — track components: new + expansion − churned − contraction. ARR = MRR × 12
- **Gross vs. Net Revenue** — net = gross − discounts − refunds. Refunds >10% red flag

### Retention & Expansion
- **Logo Churn** = Customers Lost / Starting. Monthly: <2% great; >5% crisis. Annual: <10% great; >30% crisis
- **Revenue Churn** = MRR Lost / Starting MRR. Track separately from logo churn
- **NRR** = (Start ARR + Expansion − Churn − Contraction) / Start ARR. >120% excellent; <90% problem
- **Expansion Revenue** — upsells + cross-sells + usage growth. Should be 20-30% of total
- **Quick Ratio** = (New + Expansion MRR) / (Churned + Contraction MRR). >4 excellent; <2 leaky

## Analysis Frameworks

**Revenue Mix** — % by product/segment. No single product >60% ideal.

**Cohort Analysis** — group by join date; recent cohorts should retain ≥ old. Degrading cohorts = PMF eroding.

## Anti-Patterns

- Not profit (high revenue + negative margin = disaster)
- Not vanity (growth from unsustainable discounting)
- Not blended ($10 SMB + $1000 Enterprise averaged = useless)
- Not isolated (churn alone doesn't tell story without cohorts)

## When to Use

**Use:** Business health, PMF evaluation, cohort comparison, board reporting, retention diagnosis, pricing/packaging measurement.
**Don't use:** Profitability eval (use margin), capital efficiency (use LTV:CAC), product investment without cost context.

## Compounding Churn

- 3% monthly ≠ 36% annual
- Formula: `Annual = 1 − (1 − Monthly)^12`
- 3% monthly = 31% annual

## Worked Examples

### Healthy SaaS
- MRR $2M (+10% MoM), ARPA $1.2K, ARPU $120 (100 seats/account)
- Logo churn 2%, Revenue churn 1.5%, NRR 115%
- Expansion 10% of MRR, Quick Ratio 5.0
- **Action:** scale acquisition

### Warning Signs
- MRR $500K (+15% MoM, but...)
- Logo churn 6% (was 4%), Revenue churn 7% 🚨
- NRR 85% (contracting), Quick Ratio 1.2
- Cohort 6mo retention: 75% → 65% → 58% 🚨
- **Action:** STOP scaling. Fix retention first.

### Blended Metrics Hiding Problems
- Blended: 20% MoM growth, 3% churn, 110% NRR (looks great)
- But: Legacy product (67% of revenue) has -5% growth, 8% churn, 75% NRR 🚨
- New product (33%) has 80% growth, 1% churn, 150% NRR ✅
- **Action:** accelerate migration; plan legacy sunset

## Common Pitfalls

1. **Confusing revenue with profit** — growth without margins = scaling losses
2. **ARPU growth from mix shift** — losing small customers ≠ improving monetization
3. **Ignoring cohort degradation** — blended churn hides PMF erosion
4. **Logo vs. revenue churn confusion** — losing big customers = revenue churn > logo
5. **Treating all churn equally** — weight by revenue impact, not count
6. **Forgetting compounding** — 3% × 12 ≠ 36%
7. **Gross revenue celebration while net contracts** — discounts/refunds hide problems
8. **NRR >100% from low churn alone** — true expansion-driven NRR is >120%
9. **Revenue concentration risk** — top customer >10% = vulnerable
10. **Averaging ARPU across segments** — calculate by SMB/Mid/Enterprise

## References

- `saas-economics-efficiency-metrics` — CAC, LTV, margins, burn
- `finance-metrics-quickref` — fast lookup
- `finance-based-pricing-advisor` — pricing change impact
- `business-health-diagnostic` — overall health check

**External:**
- Bessemer, *SaaS Metrics 2.0*
- David Skok (Matrix Partners), *SaaS Metrics*
- Tomasz Tunguz (Redpoint)
- Tien Tzuo, *Subscribed*
- ChartMogul / Baremetrics / ProfitWell definitions
