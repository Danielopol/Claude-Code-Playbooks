# ML Paper Writing for Top AI Conferences

Write publication-ready papers for NeurIPS, ICML, ICLR, ACL, AAAI, and COLM. Combines writing philosophy from researchers who've published extensively at top venues with a non-negotiable citation-integrity discipline: never write a citation from memory.

> "A paper is a short, rigorous, evidence-based technical story with a takeaway readers care about." — Neel Nanda

## Core Philosophy: Collaborative Writing

Paper writing is collaborative, but be proactive in delivering drafts. The typical workflow starts with a research repository containing code, results, and experimental artifacts:

1. **Understand the project** by exploring the repo, results, and existing documentation.
2. **Deliver a complete first draft** when confident about the contribution.
3. **Search literature** for relevant citations, always via programmatic verification (see below).
4. **Refine through feedback cycles** when the scientist provides input.
5. **Ask for clarification** only when genuinely uncertain about key decisions.

Be proactive: if the repo and results are clear, deliver a full draft rather than blocking on feedback for every section. Produce something concrete the scientist can react to, then iterate.

## Critical: Never Hallucinate Citations

AI-generated citations have a roughly 40% error rate. Hallucinated references — papers that don't exist, wrong authors, wrong years, fabricated DOIs — are a serious form of academic misconduct that can cause desk rejection or retraction. **Never generate a BibTeX entry from memory. Always fetch it programmatically.**

| Situation | Action |
|---|---|
| Verified metadata + verified BibTeX + verified claim | Use the citation |
| Paper verified to exist but the specific claim wasn't checked | Use only for general attribution, not a precise technical claim |
| A discovery surface (e.g. Google Scholar) suggests a paper but metadata is weak | Keep as a lead, not a final citation |
| Cannot verify programmatically | Mark `[CITATION NEEDED]`, tell the scientist explicitly |

### The Citation Verification Workflow

1. **Search programmatically** — Semantic Scholar, CrossRef, arXiv, or OpenAlex, as appropriate.
2. **Verify existence in two sources** when the claim is important.
3. **Retrieve BibTeX programmatically** from the DOI or another trusted export path — never type it from memory.
4. **Validate the claim** against the actual paper content when the citation supports a specific statement, not just general attribution.
5. **Add the citation** only after metadata and claim are both verified.

Programmatic APIs are the canonical verification path. Google Scholar may still help with manual discovery when API coverage is weak, but anything it surfaces is a lead requiring the same explicit verification, never a final citation on its own.

**Worked example — citing the Transformer paper:**
1. Search Semantic Scholar for "Attention is All You Need Vaswani 2017"; confirm title/authors/year/DOI align.
2. Cross-verify the DOI metadata against CrossRef.
3. Fetch BibTeX from the DOI or a trusted export path.
4. Read the section of the actual paper that supports the specific claim being cited, and confirm it's really there.
5. Paste the verified BibTeX into the bibliography and cite with the verified key.
6. If any step fails, mark it `[PLACEHOLDER - VERIFY]` and tell the scientist explicitly what remains unverified.

## The Claim Ledger Gate

Before a project plan, experiment note, or literature summary becomes manuscript prose: identify the specific claim candidate or evidence record that supports the sentence; preserve allowed wording versus forbidden stronger wording; keep project plans as hypotheses unless experiment artifacts or verified papers actually support them; never let related-work motivation stand in as evidence for the paper's own result; mark unsupported claims as `[CLAIM NEEDS EVIDENCE]` rather than smoothing over the gap. Apply this gate before finalizing any contribution, result, related-work contrast, or rebuttal-facing claim — even when the repo context feels clear enough for a confident first draft.

## Writing Philosophy for Top ML Conferences

These aren't optional style suggestions — they're what tends to separate accepted papers from rejected ones, synthesized from researchers who've published extensively at top venues (Neel Nanda's Narrative Principle and What/Why/So-What framework, Sebastian Farquhar's five-sentence abstract formula, Gopen & Swan's reader-expectation principles, Zachary Lipton's word-choice heuristics, Jacob Steinhardt's precision guidance, and Ethan Perez's micro-level clarity tips).

### Time Allocation

Spend roughly equal time on each of: the abstract, the introduction, the figures, and everything else combined. Most reviewers form judgments before reaching the methods section — readers encounter a paper as title → abstract → introduction → figures → maybe the rest.

### What Reviewers Actually Read

| Paper Section | Reviewer Attention | Implication |
|---|---|---|
| Abstract | Effectively 100% | Must be airtight |
| Introduction | 90%+, often skimmed | Front-load the contribution |
| Figures | Examined before the methods text | Figure 1 is critical |
| Methods | Only if the reviewer is already interested | Don't bury the lede |
| Appendix | Rarely | Supplementary detail only |

If the abstract and introduction don't hook a reviewer, the methods section may never get read closely.

### Sentence-Level Clarity (Gopen & Swan's Reader-Expectation Principles)

| Principle | Rule | Example |
|---|---|---|
| Subject-verb proximity | Keep the subject and verb close together | "The model, which was trained on..., achieves" → "The model achieves... after training on..." |
| Stress position | Place emphasis at the end of the sentence | "Accuracy improves by 15% when using attention" → "When using attention, accuracy improves by 15%" |
| Topic position | Context first, new information after | "Given these constraints, we propose..." |
| Old before new | Familiar information before unfamiliar | Link backward, then introduce what's new |
| One unit, one function | Each paragraph makes exactly one point | Split multi-point paragraphs |
| Action in the verb | Use verbs, not nominalizations | "We performed an analysis" → "We analyzed" |
| Context before new | Set the stage before presenting | Explain before showing an equation |

### Micro-Level Tips

- Minimize pronouns — "This shows..." → "This result shows..."
- Position verbs early in the sentence.
- Unfold awkward possessives — "X's Y" → "the Y of X" when the apostrophe form reads badly.
- Delete filler words: "actually," "a bit," "very," "really," "basically," "quite," "essentially."

### Word Choice

- Be specific — "performance" → "accuracy" or "latency," whichever is actually meant.
- Eliminate hedging — drop "may" and "can" unless genuinely uncertain.
- Avoid incremental-sounding verbs — "combine," "modify," "expand" → "develop," "propose," "introduce," when the contribution is actually novel rather than incremental.
- Delete intensifiers — "provides *very* tight approximation" → "provides tight approximation."

### Precision Over Brevity

- Use consistent terminology throughout — different terms for the same concept creates confusion; pick one and keep it.
- State assumptions formally, explicitly, before any theorem.
- Pair intuitive explanations with formal proofs, not one or the other alone.

## Conference Requirements Quick Reference

| Conference | Typical Page Limit | Key Requirement |
|---|---|---|
| NeurIPS | ~9 pages | Mandatory checklist; lay summary for accepted papers |
| ICML | ~8 pages | Broader Impact Statement required |
| ICLR | ~9 pages | LLM-usage disclosure required; reciprocal reviewing |
| ACL | ~8 pages (long) | Limitations section mandatory |
| AAAI | ~7 pages | Strict style-file adherence |
| COLM | ~9 pages | Focus specifically on language models |

Universal: double-blind review (anonymize submissions), references typically don't count toward the page limit, appendices are unlimited but reviewers aren't obligated to read them, LaTeX is required. Always confirm current-year exact limits against the venue's own call for papers — these change year to year.

## Using LaTeX Templates Properly

Always copy the entire template directory first, then write within it — never build a paper from a single stripped-down `.tex` file.

```
Template Setup Checklist:
- [ ] Copy the entire template directory to the new project
- [ ] Verify the template compiles as-is, before any changes
- [ ] Read the template's example content to understand its structure
- [ ] Replace example content section by section
- [ ] Keep template comments/examples as reference until the draft is done
- [ ] Clean up template artifacts only at the very end
```

```bash
cp -r templates/<venue-year>/ ~/papers/my-new-paper/
cd ~/papers/my-new-paper/
ls -la   # confirm main.tex, the venue .sty file, and any build tooling are present
```

## Common Issues and Solutions

**Abstract too generic** — delete the first sentence if it could be prepended to any ML paper unchanged. Start with the specific contribution instead.

## Tables and Figures

Treat Figure 1 as load-bearing for the whole paper's first impression — it's typically examined before the methods text is read closely. Tables should be minimal-ink: every rule line and shaded cell should earn its place, and results tables should make the comparison the paper is making immediately visible, not require cross-referencing multiple rows to reconstruct it.
