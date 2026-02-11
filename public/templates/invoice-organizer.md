# Invoice Organizer

Transform chaotic folders of invoices and receipts into clean, tax-ready filing systems with automatic extraction, consistent naming, and logical organization.

## Supported Formats

- PDFs (invoices, statements)
- Scanned receipts (JPG, PNG)
- Email attachments
- Screenshots
- Bank statements

## Naming Convention

Rename all files to a consistent format:
```
YYYY-MM-DD Vendor - Invoice - Product.pdf
```

Examples:
- `2024-03-15 Amazon - Invoice - Office Supplies.pdf`
- `2024-02-28 Adobe - Receipt - Creative Cloud.pdf`
- `2024-01-10 Contractor - Invoice - Web Development.pdf`

## Workflow

### Step 1: Scan Directory

Identify all invoice-related files in the target folder:
- Count total files
- Identify file types
- Note any problematic filenames

### Step 2: Extract Information

For each document, extract:
- **Date**: Invoice or transaction date
- **Vendor**: Company or person name
- **Amount**: Total amount (with currency)
- **Description**: Product or service
- **Invoice Number**: If present

### Step 3: Rename Files

Apply consistent naming:
```
{YYYY-MM-DD} {Vendor} - {Type} - {Description}.{ext}
```

Where Type is: Invoice, Receipt, Statement, or Contract

### Step 4: Organize into Folders

Choose organization structure based on user preference:

**By Vendor**
```
Invoices/
├── Amazon/
│   ├── 2024-03-15 Amazon - Invoice - Office Supplies.pdf
│   └── 2024-02-10 Amazon - Invoice - Electronics.pdf
├── Adobe/
├── Google/
└── Other/
```

**By Category**
```
Invoices/
├── Software-Subscriptions/
├── Office-Supplies/
├── Professional-Services/
├── Travel-Expenses/
└── Utilities/
```

**By Time Period**
```
Invoices/
├── 2024/
│   ├── Q1/
│   ├── Q2/
│   ├── Q3/
│   └── Q4/
└── 2023/
```

**By Tax Status**
```
Invoices/
├── Tax-Deductible/
│   ├── Business-Expenses/
│   └── Home-Office/
├── Non-Deductible/
└── Needs-Review/
```

### Step 5: Generate CSV Export

Create spreadsheet with all invoice data:

```csv
Date,Vendor,Type,Description,Amount,Currency,Category,File Path,Invoice Number
2024-03-15,Amazon,Invoice,Office Supplies,234.56,USD,Office,/path/to/file.pdf,INV-12345
```

### Step 6: Create Summary Report

```markdown
# Invoice Organization Summary

## Statistics
- Total files processed: 156
- Successfully organized: 152
- Needs manual review: 4
- Total invoice value: $45,678.90

## By Category
| Category | Count | Total |
|----------|-------|-------|
| Software | 45 | $12,345.00 |
| Services | 32 | $18,500.00 |
| Supplies | 79 | $14,833.90 |

## Files Needing Review
- unclear_scan_001.jpg - Could not extract date
- receipt_photo.png - Amount unclear
```

## Preservation Policy

- **Originals preserved**: Work on copies, keep originals safe
- **Metadata retained**: Preserve original file dates
- **Log all operations**: Track every move and rename

## Use Cases

### Tax Preparation
- Organize by tax year
- Separate deductible from non-deductible
- Generate totals by category

### Expense Reconciliation
- Match invoices to bank statements
- Identify missing receipts
- Track vendor spending

### Multi-Year Archiving
- Consistent structure across years
- Easy retrieval
- Audit-ready organization

### Ongoing Bookkeeping
- Set up folder structure
- Establish naming conventions
- Create processing workflow
