# Proof of Life (PoL) Probe Advisor

Select the right **Proof of Life (PoL) probe** type (of 5 flavors) based on your hypothesis, risk, and resources. Match the cheapest prototype to the harshest truth — not the prototype you're most comfortable building.

**What this is:** Decision framework for choosing HOW to validate.
**What this is NOT:** Deciding IF you should validate (you should).

## Core Problem: Method-Hypothesis Mismatch

**Common failure:** PMs choose based on tooling comfort ("I know Figma, so I'll design a prototype"). Result: validate the wrong thing, miss the actual risk.

**Solution:** Work backwards from the hypothesis. "What specific risk am I eliminating? What's the cheapest path to harsh truth?"

## The 5 PoL Probe Flavors

| Type | Core Question | Best For | Timeline |
|------|---------------|----------|----------|
| **Feasibility Check** | "Can we build this?" | Technical unknowns, APIs, data integrity | 1-2 days |
| **Task-Focused Test** | "Can users complete this job without friction?" | Critical UI moments, labels, decisions | 2-5 days |
| **Narrative Prototype** | "Does this workflow earn stakeholder buy-in?" | Storytelling, alignment, complex flows | 1-3 days |
| **Synthetic Data Simulation** | "Can we model this without production risk?" | Edge cases, unknown-unknowns, statistical modeling | 2-4 days |
| **Vibe-Coded PoL Probe** | "Will this solution survive real user contact?" | Workflow/UX validation with real interactions | 2-3 days |

**Golden Rule:** *"Use the cheapest prototype that tells the harshest truth."*

## Anti-Patterns

- Not "build the prototype you're comfortable with" — match method to hypothesis
- Not "pick based on stakeholder preference" — optimize for learning
- Not "choose most impressive option" — impressive ≠ informative
- Not "default to code" — code is last resort, not first

## When to Use

**Use:** Clear hypothesis, unsure which validation method, need to eliminate specific risk within days, want to avoid prototype theater.
**Don't use:** No hypothesis yet (use `problem-statement` first), impressing execs (not validation), already know the answer (confirmation bias), need to ship MVP (this is pre-MVP).

## Application

### Step 0: Gather Context

1. **Hypothesis** — one sentence or "If [X] for [persona], then [outcome]"
2. **Specific risk to eliminate** — technical feasibility / user task / alignment / edge case / workflow
3. **Timeline** — hours / 1-2 days / 3-5 days / 1 week+ (>1 week = break down)
4. **Resources** — eng capacity, design tools, AI/no-code tools, user access, budget

### Step 1: Identify Core Question

Which of these are you really answering?

1. "Can we build this?" — technical feasibility, API, data, dependencies
2. "Can users complete this job without friction?" — UI moments, labels, navigation
3. "Does this workflow earn stakeholder buy-in?" — story, alignment, complex flow
4. "Can we model this without production risk?" — edge cases, simulation, prompt logic
5. "Will this solution survive real user contact?" — semi-functional workflow for UX

### Step 2: Recommended Probe by Question

#### Q1 → Feasibility Check

1-2 day spike-and-delete. Surface technical risk fast.

**Methods:** GenAI prompt chains, API sniff tests, data integrity sweeps, third-party tool eval
**Tools:** ChatGPT/Claude, Postman, Jupyter, proof-of-concept scripts
**Success:** API returns expected format <200ms (pass) / times out, incompatible (fail) / identify blocker (learn)
**Disposal:** Delete spike code after documenting

#### Q2 → Task-Focused Test

Validate critical moments with specialized testing tools. Observable task completion, not opinions.

**Methods:** Optimal Workshop, UsabilityHub, Maze, Loom task walkthroughs
**Tools:** Optimal Workshop ($200/mo), UsabilityHub ($100-300/mo), Maze (free tier)
**Success:** 80%+ complete task <2 min (pass) / <60% or 3+ stuck same step (fail) / exact friction point (learn)
**Disposal:** Archive recordings, delete test prototype

#### Q3 → Narrative Prototype

Tell the story, don't test the interface. Video walkthroughs or slideware. "Tell vs. test" — validate narrative.

**Methods:** Loom walkthroughs, Sora/Synthesia/Veo3, slideware storyboards, storyboard sketches
**Tools:** Loom (free), Sora/Synthesia (paid), PowerPoint/Keynote, Figma
**Success:** 8/10 stakeholders say "I'd use this" (pass) / "Why would I use this?" (fail) / narrative resonance (learn)
**Disposal:** Archive video, document feedback

#### Q4 → Synthetic Data Simulation

Simulated users / synthetic data / prompt logic testing. Explore edge cases without production touching. "Wind tunnel testing, cheaper than postmortem."

**Methods:** Synthea (patient data), DataStax LangFlow (prompt logic), Monte Carlo, synthetic behavior scripts
**Tools:** Synthea (open-source), DataStax LangFlow, Python+Faker, Locust/k6 (load testing)
**Success:** 10K synthetic users <1% error (pass) / edge cases crash (fail) / which cases break (learn)
**Disposal:** Delete synthetic data, document edge cases

#### Q5 → Vibe-Coded PoL Probe

Frankensoft stack (ChatGPT Canvas + Replit + Airtable) for semi-functional workflow interaction.

**⚠️ Warning:** Riskiest probe type. Looks real enough to confuse momentum with maturity. Use only when other methods insufficient.

**Methods:** ChatGPT Canvas, Replit, Airtable, Carrd/Webflow
**Stack:** Canvas (UI) → Replit (host Flask/Node) → Airtable (fake DB) → Loom (sessions)
**Success:** 8/10 complete workflow, 0 critical confusion (pass) / stuck, "is this broken?" (fail) / exact step losing confidence (learn)
**Disposal:** Delete all code, archive Loom, document learnings

### Step 3: Generate Artifact

Offer:
1. Generate complete `pol-probe` artifact with hypothesis, success criteria, timeline, disposal
2. Walk through execution steps (tools, methods, recruitment)
3. Refine hypothesis (if too broad)

### Step 4: Refine if Broad

If hypothesis tests multiple things:
1. What's the smallest thing to test first? (Isolate one variable)
2. What would "failure" look like? (Can't describe failure = can't measure success)
3. User behavior, technical feasibility, or stakeholder alignment? (Pick one focus)

## Examples

**Ex 1 (Task-Focused):** Hypothesis "users complete checkout <3 min" → core question "can users complete job?" → Task-Focused with UsabilityHub + 20 users + 3 days

**Ex 2 (Feasibility):** Hypothesis "GPT-4 auto-tags tickets <5% error" → core question "can we build this?" → Feasibility with 100 tickets + 1 day. Outcome: 18% error. Didn't build. Saved 6 weeks.

**Ex 3 (Narrative, NOT Vibe-Coded):** Hypothesis "enterprise buyers understand multi-tenant security" → core question "earn buy-in?" → Narrative Loom + 5 prospects + 2 days. NOT vibe-coded — you need understanding, not interaction.

**Ex 4 (Prototype theater, avoid):** Hypothesis "execs approve budget with polished demo" — This is politics, not validation. Use Narrative Prototype with target users, present user feedback to execs.

## Common Pitfalls

1. **Choosing by tooling comfort** — "I know Figma" → validate wrong thing
2. **Defaulting to code** — 2 weeks building before learning wrong hypothesis
3. **Vibe-Coded confused with MVP** — scope creep, refusing disposal; set disposal date before building
4. **Testing multiple things** — ambiguous results; one probe = one hypothesis
5. **Skipping success criteria** — "we'll know when we see it" = opinions; define pass/fail/learn before building

## References

- `pol-probe` — Template for documenting probes
- `problem-statement` — Frame problem before choosing method
- `problem-framing-canvas` — MITRE framing
- `discovery-process` — Use probes in validation phase
- `epic-hypothesis` — Turn epics into testable hypotheses
- Jeff Patton — *User Story Mapping* (lean validation)
- Marty Cagan — *Inspired* (2014 prototype flavors)
- Dean Peters — [*Vibe First, Validate Fast, Verify Fit*](https://deanpeters.substack.com/p/vibe-first-validate-fast-verify-fit)
