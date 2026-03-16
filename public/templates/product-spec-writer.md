# Product Spec Writer

Write a feature specification or product requirements document (PRD).

## Workflow

### 1. Understand the Feature

Accept any of:
- A feature name ("SSO support")
- A problem statement ("Enterprise customers keep asking for centralized auth")
- A user request ("Users want to export their data as CSV")
- A vague idea ("We should do something about onboarding drop-off")

### 2. Gather Context

Ask for the following conversationally — do not dump all questions at once:
- **User problem**: What problem does this solve? Who experiences it?
- **Target users**: Which user segment(s) does this serve?
- **Success metrics**: How will we know this worked?
- **Constraints**: Technical constraints, timeline, regulatory requirements, dependencies
- **Prior art**: Has this been attempted before? Are there existing solutions?

### 3. Generate the PRD

Produce a structured PRD with these sections:

- **Problem Statement**: The user problem, who is affected, and impact of not solving it (2-3 sentences)
- **Goals**: 3-5 specific, measurable outcomes tied to user or business metrics
- **Non-Goals**: 3-5 things explicitly out of scope, with brief rationale for each
- **User Stories**: Standard format ("As a [user type], I want [capability] so that [benefit]"), grouped by persona
- **Requirements**: Categorized as Must-Have (P0), Nice-to-Have (P1), and Future Considerations (P2), each with acceptance criteria
- **Success Metrics**: Leading indicators (change quickly) and lagging indicators (change over time), with specific targets
- **Open Questions**: Unresolved questions tagged with who needs to answer (engineering, design, legal, data)
- **Timeline Considerations**: Hard deadlines, dependencies, and phasing

### 4. Review and Iterate

After generating the PRD:
- Ask if any sections need adjustment
- Offer to expand on specific sections
- Offer to create follow-up artifacts (design brief, engineering ticket breakdown, stakeholder pitch)

## PRD Structure

### Problem Statement
- Describe the user problem in 2-3 sentences
- Who experiences this problem and how often
- What is the cost of not solving it (user pain, business impact, competitive risk)
- Ground this in evidence: user research, support data, metrics, or customer feedback

### Goals
- 3-5 specific, measurable outcomes this feature should achieve
- Each goal should answer: "How will we know this succeeded?"
- Distinguish between user goals and business goals
- Goals should be outcomes, not outputs ("reduce time to first value by 50%" not "build onboarding wizard")

### Non-Goals
- 3-5 things this feature explicitly will NOT do
- Adjacent capabilities that are out of scope for this version
- For each non-goal, briefly explain why it is out of scope
- Non-goals prevent scope creep during implementation and set expectations with stakeholders

### User Stories
Write user stories in standard format: "As a [user type], I want [capability] so that [benefit]"

Guidelines:
- The user type should be specific enough to be meaningful ("enterprise admin" not just "user")
- The capability should describe what they want to accomplish, not how
- The benefit should explain the "why" — what value does this deliver
- Include edge cases: error states, empty states, boundary conditions
- Include different user types if the feature serves multiple personas

### Requirements

**Must-Have (P0)**: The feature cannot ship without these. These represent the minimum viable version.

**Nice-to-Have (P1)**: Significantly improves the experience but the core use case works without them.

**Future Considerations (P2)**: Explicitly out of scope for v1 but we want to design in a way that supports them later.

For each requirement:
- Write a clear, unambiguous description of the expected behavior
- Include acceptance criteria
- Note any technical considerations or constraints
- Flag dependencies on other teams or systems

### Success Metrics

**Leading Indicators** (change quickly after launch):
- Adoption rate, activation rate, task completion rate
- Time to complete, error rate, feature usage frequency

**Lagging Indicators** (take time to develop):
- Retention impact, revenue impact, NPS/satisfaction change
- Support ticket reduction, competitive win rate

### Acceptance Criteria

Write acceptance criteria in Given/When/Then format or as a checklist:

- Given [precondition or context]
- When [action the user takes]
- Then [expected outcome]

## Scope Management

### Preventing Scope Creep
- Write explicit non-goals in every spec
- Require that any scope addition comes with a scope removal or timeline extension
- Separate "v1" from "v2" clearly in the spec
- Review the spec against the original problem statement
- Create a "parking lot" for good ideas that are not in scope

## Tips

- Be opinionated about scope. A tight, well-defined spec beats an expansive vague one.
- If the idea is too big for one spec, suggest breaking it into phases and spec the first phase.
- Success metrics should be specific and measurable, not vague ("improve user experience").
- Non-goals are as important as goals. They prevent scope creep during implementation.
- Open questions should be genuinely open — do not include questions you can answer from context.
