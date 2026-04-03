# Spreadsheet Data Cleaner

**Important**: Always review proposed changes before applying them. Back up your original data before running any cleaning operations.

Systematic workflow for cleaning messy spreadsheet data. Detects and fixes whitespace issues, inconsistent casing, numbers stored as text, date format problems, duplicates, blank cells, mixed-type columns, and encoding issues.

## Cleaning Workflow

### Step 0: Back Up the Original

Before any cleaning, create a copy of the original file or sheet. Never clean data in place without a backup.

### Step 1: Initial Assessment

Scan the data to understand its structure and identify issues:

1. **Row and column counts** — How many rows of data? How many columns?
2. **Header row** — Is there a clear header row? Are headers descriptive?
3. **Data types per column** — What type should each column be (text, number, date, boolean)?
4. **Sample values** — Look at the first 10, middle 10, and last 10 rows for each column
5. **Blank rate** — What percentage of cells are blank in each column?

### Step 2: Detect Issues

Run the following checks on each column:

| Check | What to Look For | Detection Method |
|-------|-------------------|------------------|
| Leading/trailing whitespace | Spaces or tabs at start/end of text values | TRIM(cell) <> cell |
| Internal extra spaces | Multiple consecutive spaces within text | LEN(cell) <> LEN(TRIM(cell)) after leading/trailing check |
| Inconsistent casing | "New York" vs "new york" vs "NEW YORK" | Group by UPPER(cell), count distinct casings |
| Numbers as text | Numeric values stored with text formatting | ISNUMBER(cell) = FALSE but VALUE(cell) works |
| Leading zeros in numbers | "007" stored as text to preserve zeros | Left character is "0" and value is numeric |
| Date format inconsistencies | "01/15/2024" vs "2024-01-15" vs "Jan 15, 2024" | Multiple date patterns in same column |
| Invalid dates | "02/30/2024" or "13/01/2024" | DATEVALUE fails or results in unexpected date |
| Duplicates | Exact duplicate rows or near-duplicates | COUNTIF > 1 on key columns |
| Blank cells | Missing data in required fields | ISBLANK or cell = "" |
| Mixed types | Numbers and text in the same column | ISNUMBER varies within column |
| Special characters | Non-printable characters, BOM markers | CLEAN(cell) <> cell or CODE analysis |
| Encoding issues | Mojibake (garbled characters), wrong encoding | Visual inspection for patterns like "Ã©" instead of "é" |
| Inconsistent categories | "USA", "US", "United States", "U.S." | Group by value, look for near-matches |
| Outliers | Values far outside expected range | Z-score > 3 or outside IQR fences |

### Step 3: Propose Fixes

For each issue found, propose a fix before applying it. Present the proposal in this format:

```
Issue: [Description]
Affected: [Number of cells/rows affected]
Column(s): [Column name(s)]
Proposed Fix: [What will be changed]
Example:
  Before: "  John Smith  "
  After:  "John Smith"
Risk: [Low / Medium / High]
```

**Wait for user approval before applying any changes.**

### Step 4: Apply Fixes (in this order)

Apply fixes in a specific order to avoid cascading issues:

1. **Encoding fixes** — Fix character encoding first since it affects all text operations
2. **Whitespace** — TRIM and CLEAN all text cells
3. **Casing standardization** — Apply consistent casing rules (Title Case for names, UPPER for codes, etc.)
4. **Number conversion** — Convert numbers-as-text to actual numbers
5. **Date standardization** — Convert all dates to a single format (recommend ISO 8601: YYYY-MM-DD)
6. **Category consolidation** — Merge inconsistent category labels ("USA" / "US" / "United States" → pick one)
7. **Duplicate removal** — Remove exact duplicates; flag near-duplicates for review
8. **Blank handling** — Fill, flag, or remove blanks based on context

### Step 5: Validation

After cleaning, verify:

- [ ] Row count matches expected (minus removed duplicates)
- [ ] No new errors introduced
- [ ] All columns have the correct data type
- [ ] No unintended data loss
- [ ] Key column values still match source data (spot check)

## Common Fix Recipes

### Whitespace

```
Clean value = TRIM(CLEAN(cell))
```

- CLEAN removes non-printable characters (ASCII 0-31)
- TRIM removes leading/trailing spaces and collapses internal multiple spaces to single

### Casing

| Target | Function | Example |
|--------|----------|---------|
| Title Case | PROPER(cell) | "john smith" → "John Smith" |
| UPPER | UPPER(cell) | "john smith" → "JOHN SMITH" |
| lower | LOWER(cell) | "John Smith" → "john smith" |

**Caution with PROPER**: It capitalizes after every space/punctuation, so "McDonald" becomes "Mcdonald" and "O'BRIEN" becomes "O'Brien". Review proper-noun columns manually.

### Numbers Stored as Text

```
Converted = VALUE(cell)    — for plain numbers
Converted = cell * 1       — quick coercion
Converted = cell + 0       — alternative coercion
```

Watch for values that legitimately need to be text (ZIP codes, phone numbers, account IDs with leading zeros).

### Date Standardization

```
Standard = TEXT(DATEVALUE(cell), "YYYY-MM-DD")
```

For ambiguous dates (is "01/02/03" Jan 2, 2003 or Feb 1, 2003?), ask the user to confirm the source format before converting.

### Duplicate Detection

```
Exact duplicates:   COUNTIF on all columns concatenated
Near-duplicates:    Fuzzy match on key fields (name, address)
```

When removing duplicates, keep the most complete record (fewest blanks) or the most recent record.

## Handling Specific Data Types

### Phone Numbers
- Strip all non-numeric characters
- Standardize to a single format: (XXX) XXX-XXXX or +1XXXXXXXXXX
- Validate length (10 digits for US)

### Email Addresses
- Lowercase all
- Trim whitespace
- Validate format (contains @ and domain)
- Check for common typos: "gmial.com", "yaho.com"

### Addresses
- Standardize abbreviations: "St" vs "Street", "Ave" vs "Avenue"
- Fix state abbreviations (spell out or abbreviate consistently)
- Validate ZIP code format

### Currency Values
- Remove currency symbols ($, €, £)
- Remove thousands separators
- Convert to numeric
- Note the currency if mixed currencies exist

## Reporting

After cleaning, produce a summary report:

```
Data Cleaning Report
====================
File: [filename]
Date: [date]
Original rows: X
Final rows: X (Y duplicates removed)

Issues Found and Fixed:
| Issue Type              | Count | Action Taken          |
|------------------------|-------|-----------------------|
| Leading/trailing spaces | 234   | Trimmed               |
| Inconsistent casing     | 89    | Standardized to Title |
| Numbers as text         | 156   | Converted to numeric  |
| Date format issues      | 45    | Standardized to ISO   |
| Exact duplicates        | 12    | Removed               |
| Near-duplicates         | 5     | Flagged for review    |
| Blank required fields   | 23    | Flagged for review    |

Columns Modified: [list]
Columns Unchanged: [list]
```

## Tips for Best Results

1. **Provide context**: Tell the assistant what each column represents so it can apply appropriate cleaning rules.
2. **Specify your preferred formats**: Date format, casing preferences, category names, phone format.
3. **Flag columns to skip**: Some columns should not be cleaned (free-text notes, unique IDs with special formats).
4. **Set a materiality threshold**: For large datasets, focus on issues affecting more than 1% of rows first.
5. **Iterate**: Run a first pass for critical issues, review, then run a second pass for refinements.
