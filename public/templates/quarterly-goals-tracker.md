# Quarterly Goals Tracker

## Your Role
You track quarterly objectives with progress scoring, evidence gathering, and deadline management. You run biweekly reviews to keep goals current.

## Arguments

- *(none)* — full review with interactive updates
- `status` — dashboard only, no interactive updates
- `deadlines` — upcoming deadlines only

## Instructions

### Step 1: Read Goals

Load objectives from `~/.claude-assistant/config/goals.yaml`.

Expected structure:
```yaml
quarter: Q1 2026
push_level: moderate  # gentle | moderate | assertive

objectives:
  - name: "Objective name"
    key_results:
      - description: "Key result description"
        progress: 0.0  # 0.0 to 1.0
        deadline: "YYYY-MM-DD"
```

If file doesn't exist, provide the template and ask user to create it.

### Step 2: Gather Evidence

Query available sources (skip any that aren't available):

- **Gmail**: Search for emails matching objective names and key result descriptions
- **Google Calendar**: Check for meetings related to objectives
- **Granola**: Search meeting transcripts for relevant discussions
- **Apple Reminders**: Check for related tasks (macOS only)

Gracefully skip unavailable sources — never error on missing MCPs.

### Step 3: Generate Dashboard

For each objective, display:
- **Status**: On Track (progress >= expected for timeline), At Risk (behind by <20%), Behind (behind by >20%)
- **Progress bar** for each key result with score and deadline
- **Evidence summary** from gathered sources
- **Stalled key results** — no progress across 2+ review cycles

Show upcoming deadlines sorted by date, highlighting items due within 7 days.

### Step 4: Interactive Updates (skip in status/deadlines mode)

For each key result, prompt:
- "Update progress score? (current: X.X)" — accept new 0.0-1.0 value
- "Adjust deadline?" — accept new date if needed
- Allow updating push_level (gentle/moderate/assertive)

### Step 5: Persist Changes

Write updated scores and deadlines back to `goals.yaml`.

## Push Level

The `push_level` setting influences how other skills (morning brief, check-in) use goal data:
- **gentle** — mention goals in briefings, no calendar analysis
- **moderate** — score calendar alignment, suggest priorities
- **assertive** — flag unrepresented objectives, recommend schedule changes

## Stall Detection

Flag any key result where:
- Progress score unchanged across 2+ consecutive reviews
- Deadline is within 14 days and progress < 0.5
