# Smart OCR Document Scanner

## Goal
>

## What You Can Do
- Ocr
- Extraction
- Multilingual
- Paddleocr

## How to Use
1. Provide the image or scanned document
2. Optionally specify language(s) to detect
3. I'll extract text with position and confidence data

**Example prompts:**
- "Extract all text from this screenshot"
- "OCR this scanned PDF document"
- "Read the text from this business card photo"
- "Extract Chinese and English text from this image"

## Domain Knowledge
### PaddleOCR Fundamentals

```python
from paddleocr import PaddleOCR

# Initialize OCR engine
ocr = PaddleOCR(use_angle_cls=True, lang='en')

# Run OCR on image
result = ocr.ocr('image.png', cls=True)

# Result structure: [[box, (text, confidence)], ...]
for line in result[0]:
    box = line[0]      # [[x1,y1], [x2,y2], [x3,y3], [x4,y4]]
    text = line[1][0]  # Extracted text
    conf = line[1][1]  # Confidence score
    print(f"{text} ({conf:.2f})")
```

### Supported Languages

```python
# Common language codes
languages = {
    'en': 'English',
    'ch': 'Chinese (Simplified)',
    'cht': 'Chinese (Traditional)',
    'japan': 'Japanese',
    'korean': 'Korean',
    'french': 'French',
    'german': 'German',
    'spanish': 'Spanish',
    'russian': 'Russian',
    'arabic': 'Arabic',
    'hindi': 'Hindi',
    'vi': 'Vietnamese',
    'th': 'Thai',
    # ... 100+ languages supported
}

# Use specific language
ocr = PaddleOCR(lang='ch')  # Chinese
ocr = PaddleOCR(lang='japan')  # Japanese
ocr = PaddleOCR(lang='multilingual')  # Auto-detect
```

### Configuration Options

```python
from paddleocr import PaddleOCR

ocr = PaddleOCR(
    # Detection settings
    det_model_dir=None,         # Custom detection model
    det_limit_side_len=960,     # Max side length for detection
    det_db_thresh=0.3,          # Binarization threshold
    det_db_box_thresh=0.5,      # Box score threshold
    
    # Recognition settings
    rec_model_dir=None,         # Custom recognition model
    rec_char_dict_path=None,    # Custom character dictionary
    
    # Angle classification
    use_angle_cls=True,         # Enable angle classification
    cls_model_dir=None,         # Custom classification model
    
    # Language
    lang='en',                  # Language code
    
    # Performance
    use_gpu=True,               # Use GPU if available
    gpu_mem=500,                # GPU memory limit (MB)
    enable_mkldnn=True,         # CPU optimization
    
    # Output
    show_log=False,             # Suppress logs
)
```

### Processing Different Sources

#### Image Files
```python
# Single image
result = ocr.ocr('image.png')

# Multiple images
images = ['img1.png', 'img2.png', 'img3.png']
for img in images:
    result = ocr.ocr(img)
    process_result(result)
```

#### PDF Files (Scanned)
```python
from pdf2image import convert_from_path

def ocr_pdf(pdf_path):
    """OCR a scanned PDF."""
    # Convert PDF pages to images
    images = convert_from_path(pdf_path)
    
    all_text = []
    for i, img in enumerate(images):
        # Save temp image
        temp_path = f'temp_page_{i}.png'
        img.save(temp_path)
        
        # OCR the image
        result = ocr.ocr(temp_path)
        
        # Extract text
        page_text = '\n'.join([line[1][0] for line in result[0]])
        all_text.append(f"--- Page {i+1} ---\n{page_text}")
        
        os.remove(temp_path)
    
    return '\n\n'.join(all_text)
```

#### URLs and Bytes
```python
import requests
from io import BytesIO

# From URL
response = requests.get('https://example.com/image.png')
result = ocr.ocr(BytesIO(response.content))

# From bytes
with open('image.png', 'rb') as f:
    img_bytes = f.read()
result = ocr.ocr(BytesIO(img_bytes))
```

### Result Processing

```python
def process_ocr_result(result):
    """Process OCR result into structured data."""
    
    lines = []
    for line in result[0]:
        box = line[0]
        text = line[1][0]
        confidence = line[1][1]
        
        # Calculate bounding box
        x_coords = [p[0] for p in box]
        y_coords = [p[1] for p in box]
        
        lines.append({
            'text': text,
            'confidence': confidence,
            'bbox': {
                'left': min(x_coords),
                'top': min(y_coords),
                'right': max(x_coords),
                'bottom': max(y_coords),
            },
            'raw_box': box
        })
    
    return lines

# Sort by position (top to bottom, left to right)
def sort_by_position(lines):
    return sorted(lines, key=lambda x: (x['bbox']['top'], x['bbox']['left']))
```

### Text Layout Reconstruction

```python
def reconstruct_layout(result, line_threshold=10):
    """Reconstruct text layout from OCR results."""
    
    lines = process_ocr_result(result)
    lines = sort_by_position(lines)
    
    # Group into logical lines
    text_lines = []
    current_line = []
    current_y = None
    
    for line in lines:
        y = line['bbox']['top']
        
        if current_y is None or abs(y - current_y) < line_threshold:
            current_line.append(line)
            current_y = y
        else:
            # New line
            text_lines.append(' '.join([l['text'] for l in current_line]))
            current_line = [line]
            current_y = y
    
    # Add last line
    if current_line:
        text_lines.append(' '.join([l['text'] for l in current_line]))
    
    return '\n'.join(text_lines)
```

## Tips
1. **Preprocess Images**: Improve quality before OCR
2. **Choose Correct Language**: Specify language for better accuracy
3. **Handle Multi-column**: Process columns separately
4. **Filter Low Confidence**: Skip results below threshold
5. **Batch Processing**: Process multiple images efficiently

## Limitations
- This is an AI assistant, not a replacement for professional expertise
- Always verify important outputs independently
- For high-stakes decisions, consult domain experts