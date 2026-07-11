import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Building MCP Servers: Extend Claude with Custom Tools | Claude Code Playbooks Blog',
  description: "Four Claude Skills for going from idea to working MCP integration — production-ready server generation, a hub of 1,200+ pre-built servers, Composio SDK for 250+ APIs, and real actions in Gmail, Slack, and GitHub.",
  alternates: { canonical: '/blog/claude-skills-mcp' },
  openGraph: {
    title: 'Claude Skills for Building MCP Servers: Extend Claude with Custom Tools',
    description: "Four Claude Skills for going from idea to working MCP integration — production-ready server generation, a hub of 1,200+ pre-built servers, Composio SDK for 250+ APIs, and real actions in Gmail, Slack, and GitHub.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-mcp',
    type: 'article',
    publishedTime: '2026-07-07T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Building MCP Servers: Extend Claude with Custom Tools',
    description: "Four Claude Skills for going from idea to working MCP integration — production-ready server generation, a hub of 1,200+ pre-built servers, Composio SDK for 250+ APIs, and real actions in Gmail, Slack, and GitHub.",
    images: ['https://www.claudecodehq.com/og-image.png'],
  },
};

function PlaybookLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[#22d3ee] hover:underline font-medium">
      {children}
    </Link>
  );
}

export default function ClaudeSkillsMcpPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Building MCP Servers: Extend Claude with Custom Tools"
      description="Four Claude Skills for going from idea to working MCP integration — production-ready server generation, a hub of 1,200+ pre-built servers, Composio SDK for 250+ APIs, and real actions in Gmail, Slack, and GitHub."
      category="guide"
      difficulty="intermediate"
      readingTime="13 min read"
      createdAt="2026-07-07"
      tags={['claude skills mcp', 'build mcp server', 'claude skills custom tools', 'model context protocol', 'mcp server tutorial', 'composio sdk claude', 'claude api integrations', 'mcp hub servers']}
      author="Claude Code Playbooks"
      slug="claude-skills-mcp"
    >
      <p>
        Model Context Protocol is the layer that turns Claude from a very good text generator into an agent that can actually touch your systems — your internal API, your database, your Slack workspace, your GitHub org. The concept is simple: MCP servers expose tools, Claude calls them. The reality of building one from scratch is less simple: transport handling, tool schema definitions, authentication flows, and error responses that need to be exactly right before Claude can use the server reliably.
      </p>
      <p>
        The good news is that most people don't need to build from scratch. A large ecosystem of pre-built servers already covers the common cases, and SDKs exist specifically to skip the auth-flow tedium for popular APIs. These four Claude Skills cover the full range — from generating a custom server for your internal tooling to connecting Claude to hundreds of external apps without writing an integration layer at all.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Build a Production-Ready MCP Server from Scratch
      </h2>
      <p>
        If you have an internal API, a proprietary database, or any system that isn't already covered by an existing MCP server, you'll need to build one. The MCP documentation covers the protocol, but the gap between "I understand the spec" and "I have a server that handles auth, errors, and both stdio and SSE transports correctly" is where most first attempts get stuck — cryptic JSON-RPC errors, malformed tool schemas, and transport bugs that only show up once Claude actually tries to call the tool.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/mcp-server-builder">MCP Server Builder</PlaybookLink>{' '}
        Skill generates a complete, production-ready MCP server following established best practices for either Python (FastMCP) or Node/TypeScript. You describe the API or service you want to expose, and it produces correct tool definitions, authentication handling, structured error responses, rate limiting, and deployment configuration for both stdio and SSE transports.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Build an MCP server for our inventory management API — expose search, create, and update-stock as tools, with API key authentication and proper error responses"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Sparse docs, a first attempt that returns cryptic JSON-RPC errors, and more time spent debugging the transport layer than building the actual integration logic</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Production-ready TypeScript or Python server with correct tool definitions, authentication handling, structured error responses, rate limiting, and deployment config for stdio and SSE transports</p>
        </div>
      </div>

      <p>
        This is the right choice for internal tooling, proprietary APIs, or any product capability you want to expose to Claude and other MCP clients as a first-class integration rather than a workaround.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 30 minutes. Describe your API's endpoints and auth model — it generates the full server implementation.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Find the Right Server Among 1,200+ Already Built
      </h2>
      <p>
        Before building anything custom, it's worth checking whether someone has already built it. The MCP ecosystem has over 1,200 pre-built servers covering databases, filesystems, popular SaaS products, and developer tools — but knowing which ones exist, which are well-maintained, and how to configure them correctly is its own research problem.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/mcp-hub">MCP Server Hub Manager</PlaybookLink>{' '}
        Skill searches across that catalog for servers matching your use case, returning a curated shortlist with installation commands, configuration examples, and compatibility notes — instead of you manually searching GitHub and reading through inconsistent README quality across a dozen repos.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Find and set up MCP servers for our development workflow — we need GitHub, PostgreSQL, Slack, and Jira integration"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">You know MCP servers exist for most common tools, but finding the right one among 1,200+ options and figuring out which are actively maintained takes longer than it should</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Curated list of relevant servers for GitHub, PostgreSQL, Slack, and Jira with installation commands, configuration examples, and compatibility notes — ready to add to your config</p>
        </div>
      </div>

      <p>
        This should be your default first step before reaching for the Server Builder Skill — building custom only makes sense once you've confirmed nothing suitable already exists.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Describe the tools or services you want to connect and get a shortlist with setup instructions.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Connect 250+ APIs Without Writing Auth Flows
      </h2>
      <p>
        Even with pre-built MCP servers available, connecting Claude to a wide range of external APIs — Gmail, Slack, GitHub, Notion, and dozens more — traditionally means implementing OAuth flows, managing token refresh, and handling each API's specific error and rate-limiting behavior individually. That's weeks of integration work before your agent can do anything useful.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/composio-sdk">Composio SDK</PlaybookLink>{' '}
        Skill wires Claude Code to Composio's platform, which handles authentication and execution for 250+ APIs out of the box. You choose between Tool Router for agent development (where Claude dynamically selects tools during a conversation) or Direct Execution for more traditional application flows — either way, the auth handling, error normalization, and rate limiting are already solved.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Build an AI agent that monitors GitHub PRs and posts review summaries to Slack, using Composio to handle the GitHub and Slack auth"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Claude gives great advice about what to post to Slack — but connecting it to actually post requires building an OAuth flow, handling token refresh, and managing the Slack API's specific rate limits yourself</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Working agent connecting Claude to GitHub and Slack APIs through Composio SDK, with auth already handled — the agent reads PRs and posts real summaries, not draft text you have to copy manually</p>
        </div>
      </div>

      <p>
        Best suited for developers building agent products or internal automations that need broad API coverage without dedicating engineering time to each individual integration's auth quirks.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 15 minutes. Requires a Composio account; the SDK handles the connection layer to Claude Code.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Let Claude Take Real Actions, Not Just Draft Them
      </h2>
      <p>
        There's a specific frustration in getting great advice from Claude and then manually executing it — opening Gmail to send the email it drafted, switching to GitHub to create the issue it described, tabbing to Slack to post the update it wrote. The intelligence is there; the execution still requires you.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/connect-apps">Connect Apps</PlaybookLink>{' '}
        Skill closes that gap for non-technical and technical users alike — it enables Claude to perform real actions across 1,000+ external applications directly. Send an actual email through Gmail. Create a real GitHub issue with labels attached. Post an actual message to Slack. Update an actual Notion page. The output is the completed action, not a draft waiting for you to copy and paste.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Send a follow-up email to the client thanking them for the call, and create a GitHub issue for the bug they reported with the 'customer-reported' label"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Claude drafts a great follow-up email and describes the GitHub issue you should file — you still open Gmail, copy the draft, open GitHub, and create the issue by hand</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Email actually sent via Gmail with professional formatting, GitHub issue actually created with the right label and description — real actions completed, not text waiting to be copy-pasted</p>
        </div>
      </div>

      <p>
        This is the most approachable of the four Skills for non-developers — it's the closest thing to "Claude just does it" without touching any SDK, config file, or authentication setup beyond the initial connection.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 5 minutes. Connect the apps you use once; every session afterward can take real action in them.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Which Skill Matches Your Situation
      </h2>
      <p>
        The right entry point depends on what you're trying to connect and how technical you want the solution to be:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Just want Claude to act in Gmail, Slack, GitHub, Notion</span> — start with Connect Apps, no code required</li>
        <li><span className="text-foreground font-medium">Building an agent product with broad API coverage</span> — use the Composio SDK for auth-handled access to 250+ APIs</li>
        <li><span className="text-foreground font-medium">Need a specific tool and don't know if it exists</span> — check the MCP Hub before building anything custom</li>
        <li><span className="text-foreground font-medium">Have an internal API or proprietary system to expose</span> — use the MCP Server Builder to generate a custom server</li>
      </ul>
      <p>
        These four Skills form a natural progression from "connect what already exists" to "build what doesn't." Most people never need to reach the last step — but when you do, the Server Builder Skill removes the protocol-level friction that makes a first custom MCP server harder than it should be.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/mcp-server-builder">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">MCP Server Builder</p>
            <p className="text-sm text-muted-foreground">Generate production-ready MCP servers in Python or TypeScript for your internal APIs</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/mcp-hub">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">MCP Server Hub Manager</p>
            <p className="text-sm text-muted-foreground">Search 1,200+ pre-built MCP servers and get installation-ready setup instructions</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/composio-sdk">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Composio SDK with Claude Code</p>
            <p className="text-sm text-muted-foreground">Connect Claude to 250+ APIs with authentication and execution already handled</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/connect-apps">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Connect Apps</p>
            <p className="text-sm text-muted-foreground">Let Claude take real actions in 1,000+ apps — emails, issues, messages — with no code required</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
