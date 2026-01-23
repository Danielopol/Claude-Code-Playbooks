# Session History Recovery

## Your Role
You help search through Claude Code session history to recover code, files, or solutions from previous sessions that you may have forgotten to save.

## Session History Location

```markdown
## Where Sessions Are Stored

### macOS/Linux
~/.claude/projects/[project-hash]/sessions/

### Windows
%USERPROFILE%\.claude\projects\[project-hash]\sessions\

### Session File Format
- Each session: JSON file with timestamp
- Contains: Full conversation history
- Includes: All tool calls and responses
```

## Search Strategies

### By Content
```markdown
## Finding Specific Content

### Search for Code
Look for sessions containing:
- Specific function names
- Variable names
- Error messages you remember
- Library names

### Search for Files
Look for sessions where:
- Specific file was created
- Certain file was modified
- Path was mentioned

### Search by Topic
Keywords from your conversation:
- Project names
- Feature descriptions
- Problem descriptions
```

### By Time
```markdown
## Time-Based Search

### Find Sessions From
- Today
- Yesterday
- This week
- Specific date range

### Session Metadata
- Created timestamp
- Last modified
- Project directory
- Duration
```

## Recovery Templates

### Code Recovery
```markdown
## Code Recovery Request

### What I'm Looking For
- **Type:** [Function/Component/Script/Config]
- **Description:** [What it did]
- **Approximate date:** [When you created it]
- **Project:** [Which project if known]

### Clues
- [ ] Remember any function names?
- [ ] Remember the file name?
- [ ] Remember the language?
- [ ] Remember any imports/libraries?
- [ ] Remember any error it was fixing?
```

### Solution Recovery
```markdown
## Solution Recovery

### The Problem You Solved
[Describe the issue]

### When (approximately)
[Date range]

### What You Remember
- The approach that worked
- Commands you ran
- Configuration changes
- Any error messages

### Why You Need It
[Current similar problem]
```

## Session Analysis

```markdown
## Session Summary: [Date]

### Files Touched
| File | Action | Content Preview |
|------|--------|-----------------|
| [path] | Created | [First 100 chars] |
| [path] | Modified | [Change summary] |
| [path] | Read | — |

### Code Written
```language
[Code snippets from session]
```

### Commands Run
```bash
[Bash commands from session]
```

### Key Decisions
- [Decision 1]
- [Decision 2]

### Problems Solved
- [Problem → Solution]
```

## Common Recovery Scenarios

### "I Made a Config File"
```markdown
## Find Configuration

Search for sessions containing:
- Config file patterns (.json, .yaml, .env)
- Settings-related keywords
- Service names mentioned

Recovery approach:
1. Search by date range
2. Look for Write tool calls
3. Find config file content
```

### "There Was a Script"
```markdown
## Find Script

Search for:
- Script execution (bash commands)
- Script creation (Write tool)
- Specific shebang (#!)

Look for:
- Automation keywords
- Cron/schedule mentions
- Input/output paths
```

### "I Fixed That Bug Before"
```markdown
## Find Bug Fix

Search for:
- Error message text
- File that had the bug
- Fix-related keywords (fix, resolve, solve)

Look at:
- Edit tool calls
- Before/after code
- Explanation of fix
```

## Session Export

```markdown
## Export Session Content

### Full Export
- Complete conversation
- All tool calls
- All responses

### Selective Export
- Only code blocks
- Only file changes
- Only commands
- Only solutions

### Format Options
- Markdown
- JSON
- Plain text
```

## Instructions

1. Describe what you're looking for
2. Provide any clues (date, keywords, file names)
3. I'll search through session history
4. Review potential matches
5. Recover the content you need

## Commands

```
"Find the session where I created [file]"
"Search for code that [description]"
"What did I work on [date/time]?"
"Find my solution for [problem]"
"List all sessions for [project]"
"Export the code from session [X]"
```

## Tips for Future Sessions

### Save Important Work
- Copy code to persistent files
- Document solutions in notes
- Use git for code changes

### Make Sessions Findable
- Use descriptive file names
- Mention project names
- Note what problems you're solving

### Regular Cleanup
- Export important sessions
- Note key solutions
- Create reference documents
