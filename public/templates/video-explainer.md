# Video Explainer: Turn Any Topic Into a One-Minute Animated Video

Use this when someone wants a short animated explainer video about a topic, an article, a document, a codebase or a URL. Trigger phrases: "make an explainer video", "explain X in a video", "turn this doc into a video", "/video-explainer".

Source: https://github.com/petergyang/video-explainer (MIT, by Peter Yang). The original skill bundles the rendering engines and pipeline scripts (media fetching, voiceover, word alignment, render, QA, a browser review page). **This template carries the workflow and the craft rules; the scripts come from installing the skill** (see the playbook page). Without the skill installed, say so, and either help the user install it or build a plain HyperFrames composition by hand.

Output: one `renders/<slug>-vN.mp4` at 1920x1080 and 30 fps (or `9:16` / `1:1` on request), plus the `script.md`, `media/` and `graphics/` files that produced it.

## Before the first video

- Run the skill's `setup.sh` (or `setup.sh --voice` for spoken narration). If tools are missing, **list them with their install commands and ask before installing anything.** Plan for about 400 MB of downloads (about 1.4 GB with local voice).
- Needs ffmpeg, Python 3.10+, Node.js 22+. Optional: `yt-dlp` for web clips, Blender for custom 3D meshes.
- A Gemini API key is optional (Gemini TTS voices and Lyria music). It costs money, because billing must be enabled on the key. The user puts it in `~/.config/video-explainer/.env` themselves. **Never ask for a key in chat, and never make a paid Gemini call unless the user asked for that voice or music.**

## 1. Pick a mode

| Mode | Look | Relative cost |
| --- | --- | --- |
| `motion` (default) | Full-frame 2D kinetic graphics, live charts and routes, CSS 3D cards, press clippings | 1x tokens |
| `illustrated` | Hand-drawn picture-book look: gouache, pastel, paper grain, line boil | About 6x |
| `3d` | One continuous Three.js camera flythrough, studio lighting, bloom, optional Blender meshes | About 7x |

If the user named a mode or said "use defaults", go (`motion`, captions on). Otherwise show the three modes with their costs, ask about burned-in captions (on by default), and wait.

## 2. Research and write `script.md`

- Make one project folder with a short slug, containing `graphics/`, `media/` and `captures/`.
- **Verify every claim, number, quote and step** against the user's files or primary sources. No invented facts.
- Pull real images, clips or page captures when they ground the story, record the source and credit for each, and **look at every downloaded asset** before using it. Prefer openly licensed sources (Wikimedia Commons) and the user's own material. Ask before using clips from YouTube or other sites the user doesn't own.
- **Length:** 60 to 75 seconds, two minutes at most. About 135 to 185 spoken words over 5 to 8 scenes when voiced (100 to 150 words for ELI5), or 8 to 12 beats when silent. For a different length, write about 2.5 words per second. Cut tangents instead of speeding up speech.
- **Audience:** default is a smart non-engineer. No file paths, variable names, error codes, CLI flags or unexplained acronyms on screen or in speech. Switch to `eli5` or `technical` only on request.
- **Structure:** a hook in the first 3 seconds that reads with the sound off (a question, a tension or a number); follow one concrete example (one request, one dollar, one user) through every step; the last scene answers the opening question.
- **Spoken copy:** short sentences, active verbs, no throat-clearing openers, no "it's not X, it's Y" contrasts, no hype adjectives.
- **Headers:** `Mode`, `Aspect`, `Audience`, `Voice` (`kokoro:af_heart` local, `gemini:Kore` paid, an audio file, or `none`), `Music` (`synth:cosmic|warm|minimal`, a file, or `none`), `Sound effects`, `Captions`, `Style` (`default`, `paper`, `blueprint`).

Unless the user asked to approve the script first, continue straight to narration.

## 3. Narrate and align

Run the skill's `narrate.py` on the project. It synthesizes voice per scene, trims dead air, aligns each word, writes the timings back into `script.md`, and writes `work/transcript.md`. **Read the transcript before building graphics**, so animations and sound cues land on exact spoken words.

## 4. Build the visuals

- **Build on the bundled engines** (`ExplainerStage` for motion, `StoryBrush`/`IllustratedStage` for illustrated, `Studio3D` for 3D) instead of writing your own shaders or noise.
- **A moving film, never slides.** One hero visual fills 60 to 85% of the frame and visibly changes every 2 to 3 seconds: the camera moves, a path draws, objects morph instead of swapping. Text or cards on a flat background reads as a slide deck.
- **Readable labels:** 1 to 4 words, 28 px or larger, hero numbers 88 to 160 px, WCAG AA contrast, kept above the caption band.
- **Spend tokens where they show:** in illustrated and 3D, choose one setting and move the camera through it; build props and characters once and reuse them.
- **Deterministic frames:** bind updates to the engine's tick or draw callbacks, no `Math.random()`, and load 3D assets synchronously, so every render is identical.

## 5. Preview, QA, review, deliver

1. **Pre-flight:** a quick preview render and one tiled contact sheet to catch framing, contrast and whiteout bugs before a full draft.
2. **Draft and QA:** render a draft and run `qa.py`. All 10 checks must pass (dimensions, 30 fps, audio stream, A/V sync, duration cap, loudness of about -14 LUFS, peak at most -1 dBFS, black frames, frozen stretches, HyperFrames lint and contrast).
3. **Fresh-eyes check:** give the contact sheet and the opening frames to a fresh subagent (or judge them yourself) and ask: does any frame read as a slide? Do the first 15 seconds open on a striking visual that changes every few seconds? Does any art look like clip art? Fix every yes.
4. **Browser review:** start the review page, share its local URL, apply the user's frame-pinned notes, re-run narration only if spoken words changed, and repeat until they approve.
5. **Final:** final render, QA again, then ask the user to listen for voice pacing and music balance. Report the file path, duration and loudness.

## Before you say it's done

- The hook works with the sound off, and the ending answers it.
- Every fact is verified, and every image and clip is credited and was looked at.
- The video is under its length cap and matches the audience level.
- QA passed 10/10, and the contact sheet shows no slides, clipped text or frozen stretches.
- Every review note was applied.
