# Session Logging Protocol

## Purpose

Session logs answer: "Why did we do it this way?" six months later when no one remembers. They capture reasoning, not just output.

## Logging Triggers

Create a log entry when:
1. **Design decision** — Chose approach A over B
2. **Problem solved** — Fixed non-obvious bug or issue
3. **Session end** — Summary of work done
4. **Context switch** — Before moving to different task

## Log File Structure

```
logs/
├── YYYY-MM-DD-session-N.md    # Daily session logs
├── decisions/
│   └── ADR-NNN-[title].md     # Architecture Decision Records
└── index.md                   # Log index/table of contents
```

## Session Log Format

```markdown
# Session Log: YYYY-MM-DD Session N

## Context
[What were we working on? What state were we starting from?]

## Goals
- [ ] Goal 1
- [ ] Goal 2

## Work Done

### [Time/Phase 1]
[What was done]
[Why we did it this way]
[Alternatives considered]

### [Time/Phase 2]
...

## Decisions Made
- **Decision**: [What we chose]
  - **Why**: [Reasoning]
  - **Alternatives**: [What we didn't choose and why]

## Problems Encountered
- **Problem**: [Issue]
  - **Cause**: [Root cause]
  - **Fix**: [How we solved it]
  - **Learning**: [What to remember]

## Open Questions
- [Question 1]
- [Question 2]

## Next Session
- [What to do next]
- [What to remember]
```

## Decision Record Format

For significant architectural decisions:

```markdown
# ADR-NNN: [Title]

## Status
[Proposed | Accepted | Deprecated | Superseded]

## Context
[What is the situation that requires a decision?]

## Decision
[What is the decision that was made?]

## Consequences
[What are the positive and negative consequences?]

## Alternatives Considered
- [Alternative 1]: [Why rejected]
- [Alternative 2]: [Why rejected]
```

## When to Log (Rules)

**Always log:**
- Anything that took more than 30 minutes to figure out
- Choices between multiple valid approaches
- Non-obvious fixes (root cause wasn't immediately clear)
- Session endings (even if brief)

**Don't log:**
- Trivial changes
- Obvious fixes
- Routine work with no decisions

## Commands

- "Log this session" — Create session log for current work
- "Create decision record for [topic]" — Create ADR
- "Summarize today's work" — End-of-day summary

## Log Quality Standards

Good log entries:
- Explain **why**, not just **what**
- Are searchable (include relevant keywords)
- Can be understood by future-you who forgot everything
- Include alternatives considered, not just choice made
