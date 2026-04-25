# Context Engineering Advisor

Guide product managers through diagnosing whether they're doing **context stuffing** (jamming volume without intent) or **context engineering** (shaping structure for attention). Identify context boundaries, fix "Context Hoarding Disorder," and implement tactical practices like bounded domains, episodic retrieval, and the Research→Plan→Reset→Implement cycle.

**Key Distinction:** Context stuffing assumes volume = quality ("paste the entire PRD"). Context engineering treats AI attention as a scarce resource and allocates it deliberately.

## Context Stuffing vs. Context Engineering

| Dimension | Context Stuffing | Context Engineering |
|-----------|------------------|---------------------|
| **Mindset** | Volume = quality | Structure = quality |
| **Approach** | "Add everything just in case" | "What decision am I making?" |
| **Persistence** | Persist all context | Retrieve with intent |
| **Agent Chains** | Share everything between agents | Bounded context per agent |
| **Failure Response** | Retry until it works | Fix the structure |
| **Economic Model** | Context as storage | Context as attention (scarce resource) |

## Five Markers of Context Stuffing

1. Reflexively expanding context windows ("Just add more tokens!")
2. Persisting everything "just in case" — no clear retention criteria
3. Chaining agents without boundaries — Agent A passes everything to B to C
4. Adding evaluations to mask inconsistency
5. Normalized retries — "It works if you run it 3 times" becomes acceptable

**Why It Fails:** Reasoning Noise degrades multi-hop logic. Context Rot (dead ends + errors + irrelevant data) causes goal drift. Models prioritize beginning and end ("Lost in the Middle"). Accuracy drops below 20% past ~32k tokens.

## Core Principles

1. Context without shape becomes noise
2. Structure > Volume
3. Retrieve with intent, not completeness
4. Small working contexts (like short-term memory)
5. Context Compaction: Maximize density of relevant information per token

```
Efficiency = (Accuracy × Coherence) / (Tokens × Latency)
```

**Key Finding:** Using RAG with 25% of available tokens preserves 95% accuracy while significantly reducing latency and cost.

## The 5 Diagnostic Questions

1. **What specific decision does this support?** — If you can't answer, you don't need it
2. **Can retrieval replace persistence?** — Just-in-time beats always-available
3. **Who owns the context boundary?** — If no one, it'll grow forever
4. **What fails if we exclude this?** — If nothing breaks, delete it
5. **Are we fixing structure or avoiding it?** — Stuffing often masks bad information architecture

## Memory Architecture: Two-Layer System

**Short-Term (Conversational):** Immediate interaction history; summarized/truncated older parts; single session lifespan.

**Long-Term (Persistent):** User preferences, key facts, operational glossary, constraints registry. Implemented via vector database. Two types:
- **Declarative:** Facts ("I'm vegan")
- **Procedural:** Behavioral patterns ("I debug by checking logs first")

## The Research → Plan → Reset → Implement Cycle

1. **Research:** Agent gathers data → large, chaotic context window
2. **Plan:** Agent synthesizes into high-density SPEC.md or PLAN.md
3. **Reset:** **Clear entire context window** (prevents context rot)
4. **Implement:** Fresh session using **only** the high-density plan

## Application

Ask context questions, diagnose symptoms, walk through the 5 diagnostic questions, and deliver:

- Context Manifest template (what's always-included, what's retrieved, what's excluded)
- Two-layer memory architecture blueprint
- PLAN.md template for the Reset cycle
- Prioritized action plan: immediate fixes → foundation building → long-term optimization

## Context Manifest Template

```markdown
# Context Manifest: [Product/Feature Name]

## Always Persisted (Core Context)
- Product constraints (technical, regulatory)
- User preferences (role, permissions)
- Operational glossary (20 key terms)

## Retrieved On-Demand (Episodic Context)
- Historical PRDs (semantic search)
- User interview transcripts
- Competitive analysis

## Excluded (Out of Scope)
- Meeting notes older than 30 days
- Full codebase (use code search instead)
- Marketing materials

## Boundary Owner: [Name]
## Last Reviewed: [Date]
## Next Review: [Date + 90 days]
```

## Common Pitfalls

1. **"Infinite Context" Marketing vs. Reality** — Accuracy drops past ~32k tokens; treat tokens as scarce
2. **Retrying Instead of Restructuring** — If retries are common, structure is broken
3. **No Context Boundary Owner** — Ad-hoc decisions → unbounded growth
4. **Mixing Always-Needed with Episodic** — Persist only what's needed in 80%+ of interactions
5. **Skipping the Reset Phase** — Context rot poisons implementation
