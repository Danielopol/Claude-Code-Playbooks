# Stock Analysis & Research

## Goal
Analyze stocks with fundamental and technical analysis. Supports US, China A-shares, and Hong Kong markets. Generate investment reports with key metrics.

## What You Can Do
- Fundamental analysis (P/E, P/B, ROE, revenue growth, margins)
- Technical analysis (trend, support/resistance, indicators)
- Peer comparison and industry positioning
- Risk assessment and investment thesis
- Generate structured analysis reports

## How to Use
### Step 1: Provide Company Information

Tell me:
- Stock ticker/code (e.g., AAPL, 600519.SH, 0700.HK)
- Market (US/China A-shares/Hong Kong)
- Or provide financial data directly

### Step 2: Choose Analysis Type

- **Quick Analysis**: Key metrics overview
- **Deep Dive**: Comprehensive fundamental analysis
- **Technical Review**: Chart patterns and indicators
- **Peer Comparison**: Compare with competitors

### Step 3: Receive Analysis Report

I'll provide a structured report with:
- Company overview
- Key financial metrics
- Valuation assessment
- Risk factors
- Investment thesis

## Domain Knowledge
### Fundamental Analysis Metrics

#### Valuation Ratios
| Metric | Formula | Interpretation |
|--------|---------|----------------|
| P/E Ratio | Price / EPS | <15 undervalued, >25 expensive |
| P/B Ratio | Price / Book Value | <1 potential value, >3 growth priced in |
| P/S Ratio | Price / Revenue | Useful for unprofitable companies |
| EV/EBITDA | Enterprise Value / EBITDA | <10 attractive, >15 expensive |
| PEG Ratio | P/E / Growth Rate | <1 undervalued relative to growth |

#### Profitability Metrics
| Metric | Formula | Good Benchmark |
|--------|---------|----------------|
| Gross Margin | Gross Profit / Revenue | >40% strong pricing power |
| Operating Margin | Operating Income / Revenue | >15% efficient operations |
| Net Margin | Net Income / Revenue | >10% healthy profitability |
| ROE | Net Income / Shareholder Equity | >15% good capital efficiency |
| ROIC | NOPAT / Invested Capital | >WACC value creation |

#### Growth Metrics
| Metric | What to Look For |
|--------|------------------|
| Revenue Growth | >10% YoY indicates strong demand |
| EPS Growth | Should outpace revenue (operating leverage) |
| FCF Growth | Sustainable growth driver |

#### Financial Health
| Metric | Formula | Safe Range |
|--------|---------|------------|
| Debt/Equity | Total Debt / Equity | <1 for most industries |
| Current Ratio | Current Assets / Current Liabilities | >1.5 healthy liquidity |
| Interest Coverage | EBIT / Interest Expense | >5 comfortable |
| FCF Yield | FCF / Market Cap | >5% attractive |

### Technical Analysis Patterns

#### Trend Indicators
- **Moving Averages**: 50-day, 200-day crossovers
- **MACD**: Momentum and trend direction
- **RSI**: Overbought (>70) / Oversold (<30)

#### Chart Patterns
- **Support/Resistance**: Key price levels
- **Head and Shoulders**: Reversal pattern
- **Double Top/Bottom**: Reversal signals
- **Breakouts**: Volume-confirmed moves

## Output Format
```markdown
# Stock Analysis Report: [TICKER]

**Company**: [Full Name]
**Market**: [Exchange]
**Sector**: [Industry]
**Analysis Date**: [Date]

## Tips
1. **Provide recent financials** if available for more accurate analysis
2. **Specify your investment horizon** (short-term trading vs long-term investing)
3. **Mention specific concerns** you want me to address
4. **Include peer companies** for comparison analysis
5. **Specify market context** (bull/bear market conditions)

## Limitations
- This is an AI assistant, not a replacement for professional expertise
- Always verify important outputs independently
- For high-stakes decisions, consult domain experts