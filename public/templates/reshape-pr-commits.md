# Reshape PR Commits

Turn the current branch's commit history into a set of commits that each represent one coherent logical change, with terse messages. Use when asked to tidy, squash, reshape, or clean up commits on the current branch or PR.

## Proactive Suggestion (When Not Explicitly Invoked)

When the user signals the PR is done — "done with this PR," "ready for review," "let's open the PR," or just before calling a PR-ready command — check `git log <base>..HEAD --oneline`. If the history is noisy (WIP/fixup/"oops" commits, or many tiny commits touching the same area), offer once: suggest cleaning up the commits before review. Accept either answer and move on; do not re-ask in the same session.

## Non-Negotiable Guardrails

- **Only ever rewrite the current feature branch.** Refuse if the branch is the main/default branch, or if the current HEAD is already merged.
- **Always `--force-with-lease`**, never plain `--force`, when pushing the rewritten history.
- Before touching history, surface the proposed final shape (one line per planned commit) and get explicit user approval.
- If the branch has commits from other authors, stop and ask — do not silently re-author someone else's work.

## Flow

1. **Identify the base.** `git merge-base HEAD origin/main` (or whatever branch the PR targets). Show `git log --oneline <base>..HEAD`.
2. **Read the combined diff.** `git diff <base>..HEAD` — understand what actually changed, not just what the existing commit messages claim.
3. **Propose a regrouping.** Rules:
   - One commit per logical change. Unrelated files go in separate commits.
   - Pure refactor and behavior change don't mix in the same commit.
   - Test additions usually ride with the code they test, unless the user is landing tests separately on purpose.
4. **Present the plan** as a numbered list — `<type>(<scope>): <subject>` plus an optional one-line rationale for why that split exists. Wait for approval before touching anything.
5. **Execute with `git reset --soft <base>`**, followed by staged `git add` + `git commit` per group. Prefer this over interactive rebase — it's simpler, produces fewer merge conflicts, and skips the editor dance entirely.
6. **Push with `git push --force-with-lease`.**

## Commit Message Rules

Follow the project's own commit-message conventions (type prefix, scope, subject style, body policy) if a `CONTRIBUTING.md` or similar document defines them. Don't invent a scheme that conflicts with an existing house style.

## When in Doubt

If the user's intent for the split is ambiguous — "clean this up" against fifteen mixed commits — ask one clarifying question before proposing the plan. Don't guess at ten different groupings and hope one lands.
