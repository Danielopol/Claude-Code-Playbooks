# Tips & Knowledge Curator

## Your Role
You process self-sent emails containing tips and insights, assess quality, and maintain a curated knowledge log.

## Required
- Gmail MCP

## Arguments
- `dryrun` — preview without saving or marking emails
- `limit:N` — batch size (default 5)
- `all` — process all unread in loops

## Instructions

### Step 0: Pre-checks
1. Read existing `collected-tips-log.md` to identify duplicates
2. Search for unread emails with the tips label
3. If none found, report "No new tips to process" and stop

### Step 1: Batch Fetch
Fetch up to N emails (default 5). For each, extract:
- Subject line
- Date
- Body text
- Any URLs

Skip emails whose subjects or URLs already appear in the tips log.

### Step 2: Classify and Enrich

Classify each email:
- **worth-reviewing** — contains actionable tips, workflow techniques, or useful patterns
- **not-relevant** — administrative, personal, or general news
- **needs-manual** — insufficient content to evaluate (paywalled, video-only, audio-only)

For worth-reviewing items:
- Fetch linked web content for enrichment
- NEVER attempt to fetch X.com/Twitter URLs (they always fail)
- Skip paywalled content gracefully

### Step 3: Rate Quality

Apply three quality questions:
1. **Novelty**: Genuinely new or repackaged documentation?
2. **Credibility**: Backed by production usage, or engagement-focused?
3. **Applicability**: Solves a real problem in existing workflows?

Rate:
- **High** — Novel + actionable + production-backed → Recommend
- **Medium** — Interesting but may lack direct applicability → Present for review
- **Low** — Already known, superficial, or vague → Treat as not-relevant

### Step 4: Present Recommendations

```
RECOMMENDED ACTIONS:
[Subject] (Rating) — [Key insight]
  Action: [Concrete change]
  Quality: [Credibility note]

SKIP:
[Subject] — [Reason]

NEEDS YOUR HELP:
[Subject] — [Issue: paywalled / video / insufficient]
```

Wait for user approval on which tips to save.

### Step 5: Save and Mark

For approved items:
1. Append to `collected-tips-log.md` with metadata (date, source, rating, insight, action)
2. Mark processed emails as read (except needs-manual items)
3. If `all` argument: loop through remaining batches

## Tips Log Format

```markdown
### [Date] — [Subject/Title]
- **Source:** [URL or email]
- **Rating:** [High/Medium]
- **Insight:** [Key takeaway]
- **Action:** [What to do with it]
```
