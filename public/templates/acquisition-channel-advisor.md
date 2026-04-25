# Acquisition Channel Advisor

Guide product managers through evaluating whether to scale, test, or kill an acquisition channel based on unit economics (CAC, LTV, payback), customer quality (retention, NRR), and scalability (magic number, volume potential). Use this to make data-driven go-to-market decisions and optimize channel mix for sustainable growth.

This is not a channel strategy framework—it's a financial lens for channel evaluation that helps you avoid scaling unprofitable channels or killing channels with fixable problems. Use when deciding how to allocate marketing budget across channels.

## Key Concepts

### The Channel Evaluation Framework

A systematic approach to evaluate acquisition channels:

1. **Unit Economics** — What does it cost to acquire, and what's the return?
   - CAC (Customer Acquisition Cost)
   - LTV (Lifetime Value)
   - LTV:CAC ratio
   - Payback period

2. **Customer Quality** — Do customers from this channel stick around and expand?
   - Cohort retention rate (by channel)
   - Churn rate (by channel)
   - NRR (Net Revenue Retention by channel)
   - Expansion rate

3. **Scalability** — Can this channel sustain growth at the volume you need?
   - Magic Number (S&M efficiency)
   - Addressable volume (TAM of channel)
   - Saturation risk (diminishing returns)
   - CAC trend (increasing, stable, decreasing)

4. **Strategic Fit** — Does this channel align with your go-to-market strategy?
   - Customer segment match (SMB vs. enterprise)
   - Sales motion compatibility (PLG vs. sales-led)
   - Brand positioning alignment

### Decision Matrix

| LTV:CAC | Payback | Customer Quality | Scalability | Decision |
|---------|---------|------------------|-------------|----------|
| >3:1 | <12mo | Good retention | High volume | **Scale aggressively** |
| 2-3:1 | 12-18mo | Average retention | Medium volume | **Test & optimize** |
| <2:1 | >18mo | Poor retention | Low volume | **Kill or fix** |

### Anti-Patterns (What This Is NOT)

- **Not vanity metrics:** "We got 10,000 signups!" means nothing if they churn in 30 days
- **Not CAC-only thinking:** Low CAC with terrible retention is worse than high CAC with great retention
- **Not ignoring payback:** 5:1 LTV:CAC with 36-month payback is a cash trap
- **Not scaling broken channels:** Pouring money into inefficient channels accelerates failure

## Application

Ask up to 4 adaptive questions, offering 3-5 enumerated options at decision points.

### Step 0: Gather Context

"Let's evaluate this acquisition channel. Please provide:

**Channel details:**
- Channel name (e.g., Google Ads, content marketing, outbound sales, partnerships)
- How long have you been using this channel? (months)
- Current monthly spend on this channel

**Customer acquisition:**
- Customers acquired per month (from this channel)
- CAC for this channel (if known, otherwise we'll calculate)

**Business context:**
- Blended CAC (across all channels)
- Blended LTV
- Current MRR/ARR
- Target growth rate (% MoM or YoY)

You can provide estimates if you don't have exact numbers."

### Step 1: Evaluate Unit Economics

Calculate if not provided: `CAC = Monthly Spend / Customers Acquired per Month`

Ask about LTV (similar/higher/lower vs. blended), payback period. Flag:
- ✅ LTV:CAC >3:1 and payback <12 months: "Strong unit economics"
- ⚠️ LTV:CAC 2-3:1 or payback 12-18 months: "Marginal unit economics"
- 🚨 LTV:CAC <2:1 or payback >18 months: "Poor unit economics"

### Step 2: Assess Customer Quality

Ask about churn rate, NRR, and ICP fit for channel customers vs. blended. Classify as high/medium/low quality.

### Step 3: Evaluate Scalability

Ask about Magic Number, addressable volume, CAC trend. Classify as highly/moderately/not scalable.

### Step 4: Deliver Recommendations

Pick the right pattern based on synthesis:

#### Pattern 1: Scale Aggressively
When LTV:CAC >3:1, payback <12mo, quality good, Magic Number >0.75, volume large. Increase budget 50-100% monthly; monitor CAC, Magic Number, and customer quality weekly.

#### Pattern 2: Test & Optimize
When LTV:CAC 2-3:1 OR payback 12-18mo OR quality average OR Magic Number 0.5-0.75. Diagnose: high CAC, low LTV, poor targeting, or inefficient conversion. Fix for 4-8 weeks before scaling.

#### Pattern 3: Kill or Pause
When LTV:CAC <1.5:1 AND no clear path to improvement. Reallocate budget to top-performing channels. Exception: if <10% of total S&M spend, just pause.

#### Pattern 4: Invest to Learn (Strategic Channel)
When economics are poor BUT the channel has strategic importance (enterprise, brand building, long-term). Cap spend, track leading indicators (pipeline, brand lift), re-evaluate quarterly.

### Step 5: Compare Across Channels (Optional)

Generate cross-channel comparison table with CAC, LTV, LTV:CAC, Payback, Magic Number, Quality, and Recommendation. Produce budget allocation recommendation.

## Common Pitfalls

1. **Scaling Broken Channels** — Only scale channels with LTV:CAC >3:1 and payback <12 months
2. **Ignoring Customer Quality** — Track cohort retention and NRR by channel; low CAC + high churn = bad channel
3. **Celebrating Vanity Metrics** — Track CAC on paid customers only; ignore signups/clicks
4. **Averaging Across Channels** — Bad channels hide in blended metrics; compare individually
5. **Short-Term CAC Optimization** — Optimize for LTV:CAC ratio, not CAC alone
6. **Ignoring Payback Period** — 3:1 with 8-month payback beats 6:1 with 36-month payback
7. **Killing Channels Too Early** — Give channels 3-6 months and 100+ customers before evaluating
8. **Over-Relying on One Channel** — No single channel should be >50% of acquisition
9. **Forgetting Incrementality** — Test with holdout groups; count only truly incremental conversions
10. **Strategic Channels Without Limits** — Cap spend and set 6-12 month timelines for improvement
