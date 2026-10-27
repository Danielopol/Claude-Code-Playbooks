# Developer research

**When to use:** Investigate library/API implementation, bugs, and version discrepancies using public repository code, issues, and pull requests. Use when official documentation alone is insufficient.

Source: https://github.com/firecrawl/firecrawl-claude-plugin/blob/main/skills/firecrawl-developer-index/SKILL.md (MIT, Firecrawl).

## Prerequisite: the Firecrawl MCP

This workflow runs on Firecrawl's hosted MCP server (tools such as `firecrawl_search` and `firecrawl_scrape`). If those tools are not available, tell the user to connect Firecrawl (in Claude Code, run `/mcp` and connect the account) instead of guessing at tools or arguments. Requests send search queries, page URLs, and any provider inputs to Firecrawl, so include only what the task needs.

Other Firecrawl workflows named below (`read-docs`) are separate playbooks. If one is not loaded here, continue with the instructions in this file.

Use this workflow when the question requires repository code, issue discussions
or pull requests, rather than an answer from official documentation alone. Use
`read-docs` for documented setup, usage, migrations and compatibility. A supplied
issue or repository can be investigated directly; a documentation search is not
a prerequisite.

Use `firecrawl_developer_search` through the Firecrawl MCP connection. If it is
deferred, discover it with the host's tool search. Include the library, version,
and exact error or symbol when known. Read the matched passages and source URLs.
Developer searches are billed per request.

Distinguish official documentation from issues, proposals, and merged pull
requests. A merged fix does not establish that it shipped in the user's version.
Use `firecrawl_scrape` on a source URL when the passage lacks the needed context.
Use `firecrawl_search` when the relevant source is outside the index or the index
does not resolve the question.

Answer from the retrieved evidence, cite the relevant sources, and state any
unverified version or release boundary. Respect the user's source and tool
choices. Report connection or authentication errors.
