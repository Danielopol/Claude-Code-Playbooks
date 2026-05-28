import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: "Claude Skills vs. Claude Agents: What's the Difference and When to Use Each | Claude Code Playbooks Blog",
  description: 'A plain-English explanation of Claude Skills vs Claude Agents — what each one is, how they differ, and a clear decision framework for when to use a skill, an agent, or both together.',
  alternates: { canonical: '/blog/claude-skills-vs-claude-agents' },
  openGraph: {
    title: "Claude Skills vs. Claude Agents: What's the Difference and When to Use Each",
    description: 'What are Claude agents, how do they differ from Claude skills, and when should you use each? A clear, jargon-free breakdown with a decision framework.',
    url: 'https://www.claudecodehq.com/blog/claude-skills-vs-claude-agents',
    type: 'article',
    publishedTime: '2026-05-27',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Claude Skills vs. Claude Agents: What's the Difference and When to Use Each",
    description: 'Skills shape how Claude responds; agents do work autonomously. Here is the clear distinction, with a decision framework for when to use each.',
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

function CompareRow({
  dimension,
  skill,
  agent,
}: {
  dimension: string;
  skill: string;
  agent: string;
}) {
  return (
    <tr className="border-b border-[#30363d]">
      <td className="py-3 pr-3 text-sm font-medium text-foreground align-top">{dimension}</td>
      <td className="py-3 pr-3 text-sm text-muted-foreground align-top">{skill}</td>
      <td className="py-3 text-sm text-muted-foreground align-top">{agent}</td>
    </tr>
  );
}

export default function ClaudeSkillsVsClaudeAgentsPage() {
  return (
    <BlogPostLayout
      title="Claude Skills vs. Claude Agents: What's the Difference and When to Use Each"
      description="A plain-English explanation of Claude Skills vs Claude Agents — what each one is, how they differ, and a clear decision framework for when to use a skill, an agent, or both together."
      category="guide"
      difficulty="basic"
      readingTime="12 min read"
      createdAt="2026-05-27"
      tags={[
        'claude skills vs claude agents',
        'claude agents explained',
        'what are claude agents',
        'claude skills difference',
        'Claude Code',
        'AI agents',
        'CLAUDE.md',
      ]}
      author="Claude Code Playbooks"
      slug="claude-skills-vs-claude-agents"
    >
      <p className="text-lg">
        &quot;Skills&quot; and &quot;agents&quot; are two of the most-used words in the Claude
        ecosystem — and two of the most confused. People use them interchangeably, assume one is
        a fancier version of the other, or quietly nod along in conversations without being sure
        which is which. The terminology matters, because choosing the wrong one for a task means
        either over-engineering something simple or under-powering something that needs autonomy.
      </p>
      <p>
        The good news: the distinction is genuinely simple once it&apos;s stated clearly. This
        guide explains what each one is, how they actually differ, and — most usefully — gives
        you a decision framework for knowing which to reach for. By the end, the confusion should
        be gone for good.
      </p>

      <div className="bg-[#161b22] border border-[#22d3ee]/30 rounded-lg p-5 my-6">
        <p className="text-sm font-semibold text-foreground mb-2">The one-sentence answer</p>
        <p className="text-sm">
          A <strong className="text-foreground">Claude Skill</strong> shapes <em>how</em> Claude
          responds to you — it&apos;s a reusable instruction set. A{' '}
          <strong className="text-foreground">Claude Agent</strong> is a system that{' '}
          <em>does work autonomously</em> — it takes a goal, uses tools, and chains multiple
          steps to reach it. A skill is knowledge; an agent is action.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        What is a Claude Skill?
      </h2>
      <p>
        A Claude Skill is a set of instructions that tells Claude how to behave for a specific
        task. Instead of explaining your requirements from scratch every session, you write them
        once into an instruction file — a <strong className="text-foreground">CLAUDE.md</strong> —
        and drop it into your project folder. Claude reads it automatically and immediately knows
        what role to play, what format to produce, and how to handle your particular situation.
      </p>
      <p>
        That&apos;s the whole concept. A skill is a well-crafted briefing document. It doesn&apos;t
        run on its own, it doesn&apos;t have a memory that persists between unrelated tasks, and it
        doesn&apos;t go off and use tools by itself. It is, fundamentally, <em>context</em> —
        pre-written knowledge that makes Claude&apos;s responses immediately useful instead of
        generic.
      </p>
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-6">
        <p className="text-sm font-semibold text-foreground mb-2">Think of a skill as a job description</p>
        <p className="text-sm">
          When you hire a contractor, a good briefing document means they hit the ground running
          instead of spending the first hour asking questions. A skill is that briefing document.
          It defines the role and the standards — but the contractor still only works when you
          give them a task to do.
        </p>
      </div>
      <p>
        Most of the playbooks on this site are skills: a brand guidelines generator, a blog post
        writer, a contract reviewer. Each is a CLAUDE.md that turns general-purpose Claude into a
        specialist for one job. You prompt; the skill shapes the response.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        What is a Claude Agent?
      </h2>
      <p>
        A Claude Agent is a system that pursues a goal autonomously. Where a skill shapes a single
        response, an agent runs a <em>loop</em>: it takes an objective, breaks it into steps,
        uses tools to gather information or take actions, evaluates the results, and decides what
        to do next — repeating until the goal is met. It doesn&apos;t need you to prompt every
        individual step.
      </p>
      <p>
        Three capabilities define an agent and separate it from a plain skill:
      </p>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Tools</p>
          <p className="text-sm text-muted-foreground">
            An agent can take actions in the world — search the web, read and write files, call
            APIs, control a browser, query a database. Tools are how an agent reaches beyond
            generating text into actually doing things.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Memory</p>
          <p className="text-sm text-muted-foreground">
            An agent maintains state across steps — what it has already tried, what it learned,
            what&apos;s left to do. This is what lets it work through a multi-step task coherently
            rather than treating each step as a blank slate.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Multi-step reasoning (the loop)</p>
          <p className="text-sm text-muted-foreground">
            An agent decides its own next action based on results so far. &quot;The price scrape
            failed on site 3 — retry with a different selector&quot; is a decision the agent makes
            without you intervening. That autonomy is the defining feature.
          </p>
        </div>
      </div>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/browser-automation">Browser Automation Assistant</PlaybookLink>{' '}
        is a clear example: you ask it to scrape competitor prices from five sites daily, and it
        navigates each one, handles pagination, extracts the data, and exports a CSV — making
        decisions at each step without a prompt for every click. That&apos;s an agent doing work,
        not a skill shaping a reply.
      </p>
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-6">
        <p className="text-sm font-semibold text-foreground mb-2">Think of an agent as the contractor doing the job</p>
        <p className="text-sm">
          If a skill is the job description, the agent is the worker who reads it, picks up the
          tools, drives to the site, and completes the project — checking their own work and
          adjusting as they go. You set the goal; the agent figures out the steps.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Side by Side: Skills vs. Agents
      </h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-[#30363d]">
              <th className="py-3 pr-3 text-left text-sm font-semibold text-foreground">Dimension</th>
              <th className="py-3 pr-3 text-left text-sm font-semibold text-[#22d3ee]">Claude Skill</th>
              <th className="py-3 text-left text-sm font-semibold text-[#f97316]">Claude Agent</th>
            </tr>
          </thead>
          <tbody>
            <CompareRow
              dimension="Core nature"
              skill="A reusable instruction set (knowledge)"
              agent="An autonomous system that takes action"
            />
            <CompareRow
              dimension="What it does"
              skill="Shapes how Claude responds to a prompt"
              agent="Pursues a goal across multiple steps"
            />
            <CompareRow
              dimension="Who drives the steps"
              skill="You — every action starts with your prompt"
              agent="The agent decides its own next action"
            />
            <CompareRow
              dimension="Tools"
              skill="None inherent — just instructions"
              agent="Uses tools: web, files, APIs, browser"
            />
            <CompareRow
              dimension="Memory"
              skill="Session context only"
              agent="Maintains working state across steps"
            />
            <CompareRow
              dimension="How you create it"
              skill="Write a CLAUDE.md file (no code)"
              agent="Define goal, tools, and logic (often code)"
            />
            <CompareRow
              dimension="Best for"
              skill="Consistent, repeatable response quality"
              agent="Multi-step tasks that run on their own"
            />
            <CompareRow
              dimension="Effort to build"
              skill="Minutes — write text, drop in folder"
              agent="More — wiring tools, testing the loop"
            />
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        When to Use a Skill
      </h2>
      <p>
        Reach for a skill when the work is fundamentally about <em>response quality and
        consistency</em>, and you&apos;re happy to drive each task with a prompt. A skill is the
        right tool when:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-sm text-muted-foreground marker:text-[#22d3ee]">
        <li>You do the same kind of task repeatedly and want consistent output every time (writing on-brand copy, reviewing contracts, formatting reports).</li>
        <li>The task is essentially &quot;take this input, produce that output&quot; in a single pass — even a sophisticated one.</li>
        <li>You want zero setup overhead — a CLAUDE.md takes minutes to write and requires no code.</li>
        <li>You&apos;re fine being in the loop, prompting each step and reviewing as you go.</li>
      </ul>
      <p>
        If your frustration is &quot;I keep re-explaining what I want and the quality varies,&quot;
        the answer is a skill. It removes the re-explaining and locks in the quality.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        When to Use an Agent
      </h2>
      <p>
        Reach for an agent when the work involves <em>multiple steps, tool use, or autonomy</em> —
        when you want to hand off a goal rather than supervise each action. An agent is the right
        tool when:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-sm text-muted-foreground marker:text-[#f97316]">
        <li>The task requires acting in the world — scraping sites, calling APIs, sending data somewhere, filling forms.</li>
        <li>It&apos;s genuinely multi-step and the steps depend on intermediate results (look something up, decide based on what you find, act accordingly).</li>
        <li>You want it to run on a schedule or in the background without you prompting each cycle.</li>
        <li>The decision-making between steps is something you&apos;d rather not do manually every time.</li>
      </ul>
      <p>
        If your frustration is &quot;this is tedious multi-step work I have to babysit,&quot; the
        answer is an agent. The{' '}
        <PlaybookLink href="/playbooks/ai-agent-builder">AI Agent Builder</PlaybookLink> skill is
        the starting point — it walks you through designing an agent with the tools, memory, and
        reasoning chains it needs, for Claude as well as other models.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Part Everyone Misses: They Work Together
      </h2>
      <p>
        The &quot;versus&quot; framing is useful for understanding the difference, but in practice
        skills and agents aren&apos;t competitors — they compose. A skill defines <em>how</em> an
        agent should behave; the agent provides the <em>autonomy and tools</em> to act on that
        definition. The best systems use both layers.
      </p>
      <p>
        Concretely: imagine an agent that monitors competitor pricing every morning. The{' '}
        <em>agent</em> handles the autonomy — running on schedule, controlling the browser,
        looping over each site, retrying on failure. A <em>skill</em> (a CLAUDE.md) tells it
        exactly how to format the output, which sites to prioritize, what counts as a meaningful
        price change worth flagging, and your brand voice for the summary email. Remove the skill
        and the agent still runs — but the output is generic. Remove the agent and the skill
        can&apos;t act on its own. Together, they&apos;re a self-running specialist.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">The mental model</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          Skill = the playbook (how to do the job well) ·
          Agent = the player (who runs the plays autonomously, with tools)
        </p>
      </div>
      <p>
        This is also why &quot;is it a skill or an agent?&quot; is sometimes the wrong question.
        Many real workflows are an agent <em>configured by</em> a skill. The{' '}
        <PlaybookLink href="/playbooks/parallel-task-agents">Parallel Task Agents</PlaybookLink>{' '}
        playbook is a good example of the agent layer at scale — spawning multiple agents to work
        on independent subtasks simultaneously (reviewing five papers at once, analyzing several
        files in parallel) and then synthesizing the results. The orchestration is agentic; the
        per-task quality still comes from good instructions.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        A Quick Decision Framework
      </h2>
      <div className="space-y-3 my-6">
        {[
          {
            q: 'Does the task require acting in the world (web, files, APIs, browser)?',
            yes: 'Lean agent',
            no: 'A skill may be enough',
          },
          {
            q: 'Are there multiple steps where each depends on the last result?',
            yes: 'Lean agent',
            no: 'A skill handles single-pass work',
          },
          {
            q: 'Do you want it to run on its own / on a schedule?',
            yes: 'You need an agent',
            no: 'A skill works when you drive each task',
          },
          {
            q: 'Is the real problem just inconsistent output quality?',
            yes: 'A skill solves this',
            no: 'Consider whether you need autonomy',
          },
        ].map(({ q, yes, no }, i) => (
          <div key={i} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <p className="text-sm font-medium text-foreground mb-2">{q}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
              <span className="text-[#f97316]"><span className="font-semibold">Yes →</span> {yes}</span>
              <span className="text-[#22d3ee]"><span className="font-semibold">No →</span> {no}</span>
            </div>
          </div>
        ))}
      </div>
      <p>
        A practical rule of thumb: <strong className="text-foreground">start with a skill</strong>.
        It&apos;s faster to build, easier to debug, and covers more cases than people expect. Reach
        for an agent only when you hit a genuine wall — the task needs tools, autonomy, or
        multi-step decision-making that a single prompted response can&apos;t provide. Over-building
        an agent for a job a skill could do is the most common mistake.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Get Started with Agents
      </h2>
      <p>
        If you&apos;ve decided your task needs the autonomy of an agent, these three playbooks are
        the fastest way in:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/ai-agent-builder"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors sm:col-span-2"
        >
          <p className="font-semibold text-foreground mb-1">AI Agent Builder</p>
          <p className="text-sm text-muted-foreground">Design and build agents with tools, memory, and multi-step reasoning — the foundational playbook for going from skill to autonomous system.</p>
        </Link>
        <Link
          href="/playbooks/browser-automation"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Browser Automation Assistant</p>
          <p className="text-sm text-muted-foreground">An agent that acts on the web — scraping, form-filling, testing, and scheduled workflows with Puppeteer/Playwright.</p>
        </Link>
        <Link
          href="/playbooks/parallel-task-agents"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Parallel Task Agents</p>
          <p className="text-sm text-muted-foreground">Spawn multiple agents at once to handle independent subtasks in parallel — then synthesize the results into one output.</p>
        </Link>
      </div>
      <p>
        The terminology trips people up, but the underlying idea is clean: skills make Claude
        better at responding, agents make Claude capable of doing. Most of the time you want a
        skill. When you need autonomy and tools, you want an agent. And the most powerful setups
        quietly use both — an autonomous agent running on a skill that tells it exactly how to do
        the job well.
      </p>
    </BlogPostLayout>
  );
}
