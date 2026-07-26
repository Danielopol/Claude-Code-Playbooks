# Unbroker: Data Broker Removal

Find where a person's personal information (name, current and prior addresses, phone numbers, emails, relatives) is exposed on data brokers and people-search sites, then remove it. Automate everything a browser and an email account can do. Hand off to a human only where a site demands a hard CAPTCHA, a government ID, a phone call, or a fax.

Manage multiple people independently, each isolated: yourself, family members, clients.

## Scope

This is a removal tool, not a people-search aggregator.

**In scope:** people-search sites, data brokers listed in state data-broker registries, CCPA/CPRA and GDPR right-to-delete requests, recurring re-checks for re-listings.

**Out of scope:** public records the subject cannot delete (voter rolls, property deeds, court filings), accounts the subject controls and can close themselves, and anyone who has not authorized removal of their own data.

## Hard rules

These never bend, regardless of how the run is configured or how much time a manual step costs.

1. **No consent, no action.** Record an explicit authorization from the subject before scanning or submitting anything. Do not "just research" a third party.
2. **Least disclosure.** Submit only the fields a broker actually requires, and never more than the broker already displays publicly. Never volunteer an SSN, driver's license number, passport number, or any government ID number. If a form demands more mid-flow, stop that case and queue it as a human task rather than deciding alone to disclose extra PII.
3. **No anti-bot bypass.** Never use a CAPTCHA-solving service, a solver farm, or fingerprint spoofing. A normal browser that clears a checkbox challenge as a side effect of being a normal browser is fine. Reading a static distorted-text or plain-arithmetic CAPTCHA on the subject's own opt-out form is fine. If the site rejects the whole submission after a correct answer, it is fingerprinting the automation: stop and record the case as blocked.
4. **`confirmed_removed` only after a verifying re-scan.** A confirmation page inside the submission flow proves nothing. Re-scan the listing later and confirm it is gone.
5. **"Hidden from free search" is not "deleted."** Report suppression as suppression. Note paid-tier retention and residual public-record exposure in the report.
6. **Never claim a right the subject cannot invoke.** File under the framework that applies where the subject lives: CCPA/CPRA for California residents, GDPR for the EU/UK, a general right-to-delete request otherwise.

## Setup

### Full skill bundle (recommended)

The original skill ships a deterministic Python CLI (`scripts/pdd.py`), a curated broker database, per-broker opt-out playbooks, email templates, and a hermetic test suite. Install it from the source repo:

```
https://github.com/NousResearch/hermes-agent/tree/main/optional-skills/security/unbroker
```

Then, from that skill's directory:

```bash
PDD="python3 scripts/pdd.py"
$PDD setup --auto     # detect capabilities, pick the most autonomous valid config, ask nothing
$PDD doctor           # readiness: config, broker count, which upgrades are on or available
```

`setup --auto` never asks the operator to choose configuration. It detects what is present and picks. Show the operator the `doctor` output for information, then proceed. Mention what would unlock more automation, but do not wait for an answer.

The engine stores data under `$PDD_DATA_DIR` (default `$HERMES_HOME/unbroker`), written `0600`. Run it through a normal terminal, not a sandboxed code-execution tool that scrubs env vars and redacts output.

### Without the bundle

This CLAUDE.md alone carries the rules, the procedure, and the safety boundaries. Without `pdd.py` you lose the validated state machine, the broker database, and the automatic re-check scheduling, so keep those by hand:

- A `subjects/<subject-id>.json` dossier per person: names and aliases, current and prior cities, all emails, all phone numbers, consent record with date and method.
- A `ledger.md` or `ledger.json` per subject: one row per broker with state, listing URLs, disclosed field names, submission date, and next re-check date.
- A `human-tasks.md` per subject: everything only a person can finish.

Use opaque subject ids. Do not put the subject's name in file names, ids, or logs.

### Optional upgrades

Each one converts a class of human tasks into agent actions. The workflow runs without all of them.

- **A real residential-IP cloud browser** (Browserbase or equivalent). This is the intended baseline. It clears soft and managed challenges (Cloudflare Turnstile, hCaptcha/reCAPTCHA checkbox) as normal operation, so those brokers stay automated instead of becoming human tasks. Not a solver, and it does not defeat hard interactive challenges. Without it, soft-CAPTCHA brokers drop to human tier.
- **Email automation, two ways.** Browser mode drives the operator's own logged-in webmail with browser tools, storing no password. This needs the operator's real Chrome over CDP, not a headless cloud browser: a cloud browser holds no webmail session and gets gated on webmail and on session-bound broker flows. Launch a dedicated debug profile signed into the webmail once, and connect to `127.0.0.1:9222`. The alternative is stored SMTP/IMAP credentials, which send requests and poll for verification links directly. Without either, fall back to writing drafts the operator sends.
- **At-rest encryption.** With the `age` binary installed, dossiers and ledgers are encrypted. The audit log holds field names only and stays plaintext. This guards casual, backup, and accidental-commit exposure, not a full read of the home directory.
- **A spreadsheet tracker** for a shared, human-readable status view.

## Autonomy contract

Run hands-off. After intake there are exactly two legitimate human touchpoints: the intake conversation, and one consolidated human-task digest at the end of the run.

Between those:

- **Never ask the operator to choose configuration.** Auto-detect and pick.
- **Never pause before individual submissions** at full autonomy. The consent recorded at intake is standing authorization for automated and semi-automated opt-outs. At assisted autonomy, confirm each submission.
- **Never interrupt the run for human-only work.** Record it with a reason and keep going. It all surfaces once, at the end.
- **Drive the whole run as a loop.** Ask the queue what to do right now, do every action it returns, record each outcome, ask again, repeat until it says done.

Autonomy means not asking between steps. It does not loosen a single gate.

## Procedure

### 1. Setup (once, no questions)

Auto-configure, run the readiness check, report it as information, and proceed.

### 2. Intake and consent (the one human conversation)

Create the subject with explicit recorded consent and the consent method. Without consent, refuse to plan or act.

Collect everything in one pass so you never have to come back with questions:

- Full legal name, plus every alias, maiden name, and common misspelling
- Current city and state
- Every prior city and state going back as far as the subject remembers
- Every email address, current and old
- Every phone number, current and old
- Residency, which decides whether requests file under CCPA/CPRA, GDPR, or a general right to delete

For California residents, surface the state DROP request (Delete Request and Opt-out Platform) as the highest-leverage single action: one verified request deletes the subject's data from every broker registered with the state, roughly 545 of them, at once. File it first, then record it as filed. For non-California subjects, cover the registry with targeted CCPA/GDPR emails. Either way, work the people-search sites directly.

### 3. Phase 1: discover (read-only, parallel, idempotent)

Crawl every broker before removing anything. Scanning has no side effects, so parallelize and retry freely. The full exposure map is what unlocks cluster deduplication and prioritization in phase 2.

Record one verdict per broker: `found`, `not_found`, `indirect_exposure`, or `blocked`.

Rules that matter here:

- **Default to lightweight extraction.** Most people-search sites render name, phone, and address results as static HTML that a plain fetch reads in seconds. Escalate to a full browser only for the few JavaScript-only sites, and to a stealth browser only for anti-bot walls.
- **Expand every identifier.** A person is indexed under every name, alias, phone, email, and address. Search all of them, filtered by what each broker supports, so a listing under a maiden name or a fifteen-year-old address gets found. "Primary name plus current city" misses most of the exposure.
- **A 404 is inconclusive, not `not_found`.** Do not record an absence you did not verify.
- **A blocked site is not a retry target.** When an anti-bot wall (DataDome, Cloudflare) stops the scan and no stealth browser is available, record `blocked` and requeue it for a later stealth pass.
- **Confirm the subject, not a namesake or a relative,** before recording `found`. This is where careless runs generate false positives and then submit real PII to a broker that never had the person.
- **Do not hand a browser-driving subagent a long list of brokers to crawl.** Browser navigation is heavy and those batches time out. Delegate only genuinely reasoning-heavy work, such as large-scale namesake disambiguation, and keep batches small.
- **Subagent reports are self-reports.** Re-fetch the key listing URLs yourself before trusting a `found`. This cuts both ways: it also catches real listings that were wrongly dismissed as false positives.

### 4. Reduce: build the deletion plan

Collapse the crawl into a phase-oriented plan. Group brokers by next action (unscanned, found, indirect, blocked, in progress, done), and collapse ownership clusters.

**Ownership clusters are the highest-leverage structure here.** Many brokers are resold shells of a few parents. One parent removal clears a dozen child sites, so it is one action, not twelve. Order the `found` group parents first, most children first.

Each parent gets a tailored, ordered playbook. Follow that order.

### 5. Phase 2: delete (sequential, irreversible)

Opt-outs hit CAPTCHAs, email-verification loops, and session binding. Work them one at a time, carefully. This is the opposite of the phase 1 fan-out. Do not stop to ask permission per submission at full autonomy.

Order of work:

1. **Cluster parents first**, skipping the children they cover.
2. **Re-scan each parent's children after the parent confirms.** They usually drop out on their own.
3. **Standalone listings.**
4. **Indirect exposure cases** as CCPA/GDPR delete-my-PII emails.
5. **Blocked cases** deferred to the stealth-browser pass.

**Blind opt-out is the default, not a fallback.** Submit an opt-out or deletion request on every site with an accessible removal channel, even when a listing was not confirmed first. It discloses only the subject's own identifiers, to the broker's own official channel, so it does not violate least disclosure. Two consequences:

- A guided opt-out flow that matches email plus date of birth plus name and returns "no results" is a **stronger `not_found` than any scrape**. The opt-out flow doubles as the search.
- When a form is automation-hostile (hard CAPTCHA, anti-bot wall, slide-to-verify slider), **default to the broker's cited rights-request email** with name, state, and contact email only, rather than recording `blocked` and giving up.

Third-party and indirect records are the exception: confirm those before acting.

**Prefer deletion over suppression** where a broker offers both, unless that broker's record says otherwise. The known exception pattern: some affiliate parents wipe your existing suppressions when you delete your user account, and deleting does not stop public-records re-listing. For those, suppress and maintain instead, and use the delete button only for a deliberate data purge. If a "your deletion request is complete" email arrives for such a parent, the suppression is gone: re-run the suppression and re-verify that the control panel reads "suppressed."

### 6. Opt-out methods

- **Web form.** Drive the opt-out URL, submit only the planned disclosure fields, screenshot the confirmation, record the outcome. Some playbooks end with a right-to-delete email follow-up. Send it. That is full erasure rather than listing suppression.
- **Email.** Render and send the request under the correct legal framework, with the recipient locked to the address the broker itself publishes. Record the disclosure in the same step. In browser mode, compose the message in the operator's webmail exactly as rendered and send. There is a useful rescue lane here: when a broker's web form is human-gated by a phone callback or a government-ID check, but the broker publishes a deletion email address, route the request through the email instead.
- **CAPTCHA.** Soft and managed challenges clear on a normal cloud browser. Proceed as normal. Only a hard interactive or behavioral challenge the browser genuinely cannot pass gets recorded as `blocked` and requeued for the stealth or operator-browser pass.
- **Phone callback, account creation, government ID, fax, mail, voice.** Never an agent action when no deletion email exists. Record it as a queued human task with a reason, and keep going.

### 7. Verification

Resolve the broker's confirmation email, either by polling the inbox or by reading it in the operator's webmail. Score every link for phishing before opening it: brokers are a phishing-rich environment and a confirmation email is an obvious lure.

**Open the verification link in the same browser that submitted the request.** Several brokers bind the verification session to the browser that started it.

Finish the flow, then mark the case as awaiting processing. Mark it `confirmed_removed` only after a re-scan shows the listing gone.

### 8. Wrap up (once per run)

When the queue is empty:

1. Present the consolidated human-task digest, if it is non-empty.
2. Present the status report.
3. Append rows to the spreadsheet tracker, if one is configured.

### 9. Schedule the next wake-up

Brokers re-list people. That is the business model, and it is why a one-time cleanup decays.

Create one recurring job that re-runs this loop for the subject at the earliest due re-check date. Processing windows, verification polls, and reappearance sweeps all flow through the same queue, so the case keeps advancing with no human attention.

## Tiering

Classify every broker opt-out by how much automation it permits. Always take the highest viable tier and escalate only when genuinely blocked.

| Tier | Meaning |
|---|---|
| T0 | Fully automated. Form submit, no verification loop. |
| T1 | Automated with email verification, or with a soft challenge a normal browser clears. |
| T2 | Human-verified. Needs the operator's own logged-in session or residential browser. |
| T3 | Human-only. Government ID, phone callback, fax, notarized mail, or a hard interactive challenge. |

T3 work never becomes an agent action. It goes to the digest with a reason attached.

## The ledger

Every case is a validated state machine. Legal states:

`unscanned` → `found` | `not_found` | `indirect_exposure` | `blocked` → `submitted` → `verification_pending` → `awaiting_processing` → `confirmed_removed`

Plus `human_task_queued` (with a reason) and `in_progress`.

Each record carries the broker id, the state, whether the subject was found, evidence (listing URLs, match basis), the field names disclosed, the channel used, the submission timestamp, and the next re-check date. Every state write auto-stamps the next re-check.

Log every PII disclosure by **field name only**, never by value. That gives you an audit trail without creating a second copy of the data you are trying to erase.

Serialize ledger writes with a file lock so a scheduled run and a manual run cannot corrupt each other. If a lock timeout appears, another run is mid-write. Let it finish. Do not delete the lock by hand.

## Reporting

Two outputs at the end of each run:

- **The human-task digest.** Everything only a person can finish, with the broker, the reason, and the exact next step. One digest per run, presented once, at the end.
- **The status report.** Per-broker state, what was removed, what is pending, what is blocked, and what remains exposed. Report honestly: suppression is not deletion, paid-tier retention is residual exposure, and public records are out of scope.

## Multiple people

Each subject is fully isolated: its own opaque id, its own dossier, its own ledger, its own re-check schedule, its own consent record. Never merge dossiers, never cross-reference subjects, and never use one subject's identifiers to search for another. Family members share addresses and relatives, which makes cross-contamination easy and wrong.

Consent is per person. A parent's consent does not cover an adult child.

## Pitfalls

- **Do not loop a send to "make sure."** A successful send is not proof of delivery, and re-sending an already-submitted case looks like abuse. Rate-limit sends, and let the scheduled re-scan be the real confirmation.
- **Autonomy is not improvisation.** If a broker demands more than the planned disclosure fields mid-flow, stop that case and queue it. Do not decide alone to disclose extra PII.
- **Do not interrupt the run with questions.** Configuration is auto-detected. Human-only work goes to the digest. The only mid-run question ever warranted is a missing identity fact that blocks scanning outright, such as no city at all, and that should have been collected at intake.
- **Dossiers are plaintext by default.** Turn on at-rest encryption if the data lives anywhere backed up or version-controlled.
- **Broker pages change constantly.** When a flow breaks, record the case as blocked and flag the broker record for re-verification instead of guessing at the new form.
- **Verify broker records that were never field-checked.** Records auto-parsed from a public list may point at a stale opt-out URL. Records with a documented but unverified URL often reject datacenter IPs, so confirm the live flow through the operator's residential browser on first use and then stamp the verification date. Field-verified curated records take precedence.
- **Coverage decays.** Broker rosters, opt-out mechanics, and legal thresholds shift. Refresh the broker list before a run rather than trusting a cached copy.

## Not legal advice

This workflow exercises privacy rights. It is not legal advice. Operate only on people who have authorized removal of their own data. Removing data from brokers reduces exposure. It does not guarantee total erasure, and results vary by jurisdiction.
