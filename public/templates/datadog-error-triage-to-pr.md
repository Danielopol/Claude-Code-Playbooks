# Datadog Error Tracking Triage to PR

Take Datadog Error Tracking issues to a reviewable PR — investigate, classify, root-cause, get approval, fix, and ship. Written to be restartable across separate sessions: a fixed error simply stops receiving new occurrences, and (where possible) a comment on the resolved issue lets the next run skip re-analysis.

## The Pipeline

```
0. Setup & disambiguate → 1. Navigate Datadog → 2. Pick an issue → 3. Root-cause in code
   → 4. ⛔ CONFIRM PLAN WITH USER → 5. Reproduce with tests + fix → 6. Comment on the issue → 7. Open a PR
```

**Hard gate at step 4:** investigate freely, but do not write a fix, create a branch, or open a PR until the user has seen the plan and approved it. The only exception is explicit pre-authorization ("just fix it and PR it").

Don't try to fix every issue in one pass. Scope a PR by size and risk: one large or critical bug gets its own PR; a few small, independent, thematically related bugs may share one PR (cap around 4).

## Step 0: Setup and Critical Disambiguations

Get these right before doing anything else:

- **"Incidents" almost always means Error Tracking *issues*, not a formal Incident Management system.** When a user says incidents, errors, "most occurrences," or "newest," they mean Error Tracking — errors grouped into issues with occurrence counts and trends.
- **Only the services your team actually owns are fixable from this repo.** If the codebase spans multiple deployable services, derive the live, in-scope service list from the actual directory structure (e.g. `ls apps/`) rather than a stale hardcoded list, and confirm any service outside that list is genuinely out of scope before touching it.
- **Production only**, unless the user hands you a specific staging issue. Error Tracking buckets by environment — filter `env:production` explicitly.
- **Don't confuse your own app's error tracking with a different product surface** that happens to share vocabulary (e.g. a "listIssues" tool from an unrelated integration). Confirm which tool/API actually reads your production runtime errors before using it.
- **Confirm the error-tracking capability is actually available** before relying on it — if a required toolset or integration looks disabled, say so and fall back to whatever raw span/log querying is still available rather than silently producing an incomplete triage.

## Step 1: Navigate Datadog

### Start With Discovery

Before querying, check whether Datadog (or your APM tool) ships built-in query-syntax guides or skill documentation for your specific setup — span query syntax and attribute naming vary enough between accounts that guessing is expensive. Load it once per session.

### The Lay of the Land

Identify your org's site/domain, the full service list (apps, DB adapters, external hosts), and note that a span's `service.version` tag is typically the deployed git commit SHA — this is gold, since it maps an error directly to the commit and deploy that introduced it.

### Where Error Tracking Issues Live

An issue is a fingerprinted group of error occurrences. Use two paths:

**(a) Error Tracking tools, if available** — a get-issue-by-id call and a list/search call are the minimum; there may also be a state-update or comment tool. Confirm the real tool names and schemas before relying on them.

**(b) Span aggregation, which always works** even without a dedicated Error Tracking toolset — issues are stamped onto error spans via custom attributes like an issue ID, first-seen timestamp, first-seen deploy version, and age, alongside the standard error type/message/stack/resource/service tags.

**Find the heavy hitters** (the workhorse query):

```
aggregate_spans(
  query    = "status:error env:production",
  from     = "now-7d", to = "now",
  computes = [{field:"*", aggregation:"COUNT", output:"count", sort:"desc"}],
  group_by = {fields:["service","@error.type"], limit:40}
)
```

Then narrow into messages/resources for the candidates that matter:

```
aggregate_spans(query="service:workers status:error env:production @error.type:(TypeError OR RepositoryError)",
  group_by={fields:["@error.message","resource_name"], limit:25}, computes=[COUNT desc])
```

### Query Pitfalls

- A free-text error-message field is often not reliably wildcard/full-text searchable — group by it in an aggregation, or filter by error type plus resource name and read messages from raw spans instead.
- Reserved attributes (service, resource name, status, type, trace ID) typically take no prefix; span-level custom attributes typically need one (e.g. `@error.type`, `@http.status_code`). Check your platform's actual syntax.
- Group multi-value filters correctly (`@error.type:(A OR B)`), not as separate OR'd field expressions.

## Step 2: Pick an Issue

### If the User Named One

Target it directly (by ID, slug, URL, or a quoted error message resolved via the queries above) and skip straight to root-causing.

### Otherwise: Classify Before Ranking

**Occurrence count alone is a trap.** Most high-count "errors" aren't fixable code bugs.

**Stage A — scope gate** (cheap): production, your in-scope services, the last 7 days. Inspect the top ~15 by count. Ignore anything under roughly 5 occurrences in the window unless it's new-and-rising or user-specified.

**Stage B — classify each candidate** by reading its message and stack:

| Class | Signatures | Default action |
|---|---|---|
| A. Genuine code bug | TypeError, null/undefined deref, validation/logic errors, encoding/parsing issues | **Candidate to fix** |
| B. Infra / transient | Timeout, connection reset, deadlock, rate limit, pool exhaustion | Usually not a code fix — note and skip |
| C. Deploy / version skew | Stale-client errors where the first-seen version differs from current deployed version | Framework-level handling, not a logic bug |
| D. Expected / not-an-error | A retried queue error, a not-found that callers already handle | Noise — ignore |
| E. Upstream / third-party | External provider errors with correct handling on your side | Not yours to fix |

Only Class A proceeds. For B–E, leave a one-line verdict if you can comment on the issue, then move on.

**Stage C — rank the Class-A bugs** on three axes, then pick the top:
1. **Impact** — customer-facing beats background; data corruption/loss beats a transient failure; a silently-wrong result beats a loud failure; does it block a user flow?
2. **Volume × trend** — occurrences *and* direction; a rising/new issue beats a flat/decaying one at equal count.
3. **Fix confidence × blast radius** — a clear, bounded root cause with a small change is high ROI; a sprawling or unclear one should be deferred.

Pick the highest (impact × trend) among the confidently fixable candidates.

### The Recency Premium

Weight new-and-rising issues extra even at a lower absolute count. "New" means first-seen within roughly the last 72 hours, or the first-seen deploy version is one of the last one or two deploys. A recent first-seen usually means a fresh regression — the first-seen version plus the deploy history around it often hands you the culprit commit directly, both making the fix faster and catching the regression before it piles up more occurrences. An old, flat, high-count issue is a yellow flag worth investigating eventually, not an automatic top pick.

### Batching

Solo PR for anything critical, large, touching core/shared code, or with a non-trivial root cause. Group 2–4 into one PR only if all are small, independent, low-risk, *and* thematically related (same subsystem, one reviewer context). Never mix a risky fix with trivial ones; cap around 4.

## Step 3: Root-Cause in Code

- **Generalize past the observed symptom.** One reported issue is often one instance of a broader bug — two seemingly unrelated errors in different services can share a single upstream root cause (e.g. unsanitized input hitting two different sinks). Fix the source, and look for sibling call sites with the same flaw.
- **Map the error to code from the span**: service → the corresponding app directory; resource name (a queue job, an HTTP route) → the handler; stack frames → the throwing module. Confirm the deployed version you're reading matches what actually produced the error.
- **Find the commit that introduced it.** The first-seen deploy version is the SHA of the deploy that introduced the regression — once you've located the faulty line(s), use `git blame`/`git log -S` to name the culprit commit and check it against the deploy history for context. Capture both the file:line and the commit SHA for the plan.
- **Decide fixability honestly.** If it turns out to be Class B–E in disguise, or needs a product/infra decision beyond code, say so and record it rather than forcing a fake fix.
- Fix at the architecturally correct layer for the codebase's existing conventions — search for an existing helper at that layer before writing a new one.

## Step 4: Checkpoint — Confirm the Plan (Do Not Skip)

**Stop here.** Everything up to now is read-only investigation. Present the plan and wait:

1. **Issues found** — a short table of candidates: error signature, service, occurrence count and trend, class, a link to the issue, and a one-line description of what it actually is (not just the raw message). Note which ones were ruled out and why.
2. **What you're focusing on and why** — impact × trend × confidence, plus what was deliberately skipped and its class-based reason.
3. **Hypothesis** — root cause in plain language, backed by file:line references (and sibling call sites, if it generalizes), the introducing commit where findable, and whether this is one instance of a broader bug.
4. **Proposed fix** — what changes, at which layer, the blast radius, and the test plan.
5. **PR plan** — single PR vs. grouped, and the target base branch.
6. **Blockers or decisions needed** — anything ambiguous, missing access, or larger/riskier than expected.

Wait for confirmation and adjust before proceeding. **Pre-authorization escape hatch:** if the user already said to fix and PR without checking back, state the plan briefly and proceed — but still stop for a genuine blocker, an ambiguous choice, or a fix that turns out materially larger than described.

## Step 5: Reproduce With Tests, Then Fix

1. **Write a failing test first** that reproduces the bug *and* new, different inputs exercising the same root cause — not just the one occurrence observed. This pins the specific bug and guards the general case.
2. **Confirm the test fails without the fix** — sanity-check it actually targets the bug (temporarily revert the fix, or assert the pre-fix behavior).
3. **Apply the fix at the root cause**, not just at the observed symptom's call site.
4. **Confirm the new tests pass and existing tests still pass.**

## Step 6: Comment on the Issue

Where the tooling supports it, leave a one-line summary of the root cause and fix on the resolved issue — so a future, context-free session doesn't redo the same analysis if the same error class resurfaces.

## Step 7: Open the PR

Target the project's standard base branch. Reference the Datadog issue link(s) in the PR description, along with the root-cause summary and test plan already drafted in Step 4's approved outline.
