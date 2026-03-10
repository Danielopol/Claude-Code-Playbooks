# Office Document to Markdown Converter

## Goal
>

## What You Can Do
- Office
- Markdown
- Conversion
- Markitdown

## How to Use
1. Provide the Office file (Word, Excel, PowerPoint, PDF, etc.)
2. Optionally specify conversion options
3. I'll convert it to clean Markdown

**Example prompts:**
- "Convert this Word document to Markdown"
- "Turn this PowerPoint into Markdown notes"
- "Extract content from this PDF as Markdown"
- "Convert this Excel file to Markdown tables"

## Domain Knowledge
### markitdown Fundamentals

```python
from markitdown import MarkItDown

# Initialize converter
md = MarkItDown()

# Convert file
result = md.convert("document.docx")
print(result.text_content)

# Save to file
with open("output.md", "w") as f:
    f.write(result.text_content)
```

### Supported Formats

| Format | Extension | Notes |
|--------|-----------|-------|
| Word | .docx | Full text, tables, basic formatting |
| Excel | .xlsx | Converts to Markdown tables |
| PowerPoint | .pptx | Slides as sections |
| PDF | .pdf | Text extraction |
| HTML | .html | Clean markdown |
| Images | .jpg, .png | OCR with vision model |
| Audio | .mp3, .wav | Transcription |
| ZIP | .zip | Processes contained files |

### Basic Usage

#### Python API
```python
from markitdown import MarkItDown

# Simple conversion
md = MarkItDown()
result = md.convert("document.docx")

# Access content
markdown_text = result.text_content

# With options
md = MarkItDown(
    llm_client=None,      # Optional LLM for enhanced processing
    llm_model=None        # Model name if using LLM
)
```

#### Command Line
```bash
# Install
pip install markitdown

# Convert file
markitdown document.docx > output.md

# Or with output file
markitdown document.docx -o output.md
```

### Word Document Conversion

```python
from markitdown import MarkItDown

md = MarkItDown()

# Convert Word document
result = md.convert("report.docx")

# Output preserves:
# - Headings (as # headers)
# - Bold/italic formatting
# - Lists (bulleted and numbered)
# - Tables (as markdown tables)
# - Hyperlinks

print(result.text_content)
```

**Example Output:**
```markdown
# Annual Report 2024

## Tips
1. **Check Output Quality**: Review converted Markdown for accuracy
2. **Handle Tables**: Complex tables may need manual adjustment
3. **Preserve Structure**: Use consistent heading levels in source docs
4. **Image Handling**: Consider using vision models for important images
5. **Version Control**: Store converted Markdown in Git for tracking

## Limitations
- This is an AI assistant, not a replacement for professional expertise
- Always verify important outputs independently
- For high-stakes decisions, consult domain experts