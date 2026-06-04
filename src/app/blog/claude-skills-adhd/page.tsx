import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for ADHD: The AI Focus System That Actually Works | Claude Code Playbooks Blog',
  description: "Why most productivity tools fail people with ADHD — and how four Claude Skills work the way the ADHD brain actually does: breaking paralysis into one clear start, capturing scattered thoughts into a queryable second brain, turning goals into 30-day dopamine scaffolding, and doing the honest life audit you've been avoiding.",
  alternates: { canonical: '/blog/claude-skills-adhd' },
  openGraph: {
    title: 'Claude Skills for ADHD: The AI Focus System That Actually Works',
    description: 'Four Claude Skills built for the ADHD brain — task paralysis, scattered notes, abandoned goals, and the honest audit you keep avoiding.',
    url: 'https://www.claudecodehq.com/blog/claude-skills-adhd',
    type: 'article',
    publishedTime: '2026-06-04',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for ADHD: The AI Focus System That Actually Works',
    description: 'AI ADHD productivity tools that work with the ADHD brain, not against it — task paralysis, second brain, 30-day goals, life audit.',
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

export default function ClaudeSkillsAdhdPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for ADHD: The AI Focus System That Actually Works"
      description="Why most productivity tools fail people with ADHD — and how four Claude Skills work the way the ADHD brain actually does: breaking paralysis into one clear start, capturing scattered thoughts into a queryable second brain, turning goals into 30-day dopamine scaffolding, and doing the honest life audit you've been avoiding."
      category="guide"
      difficulty="basic"
      readingTime="13 min read"
      createdAt="2026-06-04"
      tags={[
        'claude skills adhd',
        'ai adhd productivity',
        'adhd task manager ai',
        'claude adhd focus',
        'ADHD productivity',
        'neurodivergent tools',
        'Claude Code',
      ]}
      author="Claude Code Playbooks"
      slug="claude-skills-adhd"
    >
      <p className="text-lg">
        If you have ADHD, you probably have a graveyard of productivity tools. The planner you
        used for three days. The time-blocking app that felt like a system until the first
        interruption broke it. The to-do list with 47 items on it — everything marked urgent,
        nothing marked started. The habit tracker you forgot to track. The goal you set on
        January 1st that you genuinely can&apos;t remember setting by March.
      </p>
      <p>
        Most productivity tools fail people with ADHD for a consistent reason: they&apos;re
        designed for neurotypical executive function. They assume you can look at a list and
        start the first item. They assume the system you designed on Monday will feel motivating
        on Thursday. They assume willpower is a renewable resource that just needs better
        structure. It&apos;s not, and it doesn&apos;t — and no amount of color-coding a
        Notion database changes that.
      </p>
      <p>
        <strong className="text-foreground">Claude Skills</strong> work differently, and not
        because they&apos;re smarter or more feature-rich. They work because you can shape
        exactly how they respond — to your energy level right now, to the specific paralysis
        you&apos;re in today, to the way your brain actually processes tasks rather than the
        way a productivity framework assumes it does. This guide covers four skills built for
        the ADHD brain:{' '}
        <strong className="text-foreground">breaking task paralysis</strong> into one clear
        start,{' '}
        <strong className="text-foreground">capturing the scatter</strong> into a second brain
        you can actually query,{' '}
        <strong className="text-foreground">building momentum</strong> over 30 days with
        dopamine-aware goal design, and{' '}
        <strong className="text-foreground">doing the honest audit</strong> that tells you
        where you actually are so goals can connect to reality.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Why &quot;Just Use a Better System&quot; Doesn&apos;t Work
      </h2>
      <p>
        The conventional productivity advice for ADHD is: get a better system. More granular
        tasks. Stricter time blocks. A weekly review. The advice isn&apos;t wrong exactly —
        structure helps — but it treats the symptom rather than the mechanism. Task paralysis
        isn&apos;t a list organization problem. It&apos;s a dopamine and executive function
        problem: the brain can&apos;t initiate on &quot;write the report,&quot; not because
        the task is unclear, but because the reward signal for starting is too weak to
        overcome the friction of beginning.
      </p>
      <p>
        Similarly, abandoned goals aren&apos;t a planning problem. A goal that requires you
        to rely on future-you&apos;s willpower is a goal designed to fail for anyone who
        struggles with time blindness and dopamine regulation. And scattered notes aren&apos;t
        an organization problem — they&apos;re a capture-first, organize-never problem that
        most PKM systems make worse by requiring too much overhead to maintain.
      </p>
      <p>
        The skills below address each of these mechanisms directly, rather than adding more
        structure on top of them.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        1. Task Paralysis — Break the Freeze with One Clear Start
      </h2>
      <p>
        The to-do list with 12 items on it — all of them vague, all of them feeling equally
        heavy — is the most common ADHD productivity failure mode. You look at it. You feel
        overwhelmed. You switch to something easier. An hour later, nothing on the list has
        moved, and now you feel guilty on top of overwhelmed, which makes starting even harder.
        The problem isn&apos;t the 12 tasks. It&apos;s that no one told your brain where to
        put its attention <em>right now</em> at this energy level.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/adhd-task-manager">
          ADHD-Friendly Task Manager
        </PlaybookLink>{' '}
        skill is designed for exactly this moment. Dump your task list in — half-formed,
        vague, mixed urgency, doesn&apos;t matter — and it breaks each task into 15-minute
        dopamine-friendly chunks, sequences them by your energy level right now (high, medium,
        low, crashing), and gives you one clear &quot;start here&quot; action. Not a
        reorganized list. One thing. The thing your brain can actually initiate on.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;I have 12 work tasks and I can&apos;t start any of them. My energy is medium —
          I slept okay but I&apos;m already distracted. Here&apos;s the list: [paste]. Break
          each one into 15-minute chunks, sequence by what makes sense for medium energy, and
          tell me the single thing to start with right now — not a priority list, just the
          one move.&quot;
        </p>
      </div>
      <p>
        The &quot;not a priority list, just the one move&quot; instruction is the one that
        matters. A priority list is still a list, and a list still triggers the overwhelm
        loop. One clear action — specific enough to start immediately, small enough that
        completion feels achievable — is the thing that breaks the freeze. Once you&apos;ve
        done the first chunk, the next one is easier. The skill exploits the ADHD brain&apos;s
        tendency to hyperfocus once momentum exists: it just needs to get you moving.
      </p>
      <div className="space-y-2 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#f97316] font-mono text-sm font-bold shrink-0 mt-0.5">Before</span>
          <p className="text-sm">47-item to-do list. Everything feels urgent. You scroll your phone for 90 minutes instead of starting any of it, then feel guilty for the rest of the day.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#22c55e] font-mono text-sm font-bold shrink-0 mt-0.5">After</span>
          <p className="text-sm">Tasks broken into 15-minute chunks matched to your current energy. One clear start. Momentum begins in the first five minutes instead of the first five hours.</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes · Difficulty: Beginner · Best for: adults with ADHD, neurodivergent professionals, overwhelmed students
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        2. The Scatter — A Second Brain You Can Actually Find Things In
      </h2>
      <p>
        ADHD brains generate a lot. Ideas at 2am. Half-finished thoughts captured in five
        different apps. Links saved but never revisited. Notes from a podcast three months ago
        that felt important but now live in a folder you can&apos;t find. The conventional
        advice is to organize better — but organization requires sustained executive function
        and feels like homework, which means most ADHD notes systems collapse within a week.
        The notes exist; they just can&apos;t be found or connected when they matter.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/ai-second-brain">
          AI-Powered Second Brain
        </PlaybookLink>{' '}
        skill takes a different approach: capture first, organize by querying later. Feed it
        your notes — raw, scattered, un-tagged, across formats — and it builds a queryable
        knowledge base that synthesizes information and surfaces connections across the pile.
        When you need something, you ask in plain language. It searches across your material,
        synthesizes an answer from multiple sources, cites back to the specific notes, and
        surfaces connections you hadn&apos;t noticed between things you captured months apart.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;What do my notes say about managing energy for deep work? I know I&apos;ve
          captured things about this from different books and podcasts but I can&apos;t
          remember where. Synthesize whatever&apos;s relevant across all my notes, cite the
          source for each point, and flag any contradictions between what different things
          I&apos;ve saved say.&quot;
        </p>
      </div>
      <p>
        The critical insight for ADHD: this system is low-maintenance by design. You don&apos;t
        need to tag, file, or review your notes to get value from them. Capture them anywhere
        — voice memo transcript, quick text dump, copy-paste from a browser — and the skill
        handles the retrieval and synthesis. The overhead that kills most note-taking systems
        for ADHD brains is nearly eliminated. You capture; the skill connects.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes · Difficulty: Intermediate · Best for: knowledge workers with scattered notes, Obsidian users, researchers, writers with extensive reference libraries
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        3. Abandoned Goals — 30-Day Dopamine Scaffolding Instead of Willpower
      </h2>
      <p>
        ADHD goal-setting fails in a specific, predictable way. You set an ambitious goal.
        You feel motivated for a few days because novelty is its own dopamine hit. The novelty
        wears off. Progress becomes invisible because the milestone is too far away to feel
        real. The habit requires showing up on a low-energy day when there&apos;s no external
        accountability and no immediate reward. You miss one day, the streak breaks, and the
        goal joins the graveyard.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/30-day-goal-achievement">
          30-Day Goal Achievement Protocol
        </PlaybookLink>{' '}
        skill designs around this failure mode rather than ignoring it. It uses cognitive
        behavioral techniques and identity reprogramming — not just task lists — to build a
        30-day protocol with daily exercises, habit stacking schedules, and weekly milestone
        checkpoints calibrated to your specific goal. The checkpoints are close enough to feel
        real. The identity layer (&quot;you are becoming someone who...&quot;) does something
        the to-do list never does: it gives the ADHD brain a story to stay inside.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;I want to finally build a consistent morning routine and make progress on
          my side project. I&apos;ve tried both before and quit after 2 weeks. Build me a
          30-day protocol that accounts for low-motivation days — I need the system to
          work even when I don&apos;t feel like it. Short daily actions, visible weekly
          milestones, and tell me what identity shift I&apos;m trying to make, not just
          what to do.&quot;
        </p>
      </div>
      <p>
        &quot;Tell me what identity shift I&apos;m trying to make&quot; is the ADHD-specific
        addition. Behavior change is more durable when it&apos;s attached to who you&apos;re
        becoming rather than what you&apos;re doing — and ADHD brains respond especially well
        to narrative and meaning over abstract task completion. The 30-day structure is short
        enough that the finish line is visible, which keeps future-you from feeling like an
        abstraction.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 30 minutes · Difficulty: Intermediate · Best for: goal-setters who keep quitting, people in career transitions, self-improvement enthusiasts
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        4. The Honest Audit — Where You Actually Are, Not Where You Meant to Be
      </h2>
      <p>
        ADHD time blindness doesn&apos;t just affect minutes and hours. It affects months and
        years. You look up and it&apos;s December and the goals you set last January feel like
        something someone else set — because emotionally, past-you and future-you don&apos;t
        feel as continuous as they do for neurotypical people. You drifted. You&apos;re not
        sure exactly how or where. Setting new goals on top of that drift without stopping to
        look at it honestly just means the new goals are built on the same shaky foundation
        as the last ones.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/annual-life-audit">
          Annual Life Audit
        </PlaybookLink>{' '}
        skill is the honest look. It runs an assessment across the major life areas — career,
        health, finances, relationships, personal growth — identifies patterns across them,
        then breaks the findings into quarterly milestones and monthly actions you can start
        this week. Not a vision board. Not aspirational fiction. An honest read of where you
        are right now, with a realistic bridge to where you want to be.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Help me do an honest life audit. I&apos;m going into Q3 and I feel like
          I&apos;ve been drifting — I set goals in January that I can barely remember.
          Assess where I actually am across career, health, finances, and relationships.
          Be honest, not encouraging. Identify the patterns — what keeps recurring that
          I&apos;m not addressing — and give me 2-3 concrete actions I could start this
          week, not a 47-point plan.&quot;
        </p>
      </div>
      <p>
        &quot;Be honest, not encouraging&quot; and &quot;not a 47-point plan&quot; are both
        ADHD-critical. Encouraging but vague feedback keeps you feeling good without changing
        anything. A 47-point action plan triggers the same overwhelm as the to-do list with
        47 items. The audit is most useful when it surfaces the two or three patterns that
        actually explain the drift — the recurring theme you keep not addressing — and gives
        you a manageable next move rather than a perfect strategy.
      </p>
      <div className="space-y-2 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#f97316] font-mono text-sm font-bold shrink-0 mt-0.5">Before</span>
          <p className="text-sm">It&apos;s Q3 and you&apos;re not sure what happened to Q1 and Q2. New goals get set on top of the same unexamined patterns. Same drift, new year.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#22c55e] font-mono text-sm font-bold shrink-0 mt-0.5">After</span>
          <p className="text-sm">Honest read across all life areas. The recurring pattern named. Two or three actions to start this week — attached to reality, not aspiration.</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes · Difficulty: Beginner · Best for: anyone who drifts on goals, people approaching milestone moments, professionals feeling stuck
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        How the Four Skills Work Together
      </h2>
      <p>
        These skills address different time horizons of the ADHD focus problem, and they
        reinforce each other:
      </p>
      <ol className="list-decimal list-inside space-y-3 my-4">
        <li>
          <strong className="text-foreground">Annual Life Audit</strong> — the foundation. Run
          once at a natural transition point — new year, new quarter, birthday, whenever the
          drift becomes undeniable. It tells you where you actually are so the other skills
          are building toward something real.
        </li>
        <li>
          <strong className="text-foreground">30-Day Goal Achievement Protocol</strong> — the
          medium horizon. Take one of the areas the audit surfaces and build a 30-day protocol
          with dopamine-aware milestones and identity scaffolding. One goal at a time — ADHD
          brains don&apos;t spread well across simultaneous commitments.
        </li>
        <li>
          <strong className="text-foreground">AI-Powered Second Brain</strong> — the ongoing
          layer. Capture everything relevant to the goal and to your broader thinking as you
          go. Query it when you need to synthesize or find something. The overhead is low
          enough to maintain without burning executive function.
        </li>
        <li>
          <strong className="text-foreground">ADHD-Friendly Task Manager</strong> — the daily
          layer. Each morning (or each time paralysis hits), dump the task list and get one
          clear start. This is the skill you use most often, matched to whatever energy level
          you actually have, not the one you planned for.
        </li>
      </ol>
      <p>
        You don&apos;t need all four running before you start. Pick the layer where you&apos;re
        most stuck right now — probably the daily paralysis — set up that one skill today, and
        add the others when the first becomes reflexive. The whole system is designed to be
        low-setup and low-maintenance, because a system that requires sustained executive
        function to maintain will eventually be abandoned, and you&apos;ve been through that
        enough times already.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Difference Between a Tool That Helps and One That Actually Works
      </h2>
      <p>
        Most productivity tools that claim to work for ADHD are neurotypical tools with a
        gentler interface. They still require you to maintain a system. They still assume
        willpower is the variable. They still produce a list when what you need is a start.
      </p>
      <p>
        What makes Claude Skills different isn&apos;t the technology — it&apos;s the
        adaptability. You tell it your energy level right now. You tell it you&apos;ve tried
        this goal before and quit at week two. You tell it you need honest feedback, not
        encouragement. You tell it not to give you a 47-point plan. And it adjusts, every
        time, to where you actually are instead of where a productivity framework assumes
        you should be. That&apos;s not a small thing for a brain that operates differently
        depending on the hour, the day, and what else is going on. It&apos;s the whole thing.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Get the Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/adhd-task-manager"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">ADHD-Friendly Task Manager</p>
          <p className="text-sm text-muted-foreground">Break the freeze: tasks chunked into 15-minute dopamine-friendly pieces, sequenced by your energy, with one clear start action.</p>
        </Link>
        <Link
          href="/playbooks/ai-second-brain"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">AI-Powered Second Brain</p>
          <p className="text-sm text-muted-foreground">Transform scattered notes into a queryable knowledge base — capture anywhere, find anything, surface connections you missed.</p>
        </Link>
        <Link
          href="/playbooks/30-day-goal-achievement"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">30-Day Goal Achievement Protocol</p>
          <p className="text-sm text-muted-foreground">Dopamine-aware goal design with identity scaffolding, daily exercises, and weekly milestones close enough to feel real.</p>
        </Link>
        <Link
          href="/playbooks/annual-life-audit"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Annual Life Audit</p>
          <p className="text-sm text-muted-foreground">Honest assessment across all life areas — patterns identified, drift explained, and 2–3 actions to start this week.</p>
        </Link>
      </div>
      <p>
        The graveyard of tools that didn&apos;t work isn&apos;t evidence that you can&apos;t
        build a system. It&apos;s evidence that the systems were designed for a different brain.
        These ones aren&apos;t.
      </p>
    </BlogPostLayout>
  );
}
