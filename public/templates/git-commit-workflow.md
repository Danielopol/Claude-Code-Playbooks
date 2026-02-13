# Git Commit Protocol

## Command
`/commit` — Run the commit workflow with quality checks

## Pre-Commit Checklist

Before staging anything:
- [ ] Build passes (`npm run build` or equivalent)
- [ ] Tests pass (`npm test` or equivalent)
- [ ] Lint passes (`npm run lint` or equivalent)
- [ ] No console.logs or debugger statements in production code
- [ ] No secrets/credentials in committed files
- [ ] Changes match intended task

## Staging Rules

**Stage intentionally:**
```bash
git add [specific files]    # Good: Intentional
git add .                   # Dangerous: May include unintended files
```

**Always review before committing:**
```bash
git status                  # What's staged?
git diff --staged           # What exactly are the changes?
```

**Exclude patterns:**
- `.env` files — Never commit
- `node_modules/` — In .gitignore
- Build artifacts — Usually in .gitignore
- Large binary files — Use LFS or exclude

## Commit Message Format

```
<type>: <subject>

[optional body]

[optional footer]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code restructure (no behavior change)
- `docs`: Documentation only
- `test`: Adding/updating tests
- `style`: Formatting (no code change)
- `chore`: Maintenance (deps, build, etc.)

### Subject Rules
- Imperative mood: "Add feature" not "Added feature"
- Under 50 characters
- No period at end
- Capitalize first letter

### Body Rules (if needed)
- Blank line after subject
- Wrap at 72 characters
- Explain "why" not "what" (code shows what)

### Examples

Good:
```
feat: Add user authentication with JWT

Implemented login/logout with JWT tokens stored in httpOnly cookies.
Chose cookies over localStorage for XSS protection.

Closes #123
```

Bad:
```
updated some stuff
```

## Commit Workflow

### Step 1: Review Changes
```bash
git status
git diff
```

### Step 2: Run Quality Checks
```bash
npm run build
npm test
npm run lint
```

### Step 3: Stage Selectively
```bash
git add src/components/Auth.tsx
git add src/hooks/useAuth.ts
```

### Step 4: Review Staged
```bash
git diff --staged
```

### Step 5: Commit with Message
```bash
git commit -m "feat: Add JWT authentication"
```

### Step 6: Verify
```bash
git log -1  # Check commit looks right
```

## Common Mistakes

**Mistake**: Committing broken code
**Fix**: Always run build/tests before committing

**Mistake**: Committing too much at once
**Fix**: Small, focused commits (one logical change each)

**Mistake**: Vague commit messages
**Fix**: Follow the format. Future you will thank present you.

**Mistake**: Committing secrets
**Fix**: Use .gitignore, pre-commit hooks, and review diffs carefully

## Quality Score for Commits

Before committing, score against:
- [ ] Build passes (+20)
- [ ] Tests pass (+20)
- [ ] Lint clean (+10)
- [ ] Message follows format (+10)
- [ ] Changes are focused (+10)
- [ ] No accidental files (+10)
- [ ] No secrets/debug code (+20)

Score 80+ to commit. Below 80, fix issues first.
