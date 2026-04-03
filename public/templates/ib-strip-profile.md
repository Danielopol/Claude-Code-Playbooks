# Strip Profile Builder

Creates professional investment banking strip profiles (company profiles) for pitch books, deal materials, and client presentations. Generates 1-4 information-dense slides with quadrant layouts, charts, and tables.

## Workflow

### 1. Clarify Requirements
- **Ask the user**: Single-slide or multi-slide (3-4 slides)?
- **Ask the user**: Any specific focus areas or topics to emphasize?
- **Only after user confirms**, proceed to research

### 2. Research & Planning
**Data Sources:**
- **Primary**: Company filings (BamSEC, SEC EDGAR - "Item 1. Business", MD&A), investor presentations, corporate website
- **Market data**: Bloomberg, FactSet, CapIQ (price, shares, market cap, net debt, EV, ownership)
- **Estimates**: FactSet/CapIQ consensus for NTM revenue, EBITDA, EPS
- **News**: Press releases from last 90 days, M&A activity, guidance changes

**Required Metrics:**
- **Financials**: Revenue, EBITDA, margins (%), EPS, FCF for +/-3 years
- **Valuation**: Market Cap, EV, EV/Revenue, EV/EBITDA, P/E multiples
- **Growth**: YoY growth rates (%)
- **Ownership**: Top 5 shareholders with % ownership
- **Segments**: Product mix and/or geographic mix (% breakdown)

**Normalization:**
- Convert all amounts to consistent currency
- Scale consistently ($mm or $bn throughout, not mixed)

**Before Building:**
- Print outline to chat with 4-5 bullet points per item (actual numbers, no placeholders)
- Print style choices: fonts, colors (hex codes), chart types for each data set
- Get user alignment: "Does this outline and visual strategy align with your vision?"

### 3. Slide-by-Slide Creation
**CRITICAL: You MUST create ONE slide at a time and get user approval before proceeding to the next slide.**

**For EACH slide:**
1. Create ONLY this one slide with PptxGenJS
2. **MANDATORY: Convert to image for review** - You MUST convert slides to images so you can visually verify them
3. **MANDATORY VISUAL REVIEW**: Carefully examine the rendered slide image before proceeding:
   - **Text overlap check**: Scan every text element - do any labels, bullets, or titles collide?
   - **Text cutoff check**: Is any text truncated at boundaries? Are all words fully visible?
   - **Chart boundary check**: Do charts stay within their containers? Are ALL axis labels fully visible?
   - **Quadrant integrity**: Does content in one quadrant bleed into adjacent quadrants?
4. **If ANY overlap or cutoff is detected**: Fix immediately
5. Show slide image to user with download link
6. **STOP and wait for explicit user approval** before creating the next slide

---

## Slide Format Requirements

### Information Density is Critical

**The #1 goal is MAXIMUM information density.** A busy executive should understand the entire company story in 30 seconds. Fill every quadrant to capacity.

**Per quadrant targets:**
- **Company Overview**: 6-8 bullets minimum (HQ, founded, employees, CEO/CFO, market cap, ticker, industry, key stat)
- **Business & Positioning**: 6-8 bullets (revenue drivers, products, market share %, competitive moat, customer count, geographic mix)
- **Key Financials**: Table with 8-10 rows OR chart + 4-5 key metrics
- **Fourth quadrant**: 5-7 bullets (ownership %, recent M&A, developments, catalysts)

**Information packing techniques:**
- Combine related facts: "HQ: Austin, TX; Founded: 2003; 140K employees"
- Always include numbers: "$50B revenue" not "large revenue"
- Add context: "EBITDA margin: 25% (vs. 18% industry avg)"
- Include YoY changes: "Revenue: $125M (+28% YoY)"
- Use percentages: "Enterprise: 62% of revenue"

---

## First Page Layout

Must pass "30-second comprehension test" for a busy executive.

### Slide Setup (CRITICAL)
**Use 4:3 aspect ratio** (standard IB pitch book format).

### First Page Positioning (in inches)
```
+----------------------------------------------------------+
| y=0.2  Title: Company Name (Ticker)                      |
+----------------------------+-----------------------------+
| y=0.6  Company Overview    | y=0.6  Business & Position  |
| x=0.3, w=4.7              | x=5.0, w=4.7               |
| h=3.0                     | h=3.0                      |
+----------------------------+-----------------------------+
| y=3.7  Key Financials      | y=3.7  Stock/Recent Dev     |
| x=0.3, w=4.7              | x=5.0, w=4.7               |
| h=3.5                     | h=3.5                      |
+----------------------------+-----------------------------+
```

### Font Sizes
| Element | Size | Notes |
|---------|------|-------|
| Slide title | 24pt | Bold, company brand color |
| Quadrant headers | 14pt | Bold, with accent bar |
| Body/bullet text | 11pt | Regular weight |
| Table text | 10pt | Use 9pt for dense tables |
| Chart labels | 9pt | Keep labels short |
| Source/footer | 8pt | Bottom of slide |

### Visual Accents (REQUIRED)
Each quadrant header MUST have a colored accent bar to the left.

**Visual elements to include:**
- Accent bars next to all section headers (brand color)
- Thin horizontal divider line between top and bottom quadrants
- Company logo in top-right corner if available
- Subtle gridlines in tables (light gray)

---

## Subsequent Pages: Free-Form Layouts

- Two-column (40/60 or 50/50), full-slide charts, or sidebar layouts
- Each page elaborates on first page content
- Maintain consistent typography and color scheme
- Suggested flow: Products/Market -> Financial Analysis -> Leadership

---

## Charts (Multi-Slide Profiles)

| Data Type | Chart Type |
|-----------|------------|
| Revenue trends | Line or column (multi-year) |
| Geographic breakdown | Horizontal bar |
| Product mix | Pie with percentages |
| Financial comparison | Column |
| Stock price (1Y daily) | Line |

---

## Quality Checklist

### First Page
- Title section with company name, ticker, industry
- Exactly 4 equal quadrants below title
- All bullets, no paragraphs, 1 line max each
- Financials in table or chart (not both)

### All Slides
- No text overflow or cutoff
- Consistent fonts and colors throughout
- Charts render correctly
- No placeholder text - all actual data
- Consistent scaling ($mm or $bn, not mixed)
- Sources cited
- Investment banking quality (GS/MS/JPM standard)
