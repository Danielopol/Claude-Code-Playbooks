# Proof of Life (PoL) Probe

Define and document a **Proof of Life probe** — a lightweight, disposable validation artifact designed to surface harsh truths before expensive development. Reconnaissance missions, not MVPs. Meant to be **deleted, not scaled**.

Prevents prototype theater. Forces method to match actual learning goal.

## What Is a PoL Probe?

A deliberate, disposable validation experiment answering one specific question as cheaply and quickly as possible. Not a product, not an MVP, not a pilot — a targeted truth-seeking mission.

**Origin:** Coined by Dean Peters (Productside), building on Marty Cagan's 2014 prototype flavors and Jeff Patton: *"The most expensive way to test your idea is to build production-quality software."*

## 5 Essential Characteristics

| Characteristic | Meaning | Why |
|----------------|---------|-----|
| **Lightweight** | Hours/days, not weeks | Expensive probes resist deletion |
| **Disposable** | Planned for deletion, not scaling | Prevents sunk-cost fallacy, scope creep |
| **Narrow Scope** | One hypothesis or risk | Broad experiments yield ambiguous results |
| **Brutally Honest** | Harsh truths, not vanity metrics | Polite data is useless data |
| **Tiny & Focused** | Reconnaissance, never MVPs | Small surface = faster learning |

**Anti-Pattern:** If it feels too polished to delete, it's prototype theater.

## PoL Probe vs. MVP

| Dimension | PoL Probe | MVP |
|-----------|-----------|-----|
| Purpose | De-risk via narrow hypothesis | Justify ideas / defend roadmap |
| Scope | Single question, single risk | Smallest shippable increment |
| Lifespan | Hours-days, deleted | Weeks-months, iterated |
| Audience | Internal team + narrow sample | Real customers in production |
| Fidelity | Just enough illusion | Production-quality |
| Outcome | Learn what *doesn't* work | Learn what *does* work (and ship) |

**Key:** PoL probes are **pre-MVP reconnaissance**. Run probes to decide IF you should build an MVP.

## The 5 Prototype Flavors

| Type | Core Question | Timeline | Tools |
|------|---------------|----------|-------|
| **Feasibility Check** | "Can we build this?" | 1-2 days | GenAI chains, API tests, data sweeps, spike code |
| **Task-Focused Test** | "Can users complete without friction?" | 2-5 days | Optimal Workshop, UsabilityHub, Maze |
| **Narrative Prototype** | "Earn stakeholder buy-in?" | 1-3 days | Loom, Sora/Synthesia, slideware, storyboards |
| **Synthetic Data Simulation** | "Model without production risk?" | 2-4 days | Synthea, DataStax LangFlow |
| **Vibe-Coded Probe** | "Survive real user contact?" | 2-3 days | ChatGPT Canvas + Replit + Airtable |

**Golden Rule:** *"Use the cheapest prototype that tells the harshest truth. If it doesn't sting, it's probably theater."*

## When to Use

**Use:** Specific falsifiable hypothesis, particular risk blocks next decision, need harsh truth in days not weeks, production software would be premature, can articulate what failure looks like.

**Don't:** Impressing execs (theater), confirmation bias, can't articulate disposal plan, broad learning goal ("will customers like this?"), avoiding hard decision.

## The Template

```markdown
# PoL Probe: [Descriptive Name]

## Hypothesis
[One-sentence statement of what you believe]
Example: "If we reduce onboarding to 3 fields, completion will exceed 80%."

## Risk Being Eliminated
[Specific risk/unknown]
Example: "We don't know if users abandon signup due to form length."

## Prototype Type
- [ ] Feasibility Check
- [ ] Task-Focused Test
- [ ] Narrative Prototype
- [ ] Synthetic Data Simulation
- [x] Vibe-Coded PoL Probe

## Target Users / Audience
[Who interacts with this probe?]
Example: "10 users from early access waitlist, non-technical SMB owners."

## Success Criteria (Harsh Truth)
- **Pass:** 8+ users complete signup under 2 minutes
- **Fail:** <6 users complete, or average time exceeds 5 minutes
- **Learn:** Identify specific drop-off fields

## Tools / Stack
Example: "ChatGPT Canvas for form UI, Airtable for data, Loom for post-session interviews."

## Timeline
- Build: 2 days
- Test: 1 day (10 user sessions)
- Analyze: 1 day
- Disposal: Day 5 (delete code, keep learnings doc)

## Disposal Plan
Example: "After sessions, archive recordings, delete Frankensoft code, document learnings in Notion."

## Owner
[Who is accountable for running and disposing]

## Status
- [ ] Hypothesis defined
- [ ] Probe built
- [ ] Users recruited
- [ ] Testing complete
- [ ] Learnings documented
- [ ] Probe disposed
```

## Quality Checklist

Before launching, verify:

- [ ] **Lightweight:** Built in 1-3 days?
- [ ] **Disposable:** Disposal date committed?
- [ ] **Narrow:** Tests ONE hypothesis?
- [ ] **Brutally Honest:** Will data hurt if wrong?
- [ ] **Tiny:** Smaller than MVP?
- [ ] **Falsifiable:** Can describe failure?
- [ ] **Clear Owner:** One person accountable?

If any "no," revise or reconsider.

## Example (Mini)

```markdown
Hypothesis: Users can distinguish "archive" vs. "delete"
Probe Type: Task-Focused Test
Pass: 80%+ correct interpretation
Fail: <60% or critical confusion
Disposal: Archive test results after 10 sessions
```

## Common Pitfalls

1. Running "will users like this?" — too broad; use falsifiable hypothesis
2. Treating probe as proto-MVP, refusing disposal
3. Vanity metrics that avoid uncomfortable truth
4. Skipping pre-defined failure threshold
5. Choosing tools first, hypothesis second

## References

- `pol-probe-advisor` — Decision framework for choosing probe type
- `discovery-process` — Use probes in validation phase
- `problem-statement` — Define problem first
- `epic-hypothesis` — Frame hypothesis
- Jeff Patton — *User Story Mapping*
- Marty Cagan — *Inspired* (2014 prototype flavors)
- Dean Peters — [*Vibe First, Validate Fast, Verify Fit*](https://deanpeters.substack.com/p/vibe-first-validate-fast-verify-fit)
