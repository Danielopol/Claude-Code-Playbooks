# Threads Carousel Generator

Convert a text post into a set of visual carousel slides for Threads, Instagram, LinkedIn, TikTok, Stories, or a standalone presentation deck. Export as PNGs or a single PDF.

## Read This First: You Must Clone the Repo

This file is an operating guide, not a self-contained generator. The rendering happens in a Next.js app that ships with the source repo. Without that app on disk, nothing here produces an image.

Install it once:

```bash
mkdir -p ~/.claude/skills
git clone https://github.com/itchernetski/threads-carousel-claude-skill.git ~/.claude/skills/threads-carousel
cd ~/.claude/skills/threads-carousel/template
bun install   # or pnpm install / npm install
```

Requires Node 18+ and one of bun, pnpm, or npm. The dependency install pulls roughly 350MB into `node_modules`, so do it once and reuse it.

If the template directory is missing when I ask for a carousel, say so and point me at the clone command. Do not attempt to generate slide images from this file alone.

## What the Repo Contains

```
template/
├── public/images/          ← drop PNG/JPG here for `image` slides
├── src/
│   ├── slides.ts           ← the only file you edit: SLIDES array + 6 defaults
│   ├── lib/
│   │   ├── types.ts        ← type unions (FormatId, FontId, SurfaceId, AccentId…)
│   │   └── presets.ts      ← FONT_STYLES, SURFACES, ACCENTS, FORMAT_PRESETS, composePreset
│   └── app/
│       ├── CarouselApp.tsx ← rendering engine + toolbar
│       ├── layout.tsx      ← Google Fonts loading
│       └── globals.css
└── package.json            ← Next.js 15, React 19, html-to-image, jspdf
```

**The golden rule:** to change carousel content, only touch `src/slides.ts`. Everything else is the engine. Editing `CarouselApp.tsx` or `src/lib/*` to fix a layout problem is almost always the wrong move; the fix is usually less text on the slide.

## Trigger

Paste a post or a path to a `.md` / `.txt` file and say "make a carousel." The source skill responds to Russian as well: "сделай карусель" works identically, and the preview toolbar has an RU/EN language toggle.

## Format Presets

| Preset | Size | Platforms |
|---|---|---|
| `threads-4x5` *(default)* | 1080×1350 | Threads, Instagram feed (portrait) |
| `instagram-square` | 1080×1080 | Instagram, Facebook, LinkedIn feed |
| `linkedin-square` | 1080×1080 | LinkedIn document post (PDF) |
| `tiktok-9x16` | 1080×1920 | TikTok Photo Mode, Reels, Shorts |
| `story-9x16` | 1080×1920 | Instagram Stories, Threads Stories |
| `wide-16x9` | 1920×1080 | Presentations, YouTube, desktop decks |

Format switches live in the toolbar and resize the canvas without a rebuild, so pick one and test the others in the browser.

## Slide Types (12)

| Type | Purpose | Required fields |
|---|---|---|
| `hook` | Opening slide, the catchiest line | `text` |
| `body` | Title + paragraph | `title`, `text` |
| `body` (points) | Pros/cons list with ✓/✗ SVG icons | `title`, `points[]` instead of `text` |
| `list` | Numbered items | `title`, `items[]` |
| `stats` | Big numbers with labels | `title`, `stats[]` |
| `quote` | Large pulled quote | `text`, `author` |
| `checklist` | Checkmark bullets | `title`, `items[]` |
| `process` | Numbered steps with connector line | `title`, `steps[]` |
| `comparison` | Two-column VS / before-after | `leftLabel`, `leftItems[]`, `rightLabel`, `rightItems[]` |
| `cta` | Final call to action | `text`, `handle` |
| `image` | Title + screenshot/photo + caption | `imageSrc`, optional `title`, `imageCaption` |
| `emoji` | Giant emoji illustration + title + text | `emoji`, optional `title`, `text` |
| `number` | Hero number or short string + title + text | `bigNumber`, optional `title`, `text` |

`points` shape: `Array<{ type: "plus" | "minus"; text: string }>`. Green ✓ for plus, muted ✗ for minus. Sizing adapts between 44 and 62px based on item count and longest line.

Every type also accepts:

- `badge` — small outlined tag above the title (`"01"`, `"TIP"`, `"NEW"`), max 2-4 characters
- `highlight` — a word or short phrase inside `text` or `title`, rendered in the accent color
- `highlightStyle: "italic-box"` — renders the highlighted word in Playfair italic on a colored rectangle

## Style System (4 independent axes)

The final look is composed at runtime by `composePreset(font, surface, accent, purpose)`. Pick each axis on its own.

**Font (5):**

| Id | Typeface | Feel |
|---|---|---|
| `minimal` *(default)* | Unbounded | Geometric display, bold, distinctive |
| `editorial` | Playfair Display | Classic serif, literary |
| `clean` | Inter | Neutral sans-serif |
| `mono` | JetBrains Mono | Tech / dev |
| `condensed` | Oswald | Narrow and tall, poster |

**Surface (8)** — background and text neutrals:

| Id | Bg | Text | Feel |
|---|---|---|---|
| `dark` *(default)* | `#0A0A0A` | white | Default bold |
| `white` | `#FFFFFF` | near-black | Sharp, clinical |
| `light` | zinc `#F4F4F5` | near-black | Cool neutral grey |
| `paper` | cream `#ECE2C8` | warm brown | Notebook, literary |
| `gradient` | purple→pink→amber | white | Bright |
| `pastel` | lilac `#EDE9FE` | indigo | Soft |
| `neon` | dark gradient | light cyan | Tech dark |
| `ember` | black→red radial | near-white | Dramatic |

**Accent (11)** — the pop color for highlighted words: `yellow` `#FACC15` *(default)*, `red` `#DC2626`, `teal` `#14B8A6`, `coral` `#FB7185`, `orange` `#F97316`, `violet` `#A78BFA`, `lime` `#D9F056`, `blue` `#3B82F6`, `fuchsia` `#C026D3`, `pink` `#EC4899`, `amber` `#F59E0B`.

**Purpose (2):**

| Id | Title | Body | Divider |
|---|---|---|---|
| `carousel` *(default)* | 44px, weight 800, UPPERCASE | weight 600, `textColor`, line-height 1.2 | visible, 96×4px accent bar |
| `presentation` | 72px, weight 700, sentence case | weight 400, `textSecondary`, line-height 1.45 | hidden |

5 fonts × 8 surfaces × 11 accents × 2 purposes = **880 valid combinations**.

Combos worth starting from: `dark + teal` (noir tech), `paper + orange` (literary warm), `ember + lime` (dramatic announcement), `white + coral` (sharp editorial), `light + teal` (calm informational), `pastel + fuchsia` (playful), `gradient + amber` (radiant).

## Background Decorations (8)

Switchable in the toolbar. Default: `glow`.

| Type | What it is |
|---|---|
| `none` | Solid background |
| `blobs` | Organic colored shapes |
| `grid` | Dotted grid |
| `lines` | Diagonal lines |
| `paper` | Ruled notebook lines with a left margin, pairs with `paper` / `light` / `white` surfaces |
| `noise` | SVG grain overlay |
| `bignumber` | Giant slide index as a watermark |
| `glow` *(default)* | Soft radial gradient in alternating corners |

## Workflow

### Step 1 — Get the text

Inline text: use it. A file path (`.md`, `.txt`): read it. If the text runs past 500 characters, confirm it is complete before planning slides.

### Step 2 — Clarify parameters, once

Ask all of this in a single message, and accept "your call" as an answer:

1. Slide count (3-10, default 6)
2. Format (default `threads-4x5`)
3. Purpose (`carousel` or `presentation`)
4. Font, surface, accent
5. Handle for the CTA slide (`@username`)

Shortcut: if the request mentions "presentation," "slide deck," or "презентация," default to `purpose: presentation`, `format: wide-16x9`, `font: clean`, `surface: white`.

Never block on parameters. Apply defaults and move.

### Step 3 — Plan the breakdown, then show it

Print the plan before generating anything:

```
Slide 1 (hook): "Headline..."  [highlight: "word"]
Slide 2 (body): badge 01 — "Title" / "Text..."
Slide 3 (list): badge 02 — "iOS stack" / 3 items
Slide 4 (stats): badge 03 — "Growth" / 3 stats
Slide 5 (quote): "Quote..." — Author
Slide 6 (cta): "Final message" @username
```

Rules for splitting text into slides:

1. **Hook** is the single most intriguing line from the post, 1-3 short lines. It has to work as a standalone thumbnail, because it is the only slide most people see.
2. **Body slides** carry one idea each. Max 40 words, max 5 lines. Never join two ideas with "and."
3. **Mix types.** Use `list` for enumerations, `stats` for numbers, `quote` for direct speech, `comparison` for before/after. A deck of six `body` slides looks like a wall of text.
4. **CTA** closes with a conclusion plus the handle. Centered, short.

### Step 4 — Build in a working copy

Never edit the installed template in place. Copy it, symlink the dependencies:

```bash
WORK_DIR="/tmp/carousel-$(date +%s)"
rsync -a --exclude=node_modules ~/.claude/skills/threads-carousel/template/ "$WORK_DIR/"
ln -s ~/.claude/skills/threads-carousel/template/node_modules "$WORK_DIR/node_modules"
cd "$WORK_DIR"
```

The symlink avoids a 350MB copy on every run.

Then write `src/slides.ts`:

```ts
import type { SlideData, BgType, FormatId, FontId, SurfaceId, AccentId, PurposeId } from "./lib/types";

export const SLIDES: SlideData[] = [
  { type: "hook", text: "Line one\nline two", highlight: "two" },
  { type: "body", badge: "01", title: "Title", text: "Body text...", highlight: "key" },
  { type: "body", badge: "02", title: "Pros & Cons", points: [
    { type: "plus",  text: "One click to register" },
    { type: "plus",  text: "Works on any background" },
    { type: "minus", text: "Requires provider setup" },
  ]},
  { type: "list", badge: "03", title: "Steps", items: ["First", "Second", "Third"] },
  { type: "stats", title: "Numbers", stats: [
    { value: "10×", label: "Faster" },
    { value: "50%", label: "Smaller" },
  ]},
  { type: "quote", text: "Big idea\nin few words", author: "Someone", role: "2026" },
  { type: "checklist", title: "Pre-flight", items: ["One", "Two", "Three"] },
  { type: "image", badge: "04", title: "GitHub Trending",
    imageSrc: "/images/screenshot.png", imageCaption: "source: github.com/trending" },
  { type: "cta", text: "Last word", handle: "@username" },
];

export const DEFAULT_FONT: FontId = "minimal";
export const DEFAULT_SURFACE: SurfaceId = "dark";
export const DEFAULT_ACCENT: AccentId = "yellow";
export const DEFAULT_PURPOSE: PurposeId = "carousel";
export const DEFAULT_BG: BgType = "glow";
export const DEFAULT_FORMAT: FormatId = "threads-4x5";
```

Check the type unions in `src/lib/types.ts` before inventing an id. A typo in `DEFAULT_ACCENT` breaks the build, not just the color.

### Step 5 — Preview and export

```bash
bun dev --port 3333
```

Tell the user to open `http://localhost:3333`. In the browser they can:

- Switch format, purpose, font, surface, accent, and background live through the toolbar rows
- Toggle the UI language RU / EN in the top right
- Click **PDF** to download every slide in one file (JPEG-compressed, roughly 5-8MB for 10 slides)
- Click **PNG** to download each slide as `01-hook.png`, `02-body.png`, and so on
- Click a single thumbnail to export just that slide

Stop the dev server after export.

Making several carousels at once: create several work directories and launch on ports 3333, 3334, 3335. They run side by side.

## Images in Slides

`image` slides read `imageSrc` from Next.js's `/public/` directory. When the user hands you a local file:

1. They give a path like `/Users/me/Desktop/screenshot.png`
2. Copy it in with a safe lowercase filename: `cp "$USER_PATH" public/images/screenshot.png`
3. Reference it as `imageSrc: "/images/screenshot.png"`, absolute from `/public/`

Same-origin serving avoids CORS failures in the PNG export pipeline. Do not use external URLs. `html-to-image` renders them blank.

## Typography Reference (carousel purpose)

| Element | Size | Weight |
|---|---|---|
| Hook | 88-170px, adaptive | 800 |
| Title | 44px | 800 uppercase |
| Body | 48-88px, adaptive | 600 |
| Points | 44-62px | 600 |
| Badge | 26px | 800 uppercase |
| Stats value | 140-170px | 900 |
| Stats label | 32px | 500 uppercase |
| Quote | 62px | 600 |
| List item | 46px | 600 |
| Checklist item | 44px | 600 |
| Process step title | 36px | 700 |
| Handle | 36px | 500 |
| Emoji hero | 360px | — |
| Big number | 320-560px, auto | 900 |
| Image caption | 40px | 500 |

Layout: 80px padding, left-aligned, slide counter bottom-center. `text-wrap: balance` on hooks and titles kills orphan words. The `presentation` purpose overrides titles to 72px sentence case with no divider.

## Common Mistakes

| Mistake | Fix |
|---|---|
| Too much text on a slide | Max 40 words, max 5 lines |
| Two ideas on one slide | Split into two slides |
| Every slide is `body` | Mix in `list`, `stats`, `quote`, `checklist` |
| No hook on slide 1 | Slide 1 must be the catchiest line in the post |
| No CTA on the last slide | End with a handle or a call to action |
| Highlight is a whole phrase | Keep it to 1-2 words |
| Badge too long | 2-4 characters |
| External image URL | Copy the file into `public/images/` instead |
| Editing `CarouselApp.tsx` | Content lives in `src/slides.ts` |

## Known Limits

- Export runs in the browser through `html-to-image` and `jspdf`. There is no headless CLI export. Someone has to open the preview and click.
- Adaptive sizing thresholds are calibrated for Latin text. Russian copy runs 20-30% longer at the same size and can overflow.
- `DEFAULT_BG` is global. Mixing background decorations across a single deck is not supported.
- Emoji render with the operating system's emoji font, so a slide exported on macOS will not match one exported on Windows.
