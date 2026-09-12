# PR Queue Triage

A systematic process for clearing a backlog of open pull requests before a release: classify every PR by real, evidence-based mergeability — never by title — into an explicit disposition, land what's safe, and hand the maintainer a compact report for the rest.

This is a **speedrun for a solo or small-team maintainer** who wants to clear the inbound backlog in one focused session, not a replacement for genuine code review of every contribution.

## When to Use

- Before a minor or major release when 10+ open PRs have accumulated
- When you want to unblock merging without losing the narrative of what's landing
- When you know you can't personally deep-review every PR, but need to land the critical subset fast
- When a maintainer asks "what's in the PR queue?" or "what can we land?"

## Prerequisites

- `gh` CLI authenticated against the repo
- A dedicated worktree for PR review (never check out contributor branches in your main worktree)
- Clarity on the target version or release branch — the triage doc is named after it

## Workflow

### 1. Set Up an Isolated Review Worktree

```bash
git worktree list  # check for stale ones first
git worktree prune
git worktree add ../pr-review -b pr-review-<VERSION> main
```

Keep your main worktree for release-prep work; keep the review worktree for `gh pr checkout` — each checkout moves HEAD to a contributor branch, which you don't want happening in your main worktree.

### 2. Inventory the Queue

```bash
gh pr list --state open --limit 50 --json \
  number,title,author,isDraft,mergeable,mergeStateStatus,files,additions,deletions,reviewDecision,statusCheckRollup,maintainerCanModify
```

For each PR, capture: size (`+additions/-deletions`), mergeable state, whether maintainer edits are allowed on the branch, and file paths touched (to spot overlaps between PRs). `UNKNOWN` mergeable state right after a push to main is normal — just try the merge and see.

**Note what `mergeStateStatus` actually means: it's computed against `main`, not necessarily your real landing target.** If the release lives on a separate branch (common for a versioned release process), identify that real landing branch first:

```bash
git branch --list '*release*' '*rc*'
git log --oneline -1 <release-branch>
```

Use that ref — not `main` — for every mergeability test below.

### 3. Read Each Non-Trivial Candidate From Code, Not From Its Title

A commit message proves nothing. `fix(...)`, `feat(...)`, and emoji-prefixed titles are equally uninformative until you've read the diff:

```bash
gh pr view <N> --json files,additions,deletions,statusCheckRollup,body,comments
gh pr diff <N>
```

Judge the actual change, the tests it adds, and any review comments already on it — not what the title claims it does.

### 4. Decode Check Failures — Trivial vs. Real

For every `FAILURE` in `statusCheckRollup`, open the job and read what actually failed:

- A lint failure that's only formatting drift (`cargo fmt`, `prettier`, `black`) is trivial — harvestable, fix on landing.
- A failing test suite or a real linter error (clippy, type errors) is not trivial — read the log before trusting or dismissing it.
- A version-drift or release-gate check failing on a community PR is often expected (they didn't bump a version file) and not itself a blocker.

### 5. Test-Merge Against the Real Landing Branch

GitHub's mergeable flag lies for anything other than `main`. Probe the actual merge directly:

```bash
git merge-tree --write-tree --messages <release-branch> <pr-head-sha>
```

This is read-only — it writes objects to the local object store, not to any branch or working tree. Exit 0 with no `CONFLICT` lines means clean against the real release head, even when GitHub's UI shows blocked or dirty. Conflicts printed mean the PR needs harvesting or deferral, regardless of what the GitHub badge says.

### 6. Classify Into a Disposition

Sort every PR into exactly one bucket:

| Disposition | Meaning |
|---|---|
| **Direct-merge** | Diff is sound, checks are green or trivially fixable, merge-tree is clean against the real release head. Land via cherry-pick to preserve original authorship automatically. |
| **Harvest** | The change is good but conflicts, needs a rebase, or is entangled with in-flight release work. Reimplement it on the release branch and credit explicitly — cherry-pick doesn't preserve authorship here, so add trailers: `Co-authored-by: Name <email>` and `Harvested-from: PR #<N> by @handle`. |
| **Candidate — needs review** | Medium size (roughly 50–200 lines), touches meaningful surface area, looks sound but needs a closer read before committing to it. |
| **Supersede** | Already covered by something merged. Verify by comparing actual diffs, not by matching titles — "similar title" is not proof. Close with a comment pointing to the superseding PR. |
| **Defer** | Sound but blocked by an open question, missing tests, a release freeze, or genuinely large scope that a speedrun pass shouldn't rush. Leave it open with a specific, positive comment — don't close it. |
| **Close-with-note** | Duplicated, out of scope, or abandoned. Propose the close to the maintainer with a crediting, appreciative note. |

### 7. Write the Triage Doc

Create a working doc (`<VERSION>_PR_TRIAGE.md`) in the review worktree, tracking progress across the session so it's resumable if interrupted:

```markdown
# <Repo> <VERSION> — PR Triage

Working doc for tracking which open PRs land in <VERSION>. Delete after release cut.

## Progress
Direct-merge: 0 / N merged
Candidates: 0 / M handled
Supersede triage: pending

## Merge for <VERSION> — critical fixes
| PR | Status | Size | What it fixes | Why must-have |
|---|---|---|---|---|

## Strong candidate — needs a quick review
| PR | Status | Size | Summary |
|---|---|---|---|

## Close as superseded
| PR | Status | Reason |
|---|---|---|

## Defer to next release
| PR | Status | Reason |
|---|---|---|
```

### 8. Work the Queue

- **Direct-merge PRs first** — these are the easy wins; land them via cherry-pick so authorship is automatic.
- **Harvest PRs next** — reimplement on the release branch with the required credit trailers.
- **Candidates** get an actual review pass before a merge decision, not a rubber stamp.
- **Supersede and close-with-note** PRs get a crediting comment, then get closed with the maintainer's approval — never silently.

### 9. Report, Don't Silently Act

If this triage is being run in an advisory capacity (rather than by someone with full merge authority), stop short of actually merging or closing anything. Output a compact table — PR, author, landing-branch verdict, check summary, disposition, credit line — and let the maintainer approve each action. This is the safer default whenever authority is ambiguous.

## Red Flags — Don't

- **Don't judge by title.** Open the diff every time; a title proves nothing about what actually changed.
- **Don't trust the platform's mergeable flag for anything but `main`.** Confirm with a real `git merge-tree` against your actual release branch.
- **Don't conflate a trivial check failure with a real one.** A formatting-only lint failure is harvestable; a failing test suite is not — read the log.
- **Don't drop credit.** Every harvest carries `Co-authored-by:` and `Harvested-from:`; every cherry-pick preserves the original author automatically. No silent reimplementation that erases who wrote it.
- **Don't post negative or nitpicking public comments.** Keep critique in your internal triage doc; GitHub-facing comments to contributors stay positive and crediting.
- **Don't modify the working tree or any branch during the evidence-gathering phase.** `git merge-tree --write-tree` is the only "write" that phase needs — it touches only the object store.

## Tips

- Pair this with a release-notes-drafting pass afterward: triage first against the real landing branch, then draft notes against the new main, then cut the release — doing it in the reverse order produces notes that don't match what actually shipped.
- The `merge-tree` step is the single highest-leverage move in this whole workflow — it's the difference between trusting a platform badge that's frequently wrong for non-`main` targets and knowing, with certainty, whether a PR actually applies cleanly.
- A PR that "looks small" by diff size but touches a file three other open PRs also touch deserves a second look before direct-merge — check for file-path overlaps across the whole queue, not just within each PR in isolation.

## Limitations

- Built for a speedrun pass with a known cutoff (a release), not as a substitute for ongoing, careful review of every contribution — genuinely complex or risky PRs still deserve dedicated, unhurried attention.
- Assumes `gh` CLI and git are both available and authenticated — the merge-tree and PR-metadata steps depend on both.
- The disposition taxonomy assumes a maintainer (or someone with equivalent authority) is available to approve closes and merges — in a fully autonomous run, default to reporting and let a human execute the close/merge actions.
