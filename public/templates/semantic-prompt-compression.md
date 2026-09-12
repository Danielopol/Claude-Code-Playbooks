# Semantic Prompt Compression

Re-encode verbose prose into a dense, telegraphic register — punctuation as connectives, label frames, verbless assertions — without losing normativity or precision. Use for compressing system prompts, tool/function descriptions, skill bodies, and agent instructions: text a model executes cold, with no author present to disambiguate.

**Compression is re-encoding, not word deletion.** Filtering function words out of an English sentence leaves a damaged English sentence. Instead, re-frame each claim in a register whose grammar is punctuation and layout — then the function words have no work left and drop out on their own. Compression that forces the reader (or the model) to guess is a bug, not a saving.

## Procedure

### 0. Density Gate — Check Before Touching Anything

Two signals, in order: are articles and copulas already near-absent, and what's the actual token delta on a representative section once compressed? If the text is already in this register (a house-style prompt, a tool doc, a spec), or the measured delta is under roughly 10%, **stop and keep the original.** Bullet length alone is a weak signal — API literals and enumerations inflate it without meaning the prose is loose. On already-dense text, the remaining words *are* the payload, and the expected saving is smaller than the expected loss.

### 1. Split Into Atomic Claims

One definition, obligation, default, or fact per unit.

### 2. Inventory the Payload Before Deleting Anything

List every load-bearing token: identifiers, error/exception names, throw conditions, defaults with their units, bounds, and every MUST/NEVER/PREFER line. Anything dropped after this point is a loss declared deliberately, not discovered later by accident.

### 3. Cut What the Model Already Knows

Generic statements ("JSON is a text format," "tests catch regressions") get deleted outright. Keep only what's specific to this tool, repo, or domain.

### 4. Cut Restatements

Merge every duplicate of one rule into a single canonical line, placed where it's needed. Two statements of one rule with genuinely *different scope* are not duplicates — don't merge those.

### 5. Frame Each Claim

The frame picks the construction: definition, obligation, default, condition→consequence, enumeration, or verdict.

| Frame | Verbose | Compressed |
|---|---|---|
| Definition | "The `name` field is the stable launch identifier." | `name: stable launch id.` |
| Obligation | "You must call open before you can run code." | `MUST open before run.` |
| Default | "If no value is given, the timeout defaults to 30 seconds." | `Default 30s.` |
| Condition→consequence | "Because navigation re-renders the page, refs become stale, so you should snapshot again." | `Navigation invalidates refs → re-snapshot.` |
| Enumeration | "The action may be open, close, or run." | `action: open, close, run.` |
| Verdict | "Claim A is true, and claim B is false as stated." | `A true; B false as stated.` |
| Precondition | "This requires that the branch has already been checked out." | `Requires prior checkout.` |

### 6. Hoist Repeated Qualifiers

Three mentions of "relative to the repo root" collapse into one scope line up top: `All paths repo-relative.`

### 7. Re-Encode, Then Verify

Run the Verification checklist below before shipping.

## Constructions

- **Verbless assertion** — `X true` / `X false` / `X required` / `X unsupported`. The copula is deleted; the predicate carries.
- **Label frame** — `X: value` for "the X is / means / consists of." One colon per line, never nested.
- **Subject elision across a run** — name the subject once, then chain bare predicates: `Integer since …; positive since …; unique.`
- **Asyndeton** — parallel items with no conjunction: `articles, copulas, expletives`.
- **Scope declaration** — one line retypes everything after it: `All paths repo-relative.` · `Times in ms.`
- **Lazy specification** — state only enough to decide, with the bound visible somewhere: `over the bound; exact value irrelevant.`
- **Metonymy** — an object stands for the proposition about it, only where exactly one reading exists: `y=z implies (1,1,1).`

## Operators — Punctuation Carries the Connective

`:` announces/defines · `→` yields/produces · `⇒` therefore/concludes · `—` gloss or "therefore" · `/` equivalently · `;` next step, same topic · `,` inference chain · `≠` neither/nor over a list · `✓` verified/discharged · `>` precedence · `|` alternatives within an enumeration.

**Ambiguity is the only disqualifier, never unfamiliarity.** Where a glyph takes a second reading in its actual slot — a dash as a parenthetical, a slash as a path separator, a comma as a plain list comma — write the word instead.

**Symbols don't save tokens; structure does.** A one-for-one word-to-glyph swap on common connective words often costs the same or more in tokens than the word itself under common tokenizers, because many symbolic glyphs cost their own full token. Substitute a glyph only where it eats a genuinely multi-word phrase. Never invent a private glyph — a bespoke symbol needs a legend, and the legend costs more than the symbol saves.

## Deletion Rules

**Always delete:** articles; copulas (is/are/was/be/been); expletive there/it; the complementizer "that"; relative pronouns; intensifiers (very, quite, really); filler ("in order to" → to, "due to the fact that" → because, "it is important to note that" → nothing); politeness ("please," "feel free to"); hedged framing ("you may want to consider").

**Delete unless load-bearing:** auxiliaries (have/do/will); pronouns with an obvious referent; prepositions of/for/to/in/on/at/by; conjunctions where the list is obvious; adverbs already implied by the verb.

**Never delete — this is the payload:**

- Normative modals: MUST, NEVER, SHOULD, MAY. The instruction word *is* the instruction.
- Negation and exception: not, no, never, without, none, except, unless.
- Numbers, units, bounds, quantifiers: "at least 5," "≤100," "1-indexed."
- Conditionals and causality: if, unless, because, since, so.
- True hedges: "approximately," "usually," "appears" — deleting one asserts a certainty the source didn't actually have.
- Exact strings: identifiers, API names, flags, paths, regexes, format literals, error text.
- Examples that demonstrate a shape — compressing an example destroys the thing it demonstrates.
- Prepositions where the relation flips meaning: "read from X" is not "read to X."
- Throw and failure conditions, and warnings about silent failure — they read like padding and are actually behavioral.
- Scar tissue — a line that exists because someone already made that mistake. It looks redundant *because* it's now preventing the error. Check history before cutting anything that looks obvious.

## Never Ship This — the Private Register

The scratchpad style that produces good rough drafts of this register carries features that only work while the writer and reader are the same person, minutes apart. Strip every one of them before delivery:

- **External deixis** — "A," "B," "the equation above." Shipped text is self-contained: name the thing.
- **Scratchpad residue** — "Hmm," "Actually," "Wait," a goal revised mid-line, an abandoned clause.
- **Layered corrections** — a wrong value left standing beside its fix. A cold reader can't tell which pass won; delete the loser.
- **Dead branches** — an abandoned approach left next to the chosen one. A model may execute the abandoned one.
- **Ambiguous ellipses and question marks** — in notes they mean omitted or "check this"; in shipped text they mean nothing. Drop both.
- **Nested colons** — unparseable cold. One colon per line, always.
- **Unmarked instruction vs. data** — a bare directive sitting in plain content is indistinguishable from content. Keep instructions in a marked channel: a heading, a tag, or a MUST line.
- **Revisiting instead of rewriting** — fine while thinking, fatal in a shipped prompt. One canonical statement per rule.

## Tool and Skill Descriptions Are Different

The body compresses hard. The trigger does not.

- A tool's or skill's `description` field is **retrieval surface**, not documentation — it's matched against the user's own varied phrasing. Keep natural, keyword-redundant alternatives even though a human reader needs only one of them. Compress the body; never compress the trigger.
- Keep a parameter's type, enum, or default in the prose unless you've specifically confirmed the model already sees that exact information from the underlying schema. Defaults are the trap: schemas frequently omit the default value entirely, and even when present it carries no *direction* — a boolean flag's name doesn't say what it actually does. Absent real evidence the schema already covers it, keep the default, its unit, and any precedence rule in the prose.
- Use imperative phrasing for actions, label frames for facts.

## Worked Example

**Source** (verbose): "The `timeout` parameter controls how long the tool will wait for the process to become ready. If you do not provide a value, it defaults to 30 seconds. Note that if you have specified both a log pattern and a port, then both of these conditions must be satisfied before the process is considered ready."

**Compressed:** `Readiness timeout: default 30s. Log pattern + port both supplied ⇒ BOTH must pass.`

**Rejected as over-compressed:** `timeout 30 log+port both` — this loses the unit, loses that 30 is a *default* rather than a fixed value, loses the obligation, and leaves "both" dangling with no clear referent.

## Verification

1. **Declare every loss, then judge the draft against that list.** Name each dropped claim, qualifier, default, example, or exact string, and why the text is still correct without it. A declared loss is auditable; an undeclared one is a silent regression.
2. **Scan for new ambiguity** at every connective glyph — can a reader assign it a second reading that the source didn't have? A dropped receiver, a silently pluralized noun, and similar slips are exactly what this scan catches.
3. **Measure the actual token delta** with the target tokenizer — word counts and function-word rates don't predict it reliably. Expect no fixed ratio: a verbose paragraph might compress 60%+, while an already-dense house-style prompt might barely move. Under roughly 10% is the signal to stop, revert, and keep the original.
4. **Stop rule**: stop deleting the moment the next deletion would make the reader guess. Correctness beats compression ratio, always.

## Tips

- Run the density gate honestly — the biggest failure mode isn't under-compressing, it's compressing an already-dense house-style prompt and silently losing a `NEVER assume …` rule or a throw condition in the process.
- When in doubt about a connective glyph, write the word. The whole point of this register is that a model executes it cold with no author present to disambiguate — an ambiguous glyph is a worse outcome than a slightly longer sentence.
- Treat "scar tissue" lines with real suspicion before cutting them — a line that looks redundant because it already prevents a known failure mode is exactly the kind of thing a naive compression pass deletes first and regrets later.

## Limitations

- Built for load-bearing, machine-executed text (system prompts, tool descriptions, skill bodies) — applying this register to human-facing narrative prose, documentation meant to teach a concept, or marketing copy actively works against those genres' actual goals.
- The token-cost claims about specific glyphs are tokenizer-dependent — different models' tokenizers assign different costs to the same symbol, so always measure the actual delta with the target model's tokenizer rather than assuming a glyph is free.
- This is a text-level compression discipline, distinct from information-architecture concerns like what belongs in-file versus behind a pointer — pair it with a document-structure playbook for that separate decision.
