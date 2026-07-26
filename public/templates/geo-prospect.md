# GEO Prospect Manager

A CRM-lite for a GEO agency. Track leads through the sales pipeline, store audit history and notes, and forecast revenue without opening a CRM tool.

GEO means Generative Engine Optimization — getting a client's site cited by ChatGPT, Claude, Perplexity, Gemini, and Google AI Overviews. The pitch works because the score is measurable and most sites score badly.

All data lives in `~/.geo-prospects/prospects.json` and persists across sessions.

## How to Ask

Speak plainly. Match the request to the action:

| Say | What you get |
|-----|--------------|
| "New prospect: electron-srl.com" | Create a prospect record |
| "Show my pipeline" / "List prospects" | Summary table of every prospect |
| "List qualified prospects" | Filtered by status |
| "Show me PRO-001" | Full detail with note history |
| "Audit electron-srl.com" | GEO scan, saved to the prospect record |
| "Note on Electron: they asked about pricing" | Timestamped interaction note |
| "Move acme.com to proposal" | Status change |
| "We won bigshop.it at 6000/month" | Mark won, set contract value |
| "We lost acme.com, budget freeze" | Mark lost with reason |
| "Pipeline summary" | Revenue forecast by stage |

## Data Structure

Each prospect is one JSON record:

```json
{
  "id": "PRO-001",
  "company": "Electron Srl",
  "domain": "electron-srl.com",
  "contact_email": "info@electron-srl.com",
  "contact_name": "",
  "industry": "Educational Equipment Manufacturing",
  "country": "Italy",
  "status": "qualified",
  "geo_score": 32,
  "audit_date": "2026-03-12",
  "audit_file": "~/.geo-prospects/audits/electron-srl.com-2026-03-12.md",
  "proposal_file": "~/.geo-prospects/proposals/electron-srl.com-proposal.md",
  "monthly_value": 0,
  "contract_start": null,
  "contract_months": 0,
  "notes": [
    {
      "date": "2026-03-12",
      "text": "Initial GEO quick scan. Score 32/100 - Critical tier. Strong candidate for GEO services."
    }
  ],
  "created_at": "2026-03-12",
  "updated_at": "2026-03-12"
}
```

The JSON file is the single source of truth. Read it before every operation, write it after every change.

## Storage Layout

```
~/.geo-prospects/
├── prospects.json          # Main CRM database
├── audits/                 # Audit snapshots
│   └── electron-srl.com-2026-03-12.md
└── proposals/              # Generated proposals
    └── electron-srl.com-proposal.md
```

Create the directories if they do not exist:

```bash
mkdir -p ~/.geo-prospects/audits ~/.geo-prospects/proposals
```

## Operations

### New prospect

1. Create `~/.geo-prospects/prospects.json` as an empty array if it does not exist
2. Derive the company name from the domain (`electron-srl.com` → `Electron Srl`)
3. Assign the next sequential ID: `PRO-001`, `PRO-002`, and so on
4. Ask for contact name (optional), contact email, and a monthly value estimate (optional). Ask once, in one message.
5. Set status to `lead`
6. Save
7. Suggest the next step: run an audit to score the prospect

### List prospects

Read the JSON and render a table:

```
GEO Prospect Pipeline — March 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ID       Domain                  Company           Status      Score  Value
───────  ──────────────────────  ────────────────  ──────────  ─────  ──────
PRO-001  electron-srl.com        Electron Srl      Qualified   32/100  €4.5K
PRO-002  acme.com                ACME Corp         Lead        —       —
PRO-003  bigshop.it              BigShop           Won         41/100  €6.0K

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pipeline: 1 lead | 1 qualified | 0 proposals | 1 won | 0 lost
Committed MRR: €6,000 | Pipeline Value: €4,500
```

Accept a status filter and show only matching rows.

### Audit a prospect

1. Run a GEO scan of the domain and produce an overall score out of 100
2. Save `geo_score` and `audit_date` to the prospect record
3. Write the audit output to `~/.geo-prospects/audits/<domain>-<date>.md`
4. Store the path in `audit_file`
5. Add an automatic note: "Quick audit run. GEO Score: XX/100."
6. If the score is under 55, flag it: strong sales opportunity, generate a proposal next

A minimum viable scan checks robots.txt for AI crawler access (GPTBot, ClaudeBot, PerplexityBot and the rest), the presence of llms.txt, schema.org coverage on key pages, author and date signals on content, and brand presence on the platforms AI engines cite. The full scoring engine, with weighted categories and Python analyzers, lives in the `geo-seo-claude` repo. Without it, produce a directional score and label it as a snapshot rather than a full audit.

### Add a note

Find the prospect by ID or domain, append the note with the current ISO date, save, confirm.

### Change status

Valid statuses: `lead`, `qualified`, `proposal`, `won`, `lost`.

Update the field, add an automatic note recording the change, save.

Mark won with a monthly contract value. Mark lost with a reason, always. A lost deal without a logged reason teaches you nothing.

### Pipeline summary

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GEO AGENCY PIPELINE SUMMARY — March 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STAGE          COUNT   POTENTIAL VALUE   NOTES
─────────────  ─────   ───────────────   ─────────────────────
Lead             2      €8,000/mo        New discoveries
Qualified        1      €4,500/mo        Ready for proposal
Proposal Sent    1      €6,000/mo        Awaiting signature
Won              3      €18,500/mo       Active clients (MRR)
Lost             1      —                Budget freeze

COMMITTED MRR:        €18,500
PIPELINE (qualified+): €10,500
TOTAL POTENTIAL:      €29,000/mo → €348,000/yr

Next actions:
→ PRO-003 (acme.com): Send proposal — score 38/100 (strong case)
→ PRO-007 (shop.it): Follow up — proposal sent 8 days ago
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Committed MRR counts won deals only. Pipeline counts qualified and later. Do not add lead-stage guesses to a forecast.

End with concrete next actions: which prospect to move, and why.

## Pipeline Stage Definitions

| Status | Meaning | Typical next action |
|--------|---------|---------------------|
| `lead` | Discovered, not yet contacted | Run an audit, assess the opportunity |
| `qualified` | Audit done, pain points confirmed | Generate a proposal |
| `proposal` | Proposal sent, awaiting decision | Follow up, answer questions |
| `won` | Contract signed, active client | Run a full audit, start onboarding |
| `lost` | Closed lost | Log the reason for future reference |

## Qualification Signals

A domain is worth pursuing when the audit shows:

- Score under 55, which means visible, fixable problems
- Blocked or unconfigured AI crawlers in robots.txt, the fastest quick win to demo
- No schema markup on product, service, or location pages
- Content with no author, no dates, and no citable structure
- A competitor already showing up in AI answers for the same queries

That last one closes deals. Ask ChatGPT or Perplexity a buying question in the prospect's category, screenshot the answer, and point out who got named.

Skip prospects scoring above 75. The work is maintenance, the budget is small, and the pitch is weak.

## Rules

- Read the JSON before every operation. Never write from memory.
- Print confirmation and the current prospect state after every change.
- Never overwrite the notes array. Append.
- Do not create files outside `~/.geo-prospects/` unless asked.
- Store no data you would not want in a plain-text file on your laptop. This is a JSON file, not an encrypted CRM.
