# Motion Canvas: Programmatic Explainer Animations in TypeScript

Use this when someone wants informative vector animations (diagrams, code walkthroughs, maths and algorithm visualisations, animated explainers) written as code and synchronised with a voiceover. Trigger phrases: "Motion Canvas", "animate this diagram in code", "make an explainer animation synced to my narration", "visualise this algorithm".

Source: https://github.com/motion-canvas/motion-canvas (MIT). Docs: https://motion-canvas.github.io/docs/. Motion Canvas is a TypeScript library that describes animations with generator functions, plus a browser editor with a live preview, a timeline and an audio track. These notes target version 3.x; check `package.json` for the installed version and the docs when an API doesn't match.

## How a project is set up

- Scaffold: `npm init @motion-canvas@latest` (choose TypeScript, and the Video (FFmpeg) exporter if the user wants an MP4), then `npm install` and `npm start`. The editor runs at http://localhost:9000/.
- `src/project.ts` lists the scenes: `makeProject({ scenes: [intro, main] })`, with each scene imported as `./scenes/intro?scene`. **The `?scene` suffix is required**; without it the editor won't load or hot-reload the scene.
- Each scene is `export default makeScene2D(function* (view) { ... })`. Add nodes with JSX (`view.add(<Circle ... />)`), then `yield*` the animation.
- Voiceover: put the file in `audio/`, `import audio from '../audio/voice.mp3'` in `project.ts`, and add `audio` to `makeProject`. The offset can be set in the editor.

## The mental model

- A scene is a generator. Each `yield` means "this frame is ready, draw it". `yield*` hands control to another generator, which is how tweens and helpers run.
- **Never forget the star.** `yield* node().x(300, 1)` animates over 1 second; `node().x(300, 1)` without `yield*` does nothing.
- Get nodes with references: `const circle = createRef<Circle>()`, then `ref={circle}` in JSX and `circle()` to use it. For lists, `createRefArray<Circle>()`.

## Animating

- **Property tweens:** `yield* circle().position.x(300, 1)` tweens to a value over a duration in seconds. Chain with `.to(-300, 1)`. Default timing is `easeInOutCubic`; pass another as the third argument (`easeOutCubic`, `linear`, and the rest from `@motion-canvas/core`).
- **Setting without animating:** call the property with a value and no duration, `circle().fill('#e13238')`.
- **Custom tweens:** `yield* tween(2, value => { ... map(-300, 300, easeInOutCubic(value)) ... })`.
- **Signals** are reactive values: `const radius = createSignal(1)`; a derived signal `createSignal(() => Math.PI * radius() * radius())` updates automatically. Pass signals into node props to keep elements in sync instead of animating each one. `yield* radius(4, 2)` tweens a signal.
- **Flow helpers** (`@motion-canvas/core`):
  - `all(a, b)`: run together, finish when all finish
  - `any(a, b)`: finish when the first finishes
  - `chain(a, b)`: one after another
  - `sequence(0.1, a, b, c)`: staggered starts
  - `delay(1, a)`: start later
  - `loop(n, i => ...)`: repeat a fixed number of times
  - `waitFor(seconds)`: pause
- **Scene transitions:** `yield* slideTransition(Direction.Left)` (also `zoomInTransition`, `zoomOutTransition`, `fadeTransition`) at the start of the next scene, after adding its nodes.

## Sync to the voiceover with time events

Don't hard-code pauses like `waitFor(3.14)` to line up with narration. Use named events:

```ts
yield* animationOne();
yield* waitUntil('handshake');
yield* animationTwo();
```

Each `waitUntil('name')` creates an event marker on the editor timeline. The user drags it to the spoken word, and the animation follows without code changes. `useDuration('name')` gives an event's length to use as a tween duration. Name events after what is said at that moment.

## Working style

- Build one scene at a time and keep scenes short; split a long explainer into several scenes.
- Keep layout in signals and layout props (flexbox-like `Layout` nodes) rather than hard-coded coordinates when elements must stay aligned.
- Animations don't rescale with resolution. Fix the resolution early (Video Settings) and design for it.
- After each change, ask the user to check the preview in the editor (it hot-reloads) before moving on.

## Rendering

Rendering happens in the editor, not from a command: open **Video Settings**, choose the exporter (Image sequence for a video editor, or Video (FFmpeg) for an MP4, with "include audio" if audio is set up), set the range and resolution, and click **Render**. Output goes to the project's `output/` folder. Tell the user this step is theirs; don't claim you rendered the video.

To add the video exporter to an existing project: `npm install --save @motion-canvas/ffmpeg`, then add `ffmpeg()` to the plugins in `vite.config.ts` (see the docs' rendering page).
