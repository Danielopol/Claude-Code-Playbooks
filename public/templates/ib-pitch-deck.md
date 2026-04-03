# Populating Investment Banking Pitch Deck Templates

Populates investment banking pitch deck templates with data from source files. Use when: user provides a PowerPoint template to fill in, user has source data (Excel/CSV) to populate into slides, user mentions populating or filling a pitch deck template, or user needs to transfer data into existing slide layouts. Not for creating presentations from scratch.

## Reference Files

**Read all reference files at task start before beginning any work.** These contain critical patterns and anti-patterns that will affect your approach. Do not wait until you encounter issues.

| File | Purpose |
|------|---------|
| `formatting-standards.md` | Text, bullets, tables, charts, alignment |
| `slide-templates.md` | Content mapping guidance for common slide types |
| `xml-reference.md` | PowerPoint XML patterns for tables, shapes, arrows |
| `calculation-standards.md` | Financial formulas for verification (CAGR, consensus) |

---

## Workflow Decision Tree

**What type of task is this?**

```
- Populating empty template with source data?
  -> Follow "Template Population Workflow" below

- Editing existing populated slides?
  -> Extract current content, modify, revalidate

- Fixing formatting issues on existing slides?
  -> See "Common Failures" table, apply targeted fixes
```

---

## Critical Rendering Limitation

**LibreOffice is used for validation but DOES NOT render PowerPoint files accurately.** It will mangle fonts, gradients, shape positions, text wrapping, and some table formatting.

**What this means:** A slide that passes visual validation in LibreOffice may still have issues in Microsoft PowerPoint. The validation loop catches structural issues (missing content, broken tables, placeholder formatting retained) but **cannot** catch font substitution, subtle alignment shifts, or gradient problems.

**Required action:** Always include this statement when delivering output:
> "This file was validated using LibreOffice. Please review in Microsoft PowerPoint before distribution, as rendering differences may exist."

---

## Template Population Workflow

Copy and track progress:

```
Pitch Deck Progress:
- [ ] Phase 1: Extract and validate source data
- [ ] Phase 2: Map content to template sections
- [ ] Phase 3: Populate slides with proper formatting
- [ ] Phase 4: Validate -> Fix -> Repeat until clean
- [ ] Phase 5: Final verification
```

### Phase 1: Data Extraction
1. **Create backup** of original template before any modifications — copy to `[filename]_backup.pptx`. Direct XML editing or unexpected errors can corrupt files.
2. Identify all source materials (Excel, CSV, PDF reports, Word documents, databases, web sources)
3. Extract relevant data points from each source
4. Validate all numbers against original sources
5. Standardize units and currency (convert all figures to the primary unit/currency used in the template)
6. Note any calculations that need verification

### Phase 2: Content Mapping
1. **Open and visually review the template** — understand its structure, style, and existing content before modifying
2. Analyze template structure — identify all placeholder areas and content boxes
3. Map source data to corresponding template sections
4. Identify placeholder guidance boxes (colored instruction boxes from task creator)
5. Note any data gaps or mismatches

### Phase 3: Template Population
1. **Remove or reformat placeholder boxes** — colored instruction boxes show WHAT to create, not HOW to format. Delete them and create properly formatted content in their place.
2. Populate each section with mapped content (focus on content first)
3. **Then apply formatting** to match template style
4. Create tables as actual table objects (NEVER use pipe/tab-separated text)
5. Create arrows/shapes as PowerPoint objects
6. Insert company logo if provided in task files; if not available, flag to user: "[LOGO NOT PROVIDED - please supply company logo]"

### Phase 4: Validate, Fix, Repeat

**This is a feedback loop. Repeat until all checks pass OR escalation is triggered.**

```bash
# Convert to images for visual validation
soffice --headless --convert-to pdf presentation.pptx
pdftoppm -jpeg -r 150 presentation.pdf slide
```

**Validation checklist (check each slide image):**
- Text readable against background?
- Tables are actual objects (columns aligned, NOT pipe/tab-separated text)?
- Charts/tables fill designated areas?
- Bullet formatting consistent within sections?
- Font sizes match across same-level boxes?
- No content beyond slide boundaries?
- No placeholder formatting retained (no large colored boxes with data dumped in)?
- No text-based "tables" (no `|` or tab separators creating fake columns)?
- Cross-slide consistency: Same metrics/figures identical across all slides where they appear?

**Fix cycle protocol:**

| Cycle | Action |
|-------|--------|
| 1 | Fix all identified issues, re-validate |
| 2 | Fix remaining issues, re-validate |
| 3 | If issues persist, document remaining problems and escalate to user |

### Phase 5: Final Verification

Run through the Final Quality Checklist before delivering.

---

## Quick Reference Tables

### Bullet Symbols

| Context | Symbol | Usage |
|---------|--------|-------|
| Included/Positive | check | Items within scope, features present |
| Excluded/Negative | x | Items outside scope, features absent |
| Neutral list | bullet | General enumeration, commentary |
| Numbered sequence | 1. 2. 3. | Process steps, rankings |
| Sub-bullets | dash | Secondary points under main bullets |

### Slide Hierarchy Levels (Typical)

| Level | Examples | Typical Size | Style |
|-------|----------|--------------|-------|
| Title | Slide title | 40-48pt | Bold |
| Subtitle | Market definition, slide descriptor | 18-22pt | Bold |
| Section Header | "Key Projections", "Commentary" | 14-16pt | Regular |
| Block Label | "Segments Included", "Definition" sidebar | 12-14pt | Regular |
| Block Content | Bullet points, body text | 11-14pt | Regular |
| Table Header | Column headers | 10-12pt | Bold |
| Table Body | Cell content | 9-11pt | Regular |
| Footnotes | Sources, notes | 8-9pt | Italic |

### Rounding for Presentation

| Value Type | Typical Rounding | Example |
|------------|------------------|---------|
| Large market sizes ($10bn+) | Nearest $1bn | 18.5 -> $19bn |
| Smaller market sizes (<$10bn) | Nearest $0.5bn or $0.1bn | 2.3 -> $2.5bn |
| Size ranges | Match precision of sources | 14.9-22.1 -> $15-22bn |
| CAGR | Whole % or 0.5% | 16.4% -> 16% or 16.5% |
| Market share | Nearest 5% or match source | 21.4% -> 20% |
| Multiples | 1 decimal | 9.69 -> 9.7x |

---

## MUST Requirements

These requirements are non-negotiable regardless of template:

| Requirement | Details |
|-------------|---------|
| **Text Readability** | All text MUST have sufficient contrast with background. |
| **Actual Table Objects** | Tabular data MUST be table objects, not tab-separated text. |
| **Proper Chart/Table Sizing** | Pasted visuals MUST fill designated area. |
| **Consistent Formatting** | Bullets within section MUST match (symbol, size, indent). Same-level boxes MUST use same font size. |
| **Content Boundaries** | All content MUST stay within slide edges. |
| **No Placeholder Formatting** | Remove colored instruction boxes. Main body: dark text on light background per template. |

---

## Critical Anti-Patterns: NEVER DO THESE

### Anti-Pattern 1: Populating Data INTO Placeholder Boxes
The colored box IS the placeholder. It tells you what content goes there. The output should have different formatting — typically dark text on white/light background, or properly styled shapes.

### Anti-Pattern 2: Text-Based "Tables"
Creating table-like content using separator characters (|, tabs, spaces) instead of actual table objects. This is NOT a table. Columns will never align properly.

### Anti-Pattern 3: Inheriting Placeholder Contrast
Placeholder uses light text on colored background. Production slides typically use dark text on light backgrounds for body content.

---

## Common Failures

| Failure | Solution |
|---------|----------|
| Unstructured text dumps | Break into bullets |
| Pipe/tab-separated "tables" | Create actual table objects |
| Poor text/background contrast | Audit every text element |
| Tiny pasted charts | Resize to fill area |
| Data dumped into placeholder boxes | Delete colored instruction boxes, create new content |
| Inconsistent bullets | Define style once, apply to all |
| Content overflow | Set explicit box widths |
| Text arrows | Use PowerPoint shape objects |

---

## Table Structure Guidelines

When creating tables (MUST be actual table objects):

**Column Alignment:**
- Text columns: Left-aligned (header and content)
- Numeric columns: Right-aligned or center-aligned (header matches content)

**Header Row:**
- Bold text
- Shaded background (template's brand color)
- White or contrasting text

**Width:** Fill designated section width completely.

---

## Final Quality Checklist

### Data Accuracy
- All figures match original source documents
- Calculated values verified against formulas
- Years and time periods are correct
- Company/competitor names spelled correctly
- Same figures are identical across all slides where they appear

### Content Mapping
- Every template section populated with appropriate data
- No bracket placeholder text remaining
- All source citations included in footnotes

### Formatting
- Text readable against all backgrounds
- Tables are actual table objects
- Charts/tables fill designated areas
- Bullet formatting consistent within each section
- Font sizes match across same-level boxes
- No content extends beyond slide boundaries
- No placeholder boxes retained with data dumped inside

### Final Step
- Recommend user validate in Microsoft PowerPoint before distribution
