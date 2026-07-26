# Brand Mention Scanner

Scan a brand's presence across the platforms AI models rely on for entity recognition and citation decisions. Produce a Brand Authority Score (0-100) with platform-specific recommendations.

## Core Insight

Brand mentions correlate roughly 3x more strongly with AI visibility than traditional backlinks. An Ahrefs study published in December 2025, covering 75,000 brands across AI search platforms, found that **unlinked brand mentions**, references to a brand name without a hyperlink, predict whether AI systems cite and recommend a brand better than Domain Rating or backlink count.

The platform where the mention appears matters enormously. A mention on YouTube or Reddit carries far more weight for AI citation than a mention on a low-authority blog, because AI training data and retrieval systems disproportionately index high-engagement platforms.

This inverts a core assumption of traditional SEO. A backlink from a high-DR site is the gold standard in SEO. In GEO, an unlinked mention on Reddit or in a YouTube video description may beat a dofollow backlink from a DR 70 blog.

---

## Platform Importance Ranking

Based on the Ahrefs December 2025 study with corroborating research from Profound (2025) and Terakeet (2025).

### 1. YouTube — Correlation ~0.737 (strongest)

Why it leads:

- YouTube is the second-largest search engine and the largest video platform globally, 2.5B+ monthly users
- AI training datasets heavily incorporate YouTube transcripts, descriptions, and metadata
- Gemini and Google AI Overviews reference YouTube content directly
- Perplexity and ChatGPT both index and cite YouTube video content
- Transcripts carry natural-language mentions in conversational context, which matches how models process text

What to check:

- **Brand channel:** does one exist? Subscribers, video count, upload frequency
- **Third-party video mentions:** other channels mentioning the brand, and in what context (reviews, tutorials, comparisons)
- **Video descriptions:** brand name appearing in descriptions of industry-relevant content
- **Transcripts:** brand mentioned in spoken content of relevant videos
- **YouTube search presence:** results for the brand name, and their sentiment
- **Comments:** brand mentioned in comments on relevant industry videos

Scoring (0-100):

| Score | Criteria |
|---|---|
| 90-100 | Active channel with 10K+ subscribers, regular uploads, brand in 20+ third-party videos, appears in YouTube search for industry terms |
| 70-89 | Active channel with 1K+ subscribers, brand in 10-19 third-party videos, some YouTube search presence |
| 50-69 | Channel exists with some content, brand in 5-9 third-party videos, limited search presence |
| 30-49 | Channel exists but inactive, brand in 1-4 third-party videos |
| 10-29 | No channel or empty channel, brand in 1-2 videos only |
| 0-9 | No YouTube presence |

### 2. Reddit — high correlation

Why it matters:

- Reddit is one of the most heavily indexed platforms in AI training data, confirmed by Google's $60M/year Reddit licensing deal in 2024
- AI systems weight Reddit heavily for product recommendations, comparisons, and sentiment
- Users append "reddit" to an estimated 10-15% of Google searches when they want authentic opinions
- Perplexity frequently cites Reddit threads; ChatGPT and Claude both reference Reddit discussions on product and service questions

What to check:

- **Subreddit presence:** which relevant subreddits discuss the brand
- **Mention volume:** thread count and trend
- **Sentiment:** positive, negative, or neutral, with common praise points and complaints
- **Official presence:** official account, participation, any AMAs
- **Recommendation threads:** does the brand appear in "what do you recommend for X" threads, as the top pick or an also-ran
- **Own subreddit:** exists, and how active

Scoring (0-100):

| Score | Criteria |
|---|---|
| 90-100 | Frequently recommended in relevant subreddits, predominantly positive sentiment, active official presence, own subreddit with 5K+ members |
| 70-89 | Regularly mentioned, mostly positive sentiment, some official presence, appears in multiple recommendation threads |
| 50-69 | Mentioned in several relevant threads, mixed sentiment, community recognizes the name |
| 30-49 | Occasional mentions limited to 1-2 subreddits, no official presence |
| 10-29 | Rare mentions, brand largely unknown on Reddit |
| 0-9 | No Reddit presence |

### 3. Wikipedia — high correlation

Why it matters:

- Wikipedia is one of the highest-authority sources in AI training data; every major model trained on Wikipedia dumps
- AI systems use Wikipedia for entity recognition, deciding whether a brand is a real entity worth knowing about
- Wikidata provides machine-readable facts that models use for knowledge graph construction
- A Wikipedia page signals notability, which correlates with AI systems treating the brand as authoritative

What to check:

- **Company article:** exists? Flagged for deletion or quality issues?
- **Founder article:** a founder or CEO page is a strong authority signal
- **Citations:** is the brand's site cited as a reference in any article
- **Wikidata item:** Q-number, and how complete the properties are
- **Mentions elsewhere:** industry articles, competitor pages, category pages
- **Article quality:** stub, start-class, or higher

Scoring (0-100):

| Score | Criteria |
|---|---|
| 90-100 | Detailed article (B-class or higher), complete Wikidata entry, cited as reference in multiple articles, founder has a page |
| 70-89 | Article exists (start-class or higher), Wikidata entry exists, brand mentioned in 2+ other articles |
| 50-69 | Article exists (stub or start), basic Wikidata entry, limited mentions elsewhere |
| 30-49 | No article, but the brand is mentioned in other articles or cited as a reference; Wikidata entry may exist |
| 10-29 | Passing reference in 1-2 articles only |
| 0-9 | No Wikipedia or Wikidata presence |

### 4. LinkedIn — moderate correlation

Why it matters:

- LinkedIn content is increasingly indexed by AI systems for professional and B2B context
- Company pages and employee thought leadership build brand entity signals
- Models reference LinkedIn for company information, team credentials, and professional authority

What to check:

- **Company page:** exists? Follower count, post frequency
- **Employee thought leadership:** leadership posting content that mentions the brand
- **Third-party mentions:** posts by non-employees, analysts, customers
- **Long-form articles:** LinkedIn articles about or mentioning the brand
- **Employee profiles:** detailed company descriptions, strong professional profiles
- **Engagement:** typical likes, comments, shares on company posts

Scoring (0-100):

| Score | Criteria |
|---|---|
| 90-100 | Active page with 10K+ followers, regular leadership thought leadership, frequent mentions by industry professionals, strong employee profiles |
| 70-89 | Active page with 5K+ followers, some employee thought leadership, occasional third-party mentions |
| 50-69 | Page with 1K+ followers, irregular posting, limited third-party mentions |
| 30-49 | Page exists but sparse or inactive, few followers, no third-party mentions |
| 10-29 | Basic page with minimal information |
| 0-9 | No LinkedIn company page |

### 5. Other platforms — supplementary

**Quora.** Answers frequently appear in AI training data and Perplexity citations. Check whether the brand is mentioned in answers to industry questions and whether it has an official presence. Moderate signal for B2C, lower for B2B.

**Stack Overflow / Stack Exchange.** Critical for developer-facing brands. Check whether the product is discussed in questions and answers, whether it has a tag, and whether the brand answers officially. High for technical products, irrelevant for most B2C.

**GitHub.** Critical for open-source and developer-focused brands. Check for a GitHub organization, repository stars, and mentions in other repos' docs or discussions.

**Industry forums and communities.** Niche authority signals models pick up from domain-specific data. Check Hacker News for tech, Product Hunt for startups, and industry-specific communities.

**News and press.** Coverage builds entity authority and recency. Check which outlets covered the brand, how recently, and in what context. A mention in the last 6 months is far more valuable than one from 3 years ago.

**Podcasts.** A growing training-data source as transcripts get indexed. Check whether the brand or its leadership has appeared on podcasts and whether those transcripts are indexed.

---

## Composite Brand Authority Score

| Platform | Weight | Rationale |
|---|---|---|
| YouTube | 25% | Strongest correlation with AI citation (0.737) |
| Reddit | 25% | Second strongest; critical for product recommendations |
| Wikipedia / Wikidata | 20% | Entity recognition foundation, training-data cornerstone |
| LinkedIn | 15% | Professional authority signals, B2B relevance |
| Other platforms | 15% | Quora, GitHub, news, forums, podcasts |

```
Brand_Authority_Score = (YouTube * 0.25) + (Reddit * 0.25) + (Wikipedia * 0.20) + (LinkedIn * 0.15) + (Other * 0.15)
```

| Score | Rating | Interpretation |
|---|---|---|
| 85-100 | Dominant | Well-recognized entity across AI platforms. Highly likely to be cited and recommended. |
| 70-84 | Strong | Solid cross-platform presence. AI systems likely recognize and cite it for relevant queries. |
| 50-69 | Moderate | Presence on some platforms with gaps. AI citation is inconsistent. |
| 30-49 | Weak | Limited presence. AI systems may not recognize the brand as a distinct entity. |
| 0-29 | Minimal | Negligible presence. AI systems are unlikely to cite or recommend it. |

---

## Analysis Procedure

### Step 1: Gather brand information

From the user or the website:

- Brand name, exact spelling, including official variants
- Founder or CEO names
- Domain URL
- Industry or category
- Top 3 products or services
- Key competitors, for comparison context

### Step 2: Scan each platform

**YouTube:**

1. Search `[brand name] site:youtube.com`
2. Check `youtube.com/@[brand-name]` or `youtube.com/c/[brand-name]` for the official channel
3. Search `"[brand name]" site:youtube.com` for exact-match mentions in descriptions
4. Record subscriber count, video count, latest upload date, third-party mention count

**Reddit:**

1. Search `[brand name] site:reddit.com`
2. Search `"[brand name]" site:reddit.com` for exact match
3. Check `reddit.com/r/[brand-name]` for an official subreddit
4. Check `reddit.com/user/[brand-name]` for an official account
5. Record thread count, dominant subreddits, sentiment, recommendation frequency

**Wikipedia — use both methods, search alone produces false negatives.**

Method 1, API check, run this first. Requires Python 3 with the `requests` package (`pip install requests`):

```bash
python3 -c "
import requests, json
from urllib.parse import quote_plus
brand = '[Brand_Name]'
api_url = f'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch={quote_plus(brand)}&format=json'
r = requests.get(api_url, headers={'User-Agent': 'GEO-Audit/1.0'}, timeout=15)
results = r.json().get('query', {}).get('search', [])
if results and brand.lower() in results[0].get('title', '').lower():
    print(f'WIKIPEDIA PAGE EXISTS: {results[0][\"title\"]}')
    print(f'URL: https://en.wikipedia.org/wiki/{results[0][\"title\"].replace(\" \", \"_\")}')
else:
    print('No direct Wikipedia page found')
wd_url = f'https://www.wikidata.org/w/api.php?action=wbsearchentities&search={quote_plus(brand)}&language=en&format=json'
r2 = requests.get(wd_url, headers={'User-Agent': 'GEO-Audit/1.0'}, timeout=15)
entities = r2.json().get('search', [])
if entities:
    print(f'WIKIDATA ENTRY: {entities[0].get(\"id\", \"\")} — {entities[0].get(\"description\", \"\")}')
"
```

Method 2, direct URL check as backup: fetch `https://en.wikipedia.org/wiki/[Brand_Name]` and confirm the page loads instead of redirecting to search. Do the same for `https://en.wikipedia.org/wiki/[Founder_Name]`.

Method 3, search, for supplemental information only: `[brand name] site:wikipedia.org` and `[brand name] site:wikidata.org`.

Web search alone is not reliable for Wikipedia presence. Run the API check first. If the API says a page exists, it exists. Do not override that with a search result that failed to find it.

Record article existence, quality, edit history, and Wikidata completeness.

**LinkedIn:**

1. Search `[brand name] site:linkedin.com`
2. Check `linkedin.com/company/[brand-name]`
3. Record follower count, post frequency, listed employee count, engagement levels

**Other platforms:**

1. `[brand name] site:quora.com`
2. `[brand name] site:stackoverflow.com` for technical brands
3. `[brand name] site:github.com` for technical brands
4. `[brand name] site:news.ycombinator.com`
5. `"[brand name]"` broadly for news mentions, filtered to the last 6 months

### Step 3: Assess sentiment

For Reddit and other discussion platforms, judge sentiment from the most recent and most prominent mentions:

| Sentiment | Indicators |
|---|---|
| Positive | Recommendations ("I love [brand]", "we switched to [brand] and...", "highly recommend"), upvoted mentions, favorable comparisons |
| Neutral | Factual mentions ("we use [brand] for..."), questions about the brand, balanced comparisons |
| Negative | Complaints ("avoid [brand]", "[brand] has terrible support"), downvoted recommendations, unfavorable comparisons |
| Mixed | Both present. Note the ratio and the primary themes. |

### Step 4: Competitive context (optional)

Scan competitor platform presence for calibration. A brand with moderate Reddit presence in an industry where competitors have none is relatively strong.

### Step 5: Calculate the score

1. Score each platform 0-100 using the rubrics
2. Apply weights for the composite
3. Identify the strongest and weakest platforms
4. Write specific, actionable recommendations for the weakest platforms

---

## Output Format

Write `GEO-BRAND-MENTIONS.md`:

```markdown
# Brand Authority Report: [Brand Name]

**Analysis Date:** [Date]
**Brand:** [Brand Name]
**Domain:** [URL]
**Industry:** [Industry]

---

## Brand Authority Score: [X]/100 ([Rating])

### Platform Breakdown

| Platform | Score | Weight | Weighted | Status |
|---|---|---|---|---|
| YouTube | [X]/100 | 25% | [X] | [Active Channel / Mentioned / Absent] |
| Reddit | [X]/100 | 25% | [X] | [Active / Discussed / Absent] |
| Wikipedia | [X]/100 | 20% | [X] | [Article / Mentioned / Absent] |
| LinkedIn | [X]/100 | 15% | [X] | [Active / Basic / Absent] |
| Other Platforms | [X]/100 | 15% | [X] | [Summary] |
| **Total** | | | **[X]/100** | |

---

## Platform Detail

### YouTube ([X]/100)

**Official Channel:** [Yes/No] | [URL if exists]
**Subscribers:** [Count or N/A]
**Videos:** [Count or N/A]
**Last Upload:** [Date or N/A]
**Third-Party Mentions:** [Estimated count]
**Key Findings:**
- [Finding 1]
- [Finding 2]

### Reddit ([X]/100)

**Official Account:** [Yes/No] | [URL if exists]
**Own Subreddit:** [Yes/No] | [URL and member count if exists]
**Mention Volume:** [Estimated thread count]
**Primary Subreddits:** [List]
**Sentiment:** [Positive/Negative/Neutral/Mixed]
**Key Findings:**
- [Finding 1]
- [Finding 2]

### Wikipedia ([X]/100)

**Company Article:** [Yes/No] | [URL if exists]
**Founder Article:** [Yes/No] | [URL if exists]
**Wikidata Entry:** [Yes/No] | [Q-number if exists]
**Cited in Other Articles:** [Yes/No] | [Which articles]
**Key Findings:**
- [Finding 1]
- [Finding 2]

### LinkedIn ([X]/100)

**Company Page:** [Yes/No] | [URL if exists]
**Followers:** [Count or N/A]
**Post Frequency:** [Weekly/Monthly/Rare/Never]
**Key Findings:**
- [Finding 1]
- [Finding 2]

### Other Platforms ([X]/100)

| Platform | Presence | Notes |
|---|---|---|
| Quora | [Yes/No] | [Brief note] |
| Stack Overflow | [Yes/No] | [Brief note] |
| GitHub | [Yes/No] | [Brief note] |
| Hacker News | [Yes/No] | [Brief note] |
| News/Press | [Yes/No] | [Brief note] |
| Podcasts | [Yes/No] | [Brief note] |

---

## Recommendations

### Immediate Actions (Week 1-2)

1. **[Platform]:** [Specific action with expected impact]
2. **[Platform]:** [Specific action]

### Short-Term Strategy (Month 1-3)

1. **[Platform]:** [Strategy with tactics]
2. **[Platform]:** [Strategy with tactics]

### Long-Term Authority Building (Month 3-12)

1. **[Platform]:** [Long-term strategy]
2. **[Platform]:** [Long-term strategy]

---

## Competitive Context

| Brand | YouTube | Reddit | Wikipedia | LinkedIn | Other | Total |
|---|---|---|---|---|---|---|
| [Subject Brand] | [X] | [X] | [X] | [X] | [X] | **[X]** |
| [Competitor 1] | [X] | [X] | [X] | [X] | [X] | **[X]** |
| [Competitor 2] | [X] | [X] | [X] | [X] | [X] | **[X]** |

## Key Takeaway

[1-2 sentences on the brand's AI visibility standing and the single most impactful action to take]
```

---

## Reference Data

### Correlation strengths (Ahrefs, December 2025, 75K brands)

| Signal | Correlation with AI citation | Traditional SEO value |
|---|---|---|
| YouTube mentions | ~0.737 | Low, not a ranking factor |
| Reddit mentions | High, exact coefficient not published | Low |
| Wikipedia presence | High | Moderate, trust signal |
| LinkedIn presence | Moderate | Low |
| Domain Rating | ~0.266 | Very high |
| Backlink count | ~0.266 | Very high |
| Organic traffic | Moderate | Very high |

The signals that matter most for AI visibility, YouTube and Reddit, are almost irrelevant in traditional SEO. The signals that dominate traditional SEO, backlinks and DR, are weak predictors of AI visibility. Optimizing for both requires two different playbooks.

### Building presence

**YouTube quick wins:**

- Create a channel and upload 3-5 explainer videos on your core topics
- Put the brand name in video titles, descriptions, and spoken content
- Pursue guest appearances on relevant industry channels
- Make comparison and "alternatives" videos, which AI cites for comparison queries

**Reddit quick wins:**

- Identify 3-5 subreddits where your audience is active
- Participate authentically. Reddit communities detect and punish shilling.
- Run an AMA if it fits the brand
- Monitor and respond to brand mentions
- Post genuinely helpful content that surfaces your expertise

**Wikipedia strategy:**

- Hire a Wikipedia-knowledgeable consultant. Do not edit your own article, that is a conflict of interest.
- Build notability first through press coverage, academic citations, and industry recognition
- Complete your Wikidata entry even without a Wikipedia article
- Contribute to industry-relevant articles where your brand can be cited as a source

**LinkedIn quick wins:**

- Complete the company page and post on a regular cadence
- Have leadership publish thought leadership weekly
- Publish long-form articles on topics where the brand has unique expertise
- Engage with industry discussions to raise visibility in professional contexts
