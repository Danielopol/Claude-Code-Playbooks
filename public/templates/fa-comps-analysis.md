# Comparable Company Analysis Builder

**Important**: This workflow assists with building comparable company analyses but does not constitute financial advice. All analyses should be reviewed by qualified financial professionals before use in valuation decisions.

Build institutional-grade comparable company analyses in Excel with operating metrics, valuation multiples, quartile statistics, and professional formatting.

## Section Structure

A complete comps analysis has the following sections in the output spreadsheet:

| Section | Description |
|---------|-------------|
| Header | Company names, tickers, share prices, dates |
| Market Data | Share price, diluted shares, market cap, enterprise value |
| Operating Metrics | Revenue, EBITDA, EBIT, Net Income (historical + projected) |
| Growth Metrics | Revenue growth, EBITDA growth (historical + projected) |
| Margin Analysis | Gross margin, EBITDA margin, EBIT margin, net margin |
| Valuation Multiples | EV/Revenue, EV/EBITDA, P/E, EV/EBIT (historical + projected) |
| Credit Metrics | Net Debt/EBITDA, Interest Coverage, FCF Yield |
| Statistics | Mean, Median, 25th percentile, 75th percentile, High, Low |
| Implied Valuation | Apply benchmark multiples to the target company |

## Step-by-Step Workflow

### Step 1: Select the Peer Group

Choose 8-15 comparable companies based on:
- **Industry/sub-sector**: Same or adjacent industry classification (GICS, SIC)
- **Business model**: Similar revenue mix (recurring vs one-time, product vs service)
- **Size**: Revenue and market cap within a reasonable range (typically 0.5x to 3x of target)
- **Geography**: Same primary markets or global exposure
- **Growth profile**: Similar historical and projected growth rates
- **Margin profile**: Comparable profitability structure

Document why each comp was included or excluded.

### Step 2: Gather Market Data

For each company, collect as of a consistent date:

| Field | Source | Notes |
|-------|--------|-------|
| Share Price | Market close price | Use same date for all comps |
| Basic Shares Outstanding | Latest filing | From 10-Q/10-K cover page |
| Diluted Shares Outstanding | Latest filing | Include options, warrants, RSUs via treasury method |
| Total Debt | Latest filing | Short-term + long-term debt |
| Cash & Equivalents | Latest filing | Cash + short-term investments |
| Preferred Stock | Latest filing | Liquidation preference if applicable |
| Minority Interest | Latest filing | Non-controlling interest |

**Key calculations:**

```
Market Cap = Share Price × Diluted Shares Outstanding
Enterprise Value = Market Cap + Total Debt − Cash + Preferred Stock + Minority Interest
Net Debt = Total Debt − Cash
```

### Step 3: Gather Operating Metrics

For each company, collect historical (LTM or latest FY) and projected (NTM, FY+1, FY+2) data:

| Metric | Historical Source | Projected Source |
|--------|-------------------|-----------------|
| Revenue | SEC filings | Consensus estimates (FactSet, Bloomberg, Capital IQ) |
| EBITDA | SEC filings (or calculated) | Consensus estimates |
| EBIT | SEC filings | Consensus estimates |
| Net Income | SEC filings | Consensus estimates |
| EPS | SEC filings | Consensus estimates |
| Free Cash Flow | SEC filings (or calculated) | Consensus estimates |
| CapEx | SEC filings | Consensus estimates |

**EBITDA calculation if not reported:**
```
EBITDA = Operating Income + Depreciation + Amortization
  OR
EBITDA = Net Income + Interest + Taxes + D&A
```

**Adjustments to consider:**
- Exclude one-time charges (restructuring, impairments, litigation)
- Exclude stock-based compensation (some analysts include, some exclude — be consistent)
- Normalize for acquisitions or divestitures

### Step 4: Calculate Multiples

#### Enterprise Value Multiples

```
EV / Revenue   = Enterprise Value / Revenue
EV / EBITDA    = Enterprise Value / EBITDA
EV / EBIT      = Enterprise Value / EBIT
```

#### Equity Value Multiples

```
P / E          = Share Price / EPS  (or Market Cap / Net Income)
P / B          = Market Cap / Book Value of Equity
PEG Ratio      = P/E / EPS Growth Rate
```

#### Other Multiples

```
FCF Yield      = Free Cash Flow / Enterprise Value (or Market Cap)
Dividend Yield = Annual Dividend / Share Price
EV / FCF       = Enterprise Value / Free Cash Flow
```

Calculate each multiple for:
- LTM (last twelve months / historical)
- NTM (next twelve months / forward)
- FY+1 and FY+2 (if available)

### Step 5: Industry-Specific Metrics

Include metrics relevant to the target industry:

| Industry | Additional Metrics |
|----------|--------------------|
| SaaS / Software | EV/ARR, EV/Bookings, Rule of 40, NRR, LTV/CAC, CAC Payback |
| Banks / Financial | P/TBV, P/BV, ROE, ROA, NIM, Efficiency Ratio |
| REITs | P/FFO, P/AFFO, Cap Rate, NOI Yield, Occupancy |
| Insurance | P/BV, Combined Ratio, Loss Ratio, ROE |
| Retail / Consumer | EV/Store, Same-Store Sales Growth, Revenue per Sq Ft |
| Healthcare | EV/Bed, EV/Subscriber, Revenue per Member |
| Telecom | EV/Subscriber, ARPU, Churn Rate |
| Oil & Gas | EV/EBITDAX, EV/BOE, EV/Reserves, NAV |
| Mining | EV/Resource, EV/Reserve, All-In Sustaining Cost |

### Step 6: Statistical Analysis

Calculate the following for each multiple across the peer group:

| Statistic | Formula |
|-----------|---------|
| Mean | Average of all comps (consider excluding outliers) |
| Median | Middle value (preferred — less sensitive to outliers) |
| 25th Percentile | PERCENTILE function at 0.25 |
| 75th Percentile | PERCENTILE function at 0.75 |
| High | Maximum value |
| Low | Minimum value |

**Outlier treatment**: If a comp has a multiple more than 2 standard deviations from the mean, flag it. Consider excluding from statistics but keep it in the table (with a footnote).

### Step 7: Implied Valuation

Apply the peer group multiples to the target company:

```
Implied Enterprise Value = Target Metric × Peer Median Multiple
Implied Equity Value = Implied EV − Net Debt − Preferred − Minority Interest
Implied Share Price = Implied Equity Value / Diluted Shares Outstanding
```

Build a valuation range using 25th and 75th percentile multiples:

| Metric | Target Value | 25th %ile Multiple | Median Multiple | 75th %ile Multiple | Implied EV (Low) | Implied EV (Mid) | Implied EV (High) |
|--------|-------------|-------------------|----------------|-------------------|------------------|------------------|-------------------|
| Revenue | $X | Xa | Xb | Xc | | | |
| EBITDA | $X | Xa | Xb | Xc | | | |

### Step 8: Sensitivity and Football Field

Build a summary "football field" chart showing the range of implied valuations from different methodologies:
- Comps (25th to 75th percentile)
- 52-week trading range
- Analyst price targets (low to high)
- DCF (if available)
- Precedent transactions (if available)

## Excel Layout and Formatting

### Column Layout

```
Column A:     Row labels / metrics
Column B:     Target company (highlighted)
Columns C-N:  Peer companies (8-12 comps)
Column O:     Blank spacer
Columns P-U:  Statistics (Mean, Median, 25th, 75th, High, Low)
```

### Formatting Standards

| Element | Format |
|---------|--------|
| Dollar values (millions) | #,##0.0x or #,##0 |
| Multiples | #,##0.0x |
| Percentages | 0.0% |
| Growth rates | 0.0% |
| Share price | $#,##0.00 |
| Market cap / EV | #,##0 (in millions, with header noting "$M") |
| Negative values | Parentheses: (#,##0.0) |

### Color Coding

| Color | Usage |
|-------|-------|
| Blue font | Hard-coded inputs |
| Black font | Formulas |
| Light blue background | Target company column |
| Light gray background | Statistics section |
| Bold | Section headers, totals, key outputs |
| Top/bottom borders | Section separators |

### Row Grouping

Group rows by section with spacing:
1. **Header section**: Company name, ticker, share price, date (rows 1-5)
2. *Blank row*
3. **Market data**: Shares, market cap, EV components, EV (rows 7-15)
4. *Blank row*
5. **Operating metrics** (rows 17-30)
6. *Blank row*
7. **Growth & margins** (rows 32-45)
8. *Blank row*
9. **Valuation multiples** (rows 47-60)
10. *Blank row*
11. **Statistics** (rows 62-68)
12. *Blank row*
13. **Implied valuation** (rows 70-80)

## Quality Checklist

Before delivering the comps analysis:

- [ ] All share prices are as of the same date
- [ ] Diluted share counts use treasury stock method consistently
- [ ] Enterprise value calculation is correct (Market Cap + Debt − Cash + Preferred + MI)
- [ ] Historical data matches SEC filings (spot-check 2-3 companies)
- [ ] Projected data matches consensus estimates
- [ ] EBITDA adjustments are applied consistently across all comps
- [ ] Multiples are calculated correctly (no sign errors, correct numerator/denominator)
- [ ] Statistics exclude obvious outliers (negative multiples, NM values)
- [ ] NM (not meaningful) is shown for negative denominators instead of a misleading number
- [ ] Implied valuation bridges correctly from EV to equity value to per-share
- [ ] All sources are documented with "as of" dates
- [ ] Formatting is consistent and professional
- [ ] Print area is set and fits on standard page sizes
