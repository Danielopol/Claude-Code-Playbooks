# GitHub Repositories & CLAUDE.md Templates

## Curated Collections

### 1. awesome-claude-code
**URL:** https://github.com/hesreallyhim/awesome-claude-code

A curated list of slash-commands, CLAUDE.md files, CLI tools, and workflows. Includes:
- Project management workflows
- Learning frameworks
- Session management tools
- CLAUDE.md examples for various languages

---

### 2. claude-code-templates
**URL:** https://github.com/davila7/claude-code-templates

Interactive web interface with 100+ templates:
- Agents
- Commands
- Settings
- Hooks
- MCPs

---

### 3. claude-md-examples
**URL:** https://github.com/ArthurClune/claude-md-examples

Sample CLAUDE.md files for various use cases.

---

### 4. CLAUDE.md Templates Wiki
**URL:** https://github.com/ruvnet/claude-flow/wiki/CLAUDE-MD-Templates

Specialized templates for different project types and use cases.

---

## Non-Coding Specific Repositories

### Personal Assistant

**claude-code-personal-assistant**
- URL: https://github.com/c0dezli/claude-code-personal-assistant
- Integrates with Notion + Google Workspace
- Structure:
```
claude-code-personal-assistant/
├── .claude/                    # Claude configuration
├── scripts/                    # Analysis utilities
│   ├── personal_task_analyzer.py
│   └── work_task_analyzer.py
├── templates/                  # Workflow templates
├── CLAUDE.md                   # Core configuration
├── profile.md                  # User profile
└── requirements.txt
```
- Commands: `/daily-routine`, `/setup-workspace`, `/update-context`

---

### Budget Management

**Claude-Budget-Workspace-Template**
- URL: https://github.com/danielrosehill/Claude-Budget-Workspace-Template
- Structure:
```
├── .claude/agents/
│   ├── budget-architect        # Creates budgets
│   ├── expense-analyst         # Spending trends
│   ├── goal-tracker            # Savings/debt goals
│   ├── transaction-processor   # Auto-categorize
│   ├── report-generator        # Monthly summaries
│   └── financial-advisor       # Scenario modeling
├── context/                    # Household/financial docs
├── transactions/               # Import staging
├── budgets/                    # Monthly/annual budgets
├── reports/                    # Generated analyses
├── financial-goals/            # Savings objectives
└── outputs/                    # Generated files
```
- Commands:
  - `/create-monthly-budget`
  - `/create-annual-budget`
  - `/monthly-report`
  - `/analyze-spending`
  - `/debt-payoff-plan`
  - `/savings-plan`

---

### Creative Writing

**creative-writing-skills**
- URL: https://github.com/haowjy/creative-writing-skills
- Skills:
  - `cw-router` - Guide to right skill
  - `cw-prose-writing` - Scene generation
  - `cw-brainstorming` - Plot/worldbuilding
  - `cw-story-critique` - Writing feedback
  - `cw-style-skill-creator` - Analyze your style
  - `cw-official-docs` - World documentation
- Recommended Structure:
```
my-novel/
├── .claude/
│   └── CLAUDE.md
├── style-guide.md
├── characters/
├── world-building/
└── chapters/
```
- Commands: `/bs`, `/write`, `/wiki`, `/critique`

---

### Obsidian Integration

**claudesidian**
- URL: https://github.com/heyitsnoah/claudesidian
- Pre-configured Obsidian vault for AI thinking partner
- Commands:
  - `/thinking-partner` - Collaborative exploration
  - `/daily-review` - End-of-day reflection
  - `/research-assistant` - Deep topic dives

**obsidian-claude-code-mcp**
- URL: https://github.com/iansinnott/obsidian-claude-code-mcp
- MCP server connecting Claude Code to Obsidian

---

### Home Automation

**claude-homeassistant**
- URL: https://github.com/philippb/claude-homeassistant
- Create Home Assistant automations in plain English
- Includes validation hooks for syntax checking

---

### Meeting Notes

**claude-code-recipes**
- URL: https://github.com/sgharlow/claude-code-recipes
- Recipe: Meeting Notes to Action Items
- Path: `recipes/Recipe-001-Meeting-Notes-to-Action-Items.md`

---

### Project Management

**Claude Code PM (ccpm)**
- URL: https://github.com/automazeio/ccpm
- Comprehensive project management workflow
- Specialized agents and slash-commands

**Claude Task Master**
- URL: https://github.com/eyaltoledano/claude-task-master
- AI-driven task management system

---

## Skills Marketplaces

### claude-plugins.dev
- URL: https://claude-plugins.dev
- Browse community skills
- Notable skills:
  - `process-meeting-transcript` - Meeting notes to Obsidian
  - `travel-planner` - Itinerary generation
  - `australian-tax-intelligence` - Tax knowledge base

### mcpmarket.com
- URL: https://mcpmarket.com
- MCP tools for integrations:
  - Gmail API skill
  - Outlook automation
  - Home Assistant

### awesomeclaude.ai
- URL: https://awesomeclaude.ai/awesome-claude-code
- Visual directory of Claude Code resources

---

## Example CLAUDE.md Templates

### Personal Organization Assistant

```markdown
# Personal Organization Assistant

## Role
You are my personal file organization and productivity assistant.

## Capabilities
- Organize files by content, date, and type
- Find and flag duplicate files
- Suggest directory structure improvements
- Help maintain clean Downloads folder

## Rules
- Always ask before deleting files
- Use descriptive naming: YYYY-MM-DD_Description_Category
- Create backups before major reorganization
- Preserve folder structure context

## File Naming Convention
- Invoices: YYYY-MM-DD_Vendor_Invoice_Description.pdf
- Receipts: YYYY-MM-DD_Store_Amount.pdf
- Documents: YYYY-MM-DD_Title_Version.ext

## Commands
- /organize [folder] - Analyze and organize folder
- /duplicates - Find duplicate files
- /cleanup - Suggest files to delete
- /rename [pattern] - Batch rename files
```

---

### Tax Preparation Assistant

```markdown
# Tax Preparation Assistant

## Role
You help me organize tax documents and prepare for filing.

## Available Context
- Previous year's return in /previous-returns/
- Current year documents in /current-year/
- Tax law references in /reference/

## Capabilities
- Sort and rename tax documents
- Cross-reference income sources
- Flag missing documents
- Calculate preliminary totals

## Rules
- NEVER provide tax advice - only organize
- Always note assumptions and uncertainties
- Flag items that need CPA review
- Keep audit trail of all changes

## Document Categories
- W-2s and 1099s → /income/
- Receipts → /deductions/[category]/
- Investment statements → /investments/
- Property documents → /property/

## Commands
- /sort-documents - Organize new uploads
- /checklist - Generate missing document list
- /summary - Create tax prep summary
```

---

### Obsidian Knowledge Assistant

```markdown
# Obsidian Knowledge Assistant

## Role
You manage my Obsidian vault as a knowledge management system.

## Vault Structure
- /daily/ - Daily notes (YYYY-MM-DD.md)
- /projects/ - Active project notes
- /reference/ - Evergreen notes
- /people/ - Contact notes
- /books/ - Book notes and highlights

## Linking Rules
- Use [[wiki-links]] for all connections
- Create new notes for new entities
- Add aliases in frontmatter for search

## Frontmatter Template
```yaml
---
created: {{date}}
updated: {{date}}
tags: []
aliases: []
---
```

## Commands
- /backlink - Add backlinks to today's note
- /connect [note] - Find related notes
- /summarize [folder] - Summarize folder contents
- /orphans - Find unlinked notes
```

---

### Creative Writing Assistant

```markdown
# Creative Writing Assistant

## Role
You are my writing partner for fiction projects.

## Project Context
- Style guide in /style-guide.md
- Characters in /characters/
- World details in /world-building/
- Current draft in /chapters/

## Capabilities
- Generate prose in my established style
- Maintain character consistency
- Track world-building details
- Provide constructive critique

## Rules
- Always read style-guide.md before writing
- Check character profiles for consistency
- Never contradict established world rules
- Ask clarifying questions before major scenes

## Commands
- /write [scene] - Generate prose
- /character [name] - Pull character details
- /worldcheck [element] - Verify world consistency
- /critique [chapter] - Provide feedback
```

---

## Search Queries for More Templates

**GitHub:**
```
filename:CLAUDE.md
path:**/.claude/commands
"claude code" workflow
```

**Google:**
```
site:github.com CLAUDE.md template
site:github.com ".claude/commands"
```
