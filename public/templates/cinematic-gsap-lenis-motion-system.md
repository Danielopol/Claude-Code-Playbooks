# Cinematic GSAP + Lenis Motion System

Build a premium, cinematic web motion system with GSAP, ScrollTrigger, and Lenis smooth scroll. Use for luxury editorial websites, creative studio portfolios, Awwwards-style interactions, smooth scroll reveals, staggered text, parallax, pinned sections, magnetic hover states, and custom cursors.

## Use When

- The site needs a full premium motion language, not one isolated animation.
- Smooth scrolling, scroll reveals, pinned scenes, parallax, hover motion, and cursor behavior should all feel connected.
- The target feel is luxury editorial, Apple-level polish, a creative studio portfolio, or immersive cinematic storytelling.

## Motion Taste

Smooth, elegant, slightly delayed, and intentional. Staggered motion should guide reading order. Layered movement should create depth without making the interface feel busy. `ScrollTrigger` should start scenes when they enter the viewport, not react to every tiny scroll. Prefer subtlety over intensity.

Avoid: bounce, elastic, springy, or playful motion; fast abrupt transitions; large scale jumps; over-animated UI; flashy gaming-style effects.

## Base Tokens

- Eases: `power3.out`, `power4.out`, `expo.out`.
- Scroll scrub: `scrub: 0.8` to `1.4` for cinematic delay.
- Reveals: `0.75s` to `1.1s`.
- Hover: `0.35s` to `0.6s`.
- Cursor lag: `0.25s` to `0.45s`.
- Text stagger: words `0.035s` to `0.07s`, lines `0.08s` to `0.14s`.
- Card stagger: `0.06s` to `0.1s`.
- Reveal trigger: `start: "top 82%"`.
- Pin handoff: `anticipatePin: 1`.

## Setup

```bash
npm i gsap lenis
```

Initialize once, after the DOM exists. Lenis drives its RAF through the GSAP ticker so `ScrollTrigger` and smooth scroll stay synced.

```js
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "power3.out", duration: 0.85 });

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let lenis;

if (!reduceMotion) {
  lenis = new Lenis({
    lerp: 0.08,
    smoothWheel: true,
    wheelMultiplier: 0.9,
    anchors: true,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});
```

## Markup API

Use small data attributes so the motion system can be reused across pages.

```html
<h1 data-motion-text="lines">Digital products with cinematic restraint.</h1>
<p data-motion-text="words">Every interaction should feel deliberate.</p>

<section data-reveal-group>
  <article data-reveal="fade-up" data-reveal-item>...</article>
  <article data-reveal="fade-up" data-reveal-item>...</article>
</section>

<figure data-image-reveal data-parallax-section>
  <img data-parallax-image src="/studio.jpg" alt="">
</figure>

<a data-magnetic data-cursor-label="Explore" href="/work">Explore</a>
<div data-cursor><span data-cursor-label></span></div>
```

## CSS Foundation

```css
html.has-motion [data-motion-text],
html.has-motion [data-reveal],
html.has-motion [data-reveal-item],
html.has-motion [data-image-reveal] {
  visibility: hidden;
}

.motion-line-mask,
.motion-word-mask {
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
}

.motion-line,
.motion-word {
  display: inline-block;
  will-change: transform, opacity, filter;
}

[data-image-reveal] { overflow: hidden; }

[data-parallax-image] {
  display: block;
  width: 100%;
  height: 115%;
  object-fit: cover;
  will-change: transform;
}

[data-cursor] {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  pointer-events: none;
  mix-blend-mode: difference;
  transform: translate3d(-50%, -50%, 0);
  will-change: transform;
}

@media (prefers-reduced-motion: reduce), (pointer: coarse) {
  [data-cursor] { display: none; }
}
```

## Staggered Text Reveals

Use masked containers for premium text. Prefer manual line wrappers when exact line breaks matter; use word splitting for flexible responsive text.

```js
document.documentElement.classList.add("has-motion");

function splitWords(element) {
  if (element.dataset.motionSplit === "true") return;
  const text = element.textContent || "";
  const parts = text.split(/(\s+)/);
  element.textContent = "";
  element.setAttribute("aria-label", text.trim());
  let index = 0;
  parts.forEach((part) => {
    if (!part.trim()) {
      element.appendChild(document.createTextNode(part));
      return;
    }
    const mask = document.createElement("span");
    const word = document.createElement("span");
    mask.className = "motion-word-mask";
    mask.setAttribute("aria-hidden", "true");
    word.className = "motion-word";
    word.textContent = part;
    word.style.setProperty("--word-index", index);
    mask.appendChild(word);
    element.appendChild(mask);
    index += 1;
  });
  element.dataset.motionSplit = "true";
}

function initTextReveals() {
  if (reduceMotion) {
    gsap.set("[data-motion-text]", { autoAlpha: 1, clearProps: "all" });
    return;
  }

  gsap.utils.toArray("[data-motion-text='words']").forEach((element) => {
    splitWords(element);
    const words = element.querySelectorAll(".motion-word");
    gsap.set(element, { autoAlpha: 1 });
    gsap.fromTo(
      words,
      { yPercent: 110, autoAlpha: 0, filter: "blur(8px)" },
      {
        yPercent: 0,
        autoAlpha: 1,
        filter: "blur(0px)",
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.055,
        scrollTrigger: { trigger: element, start: "top 82%", once: true },
      }
    );
  });
}
```

`aria-label` is set to the original text before splitting, and `aria-hidden="true"` is applied to the visual mask spans, so screen readers announce the real sentence instead of individually split words.

## Parallax and Magnetic Hover

For image parallax, scale the image slightly oversized (`height: 115%`) and translate it on scroll via `ScrollTrigger` with a `scrub` value from the token list above — never animate `top`/`margin` for this, only `transform`.

For magnetic hover on `[data-magnetic]` elements, track pointer position relative to the element's bounding box and translate the element toward the pointer within a clamped range (a few pixels to ~15% of the element's size), easing back to center with the hover-duration token on `mouseleave`. Pair it with the custom cursor: update `[data-cursor]` position on `mousemove` with the cursor-lag token, and swap its label text via `data-cursor-label` on hover targets.

## Respect Motion Preferences

Every effect above checks `reduceMotion` before initializing. Under `prefers-reduced-motion: reduce`, skip Lenis entirely (native scroll), set all `[data-motion-text]`/`[data-reveal]` elements straight to their final visible state instead of animating in, and hide the custom cursor. This is not optional — the CSS foundation hides motion-driven elements by default specifically so a reduced-motion visitor never sees a flash of hidden content if JavaScript fails to run.
