# Hookify Guardrails

## Your Role

You help me create custom guardrails for Claude Code without editing complex `hooks.json` files. Instead, you write lightweight markdown rule files that define patterns to watch for and messages to show when they match.

Two ways I'll ask:

- **With an instruction**: "Warn me when I use rm -rf commands" → write a rule from what I described
- **Without one**: "create a hookify rule" with no detail → analyze our recent conversation to find behaviors I corrected you on or got frustrated by, propose rules for those

Rules take effect on the very next tool use. No restart needed.

---

## Rule File Format

Rules live at `.claude/hookify.{descriptive-name}.local.md` in the **project root**, not a plugin directory.

### Simple rule (single pattern)

```markdown
---
name: block-dangerous-rm
enabled: true
event: bash
pattern: rm\s+-rf
action: block
---

⚠️ **Dangerous rm command detected!**

This command could delete important files. Please:
- Verify the path is correct
- Consider using a safer approach
- Make sure you have backups
```

### Advanced rule (multiple conditions)

```markdown
---
name: warn-sensitive-files
enabled: true
event: file
action: warn
conditions:
  - field: file_path
    operator: regex_match
    pattern: \.env$|credentials|secrets
  - field: new_text
    operator: contains
    pattern: KEY
---

🔐 **Sensitive file edit detected!**

Ensure credentials are not hardcoded and the file is in .gitignore.
```

**All conditions must match** for the rule to trigger.

---

## Frontmatter Reference

**`name`** (required) — unique identifier. Use kebab-case, start with a verb: `warn-dangerous-rm`, `block-console-log`, `require-tests`.

**`enabled`** (required) — `true` or `false`. Toggle without deleting the rule.

**`event`** (required) — which hook event triggers the check:

| Event | Fires on |
|-------|----------|
| `bash` | Bash tool commands |
| `file` | Edit, Write, MultiEdit tools |
| `stop` | When Claude wants to stop |
| `prompt` | When you submit a prompt |
| `all` | Every event |

**`action`** (optional, defaults to `warn`):
- `warn` — shows the message, allows the operation
- `block` — prevents the operation (PreToolUse) or stops the session (Stop events)

**`pattern`** — regex for simple single-condition rules. Matches against `command` for bash events, `new_text` for file events. Python regex syntax.

**`conditions`** — list form for multi-field rules. Each entry has `field`, `operator`, and `pattern`.

### Fields by event type

| Event | Available fields |
|-------|------------------|
| bash | `command` |
| file | `file_path`, `new_text`, `old_text`, `content` |
| prompt | `user_prompt` |
| stop | general matching on session state |

### Operators

`regex_match` (most common) · `contains` · `equals` · `not_contains` · `starts_with` · `ends_with`

---

## Writing Good Patterns

Python regex syntax. Common metacharacters:

| Token | Matches |
|-------|---------|
| `\s` | whitespace |
| `\d` | digit |
| `\w` | word character |
| `.` | any character |
| `+` | one or more |
| `*` | zero or more |
| `?` | zero or one |
| `\|` | OR |

Escape literals: `\.` for a dot, `\(` for a paren, `\[` for a bracket.

### Examples

```
rm\s+-rf              → rm -rf, rm  -rf
console\.log\(        → console.log(
(eval|exec)\(         → eval( or exec(
chmod\s+777           → chmod 777, chmod  777
API_KEY\s*=           → API_KEY=, API_KEY =
\.env$                → .env, .env.local
```

### Pitfalls

**Too broad:** `pattern: log` also matches "login", "dialog", "catalog". Use `console\.log\(|logger\.` instead.

**Too specific:** `pattern: rm -rf /tmp` only catches that exact path. Use `rm\s+-rf`.

**Escaping:** in YAML, quoted strings need doubled backslashes (`"\\s"`). Unquoted works as written (`\s`). **Use unquoted patterns.**

### Test before shipping

```bash
python3 -c "import re; print(re.search(r'your_pattern', 'test text'))"
```

---

## Message Body

Everything after the frontmatter is shown to Claude when the rule fires. A good message:

- Explains what was detected
- Explains why it's problematic
- Suggests alternatives or best practices
- Uses formatting for clarity

```markdown
⚠️ **Console.log detected!**

You're adding console.log to production code.

**Why this matters:**
- Debug logs shouldn't ship to production
- Console.log can expose sensitive data
- Impacts browser performance

**Alternatives:**
- Use a proper logging library
- Remove before committing
- Use conditional debug builds
```

---

## Rule Library

### Block destructive operations

```markdown
---
name: block-destructive-ops
enabled: true
event: bash
pattern: rm\s+-rf|dd\s+if=|mkfs|format
action: block
---

🛑 **Destructive operation detected!**

This command can cause data loss. Operation blocked for safety.
Verify the exact path and use a safer approach.
```

### Warn about debug code

```markdown
---
name: warn-debug-code
enabled: true
event: file
pattern: console\.log\(|debugger;|print\(
action: warn
---

🐛 **Debug code detected**

Remember to remove debugging statements before committing.
```

### Require tests before stopping

```markdown
---
name: require-tests-run
enabled: false
event: stop
action: block
conditions:
  - field: transcript
    operator: not_contains
    pattern: npm test|pytest|cargo test
---

**Tests not detected in transcript!**

Before stopping, run tests to verify your changes work correctly.
```

Enable only when you want strict enforcement — this blocks Claude from ending the turn.

### Catch hardcoded credentials in TypeScript

```markdown
---
name: api-key-in-typescript
enabled: true
event: file
conditions:
  - field: file_path
    operator: regex_match
    pattern: \.tsx?$
  - field: new_text
    operator: regex_match
    pattern: (API_KEY|SECRET|TOKEN)\s*=\s*["']
---

🔐 **Hardcoded credential in TypeScript!**

Use environment variables instead of hardcoded values.
```

### Production deployment checklist

```markdown
---
name: prod-deploy-checklist
enabled: true
event: prompt
conditions:
  - field: user_prompt
    operator: contains
    pattern: deploy to production
---

Production deployment checklist:
- [ ] Tests passing?
- [ ] Reviewed by team?
- [ ] Monitoring ready?
```

---

## Common Pattern Targets

**Bash events** — dangerous commands (`rm\s+-rf`, `dd\s+if=`, `mkfs`), privilege escalation (`sudo\s+`, `su\s+`), permission issues (`chmod\s+777`, `chown\s+root`)

**File events** — debug code (`console\.log\(`, `debugger`, `print\(`), security risks (`eval\(`, `innerHTML\s*=`, `dangerouslySetInnerHTML`), sensitive files (`\.env$`, `credentials`, `\.pem$`), generated files (`node_modules/`, `dist/`, `build/`)

---

## Managing Rules

**Disable temporarily:** set `enabled: false` in the frontmatter
**Delete permanently:** remove the `.local.md` file
**Gitignore:** add `.claude/*.local.md` to `.gitignore`

Good filenames: `hookify.dangerous-rm.local.md`, `hookify.console-log.local.md`, `hookify.require-tests.local.md`

Bad filenames: `hookify.rule1.local.md` (not descriptive), `hookify.md` (missing `.local`), `danger.local.md` (missing `hookify` prefix)

---

## Troubleshooting

**Rule not triggering**
1. Confirm the file is in `.claude/` in the project root, not a plugin directory
2. Verify `enabled: true`
3. Test the regex separately
4. Rules work immediately — no restart needed

**Pattern not matching**
- Test it: `python3 -c "import re; print(re.search(r'pattern', 'text'))"`
- Use unquoted patterns in YAML to avoid escaping problems
- Start simple, then add complexity

**Hooks feel slow**
- Keep patterns simple, avoid complex regex
- Use specific event types (`bash`, `file`) instead of `all`
- Limit the number of active rules

---

## Requirements

Python 3.7+ on PATH. No external dependencies.
