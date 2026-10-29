# Sponsor economics and packaging norms for ClaudeCodeHQ.com (advertiser-side benchmarks)

> **Method note (read first):** In this session WebFetch was blocked by the network allowlist (ethicalads.io, carbonads.net, business.daily.dev and developers.google.com all failed DNS resolution). Every figure below comes from **search-result excerpts** of the cited pages, not from a full read of the page. The URLs are the pages the search engine attributed each excerpt to. Treat exact numbers as "reported by source, not page-verified." Most developer-ad benchmarks are published by vendors that sell those ads (Carbon, daily.dev, EthicalAds, agencies), so they are directional, not audited.
>
> Site inputs used in the inferences (from the assignment brief): ~26,800 monthly visitors, 49,100 monthly page views (~1.83 PV/visit), 48% US/UK/CA/AU/W. Europe, 59% from Google search. Offers: $199 / 12-month tool listing, $350–$500/mo category sponsor card (3-month minimum, per the site's own advertise page), $900/mo site-wide sponsor card.

## 1. CTR for native / sponsor-card placements on developer sites

### Takeaway
Published developer-network CTRs range from about **0.12% (EthicalAds network average)** to **0.8–2.1% (Carbon's own "typical" claim)**. Generic native ads run about 0.13–0.6% and Google Display about 0.17–0.46%. For a fixed sponsor card on a niche directory, a defensible scenario set is roughly **0.12% conservative / ~0.4–0.5% base / ~1.5% optimistic**. No source publishes a CTR for directory "featured" slots or GitHub README sponsors.

### Cited Findings
- EthicalAds' advertiser guide reports a network-wide average display-ad CTR of about **0.12%**, and says the best-performing ads do more than 3x better. The period isn't stated. — [EthicalAds Developer Advertising Guide](https://www.ethicalads.io/advertiser-guide/)
- EthicalAds published an Oct 2024 analysis of ad performance by conversion action (signup vs product page vs homepage). The search excerpt didn't include the rates. — [EthicalAds blog, Oct 2024](https://www.ethicalads.io/blog/2024/10/ad-performance-by-conversion-action-do-developers-like-ebooks/)
- Carbon's media kit cites a "typical" CTR of **0.8%–2.1%**. This is a vendor claim with no stated methodology. — [Carbon Ads media kit](https://www.carbonads.net/media-kit)
- Carbon's BuySellAds listing claims a "6.4x CTR vs. Industry Standard" with no baseline defined. — [BuySellAds: Carbon](https://discover.buysellads.com/carbon)
- In a July 2026 blog post, Carbon itself argues that a high CTR "almost never" means a better ad and recommends measuring outcomes beyond clicks. — [Carbon Developer Advertising Guide 2026](https://www.carbonads.net/blog/developer-advertising-guide-2026) (attributed via search summary; the exact post URL wasn't confirmed)
- An old, anecdotal Carbon campaign write-up (roughly 2019, about 2,500 days old) reports CTR falling from above 1% to **0.39%** by the end of a $1,575 campaign, with an average **CPC of $0.87**. — [Medium: Advertising for Developers with Carbon Ads](https://medium.com/@the_fln/advertising-for-developers-with-carbon-ads-our-detailed-experience-8ec14004d6cd)
- daily.dev's May 2026 benchmark (vendor): Google Display CTR **0.25–0.35%**, X Ads CTR **0.8–1.2%**, and "in-IDE ads and developer content platforms" up to **2.5%** CTR. — [daily.dev: Developer Paid Media Benchmarks 2026](https://business.daily.dev/resources/developer-paid-media-benchmarks-2026-cpm-cpc-ctr-by-channel/)
- Generic native-ad CTR benchmarks:
  - Advertisers on one agency's platform typically see **0.13%–0.38%**. — [Gourmet Ads](https://www.gourmetads.com/articles/what-is-a-good-click-through-rate/)
  - Open-web native runs **0.30%–0.60%** (MGID, 2026). — [Osmos native benchmarks 2026](https://www.osmos.ai/blog/native-advertising-retail-media-benchmarks-2026)
  - Desktop native is **0.16%** vs display **0.11%**, and mobile native **0.38%**. — [Search Engine Land](https://searchengineland.com/native-advertising-new-marketing-workhorse-263071) (date unclear, probably older)
  - Single-creative native campaigns average **0.20%**, while campaigns rotating multiple variations reached **0.75%** (Polar data). — [Brax](https://www.brax.io/blog/click-through-rate-an-essential-ingredient-to-determining-native-ads-engagement) (older data)
- Google Display CTR fallback figures conflict, and neither source states a year: **0.46%** — [Storegrowers](https://storegrowers.com/google-ads-benchmarks/); **0.17%** — [Online Marketing Gurus](https://www.onlinemarketinggurus.com.au/?p=5691)
- Direct comparator: claudemarketplaces.com says it delivers about **1,700 server-measured clicks per sponsor per month** at $1,499/mo, with public analytics and a cap of 8 slots (self-reported). — [Claude Code Marketplaces: Advertise](https://claudemarketplaces.com/advertise)
- claudemarketplace.net, a separate domain, claims **2,000+ clicks/month** for $1,299/mo with 5 slots. — [claudemarketplace.net/advertise](https://www.claudemarketplace.net/advertise)

### Inferences
- **(Assumption)** A site-wide card shown once per page view gives about **49,100 impressions/mo**. Real viewable impressions will be lower because of below-the-fold placement, ad blockers and bots. No viewability source was found.
- Site-wide card ($900/mo) click scenarios at 49,100 impressions:
  - Conservative, 0.12% (EthicalAds average): **~59 clicks**
  - Base, 0.5% (top of generic native, bottom of Carbon's claimed range): **~246 clicks**
  - Optimistic, 1.5% (mid-range of Carbon's claimed 0.8–2.1%): **~737 clicks**
- **(Assumption)** Category traffic share is unknown. If one category gets 5% / 10% / 15% of page views, a category card gets about **2,455 / 4,910 / 7,365 impressions/mo**. At 0.12% / 0.5% / 1.5% CTR on the 10% case, that's about **6 / 25 / 74 clicks/mo**.
- Competitors claim roughly **1,700–2,000 clicks per sponsor per month**. Reaching that on 49,100 PV would need a CTR of about 3.5–4%, well above any published developer-network benchmark. Either those sites have much more traffic, rotate sponsors through high-prominence slots, or count clicks generously. Buyers who have seen those pages will compare clicks.
- Contextual relevance (for example, a card for an MCP tool on MCP playbooks) is the strongest argument for being at the high end. No source quantifies that uplift for directories.

### Gaps
- No published CTR for directory "featured" listings, for GitHub README sponsor logos, or for Stack Overflow or daily.dev placements specifically. daily.dev's "up to 2.5%" is a vendor range, not a measured average.
- No WordStream Technology-vertical display CTR for 2025 could be confirmed. The Technology **search** CTR of 2.09% in one table has an unknown year. — [Storegrowers](https://storegrowers.com/google-ads-benchmarks/)
- The best baseline is the site's own data: instrument card impressions and clicks (server-side redirect counts) before quoting CTR to buyers.

## 2. Developer-audience CPC/CPM benchmarks and cost per signup

### Takeaway
Developer CPMs on contextual networks run about **$2–$10** (Carbon lists a $6 baseline). Social and display CPMs for developer audiences run about **$20–$45**. Paid-search CPCs for developer keywords are reported at **$25–$80** (vendor claim) against about $5.42 for the all-industry Google average. LinkedIn costs about **$5.74–$15 CPC** and Reddit **$0.44–$3**. Cost per developer signup is cited at **$40–$90** (LinkedIn) and "under $70" (one Google remarketing case). Median devtool CAC is about **$248**. These numbers imply that an advertiser can justify roughly **$2–$6 per click** from a mid-funnel placement.

### Cited Findings
- **Carbon:**
  - Media kit and comparison pages list a **$6 CPM** for developer audiences and $5 CPM for creators, as a baseline. — [Carbon media kit](https://www.carbonads.net/media-kit)
  - Recommends a minimum of 1M impressions/mo; the comparison page cites a **$5,000/mo minimum**. — [Carbon vs EthicalAds](https://www.carbonads.net/compare/carbon-ads-vs-ethicalads)
  - Its 2026 guide says typical CPMs run **$2–$10** depending on placement and targeting. — [Carbon 2026 guide](https://www.carbonads.net/blog/developer-advertising-guide-2026)
  - IDLEN describes Carbon as CPC-priced with a $5,000–$10,000/mo starting budget, which conflicts with Carbon's CPM listing. — [IDLEN playbook](https://www.idlen.io/blog/developer-ad-network-playbook/)
  - A developer-ads guide puts Carbon's typical CPM at **$2–5**. — [IDLEN pricing guide](https://www.idlen.io/blog/cpm-cpc-cpa-developer-advertising-pricing-guide/)
- **daily.dev (vendor, May 2026):**
  - Google Display CPM **$20–$40**; X Ads CPM **$25–$45**.
  - CPCs for developer-specific search keywords **$25–$80** vs general B2B **$2.50–$7**.
  - LinkedIn **$8–$14 CPC**; Reddit about **$0.44 CPC**, which it says suits awareness more than conversions.
  - Stack Overflow ads are sold through sales, with no public rates.
  - Sources: [daily.dev benchmarks 2026](https://business.daily.dev/resources/developer-paid-media-benchmarks-2026-cpm-cpc-ctr-by-channel/); [daily.dev developer ads pricing](https://business.daily.dev/resources/developer-ads-pricing-options-best-channels/)
- **Google Ads, all industries:** WordStream's 2025 average CPC was **$5.42** (up from $4.66), based on 16,000+ campaigns, with an average conversion rate of 8.18%. — [Search Engine Land](https://searchengineland.com/google-ads-costs-rising-but-conversion-rates-improved-in-2025-477927)
  - Martech.zone reports **$5.26** for search and display combined. — [Martech.zone](https://martech.zone/online-ad-benchmarks)
  - Display CPC is commonly cited at **$0.63**, year unclear. — [Sender.net](https://www.sender.net/marketing-glossary/cost-per-click-cpc/statistics/)
- **LinkedIn:**
  - Average Sponsored Content CPC is reported at **$5.74** (2026); another source cites **$8–$15** for developer audiences. — [Adlyse 2026 benchmark](https://adlyse.com/articles/2026-paid-media-benchmark-report); [Silverback 2026](https://silverbackmarketing.com/resources/2026-paid-media-benchmark-report)
  - One 2026 guide gives DevTools LinkedIn ads a CPC of **$9–12**, a cost per free-trial signup of **$40–$90**, and a cost per paid conversion of **$500–$1,500**. — [OptimizeLinkedInAds: LinkedIn Ads for DevTools](https://www.optimizelinkedinads.com/blogs/linkedin-ads-for-devtools)
- **Reddit:** median CPC **$1.25** (cross-platform). — [Stackmatix](https://www.stackmatix.com/blog/reddit-ads-cpc-cpm-benchmarks)
  - Tech/developer subreddits average about **$1.80** (range $1–3). — [Benly](https://benly.ai/learn/reddit-ads/reddit-ads-cost-benchmarks)
  - Developer subreddits run **$5–$15 CPM**. — [Understory](https://www.understoryagency.com/blog/cpm-benchmarks-optimization)
- **Cost per signup and CAC:**
  - Hackmamba reports a cost per developer signup **under $70** for one vector-database client using Google remarketing (single case). Its model divides CPC by an assumed landing-page conversion rate of **3–8%**. — [Hackmamba: PPC for developer tools](https://hackmamba.io/developer-marketing/ppc-for-developer-tools/)
  - Median devtool CAC is about **$248** with a 9.4-month payback. — [SaaS Hero](https://www.saashero.net/strategy/market-devtools-to-developers/)
  - Channel CAC table, methodology unclear: community/OSS ~$45, content/docs ~$85, Google Ads ~$180, **paid sponsorships ~$200**, conferences ~$250. — [Anar Agency](https://anaragency.com/sector-saas-devtools/) (attribution from search summary; the two agency pages may be swapped)
- **Keyword-specific CPCs** ("AI coding assistant", "code review tool", "MCP server", "Claude Code"): no published figures found. The tooling to get them is Google Keyword Planner or the Semrush Keyword Overview (API access requires a paid plan). — [Semrush blog: Claude Code SEO](https://www.semrush.com/blog/claude-code-seo/)

### Inferences
- **Effective CPM** of the site-wide card: $900 / 49.1k PV = **~$18.3 CPM**. That is about 3x Carbon's $6 baseline, but inside the $20–$45 range daily.dev gives for developer-targeted display and social.
- **Effective CPM** of a category card, using the 5–15% category-share assumption: $350–$500 on 2,455–7,365 impressions = **~$48–$204 CPM**. That is well above any network benchmark, so it needs an intent and exclusivity justification (see Q5).
- **Effective CPC**, site-wide card, at the Q1 click scenarios: about **$15.3 (conservative) / $3.66 (base) / $1.22 (optimistic)**.
- **Effective CPC**, category card at $350, 10% share: about **$58 / $14 / $4.70**.
- Comparison points: the Carbon anecdote is $0.87 CPC, claudemarketplaces claims $0.88/click, and Reddit runs $0.44–$1.80.
- **Advertiser value per click (assumption-driven):** at a target cost per signup of $40–$90 and visitor-to-signup conversion of 3–8%, break-even CPC is about **$1.20–$7.20**. Midpoint: $70 × 5% = **$3.50**.
  - The base-case site-wide CPC ($3.66) sits roughly at break-even.
  - The conservative case is 2–4x too expensive on a pure-performance basis.
  - Category cards only clear break-even near the optimistic CTR or with high-share categories.
- **Pricing heuristic:** an old blog rule ("daily uniques ÷ 10" as a monthly fee per ad) gives 26,800/30 ≈ 893 daily uniques → about **$89/mo per ad slot**. This suggests $900/mo is priced for intent and exclusivity, not raw traffic. — [Yaro Starak](https://yaro.blog/how-much-should-you-charge-for-advertising-on-your-blog/) (date unknown, likely older)

### Gaps
- No verified CPCs for the named Claude Code and MCP keywords. The report should flag this rather than estimate.
- No EthicalAds CPM figure was retrievable (fetch blocked).
- The X/Twitter CPC for developer targeting was not found separately from daily.dev's CPM/CTR range.

## 3. Likely buyers advertising to Claude Code users and evidence of sponsorship activity

### Takeaway
The clearest evidence is that **Claude-Code-specific directories already sell sponsor slots at $899–$1,499/mo and claim high fill**. claudemarketplaces.com showed 1 of 8 slots left at $1,499. The buyer list is plausible but thinly evidenced: Supabase is a confirmed 2026 Latent Space sponsor, and Warp appears as a sponsor in older AI Engineer event credits. No sponsor rosters for cursor.directory or awesome-claude-code were found.

### Cited Findings
- claudemarketplaces.com:
  - **$1,499/mo** single sponsor slot, ~1,700 clicks/sponsor/mo, max 8 sponsors, "1 of 8 slots left" at time of search.
  - Self-computed ~$0.88/click vs a claimed ~$8,900 Google Ads equivalent (self-reported).
  - Booking happens through a cal.com call.
  - Sources: [Advertise page](https://claudemarketplaces.com/advertise); [cal.com booking](https://cal.com/claudemarketplaces/advertise)
- Other Claude- and AI-tool directories:
  - claudemarket.ai: placements "from **$899/mo**." — [claudemarket.ai/advertise](https://claudemarket.ai/advertise)
  - crossaitools.com: **$1,499/mo**. — [Cross AI Tools](https://crossaitools.com/advertise)
  - claudemarketplace.net: **$1,299/mo**, 5 slots. — [claudemarketplace.net](https://www.claudemarketplace.net/advertise)
- ClaudeLog's Awesome Claude Code page listed "Your Logo" / "Your Link" placements at **$100** each. The page was about 432 days old, so the price may have changed. — [ClaudeLog](https://claudelog.com/claude-code-mcps/awesome-claude-code/)
- ClaudeCodeHQ's own advertise page, as indexed: $199 one-time for 12 months; category sponsors **from $350/mo with a 3-month minimum**; site-wide $900/mo; "Labeled Sponsored, reviewed for fit before you pay." — [claudecodehq.com/advertise](https://www.claudecodehq.com/advertise)
- Latent Space:
  - Reopened for sponsors in 2026 (business@latent.space); about 201K–203K subscribers.
  - **Supabase** sponsored a late-September 2026 issue (its Oct 2 event).
  - Sources: [Latent Space: The Future of Latent Space](https://www.latent.space/p/ainews-the-future-of-latent-space); [newsletterinsights](https://newsletterinsights.io/newsletter/latent-space/media-kit)
- **Warp, Datadog, Sourcegraph, Stripe, Fireworks** appear as sponsor-credit providers for an older AI Engineer event (about 636 days old). — [ai.engineer: Latent Space](https://ai.engineer/orgs/latent-space)
- TLDR (budget anchor for the same buyer pool): derived, not quoted, estimates of **$11,000–$17,000 per TLDR AI send**, $3,000–$9,000 for mid-sized TLDR lists, and $16,000–$24,000 for the TLDR Tech primary slot. Max 3 sponsor placements per issue; about 1.1M readers claimed. — [sponsorships.ai: TLDR advertising cost](https://sponsorships.ai/blog/tldr-advertising-cost); [readless TLDR AI review](https://www.readless.app/newsletters/tldr-ai)
- Carbon's 2026 guide frames the developer ad landscape as IDE ads, CLI ads, AI placements, newsletters and contextual networks. This suggests in-tool placements (for example, "Claude Code Ads," which pays developers "while your AI thinks") are emerging competitors for the same budgets. — [Carbon 2026 guide](https://www.carbonads.net/blog/developer-advertising-guide-2026); [claudecodeads.com](https://www.claudecodeads.com/)

### Inferences
- Comparable Claude Code directories anchor buyer expectations at **$900–$1,500/mo for one sponsor slot**. ClaudeCodeHQ's $900 site-wide price is at the low end, but buyers will compare clicks delivered (1,700–2,000 claimed elsewhere) against ClaudeCodeHQ's likely 60–740.
- Likely buyers for a $350–$900/mo budget are small AI devtool startups, MCP and agent-infra vendors, Claude Code GUIs and wrappers, and course sellers, rather than Vercel or Supabase-scale firms. The larger firms buy TLDR or Latent Space at $10k+ per send. This is an inference; there's no direct evidence of who buys sub-$1k directory slots.
- Finance and trading tools: no evidence was found of them sponsoring Claude Code directories.

### Gaps
- No sponsor list for cursor.directory, awesome-claude-code (GitHub) or TLDR AI's AI coding sponsors.
- No published sponsorship budgets for AI coding startups.

## 4. Packaging and psychology norms on small niche sites

### Takeaway
Successful indie examples use **hard slot caps, published scarcity ("1 of 8 left"), public or live stats, self-serve checkout, and step-up pricing after each sale**. Marc Lou's TrustMRR is the cleanest case: 20 capped slots, $299 → $1,499 escalation, sold out in days. OpenAlternative shows that direct sales lift effective CPM from about $0.50 (AdSense) to $30+. No source quantifies whether a 3-month minimum hurts first-time conversion.

### Cited Findings
- **TrustMRR (Marc Lou, late 2025):**
  - Initial ad spots listed at **$299/mo**, with the price raised after each sale up to **$1,499**. All spots sold within about 3 days. — [Marc Lou newsletter: I vibe-coded $330K in 9 months](https://newsletter.marclou.com/p/i-vibe-coded-330k-in-9-months); [Promptway](https://promptway.com/blog/marc-lou-24-hour-app)
  - Capped at **20 sponsorships**. 12 display on all pages and **rotate every 10 seconds** "like Times Square." — [Marc Lou on X](https://x.com/marc_louvion/status/1984689116949188903/photo/3)
  - "20/20 spots filled… $0 → **$18,380 MRR** in 5 days." — [Marc Lou on X](https://x.com/marclou/status/1985288683084447983)
  - Earlier running total of $16,881 MRR. — [Marc Lou on X](https://x.com/marc_louvion/status/1985257946159432149)
  - Launch traffic was "35k visitors in 16 hours," so this was a hype-launch context, not steady state. — [Marc Lou on X](https://x.com/marclou/status/1984237385899458902)
  - A third-party directory now lists the side-panel spot "from $399 for 7 days," suggesting the offer changed to weekly. This wasn't verified on TrustMRR's own site. — [launchdirectories.com](https://launchdirectories.com/directory/trustmrr)
- **OpenAlternative (Piotr Kulpinski):**
  - About **$6,500/mo** from about 70,000 monthly visitors. Ads and sponsorships are about 65% of revenue, and featured listings make up the rest at **$197/mo per project**. — [Dirstarter case study](https://dirstarter.com/blog/openalternative-case-study)
  - Moved from about **$200/mo on AdSense to about $3,000/mo from 8 direct advertisers**, with effective CPM rising from about **$0.50 to $30+**. — [Dirstarter case study](https://dirstarter.com/blog/openalternative-case-study)
  - TrustMRR shows **$7,396 / last 30 days** (Stripe-verified). — [TrustMRR: OpenAlternative](https://trustmrr.com/startup/openalternative)
- **Other directory price points** (asking prices, no sales data):
  - Postmake: **$199** promoted listing for one month, including a newsletter feature. — [Postmake](https://postmake.io/submit)
  - Bidspot: $79 and $149 per week recurring sponsorships, a $999 one-time "Hall of Fame" tier, and a pitch against "$100–$300+" fixed-fee directories. — [TrustMRR: Bidspot](https://trustmrr.com/startup/bidspot1)
  - Plug Your Build: $3.99/mo listing, $14.99/mo featured. — [Fazier](https://fazier.com/launches/plug-your-build)
  - Indie Hackers warns that prices "will likely creep up in the near future," using anticipatory scarcity. — [Indie Hackers ads](https://indiehackers.com/product/indie-hackers/promote-your-business-to-75-000-entrepreneurs--NWAAyRCgiBFt2kn1uWn)
- **Pricing-adjustment rules of thumb:**
  - Raise prices when slots sell out quickly; lower them after 1–2 months unsold. — [Yaro Starak](https://yaro.blog/how-much-should-you-charge-for-advertising-on-your-blog/)
  - A sustained sponsor repeat rate above 60% over a rolling 3 months signals underpricing. — [Newsletrix pricing guide](https://newsletrix.com/blog/newsletter-sponsorship-pricing-guide)
- **Defined slots:** each slot should have a name, position, size and price. "Sponsors buy defined things; they negotiate about undefined ones." — [adsly.io: monetize a blog](https://adsly.io/monetize/blog)
- **Ad fit:** reject off-topic or overly salesy ads to protect the audience; Indie Hackers' ad guidelines are cited as the model. — [Salesfully](https://www.salesfully.com/single-post/niche-platform-real-revenue-how-to-sell-ads-for-your-online-community-or-forum)
- **Multi-week commitments** help renewals because sponsors can refine messaging over time. Transparent post-campaign reporting (impressions, clicks) is the main renewal lever. — [Letterhead: sponsorship packages guide](https://www.tryletterhead.com/blog/newsletter-sponsorship-packages-guide.html); [Revenews](https://www.revenews.co/p/increase-newsletter-renewal-rate)
- **Public stats:** claudemarketplaces.com advertises "server-measured clicks, public analytics" and live slot availability as part of its pitch. — [Claude Code Marketplaces](https://claudemarketplaces.com/advertise)

### Inferences
- **3-month minimum:** no evidence either way on conversion impact. TrustMRR and claudemarketplaces sell monthly, and TrustMRR may now sell weekly. A first-time buyer with no CTR proof faces a $1,050–$1,500 commitment. A common middle ground (an inference, not sourced) is to let month 1 be cancellable, or offer a 1-month trial at a premium alongside a 3-month discounted rate.
- **Scarcity:** cap slots explicitly (for example, 1 site-wide and 1 per category) and show "X of Y available." Both successful comparators do this.
- **Rotating vs fixed:** rotation (TrustMRR) increases sellable inventory but divides impressions. At 49k PV, rotating several sponsors would push per-sponsor clicks below credible levels. A fixed, exclusive slot is easier to defend.
- **Step-up pricing** is a documented tactic: a founding price for the first buyers, raised as slots fill or traffic grows. TrustMRR is the documented case.

### Gaps
- No quantified A/B evidence on minimum commitments, founding discounts or CTA wording ("Apply" vs "Buy now") for sponsor checkout.
- No source compared self-serve checkout (Stripe, Lemon Squeezy, Gumroad) with apply-first approval on conversion. claudemarketplaces uses a cal.com call; ClaudeCodeHQ uses "reviewed for fit before you pay."
- No posts by Rob Hope, Dan Kulkov or Justin Jackson with sponsorship numbers surfaced in the searches run.

## 5. Is "price per 1,000 page views" meaningful, and how do niche directories justify flat fees? (paid links)

### Takeaway
Effective CPM is a useful **sanity check** (direct-sold niche inventory realistically clears $18–$30+ eCPM vs about $0.50 AdSense and about $6 Carbon). Flat fees above that need to be justified by **intent, exclusivity, contextual fit and brand association, not backlinks**. Google requires paid links to carry rel="sponsored" or nofollow, and such links pass little or no ranking value. "SEO/backlink value" therefore shouldn't be sold.

### Cited Findings
- Google's spam policy: paid links don't violate its rules if qualified with **rel="nofollow" or rel="sponsored"**. — [Google Search spam policies](https://support.google.com/webmasters/answer/66358?authuser=0)
- Google's "Qualify your outbound links" doc tells site owners to mark ads and paid placements with **rel="sponsored"**. — [Google Search Central: Qualify outbound links](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links)
- Google's 2021 link spam update post: sites that fail to qualify paid or affiliate links may face **manual or algorithmic actions**. — [Google Search Central blog, July 2021](https://developers.google.com/search/blog/2021/07/link-tagging-and-link-spam-update)
- SEO analysis: sponsored and nofollow links pass "little to zero PageRank." Google's stated aim is to stop counting such links, so enforcement is mostly by discounting rather than penalizing. — [eSEOspace](https://eseospace.com/blog/google-link-spam-policy/); [Sistrix on the 2021 update](https://www.sistrix.com/blog/google-link-spam-update-july-2021/)
- Directory listings sold on "dofollow backlink" claims exist in the market (for example, PublishYourSaaS's "permanent dofollow backlink"), which conflicts with Google's guidance. — [Product Hunt: PublishYourSaaS](https://www.producthunt.com/products/publishyoursaas-list-your-saas-today/makers)
- Effective-CPM evidence for direct sales:
  - OpenAlternative went from about $0.50 to $30+ eCPM after moving to direct advertisers. — [Dirstarter](https://dirstarter.com/blog/openalternative-case-study)
  - Carbon's $6 CPM baseline. — [Carbon media kit](https://www.carbonads.net/media-kit)
- Niche premium: B2B tech and finance blogs reportedly command **2–5x** higher sponsorship rates than lifestyle blogs, and $150–$500 per sponsored post for 5,000–20,000 monthly visitors. These are asking prices. — [howtofindsponsorshipopportunities.com](https://howtofindsponsorshipopportunities.com/blog/how-much-to-charge-for-sponsorship/)

### Inferences
- **Price per 1,000 PV** (site-wide $900 ÷ 49.1 = **~$18.3**) is a meaningful diagnostic because it puts the offer next to Carbon ($6) and direct-sold niche sites ($30+). It understates value if traffic is high-intent: 59% arrives from Google search for specific workflow queries.
- **Flat-fee justification** should rest on:
  - exclusivity (one sponsor per category or site)
  - contextual relevance to the playbook topic
  - audience geography (48% high-income markets)
  - brand association with the Claude Code ecosystem
  - transparent reporting
- Under Google policy, sponsor links must be rel="sponsored". Claiming SEO or backlink value would be misleading and creates manual-action risk for the site. The $199 listing should be framed as discoverability and referral traffic, not link equity.

### Gaps
- No published study quantifies the "intent premium" for directories vs generic CPM.
- The Google pages couldn't be fetched to quote exact current wording or last-updated dates.

## 6. Renewal and churn rates for monthly sponsorships and annual listings

### Takeaway
No authoritative renewal data exists for website or directory sponsorships. Newsletter proxies cluster around **~50–60% rebooking**, with outlier anecdotes above 90%. Results and reporting are the main drivers.

### Cited Findings
- Average sponsor rebooking rate for "high-converting newsletters" is cited as **61.4%** (attributed to Paved; methodology not verified, and the sample is filtered to high performers). — [VoxBooster newsletter stats 2026](https://voxbooster.com/blog/newsletter-sponsorship-statistics-2026/)
- One writer says a **50%** renewal rate can be "good," citing an estimated 80% campaign failure rate. — [Dan Barry, Medium](https://medium.com/@danbarry_40316/increase-your-renewal-rate-for-newsletter-sponsors-e8f2b8ef722e)
- A creator case study claims **92%+** sponsor renewals, with one sponsor renewing 97% of the time (single anecdote). — [Edupreneur.ing](https://www.edupreneur.ing/p/how-to-get-92-newsletter-sponsor-renewal-rates-even-with-a-small-list)
- A repeat rate above 60% over 3 months indicates underpricing. — [Newsletrix](https://newsletrix.com/blog/newsletter-sponsorship-pricing-guide)
- TrustMRR's verified-revenue tracking of OpenAlternative ($7,396/30 days vs $6,183 MRR) implies a stable recurring base, but it doesn't disclose churn. — [TrustMRR](https://trustmrr.com/startup/openalternative)

### Inferences
- **(Assumption)** For scenario modelling, monthly sponsor retention of about **50% (conservative) / 60% (base) / 75%+ (optimistic)** after the initial commitment is consistent with the newsletter proxies above. This is not directory-specific evidence.
- Annual $199 listings have no published renewal benchmark. Model them conservatively, and note the price is about **$16.6/mo** equivalent.

### Gaps
- No directory-specific churn data, and no published renewal rates for annual listings.
- Marc Lou's TrustMRR sponsor retention after month 1 wasn't found.
