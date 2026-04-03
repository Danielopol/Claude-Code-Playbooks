# 3-Statement Financial Model Builder

**Important**: This workflow assists with financial model construction but does not provide financial advice. All models should be reviewed by qualified financial professionals before use in decision-making.

Build and populate integrated 3-statement financial models (Income Statement, Balance Sheet, Cash Flow Statement) with proper cross-statement linkages, scenario analysis, and professional formatting.

## Model Architecture

### Tab Structure

| Tab | Purpose |
|-----|---------|
| Cover | Model name, company, date, version, analyst |
| Assumptions | All driver inputs (blue font), scenario toggles |
| Income Statement | Revenue through Net Income with margins |
| Balance Sheet | Assets, Liabilities, Equity with balance check |
| Cash Flow Statement | Operating, Investing, Financing with cash tie-out |
| Debt Schedule | Revolver, term loans, bonds, mandatory/optional paydowns |
| Working Capital | AR, AP, Inventory, Other CA/CL detail |
| Depreciation & Amortization | PP&E rollforward, intangibles schedule |
| Ratios & Output | Key metrics dashboard, charts, summary page |
| Scenarios | Base / Upside / Downside assumptions |

### Flow of Linkages

```
Assumptions → Income Statement → Balance Sheet ↔ Cash Flow Statement
                    ↓                    ↑               ↓
              Working Capital ←──────────┘        Debt Schedule
                    ↓                                    ↓
              D&A Schedule ──────────────→ Balance Sheet (PP&E)
```

**Critical linkage points:**
- Net Income flows from IS to BS (Retained Earnings) and to CFS (top line)
- D&A from schedule flows to IS (expense) and CFS (add-back)
- CapEx flows from CFS to BS (PP&E rollforward)
- Working Capital changes flow from BS to CFS (operating section)
- Debt issuance/repayment flows from Debt Schedule to CFS (financing) and BS (liabilities)
- Interest expense from Debt Schedule flows to IS
- Cash ending balance on CFS must equal Cash on BS

## Building the Income Statement

### Revenue Build

```
Revenue = Units × Price/Unit  (volume-based)
  OR
Revenue = Prior Year × (1 + Growth Rate)  (growth-based)
  OR
Revenue = Market Size × Market Share × ASP  (TAM-based)
```

**Revenue line items:**
1. Gross Revenue (by segment if applicable)
2. Less: Returns, Allowances, Discounts
3. Net Revenue
4. Cost of Goods Sold (variable + fixed)
5. Gross Profit (Gross Margin %)
6. SG&A Expense
7. R&D Expense
8. Other Operating Expenses
9. EBITDA (EBITDA Margin %)
10. Depreciation & Amortization
11. EBIT (Operating Margin %)
12. Interest Expense (from Debt Schedule)
13. Interest Income
14. Other Income / (Expense)
15. EBT
16. Income Tax Expense (Effective Tax Rate × EBT)
17. Net Income (Net Margin %)

### Margin Calculations

Always show margins as percentages to the right of each line:
- Gross Margin = Gross Profit / Net Revenue
- EBITDA Margin = EBITDA / Net Revenue
- Operating Margin = EBIT / Net Revenue
- Net Margin = Net Income / Net Revenue

## Building the Balance Sheet

### Assets

| Line Item | Driver |
|-----------|--------|
| Cash & Equivalents | = Ending Cash from CFS |
| Accounts Receivable | = Revenue × (Days Sales Outstanding / 365) |
| Inventory | = COGS × (Days Inventory Outstanding / 365) |
| Prepaid Expenses | = % of SG&A or flat assumption |
| Other Current Assets | = % of Revenue or flat |
| Total Current Assets | Sum of above |
| Gross PP&E | = Prior + CapEx |
| Accumulated Depreciation | = Prior + Current Period Depreciation |
| Net PP&E | = Gross PP&E − Accumulated Depreciation |
| Goodwill & Intangibles | = Prior − Amortization (or flat if no amortization) |
| Other Long-Term Assets | Flat or % of Revenue |
| Total Assets | = Total Current + Total Long-Term |

### Liabilities & Equity

| Line Item | Driver |
|-----------|--------|
| Accounts Payable | = COGS × (Days Payable Outstanding / 365) |
| Accrued Expenses | = % of OpEx or flat |
| Current Portion of Debt | From Debt Schedule |
| Other Current Liabilities | Flat or % of Revenue |
| Total Current Liabilities | Sum of above |
| Long-Term Debt | From Debt Schedule |
| Other Long-Term Liabilities | Flat or trending |
| Total Liabilities | = Total Current + Total Long-Term |
| Common Stock | Flat (unless new issuance) |
| Retained Earnings | = Prior + Net Income − Dividends |
| Other Equity (AOCI, Treasury) | Flat or modeled |
| Total Equity | Sum of equity items |
| Total Liabilities & Equity | = Total Liabilities + Total Equity |

### Balance Check

```
Balance Check = Total Assets − Total Liabilities & Equity
```

This cell must always equal zero. Format it prominently (e.g., conditional formatting: green if 0, red if non-zero). Place it on every projected year column.

## Building the Cash Flow Statement

### Operating Activities (Indirect Method)

1. Net Income (from IS)
2. Add back: Depreciation & Amortization
3. Add back: Stock-Based Compensation (if applicable)
4. Add back: Amortization of Debt Issuance Costs
5. Less/Plus: Changes in Working Capital
   - (Increase) / Decrease in AR
   - (Increase) / Decrease in Inventory
   - (Increase) / Decrease in Prepaid Expenses
   - Increase / (Decrease) in AP
   - Increase / (Decrease) in Accrued Expenses
6. Cash from Operations

### Investing Activities

1. Capital Expenditures (negative)
2. Acquisitions (negative)
3. Asset Dispositions (positive)
4. Other Investing
5. Cash from Investing

### Financing Activities

1. Debt Issuance / (Repayment) — from Debt Schedule
2. Equity Issuance / (Buybacks)
3. Dividends Paid
4. Other Financing
5. Cash from Financing

### Cash Reconciliation

```
Beginning Cash
+ Cash from Operations
+ Cash from Investing
+ Cash from Financing
= Ending Cash  ← Must equal BS Cash
```

## Working Capital Schedule

| Item | Formula | Historical | Projected |
|------|---------|-----------|-----------|
| Accounts Receivable | Revenue × DSO / 365 | Calculate implied DSO | Apply assumed DSO |
| Inventory | COGS × DIO / 365 | Calculate implied DIO | Apply assumed DIO |
| Prepaid Expenses | % of SG&A | Calculate implied % | Apply assumed % |
| Accounts Payable | COGS × DPO / 365 | Calculate implied DPO | Apply assumed DPO |
| Accrued Expenses | % of OpEx | Calculate implied % | Apply assumed % |

**Change in Working Capital** = Current Period Balance − Prior Period Balance (for each item, with correct sign convention on CFS).

## Debt Schedule

For each tranche of debt:

```
Beginning Balance
+ New Borrowings
− Mandatory Repayments
− Optional Prepayments
= Ending Balance

Interest Expense = Average Balance × Interest Rate
```

**Revolver logic:**
- Revolver draws to maintain minimum cash balance
- Revolver repays when excess cash is available
- Include commitment fee on undrawn portion

**Circular reference note:** Interest expense depends on debt balance, which depends on cash flow, which depends on interest expense. Break the circularity with an iteration toggle or use beginning balance for interest calculations.

## Scenario Analysis

### Setup

Create a scenario toggle cell (e.g., 1 = Base, 2 = Upside, 3 = Downside). Use CHOOSE or INDEX functions to pull the correct assumptions.

### Key Variables to Flex

- Revenue growth rate
- Gross margin
- Operating expense growth
- CapEx as % of revenue
- Working capital days (DSO, DIO, DPO)
- Interest rate
- Tax rate

### Scenario Table Format

| Assumption | Downside | Base | Upside |
|-----------|----------|------|--------|
| Revenue Growth | X% | Y% | Z% |
| Gross Margin | X% | Y% | Z% |
| CapEx % Rev | X% | Y% | Z% |

## Formatting Standards

### Color Conventions

| Color | Meaning |
|-------|---------|
| Blue font | Hard-coded input / assumption |
| Black font | Formula / calculated cell |
| Green font | Link to another tab |
| Red font | Error check or warning |

### Number Formatting

- Revenue / large dollar amounts: #,##0 (no decimals) or #,##0.0 for millions
- Percentages: 0.0% (one decimal)
- Per-share metrics: #,##0.00 (two decimals)
- Negative values: parentheses format (#,##0)

### Layout Rules

- Historical years on the left, projected years on the right
- Clear separator (double border or shaded column) between historical and projected
- Row headers in column A, years across the top
- Units label in the header row (e.g., "$ in millions")
- Every section has a subtotal row with a top border

## Validation Checks

Run these checks after model completion:

| Check | Expected | Formula |
|-------|----------|---------|
| BS Balances | = 0 | Total Assets − Total L&E |
| Cash Tie-Out | = 0 | CFS Ending Cash − BS Cash |
| Retained Earnings | = 0 | BS RE − (Prior RE + NI − Dividends) |
| Net Debt Check | Matches | Compare Debt Schedule totals to BS |
| Interest Expense | Matches | Compare Debt Schedule interest to IS |
| D&A Check | Matches | Compare D&A Schedule to IS and CFS |
| Tax Check | Reasonable | Effective tax rate within expected range |
| WC Changes | = 0 | CFS WC changes − (BS current minus prior) |
| Revenue Growth | Reasonable | No unrealistic spikes or drops |
| Margins | Reasonable | Within industry norms |

## Quality Checklist

Before delivering the model:

- [ ] All assumptions are in blue font on the Assumptions tab
- [ ] No hard-coded numbers in formula cells
- [ ] Balance sheet balances in every projected period
- [ ] Cash on CFS ties to Cash on BS in every period
- [ ] Retained earnings rolls forward correctly
- [ ] Debt schedule ties to BS and IS
- [ ] D&A schedule ties to IS and CFS
- [ ] Working capital schedule ties to BS and CFS
- [ ] Scenario toggle works correctly for all three cases
- [ ] All cells have consistent number formatting
- [ ] Historical periods have source references noted
- [ ] Print area is set correctly for each tab
- [ ] No circular reference errors (or iteration is properly controlled)
- [ ] Error checks row shows all green / zero
- [ ] Cover page has version number and date
