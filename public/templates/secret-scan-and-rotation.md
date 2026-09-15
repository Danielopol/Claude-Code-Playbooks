# Secret Scan and Rotation

Find committed credentials in a repository and get them rotated and removed — without ever exposing them further yourself in the process.

**Absolute rule: never print a secret's actual value** — not in output, notes, todo items, commits, or PRs. Refer to every hit as `<kind> in <file>:<line> (commit <short-sha>)` and nothing more specific than that.

## Workflow

### 1. Check for a Scanning Tool

Check whether `gitleaks` (or an equivalent secret scanner) is available. If it's missing, don't skip the scan and don't stop the review — request the tool, and if it can't be installed, fall back to a manual scan and say explicitly in the report that the sweep was manual rather than tool-assisted.

### 2. Scan Both the Working Tree and Full History

History matters most: a secret deleted in the current HEAD is still live in every existing clone, and it's the hit users are most surprised to learn about.

**With a scanner available**, run a full-history detection scan and write the report to a JSON file for review.

**Without one**, do the same job by hand and say so in the final report:

- **Working tree**: grep for common secret patterns — API keys, tokens, passwords, private key headers, AWS access key IDs, Stripe-style secret keys, Slack-style tokens.
- **History, including files deleted since**: search the full commit history for known secret-prefix strings (not just the current tree), and separately look for files matching common credential filenames (`.env*`, `*credential*`, `*secret*`) that were deleted at some point — then read what those deleted files actually contained at the commit before their deletion.
- **Pipe anything read through a redactor before it ever reaches your own output or transcript** — replace any long alphanumeric run with a `[REDACTED]` placeholder. The no-printing rule holds even during your own investigation, not just in the final report.

### 3. Triage Each Hit

Read the context around every hit and classify it:

- **Real credential, test fixture, or example placeholder?** State which, and why — a string that matches a pattern isn't automatically a live secret.
- **For anything real**: what does it actually grant access to, and is it plausibly still valid (has enough time passed, or was the service since decommissioned)?

### 4. For Every Real Secret, in This Order

1. **Rotate first.** Tell the user exactly where to revoke or rotate it — the specific provider's console page or CLI command. Rotation beats removal: a history rewrite without rotation is false comfort, since anyone who already cloned the repo still has the old value.
2. **Remove it from the code.** Move it to environment variables or the project's existing secret-management approach — match however this codebase already handles configuration, rather than introducing a new pattern.
3. **Prevent recurrence.** Add or extend `.gitignore` for local secret files, and offer a scanner baseline config plus a pre-commit hook so the same class of leak can't happen again unnoticed.
4. **History purge is destructive and rewrites shared history.** Describe this trade-off explicitly and only proceed if the user explicitly asks for it — this step affects every existing clone and any open pull request built on the old history.

### 5. Deliver

A hit list (kind · location · verdict · rotation status), the cleanup branch or PR, and the prevention setup that was added or is being recommended.

## Tips

- Rotation is the step that actually matters; removal from the current tree without rotation is nearly worthless against anyone who already has a clone with the old history.
- When triaging, resist the urge to wave off a hit as "probably a test fixture" without actually reading the surrounding context — a real credential accidentally used as a "working example" in a test file is a genuinely common way leaks happen.
- Offer the pre-commit hook and `.gitignore` extension proactively, not just after being asked — preventing the next leak is as much the point as cleaning up the current one.

## Limitations

- History purges (rewriting git history to remove a secret from every past commit) are genuinely destructive to a shared repository — this only proceeds on explicit user request, never as a default action.
- A scanning tool catches known secret patterns and formats; a sufficiently obscure or custom credential format may need to be added to the scan patterns manually before it's caught.
- This finds and helps remediate committed secrets — it doesn't replace a real secret-management system (a vault, a cloud provider's secret manager) for how credentials should be handled going forward.
