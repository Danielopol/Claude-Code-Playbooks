# Building Animations in Expo and React Native

A construction discipline for React Native animation that turns a request for motion into an implementation that survives a strict review on a real device — not the simulator, not a flagship phone in dev mode.

Mobile changes three things about animation, and everything below follows from them:

1. **There is no hover.** Every affordance the web puts in hover has to live in press, position, or nothing.
2. **There are two runtimes.** The React Native runtime, where React renders and app logic runs, and the UI runtime, where animation worklets run every frame. Anything that touches the RN runtime per-frame stutters the moment the app does anything else. The whole craft is keeping motion on the UI runtime.
3. **The user's finger is on the element.** Gestures are the primary input, so interruptibility and velocity handoff aren't polish — they're baseline requirements.

## Operating Posture

Make the animation decision yourself, state the reasoning in one line, and write the code — don't present motion options as a menu. Two failure modes exist, and the first is worse: animating something that shouldn't animate at all (the gate below exists to sometimes produce zero lines of code), and animating the right thing on the wrong thread (a `setState` per frame, a manually-managed animation loop, an animated layout property) — it looks fine in dev on a good phone and drops to 20fps on a three-year-old Android.

## Hard Rules

1. Run the sequence below in order — the first two steps gate everything that follows.
2. Use a real animation library built for the UI thread (Reanimated or equivalent), not the platform's basic `Animated` API — a gesture-driven animation that has to cross a JS bridge on every frame can't keep up, and `useNativeDriver`-style restrictions only cover transform and opacity anyway.
3. No approximated spring/curve values — use the tables below, not a guess.
4. Reduced motion ships with the animation, not as a follow-up.
5. Feel is judged on a release build on the slowest device you support — nothing else counts as verified.

## The Build Sequence

### 1. Should This Animate at All?

| Frequency | Decision |
|---|---|
| 100+ times/day — tab switches, keyboard open/close, scrolling, toggles | No animation. Platform default or nothing. Stop here. |
| Tens of times/day — press feedback, list navigation, row selection | Near-imperceptible only: under 150ms, or nothing |
| Occasional — sheets, modals, toasts, onboarding steps | Standard animation |
| Rare / first-time — success states, empty-state illustrations, celebration | The delight budget lives here |

Tab switches never slide — tabs are peers, not a hierarchy, and sliding implies depth that isn't there while the user pays for it dozens of times a session. If a request fails this gate, say so and don't build it.

### 2. What Is the Purpose?

Name it in one word before continuing: feedback, spatial consistency, state indication, preventing a jarring change, explanation, or delight (rare tier only). If you can't name it, don't build it.

### 3. Pick the Cheapest Tool That Fits

Walk down the list and stop at the first that fits the need — reaching for the most powerful tool by default is how a two-state toggle ends up driven by a full gesture-and-shared-value setup it doesn't need:

| Need | Tool |
|---|---|
| A state-driven change with no gesture (press, toggle, color, a value flipping) | A simple state-driven transition on the style |
| A loop, multi-stage animation, or something that plays on mount | A declarative keyframe animation |
| An element mounting/unmounting, or a list reflowing | Built-in layout animations (entering/exiting transitions) |
| Anything a finger touches, or anything derived from scroll | A shared value driven by gesture handlers, applied via an animated style |
| Screen-to-screen navigation | The navigation framework's native stack transition — never hand-rolled |
| A bottom sheet that's its own screen | A native sheet presentation, not a custom modal component |
| A tab bar | The platform's native tab bar component, with its real behaviors and transitions included |
| Context menu, press-and-hold preview | Native menu/peek primitives — never rebuilt in JS |
| A header that collapses into a large title | The native stack's built-in large-title behavior, not a hand-rolled scroll worklet |
| Pull to refresh | The platform's native refresh control — hand-roll only when it's a genuine signature interaction |
| UI that tracks the keyboard | A dedicated keyboard-tracking library that reads the keyboard's real frame-by-frame position on the UI thread |
| Vector illustration, celebration animation, empty state | A dedicated illustration/animation format (Lottie or equivalent) — for illustration only, never for UI state |
| A huge animated scene or freeform drawing | A canvas-based rendering library — for when the view hierarchy itself is the bottleneck |

Reach for a shared value only when the value is genuinely continuous or interruptible. A press scale is a simple state transition; a drag is a shared value.

### 4. Pick the Properties

- `transform` and `opacity` are free — everything else is a layout pass. Width, height, margin, padding, flex, and positioning properties re-run layout on every frame for that node *and its siblings*.
- The one exception: an absolutely positioned element with no children (a tab pill, a progress-bar fill) — it's out of flow, so nothing else re-lays-out, and animating width there keeps a corner radius that scaling would smear.
- Never animate from `scale(0)`. Start from `scale(0.9–0.97)` plus `opacity: 0` — nothing in the real world appears from nothing.
- Transform order matters — translate before scale unless you specifically want the scale to multiply the translation too.
- Android shadow properties (elevation) re-render the shadow every animated frame — animate the opacity of a pre-shadowed layer instead.
- Never animate a blur view's intensity — on Android it re-renders the blur every frame. Crossfade the opacity of a static blur layer instead.

### 5. Timing or Spring

If a finger was involved, use a spring — springs carry velocity through an interruption, while timing curves restart from zero. Everything else uses timing.

| Interaction | Config |
|---|---|
| Default settle, no overshoot | duration ~400ms, damping ratio 1 |
| Reposition / snap back after a drag | duration ~400ms, damping ratio ~0.8, with the release velocity passed in |
| Sheet, drawer | duration ~300ms, damping ratio ~0.8, with velocity |
| Must not pass a hard edge | add overshoot clamping |

Bounce only when the gesture carried momentum — overshoot on a menu that faded in feels wrong; overshoot on a card you flicked feels right.

**Easing** for anything without a finger on it:

| Situation | Easing |
|---|---|
| Entering or exiting | ease-out |
| Moving or morphing on screen | ease-in-out |
| Constant motion (a progress indicator, a marquee) | linear |
| Default | ease-out |

Never use ease-in on UI — it starts slow, delaying the exact moment the user is watching for the response. Use a real strong ease-out curve, not the library's weak default.

**Duration guidance:** press feedback 100–150ms; a toggle or small state change 150–200ms; a sheet/modal/drawer around 300ms perceived (as a spring); a screen transition — use the platform default, don't override it. Mobile UI animations stay under 300ms; match the platform's own transition length for navigation, and beat it everywhere else.

### 6. Keep It Off the JS Thread

The mobile-specific craft, and where most React Native motion actually dies:

- Never trigger a state update from a gesture or scroll handler — one re-render per frame is the single biggest cause of jank in RN apps. Drive the animation from a shared value applied directly to an animated style instead, so the UI thread never has to wait on a re-render.
- Never schedule work back onto the main JS thread from inside a per-frame gesture callback — that queues a cross-thread call dozens to over a hundred times per second. Do it only when a gesture actually ends, or when a value crosses a defined threshold.
- Never read or write a shared value directly during render — a read is a stale snapshot that never updates and silently desyncs; a write mid-render fires during reconciliation and can be replayed by a re-render you didn't cause. Touch shared values only inside worklets, handlers, and effects.
- Use whatever the animation library's compiler-safe accessor API is (rather than a direct property-style access) so a build-time compiler can see through it correctly.
- Any function called from inside a worklet needs to be explicitly marked as a worklet itself, or it throws at runtime on-device while appearing to work fine in a debugger.

### 7. Press, Not Hover

Every hover affordance from the web has to be redesigned for touch, not just ported over.

- Feedback on press-in, commit on press-out — waiting for the tap to fully complete before showing anything feels dead; this is the exact latency a user perceives.
- A small scale-down (roughly 0.97) over 100–150ms on any pressable element reads as physical because it takes the label and icon with it.
- Respect the platform's minimum touch-target size; if the visual is smaller, extend the hit area rather than growing the visual itself.
- Give a press a small retention offset so a finger drifting a few pixels doesn't cancel a press the user actually meant to make.
- Use a platform ripple effect only in an app styled to match that platform's own design language; in a custom-designed app, the same scale feedback on both platforms reads more coherent than a ripple on only one.

### 8. Haptics

A sense the web doesn't have. Used sparingly, it makes an app feel expensive; used everywhere, users turn it off entirely.

| Moment | Feedback |
|---|---|
| A value ticks past a step (a picker, a slider detent, a segmented control) | A light selection tick |
| Something snaps home, a sheet detent catches, a drag commits | A light impact |
| A heavy object lands, a destructive action fires | A medium impact |
| An operation succeeds or fails | A success/error notification pattern |

Three absolute rules: fire the haptic on the same frame as the visual (a lagged haptic reads as a glitch, not feedback); one per user action, never on scroll and never per animation frame; and never make haptics the *only* feedback — they're off system-wide for many users and silent on much Android hardware, so the visual always has to stand alone.

### 9. Reduced Motion and Accessibility

Reduced motion means fewer and gentler, not zero: keep opacity and color changes that explain a state change; drop translation, scale, parallax, and overshoot. A screen transition should degrade to a simple fade. Never animate to a hardcoded pixel height measured at default text size — a user with larger system text will break that measurement; measure the real layout, or animate a transform instead.

## Setup Pitfalls

Check these first whenever "the animation just doesn't run":

- Install animation and gesture libraries through the framework's own install command so versions match the project's SDK — a plain package-manager install can resolve an incompatible version silently.
- The gesture-handler root view must wrap the whole app, or gestures do nothing with no visible error.
- A modern animation library typically requires the platform's new architecture — confirm it's enabled.
- **A simulator or a debug/dev build is not a performance environment.** Judge feel only in a release build, and only on the slowest device actually supported — a dev build's JS thread is slow enough to hide exactly the problems worth catching.
- On high-refresh-rate displays, confirm the project actually opts into the higher frame rate for third-party animation — many platforms cap it by default unless explicitly enabled, and the frame budget at high refresh rates is roughly half what it is at standard rates, which is exactly why keeping motion off the JS thread matters even more on these displays.

## Never Ship

A legacy imperative animation API in place of a proper worklet-based one; a state update inside a gesture or scroll handler; scheduling cross-thread calls on every frame instead of at a gesture's end or a threshold crossing; reading or writing a shared value during render; the platform's basic animation API for anything a finger touches; animating layout-triggering properties instead of transform/opacity; animating a blur view's intensity or an Android shadow's elevation directly; a mount/unmount animation applied to a virtualized list row instead of its container; a hand-rolled screen transition instead of the native stack's own; sliding between tabs; a weak default ease-in on a UI element; a `scale(0)` entrance; a distance-only dismissal threshold with no velocity check; a hard stop at a boundary instead of rubber-band resistance; a haptic fired per frame or used as the only feedback; and judging feel anywhere but a release build on the slowest supported device.

## Output

Write the code, then in a few lines: state the gate result (the frequency tier and named purpose — including what was rejected and why, if anything was); the ingredients (tool, properties, spring or curve plus duration, and which thread it runs on); and what to feel-check on a real device (gestures, velocity handoff, and haptic timing can't be judged from code alone). The code is the deliverable — don't pad it into a report.

## Tips

- Be opinionated and brief. When the honest answer is "this shouldn't animate" or "this needs a real device before I can tell you if it's right," give that answer rather than hedging.
- The frequency gate in Step 1 is the highest-leverage check in the whole sequence — most janky, over-animated mobile UIs trace back to skipping it and animating something that gets triggered dozens of times a session.
- When a review flags stutter, check the JS-thread rules (Step 6) before touching timing values — a `setState` hiding inside a gesture handler causes far more visible jank than a slightly-off spring config.

## Limitations

- Specific to React Native and Expo — the underlying principles (interruptibility, velocity handoff, keeping animation off the main thread) generalize, but the concrete APIs and library names here don't transfer directly to native iOS/Android or to the web.
- Assumes a project already has (or can add) a real UI-thread animation and gesture library — without one, several of the "never ship" rules aren't achievable and the tool-selection table needs different entries.
- Feel verification genuinely requires physical devices across a performance range — a review done entirely in a simulator or on a single high-end device will miss exactly the problems this discipline exists to catch.
