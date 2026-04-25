# User Story (Mike Cohn + Gherkin)

Create user stories combining Mike Cohn's "As a / I want / so that" with Gherkin "Given/When/Then" acceptance criteria. Translate user needs into actionable, testable, outcome-focused work.

Not a feature spec — a conversation starter capturing *who* benefits, *what* they want, *why*, and *how* you know it works.

## The Format

**Use Case (Mike Cohn):**
- **As a** [persona/role]
- **I want to** [action]
- **so that** [outcome]

**Acceptance Criteria (Gherkin):**
- **Scenario:** [brief description]
- **Given:** [precondition]
- **and Given:** [more preconditions]
- **When:** [trigger event — aligns with "I want to"]
- **Then:** [expected outcome — aligns with "so that"]

## Why This Works

- User-centric: forces who/why focus
- Outcome-focused: "so that" surfaces value
- Testable: Gherkin is concrete + verifiable
- Conversational: opens discussion, not the final spec
- Shared language across product/eng/QA

## Application

### Step 1: Gather Context

- Persona (`proto-persona`)
- Problem (`problem-statement`)
- Desired outcome
- Constraints

### Optional Helper Script

```bash
python3 scripts/user-story-template.py --persona "trial user" --action "log in with Google" --outcome "access without creating a new password"
```

### Step 2: Write the Use Case

```markdown
### User Story [ID]:
- **Summary:** [Memorable, value-focused title]

#### Use Case:
- **As a** [specific persona]
- **I want to** [action]
- **so that** [outcome]
```

Quality checks:
- Specific persona, not generic "user"
- Action user takes, not feature you build
- "So that" = motivation, not restated action

### Step 3: Write Acceptance Criteria

```markdown
#### Acceptance Criteria:
- **Scenario:** [description]
- **Given:** [precondition]
- **and Given:** [more]
- **When:** [trigger]
- **Then:** [outcome]
```

Quality checks:
- Multiple Givens OK (preconditions stack)
- One When + one Then (multiple = split the story)
- "When" matches "I want to"
- "Then" matches "so that"

### Step 4: Validate

- Read aloud: does the team understand who/what/why?
- Can QA write tests from this?
- Too big? See `user-story-splitting`.
- Is "Then" provable?

## Example

```markdown
### User Story 042:
- **Summary:** Enable Google login for trial users to reduce signup friction

#### Use Case:
- **As a** trial user visiting the app for the first time
- **I want to** log in using my Google account
- **so that** I can access the app without creating and remembering a new password

#### Acceptance Criteria:
- **Scenario:** First-time trial user logs in via Google OAuth
- **Given:** I am on the login page
- **and Given:** I have a Google account
- **When:** I click "Sign in with Google" and authorize the app
- **Then:** I am logged in and redirected to onboarding
```

## Common Pitfalls

1. **Tech tasks disguised as stories** — "As a developer, refactor the API" = engineering task.
2. **"As a user" (too generic)** — use specific personas.
3. **"So that" restates "I want to"** — dig for the real motivation.
4. **Multiple When/Then** — story too big. Split it.
5. **Untestable Then** — "better experience." Make it concrete: "page loads in under 2s."

## References

- `skills/user-story-splitting` — break large stories down
- `skills/proto-persona` — defines the persona
- `skills/problem-statement` — validate problem first
- `skills/epic-hypothesis` — epics decompose to stories
- Mike Cohn, *User Stories Applied* (2004)
- Gherkin (Cucumber) Given/When/Then
- INVEST criteria
