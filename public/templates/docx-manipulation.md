# Word Document Manipulation

## Goal
Create, edit, and manipulate Word documents programmatically using python-docx

## What You Can Do
- Docx
- Word
- Manipulation
- Editing

## How to Use
1. Describe what you want to create or modify in a Word document
2. Provide any source content (text, data, images)
3. I'll generate python-docx code and execute it

**Example prompts:**
- "Create a professional report with title, headings, and a table"
- "Add a header and footer to this document"
- "Generate a contract document with placeholders"
- "Convert this markdown content to a styled Word document"

## Domain Knowledge
### python-docx Fundamentals

```python
from docx import Document
from docx.shared import Inches, Pt, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.style import WD_STYLE_TYPE

# Create new document
doc = Document()

# Or open existing
doc = Document('existing.docx')
```

### Document Structure
```
Document
├── sections (margins, orientation, size)
├── paragraphs (text with formatting)
├── tables (rows, cells, merged cells)
├── pictures (inline images)
└── styles (predefined formatting)
```

### Adding Content

#### Paragraphs & Headings
```python
# Add heading (level 0-9)
doc.add_heading('Main Title', level=0)
doc.add_heading('Section Title', level=1)

# Add paragraph
para = doc.add_paragraph('Normal text here')

# Add styled paragraph
doc.add_paragraph('Note: Important!', style='Intense Quote')

# Add with inline formatting
para = doc.add_paragraph()
para.add_run('Bold text').bold = True
para.add_run(' and ')
para.add_run('italic text').italic = True
```

#### Tables
```python
# Create table
table = doc.add_table(rows=3, cols=3)
table.style = 'Table Grid'

# Add content
table.cell(0, 0).text = 'Header 1'
table.rows[0].cells[1].text = 'Header 2'

# Add row dynamically
row = table.add_row()
row.cells[0].text = 'New data'

# Merge cells
a = table.cell(0, 0)
b = table.cell(0, 2)
a.merge(b)
```

#### Images
```python
# Add image with size
doc.add_picture('image.png', width=Inches(4))

# Add to specific paragraph
para = doc.add_paragraph()
run = para.add_run()
run.add_picture('logo.png', width=Inches(1.5))
```

### Formatting

#### Paragraph Formatting
```python
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Pt, Inches

para = doc.add_paragraph('Formatted text')
para.alignment = WD_ALIGN_PARAGRAPH.CENTER
para.paragraph_format.line_spacing = 1.5
para.paragraph_format.space_after = Pt(12)
para.paragraph_format.first_line_indent = Inches(0.5)
```

#### Character Formatting
```python
run = para.add_run('Styled text')
run.bold = True
run.italic = True
run.underline = True
run.font.name = 'Arial'
run.font.size = Pt(14)
run.font.color.rgb = RGBColor(0x00, 0x00, 0xFF)  # Blue
```

#### Page Setup
```python
from docx.enum.section import WD_ORIENT
from docx.shared import Inches

section = doc.sections[0]
section.page_width = Inches(11)
section.page_height = Inches(8.5)
section.orientation = WD_ORIENT.LANDSCAPE
section.left_margin = Inches(1)
section.right_margin = Inches(1)
```

### Headers & Footers
```python
section = doc.sections[0]

# Header
header = section.header
header.paragraphs[0].text = "Company Name"
header.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER

# Footer with page numbers
footer = section.footer
para = footer.paragraphs[0]
para.text = "Page "
# Add page number field
run = para.add_run()
fldChar1 = OxmlElement('w:fldChar')
fldChar1.set(qn('w:fldCharType'), 'begin')
run._r.append(fldChar1)
# ... (field code for page number)
```

### Styles
```python
# Use built-in styles
doc.add_paragraph('Heading', style='Heading 1')
doc.add_paragraph('Quote', style='Quote')
doc.add_paragraph('List item', style='List Bullet')

# Common styles:
# - 'Normal', 'Heading 1-9', 'Title', 'Subtitle'
# - 'Quote', 'Intense Quote', 'List Bullet', 'List Number'
# - 'Table Grid', 'Light Shading', 'Medium Grid 1'
```

## Tips
1. **Structure First**: Plan document hierarchy before coding
2. **Use Styles**: Consistent formatting via styles, not manual formatting
3. **Save Often**: Call `doc.save()` periodically for large documents
4. **Handle Errors**: Check file existence before opening
5. **Clean Up**: Remove template placeholders after filling

## Limitations
- This is an AI assistant, not a replacement for professional expertise
- Always verify important outputs independently
- For high-stakes decisions, consult domain experts