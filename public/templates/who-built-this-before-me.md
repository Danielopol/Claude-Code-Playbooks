---
name: who-built-this-before-me
description: Check whether a project, tool, library, or product idea has already been built before the user invests time in it. Find existing solutions, extract standard patterns, benchmark the user's angle against prior art, and deliver a clear verdict (build / fork / contribute / use existing / investigate why it failed). Use this skill whenever the user describes something they're thinking of building, making, shipping, launching, or coding — especially phrases like "I want to build…", "I'm thinking of making…", "should I build X…", "is there already a…", "my idea is…", or when the user is scoping a new side project, startup, library, or tool. Trigger even if the user doesn't explicitly ask for prior art research — if they're about to build something, they should check first.
---

# who-built-this-before-me

Before the user burns a weekend (or a quarter) building something, find out whether it already exists. Most ideas have been tried. Some are solved well, some are solved badly, some failed for instructive reasons, and a few are genuinely open. This skill figures out which bucket the user's idea falls into and tells them plainly.

## Core loop

1. **Restate the idea in one sentence.** Strip the pitch down to: what it does, who it's for, what constraint makes it distinctive (if any). Show this back to the user and confirm before searching. If the idea is too vague to search (i.e. the framing matches an entire tool category), ask exactly **one** clarifying question. You may include up to 3 example dimensions as prompts, but no more — this is a question, not a questionnaire.
2. **Generate vocabulary before searching.** Before running any query, write down 6–10 different framings of the idea from distinct vantage points. The user's framing is one lens; other builders, academics, and infrastructure people use different words for the same thing. Cover at minimum:
   - The builder's framing (the user's own words)
   - The user-of-the-tool framing (what someone searching for this would type)
   - The academic or research framing (if applicable)
   - The infrastructure / implementation framing
   - The adjacent-community framing (the next-door discipline that likely solved this first)

   Write the list out explicitly. Map each search query to a framing. This prevents the failure mode where 5 queries all hit the same semantic neighborhood.
3. **Search where builders actually publish.** Run 3–6 targeted queries across the right registries, covering distinct framings from step 2:
   - Code: GitHub, GitLab, PyPI, npm, crates.io, Hugging Face (for ML)
   - Products: Product Hunt, Hacker News ("Show HN"), relevant subreddits
   - Writing: engineering blog posts, papers (arXiv, Google Scholar) when relevant
   - Domain-specific high-signal venues: model release notes and system cards for AI/ML tools, SEC filings for fintech, RFCs and standards bodies for protocols, regulator guidance for compliance. Every domain has a venue where the incumbent gets cited by the serious players. Find it and check it.

   Keep queries short. Don't run one generic query and stop.
4. **Trace one layer down on every direct match.** When a project's docs mention another tool as a dependency, bridge, wrapped layer, or "official harness for X" — that other tool is often the real incumbent and the project you found is a thin wrapper. Before concluding, for each direct match, ask: what does this project delegate to? What does it wrap? What does it call out as its foundation? Follow those pointers with a dedicated query. The skill fails most often not at finding projects but at stopping one layer too early.
5. **Cluster the findings into four buckets.** Don't list raw results. Group into:
   - **Direct matches** — same problem, same approach
   - **Adjacent solutions** — same problem, different approach
   - **Partial solutions** — solves a subset of the problem
   - **Abandoned / stale** — existed, now dead (note the last commit date and, if findable, why it died)
6. **Extract standard patterns.** Across the matches, what shows up repeatedly? Common architecture, libraries, design decisions, naming conventions, pricing models. That's the default playbook the user would be competing with or building on.
7. **Benchmark the user's angle.** In one honest paragraph, compare the user's specific framing against what exists. Name the real differentiator — or admit there isn't one. Don't manufacture novelty to be nice.
8. **Deliver a verdict.** Pick one:
   - **Build it** — genuine gap; differentiation is clear and defensible
   - **Fork/extend** — closest existing project + specifically what to add
   - **Contribute** — the feature belongs upstream in an existing project; suggest which
   - **Use existing** — already solved well; name the best option(s)
   - **Investigate first** — someone tried and failed or abandoned; understand why before spending time

Be direct. If the idea is already built, say so on the first line of the verdict. Hedging wastes the user's time.

## Output format

Always produce a short markdown report with these exact sections:

```markdown
# Prior art check: [idea in ≤8 words]

## The idea, restated
[One sentence.]

## The landscape
[Table with columns: Name | Link | Status | Relevance | Bucket]
[Rows grouped by bucket: direct matches, adjacent, partial, abandoned. Max 3 rows per bucket — pick the most relevant, not all.]

## Standard patterns
[3–6 bullets describing what's common across the matches. Architectural, technical, or product patterns.]

## Differentiator analysis
[One paragraph. What's genuinely different about the user's framing, if anything. Honest.]

## Verdict: [Build it / Fork X / Contribute to Y / Use Z / Investigate first]
[One paragraph explaining the verdict and the concrete next step.]
```

Keep it tight. The whole report should fit on one screen unless the landscape is unusually rich.

## Search strategy

Vary vocabulary across queries. Example, for an idea like "a tool that auto-generates database migrations from API schemas":

- Bad: run `"auto-generate database migrations from API schemas"` five times
- Good: try `openapi schema to sql migration`, `generate migrations from openapi`, `api-first database schema github`, `declarative schema migration tool`, `show hn schema migration`

The user's framing is one lens. Other builders use different words for the same idea. Surface those.

Prefer primary sources (repos, Show HN threads, project homepages) over aggregator articles. One GitHub repo with 200 stars beats a Medium listicle every time.

## Interpretation, not just search

Finding projects is the easy half. Reading them correctly is where the skill fails most often. Common interpretation failures and how to avoid them:

- **Pattern-matching on the first project found.** If the first direct match is a tiny project (low stars, few commits) but references a larger named project in its docs, the larger project is probably the real incumbent. Don't let the first project found anchor the answer.
- **Treating dependencies as context instead of leads.** Sentences like "runs X through Y," "official harness for Z," "built on top of W," or "wraps V" are not background — they are pointers. Every named dependency in a direct match's docs is a search lead you must follow before concluding.
- **Clean-looking landscapes can be local minima.** If three queries all return the same project, that's evidence of a semantic cluster, not global coverage. The fix is step 2 — if you generated vocabulary framings upfront, you should have already run queries that reach different clusters. Re-check your framing list; if some are still untried, try them before stopping.
- **Obscurity ≠ novelty.** If nothing shows up on page one, search again with different words before concluding the idea is novel. Most "novel" ideas are just badly named — this is what the vocabulary step in the core loop is for.

## What to avoid

- **Don't invent competitors.** If the search comes up empty after a real effort, say "no direct prior art found" and explain where you looked. Inventing plausible-sounding projects is worse than admitting a blank.
- **Don't pad the verdict.** "It's complicated, it depends on your goals, here are considerations…" is noise. Pick a verdict. The user can push back if they disagree.
- **Don't stop at the first match.** Finding one existing tool doesn't mean the idea is dead — it means you now know the baseline. Keep searching to find the full landscape, and trace one layer down (step 4) on every match.
- **Don't be diplomatic to spare feelings.** The user asked this skill for a reality check. Give it.

## Budget

Aim for ≤10 total search queries across the vocabulary framings generated in step 2. Stop earlier only if the landscape is clear after 3–4 queries *and* at least one of those queries followed a "one layer down" dependency lead from step 4. If after 10 queries you're still not confident, say so and list what you found rather than continuing indefinitely.

## Example verdicts (tone reference)

**Already built, use it:**
> **Verdict: Use existing — Alembic.** Your idea (SQLAlchemy-compatible migration tool with auto-generation from models) is exactly what Alembic does, and it's been the standard for a decade. Your specific twist (YAML config instead of Python) is real but small; it's a fork, not a new project. Next step: try Alembic for a week on a real project before deciding the YAML thing is worth a fork.

**Genuine gap:**
> **Verdict: Build it.** I found three adjacent tools but none do API-schema-first migrations with rollback safety checks. The closest (prisma-migrate) is tied to the Prisma ORM and won't help users on raw SQL. This is a real gap. Next step: ship a minimal CLI that reads OpenAPI and emits reversible migrations for Postgres first.

**Someone tried, it died:**
> **Verdict: Investigate first.** schema-forge (2021, archived) did almost exactly this and has 1.2k stars but no commits in 3 years. Before rebuilding, read the closed issues and the author's final blog post — the problem may be harder than it looks, or the market may not want it. Next step: spend an hour on schema-forge's issue tracker before writing a line of code.
