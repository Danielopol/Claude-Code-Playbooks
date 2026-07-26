# AI Crawler Access Analysis

Analyze which AI crawlers can reach a website. These are the bots AI companies use to discover, index, and train on web content. If they are blocked, the site cannot appear in AI-generated answers no matter how good the content is. Crawler access is the foundational technical requirement for GEO.

## Key Insight

As of early 2026, many sites block AI crawlers by accident, through overly aggressive robots.txt rules inherited from legacy SEO configurations. An Originality.ai 2025 study found that over 35% of the top 1,000 websites block at least one major AI crawler, and 5-10% block all of them. Blocking AI crawlers is the fastest way to become invisible in AI search.

When the user gives you a domain, run the analysis procedure below and write `GEO-CRAWLER-ACCESS.md`.

---

## Complete AI Crawler Reference

### Tier 1: Critical for AI Search Visibility (recommend ALLOW)

These crawlers power the AI search products where users actively look for answers. Blocking them directly reduces visibility in AI-generated responses.

#### GPTBot
- **Operator:** OpenAI
- **User-Agent:** `GPTBot`
- **Full string:** `Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.2; +https://openai.com/gptbot)`
- **Purpose:** fetches content for ChatGPT's web browsing, plugins, and search features. Content it accesses may be used to improve OpenAI models.
- **Impact of blocking:** content will not appear in ChatGPT Search results and will not be reachable when users ask ChatGPT to browse the web. Highest-impact AI crawler to allow.
- **Recommendation: ALLOW.** ChatGPT had 300M+ weekly active users as of 2025. Blocking GPTBot removes the site from one of the largest AI search surfaces.

#### OAI-SearchBot
- **Operator:** OpenAI
- **User-Agent:** `OAI-SearchBot`
- **Full string:** `Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; OAI-SearchBot/1.0; +https://docs.openai.com/bots/overview)`
- **Purpose:** powers ChatGPT's search feature. Unlike GPTBot, content it accesses is NOT used for model training, only for live search results.
- **Impact of blocking:** content will not appear in ChatGPT's search results even when GPTBot is allowed.
- **Recommendation: ALLOW.** Search-only crawler with no training implications. No strategic reason to block it.

#### ChatGPT-User
- **Operator:** OpenAI
- **User-Agent:** `ChatGPT-User`
- **Full string:** `Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; ChatGPT-User/1.0; +https://openai.com/bot)`
- **Purpose:** used when a ChatGPT user explicitly asks the model to visit a URL. Acts as a browser agent on behalf of the user.
- **Impact of blocking:** ChatGPT cannot open pages when users ask it to read or summarize them.
- **Recommendation: ALLOW.** Blocking it turns away users who are actively trying to engage with the content.

#### ClaudeBot
- **Operator:** Anthropic
- **User-Agent:** `ClaudeBot`
- **Full string:** `ClaudeBot/1.0; +https://www.anthropic.com/claude-bot`
- **Purpose:** fetches web content for Claude's web search, citations, and analysis tools.
- **Impact of blocking:** content will not be reachable by Claude for web search or when users ask Claude to analyze specific URLs.
- **Recommendation: ALLOW.** Claude is a major AI assistant with growing market share.

#### PerplexityBot
- **Operator:** Perplexity AI
- **User-Agent:** `PerplexityBot`
- **Full string:** `Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)`
- **Purpose:** powers Perplexity's AI search engine, which gives sourced answers with direct citations and links back to source pages.
- **Impact of blocking:** content will not appear in Perplexity results. Perplexity is one of the best referral traffic sources among AI search products because it always displays source links.
- **Recommendation: ALLOW.** Drives real referral traffic and always attributes sources. High value for publishers and businesses.

---

### Tier 2: Important for the Broader AI Ecosystem (recommend ALLOW)

These crawlers serve large AI platforms or search ecosystems. Allowing them increases reach.

#### Google-Extended
- **Operator:** Google
- **User-Agent:** `Google-Extended`
- **Purpose:** controls whether Google uses content for Gemini model training and AI Overviews improvement. **Critical note:** blocking Google-Extended does NOT affect Google Search rankings or appearance in Google Search results. Standard Googlebot controls that.
- **Impact of blocking:** content may not be used for Gemini training or to improve AI Overviews. Content can still appear in AI Overviews through standard search indexing.
- **Recommendation: ALLOW.** Blocking gives minimal content protection while reducing presence in Google's AI features. Since it does not affect search ranking, the only reason to block is a philosophical objection to training data usage.

#### GoogleOther
- **Operator:** Google
- **User-Agent:** `GoogleOther`
- **Purpose:** used for non-search-ranking purposes including research, one-off crawls, and AI-related data collection.
- **Impact of blocking:** minimal impact on rankings. May reduce presence in Google's AI research and experimental features.
- **Recommendation: ALLOW.** Low risk, moderate potential benefit.

#### Applebot-Extended
- **Operator:** Apple
- **User-Agent:** `Applebot-Extended`
- **Purpose:** trains and improves Apple Intelligence, Siri, and Apple's AI products. Separate from standard Applebot, which powers Siri search and Spotlight Suggestions.
- **Impact of blocking:** content may not be used in Apple Intelligence features. Standard Siri and Spotlight are unaffected, since Applebot controls those.
- **Recommendation: ALLOW.** Apple Intelligence ships across 2B+ active devices.

#### Amazonbot
- **Operator:** Amazon
- **User-Agent:** `Amazonbot`
- **Full string:** `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5 (compatible; Amazonbot/0.1; +https://developer.amazon.com/support/amazonbot)`
- **Purpose:** indexes content for Alexa answers and Amazon's AI features.
- **Impact of blocking:** content will not appear in Alexa voice responses or Amazon's AI-powered search.
- **Recommendation: ALLOW.** Relevant for voice search. Lower priority than Tier 1, no downside.

#### FacebookBot
- **Operator:** Meta
- **User-Agent:** `FacebookBot`
- **Purpose:** used for AI features across Facebook, Instagram, WhatsApp, and the Meta AI assistant.
- **Impact of blocking:** content may not be reachable by Meta AI. Link previews on Facebook and Instagram use a different crawler and are unaffected.
- **Recommendation: ALLOW.** Meta AI is embedded in apps with 3B+ combined users.

---

### Tier 3: Training-Only Crawlers (allow or block based on strategy)

These crawlers feed model training rather than live search features. Blocking them does not affect AI search visibility.

#### CCBot
- **Operator:** Common Crawl (nonprofit)
- **User-Agent:** `CCBot`
- **Full string:** `CCBot/2.0 (https://commoncrawl.org/faq/)`
- **Purpose:** builds the Common Crawl dataset, used as training data by many AI companies including Google, Meta, and Stability AI.
- **Impact of blocking:** content will not appear in future Common Crawl datasets. No effect on any live AI search product.
- **Recommendation: CONTEXT-DEPENDENT.** Allow for maximum long-term training presence, block to control training data usage. No impact on search visibility.

#### anthropic-ai
- **Operator:** Anthropic
- **User-Agent:** `anthropic-ai`
- **Purpose:** used for AI safety research and Claude model training. Separate from ClaudeBot, which powers live features.
- **Impact of blocking:** content will not be used for Claude training. Claude's live search and web browsing are unaffected, since ClaudeBot controls those.
- **Recommendation: CONTEXT-DEPENDENT.** Same reasoning as CCBot.

#### Bytespider
- **Operator:** ByteDance
- **User-Agent:** `Bytespider`
- **Purpose:** feeds ByteDance AI products including TikTok's AI features and Doubao, their ChatGPT competitor in China.
- **Impact of blocking:** content will not be used for ByteDance AI products. Minimal impact for Western-market businesses.
- **Recommendation: BLOCK** for most Western businesses. Aggressive crawling behavior has been reported and search visibility benefit is minimal. **ALLOW** when targeting Chinese or Asian markets.

#### cohere-ai
- **Operator:** Cohere
- **User-Agent:** `cohere-ai`
- **Purpose:** Cohere model training. Cohere powers enterprise AI solutions and the Coral chat product.
- **Impact of blocking:** content will not be used for Cohere training. Minimal consumer-facing impact.
- **Recommendation: CONTEXT-DEPENDENT.** Low priority. Decide based on the site's general training data stance.

---

## Recommendation Matrix

| Crawler | Tier | Recommendation | Reason |
|---|---|---|---|
| GPTBot | 1 | **ALLOW** | Powers ChatGPT Search (300M+ users) |
| OAI-SearchBot | 1 | **ALLOW** | Search-only, no training use |
| ChatGPT-User | 1 | **ALLOW** | User-initiated browsing |
| ClaudeBot | 1 | **ALLOW** | Claude web search and analysis |
| PerplexityBot | 1 | **ALLOW** | Best referral traffic AI search |
| Google-Extended | 2 | **ALLOW** | Gemini features, no search rank impact |
| GoogleOther | 2 | **ALLOW** | Google AI research |
| Applebot-Extended | 2 | **ALLOW** | Apple Intelligence (2B+ devices) |
| Amazonbot | 2 | **ALLOW** | Alexa and Amazon AI |
| FacebookBot | 2 | **ALLOW** | Meta AI (3B+ app users) |
| CCBot | 3 | Context | Training data only |
| anthropic-ai | 3 | Context | Training data only |
| Bytespider | 3 | **BLOCK** | Aggressive crawler, low benefit |
| cohere-ai | 3 | Context | Training data only |

### Maximum AI Visibility robots.txt

For sites that want maximum AI search visibility:

```
# AI Crawlers - ALLOWED for AI search visibility
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: GoogleOther
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: FacebookBot
Allow: /

# AI Crawlers - BLOCKED (aggressive / low value)
User-agent: Bytespider
Disallow: /

User-agent: CCBot
Disallow: /
```

---

## Analysis Procedure

### Step 1: Fetch and Parse robots.txt

1. Retrieve `[domain]/robots.txt`.
2. Parse all User-agent directives and their Allow/Disallow rules.
3. For each crawler in the reference list above:
   - Check for a specific User-agent block for that crawler
   - Check for a wildcard (`User-agent: *`) block that would apply
   - Determine effective access: **Allowed**, **Blocked**, or **Not Mentioned** (inherits wildcard rules)
4. Note any `Crawl-delay` directives that would slow AI crawler access.
5. Check for `Sitemap` directives. AI crawlers use these for discovery.

### Step 2: Check Meta Robots Tags

For a sample of 5-10 key pages, fetch the HTML and check for:

- `<meta name="robots" content="noindex">` blocks all bots
- `<meta name="robots" content="nofollow">` prevents link following
- `<meta name="robots" content="noai">` emerging tag to block AI use
- `<meta name="robots" content="noimageai">` blocks AI image training
- Bot-specific tags such as `<meta name="GPTBot" content="noindex">`

Record any page-level overrides of the robots.txt directives.

### Step 3: Check HTTP Headers

For the same sample pages, check response headers for:

- `X-Robots-Tag: noindex`, the header equivalent of meta noindex
- `X-Robots-Tag: noai` to block AI use
- `X-Robots-Tag: noimageai` to block AI image training
- Bot-specific headers such as `X-Robots-Tag: GPTBot: noindex`

HTTP headers override meta tags and apply to non-HTML resources too.

### Step 4: Check for AI-Specific Files

1. `/llms.txt` (emerging standard for AI crawler guidance)
2. `/.well-known/ai-plugin.json` (OpenAI plugin manifest)
3. `/ai.txt` (proposed standard, similar to ads.txt for AI)

Record presence, absence, and quality of each.

### Step 5: Assess JavaScript Rendering Requirements

1. Check whether the site is a Single Page Application or heavily JavaScript-rendered.
2. AI crawlers vary in JS rendering ability:
   - GPTBot: limited JS rendering
   - ClaudeBot: limited JS rendering
   - PerplexityBot: limited JS rendering
   - Googlebot: full JS rendering, and Google-Extended inherits this
3. Flag any critical content that requires JS rendering.
4. Check for Server-Side Rendering or Static Site Generation as mitigations.

### Step 6: Parse Content Signals

Using the robots.txt already fetched in Step 1, scan for `Content-Signal:` directives (IETF draft `draft-romm-aipref-contentsignals`). No additional HTTP request is needed.

1. Scan every line for one starting with `Content-Signal:`, case-insensitive.
2. If found:
   - Parse all key=value pairs, splitting on `,` then on `=`
   - Validate keys against the known set: `ai-train`, `search`, `ai-personalization`, `ai-retrieval`
   - Validate values. Only `yes` and `no` are valid
   - Flag unknown keys or invalid values as a warning. The spec is still an IETF draft
   - Record as **Pass** and surface parsed values with plain-English meaning
3. If absent, record as **Recommendation**. The site has not declared AI usage preferences.

---

## Scoring

The AI Crawler Access Score:

| Component | Weight | Scoring |
|---|---|---|
| Tier 1 crawlers allowed | 50% | 20 points per Tier 1 crawler allowed (5 crawlers = 100 max, scaled to 50) |
| Tier 2 crawlers allowed | 25% | 20 points per Tier 2 crawler allowed (5 crawlers = 100 max, scaled to 25) |
| No blanket AI blocks | 15% | Full points when there is no `User-agent: *` `Disallow: /` and no noai meta tags |
| AI-specific files present | 10% | 5 points for llms.txt, 5 points for a sitemap accessible to AI crawlers |

Final score is the sum of the weighted components, capped at 100.

---

## Output Format

Write `GEO-CRAWLER-ACCESS.md` with these sections:

**Header** — report title with the domain, analysis date, and robots.txt status (Found / Not Found / Error).

**Crawler Access Summary** — a table with one row per crawler from the reference list, with columns: Crawler, Operator, Tier, Status (Allowed / Blocked / Not Mentioned), Impact.

**AI Visibility Score** — the score out of 100, plus the breakdown: Tier 1 access (X of 5 allowed), Tier 2 access (X of 5 allowed), Tier 3 access (X of 4 allowed).

**Critical Issues** — every Tier 1 crawler that is blocked, with the specific robots.txt line responsible.

**Recommendations** — immediate actions listing the exact robots.txt changes needed, followed by the complete recommended robots.txt block for AI crawlers.

**Additional Technical Findings** — meta robots tags, X-Robots-Tag headers, JavaScript rendering assessment, llms.txt presence, sitemap accessibility.

**Content Signals (IETF Draft)** — status Present or Absent. If present, table each signal key, its value, and its plain-English meaning (for example `ai-train: no` means opted out of AI model training, `search: yes` means AI-powered search results are permitted). If absent, recommend adding a directive such as `Content-Signal: ai-train=no, search=yes, ai-retrieval=yes` to robots.txt and point to https://contentsignals.org/ for the full spec.

---

## Note on the Full Suite

This is the AI crawler analysis skill from the geo-seo-claude toolkit, which ships 15 skills covering full GEO audits, citability scoring, llms.txt generation, brand mention scanning, schema markup, and client reporting. Run this one standalone as a CLAUDE.md, or install the whole suite from https://github.com/zubair-trabzada/geo-seo-claude
