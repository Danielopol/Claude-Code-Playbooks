# MCP Server Builder

Guide for creating high-quality MCP (Model Context Protocol) servers that enable LLMs to interact with external services through well-designed tools.

## Overview

MCP servers provide tools that allow LLMs to access external services and APIs. Quality is measured by how effectively agents can accomplish real-world tasks using the tools provided.

## Development Process

### Phase 1: Research and Planning

#### 1.1 Agent-Centric Design Principles

**Build for Workflows, Not Just Endpoints**
- Don't simply wrap existing API endpoints
- Create tools that enable complete tasks
- Consolidate related operations (e.g., `schedule_event` checks availability AND creates)
- Focus on what agents actually need to accomplish

**Optimize for Limited Context**
- Agents have constrained context windows
- Return high-signal information, not data dumps
- Provide "concise" vs "detailed" response options
- Default to human-readable identifiers (names over IDs)

**Actionable Error Messages**
- Guide agents toward correct usage
- Suggest specific next steps: "Try using filter='active_only'"
- Make errors educational, not just diagnostic

**Natural Task Subdivisions**
- Tool names should reflect how humans think
- Group related tools with consistent prefixes
- Design around natural workflows

#### 1.2 Research Requirements

Exhaustively study API documentation:
- Official API reference
- Authentication requirements
- Rate limiting and pagination
- Error responses and status codes
- Data models and schemas

#### 1.3 Create Implementation Plan

**Tool Selection**
- Most valuable endpoints/operations
- Tools that work together for complex workflows
- Priority based on common use cases

**Shared Utilities**
- Common API request patterns
- Pagination helpers
- Error handling strategies
- Response formatting

**Input/Output Design**
- Validation models (Pydantic for Python, Zod for TypeScript)
- Consistent response formats
- Character limits and truncation

### Phase 2: Implementation

#### 2.1 Project Structure

**Python (FastMCP)**
```python
from mcp import FastMCP
from pydantic import BaseModel, Field

mcp = FastMCP("my-server")

class SearchInput(BaseModel):
    query: str = Field(..., description="Search query", min_length=1)
    limit: int = Field(10, description="Max results", ge=1, le=100)

@mcp.tool()
async def search(input: SearchInput) -> str:
    """
    Search for items matching the query.

    Args:
        query: The search term to find
        limit: Maximum number of results (1-100)

    Returns:
        Matching items with names and descriptions

    Example:
        search(query="python", limit=5)
    """
    # Implementation
    pass
```

**TypeScript**
```typescript
import { Server } from "@modelcontextprotocol/sdk";
import { z } from "zod";

const server = new Server({ name: "my-server" });

const SearchInput = z.object({
  query: z.string().min(1).describe("Search query"),
  limit: z.number().min(1).max(100).default(10).describe("Max results")
}).strict();

server.registerTool({
  name: "search",
  description: "Search for items matching the query",
  inputSchema: SearchInput,
  handler: async (input) => {
    // Implementation
  }
});
```

#### 2.2 Tool Best Practices

**Comprehensive Docstrings**
- One-line summary
- Detailed explanation
- Parameter types with examples
- Return type schema
- Usage examples
- Error handling documentation

**Tool Annotations**
```python
@mcp.tool(
    readOnlyHint=True,       # For read-only operations
    destructiveHint=False,    # For non-destructive operations
    idempotentHint=True,      # If repeated calls have same effect
    openWorldHint=True        # If interacting with external systems
)
```

**Response Formats**
- Support JSON and Markdown output
- Configurable detail levels
- Respect character limits (25,000 tokens max)

### Phase 3: Review and Testing

#### 3.1 Code Quality Review

- **DRY Principle**: No duplicated code
- **Composability**: Shared logic extracted
- **Consistency**: Similar operations return similar formats
- **Error Handling**: All external calls handled
- **Type Safety**: Full type coverage
- **Documentation**: Comprehensive docstrings

#### 3.2 Testing Approach

MCP servers are long-running processes. Safe testing methods:
- Use evaluation harness
- Run server in tmux
- Use timeout: `timeout 5s python server.py`

### Phase 4: Evaluation

Create 10 evaluation questions that are:
- **Independent**: Not dependent on other questions
- **Read-only**: Only non-destructive operations
- **Complex**: Requiring multiple tool calls
- **Realistic**: Based on real use cases
- **Verifiable**: Single, clear answer
- **Stable**: Answer won't change over time

**Evaluation Format**
```xml
<evaluation>
  <qa_pair>
    <question>Complex question requiring multiple tool calls</question>
    <answer>Specific, verifiable answer</answer>
  </qa_pair>
</evaluation>
```

## Quality Checklist

### Python
- [ ] Using MCP Python SDK properly
- [ ] Pydantic v2 models with `model_config`
- [ ] Type hints throughout
- [ ] Async/await for all I/O
- [ ] Module-level constants
- [ ] Comprehensive docstrings

### TypeScript
- [ ] Using `server.registerTool` properly
- [ ] Zod schemas with `.strict()`
- [ ] TypeScript strict mode
- [ ] No `any` types
- [ ] Explicit Promise<T> returns
- [ ] Build process configured

## Resources

- MCP Protocol: `https://modelcontextprotocol.io/llms-full.txt`
- Python SDK: `https://github.com/modelcontextprotocol/python-sdk`
- TypeScript SDK: `https://github.com/modelcontextprotocol/typescript-sdk`
