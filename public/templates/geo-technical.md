# GEO Technical SEO Audit

Audit the technical health of a website across 8 scored categories, with extra attention to the two things that decide whether AI systems can cite it: **server-side rendering** (AI crawlers do not execute JavaScript) and **AI crawler access** (many sites block AI crawlers in robots.txt without meaning to).

A technically broken site cannot be crawled, indexed, or cited by any platform. Technical SEO is the foundation under both traditional search visibility and AI citation.

## How to Run It

1. Collect the target URL plus 2-3 key inner pages.
2. Fetch each page with curl or a fetch tool to get raw HTML and HTTP headers.
3. Work through the 8 audit categories below.
4. Score each category using its rubric.
5. Write `GEO-TECHNICAL-AUDIT.md` with the results.

---

## Category 1: Crawlability (15 points)

### 1.1 robots.txt Validity
- Fetch `https://[domain]/robots.txt`
- Check syntactic validity: proper `User-agent`, `Allow`, `Disallow` directives
- Check for common errors: missing User-agent, wildcards blocking important paths, `Disallow: /` blocking the entire site
- Verify the XML sitemap is referenced: `Sitemap: https://[domain]/sitemap.xml`

### 1.2 AI Crawler Access (CRITICAL for GEO)

Check robots.txt for directives targeting these crawlers:

| Crawler | User-Agent | Platform |
|---|---|---|
| GPTBot | GPTBot | ChatGPT / OpenAI |
| Google-Extended | Google-Extended | Gemini / Google AI training |
| Googlebot | Googlebot | Google Search + AI Overviews |
| Bingbot | bingbot | Bing Copilot + ChatGPT (via Bing) |
| PerplexityBot | PerplexityBot | Perplexity AI |
| ClaudeBot | ClaudeBot | Anthropic Claude |
| Amazonbot | Amazonbot | Alexa / Amazon AI |
| CCBot | CCBot | Common Crawl (used by many AI models) |
| FacebookBot | FacebookExternalHit | Meta AI |
| Bytespider | Bytespider | TikTok / ByteDance AI |
| Applebot-Extended | Applebot-Extended | Apple Intelligence |

**Scoring for AI crawler access:**
- All major AI crawlers allowed: 5 points
- Some blocked but Googlebot + Bingbot allowed: 3 points
- GPTBot or PerplexityBot blocked: 1 point (significant GEO impact)
- Googlebot blocked: 0 points (fatal)

**Important nuance:** blocking Google-Extended does NOT block Googlebot. Google-Extended only controls AI training data usage, not search indexing. Blocking it may still reduce presence in AI Overviews. Recommend allowing Google-Extended unless the client has a specific data licensing concern.

### 1.3 XML Sitemaps
- Fetch the sitemap (check robots.txt for its location, or try `/sitemap.xml`, `/sitemap_index.xml`)
- Validate XML syntax
- Check for `<lastmod>` dates. They should be present and accurate
- Count URLs and compare to the expected number of indexable pages
- Check for a sitemap index on large sites (50,000 URLs per sitemap max)
- Verify sitemap URLs return 200 status codes (sample check)

### 1.4 Crawl Depth
- Homepage is depth 0. All important pages should be reachable within **3 clicks**
- Pages at depth 4+ get much less crawl budget and are less likely to be cited by AI
- Check internal linking: are key content pages linked from the homepage or main navigation?

### 1.5 Noindex Management
- Check for `<meta name="robots" content="noindex">` on pages that SHOULD be indexed
- Check for `X-Robots-Tag: noindex` HTTP headers
- Common mistakes: noindex on paginated pages, category pages, or key landing pages

**Category Scoring:**

| Check | Points |
|---|---|
| robots.txt valid and complete | 3 |
| AI crawlers allowed | 5 |
| XML sitemap present and valid | 3 |
| Crawl depth within 3 clicks | 2 |
| No erroneous noindex directives | 2 |

---

## Category 2: Indexability (12 points)

### 2.1 Canonical Tags
- Every indexable page needs a `<link rel="canonical" href="...">` tag
- The canonical should point to itself for the authoritative version
- Check for conflicting canonicals (canonical in HTML vs HTTP header)
- Check for canonical chains (A canonicals to B, B canonicals to C. Should be A to C)

### 2.2 Duplicate Content
- www vs non-www: both should resolve, one should redirect
- HTTP vs HTTPS: HTTP should redirect to HTTPS
- Trailing slash consistency: pick one pattern, redirect the other
- Parameter-based duplicates (`?sort=price` creating duplicate pages)

### 2.3 Pagination
- If paginated content exists, check for `rel="next"` / `rel="prev"` (Google ignores these as of 2019, Bing still uses them)
- Preferred: `rel="canonical"` on paginated pages pointing to a view-all page or the first page
- Do not noindex paginated pages that contain unique content

### 2.4 Hreflang (international sites)
- Check for `<link rel="alternate" hreflang="xx">` tags
- Validate reciprocity: if page A points to page B, B must point back to A
- Validate that an x-default fallback exists
- Check language/region code validity (ISO 639-1 / ISO 3166-1)

### 2.5 Index Bloat
- Estimate indexed pages (sitemap count, `site:domain.com` estimate)
- Compare indexed pages to actual valuable content pages
- Flag when indexed pages far exceed content pages (bloat from thin, duplicate, or parameter pages)

**Category Scoring:**

| Check | Points |
|---|---|
| Canonical tags correct on all pages | 3 |
| No duplicate content issues | 3 |
| Pagination handled correctly | 2 |
| Hreflang correct (if applicable) | 2 |
| No index bloat | 2 |

---

## Category 3: Security (10 points)

### 3.1 HTTPS Enforcement
- Site loads over HTTPS
- HTTP redirects to HTTPS with a 301
- No mixed content warnings (HTTP resources on HTTPS pages)
- SSL/TLS certificate valid and not expired

### 3.2 Security Headers

| Header | Required Value | Purpose |
|---|---|---|
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` | Forces HTTPS |
| `Content-Security-Policy` | Appropriate policy | Prevents XSS |
| `X-Content-Type-Options` | `nosniff` | Prevents MIME sniffing |
| `X-Frame-Options` | `DENY` or `SAMEORIGIN` | Prevents clickjacking |
| `Referrer-Policy` | `strict-origin-when-cross-origin` or stricter | Controls referrer data |
| `Permissions-Policy` | Appropriate restrictions | Controls browser features |

**Category Scoring:**

| Check | Points |
|---|---|
| HTTPS enforced with valid cert | 4 |
| HSTS header present | 2 |
| X-Content-Type-Options | 1 |
| X-Frame-Options | 1 |
| Referrer-Policy | 1 |
| Content-Security-Policy | 1 |

---

## Category 4: URL Structure (8 points)

### 4.1 Clean URLs
- Human-readable: `/blog/seo-guide` not `/blog?id=12345`
- No session IDs in URLs
- Lowercase only
- Hyphens for word separation, not underscores
- No special characters or encoded spaces

### 4.2 Logical Hierarchy
- URL path reflects site architecture: `/category/subcategory/page`
- Flat where appropriate. Avoid unnecessary nesting depth
- Consistent pattern across the site

### 4.3 Redirect Chains
- Check for chains (A redirects to B redirects to C)
- Maximum 1 hop recommended (A redirects to C directly)
- Check for redirect loops
- Redirects should be 301, not 302, unless the change is genuinely temporary

### 4.4 Parameter Handling
- URL parameters should not create duplicate indexable pages
- Use canonical tags or robots.txt Disallow for parameter variations
- Configure parameter handling in Google Search Console and Bing Webmaster Tools

**Category Scoring:**

| Check | Points |
|---|---|
| Clean, readable URLs | 2 |
| Logical hierarchy | 2 |
| No redirect chains (max 1 hop) | 2 |
| Parameter handling configured | 2 |

---

## Category 5: Mobile Optimization (10 points)

### Critical Context

As of **July 2024**, Google crawls all sites exclusively with mobile Googlebot. There is no desktop crawling. A site that does not work on mobile does not work for Google.

### 5.1 Responsive Design
- Check for `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Content must not require horizontal scrolling on mobile
- No fixed-width layouts wider than the viewport

### 5.2 Tap Targets
- Buttons and links at least 48x48 CSS pixels
- Minimum 8px spacing between tap targets
- Navigation usable on mobile

### 5.3 Font Sizes
- Base font size at least 16px
- No text requiring zoom to read
- Contrast ratio meets WCAG AA (4.5:1 normal text, 3:1 large text)

### 5.4 Mobile Content Parity
- All content visible on desktop must also be visible on mobile
- No content hidden behind "read more" toggles Googlebot cannot expand (Google improved at expanding these in 2025)
- Images and media load on mobile

**Category Scoring:**

| Check | Points |
|---|---|
| Viewport meta tag correct | 3 |
| Responsive layout (no horizontal scroll) | 3 |
| Tap targets appropriately sized | 2 |
| Font sizes legible | 2 |

---

## Category 6: Core Web Vitals (15 points)

Core Web Vitals use the **75th percentile** of real user field data as the benchmark. Lab data helps with debugging, field data determines the ranking signal.

| Metric | Good | Needs Improvement | Poor | Notes |
|---|---|---|---|---|
| **LCP** (Largest Contentful Paint) | < 2.5s | 2.5s - 4.0s | > 4.0s | Loading. Time until the largest visible element renders |
| **INP** (Interaction to Next Paint) | < 200ms | 200ms - 500ms | > 500ms | Replaced FID in March 2024. Measures all interactions, not just the first |
| **CLS** (Cumulative Layout Shift) | < 0.1 | 0.1 - 0.25 | > 0.25 | Visual stability. Unexpected layout movement |

### Assessing Without CrUX Data

When real user data is unavailable, estimate from page characteristics:

- **LCP:** check the largest above-fold element. Image (size, format)? Text (web font loading)? Server response time (TTFB)?
- **INP:** check for heavy JavaScript. Long tasks over 50ms block interactivity. Check third-party scripts.
- **CLS:** check for images without explicit width/height, dynamically inserted content above the fold, and web fonts causing FOUT/FOIT shift.

### Common LCP Fixes
1. Optimize hero images: WebP/AVIF, correct sizing, preload with `<link rel="preload">`
2. Reduce server response time (TTFB under 800ms)
3. Eliminate render-blocking CSS and JS
4. Preconnect to critical third-party origins

### Common INP Fixes
1. Break long tasks (over 50ms) into chunks with `requestIdleCallback` or `scheduler.yield()`
2. Reduce third-party JavaScript
3. Use `content-visibility: auto` for off-screen content
4. Debounce or throttle event handlers

### Common CLS Fixes
1. Always set `width` and `height` on images and videos
2. Reserve space for ads and embeds with CSS `aspect-ratio` or explicit dimensions
3. Use `font-display: swap` with size-adjusted fallback fonts
4. Do not insert content above existing content after load

**Category Scoring:**

| Check | Points |
|---|---|
| LCP < 2.5s | 5 |
| INP < 200ms | 5 |
| CLS < 0.1 | 5 |

---

## Category 7: Server-Side Rendering (15 points) — CRITICAL FOR GEO

### Why SSR Decides AI Visibility

AI crawlers (GPTBot, PerplexityBot, ClaudeBot and the rest) do **not** execute JavaScript. They fetch raw HTML and parse it. Content rendered client-side by React, Vue, Angular, or any other framework looks like an empty page to them.

Googlebot does execute JavaScript, but it deprioritizes JS-rendered content because of the crawl budget cost. Google handles JS rendering in a separate queue that can delay indexing by days or weeks.

### Detection Method
1. Fetch the page with curl, which runs no JavaScript: `curl -s [URL]`
2. Compare the raw HTML to the rendered DOM in a browser
3. If key content (headings, paragraphs, product info, article text) is missing from the curl output, the site relies on client-side rendering

### What to Check
- **Main content text:** is the article body, product description, or page content in the raw HTML?
- **Headings:** are H1, H2, H3 tags in the raw HTML?
- **Navigation:** is the main navigation server-rendered?
- **Structured data:** is JSON-LD in the raw HTML or injected by JavaScript?
- **Meta tags:** are title, description, canonical, and OG tags in the raw HTML?
- **Internal links:** are navigation and content links in the raw HTML? (Critical for crawlability)

### SSR Solutions to Recommend

| Framework | SSR Solution |
|---|---|
| React | Next.js (SSR/SSG), Remix, Gatsby (SSG) |
| Vue | Nuxt.js (SSR/SSG) |
| Angular | Angular Universal |
| Svelte | SvelteKit |
| Generic | Prerender.io, Rendertron |

### Scoring Detail
- All key content server-rendered: 15 points
- Main content server-rendered, some elements JS-only: 10 points
- Critical content requires JS (product info, article text): 5 points
- Entire page client-rendered (empty body in raw HTML): 0 points

**Category Scoring:**

| Check | Points |
|---|---|
| Main content in raw HTML | 8 |
| Meta tags + structured data in raw HTML | 4 |
| Internal links in raw HTML | 3 |

---

## Category 8: Page Speed and Server Performance (15 points)

### 8.1 Time to First Byte
- Target under **800ms**, ideally under 200ms
- Measure: `curl -o /dev/null -s -w 'TTFB: %{time_starttransfer}s\n' [URL]`
- Over 800ms: check server location, caching, database queries, CDN usage

### 8.2 Resource Optimization
- Total page weight target under **2MB**, critical pages under 1MB
- Check for uncompressed resources. gzip or brotli should be enabled
- Check for unminified CSS and JavaScript
- Check for unused CSS/JS, which can be 50%+ of downloaded bytes on many sites

### 8.3 Image Optimization
- Formats: WebP or AVIF preferred over JPEG/PNG
- Check for oversized images larger than their display size
- Below-fold images should have `loading="lazy"`
- Explicit width/height attributes prevent CLS
- Above-fold images should NOT be lazy loaded. It harms LCP

### 8.4 Code Splitting and Lazy Loading
- JavaScript should be code-split so each page loads only what it needs
- Bundles over 200KB compressed are a warning, over 500KB is critical
- Third-party scripts should load with `async` or `defer`
- Check for render-blocking resources in `<head>`

### 8.5 Caching
- Check `Cache-Control` headers on static resources
- Static assets: long cache times (`max-age=31536000`) with content-hashed filenames
- HTML pages: shorter cache or `no-cache` with validation (`ETag` or `Last-Modified`)

### 8.6 CDN Usage
- Check whether static resources are served from a CDN
- For a global audience a CDN is critical for consistent performance
- CDN-specific headers: `CF-Ray` (Cloudflare), `X-Cache` (AWS CloudFront), `X-Served-By` (Fastly)

**Category Scoring:**

| Check | Points |
|---|---|
| TTFB < 800ms | 3 |
| Page weight < 2MB | 2 |
| Images optimized (format, size, lazy) | 3 |
| JS bundles reasonable (< 200KB compressed) | 2 |
| Compression enabled (gzip/brotli) | 2 |
| Cache headers on static resources | 2 |
| CDN in use | 1 |

---

## Category 9: Agent-Readiness Signals (non-scoring)

These checks surface emerging AI agent compatibility signals. None contribute to the numeric score. They produce a pass or a recommendation. The underlying standards are IETF drafts or early-adoption features, so penalizing absence would be unfair.

### 9.1 RFC 8288 Link Headers (Service Discovery)

RFC 8288 (Web Linking) defines the HTTP `Link:` response header. Servers use it to advertise related resources such as an API catalog, service docs, or an MCP server card in a machine-readable way, with no HTML parsing needed.

**How to check:** capture all `Link:` response headers from the standard homepage fetch. No extra request.

**What to look for:**
- Parse `<url>; rel="relation-type"` pairs
- High-value rel types: `api-catalog` (RFC 9609), `describedby`, `service-doc`, `mcp-server-card`

**When to surface a recommendation:** only for API-first sites (API docs in nav, `/api/` or `/developers/` paths, swagger/OpenAPI in the sitemap). Omit the section entirely for standard business sites. Absence is expected and not noteworthy.

| State | Treatment |
|---|---|
| `Link:` headers present, known rel types | Informational. Document what was found |
| `Link:` headers present, unknown rel types | Informational. Note and explain |
| Absent, API-first site | Recommendation. Explain and suggest implementation |
| Absent, standard business site | Omit. Do not surface |

### 9.2 Markdown Content Negotiation

Checks whether the server responds to `Accept: text/markdown` with `Content-Type: text/markdown`. Cloudflare's "Markdown for Agents" feature enables this, so AI agents receive clean Markdown instead of HTML. That removes boilerplate stripping and improves content extraction accuracy.

**How to check:** send a GET to the homepage with `Accept: text/markdown`. One additional HTTP request per audit.

| State | Treatment |
|---|---|
| `text/markdown` returned | Bonus. Note as a leading-edge capability |
| Standard HTML returned | Forward-looking recommendation |
| Request errors or non-200 | Skip, note the error, do not penalize |

---

## IndexNow Protocol

IndexNow is an open protocol that lets a site notify search engines the moment content is created, updated, or deleted. Bing, Yandex, Seznam, and Naver support it. Google does not, though it monitors the protocol.

**Why it matters for GEO:** ChatGPT uses Bing's index. Bing Copilot uses Bing's index. Faster Bing indexing means faster AI visibility on two major platforms.

**Implementation check:**
1. Look for an IndexNow key file at `https://[domain]/.well-known/indexnow-key.txt` or similar
2. Check whether the CMS has an IndexNow plugin (WordPress has one, many modern CMS platforms support it natively)
3. If not implemented, recommend adding it with instructions

---

## Overall Scoring

| Category | Max Points | Weight |
|---|---|---|
| Crawlability | 15 | Core foundation |
| Indexability | 12 | Core foundation |
| Security | 10 | Trust signal |
| URL Structure | 8 | Crawl efficiency |
| Mobile Optimization | 10 | Google requirement |
| Core Web Vitals | 15 | Ranking signal |
| Server-Side Rendering | 15 | GEO critical |
| Page Speed & Server | 15 | Performance |
| **Total** | **100** | |

Non-scoring checks from Category 9 appear under "Agent-Readiness Signals" and do not affect this total.

### Score Interpretation
- **90-100:** Excellent. Technically sound for both traditional SEO and GEO
- **70-89:** Good. Minor issues to address, fundamentally solid
- **50-69:** Needs Work. Significant technical debt impacting visibility
- **30-49:** Poor. Major issues blocking crawling, indexing, or AI visibility
- **0-29:** Critical. Fundamental technical failures requiring immediate attention

---

## Output Format

Write **GEO-TECHNICAL-AUDIT.md**:

```markdown
# GEO Technical SEO Audit — [Domain]
Date: [Date]

## Technical Score: XX/100

## Score Breakdown
| Category | Score | Status |
|---|---|---|
| Crawlability | XX/15 | Pass/Warn/Fail |
| Indexability | XX/12 | Pass/Warn/Fail |
| Security | XX/10 | Pass/Warn/Fail |
| URL Structure | XX/8 | Pass/Warn/Fail |
| Mobile Optimization | XX/10 | Pass/Warn/Fail |
| Core Web Vitals | XX/15 | Pass/Warn/Fail |
| Server-Side Rendering | XX/15 | Pass/Warn/Fail |
| Page Speed & Server | XX/15 | Pass/Warn/Fail |

Status: Pass = 80%+ of category points, Warn = 50-79%, Fail = under 50%

## AI Crawler Access
| Crawler | User-Agent | Status | Recommendation |
|---|---|---|---|
| GPTBot | GPTBot | Allowed/Blocked | [Action] |
| Googlebot | Googlebot | Allowed/Blocked | [Action] |
[Continue for all AI crawlers]

## Critical Issues (fix immediately)
[List with specific page URLs and what is wrong]

## Warnings (fix this month)
[List with details]

## Recommendations (optimize this quarter)
[List with details]

## Agent-Readiness Signals (non-scoring)

### RFC 8288 Link Headers (Service Discovery)

**Status:** Present / Absent / Not Applicable

If present, table the relation types found and what each one means. Example rows:
| Relation Type | URL | Meaning |
|---|---|---|
| api-catalog | /.well-known/api-catalog | Machine-readable index of available APIs |
| mcp-server-card | /.well-known/mcp.json | MCP server capability declaration |

If absent on an API-first site, note that the site has API/developer content but no `Link:`
headers advertising discoverable services, and give an example:
`Link: </.well-known/api-catalog>; rel="api-catalog"` (references: RFC 8288, RFC 9609).

If absent on a standard business site, omit this section entirely.

### Markdown Content Negotiation

**Status:** Supported / Not Supported
**Test:** GET [url] with `Accept: text/markdown`
**Response Content-Type:** [value]

If supported, note that the site serves clean Markdown to AI agents on request.
If not, give the forward-looking recommendation: Cloudflare Workers/Pages sites can enable
Markdown content negotiation with a one-line config change. Currently Cloudflare-specific.

## Detailed Findings
[Per-category breakdown with evidence]
```

---

## Note on the Full Suite

This is the technical audit skill from the geo-seo-claude toolkit, which ships 15 skills covering full audits, citability scoring, AI crawler analysis, llms.txt generation, schema markup, and client reporting. Run this one standalone as a CLAUDE.md, or install the whole suite from https://github.com/zubair-trabzada/geo-seo-claude
