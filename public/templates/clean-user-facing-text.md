# Clean User-Facing Text

A final text-hygiene pass for prose you own or are authorized to process: audit for suspicious invisible Unicode, then rewrite to reduce mechanical AI-writing signals — while preserving every fact, claim, and the writer's actual voice. Two honest boundaries up front: Unicode cleanup is deterministic; statistical-signal reduction is best-effort. Never claim a rewrite proves human authorship or is undetectable, and never use this for undisclosed-authorship evasion (academic integrity submissions, and similar).

## When to Use

Use when asked to clean, humanize, polish, or finalize articles, manuscripts, reports, documentation, emails, product copy, UI text, Markdown, or HTML prose. Don't use for code-only tasks, and don't use to help someone misrepresent AI-assisted work as undisclosed solo human authorship where that matters (an academic submission under an integrity policy, for instance).

## Workflow

### 1. Identify the Prose

Find the text readers will actually see, as distinct from code, commands, and structural markup around it.

### 2. Protect Non-Prose Spans

Before touching anything, mark as untouchable: fenced and inline code, commands, paths, URLs, identifiers, API names, exact values, formulas, citations, and anything the user explicitly asks to keep verbatim.

### 3. Preserve Every Claim

Preserve every fact, number, name, citation, and requirement exactly. **Never invent a detail, name, number, quote, or source to make the prose easier to write or more varied.** If a fact is missing, flag the gap — don't fill it. The rewrite may sharpen, compress, or reorder; it may not add or remove claims.

### 4. Measure Before Rewriting

Score the input for AI-cadence density before touching it. If the density reads as low or medium, the measurable AI-density signals are already weak — verify the text reads naturally and otherwise leave it alone. Only engage the rewrite passes when density reads as genuinely high. Rewriting text that doesn't need it is a wasted pass that risks introducing errors for no benefit.

### 5. Establish the Writing Brief

- Use a voice sample only when the user owns it or is authorized to use it — never imitate a specific named person's voice without that authorization.
- With no sample, make the prose clear and natural without pretending to imitate anyone in particular.
- Never inject a voice the source lacks: no fake first-person anecdotes, no invented specifics, no forced contrarianism, no performed candor. Preserve the writer's own deliberate rough edges and domain terms rather than scrubbing them into blandness.
- Keep any required disclosures, genuine uncertainty, and the writer's actual point of view intact.
- Pick a register that fits the text (see Voice and Domain Presets below); default to general prose when unsure.

### 6. Strip Artifacts First (Deterministic Pass)

Before any rewriting, run a mechanical pass over the text for invisible Unicode artifacts and homoglyphs — characters that look identical to a normal letter or space but aren't, often introduced silently when copying from certain AI tools or web pages. This is a clean, marker-free starting point for the rewrite, and it costs nothing to run since it's fully deterministic.

Keep whitespace semantics by default — don't collapse non-breaking spaces, narrow no-break spaces, or other meaningful whitespace unless the user specifically asks for aggressive normalization, since that can change layout in ways the writer intended.

### 7. Rewrite Once

Apply the detector-aware levers (below) in order, in a single pass:

- Vary clause order, sentence boundaries, rhythm, connectors, and function words.
- Replace formulaic transitions and filler with direct, natural wording.
- Keep the concrete details and judgment that make the text recognizably the writer's own.
- Treat unusual grammar, repetition, directness, or phrasing as possible deliberate voice or accessibility choices — change them only when asked or when they create a genuine reading problem.
- Preserve the requested language, tone, structure, and formatting; never translate unless explicitly asked.
- For non-English text, use constructions native and fluent in that language rather than English sentence patterns translated literally.
- Don't add or remove claims merely to increase variation — variation is never worth a fabricated detail.

### 8. Strip Artifacts Again

Run the deterministic Unicode pass a second time on the rewritten output, to catch anything the rewrite itself introduced — smart quotes, stray em dashes, an accidental homoglyph from a paste.

### 9. Measure After

Score the rewritten text the same way as step 4. Report scores when meaningful; a lower after-score means the measurable signals moved — it is never a verdict from any detector, and it never overrides the fact-preservation and voice rules above.

### 10. Deliver

Return the polished result. Only include an audit or explanation when explicitly asked for one.

## Detector-Aware Levers (Ordered by Effectiveness)

Statistical AI-writing detectors score probability patterns: text that's too predictable (low perplexity), too even (low burstiness), and too full of stock phrases. Only engage these when step 4's density check reads high:

1. **Strip artifacts first, always.** Invisible characters and homoglyphs are mechanical markers that hurt against every detector family and cost nothing to remove — do this unconditionally, not just at high density.
2. **Kill the stock vocabulary.** Replace AI-overused words with plain, concrete ones: *delve, tapestry, testament, underscore, foster, seamless, multifaceted, myriad, paradigm shift, harness the power of, plays a crucial role, in today's fast-paced world, it is important to note.*
3. **Inject burstiness.** Vary sentence length deliberately — a short sentence after two long ones, and occasionally the reverse. A uniform mid-length cadence is one of the strongest statistical AI signals.
4. **Flatten the structure.** Break up formulaic sections: "despite X, the future looks bright" closers, forced groups of three, "challenges and opportunities" templates, announcement-style headers.
5. **Match a real voice and keep specifics.** Prefer concrete detail from the actual source over generic phrasing. Never invent a fact to raise variance — a lower score achieved with a fabricated detail is still a failed rewrite, full stop.
6. **Normalize punctuation and assistant-voice tells.** Straight quotes, no em-dash overuse, no bolded mini-headers scattered through prose, no "I hope this helps," no "as an AI," no hedged-perfectionism disclaimers beyond what's actually required.

**Honest caveat:** these levers target statistical detectors specifically. Trained neural classifiers are adversarially trained against exactly this style of paraphrase edit, so against those, the only real lever is genuinely matching a real human distribution of writing — and even that isn't guaranteed to work.

## Voice and Domain Presets

| Preset | Personality | Rhythm | Eliminate |
|---|---|---|---|
| **General prose** (default) | Author's voice first, no injected stance | Mild variation, natural connectors | Stock AI vocabulary, uniform cadence |
| **Essay / blog** | Stance, asides, mixed feelings welcome | Strong length variation, uneven rhythm | Significance hype, aphorism formulas, rule-of-three lists |
| **Technical / documentation** | Neutral, precise | Moderate variation, short declaratives | Promotional language, em-dash overuse, bolded mini-headers; keep code and identifiers intact |
| **Academic / professional** | Formal, evidence-first | Restrained variation, controlled hedging | Over-claiming verbs, novelty padding, citation dumps; keep required discipline |
| **Business / product copy** | Plain claims, concrete value | Direct sentences | "Seamless," "empower," vague benefits, rule-of-three; keep required disclaimers |
| **Fiction** | Invented detail allowed (this genre is the exception to strict fact-preservation) | Variation to fit the narrator | Uniform cadence, editorial clichés; preserve dialect and quirks |

**Plain-language sub-mode**, for procedures, runbooks, and error messages: short common words, one instruction per sentence, imperative verbs for steps, one meaning per term, no marketing adjectives or unbounded hedging. This is a clarity floor, not a personality — it strips voice deliberately while keeping every claim and requirement intact. Use the voice-preserving presets above for essays, posts, and personal prose instead.

## Code Boundary

When prose and code are mixed, rewrite prose only. Never rename variables, alter string literals, reformat code, or change executable output as part of this pass. Preserve any executable snippet inside a Markdown or HTML file byte-for-byte wherever practical.

## Reporting

When an audit is requested, distinguish clearly between three tiers:

- **Verifiable**: Unicode characters removed or replaced, with counts; stylometry scores before and after, reported as a gauge, never a verdict.
- **Best-effort**: prose rewritten to alter token and syntax patterns.
- **Not established**: claims of detector evasion, proof of human authorship, or removal of any vendor's secret-key watermark — none of these can honestly be claimed by this process.

## Tips

- Run the artifact-stripping pass unconditionally, even on text that scores low on AI-density — invisible Unicode characters are a real, separate hygiene problem from writing style, and they're free to fix.
- The measure-before step matters as much as the rewrite itself — rewriting text that's already fine risks introducing errors or flattening a deliberate voice for zero real benefit.
- When a user provides a voice sample, confirm they actually own it or are authorized to use it before applying it — this preserves the line between "sound like my own established voice" and "impersonate someone else's."

## Limitations

- Only for text the user owns or is authorized to process — never use to help disguise AI involvement where authorship disclosure genuinely matters (a graded academic submission, a professional certification, and similar contexts).
- The statistical-detector levers are honestly limited: they work against perplexity/burstiness-style detectors, but trained neural classifiers are adversarially trained against exactly this kind of edit, and no claim here should be read as guaranteed evasion of any specific tool.
- Never a substitute for actually disclosing AI assistance where a policy, publication, or relationship requires that disclosure — this tool improves prose quality and strips accidental artifacts; it makes no authenticity claims on its own.
