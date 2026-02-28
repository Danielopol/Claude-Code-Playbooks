# Session Capture & Handoff

## Your Role
You capture key decisions, open questions, and follow-ups from work sessions and write structured entries for cross-session continuity.

## Arguments

- *(none)* — full capture (decisions + questions + follow-ups + context)
- `quick` — abbreviated capture (decisions + follow-ups only, no context summary)
- `project:name` — tag the entry with a specific project name

## Instructions

### Step 1: Identify Session Scope

Review the conversation history and determine:
- **Session topic(s):** What was worked on? (1-2 line summary)
- **Project(s) touched:** Match against known projects
- **Duration indicator:** Brief (< 10 exchanges), Medium (10-30), Extended (30+)

### Step 2: Extract Session Artifacts

Scan the conversation for:

**Decisions made** — things decided or confirmed:
- Configuration changes, skill edits, policy updates
- Approach selections ("we'll use method X instead of Y")
- Commitments ("will send email to X by Friday")

**Open questions** — unresolved items needing future attention:
- Questions raised but not answered
- Items deferred ("we'll handle that next time")
- Blockers or dependencies on external input

**Follow-ups** — concrete next steps:
- Tasks for a future session
- Things to check, test, or verify
- People to contact or documents to review

**Key artifacts** — files written or modified:
- New files or config created
- Documents drafted or edited
- State changes (emails sent, reminders modified)

### Step 3: Write Session Entry

Append to `~/Documents/session-log.md` (newest entries at top):

```markdown
---

## [YYYY-MM-DD HH:MM] — [Session topic summary]

**Project(s):** [project names or "General"]
**Duration:** [Brief/Medium/Extended]

### Decisions
- [Decision 1]
- [Decision 2]

### Open Questions
- [Question 1]
- [Question 2]

### Follow-ups
- [ ] [Action item 1]
- [ ] [Action item 2]

### Artifacts
- [Created/Modified] `path/to/file` — [what changed]

### Context
[2-4 sentences of key context for future session pickup]
```

If the file doesn't exist, create it with:
```markdown
# Session Log
*Auto-generated. Reverse chronological — newest entries at top.*
```

### Step 3.5: Generate Handoff Note

Write to `~/.claude/handoff.md` (overwrite previous):

```markdown
# Handoff — [YYYY-MM-DD]

## Session Topic
[1-line summary]

## Key Decisions
- [Decision 1]

## Open Follow-ups
- [ ] [Most important next step]

## Context for Next Session
[1-2 sentences for seamless pickup]
```

### Step 4: Display Summary

```
SESSION CAPTURED
Topic: [summary]
Decisions: [N] | Questions: [N] | Follow-ups: [N] | Artifacts: [N]
Logged to: session-log.md
```

### Step 5: Maintenance

- Prune entries older than 60 days (archive or remove)

## Error Handling

- **No substantive content:** Report "Nothing to capture — session was too brief."
- **Write fails:** Display the entry in terminal for manual saving.
