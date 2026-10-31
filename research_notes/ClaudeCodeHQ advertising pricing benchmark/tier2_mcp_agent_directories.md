# Tier 2 competitors: advertising, sponsorship and paid-listing pricing on MCP server directories and AI agent / agent-skills directories

Access date for every record below: 2026-10-29. Prices are USD unless noted; no non-USD prices were found.

**How this was gathered, and what that means for confidence:** Direct page fetches were blocked in this research session. mcp.so, pulsemcp.com, mcpservers.org, mcpmarket.com and aiagentsdirectory.com all failed DNS resolution through the session's network allowlist, and web.archive.org and r.jina.ai were refused by the egress proxy. So every finding comes from web-search results that quote or summarize the named page, and none is a first-hand page read. The cap is **medium** confidence even when the evidence URL is the vendor's own advertise page. Third-party or competitor-run sources are **low**. Wayback Machine checks for earlier or removed pricing could not be done (see Gaps). Before quoting any figure externally, open the evidence URL in a browser and check it.

---

## Q1. Which directories sell paid listings, featured slots, sponsorships or newsletter slots, and at what exact price and terms?

### Takeaway
Two pricing models dominate this tier.
- **Cheap one-time listing upgrades ($19–$49).** These buy faster review, a badge, a dofollow link and a short visibility boost (mcp.so, mcpservers.org, aiagentsdirectory.com).
- **Recurring monthly sponsorships.** These run from about $29/mo for a logo up to $2,500/mo for a capped homepage slot. Glama ($49 boost / $200 per category) and mcpservers.org ($500 / $600+ / $2,500) are the most clearly structured and best-trafficked benchmarks.

The closest analogue to ClaudeCodeHQ is the Claude-specific directory claudemarketplaces.com, which charges $1,499/mo per sponsor slot (capped at 8 slots, about 1,700 clicks per sponsor per month claimed).

### Cited Findings

#### Product records (one row per product)

| # | Site | Product | Price | Billing | Min commitment | Placement | Exclusivity / caps | Link labeling | Extra benefits | Evidence URL | Confidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Glama (glama.ai/mcp) | Boosted listing | $49 per listing | Monthly, auto-renews; cancel anytime (boost stays active through the paid period) | 1 month | Priority among relevant results in default discovery, matching categories, search, and partner integrations; purple lightning-bolt marker | Not capped (per listing) | Lightning bolt plus "promotion" tooltip | None stated | [glama.ai/advertise](https://glama.ai/advertise) | medium |
| 2 | Glama | Sponsored card | $200 per category | Monthly, auto-renews; "no trial or shorter term"; renewal can be switched off, and the card runs the full month | 1 month | Card in the chosen category pages; links to any HTTPS page, no Glama listing needed; SVG, headline, sentence | Shared: multiple advertisers in the same category rotate evenly; each campaign is reviewed by Glama | "Ad" label, `rel="sponsored"` | No ad networks, retargeting, interstitials or autoplay (policy) | [glama.ai/advertise](https://glama.ai/advertise) | medium |
| 3 | mcpservers.org (Awesome MCP Servers) | Featured Sponsor | $2,500 | Monthly, "cancel anytime" | 1 month | Homepage, top of search results, list pages; about 735K impressions/mo across all placements (vendor claim) | Capped at 3 sponsors; "1 spot open" at time of indexing | Not publicly disclosed | Not publicly disclosed | [mcpservers.org/advertise](https://mcpservers.org/advertise) | medium |
| 4 | mcpservers.org | Category Sponsor | From $600 (Web Scraping listed at $800) | Monthly | 1 month | Top of a category page | 1 exclusive sponsor per category, first come first served; Development and Search shown as taken | Not publicly disclosed | Not publicly disclosed | [mcpservers.org/advertise](https://mcpservers.org/advertise) | medium |
| 5 | mcpservers.org | Network Sponsor | $500 | Monthly | 1 month | Card rotating across 9,000+ server and remote-server detail pages | 8 spots, all open at time of indexing | Not publicly disclosed | Not publicly disclosed | [mcpservers.org/advertise](https://mcpservers.org/advertise) | medium |
| 6 | mcpservers.org | Premium submission | $39 | One-time | n/a | Priority in search results, official badge | None | **Dofollow** link (site self-reports DR 71) | 24-hour review (the free queue can take up to 2 weeks) | [mcpservers.org/submit](https://mcpservers.org/submit); corroborated by [dev.to/agentoolrank](https://dev.to/agentoolrank/where-to-list-an-mcp-server-or-ai-agent-tool-free-vs-paid-checked-oct-2026-1eak) | medium |
| 7 | mcp.so | Sponsor tiers (ads) | **Not captured**: search snippets omit the tier amounts | Monthly subscription; cancel from Settings → Billing | 1 month | Sponsor slots; sponsors rotate within each slot; "higher tiers appear first"; creative is name, 10–200 character tagline, URL, tags, logo | Rotation within slot (no exclusivity stated) | Pitches "dofollow placement" and high domain authority | Self-serve: card payment, ad live right after payment | [mcp.so/advertise](https://mcp.so/advertise) | medium (terms) / price unknown |
| 8 | mcp.so | Premium submission | $39 | One-time | n/a | "Featured placement," verified badge, publishes immediately without review | None | **Dofollow** project link | A free review route also exists (web form "free review" or a GitHub issue; sources disagree) | [mcp.so/submit?type=server](https://mcp.so/submit?type=server); [dev.to/agentoolrank](https://dev.to/agentoolrank/where-to-list-an-mcp-server-or-ai-agent-tool-free-vs-paid-checked-oct-2026-1eak) | medium |
| 9 | MCPBundles (mcpbundles.com) | Hero | $499 | Monthly, cancel anytime | 1 month | Top banner. The page itself is inconsistent: top of /skills in one place, "across every public MCP server search result" in another | Single slot (1 sponsor at a time) | Not stated for Hero | Not publicly disclosed | [mcpbundles.com/sponsorship](https://www.mcpbundles.com/sponsorship) | medium |
| 10 | MCPBundles | Supporter | $99 | Monthly | 1 month | Supporter strip | Single slot | Not publicly disclosed | Not publicly disclosed | [mcpbundles.com/sponsorship](https://www.mcpbundles.com/sponsorship) | medium |
| 11 | MCPBundles | Featured Listing | $99 | Monthly | 1 month | Rotates per pageview | Never sells out (uncapped) | **Dofollow** outbound links | Not publicly disclosed | [mcpbundles.com/sponsorship](https://www.mcpbundles.com/sponsorship) | medium |
| 12 | MCP Stack (mcpstack.org / mcp.harishgarg.com, same operator Harish Garg) | Featured MCP tool | $47/month, or $94 for 3 months | Monthly or 3-month pack (Gumroad) | 1 month | Category homepages (servers, clients, frameworks, etc.) | 3 spots per category | Not publicly disclosed | Launch discount | [mcp.harishgarg.com/sponsor](https://mcp.harishgarg.com/sponsor); [Gumroad](https://harishgarg.gumroad.com/l/mcpstack-1) | medium |
| 13 | MCP Stack | Sidebar sponsor | $197/month (after launch discount) | Monthly | 1 month | 300x250 sidebar banner on "every single page" (65,000+ pages claimed) | 1 spot | Not publicly disclosed | n/a | [mcp.harishgarg.com/sponsor](https://mcp.harishgarg.com/sponsor); [Gumroad sidebar](https://harishgarg.gumroad.com/l/azjgys?layout=profile) | medium |
| 14 | MCP Stack | Site-wide sponsor | $497/month (launch discount noted) | Monthly | 1 month | Site-wide | Not publicly disclosed | Not publicly disclosed | n/a | Price comes only from a search summary of [mcp.harishgarg.com/sponsor](https://mcp.harishgarg.com/sponsor); a second search could not confirm it | low |
| 15 | aiagentsdirectory.com | Fast Track | $19 | One-time | n/a | Skips the review wait; 1 category placement | None | Not stated | 1x newsletter mention | [aiagentsdirectory.com/sponsor](https://aiagentsdirectory.com/sponsor) | medium |
| 16 | aiagentsdirectory.com | Starter | $49 | One-time | n/a | 5-day visibility boost; up to 2 category placements | None | **Do-follow** backlink | 3x newsletter promotions | [aiagentsdirectory.com/sponsor](https://aiagentsdirectory.com/sponsor) | medium |
| 17 | aiagentsdirectory.com | Growth | $99 (list price $149; "FIRST" code auto-applied) | One-time, covers 1 month of featuring | n/a | 1 month featured on website and newsletter; priority search; top category placement | None stated | Not stated | Newsletter feature | [aiagentsdirectory.com/sponsor](https://aiagentsdirectory.com/sponsor) | medium |
| 18 | aiagentsdirectory.com | Ecosystem Partner | $499 (list price $999; "FIRST50" code auto-applied) | One-time | n/a | Premium site-wide placement | Not stated | Not stated | Not stated | [aiagentsdirectory.com/sponsor](https://aiagentsdirectory.com/sponsor) | medium |
| 19 | aiagentsdirectory.com | Contextual blog mention / AI product announcement / agency-written article | $149 / $249 / $699 | One-time | n/a | Blog content | n/a | Not stated | n/a | [aiagentsdirectory.com/sponsor](https://aiagentsdirectory.com/sponsor) | medium |
| 20 | AI Agents List (aiagentslist.com) | Banner | $99/week (10% off each extra week) | Weekly | 1 week | Below the header on every page | 1 slot | Not stated | n/a | [aiagentslist.com/sponsor](https://aiagentslist.com/sponsor) | medium |
| 21 | AI Agents List | Sidebar ad / Listing ad / Sponsor logo | $79/week / $89/week / $49/week | Weekly | 1 week | Sidebar on agent pages / listings / logo | Not stated | Not stated | n/a | [aiagentslist.com/sponsor](https://aiagentslist.com/sponsor) | medium |
| 22 | AI Agents List | Full Sponsor bundle | $119/month | Full calendar months; slot confirmed on payment | 1 month | Banner on every page, featured listing, sidebar on agent pages, homepage logo, blog mention | Not stated | Not stated | Blog mention | [aiagentslist.com/sponsor/book/1](https://aiagentslist.com/sponsor/book/1) | medium (conflicts with the weekly prices on the same domain) |
| 23 | AI Agents List | Visibility / Logo Only | $79/month / $29/month | Monthly (full calendar months) | 1 month | Not detailed | Not stated | Not stated | Logo Only: full refund before the campaign starts | [book/2](https://aiagentslist.com/sponsor/book/2); [book/3](https://aiagentslist.com/sponsor/book/3) | medium |
| 24 | AI Agent Store (aiagentstore.ai) | Newsletter sponsorship | From $150 per send | Per send; daily or weekly; multi-day bundles lower the per-day rate | 1 send | Newsletter | Not stated | n/a | n/a | [aiagentstore.ai/affiliate-program](https://aiagentstore.ai/affiliate-program) | medium |
| 25 | AI Agent Store | Paid AI agent listing | $49.99 or $99.98 | One-time | n/a | Listing (free listing also available) | n/a | Not stated | n/a | [aiagentstore.ai/affiliate-program](https://aiagentstore.ai/affiliate-program) | low (snippet only; tier difference unexplained) |
| 26 | AI Agent Store | AI agency listing (bid) | Monthly bid, minimum $50 or $100 depending on link type | Recurring monthly bid | 1 month | Agency listings | Bid-ranked | Varies by link type (details not captured) | n/a | [aiagentstore.ai/affiliate-program](https://aiagentstore.ai/affiliate-program) | low |
| 27 | Find My Agent AI (findmyagentai.com) | Premium Listing | $39/month | Monthly | 1 month | Featured homepage placement; "20,000+ guaranteed targeted impressions" | Not stated | Not stated | n/a | [findmyagentai.com/advertise](https://findmyagentai.com/advertise) | medium |
| 28 | AiAgents.computer | Sponsored category placement | $200/month per standard category (higher for high-traffic categories) | Monthly | 1 month | Category pages; the top 3 organic positions cannot be bought | Not stated | Not stated | n/a | [aiagents.computer/partners](https://aiagents.computer/partners) | medium |
| 29 | AiAgents.computer | Verified Listing / Pro Listing | $199/year / $399/year per agent | Annual | 1 year | Listing upgrade | n/a | Not stated | n/a | [aiagents.computer](https://aiagents.computer/) (homepage); consistency with the partners page unconfirmed | low |
| 30 | The AI Agent Index (theaiagentindex.com) | Vendor Managed listing | From $9.99/month | Monthly | 1 month | Listing management | n/a | All paid placements "clearly labeled"; the "Independently Reviewed" badge cannot be bought | "Early adopter pricing," locked for founding advertisers | [theaiagentindex.com/advertise](https://theaiagentindex.com/advertise); [methodology](https://theaiagentindex.com/methodology) | medium |
| 31 | The AI Agent Index | Featured placements, category sponsorships, comparison placements (4 paid products in total) | Not publicly disclosed (prices behind a "View pricing" link that was not retrievable) | Not publicly disclosed | Not publicly disclosed | Featured / category / comparison | Not stated | Clearly labeled | Founding-advertiser lock | [theaiagentindex.com/advertise](https://theaiagentindex.com/advertise) | low |
| 32 | claudemarketplaces.com (Claude-specific; adjacent Tier 1/2) | Sponsor slot | $1,499/month | Monthly | 1 month | Sponsor slot; about 1,700 clicks per sponsor per month claimed; clicks counted server-side, with public analytics | 8 slots; "only 1 of 8 left" | Not stated | Booking via [cal.com](https://cal.com/claudemarketplaces/advertise) | [claudemarketplaces.com/advertise](https://claudemarketplaces.com/advertise) | medium |
| 33 | claudemarketplace.net (look-alike) | Sponsor slot | $1,299/month for 2,000+ clicks | Monthly | 1 month | Not stated | 5 slots total | Not stated | n/a | [claudemarketplace.net/advertise](https://www.claudemarketplace.net/advertise) | low–medium |
| 34 | claudemarket.ai (look-alike) | Monthly placements | From $899/month | Monthly | Not stated | Not stated | Not stated | Not stated | n/a | [claudemarket.ai/advertise](https://claudemarket.ai/advertise) | low |
| 35 | crossaitools.com | Sponsor slot | $1,499/month for about 2,000 clicks | Monthly | Not stated | Not stated | 8 slots | Not stated | n/a | [crossaitools.com/advertise](https://crossaitools.com/advertise) | low |
| 36 | There's An AI For That (theresanaiforthat.com, agents section; general AI directory, probably covered by a Tier 1 researcher) | Basic listing / "maximum exposure" package / PPC Featured | $49 one-time / $437 one-time (includes a newsletter feature) / bid-based PPC | One-time; PPC by bid | n/a | Listing; Featured section ranked by bid | Bid-ranked | Not stated | $300 bonus for launching on TAAFT first | [theresanaiforthat.com/get-featured](https://theresanaiforthat.com/get-featured/); [launch](https://theresanaiforthat.com/launch/) | low (search summary only) |
| 37 | PeerPush (listing service) | Paid listing tiers | $39 / $89 / $229 | Not stated (likely one-time) | n/a | Listing; the free queue was quoted at about 70 days | n/a | Not stated | n/a | Only third-party: [dev.to/agentoolrank](https://dev.to/agentoolrank/where-to-list-an-mcp-server-or-ai-agent-tool-free-vs-paid-checked-oct-2026-1eak) | low |

#### Supporting facts
- On mcpservers.org, the free listing route stays available, and the Premium fee buys speed (24h versus up to 2 weeks), a badge and a dofollow link — [mcpservers.org/submit](https://mcpservers.org/submit); [dev.to/agentoolrank](https://dev.to/agentoolrank/where-to-list-an-mcp-server-or-ai-agent-tool-free-vs-paid-checked-oct-2026-1eak)
- Summary from a builder who checked submit pages on 2026-10-01: "almost everything has a free route if you can wait." Paid tiers "mostly buy speed, placement or a dofollow link." The author runs AgentoolRank (disclosed) — [dev.to/agentoolrank](https://dev.to/agentoolrank/where-to-list-an-mcp-server-or-ai-agent-tool-free-vs-paid-checked-oct-2026-1eak)
- mcp.so ad buys are self-serve: pick a tier, submit creative, pay by card, and the ad goes live immediately while the subscription is active — [mcp.so/advertise](https://mcp.so/advertise)
- mcp.so's advertise page shows "46% dofollow" and "77% dofollow" figures, but the snippet does not say what they measure — [mcp.so/advertise](https://mcp.so/advertise)
- Glama sponsored cards are reviewed before running (manual approval). Boosts are self-serve under Admin → Advertising — [glama.ai/advertise](https://glama.ai/advertise)
- AI Agents List takes payment first, then the buyer emails assets to hello@aiagentslist.com — [aiagentslist.com/sponsor](https://aiagentslist.com/sponsor)
- MCP Market (mcpmarket.com) publishes only user plans: Free $0, Pro $19/mo, and Team $149/mo for 5 users (then $9 per additional user, existing subscribers only). No advertising or sponsorship page surfaced — [docs.mcpmarket.com plans](https://docs.mcpmarket.com/docs/billing/plans-and-pricing)

### Inferences
- **Benchmark ladder for ClaudeCodeHQ** (about 26.8K visitors / 49.1K pageviews a month):
  - Glama: $200/mo shared category card at 1.6M visits claimed.
  - mcpservers.org: $500 network / $600 category / $2,500 homepage at about 208K visitors and 2.1M pageviews claimed.
  - claudemarketplaces.com: $1,499/mo at a claimed 380K+ developers.
  - Sites at roughly ClaudeCodeHQ's scale: aiagentslist.com (25–50K visitors claimed) charges $29–$119/mo or $49–$99/week, and aiagentsdirectory.com (50K users claimed) uses one-time $19–$99 packages. That points to roughly $50–$300/mo for ClaudeCodeHQ-sized inventory, or $19–$49 one-time for listing upgrades.
- **Implied CPMs from vendor claims, illustrative only:**
  - mcpservers.org Featured: $2,500 ÷ about 735K impressions ≈ $3.40 CPM.
  - claudemarketplaces.com: $1,499 ÷ about 1,700 clicks ≈ $0.88 per click.
  - claudemarketplace.net: $1,299 ÷ 2,000 clicks ≈ $0.65 per click.
- **Recurring versus one-time split.** The MCP-native directories with real traffic (Glama, mcpservers.org, mcp.so, MCPBundles, MCP Stack, claudemarketplaces) sell recurring monthly sponsorships. The smaller AI-agent directories lean on one-time packages bundled with newsletter mentions. mcp.so and mcpservers.org do both: $39 one-time and monthly sponsorships.
- **Dofollow as a selling point.** It is marketed openly (mcp.so, mcpservers.org, MCPBundles, aiagentsdirectory.com). Only Glama explicitly states `rel="sponsored"` on ads, which matches Google's guidance for paid links.

### Gaps
- mcp.so's sponsor tier dollar amounts. They are on [mcp.so/advertise](https://mcp.so/advertise) but were not in any search snippet, and a direct fetch was blocked.
- PulseMCP: no public rate card found (see Q3).
- Smithery, mcp.directory, mcp-get, Cline MCP Marketplace, OpenTools, MCP Hub, agent.ai, AgentLocker, agentsdir, botsfloor/agentsbase, and LlamaHub/LangChain hubs: searches surfaced no advertising or sponsorship product for any of them (see Q3).
- Reporting (dashboards, click reports) is disclosed only by claudemarketplaces.com (server-side click counting, public analytics). For every other site it is not publicly disclosed.
- The MCP Stack $497/mo site-wide figure was not confirmed on a second pass.

---

## Q2. What traffic, audience and geography figures do these directories publish?

### Takeaway
Self-reported audience claims run from about 25K to 1.6M monthly visits. Independent estimates, where found, are much lower than the vendor claims (Glama 1.6M claimed versus about 221.6K on a third-party tracker; aiagentsdirectory.com 50K+ users claimed versus 68.2K visits over 3 months on Similarweb). No directory in this tier published a geography breakdown in the indexed snippets.

### Cited Findings
- **Glama:** about 1.6M monthly visits, 3-minute median visit, 80K+ active GitHub users (self-reported) — [glama.ai/advertise](https://glama.ai/advertise). A third-party tracker estimate of about 221.6K monthly visits was cited in the search summary without a named source, so it is low confidence — [glama.ai/advertise search context](https://glama.ai/advertise)
- **mcpservers.org:** "200,000+ AI builders and power users" monthly, plus a stats box of 2.1M+ monthly pageviews and 208K+ monthly visitors. About 735K impressions/mo is claimed for the Featured tier (self-reported) — [mcpservers.org/advertise](https://mcpservers.org/advertise)
- **claudemarketplaces.com:** "380,000+ developers" and about 1,700 clicks per sponsor per month (self-reported) — [claudemarketplaces.com/advertise](https://claudemarketplaces.com/advertise). The look-alike claudemarketplace.net claims 150,000+ monthly visitors — [claudemarketplace.net/advertise](https://www.claudemarketplace.net/advertise)
- **MCP Stack:** 65,000+ pages carry the sidebar banner. This is a page count, not traffic — [mcp.harishgarg.com/sponsor](https://mcp.harishgarg.com/sponsor)
- **aiagentsdirectory.com:** 50K+ monthly users and 23K+ newsletter readers per the sponsor page; 22K newsletter subscribers per the Write for Us page — [sponsor](https://aiagentsdirectory.com/sponsor); [write-for-us](https://aiagentsdirectory.com/write-for-us)
  - Third-party estimate (Similarweb, August 2026): 68.2K total visits over the last 3 months, down 11.84% month over month — [Similarweb](https://www.similarweb.com/website/aiagentsdirectory.com/)
- **aiagentslist.com:** the sponsor page claims 50k+ monthly agent views, 2,500+ newsletter subscribers, 600+ listed tools and 5k+ monthly link clicks, with a headline of 50,000+ monthly visitors. The submit page says 25,000+ monthly visitors and 40,000+ monthly pageviews — [sponsor](https://aiagentslist.com/sponsor); [submit](https://aiagentslist.com/submit)
- **findmyagentai.com:** "20,000+ guaranteed targeted impressions" for its $39/mo Premium Listing — [findmyagentai.com/advertise](https://findmyagentai.com/advertise)
- **mcp.so:** a Similarweb competitors page (April 2026) shows "Global Rank #163,124" next to 17,253 and "Country Rank #23,755" next to 7,542. The metric labels are not visible, so the figures are unusable as a traffic number — [Similarweb mcp.so](https://www.similarweb.com/website/mcp.so/competitors/)
- **Catalog sizes, for context:**
  - mcp.so lists 16,000+ servers (third-party profile) — [aiagentsdirectory.com/agent/mcpso](https://aiagentsdirectory.com/agent/mcpso)
  - Glama lists 23,000+ open-source servers and 4,000 hosted connectors (third-party profile) — [api-evangelist/glama](https://github.com/api-evangelist/glama)

### Inferences
- ClaudeCodeHQ's verified 26.8K visitors / 49.1K pageviews is close to aiagentslist.com's lower self-claim (25K / 40K). That makes aiagentslist.com ($29–$119/mo; $49–$99/week) the closest same-size price comparator. The large MCP directories are ceiling benchmarks, not peers.
- Vendor claims in this tier are often inflated or inconsistent, even within the same domain (aiagentslist.com 25K vs 50K; aiagentsdirectory.com newsletter 22K vs 23K). A ClaudeCodeHQ media kit that publishes verified analytics could stand out.

### Gaps
- No geography split (US / EU / India and so on) was found for any Tier 2 directory.
- No first-hand Similarweb numbers for Glama, mcpservers.org, PulseMCP or Smithery. The Similarweb pages need login, and fetch was blocked.

---

## Q3. Which directories are free-only or "contact us", and are there public disclosures of prices paid, sponsorship revenue, discounts or sold-out signals?

### Takeaway
- **Free or negotiated, no public rate card:** PulseMCP (sponsorship negotiated directly), Smithery (no promotion product found; it monetizes through its developer platform plans), mcpmarket.com (user subscriptions only) and SkillsMP (free; a "Sponsored by" label seen, no price).
- **Scarcity is used heavily as a sales tactic:**
  - mcpservers.org Featured: "1 spot open" of 3
  - claudemarketplaces.com: "1 of 8 left"
  - MCP Stack sidebar: 1 spot
  - AI Agents List banner: 1 slot
  - MCPBundles Hero: single slot
- **Launch discounts are common:** aiagentsdirectory.com auto-applies FIRST/FIRST50 codes, MCP Stack advertises launch discounts, and The AI Agent Index offers founding-advertiser locks.
- **No MCP-specific sponsorship revenue disclosures were found.**

### Cited Findings
- **PulseMCP:** accepts "occasional partnerships" and sponsorship through "non-intrusive ads" negotiated directly with companies. Sponsored content is labeled, and partners pay upfront. No prices or slots are published — [pulsemcp.com/editorial-disclosure](https://www.pulsemcp.com/editorial-disclosure)
  - Its weekly newsletter ("Weekly Pulse") is run by two MCP Steering Committee members, with about 50 weekly editions in its backlog. No ad rates or subscriber count were found — [pulsemcp.com/newsletter](https://www.pulsemcp.com/newsletter)
  - A competitor's (MCPize) page says PulseMCP does not monetize. Treat that as unverified — [mcpize.com/alternatives/pulsemcp](https://mcpize.com/alternatives/pulsemcp)
- **Smithery:** no featured or paid promotion program found. Third-party sources conflict on its developer-plan pricing ($10/mo Basic, plans from $129/mo, $300/mo pay-as-you-go) — [stork.ai](https://www.stork.ai/en/smithery); [startupsintel](https://startupsintel.com/ai-startups/smithery); [magpieai](https://magpieai.store/tools/smithery). Linkly lists Smithery's developer plan among paid options that buy placement or speed — [linklyhq.com](https://linklyhq.com/blog/mcp-server-directories)
- **mcp.so:** listed as "Free" on a third-party profile — [aiagentsdirectory.com/agent/mcpso](https://aiagentsdirectory.com/agent/mcpso). In practice it sells a $39 premium submission and monthly sponsor tiers — [mcp.so/submit](https://mcp.so/submit?type=server); [mcp.so/advertise](https://mcp.so/advertise)
- **SkillsMP** (agent-skills marketplace): free to use, with a "Sponsored by ComicInk" label observed but no price found — [toolify.ai](https://www.toolify.ai/tool/agent-skills-marketplace); [vibecoding.app](https://vibecoding.app/tools/skillsmp)
- **aiagentstore.ai:** listing is free; paid options are on the affiliate-program page — [aiagentstore.ai/affiliate-program](https://aiagentstore.ai/affiliate-program)
- **Discounts:**
  - aiagentsdirectory.com: Growth $149 → $99 with "FIRST"; Ecosystem Partner $999 → $499 with "FIRST50", both auto-applied at checkout — [aiagentsdirectory.com/sponsor](https://aiagentsdirectory.com/sponsor)
  - MCP Stack: sidebar $197/mo "after launch discount" — [mcp.harishgarg.com/sponsor](https://mcp.harishgarg.com/sponsor)
  - The AI Agent Index: "Early adopter pricing… rates are locked for founding advertisers" — [theaiagentindex.com/advertise](https://theaiagentindex.com/advertise)
- **Sold-out signals:**
  - mcpservers.org Featured: 3-sponsor cap, 1 open; Development and Search category sponsorships taken — [mcpservers.org/advertise](https://mcpservers.org/advertise)
  - claudemarketplaces.com: "only 1 of 8 sponsor slots left" — [claudemarketplaces.com/advertise](https://claudemarketplaces.com/advertise)
- **Checkout model:**
  - Self-serve card checkout: mcp.so ads, Glama boosts, aiagentsdirectory.com (checkout with promo codes), MCP Stack (Gumroad), AI Agents List (booking pages, then email assets).
  - Manual review: Glama sponsored cards (reviewed before running), claudemarketplaces.com (cal.com booking call) — [glama.ai/advertise](https://glama.ai/advertise); [cal.com/claudemarketplaces](https://cal.com/claudemarketplaces/advertise)
- **Revenue disclosures, general directories only (not MCP-specific):**
  - OpenAlternative: about 65% of about $6,500 monthly revenue comes from ads and sponsorships.
  - TrustMRR: sponsor slots started at $299/mo, and 20 positions filled for about $18,380 MRR.
  - Sponsored placements cost about $99/mo on SaaSHub and $299/mo on G2.

  All are founder self-reports — [Indie Hackers: 2 directory sites earning $10k+/mo](https://www.indiehackers.com/post/2-directory-sites-earning-10-000-per-month-725e7a290b); [Indie Hackers: software directories after a month](https://www.indiehackers.com/post/software-directories-after-a-month-1-real-visit-1-likely-sign-up-no-sponsored-spot-355ad15fb3); [stealwhatworks.com](https://stealwhatworks.com/blogs/news/indie-hackers-selling-ad-spaces)

### Inferences
- Visible scarcity is the norm in this niche: a fixed number of slots, a "spots left" counter and category exclusivity. ClaudeCodeHQ could copy it, for example with a capped number of homepage sponsor slots plus one exclusive sponsor per category.
- The MCP and Claude-specific directories with the most traffic rely on recurring monthly billing. One-time $19–$49 "premium submission" fees look like a low-friction second revenue line next to sponsorships, not a replacement for them.

### Gaps
- No X, Reddit (r/mcp, r/AI_Agents, r/SideProject) or Hacker News posts were found in which an MCP or agent directory operator disclosed sponsorship revenue, or a buyer disclosed a price paid.
- Wayback Machine snapshots of earlier pricing were not checked: web.archive.org was blocked by the session's network policy. Price changes over time (for example, whether mcpservers.org or mcp.so raised rates) are unknown.
- No advertising or sponsorship product was found for mcp.directory, mcp-get, Cline MCP Marketplace, OpenTools, MCP Hub, agent.ai, AgentLocker, agentsdir, botsfloor/agentsbase, or LlamaHub/LangChain hubs. Few searches were spent on these, so the absence is unconfirmed, not a verified free-only status. Cline's marketplace and the LangChain/LlamaHub hubs are vendor-run ecosystem catalogs and are unlikely to sell ads, but that is not verified.
- The PulseMCP newsletter's subscriber count and sponsorship price are not publicly disclosed.
