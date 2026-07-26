# GEO Client Report Generator

Aggregate GEO audit findings into a single professional report a client or stakeholder can read without translation. The report is written for **business owners and marketing leaders**, not developers. Every technical finding gets converted into business impact and a specific action with a priority level.

GEO = Generative Engine Optimization: getting a site cited by AI search platforms (Google AI Overviews, ChatGPT, Perplexity, Gemini, Bing Copilot).

## Inputs

Before writing the report, collect data for these five areas. Each can come from a prior audit pass in this folder, from an analytics export, or from a fresh analysis of the live site.

| Area | What to gather |
|---|---|
| AI platform readiness | Per-platform citation readiness for Google AIO, ChatGPT, Perplexity, Gemini, Bing Copilot |
| Content quality & E-E-A-T | Author bylines, credentials, publication dates, depth, freshness, citability of top pages |
| Technical foundation | Core Web Vitals, server-side rendering, mobile, HTTPS and headers, page speed, IndexNow |
| Schema & structured data | Which JSON-LD types exist, whether they validate, `sameAs` link count |
| Brand authority | Presence on Wikipedia, Wikidata, LinkedIn, YouTube, Reddit, Knowledge Panel, Crunchbase, GitHub |

Optional inputs: an `llms.txt` assessment, brand mention data, and competitor URLs.

If a data point is missing, say so in the report rather than inventing a number. Mark it "Not assessed" and note what would be needed to fill it.

## Output

Write **GEO-CLIENT-REPORT.md** in the current folder using the full structure below. Target 3,000-6,000 words. The report must be self-contained: no references to other files, no "see the technical audit for details."

---

## GEO Readiness Score

### Component Weights

| Component | Weight |
|---|---|
| AI Platform Readiness | 25% |
| Content Quality & E-E-A-T | 25% |
| Technical Foundation | 20% |
| Schema & Structured Data | 15% |
| Brand Authority & Entity Presence | 15% |

### Formula

```
GEO Score = (Platform * 0.25) + (Content * 0.25) + (Technical * 0.20) + (Schema * 0.15) + (Brand * 0.15)
```

Round to the nearest integer. Cap at 100.

### Score Interpretation

| Range | Label | Client-facing description |
|---|---|---|
| 85-100 | Excellent | Your site is well-positioned for AI search. Focus on maintaining and expanding your advantage. |
| 70-84 | Good | Solid foundation with clear opportunities to improve AI visibility. Targeted optimizations will yield significant results. |
| 55-69 | Moderate | Your site has gaps in AI readiness that competitors may be exploiting. A structured optimization plan will close these gaps. |
| 40-54 | Below Average | Significant barriers to AI search visibility exist. Without action, your brand risks being invisible in AI-generated answers. |
| 0-39 | Needs Attention | Critical AI readiness issues require immediate action. Your competitors are likely capturing the AI search traffic your brand should own. |

---

## Report Structure

### Section 1: Executive Summary

Exactly one paragraph, 4-6 sentences:

- What was analyzed (domain, page count, date)
- The GEO Readiness Score with context: "XX/100, which places [brand] in the [label] tier"
- The single most impactful finding, positive or negative
- Top 3 priority recommendations in one sentence
- One sentence of business impact: "Addressing these recommendations could increase AI-driven traffic by an estimated XX%, representing approximately $X,XXX/month based on current traffic patterns"

Tone: confident, direct, professional. No jargon, no hedging. Write as a consultant delivering findings.

### Section 2: GEO Readiness Score

Lead with the headline number:

```
## GEO Readiness Score: XX/100 — [Label]
```

Then the component breakdown:

```markdown
| Component | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Platform Readiness | XX/100 | 25% | XX |
| Content Quality & E-E-A-T | XX/100 | 25% | XX |
| Technical Foundation | XX/100 | 20% | XX |
| Schema & Structured Data | XX/100 | 15% | XX |
| Brand Authority | XX/100 | 15% | XX |
| **Overall** | | | **XX/100** |
```

### Section 3: AI Visibility Dashboard

```markdown
| AI Platform | Readiness Score | Key Gap | Priority Action |
|---|---|---|---|
| Google AI Overviews | XX/100 | [One-line gap] | [One-line action] |
| ChatGPT Web Search | XX/100 | [One-line gap] | [One-line action] |
| Perplexity AI | XX/100 | [One-line gap] | [One-line action] |
| Google Gemini | XX/100 | [One-line gap] | [One-line action] |
| Bing Copilot | XX/100 | [One-line gap] | [One-line action] |
```

Follow with a short paragraph: "These scores reflect how likely your content is to be cited by each AI search platform. A score below 50 indicates significant barriers to citation on that platform."

### Section 4: AI Crawler Access

```markdown
| AI Crawler | Platform | Status | Impact | Recommendation |
|---|---|---|---|---|
| Googlebot | Google Search + AIO | Allowed/Blocked | Critical | [Action] |
| GPTBot | ChatGPT / OpenAI | Allowed/Blocked | High | [Action] |
| Bingbot | Bing + Copilot + ChatGPT | Allowed/Blocked | High | [Action] |
| PerplexityBot | Perplexity AI | Allowed/Blocked | Medium | [Action] |
| Google-Extended | Gemini Training | Allowed/Blocked | Medium | [Action] |
| ClaudeBot | Anthropic Claude | Allowed/Blocked | Medium | [Action] |
| Applebot-Extended | Apple Intelligence | Allowed/Blocked | Medium | [Action] |
```

Translate for the client: "Blocking AI crawlers is like closing your store during business hours. If a crawler cannot access your site, the AI platform it powers cannot cite your content. We recommend allowing all major AI crawlers unless you have a specific data licensing concern."

### Section 5: Brand Authority

```markdown
| Platform | Presence | Status | Impact on AI Visibility |
|---|---|---|---|
| Wikipedia | Yes/No | [Detail] | Very High — 47.9% of ChatGPT citations are Wikipedia |
| Wikidata | Yes/No | [Detail] | High — machine-readable entity data |
| LinkedIn | Yes/No | [Detail] | High — Bing Copilot and ChatGPT signal |
| YouTube | Yes/No | [Detail] | High — Gemini and Perplexity signal |
| Reddit | Yes/No | [Detail] | Very High — 46.7% of Perplexity citations are Reddit |
| Google Knowledge Panel | Yes/No | [Detail] | High — Gemini entity recognition |
| Crunchbase | Yes/No | [Detail] | Medium — entity validation |
| GitHub | Yes/No | [Detail] | Medium — tech brand signal |
```

Translate for the client: "AI platforms build trust by cross-referencing your brand across multiple authoritative sources. Each platform where your brand has an accurate, consistent presence increases the likelihood of being cited in AI answers."

### Section 6: Citability Analysis

**Top 5 most citable pages.** For each: URL, why it is citable (structure, depth, E-E-A-T signals), and one specific improvement.

**Top 5 least citable pages.** For each: URL, why it is unlikely to be cited (thin content, poor structure, missing signals), and a specific rewrite or restructure recommendation.

Business framing: "Your most citable pages are your best candidates for appearing in AI-generated answers. Improving the 5 least citable pages represents the highest-ROI content investment you can make for AI visibility."

### Section 7: Technical Health

```markdown
| Area | Status | Business Impact |
|---|---|---|
| Core Web Vitals | Good/Needs Work/Poor | [Impact on user experience and rankings] |
| Server-Side Rendering | Yes/Partial/No | [Impact on AI crawler visibility] |
| Mobile Optimization | Good/Needs Work/Poor | [Impact on mobile-first indexing] |
| Security (HTTPS + Headers) | Good/Needs Work/Poor | [Impact on trust signals] |
| Page Speed | Fast/Average/Slow | [Impact on user experience and crawl budget] |
| IndexNow Protocol | Implemented/Not | [Impact on Bing/ChatGPT indexing speed] |
```

If SSR is missing or partial, call it out prominently: "Your site uses client-side rendering, which means AI crawlers see an empty page when they visit. This is the single most impactful technical issue for AI search visibility. Until this is resolved, most AI platforms cannot cite your content."

### Section 8: Schema & Structured Data

```markdown
| Schema Type | Present | Status | AI Impact |
|---|---|---|---|
| Organization | Yes/No | [Valid/Issues] | Critical — entity recognition |
| Article + Author | Yes/No | [Valid/Issues] | High — E-E-A-T signal |
| sameAs (entity links) | Yes/No | [Count] links | Critical — cross-platform entity graph |
| [Business-specific] | Yes/No | [Valid/Issues] | [Impact] |
| WebSite + SearchAction | Yes/No | [Valid/Issues] | Medium — sitelinks |
| BreadcrumbList | Yes/No | [Valid/Issues] | Low-Medium — navigation context |
```

When schemas are missing, generate the ready-to-paste JSON-LD and put it in the appendix, then note: "Ready-to-use structured data code has been prepared and is included in the technical appendix. Your development team can add this to your site with minimal effort."

### Section 9: llms.txt Status

```markdown
| File | Status | Recommendation |
|---|---|---|
| /llms.txt | Present/Missing | [Action] |
| /llms-full.txt | Present/Missing | [Action] |
```

Translate for the client: "llms.txt is an emerging standard, similar to robots.txt, that tells AI systems what your site is about and which pages are most important. While not universally adopted yet, implementing it positions your brand ahead of competitors and provides direct guidance to AI platforms."

### Section 10: Prioritized Action Plan

The most important section. Organize by timeline and impact.

```markdown
### Quick Wins (This Week)
*High impact, low effort — can be implemented immediately*

| # | Action | Impact | Effort | Platforms Affected |
|---|---|---|---|---|
| 1 | [Specific action] | [High/Med] | [Hours] | [Which AI platforms] |
```

Quick win criteria: under 4 hours for one person. Examples:

- Unblock AI crawlers in robots.txt
- Add publication dates to existing content
- Add author bylines with credentials
- Fix broken meta descriptions
- Add `sameAs` properties to existing Organization schema
- Create the llms.txt file

```markdown
### Medium-Term Improvements (This Month)
*Significant impact, moderate effort — requires content or technical changes*

| # | Action | Impact | Effort | Platforms Affected |
|---|---|---|---|---|
| 1 | [Specific action] | [High/Med] | [Days] | [Which AI platforms] |
```

Medium-term criteria: 1-5 days of work. Examples:

- Restructure the top 10 pages with question-based headings and direct answers
- Implement comprehensive Schema.org markup
- Create author pages with credentials and `sameAs` links
- Optimize Core Web Vitals (image compression, code splitting)
- Register and configure Bing Webmaster Tools
- Implement the IndexNow protocol

```markdown
### Strategic Initiatives (This Quarter)
*Long-term competitive advantage, requires ongoing investment*

| # | Action | Impact | Effort | Platforms Affected |
|---|---|---|---|---|
| 1 | [Specific action] | [High/Med] | [Weeks] | [Which AI platforms] |
```

Strategic criteria: ongoing effort over weeks or months. Examples:

- Build Wikipedia and Wikidata entity presence
- Develop a Reddit community engagement strategy
- Create a YouTube content strategy aligned with search queries
- Implement server-side rendering
- Build topical authority through comprehensive content coverage
- Establish an original research and data publication program

### Estimated Impact

Close the action plan with an estimate:

"Based on industry benchmarks and the specific gaps identified in this audit:
- **Quick Wins alone** could improve your GEO score by approximately [X-Y] points
- **Full implementation** could improve your GEO score to approximately [XX]/100
- At current traffic levels and conversion rates, improved AI visibility represents an estimated **$X,XXX - $XX,XXX per month** in additional organic value"

Use conservative estimates. Base the dollar figure on current estimated organic traffic value, the projection that AI search drives 25-40% of organic discovery by end of 2026, and the benchmark that a 10-point GEO score improvement correlates with a 15-25% increase in AI citation frequency.

### Section 11: Competitor Comparison

Include only when competitor URLs were analyzed alongside the primary domain.

```markdown
| Metric | [Your Brand] | [Competitor 1] | [Competitor 2] |
|---|---|---|---|
| Overall GEO Score | XX/100 | XX/100 | XX/100 |
| Google AIO Readiness | XX/100 | XX/100 | XX/100 |
| ChatGPT Readiness | XX/100 | XX/100 | XX/100 |
| Perplexity Readiness | XX/100 | XX/100 | XX/100 |
| Schema Coverage | [Detail] | [Detail] | [Detail] |
| Wikipedia Presence | Yes/No | Yes/No | Yes/No |
| Reddit Authority | [Detail] | [Detail] | [Detail] |
| SSR Status | Yes/No | Yes/No | Yes/No |
```

Then two subsections: **Where You Lead** (specific areas of outperformance) and **Where You Trail** (competitor advantages, each with an action to close the gap).

### Section 12: Appendix

**Methodology.** Pages analyzed (list the URLs), platforms assessed, technical checks run, content assessment framework (E-E-A-T per Google's December 2025 Quality Rater Guidelines), schema validation approach, date of analysis.

**Data sources.** Google Search Quality Rater Guidelines (December 2025), Schema.org type hierarchy, industry citation studies (Zyppy, Authoritas, Semrush AI search research 2025-2026), Core Web Vitals thresholds (web.dev 2026), per-platform AI crawler user-agent documentation.

**Glossary.**

| Term | Definition |
|---|---|
| GEO | Generative Engine Optimization — optimizing content to be cited by AI search platforms |
| AIO | AI Overviews — Google's AI-generated answer boxes at the top of search results |
| E-E-A-T | Experience, Expertise, Authoritativeness, Trustworthiness — Google's content quality framework |
| SSR | Server-Side Rendering — generating HTML on the server so crawlers can read content without JavaScript |
| CWV | Core Web Vitals — Google's page experience metrics (LCP, INP, CLS) |
| LCP | Largest Contentful Paint — time to render the largest visible element |
| INP | Interaction to Next Paint — responsiveness metric, replaced FID in March 2024 |
| CLS | Cumulative Layout Shift — visual stability metric |
| JSON-LD | JavaScript Object Notation for Linked Data — preferred structured data format |
| sameAs | Schema.org property linking an entity to its profiles on other platforms |
| IndexNow | Protocol for instantly notifying search engines of content changes |
| llms.txt | Proposed standard file for guiding AI systems about a site's content |
| YMYL | Your Money or Your Life — topics requiring the highest E-E-A-T standards |
| SERP | Search Engine Results Page |
| Topical Authority | The depth and breadth of a site's coverage of its core topic area |

---

## Formatting and Tone

### Formatting

- Clean markdown throughout: tables for data, bullets for recommendations, bold for key terms
- H2 and H3 headers only
- One blank line between sections
- Horizontal rules between major sections
- All URLs absolute, never relative

### Tone

- Professional but accessible, written for a business owner rather than a developer
- Confident and direct: state findings as conclusions, not possibilities
- Action-oriented: every finding connects to a specific action
- Business-impact focused: translate technical issues into business outcomes
- Avoid unexplained jargon, hedging, passive voice, excessive caveats
- Use "Your site does/does not...", "We recommend...", "This impacts..."

### Dollar-Value Framing

Connect recommendations to business value where the data supports it:

- "Improving your Google AIO readiness from 35 to 70 could increase your presence in AI Overviews by an estimated 50%, which at current search volumes represents approximately 2,000 additional monthly visitors"
- "Server-side rendering would make your content accessible to ChatGPT, Perplexity, and other AI platforms, collectively representing an audience your competitors are already reaching"
- "The investment in Schema.org markup, estimated at 8-16 hours of developer time, could increase your entity recognition score from 20 to 75"

Be conservative. State assumptions. Never guarantee specific results.
