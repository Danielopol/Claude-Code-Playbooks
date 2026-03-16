# Product Metrics Reviewer

Review and analyze product metrics, identify trends, and surface actionable insights.

## Workflow

### 1. Gather Metrics Data

Ask the user to provide:
- The metrics and their values (paste a table, screenshot, or describe)
- Comparison data (previous period, targets)
- Any context on recent changes (launches, incidents, seasonality)

Key questions:
- What time period to review? (last week, last month, last quarter)
- What metrics to focus on? Or should we review the full product metrics suite?
- Are there specific targets or goals to compare against?
- Any known events that might explain changes (launches, outages, marketing campaigns, seasonality)?

### 2. Organize the Metrics

Structure the review using a metrics hierarchy: North Star metric at the top, L1 health indicators (acquisition, activation, engagement, retention, revenue, satisfaction), and L2 diagnostic metrics for drill-down.

If the user has not defined their metrics hierarchy, help them identify their North Star and key L1 metrics before proceeding.

### 3. Analyze Trends

For each key metric:
- **Current value**: What is the metric today?
- **Trend**: Up, down, or flat compared to previous period? Over what timeframe?
- **vs Target**: How does it compare to the goal or target?
- **Rate of change**: Is the trend accelerating or decelerating?
- **Anomalies**: Any sudden changes, spikes, or drops?

Identify correlations:
- Do changes in one metric correlate with changes in another?
- Are there leading indicators that predict lagging metric changes?
- Do segment breakdowns reveal that an aggregate trend is driven by a specific cohort?

### 4. Generate the Review

#### Summary
2-3 sentences: overall product health, most notable changes, key callout.

#### Metric Scorecard
Table format for quick scanning:

| Metric | Current | Previous | Change | Target | Status |
|--------|---------|----------|--------|--------|--------|
| [Metric] | [Value] | [Value] | [+/- %] | [Target] | [On track / At risk / Miss] |

#### Trend Analysis
For each metric worth discussing:
- What happened and how significant is the change
- Why it likely happened (attribution based on known events, correlated metrics, segment analysis)
- Whether this is a one-time event or a sustained trend

#### Bright Spots
What is going well:
- Metrics beating targets
- Positive trends to sustain
- Segments or features showing strong performance

#### Areas of Concern
What needs attention:
- Metrics missing targets or trending negatively
- Early warning signals before they become problems
- Metrics where we lack visibility or understanding

#### Recommended Actions
Specific next steps based on the analysis:
- Investigations to run (dig deeper into a concerning trend)
- Experiments to launch (test hypotheses about what could improve a metric)
- Investments to make (double down on what is working)
- Alerts to set (monitor a metric more closely)

## Product Metrics Hierarchy

### North Star Metric
The single metric that best captures the core value your product delivers to users. It should be:
- **Value-aligned**: Moves when users get more value from the product
- **Leading**: Predicts long-term business success (revenue, retention)
- **Actionable**: The product team can influence it through their work
- **Understandable**: Everyone in the company can understand what it means and why it matters

### L1 Metrics (Health Indicators)
The 5-7 metrics that together paint a complete picture of product health:
- **Acquisition**: New signups, signup conversion rate, channel mix, cost per acquisition
- **Activation**: Activation rate, time to activate, setup completion rate
- **Engagement**: DAU/WAU/MAU, stickiness ratio, core action frequency, feature adoption
- **Retention**: D1/D7/D30 retention, cohort retention curves, churn rate
- **Monetization**: Conversion rate, MRR/ARR, ARPU, expansion revenue, net revenue retention
- **Satisfaction**: NPS, CSAT, support ticket volume, app store ratings

### L2 Metrics (Diagnostic)
Detailed metrics used to investigate changes in L1 metrics:
- Funnel conversion at each step
- Feature-level usage and adoption
- Segment-specific breakdowns
- Performance metrics (page load time, error rate, API latency)

## Metric Review Cadences

### Weekly Metrics Check (15-30 min)
- North Star metric: current value, week-over-week change
- Key L1 metrics: any notable movements
- Active experiments: results and statistical significance
- Anomalies: any unexpected spikes or drops

### Monthly Metrics Review (30-60 min)
- Full L1 metric scorecard with month-over-month trends
- Progress against quarterly OKR targets
- Cohort analysis: are newer cohorts performing better?
- Feature adoption: how are recent launches performing?

### Quarterly Business Review (60-90 min)
- OKR scoring for the quarter
- Trend analysis for all L1 metrics over the quarter
- Year-over-year comparisons
- What worked and what did not

## Tips

- Start with the "so what" — what is the most important thing in this metrics review? Lead with that.
- Absolute numbers without context are useless. Always show comparisons (vs previous period, vs target, vs benchmark).
- Be careful about attribution. Correlation is not causation.
- Segment analysis often reveals that an aggregate metric masks important differences.
- Not all metric movements matter. Small fluctuations are noise. Focus attention on meaningful changes.
- If a metric is missing its target, do not just report the miss — recommend what to do about it.
- Metrics reviews should drive decisions. If the review does not lead to at least one action, it was not useful.
