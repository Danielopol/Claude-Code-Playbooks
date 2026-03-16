# Sales Asset Creator

Generate custom sales assets tailored to your prospect, audience, and goals. Supports interactive landing pages, presentation decks, executive one-pagers, and workflow/architecture demos.

## Overview

This playbook creates professional sales assets by gathering context about:
- **(a) The Prospect** — company, contacts, conversations, pain points
- **(b) The Audience** — who's viewing, what they care about
- **(c) The Purpose** — goal of the asset, desired next action
- **(d) The Format** — landing page, deck, one-pager, or workflow demo

The assistant then researches, structures, and builds a polished, branded asset ready to share with customers.

## Phase 1: Context Collection

### Prospect Context
| Field | Prompt | Required |
|-------|--------|----------|
| **Company** | "Which company is this asset for?" | Yes |
| **Key contacts** | "Who are the key contacts? (names, roles)" | No |
| **Deal stage** | "What stage is this deal?" | Yes |
| **Pain points** | "What pain points or priorities have they shared?" | No |

### Audience Context
| Field | Prompt | Required |
|-------|--------|----------|
| **Audience type** | "Who's viewing this?" (Executive / Technical / Operations / Mixed) | Yes |
| **Specific roles** | "Any specific titles to tailor for?" | No |
| **Primary concern** | "What do they care most about?" (ROI / Technical depth / Strategic alignment / Risk / Timeline) | Yes |

### Purpose Context
| Field | Prompt | Required |
|-------|--------|----------|
| **Goal** | "What's the goal of this asset?" | Yes |
| **Desired action** | "What should the viewer do after seeing this?" | Yes |

### Format Selection
| Format | Description | Best For |
|--------|-------------|----------|
| **Interactive landing page** | Multi-tab page with demos, metrics, calculators | Exec alignment, intros, value prop |
| **Deck-style** | Linear slides, presentation-ready | Formal meetings, large audiences |
| **One-pager** | Single-scroll executive summary | Leave-behinds, quick summaries |
| **Workflow / Architecture demo** | Interactive diagram with animated flow | Technical deep-dives, POC demos |

## Phase 2: Research

### Always Research
1. **Prospect basics** — Revenue, employees, key metrics, strategic priorities
2. **Leadership** — Names, titles, recent quotes on strategy/technology
3. **Brand colors** — Extract from company website or brand guidelines

### Additional Research (if context is sparse)
4. **Industry context** — Common pain points, market dynamics
5. **Technology landscape** — Current solutions, potential integration points
6. **Competitive context** — Current solutions, switching signals

## Phase 3: Content Generation

### General Principles
All content should:
- Reference **specific pain points** from user input
- Use **prospect's language** — their terminology, their stated priorities
- Map **your product** to **prospect's needs** explicitly
- Include **proof points** where available (case studies, metrics, quotes)
- Feel **tailored, not templated**

### Section Templates

#### Hero / Intro
- Headline: "[Prospect's Goal] with [Your Product]"
- Subhead: Tie to their stated priority or top industry challenge
- Metrics: 3-4 key facts about the prospect

#### Solution Mapping
For each pain point:
- The challenge (in their words)
- How your product addresses it
- Proof point or example
- Outcome / benefit

#### ROI / Business Case
Interactive calculator with:
- Inputs relevant to their business
- Annual value / savings output
- Cost of solution
- Net ROI and payback period
- Assumptions clearly stated

#### Next Steps / CTA
- Clear action aligned to the asset's purpose
- Specific next step (not vague "let's chat")
- Contact information and suggested timeline

## Phase 4: Build and Deliver

### Output Format
All formats are delivered as self-contained HTML files:
- All CSS inline or in `<style>` tags
- All JS inline or in `<script>` tags
- No external dependencies (except Google Fonts)
- Single file for easy sharing

### Deployment Options
- **Static hosting**: Upload to Netlify, Vercel, GitHub Pages, AWS S3
- **Password protection**: Most hosts offer this
- **Direct share**: Send the HTML file directly — it's fully self-contained
- **Embed**: The file can be iframed into other pages

## Quality Checklist

### Content
- [ ] Prospect company name spelled correctly throughout
- [ ] Pain points accurately reflect input
- [ ] No placeholder text remaining
- [ ] Proof points are accurate and sourced

### Visual
- [ ] Brand colors applied correctly
- [ ] All text readable (contrast)
- [ ] Animations smooth, not distracting

### Professional
- [ ] Tone matches audience
- [ ] Appropriate level of detail for purpose
- [ ] No typos or grammatical errors
- [ ] Feels tailored, not templated
