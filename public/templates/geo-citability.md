# AI Citability Scoring

Score a web page on how likely AI systems (ChatGPT, Claude, Perplexity, Gemini, Bing Copilot) are to quote it as a source, then produce specific rewrites that raise the score.

## Core Insight

AI language models cite passages that meet specific structural criteria. Research from Princeton, Georgia Tech, and IIT Delhi (2024) found GEO-optimized content achieves 30-115% higher visibility in AI-generated responses. The key finding: AI systems preferentially extract passages that are **134-167 words long**, **self-contained** (understandable without surrounding context), **fact-rich** (specific statistics, dates, named entities), and **answer a question in the first 1-2 sentences**.

This differs from traditional SEO copywriting, which optimizes for keyword density and engagement metrics. Citability optimizes for **extractability**: how easily an AI system can pull a passage out of your page and present it as a direct answer.

---

## Citability Scoring Rubric (0-100)

### Category 1: Answer Block Quality — 30% of total

Does the content contain clear, quotable answer passages an AI can extract verbatim?

| Score | Criteria |
|---|---|
| **90-100** | Every major section opens with a 1-2 sentence direct answer. Uses "X is..." or "X refers to..." patterns. First 40-60 words of each section stand alone as a complete answer. |
| **70-89** | Most sections have clear answer openings. Some definition patterns present. Answers are identifiable but may need minor context. |
| **50-69** | Some sections have answer-like openings but many bury the answer mid-paragraph or at the end. Few explicit definition patterns. |
| **30-49** | Answers are generally buried in long paragraphs. No consistent definition patterns. Narrative-driven rather than answer-driven. |
| **0-29** | No identifiable answer blocks. Entirely narrative, conversational, or fragmented. AI would struggle to extract any quotable passage. |

What to look for:

- **Definition patterns**: "X is [definition]." / "X refers to [explanation]." / "X means [meaning]."
- **Answer-first structure**: the answer appears in the first sentence, supporting detail follows.
- **Quantified answers**: "The average cost of X is $Y" rather than "Many factors affect the cost of X."
- **Comparison answers**: "X differs from Y in three ways: [list]" rather than "X and Y are often confused."

**High-citability example:**

```
Content delivery networks (CDNs) are distributed server systems that cache and serve
web content from locations geographically close to end users. A CDN reduces latency
by 50-70% on average by serving assets from edge servers rather than a single origin
server. The three largest CDN providers as of 2025 are Cloudflare (serving approximately
20% of all websites), Amazon CloudFront, and Akamai Technologies.
```

58 words. Self-contained: yes. Facts: three specific data points. Definition pattern: yes.

**Low-citability example:**

```
If you've ever wondered why some websites load faster than others, the answer might
surprise you. There's this amazing technology that has been around for a while now.
It's changed the way we think about web performance. Let me explain how it works and
why you should care about it for your business.
```

52 words. Self-contained: no, the topic is never named. Facts: zero. Definition pattern: no.

---

### Category 2: Passage Self-Containment — 25% of total

Can individual passages be extracted and understood without the surrounding content?

| Score | Criteria |
|---|---|
| **90-100** | 80%+ of blocks fully self-contained. Each passage names its subject explicitly. No pronouns referencing earlier content. Specific facts inside the passage. |
| **70-89** | 60-79% self-contained. Most passages name their subject. Occasional pronoun references needing context. |
| **50-69** | 40-59% self-contained. Mixed explicit subjects and pronouns. Some passages require reading prior sections. |
| **30-49** | 20-39% self-contained. Heavy reliance on pronouns and contextual references. |
| **0-29** | Under 20% self-contained. A continuous narrative where extracting any paragraph loses meaning. |

Self-containment checklist, applied to each passage:

1. Does it explicitly name the subject, rather than "it," "this," or "they"?
2. Can someone understand the main point reading only this passage?
3. Does it contain at least one specific fact, statistic, or named entity?
4. Is it between 50-200 words, the optimal extraction length?
5. Does it avoid opening with a conjunction ("But," "However," "And") that implies prior context?

---

### Category 3: Structural Readability — 20% of total

Does the formatting help AI systems parse and segment the content?

| Score | Criteria |
|---|---|
| **90-100** | Clean H1 > H2 > H3 hierarchy. Question-based headings for informational content. Short paragraphs (2-4 sentences). Tables for comparisons. Ordered lists for processes, unordered for features. |
| **70-89** | Good heading hierarchy with minor skips. Some question-based headings. Mostly short paragraphs. Some tables and lists. |
| **50-69** | Hierarchy present but inconsistent. Few question-based headings. Mix of short and long paragraphs. Limited tables or lists. |
| **30-49** | Minimal heading structure. No question-based headings. Long paragraphs dominate. Rare tables or lists. |
| **0-29** | No heading structure or badly broken hierarchy. Wall-of-text paragraphs. No tables or lists. |

Structural best practices:

- **Heading hierarchy**: H1 (page title) > H2 (major sections) > H3 (subsections). Never skip levels.
- **Question-based headings**: "What is [topic]?" and "How does [topic] work?" match AI queries directly.
- **Paragraph length**: 2-4 sentences. AI systems parse short paragraphs more reliably.
- **Tables**: use for any comparison of 3+ items. AI systems extract table data with high accuracy.
- **Lists**: ordered for sequential processes, unordered for non-sequential items.
- **Bold key terms**: bold the first use of an important term. This aids AI entity recognition.

---

### Category 4: Statistical Density — 15% of total

Does the page carry specific, verifiable data points that AI systems prioritize when picking a source?

| Score | Criteria |
|---|---|
| **90-100** | 5+ specific statistics per 500 words. All claims backed by named sources or dates. Exact numbers, not "many" or "several". Percentages, dollar amounts, timeframes, named studies. |
| **70-89** | 3-4 statistics per 500 words. Most claims sourced. Mostly specific numbers with occasional vague quantifiers. |
| **50-69** | 1-2 statistics per 500 words. Some claims sourced. Mix of specific and vague numbers. |
| **30-49** | Under 1 statistic per 500 words. Few sourced claims. Predominantly vague quantifiers. |
| **0-29** | No statistics. No sourced claims. All quantifiers vague ("many," "most," "a lot"). |

Counts as a statistic:

- Specific percentages: "73% of marketers report..."
- Dollar amounts: "The average cost is $4,500 per month"
- Timeframes: "Implementation takes 6-8 weeks on average"
- Named studies: "According to the 2025 HubSpot State of Marketing Report..."
- Specific counts: "The platform integrates with 340+ tools"
- Comparison data: "40% faster than the industry average"

Does not count:

- "Many companies use..." (vague)
- "A significant percentage..." (vague)
- "Studies show that..." (no named source)
- "Experts agree..." (no named experts)

---

### Category 5: Uniqueness & Original Data — 10% of total

Does the page provide information AI systems cannot find elsewhere, making it a necessary citation?

| Score | Criteria |
|---|---|
| **90-100** | First-party research, proprietary data, original surveys, or unique datasets. Analysis found on no other page. Clear methodology described. |
| **70-89** | Some original insights or unique analysis of existing data. A distinct perspective with original examples. |
| **50-69** | Mostly synthesizes existing information, adds some unique commentary or examples. |
| **30-49** | Largely derivative. Restates common knowledge with minimal original contribution. |
| **0-29** | Entirely derivative. All information available, often verbatim, on higher-authority sources. |

Signals of unique content:

- "Our analysis of [X] data found..."
- "We surveyed [N] [professionals] and found..."
- "Based on our experience with [N] clients..."
- Custom charts, graphs, or data visualizations
- Case studies with specific named outcomes
- Original frameworks, methodologies, or taxonomies

---

## Analysis Procedure

### Step 1: Fetch and parse the page

1. Retrieve the target URL.
2. Extract the main content area, excluding navigation, footer, sidebar, and ads.
3. Preserve heading structure (H1-H6).
4. Preserve paragraph boundaries, lists, and tables.
5. Calculate total word count of the main content.

### Step 2: Segment content into blocks

Split the content at each H2 or H3. For each block, record:

- The heading text
- The full text under that heading
- Word count
- Number of paragraphs
- Number of lists and tables
- Number of statistics or data points
- Whether the block contains a definition pattern
- Whether the first 60 words form a standalone answer

### Step 3: Score each block

Calculate five sub-scores (0-100 each): answer block quality, self-containment, structural readability, statistical density, uniqueness.

**Block citability score** = (Answer × 0.30) + (SelfContain × 0.25) + (Structure × 0.20) + (Stats × 0.15) + (Unique × 0.10)

### Step 4: Calculate the page-level score

1. Average all block scores for the page-level citability score.
2. Identify the top 3 blocks as strengths.
3. Identify the bottom 3 blocks for rewriting.
4. Calculate the percentage of blocks scoring above 70, the "citability coverage" metric.

### Step 5: Generate rewrite suggestions

For each block below 60:

1. Identify the primary weakness (buried answer, no facts, poor structure).
2. Propose a rewritten opening sentence using a definition or answer-first pattern.
3. Suggest specific statistics or facts to add.
4. Recommend structural fixes: add a list, add a table, split a paragraph.

---

## Reference Data

### Optimal Passage Characteristics (from GEO research)

| Finding | Source |
|---|---|
| Optimal length for AI citation: 134-167 words | Bortolato 2025 analysis of AI Overview passages |
| Definition patterns increase citation rate 2.1x | Georgia Tech 2024 |
| Adding statistics increases citation by 40% | Princeton GEO study 2024 |
| Authority quotations increase citation by up to 115% in some categories | IIT Delhi 2024 |
| Fluency optimization increases visibility by 30% on average | Across all query types |
| Content with source citations is cited 20-25% more often | Perplexity and ChatGPT search |

### AI System Citation Preferences

| AI System | Citation Preference |
|---|---|
| **ChatGPT (Search)** | Prefers explicit definitions, named sources, recent dates. Cites 2-4 sources per response. |
| **Perplexity** | Heavily favors fact-dense passages with statistics. Cites 4-8 sources per response. Values recency highly. |
| **Claude** | Prefers well-structured, comprehensive passages. Values nuance and accuracy over brevity. |
| **Gemini (AI Overviews)** | Prefers concise answer blocks of 40-60 words. Values content already ranking in the top 10 organic results. |
| **Copilot (Bing)** | Similar to Gemini. Prefers passages from high-authority domains with clear factual claims. |

---

## Output Format

Write `GEO-CITABILITY-SCORE.md`:

```markdown
# AI Citability Analysis: [Page Title]

**URL:** [URL]
**Analysis Date:** [Date]
**Overall Citability Score: [X]/100**
**Citability Coverage:** [X]% of content blocks score above 70

---

## Score Summary

| Category | Score | Weight | Weighted |
|---|---|---|---|
| Answer Block Quality | [X]/100 | 30% | [X] |
| Passage Self-Containment | [X]/100 | 25% | [X] |
| Structural Readability | [X]/100 | 20% | [X] |
| Statistical Density | [X]/100 | 15% | [X] |
| Uniqueness & Original Data | [X]/100 | 10% | [X] |
| **Overall** | | | **[X]/100** |

---

## Strongest Content Blocks

### 1. "[Heading]" — Score: [X]/100
> [First 2 sentences of the block]

**Why it works:** [Explanation]

---

## Weakest Content Blocks (Rewrite Priority)

### 1. "[Heading]" — Score: [X]/100

**Current opening:**
> [First 2 sentences as they exist]

**Problem:** [Buried answer, no facts, etc.]

**Suggested rewrite:**
> [Rewritten opening 2-3 sentences with answer-first pattern and facts]

**Additional improvements:**
- [Add table comparing X, Y, Z]
- [Include statistic about ...]
- [Split long paragraph into 2-3 shorter ones]

---

## Quick Win Reformatting Recommendations

1. **[Specific recommendation]** — Expected citability lift: +[X] points
2. **[Specific recommendation]** — Expected citability lift: +[X] points
3. **[Specific recommendation]** — Expected citability lift: +[X] points

---

## Per-Section Scores

| Section Heading | Words | Answer Quality | Self-Contained | Structure | Stats | Unique | Overall |
|---|---|---|---|---|---|---|---|
| [H2 heading] | [N] | [X] | [X] | [X] | [X] | [X] | [X] |
```
