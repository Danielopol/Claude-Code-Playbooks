# ML Research Paper Pipeline — Design to Submission

An end-to-end pipeline for producing publication-ready ML/AI research papers for venues like NeurIPS, ICML, ICLR, ACL, AAAI, and COLM. Covers the full lifecycle: project setup, literature review, experiment design, execution and monitoring, result analysis, drafting, self-review, and submission prep.

**This is not a linear pipeline — it's an iterative loop.** Results trigger new experiments. Reviews trigger new analysis. Handle the feedback loops; don't force a strictly sequential march through the phases.

## Core Philosophy

1. **Be proactive.** Deliver complete drafts, not endless clarifying questions — produce something concrete a scientist can react to, then iterate.
2. **Never hallucinate citations.** AI-generated citations have a meaningfully high error rate. Always fetch bibliography data programmatically; mark anything unverifiable as `[CITATION NEEDED]`.
3. **A paper is a story, not a pile of experiments.** State the single contribution in one sentence. If you can't, the paper isn't ready to write.
4. **Experiments serve claims.** Every experiment must state which claim it supports. Don't run experiments that don't connect to the paper's actual narrative.
5. **Commit early, commit often.** Every completed experiment batch and every draft update gets a descriptive commit — git log becomes the experiment history.

### Confidence-Based Autonomy

| Confidence | Action |
|---|---|
| High (clear repo, obvious contribution) | Write the full draft, deliver, iterate on feedback |
| Medium (some ambiguity) | Write the draft with flagged uncertainties, keep going |
| Low (major unknowns) | Ask 1-2 targeted questions, then draft |

Block for human input only when the target venue is genuinely unclear, framings contradict each other, results seem incomplete, or the scientist explicitly asked to review before drafting proceeds.

## Phase 0: Project Setup

1. **Explore the repository** — read `README.md`, check `results/`/`outputs/`/`experiments/` for existing findings, `.bib` files for existing citations, and any draft notes.
2. **Organize the workspace**: `paper/` (LaTeX source and figures), `experiments/` (runner scripts), `code/` (core implementation), `results/` (auto-generated, raw), `tasks/` (benchmark definitions), `human_eval/` (if applicable).
3. **Set up version control** with a dedicated branch, and commit every completed experiment batch with a descriptive message.
4. **Identify the contribution** before writing anything: the What (one sentence), the Why (evidence), the So What (why readers should care). Propose this framing to the scientist and confirm it before proceeding.
5. **Create a persistent TODO list** — contribution, literature review, experiment design, execution, analysis, drafting, self-review, revision, submission — and keep it updated across sessions.
6. **Estimate the compute budget** up front: API costs, GPU hours, human-eval costs, a total ceiling with 30-50% contingency for reruns. When budget is tight, pilot with 1-2 seeds on a subset before committing to a full sweep.
7. **For multi-author papers**, agree early on section ownership (one primary author per section), a shared workspace (Overleaf, git, or both), notation conventions, and a fixed figure style — before anyone starts writing or plotting.

## Phase 1: Literature Review

**Goal**: find related work, identify baselines, gather verified citations.

1. Identify seed papers already referenced in the codebase or notes.
2. Search broadly for related work and baselines using whatever search tools are available.
3. **Search iteratively, breadth then depth**: Round 1 fires several parallel queries covering different angles of the problem; Round 2 generates follow-up queries from what Round 1 turned up (new terminology, frequently-cited papers, contradictions); Round 3 targets specific gaps (missing baselines, concurrent work, negative results). Stop when a round returns mostly papers already collected — typically 2-3 rounds, 4-5 for a survey paper.
4. **Verify every citation before adding it.** Never generate bibliography entries from memory. For each one: search a citation database, confirm the paper exists in at least two independent sources, retrieve its formal citation record programmatically, confirm the claim you're citing actually appears in the paper, then add it. If any step fails, mark the citation `[CITATION NEEDED]` and tell the scientist explicitly how many are still unverified.
5. **Organize related work by methodology, not paper-by-paper.** "One line of work assumes X, whereas we assume Y because..." is far stronger than a list of "Smith et al. did A, Jones et al. did B."

## Phase 2: Experiment Design

**Goal**: design experiments that directly support paper claims.

1. **Map every claim to an experiment** in an explicit table (claim → experiment → expected evidence). If an experiment doesn't map to a claim, don't run it.
2. **Design real baselines** — a naive baseline, the strongest known existing method, ablations (your method minus one component), and compute-matched baselines. Weak baselines are the single most common reason a paper gets rejected.
3. **Define the evaluation protocol before running anything**: metrics and their direction (higher/lower is better), how results aggregate across runs, which statistical tests establish significance, and sample sizes.
4. **Write experiment scripts defensively**: save results incrementally so a crash doesn't lose progress and a re-run skips completed work; preserve intermediate artifacts, not just final outputs; keep generation, evaluation, and visualization in separate scripts rather than one monolith.
5. **Design human evaluation before running automated experiments if the paper needs it** — human eval often has the longest lead time (recruitment, ethics review). Decide annotator type, rating scale (pairwise comparisons are generally more reliable than Likert scales for model outputs), sample size (100+ items, 3+ annotators as a floor), and an agreement metric. Write clear guidelines with worked examples and attention checks, and report annotator count, agreement score, compensation, and total annotation time — reviewers check all of these.

## Phase 3: Experiment Execution & Monitoring

**Goal**: run experiments reliably, monitor progress, recover from failures.

1. Launch long-running experiments detached (so they survive a session ending) and record the process id.
2. Set up periodic status checks for anything long-running: is it still running, what do the last log lines say, have new results landed, and — if everything's done — commit and report. Suppress notifications when nothing has changed since the last check.
3. **Handle common failures explicitly**: rate limits or credit exhaustion (wait, then re-run — scripts should skip completed work), a crashed process (re-run from the last checkpoint), a stuck timeout (kill it, note the failure, move on). The key property that makes all of this safe: scripts always check for existing results before redoing work.
4. Commit every completed batch with the key finding in one line.
5. **Keep an experiment journal separate from git** — git tracks file changes, not the reasoning. Log each attempt's hypothesis, plan, config, result, analysis, and what it suggests trying next. This tree becomes invaluable when writing the Methods section ("we observed X, which motivated Y") and for honestly reporting dead ends.

## Phase 4: Result Analysis

**Goal**: extract findings, compute statistics, identify the actual story.

1. Aggregate all result files into per-task and summary metrics.
2. Always compute error bars (state which kind), confidence intervals for key results, a pairwise significance test between methods, and an effect size — not just a point estimate.
3. **Explicitly answer**: What is the main finding, in one sentence? What was surprising? What failed, and is the failure itself informative? What follow-up experiments does this raise?
4. **Negative or inconclusive results are not automatically a dead end.** If the hypothesis was wrong but *why* is informative, frame the paper around that analysis. If the method doesn't beat baselines but reveals something new, reframe the contribution around the understanding gained. A clean negative result on a popular claim is genuinely publishable — several venues and workshops explicitly welcome them. Only pivot away entirely when there's truly no story in the data.
5. **Figures**: vector format, colorblind-safe palettes, self-contained captions (no reliance on the caption living in the figure itself). **Tables**: booktabs-style formatting, bold the best value per metric, include direction symbols, consistent decimal precision throughout.
6. **Decide explicitly whether to write or run more experiments**: core claims supported and significant → move to drafting; results inconclusive → back to experiment design; a missing ablation reviewers will obviously ask for → run it first.
7. **Before drafting, write a structured experiment log** bridging results to prose: the one-sentence contribution, each experiment with its claim/setup/key-result/figures, a table mapping every figure to the section it belongs in, and an honest section on failed experiments. Without this bridge, whoever drafts the paper has to re-derive the story from raw result files — a common source of hallucinated or misreported numbers.

## Phase 5: Paper Drafting

Draft section by section, grounded in the experiment log from Phase 4 rather than raw result files:

- **Abstract**: contribution in one sentence, the evidence, the significance — written last, after the paper's actual shape is known.
- **Introduction**: motivation, the gap in prior work, the contribution stated plainly, a roadmap of what follows.
- **Related work**: organized by methodology/theme (per Phase 1), positioning the paper's approach against each line of work rather than just listing prior papers.
- **Method**: enough detail for an expert to reproduce it without the code.
- **Experiments**: setup, baselines, and results — every number sourced from the experiment log, every claim mapped to the specific result that supports it.
- **Limitations**: honest, specific, and required by several venues — a weak or missing limitations section reads as a red flag to reviewers.
- **Conclusion**: restates the contribution and its significance without re-litigating every result.

Flag your framing choices as you go ("emphasized problem Y as the gap — correct if wrong") rather than silently committing to interpretive calls the scientist hasn't seen.

## Phase 6: Self-Review & Revision

**Goal**: simulate the review process before submission, and catch weaknesses early.

1. **Generate 3-5 independent reviews** from an "expert reviewer" persona instructed to default to a *negative* bias (LLM evaluators otherwise show a well-documented positivity bias). Each review should score soundness, clarity, significance, and originality, and list weaknesses ranked by severity.
2. **Aggregate with a meta-review pass**: feed all the independent reviews to an "area chair" persona that finds consensus points, resolves disagreements by checking the paper directly, and treats a disputed weakness as serious until addressed.
3. **Run a separate visual review** on the compiled PDF if a vision-capable check is available — text-only review misses illegible axis labels, a figure stranded pages from its first reference, or inconsistent color palettes between figures.
4. **Run a separate claim-verification pass**: extract every factual claim (numbers, comparisons, trends), trace each to the specific result that supports it, and flag anything without a traceable source as `[VERIFY]`. Doing this with a fresh, isolated pass (rather than the same context that wrote the paper) avoids confirmation bias.
5. **Prioritize feedback**: critical (technical flaw, missing baseline — may require new experiments), high (clarity, missing ablation — fix this revision), medium (fix if time allows), low (note for future work).
6. **For actual post-submission rebuttals**, respond point-by-point to every reviewer concern, lead with the strongest responses, stay concise, include any new results run during the rebuttal window, and never be dismissive — "we respectfully disagree" without evidence, or ignoring a weakness by only answering the strengths, reads badly to an area chair.
7. Save a snapshot of the paper at each real milestone (first draft, post-review, pre-submission, camera-ready) so the evolution is recoverable.

## Phase 7: Submission Preparation

1. **Complete the venue's mandatory checklist** in full — an incomplete checklist can trigger desk rejection at several venues.
2. **If double-blind, run a real anonymization pass**: no names or affiliations anywhere in the PDF, no acknowledgments (add after acceptance), self-citations in third person, no personal repo URLs (use an anonymized code-hosting mirror), no institutional identifiers in figures or file metadata, dataset names that don't reveal the institution.
3. **Verify formatting**: page limit respected excluding references/appendix, all figures vector or high-resolution and grayscale-readable, references compiling with no broken citations, required sections (limitations, broader impact) present.
4. **Run automated pre-compilation checks** before invoking the LaTeX compiler: lint for common mistakes, confirm every citation key exists in the bibliography file, confirm every referenced figure file exists on disk, and check for duplicate labels. Fixing these here is much faster than debugging raw compiler output.
5. **Compile clean** — remove stale build artifacts first, then run the full LaTeX toolchain (including bibtex) enough times to resolve all cross-references, and confirm the final PDF actually exists and has content.
6. **When converting between venue formats, never copy a LaTeX preamble between templates.** Start fresh from the target template, port only the content sections (abstract, section text, figures, tables, bib entries), then adjust for the new page limit and add whatever sections the new venue requires.

## Tips

- The one-sentence contribution from Phase 0 is worth revisiting every time a result changes the story — a paper that quietly loses track of its stated contribution reads as unfocused, even when every individual section is solid.
- Treat "did they compare against X" as the default question a reviewer will ask, and make sure the baseline table already answers it before submission.
- A negative or null result is not automatically a failure to write around — several strong venues explicitly want honestly reported negative results; don't force a positive spin the data doesn't support.

## Limitations

- Built around empirical ML papers targeting major ML/AI venues — a theory paper, survey, or a different field's publication conventions will need real adaptation, not a literal application of every phase.
- Citation verification and human-evaluation platforms assume access to the relevant APIs/services (a citation database, a crowdsourcing platform) — without them, budget more manual verification time.
- This is a process framework, not a guarantee of acceptance — rigorous baselines and honest limitations sections improve a paper's odds, but reviewer judgment is still reviewer judgment.
