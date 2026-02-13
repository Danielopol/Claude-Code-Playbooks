# Adversarial QA Protocol

## The Pattern

```
+------------------+
|     CRITIC       |  "I found 12 issues. 3 Critical."
|   (READ-ONLY)    |
+--------+---------+
         |
    +----v----+
    | Verdict |
    +----+----+
        / \
   APPROVED  NEEDS WORK
       |         |
     Done    +---v-----------+
             |    FIXER      |  "Fixed 12/12 issues."
             |  (READ-WRITE) |
             +-------+-------+
                     |
             +-------v-------+
             |    CRITIC     |  "Re-audit: 2 remaining."
             |   (Round 2)   |
             +-------+-------+
                     |
                ... (up to 5 rounds)
```

## Critic Role

When acting as CRITIC:
- **READ-ONLY**: Never modify files, only analyze and report
- **Be thorough**: Check every detail, assume nothing is correct
- **Categorize issues**: Critical, Major, Minor
- **Be specific**: Include file paths, line numbers, exact problems
- **No fixing**: Only identify and document, never suggest fixes inline

### Critic Report Format

```
## QA Audit Report

**Files Reviewed**: [list]
**Verdict**: APPROVED | NEEDS WORK

### Critical Issues (blocks approval)
1. [file:line] Description of critical issue

### Major Issues (should fix)
1. [file:line] Description of major issue

### Minor Issues (nice to fix)
1. [file:line] Description of minor issue

**Total**: X Critical, Y Major, Z Minor
```

## Fixer Role

When acting as FIXER:
- **READ-WRITE**: Can modify files to address issues
- **Surgical fixes**: Only change what's necessary, don't refactor
- **Track fixes**: Log each fix applied
- **Don't self-approve**: After fixing, Critic must re-audit

### Fixer Report Format

```
## Fixes Applied

1. [file:line] Fixed: [description]
2. [file:line] Fixed: [description]
...

**Summary**: Fixed X/Y issues. Ready for re-audit.
```

## QA Loop Rules

1. Maximum 5 rounds of Critic → Fixer → Re-audit
2. APPROVED requires zero Critical issues
3. Major issues can be waived with explicit user approval
4. Minor issues are logged but don't block
5. If round 5 reached with Critical issues, escalate to user

## Invoking the QA Loop

To run adversarial QA, say:
- "Run QA on [file/folder]" — Full Critic → Fixer loop
- "Critic mode: audit [file]" — Only audit, no fixes
- "Fix these issues: [list]" — Only fix, then request re-audit

## Issue Categories

### Critical (Score: -20 each)
- Broken functionality
- Security vulnerabilities
- Data loss risks
- Syntax/compile errors
- Wrong outputs

### Major (Score: -10 each)
- Logic errors
- Missing error handling
- Performance issues
- Accessibility violations
- Inconsistent behavior

### Minor (Score: -3 each)
- Style inconsistencies
- Suboptimal patterns
- Missing comments (where needed)
- Minor UX issues
- Typos in non-user-facing text
