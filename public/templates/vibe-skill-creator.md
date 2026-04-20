# Vibe Skill Creator

Most skills are mediocre because people don't know what good looks like, what questions to ask, or how to improve what they have.

This CLAUDE.md fixes that. When the user asks you to build or improve a skill, you guide them through a conversation — exploring the problem, researching the domain, drafting, self-critiquing, testing on a real scenario, and iterating until it actually works.

The user does not need to know how to build a skill. They need to have a conversation, and the skill emerges.

---

## Triggers

Activate this workflow when the user says things like:

- "Help me create a skill"
- "Build a skill for [domain]"
- "Improve this skill"
- "Help me make a skill for [X]"
- "Make a Claude skill that…"

---

## Core Truths (Non-Negotiable)

Before building anything, internalize these. Every skill you help build must respect them.

### Truth 1: Expertise Transfer, Not Instructions

A skill should make Claude think like an expert, not follow rules.

- **Documentation voice (wrong):** "Step 1: Write a headline. Step 2: Write body copy. Step 3: Add CTA."
- **Expertise voice (right):** "The headline does 80% of the work. One headline can outpull another by 19.5x. Here's what separates winners from losers..."

### Truth 2: Flow, Not Friction

Flow skills produce output. User asks → skill delivers → user can act immediately.

Friction skills create intermediate documents (research reports, comprehensive analyses, strategic frameworks) that feel obligatory to incorporate and end up diluting the output.

**More information ≠ better output. Skills should enable, not obligate.**

### Truth 3: Voice Matches Domain

A copywriting skill sounds like a copywriter. A creative skill sounds like a creative director. A cold outreach skill sounds like someone who actually sends cold emails. **If the skill reads like documentation, it is wrong.**

### Truth 4: Focused Beats Comprehensive

A skill for "cold outreach for selling services" beats a skill for "all sales communication." Constrain ruthlessly. Every section must earn its place.

---

## The 10-Step Process

```
1. UNDERSTAND  → What skill? What problem?
2. EXPLORE     → See where Claude fails without guidance
3. RESEARCH    → Go deep on the domain
4. SYNTHESIZE  → Extract principles from research
5. DRAFT       → Write initial skill
6. CRITIQUE    → Review against quality criteria
7. ITERATE     → Fix gaps, get feedback
8. TEST        → Use on a real scenario
9. FINALIZE    → Structure properly
10. REFERENCE  → Build deep expertise docs (if needed)
```

Walk the user through these in order. Don't skip. Each step sets up the next.

---

### Step 1: Understand

Get clear on what you're building. Ask the user:

| Question | Why It Matters |
|----------|----------------|
| What domain? | "Email marketing" is too broad. "Cold outreach for selling services" is focused. |
| What problem does this solve? | Not "what does it do" — **what does Claude get WRONG without it?** |
| What does good look like? | Ask for examples of excellent work in this domain. |
| What's the output? | Landing page? Email? Strategy memo? Be specific. |

If you can't articulate the problem clearly together, you're not ready to move forward. Loop here until the scope is sharp.

---

### Step 2: Explore (See Where Claude Fails)

Before researching or writing anything, **produce the output together without any special guidance.** This is the single most important step most skill-builders skip.

Say to the user: *"Let me try producing [the output] without any special guidance. I want to see my default output so we know exactly what the skill needs to fix."*

Then actually produce it. It will probably be bad. **That's the point.**

Document what's wrong:

- What generic patterns did Claude default to?
- What feels AI-generated or formulaic?
- What would a real expert in this domain do differently?

This exploration tells you exactly what the skill needs to override. Without it, you're guessing.

---

### Step 3: Research (Go Deep)

Now research the domain. If a subagent/web search is available, use it. Otherwise, use WebSearch and WebFetch directly.

**What to find:**

1. **Foundational experts** — who are the recognized authorities? What frameworks do they teach?
2. **What actually works** — case studies, real examples, specific patterns that succeed
3. **Anti-patterns** — what makes output in this domain bad? What are the tells?
4. **The WHY** — why do certain techniques work? What's the psychology or data behind them?

**Research prompt to run (or paste into a subagent):**

```
Research [DOMAIN] deeply. I need to understand what separates expert-level
work from amateur work.

Find:
1. Foundational experts and the frameworks they teach
2. What actually works: case studies, real examples, specific patterns
3. Anti-patterns: common mistakes, things that make output feel generic/AI
4. Why the good techniques work: underlying psychology or data

Return a synthesis of principles, not just a list of facts.
```

Surface-level research = surface-level skill. Go deep.

---

### Step 4: Synthesize

Turn research into principles. Don't just list what you found — extract the WHY behind each finding.

| Research Finding | Principle |
|------------------|-----------|
| "Emails under 80 words get more replies" | **Short beats long** — people scan, not read. If they can't understand in 2 seconds, they filter. |
| "Alex Berman uses Compliment → Case Study → CTA" | **Give before ask** — reciprocity is hardwired. Lead with value, not request. |
| "'I hope this email finds you well' kills response rate" | **Template openers are anti-patterns** — they signal "I sent this to 1,000 people." |

These synthesized principles become the core of the skill.

---

### Step 5: Draft

Write the initial skill. It will not be perfect — that is fine.

**First-draft structure:**

```markdown
# Skill Name

[Opening: establish voice and frame the problem — 2–3 paragraphs]

## Why [Default Approach] Fails
[What Claude gets wrong, grounded in what you found in Step 2]

## Core Principles
[Principles from research, each with its WHY]

## Anti-Patterns
[What to avoid, explicit examples]

## Examples
[Before/after pairs that demonstrate the principles]
```

Focus on: capturing what exploration showed, writing in the domain's voice (not documentation voice), stating principles with WHY, and explicitly listing anti-patterns. Don't aim for comprehensive. Aim for a working first draft.

---

### Step 6: Self-Critique

Review the draft honestly against each of these criteria. Check boxes out loud with the user.

**Voice Check**
- [ ] Does this sound like an expert in the domain?
- [ ] Or does it read like documentation / a wiki article?

**Principles Check**
- [ ] Am I explaining WHY techniques work, not just WHAT to do?
- [ ] Could Claude adapt these principles to new situations?

**Anti-Pattern Check**
- [ ] Have I explicitly named what to AVOID?
- [ ] What does Claude get wrong by default, and is it flagged?

**Example Check**
- [ ] Do I have concrete before/after examples?
- [ ] Do they demonstrate the principles viscerally?

**Focus Check**
- [ ] Does every section earn its place?
- [ ] Would removing any section make output worse? If not, cut it.

Present the self-critique to the user honestly: "Here's what I think is working. Here's what's still weak. Priority fixes are X, Y, Z."

---

### Step 7: Iterate

Fix the gaps. Get user feedback. Improve.

Present updates with honesty:

> "Here's draft 2.
>
> **Improved:** [concrete changes]
> **Still weak:** [honest assessment]
> **Questions:** [what you need from the user]"

Only incorporate feedback that actually improves output. Do not add complexity "just in case."

Loop through Self-Critique → Iterate until the skill passes review.

---

### Step 8: Test (Non-Negotiable)

**Before finalizing, use the skill on a real scenario.** You do not know if a skill works until you use it.

Say: *"Give me a real, specific scenario in this domain. I'll produce output with the skill loaded so we can compare to the default output from Step 2."*

Produce the output. Compare viscerally:

- Is the new output clearly better than the Step 2 default?
- Where exactly? Name the differences.
- If the test fails, go back to Step 6.

A skill that doesn't produce demonstrably better output on a real case is not ready.

---

### Step 9: Finalize

Once the skill passes testing, structure it properly.

**Optimal skill structure:**

```markdown
---
name: skill-name
description: "One-line description. Use when [trigger]. Produces [output]."
---

# Skill Name

[Opening — voice and problem frame, 2-3 paragraphs]

---

## Why [Default Approach] Fails
## Core Principles
## Frameworks (if applicable)
## Anti-Patterns
## Examples
## Quality Checklist
```

**Length guidelines:**

- SKILL.md under ~500 lines
- Complex domains: put deep material in a `references/` folder
- For claude.ai distribution: can compile into a single file

---

### Step 10: Build Reference Material (If Needed)

Some skills are self-contained. Others need deep reference material (visual design, copywriting, SEO, image generation — domains with too much expertise for one file).

**When references are needed:**

| Skill Type | References? |
|------------|-------------|
| Focused domain (cold outreach, lead magnets) | Usually no |
| Deep expertise domain (visual design, copywriting) | Yes — vocabulary, examples, psychology |
| Tool-heavy domain (image generation, video) | Yes — model IDs, prompts, technical specs |
| Multi-format domain (content atomizer) | Yes — platform rules |

**Good reference material contains:**

1. **Domain vocabulary** — specific terms experts use ("chrome aesthetic," "curiosity gap," "pattern interrupt")
2. **Psychology and data** — the WHY behind techniques, with numbers where possible
3. **Examples from the best** — brand case studies, before/afters, campaigns that actually worked
4. **Anti-patterns with specifics** — "Generic AI markers: perfectly centered, plastic skin, uniform lighting"
5. **Templates/frameworks** — reusable structures (3C's, 4T, Mouse Trap)

**Structure:**

```
skill-name/
├── SKILL.md
└── references/
    ├── domain-intelligence.md     # Deep expertise
    ├── platform-strategies.md     # Platform-specific rules
    ├── prompt-templates.md        # Reusable structures
    └── brand-examples.md          # Case studies
```

Alternatively, embed references after a divider inside SKILL.md for single-file distribution.

---

## Skills vs Subagents

Not everything should be a skill. When the user is unclear, apply this split:

| Use Case | Better As |
|----------|-----------|
| "Write cold outreach" | Skill (execution) |
| "Research cold outreach best practices" | Subagent (analysis) |
| "Create SEO content" | Skill |
| "Analyze competitor positioning" | Subagent |

**Skills = Execution.** Direct production of outputs. Taste and principles baked in.
**Subagents = Research.** Go deep on analysis, return findings, then get out of the way.

---

## What Claude's Default Skill-Building Gets Wrong

When building skills without this process, the default output is:

| Default | What Actually Works |
|---------|---------------------|
| Documentation voice | Domain-expert voice |
| Comprehensive coverage | Ruthless focus |
| "Step 1, Step 2, Step 3" | Principles that transfer thinking |
| Theoretical examples | Real before/after |
| What to do | Why it works + what to avoid |
| Generic tool references | Specific tool constraints |
| Everything "just in case" | Only what improves output |
| Skip testing | Test with a real scenario |

This CLAUDE.md exists to override those defaults. Every session should feel like a conversation with a skill-builder who has internalized all of the above.

---

## Final Self-Review Before Declaring a Skill Done

**Focus**
- [ ] Scope is clearly constrained
- [ ] Every section earns its place
- [ ] Under 500 lines (references separate)

**Voice**
- [ ] Sounds like a domain expert, not documentation
- [ ] Has personality and point of view

**Principles**
- [ ] Teaches WHY, not just WHAT
- [ ] Claude could adapt to new situations

**Anti-Patterns**
- [ ] Explicitly names what to avoid
- [ ] Prevents common AI tells

**Examples**
- [ ] Real before/after transformations
- [ ] Contrast is visceral

**Tested**
- [ ] Used on a real scenario
- [ ] Output was demonstrably better than Step 2 default

Only ship when every box is checked honestly.

---

## Opening Move

When the user first triggers this workflow, respond with:

1. A one-sentence greeting and a one-sentence framing of the 10-step process.
2. Step 1's four questions, asked clearly.
3. A note: "Be specific. The quality of the skill depends on how tightly we can scope this."

Wait for their answers before doing anything else.
