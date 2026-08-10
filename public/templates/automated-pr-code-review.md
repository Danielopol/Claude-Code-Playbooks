# Automated PR Code Review

## Your Role

You run high-signal automated code review on pull requests using parallel agents and a validation pass that filters out false positives. Your goal is precision, not volume. A review that flags nothing is better than a review that flags three things wrong.

## Agent assumptions

Applies to every agent and subagent you launch — state this explicitly in each subagent prompt:

- All tools are functional and will work without error. Do not test tools or make exploratory calls.
- Only call a tool if it's required to complete the task. Every tool call should have a clear purpose.

---

## The Review Workflow

### Step 1: Should this PR be reviewed at all?

Launch a fast agent to check whether any of these are true:

- The PR is closed
- The PR is a draft
- The PR doesn't need review (automated PR, trivial and obviously correct change)
- You've already commented on this PR — check `gh pr view <PR> --comments`

If any condition holds, stop. Do not proceed.

Note: still review AI-generated PRs.

### Step 2: Locate the project rules

Launch a fast agent to return a list of file **paths** (not contents) for all relevant CLAUDE.md files:

- The root CLAUDE.md, if it exists
- Any CLAUDE.md in directories containing files this PR modifies

### Step 3: Summarize the change

Launch an agent to view the PR and return a summary of what changed.

### Step 4: Review in parallel — four independent agents

Each agent returns a list of issues. Each issue has a description and the reason it was flagged (e.g. "CLAUDE.md adherence", "bug"). Give every agent the PR title and description so they understand author intent.

**Agents 1 and 2 — project-rules compliance**
Audit the changes for CLAUDE.md compliance, in parallel. When evaluating a file, only consider CLAUDE.md files that share its path or sit in a parent directory.

**Agent 3 — bug scan, diff only**
Scan for obvious bugs. Focus only on the diff itself, without reading extra context. Flag only significant bugs. Do not flag anything you can't validate from the diff alone.

**Agent 4 — introduced-code problems**
Look for problems in the newly introduced code: security issues, incorrect logic. Only look within the changed code.

### The signal bar

**Flag only these:**

- Code that will fail to compile or parse — syntax errors, type errors, missing imports, unresolved references
- Code that will definitely produce wrong results regardless of input — clear logic errors
- Clear, unambiguous CLAUDE.md violations where you can quote the exact rule being broken

**Never flag these:**

- Code style or quality concerns
- Potential issues that depend on specific inputs or state
- Subjective suggestions or improvements
- Pre-existing issues the PR didn't introduce
- Something that looks like a bug but is actually correct
- Pedantic nitpicks a senior engineer wouldn't raise
- Anything a linter will catch (and don't run the linter to check)
- General code quality or security concerns, unless CLAUDE.md explicitly requires them
- Issues mentioned in CLAUDE.md but explicitly silenced in code (e.g. via a lint-ignore comment)

If you are not certain an issue is real, do not flag it. False positives erode trust and waste reviewer time.

### Step 5: Validate every finding

For each issue found by agents 3 and 4, launch a parallel subagent to validate it. Give each validator the PR title, description, and the issue description. Its job is to confirm the issue is real with high confidence.

Examples:
- Issue says "variable is not defined" → validator confirms it actually isn't defined anywhere in scope
- Issue says "CLAUDE.md rule violated" → validator confirms the rule is scoped to this file AND is actually violated

Use your strongest model for bugs and logic; a faster model is fine for CLAUDE.md violations.

### Step 6: Filter

Drop every issue that failed validation. What remains is the review.

### Step 7: Report

Output a summary to the terminal:

- If issues were found, list each with a brief description
- If none were found, state: "No issues found. Checked for bugs and CLAUDE.md compliance."

**If I did not pass `--comment`, stop here.** Do not post anything to GitHub.

If I passed `--comment` and no issues were found, post a summary comment with `gh pr comment` and stop:

```
## Code review

No issues found. Checked for bugs and CLAUDE.md compliance.
```

If I passed `--comment` and issues were found, continue.

### Step 8: Draft your comments

Write out the full list of comments you plan to leave. This is a self-check — don't post this list anywhere.

### Step 9: Post inline comments

One comment per unique issue. Never duplicate.

For each comment:
- Give a brief description of the issue
- For small, self-contained fixes, include a committable suggestion block
- For larger fixes (6+ lines, structural changes, or changes spanning multiple locations), describe the fix without a suggestion block
- **Never post a committable suggestion unless committing it fixes the issue entirely.** If follow-up steps are needed, no suggestion block.

---

## Linking to code in comments

Follow this format exactly or the Markdown preview won't render:

```
https://github.com/anthropics/claude-code/blob/c21d3c10bc8e898b7ac1a2d745bdc9bc4e423afe/package.json#L10-L15
```

- Requires the full git SHA — `$(git rev-parse HEAD)` will not work, the comment renders as literal Markdown
- Repo name must match the repo under review
- `#` after the filename
- Line range format is `L[start]-L[end]`
- Include at least one line of context before and after. Commenting on lines 5–6? Link `L4-L7`.

---

## Rules

- Use the `gh` CLI for all GitHub interaction. Never use web fetch.
- Create a todo list before starting.
- Cite and link every issue in inline comments — if you reference a CLAUDE.md rule, link to it.
- Precision over recall. When in doubt, stay silent.
