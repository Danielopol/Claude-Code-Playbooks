# Documentation Review System

A mode-routed process for reviewing, improving, rewriting, authoring, or planning documentation. Diagnoses a page against its doc type and a fixed set of quality dimensions before touching a single sentence, then chooses an intervention level that actually matches what's wrong — instead of defaulting to line edits on a page whose real problem is its shape.

## When to Use

- Asked to review, improve, rewrite, or author a documentation page
- Asked for advice on page structure, doc type, audience, or content strategy
- Asked to fix formatting, style, or compliance issues in docs

## Use a Light Touch When

- The request is a trivial grammar or typo fix that doesn't need full diagnosis
- The page is already structurally sound and only needs minor editorial cleanup

## Workflow

Follow this sequence for every request. Steps 1–4 are diagnosis; steps 5–7 are action.

### 1. Determine the Requested Outcome

Read the request and map it to a mode:

| Request Pattern | Mode |
|---|---|
| "Fix links, callouts, formatting" | `maintenance` |
| "Make this clearer", "improve this page" | `improve` |
| "This doc is a mess; rewrite it" | `rewrite` |
| "Draft docs for feature X" | `author` |
| "What kind of page should this be?" | `strategy` |
| "Review this doc" (unspecified) | **hybrid** — see below |

**Hybrid behavior** for vague asks like "review this doc":
- If the draft is obviously weak or the ask implies planning → critique-first (lead with diagnosis).
- If the page is decent and the ask implies cleanup → improve-first (lead with edits).

**Default:** when ambiguous, default to `improve`, not `maintenance` — most "review this" requests want more than formatting fixes.

### 2. Determine the Primary Doc Type

Classify the page:

- **concept** — explains what something is and why it matters
- **task** — walks the reader through accomplishing a goal
- **reference** — lookup for options, API, or config
- **troubleshooting** — diagnose and fix a problem
- **migration** — move from one version or approach to another
- **decision guide** — choose between options

Always select **one** primary type, even if the page contains secondary elements. After selecting it, identify any **secondary sections** — sections with their own heading whose content follows a different doc type's shape (a `task` page with an embedded `troubleshooting` sidebar, say). Note these for Step 3.

### 3. Diagnose the Draft

Evaluate the page against these quality dimensions, in order:

1. **Intent clarity** — does the page know what job it's doing?
2. **Audience fit** — is it pitched at the right reader (first-timer vs. expert)?
3. **Information shape** — does its structure match its doc type?
4. **Conceptual clarity** — are the underlying ideas actually explained, or just named?
5. **Task usability** — can a reader actually follow it and succeed?
6. **Example quality** — are examples concrete, correct, and representative?
7. **Economy** — is anything here padding, throat-clearing, or redundant with another page?

For secondary sections, evaluate dimensions 3 (Information Shape) and 5 (Task Usability) against the secondary section's *own* doc type, not the page's primary type. All other dimensions apply page-wide.

If the page shows signs of structural weakness, check it against these common antipatterns:

- **Mixed-type sprawl** — a page trying to be a concept doc, a task guide, and a reference all at once, with no section doing any one job cleanly.
- **Buried lede** — the actual point arrives three sections in, after throat-clearing the reader has to wade through.
- **Reference-as-narrative** — lookup content (a table's worth of options) forced into paragraph prose instead of a table or list.
- **Task-as-concept** — a how-to page that explains theory at length before ever telling the reader what to actually do.
- **Orphaned example** — a code sample or walkthrough with no surrounding explanation of when or why to use it.
- **Split-brain page** — content that serves two audiences (a beginner and an API consumer, say) with neither served well.

### 4. Choose the Intervention Level

Use these thresholds:

- No structural issues, minor style problems → `maintenance`
- Structure is okay but framing, order, or examples are weak → `improve`
- Structure is wrong for the page's job → `rewrite`
- Page doesn't exist yet → `author`
- User wants advice, not edits → `strategy`

**Hard rule:** when the draft is structurally weak, don't stop at sentence-level edits. Reorder, split, replace examples, or rewrite the page's shape.

**Split/escalation rule:** if the dominant job is unclear, or the page serves multiple unrelated jobs, switch to `strategy` mode or recommend a page split before polishing. A well-structured secondary section is not, by itself, a reason to split the page.

### 5. Improve or Plan

Execute based on the chosen mode:

- **`maintenance`** — apply editorial and compliance fixes only.
- **`improve`** — strengthen framing, order, explanation, and examples; keep the page's identity.
- **`rewrite`** — materially replace the page; preserve sound content, discard or restructure the rest.
- **`author`** — write the page from scratch using the primary doc type's shape as a guide.
- **`strategy`** — return a planning artifact, not an edited page:
  - Audience
  - Page job
  - Primary doc type
  - Recommended outline
  - Split/merge recommendation (if applicable)
  - Preserve list (content worth keeping)

  Do not edit files or run any validation in `strategy` mode.

### 6. Apply House Style

For edit modes (`maintenance`, `improve`, `rewrite`, `author`), apply the project's actual style guide last — voice, tone, heading conventions, link formatting, component usage, frontmatter rules. This step is always downstream of structural and editorial work, never the first pass: fixing style on a structurally broken page wastes the pass.

### 7. Validate

For edit modes only, run whatever validation the project actually has (a docs linter, a build check, a link checker). Fix any errors reported, then run it again to confirm. Skip this step entirely in `strategy` mode or when no files were edited.

## Tips

- The hybrid-mode judgment call in Step 1 is worth getting right — leading with a wall of critique on a page the user just wants lightly cleaned up reads as pedantic, and leading with quiet edits on a page that's structurally broken buries the real problem.
- Don't let a well-written secondary section talk you out of noticing the page's primary type is wrong. A gorgeous troubleshooting sidebar doesn't fix a concept page that never explains the concept.
- When diagnosing Economy (dimension 7), actively check for content that duplicates another page rather than only judging the page in isolation.

## Limitations

- Assumes the page (or planned page) sits in a real docs tree with an identifiable audience and doc type — this doesn't help much with marketing copy or free-form long-form writing.
- Validation in Step 7 is a placeholder for whatever tooling the project actually has; wire it to the project's real linter/build check rather than skipping it.
- Designed for single-page reviews. A full docs-site information-architecture pass (which pages should exist at all) is a `strategy`-mode judgment call, not something this workflow automates end-to-end.
