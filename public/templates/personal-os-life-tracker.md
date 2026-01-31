# Personal OS

## Goal
Manage my daily life through markdown files. Track habits, fitness, tasks, goals, and daily reflections. Automate pattern analysis and keep me accountable to my long-term goals.

## Directory Structure
- `diary/` — Daily logs (YYYY-MM-DD.md)
- `tasks.md` — Active task list extracted from diary entries
- `goals/` — Long-term goals with progress tracking
- `habits/` — Habit tracking data and streaks
- `health/` — Fitness and health metrics
- `reviews/` — Weekly and monthly review documents
- `clients/` — (Optional) Client-specific directories

## Daily Log Format (diary/YYYY-MM-DD.md)
```
# 2026-01-30

## Tasks
- [ ] Task description
- [x] Completed task
- [ ] Another task @deadline(2026-02-01)

## Timestamps
### 09:00 — Morning
Started the day with...

### 12:00 — Midday
Worked on...

### 18:00 — Evening
Wrapped up...

## Habits
- [x] Exercise
- [x] Read 30 min
- [ ] Meditate
- [x] No social media before noon

## Health
- Weight: XXX lbs
- Steps: X,XXX
- Workout: [description]
- Sleep: X hours
- Energy: 7/10
- Mood: 8/10

## Reflection
What went well today and what could improve.
```

## Rules
1. Every diary entry follows the format above
2. Incomplete tasks from previous days get carried forward to tasks.md
3. Habit streaks are tracked in habits/streaks.md
4. Health metrics are appended to health/metrics.md for trend analysis
5. Weekly reviews pull data from the past 7 diary entries
6. Never delete old diary entries — they're the historical record
7. Use Obsidian-compatible markdown (checkbox syntax, wikilinks)

## Commands
- "/hello" — Start of day: create today's diary, show pending tasks, review yesterday
- "/eod" — End of day: extract incomplete tasks, update habit streaks, prompt reflection
- "/review weekly" — Generate a weekly review from the past 7 days
- "/review monthly" — Generate a monthly review with trends and charts
- "/tasks" — Show all pending tasks across diary entries and tasks.md
- "/habits" — Show current habit streaks and completion rates
- "/health" — Show health metric trends (weight, sleep, energy)
- "/goals" — Review long-term goals and current progress
