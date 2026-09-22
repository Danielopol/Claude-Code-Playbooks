# Slidev — Presentation Slides for Developers

Create and present web-based slidedecks for developers using Slidev, a slides maker built on Vite, Vue, and Markdown. Use it for technical presentations, conference talks, code walkthroughs, teaching materials, and developer decks — anything that benefits from live code, syntax highlighting, math, and diagrams over a traditional slide tool.

## When to Use

- Technical presentations or slidedecks with live code examples.
- Syntax-highlighted code snippets with animations.
- Interactive demos (Monaco editor, runnable code).
- Mathematical equations (LaTeX) or diagrams (Mermaid, PlantUML).
- Recording presentations with presenter notes.
- Exporting to PDF, PPTX, or hosting as a standalone SPA.
- Code walkthroughs for developer talks or workshops.

## Quick Start

```bash
pnpm create slidev    # Create project
pnpm run dev          # Start dev server (opens http://localhost:3030)
pnpm run build        # Build static SPA
pnpm run export       # Export to PDF (requires playwright-chromium)
```

Verify: after `pnpm run dev`, confirm slides load at `http://localhost:3030`. After `pnpm run export`, check the output PDF exists in the project root.

## Basic Syntax

```md
---
theme: default
title: My Presentation
---

# First Slide

Content here

---

# Second Slide

More content

<!--
Presenter notes go here
-->
```

- `---` separates slides.
- The first frontmatter block is the headmatter (deck-wide config).
- HTML comments are presenter notes, visible only in presenter mode.

## Quick Reference

### Code & Editor

| Feature | Usage |
|---|---|
| Line highlighting | ` ```ts {2,3} ` |
| Click-based highlighting | ` ```ts {1\|2-3\|all} ` |
| Line numbers | `lineNumbers: true` or `{lines:true}` |
| Scrollable code | `{maxHeight:'100px'}` |
| Code tabs | `::code-group` (requires `comark: true`) |
| Monaco editor | ` ```ts {monaco} ` |
| Run code | ` ```ts {monaco-run} ` |
| Edit files | `<<< ./file.ts {monaco-write}` |
| Code animations (magic move) | ` ````md magic-move ` |
| TypeScript types (twoslash) | ` ```ts twoslash ` |
| Import code | `<<< @/snippets/file.js` |

### Diagrams & Math

| Feature | Usage |
|---|---|
| Mermaid diagrams | ` ```mermaid ` |
| PlantUML diagrams | ` ```plantuml ` |
| LaTeX math | `$inline$` or `$$block$$` |

### Layout & Styling

| Feature | Usage |
|---|---|
| Canvas size | `canvasWidth`, `aspectRatio` |
| Zoom slide | `zoom: 0.8` |
| Scale elements | `<Transform :scale="0.5">` |
| Layout slots | `::right::`, `::default::` |
| Scoped CSS | `<style>` in slide |
| Global layers | `global-top.vue`, `global-bottom.vue` |
| Draggable elements | `v-drag`, `<v-drag>` |
| Icons | `<mdi-icon-name />` |

### Animation & Interaction

| Feature | Usage |
|---|---|
| Click animations | `v-click`, `<v-clicks>` |
| Rough markers | `v-mark.underline`, `v-mark.circle` |
| Drawing mode | Press `C`, or `drawings:` config |
| Direction styles | `forward:delay-300` |
| Note highlighting | `[click]` in notes |

## Common Slide Layouts

Built-in layouts cover the standard deck structure: `cover`, `intro`, `section`, `two-cols`, `center`, `quote`, `fact`, `full`, `image-left`/`image-right`, `iframe`, `end`. Set one per slide via frontmatter: `layout: two-cols`.

## Headmatter vs. Frontmatter

- **Headmatter** — the very first frontmatter block in the file. Deck-wide settings: `theme`, `title`, `canvasWidth`, `transition`, `drawings`, `download`.
- **Frontmatter** — any `---`-delimited block before a slide's content. Per-slide settings: `layout`, `class`, `zoom`, `clicks`, `transition`.

## Presenter Mode

Run `pnpm run dev` and open `/presenter/` for a presenter view with notes, a timer, and a next-slide preview. Presenter notes live as HTML comments directly under each slide's content.
