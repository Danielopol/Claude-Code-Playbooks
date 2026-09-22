# Web Animation Design

Design and implement web animations that feel natural and purposeful, based on the practical principles behind well-regarded animation courses like Emil Kowalski's "Animations on the Web." Use it for easing, timing, duration, springs, transitions, and animation performance — how to animate a specific UI element, which easing to use, and accessibility considerations for motion.

## Quick Start

Every animation decision starts with these questions:

1. **Is this element entering or exiting?** → Use `ease-out`.
2. **Is an on-screen element moving?** → Use `ease-in-out`.
3. **Is this a hover/color transition?** → Use `ease`.
4. **Will users see this 100+ times a day?** → Don't animate it.

## The Easing Blueprint

### ease-out (Most Common)

Use for user-initiated interactions: dropdowns, modals, tooltips, anything entering or exiting the screen.

```css
/* Sorted weak to strong */
--ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);
--ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
--ease-out-quint: cubic-bezier(0.23, 1, 0.32, 1);
--ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
--ease-out-circ: cubic-bezier(0.075, 0.82, 0.165, 1);
```

Why it works: acceleration at the start creates an instant, responsive feeling. The element "jumps" toward its destination then settles in.

### ease-in-out (For Movement)

Use when elements already on screen need to move or morph. Mimics natural motion, like a car accelerating then braking.

```css
--ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
--ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);
--ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
--ease-in-out-quint: cubic-bezier(0.86, 0, 0.07, 1);
--ease-in-out-expo: cubic-bezier(1, 0, 0, 1);
--ease-in-out-circ: cubic-bezier(0.785, 0.135, 0.15, 0.86);
```

### ease (For Hover Effects)

Use for hover states and color transitions. The asymmetrical curve (faster start, slower end) feels elegant for gentle animations.

```css
transition: background-color 150ms ease;
```

### linear (Avoid in UI)

Only use for constant-speed animations (marquees, tickers) or time visualization (hold-to-delete progress indicators). Linear feels robotic and unnatural for interactive elements.

### ease-in (Almost Never)

Avoid for UI animations. Makes interfaces feel sluggish because the slow start delays visual feedback.

### Paired Elements Rule

Elements that animate together must use the same easing and duration. Modal + overlay, tooltip + arrow, drawer + backdrop — if they move as a unit, they should feel like a unit.

```css
.modal { transition: transform 200ms ease-out; }
.overlay { transition: opacity 200ms ease-out; }
```

## Timing and Duration

| Element Type | Duration |
|---|---|
| Micro-interactions | 100–150ms |
| Standard UI (tooltips, dropdowns) | 150–250ms |
| Modals, drawers | 200–300ms |

Rules:
- UI animations should stay under 300ms.
- Larger elements animate slower than smaller ones.
- Exit animations can be ~20% faster than entrance.
- Match duration to distance — longer travel needs longer duration.

### The Frequency Rule

Determine how often users will see the animation: 100+ times a day → no animation (or drastically reduced); occasional use → standard animation; rare/first-time → can be more special. Raycast never animates its core interactions because users open it hundreds of times a day.

## When to Animate

**Do animate:** enter/exit transitions for spatial consistency, state changes that benefit from visual continuity, responses to user actions (feedback), rarely-used interactions where delight adds value.

**Don't animate:** keyboard-initiated actions, hover effects on frequently-used elements, anything interacted with 100+ times daily, when speed matters more than smoothness.

**Marketing vs. Product:** marketing pages tolerate more elaborate, longer animations; product UI should be fast, purposeful, never frivolous.

## Spring Animations

Springs feel more natural because they don't have fixed durations — they simulate real physics.

**When to use springs:** drag interactions with momentum, elements that should feel "alive," gestures that can be interrupted mid-animation, organic/playful interfaces.

**Configuration** — prefer Apple's duration+bounce approach (easier to reason about) over raw physics:

```js
// Apple's approach (recommended)
{ type: "spring", duration: 0.5, bounce: 0.2 }

// Traditional physics (more complex)
{ type: "spring", mass: 1, stiffness: 100, damping: 10 }
```

Avoid bounce in most UI contexts; use it for drag-to-dismiss and playful interactions, kept subtle (0.1–0.3).

**Interruptibility:** springs maintain velocity when interrupted — CSS animations restart from zero. This makes springs ideal for gestures users might change mid-motion.

## Performance

### The Golden Rule

Only animate `transform` and `opacity`. They skip layout and paint stages, running entirely on the GPU.

**Avoid animating:** `padding`, `margin`, `height`, `width` (trigger layout); `blur` filters above 20px (expensive, especially Safari); CSS variables in deep component trees.

```css
/* Force GPU acceleration */
.animated-element {
  will-change: transform;
}
```

**React-specific:** animate outside React's render cycle when possible; use refs to update styles directly instead of state — re-renders on every frame drop frames.

**CSS vs. JavaScript:** CSS animations run off the main thread (smoother under load); JS animations (Framer Motion, React Spring) use `requestAnimationFrame`. CSS is better for simple, predetermined animations; JS is better for dynamic, interruptible ones.

## Accessibility

Animations can cause motion sickness or distraction for some users.

### prefers-reduced-motion

Whenever you add an animation, add a media query to disable it:

```css
.modal { animation: fadeIn 200ms ease-out; }

@media (prefers-reduced-motion: reduce) {
  .modal { animation: none; }
}
```

Guidelines: every animated element needs its own `prefers-reduced-motion` query; set `animation: none` or `transition: none` without `!important`; no exceptions for opacity or color — disable all animations; show play buttons instead of autoplaying video.

```jsx
import { useReducedMotion } from "framer-motion";

function Component() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    />
  );
}
```

### Touch Device Considerations

```css
@media (hover: hover) and (pointer: fine) {
  .element:hover { transform: scale(1.05); }
}
```

Touch devices trigger hover on tap, causing false positives — gate hover animations behind this media query.

## Practical Tips

| Scenario | Solution |
|---|---|
| Make buttons feel responsive | `transform: scale(0.97)` on `:active` |
| Element appears from nowhere | Start from `scale(0.95)`, not `scale(0)` |
| Shaky/jittery animations | Add `will-change: transform` |
| Hover causes flicker | Animate the child element, not the parent |
| Popover scales from wrong point | Set `transform-origin` to trigger location |
| Sequential tooltips feel slow | Skip the delay/animation after the first tooltip |
| Small buttons hard to tap | Use a 44px minimum hit area (pseudo-element) |
| Something still feels off | Add subtle blur (under 20px) to mask it |
| Hover triggers on mobile | `@media (hover: hover) and (pointer: fine)` |

## Easing Decision Flowchart

```
Is the element entering or exiting the viewport?
├── Yes → ease-out
└── No
    ├── Is it moving/morphing on screen?
    │   └── Yes → ease-in-out
    └── Is it a hover change?
        ├── Yes → ease
        └── Is it constant motion?
            ├── Yes → linear
            └── Default → ease-out
```
