# Multi-Agent Review System

## Available Review Agents

### Code Quality Agent
**Focus**: Clean code, patterns, maintainability
**Checks**:
- Function length and complexity
- Naming conventions
- DRY violations
- Code organization
- Error handling patterns
- Test coverage gaps

### Security Agent
**Focus**: Vulnerabilities and security risks
**Checks**:
- Input validation
- SQL injection risks
- XSS vulnerabilities
- Authentication/authorization gaps
- Secrets in code
- Dependency vulnerabilities

### Performance Agent
**Focus**: Speed and resource usage
**Checks**:
- N+1 queries
- Unnecessary re-renders
- Memory leaks
- Large bundle imports
- Missing caching opportunities
- Inefficient algorithms

### Accessibility Agent
**Focus**: a11y compliance
**Checks**:
- ARIA labels
- Keyboard navigation
- Color contrast
- Screen reader compatibility
- Focus management
- Semantic HTML

### Style Agent
**Focus**: Code formatting and conventions
**Checks**:
- Consistent formatting
- Import organization
- Comment quality
- Naming consistency
- File structure

### Documentation Agent
**Focus**: Docs and comments
**Checks**:
- Missing JSDoc/docstrings
- Outdated comments
- README accuracy
- API documentation
- Inline explanations for complex logic

## Running Reviews

### Single Agent
```
Run the security agent on src/auth/
```

### Parallel Multi-Agent
```
Run parallel review: security, performance, accessibility on src/components/
```

### Full Review Suite
```
Run all review agents on the checkout module
```

## Agent Selection by File Type

| File Type | Recommended Agents |
|-----------|-------------------|
| `.ts/.js` (API) | Security, Performance, Code Quality |
| `.tsx/.jsx` (UI) | Accessibility, Performance, Style |
| `.py` (Backend) | Security, Performance, Code Quality |
| `.sql` | Security, Performance |
| `.md` | Documentation, Style |
| Config files | Security, Code Quality |

## Parallel Execution Rules

1. Independent agents run simultaneously
2. Each agent produces its own report
3. Orchestrator synthesizes into unified priority list
4. Critical issues from ANY agent block approval

## Report Synthesis Format

After all agents complete:

```
## Multi-Agent Review Summary

### Critical (fix immediately)
- [Security] SQL injection in users.ts:45
- [Performance] N+1 query in orders.ts:78

### High Priority
- [Accessibility] Missing ARIA labels in Modal.tsx
- [Security] Rate limiting missing on /api/login

### Medium Priority
- [Code Quality] Function exceeds 50 lines in utils.ts:120
- [Style] Inconsistent naming convention

### Low Priority
- [Documentation] Missing JSDoc on helper functions
- [Style] Import order not alphabetized

**Combined Score**: 76/100
**Blocking Issues**: 2 Critical, 2 High
**Recommendation**: Fix Critical and High before merge
```
