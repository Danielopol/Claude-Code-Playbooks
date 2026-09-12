# Inventory Demand Planning

Codified expertise for demand forecasting, safety-stock optimization, replenishment planning, and promotional-lift estimation at multi-location retailers — the working knowledge of a senior demand planner managing 300–800 active SKUs across 40–200 stores.

## When to Use

- Generating or reviewing demand forecasts for existing or new SKUs
- Setting safety-stock levels based on demand variability and service-level targets
- Planning replenishment for seasonal transitions, promotions, or new-product launches
- Evaluating forecast accuracy and deciding whether to adjust a model or override it
- Making buy decisions under supplier MOQ constraints or a lead-time change

## How It Works

1. Collect demand signals (POS sell-through, orders, shipments) and cleanse outliers.
2. Select a forecasting method per SKU based on its ABC/XYZ classification and demand pattern.
3. Apply promotional lifts, cannibalization offsets, and external causal factors.
4. Calculate safety stock from demand variability, lead-time variability, and target fill rate.
5. Generate suggested purchase orders, apply MOQ/EOQ rounding, and route for planner review.
6. Monitor forecast accuracy (WMAPE, bias) and adjust models in the next planning cycle.

## Core Knowledge

### Forecasting Method Selection

- **Moving averages** — stable, low-variability items where recent history predicts well. Never use on seasonal items; they lag trend changes by roughly half the averaging window.
- **Exponential smoothing** — single (SES) for stationary demand with noise; double (Holt's) adds trend tracking for growing/declining items; triple (Holt-Winters) adds seasonal indices and is the workhorse for items with annual cycles. A high smoothing constant chases noise on volatile items; too low responds too slowly to real regime changes — optimize on holdout data, never on the fitting data.
- **Seasonal decomposition (STL)** — isolates trend/seasonal/residual when seasonal patterns shift year over year, or before layering a promotional-lift model on a clean baseline.
- **Causal/regression models** — when price, promotions, weather, or competitor actions drive demand beyond the item's own history. The biggest pitfall is overfitting on sparse promo history; regularize and validate out-of-time, not out-of-sample.
- **Machine learning (gradient boosting, neural nets)** — justified only with real data volume (1,000+ SKUs × 2+ years weekly) and multiple external regressors. Outperforms simpler methods on promotional/intermittent items by real margins, but requires continuous monitoring — retail demand drift is real and quarterly retraining is a floor, not a ceiling.

### Forecast Accuracy Metrics

- **WMAPE** (weighted MAPE — sum of absolute errors over sum of actuals) is the metric that matters for finance, since it reflects dollars rather than letting low-volume items dominate.
- **Bias** — average signed error. Positive = systematic overstock risk; negative = systematic stockout risk. Healthy is within ±5%; beyond ±10% signals a structural model problem, not noise.
- **Tracking signal** (cumulative error ÷ mean absolute deviation) exceeding ±4 means the model has drifted and needs re-parameterization or a method switch.

### Safety Stock

The textbook formula (`Z × σ_demand × √(lead time + review period)`) only holds for normal, stationary demand. In practice:

- **Service-level targets** scale safety stock nonlinearly — moving from 95% to 99% nearly doubles it. Always quantify the inventory-investment cost of an incremental service-level bump before committing to it.
- **Lead-time variability** needs its own term in the formula; vendors with high lead-time variance need safety stock 40–60% higher than a demand-only calculation suggests.
- **Lumpy/intermittent demand** (many zero-demand periods) breaks normal-distribution safety stock — use Croston's method for the forecast and a bootstrapped demand distribution for safety stock, not the analytical formula.
- **New products** have no demand history: use analogous-item profiling (3–5 most similar items at the same lifecycle stage), add a 20–30% buffer for the first 8 weeks, then taper as real history accumulates.

### Reorder Logic

- **Inventory position** = on-hand + on-order − backorders − committed. Never reorder from on-hand alone, or you'll double-order stock already in transit.
- **Min/Max** is simple and fits stable-demand items but doesn't adapt without manual adjustment.
- **Reorder point / EOQ** is theoretically optimal for constant demand, but always rounds to real-world vendor case packs and pallet tiers — a mathematically perfect EOQ means nothing against a vendor's fixed case size.
- **Periodic review** fits when orders consolidate to a vendor on fixed days; the review period is set by the delivery schedule.
- **Tier vendor review frequency** to financial impact — weekly for top vendors by spend, monthly for the long tail — rather than reviewing every vendor on the same cadence.

### Promotional Planning

- Promotions distort the demand signal: strip promotional volume from history before fitting the baseline, and keep a separate multiplicative lift layer for promo weeks.
- Estimate lift from year-over-year promoted-vs-not comparison, a cross-elasticity model, or an analogous item's lift profile for new items. Typical lifts: 15–40% for a price cut alone, 80–200% with display and circular support, 300%+ for a doorbuster event.
- **Cannibalization**: a promoted SKU steals 10–30% of lifted volume from close substitutes in the same category — model it explicitly rather than ignoring it.
- **Forward-buy and post-promo dip**: customers stock up during deep promotions, producing a below-baseline dip afterward, typically 1–3 weeks and 30–50% of the incremental lift, concentrated in the first week. Failing to forecast the dip produces excess inventory and forced markdowns.

### ABC/XYZ Classification

- **ABC (value)**: classify on margin contribution, not revenue, or you'll overinvest in high-revenue, low-margin items.
- **XYZ (predictability)**: classify on the coefficient of variation of de-seasonalized, de-promoted demand — otherwise a genuinely predictable seasonal item gets penalized as erratic.
- **Policy matrix**: AX items get tight, automated replenishment; AZ items (high-value, erratic) need human review every cycle; CZ items are candidates for discontinuation or make-to-order.

### Seasonal Transition Management

- Commit seasonal buys 12–20 weeks out, but only allocate 60–70% of expected demand up front — hold the remaining 30–40% as an open-to-buy reserve against forecast error.
- Begin markdowns the moment sell-through pace drops below 60% of plan at the season midpoint. Every week of delay costs 3–5 points of margin on the remaining inventory — early shallow markdowns beat late deep ones.
- Set a hard season-end liquidation cutoff; holding seasonal product into next year rarely recovers margin once style drift and warehousing cost are counted.

## Decision Frameworks

### Method Selection by Demand Pattern

| Pattern | Primary Method | Review Trigger |
|---|---|---|
| Stable, high-volume, no seasonality | Weighted moving average | WMAPE > 25% for 4 consecutive weeks |
| Trending | Holt's double exponential smoothing | Tracking signal exceeds ±4 |
| Seasonal, repeating | Holt-Winters | Season-over-season correlation < 0.7 |
| Intermittent / lumpy | Croston's method | Mean inter-demand interval shifts >30% |
| Promotion-driven | Causal regression (baseline + lift layer) | Post-promo actuals deviate >40% |
| New product (0–12 weeks) | Analogous-item profile | Own-data WMAPE beats analog-based WMAPE |

### Markdown Timing

| Sell-through at midpoint | Action |
|---|---|
| ≥80% of plan | Hold price; reorder cautiously if weeks of supply < 3 |
| 60–79% | 20–25% markdown, no reorder |
| 40–59% | 30–40% markdown immediately; cancel open POs |
| <40% | 50%+ markdown; explore liquidation; flag for a buying post-mortem |

### Slow-Mover Kill Decision

Flag for discontinuation quarterly when weeks of supply exceed 26, the last 13-week velocity is under half the item's first-13-week velocity, no promotion is planned in the next 8 weeks, there's no contractual obligation, and a substitute exists. Markdown 30% for 4 weeks first; escalate to 50% or liquidation with a hard exit date if it still doesn't move.

## Key Edge Cases

- **Viral spike**: a 500–2,000% demand jump with no warning. Don't chase it — by the time supply chain responds, the spike is usually over. Capture what existing inventory allows, allocate to prevent hoarding, and only revise the baseline if elevated demand persists 4+ weeks.
- **Overnight lead-time doubling**: recalculate safety stock immediately; if it doubles, current inventory likely can't fill the gap — place an emergency order for the delta and identify secondary suppliers.
- **Regime change**: a stable item suddenly turns trending or erratic (common after reformulation or a competitor's entry/exit). The old model fails silently — watch the tracking signal weekly.
- **Phantom inventory**: system-reported stock doesn't match physical count, quietly poisoning every downstream forecast. Suspect it whenever service level drops despite "adequate" on-hand.
- **Vendor MOQ conflicts**: a mathematically correct EOQ that's below the vendor's minimum order forces either over-ordering or negotiation — consolidate with other SKUs from the same vendor to hit dollar minimums when possible.
- **Holiday calendar shift**: when a key selling holiday moves position year over year, align forecasts to "weeks relative to the holiday," not calendar weeks, or the comparison silently breaks.

## Performance Indicators to Track

WMAPE (target <25%), forecast bias (target ±5%), in-stock rate on A-items (target >97%), weeks of supply (target 4–8), excess inventory share (<5% of SKUs above 26 weeks supply), and dead-stock share (<2% of SKUs with zero sales in 13+ weeks).

## Tips

- Document every new-product forecast's assumptions explicitly (analogs used, price point, distribution, competitive window) so a post-mortem can audit exactly what was assumed rather than reconstructing it from memory.
- Frame a markdown recommendation to merchandising around sell-through pace and margin math, never as "we bought too much" — the framing changes how the recommendation lands even when the underlying number is identical.

## Limitations

- This is planning methodology, not a forecasting engine — pair it with whatever demand-planning suite, ERP, or spreadsheet actually holds the SKU-level data.
- Dollar figures, lift percentages, and thresholds throughout are illustrative benchmarks from a mid-size multi-location retail context — recalibrate them against your own category's actual promo history and margin structure.
- Assumes reasonably clean POS/sell-through data feeding the forecast; garbage-in problems (phantom inventory, miscoded promotions) will silently degrade every downstream number here.
