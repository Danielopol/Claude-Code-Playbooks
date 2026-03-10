# Document Layout Analyzer

## Goal
>

## What You Can Do
- Layout
- Analysis
- Structure
- Surya

## How to Use
1. Provide the document image or PDF
2. Specify what layout elements to detect
3. I'll analyze the structure and return detected regions

**Example prompts:**
- "Analyze the layout of this document page"
- "Detect all tables and text blocks in this image"
- "Determine the reading order for this PDF page"
- "Find headings and paragraphs in this document"

## Domain Knowledge
### surya Fundamentals

```python
from surya.detection import DetectionPredictor
from surya.layout import LayoutPredictor
from surya.reading_order import ReadingOrderPredictor
from PIL import Image

# Load image
image = Image.open("document.png")

# Detect layout elements
layout_predictor = LayoutPredictor()
layout_result = layout_predictor([image])
```

### Layout Element Types

| Element | Description |
|---------|-------------|
| Text | Regular paragraph text |
| Title | Document/section titles |
| Section-header | Section headings |
| List-item | Bulleted/numbered items |
| Table | Tabular data |
| Figure | Images/diagrams |
| Caption | Figure/table captions |
| Footnote | Footnotes |
| Formula | Mathematical equations |
| Page-header | Headers |
| Page-footer | Footers |

### Text Detection

```python
from surya.detection import DetectionPredictor
from PIL import Image

# Initialize detector
detector = DetectionPredictor()

# Load image
image = Image.open("document.png")

# Detect text regions
results = detector([image])

# Access results
for page_result in results:
    for bbox in page_result.bboxes:
        print(f"Text region: {bbox.bbox}")
        print(f"Confidence: {bbox.confidence}")
```

### Layout Analysis

```python
from surya.layout import LayoutPredictor
from PIL import Image

# Initialize layout predictor
layout_predictor = LayoutPredictor()

# Analyze layout
image = Image.open("document.png")
layout_results = layout_predictor([image])

# Process results
for page_result in layout_results:
    for element in page_result.bboxes:
        print(f"Type: {element.label}")
        print(f"Bbox: {element.bbox}")
        print(f"Confidence: {element.confidence}")
```

### Reading Order Detection

```python
from surya.reading_order import ReadingOrderPredictor
from surya.layout import LayoutPredictor
from PIL import Image

# Get layout first
layout_predictor = LayoutPredictor()
image = Image.open("document.png")
layout_results = layout_predictor([image])

# Determine reading order
reading_order_predictor = ReadingOrderPredictor()
order_results = reading_order_predictor([image], layout_results)

# Access ordered elements
for page_result in order_results:
    for i, element in enumerate(page_result.ordered_bboxes):
        print(f"{i+1}. {element.label}: {element.bbox}")
```

### OCR with Layout

```python
from surya.ocr import OCRPredictor
from surya.layout import LayoutPredictor
from PIL import Image

# Initialize predictors
ocr_predictor = OCRPredictor()
layout_predictor = LayoutPredictor()

# Load image
image = Image.open("document.png")

# Get layout
layout_results = layout_predictor([image])

# Run OCR
ocr_results = ocr_predictor([image])

# Combine results
for layout, ocr in zip(layout_results, ocr_results):
    for layout_elem in layout.bboxes:
        print(f"Element: {layout_elem.label}")
        
        # Find OCR text within this layout element
        for text_line in ocr.text_lines:
            if boxes_overlap(layout_elem.bbox, text_line.bbox):
                print(f"  Text: {text_line.text}")
```

### Processing PDFs

```python
from surya.layout import LayoutPredictor
from pdf2image import convert_from_path

def analyze_pdf_layout(pdf_path):
    """Analyze layout of all pages in PDF."""
    
    # Convert PDF to images
    images = convert_from_path(pdf_path)
    
    # Initialize predictor
    layout_predictor = LayoutPredictor()
    
    # Analyze all pages
    results = layout_predictor(images)
    
    document_structure = []
    
    for page_num, page_result in enumerate(results):
        page_elements = []
        
        for element in page_result.bboxes:
            page_elements.append({
                'type': element.label,
                'bbox': element.bbox,
                'confidence': element.confidence
            })
        
        document_structure.append({
            'page': page_num + 1,
            'elements': page_elements
        })
    
    return document_structure

structure = analyze_pdf_layout("document.pdf")
```

### Visualization

```python
from surya.layout import LayoutPredictor
from PIL import Image, ImageDraw, ImageFont

def visualize_layout(image_path, output_path):
    """Visualize detected layout elements."""
    
    image = Image.open(image_path)
    layout_predictor = LayoutPredictor()
    results = layout_predictor([image])
    
    # Create drawing context
    draw = ImageDraw.Draw(image)
    
    # Color mapping for element types
    colors = {
        'Text': 'blue',
        'Title': 'red',
        'Table': 'green',
        'Figure': 'purple',
        'Section-header': 'orange',
        'List-item': 'cyan',
    }
    
    for element in results[0].bboxes:
        bbox = element.bbox
        color = colors.get(element.label, 'gray')
        
        # Draw rectangle
        draw.rectangle(bbox, outline=color, width=2)
        
        # Add label
        draw.text((bbox[0], bbox[1] - 15), 
                  f"{element.label} ({element.confidence:.2f})",
                  fill=color)
    
    image.save(output_path)
    return output_path
```

## Tips
1. **Use High-Quality Images**: 150+ DPI for best results
2. **Preprocess if Needed**: Deskew rotated documents
3. **Validate Results**: Check confidence scores
4. **Handle Multi-page**: Process pages individually
5. **Combine with OCR**: Get text within detected regions

## Limitations
- This is an AI assistant, not a replacement for professional expertise
- Always verify important outputs independently
- For high-stakes decisions, consult domain experts