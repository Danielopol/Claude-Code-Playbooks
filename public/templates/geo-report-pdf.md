# GEO PDF Report Generator

Turn a finished GEO audit markdown file into a styled, client-ready PDF using pandoc plus headless Chrome. No Python, no ReportLab, no JSON wrangling.

## Prerequisites

- **pandoc** — `brew install pandoc` (macOS), `choco install pandoc` or `winget install JohnMacFarlane.Pandoc` (Windows), `apt install pandoc` (Debian/Ubuntu)
- **Google Chrome or Chromium** — used in headless mode to print HTML to PDF

Find the Chrome binary once and reuse the path:

| OS | Typical path |
|---|---|
| macOS | `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome` |
| Windows | `C:\Program Files\Google\Chrome\Application\chrome.exe` |
| Linux | `google-chrome` or `chromium` on `PATH` |

## Input

A markdown audit report in the current folder, named `GEO-AUDIT-REPORT.md` by default. If no such file exists, stop and tell the user to produce the audit report first. Do not fabricate audit data to fill the PDF.

## Styling assets

The upstream geo-seo-claude suite ships a pandoc HTML template and stylesheet that produce the dark navy cover and score badge. Running as a standalone CLAUDE.md, you will not have those files. On the first run, generate them into a local `geo-pdf/` folder in the current directory:

- `geo-pdf/template.html` — a pandoc HTML5 template containing the cover section, the metadata variables listed below, and an inline `<script>` that post-processes the document before printing
- `geo-pdf/style.css` — typography, table styling, page footer, and `@page` rules

Reuse those files on later runs instead of regenerating them.

## Workflow

### Step 1: Check for the audit report

Look for `GEO-AUDIT-REPORT.md` in the current directory. If absent, stop.

### Step 2: Extract cover metadata

Read the top of the report and pull these fields:

| Field | Where to find it |
|---|---|
| `brand_name` | First H1 title, after "GEO Audit Report:" |
| `domain` | Second bold line, e.g. `**Domain:** example.com` |
| `geo_score` | Line matching `## Overall GEO Score: XX / 100` |
| `score_label` | The word after the score on that same line, e.g. "Poor", "Fair", "Good" |
| `date` | `**Audit Date:**` line |
| `business_type` | `**Business Type:**` line |
| `locations` | `**Locations:**` line |
| `platform` | `**CMS:**` line |

If a field is missing, omit its `--metadata` flag and let the template fall back to its default.

### Step 3: Run pandoc

```bash
pandoc GEO-AUDIT-REPORT.md \
  --to html5 \
  --standalone \
  --embed-resources \
  --template geo-pdf/template.html \
  --css geo-pdf/style.css \
  --metadata title="GEO Audit Report — <brand_name>" \
  --metadata brand_name="<brand_name>" \
  --metadata domain="<domain>" \
  --metadata geo_score="<geo_score>" \
  --metadata score_label="<score_label>" \
  --metadata date="<date>" \
  --metadata business_type="<business_type>" \
  --metadata locations="<locations>" \
  --metadata platform="<platform>" \
  -o GEO-REPORT.html
```

### Step 4: Print to PDF with headless Chrome

```bash
"<chrome-binary-path>" \
  --headless=new \
  --disable-gpu \
  --no-sandbox \
  --print-to-pdf="$(pwd)/GEO-REPORT.pdf" \
  --print-to-pdf-no-header \
  --no-pdf-header-footer \
  --virtual-time-budget=5000 \
  "file://$(pwd)/GEO-REPORT.html"
```

### Step 5: Report completion

Tell the user the PDF path, the file size, and how to open it.

## What the PDF Contains

- **Cover page** — dark navy gradient, brand name, domain, GEO score badge colored by score, audit date, business type, locations, CMS platform
- **Score tables** — cells containing `XX/100` are color-coded: 80 and up green, 65 and up blue, 50 and up amber, 35 and up orange, below 35 red
- **Finding sections** — H3 headings containing "Critical", "High", "Medium", or "Low" get severity-colored left-border callout blocks in red, orange, yellow, or green
- **Section page breaks** — major sections (High Priority, 90-Day Roadmap, Component Score Summary, Generated Schema) start on a new page
- **Code blocks** — JSON schema templates render with dark-theme monospace styling
- **Page footer** — brand name, "GEO Audit", date, and page numbers via CSS `@page`

## Customizing

- **Colors and typography** — edit `geo-pdf/style.css`
- **Cover layout** — edit `geo-pdf/template.html`
- **Score color thresholds** — edit the `scoreColor()` function in the template's `<script>` block
- **Which sections break to a new page** — edit the `breakBefore` array in the template's `<script>` block

## Troubleshooting

| Problem | Fix |
|---|---|
| `pandoc: command not found` | Install pandoc for your OS, then reopen the terminal |
| Chrome not found | Verify the binary path for your OS from the table above |
| PDF is blank or empty | Raise `--virtual-time-budget` to 8000 so the inline script finishes |
| Cover metadata missing | Check that the audit markdown uses the standard header format in Step 2 |
| Fonts not loading | The PDF renders offline and falls back to system fonts. Expected. |
| Score cells not colored | The color-coding runs in the template's inline script. Confirm the cell text matches the `XX/100` pattern. |
