# Spreadsheet & Financial Model Auditor

**Important**: This workflow assists with spreadsheet auditing but does not replace professional review. All audit findings should be validated by qualified financial professionals.

Systematic audit methodology for spreadsheets and financial models. Covers formula-level checks, model integrity validation, logic and reasonableness testing, and severity-based reporting.

## Audit Workflow

### Phase 1: Model Inventory

Before auditing, catalog the model structure:

1. List all tabs and their purpose
2. Identify input cells (assumptions, hard-coded values)
3. Identify output cells (key results, summary metrics)
4. Map the flow of data between tabs
5. Note the model type (DCF, LBO, 3-statement, merger, comps, other)

### Phase 2: Formula-Level Checks

Examine formulas for common errors:

| Check | What to Look For | Severity |
|-------|-------------------|----------|
| Hard-coded overrides | Numbers typed directly into formula cells instead of referencing inputs | Critical |
| Inconsistent formulas across rows | Formula in one column differs from adjacent columns in the same row | Critical |
| Broken references | #REF!, #NAME?, #VALUE!, #N/A, #DIV/0! errors | Critical |
| Circular references | Cells that reference themselves directly or indirectly | Warning |
| Unused inputs | Assumption cells that are not referenced by any formula | Warning |
| Mixed units | Dollars mixed with thousands or millions in the same section | Critical |
| Absolute vs relative references | Incorrect $ anchoring causing copy-paste errors | Critical |
| Missing parentheses | Order of operations errors | Critical |
| VLOOKUP/INDEX approximate match | Using approximate match when exact match is needed | Warning |
| Volatile functions | Excessive use of INDIRECT, OFFSET, NOW, RAND | Info |

### Phase 3: Model Integrity Checks

#### Balance Sheet Checks

| Check | Formula | Expected | Severity |
|-------|---------|----------|----------|
| BS Balance | Total Assets − Total L&E | = 0 every period | Critical |
| Current Assets Sum | Sum of CA line items vs Total CA | = 0 | Critical |
| Current Liabilities Sum | Sum of CL line items vs Total CL | = 0 | Critical |
| Total Assets Sum | Total CA + Total Non-Current Assets vs Total Assets | = 0 | Critical |
| Equity Rollforward | Prior Equity + NI − Dividends + Other vs Current Equity | = 0 | Critical |
| Retained Earnings | Prior RE + NI − Dividends vs Current RE | = 0 | Critical |

#### Cash Flow Statement Checks

| Check | Formula | Expected | Severity |
|-------|---------|----------|----------|
| Cash Tie-Out | CFS Ending Cash − BS Cash | = 0 every period | Critical |
| Beginning Cash | CFS Beginning Cash − Prior Period BS Cash | = 0 | Critical |
| CFO Sum | Sum of CFO line items vs CFO total | = 0 | Critical |
| CFI Sum | Sum of CFI line items vs CFI total | = 0 | Critical |
| CFF Sum | Sum of CFF line items vs CFF total | = 0 | Critical |
| WC Changes | CFS WC changes vs (Current BS − Prior BS) for each WC item | = 0 | Critical |

#### Income Statement Checks

| Check | Formula | Expected | Severity |
|-------|---------|----------|----------|
| Revenue Build | Sum of segments vs Total Revenue | = 0 | Critical |
| Gross Profit | Revenue − COGS vs Gross Profit | = 0 | Critical |
| EBITDA | Gross Profit − OpEx vs EBITDA | = 0 | Critical |
| EBIT | EBITDA − D&A vs EBIT | = 0 | Critical |
| Net Income | EBT − Taxes vs Net Income | = 0 | Critical |
| Tax Rate | Tax Expense / EBT within reasonable range (15-30%) | In range | Warning |

### Phase 4: Logic and Reasonableness Checks

| Check | What to Examine | Severity |
|-------|-----------------|----------|
| Negative revenue | Revenue should not be negative | Critical |
| Negative margins going positive | Sudden margin improvement may indicate error | Warning |
| Growth rate spikes | Year-over-year changes exceeding 50% without explanation | Warning |
| Margin compression/expansion | Gross or operating margins moving unrealistically | Warning |
| Cash going negative | Ending cash balance below zero without revolver | Critical |
| Debt going negative | Debt balance should not be negative | Critical |
| Working capital days | DSO, DIO, DPO outside industry norms (e.g., DSO > 120) | Warning |
| CapEx vs D&A | CapEx significantly less than D&A for extended periods (asset base shrinking) | Info |
| Interest coverage | EBIT / Interest Expense < 1.0x | Warning |
| Perpetuity growth > WACC | Terminal growth rate exceeding discount rate | Critical |
| Leverage ratios | Debt / EBITDA beyond reasonable range for industry | Warning |
| Projection horizon | Explicit forecast period too short or too long (typical: 5-10 years) | Info |

### Phase 5: Cross-Model Consistency (for multi-model files)

| Check | Details |
|-------|---------|
| Revenue alignment | Does DCF revenue match comps implied revenue? |
| EBITDA alignment | Does LBO EBITDA match 3-statement EBITDA? |
| Share count | Is diluted share count consistent across all valuation pages? |
| Discount rate | Is WACC consistent between DCF and any other discounting? |
| Transaction value | Does merger model transaction value match LBO entry price? |

## Severity Definitions

| Level | Definition | Action Required |
|-------|-----------|-----------------|
| **Critical** | Model produces incorrect output. Financial impact or broken linkage. | Must fix before any use of model. |
| **Warning** | Potential issue that may affect output accuracy or indicates questionable assumptions. | Review and either fix or document justification. |
| **Info** | Style, best practice, or minor observation. No direct impact on output. | Fix if time permits. Note for future versions. |

## Audit Report Format

### Summary

```
Model: [Name]
Auditor: [Name]
Date: [Date]
Model Type: [DCF / LBO / 3-Statement / Merger / Comps / Other]

Findings Summary:
  Critical:  X issues
  Warning:   X issues
  Info:      X issues
```

### Findings Table

| # | Severity | Tab | Cell(s) | Description | Recommendation |
|---|----------|-----|---------|-------------|----------------|
| 1 | Critical | BS | D15 | Total Assets does not equal Total L&E (off by $2.3M) | Fix equity rollforward formula |
| 2 | Warning | IS | F22:J22 | Tax rate jumps from 21% to 35% in Year 3 with no explanation | Verify assumption or add note |
| 3 | Info | Assumptions | B5 | Blue-font input cell not referenced anywhere | Remove or connect to model |

### Sign-Off

```
Audit Status: [ ] Pass  [ ] Pass with Exceptions  [ ] Fail
Exceptions (if any): _______________
Auditor Signature: _______________
Date: _______________
```

## Audit Best Practices

1. **Trace precedents and dependents** for every key output cell. Use Excel's Trace Precedents (Ctrl+[) and Trace Dependents tools.
2. **Check formula consistency** by selecting a row of formulas and using Ctrl+\ (column differences) or comparing with a reference cell.
3. **Test extremes**: Set key inputs to 0, very large numbers, and negative numbers to see if the model handles edge cases.
4. **Review named ranges and data validation** to ensure they point to the correct cells and have not been broken by row/column insertions.
5. **Check print areas**: Ensure the model prints correctly if it will be distributed in hard copy.
6. **Spot-check against source data**: For historical periods, compare model values to the company's actual filings (10-K, 10-Q).
7. **Document everything**: Even items that pass the audit should be noted as "checked and confirmed."
8. **Use a clean copy**: Audit on a separate copy of the file so you can mark it up without altering the working version.
