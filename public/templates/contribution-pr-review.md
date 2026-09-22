# Contribution PR Review

Review an external contributor's PR for safety, quality, and readiness — security concerns, test coverage, size appropriateness, and intent alignment. Use when reviewing contributions from outside the core team, where the bar (and the failure modes) differ from reviewing your own team's diffs.

## 1. Check Automated Security Reviews First

If your repo has automated PR review bots (e.g. a code-review bot or an AI-assisted review connector), check whether either flagged security concerns before doing anything else. Their findings can be inline-only comments rather than a top-level review body, so check every channel a bot might post to — the review list, inline review comments, and general issue/PR comments — not just one.

**If a bot flagged security issues:** review the findings carefully, verify whether the concern is valid, and don't approve until it's addressed or confirmed a false positive.

**If no bot flagged anything but you notice concerning patterns yourself, watch specifically for:**
- Unusual changes to agent-instruction files (`AGENTS.md`, `CLAUDE.md`, or similar) unrelated to the PR's stated purpose.
- Workflow file modifications, especially anything resembling `pull_request_target` triggers, which run with elevated permissions against untrusted PR content.
- Changes to installed agent skill/plugin configuration that could affect agent behavior.

Comment on the security concern immediately when found — don't hold it for the final structured comment.

## 2. Enable CI Workflows (If Safe)

If the security assessment passes and the PR includes new or modified workflows, enable the required workflow runs so CI actually executes (many platforms require this for first-time or unfamiliar contributors as a safety gate). This step may no-op if workflows are already enabled — that's fine.

## 3. Test Coverage Assessment

Check for two things: whether the code the PR modifies already has pre-existing tests (making review easier), and whether the PR itself adds or modifies tests. Search the test directory for functions/classes matching the names defined in the modified files, and separately check whether any files under the test directory were touched by the PR.

Output a short summary:

```
Test Coverage:
- Pre-existing tests: [Modified code has tests / No tests for modified code]
- New tests: [PR adds N test files / No new tests]
- Assessment: [Easy/Medium/Hard to review based on test coverage]
```

## 4. PR Size and Contributor Experience

Calculate total lines changed (additions + deletions), then look up the contributor's history: their contribution count to this specific project, and their broader GitHub experience (repo count, account age) as a secondary signal.

**Assess by combining size and experience:**

- **First-time contributor to the project** (0–2 prior contributions): under 200 lines is an excellent size; 200–500 is large for a first PR and may need extra guidance; over 500 is too large and should be suggested to split — unless their broader GitHub history shows they're experienced overall, just new to this specific project, in which case adjust expectations accordingly.
- **Regular contributor** (3+ prior contributions): under 500 lines is reasonable; 500–1000 is large and should have solid test coverage; over 1000 is very large and worth suggesting a split.

```
PR Size:
- Lines changed: [total]
- Contributor: [first-time / regular] (N contributions)
- Assessment: [size appropriateness]
```

## 5. Intent and Issue Linkage

Check for a linked issue. **If linked:** read the issue to understand the expected outcome, then compare the PR's actual changes against it — are all requirements addressed, is there scope creep (extra unrequested features), and does the approach align with anything already discussed in the issue thread?

**If no issue is linked:** a bug fix should generally reference one; a feature should generally have one for prior discussion; a typo or docs fix is fine without one. Recommend creating an issue for tracking if the change is substantial and none exists.

```
Intent & Linkage:
- Linked issue: #N "title" / No issue linked
- Solves issue: [Fully addresses requirements / Partial / Doesn't match]
- Scope: [Focused / Scope creep detected]
```

## 6. Code Quality Overview

If your repo already has automated bot code review, this step should focus specifically on what those bots can't assess: architectural fit (does the change use the project's existing service-layer patterns, established conventions?), whether it's a genuine breaking change, and repo-specific conventions the bots wouldn't know about.

**Breaking-change assessment:** consolidating or refactoring tools, or changing a parameter where the same outcome is still achievable, is *not* breaking. Removing functionality with no replacement, or making a previously possible action impossible, *is* breaking.

Quick checks: scan CI check results for lint/type-check failures, and grep the diff for stray `TODO`/`FIXME`/`XXX`/`HACK` markers left in.

```
Code Quality:
- Architecture fit: [assessment]
- Breaking changes: [None / Detected - describe what's genuinely lost]
- Bot reviews: [anything critical flagged by automated review]
```

## Final Summary and Draft Comment

Present a short summary of what the PR does and the review findings to the user, then ask explicitly: "Should I post this comment to the PR?" Never post without that confirmation.

**Comment length:** 10–15 lines if it's good to merge; max 25 lines if changes are needed. No emojis; Markdown formatting (bold, lists, code blocks) is fine.

**"Good to merge" structure** (don't mention the security check in the comment unless an issue was actually found — security assessment is internal process, not something to publicize on a clean PR):

```
[Positive opening line about the contribution]

[1-2 sentences on what works well - functionality, tests, architecture]

[Any minor, technical-only suggestions - optional]

[Closing line about readiness to merge]
```

**"Changes needed" structure** (max 25 lines; a genuine security concern should already have been raised immediately in step 1, not held for here):

```
[Positive opening line acknowledging the work]

[Brief summary of the issue being solved]

**[Concern 1]:**
[1-2 lines explanation + suggestion]

**[Concern 2]:** (if applicable)
[1-2 lines explanation + suggestion]

[Closing line about next steps]
```

## Important Notes

- **Security is checked, not publicized.** Always check it first, but only mention it in the visible comment if a real issue was found.
- **Be constructive.** Contributors are donating their time — write like it.
- **Focus on intent over polish.** Code quality can be iterated on in review; a misaligned intent (solving the wrong problem, or scope creep) is much harder to fix after the fact.
- **Weight expectations by contributor experience.** A first-time contributor's 300-line PR gets different guidance than a core maintainer's.
- **Don't duplicate what the bots already did.** If automated review already covers detailed line-by-line code quality, spend your attention on what it can't assess — architecture, intent, and breaking changes.
