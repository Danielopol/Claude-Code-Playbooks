# GEO Monthly Delta Report Generator

Compare two GEO audits of the same site, baseline against current, and turn the difference into a client-facing progress report. Every point gained on the GEO score is proof of value, which makes this the strongest retention artifact a GEO agency has.

GEO = Generative Engine Optimization: getting a site cited by AI search platforms (Google AI Overviews, ChatGPT, Perplexity, Gemini, Bing Copilot).

## How to invoke

Ask for any of these:

```
compare <domain>
compare <baseline-file> <current-file>
compare example.com --month march-2026
```

## Where audits live

Keep audit markdown files in an `audits/` folder in the current directory, named `<domain>-<YYYY-MM-DD>.md`. Generated reports go to `reports/<domain>-monthly-<YYYY-MM>.md`.

The upstream geo-seo-claude suite stores these under `~/.geo-prospects/` instead. If that folder exists on this machine, use it. Otherwise use the local folders.

## Workflow

### Step 1: Find the audit files

When only a domain is given:

1. Look for files matching `<domain>-*.md` in the audits folder
2. Sort by date
3. Use the oldest as baseline, the newest as current
4. If only one file exists, treat it as the baseline and run a fresh audit of the live site as current
5. If no files exist, say so and ask the user to run an audit first. Do not invent a baseline.

### Step 2: Parse both audits

Extract from each file:

- Overall GEO Score
- Per-category scores (6 categories)
- Per-platform scores (5 platforms)
- AI crawler status (14 crawlers)
- Critical issues list
- Action items with status

### Step 3: Calculate deltas

For each metric: `Delta = Current - Baseline`. Attach a trend marker and a color intent (green for gains, red for declines, gray for flat).

### Step 4: Write the report

Save to `reports/<domain>-monthly-<YYYY-MM>.md` using the template below.

---

## Report Template

```markdown
# GEO Monthly Progress Report
## [COMPANY NAME] — [MONTH YEAR]

**Reporting period:** [BASELINE DATE] → [CURRENT DATE]
**Prepared by:** [AGENCY NAME]
**Report reference:** GEO-MONTHLY-[DOMAIN]-[YYMMDD]

---

## Executive Summary

[2-3 sentences: what improved, the trend, what to focus on next month.]

Example: "Electron Srl's GEO Score improved from 32 to 44 this month (+12 points),
placing the site firmly in the 'Below Average' tier and on track to reach 'Moderate'
by May. The biggest wins were AI crawler access (+3 crawlers now allowed) and schema
implementation (Organization and LocalBusiness schemas live). Next month's focus is
content citability, the highest-weighted remaining gap."

---

## GEO Score Progress

```
OVERALL GEO SCORE

  Baseline   [▓▓▓▓░░░░░░░░░░░░░░░░]  32/100  (Critical)
  Current    [▓▓▓▓▓▓▓▓░░░░░░░░░░░░]  44/100  (Below Average)
  Change     ▲ +12 points (+37.5%)

  Target:    65/100 by Month 6 (on track ✓)
```

---

## Score Breakdown: Before vs. After

| Category | Baseline | Current | Change | Trend |
|----------|---------|---------|--------|-------|
| AI Citability & Visibility | [X]/100 | [X]/100 | [+/-X] | [▲/▼/──] |
| Brand Authority Signals | [X]/100 | [X]/100 | [+/-X] | [▲/▼/──] |
| Content Quality & E-E-A-T | [X]/100 | [X]/100 | [+/-X] | [▲/▼/──] |
| Technical Foundations | [X]/100 | [X]/100 | [+/-X] | [▲/▼/──] |
| Structured Data | [X]/100 | [X]/100 | [+/-X] | [▲/▼/──] |
| Platform Optimization | [X]/100 | [X]/100 | [+/-X] | [▲/▼/──] |
| **TOTAL** | **[X]/100** | **[X]/100** | **[+/-X]** | **[▲/▼]** |

---

## Platform Readiness: Before vs. After

| AI Platform | Baseline | Current | Change |
|-------------|---------|---------|--------|
| Google AI Overviews | [X]/100 | [X]/100 | [+/-X] |
| ChatGPT Web Search | [X]/100 | [X]/100 | [+/-X] |
| Perplexity AI | [X]/100 | [X]/100 | [+/-X] |
| Google Gemini | [X]/100 | [X]/100 | [+/-X] |
| Bing Copilot | [X]/100 | [X]/100 | [+/-X] |

---

## AI Crawler Access Changes

| Crawler | Baseline | Current | Change |
|---------|---------|---------|--------|
| GPTBot (ChatGPT) | Blocked/Allowed | Blocked/Allowed | ✓ Fixed / No change |
| ClaudeBot (Anthropic) | Blocked/Allowed | Blocked/Allowed | ✓ Fixed / No change |
| PerplexityBot | Blocked/Allowed | Blocked/Allowed | ✓ Fixed / No change |
| Google-Extended (Gemini) | Blocked/Allowed | Blocked/Allowed | ✓ Fixed / No change |
| Bingbot | Blocked/Allowed | Blocked/Allowed | ✓ Fixed / No change |

[Show only crawlers that changed, or all of them when the list is short.]

---

## Action Plan Progress

### Quick Wins — Status Update

| # | Action | Assigned | Status | Impact |
|---|--------|---------|--------|--------|
| 1 | Allow all AI crawlers in robots.txt | Client dev | ✅ Done | +3 crawlers |
| 2 | Add Organization schema to homepage | Client dev | ✅ Done | Schema score +15 |
| 3 | Create llms.txt | Agency | ✅ Done | AI visibility +8 |
| 4 | Add author bylines to all articles | Client content | 🔄 In Progress | — |
| 5 | Fix meta descriptions (47 pages missing) | Client dev | ❌ Not started | — |

**Quick wins completed: [X]/[Y] ([%])**

### Medium-Term — Status Update

| # | Action | Target Month | Status |
|---|--------|-------------|--------|
| 1 | Rewrite top 10 pages with Q&A structure | Month 2 | 🔄 3/10 done |
| 2 | E-E-A-T: create author pages | Month 2 | ❌ Not started |
| 3 | Register Bing Webmaster Tools | Month 1 | ✅ Done |
| 4 | Implement IndexNow | Month 2 | 🔄 In Progress |

### Strategic — Status Update

| # | Action | Target | Status |
|---|--------|--------|--------|
| 1 | Wikipedia entity creation | Month 4 | 📋 Planned |
| 2 | YouTube channel launch | Month 3 | 📋 Planned |
| 3 | Reddit presence (industry subs) | Month 3 | 📋 Planned |

---

## This Month's Wins

> Clients need to see the value stated plainly.

✅ **[WIN 1]:** [Specific, tangible result — e.g. "GPTBot and ClaudeBot are now allowed. ChatGPT can crawl and cite your content."]
✅ **[WIN 2]:** [e.g. "Organization schema implemented on the homepage. Your brand entity is now machine-readable."]
✅ **[WIN 3]:** [e.g. "llms.txt deployed at example.com/llms.txt, one of roughly 12% of sites in your industry to have this."]

---

## New Issues Discovered

> Issues found in the current audit that were not in the baseline.

⚠️ **[ISSUE 1]:** [What it is, what it means, how we will fix it]
⚠️ **[ISSUE 2]:** [What it is, what it means, how we will fix it]

---

## Next Month Focus

| Priority | Action | Owner | Expected Impact |
|----------|--------|-------|----------------|
| 1 | [Highest ROI action] | [Agency/Client] | +[X] GEO points |
| 2 | [Second priority] | [Agency/Client] | +[X] GEO points |
| 3 | [Third priority] | [Agency/Client] | +[X] GEO points |

**Target GEO Score next month:** [CURRENT + estimated gain]/100

---

## 6-Month Trajectory

| Month | Date | Score | Delta | Key Achievement |
|-------|------|-------|-------|----------------|
| Baseline | [Date] | [Score] | — | Initial audit |
| Month 1 | [Date] | [Score] | [+X] | Quick wins implemented |
| Month 2 | [Date] | [Score] | [+X] | *Current month* |
| Month 3 | [Date] | — | — | Content citability |
| Month 4 | — | — | — | Brand authority |
| Month 5 | — | — | — | Strategic initiatives |
| Month 6 | — | **Target: [X]** | — | Full review |

[Fill only the rows that have happened. Leave projected rows as "—".]

---

## Estimated Business Impact

Based on the [X]-point improvement this month:

- **AI citation likelihood:** increased by approximately [X]%
- **Crawlers with access:** [X]/14 → [Y]/14 (better coverage on [platforms])
- **Estimated monthly AI-referred traffic improvement:** +[X]% (conservative)
- **Traffic value at current conversion rates:** +[currency][X]/month in organic value

*Full traffic impact from GEO changes typically takes 4-8 weeks to materialize
as AI platforms re-index and update their knowledge bases.*

---

*GEO Monthly Report — [COMPANY NAME] — [DATE]*
*Questions or comments? [CONTACT EMAIL]*
```

---

## Delta Calculation Logic

When parsing two audit files, look for these score markers:

```
- "GEO Score: XX/100"
- "Overall Score: XX"
- "AI Citability: XX/100"
- "Brand Authority: XX/100"
- "Technical: XX/100"
- "Schema: XX/100"
- "Platform: XX/100"
- "Content: XX/100"
- "GPTBot: Allowed/Blocked"
- "ClaudeBot: Allowed/Blocked"
```

When exact scores are absent, estimate approximate scores from the written findings and label them as estimates in the report.

## Trend Interpretation

| Delta | Symbol | Meaning |
|-------|--------|---------|
| +5 or more | ▲▲ | Strong improvement |
| +1 to +4 | ▲ | Improvement |
| 0 | ── | No change |
| -1 to -4 | ▼ | Slight decline |
| -5 or more | ▼▼ | Significant decline, needs discussion |

A decline is not automatically bad. A fresh audit often surfaces issues the baseline missed. Frame those as newly discovered opportunities and say which audit revealed them.

## Output

1. Save the report to `reports/<domain>-monthly-<YYYY-MM>.md`
2. Print a confirmation with the key stats:

```
✓ Monthly report generated: reports/example.com-monthly-2026-03.md

SUMMARY:
GEO Score: 32 → 44 (+12 points) ▲
Quick wins completed: 3/5 (60%)
New issues found: 2 (minor)
On track for Month 6 target: YES (65/100)
```

3. Suggest the next step: share it with the client, or render a PDF version.
