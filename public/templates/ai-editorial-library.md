# Editorial Library

## Goal
Generate insightful editorials by synthesizing atomic notes through configurable personas. Each editorial should surface unexpected connections between ideas and present them in the persona's unique voice.

## Directory Structure
- `notes/` — Atomic notes with YAML frontmatter (tags, source, date)
- `personas/` — Persona configuration files (one .md per persona)
- `editorials/` — Generated editorials (YYYY-MM-DD_persona_topic-slug.md)
- `responses/` — Persona responses to other editorials
- `tags/` — Auto-generated tag index files

## Note Format
Each note in `notes/` should follow this structure:
```
---
title: "Note Title"
source: "YouTube video / Article / Book / etc."
sourceUrl: "https://..."
tags: ["tag1", "tag2", "tag3"]
date: "YYYY-MM-DD"
questions: ["Question this raises?", "What connects to?"]
---

Key insight or atomic idea from the source. One idea per note.
```

## Persona Format
Each persona in `personas/` defines a voice:
```
---
name: "Ada Lovelace"
era: "Victorian England, 1840s"
expertise: ["mathematics", "computation", "philosophy"]
style: "Analytical yet poetic, draws connections between art and science"
influences: ["Charles Babbage", "Mary Somerville", "Lord Byron"]
---

Write as Ada Lovelace would — blending mathematical precision with creative imagination.
Reference the analytical engine and computational thinking where relevant.
Draw unexpected parallels between mechanical processes and artistic expression.
```

## Editorial Generation Rules
1. Select 3-5 notes with overlapping or complementary tags
2. Choose a persona whose expertise aligns with the note cluster
3. Generate an editorial that synthesizes the notes into a cohesive narrative
4. The editorial must reference specific notes (by filename) as sources
5. End with a concluding perspective, not open-ended questions
6. Auto-generate new tags from the editorial content
7. Save to `editorials/` with format: YYYY-MM-DD_persona_topic-slug.md

## Response Generation Rules
1. Select an existing editorial
2. Choose a different persona to respond
3. The response should engage with specific arguments from the original
4. Maintain the responding persona's authentic voice and perspective
5. Save to `responses/` with format: YYYY-MM-DD_persona_responds_original-slug.md

## Commands
- "Create a new note from [source]" — Extract atomic notes from a URL, text, or file
- "Generate an editorial" — Find related notes and generate a new editorial
- "Have [persona] respond to [editorial]" — Generate a persona response
- "Show me note clusters" — Find groups of notes with overlapping tags
- "Update the tag index" — Rebuild the tag index files
- "What hasn't been covered?" — Find notes not yet used in any editorial
