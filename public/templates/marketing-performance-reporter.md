# Marketing Performance Reporter

Generate a marketing performance report with key metrics, trend analysis, insights, and optimization recommendations.

## Inputs

1. **Report type** -- determine which type of report the user needs:
   - **Campaign report** -- performance of a specific campaign
   - **Channel report** -- performance across a specific channel (email, social, paid, SEO, etc.)
   - **Content performance** -- how content pieces are performing
   - **Overall marketing report** -- cross-channel summary (weekly, monthly, quarterly)
   - **Custom** -- user-defined scope

2. **Time period** -- the reporting window (last week, last month, last quarter, custom date range)

3. **Data source**: Ask the user to provide metrics. Prompt with: "Please paste or share your performance data. I can work with spreadsheets, CSV data, dashboard screenshots described in text, or just the key numbers."

4. **Comparison period** (optional) -- prior period or year-over-year for trend context

5. **Stakeholder audience** (optional) -- who will read this report (executive summary style vs. detailed analyst view)

## Report Structure

### 1. Executive Summary
- 2-3 sentence overview of performance in the period
- Headline metric with trend direction (up/down/flat vs. prior period)
- One key win and one area of concern

### 2. Key Metrics Dashboard

| Metric | This Period | Prior Period | Change | Target | Status |
|--------|------------|--------------|--------|--------|--------|

Status indicators:
- On track (meeting or exceeding target)
- At risk (below target but within acceptable range)
- Off track (significantly below target)

#### Metrics by Report Type

**Campaign Report:** Impressions and reach, CTR, conversion rate, CPA, ROAS, total conversions

**Channel Report (Email):** Emails sent/delivered/bounced, open rate, CTR, unsubscribe rate, conversion rate

**Channel Report (Social):** Impressions and reach, engagement rate, follower growth, CTR, top-performing posts

**Channel Report (Paid):** Spend, impressions, clicks, CTR, CPC, CPM, conversions, CPA, ROAS

**Channel Report (SEO/Organic):** Organic sessions, keyword rankings, pages indexed, backlinks, top-performing pages

**Content Performance:** Pageviews, unique visitors, time on page, bounce rate, social shares, conversions attributed

**Overall Marketing Report:** Total leads, MQLs, pipeline contribution, CAC, channel-by-channel summary

### 3. Trend Analysis
- Performance trend over the period (week-over-week or month-over-month)
- Notable inflection points and what caused them
- Seasonal or cyclical patterns observed
- Comparison to benchmarks or targets

### 4. What Worked
- Top 3-5 wins with specific data
- Why these performed well (hypothesis)
- How to replicate or scale

### 5. What Needs Improvement
- Bottom 3-5 performers with specific data
- Hypotheses for underperformance
- Recommended fixes

### 6. Insights and Observations
- Patterns not obvious from metrics alone
- Audience behavior insights
- Content or creative themes that resonated
- External factors that may have influenced performance

### 7. Recommendations

For each recommendation:
- What to do
- Why (linked to a specific insight)
- Expected impact (high, medium, low)
- Effort to implement (high, medium, low)
- Priority (immediate, next sprint, next quarter)

Prioritize in a 2x2 matrix:

| | Low Effort | High Effort |
|---|---|---|
| **High Impact** | Do first | Plan for next sprint |
| **Low Impact** | Do if time allows | Deprioritize |

### 8. Next Period Focus
- Top 3 priorities for the upcoming period
- Tests or experiments to run
- Targets for key metrics

## Metric Definitions and Benchmarks

### Email Marketing

| Metric | Definition | Benchmark Range |
|--------|-----------|----------------|
| Delivery rate | Emails delivered / emails sent | 95-99% |
| Open rate | Unique opens / emails delivered | 15-30% |
| Click-through rate (CTR) | Unique clicks / emails delivered | 2-5% |
| Click-to-open rate (CTOR) | Unique clicks / unique opens | 10-20% |
| Unsubscribe rate | Unsubscribes / emails delivered | <0.5% |
| Conversion rate | Conversions / emails delivered | 1-5% |

### Social Media

| Metric | Definition |
|--------|-----------|
| Engagement rate | (Likes + comments + shares) / reach |
| Click-through rate | Link clicks / impressions |
| Follower growth rate | Net new followers / total followers per period |
| Share/Repost rate | Shares / reach |
| Video completion rate | Completed views / total views |

### Paid Advertising

| Metric | Definition |
|--------|-----------|
| Click-through rate (CTR) | Clicks / impressions |
| Cost per click (CPC) | Total spend / clicks |
| Cost per mille (CPM) | Cost per 1,000 impressions |
| Conversion rate | Conversions / clicks |
| Cost per acquisition (CPA) | Total spend / conversions |
| Return on ad spend (ROAS) | Revenue / ad spend |

### SEO / Organic Search

| Metric | Definition |
|--------|-----------|
| Organic sessions | Visits from organic search |
| Organic CTR | Clicks / impressions in search results |
| Domain authority | Third-party authority score |
| Organic conversion rate | Organic conversions / organic sessions |

### Overall Marketing / Pipeline

| Metric | Definition |
|--------|-----------|
| Marketing qualified leads (MQLs) | Leads meeting marketing qualification criteria |
| MQL to SQL conversion rate | SQLs / MQLs |
| Customer acquisition cost (CAC) | Total marketing + sales cost / new customers |
| Marketing-sourced revenue | Revenue from marketing-originated deals |
| Marketing-influenced revenue | Revenue from deals where marketing touched |

## Reporting Templates by Cadence

### Weekly Marketing Report
- **Top 3 metrics** with week-over-week change
- **What worked** this week (1-2 bullet points)
- **What needs attention** (1-2 bullet points)
- **This week's priorities** (3-5 action items)

### Monthly Marketing Report
1. Executive summary (3-5 sentences)
2. Key metrics dashboard (table with MoM and target comparison)
3. Channel-by-channel performance summary
4. Campaign highlights and results
5. What worked and what did not (with hypotheses)
6. Recommendations and next month priorities
7. Budget spend vs. plan

### Quarterly Business Review (QBR)
1. Quarter performance vs. goals
2. Year-to-date trajectory
3. Channel ROI analysis
4. Campaign performance summary
5. Competitive and market observations
6. Strategic recommendations for next quarter
7. Budget request and allocation plan

## Trend Analysis and Forecasting

### Trend Identification
Look for:
1. **Directional trends**: is the metric consistently going up, down, or flat over 4+ periods?
2. **Inflection points**: where did performance change direction?
3. **Seasonality**: predictable patterns by day of week, month, or quarter?
4. **Anomalies**: one-time spikes or drops and their causes
5. **Leading indicators**: which metrics change first and predict future outcomes?

### Simple Forecasting Approaches
- **Linear projection**: extend the current trend line forward
- **Moving average**: smooth out noise by averaging the last 3-6 periods
- **Year-over-year comparison**: use last year's pattern adjusted for growth rate
- **Funnel math**: forecast outputs from inputs
- **Scenario modeling**: best case, expected case, worst case projections

## Attribution Modeling Basics

| Model | How It Works | Best For |
|-------|-------------|----------|
| Last touch | 100% credit to last interaction | Understanding final conversion triggers |
| First touch | 100% credit to first interaction | Understanding top-of-funnel effectiveness |
| Linear | Equal credit to all touchpoints | Fair representation of all channels |
| Time decay | More credit to recent touchpoints | Balanced view favoring recent interactions |
| Position-based (U-shaped) | 40% first, 40% last, 20% middle | Valuing both discovery and conversion |
| Data-driven | Algorithmic credit based on patterns | Most accurate (requires high volume) |

## Optimization Recommendations Framework

### Optimization Levers by Funnel Stage

| Funnel Stage | Problem Signal | Optimization Levers |
|-------------|---------------|---------------------|
| Awareness | Low impressions, low reach | Budget, targeting, channel mix, creative format |
| Interest | Low CTR, low engagement | Ad creative, headlines, content hooks, targeting |
| Consideration | High bounce rate, low time on page | Landing page content, page speed, UX |
| Conversion | Low conversion rate | Offer, CTA, form length, trust signals, layout |
| Retention | High churn, low repeat engagement | Onboarding, email nurture, product experience |

### Continuous Optimization Cadence
- **Daily**: monitor paid campaigns for budget pacing and anomalies
- **Weekly**: review channel performance, pause underperformers, scale winners
- **Bi-weekly**: refresh ad creative and test new variants
- **Monthly**: full performance review, identify new optimization opportunities
- **Quarterly**: strategic review of channel mix, budget allocation, and targeting
