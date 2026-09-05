# Agent Design Philosophy

A mental model for designing AI agents across any domain — customer service, research, operations, creative work, or specialized business processes. The core idea: the model already knows how to be an agent. Your job is to get out of the way.

## The Core Philosophy

An agent is not complex engineering. It's a simple loop that invites the model to act:

```
LOOP:
  Model sees: context + available capabilities
  Model decides: act or respond
  If act: execute capability, add result, continue
  If respond: return to user
```

That's it. The magic isn't in the code — it's in the model. The code just provides the opportunity.

## The Three Elements

### 1. Capabilities — What Can It Do?

Atomic actions the agent can perform: search, read, create, send, query, modify.

**Design principle**: start with 3–5 capabilities. Add more only when the agent consistently fails because a capability is genuinely missing — not preemptively, in case it might be needed.

### 2. Knowledge — What Does It Know?

Domain expertise injected on-demand: policies, workflows, best practices, schemas.

**Design principle**: make knowledge available, not mandatory. Load it when relevant, not upfront on every turn.

### 3. Context — What Has Happened?

The conversation history — the thread connecting actions into coherent behavior.

**Design principle**: context is precious. Isolate noisy subtasks into subagents. Truncate verbose tool output before it enters the main thread. Protect clarity over completeness.

## Agent Design Thinking

Before building anything, work through:

- **Purpose** — what should this agent accomplish?
- **Domain** — what world does it operate in (customer service, research, operations, creative)?
- **Capabilities** — what 3–5 actions are essential, not nice-to-have?
- **Knowledge** — what expertise does it need access to, and when?
- **Trust** — what decisions can genuinely be delegated to the model rather than hard-coded?

Trust the model. Don't over-engineer. Don't pre-specify a rigid workflow when the model can reason through the actual case in front of it. Give it capabilities and knowledge, and let it figure out the path.

## Progressive Complexity

Start simple. Add complexity only when real usage — not speculation — reveals the need:

| Level | What to Add | When to Add It |
|---|---|---|
| Basic | 3–5 capabilities | Always start here |
| Planning | Progress tracking | Multi-step tasks lose coherence without it |
| Subagents | Isolated child agents | Exploration or noisy subtasks pollute the main context |
| Skills | On-demand knowledge | Domain expertise is needed, but only sometimes |

Most agents never need to go beyond Level 2. Reaching for subagents or a skill library on day one, before real usage has shown the need, is the most common over-engineering mistake.

## Domain Examples

The pattern is universal — only the capabilities change:

- **Business**: CRM queries, email, calendar, approvals
- **Research**: Database search, document analysis, citations
- **Operations**: Monitoring, tickets, notifications, escalation
- **Creative**: Asset generation, editing, collaboration, review

## Key Principles

1. **The model IS the agent** — code just runs the loop.
2. **Capabilities enable** — they define what it CAN do.
3. **Knowledge informs** — it defines what it KNOWS how to do.
4. **Constraints focus** — limits create clarity, not just safety.
5. **Trust liberates** — let the model reason instead of scripting every branch.
6. **Iteration reveals** — start minimal, evolve from actual usage, not anticipated usage.

## Anti-Patterns

| Pattern | Problem | Fix |
|---|---|---|
| Over-engineering | Complexity added before it's needed | Start simple; add only on demonstrated need |
| Too many capabilities | Model gets confused about which tool to reach for | Start with 3–5, expand deliberately |
| Rigid workflows | Can't adapt to the actual case in front of it | Let the model decide the path |
| Front-loaded knowledge | Context bloat on every turn | Load knowledge on-demand instead |
| Micromanagement | Undercuts the model's actual reasoning ability | Trust it more; verify with real usage, not preemptive control |

## The Agent Mindset

Shift the question from **"How do I make the system do X?"** to **"How do I enable the model to do X?"**

Shift from **"What's the workflow for this task?"** to **"What capabilities would help accomplish this?"**

The best agent design is almost boring: a simple loop, clear capabilities, clean context. The magic isn't in the code — give the model capabilities and knowledge, and trust it to figure out the rest.

## Applying This When Building With Claude Code

- When scoping a new agent or subagent, resist writing a step-by-step script for it first — write its capability list and let it reason through the actual task.
- If a subagent keeps failing on the same missing action, that's the signal to add a capability — not a signal to write it a more detailed prompt trying to work around the gap.
- When a single agent's context is getting cluttered with exploration or research noise, that's the signal to split noisy subtasks into a subagent, per the Progressive Complexity table — not to keep piling truncation rules onto the main thread.

## Limitations

- This is a design philosophy, not a scaffolding tool — it doesn't hand you code, just the questions and defaults worth applying before writing any.
- Genuinely regulated or safety-critical domains (financial transactions, medical decisions) often need more explicit workflow constraints than "trust the model" — treat this as the default starting posture, not an absolute rule that overrides domain-specific compliance needs.
- Pairs well with, but is distinct from, an implementation-focused agent-building guide — this is the mental model for *what* to build and *why*; an implementation guide covers the concrete *how*.
