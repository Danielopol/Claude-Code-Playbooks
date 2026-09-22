# Research Paper Structure Editor

Improve academic paper writing quality for ML/CV/NLP-style papers — clear section structure, paragraph flow, and reviewer-facing presentation. Use when drafting or revising the Abstract, Introduction, Related Work, Method, Experiments, or Conclusion; polishing figures/tables; checking claim-support alignment; or performing a self-review before submission.

## Overview

Rewrite a research paper into a reviewer-friendly, high-clarity draft. Prioritize first-impression quality (figures, tables, layout), logical flow, and evidence-backed claims.

## Core Workflow

1. Clarify the paper's story before doing any sentence-level edits.
2. Work section by section, applying that section's specific guidance.
3. Rewrite paragraph-by-paragraph — one message per paragraph, not a bulk rewrite.
4. Run reverse outlining after writing each section.
5. Check every major claim in the Abstract and Introduction against the actual experimental evidence.
6. Run a final adversarial review before calling the draft done.

## Global Principles

1. **One paragraph, one message.** Never let a paragraph try to carry two separate points.
2. **State the paragraph's message in the first sentence.** A reader should know what a paragraph is for before finishing its first sentence.
3. **Make nouns self-contained.** Define new terms before reusing them — don't assume the reader remembers a term from three pages back.
4. **Maintain sentence-to-sentence flow.** Every sentence should connect to the previous one via a clear relation: cause, contrast, consequence, or refinement.
5. **Iterate with adversarial self-review.** Read the draft as a skeptical reviewer looking for reasons to reject, not as the author looking to confirm it's fine.
6. **Treat visual quality as core content, not decoration.** A teaser figure and a clean pipeline diagram carry real information; don't treat them as an afterthought.
7. **Use readable, minimal-ink tables.** Every line and shaded cell should earn its place.
8. **Keep formatting consistent and tidy** throughout the whole document.

## Paragraph Clarity Check

Use this whenever asked whether a paragraph "flows" or is clear.

**1. Read as an external reader:**
- Does this paragraph have one explicit message?
- Does the first sentence state what the paragraph will do?
- Are all key nouns/terms readable without hidden context from earlier?
- Does each sentence connect to the previous one with a clear relation (cause, contrast, consequence, refinement, example)?

**2. Run reverse outlining for the section:**
- Write down the section's thesis or main claim.
- Write down each paragraph's topic sentence.
- Write down the evidence or explanation points under each paragraph.
- Check the mapping: does each topic sentence support the thesis, and does the evidence support its topic sentence?
- Revise or remove any paragraph that can't be mapped cleanly onto this structure.

**3. If flow is still weak**, add temporary section headers and explicit transition phrases during revision, then remove any headers that aren't actually needed before finalizing.

## Section-by-Section Focus

Work on one section at a time rather than trying to hold the whole paper's guidance in mind at once:

- **Abstract** — state the problem, the gap, the method, and the headline result in that order; every claim here must be traceable to an actual result later in the paper.
- **Introduction** — motivate the problem before describing the solution; end with a clear, numbered list of contributions.
- **Related Work** — organize by dimension of comparison (what makes this work different), not a flat list of "X did Y, Z did W."
- **Method** — motivation, design, and the technical advantage of each design choice, in that order, for every subsection.
- **Experiments** — state the question each experiment answers before presenting its results.
- **Conclusion** — summarize contributions and their significance without introducing new claims.

## The Final Review

Before finalizing, append and answer a five-dimension self-review question list, then revise based on any unresolved items:

1. **Contribution** — is what's novel here stated clearly and is it actually novel?
2. **Writing clarity** — does every section pass the paragraph clarity check?
3. **Experimental strength** — do the experiments actually support the claims made about them?
4. **Evaluation completeness** — are the standard baselines, ablations, and failure cases covered?
5. **Method design soundness** — would a skeptical reviewer accept the design choices as justified, not just described?

Treat claim-evidence alignment as a hard constraint, especially in the Abstract and Introduction — perform an adversarial pass specifically hunting for claims the results don't actually support, and resolve every high-risk question before calling the draft final.

## Execution Rules

1. Build a mini-outline before drafting any prose.
2. For each subsection, explicitly include motivation, design, and technical advantage where applicable.
3. Avoid a writing style that reads like incremental patching of a naive baseline — state the actual contribution, not a sequence of small fixes.
4. Keep terminology stable across the entire paper — the same concept should never get two different names.
5. If a claim can't be supported by the actual results, weaken or remove it rather than leaving it as written.

## Output Contract

When asked to rewrite or draft sections, return:

1. A compact section outline (3–7 bullets).
2. Revised paragraphs with explicit paragraph roles noted (opening/challenge/method/advantage/evidence/limitation).
3. A short self-review checklist covering clarity, flow, terminology consistency, unsupported claims, and missing evidence.
4. A claim-evidence map for each major claim in the revised text: `Claim: ... | Evidence: ... | Status: supported/needs evidence`.
