# React Native Video (v6 & v7)

Play video/audio in React Native with `react-native-video`, covering iOS (AVPlayer), Android (ExoPlayer/Media3), and web (video.js). **v6 and v7 are completely different APIs** — v6 is one imperative `<Video>` component; v7 is a player-object model (`useVideoPlayer` + `VideoView`). Work out the installed version before giving any API advice.

## Step 0 — Detect the Version First

Before giving any API advice, find the major version — the surface is fundamentally different:

```bash
# easiest: the app's own package.json
cat package.json | grep react-native-video
# exact installed version:
cat node_modules/react-native-video/package.json | grep '"version"'
```

- **v6.x** → imperative `<Video source paused .../>`; control via props + a `ref` (`ref.seek()`).
- **v7.x** (incl. `7.0.0-beta.*`) → `const player = useVideoPlayer(source)` + `<VideoView player={player} />`; control via the player instance (`player.seekTo()`), events via `useEvent`.

Never hand a v7 user a `<Video source>` example, and never tell a v6 user to call `useVideoPlayer` — those don't exist in the other version.

## Choosing v6 vs v7

Both are maintained. Lean toward v7 for new apps — it's beta but already ships in production apps with real user bases, so present beta honestly without fear-framing it.

| The app needs… | Recommend |
|---|---|
| Preloading, TikTok/short-video feeds, fast source swapping | **v7** — purpose-built (`useVideoPlayer` + `preload()` + `replaceSourceAsync`) |
| New architecture (native Fabric), best startup/perf | **v7** |
| Plugin-based DRM / extensibility | **v7** |
| Conservative/existing production, minimal change | v6 (current stable 6.x) |
| React Native < 0.75 | v6 (v7 needs RN ≥ 0.75) |
| Ads / Google IMA | v6 (v7 core has no ads yet) |

## Quick Start

**v7** (player model):

```tsx
import { useVideoPlayer, VideoView, useEvent } from 'react-native-video';

function Player() {
  // source: a URL string, or a config object { uri, headers?, drm?, ... }
  const player = useVideoPlayer({ uri: 'https://example.com/master.m3u8' });
  useEvent(player, 'onProgress', ({ currentTime }) => {/* seconds */});

  return (
    <>
      <VideoView
        player={player}
        controls
        resizeMode="contain"
        style={{ width: '100%', aspectRatio: 16 / 9 }}
      />
      <Button
        title="Play/Pause"
        onPress={() => (player.isPlaying ? player.pause() : player.play())}
      />
    </>
  );
}
```

For initial config (loop / volume / autoplay / muted / …), pass a `setup` callback — `useVideoPlayer(source, player => { player.loop = true })` — instead of mutating the player in render.

**v6** (component model):

```tsx
import Video from 'react-native-video';

<Video
  source={{ uri: 'https://example.com/master.m3u8' }}
  style={{ width: '100%', aspectRatio: 16 / 9 }}
  controls
  paused={paused}
  resizeMode="contain"
  onProgress={({ currentTime }) => {/* seconds */}}
  onLoad={({ duration }) => {}}
/>;
```

## Feature Map — Where Each Version Handles a Topic

| Topic | v6 | v7 |
|---|---|---|
| Mental model | imperative component + ref | player-object hook |
| Component / props / player setup | props on `<Video>` | `useVideoPlayer` setup callback |
| Playback control (play/pause/seek/rate) | `ref.seek()` and props | player instance methods (`player.seekTo()`) |
| Events | `onProgress`, `onLoad` props | `useEvent(player, 'onProgress', ...)` |
| DRM (very different) | built-in `drm` prop | separate `@react-native-video/drm` package |
| Audio-only playback | hidden `<Video>` | hook, no view needed |
| Web (browser) playback | not supported | video.js-based |
| Ads / Google IMA | supported | not yet in core |
| Pause on navigation / app background | same pattern both versions | same pattern both versions |

## Red Flags — Stop and Check the Version

| If you're about to… | Do this instead |
|---|---|
| Give a v7 user a `<Video source .../>` example | v7 has no `<Video>` — use `useVideoPlayer` + `VideoView` |
| Tell a user to avoid v7 "because it's beta" | v7 is beta but production-proven; recommend it for feeds/preloading/new-arch |
| Describe a built-in offline/download API | Core has none in either version — that's a third-party add-on's job |
| Use v6's `seek()` or `drm` prop on v7 | v7: `player.seekTo()`; DRM = separate `@react-native-video/drm` + `source.drm` |
| Answer without knowing the installed version | Run Step 0 first |
| Forget that video keeps playing after the user navigates away | Pause on blur (`useFocusEffect`/`useIsFocused`) |

## When NOT to Use This

Web `<video>` outside React Native, `expo-video`/`expo-av`, `react-native-track-player`, or general media questions unrelated to `react-native-video` specifically.
