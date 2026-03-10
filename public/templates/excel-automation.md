# Excel Automation Workflows

## Goal
>

## What You Can Do
- Excel
- Automation
- Macro
- Workflow

## How to Use
1. Describe the Excel automation task you need
2. Specify if you need live Excel interaction or file processing
3. I'll generate xlwings code and execute it

**Example prompts:**
- "Update this live Excel dashboard with new data"
- "Run this VBA macro and get the results"
- "Create an Excel add-in for data validation"
- "Automate monthly report generation with live charts"

## Domain Knowledge
### xlwings vs openpyxl

| Feature | xlwings | openpyxl |
|---------|---------|----------|
| Requires Excel | Yes | No |
| Live interaction | Yes | No |
| VBA execution | Yes | No |
| Speed (large files) | Fast | Slow |
| Server deployment | Limited | Easy |

### xlwings Fundamentals

```python
import xlwings as xw

# Connect to active Excel workbook
wb = xw.Book.caller()  # From Excel add-in
wb = xw.books.active   # Active workbook

# Open specific file
wb = xw.Book('path/to/file.xlsx')

# Create new workbook
wb = xw.Book()

# Get sheet
sheet = wb.sheets['Sheet1']
sheet = wb.sheets[0]
```

### Working with Ranges

#### Reading and Writing
```python
# Single cell
sheet['A1'].value = 'Hello'
value = sheet['A1'].value

# Range
sheet['A1:C3'].value = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
data = sheet['A1:C3'].value  # Returns list of lists

# Named range
sheet['MyRange'].value = 'Named data'

# Expand range (detect data boundaries)
sheet['A1'].expand().value  # All connected data
sheet['A1'].expand('table').value  # Table format
```

#### Dynamic Ranges
```python
# Current region (like Ctrl+Shift+End)
data = sheet['A1'].current_region.value

# Used range
used = sheet.used_range.value

# Last row with data
last_row = sheet['A1'].end('down').row

# Resize range
rng = sheet['A1'].resize(10, 5)  # 10 rows, 5 columns
```

### Formatting
```python
# Font
sheet['A1'].font.bold = True
sheet['A1'].font.size = 14
sheet['A1'].font.color = (255, 0, 0)  # RGB red

# Fill
sheet['A1'].color = (255, 255, 0)  # Yellow background

# Number format
sheet['B1'].number_format = '$#,##0.00'

# Column width
sheet['A:A'].column_width = 20

# Row height
sheet['1:1'].row_height = 30

# Autofit
sheet['A:D'].autofit()
```

### Excel Features

#### Charts
```python
# Add chart
chart = sheet.charts.add(left=100, top=100, width=400, height=250)
chart.set_source_data(sheet['A1:B10'])
chart.chart_type = 'column_clustered'
chart.name = 'Sales Chart'

# Modify existing chart
chart = sheet.charts['Sales Chart']
chart.chart_type = 'line'
```

#### Tables
```python
# Create Excel Table
rng = sheet['A1'].expand()
table = sheet.tables.add(source=rng, name='SalesTable')

# Refresh table
table.refresh()

# Access table data
table_data = table.data_body_range.value
```

#### Pictures
```python
# Add picture
sheet.pictures.add('logo.png', left=10, top=10, width=100, height=50)

# Update picture from matplotlib
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
ax.plot([1, 2, 3], [1, 4, 9])
sheet.pictures.add(fig, name='MyPlot', update=True)
```

### VBA Integration
```python
# Run VBA macro
wb.macro('MacroName')()

# With arguments
wb.macro('MyMacro')('arg1', 'arg2')

# Get return value
result = wb.macro('CalculateTotal')(100, 200)

# Access VBA module
vb_code = wb.api.VBProject.VBComponents('Module1').CodeModule.Lines(1, 10)
```

### User Defined Functions (UDFs)
```python
# Define a UDF (in Python file)
import xlwings as xw

@xw.func
def my_sum(x, y):
    """Add two numbers"""
    return x + y

@xw.func
@xw.arg('data', ndim=2)
def my_array_func(data):
    """Process array data"""
    import numpy as np
    return np.sum(data)

# These become Excel functions: =my_sum(A1, B1)
```

### Application Control
```python
# Excel application settings
app = xw.apps.active
app.screen_updating = False  # Speed up
app.calculation = 'manual'   # Manual calc
app.display_alerts = False   # Suppress dialogs

# Perform operations...

# Restore
app.screen_updating = True
app.calculation = 'automatic'
app.display_alerts = True
```

## Tips
1. **Disable Screen Updating**: For batch operations
2. **Use Arrays**: Read/write entire ranges, not cell-by-cell
3. **Manual Calculation**: Turn off auto-calc during data loading
4. **Close Connections**: Properly close workbooks when done
5. **Error Handling**: Handle Excel not being installed

## Limitations
- This is an AI assistant, not a replacement for professional expertise
- Always verify important outputs independently
- For high-stakes decisions, consult domain experts