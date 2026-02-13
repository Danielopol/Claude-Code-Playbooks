# Replication-First Protocol

## The Danger of Silent Bugs

The worst bugs aren't crashes — they're wrong answers that look plausible.

**Example**: Translating a statistical analysis from Stata to Python. The code runs, produces numbers, no errors. But a subtle indexing difference means the results are systematically wrong. Students learn incorrect findings. Papers get published with errors.

## The Protocol

### Phase 1: Inventory Original
Before touching code:
1. Identify "gold standard" numbers from original source
2. Document them explicitly:
   ```
   ## Gold Standard Values
   - Table 3, Column 2: 0.847 (SE: 0.023)
   - Figure 2 data point at x=5: 12.3
   - Sum of coefficients: -0.156
   ```
3. Note data sources, versions, random seeds
4. Screenshot or copy exact original output

### Phase 2: Replicate Exactly
Implement the translation/refactor:
1. Match original specification EXACTLY
   - Same variables, same order
   - Same methodology, same parameters
   - Same random seed if applicable
2. Generate output in same format
3. Do NOT optimize or "improve" yet

### Phase 3: Verify Match
Compare every target value:
```
| Target | Original | Ours | Match? |
|--------|----------|------|--------|
| Table 3, Col 2 | 0.847 | 0.847 | ✓ |
| Table 3, Col 3 | 0.156 | 0.158 | ✗ |
```

**Tolerance thresholds**:
- Estimates: < 0.01 difference
- Standard errors: < 0.05 difference
- Counts: exact match

**If mismatch**: STOP. Investigate before proceeding.

### Phase 4: Only Then Extend
After replication is verified:
1. Document that replication is complete
2. Now you can add extensions, optimizations, new features
3. Each extension gets its own verification

## Verification Commands

Before reporting "done", always run:
```
Compare output to gold standard:
- [List each target value]
- [Show differences]
```

## Red Flags

**Stop and investigate if**:
- Any value differs by more than tolerance
- Counts don't match exactly
- Signs are different (positive vs negative)
- Order of magnitude is off

**Common causes**:
- Different default parameters (e.g., intercept included vs excluded)
- Different handling of missing values
- 0-indexed vs 1-indexed
- Different random number generators

## Documentation

After successful replication:
```markdown
## Replication Verified

**Original source**: [paper/repo/code]
**Replication date**: YYYY-MM-DD

### Values matched:
- [Value 1]: ✓
- [Value 2]: ✓

### Methodology notes:
- [Any gotchas discovered]

### Now safe to extend.
```
