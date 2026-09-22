# Technical Writing Style

Write prose that reads like human technical documentation rather than LLM output. Applies to docstrings, comments, limitations/caveats sections, READMEs, commit messages, and PR descriptions. The reader is an engineer looking for a fact — give them the fact. You are not persuading or building to a conclusion: say what happens, when, and what it costs.

## Tells to Avoid

### Significance Instead of Mechanism

The most common LLM tell. If a sentence would fit unchanged in any other project's docs, it carries no information.

- ✗ "This ensures the sandbox remains secure."
- ✓ "Every operation runs relative to a `Dir` opened at mount time, so `..` and symlinks cannot reach outside it."
- ✗ "Resource limits provide robust protection against runaway code."
- ✓ "The VM polls allocator usage every 255 instructions; crossing the allocator's hard limit exits the worker with `OOM_EXIT_CODE`."

### Throat-Clearing

Openers that delay the sentence: "It's worth noting that," "It's important to understand," "In essence," "Simply put," "At its core," "Let's take a look at." Delete them — the sentence underneath is the content.

- ✗ "It's worth noting that overlay writes are discarded when the feed ends."
- ✓ "Overlay writes are discarded when the feed ends."

### The "Not Just X, But Y" Reveal

Building to a payoff is an essay move. Docs don't need one.

- ✗ "`heap.rs` isn't just another module — it's the foundation of the entire safety model."
- ✓ "`heap.rs` contains the `unsafe` code that `HeapReader` soundness depends on. Changes need explicit review."

### Adjectives Doing the Work of Facts

"Powerful," "seamless," "robust," "elegant," "blazing fast," "significantly," "dramatically." Replace with a number, a mechanism, or nothing.

- ✗ "Overlays are capped at a reasonable size."
- ✓ "`memory_usage_limit` caps retained overlay data at 100 MB by default; exceeding it raises `MemoryError` in the sandbox."

### Restating What the Reader Can See

A docstring that repeats the signature wastes the line it occupies. Say why it exists, what it costs, or where it bites.

- ✗ "Adds a mount to the mount table." (on `MountTable::mount`)
- ✓ "Opens the host directory once; later operations run against that descriptor, so renaming the path afterwards does not detach the mount."

### Summarizing Yourself

Don't close a section by restating it, and don't announce what the next section will do.

- ✗ "In summary, mounts are confined structurally rather than by checking."
- ✓ (nothing — you already said it)

### War Stories

Provenance is worth a clause only when it changes what the reader does. How the bug was found usually doesn't.

- ✗ "This was demonstrated against a live deployment during an internal red-team exercise, where sandboxed code wrote a module and the client executed it during ordinary result conversion."
- ✓ "Sandboxed code can write a module not yet imported and have the host's next `import` run it, including imports the library makes itself."

## Smoothness — A Different Failure

The tells above pad out empty content. Smoothness dresses up real content, which makes it harder to spot and easier to approve without noticing.

Sentences engineered for rhythm read as conclusions, so the prose sounds like it's arguing when it's only listing facts. Balanced clauses and a stressed last syllable make a sentence sound authoritative whatever it contains — one fact wearing three clauses gets read as three facts. Reference prose usually ends flatly, on a qualifier or a noun phrase, because the writer stopped when the information ran out, not when the cadence resolved.

**Timing for suspense** — commas and subordinate clauses arranged to delay the point:

- ✗ "The sandbox cannot execute what it writes, but your machine will, later, with your privileges, and the path from one to the other is easy to miss."
- ✓ "Files written by sandboxed code stay on the host, where other programs may execute them."

**Telling the reader how to feel** — "you did not choose," "easy to miss," "without being asked," "often does." These supply a mood in place of a fact.

- ✗ "`sys.path[0]` is a directory you did not choose."
- ✓ "`sys.path[0]` is the script's directory, or the cwd for `python -m`, `python -c`, and the REPL."

**Triples and reversals** — a three-item list where one item carries the fact, then a "but" clause positioned as the payoff.

- ✗ "Sandboxed code reads, writes, and deletes normally and sees its own changes, but nothing reaches your disk."
- ✓ "Writes are kept in memory and discarded when the feed ends. Sandboxed code still sees its own writes."

**The quotable closer** — a generalization at the end of a section, memorable, carrying no new fact. Delete it; the section ends at its last fact.

- ✗ "Principles alone produce prose that follows the rules and still reads like an LLM."
- ✗ "Most drafts get better by deleting the first sentence and the last."

**Symmetry for its own sake** — three-item lists where two items are real, paragraphs of matched length, every bullet opening with a bolded term. If the shape came first and the content was fitted to it, cut back to what's true.

**Three checks for smoothness:**
1. Does the sentence end on a beat? If the last three words could be duller without losing meaning, they were there for rhythm.
2. Strip the rhythm and count the facts. One is the usual answer.
3. Is the sentence about the system, or about how the reader should feel?

## Industry Metaphor

Software described as objects moving through space, or as people with intentions, is the register of a startup design review, not reference documentation — well-known reference docs use plain verbs throughout ("raises," "returns," "is stored in," "propagates," "Changed in version X.Y").

The metaphor also deletes the mechanism. "The error surfaces" doesn't say whether it raises, returns, or logs. "Wire the tracker through" doesn't say parameter, field, or global. "It lands in the next release" doesn't say merged or released.

**Motion and logistics:**

| Instead of | Write |
|---|---|
| lands, landing | merged, released in X |
| ship, shipping | release |
| spin up, stand up | start, launch |
| wire up, plumb through | pass, connect |
| thread X through | pass X as a parameter |
| bubble up | propagate, or name the caller |
| surface (verb) | raise, return, report, log |
| hand back, hand off | return, transfer |
| bake in, baked into | built in, compiled in |
| punt on | defer, skip, leave to |

**Structure as furniture:**

| Instead of | Write |
|---|---|
| seam | interface, boundary |
| surface, surface area | API, the public functions |
| escape hatch | override, opt-out |
| knobs, dials | options, settings |
| load-bearing | required, relied on by X |
| X-shaped | with the same interface as X |
| lives in | is defined in, is stored in |
| sits on top of | wraps |
| under the hood | internally |

**Code with intentions:**

| Instead of | Write |
|---|---|
| the checker is happy | the check passes |
| knows about, is aware of | reads, checks, has a field for |
| talks to | sends requests to |
| teach the parser to | add X to the parser |
| wants, expects (of code) | requires |
| reaches into | accesses, reads |

Also avoid: "for free," "just works," "out of the box," "first-class," "table stakes," "opinionated," "non-trivial," "unlock," "blast radius," "paper over."

In prose:

- ✗ "Errors from the worker surface to the caller." → ✓ "`Worker::feed` returns `PoolError::Crashed` when the worker exits without a `FatalError` event."
- ✗ "The tracker is threaded through the whole VM." → ✓ "Every allocation path takes `&ResourceTracker` as a parameter."
- ✗ "`WorkerTransport` is the `NativeSession`-shaped seam." → ✓ "`WorkerTransport` has the same methods as `NativeSession`, so either can be passed where the other is expected."

## Applying This

When reviewing existing prose that reads as smooth, salesy, or generic: identify which tell or metaphor category is responsible, rewrite to name the actual mechanism, and check the three smoothness tests before calling it done. When writing new documentation: state what happens, when it happens, and what it costs — in that order — and stop when the information runs out rather than reaching for a closing line.
