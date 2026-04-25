# User Story Splitting

Break large stories or epics into smaller, independently deliverable stories using 8 proven splitting patterns (Lawrence & Green, Humanizing Work). Reduce risk, enable faster feedback, maintain agile flow.

Not arbitrary slicing — strategic decomposition that preserves user value while reducing complexity.

## The 8 Splitting Patterns (in order)

1. **Workflow steps** — sequential journey steps
2. **Business rule variations** — different rules (permissions, calculations)
3. **Data variations** — different data types or inputs
4. **Acceptance criteria complexity** — multiple When/Then pairs
5. **Major effort** — technical milestones / phases
6. **External dependencies** — separate APIs / third parties
7. **DevOps steps** — deployment / infrastructure phases
8. **Tiny Acts of Discovery (TADs)** — experiments to unpack unknowns

Stop at the first pattern that applies.

## When to Split

- Story too large for a single sprint
- Multiple When/Then pairs in acceptance criteria
- Epic → deliverable increments
- Team can't agree on size
- Multiple personas / workflows bundled

**Don't split:** already small + scoped, splitting creates blocking dependencies, technical task (use task breakdown).

## Application

### Step 1: Identify the Original Story

Ensure it follows `skills/user-story` format (Mike Cohn + Gherkin).

### Step 2: Apply the Splitting Logic

Walk patterns 1-8 in order; stop at first match.

#### Pattern 1: Workflow Steps
Original: "Sign up, verify email, complete onboarding"
Split: 3 stories along the sequence.

#### Pattern 2: Business Rule Variations
Original: "Apply discounts (member 10%, VIP 20%, first-time 5%)"
Split: 3 stories per rule.

#### Pattern 3: Data Variations
Original: "Upload files (images, PDFs, videos)"
Split: 3 stories per data type.

#### Pattern 4: Acceptance Criteria Complexity (most common)
Original story with 3 When/Then pairs → 3 stories along those boundaries.

#### Pattern 5: Major Effort
Real-time collaboration → presence → cursors → live edits.

#### Pattern 6: External Dependencies
Login (Google, Facebook, Twitter) → 3 stories per OAuth provider.

#### Pattern 7: DevOps Steps
Upload → small files → large files w/ progress → resumable uploads.

#### Pattern 8: TADs (last resort)
"AI-powered recommendations" → prototype 3 algorithms, define success, build simplest, iterate.
TADs are experiments, not stories.

### Step 3: Write Each Split as a Full Story

Use Mike Cohn + Gherkin format from `skills/user-story`.

### Step 4: Validate

1. Each split delivers user value (not "front-end done")?
2. Each split is independent (no hard dependencies)?
3. Each is independently testable?
4. Each fits a sprint (1-5 days)?
5. Combined splits = original (nothing lost)?

## Common Pitfalls

1. **Horizontal slicing** — "Story 1: API. Story 2: UI." Split vertically — each story = full stack delivering value.
2. **Over-splitting** — 2-day stories don't need splitting. Adds dependencies + overhead.
3. **Meaningless splits** — "First half" / "Second half." Use one of the 8 patterns.
4. **Hard dependencies** — Story 2 blocked until Story 1 deployed. Split for parallelism.
5. **Identical "so that"** — same outcome on each split = task decomposition, not story splitting.

## References

- `skills/user-story` — format for split stories
- `skills/epic-hypothesis` — epics need splitting first
- `skills/jobs-to-be-done` — meaningful splits along user jobs
- Lawrence & Green, *Humanizing Work Guide to Splitting User Stories*
- Bill Wake, *INVEST in Good Stories* (2003)
- Mike Cohn, *User Stories Applied* (2004)
