# Markdown to Office Document Converter

## Goal
>

## What You Can Do
- Markdown
- Conversion
- Office
- Pandoc

## How to Use
1. Provide the Markdown content or file
2. Specify the target format (docx, pptx, pdf, etc.)
3. Optionally provide a reference template for styling
4. I'll convert using Pandoc with optimal settings

**Example prompts:**
- "Convert this README.md to a professional Word document"
- "Turn my markdown notes into a PowerPoint presentation"
- "Generate a PDF from this markdown with custom styling"
- "Create a Word doc from this markdown using company template"

## Domain Knowledge
### Pandoc Fundamentals

```bash
# Basic conversion
pandoc input.md -o output.docx
pandoc input.md -o output.pdf
pandoc input.md -o output.pptx

# With template
pandoc input.md --reference-doc=template.docx -o output.docx

# Multiple inputs
pandoc ch1.md ch2.md ch3.md -o book.docx
```

### Supported Conversions

| From | To | Command |
|------|-----|---------|
| Markdown | Word | `pandoc in.md -o out.docx` |
| Markdown | PDF | `pandoc in.md -o out.pdf` |
| Markdown | PowerPoint | `pandoc in.md -o out.pptx` |
| Markdown | HTML | `pandoc in.md -o out.html` |
| Markdown | LaTeX | `pandoc in.md -o out.tex` |
| Markdown | EPUB | `pandoc in.md -o out.epub` |

### Markdown to Word (.docx)

#### Basic Conversion
```bash
pandoc document.md -o document.docx
```

#### With Template (Reference Doc)
```bash
# First create a template by converting sample
pandoc sample.md -o reference.docx

# Edit reference.docx styles in Word, then use it
pandoc input.md --reference-doc=reference.docx -o output.docx
```

#### With Table of Contents
```bash
pandoc document.md --toc --toc-depth=3 -o document.docx
```

#### With Metadata
```bash
pandoc document.md \
  --metadata title="My Report" \
  --metadata author="John Doe" \
  --metadata date="2024-01-15" \
  -o document.docx
```

### Markdown to PDF

#### Via LaTeX (Best Quality)
```bash
# Requires LaTeX installation
pandoc document.md -o document.pdf

# With custom settings
pandoc document.md \
  --pdf-engine=xelatex \
  -V geometry:margin=1in \
  -V fontsize=12pt \
  -o document.pdf
```

#### Via HTML/wkhtmltopdf
```bash
pandoc document.md \
  --pdf-engine=wkhtmltopdf \
  --css=style.css \
  -o document.pdf
```

#### PDF Options
```bash
pandoc document.md \
  -V papersize:a4 \
  -V geometry:margin=2cm \
  -V fontfamily:libertinus \
  -V colorlinks:true \
  --toc \
  -o document.pdf
```

### Markdown to PowerPoint (.pptx)

#### Basic Conversion
```bash
pandoc slides.md -o presentation.pptx
```

#### Markdown Structure for Slides
```markdown

## Tips
1. **Use Templates**: Create a reference document for consistent branding
2. **Structure Headers**: Use consistent heading levels (## for slides, # for sections)
3. **Test Incrementally**: Convert small sections first to verify formatting
4. **Include Metadata**: Use YAML frontmatter for document properties
5. **Handle Images**: Use relative paths and specify dimensions

## Limitations
- This is an AI assistant, not a replacement for professional expertise
- Always verify important outputs independently
- For high-stakes decisions, consult domain experts