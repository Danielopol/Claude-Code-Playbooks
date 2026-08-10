# Git Commit & PR Automation

## Your Role

You handle my git mechanics so I don't context-switch out of the work. Three workflows: commit, ship a PR, and clean up stale branches.

---

## Workflow 1: Commit

When I ask you to commit:

### Gather context

Run these and read the output before doing anything:

```bash
git status
git diff HEAD          # staged and unstaged changes
git branch --show-current
git log --oneline -10  # learn the repo's message style
```

### Then

1. Analyze what actually changed
2. Study the recent commits — match the repo's existing message style, don't impose your own
3. Draft an appropriate commit message
4. Stage the relevant files
5. Create the commit

**Do all of this in a single message with parallel tool calls.** Don't narrate. Don't send extra text. Just the tool calls.

### Never commit

- `.env`, `.env.local`, or any environment file
- `credentials.json`, `secrets.yaml`, keystore files, `.pem` files
- Anything with a hardcoded API key, token, or password
- Build output or `node_modules` unless the repo deliberately tracks them

If staged changes contain a secret, stop and tell me instead of committing.

---

## Workflow 2: Commit, Push, and Open a PR

When I ask you to ship a PR:

### Gather context

```bash
git status
git diff HEAD
git branch --show-current
```

### Then, in a single message

1. **Create a new branch if I'm on main.** Never commit directly to the default branch.
2. Create a single commit with an appropriate message
3. Push the branch to `origin`
4. Create the pull request with `gh pr create`
5. Give me the PR URL

### PR description format

Analyze **all commits in the branch**, not just the latest one. The PR description should cover the whole branch:

```markdown
## Summary
- 1–3 bullets describing what changed and why

## Test plan
- [ ] Specific, checkable verification steps
- [ ] How a reviewer confirms this works
```

### Requirements

- GitHub CLI (`gh`) installed and authenticated (`gh auth login`)
- A remote named `origin`

---

## Workflow 3: Clean Up Gone Branches

When I ask you to clean up stale branches — branches deleted on the remote that still exist locally:

### Step 1: List branches and find `[gone]` status

```bash
git branch -v
```

Branches with a `+` prefix have associated worktrees. Their worktrees must be removed before the branch can be deleted.

### Step 2: List worktrees

```bash
git worktree list
```

### Step 3: Remove worktrees and delete gone branches

```bash
git branch -v | grep '\[gone\]' | sed 's/^[+* ]//' | awk '{print $1}' | while read branch; do
  echo "Processing branch: $branch"
  worktree=$(git worktree list | grep "\[$branch\]" | awk '{print $1}')
  if [ ! -z "$worktree" ] && [ "$worktree" != "$(git rev-parse --show-toplevel)" ]; then
    echo "  Removing worktree: $worktree"
    git worktree remove --force "$worktree"
  fi
  echo "  Deleting branch: $branch"
  git branch -D "$branch"
done
```

Report which worktrees and branches were removed. If nothing was marked `[gone]`, say no cleanup was needed.

**If no branches show `[gone]`**: run `git fetch --prune` first to refresh remote tracking. A branch only shows as gone once it's actually deleted on the remote.

---

## Suggested Rhythm

**During development**
```
write code → commit → keep going → commit
```

**Ready to ship**
```
commit-push-pr
```

**After a few PRs merge**
```
clean up gone branches
```

Run the cleanup weekly to keep the local branch list readable.

---

## Rules

- Match the repo's commit message conventions — read `git log` first, every time
- Never commit secrets or environment files
- Never commit directly to the default branch; branch first
- Analyze the full branch history for PR descriptions, not just HEAD
- Show me the commit message before pushing if the change is large or ambiguous
- Cleanup only removes branches already deleted on the remote — it's safe, but report what it did
