# Prioritization Advisor

Choose the right prioritization framework based on stage, team context, decision-making needs, and data availability. Avoid framework whiplash and applying the wrong tool (e.g., RICE for strategic bets, ICE for data-driven decisions).

Not a scoring calculator — a decision guide that matches frameworks to your situation.

## The Framework Landscape

**Scoring frameworks:**
- **RICE** (Reach, Impact, Confidence, Effort) — data-driven, requires metrics
- **ICE** (Impact, Confidence, Ease) — lightweight, gut-check
- **Value vs. Effort** (2x2) — quick wins vs. strategic bets
- **Weighted Scoring** — custom criteria, stakeholder input

**Strategic frameworks:**
- **Kano Model** — basic / performance / delight
- **Opportunity Scoring** — importance vs. satisfaction gap
- **Buy-a-Feature** — customer budget allocation
- **MoSCoW** — Must / Should / Could / Won't

**Contextual frameworks:**
- **Cost of Delay** — urgency-based
- **Impact Mapping** — goal-driven
- **Story Mapping** — journey-based

## When to Use

**Use:** Choosing framework first time, switching (current isn't working), aligning stakeholders, onboarding new PMs.
**Don't use:** Working framework already in place, one-off decisions, as substitute for strategic vision.

## Application: 4 Adaptive Questions

### Question 1: Product Stage

1. **Pre-PMF** — searching for fit; high uncertainty; need speed
2. **Early PMF, scaling** — moderate uncertainty; balancing speed + quality
3. **Mature, optimizing** — low uncertainty; data-driven decisions
4. **Multiple products/platform** — coordination complexity

### Question 2: Team Context

1. **Small team, limited resources** — need simple, fast framework
2. **Cross-functional, aligned** — can use data-driven frameworks
3. **Multiple stakeholders, misaligned** — need consensus-building framework
4. **Large org, complex dependencies** — need coordination framework

### Question 3: Decision-Making Need

1. **Too many ideas** — need filtering framework
2. **Stakeholders disagree** — need alignment framework
3. **Lack of data-driven decisions** — need scoring framework
4. **Strategic vs. quick wins tradeoffs** — need value/effort framework

### Question 4: Data Availability

1. **Minimal data** — gut-based frameworks (Value/Effort, ICE)
2. **Some data** — lightweight scoring (RICE, Weighted)
3. **Rich data** — data-driven (RICE with full metrics, A/B-driven)

## Recommendation Matrix (Examples)

| Stage + Data | Recommended | Why |
|--------------|-------------|-----|
| Pre-PMF + minimal data | ICE or Value/Effort | Speed over rigor |
| Early PMF + some data | RICE | Structured, not heavy |
| Mature + rich data | RICE + Opportunity Scoring | Data-driven + customer-centric |
| Misaligned stakeholders | Buy-a-Feature or MoSCoW | Forces consensus |
| Strategic bets | Kano + Cost of Delay | Customer delight + urgency |

## Output: Framework Recommendation

```markdown
## Recommended Framework: [Name]

**Why this fits:**
- [Rationale based on Q1-Q4]

**When to use:** [Context]
**When NOT to use:** [Limitations]

## How to Implement

### Step 1: Define scoring criteria
### Step 2: Score each feature
### Step 3: Calculate score
### Step 4: Review with stakeholders

## Example Scoring (RICE)

| Feature | Reach | Impact | Confidence | Effort | RICE |
|---------|-------|--------|------------|--------|------|
| Email reminders | 5,000 | 2 | 70% | 1 | 7,000 |
| Mobile app | 10,000 | 3 | 60% | 6 | 3,000 |
| Dark mode | 8,000 | 1 | 90% | 0.5 | 14,400 |

**Priority:** Dark mode > Email > Mobile (effort matters)

## Alternative (Second Choice)

If recommended doesn't fit: [Alternative]
- **Why:** [Rationale]
- **Tradeoffs:** [Gain vs. lose]

## Reassess When

- Product stage changes
- Team grows/reorganizes
- Stakeholder dynamics shift
- Current framework feels broken
```

## Common Pitfalls

1. **Wrong framework for stage** → Pre-PMF + weighted scoring = overkill
2. **Framework whiplash** → switching every quarter = chaos; commit 6-12 months
3. **Treating scores as gospel** → 8000 vs. 7999 doesn't mean A wins; PM judgment overrides
4. **Solo PM scoring** → no buy-in; collaborate with design + eng
5. **No framework at all** → HiPPO wins; even imperfect structure beats chaos

## References

- `user-story` — prioritized features become stories
- `epic-hypothesis` — prioritized epics validated with experiments
- `recommendation-canvas` — business outcomes inform prioritization

**External:**
- Intercom, *RICE Prioritization* (2016)
- Sean McBride, *ICE Scoring* (2012)
- Luke Hohmann, *Innovation Games* (Buy-a-Feature, 2006)
- Noriaki Kano, *Kano Model* (1984)
