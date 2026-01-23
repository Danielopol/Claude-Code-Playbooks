# Non-Coding Use Cases for Claude Code

## Research Summary

This document contains curated research on non-coding use cases for Claude Code, gathered from Medium, Substack, GitHub, and other sources.

---

## Top Source Articles

### Must-Read Articles

1. **50+ Mind-Blowing Things People Are Using Claude Code For**
   - URL: https://www.masteringai.io/guides/50-non-coding-uses-claude-code
   - Comprehensive list with real examples from LinkedIn, Reddit, and X

2. **Everyone Should Be Using Claude Code More** (Lenny's Newsletter)
   - URL: https://www.lennysnewsletter.com/p/everyone-should-be-using-claude-code
   - Practical examples for non-developers

3. **How to Turn Claude Code Into Your Personal AI Assistant** (The Neuron)
   - URL: https://www.theneuron.ai/explainer-articles/how-to-turn-claude-code-into-your-personal-ai-assistant
   - Step-by-step personal assistant setup

4. **How to Build AI Workflows with Claude Code (Even If You're Not Technical)**
   - URL: https://www.producttalk.org/how-to-build-ai-workflows-with-claude-code/
   - Series for non-technical users

5. **Claude Code for Non-Coders** (Substack Newsletter)
   - URL: https://claudecodefornoncoders.substack.com
   - Weekly tutorials for non-programmers

6. **The Complete "Wait, I Can Use Claude Code?!" Guide**
   - URL: https://natesnewsletter.substack.com/p/the-complete-wait-i-can-use-claude
   - 64-page guide for non-coders

---

## Use Cases by Category

### 1. File Organization (7 use cases)

| Use Case | Description | Source |
|----------|-------------|--------|
| Photo Organization | Sort images by year, month, event using metadata | MasteringAI |
| Screenshot Organization | Rename and categorize 1,400+ screenshots meaningfully | MasteringAI |
| Duplicate Detection | Identify exact and near-duplicate files with recommendations | MasteringAI |
| Downloads Folder | Categorize files by content analysis, not just extensions | MasteringAI |
| Project Inventory | Document all projects with descriptions | MasteringAI |
| Old File Cleanup | Intelligently flag deletable files while preserving important data | MasteringAI |
| Invoice Sorting | Rename to 'YYYY-MM-DD Vendor - Invoice - ProductOrService.pdf' | Lenny's Newsletter |

**Example Prompt:**
```
Find duplicate files and help me decide which to keep.
Organize these downloads into proper folders.
Review my directory structure and suggest improvements.
Find old files I probably don't need anymore.
```

---

### 2. Personal Finance & Taxes (5 use cases)

| Use Case | Description | Source |
|----------|-------------|--------|
| Tax Preparation | Prepare draft filings from bank statements and receipts | MasteringAI |
| Invoice Organization | Sort and rename invoices with automatic categorization | MasteringAI |
| Tax Knowledge Base | Create searchable repositories of tax law | MasteringAI |
| Contract-Invoice Cross-Reference | Verify billing matches contract terms | MasteringAI |
| Multi-Card Expense Reconciliation | Consolidate expenses across multiple accounts | MasteringAI |

**Detailed Resources:**
- Tax Agent Tutorial: https://martinalderson.com/posts/building-a-tax-agent-with-claude-code/
- Claude Code Did My Taxes: https://klmn.sh/essays/claude-code-for-taxes
- Budget Workspace Template: https://github.com/danielrosehill/Claude-Budget-Workspace-Template

**Real User Quote:**
> "I gave Claude Code my previous year's tax return as a foundation. Completed 3 returns (Federal, NYS, NYC) with joint filing, 2 Schedule Cs, LLC consulting income, SEP IRA optimization, HSA, Child Care Credit, foreign accounts, and W-2 + 1099 in 2 hours with 5 attempts."

---

### 3. Note Management & Obsidian (4 use cases)

| Use Case | Description | Source |
|----------|-------------|--------|
| Obsidian Vault Auditing | Analyze and reorganize note-taking systems | MasteringAI |
| AI-Powered Knowledge Base | Convert notes into queryable information systems | MasteringAI |
| 24/7 Note Server | Always-accessible vault with continuous background processing | MasteringAI |
| Automated Backlinking | Add backlinks to people, places, books mentioned | Obsidian Forum |

**Detailed Resources:**
- Obsidian + Claude Code Guide: https://www.axtonliu.ai/newsletters/ai-2/posts/obsidian-claude-code-workflows
- Using Claude Code with Obsidian: https://kyleygao.com/blog/2025/using-claude-code-with-obsidian/
- Claudesidian (pre-configured vault): https://github.com/heyitsnoah/claudesidian
- MCP Plugin for Obsidian: https://github.com/iansinnott/obsidian-claude-code-mcp

**Example CLAUDE.md for Obsidian:**
```markdown
# Obsidian Vault Assistant

## Your Role
You are my knowledge management assistant for this Obsidian vault.

## Available Commands
- /daily-review - End of day reflection
- /thinking-partner - Collaborative exploration
- /research-assistant - Deep dives into topics

## Rules
- Use [[wiki-links]] for connections
- Create new notes in appropriate folders
- Maintain YAML frontmatter consistency
```

---

### 4. Research & Academic Writing (4 use cases)

| Use Case | Description | Source |
|----------|-------------|--------|
| Literature Review | Analyze entire papers or collections in one session | Claude for Researchers |
| PDF Analysis | Extract data, summarize, cross-reference documents | LlamaIndex |
| Citation Extraction | Pull references from academic papers | Claude for Researchers |
| Research Note Synthesis | Generate structured notes from sources | Claude for Researchers |

**Detailed Resources:**
- Claude for Researchers: https://claude-ai.chat/use-cases/researchers/
- Adding Document Understanding: https://www.llamaindex.ai/blog/adding-document-understanding-to-claude-code

**Real User Quote:**
> "24-48 hours of work done in 20 minutes" - researcher working with experimental data

---

### 5. Creative Writing & Worldbuilding (5 use cases)

| Use Case | Description | Source |
|----------|-------------|--------|
| Novel Writing with Story Bibles | Maintain consistency across chapters | Arsturn |
| World-Building Documentation | Develop interconnected fictional worlds | MasteringAI |
| Character Profile Management | Track character details across a series | creative-writing-skills |
| Style Guide Creation | Analyze your writing to capture patterns | creative-writing-skills |
| Scene Generation | Write prose matching your unique voice | creative-writing-skills |

**Detailed Resources:**
- Creative Writing Skills Plugin: https://github.com/haowjy/creative-writing-skills
- Novel Writing Guide: https://www.arsturn.com/blog/how-to-write-a-novel-series-using-claude-ai-and-fact-files

**Recommended Project Structure:**
```
my-novel/
├── .claude/
│   └── CLAUDE.md           # Project instructions
├── style-guide.md          # Your writing patterns
├── characters/             # Character profiles
├── world-building/         # Lore and setting
└── chapters/               # Manuscript files
```

**Slash Commands:**
- `/bs` - Brainstorming mode
- `/write [style]` - Prose generation
- `/wiki` - Documentation creation
- `/critique` - Writing analysis

---

### 6. Email & Communication (4 use cases)

| Use Case | Description | Source |
|----------|-------------|--------|
| Email-to-Slack Summaries | Triage incoming messages with AI summaries | MasteringAI |
| Inbox Management | Categorize and draft responses | MasteringAI |
| Email Data Extraction | Pull action items, decisions, events from threads | MasteringAI |
| Meeting Transcript Processing | Convert recordings to structured notes | claude-code-recipes |

**Detailed Resources:**
- Wrangling Email with Claude Code: https://jlongster.com/wrangling-email-claude-code
- Harper Reed's Email Workflow: https://harper.blog/2025/12/03/claude-code-email-productivity-mcp-agents/
- Gmail Skills: https://mcpmarket.com/tools/skills/gmail-api
- Meeting Notes Recipe: https://github.com/sgharlow/claude-code-recipes

**Best Practices (from Harper Reed):**
1. Always draft, never send - Save as drafts for review
2. Threading is critical - Replies must appear in correct thread
3. Match your voice - Use your writing style

---

### 7. Data Analysis (CSV/Excel) (3 use cases)

| Use Case | Description | Source |
|----------|-------------|--------|
| CSV to Insights | Answer business questions from spreadsheets | Claude Code for Non-Coders |
| Receipt Processing | Images to structured expense spreadsheet | MasteringAI |
| Financial Modeling | Excel with working formulas | Claude for Excel |

**Detailed Resources:**
- Claude for Excel: https://claude.com/claude-in-excel
- CSV Analysis Tutorial: https://claudecodefornoncoders.substack.com/p/week-3-make-claude-code-your-secret

**Example Workflow:**
```
Step 1: "Read the customer_data.csv and show me the summary"
Step 2: "What's our average order value by month?"
Step 3: "Which products have the highest profit margins?"
Step 4: "Create a 3-bullet summary for leadership"
```

**Key Quote:**
> "No VLOOKUP. No pivot tables. Just answers."

---

### 8. Home Automation (2 use cases)

| Use Case | Description | Source |
|----------|-------------|--------|
| Natural Language Automations | Create Home Assistant rules in plain English | claude-homeassistant |
| Smart Home Control | Voice/text control of devices | Home Assistant MCP |

**Detailed Resources:**
- claude-homeassistant: https://github.com/philippb/claude-homeassistant
- Home Assistant MCP: https://lobehub.com/mcp/frede1983-homeassistant-claude-code-integration

---

### 9. Personal Productivity (4 use cases)

| Use Case | Description | Source |
|----------|-------------|--------|
| Event Scheduling | Find optimal dates by cross-referencing calendars | MasteringAI |
| ADHD-Friendly Task Management | Break tasks into achievable chunks | MasteringAI |
| Mental Health Journaling | Structured reflection with pattern analysis | MasteringAI |
| Travel Planning | Day-by-day itineraries with budgets | Travel Planner Skill |

**Detailed Resources:**
- Personal Assistant Template: https://github.com/c0dezli/claude-code-personal-assistant
- Travel Planner Skill: https://claude-plugins.dev/skills/@ailabs-393/ai-labs-claude-skills/travel-planner

---

### 10. Sales & Marketing (4 use cases)

| Use Case | Description | Source |
|----------|-------------|--------|
| Personal CRM from Transcripts | Build searchable customer databases | MasteringAI |
| Custom Proposal Generation | Tailored proposals for prospects | MasteringAI |
| Cold Email Personalization | Genuinely personalized outreach | MasteringAI |
| Competitor Ad Analysis | Extract and categorize competitor strategies | MasteringAI |

---

### 11. Legal (3 use cases)

| Use Case | Description | Source |
|----------|-------------|--------|
| Contract Analysis at Scale | Process 50,000+ contracts in 72 hours | MasteringAI |
| Contract Redlining | Automate change tracking and risk assessment | MasteringAI |
| Due Diligence | Review acquisition documents for risks | MasteringAI |

---

## Inspirational Quotes

> "I use Claude Code to sort my invoices for taxes. It reads each file in a messy folder, renames it to 'YYYY-MM-DD Vendor - Invoice - ProductOrService.pdf', and moves it into the right folder."

> "I run Claude Code from my home directory and use it as my personal organization assistant."

> "Someone spent three hours building a marketing system that analyzes their writing style, generates personalized content, optimizes keywords, and schedules everything through Buffer—total operational cost of fifteen cents weekly."

> "Another person automated their entire recruitment process: paste an interview transcript, get structured analysis, automatic Notion card creation, next steps defined. No coding involved."

> "What would take 10-15 minutes of tedious work happens in seconds." (on Obsidian backlinking)

---

## Next Steps

1. Choose 3-5 use cases to turn into playbooks
2. Find or create CLAUDE.md templates for each
3. Write step-by-step setup instructions
4. Add to the playbooks site
