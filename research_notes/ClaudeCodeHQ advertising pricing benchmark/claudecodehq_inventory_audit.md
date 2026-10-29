# ClaudeCodeHQ.com advertising inventory and offer: audit (as of 2026-10-29)

Scope and method. Everything below comes from the local repo at `/home/user/Claude-Code-Playbooks` (HEAD `cfd055c`, "Add 23 playbooks: Firecrawl set, REA, creator style and more") and its git history. Sources are cited as repo paths with line numbers, e.g. [src/app/advertise/page.tsx:111](src/app/advertise/page.tsx). **I could not fetch the live site.** curl got `CONNECT tunnel failed, response 403` from the session's egress proxy, and WebFetch got `getaddrinfo ENOTFOUND www.claudecodehq.com` because the host is not in this session's allowed network domains. So no claim here is checked against the rendered production pages. If the deployed build differs from HEAD, the live site wins. Owner-supplied Vercel numbers (Sep 29–Oct 29, 2026: 26,800 visitors, 49,100 page views, 48% tier-1, 59% Google, +36%) are labeled "owner data". Lines marked **ASSUMPTION** are my estimates, not facts.

---

## 1. How sponsors are rendered: placement, page types, mobile, tracking, rel, stacking, exclusivity, the "37K" figure

### Takeaway
One component, `SponsorStack`, delivers all paid inventory. It is an inline full-width card placed after the page header, before the main content, on playbook pages, internal blog posts (guides) and category pages. It is not a sidebar and not at the bottom, and it is not hidden on mobile. Clicks are tracked as client-side Vercel events plus UTM tags. **There is no impression tracking, no rotation, no exclusivity and no cap on stacked sponsors.** The "37K page views" in the Site-wide plan is a hardcoded string from the Aug 9–Sep 8, 2026 window. It describes total site page views, not page views of the pages that actually carry the card.

### Cited Findings
**Where the card renders**
- Playbook pages. `<SponsorStack topics={getTopicsForCategory(playbook.category)} className="mb-8" />` comes after the header (back link, category/difficulty badges, H1, description, setup-time/author/source chips, tags) and after the SEO-hook / "Who it's for" / "Example" box. It sits before the CLAUDE.md template viewer, the inline newsletter signup and the setup guide — [src/app/playbooks/[slug]/page.tsx:320](src/app/playbooks/[slug]/page.tsx) (header lines ~267–315, seoHook box ~317–339, TemplateViewer after 320, Newsletter at 333).
- Internal blog posts (guides). `<SponsorStack topics={getBlogTopics(slug)} className="mb-10" />` comes right after the post header (badges, H1, description, date/reading-time/author row, tags) and before the article body — [src/components/BlogPostLayout.tsx:206](src/components/BlogPostLayout.tsx). All 118 internal post pages under `src/app/blog/*/page.tsx` use `BlogPostLayout` (`grep -L BlogPostLayout` returned nothing) — [src/app/blog/](src/app/blog/).
- Category pages. `<SponsorStack topics={getTopicsForCategory(categoryInfo.id)} withListings className="mb-8 max-w-3xl" />` comes after the category H1/description and before the playbook grid. `withListings` is set only here, so Tool Listings appear only on category pages — [src/app/categories/[category]/page.tsx:124-128](src/app/categories/[category]/page.tsx).
- `/tools` directory. Every currently paid sponsor appears here, whatever the plan: "Everything currently paid for appears in the directory — a tool listing, or any sponsorship, which includes directory presence" — [src/lib/sponsors.ts:94-115](src/lib/sponsors.ts). Each card shows logo, name, pricing, a "Sponsored" label, a description, topic chips and a "Visit" link — [src/components/ToolsDirectory.tsx:55-85](src/components/ToolsDirectory.tsx).
- Pages with **no** SponsorStack: the only files that import SponsorStack/SponsorLink/AffiliateLink are the playbook, category, tools and blog-post files plus 20 blog posts that use in-content AffiliateLink. The homepage (`src/app/page.tsx`), `/playbooks` browse, `/for/[persona]`, `/blog` listing, `/latest`, `/getting-started`, `/about` and the API/MCP routes have none — [grep result over src/](src/).
- Footer. A footer "Advertise" link appears site-wide. The "Tools" footer link renders only when `getDirectoryTools().length > 0` — [src/app/layout.tsx:119-126](src/app/layout.tsx).

**Above the fold?**
- The card always comes after the header block, and on playbook pages also after the SEO-hook box — [src/app/playbooks/[slug]/page.tsx:267-320](src/app/playbooks/[slug]/page.tsx). Whether that is above the fold depends on viewport and title/tag length. **ASSUMPTION:** on desktop it is probably at or just above the fold on playbook and blog pages. On phones it is probably below the first screen, because the header plus the seoHook box stack vertically.

**Mobile**
- The `<aside>` has no responsive `hidden` class, so it renders on all breakpoints. Only the "Visit ↗" text label is hidden below the `sm` breakpoint (`hidden sm:inline-flex`). The whole row stays a link — [src/components/SponsorStack.tsx:54](src/components/SponsorStack.tsx), [src/components/SponsorStack.tsx:73-76](src/components/SponsorStack.tsx).

**Card format**
- Each row shows a 32px logo (or a letter avatar), **name — tagline** (tagline "under ~90 characters") and "Visit". The header reads "Sponsored", with an "Advertise here" link to /advertise — [src/components/SponsorStack.tsx:46-60](src/components/SponsorStack.tsx), [src/components/SponsorStack.tsx:79-84](src/components/SponsorStack.tsx), [src/types/sponsor.ts:26-27](src/types/sponsor.ts). The card is a text row, not a display banner, and there is no image creative beyond the logo.

**Click tracking**
- Client-side Vercel Analytics event: `track('Sponsor Click', { sponsor, placement, page: window.location.pathname })` — [src/components/SponsorLink.tsx:25](src/components/SponsorLink.tsx). The code comment calls this "the source for the monthly click report sponsors are promised" — [src/components/SponsorLink.tsx:13-17](src/components/SponsorLink.tsx).
- UTM tags on sponsor URLs (unless the sponsor URL already has `utm_source`): `utm_source=claudecodehq.com`, `utm_medium=sponsored`, `utm_campaign=<site-wide|category|tool-listing|directory>` — [src/lib/sponsors.ts:125-138](src/lib/sponsors.ts).
- Sponsor links go **directly** to the sponsor, not through a redirect. Affiliate links instead go through `/go/<partner>`, which logs a server-side `Affiliate Click` event before a 307 redirect. Its comment says logging there "counts clicks that ad blockers would hide" — [src/app/go/[partner]/route.ts:7-31](src/app/go/[partner]/route.ts), [src/lib/affiliates.ts:36-39](src/lib/affiliates.ts). So sponsor clicks are tracked less robustly than affiliate clicks, because ad blockers can suppress the browser-side event.
- Other events in the codebase: `Advertise Application`, `Newsletter Signup`, `Install Command Copy`, `Affiliate Click` — [grep `track('` over src/](src/).

**Impression tracking**
- None. There is no IntersectionObserver, no "impression" event and no view logging anywhere in `src/` (grep for `IntersectionObserver|Impression` matched only blog prose) — [grep over src/](src/). The only proxy is page views of the pages that carry the card, from Vercel Analytics.

**rel attributes**
- Sponsor links: `rel="sponsored noopener"`, `target="_blank"` — [src/components/SponsorLink.tsx:20-24](src/components/SponsorLink.tsx).
- Affiliate cards and in-content affiliate links: `rel="sponsored nofollow noopener"` — [src/components/SponsorStack.tsx:115](src/components/SponsorStack.tsx), [src/components/AffiliateLink.tsx:23](src/components/AffiliateLink.tsx).
- The public rule says: "Sponsored links carry rel="sponsored". We don't sell dofollow links, guest posts or link insertions." — [src/app/advertise/page.tsx:128](src/app/advertise/page.tsx).

**Stacking and exclusivity**
- "Stacked sponsor cards. Every sponsor that qualifies for the page is shown — no rotation, no exclusivity. Affiliate cards follow the paid ones to fill the slot." — [src/components/SponsorStack.tsx:62-66](src/components/SponsorStack.tsx).
- `getSponsorStack` loops over all sponsors with no cap. Order is site-wide, then category, then tool-listing, then alphabetical — [src/lib/sponsors.ts:62-92](src/lib/sponsors.ts), [src/lib/sponsors.ts:48](src/lib/sponsors.ts), [src/lib/sponsors.ts:117-123](src/lib/sponsors.ts). "Several sponsors can run at once — cards stack in this order" — [src/content/sponsors.ts:11-12](src/content/sponsors.ts).
- Affiliates fill the slot: up to 2 per page with no paid sponsor, 1 when any paid sponsor is present. Affiliates marked `competesWith` a sponsor on the page are hidden — [src/lib/affiliates.ts:5-6](src/lib/affiliates.ts), [src/lib/affiliates.ts:12-34](src/lib/affiliates.ts).
- Category sponsors are sold by **topic**, not by category. There are 9 sellable topics (TopicId), each grouping several of the 34 playbook categories — [src/types/sponsor.ts:1-12](src/types/sponsor.ts), [src/lib/sponsors.ts:5-42](src/lib/sponsors.ts).

**Scheduling: start and end dates**
- Placements turn on and off by date range, checked at render time — [src/lib/sponsors.ts:50-56](src/lib/sponsors.ts). Playbook pages (`revalidate = false`, "a page renders once per deployment ... never regenerated on a timer"), category pages (`revalidate = false`) and `/tools` (`revalidate = false`) all render once per deploy — [src/app/playbooks/[slug]/page.tsx:102-106](src/app/playbooks/[slug]/page.tsx), [src/app/categories/[category]/page.tsx:16-18](src/app/categories/[category]/page.tsx), [src/app/tools/page.tsx:8-10](src/app/tools/page.tsx). This contradicts the comment in `src/content/sponsors.ts` that "playbook, category and /tools pages ... regenerate daily" — [src/content/sponsors.ts:7-9](src/content/sponsors.ts). In practice a campaign starts and ends only with a redeploy.

**The "37,000" figure**
- It appears in exactly two places. (1) Hardcoded in the Site-wide plan bullet: `'Your card on every playbook and guide, about 37K page views a month'` — [src/app/advertise/page.tsx:111](src/app/advertise/page.tsx). (2) In the fallback audience stats `pageviews: '37.2K'` for `period: 'Aug 9 – Sep 8, 2026'`, "Last hand-checked against the dashboard on 2026-09-08" — [src/app/advertise/page.tsx:36-52](src/app/advertise/page.tsx). No `37,000` or `37000` string exists elsewhere in `src/`.
- The headline stat tiles on /advertise are live. They come from the Vercel Web Analytics API, queried hourly over a rolling 30-day window, with page revalidation every 30 min — [src/lib/vercel-analytics.ts:1-30](src/lib/vercel-analytics.ts), [src/app/advertise/page.tsx:13](src/app/advertise/page.tsx), [src/app/advertise/page.tsx:153-171](src/app/advertise/page.tsx). If `VERCEL_ANALYTICS_TOKEN` is set in production, the tiles should now read about 26.8K visitors / 49.1K page views (owner data), while the plan card still says "about 37K".
- The live `pageviews` figure is the sum over the country breakdown, i.e. **all site page views** — [src/lib/vercel-analytics.ts:110-122](src/lib/vercel-analytics.ts). The API caps grouped results at 100 rows plus "Others" — [src/lib/vercel-analytics.ts:30-31](src/lib/vercel-analytics.ts).
- Tier-1 is defined as US, GB, CA, AU, DE, NL, CH, SE, NO, DK, IE, NZ, AT, BE, FI, FR, IT, ES — [src/lib/vercel-analytics.ts:39-41](src/lib/vercel-analytics.ts). A code comment says "roughly a fifth of raw visitors (Singapore, China) are low-engagement datacenter traffic" — [src/lib/vercel-analytics.ts:33-38](src/lib/vercel-analytics.ts), [src/app/advertise/page.tsx:41-44](src/app/advertise/page.tsx).

**Pricing history**
- The advertise page was added on 2026-09-10 (commit `3cd8a18`). Every price string ($199, from $350, $500/mo, $900, "Founding rate", "37K page views") was introduced in that commit and has not changed since — [git log -S on src/app/advertise/page.tsx](src/app/advertise/page.tsx). Later commits: 2026-09-11 link to the tools directory, 2026-09-16 live Vercel numbers (two commits).
- The tools directory and stacked sponsor cards were added on 2026-09-11 (`64d7a59`). The affiliate slot went live on 2026-09-24 (`abf8398`, Fiscal.ai) — [git log on src/lib/sponsors.ts, src/content/affiliates.ts](src/lib/sponsors.ts).

### Inferences
- What each plan actually delivers, per code:
  - **Plan A, Tool Listing ($199/12 mo):** a `/tools` directory card plus a card in the stack on **every** category page whose categories map to the tool's topics. For a finance tool that is 7 category pages, not "the category page" (singular) the copy implies. It does **not** appear on playbook or blog pages, and the `/tools` page is currently `noindex` (see section 4).
  - **Plan B, Category Sponsor:** a stack card on every playbook in the topic's categories, on every blog post whose slug matches that topic's regex, and on the topic's category pages, plus a directory entry.
  - **Plan C, Site-wide Sponsor:** every playbook page, every internal blog post, every category page and the directory. It is not on the homepage, `/playbooks`, `/for/*` or `/blog`.
- "About 37K page views a month" is now both stale (owner data: 49.1K total) and the wrong basis. It is total site page views, but the card does not run on the homepage, browse, persona or listing pages. An advertiser auditing click-through rate against 37K would get a lower apparent rate than the real one on eligible views.
- No exclusivity, no cap and no impression logging limit what can honestly be sold: share-of-voice can't be guaranteed, and CPM can't be reported. Any premium for "exclusive" or "sole sponsor" status would need new code (a cap or exclusivity flag in `getSponsorStack`) plus impression logging.
- A paid sponsor cuts affiliate cards from 2 to 1 on every page it covers. That is a real opportunity cost on finance pages, where 3 approved affiliate programs are live (section 2). It is a floor input for pricing the Finance topic and Site-wide plans.

### Gaps
- Pixel position of the card on real devices (above or below the fold) is unverified, because the live site was unreachable. Screenshots at 390px and 1440px widths are needed.
- Whether production has `VERCEL_ANALYTICS_TOKEN` set, and so whether /advertise currently shows live or fallback numbers, can't be confirmed without the live page.

---

## 2. Inventory counts: categories, topics, playbooks, guides, tools, personas, noindex

### Takeaway
The site has **1,290 playbooks** in 34 categories, grouped into **9 sellable topics**, plus **118 internal guides**, **0 paid tools/sponsors** and **7 live affiliate programs** (out of 18 configured). There are **170 noindex playbooks** and **28 personas**. "Finance & investing" is the `finance` topic: 7 categories, **100 playbooks (7.8%)**, 96 indexable, plus **22 of 118 guides**.

### Cited Findings
- 1,290 playbook MDX files in `src/content/playbooks/` and 1,290 templates in `public/templates/` — [src/content/playbooks/](src/content/playbooks/), [public/templates/](public/templates/).
- 170 playbooks have `noindex: true` — [src/content/playbooks/*.mdx frontmatter](src/content/playbooks/). Noindex playbooks are left out of the sitemap — [src/app/sitemap.ts:164](src/app/sitemap.ts). They still render the SponsorStack, since the playbook page has no noindex condition around line 320.
- `src/lib/categories.ts` defines **34** category IDs across about 21 "vertical" labels. All 34 have at least 1 playbook, and all 34 map to a sponsor topic. CLAUDE.md's "9 categories across 7 verticals" is out of date — [src/lib/categories.ts](src/lib/categories.ts), [CLAUDE.md:23](CLAUDE.md).
- The advertise page states "{playbookCount}+ playbooks", rounded down to the hundred (`Math.floor(n/100)*100`, so "1,200+"), and "{guideCount} guides" = `internalBlogPosts.length` (118) — [src/app/advertise/page.tsx:149-150](src/app/advertise/page.tsx), [src/app/advertise/page.tsx:179-183](src/app/advertise/page.tsx).
- Internal blog posts: 118 entries in `src/lib/blog-internal.ts`, matching 118 page folders under `src/app/blog/` — [src/lib/blog-internal.ts](src/lib/blog-internal.ts). External blog entries (21 URLs in `src/lib/blog.ts`) link off-site and carry no sponsor card — [src/lib/blog.ts](src/lib/blog.ts).
- Paid sponsors and tool listings: **zero**. `export const sponsors: Sponsor[] = [];`. The only entry ever added was the commented `acme-research` example — [src/content/sponsors.ts:32](src/content/sponsors.ts), [git log -p src/content/sponsors.ts](src/content/sponsors.ts). The `/tools` page shows the "No tools listed yet. Make one of the first." empty state — [src/app/tools/page.tsx:60-70](src/app/tools/page.tsx).
- Personas: 28 entries in `src/lib/personas.ts` (researchers, developers, executives, startup-founders, students, operations-managers, marketers, hr-managers, writers, freelancers, consultants, finance-professionals, sales-professionals, data-analysts, product-managers, content-creators, executive-assistants, legal-professionals, project-managers, designers, healthcare-professionals, ecommerce, customer-support, equity-research-analysts, investment-bankers, private-equity, wealth-managers, traders) — [src/lib/personas.ts:18-289](src/lib/personas.ts).
- Affiliates: 18 configured, **7 live** (have `trackingUrl`): Fiscal.ai, ValuEdge, Intrinsiqq (finance); Paperpal, Jenni AI (academic-research); Gamma (consulting-strategy); Make (developer-tools, productivity) — [src/content/affiliates.ts:15-159](src/content/affiliates.ts). Because at most 2 show per page in list order, finance pages show Fiscal.ai + ValuEdge, academic pages show Paperpal + Jenni AI, consulting pages show Gamma, and productivity and dev-tools pages show Make. **Writing-content, legal, career-hr and health-wellness pages have no live affiliate, so no card renders there today** — [src/lib/affiliates.ts:16-34](src/lib/affiliates.ts).
- 20 blog posts use in-content `AffiliateLink` (43 usages), mostly finance comparison/how-to posts (koyfin-vs-fiscal-ai, stock-rover-vs-koyfin-vs-seeking-alpha, fmp-api-dcf-claude-code, etc.) — [src/app/blog/*/page.tsx](src/app/blog/).

**Playbooks by category** (counted from frontmatter `category`; share of 1,290)

| Category | Sponsor topic | Playbooks | Share | noindex |
|---|---|---:|---:|---:|
| marketing-content | writing-content | 196 | 15.2% | 4 |
| developer-tools | developer-tools | 183 | 14.2% | 19 |
| academic-research | academic-research | 139 | 10.8% | 63 |
| productivity | productivity | 83 | 6.4% | 13 |
| data-reporting | consulting-strategy | 77 | 6.0% | 22 |
| product-management | consulting-strategy | 50 | 3.9% | 0 |
| research-writing | academic-research | 44 | 3.4% | 13 |
| sales-revenue | consulting-strategy | 42 | 3.3% | 0 |
| market-research | consulting-strategy | 42 | 3.3% | 3 |
| operations-compliance | consulting-strategy | 40 | 3.1% | 0 |
| creative-design | writing-content | 39 | 3.0% | 11 |
| file-organization | productivity | 37 | 2.9% | 3 |
| legal-compliance | legal | 36 | 2.8% | 0 |
| finance-accounting | finance | 35 | 2.7% | 1 |
| project-management | consulting-strategy | 23 | 1.8% | 1 |
| communications | writing-content | 22 | 1.7% | 0 |
| executive-strategy | consulting-strategy | 21 | 1.6% | 1 |
| hr-recruiting | career-hr | 21 | 1.6% | 0 |
| finance | finance | 21 | 1.6% | 3 |
| media-production | writing-content | 15 | 1.2% | 0 |
| knowledge-management | productivity | 15 | 1.2% | 3 |
| personal-development | health-wellness | 15 | 1.2% | 3 |
| equity-research | finance | 11 | 0.9% | 0 |
| private-equity | finance | 10 | 0.8% | 0 |
| creative-writing | writing-content | 10 | 0.8% | 2 |
| career-development | career-hr | 10 | 0.8% | 1 |
| investment-banking | finance | 9 | 0.7% | 0 |
| task-management | productivity | 8 | 0.6% | 4 |
| trading-markets | finance | 8 | 0.6% | 0 |
| education | academic-research | 8 | 0.6% | 0 |
| customer-support | consulting-strategy | 6 | 0.5% | 0 |
| wealth-management | finance | 6 | 0.5% | 0 |
| bio-research | academic-research | 5 | 0.4% | 0 |
| note-management | productivity | 3 | 0.2% | 0 |
| **Total** | | **1,290** | 100% | **170** |

(Sources: frontmatter of [src/content/playbooks/*.mdx](src/content/playbooks/); topic mapping in [src/lib/sponsors.ts:5-42](src/lib/sponsors.ts). `slidev-presentations.mdx` is counted under developer-tools; its description contains `---`, which broke a naive frontmatter split.)

**By sellable topic (what a Category Sponsor buys)**

| Topic (TopicId) | Name on site | Categories | Playbooks | Share | Indexable | Internal guides matched* | Advertised share of page views** | Live affiliate cards today |
|---|---|---:|---:|---:|---:|---:|---:|---|
| consulting-strategy | Consulting & strategy | 8 | 301 | 23.3% | 274 | 19 | 7% | Gamma |
| writing-content | Writing, content & creative | 5 | 282 | 21.9% | 265 | 23 | 11% | none |
| academic-research | Academic research & education | 4 | 196 | 15.2% | 120 | 6 | 10% | Paperpal, Jenni AI |
| developer-tools | Developer tools | 1 | 183 | 14.2% | 164 | 10 | 4% | Make |
| productivity | Productivity & knowledge | 5 | 146 | 11.3% | 123 | 7 | not listed | Make |
| **finance** | **Finance, private equity & investing** | **7** | **100** | **7.8%** | **96** | **22** | **8%** | Fiscal.ai, ValuEdge (Intrinsiqq 3rd, not shown) |
| legal | Legal & compliance | 1 | 36 | 2.8% | 36 | 3 | not listed | none |
| career-hr | Career & HR | 2 | 31 | 2.4% | 30 | 3 | 4% | none |
| health-wellness | Health & wellness | 1 | 15 | 1.2% | 12 | 3 | 6% | none |
| (no topic: site-wide sponsors only) | | | 0 | | | 22 | | |

\* Blog slugs matched against the first-match regex rules in [src/lib/blog-audience.ts:15-44](src/lib/blog-audience.ts) (my replication of the regexes in Python). Posts that match no rule "get the generic copy and only site-wide sponsors" — [src/lib/blog-audience.ts:8-9](src/lib/blog-audience.ts).
\** Hand-maintained "approximate share of page views by topic" on /advertise. The comment says "Vercel has no notion of our topics and the API only returns the top 100 pages, so these stay hand-maintained" — [src/app/advertise/page.tsx:54-66](src/app/advertise/page.tsx). The listed shares sum to 50%, and the page says "The rest goes to the homepage, search and general guides" — [src/app/advertise/page.tsx:220-222](src/app/advertise/page.tsx).

- Finance topic categories: finance-accounting 35, finance 21, equity-research 11, private-equity 10, investment-banking 9, trading-markets 8, wealth-management 6 — [src/lib/sponsors.ts:14-17](src/lib/sponsors.ts). Finance personas: finance-professionals, equity-research-analysts, investment-bankers, private-equity, wealth-managers, traders — [src/lib/personas.ts:128-289](src/lib/personas.ts).

### Inferences
- Finance is the smallest premium topic by playbook count (100, 7.8%) but the most guide-heavy (22 of 118 guides, 19%). It also has the most affiliate monetization already live (3 programs plus 20 posts with in-content affiliate links). The $500/mo finance premium is backed by audience value and affiliate opportunity cost, not by page volume.
- Health & wellness is advertised at 6% of page views on only 15 playbooks and 3 guides. Developer tools is advertised at 4% on 183 playbooks. Both hand-maintained figures should be re-verified, because they don't line up with inventory size. That doesn't make them wrong: per-page traffic is very uneven.
- 63 of 196 academic-research topic playbooks (32%) are noindex, so that topic's real search-driven inventory is smaller than its count suggests.
- Four topics (writing-content, legal, career-hr, health-wellness: 364 playbooks, 28%) currently show no card at all. Those are the only pages where a sponsor would not displace live affiliate income.

### Gaps
- Per-page or per-topic page views are not in the repo. The topic shares are explicitly hand-maintained estimates with no stated date or method.
- The site's own topic labels may not be what a sponsor understands by "finance & investing". The code's definition is the 7-category `finance` topic above.

---

## 3. Uncovered page types, and what share of 49,100 page views is eligible

### Takeaway
Sponsor cards run only on `/playbooks/[slug]`, `/blog/[slug]` (internal) and `/categories/[category]`. The homepage, `/playbooks`, `/for/[persona]`, `/blog`, `/latest`, `/getting-started`, `/about`, `/tools` (directory only) and the API/MCP/CLI carry no stack. **ASSUMPTION:** about 55–75% of the 49,100 page views (about 27K–37K) land on eligible pages. The owner should replace that range with a path-filtered Vercel export.

### Cited Findings
- Files rendering `SponsorStack`: the playbook page, the category page and BlogPostLayout only — [src/app/playbooks/[slug]/page.tsx:320](src/app/playbooks/[slug]/page.tsx), [src/app/categories/[category]/page.tsx:124](src/app/categories/[category]/page.tsx), [src/components/BlogPostLayout.tsx:206](src/components/BlogPostLayout.tsx). There is no SponsorStack or Newsletter-sponsor code in `src/app/page.tsx`, `src/app/for/[persona]/page.tsx`, `src/app/blog/page.tsx`, `src/app/playbooks/page.tsx` or `src/app/latest/page.tsx` — [grep](src/app/).
- The plan copy promises "every playbook and guide" (Category and Site-wide) — [src/app/advertise/page.tsx:99](src/app/advertise/page.tsx), [src/app/advertise/page.tsx:111](src/app/advertise/page.tsx). In code, delivery also includes category pages, which is more than promised.
- 59% of visitors arrive from Google search (owner data). The live code computes the same metric as visitors whose referrer hostname matches `^google\.[a-z.]+$` — [src/lib/vercel-analytics.ts:43-44](src/lib/vercel-analytics.ts).
- The /advertise topic shares sum to 50%, with "the rest" attributed to homepage, search and general guides — [src/app/advertise/page.tsx:56-66](src/app/advertise/page.tsx), [src/app/advertise/page.tsx:220-222](src/app/advertise/page.tsx).

### Inferences
- **ASSUMPTION (eligible share):** Google-referred visits on a long-tail content site mostly land on deep pages (playbooks and guides), and only a little on the homepage. If about 59% of visitors arrive from Google landing mostly on deep pages, and direct/social/AI-referral visitors spread across homepage and browse pages, then **55–75% of page views on `/playbooks/[slug]` + `/blog/[slug]` + `/categories/*`** is a plausible range. That is roughly **27,000–36,800 eligible page views a month** on 49,100. Interestingly, the stale "37K" figure sits near the top of that range. The /advertise "topic" shares summing to 50% suggest the lower end is more realistic, if those shares are meant as playbook-plus-guide views.
- **ASSUMPTION (per-plan reach):** a Category Sponsor reaches only its topic's slice. If page views were proportional to the hand-maintained shares, Finance would get about 8% of total (about 3,900 page views a month) and Writing about 11% (about 5,400). These are illustrations, not data.
- **What the owner must export from Vercel Web Analytics (Sep 29–Oct 29, 2026, same window as the owner data):**
  1. **Pages report filtered by path prefix** `/playbooks/` (excluding the bare `/playbooks` browse page), `/blog/` (excluding `/blog`) and `/categories/`. Collect page views and visitors per prefix, so eligible views = the sum of the three. The API caps at 100 rows plus "Others" ([src/lib/vercel-analytics.ts:30-31](src/lib/vercel-analytics.ts)), so use the dashboard filter or CSV export, not the top-100 list.
  2. **The same filters × Country.** Eligible tier-1 page views, using the code's tier-1 list ([src/lib/vercel-analytics.ts:39-41](src/lib/vercel-analytics.ts)), and the share from Singapore/China datacenter traffic.
  3. **The same filters × Device** (mobile/desktop/tablet). The card sits below the header and seoHook, so mobile share drives how many views actually see it.
  4. **Referrers on eligible pages** (Google, ChatGPT/Perplexity/other AI, direct, social) to support the audience-intent claim.
  5. **Per-topic page views.** Either export page views for all `/playbooks/*` and `/blog/*` paths (CSV) and join slugs to category→topic with `src/lib/sponsors.ts` TOPICS and `src/lib/blog-audience.ts` rules, or add a Vercel custom event or route tag per topic. This replaces the hand-maintained topic shares.
  6. **Custom events:** `Affiliate Click` grouped by `partner` and `page` (server-side, so ad-blocker-proof). This is the only real click-through-rate benchmark for the exact card slot a sponsor would buy. Also `Newsletter Signup` by `source`, and `Advertise Application` by `placement` — [src/app/go/[partner]/route.ts:25](src/app/go/[partner]/route.ts), [src/components/Newsletter.tsx:52](src/components/Newsletter.tsx), [src/components/AdvertiseForm.tsx:45](src/components/AdvertiseForm.tsx).
  7. **Noindex playbook views.** Page views on the 170 noindex slugs, to show how much eligible inventory is not search-driven.

### Gaps
- No actual path-level page view data is available to me. Everything in "Inferences" on eligible share is assumption until the owner provides the exports above.
- Bot and datacenter traffic in the 49.1K figure is unquantified beyond the code comment's "roughly a fifth of raw visitors".

---

## 4. What /advertise publishes: stats, audience, card examples, sponsors, availability, CTAs, live sponsors and affiliates

### Takeaway
/advertise publishes live traffic tiles (visitors, page views, tier-1 share, Google share, period, growth), hand-maintained topic shares, a developer-fit warning, the three plans, a four-step process, honesty rules and an application form. **It shows no example or screenshot of the sponsor card, no current sponsors (there are none), no slot or availability count, no click-through rate or click data, no device split and no newsletter size.** CTA wording is "Apply" (plan buttons) and "Send application" (form). No paid sponsors are live. Seven affiliate programs fill the card slot.

### Cited Findings
- Stat tiles: "monthly visitors", "monthly page views", "from the US, UK, Canada, Australia & Western Europe", "arrive from Google search", with the caption "Vercel Analytics, {period}. {growth}." — [src/app/advertise/page.tsx:155-198](src/app/advertise/page.tsx).
- Intro: "Put your tool in front of people who use Claude to get real work done: researchers, consultants, analysts, writers and operators. 1,200+ playbooks and 118 guides, found mostly through search..." — [src/app/advertise/page.tsx:179-183](src/app/advertise/page.tsx).
- "What our readers come for": topic share bars (Writing 11%, Academic 10%, Finance 8%, Consulting 7%, Health 6%, Career & HR 4%, Developer tools 4%) — [src/app/advertise/page.tsx:56-66](src/app/advertise/page.tsx), [src/app/advertise/page.tsx:201-224](src/app/advertise/page.tsx).
- Fit warning: "Most of our readers aren't software engineers. If your product is built mainly for developers, we're probably not your best channel..." — [src/app/advertise/page.tsx:225-235](src/app/advertise/page.tsx).
- Plans (verbatim):
  - Tool Listing "$199 · one-time · 12 months", "For tools our readers can use alongside Claude.", "Listed in our tools directory with your logo, description and link / Featured on the category page that matches your tool / Labeled Sponsored, reviewed for fit before you pay".
  - Category Sponsor "from $350 · per month · 3-month minimum", "Reach the readers of one topic.", "Your card on every playbook and guide in one topic / Finance & investing: $500/mo / Monthly click report".
  - Site-wide Sponsor "$900 · per month · 3-month minimum", offer "Founding rate: $600/mo for your first 3 months", "Your card on every playbook and guide, about 37K page views a month / Every topic, including Finance & investing / Monthly click report", visually featured.
  - Source: [src/app/advertise/page.tsx:70-117](src/app/advertise/page.tsx).
- CTAs: each plan button reads **"Apply"** and anchors to `#apply` — [src/app/advertise/page.tsx:271-280](src/app/advertise/page.tsx). The form submit reads **"Send application"** ("Sending..." while loading), with "No payment now. You only pay after we confirm the fit." — [src/components/AdvertiseForm.tsx:132-141](src/components/AdvertiseForm.tsx). Form fields are name, email, tool name, tool URL, placement (Tool Listing / Category Sponsor / Site-wide Sponsor / Not sure yet) and description (min 20 chars), plus a honeypot — [src/components/AdvertiseForm.tsx:72-124](src/components/AdvertiseForm.tsx). There is also a mailto email alternative — [src/app/advertise/page.tsx:328-331](src/app/advertise/page.tsx). The card itself says "Advertise here" — [src/components/SponsorStack.tsx:81-83](src/components/SponsorStack.tsx).
- Process: "Apply — Takes two minutes. / We review fit — We reply within 3 business days, yes or no. / You pay — If it's a match, we send a payment link. / You go live — Within 5 business days of payment." — [src/app/advertise/page.tsx:119-124](src/app/advertise/page.tsx).
- Rules: Sponsored labeling, rel="sponsored", no dofollow/guest posts/link insertions, payment doesn't affect editorial, review before payment, no implied Anthropic endorsement — [src/app/advertise/page.tsx:126-132](src/app/advertise/page.tsx).
- Not published (absent from the file): any sample/mock of the card, a current sponsor list, slot count or availability ("X of Y slots"), click-through rate or historical clicks, device split, newsletter subscriber count, a media kit download, and what the "monthly click report" contains — [src/app/advertise/page.tsx](src/app/advertise/page.tsx) (full read).
- Live paid sponsors: none — [src/content/sponsors.ts:32](src/content/sponsors.ts). `/tools` is noindexed while empty: "An empty directory is a thin page — keep it out of the index until the first listing goes live" — [src/app/tools/page.tsx:13-21](src/app/tools/page.tsx). The footer "Tools" link is hidden while empty — [src/app/layout.tsx:119-123](src/app/layout.tsx).
- Live affiliates: 7 (listed in section 2), shown under the heading "Tools for this workflow" with an "Affiliate links" disclosure link — [src/components/SponsorStack.tsx:101-122](src/components/SponsorStack.tsx), [src/app/terms/page.tsx:67-70](src/app/terms/page.tsx). Affiliate terms noted in code comments: Fiscal.ai 25% for 12 months; ValuEdge 40% recurring; Intrinsiqq 25% for 12 months; Paperpal 30% one-time; Jenni AI up to 30%; Gamma via PartnerStack; Make 35% for 12 months — [src/content/affiliates.ts:47-158](src/content/affiliates.ts).

### Inferences
- Advertisers can't see what they are buying (no card mock-up) or how scarce it is (no slots). Since the code has no exclusivity or cap, "slots" would also be a policy choice, not a technical limit.
- The "Monthly click report" is backed only by a client-side `Sponsor Click` event. Its accuracy is below the affiliate redirect method already used in `/go/[partner]`, and there are no impressions to compute click-through rate from.
- "Featured on the category page that matches your tool" understates delivery for multi-category topics and overstates it in one way: listings sit in the stack after site-wide and category sponsors, so "featured" means "listed in the stack".

### Gaps
- What the live page actually shows today (live versus fallback numbers) is unverified, because the site was unreachable.
- I found no record of applications received. `/api/advertise` emails the owner via Resend, so the count lives in email and in the `Advertise Application` events.

---

## 5. Newsletter, MCP server and CLI as additional surfaces

### Takeaway
A newsletter signup exists in three places: footer site-wide, inline on every playbook, and inline on every guide with audience-matched copy. Subscribers go to a Resend audience. **No subscriber count appears anywhere in code**, so it can't be bundled credibly until the owner pulls the count from Resend and confirms sends happen. The MCP server and CLI carry no sponsorship today. Adding ads to machine-consumed tool output is a poor fit.

### Cited Findings
- `/api/subscribe` adds the email to a Resend audience (`RESEND_AUDIENCE_ID`). If that fails, it emails the address to the owner. A honeypot rejects bots — [src/app/api/subscribe/route.ts:1-80](src/app/api/subscribe/route.ts).
- Signup placements:
  - footer on every page — [src/app/layout.tsx:141](src/app/layout.tsx)
  - inline on playbook pages after the template viewer ("Get new playbooks like this one / One email a week with new Claude Code workflows. Free, like everything here.") — [src/app/playbooks/[slug]/page.tsx:333-339](src/app/playbooks/[slug]/page.tsx)
  - inline in blog posts with audience-matched headings, e.g. "New Claude workflows for {persona}, every week" — [src/components/BlogPostLayout.tsx:210-219](src/components/BlogPostLayout.tsx), [src/lib/blog-audience.ts:46-63](src/lib/blog-audience.ts)
- Signups fire `track('Newsletter Signup', { source })` — [src/components/Newsletter.tsx:52](src/components/Newsletter.tsx). The commit notes this was added "since the subscribe route only records source on its fallback path" — [git show 3cd8a18](src/components/Newsletter.tsx).
- No subscriber count, open rate or send history is in code. The only "subscribers" strings in `src/` are blog prose — [grep over src/](src/). The repo has no newsletter sending code; only list collection is implemented.
- MCP: the remote MCP server at `/api/mcp` exposes `search_playbooks`, `get_playbook` and `list_categories`, with the same data as `/api/v1` — [CLAUDE.md:41-45](CLAUDE.md), [src/lib/mcp.ts](src/lib/mcp.ts). No sponsor, affiliate or advertising code exists in `src/lib/mcp.ts`, `src/lib/api.ts` or `cli/` — [grep](src/lib/).
- CLI: the zero-dependency npm package `ccplaybooks` talks only to `/api/v1`. Response shapes are a "public contract: add fields freely, but rename or remove only in a new `/api/v2`" — [CLAUDE.md:47-53](CLAUDE.md).

### Inferences
- **Newsletter bundling:** possible in principle, because the signup infrastructure and audience segmentation by `source` exist. But without a subscriber count, a regular send cadence and open/click data, a newsletter slot can't be priced or promised. The owner needs from Resend: audience size, the growth trend, how many sends went out in the last 90 days, and open/click rates, broken down by signup `source` (playbook vs blog vs footer, and which topic).
- **MCP/CLI sponsorship:** technically you could add an optional `sponsor` field to `/api/v1` and MCP responses, since adding fields is allowed by the contract. But I'd advise against it. MCP tool output is read by an LLM agent, and promotional text in tool results looks like prompt injection, could be repeated to users without a "Sponsored" label, and undercuts the honesty rules on /advertise. At most, MCP/CLI usage counts could be cited as a reach or credibility signal, not sold as inventory. No usage metrics for `/api/mcp` or the CLI (npm downloads) are recorded in the repo.

### Gaps
- Newsletter subscriber count, send cadence and engagement: not in code. They must come from the Resend dashboard.
- MCP request volume and CLI npm download counts: not in the repo. They would come from Vercel function logs or analytics and the npm registry.
- The live site was not reachable from this session (proxy 403 / DNS not allowed), so I couldn't confirm any public subscriber claim on rendered pages.
