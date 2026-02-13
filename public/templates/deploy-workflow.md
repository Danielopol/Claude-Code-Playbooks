# Deploy Workflow Protocol

## Activation

When I say "/deploy", "deploy to [target]", or "release", activate this protocol.

## Deployment Configuration

```yaml
# Customize for your project
project_name: "my-project"
deploy_targets:
  production:
    command: "vercel --prod"
    url: "https://myapp.com"
    requires_approval: true
  staging:
    command: "vercel"
    url: "https://staging.myapp.com"
    requires_approval: false
  npm:
    command: "npm publish"
    requires_approval: true
version_file: "package.json"  # or Cargo.toml, pyproject.toml, etc.
```

## Deploy Pipeline

```
┌─────────────────────────────────────────────────────────┐
│                    PRE-DEPLOY PHASE                      │
├─────────────────────────────────────────────────────────┤
│  1. Check clean git status (no uncommitted changes)      │
│  2. Pull latest from main/master                         │
│  3. Run tests                                            │
│  4. Run linter                                           │
│  5. Run build                                            │
│  6. Check for security vulnerabilities                   │
└────────────────────────┬────────────────────────────────┘
                         │
                    ┌────▼────┐
                    │ All OK? │
                    └────┬────┘
                        / \
                      YES   NO
                       │     │
                       │     └─▶ STOP: Fix issues first
                       │
┌──────────────────────▼──────────────────────────────────┐
│                    VERSION PHASE                         │
├─────────────────────────────────────────────────────────┤
│  1. Determine version bump (patch/minor/major)          │
│  2. Update version in config files                      │
│  3. Update CHANGELOG.md                                  │
│  4. Commit version bump                                  │
│  5. Create git tag                                       │
└────────────────────────┬────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────┐
│                    DEPLOY PHASE                          │
├─────────────────────────────────────────────────────────┤
│  1. Push to remote (triggers CI/CD if configured)       │
│  2. Run deploy command                                   │
│  3. Wait for deployment to complete                      │
│  4. Run smoke tests on deployed URL                      │
└────────────────────────┬────────────────────────────────┘
                         │
                    ┌────▼────┐
                    │Success? │
                    └────┬────┘
                        / \
                      YES   NO
                       │     │
                       │     └─▶ Initiate rollback
                       │
┌──────────────────────▼──────────────────────────────────┐
│                   POST-DEPLOY PHASE                      │
├─────────────────────────────────────────────────────────┤
│  1. Verify deployment URL is accessible                  │
│  2. Check health endpoint                                │
│  3. Update deployment log                                │
│  4. Notify (if configured)                               │
└─────────────────────────────────────────────────────────┘
```

## Pre-Deploy Checks

Run these checks before ANY deployment:

### 1. Clean Git Status
```bash
git status --porcelain
# Must be empty (no uncommitted changes)
```

### 2. Tests Pass
```bash
npm test  # or pytest, cargo test, go test
# Exit code must be 0
```

### 3. Lint Passes
```bash
npm run lint  # or equivalent
# Exit code must be 0
```

### 4. Build Succeeds
```bash
npm run build  # or equivalent
# Exit code must be 0
```

### 5. Security Check (optional but recommended)
```bash
npm audit  # or cargo audit, safety check
# No high/critical vulnerabilities
```

## Pre-Deploy Report

```
## Pre-Deploy Checklist

**Target**: production
**Branch**: main

| Check | Status | Details |
|-------|--------|---------|
| Git clean | ✓ | No uncommitted changes |
| Tests | ✓ | 47/47 passing |
| Lint | ✓ | 0 errors, 2 warnings |
| Build | ✓ | Completed in 12.3s |
| Security | ✓ | No vulnerabilities |

**All checks passed. Ready to deploy.**
```

## Version Bump Rules

### Semantic Versioning (semver)
- **patch** (1.0.0 → 1.0.1): Bug fixes, no new features
- **minor** (1.0.0 → 1.1.0): New features, backwards compatible
- **major** (1.0.0 → 2.0.0): Breaking changes

### Auto-Detect from Commits
```
feat: → minor bump
fix: → patch bump
BREAKING CHANGE: → major bump
chore/docs/style: → no version bump (unless forced)
```

### Version Update Locations
Update version in:
- package.json (Node.js)
- Cargo.toml (Rust)
- pyproject.toml (Python)
- VERSION file
- App constants (if hardcoded)

## Deploy Commands by Target

### Vercel
```bash
vercel --prod  # production
vercel  # preview/staging
```

### Netlify
```bash
netlify deploy --prod
netlify deploy  # draft
```

### npm Registry
```bash
npm publish
npm publish --tag beta  # pre-release
```

### Docker
```bash
docker build -t myapp:$VERSION .
docker push myapp:$VERSION
```

### Custom Server
```bash
ssh server "cd /app && git pull && npm install && pm2 restart all"
```

## Post-Deploy Verification

### Health Check
```bash
curl -f https://myapp.com/health
# Must return 200 OK
```

### Smoke Test
```bash
# Verify critical paths work
curl -f https://myapp.com/
curl -f https://myapp.com/api/status
```

### Version Check
```bash
curl https://myapp.com/api/version
# Must match deployed version
```

## Rollback Protocol

If deployment fails or verification fails:

1. **Identify last good version** from git tags
2. **Revert**: `git revert HEAD` or redeploy previous tag
3. **Redeploy** the last known good version
4. **Verify** rollback succeeded
5. **Document** what went wrong

```
## Rollback Executed

**Reason**: Health check failed after deploy
**Rolled back from**: v1.2.3
**Rolled back to**: v1.2.2
**Status**: ✓ Rollback successful, site operational
```

## Deploy Report Format

```
## Deployment Report

**Project**: my-project
**Target**: production
**Version**: 1.2.3 → 1.2.4

### Pre-Deploy
- Tests: ✓ 47 passing
- Build: ✓ 12.3s
- Lint: ✓ Clean

### Deploy
- Command: vercel --prod
- Duration: 45s
- URL: https://myapp.com

### Verification
- Health: ✓ 200 OK
- Response time: 234ms
- Version endpoint: ✓ Returns 1.2.4

**Status**: ✓ DEPLOYED SUCCESSFULLY

**Changelog**:
- Fixed authentication bug (#123)
- Added dark mode toggle (#124)
```

## Invoking Deploy

```
/deploy              # Deploy to default target
/deploy production   # Deploy to specific target
/deploy staging      # Deploy to staging
release patch        # Bump patch version and deploy
release minor        # Bump minor version and deploy
```
