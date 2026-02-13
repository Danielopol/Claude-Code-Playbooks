# Exploration Protocol

## The Problem

Without structure, experimental code scatters across the repository:
- Test scripts in `scripts/`
- One-off files in root
- "Temporary" code that lives forever
- No one knows which version was the good one

## The Solution: Exploration Folder

All experimental work goes into `explorations/` first:

```
explorations/
├── [active-project]/
│   ├── README.md          # Goal, hypothesis, status
│   ├── code/              # Iterations (_v1, _v2, _v3)
│   ├── data/              # Test data, inputs
│   └── output/            # Results, generated files
└── ARCHIVE/
    ├── completed_[name]/  # Graduated to production
    └── abandoned_[name]/  # Documented why stopped
```

## Starting an Exploration

Before coding, create the structure:

```
mkdir -p explorations/[project-name]/{code,data,output}
```

Create `explorations/[project-name]/README.md`:
```markdown
# Exploration: [Name]

## Goal
[What are you trying to learn or build?]

## Hypothesis
[What do you expect to happen?]

## Status
[ ] In progress / [x] Completed / [ ] Abandoned

## Notes
[Running notes as you work]

## Outcome
[What did you learn? Did hypothesis hold?]
```

## Fast-Track vs Plan-First

| Question | Answer | Workflow |
|----------|--------|----------|
| "Will this ship?" | YES | Plan-First (80/100 quality) |
| "Am I testing an idea?" | YES | Fast-Track (60/100 quality) |
| "Does this improve the project?" | NO | Don't build it |

### Fast-Track Rules (for explorations only)
- Skip formal planning
- 60/100 quality threshold (vs 80 for production)
- No PR required
- Document as you go, not after
- Can abandon anytime with brief note

## Research Value Check (2 minutes)

Before starting ANY exploration:

1. "Does this improve the paper/product/analysis?"
   - **Yes** → Explore
   - **Maybe** → Explore (quick test)
   - **No** → Skip

2. "Is this the smallest experiment that could validate the idea?"
   - If no, scope down first

## Lifecycle

```
Research value check (2 min)
        ↓
Create explorations/[project]/ (5 min)
        ↓
Code without overhead (60/100 quality)
        ↓
Decision point (1-2 hours):
├── Graduate → Move to src/, upgrade to 80/100
├── Keep exploring → Stay in explorations/
└── Abandon → Move to ARCHIVE/ with explanation
```

## Graduation Process

When exploration succeeds:
1. Document what worked in the README
2. Refactor code to production standards (80/100)
3. Move to appropriate production location
4. Update imports, tests, documentation
5. Move exploration folder to `ARCHIVE/completed_[name]/`

## Abandonment Process

When exploration fails or isn't worth continuing:
1. Document WHY in the README (so future-you doesn't retry)
2. Note any partial learnings
3. Move to `ARCHIVE/abandoned_[name]/`
4. No shame — failed experiments are valuable data

## Kill Switch

At any point, you can stop:
- Archive with one-paragraph explanation
- No sunk cost guilt
- Move on to next idea
