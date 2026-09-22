# Build Three.js Scroll Worlds

Build rich, scroll-controlled real-time Three.js experiences as one persistent 3D world whose camera, lighting, atmosphere, materials, objects, DOM story, and interactions evolve across authored chapters — native document scroll as a deterministic conductor. Use for 3D scrollytelling, scroll-driven WebGL worlds, camera journeys, interactive portfolios, product stories, exhibitions, explainers, and multi-scene spatial narratives.

The mechanism is **one persistent Three.js world + one normalized, reversible scroll state**. If removing either would collapse the experience into stacked sections, this approach applies. Route to a simpler technique instead when: it's a single interactive scene with no scroll-authored journey (plain Three.js), the choice is between real-time 3D and pre-rendered video (evaluate that tradeoff first), or the content is really a video/image sequence scrubbed by scroll (not true 3D).

## Start With the Output, Not the Template

Determine what the world is for — a landing page, portfolio, museum chapter, product explanation, game teaser, editorial essay, data story. Do not force every request into a hero-plus-CTA layout. Discover only what's unknown: the subject, audience, and ordered story beats; the art direction and emotional arc; whether the world is continuous, portal-connected, or composed as adjacent sets; target devices and minimum acceptable hardware; how interactive the world should be beyond scrolling; available models/textures/brand assets/audio/copy; the initial-load and total-download budget.

## Write the World Bible Before Code

Define one reusable visual grammar: scale system and unit convention; silhouette language and stylization level; palette and per-chapter accent progression; material families and wear logic; key/fill/rim/practical/emissive light roles; fog/haze/particles/weather/post-processing; typography, DOM composition, and near-plane foreground rules; motion grammar for camera, ambient objects, and interactions. Every visible detail must support the same world — random noise, unrelated texture packs, and one-off materials create complexity without cohesion.

## Author a Scene Ledger

Use 4–8 chapters for most experiences. Store the full contract as data rather than scattering thresholds through CSS and the render loop:

```js
const chapters = [
  {
    id: "threshold",
    scrollWeight: 1.25,
    copy: {
      eyebrow: "Chapter 01",
      title: "Enter the archive",
      body: "A spatial collection revealed through motion."
    },
    camera: {
      position: [0, 3.8, 13.5],
      target: [0, 2.4, -8],
      fov: 38,
      mobile: { position: [0, 4.8, 18], fov: 46 }
    },
    world: {
      key: 1.0,
      practicals: 0.35,
      fog: 0.018,
      particles: 0.25,
      grade: "cold"
    },
    focus: ["gate", "lantern-left"],
    interactions: ["inspect-gate"],
    assets: ["gate-shell", "stone-1k", "mist-atlas"]
  }
];
```

For each chapter, record the story beat, landmark, camera endpoint, occluders, light/fog state, active animation clips, interaction targets, DOM beat, foreground treatment, asset dependencies, and responsive override. Reject a chapter that differs only by copy — that's not a new scene.

## Build One Persistent Spatial Architecture

Create these systems once, never per chapter:

```text
WebGL canvas
  worldRoot
    environment       sky, terrain, distant silhouettes
    architecture      persistent landmarks and paths
    chapterSets       local props grouped for culling and loading
    interactives      raycast targets and animation state
    atmosphere        fog volumes, particles, weather
    nearPlane3D       optional camera-relative depth accents

DOM above canvas
  semantic chapters  headings, copy, links, media, fallback order
  fixed interface    progress, chapter navigation, controls
```

Use one renderer and normally one scene; use layers or render passes only when transparency, post-processing, or interaction isolation requires it. Never instantiate one renderer per chapter or rebuild the world at seams. Choose a topology deliberately: **continuous geography** (landmarks share one navigable space — strongest presence, highest cost), **connected sets** (rooms/islands joined by tunnels, gates, or darkness — easiest to art-direct and stream), or **layered reveal** (the same place changes through time/scale/state). Hide unavoidable discontinuities behind occlusion, darkness, dense atmosphere, or a close foreground pass — never let an object visibly teleport in open space.

## Give the World Real Detail

**Geometry:** establish the large silhouette first, then medium forms, then small accents — a dense scatter of tiny props cannot rescue a weak silhouette. Give architectural edges believable bevels, joints, and contact points. Use modular kits, instancing, and LODs instead of duplicating unique geometry.

**Materials:** use a coherent PBR stack — base color, normal, roughness, AO, metalness, emissive, alpha/transmission — matched to the role each map actually plays; a common failure is normal strength too high (looks like rubber) or flat roughness everywhere (looks like plastic). Set color textures to sRGB and keep data textures (normal, roughness, AO) linear. Make wear causal: exposed edges polish, recesses collect grime, paths compress vegetation — uniform grunge reads as a filter, not weathering.

**Lighting and atmosphere:** start with one authored key direction, a restrained fill, and practical emissive sources; add lights only when they create a visible relationship. Keep shadow-casting dynamic lights to roughly 1–2 on mobile, 2–4 on desktop. Use fog and haze to separate depth planes, not merely darken the scene.

## Map Native Scroll to Deterministic State

Convert `scrollY` into a fractional chapter value (e.g. `2.35`), measured only after fonts and critical media settle. Keep separate exact and smoothed values:

```js
rig.target = progressFromScroll(scrollY);       // exact, reproducible story state
rig.smooth = reduceMotion
  ? rig.target
  : damp(rig.smooth, rig.target, 5.2, dt);      // cinematic render state
```

Use exact progress for navigation, URLs, accessibility, and interaction gating; use smoothed progress for camera and visual interpolation only. Keep native scroll as the single source of truth — never integrate wheel delta into story position directly. The same scroll position must recreate the same state forward, backward, after a fast jump, and after reload.

## Author the Camera as Cinematography

Compose every chapter endpoint at desktop and mobile before interpolating. Store position, target, FOV, optional roll, and responsive overrides. Use Catmull–Rom curves for broad continuous travel and segment interpolation for deliberate turns. Parameterize by chapter progress, not raw curve arc length, so pacing stays intentional. Camera motion must expose new spatial relationships — approach, reveal, passage, scale change, inspection, departure. Six dolly-ins at the same center are not six scenes.

## Interpolate World State From the Same Conductor

Resolve the adjacent chapters once per frame and interpolate their declared values:

```js
const { a, b, t } = segmentState(rig.smooth);
moon.scale.setScalar(lerp(a.world.moon, b.world.moon, t));
key.intensity = lerp(a.world.key, b.world.key, t);
scene.fog.density = lerp(a.world.fog, b.world.fog, t);
```

Prefer continuous physical change (occlusion, material blend, animation-mixer weight, light, fog, scale) over hard swaps. When swapping assets, crossfade only within an occluded or atmospherically dense interval and keep both states loaded until the transition completes.

## Add Interactions Without Fighting Scroll

Scroll owns macro movement; pointer/touch/keyboard interactions own local response. Raycast against named proxy meshes, not every decorative triangle. Define `idle`/`hover`/`focused`/`active`/`unavailable` states per interactive object. Let hover warm light, shift material response, or trigger a short animation — never move the scroll camera off its path. Mirror every essential hotspot with a DOM button or link in document order, with a visible focus state synchronized to the 3D object. Keep hit targets at least 44 CSS px.

## Keep the DOM Story Semantic

Headings, body copy, links, controls, and the footer live in real HTML above or beside the canvas — the 3D world creates place, the DOM carries meaning and fallback order. Reveal eyebrow/heading/body/media/proof/CTA as independent beats. Keep the reading block stable while the camera makes its largest move.

## Load Progressively

Inline or preload the critical shell, camera, first-scene geometry, smallest environment, and a fallback poster so the first authored frame completes fast. Prefetch one or two chapters ahead. Decode textures off the main interaction path. Keep a designed poster and semantic DOM visible if WebGL, a model, or a texture fails. Report progress by required asset weight or completed groups — never an arbitrary timer.

## Hold a Measurable Performance Budget

| Budget | Mobile | Desktop |
|---|---:|---:|
| DPR cap | 1.25–1.5 | 1.5–2 |
| Visible triangles | 150k–300k | 500k–1.2m |
| Draw calls | 50–90 | 90–160 |
| Shadowed lights | 1–2 | 2–4 |
| Simultaneously blended full-screen layers | 2 | 3 |
| Critical initial transfer | 3–6 MB | 5–10 MB |
| Steady frame time | ≤16.7ms ideal, ≤25ms fallback | ≤16.7ms |

Starting envelopes, not success claims — profile on the actual target device. Cap `dt` near 1/30s after stalls, pause on `document.hidden`, and use a quality governor that lowers DPR and optional effects before deleting authored landmarks.

## Respect Motion, Access, and Failure

Preserve native reversible scroll — never trap the wheel or force a custom scrollbar. Under reduced motion, snap camera/state to the nearest composed chapter, stop ambient loops and stagger/blur, and retain the complete ordered DOM story. Keep a real heading hierarchy, landmarks, visible focus, and a reachable footer. Provide a composed poster or chapter stills when WebGL is unavailable.

## Verify the Whole Journey

At minimum, verify: every camera endpoint at common desktop/tablet/mobile viewport sizes; slow, fast, reverse, scrollbar-drag, anchor-navigation, reload-at-depth, and resize between chapters; material scale, texture color space, shadow stability, fog depth, and post-processing; hover/focus/tap/activation and interaction recovery after scrolling away and back; first-load poster, progressive loading, failed asset, context loss, and hidden-tab resume; reduced motion, WebGL fallback, keyboard order, and a clean console; target-device frame time, draw calls, triangles, texture memory, and transfer size.

## Deliver

Hand off: the world bible and art-direction constants; chapter, camera, material/texture, interaction, asset, and performance ledgers; a layer and scene-graph map; the working experience and local runtime assets; desktop/tablet/mobile evidence from representative chapters; measured performance and loading results; fallback/reduced-motion evidence; and remaining visual, interaction, or device gaps stated plainly.
