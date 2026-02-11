# LangSmith Fetch

Debug LangChain and LangGraph agents by fetching execution traces from LangSmith Studio. Investigate agent behavior, errors, tool calls, memory operations, and performance metrics.

## Installation

```bash
pip install langsmith-fetch
```

## Configuration

Required environment variables:
```bash
export LANGSMITH_API_KEY="your_api_key"
export LANGSMITH_PROJECT="your_project_name"
```

## Activation Triggers

This skill activates when users mention:
- "Debug my agent"
- "Show recent traces"
- "Check for errors"
- "Review agent performance"
- "Why isn't my agent working"
- "Trace analysis"

## Four Main Workflows

### 1. Quick Debug Recent Activity

Fetches last 5 minutes of traces and reports:
- Success and failure counts
- Tools used and frequency
- Execution times
- Token consumption
- Error summary

```bash
langsmith-fetch recent --minutes 5 --format pretty
```

### 2. Deep Dive Specific Trace

Analyzes individual traces with detailed breakdown:
- Complete execution flow
- Step-by-step operations
- Root cause analysis
- Suggested fixes

```bash
langsmith-fetch trace <trace_id> --format json
```

### 3. Export Debug Session

Creates timestamped folders with traces and threads:
- Archived for later review
- Shareable with team members
- Includes all metadata

```bash
langsmith-fetch export --output ./debug-session
```

### 4. Error Detection

Identifies and categorizes errors across recent traces:
- Error frequency patterns
- Categorized by type
- Recommendations for fixes

```bash
langsmith-fetch errors --hours 24 --format pretty
```

## Output Formats

### Pretty (Visual Inspection)
Human-readable format with colors and formatting for terminal review.

### JSON (Detailed Analysis)
Structured data for programmatic analysis or integration with other tools.

### Raw (Piping)
Unformatted output for piping to other commands or scripts.

## Common Use Cases

### Unresponsive Agent
```
User: "Debug my agent - it's not responding"

Action:
1. Fetch recent traces
2. Identify last successful execution
3. Find where execution stopped
4. Report blocking issue
```

### Incorrect Tool Selection
```
User: "Why is my agent using the wrong tool?"

Action:
1. Fetch traces with tool calls
2. Analyze tool selection logic
3. Compare expected vs actual
4. Suggest prompt improvements
```

### Memory Operation Failures
```
User: "Agent isn't remembering context"

Action:
1. Fetch traces with memory ops
2. Check read/write operations
3. Identify failed operations
4. Report memory issues
```

### Performance Bottlenecks
```
User: "Agent is too slow"

Action:
1. Fetch recent traces with timing
2. Identify slow operations
3. Calculate average times
4. Recommend optimizations
```

## Debugging Workflow

### Step 1: Quick Overview
Start with recent activity summary:
- How many traces in last N minutes
- Success rate
- Common errors

### Step 2: Identify Problem Traces
Filter for issues:
- Failed executions
- Slow operations
- Specific error types

### Step 3: Deep Dive
Analyze specific problematic traces:
- Full execution flow
- Input/output at each step
- Error context

### Step 4: Root Cause
Determine underlying issue:
- Prompt problems
- Tool configuration
- Memory issues
- External API failures

### Step 5: Fix and Verify
After implementing fix:
- Run new executions
- Fetch fresh traces
- Confirm resolution

## Best Practices

1. **Start broad**: Use quick debug before deep dive
2. **Use trace IDs**: Pin down specific issues
3. **Export regularly**: Keep records of debugging sessions
4. **Track patterns**: Look for recurring error types
5. **Check tokens**: Monitor consumption for cost control
6. **Share with team**: Export sessions for collaboration

## Troubleshooting

### No Traces Found
- Verify LANGSMITH_PROJECT is correct
- Check API key permissions
- Confirm traces are being logged

### Incomplete Data
- Increase time window
- Check if traces finished executing
- Verify LangSmith logging is complete

### Performance Issues
- Reduce time window
- Use filters to narrow results
- Export and analyze offline
