# Comprehensive Excellence Review

## Activation

When I say "/excellence" or "run excellence review on [target]", activate this protocol.

## The 6 Review Agents

Run these agents IN PARALLEL on the target files:

### 1. Code Quality Agent
**Focus**: Clean code, patterns, maintainability
**Checks**:
- Function length and complexity (flag >30 lines)
- Naming conventions (clear, consistent)
- DRY violations (repeated code blocks)
- Code organization (separation of concerns)
- Error handling patterns
- Test coverage gaps

### 2. Security Agent
**Focus**: Vulnerabilities and security risks
**Checks**:
- Input validation (user inputs, API data)
- Injection risks (SQL, command, XSS)
- Authentication/authorization gaps
- Secrets in code (API keys, passwords)
- Dependency vulnerabilities
- Data exposure (logs, errors, responses)

### 3. Performance Agent
**Focus**: Speed and resource usage
**Checks**:
- N+1 queries (database access patterns)
- Unnecessary re-renders (React/Vue)
- Memory leaks (unclosed resources)
- Large bundle imports (tree-shaking opportunities)
- Missing caching opportunities
- Inefficient algorithms (O(n²) when O(n) possible)

### 4. Accessibility Agent
**Focus**: a11y compliance
**Checks**:
- ARIA labels (interactive elements)
- Keyboard navigation (tab order, focus)
- Color contrast (WCAG AA minimum)
- Screen reader compatibility
- Focus management (modals, SPAs)
- Semantic HTML (headings, landmarks)

### 5. Documentation Agent
**Focus**: Docs and comments
**Checks**:
- Missing JSDoc/docstrings (public APIs)
- Outdated comments (code changed, comment didn't)
- README accuracy (setup instructions work)
- API documentation (all endpoints documented)
- Inline explanations (complex logic explained)
- Type documentation (complex types)

### 6. Style Agent
**Focus**: Code formatting and conventions
**Checks**:
- Consistent formatting (spacing, braces)
- Import organization (grouped, sorted)
- Comment quality (meaningful, not noise)
- Naming consistency (camelCase, snake_case)
- File structure (logical organization)
- Linting compliance

## Execution Protocol

1. **Fan out**: Launch all 6 agents in parallel on target files
2. **Collect**: Wait for all agents to complete
3. **Synthesize**: Combine into unified priority list
4. **Score**: Calculate composite quality score
5. **Report**: Present synthesized findings

## Agent Report Format

Each agent produces:
```
## [Agent Name] Review

**Files Reviewed**: [list]
**Issues Found**: X total (Y critical, Z major, W minor)

### Critical
- [file:line] Issue description

### Major
- [file:line] Issue description

### Minor
- [file:line] Issue description

**Agent Score**: XX/100
```

## Synthesis Format

After all agents complete:
```
## Excellence Review Summary

**Target**: [files/folder reviewed]
**Agents Run**: 6/6 completed

### Critical Issues (fix immediately)
- [Security] SQL injection in users.ts:45
- [Performance] N+1 query in orders.ts:78

### High Priority (fix before merge)
- [Accessibility] Missing ARIA labels in Modal.tsx
- [Security] Rate limiting missing on /api/login

### Medium Priority (fix soon)
- [Code Quality] Function exceeds 30 lines in utils.ts:120
- [Style] Inconsistent naming convention

### Low Priority (nice to have)
- [Documentation] Missing JSDoc on helper functions
- [Style] Import order not alphabetized

---

## Score Breakdown

| Agent | Score | Issues |
|-------|-------|--------|
| Code Quality | 85/100 | 3 |
| Security | 78/100 | 5 |
| Performance | 92/100 | 1 |
| Accessibility | 70/100 | 6 |
| Documentation | 88/100 | 2 |
| Style | 95/100 | 1 |

**Composite Score**: 84/100

### Verdict
- ✗ Below 80: Block commit
- ✓ 80-89: Commit OK, PR needs fixes
- ✓ 90-94: PR ready
- ✓ 95+: Excellence achieved

**Recommendation**: Fix 2 Critical and 2 High Priority issues before merge
```

## Quality Gates

| Score | Threshold | Action |
|-------|-----------|--------|
| 95+ | Excellence | Ship with confidence |
| 90-94 | PR Ready | Create PR, minor polish |
| 80-89 | Commit OK | Save progress, needs work |
| <80 | Blocked | Must fix critical issues |

## Scoring Rules

- **Critical issue**: -20 points
- **Major issue**: -10 points
- **Minor issue**: -3 points
- **No issues in category**: +5 bonus
- **Maximum**: 100 points

## Agent Selection by File Type

| File Type | Recommended Agents |
|-----------|-------------------|
| `.ts/.js` (API) | Security, Performance, Code Quality |
| `.tsx/.jsx` (UI) | Accessibility, Performance, Style |
| `.py` (Backend) | Security, Performance, Code Quality |
| `.sql` | Security, Performance |
| `.md` | Documentation, Style |
| Config files | Security, Code Quality |

## Customizing Agents

Add project-specific checks:

```
### Security Agent - Project Additions
- Check for PII logging (GDPR compliance)
- Verify JWT validation on all /api/admin routes
```

## Invoking Excellence Review

```
/excellence src/components/
run excellence review on the checkout module
comprehensive review: src/api/
```
