# Sell proof first: resetting ClaudeCodeHQ's sponsor prices

ClaudeCodeHQ should keep the **$199 Tool Listing as it is**, cut the **Category Sponsor to $150/month ($250 for Finance & investing)** and cut the **Site-wide Sponsor to $600/month, with a $450 founding rate for the first three months**. All three should bill monthly, with a 10% discount for prepaying three months, and the 3-month minimum should go. The current Category and Site-wide prices are too high for a site that has **never had a paid sponsor**, cannot count a single card impression, and can only estimate how many page views carry a card. On a base case of about 29,500 card-bearing page views and a 0.5% click-through rate, today's $900 site-wide card works out to about **$6 per click**. The Claude Code directories advertisers will compare it with claim **$0.40–$0.88 per click**, though those figures are self-reported. A $350–$500 category card works out to **$18–$25 per click**. The Tool Listing will sell first: it is the cheapest ticket and it looks like the one-time listings AI-tool marketers already buy. The site-wide card has the most revenue potential in year one, and the nine category slots have the highest ceiling once tracking proves click-through. The brief assumes a developer audience, but the site's content is not built for developers: developer tools are **14% of 1,290 playbooks**, and the /advertise page itself tells developer-tool vendors to look elsewhere. Pricing and outreach should therefore aim at AI writing, research, productivity and finance tools, especially the seven affiliate partners already earning on the site. The single most urgent fix is the plan copy's **"about 37K page views a month"**. That figure is total site page views from August 9 to September 8, 2026, not card-bearing views. It should be replaced with a measured, path-filtered count and a one-line note explaining the change.

> **Confidence warning: no competitor price in this report is high confidence.** The research session's network blocked direct page fetches of every competitor site and of the Wayback Machine. Every competitor price comes from search-engine extracts of the cited pages, not from reading the live page. The best grade available is "medium" (an official page's text as surfaced by search), and many rows are "low" (third-party only, conflicting or dated). **Open each cited URL in a browser and screenshot it before quoting any competitor price or traffic figure to an advertiser.** ClaudeCodeHQ facts come from the repository at HEAD `cfd055c` and from the owner's Vercel numbers. The live site could not be fetched either.

## 1. Executive summary: keep the listing, cut the sponsorships, publish real reach

**Three prices to charge today (Model B, chosen in Section 5).** The **Tool Listing** should stay at **$199 one-time for 12 months**, with a $149 founding price for the first 10 listings. The **Category Sponsor** should be **$150/month for standard topics and $250/month for Finance & investing**, billed monthly with one sponsor per topic, or $405 / $675 if three months are prepaid. The **Site-wide Sponsor** should be **$600/month for a single slot**, with a $450/month founding rate for the first three months, billed monthly, or $1,620 if three months are prepaid.

These sit where the evidence clusters for similar-sized sites. Small AI-tool directories with a published top slot charge **$349–$499 a month**: aitoolsdirectory.com, which third-party data puts at about 18.8K monthly visits, charges $499 per 30 days for its exclusive top-left homepage slot ([aitoolsdirectory.com](https://aitoolsdirectory.com/ads)), and AI Tools HQ charges $349 for its top tier ([AI Tools HQ](https://www.ai-tools-hq.com/sponsors/)). The only published category-sponsorship rates are **$200 to $600 a month**, and the two sites with traffic figures, both MCP directories, claim roughly 8 to 60 times ClaudeCodeHQ's reach ([Glama](https://glama.ai/advertise); [mcpservers.org](https://mcpservers.org/advertise)).

| Current plan | Verdict | Why | Change now |
|---|---|---|---|
| **A: Tool Listing, $199 one-time, 12 months** | **Reasonable** | $16.58/month amortized, far below the $99 median for recurring featured listings. The ticket sits between the $43 median one-time listing and the $470 median one-time premium package among comparables. Delivery is weaker than the copy implies: the card shows on category pages only, never on playbook or guide pages, and /tools is noindexed and empty ([sponsors.ts](../src/lib/sponsors.ts); [tools page](../src/app/tools/page.tsx)) | Keep $199; add $149 founding for the first 10; say "all N category pages in your topic"; index /tools once 3+ listings are live |
| **B: Category Sponsor from $350/mo; Finance $500/mo; 3-month minimum** | **Too high (about 2x)** | A topic gets roughly 2,500–5,400 page views a month, based on hand-maintained shares that have not been verified. At base CTR that is about 20 clicks for roughly $18–$25 each, and a first commitment of $1,050–$1,500 | $150 standard / $250 finance, billed monthly; exclusive per topic |
| **C: Site-wide $900/mo; founding $600 for 3 months; 3-month minimum; "about 37K page views"** | **List price too high; founding rate reasonable; minimum and reach claim wrong** | $900 is about $30.55 CPM and $6.11 per click in the base case. Tier 1 rivals at $899–$1,499 claim 1,700–2,000 clicks per sponsor, which ClaudeCodeHQ cannot match. The 37K figure is stale and measures the wrong thing | $600 list, $450 founding, billed monthly; reach quoted as card-bearing page views |

**Which plan sells first:** the Tool Listing. Its $199 ticket compares with first commitments of $1,050–$2,700 under the current sponsorship minimums. It looks like the one-time listings that AI-tool marketers buy at There's An AI For That ($49–$437) and Futurepedia ($247–$497) ([TAAFT](https://theresanaiforthat.com/launch/); [Futurepedia](https://www.futurepedia.io/submit-tool)). It also needs no click-through proof. **Which plan has the most revenue potential:** in the base model below, the single site-wide slot brings in about **55% of year-one revenue** (about $5,000 of $9,025). The nine category slots have the highest ceiling, up to about $17,400 a year at list price, but only after click-through data justifies them.

**What to change immediately.** First, replace "about 37K page views a month" with a measured count of views on playbook, guide and category pages. Until that export exists, the copy should read: "Sponsor cards run on our playbook, guide and category pages. Those pages account for an estimated 55–75% of our 49.1K monthly page views (Vercel, Sep 29–Oct 29, 2026)." A short dated note should explain that the earlier 37K figure was total site page views for August 9 to September 8, 2026. Second, route sponsor clicks through a server-side redirect, as affiliate links already do, and start logging viewable impressions. Third, cap inventory at one site-wide sponsor and one sponsor per topic, and show real availability alongside a mock-up of the card. Then re-price as above, and pitch the seven live affiliate partners before anyone else.

## 2. Competitive landscape: Claude-branded directories set the expectation, AI-tool directories set the realistic price

There are two different kinds of comparables. **Tier 1 direct competitors** are Claude Code and AI-coding directories. They share ClaudeCodeHQ's keyword and buyer pool, but they serve developers. **Broader comparables** are general AI-tool directories, MCP and agent directories, indie launch directories, AI newsletters and developer ad networks. That split matters more here than usual because ClaudeCodeHQ is not mainly a developer site. In the inventory, marketing-content alone is **15.2% of 1,290 playbooks** against **14.2% for developer-tools**, and consulting-strategy is the largest sponsor topic at **23.3%** ([playbook frontmatter](../src/content/playbooks/)). The site's own pitch agrees: /advertise says "Most of our readers aren't software engineers. If your product is built mainly for developers, we're probably not your best channel" ([advertise page](../src/app/advertise/page.tsx)).

So the Tier 1 sites' $899–$1,499 rates reflect a developer audience that ClaudeCodeHQ mostly lacks. The closer audience match is the general AI-tool directories and the AI newsletters read by non-engineers, where non-developer AI-tool marketers already spend.

The ranked shortlist weighs four things: audience overlap, size similarity, product similarity, and how believable the published terms are. Every traffic figure is the vendor's own claim unless marked third-party. Every "slots left" message is treated as marketing, not proof of demand. The three Tier 1 rate-card sites and crossaitools.com share an almost identical template ("1 of 8 left", share of voice, same-day go-live), which looks like copied monetization pages ([claudemarketplaces.com](https://claudemarketplaces.com/advertise); [crossaitools.com](https://crossaitools.com/advertise)).

| Rank | Competitor (tier) | Advertising model and prices (status) | Claimed reach | Why comparable / limits |
|---|---|---|---|---|
| 1 | **claudemarket.ai** (Tier 1) | One site-wide slot "from $899/mo", no lock-in, 8 slots; guide link placements and sponsored posts priced by quote (search extract, low–medium) ([source](https://claudemarket.ai/advertise)) | 26K–55K depending on page (self-reported) | Claude-branded, mixes directory and guides like ClaudeCodeHQ, closest claimed size; developer audience; inconsistent claims |
| 2 | **claudemarketplaces.com** (Tier 1) | $1,499/mo slot, max 8 sponsors, server-measured clicks, ~1,700 clicks per sponsor and ~$0.88 CPC claimed, 0.36% featured CTR on 1.2M impressions (medium) ([source](https://claudemarketplaces.com/advertise)) | 300K+ visitors / "380,000+ developers" (self-reported) | The benchmark buyers will quote back. Its own numbers conflict: 1.2M × 0.36% ≈ 4,300 clicks, far below 8 × 1,700 |
| 3 | **claudemarketplace.net** (Tier 1) | $1,299/mo, 5 slots, ~2,000 clicks, $0.40–$0.75 CPC stated (low–medium) ([source](https://www.claudemarketplace.net/advertise)) | 150K+ (self-reported) | Same name on a different domain, possibly a clone; same buyer pool |
| 4 | **ClaudeLog** (Tier 1) | Tiered sponsorship and CPC/CPM ads, contact only; current sponsor Nimbalyst; a $100 "Your Link" snippet (low) ([sponsor](https://claudelog.com/sponsor/); [advertise](https://claudelog.com/advertise/)) | Not published | Closest content format (Claude Code guides); no usable prices |
| 5 | **aitoolsdirectory.com** (Tier 2) | $99 fast track; $299 / $399 / $499 per 30 days, top slot exclusive (medium) ([source](https://aitoolsdirectory.com/ads)) | ~18.8K (third-party Similarweb) | Best size match with a published rate card; general AI-tool audience |
| 6 | **AI Tools HQ** (Tier 2) | Listings from $49/mo; Verified Sponsor $199/mo with newsletter mention; top tier $349/mo; one sponsor per slot (medium) ([source](https://www.ai-tools-hq.com/sponsors/)) | 20K+ (self-reported, inconsistent) | Size match; exclusivity model |
| 7 | **AI Agents List** (Tier 2) | $29–$119/mo packages; $49–$99/week units (medium) ([source](https://aiagentslist.com/sponsor)) | 25K visitors / 40K page views (submit page) vs 50K+ (sponsor page) | Closest claimed page-view count; same-size price check |
| 8 | **There's An AI For That** (Tier 2) | $49 and $437 one-time; $99/mo Highlight; newsletter main slot $7,900/issue on Passionfroot (medium; newsletter low) ([source](https://theresanaiforthat.com/get-featured/); [Passionfroot](https://www.passionfroot.me/taaft)) | 3.5M+ self-reported vs ~785K–3.7M third-party | Where non-developer AI-tool marketers spend listing budgets; 30–100x larger |
| 9 | **Futurepedia** (Tier 2) | $247 Basic (marked sold out); $497 Verified one-time (medium) ([source](https://www.futurepedia.io/submit-tool)) | Conflicting third-party (~61K to 5.0M) | Anchors the one-time premium listing price |
| 10 | **OpenAlternative** (Tier 2) | $147 / $297 / $597 monthly ads; $197/mo featured listing (medium) ([source](https://openalternative.co/advertise)) | ~220K visitors / ~900K page views (self) vs ~70K / 275K (case study) | Best-documented direct-sales case: 8 direct advertisers ≈ $3K/mo; ~$6.2K MRR on TrustMRR ([case study](https://dirstarter.com/blog/openalternative-case-study); [TrustMRR](https://trustmrr.com/startup/openalternative)) |
| 11 | **mcpservers.org** (Tier 2) | Category sponsor from $600/mo, exclusive; network $500; featured $2,500 capped at 3; $39 premium submit (medium) ([source](https://mcpservers.org/advertise)) | 208K visitors / 2.1M page views (self-reported) | The clearest exclusive category-sponsorship structure; ceiling, not peer |
| 12 | **Glama** (Tier 2) | $200/mo shared category card; $49/mo boost; "Ad" label plus `rel="sponsored"` (medium) ([source](https://glama.ai/advertise)) | 1.6M self vs ~221.6K third-party (low) | A category product with the same labeling ethic as ClaudeCodeHQ |
| 13 | **AI Agents Directory** (Tier 2) | One-time $19–$499 packages; sponsored content $149 / $249 / $699 (medium) ([source](https://aiagentsdirectory.com/sponsor)) | 50K+ self vs ~22.7K/mo third-party | Size match; sponsored-content pricing |
| 14 | **Ben's Bites** (Tier 3) | $2,500 main ad, $1,800 tool slot per send, one of each per send (medium) ([source](https://ads.bensbites.com/)) | ~140K subscribers, 37% open | Non-developer AI audience; ceiling for attention-based budgets |
| 15 | **EthicalAds** (Tier 3) | AI/ML CPM $4.60 run-of-network, $7.50 in US/UK/CA/AU/NZ/IE, $1,000 minimum, Q4 2026 (medium) ([source](https://www.ethicalads.io/advertisers/pricing/)) | Network | The impression floor a small advertiser can buy elsewhere |

There is one business signal here. cursor.directory's founder says ads and listings earn **$35K+ a month** on 295K unique visitors ([X post](https://x.com/pontusab/status/1966470564601835963)). The claudemarketplaces.com builder says $8K+ MRR across their indie work ([seorobotai.com](https://seorobotai.com/)). Both are self-reported. Neither tells you what a 26.8K-visitor knowledge-work site can charge.

## 3. Complete pricing database: 184 competitor products across 92 sites

The full database is saved as **`/home/user/Claude-Code-Playbooks/reports/ClaudeCodeHQ advertising pricing benchmark.csv`**. It has 189 rows: **184 competitor products from 92 competitors**, plus 5 reference rows for ClaudeCodeHQ's current plans, tagged "Reference – not a competitor" so they can be filtered out. It uses the 27 requested columns plus one helper column, "Report comparison group", which maps each row to a table in Section 4 so the statistics can be reproduced.

The rows are built only from the research notes. Each row records a verification status:

| Status | Rows |
|---|---|
| Official-page search extract | 120 |
| Third-party only | 30 |
| Derived estimate | 1 |
| Undisclosed | 33 |

No row is marked as page-verified, and confidence never exceeds medium. Weekly prices and time-boxed windows are also converted to a 30-day equivalent "if run continuously". That conversion is arithmetic, not a price anyone quoted.

Prices that appear as ranges, or with conflicting sources, use the lower bound in the "Price USD" column, and the Notes column says so. Two EUR-priced newsletters (Next.js Weekly and Adventures in Nodeland) are not converted, because the notes contain no exchange rate, so they are left out of the USD statistics.

## 4. Pricing comparison tables: one-time listings are cheap, exclusive monthly slots cluster near $500

Each table separates Tier 1 direct competitors from broader comparables, and counts how many rows are official-page extracts, third-party, estimates or undisclosed. Quartiles appear only where at least eight priced rows exist. "Verified" counts are zero throughout because no page was opened.

### 4a. Standard and expedited directory listings: the median one-time listing costs $43

| Segment | n priced | Min | P25 | Median | P75 | Max | Extract / third-party / estimate / undisclosed |
|---|---|---|---|---|---|---|---|
| Tier 1 direct | 0 | – | – | – | – | – | 0 / 0 / 0 / 0 |
| Broader comparables | 36 | $14.99 | $29 | **$43** | $52 | $299 | 26 / 10 / 0 / 2 |

The Claude Code directories do not sell basic listings. Listing there is free, and they make their money from sponsorships ([claudemarketplaces.com about](https://claudemarketplaces.com/about)). Across AI, MCP and launch directories, a one-time listing or skip-the-queue fee buys speed, a badge or a "dofollow" link. Examples are mcpservers.org at $39 ([source](https://mcpservers.org/submit)), Toolify at $99 ([source](https://submitator.com/submit-to-toolify)) and Uneed's $14.99 fast track ([source](https://help.uneed.best/getting-started/uneed-pro)).

Limitations: prices have changed often. Several roughly doubled between late 2025 and late 2026, for example Toolify from $49 to $99 and Easy With AI from $50 to $125 ([Simon Frey](https://simon-frey.com/blog/where-to-list-your-ai-tool-what-directories-are-worth-it/)). The $299 maximum (AI Tools Club) is a third-party report that a blogger called "insane" for the traffic.

ClaudeCodeHQ's $199 is a 12-month featured placement, not a skip-the-queue fee, so the better comparison is the next two tables.

### 4b. Featured and premium listings: about $99 a month buys featured placement

| Segment | n priced | Min | P25 | Median | P75 | Max | Extract / third-party / estimate / undisclosed |
|---|---|---|---|---|---|---|---|
| Tier 1 direct | 0 | – | – | – | – | – | 0 / 0 / 0 / 1 (aitmpl.com) |
| Broader (30-day equivalent) | 30 | $9.99 | $49 | **$99** | $277 | $1,281* | 25 / 5 / 0 / 2 |

\*The maximum comes from rebuying a 7-day homepage feature every week (Easy With AI, $299 per 7 days) ([source](https://easywithai.com/featured-listing/)). Seven-day featured windows actually sell as $229–$299 one-off tickets ([TopAI.tools](https://topai.tools/submit)).

Recurring featured listings cluster at **$49–$99 a month**. Examples are Glama at $49 ([source](https://glama.ai/advertise)), SaaSHub at $99 ([source](https://www.saashub.com/featured)) and MCPBundles at $99 ([source](https://www.mcpbundles.com/sponsorship)). OpenAlternative's $197 category highlight sits on a site with roughly 3 to 18 times more traffic, depending on which of its figures you trust ([source](https://dirstarter.com/blog/openalternative-case-study)).

Limitations: "featured" means different things on different sites (homepage, category or search), and none of these sites publishes click reports.

### 4c. Annual and one-time premium placements: the median ticket is $470

| Segment | n priced | Min | Median | Max | Extract / third-party / estimate / undisclosed |
|---|---|---|---|---|---|
| Tier 1 direct | 0 | – | – | – | 0 / 0 / 0 / 0 |
| Broader comparables | 7 | $199 | **$470** | $999 | 6 / 1 / 0 / 1 |
| ClaudeCodeHQ Plan A (reference) | – | – | $199 | – | – |

The sample includes TAAFT's $437 launch package with a guaranteed newsletter spot ([source](https://theresanaiforthat.com/launch/)), Futurepedia's $497 Verified listing ([source](https://www.futurepedia.io/submit-tool)), Chatbot Gallery's $470 a year for a featured listing ([source](https://chatbot.gallery/advertise)), AiAgents.computer's $199 and $399 annual listings ([source](https://aiagents.computer/)), and AI Agents Directory's $499 "Ecosystem Partner", discounted from a $999 list price ([source](https://aiagentsdirectory.com/sponsor)). ClaudeCodeHQ's $199 for 12 months is at the bottom of this range, which is why it is reasonable. The sample is too small for quartiles, and two of the rows depend on auto-applied launch discounts.

### 4d. Category sponsorships: only three published prices exist, $200 to $600

| Segment | n priced | Min | Median | Max | Extract / third-party / estimate / undisclosed |
|---|---|---|---|---|---|
| Tier 1 direct | 0 | – | – | – | 0 / 0 / 0 / 0 |
| Broader comparables | 3 | $200 | **$200** | $600 | 3 / 0 / 0 / 1 (AI Agent Index) |
| ClaudeCodeHQ Plan B (reference) | – | $350 | – | $500 | – |

Glama charges **$200 a month per category**, with advertisers in the same category rotating evenly and cards carrying `rel="sponsored"` ([source](https://glama.ai/advertise)). AiAgents.computer charges **$200 for a standard category** and more for high-traffic ones ([source](https://aiagents.computer/partners)). mcpservers.org charges **from $600 for an exclusive category**, with two categories already shown as taken ([source](https://mcpservers.org/advertise)). Glama claims about 1.6M monthly visits and mcpservers.org 2.1M page views; AiAgents.computer publishes no traffic. That makes ClaudeCodeHQ's $350–$500 the highest category price in the sample, almost certainly on the smallest audience. This is the weakest-evidenced table in the report: n = 3, and no Tier 1 site sells a category product at all.

### 4e. Site-wide and homepage sponsorships: Tier 1 asks $899–$1,499, same-size peers ask about $430

| Segment | n priced | Min | P25 | Median | P75 | Max | Extract / third-party / estimate / undisclosed |
|---|---|---|---|---|---|---|---|
| Tier 1 direct | 3 | $899 | – | **$1,299** | – | $1,499 | 3 / 0 / 0 / 1 (ClaudeLog) |
| Broader comparables (30-day equivalent) | 32 | $29 | $185 | **$321** | $524 | $9,999 | 27 / 5 / 0 / 4 |
| Size-matched top slots (≤50K visitors claimed or estimated) | 3 | $349 | – | **$429** | – | $499 | 3 / 0 / 0 / 0 |
| ClaudeCodeHQ Plan C (reference) | – | $600 founding | – | – | – | $900 | – |

The size-matched row covers aitoolsdirectory.com's $499 exclusive top slot, AI Tools HQ's $349 top tier, and AI Agents List's $99-a-week banner, which works out to about $429 a month if run continuously ([sources](https://aitoolsdirectory.com/ads); [AI Tools HQ](https://www.ai-tools-hq.com/sponsors/); [AI Agents List](https://aiagentslist.com/sponsor)). Several other site-wide units sit near $500, but those sites publish no traffic, so they are not in the size-matched row: MCPBundles Hero at $499 ([source](https://www.mcpbundles.com/sponsorship)), MCP Stack's site-wide unit at $497 (low confidence) ([source](https://mcp.harishgarg.com/sponsor)), and OpenAlternative Platinum at $597 ([source](https://openalternative.co/advertise)).

At the top of the range, BetaList sells one exclusive sponsor at $4,999 a month ([source](https://betalist.com/advertise)). TrustMRR shows step-up pricing: Marc Lou started its spots at $299 and raised the price after each sale to $1,499, and all 20 sold within days of a launch that drew 35K visitors in 16 hours ([newsletter](https://newsletter.marclou.com/p/i-vibe-coded-330k-in-9-months); [X](https://x.com/marclou/status/1985288683084447983)).

Limitations: every Tier 1 price comes with scarcity claims that have not been checked, and with traffic that the sites report themselves.

### 4f. Newsletter sponsorships: a per-send median of $1,275 that ClaudeCodeHQ cannot yet use

| Segment | n priced (USD) | Min | P25 | Median | P75 | Max | Extract / third-party / estimate / undisclosed |
|---|---|---|---|---|---|---|---|
| Tier 1 direct | 0 | – | – | – | – | – | 0 / 0 / 0 / 0 |
| Broader comparables | 22 | $79 | $775 | **$1,275** | $2,500 | $20,000 | 14 USD + 2 EUR / 8 / 1 / 12 |

Small lists sell slots for **$79–$249 an issue**: aitrally charges $79 ([source](https://aitrally.com/advertise)), Uneed $249 on 20K–26K subscribers ([source](https://www.uneed.best/advertise)), and Dev Leader Weekly $200–$1,000 on about 9,400 subscribers ([source](https://www.devleader.ca/newsletter-sponsorship)). Ben's Bites charges $2,500 for its main ad on about 140K subscribers, roughly $17.86 per 1,000 subscribers ([source](https://ads.bensbites.com/)).

ClaudeCodeHQ collects signups through Resend, but **no subscriber count, send history or open rate exists anywhere in the code**. A newsletter slot cannot be priced or promised until the owner pulls those numbers ([subscribe route](../src/app/api/subscribe/route.ts)). TLDR prices are dated third-party figures with low confidence, and most large AI newsletters now quote on request.

### 4g. Sponsored articles and other formats: content runs $149–$2,000, network CPMs $3–$7.50

| Segment | n priced | Min | Median | Max | Extract / third-party / estimate / undisclosed |
|---|---|---|---|---|---|
| Sponsored articles/links, Tier 1 | 1 | $100 | $100 | $100 | 0 / 1 / 0 / 2 (claudemarket.ai link and post) |
| Sponsored articles, broader | 4 | $149 | **$474** | $2,000 | 4 / 0 / 0 / 0 |
| CPM ad networks (per 1,000 impressions) | 6 | $1.00 | **$5.30** | $7.50 | 6 / 0 / 0 / 0 (+1 undisclosed, ClaudeLog) |
| Other (podcast, membership) | 2 | $25/mo | – | $2,500/wk | 2 / 0 / 0 / 4 |

AI Agents Directory sells a blog mention for $149, an announcement post for $249 and an agency-written article for $699 ([source](https://aiagentsdirectory.com/sponsor)). Laravel News lists a sponsored post at $2,000, and ran it at $500 during a summer sale ([source](https://laravel-news.com/sponsored-post)).

Among display networks, EthicalAds sells AI/ML impressions at **$4.60–$7.50 CPM** ([source](https://www.ethicalads.io/advertisers/pricing/)), Carbon at **$6 CPM** with a recommended ~1M impressions a month ([source](https://carbonads.net/more-info)), and Claude Code Ads, which shows text in the terminal spinner, from **$1 CPM** bids ([source](https://www.claudecodeads.com/)). Stack Overflow requires a minimum spend of $10,000–$15,000 a month ([source](https://stackoverflow.co/advertising/policies/)). ClaudeCodeHQ already rules out guest posts and link insertions ([advertise page](../src/app/advertise/page.tsx)). Google treats paid links without `rel="sponsored"` or `nofollow` as link spam ([Google](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links)). So **no ClaudeCodeHQ product should be sold on SEO or backlink value.**

## 5. Recommended price list: three coherent models, and why the balanced one wins

### Current plans against the recommendation

| Product | Current | Recommended now (Model B) | Change | Main evidence | Benefit | Risk |
|---|---|---|---|---|---|---|
| Tool Listing | $199 one-time / 12 months | **$199 / 12 months; $149 founding for first 10** | Price kept; copy and delivery fixed | One-time premium median $470; featured median $99/mo; $199 ≈ $16.58/mo | Low-friction first sale; fills /tools so it can be indexed | Low revenue per sale; directory looks thin until about 5 listings |
| Category Sponsor | From $350/mo; Finance $500; 3-month minimum | **$150/mo standard; $250/mo Finance; monthly; 3 months prepaid $405 / $675** | −57% / −50%; minimum removed | Category comps $200–$600 on sites claiming ~8–60x the traffic; topic reach ~2.5K–5.4K page views | First commitment falls from $1,050 to $150 | Base CPC still ~$7.64 at $150, so contextual CTR has to beat the average |
| Site-wide Sponsor | $900/mo; $600 founding for 3 months; 3-month minimum | **$600/mo; $450 founding for first 3 months; monthly; 3 months prepaid $1,620** | −33% list; −25% founding; minimum removed | Size-matched top slots median $429; base CPC $4.07 at $600 vs advertiser break-even ~$3.50 | Within direct-sold niche CPM ($15–$25); credible against Tier 1 | Leaves money on the table if traffic keeps growing 36% a month; needs quarterly re-pricing |

Finance keeps a premium for three reasons. It is the most guide-heavy topic (22 of 118 guides). It already earns from three live affiliate programs. And a paid sponsor would cut its affiliate cards from two to one on every page it covers ([affiliates config](../src/content/affiliates.ts); [affiliates logic](../src/lib/affiliates.ts)). The finance price should never fall below the affiliate income the sponsor displaces, which the owner can read from the server-side "Affiliate Click" events and partner dashboards.

### Three models with exact terms

| Element | **Model A: conversion-focused entry** | **Model B: balanced (recommended)** | **Model C: premium niche** |
|---|---|---|---|
| Tool Listing | $99 one-time, 12 months | $199 one-time, 12 months; $149 for first 10 | $299 one-time, 12 months |
| Category Sponsor | $99/mo standard; $149/mo Finance | $150/mo standard; $250/mo Finance | $350/mo standard; $500/mo Finance (today's prices) |
| Site-wide Sponsor | $400/mo | $600/mo; first sponsor $450/mo for months 1–3 | $1,200/mo |
| Billing / minimum | Monthly, no minimum | Monthly, cancel before next cycle; 3 months prepaid at 10% off | Monthly, 3-month minimum |
| Introductory offer | First month 50% off for first-time sponsors ($49.50 / $74.50 / $200) | Founding rates above, offered until Dec 31, 2026; founding category sponsors keep their rate for 12 months | None; a waitlist instead |
| Placements | As coded today: site-wide on all playbook, guide and category pages; category on its topic's pages; listing on topic category pages + /tools | Same, plus a card mock-up and the count of category pages per topic | Same, plus a site-wide card on the homepage, /playbooks and /for/* (needs code), and one newsletter mention a month once the list is measured |
| Slot caps / exclusivity | 1 site-wide; 1 per topic (9); up to 6 listings per topic | Same | Same; site-wide sponsor always shown first |
| Reporting | Monthly server-counted clicks | Monthly clicks + viewable impressions + CTR + top pages; make-good if card-bearing page views fall >20% short | B plus a quarterly audience report (device, geography, referrers) |
| Upgrade path | Listing fee credited to first sponsorship month | Listing fee credited in full to a category sponsorship within 90 days; unused prepaid category months credited pro rata to site-wide | Category sponsor gets first refusal on site-wide |
| Discount policy | Only the first-month pilot | Only founding, 10% prepay and listing credit; no ad-hoc discounts | Prepay 10% only |
| Target advertisers | Existing affiliates (Fiscal.ai, ValuEdge, Intrinsiqq, Paperpal, Jenni AI, Gamma, Make) and small AI tools used to $29–$437 directory fees | The same, plus AI writing, research, productivity and finance-data tools with $150–$600 monthly test budgets; Claude/MCP tool vendors for the developer-tools topic only | Finance and B2B tools with high customer value; dev/AI vendors comparing against Tier 1 |
| When to use | No sale 45 days after relaunch, or to buy a first case study fast | **Now**: first 90 days after tracking ships | Once measured card-bearing views ≥50K/month, viewable CTR ≥0.8%, and ≥2 qualified applicants per slot |

**Pick Model B.** In the revenue model below it has the best base case (**$9,025** in year one against $4,748 for A and $7,885 for C). Its conservative case ($4,168) is far above C's ($1,557).

Model C's base case is roughly comparable only because it assumes a $1,200 site-wide sale. That is hard to justify while the base-case cost per click would be about $8 against Tier 1 claims below $1. Model A converts more buyers but gives away half the yield.

Model B also leaves room to step up, as TrustMRR did ([Marc Lou](https://newsletter.marclou.com/p/i-vibe-coded-330k-in-9-months)). Raise the site-wide price to $750 when two qualified sponsors are waiting for the slot, and move toward Model C as measured reach grows. At +36% a month, total page views would reach about 90K within two months, though growth that fast is unlikely to last.

## 6. Publishable advertising rate card

*Publish only after server-side click counting, impression logging and slot caps are live (Section 9). Replace the bracketed figure with the measured path-filtered count.*

> **Advertise on ClaudeCodeHQ**: rates effective [date], reviewed quarterly; booked sponsors keep their rate for the term.
>
> **Who reads us:** people who use Claude for real work: consultants, analysts, researchers, writers, operators and finance professionals. 1,200+ playbooks and 118 guides, found mostly through search. **26.8K monthly visitors, 49.1K page views**, 48% from the US, UK, Canada, Australia and Western Europe, 59% from Google search (Vercel Analytics, Sep 29–Oct 29, 2026). **Sponsor cards appear on playbook, guide and category pages: [XX,XXX] page views in the same period.** Most of our readers aren't software engineers. If your product is built mainly for developers, we're probably not your best channel.
>
> | Placement | Price | Where it shows | Availability |
> |---|---|---|---|
> | **Tool Listing** | **$199 one-time, 12 months** (first 10 listings: $149) | Tools directory, plus a card on every category page in your topic ([N] pages) | Up to 6 per topic |
> | **Category Sponsor** | **$150/month**; Finance & investing **$250/month**; 3 months prepaid $405 / $675 | Your card on every playbook, guide and category page in one topic, plus a directory listing | 1 sponsor per topic. Open: [list real open topics] |
> | **Site-wide Sponsor** | **$600/month**; 3 months prepaid $1,620. Founding offer for the first sponsor: $450/month for months 1–3 | Your card first on every playbook, guide and category page, plus a directory listing | 1 sponsor. [Open / booked until date] |
>
> **Every sponsorship includes:** a monthly report of viewable card impressions (counted when at least 50% of the card is visible for 1 second), server-counted clicks, CTR and top pages, plus a mock-up before launch. If card-bearing page views in a month fall more than 20% below the figure quoted when you booked, we extend your run pro rata. Listing fees are credited in full toward a Category Sponsorship booked within 90 days.
>
> **Terms:** billed monthly; cancel before your next billing date. We review every application for fit and reply within 3 business days. You pay only after we confirm. You go live within 5 business days of payment.
>
> **Rules:** everything paid is labeled "Sponsored" and carries `rel="sponsored"`. We don't sell dofollow links, guest posts or link insertions. Payment never affects our editorial content, and sponsors may not imply an endorsement by Anthropic.

## 7. Revenue scenarios and sponsor economics: volume, not price, decides year one

### Revenue by model (12 months from November 2026, expected values)

The model spreads sales evenly through the year and applies a renewal probability at each term end of **50% (conservative), 60% (base) or 75% (optimistic)**. Those rates follow newsletter rebooking benchmarks of about 50–61% ([VoxBooster](https://voxbooster.com/blog/newsletter-sponsorship-statistics-2026/); [Dan Barry](https://medium.com/@danbarry_40316/increase-your-renewal-rate-for-newsletter-sponsors-e8f2b8ef722e)), because no directory-specific renewal data exists. Terms are one month for Model A. Model B buyers are assumed to take the 3-month prepay at 10% off, with $450 founding pricing on early site-wide sponsors, and Model C applies its 3-month minimum. The category mix is assumed to be 75% standard topics and 25% Finance. Inventory is capped at one site-wide slot, so arrivals beyond it wait; the 9 topic slots never bind in these scenarios. **Sales volumes are assumptions, not evidence**: the site has made no sales since /advertise launched on September 10, 2026 ([advertise page history](../src/app/advertise/page.tsx)), and volumes are set higher for cheaper models.

| Model / scenario | Listings sold | New category sponsors / yr | Category slot-months | New site-wide sponsors / yr | Site-wide months filled (of 12) | **12-month revenue** | Avg / month | Sponsor MRR in month 12 |
|---|---|---|---|---|---|---|---|---|
| A conservative | 6 | 3.0 | 5.5 | 1.8 | 3.3 | **$2,000** | $167 | $132 |
| A base | 12 | 6.0 | 13.1 | 3.6 | 7.9 | **$4,748** | $396 | $351 |
| A optimistic | 24 | 12.0 | 36.4 | 6.0 | 11.4 | **$10,018** | $835 | $776 |
| **B conservative** | 4 | 1.8 | 7.4 | 1.2 | 4.9 | **$4,168** | $347 | $428 |
| **B base** | 10 | 3.6 | 16.2 | 2.4 | 9.7 | **$9,025** | $752 | $848 |
| **B optimistic** | 20 | 7.2 | 37.2 | 4.2 | 11.1 | **$15,024** | $1,252 | $1,315 |
| C conservative | 2 | 0.6 | 2.5 | 0 | 0 | **$1,557** | $130 | $109 |
| C base | 5 | 1.8 | 8.1 | 0.6 | 2.7 | **$7,885** | $657 | $771 |
| C optimistic | 10 | 4.2 | 21.7 | 1.8 | 8.8 | **$21,898** | $1,825 | $2,313 |

The theoretical maximum if every slot were filled all year at list price, with 6 listings in each of 9 topics, is about **$35K for B**, $21K for A and $70K for C. No comparable small directory is known to run at full fill; OpenAlternative, with several times ClaudeCodeHQ's traffic, reports eight direct advertisers ([case study](https://dirstarter.com/blog/openalternative-case-study)).

**Sensitivity on B base ($9,025).** Sales volume matters most: halving it cuts revenue **48%**, while a 1.5x increase adds only **32%** because the single site-wide slot fills up. Site-wide price is next: if the same number of buyers paid $900 instead of $540–$600, revenue would rise **42%**, but that assumes demand doesn't respond to price, which is exactly the untested assumption. Renewal matters little in year one (−3% at 50%, +5% at 75%) but dominates year two. So the thing to manage is **closed deals per month**, which depends on outreach, proof and a low first commitment. That is the case for Model B's monthly billing and founding rates.

### Sponsor economics: what a buyer gets per dollar

**Card impressions are not page views.** In this model, one rendered card equals one eligible page view. Viewable impressions will be lower, because on phones the card probably sits below the first screen, and because of ad blockers and bots. A code comment estimates that roughly a fifth of raw visitors are low-engagement datacenter traffic ([vercel-analytics.ts](../src/lib/vercel-analytics.ts)).

The eligible share of the 49,100 page views is set at **50%, 60% and 75%**, bracketing the inventory audit's 55–75% assumption (an estimate, not data). CTR is set at **0.12%**, the EthicalAds network average ([source](https://www.ethicalads.io/advertiser-guide/)), **0.5%**, the top of generic native-ad ranges ([Osmos](https://www.osmos.ai/blog/native-advertising-retail-media-benchmarks-2026)), and **1.5%**, the middle of Carbon's claimed 0.8–2.1% ([source](https://www.carbonads.net/media-kit)). Advertiser break-even is about **$1.20–$7.20 per click, $3.50 at the midpoint**. That comes from a $40–$90 cost per signup and a 3–8% landing-page conversion rate ([OptimizeLinkedInAds](https://www.optimizelinkedinads.com/blogs/linkedin-ads-for-devtools); [Hackmamba](https://hackmamba.io/developer-marketing/ppc-for-developer-tools/)). Both are developer-tool benchmarks, used here as a proxy.

| Site-wide scenario | Eligible share | Card impressions | CTR | Clicks / mo | $450 founding: CPC / CPM | **$600 list: CPC / CPM** | $900 current: CPC / CPM |
|---|---|---|---|---|---|---|---|
| Conservative | 50% | 24,550 | 0.12% | 29 | $15.27 / $18.33 | **$20.37 / $24.44** | $30.55 / $36.66 |
| Base | 60% | 29,460 | 0.50% | 147 | $3.05 / $15.27 | **$4.07 / $20.37** | $6.11 / $30.55 |
| Optimistic | 75% | 36,825 | 1.50% | 552 | $0.81 / $12.22 | **$1.09 / $16.29** | $1.63 / $24.44 |

For category cards, the topic's share of all page views uses the hand-maintained /advertise shares (4–11%), which are unverified: 5%, 8% and 11%.

| Category scenario | Topic share | Card impressions | CTR | Clicks / mo | **$150: CPC / CPM** | $250 Finance: CPC / CPM | $350 current: CPC / CPM | $500 current Finance: CPC / CPM |
|---|---|---|---|---|---|---|---|---|
| Conservative | 5% | 2,455 | 0.12% | 3 | $50.92 / $61.10 | $84.86 / $101.83 | $118.81 / $142.57 | $169.72 / $203.67 |
| Base | 8% | 3,928 | 0.50% | 20 | **$7.64 / $38.19** | $12.73 / $63.65 | $17.82 / $89.10 | $25.46 / $127.29 |
| Optimistic | 11% | 5,401 | 1.50% | 81 | $1.85 / $27.77 | $3.09 / $46.29 | $4.32 / $64.80 | $6.17 / $92.58 |

Three things follow.

**First, the $600 site-wide card sits in the range for direct-sold niche inventory.** Its $20 base CPM is between the network floor (EthicalAds' $7.50 US-tier AI/ML rate) and the $30+ effective CPM OpenAlternative reached once it sold directly ([case study](https://dirstarter.com/blog/openalternative-case-study)). The price at which a base-case click costs $3.50 is **about $516 a month**. That backs a $450–$600 band, not $900.

**Second, category cards only pay off on contextual click-through.** A $150 category card reaches $3.50 a click only at about a 1.1% CTR; at the base 0.5% CTR, the break-even price would be about $69 a month. The proof should come from the affiliate cards already sitting in the same slot, whose clicks are counted server-side ([go route](../src/app/go/[partner]/route.ts)).

**Third, nobody should expect Tier 1 click volumes.** Matching claudemarketplaces.com's claimed 1,700 clicks on about 29,500 card impressions would need a **5.8% CTR**, far above any published developer benchmark. Its own reported 0.36% featured CTR is close to this report's base case ([source](https://claudemarketplaces.com/advertise)).

## 8. Evidence quality and research limitations

**Competitor prices are unconfirmed.** Every competitor figure is an extract from a search result. The session's egress proxy and network allowlist blocked direct fetches of every target domain, and web.archive.org was blocked too, so no price was checked against the rendered page and no price history could be verified. Many rows conflict across sources, which the database flags: Toolify appears at $49, $99 and $19–$999; Easy With AI at $125, free and $50; AI Valley at $1,270 and $980; and AI Agents List sells weekly and monthly units on the same domain. Some sources are old: Cooperpress figures date from 2022, Hacker Newsletter's from about 2017, and Altern's homepage-ad blog post is about 534 days old.

**Traffic and scarcity claims are unreliable.** Self-reported traffic often runs **2–6x above third-party estimates**: TAAFT 3.5M self-reported vs about 785K by an Ahrefs-based estimate, and Toolify 5.1M vs Semrush's 1.52M ([Semrush](https://www.semrush.com/website/toolify.ai/overview/)). No competitor publishes audience geography. "Slots left" and "sold out" labels were never observed changing, so they prove nothing about demand.

**ClaudeCodeHQ's own data has gaps.** There is no per-path or per-topic page-view data, and the topic shares on /advertise are hand-maintained ([advertise page](../src/app/advertise/page.tsx)). There is no impression logging, and sponsor clicks rely on a client-side event that ad blockers can suppress ([SponsorLink.tsx](../src/components/SponsorLink.tsx)). Sponsor cards only start or stop on a redeploy, even though a code comment claims daily regeneration ([sponsors config](../src/content/sponsors.ts)). There is no newsletter subscriber count, and the record of applications received is not in the repo.

**The benchmarks fit the audience imperfectly.** The CTR, CPC and CPM benchmarks mostly measure developer audiences and come from vendors who sell those ads. That is a poor proxy for a mostly non-developer, search-driven audience. No source quantifies the "intent premium" for contextual directory cards. There is no evidence that finance tools sponsor Claude directories, and none on whether 3-month minimums depress first purchases.

**The model assumptions are judgment calls.** The revenue volumes, renewal rates and eligible-share ranges are assumptions, labeled as such. Swap them for the measured inputs in Section 9 as soon as those exist.

## 9. Prioritized 30-day action plan

| Days | Priority action | Detail and success test |
|---|---|---|
| 1–2 | **Fix the reach claim and the copy** | Replace "about 37K page views a month" in [the Site-wide plan](../src/app/advertise/page.tsx) with "Your card on every playbook, guide and category page: an estimated 55–75% of our 49.1K monthly page views (Vercel, Sep 29–Oct 29, 2026)". Refresh the fallback stats (37.2K, Aug 9–Sep 8). Add the note: "Earlier versions of this page quoted ~37K page views; that was total site page views for Aug 9–Sep 8, 2026, not views of pages carrying the card." Change "the category page" to "every category page in your topic". Email any applicant who saw the old figure with the same two sentences. Do not present 49.1K as card impressions or as "33% more reach". |
| 1–5 | **Collect Vercel exports** for Sep 29–Oct 29 | (1) Page views and visitors for `/playbooks/*` (excluding `/playbooks`), `/blog/*` (excluding `/blog`) and `/categories/*`; their sum is the measured card-bearing page-view count. (2) The same, by country, including the Singapore/China share. (3) By device. (4) Referrers on eligible pages. (5) Per-path CSV joined to topics, to replace the hand-maintained shares. (6) `Affiliate Click` by partner and page, giving real CTR for the exact slot. (7) Views on the 170 noindex playbooks. Also pull the subscriber count, sends and open rates from Resend. Use the dashboard CSV, not the API's top-100 list ([vercel-analytics.ts](../src/lib/vercel-analytics.ts)). |
| 3–10 | **Ship tracking and caps** | Route sponsor links through a server-side `/go/` redirect, as affiliate links already do, so clicks are counted even when ad blockers are on. Log a "Sponsor Impression" event when at least 50% of the card is visible for 1 second. Cap at 1 site-wide sponsor, 1 per topic and 6 listings per topic. Make start and end dates take effect without a manual redeploy, or commit to a go-live redeploy within the stated 5 business days. Add a card mock-up and real availability to /advertise. |
| 4–10 | **Verify competitor prices in a browser** | Open and screenshot the 15 shortlisted URLs. Record the date, price, terms and whether "slots left" changed over a week. Downgrade or drop any row that doesn't match. |
| 7–12 | **Publish Model B and the rate card** | Use the measured card-bearing figure. Offer founding rates until Dec 31, 2026. Keep "review before payment", then send a payment link. |
| 7–21 | **Outreach wave 1: warm finance and AI-tool partners** | Pitch the seven live affiliates (Fiscal.ai, ValuEdge, Intrinsiqq, Paperpal, Jenni AI, Gamma, Make) a founding category or site-wide slot. Use their own affiliate click data from the same card slot as proof. Next, contact finance-data tools the site already covers in comparison guides (the Koyfin, Stock Rover, Seeking Alpha and FMP posts) ([blog](../src/app/blog/)). Target: 15 qualified conversations. |
| 10–25 | **Outreach wave 2: AI knowledge-work tools; wave 3: Claude/MCP developer tools** | Wave 2: AI writing, research, presentation and automation tools, where most of the site's playbooks sit; there are no live affiliates on the writing, legal, career-HR or health pages, so nothing is displaced there. Wave 3, for the developer-tools topic only: Claude Code GUIs and wrappers, and MCP and agent-infrastructure vendors. Pitch on cost per click and fixed exclusivity, not on Tier 1-style click volumes. |
| 14–30 | **Test introductory offers and decide** | Run the $149 founding listing and the $450 founding site-wide offer. Track reply rate, applications and closes. At day 30: if the site-wide slot sold and 2 or more qualified buyers are waiting, raise it to $750. If there are no sponsorship sales after 15 qualified conversations by day 45, switch to Model A's first-month-half-price pilot. Send the first monthly report (impressions, clicks, CTR) to every sponsor and to prospects as a sample. |

## Conclusion

The research changes the question. It is no longer "what do Claude Code sites charge?" but "what can an unmeasured, mostly non-developer audience prove?" ClaudeCodeHQ's prices were copied from a developer-directory playbook ($899–$1,499 slots, scarcity, share of voice), but the site's inventory, audience and measurement do not support them yet. The site's real advantages are different: transparent labeling, an audience that arrives through search for specific knowledge-work tasks, and affiliate partners already earning in the exact card slot it wants to sell.

Pricing for the first sale and instrumenting every impression turns those advantages into the evidence that would justify Model C. That evidence would be measured card-bearing views, real CTR and a case study from a finance or AI-writing sponsor. Getting it is likely to be worth more than any change to the listed prices.
