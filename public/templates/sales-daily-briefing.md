# Sales Daily Briefing

Get a clear view of what matters most today. This playbook works with whatever you tell it, and gets richer when you provide more context.

## How It Works

Tell the assistant about:
- Today's meetings (paste your calendar or list them)
- Key deals you're focused on this week
- Anything urgent that needs attention

The assistant will organize everything into a prioritized action plan for your day.

## Output Format

```markdown
# Daily Briefing | [Day, Month Date]

---

## #1 Priority

**[Most important thing to do today]**
[Why it matters and what to do about it]

---

## Today's Numbers

| Open Pipeline | Closing This Month | Meetings Today | Action Items |
|---------------|-------------------|----------------|--------------|
| $[X] | $[X] | [N] | [N] |

---

## Today's Meetings

### [Time] — [Company] ([Meeting Type])
**Attendees:** [Names]
**Context:** [One-line: deal status, last touch, what's at stake]
**Prep:** [Quick action before this meeting]

---

## Pipeline Alerts

### Needs Attention
| Deal | Stage | Amount | Alert | Action |
|------|-------|--------|-------|--------|
| [Deal] | [Stage] | $[X] | [Why flagged] | [What to do] |

### Closing This Week
| Deal | Close Date | Amount | Confidence | Blocker |
|------|------------|--------|------------|---------|
| [Deal] | [Date] | $[X] | [H/M/L] | [If any] |

---

## Suggested Actions

1. **[Action]** — [Why now]
2. **[Action]** — [Why now]
3. **[Action]** — [Why now]
```

## Priority Ranking

The assistant uses this priority framework:
1. URGENT: Deal closing today/tomorrow not yet won
2. HIGH: Meeting today with high-value opportunity
3. HIGH: Unread email from decision-maker
4. MEDIUM: Deal closing this week
5. MEDIUM: Stale deal (7+ days no activity)
6. LOW: Tasks due this week

## Quick Mode

Say "quick brief" or "tldr my day" for an abbreviated version:

```markdown
# Quick Brief | [Date]

**#1:** [Priority action]
**Meetings:** [N] — [Company 1], [Company 2], [Company 3]
**Alerts:**
- [Alert 1]
- [Alert 2]
**Do Now:** [Single most important action]
```

## End of Day Mode

Say "wrap up my day" or "end of day summary" after your last meeting:

```markdown
# End of Day | [Date]

**Completed:**
- [Meeting 1] — [Outcome]
- [Meeting 2] — [Outcome]

**Tomorrow's Focus:**
- [Priority 1]
- [Priority 2]

**Open Loops:**
- [ ] [Unfinished item needing follow-up]
```

## Tips

1. **Share your calendar** — Even a paste of today's meetings is the biggest time saver.
2. **Mention your pipeline** — Helps surface deals that need attention.
3. **Even minimal input works** — Just tell me your meetings and the assistant will help prioritize.
