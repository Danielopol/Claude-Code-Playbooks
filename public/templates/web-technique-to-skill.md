# Web Technique to Skill

Turn a visual or interaction technique you already built into a reusable web-design skill, by isolating the one mechanism that makes it work while reproducing its approved reference exactly around that focus, and packaging it with a demo that proves both the mechanism and the visual fidelity. Use this when a page, canvas scene, shader, scroll effect, layout system, or hover interaction turned out well and should become a skill instead of staying trapped in one project.

Extract one mechanism per skill. A page that turned out well usually holds several distinct techniques — package them separately or each one gets diluted.

## Name the Mechanism in One Sentence

Write this sentence before anything else: *the one thing that, if removed, makes the effect stop working.* If you can't write it, you have a look, not a mechanism — there's no skill here yet.

The sentence decides everything downstream. For a leaf-fall animation, it might be "the tumble crosses edge-on, and that instant of near-disappearance is what the eye reads as a leaf" — so the sprite artwork, the palette, and the scene are all staging, and the tumble motion itself is the skill.

Test it: change the subject, palette, and layout in your head. If the sentence still holds, it's the mechanism. If it stops making sense, you named the staging instead.

## Name the Demo and Disclose the Stack

Use the concrete technique name for the visible page title, not an abstract description of the behavior — "Wisps," "Cursor Ripples," "Liquid Metal Border," "Scroll-Scrubbed Word Reveal." "Draw at any speed" describes behavior but doesn't tell anyone what the demo actually is.

Put the verified implementation stack directly above or below the title, in order:

1. The runtime or framework (Vanilla JavaScript, React, Vue).
2. The renderer or browser API (Canvas 2D, WebGL, DOM/CSS, SVG).
3. The technique layer, when present (GLSL shaders, Three.js, GSAP, ScrollTrigger).

Write "Vanilla JavaScript · Canvas 2D" or "Three.js · WebGL · GLSL" — never "interactive experiment." Verify from the source, never guess from the look: `getContext('2d')` is Canvas 2D, not a shader; `WebGLRenderer` plus `ShaderMaterial` is Three.js/WebGL/GLSL. When the visual could be mistaken for a more complex stack, state the absence plainly — "No WebGL, shaders, or Three.js." Separate the effect stack from the interface stack when they differ: "Vanilla JavaScript + Canvas 2D effect; CSS interface," not a list that implies both render the particles.

## Split Mechanism From Staging

Sort every part of the source into three piles and keep only the first in the skill:

| Pile | Goes where | Examples |
|---|---|---|
| Mechanism | The skill | The math, the state model, the ordering constraint, the budget |
| Staging | The demo only | Palette, copy, imagery, page layout, brand |
| Incidental | Nowhere | Selector names, a font choice, a one-off asset path |

Strip project selectors and incidental asset paths from the reusable mechanism in the skill body. Keep the reference's staging in the demo — the same owned brand, palette, type treatment, composition, and motion hierarchy. Isolate the technique by narrowing what the demo teaches and controls, not by inventing a different visual world.

## Anchor Every Rule to the Failure It Prevents

State the wrong result, not the right adjective. A rule with a named failure is testable; a rule without one is decoration.

- Weak: "vary the particle rotation for a natural feel."
- Strong: "drive rotation from the tumble angle, ninety degrees out of phase. An independent sine reads as a wobble or as an easing bug."

If you can't name what goes wrong, you probably never tested the alternative — the rule may not be real. Cut it or go find out.

## Carry Numbers, Not Adjectives

Ship the constants you actually landed on. "Subtle" is unusable; `0.3–0.5` is a starting point someone can adjust. Include ranges per layer or state, timing and easing, size and spacing, budgets (`dt` clamp, DPR cap, instance counts), and any formula trading one quantity against another. Where a value was tuned by measurement rather than taste, say what was measured. Prefer a small table over prose when three or more parameters vary together.

## Keep the Expensive Gotchas

The rules worth the most are the ones that cost hours and can't be re-derived by reading the code. They're usually one of:

- **Color space** — a value that looks right in the editor and wrong on screen because something decodes or tone-maps between the two.
- **Layout timing** — code that measures once and is correct only if layout already happened; the fix is an observer, not a longer timeout.
- **Stacking and compositing** — an element that can't rise above another because of a stacking context created three ancestors up.
- **Ordering** — two correct operations that are wrong in one order.
- **Platform quirks** — a property that silently no-ops on one engine.

Write these as their own rule, symptom first, so the reader recognizes the bug they're currently staring at.

## Declare the Boundary in the Opening Lines

Name the nearest existing skill and say when to reach for it instead. Search for existing skills covering a similar mechanism before starting — extend an existing one rather than adding a near-duplicate. Two skills that both "add particles" with no stated boundary means neither gets picked correctly.

## Fold in Accessibility and Lifecycle

For web-design skills, these are part of the mechanism, not an appendix:

- Under `prefers-reduced-motion: reduce`, render a designed still frame — don't hide the effect, since the composition was built with it in mind. Keep controls live so they still do something.
- Pause on `document.hidden` and when the section leaves the viewport. Reset the time base on resume so the first frame doesn't integrate the whole pause.
- Clamp `dt` to about 1/30s. Cap device pixel ratio at 2.
- Size from a `ResizeObserver`, and guard any build step against a zero viewport.
- Keep controls as real form elements — keyboard reachable, with visible focus and a live region for changes.

## State the Cost Honestly

Say what's actually expensive, and measure before claiming it — the part that looks heavy often isn't. Name the real bottleneck, the cheap lever, and the thing that doesn't matter. Report the lever that buys the most for the least: for a recycled particle field, tightening the spawn band beats raising the count, since on-screen density goes as count ÷ area.

## Record Where the Design Came From

Write one line naming the source: what the project was, and what the mechanism was doing in it. A reader decides whether the skill applies to them by understanding the context it survived — "extracted from a dark WebGL night scene where it had to stay legible over type" tells them more than any amount of abstract description.

## Direct the Demo

The demo is the only evidence most readers will ever see — they will not read the source project, and they will judge the technique by this one file. A mechanism that shipped on a considered page, demonstrated by something that looks like a test harness, reads as unfinished, and nobody reaches for a skill that looks unfinished. So the demo inherits the craft bar of the source, not the craft bar of a code sample.

- **Treat the approved reference as an acceptance target, not inspiration.** Reproduce the same first frame, layout geometry, palette, type treatment, asset scale, and motion hierarchy around the isolated mechanism. Do a layer-by-layer inventory before coding. Someone opening the demo should identify the source immediately.
- **Use the reference's own assets, by porting the code that makes them**, not by hand-rolling an approximation — a hand-rolled CSS approximation of a procedurally generated moon is visibly flatter than the real generator, and the gap is obvious side by side.
- **Owned reference assets cross with the technique when they're necessary for fidelity**, and their provenance gets recorded. What must not cross is anything not owned: a client's brand, licensed fonts, purchased imagery, or third-party media.
- **Show the mechanism on the first screen** — before any scroll, before any interaction. If it takes a click to see the point, the framing is wrong.
- **Verify the whole state path when the mechanism spans time or scroll** — the opening frame must establish the world, but a perfect hero doesn't excuse a broken third chapter; check every authored key state plus forward, reverse, fast-skip, and reload-at-depth.
- **Preserve layout-defining reference copy.** Keep it exactly if changing the headline would change the approved composition; put the technique name and stack in the browser title and the reference's own secondary panel or microcopy instead. Never leave the implementation unidentified.
- **Keep a family.** Two techniques pulled from the same reference should produce two demos that look like siblings — a library of demos sharing a reference reads as a body of work; one where each invents its own world reads as scraps.
