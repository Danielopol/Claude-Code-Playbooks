# Batch File Converter

## Goal
Batch convert documents between multiple formats using a unified pipeline

## What You Can Do
- Batch
- Conversion
- Bulk
- Automation

## How to Use
1. Specify the source folder or files
2. Choose target format(s)
3. Optionally configure conversion options
4. I'll process all files with progress tracking

**Example prompts:**
- "Convert all PDFs in this folder to Word documents"
- "Batch convert these markdown files to PDF and HTML"
- "Process all Office files and convert to Markdown"
- "Convert this folder of images to a single PDF"

## Domain Knowledge
### Supported Format Matrix

| From | To: DOCX | To: PDF | To: MD | To: HTML | To: PPTX |
|------|----------|---------|--------|----------|----------|
| DOCX | - | ✅ | ✅ | ✅ | - |
| PDF | ✅ | - | ✅ | ✅ | - |
| MD | ✅ | ✅ | - | ✅ | ✅ |
| HTML | ✅ | ✅ | ✅ | - | - |
| XLSX | - | ✅ | ✅ | ✅ | - |
| PPTX | - | ✅ | ✅ | ✅ | - |

### Core Pipeline

```python
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed
import subprocess
import os

class DocumentConverter:
    """Unified document conversion pipeline."""
    
    def __init__(self, max_workers=4):
        self.max_workers = max_workers
        self.converters = {
            ('md', 'docx'): self._md_to_docx,
            ('md', 'pdf'): self._md_to_pdf,
            ('md', 'html'): self._md_to_html,
            ('md', 'pptx'): self._md_to_pptx,
            ('docx', 'pdf'): self._docx_to_pdf,
            ('docx', 'md'): self._docx_to_md,
            ('pdf', 'docx'): self._pdf_to_docx,
            ('pdf', 'md'): self._pdf_to_md,
            ('xlsx', 'pdf'): self._xlsx_to_pdf,
            ('xlsx', 'md'): self._xlsx_to_md,
            ('pptx', 'pdf'): self._pptx_to_pdf,
            ('pptx', 'md'): self._pptx_to_md,
            ('html', 'md'): self._html_to_md,
            ('html', 'pdf'): self._html_to_pdf,
        }
    
    def convert(self, input_path, output_format, output_dir=None):
        """Convert single file to target format."""
        input_path = Path(input_path)
        input_format = input_path.suffix[1:].lower()
        
        if output_dir:
            output_path = Path(output_dir) / f"{input_path.stem}.{output_format}"
        else:
            output_path = input_path.with_suffix(f".{output_format}")
        
        converter_key = (input_format, output_format)
        if converter_key not in self.converters:
            raise ValueError(f"Conversion not supported: {input_format} -> {output_format}")
        
        converter = self.converters[converter_key]
        return converter(input_path, output_path)
    
    def batch_convert(self, input_dir, output_format, output_dir=None, 
                      file_pattern="*", recursive=False):
        """Batch convert all matching files."""
        input_path = Path(input_dir)
        output_path = Path(output_dir) if output_dir else input_path / "converted"
        output_path.mkdir(exist_ok=True)
        
        # Find files
        if recursive:
            files = list(input_path.rglob(file_pattern))
        else:
            files = list(input_path.glob(file_pattern))
        
        # Filter to supported formats
        supported_ext = ['.md', '.docx', '.pdf', '.xlsx', '.pptx', '.html']
        files = [f for f in files if f.suffix.lower() in supported_ext]
        
        results = []
        
        with ThreadPoolExecutor(max_workers=self.max_workers) as executor:
            future_to_file = {
                executor.submit(self.convert, f, output_format, output_path): f
                for f in files
            }
            
            for future in as_completed(future_to_file):
                file = future_to_file[future]
                try:
                    result = future.result()
                    results.append({'file': str(file), 'status': 'success', 'output': str(result)})
                except Exception as e:
                    results.append({'file': str(file), 'status': 'error', 'error': str(e)})
        
        return results
```

### Converter Implementations

```python
# Markdown conversions (using Pandoc)
def _md_to_docx(self, input_path, output_path):
    subprocess.run(['pandoc', str(input_path), '-o', str(output_path)], check=True)
    return output_path

def _md_to_pdf(self, input_path, output_path):
    subprocess.run(['pandoc', str(input_path), '-o', str(output_path)], check=True)
    return output_path

def _md_to_html(self, input_path, output_path):
    subprocess.run(['pandoc', str(input_path), '-s', '-o', str(output_path)], check=True)
    return output_path

def _md_to_pptx(self, input_path, output_path):
    subprocess.run(['marp', str(input_path), '-o', str(output_path)], check=True)
    return output_path

# Office to Markdown (using markitdown)
def _docx_to_md(self, input_path, output_path):
    from markitdown import MarkItDown
    md = MarkItDown()
    result = md.convert(str(input_path))
    with open(output_path, 'w') as f:
        f.write(result.text_content)
    return output_path

def _xlsx_to_md(self, input_path, output_path):
    from markitdown import MarkItDown
    md = MarkItDown()
    result = md.convert(str(input_path))
    with open(output_path, 'w') as f:
        f.write(result.text_content)
    return output_path

def _pptx_to_md(self, input_path, output_path):
    from markitdown import MarkItDown
    md = MarkItDown()
    result = md.convert(str(input_path))
    with open(output_path, 'w') as f:
        f.write(result.text_content)
    return output_path

# PDF conversions
def _pdf_to_docx(self, input_path, output_path):
    from pdf2docx import Converter
    cv = Converter(str(input_path))
    cv.convert(str(output_path))
    cv.close()
    return output_path

def _pdf_to_md(self, input_path, output_path):
    from markitdown import MarkItDown
    md = MarkItDown()
    result = md.convert(str(input_path))
    with open(output_path, 'w') as f:
        f.write(result.text_content)
    return output_path

# Office to PDF (using LibreOffice)
def _docx_to_pdf(self, input_path, output_path):
    subprocess.run([
        'soffice', '--headless', '--convert-to', 'pdf',
        '--outdir', str(output_path.parent), str(input_path)
    ], check=True)
    return output_path

def _xlsx_to_pdf(self, input_path, output_path):
    subprocess.run([
        'soffice', '--headless', '--convert-to', 'pdf',
        '--outdir', str(output_path.parent), str(input_path)
    ], check=True)
    return output_path

def _pptx_to_pdf(self, input_path, output_path):
    subprocess.run([
        'soffice', '--headless', '--convert-to', 'pdf',
        '--outdir', str(output_path.parent), str(input_path)
    ], check=True)
    return output_path
```

### Progress Tracking

```python
from tqdm import tqdm

def batch_convert_with_progress(converter, input_dir, output_format, output_dir=None):
    """Batch convert with progress bar."""
    input_path = Path(input_dir)
    files = list(input_path.glob('*'))
    
    results = []
    for file in tqdm(files, desc=f"Converting to {output_format}"):
        try:
            result = converter.convert(file, output_format, output_dir)
            results.append({'file': str(file), 'status': 'success'})
        except Exception as e:
            results.append({'file': str(file), 'status': 'error', 'error': str(e)})
    
    return results
```

## Tips
1. **Test Sample First**: Convert a few files before batch processing
2. **Check Disk Space**: Ensure sufficient space for output
3. **Use Parallel Processing**: Speed up with multiple workers
4. **Handle Errors Gracefully**: Log failures, continue processing
5. **Verify Output**: Spot-check converted files

## Limitations
- This is an AI assistant, not a replacement for professional expertise
- Always verify important outputs independently
- For high-stakes decisions, consult domain experts