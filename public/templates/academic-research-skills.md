# Research Project — Academic Research Skills Workspace

This project uses the **Academic Research Skills** plugin for Claude Code
by Cheng-I Wu ([github.com/Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills),
CC BY-NC 4.0). This file does not contain the plugin itself — it gives
Claude the standing context for this research project so every `/ars-*`
command starts from the same brief.

## Setup (once)

Install the plugin from inside Claude Code:

```
/plugin marketplace add Imbad0202/academic-research-skills
/plugin install academic-research-skills
```

Then check it loaded by running `/ars-plan`.

## Project brief

Fill this in before the first session. Update it when the scope changes.

- **Working title:** [title]
- **Research question:** [one sentence, phrased as a question]
- **Discipline and sub-field:** [e.g. education policy, health economics]
- **Output type:** [thesis chapter / journal article / conference paper / literature review / grant section]
- **Target venue or examiner:** [journal, conference, or degree programme]
- **Citation style:** [APA 7 / Chicago / MLA / IEEE / Vancouver]
- **Language:** [English / other]
- **Methods:** [qualitative, quantitative, mixed, systematic review, theoretical]
- **Scope limits:** [years, regions, populations, study types in and out of scope]
- **Sources I already trust:** [key papers, datasets, or authors to start from]
- **Deadline:** [date]

## Which command for which job

| I want to… | Run |
|---|---|
| Turn a vague topic into a structured plan | `/ars-plan` |
| Build or update the literature review | `/ars-lit-review` |
| Run the full research stage (search, screen, synthesize) | `/ars-research` |
| Plan the paper structure | `/ars-outline` |
| Draft sections or the full paper | `/ars-write` |
| Check every citation against its source | `/ars-citation-check` |
| Get a multi-perspective peer review of a draft | `/ars-review` |
| Work through reviewer or supervisor comments | `/ars-revision` |
| Run everything end to end with checkpoints | `/ars-pipeline` |

## Rules for this project

1. **Stop at every checkpoint.** Don't advance a pipeline stage until I
   confirm. Summarize what the stage produced and what you need from me.
2. **No citation without a source I can open.** Every reference needs a
   DOI, URL, or full bibliographic entry. If you can't verify a source,
   mark it `[UNVERIFIED]` instead of dropping or inventing details.
3. **Run `/ars-citation-check` before any draft leaves this folder.**
4. **Keep my voice.** Draft in plain academic prose. Flag, don't rewrite,
   passages where my argument is unclear.
5. **Separate what the literature says from what I argue.** Label my
   claims so a reader can tell them apart from summarized findings.
6. **Log decisions.** Append scope changes, excluded sources (with the
   reason), and methodological choices to `decisions.md`.

## Folder layout

```
sources/        PDFs and notes on each source
drafts/         section drafts, one file per section
reviews/        peer-review and supervisor feedback
decisions.md    running log of scope and method decisions
```

## Limits to keep in mind

- The plugin checks what the draft *reports*, not whether a method was
  actually carried out or whether data is authentic. That judgment stays
  with me.
- LLM output isn't byte-for-byte reproducible. Save the drafts you keep.
- Follow my institution's rules on disclosing AI assistance.
