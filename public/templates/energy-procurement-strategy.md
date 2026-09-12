# Energy Procurement Strategy

Codified expertise for electricity and gas procurement, tariff optimization, demand charge management, renewable PPA evaluation, and multi-facility energy cost management — the domain knowledge of a senior energy procurement manager at a large commercial and industrial (C&I) consumer running an annual spend of $15M–$80M across 10–50+ sites.

## When to Use

- Running an RFP for electricity or natural gas supply across multiple facilities
- Analyzing tariff structures and rate-schedule optimization opportunities
- Evaluating demand-charge mitigation strategies (load shifting, battery storage, power factor correction)
- Assessing PPA (Power Purchase Agreement) offers for on-site or virtual renewable energy
- Building annual energy budgets and hedge-position strategies
- Responding to market-volatility events (a polar vortex, a heat wave, a regulatory change)

## How It Works

1. Profile each facility's load shape from interval meter data (15-minute kWh/kW) to identify cost drivers.
2. Analyze current tariff structures for optimization opportunities (rate switching, demand-response enrollment).
3. Structure procurement RFPs with appropriate product specifications (fixed, index, block-and-index, shaped).
4. Evaluate bids on total cost of energy — not just $/MWh — including capacity, transmission, ancillaries, and risk premium.
5. Execute contracts with staggered terms and layered hedging to avoid concentration risk.
6. Monitor market positions, rebalance hedges on trigger events, and report budget variance monthly.

## Core Knowledge

### Utility Bill Anatomy

Every commercial bill bundles components that must be analyzed independently — treating them as one "rate" hides where the real optimization opportunities live.

- **Energy charges** (40–55% of the bill for large C&I customers): the per-kWh cost, flat, time-of-use, or real-time. This is the component you can competitively procure in deregulated markets.
- **Demand charges** (20–40% of the bill for variable-load facilities): billed on the single highest 15-minute average kW draw in the month, at $8–$25/kW depending on utility. One bad interval — a compressor startup coinciding with HVAC peak — can add $5,000–$15,000 to a monthly bill.
- **Capacity charges**: in markets with capacity obligations (PJM, ISO-NE, NYISO), your allocation is set by your peak load contribution during the prior year's system coincident peak hours (often 1–5 hours in summer). Reducing load during those specific hours can cut next year's capacity charges 15–30% — the single highest-ROI demand-response opportunity for most C&I customers.
- **Transmission and distribution**: regulated, generally non-bypassable even with on-site generation.
- **Riders and surcharges**: renewable-standards compliance, decommissioning, rate-case-driven adjustments — track open proceedings at your state PUC.

### Procurement Strategies

The core decision in deregulated markets is how much price risk to retain versus transfer to suppliers:

- **Fixed-price**: locked $/kWh for the term, budget certainty, at a 5–12% risk premium over the forward curve. Best when predictability outweighs cost minimization.
- **Index/variable**: pay real-time or day-ahead wholesale price plus a small adder — lowest long-run average cost, full exposure to spikes. (ERCOT wholesale prices hit $9,000/MWh during Winter Storm Uri; an unhedged 5 MW index customer faced a single-week bill over $1.5M.)
- **Block-and-index (hybrid)**: fixed-price blocks covering baseload (60–80% of expected consumption), variable load floats at index — balance cost and certainty.
- **Layered procurement**: buy in tranches over 12–24 months rather than locking the full volume at one point in time. This is dollar-cost averaging for energy, and the single most effective risk-management technique available to most C&I buyers — it removes the "did we lock at the top?" problem entirely.
- **RFP process**: issue to 5–8 qualified retail energy providers with 36 months of interval data, load factor, and sustainability requirements. Evaluate on total cost, supplier credit quality (a mid-contract supplier bankruptcy forces you into utility default service at tariff rates), contract flexibility, and value-added services.

### Demand Charge Management

The most controllable cost component for facilities with operational flexibility:

- **Peak identification**: pull 15-minute interval data and find the top 10 peak intervals per month — most facilities find 6–8 share a common root cause (simultaneous multi-load startup during morning ramp-up).
- **Load shifting**: move discretionary loads to off-peak. A 500 kW shift can save $5,000–$12,500/month in demand charges alone.
- **Peak shaving with batteries**: behind-the-meter storage caps peak demand by discharging during the highest-demand intervals. Simple payback on a typical installation runs 9–13 years on demand-charge savings alone, but drops to 5–7 years once TOU arbitrage, capacity-tag reduction, and DR revenue are stacked in.
- **Demand-response programs**: utility/ISO programs pay for curtailing load during grid-stress events — meaningful revenue for a facility with real curtailment capability.
- **Ratchet clauses**: many tariffs won't let billed demand fall below 60–80% of the highest peak recorded in the prior 11 months. A single accidental spike can lock in elevated billing for a full year — always check for ratchet provisions before any facility change that could spike peak load.

### Renewable Energy Procurement

- **Physical PPA**: contract directly with a generator for its output at a fixed $/MWh, 10–25 year term. You manage basis risk, curtailment risk, and shape risk.
- **Virtual (financial) PPA**: a contract-for-differences against a strike price — you receive RECs but don't change your physical power supply. Requires CFO/treasury sign-off and mark-to-market accounting.
- **RECs**: 1 REC = 1 MWh of renewable attributes. Unbundled RECs are the cheapest way to claim renewable use but face increasing scrutiny under additionality standards.
- **On-site generation**: reduces T&D exposure but introduces net-metering and interconnection risk — evaluate on total economic value, not energy cost alone.

### Load Profiling

- **Load factor** = average demand ÷ peak demand. High (>0.75) means flat, predictable consumption — favors around-the-clock block purchases. Low (<0.50) means spiky consumption — demand charges dominate the bill and peak-shaving has the highest ROI.
- **Base vs. variable load**: base load runs 24/7 (refrigeration, servers, continuous manufacturing); variable load tracks production schedules and weather. Match your procurement product's shape to your load's shape.

### Market Structures

- **Regulated markets** (~35% of US commercial load): one utility, no supplier choice — optimization is limited to tariff selection, demand management, and on-site generation.
- **Deregulated markets**: competitive generation via retail energy providers or direct wholesale access. Each ISO/RTO (PJM, ERCOT, CAISO, NYISO, ISO-NE, MISO, SPP) has different rules and pricing mechanisms.
- **Locational Marginal Pricing**: wholesale prices vary by grid node based on congestion — a facility at a congested node can pay $5–$30/MWh more than an uncongested one, and this same congestion drives basis risk in any PPA.

### Sustainability Reporting

- **Scope 2 emissions** requires dual reporting: location-based (grid average) and market-based (reflects your actual procurement choices — RECs and PPAs lower it).
- **RE100** commitments accept physical PPAs, VPPAs with RECs, green tariffs, unbundled RECs, and on-site generation — though additionality requirements are tightening.
- Procurement decisions that lock in fossil-heavy supply for 10+ years can conflict with science-based emissions trajectories — flag this tension explicitly when structuring long contracts.

### Risk Management

- Layered procurement is the primary hedge; supplement with financial hedges (swaps, options, heat rate call options) for specific exposures.
- Most sophisticated C&I buyers land on 60–80% hedged, 20–40% index — the exact ratio depends on financial profile, treasury risk tolerance, and whether energy is a material input cost or an overhead line item.
- Weather risk (heating/cooling degree days) drives real budget variance; most buyers manage it through budget reserves rather than financial instruments.
- Regulatory risk — rate-case restructuring, capacity-market reform, carbon pricing, net-metering changes — can shift procurement economics mid-contract.

## Decision Frameworks

### Procurement Strategy Selection

1. **Budget-variance tolerance?** If >5% variance triggers management review, lean fixed. If the org can absorb 15–20%, index or hybrid is viable.
2. **Where is the market in its price cycle?** Forwards in the bottom third of the 5-year range → lock in more fixed. Top third → keep more index exposure. Uncertain → layer.
3. **Contract tenor?** Short terms (12 months): fixed vs. index matters less. Long terms (36+ months): the fixed-price risk premium compounds — lean hybrid or layered.
4. **Load factor?** High → block-and-index works well. Low → shaped or TOU-indexed products fit better.

### Demand-Charge Mitigation ROI

Calculate current demand charges, estimate achievable peak reduction, and value it across every applicable line: demand charges + capacity-tag reduction + TOU energy arbitrage + DR revenue. Simple payback under 5 years on stacked value is generally justified; 5–8 years is marginal; beyond 8 years the economics don't work absent a sustainability mandate.

## Key Edge Cases

- **Extreme-weather price spikes**: an unhedged index position in a market like ERCOT can produce a single-week bill in the millions. The lesson isn't "avoid index" — it's "never go unhedged into extreme-weather season without a price cap or financial hedge."
- **VPPA basis risk in a congested zone**: a generator and load zone separated by transmission congestion can produce persistent negative settlements, turning an apparently favorable PPA into a net cost.
- **Demand-charge ratchet trap**: a single unusual peak month can lock elevated billing demand for up to 11 months under a ratchet clause.
- **Rate-case filings mid-contract**: a "fixed" energy contract doesn't protect against T&D and rider charges that flow through separately.
- **Negative LMP pricing**: during high-wind/solar periods, some PPA structures require you to pay the developer the settlement difference on negative-price intervals.
- **Capacity obligation surprises**: unusual load during the prior year's few coincident-peak hours can spike next year's capacity charges 20–40%.

## Escalation Triggers

| Trigger | Timeline |
|---|---|
| Wholesale prices exceed 2× budget assumption for 5+ consecutive days | Within 24 hours |
| Supplier credit downgrade below investment grade | Within 48 hours |
| Utility rate case filed with >10% proposed increase | Within 1 week |
| Demand peak exceeds ratchet threshold by >15% | Within 24 hours |
| PPA developer misses REC delivery by >10% | Within 5 business days |
| Capacity tag increases >20% year-over-year | Within 2 weeks |

## Performance Indicators to Track

Weighted average energy cost vs. budget (target within ±5%), procurement cost vs. market benchmark (within 3%), demand charges as % of total bill, weather-normalized peak demand trend, renewable-energy % vs. RE100 trajectory, and supplier contract renewal lead time (signed ≥90 days before expiry).

## Tips

- Never try to "call the bottom" of the energy market — instead, watch the forward curve against its 5-year historical range and accelerate or decelerate your layering schedule accordingly.
- Quantify every recommendation for its actual audience: budget impact and variance for finance, Scope 2 progress for sustainability, operational constraints for operations. The same procurement decision needs three different framings.

## Limitations

- This is decision-support knowledge, not a substitute for a licensed energy broker, legal counsel on contract terms, or a qualified risk-management function for large notional hedges.
- Market structures, rate design, and ISO rules referenced here are US-centric; other jurisdictions have materially different regulatory and market architectures.
- Dollar figures and rate ranges are illustrative benchmarks, not live market data — always verify against current forward curves and your utility's actual tariff sheet before acting.
