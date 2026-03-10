# PDF Text & Table Extractor

## Goal
Extract text, tables, and metadata from PDFs using pdfplumber

## What You Can Do
- Pdf
- Extraction
- Text
- Tables

## How to Use
1. Provide the PDF file you want to extract from
2. Specify what you need: text, tables, images, or metadata
3. I'll generate pdfplumber code and execute it

**Example prompts:**
- "Extract all tables from this financial report"
- "Get text from pages 5-10 of this document"
- "Find and extract the invoice total from this PDF"
- "Convert this PDF table to CSV/Excel"

## Domain Knowledge
### pdfplumber Fundamentals

```python
import pdfplumber

# Open PDF
with pdfplumber.open('document.pdf') as pdf:
    # Access pages
    first_page = pdf.pages[0]
    
    # Document metadata
    print(pdf.metadata)
    
    # Number of pages
    print(len(pdf.pages))
```

### PDF Structure
```
PDF Document
├── metadata (title, author, creation date)
├── pages[]
│   ├── chars (individual characters with position)
│   ├── words (grouped characters)
│   ├── lines (horizontal/vertical lines)
│   ├── rects (rectangles)
│   ├── curves (bezier curves)
│   └── images (embedded images)
└── outline (bookmarks/TOC)
```

### Text Extraction

#### Basic Text
```python
with pdfplumber.open('document.pdf') as pdf:
    # Single page
    text = pdf.pages[0].extract_text()
    
    # All pages
    full_text = ''
    for page in pdf.pages:
        full_text += page.extract_text() or ''
```

#### Advanced Text Options
```python
# With layout preservation
text = page.extract_text(
    x_tolerance=3,      # Horizontal tolerance for grouping
    y_tolerance=3,      # Vertical tolerance
    layout=True,        # Preserve layout
    x_density=7.25,     # Chars per unit width
    y_density=13        # Chars per unit height
)

# Extract words with positions
words = page.extract_words(
    x_tolerance=3,
    y_tolerance=3,
    keep_blank_chars=False,
    use_text_flow=False
)

# Each word includes: text, x0, top, x1, bottom, etc.
for word in words:
    print(f"{word['text']} at ({word['x0']}, {word['top']})")
```

#### Character-Level Access
```python
# Get all characters
chars = page.chars

for char in chars:
    print(f"'{char['text']}' at ({char['x0']}, {char['top']})")
    print(f"  Font: {char['fontname']}, Size: {char['size']}")
```

### Table Extraction

#### Basic Table Extraction
```python
with pdfplumber.open('report.pdf') as pdf:
    page = pdf.pages[0]
    
    # Extract all tables
    tables = page.extract_tables()
    
    for i, table in enumerate(tables):
        print(f"Table {i+1}:")
        for row in table:
            print(row)
```

#### Advanced Table Settings
```python
# Custom table detection
table_settings = {
    "vertical_strategy": "lines",      # or "text", "explicit"
    "horizontal_strategy": "lines",
    "explicit_vertical_lines": [],     # Custom line positions
    "explicit_horizontal_lines": [],
    "snap_tolerance": 3,
    "snap_x_tolerance": 3,
    "snap_y_tolerance": 3,
    "join_tolerance": 3,
    "edge_min_length": 3,
    "min_words_vertical": 3,
    "min_words_horizontal": 1,
    "intersection_tolerance": 3,
    "text_tolerance": 3,
    "text_x_tolerance": 3,
    "text_y_tolerance": 3,
}

tables = page.extract_tables(table_settings)
```

#### Table Finding
```python
# Find tables (without extracting)
table_finder = page.find_tables()

for table in table_finder:
    print(f"Table at: {table.bbox}")  # (x0, top, x1, bottom)
    
    # Extract specific table
    data = table.extract()
```

### Visual Debugging

```python
# Create visual debug image
im = page.to_image(resolution=150)

# Draw detected objects
im.draw_rects(page.chars)        # Character bounding boxes
im.draw_rects(page.words)        # Word bounding boxes
im.draw_lines(page.lines)        # Lines
im.draw_rects(page.rects)        # Rectangles

# Save debug image
im.save('debug.png')

# Debug tables
im.reset()
im.debug_tablefinder()
im.save('table_debug.png')
```

### Cropping and Filtering

#### Crop to Region
```python
# Define bounding box (x0, top, x1, bottom)
bbox = (0, 0, 300, 200)

# Crop page
cropped = page.crop(bbox)

# Extract from cropped area
text = cropped.extract_text()
tables = cropped.extract_tables()
```

#### Filter by Position
```python
# Filter characters by region
def within_bbox(obj, bbox):
    x0, top, x1, bottom = bbox
    return (obj['x0'] >= x0 and obj['x1'] <= x1 and
            obj['top'] >= top and obj['bottom'] <= bottom)

bbox = (100, 100, 400, 300)
filtered_chars = [c for c in page.chars if within_bbox(c, bbox)]
```

#### Filter by Font
```python
# Get text by font
def extract_by_font(page, font_name):
    chars = [c for c in page.chars if font_name in c['fontname']]
    return ''.join(c['text'] for c in chars)

# Extract bold text (often "Bold" in font name)
bold_text = extract_by_font(page, 'Bold')

# Extract by size
large_chars = [c for c in page.chars if c['size'] > 14]
```

### Metadata and Structure

```python
with pdfplumber.open('document.pdf') as pdf:
    # Document metadata
    meta = pdf.metadata
    print(f"Title: {meta.get('Title')}")
    print(f"Author: {meta.get('Author')}")
    print(f"Created: {meta.get('CreationDate')}")
    
    # Page info
    for i, page in enumerate(pdf.pages):
        print(f"Page {i+1}: {page.width} x {page.height}")
        print(f"  Rotation: {page.rotation}")
```

## Tips
1. **Debug Visually**: Use `to_image()` to understand PDF structure
2. **Tune Table Settings**: Adjust tolerances for your specific PDF
3. **Handle Scanned PDFs**: Use OCR first (this workflow is for native text)
4. **Process Page by Page**: For large PDFs, avoid loading all at once
5. **Check for Text**: Some PDFs are images - verify text exists

## Limitations
- This is an AI assistant, not a replacement for professional expertise
- Always verify important outputs independently
- For high-stakes decisions, consult domain experts