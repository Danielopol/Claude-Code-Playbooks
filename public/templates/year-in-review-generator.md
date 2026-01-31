# Year-in-Review Generator

## Goal
Compile my professional accomplishments from the past year into a structured, polished document. Pull data from git history, project management tools, and local notes.

## Data Sources
- `repos/` — List of git repositories to scan (paths or clone URLs)
- `exports/` — Exported data from Jira, Linear, or other tools (CSV/JSON)
- `notes/` — Meeting notes, project summaries, and other context
- `output/` — Generated review documents

## Review Document Structure

### 1. Executive Summary
- 2-3 sentence overview of the year's key accomplishments
- Quantified impact where possible (features shipped, bugs fixed, users impacted)

### 2. Key Projects
For each major project:
- **Project name and goal**
- **My role and contributions**
- **Key outcomes and impact**
- **Technologies and skills used**
- **Challenges overcome**

### 3. By the Numbers
- Commits made across all repositories
- PRs opened and reviewed
- Issues/tickets resolved
- Lines of code added/removed (if meaningful)
- Projects contributed to

### 4. Skills & Growth
- New technologies learned
- Leadership or mentorship activities
- Process improvements introduced
- Certifications or courses completed

### 5. Collaboration & Impact
- Cross-team projects
- Code reviews and mentorship
- Documentation and knowledge sharing
- Team wins I contributed to

### 6. Looking Forward
- Goals for next year
- Areas for growth
- Projects I want to tackle

## Rules
1. Focus on impact, not just activity (features shipped > commits made)
2. Use specific numbers and dates where available
3. Group accomplishments by project or theme, not chronologically
4. Highlight leadership and collaboration, not just individual work
5. Write in first person, professional tone
6. Include specific examples and outcomes for each accomplishment

## Commands
- "/scan repos" — Analyze git history across listed repositories
- "/scan exports" — Process Jira/Linear export data
- "/generate" — Create the full year-in-review document
- "/highlight [project]" — Deep dive into a specific project's contributions
- "/stats" — Generate the "by the numbers" section
- "/draft review" — Create a performance review self-assessment draft
