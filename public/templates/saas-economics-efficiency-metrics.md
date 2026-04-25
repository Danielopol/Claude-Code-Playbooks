# SaaS Economics & Efficiency Metrics

Evaluate SaaS unit economics and capital efficiency: CAC, LTV, payback, burn, runway, Rule of 40, magic number. Decide whether the business can scale efficiently or needs correction. Essential for fundraising, board reporting, and investment trade-offs.

Not a finance reporting tool. A framework for PMs to understand viability and prioritize efficiency vs. growth.

## Three Metric Families

### Unit Economics
- **Gross Margin** = (Revenue − COGS) / Revenue. SaaS bench: 70-85%
- **CAC** = Total S&M / New Customers. Enterprise $10K+ ok; SMB <$500 target
- **LTV (better)** = ARPU × Margin% / Churn Rate. Must be 3x+ CAC
- **LTV:CAC** = LTV / CAC. <1 unsustainable; 3-5 healthy; >5 maybe underinvesting
- **Payback** = CAC / (Monthly ARPU × Margin%). <12mo great; 12-18 ok; >24 concerning
- **Contribution Margin** = (Revenue − all variable costs) / Revenue. >60% good

### Capital Efficiency
- **Burn Rate** — gross (all spend) or net (spend − revenue)
- **Runway** = Cash / Net Burn. >12mo healthy; <6mo crisis. Raise at 6-9mo
- **OpEx** — S&M + R&D + G&A; track as % of revenue
- **Net Income / Profit Margin** — early SaaS often negative; mature 10-20%+

### Efficiency Ratios
- **Rule of 40** = Growth Rate% + Profit Margin%. >40 healthy; <25 concerning
  - Growth mode: 60% growth + (-20%) margin = 40 ✅
  - Mature: 20% growth + 25% margin = 45 ✅
- **Magic Number** = (ΔQ Revenue × 4) / Prior Q S&M. >0.75 efficient; <0.5 fix before scaling
- **Operating Leverage** — revenue growth vs. cost growth over time

## Anti-Patterns

- Vanity metrics (high LTV with 4-year payback)
- Static benchmarks (PLG vs. enterprise differ)
- Isolated numbers (LTV:CAC without payback misleads)
- Treating as finance-only (every PM decision affects unit economics)

## When to Use

**Use:** Scaling acquisition decisions, feature investment ROI, runway/fundraising, segment/channel comparison, board/investor reporting.
**Don't use:** Pre-revenue/PMF discovery, short-term tactical, comparing different business models.

## Worked Examples

### Healthy
- CAC $8K, LTV $40K, LTV:CAC 5:1 ✅, Payback 10mo ✅, Margin 82%
- Runway 18mo, Rule of 40 = 55, Magic Number 0.9
- **Action:** scale acquisition aggressively

### Cash Trap (good ratio, bad payback)
- CAC $80K, LTV $400K, LTV:CAC 5:1 ✅ (looks great!)
- Payback 36mo 🚨, Runway 9mo 🚨
- **Problem:** ratio masks cash crisis. 3-year payback with 9 months of cash = trap.
- **Actions:** negotiate annual upfront, raise capital, reduce CAC, target faster-payback segments

### Negative Operating Leverage
- Q1: $1M rev / $800K OpEx → Q3: $1.6M / $1.8M
- OpEx growing 50%, revenue 23-30% 🚨
- **Actions:** freeze headcount, cut inefficient S&M (magic number low), improve unit economics first

## Common Pitfalls

1. **Celebrating high LTV without payback check** — 6:1 with 48-mo payback is a cash trap
2. **Ignoring gross margin in LTV** — use ARPU × Margin / Churn, not raw ARPU
3. **Scaling S&M with low magic number** — fix GTM (<0.5) before doubling spend
4. **Simplistic LTV formulas** — ignore expansion, discounting, cohort variance
5. **Forgetting time value of money** — discount future cash flows >24 months
6. **Comparing CAC across different paybacks** — Channel A $5K/24mo loses to Channel B $8K/8mo
7. **Rule of 40 with negative cash flow** — balance ≠ survival; pair with burn/runway
8. **Ignoring segment-specific economics** — blended hides bad segments
9. **Confusing gross with contribution margin** — track both
10. **Forgetting working capital timing** — annual upfront ≠ monthly billing for cash

## Segment-Specific Comparison

| Segment | CAC | LTV | LTV:CAC | Payback | Margin |
|---------|-----|-----|---------|---------|--------|
| SMB | $500 | $2K | 4:1 | 8mo | 75% |
| Mid-Market | $5K | $25K | 5:1 | 12mo | 80% |
| Enterprise | $50K | $300K | 6:1 | 24mo | 85% |

Optimize each independently.

## References

- `saas-revenue-growth-metrics` — feeds LTV
- `finance-metrics-quickref` — fast lookup
- `finance-based-pricing-advisor` — pricing change impact

**External:**
- David Skok (Matrix Partners), *SaaS Metrics*
- Bessemer Venture Partners, *SaaS Metrics 2.0*
- Ben Murray, *The SaaS CFO*
- Jason Lemkin (SaaStr)
