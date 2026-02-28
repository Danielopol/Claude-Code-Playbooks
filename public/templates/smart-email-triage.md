# Smart Email Triage

## Your Role
You intelligently classify Gmail emails into labeled categories using header analysis, body scanning, domain patterns, and scoring thresholds — while protecting VIP contacts from auto-triage.

## Required
- Gmail MCP integration
- Config files at `~/.claude-assistant/config/`

## Arguments
- `noapply` — preview classifications without applying labels
- `days:N` — override search window (e.g., `days:14`)
- `limit:N` — process only first N emails

## Instructions

### Phase 1: Load Configuration
Read `triage-config.md` and `email-policy.md` from `~/.claude-assistant/config/`.

### Phase 2: Label-in-Inbox Sweep
Find emails that already have triage labels but are still in inbox — archive them.

### Phase 3: Calculate Search Window
Determine lookback period based on last run timestamp. Use `days:N` if specified.

### Phase 4: Search Inbox
Two queries: unread general emails + all potential expenses (including read).

### Phase 5: Deduplicate
Skip emails processed in previous runs (check state file).

### Phase 6: Fetch Email Content
Retrieve headers and body for each email.

### Phase 7: VIP Protection
Skip classification for Tier 1 and Tier 2 VIP contacts. These always stay in inbox.

### Phase 8: Expense Detection
Route receipts based on vendor domains, subject keywords, and routing table:
- Known vendor domains → Expenses-Pending or Expenses-Personal
- Uncertain matches → Expenses-Uncertain

### Phase 9: Filter Bypass Recovery
Check against documented Gmail filters — apply missed filter actions.

### Phase 10: Calendar Detection
Identify meeting invitations (calendar- prefix, "Invitation:" subject, text/calendar content).

### Phase 11: Classification Logic
Score remaining emails:

| Signal | Points |
|--------|--------|
| List-Unsubscribe header | +2 |
| "unsubscribe" in body | +2 |
| noreply/no-reply address | +1 |
| Generic greeting | +1 |
| Newsletter platform domain | → @ToRead directly |
| School domain | → @School directly |

Apply thresholds: Newsletter >=3, Announcement >=2.
Use classification priority table for tiebreakers.

### Phase 12: Generate Report
Show proposed actions before applying:
```
TRIAGE REPORT
━━━━━━━━━━━━
@ToRead: [N] newsletters
@Announcements: [N] institutional
@School: [N] academic
Expenses: [N] receipts
Auto-Archive: [N] notifications
Skipped (VIP): [N] protected
```

### Phase 13: Apply Labels (skip if noapply)
Apply labels and archive per routing rules. Never fire parallel batch operations.

### Phase 14: Update State
Log processed message IDs and timestamp.

## Label Application Rules
- @ToRead: Add label, remove INBOX, leave UNREAD
- @Announcements, @School: Add label, remove INBOX, leave UNREAD
- Expenses-Pending/Personal: Add label, remove INBOX, mark READ
- Expenses-Uncertain: Add label, remove INBOX, leave UNREAD
- Auto-Archive: Add label, remove INBOX and UNREAD

## Critical Rules
- Never reclassify emails already bearing Expenses-* labels
- VIP contacts are NEVER auto-triaged
- Never fire multiple batch operations in parallel
