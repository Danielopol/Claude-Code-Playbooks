# Simplified Technical English for Docs

Write or rewrite technical text using the discipline of ASD-STE100 Simplified Technical English — the controlled-language standard aerospace and defense manufacturers use for maintenance documentation — adapted for software docs, runbooks, error messages, release notes, and incident reports. The rules exist so a tired, possibly non-native reader can't misread an instruction. As a side effect, they strip out most of the telltale signs of unedited AI-generated prose: long sentences, synonym rotation, hedging, and filler.

Write for that tired reader. Every sentence has to survive a single read.

## Two Modes

- **Pragmatic (default)** — for docs, READMEs, and error messages where the goal is just clarity. Apply the structural rules below; keep real domain words ("idempotent," "webhook," "endpoint").
- **Strict** — when someone explicitly asks for STE or standards compliance. Apply the structural rules plus full vocabulary discipline, and note that true compliance requires the official ASD dictionary (free at asd-ste100.org).

## Step 1: Classify Every Passage

Every passage is either **procedural** (tells the reader what to do) or **descriptive** (explains what something is or does). Don't mix them in one passage — a "Getting Started" section is procedural; an "Architecture" section is descriptive; a note embedded inside a procedure is descriptive even though it lives inside a procedural section.

| | Procedural | Descriptive |
|---|---|---|
| Verb form | Imperative: "Install the pump." | Simple present/past/future |
| Sentence limit | 20 words | 25 words |
| Unit rule | One instruction per sentence | One topic per paragraph, max 6 sentences |

## Step 2: Fix Your Vocabulary Before Drafting

Pick one verb for the check/verify/confirm/validate concept and use only that one throughout the document. Do the same for config/settings/options, for delete/remove/drop, for run/execute/invoke, and for show/display/render. One item, one name — calling the same thing two different names across a document is exactly the kind of ambiguity this whole discipline exists to remove.

## The Rule Catalog

### Words

- Use domain vocabulary freely as technical nouns and verbs ("webhook," "deploy," "commit," "endpoint") — this is where most agent-written text already goes wrong, not where it needs restraint.
- Don't use a technical noun as a verb, or a technical verb as a noun. ("You can webhook the event" → "Send the event to the webhook.")
- One item, one name, consistently, for the whole document.
- Use American English spelling.

### Multi-word Nouns

Keep compound technical nouns to three words or fewer. Break long noun chains with prepositions: "the connection pool timeout configuration value" becomes "the timeout value for the connection pool."

### Verbs

- Use only simple, standard verb forms: infinitive, imperative, simple present/past/future, and a past participle used as an adjective ("the cached response"). No present perfect, no "is to be installed."
- Active voice, nearly always. Passive is acceptable in descriptive text only when the agent doing the action is genuinely unknown.
- Describe an action with a verb, not a noun: "compress the file," not "perform compression of the file."
- **Approved modals: can, will, must. Banned: should, would, may, might, could.** This matters more for agent-facing instructions than almost any other rule — a model reads "should" as optional even when the author meant it as a requirement. A requirement becomes "must"; a soft suggestion gets stated as a fact or deleted entirely. Even "could" for mere possibility is out — "an explosion can occur," never "could occur."

### Sentences

- Short and grammatically complete — STE is not telegraph style. Keep articles and "that": "Ensure file exists before running" is wrong-shortened; "Make sure that the file exists before you run the command" is correct.
- Use a vertical list for genuinely complex text rather than cramming it into one sentence.
- Put an article or demonstrative before nouns where it belongs ("this configuration," not bare "this").

### Procedural Writing

- Maximum 20 words per sentence, warnings and cautions included.
- One instruction per sentence, unless two actions genuinely happen simultaneously.
- Imperative mood: "Run the migration," not "The migration should be run."
- **Condition before command, separated by a comma**: "If the build fails, read the log." Never bury the condition after the instruction.
- Notes give information, never instructions, and get the 25-word descriptive limit even inside a procedure.

### Descriptive Writing

- One new fact per sentence; give information gradually rather than stacking clauses.
- One topic per paragraph, maximum six sentences.
- No imperative mood in descriptive text — descriptions explain, they don't instruct.

### Safety and Risk Instructions

Use a word that signals the actual risk level (a strong warning word for injury risk, a lighter caution word for damage risk), then the command or condition, then the risk or consequence. Never bury the instruction after the explanation — this pattern transfers directly to destructive CLI flags, irreversible migrations, and dangerous API options in software docs:

**Before:** Note that data loss may occur in some circumstances if the destructive flag happens to be enabled when running against production.
**After:** CAUTION: Do not use the `--force` flag against production. The flag deletes rows that do not match the source.

### Punctuation and Word Count

- All standard punctuation is fine except the semicolon — write two sentences instead.
- Quoted text, code, identifiers, numbers with units, and proper nouns each count as **one word** for the sentence-length limit, no matter how long. A long CLI command in backticks doesn't blow the sentence budget.
- A hyphenated compound counts as one word.

### Writing Practices

- Don't build phrasal verbs where a single precise verb exists: "go down" → "decrease"; "set up" → "install" or "configure."
- Keep pronoun referents unambiguous — prefer "this configuration" over a bare "this."
- Replace Latin abbreviations: "e.g." → "for example," "i.e." → "that is," and delete "etc." entirely — name the actual items, or write "and more."
- If you're not certain a possessive apostrophe is correct, don't use it — it's a common trip point for non-native readers.

## Slop-to-Simple Substitutions

A companion table (not part of the official standard, but a direct consequence of applying it) mapping the words AI-generated docs overuse to plain replacements. If a word carries no actual fact, delete it rather than replacing it:

| Overused | Write instead |
|---|---|
| leverage, utilize | use |
| in order to / prior to / due to the fact that | to / before / because |
| ensure | make sure that |
| it is worth noting that / it's important to | (delete) |
| simply, just, easily, seamlessly, effortlessly | (delete) |
| robust, powerful, comprehensive, performant | (delete, or state the measurable property) |
| enables you to, allows you to | you can |
| is designed to, aims to | (delete — say what it actually does) |
| facilitate | help, make possible |
| gracefully handles | (say exactly what it does: "retries three times, then stops") |
| out of the box / under the hood | by default / internally |
| blazingly fast, state-of-the-art | fast (with a real number), or delete |
| streamline | make simpler, make faster |
| plethora, myriad | many |
| addresses the issue, tackles | corrects the fault, removes the error |

## What to Never Touch

Leave these exact, even when they technically break a rule above: code blocks, inline code, identifiers, CLI commands and flags, file paths, quoted error messages and log lines, product names, API endpoint names, and config keys. These are technical names, not prose — rewriting them for "readability" breaks them.

## Beyond Documentation

The same discipline applies past standard docs:

- **Error messages**: state what happened in simple past, the cause if known, then the fix as an imperative. No apology filler, no "Please ensure."
- **Runbooks**: STE's natural home. Imperative steps, condition before command, warning before the step it warns about.
- **Incident reports**: simple past only. "We have identified an issue that may have impacted users" becomes "Between 14:02 and 14:31 UTC, 12% of requests failed."
- **Release notes**: breaking changes follow the safety pattern — the command or change first, the risk second.
- **Agent instructions** (system prompts, CLAUDE.md, AGENTS.md): a system prompt is a procedure for a reader that can't ask questions. One instruction per sentence, no "should," condition before the instruction it gates.

## Self-Check Before Delivering

This step is not optional:

1. Count the words in your three longest sentences. Anything over the 20/25-word limit gets split.
2. Search the draft for contractions (`'ll`, `'re`, `'s`), "has been"/"have been," any surviving "should," an `-ing` verb right after a comma, and any semicolon.
3. Search for every "if" and "when." Each one must open its sentence, before the command it gates — "Increase the timeout if the network is slow" becomes "If the network is slow, increase the timeout."
4. Search for every verb you didn't standardize on in Step 2 (the check/verify/confirm family) and replace every hit with your chosen verb.

## Limits

STE is for technical facts and instructions — don't apply it to marketing copy, blog voice, or brand writing; it strips persuasion by design. If asked to apply STE to marketing text, say so plainly and offer it for the docs instead.

This is an independent, unofficial application of a public standard's structural rules, not an official ASD/STEMG tool, and no automated pass can guarantee full compliance. ASD-STE100 is a registered trademark of ASD; the official standard and its full approved-word dictionary are a free download at asd-ste100.org.
