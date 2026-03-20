# Paper Figures PowerPoint Generator

Generate a PowerPoint presentation from a Marker-converted paper folder or directly from raw PDFs. The deck includes a title slide with paper metadata followed by one slide per figure, table, and equation, preserving markdown document order for content slides.

## When to Use

Activate when the user wants to:
- Create a PowerPoint from a research paper's figures and tables
- Generate a visual summary deck from a Marker-converted PDF
- Extract all figures/tables/equations from a paper into slides
- Generate PPTX decks from existing Marker output folders
- Generate PPTX decks directly from PDF(s) when markdown does not exist yet

## Input Requirements

Preferred input is a paper folder from `outputs/library_markdown_output/` containing:
- **Primary `.md` file** - the Marker conversion (not `_citation.md` or `_no_refs.md`)
- **`_citation.md`** - enriched metadata with DOI, APA citation, abstract
- **Figure image files** - `_page_*_Figure_*.(jpeg|jpg|png|webp)` extracted by Marker (`_Picture_` assets are intentionally ignored)

You can point this workflow at a Marker output directory and select one paper folder (or all folders), or provide raw PDF input and let the wrapper convert first.

## Workflow

### 1. Preferred: one-step workflow from raw PDF(s)

```bash
bash scripts/marker_output_to_pptx.sh \
  --pdf-input /path/to/paper_or_pdf_folder \
  --marker-output /path/to/marker_output \
  --all \
  --output-dir /path/to/pptx_output
```

Behavior:
- The wrapper runs `marker_single` directly (one PDF at a time).
- Conversion state is tracked in `<marker_output>/state` so reruns can resume.
- Keep image extraction enabled (do **not** disable image extraction), because this workflow needs `_page_*_Figure_*` files.
- Figure-slide default mode is **figure-only** (no caption text block).

### 1b. Reprocess a PDF for slide-quality figure/caption extraction (recommended when captions are noisy)

Use this when figure slides come out with missing/weak captions, too many `_Picture_` assets, or poor OCR text around figure headings.

```bash
PDF=/path/to/paper.pdf
OUT=/path/to/marker_output_reprocessed

bash scripts/marker_output_to_pptx.sh \
  --pdf-input "$PDF" \
  --marker-output "$OUT" \
  --output-dir /tmp/pptx_out \
  --marker-use-llm \
  --marker-service-timeout 120 \
  --marker-extra-arg --force_ocr \
  --marker-extra-arg --strip_existing_ocr \
  --marker-extra-arg --highres_image_dpi \
  --marker-extra-arg 256 \
  --marker-extra-arg --lowres_image_dpi \
  --marker-extra-arg 128 \
  --marker-extra-arg --format_lines
```

Notes:
- Use a fresh output directory for reprocessing so you can compare baseline vs reprocessed markdown/images.
- For born-digital PDFs with already clean text, try the same command without `--force_ocr` and `--strip_existing_ocr`.

Quick quality checks before PPTX generation:
- Figure assets count: `find "$OUT" -type f | rg '_page_[0-9]+_Figure_[0-9]+\.(jpeg|jpg|png|webp)$' | wc -l`
- Figure heading coverage: `rg -n '^(#{1,6}\s+)?(Figure|Fig\.)\s+[A-Za-z0-9.-]+' "$OUT"`

### 2. Generate PPTX from Marker output

```bash
bash scripts/marker_output_to_pptx.sh \
  --marker-output /path/to/marker_output
```

Useful options:
- `--paper <name-or-path>` - choose one paper when marker output contains multiple paper folders
- `--all` - generate decks for all detected paper folders
- `--output` / `-o` - output `.pptx` path for a single paper
- `--output-dir` - output directory for one or many generated decks
- `--pdf-input <path>` - optional conversion pre-step from raw PDFs
- `--experimental-figure-captions` - experimental mode that adds extracted caption text to figure slides (prone to OCR/parse errors)
- `--with-captions` - alias for `--experimental-figure-captions`
- `--marker-force` - reprocess previously converted PDFs
- `--marker-fail-fast` - stop on first PDF conversion failure
- `--marker-timeout <seconds>` - per-PDF conversion timeout (default 1000)
- `--marker-state-dir <path>` - custom location for conversion logs/state files
- `--skip-tables` - omit table slides
- `--skip-equations` - omit equation slides

### 3. Direct generator usage (advanced)

If the user gives a paper name or partial match, find the folder:
```bash
ls outputs/library_markdown_output/ | grep -i "<search_term>"
```

```bash
python scripts/generate_paper_pptx.py \
  "outputs/library_markdown_output/<paper_folder>" \
  --output "outputs/<paper_name>_figures.pptx"
```

**Options:**
- `--output` / `-o` - Custom output path (default: `<folder>/<name>_figures.pptx`)
- `--experimental-figure-captions` - experimental caption mode for figure slides
- `--with-captions` - alias for `--experimental-figure-captions`
- `--skip-tables` - Omit table slides
- `--skip-equations` - Omit equation slides

### 4. Verify output

After generation, report to the user:
- Total number of slides
- Breakdown: N figures, N tables, N equations
- Output file path

## Scripts

| Script | Purpose |
|---|---|
| `scripts/marker_output_to_pptx.sh` | Wrapper that can convert raw PDF(s) first, then generate one or many decks |
| `scripts/generate_paper_pptx.py` | Core PPTX generator for a single Marker-converted paper folder |

## Slide Layout

- **Slide 1 (Title)**: Paper title, authors, APA citation, DOI, truncated abstract
- **Figure slides (default)**: Figure image with simplified heading `Figure N` (no caption text block).
- **Figure slides (experimental captions mode)**: Figure image (left ~65%) + extracted caption block (right ~35%). This mode is prone to OCR/parse errors.
- **Table slides**: Table title + native PowerPoint table with header row styling
- **Equation slides**: Equation label + rendered equation image (matplotlib mathtext) in a highlighted box + preceding context paragraph. Falls back to raw LaTeX source if rendering is unavailable.

## Dependencies

- Python 3.10+
- `python-pptx` (install: `pip install python-pptx`)
- `Pillow` (optional, for correct image aspect ratios; install: `pip install Pillow`)
- `matplotlib` (optional, for rendering equation LaTeX into slide images; install: `pip install matplotlib`)
- `marker_single` on `PATH` for PDF-to-markdown conversion

## Marker Output Patterns

The script parses these patterns from Marker-generated markdown:

- **Images**: `![](_page_X_Figure_Y.jpeg)` (and related image extensions) — inline figure references (`_Picture_` images are skipped)
- **Figure captions**: `## Figure N. ...` or plain `Figure N. ...` on nearby lines; the generator combines heading + nearby caption lines into one caption block
- **Tables**: Markdown pipe tables (`| col1 | col2 |`) preceded by `Table N. Title` headings
- **Equations**: `$$...$$` blocks with optional `\tag{N}` or `\n(N)` equation numbers

## Customization

To adjust colors, fonts, or layout, edit `scripts/generate_paper_pptx.py`. Key constants at the top:
- `ACCENT_COLOR`, `TITLE_COLOR`, `BODY_COLOR` — color palette
- `TITLE_FONT`, `BODY_FONT` — typography
- `SLIDE_WIDTH`, `SLIDE_HEIGHT` — slide dimensions (default: widescreen 16:9)
