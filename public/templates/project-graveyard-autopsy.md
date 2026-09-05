# Project Graveyard — Autopsy Your Abandoned Side Projects

Every developer has a folder full of dead projects. Nobody has ever gotten an autopsy report. This scans local repos for abandoned side projects, works out why each one died from its git history, finds the personal death patterns behind them, and picks the one corpse worth digging up — then helps ship it.

Everything runs locally against git history already on disk. No API, no network, nothing leaves the machine.

## When to Use

- The user asks about abandoned, unfinished, or old side projects, or what to finish next
- The user wants to revive, resurrect, or "finally ship" something
- The user asks why they never finish projects
- The user proposes a brand-new project — check the graveyard first (see Necromancer Mode). There's a decent chance they already built half of it.

## When Not to Use

- Cleaning up disk space or `node_modules` — that's a disk-usage tool's job, not this
- Archiving repos on a remote host — this works on local clones and never-pushed work
- Analyzing one specific repo's history in depth — just read that repo's git log directly

## Step 1: Scan for Corpses

Walk the directories where side projects live (ask if unclear — one question beats sweeping someone's home directory uninvited; common defaults are `~/dev`, `~/projects`, `~/code`). For each git repo found:

1. Read the commit history: dates, authors, commit count, files touched, commit message tone over time.
2. Compute **silence**: days since the last commit. A repo counts as dead after a threshold of silence (default 45 days — ask the user if a different threshold fits their habits, e.g. 90 for slower hobby work).
3. Distinguish **dead** from **finished**: a repo with deploy config, a pushed remote, and a real README that's gone quiet is probably *finished*, not dead — the 45-day heuristic is rough, so don't eulogize anything that looks done without asking first.
4. Filter by **ownership**: only count commits under the user's own git identity (ask for every email they commit under — work address, GitHub web edits, a builder tool's bot account — repos committed entirely under an unclaimed identity get excluded as "not yours," and the census should say what it skipped and why).
5. Exclude repos the user barely touched (a fork, a work checkout, a clone) unless they ask to include them.

## Step 2: Autopsy Each Corpse

From git history alone, work out a **cause of death**, evidence-based, not a verdict:

- **Payments/infra wall** — the last commits show integration with a paid service, then nothing (evidence: recent commits reference billing, API keys, a paywall)
- **Killed by a newer project** — commits stop right as a sibling project's commits start (evidence: overlapping domain, timing)
- **Finished, never shipped** — deploy config exists, README is complete, but no deploy ever happened and no remote push followed
- **Scope explosion** — commit velocity was high, then features kept multiplying without any converging toward done
- **Deploy fear** — the code works locally (tests pass, it runs), but there's no evidence of an attempted deploy
- **Slow fade** — commits taper off gradually with no single triggering event (low confidence — ask about these)
- **Unknown** — no clear signal (low confidence — ask about these)

For any `unknown` or `slow_fade` verdict, ask the user directly, one question per project, two or three total at most: *"`<project>` — the history just shows it drifting. Do you remember what actually stopped you?"* Blend the answer in and label it **(confirmed)**; label a pure git-history guess **(forensic)**. Testimony beats a forensic guess — update the verdict, not just the prose. Two questions is a conversation; five is a deposition — stop asking after that.

## Step 3: Find the Patterns

Across every dead project, look for what repeats:

- A characteristic day-count where projects tend to die
- A recurring cause of death across multiple projects
- A recurring "killed by a newer, shinier idea" cycle
- A cluster of one-day, never-reopened repos (a *pattern* — vibe-coded bursts, not individual failures)

This is the part users remember most. Quote actual numbers: "Your projects die at day 19." "Four of six were killed by a newer project."

## Step 4: Write the Tombstone Report

1. **The census.** Deaths, combined lifespan, oldest corpse — plain numbers, they land on their own.
2. **Tombstones.** One per dead project, worst-to-best resurrectability, with name, lifespan, commit count, cause of death plus its evidence, and a one-line epitaph. Above ~10 corpses, give full tombstones only to the 6-8 most interesting and bury the rest together in one line ("...plus 11 one-day experiments, buried in a shared plot"). A wall of 23 tombstones kills the funeral.
3. **The patterns.** Quote the numbers from Step 3; add anything visible that a script alone couldn't surface.
4. **The resurrection.** One project, not three (see Step 5).

**Epitaph rules** — this is where the report lives or dies:

- Every epitaph must trace to actual evidence from the scan — a made-up joke about code nobody read doesn't land and the user will know.
- Punch at the pattern, not the person: "It worked. It just never shipped" is fine; "You were too scared to ship" is not.
- Dry beats wacky. One sentence. No puns unless they're earned.
- Give respect where it's due — a 26-commit repo with a finished README that never shipped is a small tragedy, not a punchline.

If sharing the report is on the table, offer to redact project names to `project-1..n` while keeping causes and patterns intact.

## Step 5: Pick the Resurrection

Pick **one** corpse — highest resurrectability wins unless its idea is dead in the world too. Before deciding, read the top candidate's README and skim the code, then do the **world-check** — the part only a live session can do because static history can't see the present:

- Has what blocked it gotten easier since it died? (an official SDK shipped for the API it fought, the model it needed got cheaper, the thing it hand-rolled is a library now)
- Has the world already shipped the idea? If competitors do exactly this now, say so — that changes the plan from "ship it" to "ship it for yourself" or "let it rest."

Cite what's found. "This got easier: X exists now" is the strongest argument for digging back in; "the window closed" is the strongest for leaving it buried.

Then write the resurrection plan:

- At most 7 concrete steps, ending at *shipped* — a URL, a release, a published package, not "keep working on it"
- Step 0 is always: confirm it still runs. Dependencies rot; prove the install and the entry point before promising anything.
- Step 1 must be completable today — the first session has to end with visible progress.
- Ask before touching the repo. Then offer to start on step 1 right now.

**When to leave it buried** — say it plainly when true: the user doesn't care anymore (a shrug at the mention is closure, not a project); the window closed and the world shipped the idea; or every candidate is weak. "Nothing here is worth digging up, and that's fine — here's what the patterns say about the *next* project" is a legitimate ending.

## Necromancer Mode

When the user proposes something new, check the graveyard for prior attempts before scaffolding anything — search prior scan results (or run a fresh scan) for name and README overlap. If there's a match, say so once and let them choose:

> "You already built about 60% of this. It's called `<project>`, it died in March at the auth step, and its parser still works. Resurrect instead?"

Don't be preachy about it. Mention it once, let them decide, drop it.

## Gotchas

- A user's home directory or Desktop being itself a git repo (an accidental `git init`, a backup tool) can make the census look absurd — check for nested repos if the numbers seem off.
- "Dead" is a threshold, not a truth — a stable, finished tool can look dead at 45 days. Ask before eulogizing anything the user considers done.
- One-day corpses are usually vibe-coded bursts, not failures — the pattern worth surfacing is how many there are, not that each one "died."
- Don't resurrect by default. The report is the product; the resurrection is an offer. Some corpses should stay buried.
