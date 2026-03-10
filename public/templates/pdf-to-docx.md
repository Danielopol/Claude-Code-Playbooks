# PDF to Word Converter

## Goal
Convert PDF files to editable Word documents using pdf2docx

## What You Can Do
- Pdf
- Docx
- Conversion

## How to Use
1. Provide the PDF file you want to convert
2. Optionally specify pages or conversion options
3. I'll convert it to an editable Word document

**Example prompts:**
- "Convert this PDF report to an editable Word document"
- "Turn pages 1-5 of this PDF into Word format"
- "Extract this scanned document as editable text"
- "Convert this PDF contract to Word for editing"

## Domain Knowledge
### pdf2docx Fundamentals

```python
from pdf2docx import Converter

# Basic conversion
cv = Converter('input.pdf')
cv.convert('output.docx')
cv.close()

# Or using context manager
with Converter('input.pdf') as cv:
    cv.convert('output.docx')
```

### Conversion Options

```python
from pdf2docx import Converter

cv = Converter('input.pdf')

# Full document
cv.convert('output.docx')

# Specific pages (0-indexed)
cv.convert('output.docx', start=0, end=5)

# Single page
cv.convert('output.docx', pages=[0])

# Multiple specific pages
cv.convert('output.docx', pages=[0, 2, 4])

cv.close()
```

### Advanced Options

```python
from pdf2docx import Converter

cv = Converter('input.pdf')

cv.convert(
    'output.docx',
    start=0,                    # Start page (0-indexed)
    end=None,                   # End page (None = last page)
    pages=None,                 # Specific pages list
    password=None,              # PDF password if encrypted
    min_section_height=20.0,    # Minimum height for section
    connected_border_tolerance=0.5,  # Border detection tolerance
    line_overlap_threshold=0.9, # Line merging threshold
    line_break_width_ratio=0.5, # Line break detection
    line_break_free_space_ratio=0.1,
    line_separate_threshold=5,  # Vertical line separation
    new_paragraph_free_space_ratio=0.85,
    float_image_ignorable_gap=5,
    page_margin_factor_top=0.5,
    page_margin_factor_bottom=0.5,
)

cv.close()
```

### Handling Different PDF Types

#### Native PDFs (Text-based)
```python
# Works best with native PDFs
cv = Converter('native_pdf.pdf')
cv.convert('output.docx')
cv.close()
```

#### Scanned PDFs (Image-based)
```python
# For scanned PDFs, use OCR first
# pdf2docx works best with native text PDFs
# Consider using pytesseract or PaddleOCR first

import pytesseract
from pdf2image import convert_from_path

# Convert PDF pages to images
images = convert_from_path('scanned.pdf')

# OCR each page
text = ''
for img in images:
    text += pytesseract.image_to_string(img)

# Then create Word document from text
```

### Python Integration

```python
from pdf2docx import Converter
import os

def pdf_to_word(pdf_path, output_path=None, pages=None):
    """Convert PDF to Word document."""
    if output_path is None:
        output_path = pdf_path.replace('.pdf', '.docx')
    
    cv = Converter(pdf_path)
    
    if pages:
        cv.convert(output_path, pages=pages)
    else:
        cv.convert(output_path)
    
    cv.close()
    
    return output_path

# Usage
result = pdf_to_word('document.pdf')
print(f"Created: {result}")
```

### Batch Conversion

```python
from pdf2docx import Converter
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor

def convert_single(pdf_path, output_dir):
    """Convert single PDF to Word."""
    output_path = output_dir / pdf_path.with_suffix('.docx').name
    
    try:
        cv = Converter(str(pdf_path))
        cv.convert(str(output_path))
        cv.close()
        return f"Success: {pdf_path.name}"
    except Exception as e:
        return f"Error: {pdf_path.name} - {e}"

def batch_convert(input_dir, output_dir, max_workers=4):
    """Convert all PDFs in directory."""
    input_path = Path(input_dir)
    output_path = Path(output_dir)
    output_path.mkdir(exist_ok=True)
    
    pdf_files = list(input_path.glob('*.pdf'))
    
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = [
            executor.submit(convert_single, pdf, output_path)
            for pdf in pdf_files
        ]
        
        for future in futures:
            print(future.result())

batch_convert('./pdfs', './word_docs')
```

### Parsing PDF Structure

```python
from pdf2docx import Converter

def analyze_pdf(pdf_path):
    """Analyze PDF structure before conversion."""
    cv = Converter(pdf_path)
    
    for i, page in enumerate(cv.pages):
        print(f"Page {i+1}:")
        print(f"  Size: {page.width} x {page.height}")
        print(f"  Blocks: {len(page.blocks)}")
        
        for block in page.blocks:
            if hasattr(block, 'text'):
                print(f"    Text block: {block.text[:50]}...")
            elif hasattr(block, 'image'):
                print(f"    Image block")
    
    cv.close()

analyze_pdf('document.pdf')
```

## Tips
1. **Check PDF Type**: Native PDFs convert better than scanned
2. **Preview First**: Test with a few pages before full conversion
3. **Handle Tables**: Complex tables may need manual adjustment
4. **Image Quality**: Images are extracted at original resolution
5. **Font Handling**: Some fonts may substitute to system defaults

## Limitations
- This is an AI assistant, not a replacement for professional expertise
- Always verify important outputs independently
- For high-stakes decisions, consult domain experts