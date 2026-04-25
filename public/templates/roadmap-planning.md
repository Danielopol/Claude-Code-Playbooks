# Roadmap Planning

Plan a strategic roadmap across prioritization, epic definition, stakeholder alignment, and sequencing. Move from disconnected feature requests to a cohesive, outcome-driven roadmap that aligns stakeholders and sequences work logically.

Not a Gantt chart. A strategic communication tool showing what you're building, why it matters, and how it ladders to business outcomes.

## Types of Roadmaps

**Now/Next/Later** — agile teams, uncertainty, continuous discovery
**Theme-Based** — exec communication, strategic intent
**Timeline (Quarters)** — resource planning, stakeholder communication
**Feature-Based (anti-pattern)** — lists features without strategic narrative

## Why This Works

- **Outcome-driven** — ties initiatives to business/customer outcomes
- **Stakeholder alignment** — transparent process reduces political friction
- **Strategic clarity** — shows "why," not just "what"
- **Flexible** — adapts as you learn

**Anti-patterns:** Not a commitment. Not a feature list. Not waterfall.

## When to Use

**Use:** Annual/quarterly planning, after strategy session, onboarding stakeholders, reframing feature-driven roadmaps.
**Don't use:** Sprint planning, when strategy is unclear, when stakeholders expect date commitments.

## The 5 Phases (1-2 weeks)

### Phase 1: Gather Inputs (Day 1-2)

- **Business goals** — OKRs, exec memos, board decks → 3-5 outcomes
- **Customer problems** — discovery insights, tickets, NPS, churn → 3-5 validated pains
- **Technical constraints** — eng leadership input → tech debt, migrations
- **Stakeholder requests** — sales, marketing, CS → uncommitted requests

### Phase 2: Define Initiatives (Day 3-4)

- `epic-hypothesis` — 60 min per epic → 10-15 epic hypotheses
- T-shirt sizing (S=1-2wk / M=3-4wk / L=2-3mo / XL=3+mo) — PM + eng lead
- Map to business outcomes (Retention, Acquisition, Engagement, etc.)

### Phase 3: Prioritize (Day 5)

- `prioritization-advisor` — choose framework
- Score epics — PM + eng + leadership
- Adjust for strategic fit (override scores when strategic)

Example RICE:
| Epic | Reach | Impact | Conf | Effort | RICE |
|------|-------|--------|------|--------|------|
| Onboarding | 10K | 3 | 80% | 1mo | 24K |
| Enterprise SSO | 500 | 3 | 90% | 2mo | 675 |

### Phase 4: Sequence (Day 6-7)

- Map dependencies
- Sequence by quarter or Now/Next/Later
- Validate capacity with engineering

```
Q1 (Now): Onboarding, SSO, Mobile
Q2 (Next): Reporting, Slack, Pricing
Q3 (Later): Mobile App, AI, i18n
```

### Phase 5: Communicate (Week 2)

Presentation: strategic context → roadmap overview → quarter deep dives → what's NOT on roadmap → dependencies/risks.

Audience: execs, leadership, eng, sales, marketing, CS. 45 min present + 15 Q&A.

Refine based on feedback (1-2 days). Publish internally; optionally externally (Now/Next/Later).

## Time Investment

- **Fast track:** 1 week (existing epics, quick alignment)
- **Typical:** 1.5-2 weeks (define epics + stakeholder review)

## Common Pitfalls

1. **Feature-driven roadmap** → frame epics as hypotheses with metrics
2. **HiPPO prioritization** → use RICE/ICE for transparency
3. **Roadmap as commitment** → "strategic plan, subject to change"
4. **No dependencies mapped** → explicit Phase 4 with eng validation
5. **Solo PM roadmap** → gather inputs in Phase 1, draft review in Phase 5

## References

- `epic-hypothesis` (Phase 2)
- `prioritization-advisor` (Phase 3)
- `product-strategy-session` (run before)
- `discovery-process` (Phase 1 inputs)
- `user-story-mapping-workshop` (complex epics)

**External:**
- Bruce McCarthy & C. Todd Lombardo, *Product Roadmaps Relaunched* (2017)
- Intercom, *RICE Prioritization* (2016)
