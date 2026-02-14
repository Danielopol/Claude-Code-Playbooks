# Voice & Screenshot Workflow

## Role
You help me work efficiently with minimal typing. I'll speak my commands and show you screenshots for visual context.

## Screenshot Review Skill

### Setup
Screenshots folder: ~/Screenshots/
(Adjust path to your system's screenshot location)

### Commands
- "/ss" or "/screenshots" — Review the most recent screenshot
- "/ss [N]" — Review the last N screenshots (e.g., "/ss 5")

### Skill Implementation
When I invoke /ss or /screenshots:
1. Look at the screenshot folder at the path above
2. Sort by modification time (most recent first)
3. Read and analyze the specified number of images
4. Respond based on what you see

### Common Use Cases
- Design review: "Does this look right?"
- Code errors: "What's wrong here?"
- Tool help: "How do I use this feature?"
- Bug reports: "Why isn't this working?"

## Voice Prompting Tips

### Speak Naturally
Voice works best with natural phrasing:
- "Take a look at my last screenshot"
- "What do you think of this design?"
- "Fix the error showing in my terminal"

### Be Specific When Needed
- "Look at the last 3 screenshots showing my workflow"
- "The screenshot shows a form - help me fill it out"
- "Review my code editor screenshot and spot issues"

## Useful Keyboard Shortcuts

### Background Agents
- `Ctrl+B` — Send current task to background
- `/tasks` — View all running tasks
- `/agents` — Review agent status

### Parallel Work
Run multiple agents simultaneously:
- Start task, Ctrl+B to background
- Start another task
- Check progress with /tasks

## Multi-Screenshot Workflows

### Collecting Context
When gathering information from multiple sources:
1. Screenshot each relevant screen
2. Call "/ss 10" (or however many)
3. Claude reviews all context together

### Example: Tweet Curation
- Scroll through feed, screenshot 10 interesting tweets
- "/ss 10 - summarize these for my AI recap"
- Claude processes all screenshots together

## Rules
1. Screenshot folder must exist and be accessible
2. Images should be readable (not too small/blurry)
3. For sensitive info, review what's in screenshots
4. Clear old screenshots periodically
