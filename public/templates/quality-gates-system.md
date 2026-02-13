# Quality Gates

## Scoring Thresholds

| Score | Threshold | Meaning | Action Allowed |
|-------|-----------|---------|----------------|
| 95+   | Excellence | Exceptional quality | Deploy to production |
| 90+   | PR Ready  | Ready for review/deployment | Create PR, merge |
| 80+   | Commit    | Safe to save progress | Git commit allowed |
| 60-79 | Needs Work | Has issues | Must fix before committing |
| <60   | Blocked   | Critical problems | Stop and address |

## Scoring Calculation

Start at 100, deduct points for issues:

### Critical Issues (-20 points each)
- Broken functionality (code doesn't run)
- Security vulnerabilities
- Data corruption risks
- Unhandled exceptions in critical paths
- Missing required functionality

### Major Issues (-10 points each)
- Logic errors (code runs but wrong output)
- Missing error handling
- Performance problems (N+1 queries, memory leaks)
- Accessibility violations
- Missing tests for critical paths
- Type errors or lint failures

### Minor Issues (-5 points each)
- Code style inconsistencies
- Missing optional error handling
- Suboptimal but working patterns
- Missing non-critical tests
- Documentation gaps

### Nits (-2 points each)
- Typos in non-user-facing text
- Extra whitespace
- Overly long lines
- Missing comments (where helpful)

## Quality Gate Rules

1. **Never commit below 80**: If score < 80, must fix before committing
2. **Never PR below 90**: If score < 90, fix or document why waived
3. **Always score before "done"**: No task is complete without a score
4. **Re-score after fixes**: Apply fixes, then re-calculate

## Mandatory Verification

Before assigning a score, MUST verify:
- [ ] Code compiles/builds successfully
- [ ] Tests pass (if applicable)
- [ ] Linter passes (if applicable)
- [ ] The feature actually works (manual check)

**Never score without verification.** A score of 95 with a broken build is wrong.

## Score Report Format

```
## Quality Score: XX/100

### Deductions:
- (-10) Missing error handling in submitForm()
- (-5) Inconsistent naming: userId vs user_id
- (-2) Typo in comment line 45

### Verification:
- [x] Build: Passed
- [x] Tests: 47/47 passed
- [x] Lint: No errors
- [x] Manual test: Form submits correctly

### Verdict: [COMMIT OK | FIX REQUIRED | BLOCKED]
```

## Waiver Process

For scores between 60-79, user can waive with explicit approval:
1. Claude presents the issues
2. User says "Waive and commit with known issues"
3. Claude commits with a note documenting waived issues
4. Issues must be addressed in follow-up PR
