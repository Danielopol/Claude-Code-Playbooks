# SEO Skills: Ship SEO Fixes as Diffs, Not Audit PDFs

Use this when someone wants SEO work done inside their own repository: better titles, refreshed blog posts, internal links, comparison pages, a domain migration, de-slopped copy, a daily or weekly SEO routine, or a focused push to get one page into the top 3. Trigger phrases: "fix our titles", "refresh this post", "add internal links", "make a vs page", "we're moving domains", "run SEO for this repo".

Source: https://github.com/Illyism/seo-skills (MIT, by Ilias Ism). The original has 30 skills. This template condenses the core workflows. The repo is supported by sponsor products (LinkDR, AI SEO Tracker, Scribiz, Awesome Tools, SEO Roast), and some skills route work to them. Those are optional paid services. **Never send the user to a paid service, start a checkout, or use a coupon code without their explicit request.**

## Ground rules

- **End in something shippable.** A diff, a redirect map, a page, a file in `seo/`. Not a health score.
- **Never invent facts.** No made-up statistics, quotes, benchmarks, customer results or competitor claims. Every number traces to the user's data, the live site, or a cited source. Mark anything missing as `[NEEDS FACT]`.
- **Stay inside search engine rules.** No paid links passing ranking credit, link exchanges, keyword stuffing, doorway pages, or content published mainly to manipulate rankings. Google treats buying links and large-scale link schemes as spam. If the user asks for those, explain the risk.
- **Ask before outreach, submissions or anything public.** Draft emails and submissions to files. The user reviews and sends. Never submit forms, pay listing fees, or post on their behalf without explicit approval.
- **Edit minimally and show before/after.** For bulk changes, return a table. Don't change slugs or URLs unless asked, or unless the mismatch is clearly harmful (and then plan redirects).
- **Read project context first** if it exists (`.claude/project-context.md`, `seo/kb/brand-ssot.md`, the README, the pricing page).

## 1. Titles (`seo-title-optimization`)

Treat the search results page as the brief: find the target query, look at what ranks, then write the clearest title that matches the page and intent.

- Formula: **primary keyword + modifier or benefit + brand**. Example: `Client Portal Software for Accountants`.
- Primary query near the front; title, meta description, H1 and slug about the same topic; aim for 40 to 55 characters; every title unique; no `Home`, `About`, `Products`.
- Match the page type: pricing, docs, product, comparison, guide, pillar, definition, how-to, listicle, checklist, error fix. One pattern per page (for example `What Is [Term]?`, `How to [Task] Without [Obstacle]`, `[A] vs [B]: [Outcome]`, `[Number] Best [Tools] for [Audience] in [Year]`).
- Skip hype words (`Shocking`, `Guaranteed`) unless the results page uses them.
- Workflow: infer the keyword and intent, compare ranking titles if data is available, draft 3 to 5 options, pick one. Bulk output as `| Page | Current title | Suggested title | Why |`.

## 2. Refresh a post (`blog-refresher`)

Six phases, with an approval stop:
1. **Current state:** audit the post (accuracy, freshness, structure, intent match, links, media).
2. **Competitors:** read the top 5 to 10 results; audit 5 of them.
3. **Gaps:** rate each missing subtopic High (4+ competitors cover it), Medium (2 to 3), Low (1), or Emerging (nobody yet).
4. **Plan:** a new outline.
5. **Approval:** present the summary, findings, gap table and outline, then **wait** for approval.
6. **Write** the refresh with an SEO checklist, an FAQ where it helps, and updated facts.

## 3. Internal links to money pages (`internal-linking`)

Route traffic from high-traffic informational posts to pricing, use-case, comparison and tool pages.
1. Build the internal link graph and classify every page (money, support, informational).
2. Add links with these rules: at least one new money link in the upper 40% of the post; 2 to 4 new money links per post, at most one inline link per target per post; anchors of 3 to 7 descriptive words that say what the target does; vary anchors across the site (aim for at least 5 distinct anchors per target); keep internal links dofollow; edit minimally (wrap an existing phrase, or add one sentence that's useful on its own; never rewrite the paragraph).
3. Add contextual product callouts where they fit naturally.
4. Check hub, lateral and breadcrumb links.
5. Verify the links resolve and report what changed.

## 4. Comparison pages (`vs-and-alternatives`)

Mine real switching triggers from recent 1 and 2 star reviews (G2, Capterra, Trustpilot), GitHub issues, Reddit, and the competitor's own pricing and docs. A trigger goes on a page only if it's **recurring** (3+ independent complaints in 12 months), **current** (checked on the competitor's live pricing or docs today), **factual** (rewrite emotions as facts) and **sourced** (URL and check date stored).

`/vs/[competitor]` section order: H1 `[You] vs [X]: [the one-line difference]`; a 2-sentence verdict in the first 50 words (first when X wins, then when you win); a switching-trigger table with sources; pricing maths at the real units (for example 1, 5 and 25 seats); "Switch from X in 10 minutes" steps (only if true); **"Where X is the better choice" (mandatory, 3+ bullets)**; an FAQ from real buyer questions; one CTA tied to migrating. Be fair: a page that admits where the competitor wins is more credible.

## 5. Domain migration (`domain-migration`)

1. **Inventory every old URL:** the old sitemap, the repo route tree including generated slugs, Search Console pages with clicks or impressions in the last 16 months, URLs with backlinks, and analytics landing pages.
2. **Deterministic 1-to-1 redirect map** (301 or 308, one hop, final status 200). Ship the config for the user's host and a script that verifies every row.
3. **Cutover:** update the base URL so canonicals, Open Graph URLs and sitemap entries use the new origin; the new sitemap lists only new URLs; keep the old sitemap reachable for about 60 days; fix hreflang; update Organization schema; add a "formerly [old name]" line on About; verify both Search Console properties and use Change of Address for full domain moves.
4. **Keep the old domain registered with valid HTTPS and its redirects live permanently.**
5. Ask the sites linking to your top old URLs to update their links (drafts only; the user sends).
6. Monitor: zero failed redirects on day 1, and no spike in "blocked by robots.txt" or "noindex" exclusions.

## 6. Ground the copy (`unslop-seo`)

- **Mechanism over feeling:** replace "effortless", "enterprise-grade", "seamless" with what actually happens.
- **Competitor-swap test:** if a paragraph could appear unchanged on a competitor's site, rewrite it around a specific fact, number or capability, or delete it.
- **Name sources or drop the attribution:** never "experts believe" or "studies show" without a link.
- **Answer engines:** give the direct answer in the first 40 words; sentence-case headings, with some phrased as buyer questions; self-contained comparison blocks (best for, strengths, trade-offs, pricing).
- Report: what changed in the opening, headings, grounding (with open `[NEEDS FACT]` markers), and slop removed.

## 7. First-hand proof (`proof-kb`)

Keep a `seo/kb/` folder: a brand single source of truth (product mechanics, pricing, what you don't do), atomic proof files (benchmarks with method, raw numbers and a failure note; customer results; workflows), competitor claims to beat, and a proof-to-page index. Fill gaps by asking the founder 3 to 5 bounded questions. **Never invent proof.** When drafting, cover the consensus subtopics the top pages share in as few words as possible, then add proof no competitor has, and open with the sharpest real receipt.

## 8. One-page sprint (`blitz-seo`)

Pick **one** money keyword (three at most) where a page already sits around positions 5 to 20, ranking would directly drive revenue, and weaker competitors currently outrank you. Rewrite that page (keyword in H1, title, URL and meta; related phrases in subheadings; fast; visual proof; linked from the homepage and nav if possible). Then for 30 days: add internal links from older pages, make one on-page improvement based on the results page, share it where genuinely relevant, and log each change and the daily position.

Cautions to tell the user: the original suggests building 3 to 5 backlinks a day and resubmitting the page in Search Console daily. Resubmitting doesn't speed up ranking, and a sudden stream of acquired links can look like a link scheme. Earn links (outreach in section 10, useful tools, real coverage) and don't buy them. Not suitable for brand-new domains or keywords without revenue.

## 9. Ongoing routine (`seo-autopilot`)

Keep state in `seo/`.
- **Daily:** health check every sitemap URL (non-200s, redirect chains, missing tags); fact check pages against recent commits (prices, plans, limits, features); ship one thing from the backlog.
- **Weekly:** push queries at positions 8 to 20 with real impressions toward page 1; make real fixes to existing pages; confirm every sitemap URL is indexed and fix causes; check how AI assistants answer your buyers' questions; diff competitors' sitemaps; write a short report (what shipped, what moved).
- **Monthly:** rebuild the keyword map starting from buyers; publish only articles worth writing (up to 12); fair comparison pages; one free tool people already search for; draft a few personal outreach pitches.

## 10. Honest outreach (`honest-link-outreach`)

Target a page that ranks (never a homepage). Route by relationship (partner, customer, cold editorial) and contact role. **No direct link swaps.** Ask first, reward second. Vary the structure of every email so the batch doesn't read as a template. 3 to 6 sentences each, no flattery, no buzzwords. Write the batch to `seo/outreach-batch-YYYY-MM-DD.md` with a SEND/CUT table and reasons. **The user reviews and sends.**

## Other skills in the original (not condensed here)

`intro` (blog intros), `blitz-copy` and `understand-customers` (copywriting), `customer-journey` and `diff-marketing` (marketing from git changes), `seo-roast` (a teardown that ends in a fix PR), `reddit-serp` (Reddit threads already ranking), `seo-blog-images`, `youtube-seo`, `block-ai-scrapers`, `directory-submissions`, `parasite-and-pr` (press release and syndication bundle), and the data or sponsor-service skills (`ahrefs-research`, `dataforseo-serp`, `aiseotracker`, `ai-seo-report`, `content-coverage`, `scribiz`, `awesome-tools`, `linkdr`). Install from the repo for those, and treat the paid-service ones as optional.
