# Memory System

## Memory File

Maintain a `MEMORY.md` file in the project root. This file persists learnings across sessions.

## Recording Learnings

When the user corrects you or you discover something important, add an entry:

```
## Corrections Log

- [LEARN:category] What was wrong → What is correct
```

### Categories

- `[LEARN:notation]` — Naming, terminology, conventions
- `[LEARN:code]` — Code patterns, libraries, syntax
- `[LEARN:workflow]` — Process, approach, methodology
- `[LEARN:preference]` — User preferences, style choices
- `[LEARN:domain]` — Domain-specific knowledge
- `[LEARN:error]` — Common mistakes to avoid
- `[LEARN:tool]` — Tool usage, commands, configuration

### Entry Format

Each entry should be:
- Searchable (include keywords)
- Specific (not vague generalizations)
- Actionable (clear what to do differently)

Good:
```
- [LEARN:code] React: Use useCallback for event handlers passed to child components, not inline functions
```

Bad:
```
- [LEARN:code] Be careful with React performance
```

## Checking Memory

Before any task:
1. Read MEMORY.md
2. Check if any entries apply to current task
3. Apply learnings proactively

Before code generation:
1. Check [LEARN:code] entries for relevant patterns
2. Check [LEARN:preference] entries for style
3. Apply without being asked

## Memory Triggers

**Add to memory when:**
- User says "Always do X" or "Never do Y"
- User corrects a mistake
- A bug is found that could recur
- User expresses a preference
- A non-obvious solution is discovered

**Don't add:**
- One-time instructions
- Task-specific details
- Temporary workarounds

## Memory File Structure

```markdown
# Project Memory

## Project Context
[Key facts about this project that inform all decisions]

## Corrections Log
[Timestamped learning entries]

## Preferences
[User style and approach preferences]

## Patterns
[Code patterns, conventions, approaches that work well here]

## Anti-patterns
[Things that don't work, mistakes to avoid]
```

## Updating Memory

- Add new entries at the top (most recent first)
- Consolidate related entries periodically
- Remove obsolete entries when things change
- User can edit MEMORY.md directly to add/remove entries
