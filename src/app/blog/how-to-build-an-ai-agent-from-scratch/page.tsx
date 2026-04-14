import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'How to Build an AI Agent from Scratch: A Step-by-Step Guide | Claude Code Playbooks Blog',
  description: 'A practical, end-to-end walkthrough for building your first AI agent — from defining its goal and picking the right model to giving it tools, memory, and the ability to run in parallel.',
  alternates: { canonical: '/blog/how-to-build-an-ai-agent-from-scratch' },
  openGraph: {
    title: 'How to Build an AI Agent from Scratch: A Step-by-Step Guide',
    description: 'A practical, end-to-end walkthrough for building your first AI agent — from defining its goal and picking the right model to giving it tools, memory, and the ability to run in parallel.',
    url: 'https://www.claudecodehq.com/blog/how-to-build-an-ai-agent-from-scratch',
    type: 'article',
    publishedTime: '2026-04-14',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Build an AI Agent from Scratch: A Step-by-Step Guide',
    description: 'A practical, end-to-end walkthrough for building your first AI agent — from goal definition to tools, memory, and parallel execution.',
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

export default function BuildAIAgentPage() {
  return (
    <BlogPostLayout
      title="How to Build an AI Agent from Scratch: A Step-by-Step Guide"
      description="A practical, end-to-end walkthrough for building your first AI agent — from defining its goal and picking the right model to giving it tools, memory, and the ability to run in parallel."
      category="tutorial"
      difficulty="intermediate"
      readingTime="14 min read"
      createdAt="2026-04-14"
      tags={['build AI agent', 'AI agent tutorial', 'create AI agent', 'Claude Code', 'MCP', 'agents', 'tutorial']}
      author="Claude Code Playbooks"
      slug="how-to-build-an-ai-agent-from-scratch"
    >
      <p className="text-lg">
        &quot;AI agent&quot; has become one of the most overloaded words in tech. Depending on who you ask,
        it&apos;s either a ChatGPT wrapper, a multi-step workflow, or a fully autonomous system that
        replaces an employee. Cutting through the hype, a useful working definition is this:
        an <strong className="text-foreground">AI agent is an LLM in a loop that can use tools, read
        from and write to memory, and make decisions about what to do next</strong>.
      </p>
      <p>
        That definition is small enough to actually build in an afternoon — and powerful enough to
        automate real work. This guide walks through how to go from a blank folder to a working
        agent, the decisions you&apos;ll face along the way, and how to skip the boilerplate with
        copy-paste playbooks when you just want to ship something.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Step 1: Define the Agent&apos;s Job (Narrowly)
      </h2>
      <p>
        The single biggest predictor of whether your agent will work is how clearly you can describe
        its job. Vague goals produce vague agents. The rule of thumb:
        <strong className="text-foreground"> if you can&apos;t describe the success criteria in one
        sentence, the scope is too broad</strong>.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-2">Too broad:</p>
        <p className="text-sm font-mono">&quot;An agent that helps me manage my business.&quot;</p>
        <p className="text-sm font-mono text-[#22c55e] mt-3 mb-2">Good:</p>
        <p className="text-sm font-mono">
          &quot;An agent that reads incoming invoice emails, extracts vendor + amount + due date,
          and appends a row to a Google Sheet.&quot;
        </p>
      </div>
      <p>
        Before writing any code, write down three things: the <strong className="text-foreground">input</strong> the
        agent receives, the <strong className="text-foreground">output</strong> it produces, and the
        <strong className="text-foreground"> boundary</strong> — what it is explicitly not allowed to do
        (send email, spend money, delete files). That boundary is what keeps an autonomous loop safe.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Step 2: Pick the Model and the Loop
      </h2>
      <p>
        Every agent has two core pieces: a <strong className="text-foreground">model</strong> that
        makes decisions, and a <strong className="text-foreground">loop</strong> that feeds those
        decisions back into the next step. For most projects in 2026, the default model choice is
        Claude Sonnet 4.6 — it&apos;s fast, cheap enough to run in a loop, and strong at tool use.
        Reach for Opus when the task requires deep reasoning over long context.
      </p>
      <p>The loop itself is deceptively simple:</p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <pre className="text-sm font-mono text-[#e6edf3] overflow-x-auto">
{`while not done:
    response = model.run(messages, tools=available_tools)
    if response.has_tool_call:
        result = execute_tool(response.tool_call)
        messages.append(result)
    else:
        done = True
        return response.text`}
        </pre>
      </div>
      <p>
        That&apos;s it. Everything else — memory, planning, multi-agent orchestration — is a variation
        on this pattern. If you&apos;re using Claude Code as your runtime, the loop is already
        implemented for you; you just supply the tools and the instructions.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Step 3: Give the Agent Tools (This Is Where It Gets Real)
      </h2>
      <p>
        An LLM without tools can only produce text. An LLM <em>with</em> tools can read files, call
        APIs, query databases, and trigger side effects in the world. Tools are what turn a chatbot
        into an agent.
      </p>
      <p>There are roughly three ways to give your agent tools, in increasing order of power:</p>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">1. Built-in tools</p>
          <p className="text-sm">
            Filesystem, bash, web fetch. Claude Code ships with these out of the box. If your agent&apos;s
            job involves reading code, running tests, or pulling data from URLs, you already have everything
            you need.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">2. Custom functions</p>
          <p className="text-sm">
            Write a function, describe its inputs and outputs in JSON schema, and hand it to the model.
            Good for private APIs, internal databases, and anything specific to your project.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">3. MCP servers</p>
          <p className="text-sm">
            The <strong className="text-foreground">Model Context Protocol</strong> is the standard
            for exposing tools to AI agents. Instead of re-implementing Gmail, Slack, or Postgres
            integrations for every project, you run (or build) an MCP server once and plug it into
            any agent. This is the path that scales.
          </p>
        </div>
      </div>
      <p>
        If you&apos;re building tools that other people — or other agents — will use,
        the <PlaybookLink href="/playbooks/mcp-server-builder">MCP Server Builder</PlaybookLink> playbook
        generates a working MCP server from a plain-English description. You describe what the tools
        should do; it scaffolds the protocol handlers, schemas, and auth layer so you can focus on the
        actual logic.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Step 4: Write the System Prompt (aka CLAUDE.md)
      </h2>
      <p>
        The system prompt is the agent&apos;s job description. It tells the model who it is, what
        tools it has, what the success criteria are, and — critically — what it should refuse to do.
        A good system prompt has four sections:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li><strong className="text-foreground">Role:</strong> &quot;You are an agent that...&quot;</li>
        <li><strong className="text-foreground">Inputs &amp; outputs:</strong> what you&apos;ll receive and what you should produce</li>
        <li><strong className="text-foreground">How to use your tools:</strong> when to reach for each one, in what order</li>
        <li><strong className="text-foreground">Guardrails:</strong> explicit limits, things to escalate, never-do actions</li>
      </ul>
      <p>
        In Claude Code, this prompt lives in a file called <code className="bg-[#161b22] px-1.5 py-0.5 rounded text-[#22d3ee]">CLAUDE.md</code> at
        the root of your project. The agent reads it on every invocation. If you find yourself
        re-explaining the same thing across runs, that&apos;s a signal the information belongs in
        CLAUDE.md instead.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/ai-agent-builder">AI Agent Builder</PlaybookLink> playbook
        is essentially a meta-agent: you describe the agent you want, and it writes the CLAUDE.md,
        defines the tools, and scaffolds the project structure. It&apos;s the fastest way to go from
        idea to running agent, and it encodes the prompt patterns that actually hold up in production.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Step 5: Add Memory (When the Agent Needs to Remember)
      </h2>
      <p>
        A single-shot agent is stateless: each run starts fresh. That&apos;s fine for &quot;parse this
        invoice&quot; but useless for &quot;keep track of which customers have been contacted.&quot; You
        give agents memory the same way you give yourself memory — by writing things down.
      </p>
      <p>
        Two patterns cover most use cases:
      </p>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Scratchpad memory</p>
          <p className="text-sm">
            A single Markdown file the agent reads at the start of each run and appends to at the end.
            Simple, inspectable, easy to debug. Good for personal agents and small teams.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Structured memory</p>
          <p className="text-sm">
            A database or vector store the agent queries through tools. Necessary when memory grows past
            what fits comfortably in context, or when multiple agents share state.
          </p>
        </div>
      </div>
      <p>
        Start with scratchpad memory. Upgrade only when you hit a concrete limit — most agents never do.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Step 6: Run Agents in Parallel (When One Isn&apos;t Enough)
      </h2>
      <p>
        Once a single agent is working, the natural next step is to run several at once. Parallel
        agents are how you scale from &quot;automate one task&quot; to &quot;process a queue of tasks&quot; or
        &quot;explore several solutions simultaneously and pick the best.&quot;
      </p>
      <p>The common patterns:</p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li>
          <strong className="text-foreground">Fan-out / fan-in:</strong> split a big task into
          independent subtasks, run them in parallel, merge the results. Great for research,
          code review, and batch processing.
        </li>
        <li>
          <strong className="text-foreground">Specialist agents:</strong> a planner delegates to
          specialists (tester, writer, reviewer), each with its own system prompt and tools.
        </li>
        <li>
          <strong className="text-foreground">Critic loops:</strong> one agent proposes, another
          critiques, the first revises. Useful when quality matters more than speed.
        </li>
      </ul>
      <p>
        The <PlaybookLink href="/playbooks/parallel-task-agents">Parallel Task Agents</PlaybookLink> playbook
        gives you a ready-to-use pattern for the fan-out / fan-in case: describe a task, and Claude
        Code splits it across multiple sub-agents running concurrently, then merges the results.
        It&apos;s the fastest path to meaningful parallelism without wiring up your own orchestrator.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Step 7: Test, Observe, Iterate
      </h2>
      <p>
        Agents fail in ways that deterministic programs don&apos;t: they hallucinate tool arguments,
        loop on the same action, or misread the system prompt. The cure is observability.
      </p>
      <p>Three things to put in place before you trust an agent with anything real:</p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li>
          <strong className="text-foreground">Log every tool call.</strong> Inputs, outputs, and the
          model&apos;s stated reasoning. When something goes wrong, this is your black box recorder.
        </li>
        <li>
          <strong className="text-foreground">Run on a fixed eval set.</strong> A folder of sample
          inputs and expected outputs. Every prompt change gets re-run against it — you&apos;d be
          surprised how often a &quot;small tweak&quot; regresses an edge case.
        </li>
        <li>
          <strong className="text-foreground">Put irreversible actions behind confirmations.</strong>
          Sending email, deleting data, spending money — these should either require human approval
          or be locked behind a hard-coded allowlist until the agent has earned trust.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Shortcut: Start from a Playbook
      </h2>
      <p>
        You can absolutely build all of this from first principles — and you should, at least once,
        to understand the moving parts. But for real projects, starting from a battle-tested template
        is faster and less error-prone. Each of the playbooks below gives you a CLAUDE.md, a project
        layout, and the prompt patterns that work, so you can skip the boilerplate and get to the
        interesting parts.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        <Link
          href="/playbooks/ai-agent-builder"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">AI Agent Builder</p>
          <p className="text-sm text-muted-foreground">Scaffold a custom agent from a plain-English description.</p>
        </Link>
        <Link
          href="/playbooks/mcp-server-builder"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">MCP Server Builder</p>
          <p className="text-sm text-muted-foreground">Expose your own tools to any AI agent via MCP.</p>
        </Link>
        <Link
          href="/playbooks/parallel-task-agents"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Parallel Task Agents</p>
          <p className="text-sm text-muted-foreground">Run multiple sub-agents concurrently and merge results.</p>
        </Link>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Where to Go Next
      </h2>
      <p>
        Once your first agent is running, the next ninety percent of the work is iteration: tightening
        the prompt, adding tools as new edge cases appear, trimming the ones the agent never uses.
        Treat the CLAUDE.md like a living document — every bug you hit is a line you should add so
        the agent doesn&apos;t hit it again.
      </p>
      <p>
        The agents that end up valuable aren&apos;t usually the most ambitious ones. They&apos;re the
        ones with a narrow job, clear boundaries, and a prompt that&apos;s been refined through a
        hundred real runs. Start small, ship it, and let the scope grow from there.
      </p>
    </BlogPostLayout>
  );
}
