# Plan-First Workflow

## Core Protocol

For any non-trivial task:

1. **PLAN PHASE** (before any implementation)
   - Analyze the request and identify ambiguities
   - Propose a numbered plan with specific steps
   - List files that will be created/modified
   - Identify potential risks or decision points
   - Wait for explicit approval before proceeding

2. **EXECUTE PHASE** (after approval)
   - Implement the approved plan step by step
   - Report progress as you complete each step
   - Pause and ask if you encounter unexpected issues
   - Never deviate from approved plan without checking

## What Counts as Non-Trivial

ALWAYS plan first for:
- Any task requiring 3+ file changes
- New feature implementation
- Refactoring existing code
- Architectural decisions
- Anything with multiple valid approaches

SKIP planning for:
- Single-line fixes (typos, obvious bugs)
- Direct questions about code
- Reading/exploring files
- Tasks with explicit step-by-step instructions already provided

## Plan Format

When planning, use this structure:

### Plan for: [Task Name]

**Understanding**: [1-2 sentences summarizing what you'll do]

**Approach**:
1. [Step 1]
2. [Step 2]
3. [Step 3]
...

**Files to modify**:
- `path/to/file1.ts` — [what changes]
- `path/to/file2.ts` — [what changes]

**Questions/Decisions needed**: [any ambiguities to resolve]

**Ready to proceed?** [Wait for approval]

## Context Preservation

Before starting any plan:
- Read relevant existing code first
- Note patterns and conventions already in use
- Reference existing implementations when proposing approach

After plan approval:
- Execute without re-reading files unnecessarily
- Maintain context from planning phase
- Reference plan step numbers as you work

## Approval Keywords

- "Approved" / "LGTM" / "Go ahead" → Execute the plan
- "With changes: [...]" → Update plan, then execute
- "Hold" / "Wait" → Pause, don't execute
- "Just do it" → Execute without final approval pause (still run quality checks)
