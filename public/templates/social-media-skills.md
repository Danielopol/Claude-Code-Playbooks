# Social Media Skills: Voice Profile, Reel Scripts and LinkedIn Posts

Use this when someone wants Claude to write social content in their own voice. Trigger phrases: "build my voice", "learn my voice", "script a reel", "turn this into a reel", "write me hooks", "write a post", "score my post", "what should I post this week".

Source: https://github.com/charlie947/social-media-skills (MIT, by Charlie Hills). The original repo has 17 standalone skills for Codex and Claude. This template condenses the core of it: the voice foundation, the Instagram Reels workflow, and the main LinkedIn writing skills. The other skills (profile-optimizer, graphic-designer, newsletter-voice, niche-research, analytics-dashboard, the Gemini image skills, quote-post, pinned-comment, youtube-thumbnail) are not included here. Install them from the repo if you want them.

## Ground rules (apply to every mode)

- **Voice files come first.** Personalised work needs two files in the project root: `about-me.md` (who the user is, audience, pillars, point of view, off-limits) and `voice.md` (how they write). If either is missing, run mode 1 first. Never write "in the user's voice" without them. Never inherit anyone else's identity, accounts, or voice files.
- **Never invent.** No made-up metrics, first-person experiences, results, or certainty. If a personal angle isn't supplied, say it's unavailable and use an evidence-backed non-personal angle. Unknown numbers are "unavailable", not zero.
- **Nothing is published.** Drafting, scoring and saving never authorise posting, sending messages, or changing accounts. The user posts.
- **Credentials stay private.** Never print API keys or tokens. Check that a key exists without displaying it. Get the user's approval before any step that costs money (paid API or scraper runs).
- **Prefer supplied material.** If the user pastes a transcript, post history or video, use it instead of fetching. If a source or tool is unavailable, name the missing capability, mark that stage pending, and offer the pasted-input alternative. Never fake a tool run or an analysis.
- **Style defaults** (override with `voice.md`): British English, no em dashes, no semicolons in scripts, short sentences, plain words.
- Put anything the user will copy-paste in a plain fenced code block.

---

## 1. Voice builder: learn how the user writes

When the user asks to build their voice, go straight to the interview. Don't summarise this file or ask whether to start.

**Interview (two short batches, wait for answers between them).** Batch 1: name and role; who they write for; the 3 to 5 topics they want to be known for; the belief they hold that others in their industry don't. Batch 2: the one thing they want people to think when they see their name; one thing they refuse to write about. If an answer is blank, ask that question once more, then move on.

**Write `about-me.md`** (under 300 words, every line something you'd reference when writing):

```
# About Me
## Name and role
## Audience            (2-3 sentences on who the reader is)
## Topic pillars       (3-5, one line each)
## Point of view       (the distinctive belief, as a clear statement)
## Brand promise       (the one thought they want to own)
## Off limits
```

**Ask for 3 to 5 samples** of their writing (posts, newsletters, essays, emails, tweets; they can be someone whose voice they admire). Minimum 3. If they have none, offer a starter set, but say whose voice it is and that they're borrowing it. Starter samples describe a borrowed style, never the user's own experience.

**Analyse the samples** for patterns across all of them, not one-off quirks: sentence length, paragraph rhythm, opening and closing style, point of view, tone, signature phrases, structure, recurring topics, and **absence signals** (words, punctuation, hook types and structures consistently missing, such as no em dashes in 0 of 5 samples).

**Write `voice.md`** (under 500 words), one integrated profile:

```
# Voice Profile
## Who I sound like        (2-3 plain sentences)
## Tone                    (3-5 attributes it hits, 1-2 it never hits)
## Sentence rhythm         (average length, pacing, structure, avoidance patterns)
## Hook patterns           (3-5 observed, one example each, plus types never used)
## How I open
## How I close            (include CTA style)
## Signature phrases
## Off-limits              (only what the samples clearly avoid)
## What this voice never does   (3-5 specific behaviours)
```

Fill every section from the actual samples, no generic filler. If samples contradict each other, say so rather than smoothing it over. **Separate explicit user prohibitions from patterns merely absent in a small sample, and label the latter provisional with sample counts.** Then tell the user both files exist and are editable.

---

## 2. Reels scripting: reverse-engineer a reference Reel, write your own

Go straight to step 1. Don't summarise.

1. **Get the reference.** Ask for the reference Reel URL (or a Notion link to it). A pasted transcript or a supplied video file is a valid alternative.
2. **Get the topic.** Ask what the user wants to repurpose into this Reel (a pasted section or one sentence). Read `voice.md`, `about-me.md` and any newsletter voice file first.
3. **Get the Reel's content.** The original skill uses an Apify Instagram scraper to fetch the video and Gemini 2.5 Flash to analyse it. That route needs the user's own `APIFY_API_TOKEN` and `GOOGLE_AI_API_KEY`, Node.js 18+, the `apify-client` and `@google/generative-ai` packages, and costs money, so get approval first. Collect **only the single video and its aggregate metadata. Never scrape comments or replies**, including through deep-scrape or comment-count options. Don't guess scraper inputs: check the current documented schema, and if post-only collection isn't supported, ask for an uploaded video instead. Save outputs under `outputs/reels/<slug>/`. A supplied video skips the scraper. A supplied transcript skips the analysis step, and the script that follows is labelled transcript-based.
   Note: automated collection from Instagram can breach Instagram's Terms of Use. The lowest-risk route is for the user to supply the video or transcript themselves.
4. **Analyse the Reel.** Ask the model for: the full transcript with timestamps; the hook (exact first words, word count, what stops the scroll); language patterns (average sentence length, you/your vs I/me ratio, transitions, minimisers like "just"); structure (total duration, section timings, the before/after moment, the CTA); and the one key technique to learn. Save it as `analysis_reference_<id>.md`.
   **One Reel is a reference, not a verified outlier.** Call it an outlier only if you have comparison data (the same creator's recent posts) and can cite the sample, window and multiple.
5. **Write the script** to `reel-<slug>.md`, applying the reference's patterns to the user's topic, in their voice.

   *Hook:* never open with "I". Use "this", "you", a fact, or a name. Proven shapes: "This changed... forever", a negative flip ("X is useless unless..."), a capability statement. It must create curiosity or a pattern interrupt within 3 seconds. Mirror the reference hook's word count and structure.
   *Body:* short sentences, "you" and "just" used conversationally. Never merge three or more staccato fragments (combine them into one flowing sentence). Never state the conclusion; let the facts do the work. Two key points maximum, not three.
   *Duration:* 30 to 45 seconds when read aloud.
   *CTA:* "Comment [WORD] and I'll send you [specific thing]". One caps word, no quotes, no punctuation, directly tied to what's promised. **Use a comment trigger only if the user has a real deliverable and a working delivery automation.** Otherwise use a next action that promises nothing.
   *The caption mirrors the script.* Update both together.

   File structure:

   ```
   # Reel: [title]
   ## Reference analysis   (URL, views if verified, key technique)
   ## Duration target
   ## Hook (0-3s)
   ## Point 1 ([start]-[end]s)
   ## Point 2 ([start]-[end]s)
   ## CTA ([start]-[end]s)
   ---
   ## Caption
   ## Comment trigger (only if configured)
   ## Deliverable (only if promised)
   ---
   ## Visual notes          (cuts, B-roll, text overlays)
   ```

6. **QA loop, up to three passes.** Score out of 100: source accuracy 30, user voice 25, hook and structure 20, spoken duration and clarity 15, caption and CTA consistency 10. Cite evidence for each score, fix real violations, re-score. The gate is 95. If it can't be reached, report the draft with the specific blockers instead of inflating the score. Common violations: opens with "I"; three or more staccato fragments; states the conclusion; a multi-word comment trigger; over 45 seconds read aloud; three points instead of two; the caption doesn't mirror the script. Time a spoken read if you can; otherwise label the duration "estimated".
7. **Hand off** the script and caption with the reference source, analysis method and any unresolved checks. There is no editing or publishing pipeline here. The user records and posts.

Never invent metrics from the reference Reel; mark absent ones unavailable. If reference access fails, report the failed stage and offer pasted-transcript input.

---

## 3. Hook generator: six hooks for a topic

Ask for the topic only if it wasn't given. Then output six two-line hooks, no preamble:

- **Line 1 (opening):** 40 characters maximum, no questions, something unexpected, specific or punchy.
- **Line 2 (contrast):** 40 characters maximum, contradicts, reframes or undercuts line 1.

Cover six angles, one each: number-led, contrarian, personal transformation (before and after, with a digit), authority reference (a name, tool or brand), admission (a mistake or loss), future shock ("X is about to change"). Prefer digits (3, not three). Include a metric where one is real. Use "I" or "How I" only for an experience the author actually supplied. Count characters in the final copy. Preserve uncertainty from the source; never invent a result to strengthen a hook. Then ask if they want one built into a full post.

---

## 4. Post formatter: topic to ready-to-publish post

Ask for the topic (a sentence or a pasted context dump) and a framework: **PAS** (Problem, Agitation, Solution), **AIDA** (Attention, Interest, Desire, Action), **BAB** (Before, After, Bridge), **STAR** (Situation, Task, Action, Result), **SLAY** (Story, Lesson, Actionable advice, You), or "pick for me". Ask one follow-up for facts, stats, tone notes and audience.

Global rules: at most 20 non-blank lines; target 150 to 200 words but never pad; a blank line after every line; most lines one sentence of 55 characters or fewer (up to 4 mini-paragraphs of 110 characters or fewer); grade-6 words, no adverbs, no jargon; no em dashes; no questions unless the hook is one; no emojis except numbered-list checkmarks; at most two trios per post; vary sentence starts. Structure: line 1 is the hook (50 characters or fewer), line 2 is a twist that opposes or surprises it, the middle follows the framework (3 to 5 lines per stage, keeping the real number and order of any required steps), and the last 1 to 2 lines wrap and CTA in the author's closing style. Tune to `voice.md` if it exists. Put the finished post alone in a code block and count the lines and characters of the exact final copy.

---

## 5. Post writer: a longer draft in the user's voice

Needs `about-me.md` and `voice.md`; if either is missing, send the user to mode 1 and stop. Ask for the topic (a context dump, a topic, or "suggest five"), and any reference posts to borrow structure from. Work from supplied evidence first, and verify extra claims only when needed. Present three specific angles and a framework (PAS, how-to list, story to lesson, contrarian take), then draft. Honour the absence patterns in `voice.md` as strictly as the positive ones.

---

## 6. Content matrix: 24 to 40 post ideas

Read `about-me.md` if present (otherwise ask for two paragraphs on who they are and what they discuss). Take 3 to 5 pillars (typed, pulled from `voice.md`, or proposed by you and confirmed). Build a table: rows are pillars, columns are these 8 formats in order: **Actionable** (an ultra-specific how-to), **Motivational** (a story of someone who did something extraordinary in the niche), **Analytical** (why something works the way it does), **Contrarian** (go against common advice and back it up), **Observation** (a hidden, under-discussed trend), **X vs Y** (compare two tools, styles, frameworks or companies), **Present vs Future** (the current state against a specific prediction, with the why), **Listicle** (resources, tips, mistakes, lessons or steps). Every cell is a specific headline ("A 3-line hook formula for product launches"), not a theme ("Hooks"), and not reusable across pillars. If you can write files, save it as `content-matrix-YYYY-MM-DD.md` and print it as a plain markdown table. Close with one sentence naming the strongest idea and why, then offer to write any cell as a post.

---

## 7. Post scorer: review a draft against real history

Read the voice files if they exist (otherwise score without voice matching). Use performance data only if the user supplied it: an export of their own posts with aggregate engagement counts. Verify the author and date. Never search other people's folders or fall back to someone else's benchmarks. Without data, give an **editorial review** and mark the performance comparison unavailable. If you analyse history: weight engagement as reactions plus 3 times the aggregate comment count (an editorial weighting, not reach), find the top 10% and bottom 10%, and compare hook types, length, format, CTA patterns, topic clusters and rhythm. Collect **post bodies and aggregate counts only, never comments or replies**. Score five criteria from 1 to 10: hook strength, voice match, value density, structure and format, and publish readiness. If there is no voice profile or confirmed samples, mark voice match unavailable and report the total out of 40, otherwise out of 50. A score is never a prediction of performance. Say when the sample is too small to support a comparison.

---

## Other skills in the repo (not in this template)

profile-optimizer (rebuild a LinkedIn profile, with four image prompts), graphic-designer (HTML/CSS plus an inspected PNG, or a Gemini prompt), newsletter-voice (newsletter-specific rules on top of voice-builder), niche-research (up to 20 dated stories from the last 7 days), gemini-infographic, gemini-carousel (per-slide prompts with an approval gate), quote-post, pinned-comment, youtube-thumbnail (title to Gemini thumbnail prompt), analytics-dashboard (LinkedIn Analytics export to a React dashboard plus 5 recommendations).
