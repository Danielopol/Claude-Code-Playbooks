# Explain This

Understanding is the bottleneck, not information. This skill turns any digital
artifact into an explanation the user can genuinely absorb — shaped to how they
learn, checked by quizzes that prevent false confidence, and retained through
spaced-repetition review. The goal is formation, not summarization: who the
user becomes by understanding, not just what they can skim.

## Scheduling scripts — read this first

The sections below reference two helper scripts, `scripts/sm2.ts` (card
scheduling) and `scripts/scan-signals.ts` (the threshold/heal scan). They ship
with the full skill bundle at
<https://github.com/DannyMac180/skills/tree/main/explain-this> and are NOT
included in this single-file version.

If the scripts are not installed, do the same work directly: read and write
`~/.explain-this/memory/cards.jsonl` and `signals.jsonl` yourself, applying the
SM-2 rules exactly as specified in the Review Mode section (hit → interval ×
ease; partial → advance but drop ease; miss → reset interval, drop ease, record
a lapse; retire past ~120 days), and run the threshold and heal scans by
reading `signals.jsonl` against the stated defaults. The file formats and every
threshold are documented below, so the behaviour is reproducible without the
scripts — the scripts only make it faster and less error-prone. Install the
full bundle when you want the deck managed for you.

## State contract

All user state lives in `EXPLAIN_THIS_HOME` (default `~/.explain-this/`) —
never in this skill's install directory, so it survives skill updates and is
shared across agent hosts:

```
~/.explain-this/
  LEARNER.md            # who this person is as a learner — read before EVERY explanation
  memory/cards.jsonl    # spaced-repetition cards + SM-2 scheduling state
  memory/signals.jsonl  # append-only quiz-attempt evidence
```

## First run

If `~/.explain-this/LEARNER.md` does not exist, do NOT explain anything yet.
Run the interview in the **First-Run Interview** section below (~10 minutes), draft LEARNER.md
from the **LEARNER.md Template** section below, show it to the user, and apply their
corrections. The profile is the product's first artifact.

## Every explanation follows the spine

Read `LEARNER.md` first, then build the explanation in this order:

1. **Why does this exist?** — the problem the artifact answers. Context before content.
2. **The one idea** — the single sentence worth retaining above all others.
3. **How it works** — intuition before mechanism, prose-ordered (literate
   sequencing), analogies drawn from the learner's deep domains, skipping what
   their profile says they already know.
4. **What can you now do** — point at the learner's formation goals: what can
   they build, argue, or decide that they couldn't before.
5. **Check yourself** — the quiz. Generate per the **Quiz Generation** section below; add each
   question to the card deck per the **Review Mode & the Evidence Loop** section below.

## Depth dial

Default comes from LEARNER.md frontmatter; per-request override phrases win:

| Depth | Meaning | Trigger phrases |
|-------|---------|-----------------|
| orient | 5-minute orientation | "just orient me", "quick pass" |
| working | can explain it to a colleague (default) | — |
| rederivable | could re-derive / re-build it | "really grok", "go deep" |

## Artifact adapters

Pick the adapter for the artifact type; it defines ingestion and what
"meaning" means for that type:

- Papers / PDFs → the **Adapter: Papers & PDFs** section below
- Articles / markdown / essays → the **Adapter: Articles, Essays & Markdown** section below
- Code, diffs, repos → the **Adapter: Code, Diffs & Repos** section below

## Output destinations

Markdown is canonical. The user directs the destination ("put it in Obsidian",
"give me an HTML file", "just tell me here"); the default lives in LEARNER.md
frontmatter. In document output, embed quiz questions at section ends with
answers in `<details>` blocks. An HTML render is an optional layer for
interactive quiz widgets — never required.

## Review mode

"quiz me" / "review my cards" / "explain-this review" → run the conversational
review loop in the **Review Mode & the Evidence Loop** section below (due cards via `scripts/sm2.ts due`).
When invoked for a NEW explanation while cards are due, mention it once
("6 cards due — review first, or after?") but never block.

## Gotchas

- **Never skip the profile read.** An explanation not shaped by LEARNER.md is
  a generic summary — the exact thing this skill exists to avoid.
- **A summary is not an explanation.** If the output could have been produced
  without the artifact's actual content or without the profile, start over.
- **Never write LEARNER.md's Known Weak Patterns from a single session.** Only
  the evidence loop (the **Review Mode & the Evidence Loop** section below, thresholds) may add entries, and
  every entry must cite its evidence. One bad quiz is noise, not identity.
- **Quiz questions come from the artifact, not the explanation** — otherwise
  they're echo questions that test short-term verbal memory. See
  the **Quiz Generation** section below two-pass procedure.
- **Grade the user's free-text answers yourself** (hit/partial/miss). Never
  ask them to self-grade; self-grading is generous and corrupts the evidence.
- **You wrote the explanation AND grade the quiz — watch for grading
  inflation.** Grade against the artifact and the stored answer/rubric, not
  against your own explanation's wording. When unsure between hit and
  partial, choose partial.
- **State is sacred.** Never reset, rewrite, or prune `~/.explain-this/`
  except through the documented flows. Losing a learner's history is the worst
  failure this tool can have.

---

# The First-Run Interview

Creates `~/.explain-this/LEARNER.md`. Design principle: **reveal, don't ask for
self-report** — people are bad at describing how they learn, so every question
extracts the answer behaviorally. One question per turn, curious-colleague
tone, no system jargon until the reveal. Target ~10 minutes, hard cap 15.

## Opener (framing, not a question)

> "Before I explain anything, I want to learn how *you* learn. A handful of
> questions, no right answers — what you tell me shapes every explanation I
> ever give you. Takes about ten minutes."

## The seven questions (in order)

| # | Question | Populates | Notes |
|---|----------|-----------|-------|
| 1 | "What do you know so well you could teach it? Two or three things — they don't have to be professional." | Prior Knowledge (deep) | Opens with competence, not deficit. Follow-up if all answers are work: "Anything outside work — a hobby, a craft, a past life?" Non-work domains make the best analogies. |
| 2 | "Tell me about the last thing you understood deeply — not just used, *understood*. How did you get there?" | Entry Preferences | The process they describe IS their learning style. Follow-up: "What was the moment it clicked?" |
| 3 | "Now the opposite: something you tried to learn and bounced off. What went wrong?" | Known Weak Patterns (seed) + Prior Knowledge (thin) | Seeds weak patterns honestly so the section isn't empty while the evidence loop matures. |
| 4 | "When you open a paper or a long technical article, what do you actually do first — abstract, figures, skim the whole thing, or start reading from the top?" | Entry Preferences | Behavioral probe — what they *do*, not what they *prefer*. Adapt the medium (docs/videos) if they don't read papers. |
| 5 | "When something is explained to you, what makes you trust it — a proof, a working demo, or a story about why it exists?" | Evidence preference | Determines whether explanations lead with derivation, example, or motivation. |
| 6 | "What are you trying to build or become this year? What should understanding new things be *for*?" | Formation Goals | The soul question — give it room, never rush it. This is what turns explanation into formation. |
| 7 | "Last one: when an explanation pushes you outside your comfort zone, is that energizing or exhausting? How much pushing do you want?" | Stretch Policy | Calibrates the anti-overfitting counterweight (default: 1 in 5 explanations leads with an unfamiliar frame). |

## Conduct rules

- **One question per turn.** Never a wall of questions.
- **Max one follow-up per question.** The time cap beats completeness — TODO
  gaps in the profile are fine.
- **Mirror only non-obvious inferences.** When you draw a conclusion the
  person didn't state ("sounds like you need the why before the how — is that
  right?"), say it so it can be corrected at the source. Don't mirror every
  answer; that reads as formulaic.

## Config picks (after Q7 — asked directly, these are settings, not psychology)

1. Default depth: orient / working / rederivable
2. Default output destination (chat, a notes folder, HTML file, etc.)
3. Quiz gate: on (quiz before closing each explanation) / appendix / off

## The reveal

Draft the complete LEARNER.md from the **LEARNER.md Template** section below and present it:

> "Here's you, as a learner — my first sketch, anyway. Read it. What did I get
> wrong?"

Apply corrections conversationally or let them edit the file directly — both
fine. Then create `~/.explain-this/memory/` so the state contract is complete.

## Edge cases

- **Bail mid-interview:** draft from what exists; unanswered sections get
  `<!-- TODO: not yet asked -->` comments. The skill works with a partial profile.
- **Re-run on an existing profile:** switch to review mode — walk the current
  file section by section, propose diffs, never silently overwrite.

---

# LEARNER.md Template

Draft this from the interview (the **First-Run Interview** section below), show it to the user, apply
their corrections, and write it to `~/.explain-this/LEARNER.md`. Keep the
whole file under ~150 lines — it loads into context on every explanation, so
every section must earn its cost. Nothing here is machine-only: the user owns
this file and may edit anything.

```markdown
---
name: <name>
created: <YYYY-MM-DD>
last_profile_update: <YYYY-MM-DD>
profile_updates: 0
defaults:
  depth: working            # orient | working | rederivable
  output: chat              # chat | <notes path> | html
  quiz: gate                # gate | appendix | off
---

# How I Learn

## Prior Knowledge — build analogies here, skip re-explaining this
<!-- from Q1; three tiers -->
- **Deep (could teach it):** <!-- TODO -->
- **Working (compress, don't re-teach):** <!-- TODO -->
- **Thin (explain from scratch):** <!-- TODO: from Q3 -->

## Entry Preferences — how to open an explanation
<!-- from Q2, Q4, Q5 -->
- <!-- TODO: e.g. "intuition before formalism, why before how" -->
- <!-- TODO: evidence preference — proof / demo / story -->

## Depth Dial
- Default: <!-- TODO: from config picks -->
- Override phrases: "just orient me" → orient; "I want to really grok this" → rederivable

## Known Weak Patterns — machine-earned, evidence-gated
<!-- Seeded from Q3. After that, written ONLY by the evidence loop
     (review.md): ≥4 same-tag misses across ≥2 artifacts. Every entry cites
     its evidence and the user may delete any entry they disagree with. -->
- <!-- TODO: seed from Q3, e.g. "Loses the thread on multi-step derivations →
     slow down, add a worked example [seeded at interview]" -->

## Formation Goals — what understanding is FOR
<!-- from Q6. The "what can you now do" section of every explanation points
     here. This is what turns explanation into formation. -->
- <!-- TODO -->

## Stretch Policy — anti-overfitting counterweight
<!-- from Q7. Comfort-only explanations become a ceiling. -->
- Roughly 1 in <N> explanations: lead with the unfamiliar frame, flagged
  ("trying the formal route first — tell me if it doesn't land")
- My reaction is signal; log it
```

## Rules encoded in this template

- Frontmatter `defaults` = machine-read config; the body = human-read
  identity. One file, two audiences.
- `Known Weak Patterns` entries must cite evidence (misses / artifacts /
  date range) — the file stays honest and auditable.
- `profile_updates` in frontmatter makes profile drift visible at a glance;
  bump it on every evidence-driven revision.

---

# Quiz Generation

Quizzes are **speed regulators**, not assessment theater — they force genuine
comprehension before moving on and prevent the false confidence a fluent
explanation can create. The whole evidence loop is only as good as the
questions feeding it.

## The governing test: load-bearing questions only

A question earns its place only if missing it would change what the learner
can do with the artifact. This kills trivia (author names, years, constants),
questions about the explanation's own structure, and box-checking recall.

## Composition scales with the depth dial

| Depth | Count | Mix |
|-------|-------|-----|
| orient | 3 | big-picture + the one idea only — no mechanism quizzing |
| working (default) | 5 | 2 recall, 2 transfer, 1 explain-back |
| rederivable | 7–8 | the working mix plus derivation-tagged questions |

Coverage anchors at every depth: at least one question on **the one idea**
(spine section 2), and at least one **transfer question pointed at the
learner's formation goals** — this is where the profile makes quizzes personal.

## Tag vocabulary (closed — used by the evidence loop)

Every question carries 1–2 tags from exactly this list:
`terminology`, `mechanism`, `derivation`, `transfer`, `big-picture`

## Type specs

- **recall** — only terms that later sections depend on. If nothing downstream
  breaks when it's forgotten, it's trivia: cut it.
- **transfer** — apply the mechanism in a novel context drawn from the
  learner's deep domains (LEARNER.md). The stored `answer` is a *grading
  rubric* ("uses the mechanism correctly in the new context"), not verbatim
  text — good transfer answers won't match canned text.
- **explain-back** — "explain X to a colleague in three sentences." Graded on
  exactly three criteria: core claim present, mechanism correct, nothing
  invented. 3/3 = hit, 2/3 = partial, else miss. "Nothing invented" is the
  anti-confabulation check — fluent-but-wrong is the failure mode this tool
  exists to catch.

## Two-pass generation

1. **Draft from the artifact, not the explanation.** Questions generated from
   the explanation converge on its wording and become *echo questions* —
   answerable by pattern-matching prose the learner just read, which measures
   short-term verbal memory, not understanding.
2. **Self-check every candidate:** (a) answerable from the artifact alone?
   (b) echo test — if the answer appears near-verbatim in the explanation
   within a sentence of the question's phrasing, cut it; (c) load-bearing
   test; (d) tags correct — the evidence loop depends on tag accuracy;
   (e) type-mix quota met.

## Weak-pattern targeting

If LEARNER.md lists an active Known Weak Pattern, include one deliberate
question on that tag in every relevant artifact's quiz. This is simultaneously
treatment (practice where weak) and measurement (generates the hit-rate data
that lets the entry heal and retire). Without it, weak patterns linger because
nothing re-tests them.

## Gate mechanics — honest about enforcement

- **Conversational mode: the gate is real.** Don't close the explanation until
  the quiz is attempted. On a miss, immediately re-explain the missed idea
  *differently* (a new route in, shaped by the profile) — this is the first
  learning moment, before the card ever enters the deck.
- **Document mode: the gate is advisory.** Embed questions at section ends
  with answers in `<details>` blocks — honor system. Every question still
  enters the card deck, so real enforcement arrives later via review.
- **"Skip" is always allowed** and logged as a signal. Chronic skipping is
  information too.

## After the quiz

Add every question to the deck (`scripts/sm2.ts add`) and log every attempt
(`scripts/scan-signals.ts log`) per the **Review Mode & the Evidence Loop** section below. Grade free-text answers
yourself — hit / partial / miss — never ask the learner to self-grade.

---

# Review Mode & the Evidence Loop

Two systems share one data source (quiz results) but have different jobs:
**retention** (spaced-repetition review of cards) and **adaptation** (evidence-
gated updates to LEARNER.md). Keep them distinct.

## Data files (in `~/.explain-this/memory/`)

**cards.jsonl** — one self-contained card per line:

```json
{"id": "card_aiayn_03",
 "artifact": {"title": "Attention Is All You Need", "source": "https://arxiv.org/abs/1706.03762", "explained": "2026-07-15"},
 "question": "Why does multi-head attention use multiple smaller heads instead of one full-width head?",
 "answer": "Each head learns a different relationship type in a different subspace; one full-width head would average them into mush.",
 "type": "transfer",
 "tags": ["mechanism"],
 "state": {"interval_days": 4, "ease": 2.5, "due": "2026-07-19", "reps": 2, "lapses": 0},
 "history": [{"ts": "2026-07-15T09:12:00Z", "result": "hit", "mode": "inline"}],
 "status": "active"}
```

**signals.jsonl** — one append-only line per quiz attempt:

```json
{"ts": "2026-07-15T09:12:00Z", "artifact": "attention-is-all-you-need", "card": "card_aiayn_03", "tags": ["mechanism"], "result": "hit", "mode": "inline", "excluded": false}
```

Signals are dumb at write time — no interpretation. Scheduling is straight
SM-2 (see `scripts/sm2.ts`): hit (q=5) → interval × ease; partial (q=3) →
advances but drops ease; miss (q=2) → interval resets, ease drops, lapse
recorded. Cards retire when the interval exceeds ~120 days (known — stop
asking); `suspended` when the user says "don't quiz me on this." Cap ~5 cards
per artifact so the deck grows linearly with reading.

## Review session flow

```
explain-this review
  → scripts/sm2.ts due            (due cards, most overdue first, cap 8)
  → per card:
      ask the question → user answers in FREE TEXT
      → grade it yourself: hit / partial / miss, one line of feedback
      → on miss: RE-EXPLAIN DIFFERENTLY — a new route in, shaped by
        LEARNER.md, never the same words again
      → scripts/sm2.ts grade <id> <result>   (updates SM-2 + logs the signal)
  → session close: score summary ("6/8 — two derivation misses")
  → run the threshold scan (below); if a pattern crossed, show the drafted
    profile entry WITH its evidence and add it to LEARNER.md
```

Grading is always agent-side against the stored answer/rubric. Never
self-graded — self-grading is generous and corrupts the evidence.

## The evidence loop (adaptation)

The path from "missed a question" to "the profile says something about you"
must pass through accumulated evidence:

1. **Threshold scan** after each session: `scripts/scan-signals.ts scan`
   (defaults: ≥4 misses on the same tag, across ≥2 distinct artifacts, within
   a 60-day window). The cross-artifact requirement separates "struggles with
   derivations" (profile-worthy) from "that one paper was brutal" (not).
2. **Evidence cited inline.** Every Known Weak Patterns entry written to
   LEARNER.md carries its proof: `[evidence: 5 misses / 3 artifacts, Jul–Sep]`.
   Auditable against signals.jsonl; the user may delete any entry they
   disagree with. The profile never claims what it can't prove.
3. **Patterns heal.** `scripts/scan-signals.ts heal` (defaults: hit-rate ≥80%
   over the last 6 graded signals on a tag) lists entries eligible for
   retirement. Weak patterns are supposed to shrink under treatment — a
   deficit-only profile becomes a self-fulfilling ceiling.
4. **Bad-question escape hatch.** If the user says a question was bad, mark
   that signal `"excluded": true` — generation failures never become facts
   about the learner. Skips are logged as signals too.

All thresholds are tunable constants in the scripts' flags; the defaults are
starting guesses.

## Surfacing

Portable core is on-demand plus a non-blocking nudge: when the skill is
invoked for a new explanation and cards are due, mention it once ("6 due —
review first, or after?"). Never block, never nag. Host-specific layers
(daily digests, notes-app exports) are optional additions, never requirements.

---

# Adapter: Papers & PDFs

**What "meaning" means here: claim + evidence.** A paper exists to argue that
something is true. The explanation's job is to make the claim, the evidence,
and the gap between them legible.

## Ingestion

- Read the full text when available (PDF read, HTML, or LaTeX source).
- Read in evidence order, not page order: abstract → figures + captions →
  results → methods → discussion. The figures usually carry the real argument.
- Note what the authors *measured* vs what they *claim* — the gap between the
  two is often the most important thing to explain.

## Spine emphasis

1. **Why does this exist** — what question was open before this paper, and why
   did existing answers fail? (Check the related-work section for the authors'
   own framing, but don't trust it uncritically.)
2. **The one idea** — the claim in one sentence, with its strength qualified
   honestly ("shows X on benchmark Y" ≠ "proves X").
3. **How it works** — mechanism before math. Every equation that matters gets
   an intuition first; equations that don't bear load get skipped, and say so.
4. **What can you now do** — can the learner use the method, cite the result,
   or challenge the claim? Tie to their formation goals.
5. **Check yourself** — at least one question about the evidence quality, not
   just the mechanism ("what would falsify the headline claim?").

## Watch for

- **Headline-vs-fine-print drift:** abstract claims broader than the results
  support. Explaining this gap is high-value, not pedantry.
- **Notation walls:** if the learner's profile lists formal notation as thin,
  translate symbols to words the first time each appears.

---

# Adapter: Articles, Essays & Markdown

**What "meaning" means here: the argument arc.** An article exists to move the
reader from one belief or frame to another. The explanation's job is to make
the intended movement explicit — where the author starts you, where they want
to leave you, and what carries you between.

## Ingestion

- Read the whole piece; note the thesis (often not in the first paragraph),
  the load-bearing moves, and what the author conspicuously does NOT address.
- Separate the claims from the vibes: which statements are argued, which are
  asserted, which are style.

## Spine emphasis

1. **Why does this exist** — what conversation is this piece entering, and
   what position is it against? Most essays are replies; name the implied
   opponent.
2. **The one idea** — the thesis in one sentence, in plainer words than the
   author used.
3. **How it works** — the argument arc: the 2–4 moves that carry the thesis,
   each with its actual support (argued / asserted / illustrated). Flag the
   weakest link honestly.
4. **What can you now do** — what does accepting this thesis change for the
   learner's own goals? What should they steal, and what should they resist?
5. **Check yourself** — include one transfer question applying the thesis to
   the learner's own domain, and one on the argument's weakest link.

## Watch for

- **Persuasion vs demonstration:** beautiful prose can smuggle unargued
  claims. Naming these is part of the explanation, not a hostile reading.
- **Context the author assumes:** if the piece leans on a reference the
  learner's profile doesn't cover, give the 2-sentence version inline.

---

# Adapter: Code, Diffs & Repos

**What "meaning" means here: behavioral change and intent.** Code exists to
make a machine behave a certain way; a diff exists to change that behavior.
The explanation's job is the behavior and the why — the code text is evidence,
not the subject.

## Ingestion

- **Diff:** read the surrounding code first — the explanation of a change
  needs the system as it was. Identify the behavioral delta: what does the
  system do after that it didn't do before (or stops doing)?
- **Repo / module:** find the entry points and one representative end-to-end
  path before reading anything alphabetically. Prose order beats file order.
- Run tests or the tool itself when possible — observed behavior beats
  inferred behavior.

## Spine emphasis

1. **Why does this exist** — the problem or requirement that forced this code
   into existence. For a diff: what was broken, missing, or slow.
2. **The one idea** — the core design move in one sentence ("all writes go
   through one queue so readers never see partial state").
3. **How it works** — literate sequencing: follow one request/call/datum
   through the system in narrative order. Intuition for the design before
   syntax of the implementation. Skip what the learner's profile says they
   know (don't re-teach their own stack to them).
4. **What can you now do** — can they modify it safely, review it critically,
   or reuse the pattern? Name the one place a naive change would break things.
5. **Check yourself** — favor transfer ("what happens if two callers hit this
   concurrently?") over recall of names and signatures.

## Watch for

- **Incidental vs essential complexity:** flag which parts are the idea and
  which are plumbing. Learners drown when explanations weight them equally.
- **The diff that lies:** a small textual change with a large behavioral
  radius (default flips, shared helpers). Size the explanation to the
  behavioral change, not the line count.
