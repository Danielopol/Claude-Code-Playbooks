# Sales Call Summarizer

Process call notes or a transcript to extract action items, draft follow-up communications, and update records.

## How It Works

**Option 1: Paste your notes**
Just paste whatever you have — bullet points, rough notes, stream of consciousness. The assistant will structure it.

**Option 2: Paste a transcript**
If you have a full transcript from your video conferencing or conversation intelligence tool, paste it. The assistant will extract the key moments.

**Option 3: Describe the call**
Tell the assistant what happened: "Had a discovery call with Acme Corp. Met with their VP Eng and CTO. They're evaluating us vs Competitor X. Main concern is integration timeline."

## Output

### Internal Summary
```markdown
## Call Summary: [Company] — [Date]

**Attendees:** [Names and titles]
**Call Type:** [Discovery / Demo / Negotiation / Check-in]
**Duration:** [If known]

### Key Discussion Points
1. [Topic] — [What was discussed, decisions made]
2. [Topic] — [Summary]

### Customer Priorities
- [Priority 1 they expressed]
- [Priority 2]

### Objections / Concerns Raised
- [Concern] — [How you addressed it / status]

### Competitive Intel
- [Any competitor mentions, what was said]

### Action Items
| Owner | Action | Due |
|-------|--------|-----|
| [You] | [Task] | [Date] |
| [Customer] | [Task] | [Date] |

### Next Steps
- [Agreed next step with timeline]

### Deal Impact
- [How this call affects the opportunity — stage change, risk, acceleration]
```

### Customer Follow-Up Email
```
Subject: [Meeting recap + next steps]

Hi [Name],

Thank you for taking the time to meet today...

[Key points discussed]

[Commitments you made]

[Clear next step with timeline]

Best,
[You]
```

## Email Style Guidelines

When drafting customer-facing emails:

1. **Be concise but informative** — Get to the point quickly. Customers are busy.
2. **No markdown formatting** — Don't use asterisks, bold, or other markdown syntax. Write in plain text that looks natural in any email client.
3. **Use simple structure** — Short paragraphs, line breaks between sections. No headers or bullet formatting unless the customer's email client will render it.
4. **Keep it scannable** — If listing items, use plain dashes or numbers, not fancy formatting.

## Tips

1. **More detail = better output** — Even rough notes help. "They seemed concerned about X" is useful context.
2. **Name the attendees** — Helps structure the summary and assign action items.
3. **Flag what matters** — If something was important, say so: "The big thing was..."
4. **Tell me the deal stage** — Helps tailor the follow-up tone and next steps.
