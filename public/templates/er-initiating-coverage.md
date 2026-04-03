# Initiating Coverage

Create institutional-quality equity research initiation reports through a structured 5-task workflow. Each task must be executed separately with verified inputs.

## Overview

This skill produces comprehensive first-time coverage reports following institutional standards (JPMorgan, Goldman Sachs, Morgan Stanley format). Tasks are executed individually, each verifying prerequisites before proceeding.

**Default Font**: Times New Roman throughout all documents (unless user specifies otherwise).

## Task Selection

Select which task to execute:

| Task | Name | Prerequisites | Output |
|------|------|--------------|--------|
| **1** | Company Research | Company name/ticker | 6-8K word document |
| **2** | Financial Modeling | 10-K or financials access | Excel model (6 tabs) |
| **3** | Valuation Analysis | Financial model (Task 2) | Valuation + price target |
| **4** | Chart Generation | Tasks 1, 2, 3 + external data | 25-35 PNG/JPG charts |
| **5** | Report Assembly | ALL previous tasks (1-4) | 30-50 page DOCX report |

## Task 1: Company Research

**Purpose**: Research company's business, management, competitive position, industry, and risks.

**Output**: Company Research Document (6,000-8,000 words)
- Company overview & history
- Management bios (300-400 words x 3-4 execs)
- Products & services analysis
- Industry overview
- Competitive analysis (5-10 competitors)
- TAM sizing
- Risk assessment (8-12 risks)

**File name**: `[Company]_Research_Document_[Date].md`

## Task 2: Financial Modeling

**Purpose**: Extract historical financials and build comprehensive Excel financial model with projections and scenarios.

**Output**: Excel Financial Model (.xlsx)
- 6 essential tabs:
  1. **Revenue Model** - Product breakdown (20-30 rows) + Geography breakdown (15-20 rows)
  2. **Income Statement** - Full P&L with 40-50 line items, historical (3-5 years) + projected (5 years)
  3. **Cash Flow Statement** - Operating/Investing/Financing activities, historical + projected
  4. **Balance Sheet** - Assets/Liabilities/Equity, historical + projected
  5. **Scenarios** - Bull/Base/Bear comparison table
  6. **DCF Inputs** - Prepared for Task 3 valuation

**File name**: `[Company]_Financial_Model_[Date].xlsx`

## Task 3: Valuation Analysis

**Purpose**: Perform comprehensive valuation using DCF, comparables, and precedent transactions.

**Prerequisites**: Financial model from Task 2

**Output**: Valuation Analysis (4-6 pages + Excel tabs)
- DCF analysis with sensitivity tables
- Comparable companies (5-10 peers with statistical summary)
- Precedent transactions (if applicable)
- Valuation football field
- **Price target**: $XX.XX
- **Recommendation**: BUY/HOLD/SELL
- **Upside**: XX%
- Key catalysts (3-5)

## Task 4: Chart Generation

**Purpose**: Generate 25-35 professional financial charts for the report.

**Prerequisites**: Tasks 1, 2, and 3 complete

**Output**: 25-35 Professional Chart Files (PNG/JPG, 300 DPI)

**4 MANDATORY Charts**:
- Revenue by product (stacked area)
- Revenue by geography (stacked bar)
- DCF sensitivity (2-way heatmap)
- Valuation football field (horizontal bars)

## Task 5: Report Assembly

**Purpose**: Write and assemble the comprehensive final DOCX report.

**Prerequisites**: ALL previous tasks (1-4)

**Output**: Comprehensive Equity Research Report (.docx)
- **Length**: 30-50 pages (MINIMUM 30)
- **Word count**: 10,000-15,000 words (MINIMUM 10,000)
- **Charts**: 25-35 embedded images
- **Tables**: 12-20 comprehensive tables

**Structure**:
- Page 1: Investment Summary (INITIATING COVERAGE format)
- Pages 2-5: Investment thesis & risks
- Pages 6-17: Company 101
- Pages 18-30: Financial analysis & projections
- Pages 31-40: Valuation analysis
- Pages 41-50: Appendices

## Task Execution Order

Tasks 1 and 2 can run in any order. Tasks 3-5 have strict dependencies:

```
Task 1 - Company Research (independent)
Task 2 - Financial Modeling (independent)
Task 3 - Valuation Analysis (requires Task 2)
Task 4 - Chart Generation (requires Tasks 1, 2, 3)
Task 5 - Report Assembly (requires ALL previous tasks)
```

## Quality Standards

All outputs meet institutional standards:
- **Comprehensive**: Meet all minimum requirements
- **Detailed**: Specific data and examples, not generic statements
- **Quantified**: Lead with numbers and metrics
- **Cited**: Proper sources with clickable hyperlinks
- **Professional**: Institutional-quality formatting
- **Accurate**: All numbers verified and cross-checked

## File Organization

Recommended structure:
```
ProjectFolder/
  Task1_Research/
    [Company]_Research_Document.md
  Task2_Model/
    [Company]_Financial_Model.xlsx
  Task3_Valuation/
    [Company]_Valuation_Analysis.md
  Task4_Charts/
    chart_01.png through chart_35.png
  Task5_Report/
    [Company]_Initiation_Report.docx
```
