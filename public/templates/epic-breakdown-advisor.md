# Epic Breakdown Advisor

Guide product managers through breaking down epics into user stories using Richard Lawrence's complete Humanizing Work methodology—a systematic, flowchart-driven approach that applies 9 splitting patterns sequentially. Each split preserves **vertical slices** (end-to-end value) rather than horizontal slices (technical layers).

This is not arbitrary slicing—it's a proven, methodical process: validate → apply patterns in order → evaluate results strategically.

## Three-Step Process

1. **Pre-Split Validation:** Check INVEST criteria (except "Small")
2. **Apply Splitting Patterns:** Work through 9 patterns sequentially until one fits
3. **Evaluate Splits:** Choose the split that reveals low-value work or produces equal-sized stories

## The 9 Splitting Patterns (In Order)

1. **Workflow Steps** — Thin end-to-end slices, not step-by-step
2. **Operations (CRUD)** — Create, Read, Update, Delete as separate stories
3. **Business Rule Variations** — Different rules = different stories
4. **Data Variations** — Different data types/structures
5. **Data Entry Methods** — Simple UI first, fancy UI later
6. **Major Effort** — "Implement one + add remaining"
7. **Simple/Complex** — Core simplest version first, variations later
8. **Defer Performance** — "Make it work" before "make it fast"
9. **Break Out a Spike** — Time-box investigation when uncertainty blocks splitting

## Meta-Pattern (Applies Across All Patterns)

1. Identify core complexity
2. List all variations
3. Reduce variations to **one complete slice**
4. Make other variations separate stories

## Application

### Step 0: Provide Epic Context

- Epic title/ID, description or hypothesis
- Acceptance criteria (especially multiple When/Then pairs)
- Target persona
- Rough estimate

### Step 1: Pre-Split Validation (INVEST Check)

1. **Independent?** Can it be prioritized/developed without blocking dependencies?
2. **Negotiable?** Room for collaborative discovery (not prescriptive spec)?
3. **Valuable?** Delivers observable value to a user? **If NO: STOP. Don't split — reframe.**
4. **Estimable?** Team can size relatively?
5. **Testable?** Concrete acceptance criteria?

**If any fail → fix before splitting.**

### Step 2: Apply Splitting Patterns Sequentially

#### Pattern 1: Workflow Steps (Thin End-to-End)

Split into **thin end-to-end slices**, not step-by-step.

**❌ Wrong (step-by-step):** Editorial review → Legal approval → Publish
**✅ Right (thin end-to-end):**
- Story 1: Publish (simple path: author uploads, goes live immediately)
- Story 2: Add editorial review step
- Story 3: Add legal approval step

Each story delivers **full workflow**, just with increasing sophistication.

#### Pattern 2: Operations (CRUD)

The word "manage" signals multiple operations.

**Original:** "Manage user accounts"
**Split:** Create account, View details, Edit info, Delete account

#### Pattern 3: Business Rule Variations

Identical functionality under different rules → one story per rule.

**Original:** "Flight search with flexible dates (date range, weekends, offsets)"
**Split:** Search by date range / Search by weekends / Search by offsets

#### Pattern 4: Data Variations

Complexity from different data types → just-in-time additions.

**Original:** "Geographic search (counties, cities/towns, custom areas)"
**Split:** By county → by city/town → by custom area

#### Pattern 5: Data Entry Methods

UI complexity independent of core functionality.

**Original:** "Search with calendar date picker"
**Split:** Basic text input → visual calendar picker

#### Pattern 6: Major Effort

First implementation carries most complexity; additions trivial.

**Original:** "Accept credit cards (Visa, MC, Amex, Discover)"
**Split:** Accept Visa (build full infra) → add MC/Amex/Discover (trivial)

#### Pattern 7: Simple/Complex

Strip complexity to core; add back as variations.

**Original:** "Flight search with stops, nearby airports, flexible dates"
**Split:** Basic search → max stops → nearby airports → flexible dates

#### Pattern 8: Defer Performance

"Make it work" before "make it fast."

**Original:** "Real-time search <100ms"
**Split:** Search works (functional) → optimize to <100ms

#### Pattern 9: Break Out a Spike

Last resort: high uncertainty prevents splitting. Run 1-2 day time-boxed investigation. **Spikes produce learning, not shippable code.** After spike, restart at Pattern 1.

### Step 3: Evaluate Split Quality

1. **Does this split reveal low-value work to deprioritize or eliminate?** (Good splits expose 80/20)
2. **Does this split produce more equally-sized stories?** (Equal sizes = prioritization flexibility)

**If neither → try a different pattern.**

### Cynefin Domain Considerations

- **Low uncertainty (Obvious/Complicated):** Find all stories, prioritize by value/risk
- **High uncertainty (Complex):** Identify 1-2 **learning stories**; avoid exhaustive enumeration
- **Chaos:** **Defer splitting** until stability emerges; stabilize first

## Output Template

```markdown
# Epic Breakdown Plan

**Epic:** [Original epic]
**Pre-Split Validation:** ✅ Passes INVEST
**Splitting Pattern Applied:** [Pattern name]
**Rationale:** [Why this pattern fits]

## Story Breakdown

### Story 1: [Title] (Simplest Complete Slice)
**Use Case:** As a [persona], I want to [action], so that [outcome]
**Acceptance Criteria:** Given/When/Then
**Why This First:** [Core value]
**Estimated Effort:** [Days/points]

### Story 2: [Title] (First Variation)
[Repeat...]

## Split Evaluation
- Reveals low-value work? [Analysis]
- Equal-sized stories? [Analysis]

## INVEST Validation (Each Story)
- Independent / Negotiable / Valuable / Estimable / Small / Testable
```

## Common Pitfalls

1. **Skipping pre-split validation** — Splits non-Valuable stories → technical tasks, not user stories. Fix: always run INVEST first.
2. **Step-by-step workflow splitting (Pattern 1 wrong)** — Individual steps don't deliver value. Fix: thin end-to-end slices.
3. **Horizontal slicing** — "Build API" + "Build UI" → neither delivers value alone. Fix: vertical slices through layers.
4. **Forcing a pattern** — Arbitrary splits by workflow when there's no sequence. Fix: if pattern doesn't apply, continue to next.
5. **Not re-splitting large stories** — 3 stories × 5 days each still too large. Fix: restart Pattern 1 for each.
6. **Ignoring split evaluation** — Miss waste-elimination opportunities. Fix: ask "what can we kill or defer?"

## Practice Recommendation

Humanizing Work: teams reach fluency in **2.5–3 hours** across multiple sessions.

1. Analyze recently completed features (hindsight makes patterns obvious)
2. Walk completed work through the flowchart
3. Find multiple split approaches per feature
4. Build shared vocabulary of domain examples

## References

- Richard Lawrence & Peter Green, *The Humanizing Work Guide to Splitting User Stories*
- Bill Wake, *INVEST in Good Stories* (2003)
- https://www.humanizingwork.com/the-humanizing-work-guide-to-splitting-user-stories/
