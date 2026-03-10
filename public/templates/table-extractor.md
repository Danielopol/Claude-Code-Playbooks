# Table Extraction from Documents

## Goal
>

## What You Can Do
- Table
- Extraction
- Pdf
- Camelot

## How to Use
1. Provide the PDF containing tables
2. Optionally specify pages or table detection method
3. I'll extract tables as pandas DataFrames

**Example prompts:**
- "Extract all tables from this PDF"
- "Get the table on page 5 of this report"
- "Extract borderless tables from this document"
- "Convert PDF tables to Excel format"

## Domain Knowledge
### camelot Fundamentals

```python
import camelot

# Extract tables from PDF
tables = camelot.read_pdf('document.pdf')

# Access results
print(f"Found {len(tables)} tables")

# Get first table as DataFrame
df = tables[0].df
print(df)
```

### Extraction Methods

| Method | Use Case | Description |
|--------|----------|-------------|
| `lattice` | Bordered tables | Detects table by lines/borders |
| `stream` | Borderless tables | Uses text positioning |

```python
# Lattice method (default) - for tables with visible borders
tables = camelot.read_pdf('document.pdf', flavor='lattice')

# Stream method - for borderless tables
tables = camelot.read_pdf('document.pdf', flavor='stream')
```

### Page Selection

```python
# Single page
tables = camelot.read_pdf('document.pdf', pages='1')

# Multiple pages
tables = camelot.read_pdf('document.pdf', pages='1,3,5')

# Page range
tables = camelot.read_pdf('document.pdf', pages='1-5')

# All pages
tables = camelot.read_pdf('document.pdf', pages='all')
```

### Advanced Options

#### Lattice Options
```python
tables = camelot.read_pdf(
    'document.pdf',
    flavor='lattice',
    line_scale=40,              # Line detection sensitivity
    copy_text=['h', 'v'],       # Copy text across merged cells
    shift_text=['l', 't'],      # Shift text alignment
    split_text=True,            # Split text at newlines
    flag_size=True,             # Flag super/subscripts
    strip_text='\n',            # Characters to strip
    process_background=False,   # Process background lines
)
```

#### Stream Options
```python
tables = camelot.read_pdf(
    'document.pdf',
    flavor='stream',
    edge_tol=500,               # Edge tolerance
    row_tol=10,                 # Row tolerance
    column_tol=0,               # Column tolerance
    strip_text='\n',            # Characters to strip
)
```

### Table Area Specification

```python
# Extract from specific area (x1, y1, x2, y2)
# Coordinates from bottom-left, in PDF points (72 points = 1 inch)
tables = camelot.read_pdf(
    'document.pdf',
    table_areas=['72,720,540,400'],  # One area
)

# Multiple areas
tables = camelot.read_pdf(
    'document.pdf',
    table_areas=['72,720,540,400', '72,380,540,200'],
)
```

### Column Specification

```python
# Manually specify column positions (for stream method)
tables = camelot.read_pdf(
    'document.pdf',
    flavor='stream',
    columns=['100,200,300,400'],  # X positions of column separators
)
```

### Working with Results

```python
import camelot

tables = camelot.read_pdf('document.pdf')

for i, table in enumerate(tables):
    # Access DataFrame
    df = table.df
    
    # Table metadata
    print(f"Table {i+1}:")
    print(f"  Page: {table.page}")
    print(f"  Accuracy: {table.accuracy}")
    print(f"  Whitespace: {table.whitespace}")
    print(f"  Order: {table.order}")
    print(f"  Shape: {df.shape}")
    
    # Parsing report
    report = table.parsing_report
    print(f"  Report: {report}")
```

### Export Options

```python
import camelot

tables = camelot.read_pdf('document.pdf')

# Export to CSV
tables[0].to_csv('table.csv')

# Export to Excel
tables[0].to_excel('table.xlsx')

# Export to JSON
tables[0].to_json('table.json')

# Export to HTML
tables[0].to_html('table.html')

# Export all tables
for i, table in enumerate(tables):
    table.to_excel(f'table_{i+1}.xlsx')
```

### Visual Debugging

```python
import camelot

# Enable visual debugging
tables = camelot.read_pdf('document.pdf')

# Plot detected table areas
camelot.plot(tables[0], kind='contour').show()

# Plot text on table
camelot.plot(tables[0], kind='text').show()

# Plot detected lines (lattice only)
camelot.plot(tables[0], kind='joint').show()
camelot.plot(tables[0], kind='line').show()

# Save plot
fig = camelot.plot(tables[0])
fig.savefig('debug.png')
```

### Handling Multi-page Tables

```python
import camelot
import pandas as pd

def extract_multipage_table(pdf_path, pages='all'):
    """Extract and combine tables that span multiple pages."""
    
    tables = camelot.read_pdf(pdf_path, pages=pages)
    
    # Group tables by similar structure (columns)
    table_groups = {}
    
    for table in tables:
        cols = tuple(table.df.columns)
        if cols not in table_groups:
            table_groups[cols] = []
        table_groups[cols].append(table.df)
    
    # Combine similar tables
    combined = []
    for cols, dfs in table_groups.items():
        if len(dfs) > 1:
            # Combine and deduplicate header rows
            combined_df = pd.concat(dfs, ignore_index=True)
            combined.append(combined_df)
        else:
            combined.append(dfs[0])
    
    return combined
```

## Tips
1. **Try Both Methods**: Lattice for bordered, stream for borderless
2. **Check Accuracy Score**: Above 90% is usually good
3. **Use Visual Debugging**: Understand extraction results
4. **Specify Areas**: For PDFs with multiple table types
5. **Handle Headers**: First row often needs special treatment

## Limitations
- This is an AI assistant, not a replacement for professional expertise
- Always verify important outputs independently
- For high-stakes decisions, consult domain experts