# Excalidraw Diagram Generator

Generate Excalidraw diagrams from text content in three output modes: Obsidian (`.md`, opens directly in the Obsidian Excalidraw plugin), Standard (`.excalidraw`, opens/edits/shares on excalidraw.com), and Animated (`.excalidraw` with a per-element animation order, for use with excalidraw-animate).

## Choosing the Output Mode

| Trigger words | Mode | File format | Use case |
|---|---|---|---|
| "Excalidraw," "diagram," "flowchart," "mind map" | Obsidian (default) | `.md` | Open directly in Obsidian |
| "standard excalidraw" | Standard | `.excalidraw` | Open/edit/share on excalidraw.com |
| "animate," "animated excalidraw" | Animated | `.excalidraw` | Drag into excalidraw-animate to generate an animation |

## Workflow

1. Detect the output mode from the trigger words above.
2. Analyze the content — identify concepts, relationships, and hierarchy.
3. Choose the diagram type (see below).
4. Generate the Excalidraw JSON (add an animation order if Animated mode).
5. Output in the correct format for the detected mode.
6. Save automatically to the current working directory.
7. Tell the user the file path and how to use it.

## Output Formats

### Mode 1: Obsidian Format (Default)

Output exactly this structure, with no modifications:

```markdown
---
excalidraw-plugin: parsed
tags: [excalidraw]
---
==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠== You can decompress Drawing data with the command palette: 'Decompress current Excalidraw file'. For more info check in plugin settings under 'Saving'

# Excalidraw Data

## Text Elements
%%
## Drawing
```json
{complete JSON data}
```
%%
```

Key points: frontmatter must include `tags: [excalidraw]`; the warning message must be included in full; the JSON is wrapped in `%%` markers; no `excalidraw-*` plugin settings other than `excalidraw-plugin: parsed`. File extension: `.md`. The `## Text Elements` section stays empty (only `%%` delimiters) — the Obsidian plugin auto-populates it from the JSON, so don't manually list text content.

### Mode 2: Standard Excalidraw Format

Pure JSON, openable on excalidraw.com:

```json
{
  "type": "excalidraw",
  "version": 2,
  "source": "https://excalidraw.com",
  "elements": [...],
  "appState": { "gridSize": null, "viewBackgroundColor": "#ffffff" },
  "files": {}
}
```

`source` uses `https://excalidraw.com` (not the Obsidian plugin URL). Pure JSON, no Markdown wrapping. File extension: `.excalidraw`.

### Mode 3: Animated Excalidraw Format

Same as Standard, but each element adds a `customData.animate` field controlling animation order:

```json
{
  "id": "element-1",
  "type": "rectangle",
  "customData": {
    "animate": { "order": 1, "duration": 500 }
  }
}
```

Animation order rules: `order` is playback order (1, 2, 3...) — lower appears first; `duration` is the element's drawing duration in milliseconds, default 500; elements sharing the same `order` appear simultaneously; recommended order is title → main framework → connection lines → detail text. Usage: generate the `.excalidraw` file, drag it into excalidraw-animate, click Animate to preview, then export as SVG or WebM. File extension: `.excalidraw`.

## Diagram Types and Selection Guide

| Type | Use case | Approach |
|---|---|---|
| Flowchart | Step-by-step processes, workflows, task sequences | Connect steps with arrows, clearly show flow |
| Mind Map | Concept expansion, topic categorization, brainstorming | Radiate outward from a central core |
| Hierarchy | Org charts, content levels, system decomposition | Build level nodes top-down or left-to-right |
| Relationship | Dependencies, influences, interactions between elements | Lines between shapes with arrows and labels |
| Comparison | Side-by-side analysis of two or more approaches | Two columns or table format, comparison dimensions labeled |
| Timeline | Event progression, project milestones, evolution | Time as axis, mark key dates/events |
| Matrix | Two-dimensional categorization, priority grids, positioning | Establish X/Y dimensions, place items on the plane |
| Freeform | Scattered content, brainstorming, initial gathering | No structural constraints, freely place blocks and arrows |

## Design Rules

### Text and Format

- All text elements use `fontFamily: 5` (the Excalifont handwriting font).
- Replace `"` with `『』` and `()` with `「」` in element text.
- Font size hard minimums (below these, text is unreadable at normal zoom): title 20–28px (min 20); subtitle 18–20px; body/labels 16–18px (min 16); minor annotations 14px only, used sparingly. Never go below 14px.
- Line height: all text uses `lineHeight: 1.25`.
- Text centering: standalone text elements don't auto-center — calculate manually: `estimatedWidth = text.length * fontSize * 0.5`, then `x = centerX - estimatedWidth / 2`. Example: "Hello" (5 chars, fontSize 20) centered at x=300 → estimatedWidth = 50 → x = 275.

### Layout and Design

- Keep all elements within a 0–1200 x 0–800 canvas area.
- Minimum shape size for rectangles/ellipses with text: 120×60px.
- Minimum element spacing: 20–30px, to prevent overlap.
- Use different colors and shapes to distinguish information levels.
- Use rectangles, circles, and arrows to organize information — no emoji in diagram text; use simple shapes or color coding instead.

### Color Palette

**Text colors (`strokeColor` for text):**

| Purpose | Hex | Description |
|---|---|---|
| Title | `#1e40af` | Deep blue |
| Subtitle/connectors | `#3b82f6` | Bright blue |
| Body text | `#374151` | Dark gray (minimum `#757575` on white background) |
| Emphasis/highlight | `#f59e0b` | Gold |

**Shape fill colors (`backgroundColor`, `fillStyle: "solid"`):**

| Hex | Semantic | Use case |
|---|---|---|
| `#a5d8ff` | Light blue | Input, data source, primary nodes |
| `#b2f2bb` | Light green | Success, output, completed |
| `#ffd8a8` | Light orange | Warning, pending, external dependency |
| `#d0bfff` | Light purple | Processing, middleware, special items |
| `#ffc9c9` | Light red | Error, critical, alert |
| `#fff3bf` | Light yellow | Notes, decisions, planning |
| `#c3fae8` | Light teal | Storage, data, cache |
| `#eebefa` | Light pink | Analysis, metrics, statistics |

**Region background colors** (large rectangle + `opacity: 30`, for layered diagrams): `#dbe4ff` frontend/UI layer; `#e5dbff` logic/processing layer; `#d3f9d8` data/tools layer.

**Contrast rules:** text on a white background must be no lighter than `#757575`; on a light fill, use the dark color variant (e.g. `#15803d` on light green, not `#22c55e`); avoid light-gray text (`#b0b0b0`, `#999`) on white backgrounds.

## JSON Element Structure

**Every element requires these fields.** Do not add extra fields like `frameId`, `index`, `versionNonce`, or `rawText` — they can cause issues on excalidraw.com. `boundElements` must be `null`, not `[]`. `updated` must be `1`, not a real timestamp.

```json
{
  "id": "unique-id",
  "type": "rectangle",
  "x": 100, "y": 100,
  "width": 200, "height": 50,
  "angle": 0,
  "strokeColor": "#1e1e1e",
  "backgroundColor": "transparent",
  "fillStyle": "solid",
  "strokeWidth": 2,
  "strokeStyle": "solid",
  "roughness": 1,
  "opacity": 100,
  "groupIds": [],
  "roundness": {"type": 3},
  "seed": 123456789,
  "version": 1,
  "isDeleted": false,
  "boundElements": null,
  "updated": 1,
  "link": null,
  "locked": false
}
```

`strokeStyle` values: `"solid"` (default), `"dashed"` (optional paths, async flows, weak associations), `"dotted"`.

Text elements add these fields on top of the base template (do not include `rawText`):

```json
{
  "text": "Display text",
  "fontSize": 20,
  "fontFamily": 5,
  "textAlign": "center",
  "verticalAlign": "middle",
  "containerId": null,
  "originalText": "Display text",
  "autoResize": true,
  "lineHeight": 1.25
}
```

## Coordinates

Origin (0,0) is top-left. Keep all elements within the recommended 0–1200 x 0–800 pixel range. Every element needs a unique `id` (a plain string like `"title"` or `"box1"` is fine).
