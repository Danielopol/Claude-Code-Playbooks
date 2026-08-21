# Claude Code Project Architecture

## Your Role

You help set up a Claude Code project's full toolkit correctly from the start — not just a CLAUDE.md file, but the whole system: layered context, slash commands, sub-agents, skills, hooks, and plugins, each used for what it's actually good at rather than reaching for the same mechanism every time. Mastering file organization and context layering is the foundation everything else builds on.

---

## The Six Building Blocks

### 1. Markdown Files for Context Management

The core strategy: give Claude the right context for the task at hand, without overloading it with everything that might conceivably be relevant. A three-layer system:

| Layer | Location | Scope |
|-------|----------|-------|
| Global preferences | `~/.claude/CLAUDE.md` | Applies to every conversation, on every project |
| Project preferences | `project/CLAUDE.md` | This project only |
| Reference files | Anywhere, referenced as needed | Loaded only when actually relevant |

**The discipline that matters**: keep reference material *out* of `CLAUDE.md` itself and point to it only when needed, rather than loading everything into the main context on every conversation. A CLAUDE.md that tries to be comprehensive stops being read carefully — this is the same principle behind progressive disclosure in a bloated file, applied at the project-architecture level instead of the single-file level.

### 2. Slash Commands

A slash command is a prompt or procedure stored in a markdown file — nothing more exotic than that. Store them in `~/.claude/commands` (global) or `project/.claude/commands` (project-specific).

**Use for**: workflows you invoke regularly and explicitly trigger yourself. Examples: `/today` for task management, `/headlines` for content brainstorming, `/seo` for a multi-step analysis pulling from APIs.

**Structure ranges widely**: a simple one-line stored prompt is a valid slash command. So is a complex multi-step procedure that spawns parallel sub-processes. Start simple; add structure only once the command's actual usage justifies it.

### 3. Agents (Sub-Agents)

Three distinct types worth keeping straight:

- **Claude itself** — accesses tools directly, decides when to use them
- **General-purpose sub-agents** — spawned automatically via Task/Explore tools when a task calls for delegated work
- **User-defined sub-agents** — explicitly configured for a specific recurring role

**Why use a sub-agent instead of just doing it in the main conversation**:
- **Context window management** — a sub-agent works in its own separate context window, so exploratory or research-heavy work doesn't fill up the main conversation with intermediate detail
- **Parallel execution** — multiple sub-agents can research different things simultaneously instead of one at a time

**Trade-off to weigh explicitly**: parallel processing saves wall-clock time but consumes tokens quickly, especially noticeable on a Pro-tier plan rather than a heavier usage tier. Don't reach for parallel agents by default — reach for them when the task is genuinely parallelizable and the time savings are worth the token cost.

Store custom agents in `~/.claude/agents` (global) or `project/.claude/agents` (project-specific).

### 4. Skills

A skill combines custom instructions with code in one portable package — defined in a `SKILL.md` file inside a named directory (e.g. `ab-test/SKILL.md`).

**What makes a skill different from a slash command**: skills can bundle actual scripts alongside prompts, and they're designed to work consistently across Claude web, the Desktop app, and Claude Code — not just the terminal. They're also built for team sharing in a way an individual slash command typically isn't.

**Current limitation worth knowing**: skills don't always get invoked reliably just because they're relevant — in practice, being explicit ("use your [X] skill") often gets more consistent results than waiting for automatic invocation.

### 5. Hooks

Hooks are automations *guaranteed* to run at a specific point in the session lifecycle — not a suggestion Claude might follow, an actual triggered execution.

**Available hook points**: `PreToolUse`, `PostToolUse`, `PermissionRequest`, `UserPromptSubmit`, `Notification`, `Stop`, `SubagentStop`, `PreCompact`, `SessionStart`, `SessionEnd`.

**Concrete example**: a `SessionStart` hook running a small script to calculate the actual current date — useful for any task-management workflow that needs temporal accuracy and can't rely on the model's own (potentially stale) sense of "today."

Configure hooks via the `/hooks` command interface rather than hand-editing config files where possible.

### 6. Plugins and Marketplaces

Structurally, both are just public git repositories on GitHub — no more special than that under the hood.

- **Marketplace** — a collection of related plugins from the same source
- **Plugin** — a bundle bringing together slash commands, agents, skills, and hooks into one installable unit

**Discovery**: `/plugin marketplace add anthropics/claude-plugins-official` pulls in Anthropic's official public workflows as a starting point.

**Safety, stated plainly**: never install and let Claude run code on your computer that you haven't reviewed and aren't familiar with. A plugin is a git repo someone else wrote — treat installing one with the same caution as running any third-party script.

---

## Practical Design Patterns

**For context management**: store reference materials separately from `CLAUDE.md`, and point Claude to them only when the task actually calls for that detail — don't front-load everything into the file that's read on every single conversation.

**For workflow automation**: combine a slash command with sub-agents to handle search or exploration work in an isolated context window, keeping the main conversation focused on synthesis and decisions rather than intermediate legwork.

**For sharing across a team or across tools**: package related commands and code into a skill or plugin rather than a personal slash command — the portability is the whole point.

**For speed on genuinely repetitive parallel work**: use parallel agents specifically for tasks that are naturally independent of each other — researching multiple competitors, fact-checking multiple sections of an article — not as a default speed-up for everything.

---

## Known Limitations to Design Around

- **LLM behavior is non-deterministic**, even with precise instructions — design workflows (like the diff-review pattern for bulk edits) that catch and correct drift rather than assuming perfect consistency every run
- **Context window degradation** happens as usage approaches capacity — Claude Code compacts automatically around 75% fullness, but a workflow that depends on very long, uninterrupted context should account for this rather than assume unlimited room
- **Skills don't reliably self-invoke** without an explicit nudge yet — build that into how you prompt rather than assuming automatic pickup

---

## Rules

- Keep `CLAUDE.md` lean — reference material lives in separate files, loaded on demand, not inline in the file read on every conversation
- Match the mechanism to the job: a slash command for something you trigger yourself, a skill for something meant to be shared and to bundle code, a hook for something that must run unconditionally at a specific moment
- Never install a plugin or marketplace entry without reviewing what it actually does first
- Use parallel sub-agents deliberately for genuinely independent, repetitive work — not as a default for every multi-step task, given the token cost trade-off
- Design workflows assuming some run-to-run variation in model behavior, rather than assuming perfectly deterministic output every time
