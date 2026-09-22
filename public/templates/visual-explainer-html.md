# Visual Explainer (Self-Contained HTML)

Generate self-contained HTML pages that explain systems, code changes, plans, data, and technical concepts visually. Use for diagram requests, architecture overviews, diff/plan reviews, project recaps, comparison tables, slide decks, and any explanation that's inherently visual rather than a wall of prose.

## When to Prefer a Page Over Chat

Prefer an HTML page over terminal ASCII or a long chat message when the output is inherently visual. If a table would have 4+ rows or 3+ columns, render it as HTML and give only a short chat summary. The final page must be a complete, self-contained HTML document — embedded CSS, a self-contained favicon, and any needed JS, no external dependencies that could go missing later.

## Design Judgment (Before Writing Any HTML)

- **Calibrate treatment to the content.** Diff reviews, memos, audits, and recaps get polished-utilitarian: real hierarchy, considered spacing, no flashy hero. Showcases and narrative decks get editorial. A well-composed page is never wrong; an over-designed one sometimes is.
- **Precedence order:** the user's explicit words, then the project's existing design system (theme/token files, component styles) if one exists, then your own judgment last.
- **Plan first, in writing:** 4–6 named hex values, type roles, and a one-sentence layout concept. Audit once — "would I produce this same plan for any similar page?" — and revise whatever's generic. (Generic: slate `#0f172a`, indigo accent, Inter, hero-plus-three-cards. Revised for a CLI recap: near-black green, phosphor text, amber accent, JetBrains Mono — a terminal direction where the layout follows the release timeline instead.)
- **Structure must encode something true.** Numbered markers (01/02/03) only when order actually matters; eyebrow labels only when they actually classify; dividers only at real seams in the content.

## Choosing the Representation

| Content | Default representation |
|---|---|
| Flowchart, pipeline, state machine, decision tree | Mermaid |
| Sequence, ER/schema, class diagram, C4, topology-focused architecture | Mermaid |
| Text-heavy architecture, module internals, implementation plans | CSS grid cards, optionally with a Mermaid overview |
| 15+ element architecture | Hybrid: small Mermaid overview + CSS detail cards |
| Comparison/audit/status matrix | Semantic HTML `<table>` |
| Timeline/roadmap | CSS timeline |
| Dashboard/metrics | CSS grid + charts/KPIs |
| Slide deck | `100dvh` slides |

## Mermaid Invariants

**What to draw, before how:**
- Depict the mechanism, not its name — the path a request takes through a cache says more than a box labeled "cache."
- Label every arrow (`writes`, `invalidates`, `polls every 30s`); an unlabeled arrow only says "related somehow."
- To compare options, draw the difference — the edge each adds or removes. Match complexity to what the decision actually turns on.
- One figure, one claim; the caption states it.

**How to render:**
- Use `theme: 'base'` with custom `themeVariables` matching the page's palette.
- For complex diagrams, use ELK layout when available.
- Never use bare `<pre class="mermaid">` — wrap it with zoom controls (in/out/reset/expand), `Ctrl`/`Cmd`+scroll zoom, drag panning, and click-to-expand.
- Prefer `flowchart TD` for complex diagrams. Use `LR` only for simple 3–4 node linear flows.
- Use `<br/>` in quoted flowchart labels, not escaped `\n`.
- Never define a page-level `.node` class — Mermaid uses it internally. Use namespaced page classes instead.
- For 15+ elements, don't cram everything into one Mermaid diagram — use the hybrid overview + cards pattern.

## Layout and Style Invariants

- Use semantic HTML where it helps accessibility and copy/paste: `<table>`, headings, lists, `<details>`, captions.
- Use CSS custom properties for the palette: `--bg`, `--surface`, `--border`, `--text`, `--text-dim`, plus 3–5 accents.
- Pages meant to persist ship both color schemes: tokens on `:root`, a `prefers-color-scheme` media query redefines tokens only, components styled through the tokens — never invert values ad hoc for dark mode. Single-theme is fine when deliberate (one-shot pages, quick summaries).
- Commit to one palette (with light/dark variants) and one font pair per page.
- Anchor the aesthetic to the content's domain: CLI/infra → terminal or IDE-inspired; metrics/audits → data-dense; plans/architecture → blueprint; recaps → editorial; prose → paper/ink. A default warm-cream-serif-terracotta look is itself a cliché if applied to everything.
- **Avoid generic defaults** when choosing freely (a project's own design system overrides this): no body font that's only Inter/Roboto/Arial/Helvetica/system-ui; no violet/fuchsia Tailwind-default accent as the main palette; no cyan+magenta+purple neon dashboard; no gradient-mesh blobs; no purple-to-blue gradient heroes, emoji section markers, centered-everything layouts, uniform large border-radius, or default accent bars on every rounded card.
- Set type deliberately: running text near 65ch measure, a committed type scale, `text-wrap: balance` on headings, letter-spacing on uppercase labels.
- For non-slide, scrollable pages, use a rem-based type scale with one root knob (`html { font-size: 16px }`, choosing a value in the 16–18px range) so a single line rescales the whole page. Minimum effective sizes: body/reading text ≥ 14px, secondary text/labels ≥ 11px, code/mono ≥ 12px. Never hard-code reading text below 14px in raw px. Mermaid SVG labels stay in px, since Mermaid sizes them through its own configuration. Slide decks are a deliberate exception — preserve viewport-responsive `clamp()` typography for those.
- Bias neutrals toward the accent hue; pure mid-grey reads as unconsidered. Space siblings with flex/grid `gap`, not collapsing margins; use `tabular-nums` where digits align in columns.

## Quick Mode

An opt-in fast path for simple, schema-expressible content — a compact JSON spec rendered into a complete HTML document by a script, instead of hand-composed HTML. Not suitable for custom visual composition, slides, Mermaid-heavy diagrams, or content the schema can't express — if the content doesn't fit cleanly, fall back to the normal full-HTML workflow.

## Delivery Rules

- Write files to a dedicated diagrams directory with a descriptive filename, not a generic `output.html`.
- Generate a Markdown companion only when the user explicitly asks for it or wants a source brief — keep HTML as the final visual output, never the reverse.
- Open the generated page automatically when running in a normal interactive context.
- Add missing `<html lang>` and viewport metadata if they're not already present.
