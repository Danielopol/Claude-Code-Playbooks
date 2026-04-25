# Customer Journey Mapping Workshop

Guide product managers through creating a customer journey map by asking adaptive questions about the **actor** (persona), **scenario/goal**, **journey phases**, **actions/emotions**, and **opportunities** for improvement. Use this to visualize the end-to-end customer experience, identify pain points, and create a shared mental model across teams.

This is not a feature roadmap—it's a discovery and alignment tool that uncovers where the experience breaks down and where improvements will have the greatest impact.

## Five Key Components (NNGroup Framework)

1. **Actor** — A specific persona or user whose perspective anchors the map
2. **Scenario + Expectations** — The situational context and associated goals
3. **Journey Phases** — High-level stages organizing the experience (e.g., discover, try, buy, use, seek support)
4. **Actions, Mindsets, and Emotions** — User behaviors, thoughts, and emotional responses throughout phases
5. **Opportunities** — Insights identifying where experience can improve

## Journey Map Structure

```
Actor: [Persona Name]
Scenario: [Goal/Context]

Phase 1: Discover → Phase 2: Try → Phase 3: Buy → Phase 4: Use → Phase 5: Support
   ↓                  ↓                ↓               ↓               ↓
Actions:           Actions:         Actions:        Actions:        Actions:
Thoughts:          Thoughts:        Thoughts:       Thoughts:       Thoughts:
Emotions: 😊😐😞    Emotions:        Emotions:       Emotions:       Emotions:
   ↓                  ↓                ↓               ↓               ↓
Opportunities:     Opportunities:   Opportunities:  Opportunities:  Opportunities:
```

## Application (5 Adaptive Questions)

### Step 0: Gather Context

Before creating the map, gather:

**Customer Research:**
- User interviews, discovery notes, support tickets
- Churn reasons, exit surveys, NPS feedback
- Analytics data (drop-off points, feature usage)
- Personas or proto-personas

**Product Context:**
- Website copy, product descriptions, positioning
- Competitor journey maps or reviews (G2, Capterra)
- Existing journey documentation (if any)

### Question 1: Identify Actor (Persona)

"Who is the actor for this journey map?"

1. **Primary persona** — Your main target customer (Most common starting point)
2. **Secondary persona** — Different needs from primary (e.g., 'enterprise admin' vs. 'end user')
3. **High-churn persona** — User segment with highest churn rate (good for retention)
4. **Newly discovered persona** — Emerging segment from recent research (good for market expansion)

### Question 2: Define Scenario + Goal

"What's the scenario and goal for this journey?"

1. **First-time use** — New user onboarding, from discovery to activation
2. **Core workflow** — Recurring task user does regularly
3. **Problem resolution** — User encounters issue and seeks help
4. **Upgrade/expansion** — Free user considering paid plan, or existing customer expanding usage

### Question 3: Identify Journey Phases

Generate 4–6 phases based on scenario. Example (First-time use):

```
1. Discover — User learns about product
2. Evaluate — User researches, compares alternatives
3. Try — User signs up, starts onboarding
4. Activate — User reaches "aha moment," experiences value
5. Use — User integrates product into workflow
6. Expand — User considers upgrading or inviting team
```

### Question 4: Map Actions, Thoughts, Emotions per Phase

Generate 3–5 per phase. Example (Phase 3: Try — Onboarding):

```
Actions:
- Signs up with email
- Receives welcome email
- Logs in for the first time
- Sees empty dashboard
- Searches for "getting started" guide

Thoughts:
- "This looks promising, but I'm not sure where to start"
- "Do I need to watch a tutorial video?"

Emotions:
- Curious but uncertain 🤔
- Slightly frustrated (no clear next step) 😕
- Hopeful it will get easier 🙂

Pain Points:
- No onboarding checklist or guided tour
- Empty state doesn't suggest next action
- Too many options in navigation (overwhelming)
```

### Question 5: Identify Opportunities (Prioritized)

Generate 5–7 opportunities ranked by impact:

```
## 1. Onboarding lacks guided first steps (Phase 3: Try) — HIGH IMPACT
Pain Point: Users see empty dashboard, don't know what to do first
Evidence: 60% of signups don't complete first action within 24 hours
Opportunity: Add interactive onboarding checklist
Impact: HIGH — Directly affects activation rate

## 2. Pricing page is confusing (Phase 2: Evaluate) — HIGH IMPACT
Pain Point: Users don't understand which plan fits their needs
Evidence: 70% bounce rate on pricing page
Opportunity: Add plan comparison tool or "Which plan is right for me?" quiz
Impact: HIGH — Directly affects trial conversion
```

## Output Template

```markdown
# Customer Journey Map: [Scenario]

**Actor:** [Persona]
**Scenario:** [Context]
**Goal:** [What actor is trying to accomplish]

## Journey Phases
[Phase 1] → [Phase 2] → [Phase 3] → [Phase 4] → [Phase 5] → [Phase 6]

## Full Journey Map

### Phase 1: [Name]
**Actions:** ...
**Thoughts:** "[Quote 1]" "[Quote 2]"
**Emotions:** [Emotion 1] 😊 [Emotion 2] 😐
**Pain Points:** ...

### Phase 2: [Name]
[...repeat structure for all phases...]

## Opportunities (Prioritized)

### Opportunity 1: [Name] (HIGH IMPACT)
**Phase:** [Journey phase]
**Pain Point:** [Description]
**Evidence:** [Data/research]
**Proposed Solution:** [How to address]
**Impact:** HIGH — [Rationale]

## Next Steps
1. Validate opportunities with discovery interviews
2. Prioritize fixes (impact × effort)
3. Create problem statements for top opportunities
4. Build experiments / solution trees
```

## Common Pitfalls

1. **Mapping internal process, not customer experience** — Sales funnel ≠ customer journey. Map from customer POV: "Discovers problem → Researches solutions → Tries product → Adopts."
2. **No emotions or pain points** — Actions only = misses where experience breaks down. Add customer quotes, emotional states.
3. **Too many personas in one map** — Becomes generic. One map per persona; create separate maps for multiple personas.
4. **Opportunities not prioritized** — 20 opportunities with no ranking = paralysis. Rank by impact (HIGH/MEDIUM/LOW) based on evidence and emotional intensity.
5. **Map created in isolation** — PM alone, no team = no shared mental model. Facilitate workshop with cross-functional team.

## References

- Nielsen Norman Group, "Journey Mapping 101" (2016) — Definitive guide
- Adaptive Path, "Guide to Experience Mapping" (2013) — Experience vs. journey maps
