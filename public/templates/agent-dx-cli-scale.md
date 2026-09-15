# Agent DX CLI Scale

A scoring scale for evaluating how well a CLI is designed for AI agents rather than humans. Human DX optimizes for discoverability and forgiveness; agent DX optimizes for predictability and defense-in-depth. Use this to evaluate an existing CLI, or as a design checklist when building a new one that agents will drive.

## When to Use

- Auditing whether a CLI your agents rely on is actually agent-ready
- Deciding whether to build a dedicated agent-facing mode for an existing CLI
- Designing a new CLI or tool surface that AI agents will operate
- Diagnosing why an agent keeps hallucinating flags, wasting tokens, or failing silently against a specific tool

## Scoring Axes

Score each axis 0–3, then sum for a total out of 21.

### 1. Machine-Readable Output

Can an agent parse the CLI's output without heuristics?

| Score | Criteria |
|---|---|
| 0 | Human-only output (tables, color codes, prose). No structured format available. |
| 1 | `--output json` or equivalent exists but is incomplete or inconsistent across commands. |
| 2 | Consistent JSON output across all commands. Errors also return structured JSON. |
| 3 | Streaming structured output (NDJSON) for paginated results. Structured output is the default in non-TTY (piped) contexts. |

### 2. Raw Payload Input

Can an agent send the full API payload without translation through bespoke flags?

| Score | Criteria |
|---|---|
| 0 | Only bespoke flags. No way to pass structured input. |
| 1 | Accepts `--json` or stdin JSON for some commands, but most require flags. |
| 2 | All mutating commands accept a raw JSON payload that maps directly to the underlying API schema. |
| 3 | Raw payload is first-class alongside convenience flags. The agent can use the API schema itself as documentation, with zero translation loss. |

### 3. Schema Introspection

Can an agent discover what the CLI accepts at runtime, without pre-stuffed documentation?

| Score | Criteria |
|---|---|
| 0 | Only `--help` text. No machine-readable schema. |
| 1 | `--help --json` or a `describe` command exists for some surfaces, but incomplete. |
| 2 | Full schema introspection for all commands — params, types, required fields — as JSON. |
| 3 | Live, runtime-resolved schemas that always reflect the current version, including scopes, enums, and nested types. |

### 4. Context Window Discipline

Does the CLI help agents control response size to protect their context window?

| Score | Criteria |
|---|---|
| 0 | Returns full responses with no way to limit fields or paginate. |
| 1 | Supports field masks or filters on some commands. |
| 2 | Field masks on all read commands, plus a way to page through results in full. |
| 3 | Streaming pagination, explicit in-tool guidance on field-mask usage, and active protection of the agent from token waste as a design goal. |

### 5. Input Hardening

Does the CLI defend against the specific ways agents fail — hallucinations, not typos?

| Score | Criteria |
|---|---|
| 0 | No input validation beyond basic type checks. |
| 1 | Validates some inputs but doesn't cover agent-specific hallucination patterns (path traversal, embedded query params, double encoding). |
| 2 | Rejects control characters, path traversal (`../`), percent-encoded segments, and embedded query params in resource IDs. |
| 3 | Comprehensive hardening: all of the above, plus output-path sandboxing, HTTP-layer encoding, and an explicit posture that the agent is not a trusted operator. |

### 6. Safety Rails

Can agents validate before acting, and are responses sanitized against prompt injection?

| Score | Criteria |
|---|---|
| 0 | No dry-run mode. No response sanitization. |
| 1 | A dry-run flag exists for some mutating commands. |
| 2 | Dry-run for all mutating commands, so the agent can validate a request without side effects. |
| 3 | Dry-run plus response sanitization against prompt injection embedded in returned data. The full request-response loop is defended, not just the request side. |

### 7. Agent Knowledge Packaging

Does the CLI ship knowledge in formats agents can consume at conversation start?

| Score | Criteria |
|---|---|
| 0 | Only `--help` and a docs site. No agent-specific context files. |
| 1 | A basic agent-context file with general usage guidance. |
| 2 | Structured skill files covering per-command or per-surface workflows and invariants. |
| 3 | A comprehensive, versioned skill library encoding agent-specific guardrails ("always use dry-run," "always use field masks") that's discoverable and follows a real packaging standard. |

## Interpreting the Total

| Range | Rating | Description |
|---|---|---|
| 0–5 | Human-only | Built for humans. Agents will struggle to parse output, hallucinate inputs, and lack safety rails. |
| 6–10 | Agent-tolerant | Agents can use it, but they'll waste tokens, make avoidable errors, and need heavy prompt engineering to compensate. |
| 11–15 | Agent-ready | Solid agent support. Structured I/O, input validation, and some introspection, with a few real gaps. |
| 16–21 | Agent-first | Purpose-built for agents: full schema introspection, comprehensive input hardening, safety rails, and packaged agent knowledge. |

## Bonus: Multi-Surface Readiness (Not Scored)

Note whether the CLI exposes multiple agent surfaces from the same binary — each is a genuine capability multiplier even though it doesn't add to the numeric score:

- **MCP support** (stdio JSON-RPC) — typed tool invocation, no shell-escaping risk.
- **Extension or plugin install** — the agent treats the CLI as a native capability rather than a shelled-out subprocess.
- **Headless auth** — environment-variable tokens or credentials, no browser redirect required.

## How to Use This Scale

1. **Score the CLI as it stands today**, axis by axis, citing the specific command or flag that justifies each score — a score without evidence isn't auditable later.
2. **Identify the lowest-scoring axes first.** A CLI scoring 3/3 on machine-readable output but 0/3 on input hardening has a specific, fixable gap, not a general "needs work" verdict.
3. **When designing a new CLI**, treat the level-2 criteria as the real target for a first release — level 3 is where a CLI should grow toward as agent usage proves out, not where day one needs to land.
4. **Re-score after a redesign** to confirm the change actually moved the needle on the axis it targeted, not just on the axes that were easy to fix.

## Tips

- The safety-rails axis (dry-run plus response sanitization) is the one teams most often skip entirely — it's easy to add structured output and call it "agent-ready" while leaving the CLI wide open to prompt injection riding in on API responses.
- A CLI that scores well on raw payload input but poorly on schema introspection creates a specific, painful failure mode: an agent that can send anything but has no reliable way to know what's valid, so it guesses and gets it wrong just often enough to be expensive.
- Treat the agent-knowledge-packaging axis as cheap, high-leverage effort — a well-written skill file describing invariants ("always dry-run before a delete") often closes gaps that would otherwise require actual code changes on the other axes.

## Limitations

- A scoring framework for CLI design, not a security audit tool — a CLI can score well here and still have vulnerabilities this scale doesn't probe for.
- Assumes the CLI's primary consumer is an autonomous or semi-autonomous agent; a CLI built purely for human interactive use isn't failing by scoring low here, it's just serving a different audience.
- The bonus multi-surface criteria are non-scored on purpose — don't let a high MCP/plugin score paper over a low score on the seven core axes.
