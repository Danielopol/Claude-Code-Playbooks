# Accessible Document Writing

This skill helps you write documents that are easy for everyone to read and act on — especially people with ADHD or dyslexia. These readers are not less capable; they process information differently, and good document structure meets them where they are.

The principles here benefit all readers. A document that a dyslexic reader can scan is also a document that a busy, distracted, or time-pressured reader can scan. Clarity is always a feature.

---

## Document Opening Structure

Every document opens with two things, in this order:

**1. A one or two sentence intro** — a plain statement of what this document is and why it exists. No preamble, no "this document will cover." Just the fact.

**2. An Attention Conservation Notice** — always labeled exactly **"Attention Conservation Notice"**, never abbreviated or omitted. This comes from Bruce Sterling: before asking for someone's attention, tell them whether it's worth their time.

The intro and the Attention Conservation Notice together must fit on one page. Keep both tight.

The Attention Conservation Notice answers four questions in four lines:

- **For:** which team members need to read this
- **What:** one sentence — the subject and scope
- **Action:** what the reader needs to do (review, decide, note, nothing)
- **Skip if:** when it is legitimate to stop reading here

**Example opening for a standup summary:**

Feb 23 standup summary covering funding, branding decisions, and infrastructure updates.

**Attention Conservation Notice**
For: Full team
What: Key decisions and action items from the Feb 23 call
Action: Find your name in Action Items and confirm your tasks
Skip if: You were on the call and have no assigned items below

**Example opening for a technical doc:**

Instructions for standing up per-person n8n instances on the Proxmox automation system.

**Attention Conservation Notice**
For: Libby, Neal
What: Step-by-step VM setup and Notion credential configuration
Action: Libby to provision, Neal to validate networking before Friday
Skip if: Your n8n instance is already running and reachable

---

## Document Structure by Type

### Standup Summary

```
[One sentence: what meeting, what date, what the main themes were]

Attention Conservation Notice
For: [audience]
What: [subject in one line]
Action: [what reader must do]
Skip if: [legitimate exit condition]

## Action Items
[Name] — [task] — [due date or "no deadline"]

## Decisions Made
[Decision] — [who decided / rationale in one line]

## Key Updates
[Topic]: [one to two sentence summary]

## Blockers
[Blocker] — [owner] — [what's needed to unblock]
```

Action items go first. People with ADHD will check for their name and stop reading once they have what they need. That is the intended behavior — design for it.

### Project Document

```
[One sentence: what this project doc covers and its current status]

Attention Conservation Notice
For: [audience]
What: [subject in one line]
Action: [what reader must do]
Skip if: [legitimate exit condition]

## What We Need From You
[If action is required, state it before any background]

## Background
[Context — only what is necessary to act on the document]

## Details
[Substance — chunked into short sections with descriptive headers]

## Open Questions
[Unresolved items — owner — deadline for resolution]
```

### Technical Document

```
[One sentence: what this document covers and who it is for]

Attention Conservation Notice
For: [audience]
What: [subject in one line]
Action: [what reader must do]
Skip if: [legitimate exit condition]

## Before You Start
[Prerequisites, dependencies, assumed knowledge]

## Steps
[Numbered if sequential, headed sections if reference material]

## Reference
[Links, related docs, contacts for questions]
```

---

## Writing Rules

**Paragraphs:** Three sentences maximum. If you find yourself writing a fourth sentence, that is a signal to split into two paragraphs or move content to a list.

**Headers:** Descriptive, not clever. "Authentication Setup" not "Getting Started." A reader should know what they'll find under a header before they read it.

**Lists:** Use for three or more parallel items. Do not use lists as a default — full sentences are often clearer for connected ideas.

**Bold:** Use sparingly for genuinely critical terms or phrases. If everything is bold, nothing is bold.

**Jargon:** Define any technical term the first time it appears, unless the ACN specifies the audience already knows it. One line in parentheses is enough.

**Active voice:** "Neal will fix the auth issue" not "The auth issue will be fixed." Passive voice hides ownership, which is particularly bad for action items.

**Front-load:** The most important thing goes first — in the document, in the section, and in the sentence. Do not bury the lead.

**White space:** Short sections with visible breaks between them. Dense blocks of text are harder to re-enter after losing your place, which happens more often for dyslexic and ADHD readers.

---

## Tone

Write as though you are briefing a smart, busy colleague who has fifteen seconds before their next task. They need to know what happened, what they need to do, and whether anything is on fire. They do not need atmosphere.

Directness is respectful. Verbosity is not.

---

## What to Avoid

- Long introductions before the actual content
- Summaries that summarize rather than inform ("Many things were discussed...")
- Action items buried in paragraphs rather than listed
- Ambiguous ownership ("the team will...") — assign every action item to a person
- Nested bullet points more than one level deep
- Walls of text with no visual breaks
- Hedging language that obscures what actually needs to happen

---

## Reformatting an Existing Document

If you are given an existing document to reformat:

1. Read the full document first
2. Write the ACN based on what the document actually contains and who it's for
3. Extract all action items and put them at the top
4. Reorganize remaining content into the appropriate template structure
5. Rewrite paragraphs that exceed three sentences
6. Flag any ambiguous ownership ("the team will...") and ask who should own it, or assign based on context

Do not change the meaning or omit facts. Reformat and clarify only.
