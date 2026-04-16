import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'The Complete Guide to MCP Servers: What They Are and How to Build One | Claude Code Playbooks Blog',
  description: 'Everything you need to know about the Model Context Protocol — what MCP servers are, why they matter, and a step-by-step walkthrough for building your own.',
  alternates: { canonical: '/blog/complete-guide-to-mcp-servers' },
  openGraph: {
    title: 'The Complete Guide to MCP Servers: What They Are and How to Build One',
    description: 'Everything you need to know about the Model Context Protocol — what MCP servers are, why they matter, and a step-by-step walkthrough for building your own.',
    url: 'https://www.claudecodehq.com/blog/complete-guide-to-mcp-servers',
    type: 'article',
    publishedTime: '2026-04-16',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Complete Guide to MCP Servers: What They Are and How to Build One',
    description: 'What MCP servers are, why they matter, and a step-by-step walkthrough for building your own.',
    images: ['https://www.claudecodehq.com/og-image.jpg'],
  },
};

function PlaybookLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[#22d3ee] hover:underline font-medium">
      {children}
    </Link>
  );
}

export default function MCPServersGuidePage() {
  return (
    <BlogPostLayout
      title="The Complete Guide to MCP Servers: What They Are and How to Build One"
      description="Everything you need to know about the Model Context Protocol — what MCP servers are, why they matter, and a step-by-step walkthrough for building your own."
      category="mcp"
      difficulty="intermediate"
      readingTime="13 min read"
      createdAt="2026-04-16"
      tags={['MCP server', 'model context protocol', 'MCP tutorial', 'Claude Code', 'agents', 'tools', 'integration']}
      author="Claude Code Playbooks"
      slug="complete-guide-to-mcp-servers"
    >
      <p className="text-lg">
        If you&apos;ve spent any time with AI agents in the last year, you&apos;ve run into a
        frustrating pattern: every new tool integration means re-implementing the same plumbing.
        Auth for Gmail here, auth for Slack there, a custom Postgres adapter for one project, a
        different Postgres adapter for the next. It&apos;s the kind of drudgery that eats your
        afternoon and produces nothing durable.
      </p>
      <p>
        The <strong className="text-foreground">Model Context Protocol</strong> — MCP for short —
        is the fix. It&apos;s an open standard for exposing tools, data, and prompts to AI agents,
        the same way HTTP is an open standard for exposing content to browsers. Write the integration
        once, and any MCP-compatible agent can use it. This guide walks through exactly what MCP is,
        why it matters, and how to build your first MCP server end to end.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        What Is MCP, Really?
      </h2>
      <p>
        MCP is a protocol. That&apos;s it. It&apos;s not a framework you have to adopt, a cloud service
        you have to pay for, or a library you have to import. It&apos;s a specification for how an AI
        agent (the <em>client</em>) talks to an external capability provider (the <em>server</em>)
        over JSON-RPC.
      </p>
      <p>
        The easiest mental model: <strong className="text-foreground">MCP is to AI agents what USB-C
        is to hardware</strong>. Before USB-C, every device had its own cable. Now one shape fits
        everything. MCP plays the same role for AI tooling — one protocol, any agent, any integration.
      </p>
      <p>An MCP server can expose three kinds of things to an agent:</p>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Tools</p>
          <p className="text-sm">
            Functions the agent can call — &quot;send_email&quot;, &quot;query_database&quot;,
            &quot;create_jira_ticket&quot;. Each tool has a name, a JSON Schema describing its
            inputs, and a return type.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Resources</p>
          <p className="text-sm">
            Read-only data the agent can pull into its context — a file, a database table, a page
            from Notion. Resources are addressed by URI so the agent can reference them by name.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Prompts</p>
          <p className="text-sm">
            Reusable prompt templates the server offers to the client — useful for standardizing
            common workflows (&quot;summarize this ticket&quot;, &quot;draft a release note&quot;)
            across agents and teams.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Why MCP Matters (More Than It Looks Like at First)
      </h2>
      <p>
        On the surface, MCP sounds like &quot;another API standard.&quot; The reason it&apos;s a big
        deal is more subtle: it breaks the tight coupling between a model and its tools. Three
        downstream effects follow from that.
      </p>
      <p>
        <strong className="text-foreground">1. Your integrations become portable.</strong> Build
        an MCP server for your internal ticketing system once, and it works with Claude, any
        Claude Code project, and any other MCP-compatible client — now and in the future. When
        a better model comes out, you don&apos;t rebuild your tooling.
      </p>
      <p>
        <strong className="text-foreground">2. You can compose capabilities.</strong> An agent
        can connect to multiple MCP servers at once — your GitHub server, your Postgres server,
        your Slack server — and reason across all of them. You stop thinking in integrations and
        start thinking in capabilities.
      </p>
      <p>
        <strong className="text-foreground">3. The ecosystem compounds.</strong> Because MCP is
        open, the number of off-the-shelf servers grows every week. Filesystems, browsers, Git,
        databases, search engines — most of what an agent needs already exists as an MCP server
        someone else maintains. You don&apos;t have to build everything.
      </p>
      <p>
        That third point is where <PlaybookLink href="/playbooks/mcp-hub">MCP Hub</PlaybookLink> comes
        in. It&apos;s a curated collection of the most useful MCP servers you can wire into Claude
        Code in one sitting — so before you build anything, it&apos;s worth checking whether the
        integration you need already exists.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        How an MCP Conversation Actually Works
      </h2>
      <p>
        Under the hood, MCP is a JSON-RPC conversation between a client and a server over either
        stdio (for local servers) or HTTP with Server-Sent Events (for remote ones). The handshake
        has three phases:
      </p>
      <ol className="list-decimal list-inside space-y-2 my-4">
        <li>
          <strong className="text-foreground">Initialize.</strong> The client says hello, declares
          which protocol version it speaks, and asks what capabilities the server supports.
        </li>
        <li>
          <strong className="text-foreground">Discovery.</strong> The client calls
          <code className="bg-[#161b22] px-1.5 py-0.5 mx-1 rounded text-[#22d3ee]">tools/list</code>,
          <code className="bg-[#161b22] px-1.5 py-0.5 mx-1 rounded text-[#22d3ee]">resources/list</code>,
          and
          <code className="bg-[#161b22] px-1.5 py-0.5 mx-1 rounded text-[#22d3ee]">prompts/list</code>
          to find out what the server offers. Each returned entry includes a JSON Schema so the
          model knows how to call it.
        </li>
        <li>
          <strong className="text-foreground">Invocation.</strong> When the agent decides to use a
          tool, the client sends
          <code className="bg-[#161b22] px-1.5 py-0.5 mx-1 rounded text-[#22d3ee]">tools/call</code>
          with the tool name and arguments. The server executes and returns the result.
        </li>
      </ol>
      <p>
        Here&apos;s what a tool invocation looks like on the wire, stripped down:
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <pre className="text-sm font-mono text-[#e6edf3] overflow-x-auto">
{`// client → server
{
  "jsonrpc": "2.0",
  "id": 7,
  "method": "tools/call",
  "params": {
    "name": "create_issue",
    "arguments": {
      "repo": "acme/backend",
      "title": "Payments webhook retry logic is flaky",
      "body": "Fails on third retry..."
    }
  }
}

// server → client
{
  "jsonrpc": "2.0",
  "id": 7,
  "result": {
    "content": [
      { "type": "text", "text": "Created issue #4821" }
    ]
  }
}`}
        </pre>
      </div>
      <p>
        That&apos;s the whole protocol in miniature. The SDKs hide the JSON-RPC boilerplate, so in
        practice you&apos;re writing Python or TypeScript functions and decorating them as tools.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Building Your First MCP Server (Step by Step)
      </h2>
      <p>
        Let&apos;s build a minimal MCP server from scratch. The example: a server that exposes one
        tool, <code className="bg-[#161b22] px-1.5 py-0.5 rounded text-[#22d3ee]">get_weather</code>,
        which takes a city name and returns a temperature. The same shape generalizes to any
        integration you&apos;ll ever build.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Step 1: Install the SDK</h3>
      <p>
        The official SDKs are published for Python and TypeScript. Pick whichever your team is more
        comfortable with — the protocol is identical.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <pre className="text-sm font-mono text-[#e6edf3] overflow-x-auto">
{`# Python
pip install mcp

# TypeScript
npm install @modelcontextprotocol/sdk`}
        </pre>
      </div>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Step 2: Write the Server</h3>
      <p>
        Here&apos;s a complete Python MCP server in twenty lines. It spins up over stdio, registers
        one tool, and returns a result:
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <pre className="text-sm font-mono text-[#e6edf3] overflow-x-auto">
{`from mcp.server.fastmcp import FastMCP

mcp = FastMCP("weather-server")

@mcp.tool()
def get_weather(city: str) -> str:
    """Return the current temperature for a given city."""
    # Replace with a real API call
    return f"It is 18°C in {city} right now."

if __name__ == "__main__":
    mcp.run()`}
        </pre>
      </div>
      <p>
        Three things are happening: <code className="bg-[#161b22] px-1.5 py-0.5 rounded text-[#22d3ee]">FastMCP</code> creates
        a server, the <code className="bg-[#161b22] px-1.5 py-0.5 rounded text-[#22d3ee]">@mcp.tool()</code> decorator
        registers the function (using the type hints and docstring to auto-generate the JSON Schema),
        and <code className="bg-[#161b22] px-1.5 py-0.5 rounded text-[#22d3ee]">mcp.run()</code> starts
        the JSON-RPC loop. That&apos;s a complete, valid MCP server.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Step 3: Register It with Claude Code</h3>
      <p>
        Add the server to your Claude Code config. The client will launch it as a subprocess and
        speak MCP over stdio.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <pre className="text-sm font-mono text-[#e6edf3] overflow-x-auto">
{`{
  "mcpServers": {
    "weather": {
      "command": "python",
      "args": ["/absolute/path/to/server.py"]
    }
  }
}`}
        </pre>
      </div>
      <p>
        Restart Claude Code. The <code className="bg-[#161b22] px-1.5 py-0.5 rounded text-[#22d3ee]">get_weather</code> tool
        is now available to any agent in that project, with the schema auto-derived from your type
        hints. Ask &quot;what&apos;s the weather in Lisbon?&quot; and watch the agent call your tool.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Step 4: Add Resources and Prompts</h3>
      <p>
        Tools are usually where the interesting behavior lives, but resources and prompts round out
        a useful server. Adding them follows the same pattern:
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <pre className="text-sm font-mono text-[#e6edf3] overflow-x-auto">
{`@mcp.resource("weather://history/{city}")
def weather_history(city: str) -> str:
    """Return a 7-day weather history for a city."""
    return load_history(city)

@mcp.prompt()
def weather_report(city: str) -> str:
    """Generate a weather report for a given city."""
    return f"Write a short weather report for {city} using the current data and the last 7 days."`}
        </pre>
      </div>
      <p>
        Resources give the agent read-only data it can pull into context. Prompts give users a
        ready-made starting point they can invoke from the client UI. Neither is required — start
        with tools, add the others when they earn their keep.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Design Principles for Good MCP Servers
      </h2>
      <p>
        You can get a server running in twenty lines; you can&apos;t get a <em>good</em> server in
        twenty lines. The servers that actually hold up in production tend to share a few traits.
      </p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li>
          <strong className="text-foreground">Name tools like verbs the agent would say.</strong>
          <code className="bg-[#161b22] px-1.5 py-0.5 mx-1 rounded text-[#22d3ee]">search_issues</code>,
          not <code className="bg-[#161b22] px-1.5 py-0.5 mx-1 rounded text-[#22d3ee]">issuesSearchV2</code>.
          The model chooses tools based on their names and descriptions — write them for the model,
          not for your internal API taxonomy.
        </li>
        <li>
          <strong className="text-foreground">Keep tool surface area small.</strong> A server with
          eight focused tools outperforms one with forty overlapping ones. The agent has to pick
          the right tool on every turn; fewer choices means fewer mistakes.
        </li>
        <li>
          <strong className="text-foreground">Return structured, summarizable results.</strong>
          Don&apos;t return a 50KB JSON blob when a five-line summary plus an ID to fetch more
          detail would do. Context is the agent&apos;s most expensive resource.
        </li>
        <li>
          <strong className="text-foreground">Fail loudly and usefully.</strong> Error messages are
          prompts — the agent reads them and decides what to do next. &quot;Invalid date: expected
          YYYY-MM-DD, got &apos;last Friday&apos;&quot; is a good error. &quot;400&quot; is not.
        </li>
        <li>
          <strong className="text-foreground">Gate destructive actions.</strong> Require an explicit
          <code className="bg-[#161b22] px-1.5 py-0.5 mx-1 rounded text-[#22d3ee]">confirm=true</code> parameter
          for anything that sends, spends, or deletes. Agents confidently miswield new tools; guard
          rails catch most of those mistakes.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Local vs. Remote Servers
      </h2>
      <p>
        MCP servers come in two flavors. Local servers run as subprocesses on your machine and talk
        over stdio — they&apos;re the default and by far the easiest to get right. Remote servers
        run over HTTP + Server-Sent Events, letting you host shared tooling for a team or expose a
        public capability.
      </p>
      <p>
        Default to local. You&apos;ll only want a remote server if: multiple people need to use the
        same tooling without setting it up each themselves, the server needs access to secrets or
        data that shouldn&apos;t live on laptops, or you&apos;re exposing the capability to third
        parties. Each of those cases adds deployment, auth, and observability concerns that a local
        subprocess simply doesn&apos;t have.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Shortcut: Scaffold a Server in Minutes
      </h2>
      <p>
        Building an MCP server from scratch is valuable as a learning exercise — once. For every
        real project after that, starting from a scaffold is faster and less error-prone.
        The <PlaybookLink href="/playbooks/mcp-server-builder">MCP Server Builder</PlaybookLink> playbook
        takes a plain-English description of the tools you want (&quot;let me search and create
        Linear issues&quot;) and generates a working server — protocol handlers, JSON schemas, auth,
        error handling, and the config snippet to wire it into Claude Code.
      </p>
      <p>
        If you&apos;re not sure you need to build anything at all, start with
        the <PlaybookLink href="/playbooks/mcp-hub">MCP Hub</PlaybookLink> playbook first. It&apos;s
        a curated catalog of the servers most teams end up wanting — filesystem, Git, Postgres,
        browser automation, Slack, and more — with one-line install instructions. Most of the time,
        the integration you need is already a <code className="bg-[#161b22] px-1.5 py-0.5 rounded text-[#22d3ee]">npm install</code> away.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/mcp-hub"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">MCP Hub</p>
          <p className="text-sm text-muted-foreground">Curated catalog of production-ready MCP servers to drop into any project.</p>
        </Link>
        <Link
          href="/playbooks/mcp-server-builder"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">MCP Server Builder</p>
          <p className="text-sm text-muted-foreground">Generate a working MCP server from a plain-English description.</p>
        </Link>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Where This Is All Going
      </h2>
      <p>
        A year from now, &quot;does it have an MCP server?&quot; will be the first question teams
        ask when evaluating a new tool, the same way &quot;does it have an API?&quot; is asked today.
        The tools that don&apos;t expose themselves via MCP will still work — but they&apos;ll be
        invisible to the agents that increasingly do the work.
      </p>
      <p>
        The good news is how little effort it takes to be on the right side of that shift. A useful
        MCP server can be under a hundred lines of code. The protocol is stable, the SDKs are solid,
        and the ecosystem is growing fast enough that most of what you need already exists. Pick one
        integration you&apos;re tired of rebuilding, wrap it in MCP, and never think about it again.
      </p>
    </BlogPostLayout>
  );
}
