# Iterative Build & Fix Protocol

## Activation

When I say "/build", "fix build", or "build until it passes", activate this protocol.

## Build Configuration

```yaml
# Customize for your project
build_command: "npm run build"
max_attempts: 5
timeout_seconds: 120
```

## The Build-Fix Loop

```
┌─────────────────┐
│   Run Build     │
└────────┬────────┘
         │
    ┌────▼────┐
    │ Success? │
    └────┬────┘
        / \
      YES   NO
       │     │
    ┌──▼──┐ ┌▼─────────────┐
    │Done │ │ Parse Errors │
    └─────┘ └──────┬───────┘
                   │
           ┌───────▼───────┐
           │  Fix Errors   │
           └───────┬───────┘
                   │
           ┌───────▼───────┐
           │  Round < Max? │
           └───────┬───────┘
                  / \
                YES   NO
                 │     │
         [Loop] ─┘     └─▶ Escalate to user
```

## Error Parsing Rules

### TypeScript/JavaScript (npm, tsc, webpack)
```
Pattern: "error TS\d+:" or "Error:" with file path
Extract: file path, line number, error message
```

### Rust (cargo)
```
Pattern: "error[E\d+]:"
Extract: file path, line/column, error message
```

### Go (go build)
```
Pattern: "file.go:line:col: message"
Extract: file path, line, column, error message
```

### Python (pytest, mypy)
```
Pattern: "file.py:line:" or "E\d+:"
Extract: file path, line, error type, message
```

### Generic Fallback
```
Pattern: Any line containing "error" + file path
Extract: file path (if identifiable), full message
```

## Fix Strategy

For each error:

1. **Read the file** at the error location
2. **Understand context** (surrounding 10 lines)
3. **Apply minimal fix** — only change what's necessary
4. **Don't refactor** — fix the error, nothing more
5. **Log the fix** — track what changed for the report

### Fix Priorities

| Error Type | Action |
|------------|--------|
| Missing import | Add the import |
| Type mismatch | Fix the type annotation or cast |
| Undefined variable | Check for typo or add declaration |
| Syntax error | Fix the syntax |
| Missing dependency | Note for user (may need npm install) |

## Build Report Format

After each build attempt:

```
## Build Attempt [N/max]

**Command**: npm run build
**Status**: FAILED | SUCCESS
**Duration**: X seconds

### Errors Found (X total)
1. [file:line] Error message
2. [file:line] Error message

### Fixes Applied
1. [file:line] Added missing import for 'useState'
2. [file:line] Changed type from 'string' to 'number'

### Remaining Issues
- [file:line] Cannot auto-fix: [reason]

---
[Re-running build...]
```

## Final Report Format

```
## Build Loop Complete

**Total Attempts**: X
**Final Status**: SUCCESS | FAILED

### Summary
- Errors fixed: Y
- Files modified: Z

### Changes Made
1. [file:line] Description of fix
2. [file:line] Description of fix

### Manual Attention Needed (if any)
- [file:line] Issue that requires user decision
```

## Build-Fix Rules

1. **Max 5 attempts** — If still failing after 5 rounds, stop and report
2. **One error type at a time** — Fix all instances of error X before moving to Y
3. **Don't introduce new errors** — If fix causes new error, revert and flag
4. **Track all changes** — User should see exactly what was modified
5. **Preserve formatting** — Match existing code style

## Common Auto-Fixes

### TypeScript
- Missing imports → Add import statement
- 'X' is not assignable to 'Y' → Fix type or add assertion
- Property 'X' does not exist → Check for typo or add property
- Cannot find module → Check path or note for npm install

### React
- Missing key prop → Add key={...}
- Hook called conditionally → Move to top level
- Missing dependency in useEffect → Add to dependency array

### Rust
- Missing trait → Add use statement
- Borrow checker errors → Apply suggested fix from compiler
- Missing lifetime → Add lifetime annotation

### Go
- Undefined variable → Check scope or declare
- Import not used → Remove import
- Missing return → Add return statement

## What NOT to Auto-Fix

Flag these for user attention:
- Ambiguous type choices (could be A or B)
- Logic errors (code compiles but is wrong)
- Missing dependencies (needs package manager)
- Breaking changes to public APIs
- Test failures (intentional vs bug)

## Invoking the Build Loop

```
/build
fix build errors
build until it passes
run build loop with max 3 attempts
```
