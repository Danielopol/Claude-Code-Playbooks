# Tool Interface Design for Agents

Design every tool as a contract between a deterministic system and a non-deterministic agent. Unlike human-facing APIs, agent-facing tools must make the whole contract unambiguous through the description alone — an agent infers intent from a description block and generates calls that must match expected formats. Every ambiguity becomes a real failure mode no amount of prompt engineering can fully fix.

This is for the tool-interface layer specifically: writing tool descriptions agents can route on, designing schemas and response formats, naming conventions, actionable error-recovery messages, MCP server design, tool-set consolidation, and deciding when to add or remove an individual tool.

## Core Concepts

### Tools as Contracts

When a human calls an API, they read docs, understand conventions, and can ask a colleague when unsure. An agent has to infer the entire contract from a single description block, in one shot, with no chance to ask a clarifying question before making the call. Make the contract unambiguous by including format examples, expected patterns, and explicit constraints — omit nothing a caller needs to know.

### Tool Description as Prompt

Write every tool description knowing it loads directly into the agent's context and directly steers its behavior. It is not documentation for humans — it is prompt engineering. "Search the database," with cryptic parameter names, forces the agent to guess, and guessing produces incorrect calls. Include usage context, parameter format examples, and sensible defaults. Every word in the description either helps or hurts tool-selection accuracy.

### Namespacing and Organization

Namespace tools under common prefixes as a collection grows, because agents benefit from hierarchical grouping the same way humans do. Without namespacing, an agent has to evaluate every tool in one flat list, and selection accuracy degrades as the count grows.

## The Consolidation Principle

**Build single comprehensive tools instead of multiple narrow tools that overlap.** Rather than separate `list_users`, `list_events`, and `create_event` calls an agent has to chain in the right order, implement one `schedule_event` that finds availability and schedules in a single call. The comprehensive tool absorbs the workflow internally.

**Why consolidation works:** agents have limited context and attention. Every tool in a collection competes for attention during selection, every description consumes budget, and overlapping functionality creates ambiguity. Consolidation eliminates redundant descriptions, removes selection ambiguity, and shrinks the effective tool set. Real production evidence (Vercel's d0 case study, among others) shows reducing a large set of specialized tools into a smaller set of well-designed primitives improves measured outcomes.

**When not to consolidate:** keep tools separate when they have fundamentally different behaviors, serve different contexts, or must be callable independently. Over-consolidation creates the opposite failure — a single tool with too many parameters and modes becomes hard to parameterize correctly. If a tool needs more than 8–10 parameters or serves fundamentally different use cases, split it back apart.

## Architectural Reduction

Push the consolidation principle further: remove most specialized tools in favor of primitive, general-purpose capabilities. Production evidence shows this can outperform sophisticated multi-tool architectures.

**The filesystem-agent pattern**: give an agent direct command execution and file system access instead of building custom tools for data exploration, schema lookup, and query validation. The agent uses standard utilities (grep, cat, find, ls) to explore and operate. This works because file systems are a proven abstraction models already understand deeply, standard tools behave predictably, agents can chain primitives flexibly instead of being boxed into predefined workflows, and good in-repo documentation replaces a summarization tool.

**When reduction outperforms complexity**: choose it when the data layer is well-documented and consistently structured, the model has sufficient reasoning capability, specialized tools were constraining rather than enabling the model, or more time is spent maintaining scaffolding than improving outcomes. Avoid it when the underlying data is genuinely messy, the domain requires specialized knowledge the model lacks, safety constraints must limit agent actions, or an operation genuinely benefits from a structured workflow.

**Design for future models, not current limitations.** Ask whether each tool enables a capability or constrains reasoning the model could handle on its own. Tools built as guardrails against a weaker model's mistakes often become liabilities once the model improves past needing them.

## Tool Description Engineering

Structure every description to answer four questions:

1. **What does the tool do?** State exactly what it accomplishes — avoid vague language like "helps with" or "can be used for."
2. **When should it be used?** Specify direct triggers ("user asks about pricing") and indirect signals ("need current market rates").
3. **What inputs does it accept?** Describe every parameter with type, constraints, defaults, and a format example.
4. **What does it return?** Document the output format, structure, a successful response example, and error conditions.

**Default parameter selection**: set defaults to the common case. Good defaults reduce agent burden and prevent errors from omitted parameters — choose ones that produce a useful result without requiring the agent to understand every option.

**Response format options**: offer a concise-vs-detailed choice, since response size materially impacts context usage. Concise returns essential fields only, for confirmations. Detailed returns the complete object, for when full context actually drives a decision. Document when to use each format in the tool description itself so the agent learns to select correctly.

## Error Message Design

Design every error message for two audiences at once: a developer debugging it, and an agent trying to recover from it. For the agent, every error must be actionable — it must state what went wrong *and* how to correct it. Include retry guidance for retryable errors, a corrected format example for input errors, and the specific missing field for an incomplete request. An error that says only "failed" gives zero recovery signal.

## Tool Definition Schema

Establish one consistent schema across every tool in a collection: verb-noun tool names (`get_customer`, `create_order`), consistent parameter names across tools (always `customer_id`, never sometimes `id` and sometimes `identifier`), and consistent return field names. Consistency reduces cognitive load and improves cross-tool generalization — an agent that's learned one tool's conventions should be able to guess the next tool's shape correctly.

## MCP Tool Naming Requirements

Always use fully qualified tool names with MCP to avoid "tool not found" errors and collisions between servers exposing similarly-named tools:

```
Format: ServerName:tool_name

# Correct
"Use the BigQuery:bigquery_schema tool to retrieve table schemas."
"Use the GitHub:create_issue tool to create issues."

# Incorrect — may fail with multiple servers registered
"Use the bigquery_schema tool..."
```

## Using Agents to Optimize Tools

Feed observed tool failures back to an agent to diagnose issues and propose improved descriptions — this creates a real feedback loop: agents using tools generate failure data, which agents then use to improve the descriptions, which reduces future failures. Treat any efficiency gain reported this way as workload-specific until it's reproduced against the actual target tool catalog, not assumed to transfer automatically.

## Testing Tool Design

Evaluate a tool design against five criteria: **unambiguity** (only one tool is the obvious right choice for a given task), **completeness** (nothing needed to make the call correctly is missing), **recoverability** (every error tells the agent what to change), **efficiency** (response size respects the agent's context budget), and **consistency** (naming and shape match the rest of the catalog). Test by presenting representative agent requests and checking the resulting tool calls against expected behavior — not just reading the description and judging it as prose.

## Tool Audit Checklist

Run this on every tool before adding it to an agent's toolkit:

1. **Name** — verb-noun, namespaced if the catalog spans multiple domains.
2. **Description** — states what the tool does, when to use it, and what it returns.
3. **Schema** — every parameter has a type, constraints, a default, and an example value.
4. **Return shape** — success and error payloads are both documented and machine-readable.
5. **Recovery** — every error tells the agent what to change before retrying.
6. **Overlap** — no other tool in the catalog shares this one's activation scenario.
7. **Consolidation decision** — adjacent narrow tools are merged unless independent calls are genuinely required.
8. **Token impact** — a large response supports a concise mode or a file-reference mode instead of always returning everything.

## Worked Examples

**Well-designed:**
```python
def get_customer(customer_id: str, format: str = "concise"):
    """
    Retrieve customer information by ID.

    Use when:
    - User asks about specific customer details
    - Need customer context for decision-making
    - Verifying customer identity

    Args:
        customer_id: Format "CUST-######" (e.g., "CUST-000001")
        format: "concise" for key fields, "detailed" for complete record

    Returns:
        Customer object with requested fields

    Errors:
        NOT_FOUND: Customer ID not found
        INVALID_FORMAT: ID must match CUST-###### pattern
    """
```

**Poorly designed, and why:**
```python
def search(query):
    """Search the database."""
```
Vague name (search what, for what purpose?); no parameter format specified; no return description; no usage context distinguishing it from other tools; no error handling documented. The predictable failure modes: an agent calls this when a more specific tool exists, can't determine the correct query format, can't interpret the result shape, and can't recover from a failure it has no information about.

## Gotchas

- **Vague descriptions** like "Search the database for customer information" leave too many questions unanswered — state the exact source, query format, and return shape.
- **Cryptic parameter names** (`x`, `val`, `param1`) force an agent to guess meaning from nothing. Use descriptive names that convey purpose without needing to read further.
- **Missing error-recovery guidance.** A generic "Error occurred" gives zero recovery signal — every error response has to say what went wrong and what to try next.
- **Inconsistent naming across tools** — `id` in one tool, `identifier` in another, `customer_id` in a third — creates confusion that compounds across a growing catalog.
- **MCP namespace collisions.** When two servers both expose a `search` tool, an agent can't disambiguate without the fully qualified name — always audit for collisions when adding a new provider.
- **Description rot.** Descriptions drift out of accuracy as the underlying API evolves — parameters get added, return formats change, error codes shift. Treat descriptions as code: version them, review them at API-change time, and test them against current behavior.
- **Over-consolidation.** A single tool handling too many workflows produces a parameter list so large agents struggle to select the right combination — split it back apart past 8–10 parameters or fundamentally different use cases.

## Tips

- Read every tool description as if it were prompt engineering, because it is — it loads into context and steers behavior exactly like an instruction would.
- When debugging why an agent picked the wrong tool, check for overlap first — two tools with similar activation scenarios is a far more common cause than a poorly worded individual description.
- Prefer primitive, general-purpose tools over specialized wrappers whenever the underlying capability (a real filesystem, a real shell) already gives the model what it needs — a wrapper built as a guardrail for a weaker model can become the thing constraining a stronger one later.

## Limitations

- This is the interface layer specifically — deciding whether a project needs LLMs at all, what the pipeline stages should be, or whether to introduce sub-agents are separate, adjacent design questions this doesn't cover.
- The consolidation principle is a strong default, not an absolute rule — a domain with genuinely distinct, independently-callable operations can be over-consolidated into an unusable mega-tool if pushed too far.
- Architectural reduction (bare filesystem access over custom tools) works best with a well-documented, consistently structured data layer and a capable model — it's the wrong call for messy data or a domain needing specialized guardrails.
