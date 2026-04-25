# Workshop Facilitation Protocol

Canonical facilitation pattern for interactive skills: one question per turn, clear progress labels, adaptive recommendations at decision points, predictable interruption handling. Use as the source of truth for any guided multi-turn workshop or advisor session.

## Key Concepts

- **One-step-at-a-time** — single targeted question per turn
- **Session heads-up + entry mode** — set expectations; offer Guided / Context dump / Best guess
- **Progress visibility** — `Context Qx/8`, `Scoring Qx/5`
- **Decision-point recommendations** — enumerated options only when a choice is needed, not after every answer
- **Quick-select response options** — numbered answers + "Other (specify)" when useful
- **Flexible selection parsing** — accept `1`, `#1`, `1,3`, `1 and 3`, or custom text
- **Context-aware progression** — build on previous answers; don't re-ask resolved questions
- **Interruption-safe flow** — answer meta questions, restate status, resume
- **Fast path** — if user wants a single-shot output, skip multi-turn

## Application (12 Steps)

1. Brief heads-up: estimated time + question count
2. Ask user to pick entry mode:
   - `1` Guided (one question at a time)
   - `2` Context dump (paste known context, skip redundancies)
   - `3` Best guess (infer missing, label assumptions)
3. One question per turn; wait for an answer
4. Plain-language questions; show short example formats when helpful
5. Show progress each turn (`Context Qx/8` or `Scoring Qx/5`)
6. Follow-up clarifications only when they materially improve quality
7. Offer numbered quick-select options for regular questions when practical:
   - Concise + mutually exclusive when possible
   - Include "Other (specify)" for open-ended likely answers
   - Accept multi-select (`1,3` or `1 and 3`)
8. Numbered recommendations only at decision points:
   - after context synthesis
   - after maturity/profile synthesis
   - during priority/action-plan selection
9. Accept numeric or custom choices; synthesize; continue
10. On meta-question interrupt: answer, restate progress + pending question
11. On stop/pause: halt immediately, wait for explicit resume
12. End with summary, decisions, and (if best-guess mode) `Assumptions to Validate`

## Example

**Opening:**
> "Quick heads-up: about 7-10 minutes, ~10 questions. How do you want to start?
> 1. Guided
> 2. Context dump
> 3. Best guess"

**User:** "2"

**Facilitator:** "Paste what you already know. I'll skip answered areas."

**Decision point after synthesis:**
> 1. **Prioritize Context Design** (Recommended)
> 2. Prioritize Agent Orchestration
> 3. Prioritize Team-AI Facilitation

**User:** "1 and 3"

**Facilitator:** "Great — Context Design first, Team-AI Facilitation in parallel."

## Common Pitfalls

- Asking multiple questions in the same turn
- Recommendations after every answer (interaction drag)
- Shorthand labels without plain-language questions
- Hiding progress
- Ignoring user's chosen option or custom direction
- Forgetting to label assumptions in best-guess mode

## References

- Source of truth for interactive skills behavior
- Used alongside `skills/*-workshop/SKILL.md` and advisor-style interactive skills
