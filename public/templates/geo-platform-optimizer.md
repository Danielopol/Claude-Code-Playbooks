# GEO Platform Optimizer

Audit and optimize a site for Google AI Overviews, ChatGPT, Perplexity, Gemini, and Bing Copilot individually.

## Core Insight

Only **11% of domains** are cited by both ChatGPT and Google AI Overviews for the same query. Each AI search platform uses a different index, ranking logic, and set of source preferences. A page optimized for Google AI Overviews can be invisible to ChatGPT, and the reverse. Platform-specific optimization is the foundation of a serious GEO strategy, not an add-on.

## How to Run an Audit

1. Collect the target URL and the site's primary topic or industry.
2. Run each platform checklist below against the site.
3. Score each platform on its 0-100 rubric.
4. Write `GEO-PLATFORM-OPTIMIZATION.md` with per-platform scores, gaps, and action items.

---

## Platform 1: Google AI Overviews (AIO)

### How AIO Selects Sources

- 92% of AIO citations come from pages already ranking in the **top 10 organic results**. Traditional SEO is the gateway.
- 47% of citations come from pages ranking **below position 5**, so AIO has its own selection logic favoring clarity and directness over raw rank.
- AIO favors clean structure, direct answers, and scannable formatting.
- Featured snippet optimization overlaps roughly 70% with AIO optimization.
- AIO prefers concise, factual, unambiguous answers. Hedging and filler reduce citation probability.

### Optimization Checklist

1. **Question-based headings** — phrase H2/H3 headings as questions matching real user queries. Check Google's "People Also Ask" for the topic and mirror those exact phrasings.
2. **Direct answer in the first paragraph** — after each question heading, give a 1-2 sentence answer immediately, then expand. The first sentence should stand alone as a citation candidate.
3. **Tables and structured comparisons** — AIO heavily cites tables. Convert comparison, pricing, specification, and feature data into HTML tables with clear column headers.
4. **Ordered and unordered lists** — ordered lists for step-by-step processes, unordered for feature lists. AIO extracts these directly.
5. **FAQ sections** — add a dedicated FAQ with 5-10 real questions, each an H3. FAQPage schema rich results have been restricted to government and health sites since August 2023, but the content pattern still helps AIO extraction.
6. **Definitions and glossary boxes** — define every industry-specific term as "**[Term]** is [concise definition]." AIO cites definitions frequently.
7. **Statistics with sources** — "According to [Source], [statistic]." AIO prefers citeable, specific claims over vague assertions.
8. **Publication date** — show both publication and last-updated dates. AIO deprioritizes undated content for time-sensitive queries.
9. **Author byline** — display the author name with credentials, linked to an author page with bio, credentials, and sameAs links.
10. **Page depth** — keep target pages within 3 clicks of the homepage. AIO rarely cites deep, orphaned content.

### Scoring Rubric (0-100)

| Criterion | Points | How to Score |
|---|---|---|
| Ranks in top 10 for target queries | 20 | 20 if yes, 10 if top 20, 0 if beyond |
| Question-based headings present | 10 | 2 per question heading, max 10 |
| Direct answers after headings | 15 | 3 per direct answer, max 15 |
| Tables present for comparison data | 10 | 10 if used appropriately, 5 if partial, 0 if absent |
| Lists for processes and features | 10 | 10 if present, 5 if partial |
| FAQ section with 5+ questions | 10 | 10 if 5+, 5 if 1-4, 0 if none |
| Statistics with citations | 10 | 2 per cited stat, max 10 |
| Publication and updated date visible | 5 | 5 if both, 3 if one, 0 if none |
| Author byline with credentials | 5 | 5 if full byline, 3 if name only, 0 if none |
| Clean URL and heading hierarchy | 5 | 5 if H1>H2>H3 clean, 3 if minor issues, 0 if broken |

---

## Platform 2: ChatGPT Web Search

### How ChatGPT Selects Sources

- Built on **Bing's search index**, not Google's.
- Top citation sources by domain share: **Wikipedia (47.9%)**, Reddit (11.3%), YouTube, major news outlets.
- Heavily weights **entity recognition**. A brand that exists as a structured entity (Wikipedia, Wikidata, Crunchbase) is far more likely to be cited.
- Prefers authoritative, well-established sources over new or niche sites.
- Longer, more comprehensive articles get cited more often than short pieces.
- Tends to cite the most canonical source for a claim rather than the original.

### Optimization Checklist

1. **Wikipedia presence** — check whether the brand, person, or product has an article. If not, assess notability criteria and draft one if notable. If an article exists, keep it accurate and current.
2. **Wikidata entity** — verify the entity exists on wikidata.org. If not, create an item with key properties: instance of, official website, social media links, founding date, headquarters location.
3. **Bing Webmaster Tools** — verify the site is registered, submit the sitemap, check for crawl errors.
4. **Bing index coverage** — run `site:domain.com` on Bing to confirm key pages are indexed. Bing's indexed set often differs from Google's.
5. **Reddit authority** — check for brand mentions, identify relevant subreddits, assess whether the brand participates authentically.
6. **YouTube presence** — verify a channel exists with relevant content. Video descriptions should contain full URLs and entity information.
7. **Authoritative backlinks** — ChatGPT and Bing weight .edu, .gov, and major publication backlinks heavily. Audit the backlink profile for these.
8. **Entity consistency** — brand name, founding date, leadership, and key facts must match across Wikipedia, Crunchbase, LinkedIn, and the official site.
9. **Comprehensive content** — pages targeting ChatGPT citation should run **2,000+ words** with thorough coverage. ChatGPT prefers one authoritative source over several thin pages.
10. **Clear attribution** — include About sections, company descriptions, and founding stories. ChatGPT uses these for entity grounding.

### Scoring Rubric (0-100)

| Criterion | Points | How to Score |
|---|---|---|
| Wikipedia article exists and is accurate | 20 | 20 if exists, 10 if stub, 0 if none |
| Wikidata entity with 5+ properties | 10 | 10 if complete, 5 if basic, 0 if none |
| Bing index coverage of key pages | 10 | 10 if full, 5 if partial, 0 if poor |
| Reddit brand mentions (positive) | 10 | 10 if active discussions, 5 if mentions, 0 if none |
| YouTube channel with relevant content | 10 | 10 if active, 5 if sparse, 0 if none |
| Authoritative backlinks (.edu, .gov, press) | 15 | 3 per authoritative backlink category, max 15 |
| Entity consistency across platforms | 10 | 10 if consistent, 5 if minor discrepancies, 0 if major |
| Content comprehensiveness (2,000+ words) | 10 | 10 if thorough, 5 if adequate, 0 if thin |
| Bing Webmaster Tools configured | 5 | 5 if verified, 0 if not |

---

## Platform 3: Perplexity AI

### How Perplexity Selects Sources

- Top citation sources: **Reddit (46.7%)**, Wikipedia, YouTube, major publications.
- Places the heaviest emphasis on **community validation** of any AI search platform.
- Strongly favors discussion threads where claims are debated, validated, or expanded by multiple participants.
- Prefers recent content. Publication date is a strong ranking signal.
- Cites 5-15 sources per answer, so mid-authority sites have more room to appear.
- Runs its own crawling infrastructure alongside search APIs.

### Optimization Checklist

1. **Active Reddit presence** — the brand or its representatives should participate authentically in relevant subreddits. Helpful, specific, community-oriented, not promotional.
2. **Reddit AMAs and threads** — participate in AMAs, detailed discussion threads, and community Q&As. Perplexity treats these as high-signal content.
3. **Forum and community presence** — beyond Reddit, check Hacker News, Stack Overflow, Quora, and niche industry forums. Perplexity indexes these heavily.
4. **Discussion-friendly content** — publish opinion pieces, research findings, contrarian takes, and original data. Content that gets shared and debated ranks higher.
5. **Freshness signals** — publish with clear dates and update regularly. Perplexity deprioritizes stale content more aggressively than other platforms.
6. **Multiple source validation** — claims should be supported by other sources. Perplexity cross-references and prefers claims it can verify from multiple origins.
7. **YouTube video content** — ensure video titles, descriptions, and transcripts carry the target information.
8. **Direct, quotable passages** — each paragraph should stand alone as a citation, making one clear point with supporting evidence.
9. **Original data and research** — publish surveys, benchmarks, case studies, or datasets. Perplexity heavily favors primary sources.
10. **Perplexity Pages** — check whether Perplexity has created a Page about the topic or brand. These curated summaries influence future citations.

### Scoring Rubric (0-100)

| Criterion | Points | How to Score |
|---|---|---|
| Active Reddit presence in relevant subreddits | 20 | 20 if active contributor, 10 if mentioned, 0 if absent |
| Forum/community mentions (HN, Stack Overflow, Quora) | 10 | 10 if multiple platforms, 5 if one, 0 if none |
| Content freshness (updated within 6 months) | 10 | 10 if recent, 5 if within a year, 0 if older |
| Original research or data published | 15 | 15 if original research, 10 if case studies, 5 if some data, 0 if none |
| YouTube content with transcripts | 10 | 10 if active channel, 5 if some videos, 0 if none |
| Quotable, standalone paragraphs | 10 | 2 per well-structured quotable paragraph, max 10 |
| Multi-source claim validation | 10 | 10 if claims well-sourced, 5 if some sourcing, 0 if none |
| Discussion-generating content | 10 | 10 if shared and discussed, 5 if some engagement, 0 if none |
| Wikipedia or Wikidata presence | 5 | 5 if present, 0 if absent |

---

## Platform 4: Google Gemini

### How Gemini Selects Sources

- Uses Google's search index plus strong weighting toward Google-owned properties.
- YouTube content is weighted significantly more heavily than in standard Google Search.
- Google Business Profile data is directly accessible to Gemini.
- Uses Google's Knowledge Graph directly. Entity presence there is a major advantage.
- Consumes Schema.org structured data directly for entity understanding.
- Multi-modal: can reference images, videos, and text together.

### Optimization Checklist

1. **Google Knowledge Panel** — check whether the brand has one. If not, claim it through Google Business Profile or structured data. Keep all information accurate.
2. **Google Business Profile** — complete every field: hours, services, photos, posts, Q&A. Gemini pulls directly from GBP for local queries.
3. **YouTube strategy** — create content for every key topic. Optimize titles, descriptions, timestamps, and closed captions. Gemini cites YouTube more than any other AI platform.
4. **YouTube chapters and timestamps** — use chapters so Gemini can reference specific video segments.
5. **Google Merchant Center** — for e-commerce, get products into Merchant Center. Gemini references product data directly.
6. **Structured data** — implement comprehensive Schema.org markup. Gemini uses it for entity understanding more aggressively than other platforms.
7. **Google ecosystem presence** — Google Scholar for research, Google News for publishers, Google Maps for local.
8. **Image optimization** — Gemini is multi-modal. Use descriptive alt text, structured image filenames, high-quality images, and include relevant images with every piece of content.
9. **E-E-A-T signals** — all standard Google E-E-A-T signals apply with extra weight: author pages, about pages, editorial policies, demonstrated expertise.
10. **Chrome Web Store / Google Workspace Marketplace** — for software companies, presence on Google platforms adds entity signals.

### Scoring Rubric (0-100)

| Criterion | Points | How to Score |
|---|---|---|
| Google Knowledge Panel exists | 15 | 15 if complete, 10 if partial, 0 if none |
| Google Business Profile complete | 10 | 10 if fully optimized, 5 if basic, 0 if none |
| YouTube channel with topic-relevant content | 20 | 20 if active with chapters, 10 if present, 0 if none |
| Schema.org structured data implemented | 15 | 15 if comprehensive, 10 if basic, 5 if minimal, 0 if none |
| Google ecosystem presence (Scholar, News, Maps) | 10 | 10 if 3+, 5 if 1-2, 0 if none |
| Image optimization (alt text, filenames) | 10 | 10 if all optimized, 5 if partial, 0 if none |
| E-E-A-T signals (author pages, about, editorial) | 10 | 10 if strong, 5 if partial, 0 if weak |
| Google Merchant Center (if e-commerce) | 5 | 5 if applicable and active, N/A otherwise |
| Multi-modal content (text + images + video) | 5 | 5 if rich multi-modal, 3 if some, 0 if text-only |

---

## Platform 5: Bing Copilot

### How Copilot Selects Sources

- Uses Bing's search index, sharing infrastructure with ChatGPT but applying different ranking and selection.
- Supports the **IndexNow protocol** for near-instant indexing of new and updated content.
- Cites fewer sources per answer, typically 3-5, but gives more prominent attribution.
- Weights Microsoft ecosystem content: LinkedIn, GitHub, Microsoft Learn.
- Prefers pages with clear, structured markup and fast load times.

### Optimization Checklist

1. **Bing Webmaster Tools** — register and verify the site, submit the XML sitemap, fix crawl issues.
2. **IndexNow** — implement the protocol to notify Bing of content changes in real time. Publish a key file at `/.well-known/indexnow-key.txt` and ping the IndexNow API on publish or update.
3. **LinkedIn company page** — complete it with an accurate description, employee connections, and regular posts. Copilot indexes LinkedIn content.
4. **GitHub presence** — for tech companies, maintain active repos. Copilot references repos, documentation, and README files.
5. **Microsoft Learn / documentation** — contribute where relevant, or align documentation with Microsoft's documentation standards.
6. **Bing Places for Business** — the equivalent of Google Business Profile. Complete all fields for local visibility in Copilot.
7. **Clear meta descriptions** — Bing and Copilot weight meta descriptions more heavily than Google does. Write a specific one for every page.
8. **Social signals** — Bing has historically weighted shares, likes, and engagement more than Google.
9. **Exact-match keywords** — Bing's algorithm is more literal about keyword matching. Include exact target phrases in titles, headings, and body text.
10. **Fast page load** — Copilot deprioritizes slow pages. Target sub-2-second load. Optimize images, enable compression, minimize render-blocking resources.

### Scoring Rubric (0-100)

| Criterion | Points | How to Score |
|---|---|---|
| Bing Webmaster Tools verified with sitemap | 15 | 15 if verified, 5 if partial, 0 if not |
| IndexNow protocol implemented | 15 | 15 if active, 0 if not |
| Bing index coverage of key pages | 10 | 10 if full, 5 if partial, 0 if poor |
| LinkedIn company page complete | 10 | 10 if complete, 5 if basic, 0 if none |
| GitHub presence (if applicable) | 5 | 5 if active, N/A if not applicable |
| Meta descriptions optimized | 10 | 10 if all key pages, 5 if partial, 0 if missing |
| Social media engagement signals | 10 | 10 if active engagement, 5 if present, 0 if none |
| Exact-match keywords in titles and headings | 10 | 10 if well-optimized, 5 if partial, 0 if not |
| Page load speed under 2 seconds | 10 | 10 if under 2s, 5 if under 4s, 0 if over 4s |
| Bing Places configured (if local) | 5 | 5 if complete, N/A if not local |

---

## Cross-Platform Summary

### Universal Actions (help every platform)

1. Wikipedia and Wikidata entity presence
2. YouTube channel with relevant content
3. Comprehensive, well-structured content with clear headings
4. Schema.org structured data, especially Organization with sameAs
5. Fast page load and clean HTML
6. Author pages with credentials and sameAs links
7. Regular content updates with visible dates

### Platform-Specific Priorities

| Priority | Google AIO | ChatGPT | Perplexity | Gemini | Copilot |
|---|---|---|---|---|---|
| #1 | Top-10 ranking | Wikipedia | Reddit presence | YouTube | IndexNow |
| #2 | Q&A structure | Entity graph | Original research | Knowledge Panel | Bing WMT |
| #3 | Tables and lists | Bing SEO | Freshness | Schema.org | LinkedIn |
| #4 | Featured snippets | Reddit | Community forums | Google Business Profile | Meta descriptions |

---

## Output Format

Write `GEO-PLATFORM-OPTIMIZATION.md`:

```markdown
# GEO Platform Optimization Report — [Domain]
Date: [Date]

## Overall Platform Readiness
- Combined GEO Score: XX/100 (average of all platform scores)

## Platform Scores
| Platform | Score | Status |
|---|---|---|
| Google AI Overviews | XX/100 | [Strong/Moderate/Weak] |
| ChatGPT Web Search | XX/100 | [Strong/Moderate/Weak] |
| Perplexity AI | XX/100 | [Strong/Moderate/Weak] |
| Google Gemini | XX/100 | [Strong/Moderate/Weak] |
| Bing Copilot | XX/100 | [Strong/Moderate/Weak] |

Status thresholds: Strong = 70+, Moderate = 40-69, Weak = 0-39

## Platform Details
[Per-platform breakdown with score, gaps found, specific actions]

## Prioritized Action Plan

### Quick Wins (this week)
[Actions that improve multiple platform scores with minimal effort]

### Medium-Term (this month)
[Actions requiring content creation or technical changes]

### Strategic (this quarter)
[Actions requiring entity building, community development, or platform presence]
```
