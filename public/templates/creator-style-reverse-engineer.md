# Creator Style Reverse-Engineer

Use this when the user shares a video from a creator they admire and wants to know how it's made: "break down this creator's style", "transcribe the script", "give me a replication plan", or "reverse-engineer this video". Based on a workflow shared by The Startup Ideas Podcast (@startupideaspod): https://x.com/startupideaspod/status/2033232665823113471

The core prompt:

> Break down the style, transcribe the script, and give me a replication plan.

One video in, a full style guide out. Do this for several creators the user admires, then mix what they like from each into a style of their own. The goal is to learn the techniques behind a video, not to copy the creator's content.

## What you can and can't perceive

You have no direct video or audio input. Be honest about that, and work from evidence you can actually get.

1. **Get a transcript.** Ask the user for one, or for the video file or URL. If a tool for turning videos into frames plus a timestamped transcript is available (for example a "claude-video" style setup), use it. If `ffmpeg` and a local transcription tool are installed, you can use them, but ask before installing anything.
2. **Get frames.** Extract still frames at scene changes and at regular intervals (for example with `ffmpeg`), then look at them as images. Cover the opening seconds, each visual change, and the ending. If you can't get frames, ask the user to supply screenshots, and say what you can't assess without them.
3. **Audio.** You can't hear the music. Estimate tempo only from a tool's output (for example a BPM detector) or from the user's description. Otherwise mark music, sound design, and voice delivery as **not assessed** and ask the user what they hear.
4. **Label everything.** For each observation say whether it was **observed** (from a frame, transcript line, or tool output, with a timestamp), **inferred**, or **not assessed**. Don't invent camera models, software, or settings. Say "looks like" when you're guessing.

## Step 1: Break down the style

Cover each of these, citing timestamps:

- **Concept and hook.** The idea in one sentence, how quickly it's understood (a good hook can be explained in under 10 seconds), and whether there is a visual payoff shown immediately.
- **On-camera look.** Framing and orientation (vertical or horizontal), lighting (direction, color, practical lights), set or background, wardrobe, props, and what the creator holds or shows.
- **B-roll.** The types used (for example close-up detail shots, screen recordings, product reveals), how long each lingers, and where they sit in the story.
- **Graphics and effects.** Explainer graphics, line art, glow, overlays, transitions, and what they seem to be made with.
- **Typography.** Title cards, section headers, and captions (for example word-by-word), plus fonts, colors, and placement.
- **Pacing and structure.** Cut rhythm, shot length, and how the video moves through acts (for example Hook → Conflict → Build → Resolution → CTA).
- **Music and sound** (only if you have evidence): tempo, mood, and where it shifts.
- **Emotional arc.** How tension and payoff are built, and where the viewer's attention is likely re-won.

## Step 2: Transcribe the script

Produce a timestamped transcript. If one was supplied, clean it up without changing the meaning, and flag anything unclear instead of guessing. Then summarize the script's structure: opening line, main beats, turns, and the call to action. Quote sparingly. The transcript is for analysis, not for reuse.

## Step 3: Write the replication plan

Turn the breakdown into a plan the user can follow to make their own video in the same style, with their own subject. Use these steps as the skeleton, adapting each to what the video actually does:

1. **Define the concept hook.** One sentence, explainable in under 10 seconds, with a visual payoff you can show immediately.
2. **Film the talking head.** Setting, lighting, orientation, and what to hold or show on camera.
3. **Capture the B-roll.** The specific shot types to film, and how to light and frame each.
4. **Build the explainer graphics.** The look, the tools, and a speed-versus-control tradeoff.
5. **Design the typography system.** Title card, section headers, and captions, decided before editing starts.
6. **Edit to the structure.** The act structure with approximate timings.

For every step give the reason it works, so the user learns the technique. Replicate the **techniques**, not the creator's script, footage, music, branding, or distinctive identity. If something in the video can't be copied without borrowing too closely (a signature catchphrase, a logo, a unique character), say so and suggest a way to make it their own.

## Step 4: Save it

Save the result as `styles/<creator-or-video-name>.md` with sections for Breakdown, Script structure, and Replication plan, plus a short list of **not assessed** items. Add the source URL and the date.

## Step 5: Build a style of your own

When the user has analyzed several creators (the workflow suggests about ten), offer to combine them. Read the files in `styles/`, then:

1. Make a table of techniques across creators (lighting, hook style, B-roll, graphics, typography, structure, pacing).
2. Ask the user which techniques they like from each creator. Don't decide for them.
3. Write a `my-style-guide.md` mixing their choices into one coherent style, resolving conflicts (for example two incompatible lighting looks) and explaining each decision.
4. Suggest a small first test video to try the style, and which parts to refine after seeing it.

## Ground rules

- Be specific. "Dark room, cool-toned edge light, subject lit from the left" beats "moody lighting."
- Credit uncertainty. Mark anything you couldn't observe.
- Don't reproduce a creator's full script, footage, music, or branding, and don't suggest the user pass off another creator's work as their own.
- Respect each platform's terms when downloading or analyzing videos.
