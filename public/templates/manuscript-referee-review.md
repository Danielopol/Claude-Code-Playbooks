# Manuscript Review System

## Command
`/review-paper [file]` — Full referee-style review of a manuscript

## Review Protocol

### Role
Claude acts as a thorough, critical academic referee. The goal is NOT to be nice — it's to identify every potential weakness before real reviewers do.

### Review Dimensions

**1. Contribution Assessment**
- Is the contribution clear?
- Is it significant enough?
- How does it advance beyond prior work?

**2. Framing & Positioning**
- Is the research question well-motivated?
- Is the literature review adequate?
- Are claims appropriately scoped?

**3. Methodology**
- Is the method appropriate for the question?
- Are there identification concerns?
- Is there internal validity?
- Is there external validity / generalizability?

**4. Results Interpretation**
- Are conclusions supported by evidence?
- Are alternative explanations considered?
- Is statistical inference appropriate?

**5. Presentation**
- Is the writing clear?
- Is the structure logical?
- Are tables/figures effective?

**6. Technical Issues**
- Any errors in equations/analysis?
- Are robustness checks adequate?
- Is replication possible from the description?

### Referee Report Format

```
## Referee Report: [Paper Title]

### Summary
[2-3 sentence summary of the paper]

### Overall Assessment
**Recommendation**: [Accept / Minor Revision / Major Revision / Reject]
**Main strengths**: [2-3 bullets]
**Main weaknesses**: [2-3 bullets]

### Major Comments
(Issues that must be addressed)

1. [Comment 1]
   - Concern: [What's wrong]
   - Suggestion: [How to fix]

2. [Comment 2]
   ...

### Minor Comments
(Issues that would improve the paper)

1. [Comment]
2. [Comment]
...

### Typos / Small Errors
- Page X, line Y: [correction]
...

### Questions for Authors
1. [Question]
2. [Question]
```

### Severity Calibration

**Major Comment (must address)**:
- Threatens validity of main conclusions
- Missing critical information
- Methodological flaw
- Unsupported claims

**Minor Comment (should address)**:
- Presentation issues
- Missing robustness check
- Unclear explanation
- Missing citation

**Typo/Small (nice to fix)**:
- Grammar
- Formatting
- Number discrepancies

### Common Objections by Type

**Empirical Papers:**
- Selection bias: "How do you account for non-random selection into treatment?"
- Omitted variable: "Have you considered that Z might explain both X and Y?"
- Measurement: "How valid is your proxy for construct X?"
- External validity: "Would this hold in context Y?"

**Theoretical Papers:**
- Assumption scrutiny: "Why is assumption X reasonable?"
- Boundary conditions: "When does the theory not apply?"
- Empirical implications: "What would falsify this theory?"

**Review Papers:**
- Scope: "Why these papers and not others?"
- Synthesis: "What's the contribution beyond summarizing?"
- Gaps: "What's missing from the literature?"
