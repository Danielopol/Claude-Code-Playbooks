# Editly: Programmatic Video Editing With Node.js and ffmpeg

Use this when someone wants to assemble a video from code: a slideshow with titles, a promo or trailer from clips, a tutorial with help text, an animated GIF, a podcast with mixed audio tracks, or a batch job that resizes videos to a specific size, aspect ratio or frame rate.

Source: https://github.com/mifi/editly (MIT, by mifi). Editly describes an edit in a JSON, JSON5 or JavaScript "edit spec" and renders it with Node.js and ffmpeg. It streams the edit, so it is fast and needs little disk space.

## Requirements and install

- Windows, macOS or Linux
- Node.js (latest LTS recommended). **Editly is ESM only.**
- `ffmpeg` and `ffprobe` installed and on the PATH
- Linux may need extra system libraries for `headless-gl` (see https://github.com/stackgl/headless-gl#system-dependencies)

```bash
npm i -g editly
editly --help
```

Before running a global install, tell the user what it does. For a one-off project, a local install (`npm i editly` in the project folder) avoids a global change. A Docker route also exists in the repo README if the user doesn't want to install the system dependencies.

## Ground rules

- **Never overwrite source footage.** Always write to a new output path.
- **An edit spec can run code.** The `canvas`, `fabric` and `gl` layer types execute custom JavaScript or shader files the spec points at. Only run specs and referenced scripts the user wrote or has read. Show the user any custom `func` code before running it.
- **Keep remote requests off.** `allowRemoteRequests` is `false` by default, so remote URLs aren't accepted as media paths. Don't turn it on unless the user asks and trusts the source.
- **Respect licences.** For music and footage, check the licence. Editly doesn't give rights to media.
- Preview with `--fast` (low resolution and frame rate) before a full render.

## Quick command line edits

```bash
# a randomised edit from clips, images and titles, with a music track
editly \
  title:'My video' \
  clip1.mov clip2.mov \
  title:'My slideshow' \
  img1.jpg img2.jpg \
  title:'THE END' \
  --fast \
  --audio-file-path /path/to/music.mp3

# from a JSON5 spec, keeping the clips' own audio, writing a GIF
editly my-spec.json5 --fast --keep-source-audio --out output.gif
```

Without `--fast`, the output takes its width, height and frame rate from the **first input video**, and every other clip is converted to match. Override with `--width`, `--height` and `--fps`.

## The edit spec

```js
{
  outPath,                      // mp4, mkv or .gif
  width, height, fps,           // default width 640; height from the first video; fps from the first video or 25
  allowRemoteRequests: false,
  defaults: {
    duration: 4,
    transition: { duration: 0.5, name: 'random', audioOutCurve: 'tri', audioInCurve: 'tri' },
    layer: { fontPath },
    layerType: { 'fill-color': { color: '#ff6666' } },
  },
  clips: [
    { transition, duration, layers: [ { type, /* layer options */ } ] }
  ],
  audioFilePath, loopAudio: false, keepSourceAudio: false,
  clipsAudioVolume: 1, outputVolume: 1,
  audioTracks: [ { path, mixVolume: 1, cutFrom: 0, cutTo, start: 0 } ],
  audioNorm: { enable: false, gaussSize: 5, maxGain: 30 },
  fast: false,
}
```

- Clips play in sequence. Each clip has one or more **layers** overlaid in order (the last layer is on top). `clip.duration` falls back to `defaults.duration`, or to the first video layer's length if unset. A clip's `transition` plays at its **end**. Set `defaults.transition` to `null` to disable transitions.
- `start` and `stop` on a layer set when it appears and disappears within the clip.
- Use as a library: `import editly from "editly"; await editly(editSpec);`

## Layer types

| Type | Use |
| --- | --- |
| `video` | A video file. If the clip has a `duration`, the segment (`cutFrom` to `cutTo`) is slowed or sped up to fit. Supports `width`, `height`, `left`, `top`, `originX`, `originY` (0 to 1, relative to the screen) for picture-in-picture, and `mixVolume` |
| `audio` | Audio mixed with others, with `cutFrom` and `cutTo` (speed change limited to 0.5x to 100x) |
| `detached-audio` | Like `audioTracks`, but `start` is relative to the clip's start |
| `image` | Full-screen image |
| `image-overlay` | An image with a custom `position`, `width` and `height` (use `video` for animated GIFs) |
| `title`, `subtitle` | Text with `text`, `textColor`, `fontPath`, `position`. Keep titles short |
| `title-background` | A title over a `radial-gradient`, `linear-gradient` or `fill-color` background |
| `news-title` | A news-style lower third (default background `#d02a42`) |
| `slide-in-text` | Animated text with `fontSize`, `charSpacing`, `color` |
| `fill-color`, `pause` | A solid colour (random by default) |
| `radial-gradient`, `linear-gradient` | Two colours (random by default) |
| `rainbow-colors` | A rainbow fill |
| `canvas`, `fabric` | Custom JavaScript (`func`) for dynamic screens or overlays (HTML5 Canvas or Fabric.js) |
| `gl` | A GLSL shader via `fragmentPath` (and optional `vertexPath`), for example from Shadertoy |

**Resize modes** (`resizeMode`): `contain` (letterboxed), `contain-blur` (letterboxed with a blurred copy, the default), `cover` (cropped to fill), `stretch`.
**Position:** `top`, `bottom`, `center`, `top-left`, `top-right`, `center-left`, `center-right`, `bottom-left`, `bottom-right`, or `{ x, y, originX, originY }` with values from 0 to 1.
**Ken Burns** (on `image`, `image-overlay`, `title`): `zoomDirection` (`in`, `out`, `left`, `right`, or `null` to disable) and `zoomAmount` (default 0.1).

## Audio

- `audioFilePath` sets one track for the whole video (`loopAudio` loops a short one). `keepSourceAudio` keeps the clips' own audio.
- `audioTracks` start at arbitrary times and continue across clips. `clipsAudioVolume` is the volume of all clips' audio combined, relative to **each** audio track.
- Transitions automatically crossfade audio.
- `audioNorm` enables ffmpeg `dynaudnorm` normalisation, which also gives audio ducking (lowering other tracks when a voice-over speaks).

## Workflow

1. Ask what the video is for, the output size (1:1 post, 9:16 story or Reel, 16:9 YouTube, or custom), and which clips, images, audio and titles to use.
2. Write the spec, using simple defaults before fancy layers. Save it as `*.json5`.
3. Render a `--fast` preview and ask the user to check pacing, transitions and text.
4. Adjust, then render at full quality.
5. Report the output path and what the spec does.

## Troubleshooting

- `Error: The specified module could not be found`: try `npm un -g editly && npm i -g --build-from-source editly`.
- An error about `gl` returning null: check the Linux system dependencies for `headless-gl` listed above.
- `pkg-config: command not found`: use the newest Node.js LTS.
- A rendering that looks wrong with mixed input sizes: set `width`, `height` and `fps` explicitly instead of relying on the first video.
