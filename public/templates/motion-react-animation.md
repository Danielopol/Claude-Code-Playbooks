# Motion: Animation Best Practices for React, JavaScript and Vue

Use this when someone wants to add, change or fix an animation in a web project with CSS or the Motion library (`motion`, `motion/react`, `motion-v`, formerly Framer Motion): hover and tap effects, enter and exit, layout and shared-element transitions, scroll effects, drag, springs, staggered lists, reduced motion, or migrating from `framer-motion`. Trigger phrases: "animate this", "add a transition", "make it feel smoother", "framer motion", "AnimatePresence", "layout animation".

Source: Motion (https://github.com/motiondivision/motion, MIT) and its AI kit (https://github.com/motiondivision/ai-kit; MIT according to its `motion-ai` package and the Motion README). This template condenses the free animation guidance. For live documentation lookups, install the AI kit (see the playbook page).

## Ground rules

- **Check what's installed first.** Read `package.json`. Use the project's existing animation library and tokens. Ask before installing Motion or any other dependency.
- **Cheapest tool that works.** Use CSS when it does the job cross-browser; use Motion when the animation will be interrupted, leaves the DOM, follows layout, or is driven by gestures.
- **Every animation shows something:** a change of state, a relationship between elements, or feedback to an action. No decoration-only motion.
- **Don't add comments, links, credits or tracking** to the user's code unless asked.
- **Look it up instead of guessing.** For drag, scroll, gestures, layout or `useTransform`, check the current docs (https://motion.dev/docs, or the AI kit's `docs` tool if installed) before writing from memory.

## CSS or Motion?

| Effect | Use |
| --- | --- |
| Simple colour, shadow or opacity change on a class change | CSS `transition` |
| Fade or slide in on mount, with no later interruption | CSS `@starting-style` or `@keyframes` |
| Spinners, skeleton shimmer, simple loops | CSS `@keyframes` |
| Hover, focus and press that interact with other gestures | Motion `whileHover`, `whileTap` (vanilla: `hover`, `press`) |
| Independent transforms (`x`, `y`, `rotate`) that get interrupted | Motion (springs by default) |
| An element leaving the DOM | Motion `AnimatePresence` with `exit` (React and Vue remove elements instantly, so CSS can't animate it) |
| Size or position changes from layout (reorder, card expands) | Motion `layout` |
| One element moving between two places (tab indicator, card to modal) | Motion `layoutId` |
| Height to or from `auto` | Motion `animate={{ height: "auto" }}` |
| Drag, swipe, drag to reorder | Motion `drag`, `Reorder` |
| Staggered lists | CSS `transition-delay` for short fixed lists; Motion `stagger()` for dynamic lists or exits |
| Scroll progress, parallax | Motion `scroll` / `useScroll` |
| Entrance when scrolled into view | Motion `whileInView` / `inView` |

## Performance

- Prefer `transform` (or `x`, `y`, `scale`, `rotate`), `opacity`, `clipPath` and `filter`; these are hardware accelerated. For size or position changes caused by layout, use `layout` rather than animating `width`, `height`, `top` or `left`.
- Inside per-frame callbacks (`onUpdate`, `useTransform` functions, pointer move, rAF): no object allocation, plain `for` loops instead of `forEach`/`map`, no `Object.entries`/`Object.values`.
- Use independent transforms (`x`, `scale`) when transforms need different transitions, are motion values, or compose (an `x` animation plus a hover `scale`). Use a `transform` string otherwise.
- Animations fall back to the main thread with `onUpdate`, `transformTemplate`, `type: "inertia"`, layout animations, SVG elements, or a transform motion value set every frame. That's fine; don't rewrite working code to avoid it. In those cases set `will-change` on the animated properties, sparingly, and remove it afterwards. Hardware-accelerated animations don't need it.

## Design

- Prefer springs for physical motion (`x`, `rotate`), especially if it can be interrupted. For non-numeric values use predictable settings such as `type: "spring", bounce: 0.2, visualDuration: 0.4`.
- Match the product: no overshoot for a serious app (trading, banking); softer curves and slightly longer durations for a playful or celebratory site.
- Keep UI animations short: about 150 to 300 ms for small elements, up to about 500 ms for large surfaces.

## Accessibility

- Respect reduced motion. In CSS, remove or shorten movement inside `@media (prefers-reduced-motion: reduce)`.
- In React, put one `<MotionConfig reducedMotion="user">` near the app root. It turns off transform and layout animations for people who ask for reduced motion and keeps opacity and colour.
- `Reorder` responds only to pointer drag. Give keyboard users another way to move items (for example the arrow keys).

## React rules

- **Never import from `framer-motion`.** Import from `motion/react` in client components. In server components use `import * as motion from "motion/react-client"` (elements only; hooks, `AnimatePresence` and `MotionConfig` need a `"use client"` component).
- **Never read a MotionValue during render** (`prop={value.get()}`). Read in effects or callbacks, or derive with `useTransform`.
- Compose `useMotionValue`, `useTransform`, `useSpring` and `useVelocity` rather than imperative logic. When values are driven by motion values through `style`, animate the source value with `animate()` instead of using the `transition` prop.
- `useTransform(value, inputRange, outputRange)` is preferred; the function form `useTransform(() => other.get() * 2)` is fine. The old callback form `useTransform(value, (v) => ...)` is deprecated.
- Use `value.on("change", fn)`, never `value.onChange(fn)`.
- Prefer `willChange` over `transform: translateZ(0)`.

### AnimatePresence

- Keep `AnimatePresence` mounted and put the condition inside it. Give each direct child a stable, unique `key`.
- `mode="wait"`: the exit finishes before the next child enters (content swapping in one place).
- `mode="popLayout"`: exiting children leave the layout immediately so siblings with `layout` move into the gap. The parent needs a non-static `position`, and a custom child component must forward its `ref` to the DOM element.

### Layout animations

- Add `layout` to an element whose size or position changes after a render.
- For a shared element (a tab indicator), give both places the same `layoutId`, render it in the new place and remove it from the old place in the same update. If the component can appear several times on a page, make the `layoutId` unique per instance (`useId()`).
- Height to and from `auto`: animate `height` between `0` and `"auto"` inside `AnimatePresence` with `overflow: hidden`. It runs layout every frame, so keep it for small content.

### Radix

Animate with `asChild` and a `motion` child. For exit and layout animations, lift Radix state into `useState`, render the Radix component conditionally inside `AnimatePresence`, and set `forceMount` on the Radix component (never on a DOM element).

## Versions and migration

- Framer Motion is now Motion for React; all Framer Motion knowledge applies. To migrate, swap the package for `motion` and the imports for `motion/react`.
- v12 and v13 share an API. The one breaking change in v13: with styled-components or Emotion, pass `isValidProp` to `MotionConfig` or wrap the styled component with `motion.create()`.
- Vue uses `motion-v`; vanilla JavaScript uses `import { animate } from "motion"`.
