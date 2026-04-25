# Jobs-to-be-Done (JTBD)

Systematically explore what customers are trying to accomplish (functional, social, emotional jobs), the pains they experience, and the gains they seek. Uncover unmet needs, validate product ideas, and ensure your solution addresses real motivations — not surface-level feature requests.

Not a survey — a structured lens for understanding *why* customers "hire" your product and what would make them "fire" it.

## The JTBD Framework

Influenced by Clayton Christensen and Osterwalder's Value Proposition Canvas. Three categories:

### 1. Customer Jobs
- **Functional jobs:** Tasks to perform ("send an invoice")
- **Social jobs:** How customers want to be perceived ("look professional to clients")
- **Emotional jobs:** States to seek or avoid ("feel confident in my work")

### 2. Pains
- **Challenges:** Obstacles customers face
- **Costliness:** Too expensive in time, money, or effort
- **Common mistakes:** Frequent errors
- **Unresolved problems:** Gaps in current solutions

### 3. Gains
- **Expectations:** What would exceed current solutions
- **Savings:** Time, money, or effort reductions
- **Adoption factors:** What increases likelihood of switching
- **Life improvement:** How life gets easier or more enjoyable

## Why This Structure Works

- **Separates job from solution:** "Communicate with my team" (job) ≠ "email" (solution)
- **Reveals underlying motivations:** Functional may be "track expenses"; emotional is "feel in control"
- **Surfaces non-obvious competition:** Pen/paper, spreadsheets, workarounds
- **Prioritizes by intensity:** Not all pains are equal — focus on the most acute

## Anti-Patterns

- Not a feature wishlist ("I want AI, automation, dashboards" is not a job)
- Not demographics ("Millennials want mobile-first" is a trait, not a job)
- Not generic ("Be more productive" — dig into *which* tasks and *why*)
- Not one-dimensional (focusing only on functional misses social/emotional)

## When to Use

**Use:** Early-stage discovery, PMF validation, roadmap prioritization, competitive analysis, messaging.
**Don't use:** After the product is built, for trivial tweaks, as a substitute for quantitative validation.

## Application

### Step 1: Define Context

- **Target segment:** Who are you studying? (reference `proto-persona`)
- **Situation:** In what context does the job arise? ("When managing a project deadline...")
- **Current solutions:** Competitors, workarounds, doing nothing

**If missing context:** Run customer interviews, contextual inquiry, or "switch interviews" (why they switched from previous solution).

### Step 2: Explore Customer Jobs

#### Functional Jobs (verbs, solution-agnostic, specific)

```markdown
### Functional Jobs:
- [Task 1]
- [Task 2]
- [Task 3]
```

Examples: "Reconcile monthly expenses for tax filing" / "Onboard a new team member in <2 hours" / "Deploy code to production without downtime"

#### Social Jobs (audience-specific)

```markdown
### Social Jobs:
- [Perception 1]
- [Perception 2]
```

Examples: "Be seen as strategic by my exec team" / "Appear reliable to clients" / "Look tech-savvy to younger colleagues"

#### Emotional Jobs (positive + negative, rooted in research)

```markdown
### Emotional Jobs:
- [State 1]
- [State 2]
```

Examples: "Feel confident I'm not missing details" / "Avoid anxiety of data entry errors" / "Feel accomplishment at day end"

### Step 3: Identify Pains

**Challenges:** "Tools don't integrate, forcing manual entry" / "No visibility into teammate work" / "Approval takes 3+ days"

**Costliness:** "8 hours manual report generation" / "$10K for a specialist we can't afford" / "20+ hours of training"

**Common Mistakes:** "Forgetting to CC stakeholders" / "Miscalculating deductions from missing receipts"

**Unresolved Problems:** "CRM doesn't track health scores" / "Email loses context when people join mid-thread"

### Step 4: Uncover Gains

**Expectations:** "Auto-categorizes expenses without tagging" / "Suggests next steps based on project status"

**Savings:** "8 hours → 10 minutes" / "Eliminate need for full-time admin" / "Onboarding 2 weeks → 2 days"

**Adoption Factors:** "Free trial, no credit card" / "Migration support for existing data" / "Testimonials from similar companies"

**Life Improvement:** "Leave work on time" / "Less stressed about deadlines" / "Focus on strategic, not busywork"

### Step 5: Prioritize and Validate

- Rank pains by intensity (acute vs. mild)
- Identify must-have vs. nice-to-have gains
- Cross-reference across personas
- Validate via survey/data after interviews surface hypotheses

## Examples

```markdown
**Functional Jobs:** Coordinate tasks across a distributed team
**Pains - Challenges:** Team members use different tools, creating silos
**Gains - Savings:** Reduce status reporting from 3 hours to 15 minutes
```

## Common Pitfalls

1. **Confusing jobs with solutions** — "I need Slack" → ask "why?" 5 times → "avoid project delays"
2. **Generic jobs** — "Save time" → get specific: "report gen 8 → 1 hour"
3. **Ignoring social/emotional jobs** — these drive adoption more than functional
4. **Fabricating JTBD without research** — use switch interviews and contextual inquiry
5. **Treating all pains equal** — rank by intensity; ask "if we solved one, which matters most?"

## References

- `proto-persona` — Who has these jobs/pains/gains
- `problem-statement` — JTBD informs "Trying to" and "But" sections
- `positioning-statement` — JTBD informs "that need" statement
- Clayton Christensen, *Competing Against Luck* (2016)
- Tony Ulwick, *Outcome-Driven Innovation* (2016)
- Alexander Osterwalder, *Value Proposition Canvas* (2014)
