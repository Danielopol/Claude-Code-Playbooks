# SaaS Finance Metrics Quick Reference

Fast lookup for any SaaS finance metric. Formulas, benchmarks, red flags, and decision frameworks — optimized for speed during reviews and analysis. Not a teaching tool.

## Metric Categories

1. **Revenue & Growth** — Top-line (revenue, ARPU, ARPA, MRR/ARR, churn, NRR, expansion)
2. **Unit Economics** — Customer-level profitability (CAC, LTV, payback, margins)
3. **Capital Efficiency** — Cash (burn, runway, OpEx, net income)
4. **Efficiency Ratios** — Growth vs. profitability balance (Rule of 40, magic number)

## Complete Metrics Reference

| **Metric** | **Formula** | **Good Benchmark** | **Red Flag** |
|------------|-------------|--------------------|--------------|
| Revenue | Total sales before expenses | >20% YoY growth (varies) | Growing slower than costs |
| ARPU | Total Revenue / Total Users | Varies by model; trend matters | Declining cohort-over-cohort |
| ARPA | MRR / Active Accounts | SMB $100-$1K, Mid $1K-$10K, Ent $10K+ | High ARPA + low ARPU |
| ACV | ARR per contract | SMB $5-25K, Mid $25-100K, Ent $100K+ | Declining (unintended downmarket) |
| MRR/ARR | MRR × 12 = ARR | Growth + quality | New MRR declining, churn stable |
| Churn Rate | Lost / Starting | Monthly <2% great, <5% ok; Annual <10% great | Increasing cohort-over-cohort |
| NRR | (Start + Expansion - Churn - Contraction) / Start × 100 | >120% excellent; 100-120% good | <100% (base contracting) |
| Expansion Revenue | Upsells + Cross-sells + Usage | 20-30% of total | <10% of MRR |
| Quick Ratio | (New + Expansion) / (Churn + Contraction) | >4 excellent; 2-4 healthy | <2 (leaky bucket) |
| Gross Margin | (Revenue - COGS) / Revenue × 100 | SaaS 70-85% | <60% or declining |
| CAC | S&M / New Customers | Enterprise $10K+ ok, SMB <$500 | Increasing while LTV flat |
| LTV | ARPU × GM% / Churn | 3x+ CAC | Declining cohort-over-cohort |
| LTV:CAC | LTV / CAC | 3:1 healthy; >5:1 underinvesting | <1.5:1 |
| Payback Period | CAC / (Monthly ARPU × GM%) | <12 months great; 12-18 ok | >24 months (cash trap) |
| Contribution Margin | (Revenue - Variable Costs) / Revenue × 100 | 60-80% SaaS | <40% |
| Burn Rate | Monthly Cash - Revenue | <$200K early, <$500K growth | Accelerating |
| Runway | Cash / Monthly Net Burn | 12+ months | <6 months crisis |
| OpEx | S&M + R&D + G&A | Grows slower than revenue | Growing faster than revenue |
| Net Income | Revenue - All Expenses | Early negative ok; mature 10-20%+ | Losses accelerating w/o growth |
| Rule of 40 | Revenue Growth % + Profit Margin % | >40 healthy; 25-40 ok | <25 |
| Magic Number | (Q Rev - Prev Q Rev) × 4 / Prev Q S&M | >0.75 efficient; 0.5-0.75 ok | <0.5 |
| Operating Leverage | Revenue Growth vs. OpEx Growth | Revenue > OpEx | OpEx > Revenue |
| Revenue Concentration | Top N / Total | Top customer <10%, Top 10 <40% | Top >25% existential risk |
| Cohort Analysis | Group by join date, track | Recent cohorts same/better | Newer cohorts worse |

## Decision Frameworks

### Framework 1: Should We Build This Feature?
- **Revenue impact:** Direct (pricing/add-on) or indirect (retention/conversion)?
- **Margin impact:** COGS dilution?
- **ROI:** Revenue impact / dev cost
- **Build if:** ROI >3x year 1 (direct), OR LTV impact >10x dev cost (retention), OR strategic
- **Don't if:** Negative contribution margin even optimistic, payback > lifetime
- **Metrics:** Revenue, Gross Margin, LTV, Contribution Margin

### Framework 2: Should We Scale This Channel?
- **Unit economics:** CAC, LTV, LTV:CAC
- **Cash efficiency:** Payback period
- **Quality:** Cohort retention, NRR by channel
- **Scalability:** Magic Number, volume
- **Scale if:** LTV:CAC >3:1 AND payback <18mo AND quality meets peers AND Magic Number >0.75
- **Don't if:** LTV:CAC <1.5:1 with no improvement path

### Framework 3: Should We Change Pricing?
- **ARPU/ARPA impact:** Revenue per customer change?
- **Conversion impact:** Help or hurt trial-to-paid?
- **Churn impact:** Risk or reduce it?
- **NRR impact:** Enable expansion or contraction?
- **Implement if:** Net positive after churn risk, can test segment first
- **Don't if:** High churn risk without expansion, can't test before committing

### Framework 4: Is the Business Healthy?

**Early (Pre-$10M ARR):**
- Growth >50% YoY, LTV:CAC >3:1, Gross Margin >70%, Runway >12 mo

**Growth ($10M-$50M ARR):**
- Growth >40% YoY, NRR >100%, Rule of 40 >40, Magic Number >0.75

**Scale ($50M+ ARR):**
- Growth >25% YoY, NRR >110%, Rule of 40 >40, Profit Margin >10%

## Red Flags by Category

### Revenue & Growth
| Red Flag | What It Means | Action |
|----------|---------------|--------|
| Churn increasing cohort-over-cohort | PMF degrading | Stop scaling; fix retention |
| NRR <100% | Base contracting | Fix expansion or churn |
| Revenue churn > logo churn | Losing big customers | Investigate high-value loss |
| Quick Ratio <2 | Leaky bucket | Fix retention before scaling |
| Expansion <10% MRR | No upsell engine | Build expansion paths |
| Top 10 >50% revenue | Existential risk | Diversify base |

### Unit Economics
| Red Flag | What It Means | Action |
|----------|---------------|--------|
| LTV:CAC <1.5:1 | Buying at a loss | Reduce CAC or increase LTV |
| Payback >24 mo | Cash trap | Annual upfront or reduce CAC |
| Gross margin <60% | Low profitability | Increase prices or reduce COGS |
| CAC up, LTV flat | Degrading | Optimize conversion |
| Contribution margin <40% | Unprofitable | Cut variable costs |

### Capital Efficiency
| Red Flag | What It Means | Action |
|----------|---------------|--------|
| Runway <6 mo | Survival crisis | Raise immediately or cut burn |
| Net burn accelerating w/o growth | Burning faster for less | Cut costs; increase urgency |
| OpEx > Revenue growth | Negative leverage | Freeze hiring |
| Rule of 40 <25 | Burning without growth | Improve growth or profit |
| Magic Number <0.5 | S&M broken | Fix GTM before scaling spend |

## When to Use Which Metric

**Prioritizing features:** Revenue, ARPU, Expansion Revenue, Gross Margin, Contribution Margin, LTV impact
**Evaluating channels:** CAC, LTV, NRR by channel, Payback, Magic Number
**Pricing decisions:** ARPU, ARPA, ACV, Churn, NRR, CAC Payback
**Business health:** Revenue Growth, Churn, NRR, Quick Ratio, LTV:CAC, Payback, Gross Margin, Rule of 40, Magic Number, Burn, Runway
**Board/investor:** ARR, Growth %, NRR, LTV:CAC, Rule of 40, Magic Number, Burn, Runway

## Common Pitfalls

1. Using blended averages instead of cohort/channel-level
2. Scaling acquisition when Quick Ratio weak and retention deteriorating
3. Treating high LTV:CAC as sufficient without payback/runway check
4. Raising prices on ARPU lift alone (no churn/contraction modeling)
5. Comparing benchmarks across mismatched company stages
6. Tracking metrics without a decision question

## References

- `saas-revenue-growth-metrics` — Deep dive on 13 revenue/retention/growth metrics
- `saas-economics-efficiency-metrics` — Deep dive on 17 unit economics/capital efficiency metrics
- `feature-investment-advisor`, `acquisition-channel-advisor`, `finance-based-pricing-advisor`, `business-health-diagnostic` — Apply these metrics to specific decisions
- **External:** Bessemer "SaaS Metrics 2.0", David Skok, Tomasz Tunguz, SaaStr benchmarks, ChartMogul, Baremetrics, ProfitWell
