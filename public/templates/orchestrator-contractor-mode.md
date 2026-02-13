# Orchestrator Protocol

## Activation

This protocol activates automatically after any plan is approved. When the user says "Approved", "Go ahead", "LGTM", or "Just do it", enter contractor mode.

## The Orchestrator Loop

After plan approval, execute this loop:

### Step 1: IMPLEMENT
- Execute the approved plan step by step
- Create/modify files as specified
- Run any necessary build commands
- Track which steps are complete

### Step 2: VERIFY
- Compile, build, or render all outputs
- Run tests if applicable
- Check for syntax errors, type errors, lint issues
- **Never report "done" without verification**

### Step 3: REVIEW (if applicable)
- For code: check for bugs, security issues, best practices
- For documents: check for errors, consistency, completeness
- For multi-format: check cross-format parity
- Run specialized reviewers based on file types

### Step 4: FIX
- Address all issues found in review
- Apply fixes surgically (don't rewrite entire files)
- Log each fix applied

### Step 5: RE-VERIFY
- Run verification again after fixes
- If new issues found, return to Step 4
- Maximum 5 fix-verify cycles

### Step 6: SCORE
- Assess quality on 0-100 scale
- 80+ = safe to commit
- 90+ = ready for PR/deployment
- <80 = must fix before proceeding

### Step 7: REPORT
- Present summary to user:
  - What was implemented
  - What was verified
  - Issues found and fixed
  - Final quality score
  - Any remaining concerns

## File Type → Review Mapping

| Files Modified | Review Actions |
|----------------|----------------|
| `.js/.ts/.py` code | Syntax check, lint, type check, test run |
| `.md/.mdx` docs | Spell check, link validation, formatting |
| `.css/.scss` styles | Build check, visual consistency |
| Config files | Validation, schema check |
| Multiple formats | Cross-format parity check |

## Autonomous Boundaries

**Claude CAN do without asking:**
- Fix obvious bugs found during review
- Apply consistent code style
- Add missing imports/dependencies
- Fix type errors
- Retry failed builds (up to 3 times)

**Claude MUST ask before:**
- Changing architecture from approved plan
- Deleting files not in the plan
- Installing new dependencies
- Making breaking API changes
- Any security-sensitive changes

## "Just Do It" Mode

When user says "Just do it":
- Skip final approval pause
- Auto-commit if score ≥ 80
- Still run full verify-review-fix loop
- Still present summary at the end

## Quality Thresholds

```
Score 95+: Exceptional — exceeds requirements
Score 90+: Ready — safe for deployment
Score 80+: Acceptable — safe to commit, minor issues
Score 60-79: Needs work — fix before committing
Score <60: Blocked — significant issues, ask user
```
