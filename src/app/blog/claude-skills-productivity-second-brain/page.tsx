import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Personal Productivity: Build Your AI Second Brain | Claude Code Playbooks Blog',
  description: 'How to use Claude Skills as an AI-powered second brain — capturing ideas, managing goals, running life reviews, and surfacing patterns from your own notes and history. Five playbooks for the productivity-obsessed.',
  alternates: { canonical: '/blog/claude-skills-productivity-second-brain' },
  openGraph: {
    title: 'Claude Skills for Personal Productivity: Build Your AI Second Brain',
    description: 'How to use Claude Skills as an AI-powered second brain — capturing ideas, managing goals, running life reviews, and surfacing patterns from your own notes and history.',
    url: 'https://www.claudecodehq.com/blog/claude-skills-productivity-second-brain',
    type: 'article',
    publishedTime: '2026-05-17',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Personal Productivity: Build Your AI Second Brain',
    description: 'Five Claude Skills that turn your notes, goals, and history into a working AI second brain — no app switching required.',
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

export default function ClaudeSkillsProductivitySecondBrainPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Personal Productivity: Build Your AI Second Brain"
      description="How to use Claude Skills as an AI-powered second brain — capturing ideas, managing goals, running life reviews, and surfacing patterns from your own notes and history. Five playbooks for the productivity-obsessed."
      category="guide"
      difficulty="basic"
      readingTime="13 min read"
      createdAt="2026-05-17"
      tags={['claude skills productivity', 'claude personal assistant skills', 'claude second brain', 'AI second brain', 'personal productivity', 'Claude Code', 'CLAUDE.md']}
      author="Claude Code Playbooks"
      slug="claude-skills-productivity-second-brain"
    >
      <p className="text-lg">
        The second brain concept — capture everything, organize it, retrieve it when you need it,
        let your external system do the remembering — has been popular for years. Obsidian has a
        cult following. Notion has millions of users. Tiago Forte&apos;s{' '}
        <em>Building a Second Brain</em> became a bestseller. The appetite for this idea is real
        and growing.
      </p>
      <p>
        The problem most people hit: the system takes more energy to maintain than it saves. The
        daily review never gets done. The capture habit falls apart after three weeks. The notes
        pile up unread. What starts as a productivity system becomes a second job.
      </p>
      <p>
        Claude Skills close that gap. Instead of building a system you have to maintain manually,
        you build a set of AI-powered skills that do the maintenance for you — surfacing patterns
        from your own notes, turning scattered goals into structured plans, running life audits on
        demand, and managing cognitive load for brains that struggle with standard productivity
        frameworks. This is what an AI second brain actually looks like in practice.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Why Claude Skills Work as a Second Brain Layer
      </h2>
      <p>
        Most second brain tools are storage systems — they&apos;re good at holding information but
        not at doing anything with it. You write a note, it gets filed, and it sits there until
        you remember to look for it. The bottleneck isn&apos;t capture; it&apos;s synthesis.
        Connecting a note you wrote six months ago to the problem you have today.
      </p>
      <p>
        Claude Skills are the synthesis layer your notes app doesn&apos;t have. Because Claude Code
        runs locally and can read files directly from your computer, a well-built skill can:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
        <li>Read your Obsidian vault or Notion exports and surface connections you missed</li>
        <li>Parse your conversation history and extract recurring themes or patterns</li>
        <li>Turn a brain dump into a structured action plan in one prompt</li>
        <li>Run a systematic life review against your own stated goals</li>
        <li>Manage tasks in a way that accounts for how your brain actually works — not how a generic productivity framework assumes it does</li>
      </ul>
      <p>
        The skills don&apos;t replace your notes app. They make it useful. You keep using whatever
        you&apos;re already using — the skill sits on top of it and does the heavy cognitive work.
      </p>
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-6">
        <p className="text-sm font-semibold text-foreground mb-2">How this differs from chatting with AI</p>
        <p className="text-sm text-muted-foreground">
          When you chat with an AI without a skill, you explain your context from scratch every
          session. When you use a Claude Skill, the CLAUDE.md file carries your context
          permanently — your goals, your constraints, your preferred formats, your history. The
          AI already knows who you are and what you&apos;re trying to do before you type a single
          word. That&apos;s the difference between a tool and a second brain.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Five Claude Skills for Your Productivity Stack
      </h2>
      <p>
        These five skills cover the core functions of any serious second brain: knowledge capture
        and synthesis, goal management, periodic review, structured achievement, and cognitive load
        support. Each maps to a pre-built playbook you can download and use immediately.
      </p>

      {/* ── Skill 1 ── */}
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        1. AI Second Brain — your knowledge synthesis engine
      </h3>
      <p>
        The core skill. The{' '}
        <PlaybookLink href="/playbooks/ai-second-brain">AI Second Brain</PlaybookLink> playbook
        turns Claude into a personal knowledge assistant that works with your actual notes and
        writing — not generic content.
      </p>
      <p>
        Point it at your Obsidian vault, a folder of markdown files, a Notion export, or even
        a collection of copied-in text snippets. Ask it to surface connections between ideas, find
        recurring themes across notes you wrote months apart, or synthesize scattered writing into
        a coherent summary. It reads your material — not the internet — and surfaces the
        intelligence that was already in your system but invisible to you.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompts</p>
        <div className="space-y-2">
          <p className="text-sm font-mono text-[#f97316]">&quot;Read my notes from last quarter and tell me what themes keep coming up that I haven&apos;t acted on.&quot;</p>
          <p className="text-sm font-mono text-[#f97316]">&quot;Find everything I&apos;ve written about [topic] and give me a synthesis — what do I actually think about it?&quot;</p>
          <p className="text-sm font-mono text-[#f97316]">&quot;Which of my ideas from the last six months are still relevant to what I&apos;m working on now?&quot;</p>
        </div>
      </div>
      <p>
        This is the skill that closes the loop on years of notes that never got reviewed. The
        information was always there — now you have a way to query it.
      </p>

      {/* ── Skill 2 ── */}
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        2. ADHD Task Manager — a productivity system for brains that resist systems
      </h3>
      <p>
        Most productivity frameworks were designed by people whose brains naturally do the things
        the system requires: sustained attention, consistent routine, seamless task-switching, and
        tolerance for abstract long-term planning. For a significant portion of people, those
        assumptions are exactly wrong.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/adhd-task-manager">ADHD Task Manager</PlaybookLink> skill
        is built for brains that work differently. Instead of demanding willpower to follow a
        rigid system, it adapts to how you actually function. It breaks large tasks into
        dopamine-friendly micro-steps, accounts for energy levels throughout the day, surfaces
        the right task at the right moment rather than presenting an undifferentiated list of
        everything, and never guilt-trips you for what didn&apos;t get done.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompts</p>
        <div className="space-y-2">
          <p className="text-sm font-mono text-[#f97316]">&quot;I have 45 minutes and medium energy. What&apos;s the one thing I should do right now?&quot;</p>
          <p className="text-sm font-mono text-[#f97316]">&quot;I need to write a report but can&apos;t start. Break it into the smallest possible first step.&quot;</p>
          <p className="text-sm font-mono text-[#f97316]">&quot;I missed everything on my list today. Help me reset without spiraling.&quot;</p>
        </div>
      </div>
      <p>
        Even if you don&apos;t have ADHD, this skill is worth trying. The core design principle —
        meeting your brain where it is rather than demanding it meet the system — produces better
        outcomes for almost everyone.
      </p>

      {/* ── Skill 3 ── */}
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        3. Annual Life Audit — the yearly review that actually happens
      </h3>
      <p>
        The annual review is one of those productivity rituals that almost everyone agrees is
        valuable and almost no one does consistently. It requires sustained focus, structured
        self-reflection, and a framework rigorous enough to surface real insight — conditions
        that are hard to manufacture alone.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/annual-life-audit">Annual Life Audit</PlaybookLink> skill
        runs a comprehensive review across every major life domain: career, finances, relationships,
        health, learning, creative projects, and personal growth. It asks the right questions,
        doesn&apos;t let you give shallow answers, and produces a structured output — not a journal
        entry — with clear highlights, lowlights, patterns, and priorities for the year ahead.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">What it produces</p>
        <pre className="text-sm font-mono text-[#e6edf3] whitespace-pre-wrap leading-relaxed">{`Year in Review: [Year]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Domain Assessment (Career / Finance / Health / Relationships / Growth)
Top 3 Wins — specific achievements worth carrying forward
Top 3 Lessons — things that didn't work and why
Recurring Patterns — themes that appeared across multiple domains
Priority Shifts — what matters more or less heading into next year
Focus Areas — 3 concrete commitments for the year ahead`}</pre>
      </div>
      <p>
        Most people who use this skill do it in one sitting. The structure carries the session —
        you don&apos;t have to figure out what questions to ask or how to organize your thoughts.
        You just answer and the skill does the synthesis.
      </p>

      {/* ── Skill 4 ── */}
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        4. 30-Day Goal Achievement — structured momentum for medium-term goals
      </h3>
      <p>
        Annual reviews identify priorities. Daily task managers handle today. The gap in most
        productivity stacks is the medium term: what are you actually doing this month, and is it
        moving you toward what matters?
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/30-day-goal-achievement">30-Day Goal Achievement</PlaybookLink>{' '}
        skill fills that gap. It takes a goal you want to accomplish in 30 days and builds a
        complete system around it: a week-by-week plan, daily checkpoints, milestone markers, and
        an accountability structure that adjusts based on your actual progress rather than assuming
        linear execution.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompts</p>
        <div className="space-y-2">
          <p className="text-sm font-mono text-[#f97316]">&quot;My goal is to launch a newsletter with 100 subscribers in 30 days. Build my plan.&quot;</p>
          <p className="text-sm font-mono text-[#f97316]">&quot;I&apos;m on Day 12 and I&apos;m behind on week 2&apos;s milestones. How do I recover without abandoning the goal?&quot;</p>
          <p className="text-sm font-mono text-[#f97316]">&quot;What should I focus on this week given where I am in the 30-day plan?&quot;</p>
        </div>
      </div>
      <p>
        The 30-day timeframe is deliberate. It&apos;s long enough to accomplish something
        meaningful, short enough to stay concrete, and bounded enough that the plan doesn&apos;t
        need to account for everything that could change in a year. It works for professional
        projects, health habits, creative goals, learning targets — anything that has a natural
        30-day arc.
      </p>

      {/* ── Skill 5 ── */}
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        5. Chat History Mind Mapper — extract the thinking you already did
      </h3>
      <p>
        Here&apos;s a pattern most heavy Claude users fall into: you have a brilliant conversation,
        work through a complex problem in real time, arrive at a clear insight — and then it
        lives in a chat window you&apos;ll never find again. Months of thinking, mostly lost.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/chat-history-mind-mapper">Chat History Mind Mapper</PlaybookLink>{' '}
        skill fixes this by turning your conversation exports into structured knowledge. Feed it
        a chat export (Claude, ChatGPT, or any AI conversation you can export as text) and it
        extracts: key decisions made, ideas surfaced, open questions left unresolved, recurring
        themes across sessions, and a visual mind map structure of how the concepts connect.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompts</p>
        <div className="space-y-2">
          <p className="text-sm font-mono text-[#f97316]">&quot;Here&apos;s my last 30 days of Claude conversations. What are the main topics I keep thinking about?&quot;</p>
          <p className="text-sm font-mono text-[#f97316]">&quot;Find every decision I made in these conversations and summarize the reasoning behind each one.&quot;</p>
          <p className="text-sm font-mono text-[#f97316]">&quot;What open questions did I leave unresolved across all these sessions?&quot;</p>
        </div>
      </div>
      <p>
        This is the most uniquely AI-native skill in the list. No human assistant or note-taking
        system could do this practically — parsing thousands of lines of conversation history and
        surfacing structured insight is exactly the kind of work where AI is genuinely faster and
        more thorough than a person.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        How These Five Skills Work Together
      </h2>
      <p>
        Each skill works on its own, but the real power is in the stack. Here&apos;s how a
        typical productivity cycle looks when all five are running:
      </p>
      <div className="space-y-3 my-6">
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/30 flex items-center justify-center text-[#22d3ee] text-sm font-semibold">1</div>
          <div>
            <p className="font-semibold text-foreground text-sm">Annual Life Audit (yearly)</p>
            <p className="text-sm text-muted-foreground">Run once a year to identify what actually matters. Produces 3 focus areas for the year ahead.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/30 flex items-center justify-center text-[#22d3ee] text-sm font-semibold">2</div>
          <div>
            <p className="font-semibold text-foreground text-sm">30-Day Goal Achievement (monthly)</p>
            <p className="text-sm text-muted-foreground">Pick one focus area and build a 30-day plan. Keeps the annual priorities from staying abstract.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/30 flex items-center justify-center text-[#22d3ee] text-sm font-semibold">3</div>
          <div>
            <p className="font-semibold text-foreground text-sm">ADHD Task Manager (daily)</p>
            <p className="text-sm text-muted-foreground">Each day, get your next action — one that fits your energy level and moves the 30-day goal forward.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/30 flex items-center justify-center text-[#22d3ee] text-sm font-semibold">4</div>
          <div>
            <p className="font-semibold text-foreground text-sm">Chat History Mind Mapper (weekly or monthly)</p>
            <p className="text-sm text-muted-foreground">Periodically extract insight from your AI conversations so good thinking doesn&apos;t get lost.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/30 flex items-center justify-center text-[#22d3ee] text-sm font-semibold">5</div>
          <div>
            <p className="font-semibold text-foreground text-sm">AI Second Brain (ongoing)</p>
            <p className="text-sm text-muted-foreground">Whenever you want to resurface something from your notes — connect an old idea to a current problem, find a theme, synthesize scattered writing.</p>
          </div>
        </div>
      </div>
      <p>
        You don&apos;t need all five running before you start getting value. Pick the one that
        addresses your biggest productivity bottleneck right now and add the others as you see the
        pattern.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        How This Compares to Obsidian, Notion, and Other Second Brain Tools
      </h2>
      <p>
        These skills aren&apos;t replacements for your current notes app. They&apos;re a layer
        on top of it. The honest comparison:
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-[#30363d]">
              <th className="text-left py-2 pr-4 text-foreground font-semibold">What the tool does well</th>
              <th className="text-left py-2 pr-4 text-foreground font-semibold">Obsidian / Notion</th>
              <th className="text-left py-2 text-foreground font-semibold">Claude Skills</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="border-b border-[#30363d]/50">
              <td className="py-2 pr-4">Storing notes</td>
              <td className="py-2 pr-4">✓ Excellent</td>
              <td className="py-2">—</td>
            </tr>
            <tr className="border-b border-[#30363d]/50">
              <td className="py-2 pr-4">Organizing content</td>
              <td className="py-2 pr-4">✓ Excellent</td>
              <td className="py-2">—</td>
            </tr>
            <tr className="border-b border-[#30363d]/50">
              <td className="py-2 pr-4">Surfacing connections across notes</td>
              <td className="py-2 pr-4">Partial (graph view)</td>
              <td className="py-2 text-[#22d3ee]">✓ Strong</td>
            </tr>
            <tr className="border-b border-[#30363d]/50">
              <td className="py-2 pr-4">Synthesizing scattered writing</td>
              <td className="py-2 pr-4">—</td>
              <td className="py-2 text-[#22d3ee]">✓ Strong</td>
            </tr>
            <tr className="border-b border-[#30363d]/50">
              <td className="py-2 pr-4">Goal planning and tracking</td>
              <td className="py-2 pr-4">Manual templates</td>
              <td className="py-2 text-[#22d3ee]">✓ Dynamic</td>
            </tr>
            <tr className="border-b border-[#30363d]/50">
              <td className="py-2 pr-4">Adaptive task management</td>
              <td className="py-2 pr-4">—</td>
              <td className="py-2 text-[#22d3ee]">✓ Strong</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Extracting insight from AI conversations</td>
              <td className="py-2 pr-4">—</td>
              <td className="py-2 text-[#22d3ee]">✓ Unique</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The pattern is consistent: existing tools are excellent at storage and organization. Claude
        Skills are excellent at synthesis, adaptation, and active work on your content. Together
        they cover what neither can do alone.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Getting Started: The Right Order
      </h2>
      <p>
        If you&apos;re new to Claude Skills, the practical advice is to start with whichever of
        these five solves your most immediate problem — not the one that sounds most impressive.
      </p>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Start with ADHD Task Manager if...</p>
          <p className="text-sm text-muted-foreground">You have a long task list but can&apos;t figure out what to do next, or you keep avoiding tasks you know are important.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Start with 30-Day Goal Achievement if...</p>
          <p className="text-sm text-muted-foreground">You set goals but they stall after week one, or you can&apos;t translate a big goal into concrete daily actions.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Start with Annual Life Audit if...</p>
          <p className="text-sm text-muted-foreground">You haven&apos;t done a serious life review in a while and feel like you&apos;re optimizing for the wrong things.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Start with AI Second Brain if...</p>
          <p className="text-sm text-muted-foreground">You have years of notes you never revisit, or good ideas that disappear because you have no synthesis layer.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Start with Chat History Mind Mapper if...</p>
          <p className="text-sm text-muted-foreground">You use AI heavily and know you&apos;re losing good thinking in closed chat windows.</p>
        </div>
      </div>
      <p>
        Each skill is a CLAUDE.md file you download, drop into a folder, and start using. No
        setup beyond that. Pick the one that fits your problem right now — add the others when
        you see the gap they fill.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Five Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/ai-second-brain"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">AI Second Brain</p>
          <p className="text-sm text-muted-foreground">Synthesize your notes, surface hidden connections, and query your own knowledge base in plain English.</p>
        </Link>
        <Link
          href="/playbooks/adhd-task-manager"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">ADHD Task Manager</p>
          <p className="text-sm text-muted-foreground">Adaptive task management that meets your brain where it is — energy-aware, judgment-free, momentum-focused.</p>
        </Link>
        <Link
          href="/playbooks/annual-life-audit"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Annual Life Audit</p>
          <p className="text-sm text-muted-foreground">A structured year-end review across every major life domain — patterns, priorities, and a clear plan for what&apos;s next.</p>
        </Link>
        <Link
          href="/playbooks/30-day-goal-achievement"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">30-Day Goal Achievement</p>
          <p className="text-sm text-muted-foreground">Turn a goal into a week-by-week plan with daily checkpoints and built-in course correction when life interrupts.</p>
        </Link>
        <Link
          href="/playbooks/chat-history-mind-mapper"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors sm:col-span-2"
        >
          <p className="font-semibold text-foreground mb-1">Chat History Mind Mapper</p>
          <p className="text-sm text-muted-foreground">Extract structured insight from your AI conversation exports — decisions, open questions, recurring themes, and a mind map of how it all connects.</p>
        </Link>
      </div>
    </BlogPostLayout>
  );
}
