# Herk Edit Kit: Edit Talking-Head Video With Claude Code

Use this when someone wants a raw recording turned into an edited video: cut dead air, remove stutters and retakes, add captions and motion graphics, or make a 9:16 reel or YouTube Short. Trigger phrases: "edit my video", "cut the silences", "remove the mistakes", "turn this into a reel", "make a short".

Source: https://github.com/nateherkai/herk-edit-kit (Nate Herk's editing kit for Codex and Claude Code, built on HyperFrames). This template is a working guide. **The kit's scripts, skills, style library and docs live in that repository, so clone it first and open the cloned folder in Claude Code.** This file covers the editing pipeline only. The kit's `motion-showreel` skill (music-synced showreels with paid asset generation) is not covered here.

## Setup (once)

Install Node.js 22 or newer, Git, FFmpeg (including ffprobe) and Chrome or Chromium, with `node`, `ffmpeg` and `ffprobe` on the PATH. Then:

```bash
git clone https://github.com/nateherkai/herk-edit-kit.git
cd herk-edit-kit
npm ci
npm run setup
npm test
```

`npm run setup` checks the tools and creates `.env` only if it doesn't exist. Add keys only for services the user chooses. Keep `.env` out of git and never print its contents. Render the built-in example before touching real footage: `npm run demo`, then in `video-projects/demo` run `npx hyperframes lint`, `npx hyperframes preview`, and `npx hyperframes render --quality draft --output renders/demo.mp4`.

## Ground rules

- **Bring your own footage and keep the original.** Never overwrite the source recording. Work in `video-projects/<slug>/`. Create a new project folder for each video.
- **Explain uploads and costs before any service call.** Transcription (ElevenLabs Scribe is the author's default) and asset generation (Kie.ai) upload media or text to a third party and use the user's own credits. The local starter needs no paid API. Alternatives are OpenAI Whisper, local Whisper, or a word-level transcript the user already has. Check that a key exists without printing it. Ask only for approval that is missing, and don't ask again for the same authorised action.
- **Use the user's existing footage before proposing generated assets.**
- **A detector proposes, a human decides.** The cut detectors are mechanical. Read candidates in context.
- **Never post, publish or contact anyone** without explicit authorisation.
- **No guarantees.** Editing can't guarantee that a video performs. Treat "will this hold attention?" as editorial judgement until there is audience data.
- Review the actual motion and audio of a draft before calling it done. Check face framing, text legibility, black frames, and audio/video sync, and listen across every cut boundary.

## The full edit (long-form talking head): `edit-video`

1. **Probe the source** with ffprobe: duration, streams, resolution. Copy it into the project's assets, or reference an explicitly provided local path.
2. **Transcribe.** Reuse a matching word-level transcript if there is one, and never substitute an older take. Otherwise use the user's chosen provider. The author's default is `node scripts/transcribe-elevenlabs.mjs <source>`. Read `docs/TOOLS-AND-API-KEYS.md` before service setup.
3. **Cut silences** (below). Produces an edit list (EDL) and a re-timed transcript.
4. **Cut mistakes** (below), review-gated.
5. **Plan the story.** Read the video-storytelling and hyperframes-video-beats skills. Write a beat sheet: transcript anchors, one visual idea per beat, deliberate callbacks.
6. **Author the motion graphics** with HyperFrames and GSAP. Read `MOTION_PHILOSOPHY.md` and the hyperframes skill. Choose or adapt cards from `style-library/registry.json` (406 draft cards across two styles) and localise every asset the composition uses (the library may load GSAP and Google Fonts from public CDNs).
7. **Validate.** Run preflight, `npx hyperframes lint`, and the transcript-sync validator for anchored sub-compositions. Review in Studio.
8. **Render a draft**, inspect encoded frames and transitions, fix failures, then render the final.

Deliver the final MP4 path, the edit decisions, the retimed transcript, the composition, and a `VERIFY.md` that says what was checked and what limitations remain.

## Cut silences: `cut-silences`

Removes only silence: dead air before the first word and after the last, plus pauses longer than a threshold, trimmed to a natural breath, never a hard zero-gap. It leaves the words untouched. Input is a word-level transcript JSON (ElevenLabs Scribe shape or a generic `{ words: [{ text, start, end }] }`).

```bash
# plan only: writes the EDL and retimed transcript, touches no video
node .agents/skills/cut-silences/scripts/cut-silences.mjs <transcript.json> --out-dir video-projects/<slug>/assets

# render the cut (local ffmpeg, re-encoded, audio and video kept in sync)
node .agents/skills/cut-silences/scripts/cut-silences.mjs <transcript.json> \
  --video video-projects/<slug>/assets/raw.mp4 --apply \
  --output video-projects/<slug>/assets/edited-silenced.mp4
```

| Flag | Default | Meaning |
| --- | --- | --- |
| `--gap <s>` | 0.55 | Minimum pause treated as trimmable |
| `--head-pad <s>` | 0.22 | Silence kept before the first word |
| `--tail-pad <s>` | 0.34 | Silence kept after the last word |
| `--apply` | off | Actually run ffmpeg (without it, only a plan is written) |

Pauses under the gap are left alone. A trimmed pause keeps a breath scaled by context (0.24s for long pauses, 0.20s after a sentence ender, 0.14s otherwise). A typical raw take loses roughly 15 to 20% as pure silence. Lower `--gap` for a punchier cut, raise it to keep more breathing room. Outputs: an EDL, a retimed transcript, a readable decisions file, the ffmpeg filter script, and the cut video with `--apply`.

## Cut mistakes: `cut-mistakes` (always review-gated)

Removes stutters, immediate word repeats, false starts and retakes (keep the clean take, drop the botched one). What counts as a mistake is judgement, not a formula: emphatic repetition ("never, never") looks identical to a stutter.

1. **Find candidates:** `node .agents/skills/cut-mistakes/scripts/find-cut-candidates.mjs <silence-transcript.json> --out-dir video-projects/<slug>/assets`. Writes structured candidates (stutter, retake, false start) and a readable proposal.
2. **Review (required).** Read each candidate in context and decide keep or cut. Don't trust the recommendation blindly. Common false positives: emphatic repetition, "the piece is, is this...", and lists. Show the user each candidate with a recommendation and collect approvals. Write approved cuts to a file as `{ "cuts": [ { "start": 100.93, "end": 101.06, "reason": "I- false start" } ] }`.
3. **Apply:** `node .agents/skills/cut-mistakes/scripts/apply-cuts.mjs <silence-transcript.json> --cuts approved-cuts.json --video <edited-silenced.mp4> --output <edited-clean.mp4> --apply` (drop `--apply` for a dry run).

To eyeball the result, build the review page with `node scripts/build-edl-review.mjs` and serve it locally. A very clean delivery may produce zero real cuts, which is a valid outcome. Cuts between two words are hard joins, so add a 20 to 30 ms fade later if the audio needs it.

## Reels and Shorts: `short-form-edit`

Input: a source video path and, optionally, a reference reel. Default 1080x1920; a 1920x1080 version is composed separately with its own framing and verified separately.

- **First gate:** "In the first 3 seconds, is someone convinced they need to watch until the end?" Establish a specific reason to stay and earn the payoff inside the video. Effects and polish come after this test.
- **Read `docs/EDITING-PLAYBOOK.md` first.** It holds the author's measured reel style: pacing, layouts, captions, B-roll order, sound palette. The user's brief wins over it.
- **Inspect the footage before locking the concept.** Save an asset shortlist with exact usable intervals and what's visible. Let a distinctive source moment shape the idea.
- **Clean the cut first.** Read every spoken line, run the silence and mistake tools, then review the full transcript by hand, because a zero-candidate report can miss an obvious retake. Lock the cut after a rough animatic, before polished graphics.
- **Design the emotional journey.** Write a `DESIGN.md` and a beat plan before any HTML: hook, open loop, escalation, evidence, payoff, CTA. Keep one main open loop and at most one secondary. Close the promised lesson before the CTA, so a comment request is never the only answer.
- **Build three materially different rough openings** from the same truthful speech and compare the first three seconds for topic clarity, curiosity and muted comprehension. Record why you chose one.
- **Avoid duplication.** Narration and captions carry the words. Graphics should show the example, evidence or consequence, not a third restatement.
- **Be honest.** Don't invent a product result to make a payoff more satisfying. Don't promise a tutorial the footage can't deliver. Borrow editorial mechanisms from a reference reel, never branded copy.
- **Render a low-resolution moving animatic** with speech and rough sound before polishing. Preflight, lint, validate caption timing and footage reuse, then review the real motion and audio before calling it a draft.

When the user gives a note on a draft, fix the edit, then offer to write the note into the relevant skill or reference as a rule so the next edit starts from it.

## What the kit includes (for reference)

15 skills mirrored for Codex and Claude Code; 406 draft motion-graphics cards in two styles (dark graph paper and a glass popout); two scene templates; transcription, silence cutting, mistake detection, EDL review, beat-sync validation and preflight tools; short-form editing with validators; 12 teaching projects; and a synthetic starter composition that needs no footage or API key.

## Licence notes

The kit is MIT, with an additional permission to use the teaching-kit code, templates and documentation to produce personal or commercial videos (retain the notice if you redistribute). HyperFrames is Apache 2.0. The example AI Automation Society brand assets (logo, brand guideline image, brand tokens, and the content of several example projects) are not licensed for reuse: replace them with your own brand materials. Third-party software, fonts and assets keep their own licences (see `THIRD_PARTY_NOTICES.md`).
