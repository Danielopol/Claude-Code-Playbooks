# Better Typography

Web typography that comes with the craft: type scale, spacing, sizing, variable fonts, OpenType features, wrapping, truncation, and the details that make typography feel great across a product. Typography is mostly restraint — a sensible scale, comfortable spacing, enough contrast. A label, a table cell, a marketing headline, and an article paragraph do not share one set of rules.

When reviewing, read the rendered page instead of scanning the code — bad wrapping, widows, and truncation only show up at real content lengths.

## Serve the Right Format

Use `.woff2` on the web for Brotli compression and broad support. `.woff` is a fallback for very old browsers. `.ttf` and `.otf` are desktop formats with no web compression.

## Properties Over Raw Tags

When a CSS property exists, use it: `font-weight: 650` instead of `font-variation-settings: "wght" 650`; `font-optical-sizing: auto` instead of `"opsz"`; `font-variant-numeric: tabular-nums` instead of `font-feature-settings: "tnum" 1`. Properties keep working when a non-variable fallback renders. Reserve raw variation/feature tags for custom axes (`"GRAD" 80`) and niche features (`"ss01" 1`) with no property of their own.

## Load Intended Weights and Styles

Browsers synthesize a weight or style the active family doesn't provide, distorting the real face. Load the faces the design actually uses. `font-synthesis: none` turns synthesis off but erases emphasis rather than reporting it — set it only after checking every required bold, italic, small-cap, superscript, and subscript form stays visually distinct across the fallback stack.

## Fewer Fonts, Sizes, and Weights

Rarely use more than three fonts. Weight and size define hierarchy; overusing them hurts readability fast. Pair for contrast, not similarity — a serif headline over a sans body reads as deliberate; two near-identical sans-serifs read as a mistake. Below 18px, stay at weight 400 or heavier — weights under 300 are display-only at 28px+ and disappear at text sizes.

## Use a Type Scale With Semantic Names

Define a small set of sizes and deviate from it as little as possible. Hard-coded sizes with no system behind them break down at scale. Solo, default names like `text-sm` are fine when the usage rules are clear; on a team, name sizes by use (`text-body-sm`) so the rules survive other people.

## Heading Sizes Descend With Level

Map heading levels to descending steps of the type scale so a visually subordinate heading never overpowers its parent. Adjacent levels may share a size toward the small end of the scale as long as weight or spacing keeps them distinct. Pick the semantic element for meaning, and the visual size separately in CSS.

## Line-Height by Role

Headings tighter, around 1.1. Body copy 1.5 to 1.6. Prefer unitless values so line-height scales with the font size — a fixed `24px` doesn't. Tight line-height is for short text; anything that wraps to three or more lines needs at least 1.4, even in a height-constrained row.

## Letter-Spacing by Size

Large headings often look better with slightly negative letter-spacing. Small uppercase labels need a little positive letter-spacing, or the letters feel crowded. Body copy at reading sizes needs neither.

## Cap the Measure

Long lines make it hard for the eye to find the next one. Cap long-form text around 60–75 characters per line — any unit works, as long as a cap exists and the line length lands in range.

## Wrap Deliberately

Four declarations, four jobs:

- `text-wrap: balance` distributes text evenly across lines. Use it on headings.
- `text-wrap: pretty` stops a single short word landing on the final line. Use it on descriptions.
- `overflow-wrap: break-word` where a long word, link, or ID could escape the container.
- `white-space: nowrap` on labels and badges where a line break looks broken.

Skip `balance` and `pretty` in long-form text.

## Tabular Numbers on Changing Values

Digits have different widths by default, so timers, counters, and prices shift the layout as they update. Apply `font-variant-numeric: tabular-nums` to any value that changes.

## Truncate Without Losing Content

For a single line: `text-overflow: ellipsis` with `overflow: hidden` and `white-space: nowrap`. For several lines: `line-clamp`. Truncation hides content — when the missing text matters, keep the full value reachable in a tooltip or an expanded view.

## Write Copy Naturally, Style With CSS

Store text in natural case and control presentation with `text-transform`, so a redesign never means rewriting copy. Use smart punctuation in rendered text: curly quotes in prose, straight quotes in code; an en dash for ranges (`2010–2020`); the single ellipsis character, not three periods; `&nbsp;` to hold two words together across a line break; `&shy;` to say where a long word may break.

## Underlines From the Font

Default underlines sit wherever the browser decides. Pull position and thickness from the font's own metrics with `text-underline-position: from-font` and `text-decoration-thickness: from-font`; tune by hand with `text-decoration-thickness`, `text-underline-offset`, and `text-decoration-skip-ink`. `text-decoration-style` draws the line dotted, dashed, or wavy — a dotted underline is a common hint that a word carries extra information, like an abbreviation or a defined term. Color is the only part of a real underline that animates reliably — unless only color is animating, build the underline as a separate element instead of using `text-decoration`.

## Inputs at 16px on Mobile

iOS Safari zooms the whole page when an input's text is smaller than 16px. Two fixes hold the size at 16px and look different — ask which one the design wants: size the input up on mobile (`text-base sm:text-sm`, changing how it looks on small screens), or keep `font-size: 16px` and render the intended size with `transform: scale()`, compensating width and line-height (identical at every viewport, more code to maintain).

## Size and Contrast Floors

Start long-form body text at 16px, the browser default. Move off it only for a reason you can name: the typeface runs small, the measure is narrow, or the product is a dense professional tool. UI text can go smaller — 14px is a useful starting point for inputs and menus, 13px for captions, rarely below 12px. Inputs still need 16px on mobile. When text looks low-contrast, measure the actual rendered foreground/background pair and classify the requirement — don't change the project's colors unless asked.

## Font Smoothing on the Root

On macOS, text renders heavier than intended. Apply `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale` once on the root layout, never per component. Tailwind's `antialiased` utility covers both.

## Language and Bidi Behavior

Set `lang` so browsers and assistive technology pick the right pronunciation, quotes, and hyphenation. Set `dir` at the document or at the content boundary where direction changes. Preserve digit order, and use `<bdi>` to isolate a mixed-direction value.

## Keep Useful Text Selectable

Keep text selectable by default. `::selection` can carry brand into the reading experience, as long as the selected combination stays legible. `user-select: none` belongs on a draggable or gesture-driven surface where accidental selection interferes — never across the whole interface, and never because a button label happens to be highlightable.

## Before You Finish — Common Mistakes

| Mistake | Fix |
|---|---|
| Synthesized face differs from the design | Load the real face; disable only the verified synthesis mode |
| Child heading visually overpowers its parent | Map that section's hierarchy to descending scale steps |
| Heading element picked for its default size | Choose semantics first, then set the size in CSS |
| Orphan on the last line of a paragraph | `text-wrap: pretty` |
| Lopsided two-line heading | `text-wrap: balance` |
| Justified text in an interface | `text-align: start`; reserve justify for specific editorial layouts |
| Underline cuts through descenders | `text-decoration-skip-ink: auto`, `from-font` metrics |
| Mixed-direction value renders in the wrong order | Correct `lang`/`dir`; isolate the value with `<bdi>` |
| Selection disabled across application chrome | Restore it; suppress only where it conflicts with a drag or gesture |
| Extra-info hint with no visual cue | Dotted underline via `text-decoration-style: dotted` |
| Thin/Light weight on 14px UI text | Weight 400+ below 18px; thin weights are display-only |
| `leading-none` on a three-line card description | At least 1.4 on any text that wraps to 3+ lines |

## Reviewing and Reporting

**Severity:** HIGH makes text unreadable or truncates content with no way to recover it. MEDIUM breaks the type system or the heading hierarchy. LOW is isolated polish.

**Verification without a browser:** computed size and weight for each heading level, checked descending; declared line-height and measure; truncation rules checked against realistic string lengths. **With a browser:** resize the viewport to catch wrapping, widows, and truncation at real content lengths. Report every check that couldn't be run as "Not verified."

**Report format** — group findings under the principle each violates, ordered by severity, one row per root cause listing every location it appears in:

| Severity | Location | Before | After | Why |
|---|---|---|---|---|

`Location` is `path/to/file:line`. `Why` names the principle and the user impact. End with `Block` if any HIGH finding remains, `Approve` otherwise. Never approve coverage that wasn't actually inspected — if there's nothing to report, state "No actionable typography findings" and report what was verified.
