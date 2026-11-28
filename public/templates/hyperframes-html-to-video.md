# HyperFrames: Write HTML, Render Video

Use this when someone wants a video, motion graphic, captions, overlays, a chart animation, a vertical social clip or a launch film made with HTML, CSS and JavaScript and rendered to MP4. Trigger phrases: "make a video", "render this to MP4", "add captions", "animate this chart", "product launch video", "HyperFrames".

Source: https://github.com/heygen-com/hyperframes (Apache 2.0, by HeyGen). HyperFrames renders HTML to video by seeking a paused timeline frame by frame, so every render is identical. The official skills add a 450-item block registry and detailed references; install them for the full set (see the playbook page). This template carries the contract and the work loop.

Requires Node.js 22+ and FFmpeg. Run the CLI as `npx hyperframes <command>`; every command has `--help`, and most take `--json`.

## Ground rules on cost, accounts and data

- **Local and free by default.** Rendering, previews, checks, local voiceover (`npx hyperframes tts`, Kokoro on the device), transcription (`npx hyperframes transcribe`), background removal and colour treatments all run on the user's machine.
- **Say when something costs money or needs an account,** before doing it: HeyGen sign-in, generated music, images, avatars or video, cloud voices, `cloud render`, AWS Lambda or Cloud Run renders. **Never start a sign-in, a paid generation or a cloud render unless the user asked for it.** If they set a credit limit, respect it.
- **Never ask for API keys or passwords in chat.** The user runs `npx hyperframes auth login` themselves if they want HeyGen features.
- **No usage reports from you.** Don't run `npx hyperframes events` or `feedback`. Mention once that the CLI has telemetry, linked to the HeyGen account after sign-in, and that `npx hyperframes telemetry disable` or `HYPERFRAMES_NO_TELEMETRY=1` turns it off.
- **Real things from their source.** Use the product's real screens, the brand's real logo, the user's own footage. Draw only what has no source. Ask about rights before using someone else's footage or music.

## Build what was asked

- A new video is 1920x1080 at 30 fps unless asked otherwise.
- No voiceover, captions or new aspect ratio unless the request or the source calls for them.
- A film over about 15 seconds that tells something gets music and sound on its visible actions, unless the user wants silence.
- A question or a loose idea gets an answer or a proposal, not an edit.
- Before hand-writing a named effect, transition, caption style, chart or card, search the registry: `npx hyperframes catalog --query "<what the beat should do>" --json`, then `npx hyperframes add <name> --json`.

## Project shape

- `index.html` is the root composition: it declares the video's variables and mounts one scene per sub-composition from `compositions/`.
- Media and fonts live in `assets/`. Paths are `assets/...` with no leading slash, in sub-compositions too.
- New project: `npx hyperframes init <dir> --skip-skills`. A website as the subject: `npx hyperframes capture <url> --json`.

## The render contract

`npx hyperframes check --json` reports most violations with a `Fix:` line.

1. Every timed element has `class="clip"`, `data-start` and `data-duration` (seconds) and shows over `[start, start + duration)`. Land the end state just before the end.
2. The video's length is the root's `data-duration`: overrun is cut, an early end holds the last frame.
3. Each composition builds **one paused timeline** (usually GSAP) and registers it after its tweens: `window.__timelines["<data-composition-id>"] = tl`.
4. **Deterministic:** no `Date.now()`, unseeded `Math.random()`, network fetches, timers or `repeat: -1`. Everything visible is a function of timeline time.
5. Never tween `display`, `visibility` or `autoAlpha` on a `.clip`; animate a child.
6. No CSS `transform` on an element GSAP transforms; animate transforms, not `left`, `top`, `width` or `height`.
7. Never `play()`, `pause()` or seek media yourself. A `<video>` keeps its sound only with `data-has-audio="true"`, otherwise it's `muted`. Music, voice and replacement sound are separate `<audio>` elements, each with an `id`.
8. Only bundled fonts resolve by name; any other family needs `@font-face` pointing at a file in `assets/fonts/`.
9. Grades, grain, blur and vignettes on footage go through `npx hyperframes media-treatment`, not CSS filters.
10. A scene file puts its styles, markup and scripts inside `<template>` and styles its root as `#root`. Mark intended overflow or overlap with `data-layout-allow-overflow` / `data-layout-allow-overlap`.

## Keep it editable

- One scene per sub-composition, with short readable ids. The root holds only scene hosts, media and audio.
- Timed elements are written in the HTML with stable `id`s, not created by script.
- Copy, brand colours and swappable media are variables (`data-var-text`, `data-var-src`, `var(--id)`).
- Keep content inside the 90% action-safe area, and captions and key text inside the 80% title-safe area.

## Work loop

1. **Existing project:** `npx hyperframes timeline --json` shows what plays when. Build on edits the user made since your last turn instead of overwriting them.
2. **A new film over about 15 seconds:** propose three different storylines in words and let the user pick (unless they said no stops). Then write a short `SPEC.md`: every adjective as a number, each shot by time.
3. **Write**, then `npx hyperframes lint` after the first pass and after structural changes.
4. **Check:** `npx hyperframes check --json`; fix every error and weigh every warning. While a lint error remains, the layout and contrast audits don't run.
5. **Look:** `npx hyperframes snapshot` (add `--at <t,...>` or `--composition <id>`) and read the PNGs. With several scenes, snapshot the middle of each.
6. **Preview:** `npx hyperframes preview --background` (the foreground form never exits), check that the URL answers 200, give the user the URL, and wait for approval unless they asked for the file or for no stops. Passing checks alone isn't a reason to render.
7. **Render:** `npx hyperframes render --quality draft -o draft.mp4` while iterating, `--quality delivery -o out.mp4` for the final. Confirm the file isn't empty and that `ffprobe` reports the expected duration and size, then look at a few decoded frames.

## Timeline edits without hand-editing

`npx hyperframes timeline move|trim|split|set|duplicate|delete <ref> --plan --json` previews one edit; run it again without `--plan` to apply. For several edits, write them to a JSON file and run `timeline apply plan.json --json`. Each run prints a receipt that `timeline undo receipt.json` reverts.

## When a command fails

| Symptom | Fix |
| --- | --- |
| Chrome missing or won't start | `npx hyperframes browser ensure`, then `npx hyperframes doctor --json` |
| A heavy page isn't ready in time | Raise `--timeout` on `check` or `snapshot` |
| `capture` fails or writes `BLOCKED.md` | Don't use its partial files; retry into a new folder |
| Disk is tight | `npx hyperframes clean --dry-run`, then `clean`. Never delete `.hyperframes/` (it holds the project history) |
