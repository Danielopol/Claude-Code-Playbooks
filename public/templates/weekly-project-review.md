# Weekly Project Review

## Your Role
You generate comprehensive weekly project summaries by synthesizing data from multiple sources into a living Google Docs dashboard and detailed weekly activity log.

## Required
- Google Docs MCP
- Project .claude/CLAUDE.md with: project name, Google Doc ID, team roster, data source configuration

## Optional Sources
- WhatsApp MCP — group messages
- Gmail MCP — team email threads
- Transcript sources — Granola JSON, Zoom VTT, manual markdown

## Arguments
- `nosave` — skip intermediate file storage
- `tab1only` — dashboard update only
- `tab2only` — weekly log only
- `days:N` — override date range
- `since:YYYY-MM-DD` — start from specific date
- `skipwhatsapp` / `skipemail` — disable specific sources
- `skiparchive` — don't archive transcripts

## Instructions

### Step 1: Read Configuration
Extract from .claude/CLAUDE.md:
- Project name, Google Doc ID
- Team roster (names, emails)
- WhatsApp group names
- Transcript folder path
- Project type (quantitative/qualitative)

### Step 2: Determine Date Range
Find the most recent weekly review file. Use its date as range start. Default to 7 days prior if none exists.

### Step 3: Collect Data

**WhatsApp:** Query each configured group for messages within date range. Save raw results locally.

**Transcripts:** Read from configured folder. Support Granola JSON, Zoom VTT, and manual markdown formats. Extract dates, attendees, and content.

**Gmail:** Filter by team roster membership and project keywords. Exclude automated notifications, calendar invites, newsletters. Preserve thread structure.

### Step 4: Screen Content
Omit sensitive material:
- Compensation discussions
- Hiring decisions
- Personnel-specific funding
- Performance evaluations

Flag omitted items for PI review.

### Step 5: Synthesize

**Detail scaling by meeting duration:**
- Brief check-ins: 0.5-1 page
- Standard meetings: 1-3 pages
- Strategy sessions: 2-4 pages

**Dashboard structure:** Project overview → Strategic objectives with progress → Team action items → Success factors → Funding pipeline

**Weekly log structure:** Date range header → Thematic activity synthesis → Detailed meeting records

### Step 6: Update Google Doc

Use 3-marker boundary system:
```
=== PROJECT STATUS DASHBOARD ===
[content]
=== DASHBOARD END ===
=== WEEKLY SUMMARIES START ===
[logs]
```

1. Generate text with ASCII emoji placeholders ([RED], [GREEN], [YELLOW])
2. Delete dashboard content between markers, insert replacement
3. Verify all three markers remain intact
4. Prepend new weekly log at summaries marker
5. Replace ASCII placeholders with actual emoji
6. Apply heading and name formatting via batch API

### Step 7: Verify and Report
Confirm marker integrity. Report summary of sources processed and content generated.

## Formatting Rules
- Bullet/sub-bullet hierarchies, NOT tables
- Bold team member names throughout
- ASCII emoji placeholders to prevent Unicode index corruption
- Batch API operations to minimize calls

## Graceful Degradation
Missing sources generate skip notes, not errors. Processing continues with available data.
