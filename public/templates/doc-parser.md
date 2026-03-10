# Document Parser

## Goal
>

## What You Can Do
- Parsing
- Extraction
- Layout
- Docling

## How to Use
1. Provide the document to parse
2. Specify what you want to extract (text, tables, figures, etc.)
3. I'll parse it and return structured data

**Example prompts:**
- "Parse this PDF and extract all tables"
- "Convert this academic paper to structured markdown"
- "Extract figures and captions from this document"
- "Parse this report preserving the document structure"

## Domain Knowledge
### docling Fundamentals

```python
from docling.document_converter import DocumentConverter

# Initialize converter
converter = DocumentConverter()

# Convert document
result = converter.convert("document.pdf")

# Access parsed content
doc = result.document
print(doc.export_to_markdown())
```

### Supported Formats

| Format | Extension | Notes |
|--------|-----------|-------|
| PDF | .pdf | Native and scanned |
| Word | .docx | Full structure preserved |
| PowerPoint | .pptx | Slides as sections |
| Images | .png, .jpg | OCR + layout analysis |
| HTML | .html | Structure preserved |

### Basic Usage

```python
from docling.document_converter import DocumentConverter

# Create converter
converter = DocumentConverter()

# Convert single document
result = converter.convert("report.pdf")

# Access document
doc = result.document

# Export options
markdown = doc.export_to_markdown()
text = doc.export_to_text()
json_doc = doc.export_to_dict()
```

### Advanced Configuration

```python
from docling.document_converter import DocumentConverter
from docling.datamodel.base_models import InputFormat
from docling.datamodel.pipeline_options import PdfPipelineOptions

# Configure pipeline
pipeline_options = PdfPipelineOptions()
pipeline_options.do_ocr = True
pipeline_options.do_table_structure = True
pipeline_options.table_structure_options.do_cell_matching = True

# Create converter with options
converter = DocumentConverter(
    allowed_formats=[InputFormat.PDF, InputFormat.DOCX],
    pdf_backend_options=pipeline_options
)

result = converter.convert("document.pdf")
```

### Document Structure

```python
# Document hierarchy
doc = result.document

# Access metadata
print(doc.name)
print(doc.origin)

# Iterate through content
for element in doc.iterate_items():
    print(f"Type: {element.type}")
    print(f"Text: {element.text}")
    
    if element.type == "table":
        print(f"Rows: {len(element.data.table_cells)}")
```

### Extracting Tables

```python
from docling.document_converter import DocumentConverter
import pandas as pd

def extract_tables(doc_path):
    """Extract all tables from document."""
    converter = DocumentConverter()
    result = converter.convert(doc_path)
    doc = result.document
    
    tables = []
    
    for element in doc.iterate_items():
        if element.type == "table":
            # Get table data
            table_data = element.export_to_dataframe()
            tables.append({
                'page': element.prov[0].page_no if element.prov else None,
                'dataframe': table_data
            })
    
    return tables

# Usage
tables = extract_tables("report.pdf")
for i, table in enumerate(tables):
    print(f"Table {i+1} on page {table['page']}:")
    print(table['dataframe'])
```

### Extracting Figures

```python
def extract_figures(doc_path, output_dir):
    """Extract figures with captions."""
    import os
    
    converter = DocumentConverter()
    result = converter.convert(doc_path)
    doc = result.document
    
    figures = []
    os.makedirs(output_dir, exist_ok=True)
    
    for element in doc.iterate_items():
        if element.type == "picture":
            figure_info = {
                'caption': element.caption if hasattr(element, 'caption') else None,
                'page': element.prov[0].page_no if element.prov else None,
            }
            
            # Save image if available
            if hasattr(element, 'image'):
                img_path = os.path.join(output_dir, f"figure_{len(figures)+1}.png")
                element.image.save(img_path)
                figure_info['path'] = img_path
            
            figures.append(figure_info)
    
    return figures
```

### Handling Multi-column Layouts

```python
from docling.document_converter import DocumentConverter

def parse_multicolumn(doc_path):
    """Parse document with multi-column layout."""
    
    converter = DocumentConverter()
    result = converter.convert(doc_path)
    doc = result.document
    
    # docling automatically handles column detection
    # Text is returned in reading order
    
    structured_content = []
    
    for element in doc.iterate_items():
        content_item = {
            'type': element.type,
            'text': element.text if hasattr(element, 'text') else None,
            'level': element.level if hasattr(element, 'level') else None,
        }
        
        # Add bounding box if available
        if element.prov:
            content_item['bbox'] = element.prov[0].bbox
            content_item['page'] = element.prov[0].page_no
        
        structured_content.append(content_item)
    
    return structured_content
```

### Export Formats

```python
from docling.document_converter import DocumentConverter

converter = DocumentConverter()
result = converter.convert("document.pdf")
doc = result.document

# Markdown export
markdown = doc.export_to_markdown()
with open("output.md", "w") as f:
    f.write(markdown)

# Plain text
text = doc.export_to_text()

# JSON/dict format
json_doc = doc.export_to_dict()

# HTML format (if supported)
# html = doc.export_to_html()
```

### Batch Processing

```python
from docling.document_converter import DocumentConverter
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor

def batch_parse(input_dir, output_dir, max_workers=4):
    """Parse multiple documents in parallel."""
    
    input_path = Path(input_dir)
    output_path = Path(output_dir)
    output_path.mkdir(exist_ok=True)
    
    converter = DocumentConverter()
    
    def process_single(doc_path):
        try:
            result = converter.convert(str(doc_path))
            md = result.document.export_to_markdown()
            
            out_file = output_path / f"{doc_path.stem}.md"
            with open(out_file, 'w') as f:
                f.write(md)
            
            return {'file': str(doc_path), 'status': 'success'}
        except Exception as e:
            return {'file': str(doc_path), 'status': 'error', 'error': str(e)}
    
    docs = list(input_path.glob('*.pdf')) + list(input_path.glob('*.docx'))
    
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        results = list(executor.map(process_single, docs))
    
    return results
```

## Tips
1. **Use Appropriate Pipeline**: Configure for your document type
2. **Handle Large Documents**: Process in chunks if needed
3. **Verify Table Extraction**: Complex tables may need review
4. **Check OCR Quality**: Enable OCR for scanned documents
5. **Cache Results**: Store parsed documents for reuse

## Limitations
- This is an AI assistant, not a replacement for professional expertise
- Always verify important outputs independently
- For high-stakes decisions, consult domain experts