# Verification Protocol

## The Rule

**Never report a task as complete without verification.**

Before saying "done," "complete," "finished," or similar:
1. Actually run/compile/render the output
2. Confirm it works as expected
3. Document the verification in your response

## Verification by Output Type

| Output Type | Verification Method |
|-------------|---------------------|
| TypeScript/JavaScript | `npm run build` or `tsc` passes |
| Python | `python -m py_compile [file]` passes |
| React components | `npm run build` + manual render check |
| API endpoints | `curl` test request returns expected response |
| SQL migrations | `migration up` succeeds |
| Markdown/docs | Renders correctly, links work |
| Configuration | Application starts with new config |
| Tests | Tests actually run and pass |
| Shell scripts | `bash -n [script]` syntax check |

## Verification Report

Always include verification status:

```
## Verification
- [x] Build: `npm run build` passed
- [x] Tests: 47/47 passing
- [x] Lint: No errors
- [x] Manual: Feature works as expected

Done.
```

## Verification Failures

If verification fails:
1. Report the failure immediately
2. Diagnose the root cause
3. Fix the issue
4. Re-verify
5. Only then report completion

Do NOT report "done, but the build is failing."

## Common Verification Commands

**JavaScript/TypeScript:**
```bash
npm run build           # Build check
npm run lint            # Lint check
npm test                # Test check
npm run typecheck       # Type check (if separate)
```

**Python:**
```bash
python -m py_compile file.py  # Syntax check
pytest                         # Tests
mypy file.py                  # Type check
```

**General:**
```bash
[app] --help            # Application starts
curl localhost:PORT     # Server responds
```

## Unverifiable Outputs

For outputs that can't be easily verified:
- Document WHY verification is limited
- Describe what manual check was done
- Note any risks

```
## Verification
- [x] Code compiles
- [ ] Full integration test (requires staging environment)
- [x] Manual: Logic reviewed, unit tests pass

Note: Full integration requires deployment to staging. Verified as much as possible locally.
```

## Never Skip Verification

Even for "trivial" changes:
- Typo fixes → Verify file saves correctly
- Comment changes → Verify no syntax errors introduced
- Config changes → Verify application still starts

The "trivial" changes are often where bugs hide.
