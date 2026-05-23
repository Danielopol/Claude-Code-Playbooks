import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'The AI Life Automation Audit: Use Claude Skills to Find 5+ Hours a Week | Claude Code Playbooks Blog',
  description: 'A step-by-step audit for finding the 5+ hours a week hiding in your repetitive tasks — email, scheduling, files, and meetings — and the Claude Skills to automate each one.',
  alternates: { canonical: '/blog/ai-life-automation-audit-find-hours' },
  openGraph: {
    title: 'The AI Life Automation Audit: Use Claude Skills to Find 5+ Hours a Week',
    description: 'A step-by-step audit for finding the 5+ hours a week hiding in your repetitive tasks — and the Claude Skills to automate each one.',
    url: 'https://www.claudecodehq.com/blog/ai-life-automation-audit-find-hours',
    type: 'article',
    publishedTime: '2026-05-23',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The AI Life Automation Audit: Use Claude Skills to Find 5+ Hours a Week',
    description: 'Run the audit. Find where your hours go. Automate the friction. Five domain-by-domain checklists + Claude Skills for each.',
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

type CheckItem = { text: string; hours: string };

function AuditDomain({
  number,
  title,
  intro,
  items,
  totalRange,
  skill,
}: {
  number: string;
  title: string;
  intro: string;
  items: CheckItem[];
  totalRange: string;
  skill?: React.ReactNode;
}) {
  return (
    <div className="border border-[#30363d] rounded-lg overflow-hidden my-6">
      <div className="bg-[#161b22] px-5 py-3 flex items-center gap-3">
        <span className="text-2xl font-bold text-[#30363d] font-mono select-none">{number}</span>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <div className="px-5 py-4 space-y-3">
        <p className="text-sm text-muted-foreground">{intro}</p>
        <div className="space-y-1.5">
          {items.map(({ text, hours }) => (
            <div key={text} className="flex items-start gap-3 text-sm">
              <span className="flex-shrink-0 w-4 h-4 mt-0.5 rounded border border-[#30363d] bg-[#0d1117]" aria-hidden="true" />
              <span className="flex-1 text-muted-foreground">{text}</span>
              <span className="flex-shrink-0 text-xs text-muted-foreground/60 font-mono">{hours}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-[#30363d]">
          <p className="text-xs text-muted-foreground">Typical recoverable time</p>
          <p className="text-sm font-semibold text-[#22d3ee]">{totalRange}</p>
        </div>
        {skill && <div className="pt-1">{skill}</div>}
      </div>
    </div>
  );
}

export default function AiLifeAutomationAuditFindHoursPage() {
  return (
    <BlogPostLayout
      title="The AI Life Automation Audit: Use Claude Skills to Find 5+ Hours a Week"
      description="A step-by-step audit for finding the 5+ hours a week hiding in your repetitive tasks — email, scheduling, files, and meetings — and the Claude Skills to automate each one."
      category="guide"
      difficulty="basic"
      readingTime="13 min read"
      createdAt="2026-05-23"
      tags={['ai life automation audit', 'claude skills life automation', 'automate your life with ai', 'productivity automation', 'Claude Code', 'time saving', 'AI productivity']}
      author="Claude Code Playbooks"
      slug="ai-life-automation-audit-find-hours"
    >
      <p className="text-lg">
        Most people don&apos;t lose time in big obvious chunks. They lose it in five-minute
        increments, twenty times a day — searching for a file, writing the same kind of email
        for the fourth time this week, transferring meeting notes into a format someone can
        actually use, scheduling a call that required six back-and-forth messages to land.
      </p>
      <p>
        Those increments add up. Research consistently shows knowledge workers spend 20–30% of
        their time on tasks that could be automated or dramatically compressed — administrative
        overhead that feels like work but doesn&apos;t actually produce anything. For most people,
        that&apos;s 8–12 hours a week. Finding 5 of those hours isn&apos;t ambitious; it&apos;s
        conservative.
      </p>
      <p>
        The reason most people don&apos;t find them: they don&apos;t audit. They know abstractly
        that they&apos;re spending time on repetitive things, but they don&apos;t look
        systematically at where those things are concentrated or what it would take to fix them.
        This post is that audit — a domain-by-domain checklist for identifying your specific
        time drains, with the Claude Skills that address each one.
      </p>

      {/* ── How the audit works ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        How to Run the Audit
      </h2>
      <p>
        The audit has two modes. You can run it yourself using the domain checklists below —
        work through each section, check the items that apply to you, and total up the estimated
        hours. Or you can run it with Claude using the{' '}
        <PlaybookLink href="/playbooks/ai-life-automation-audit">AI Life Automation Audit</PlaybookLink>{' '}
        skill, which guides you through a structured conversation about your daily and weekly
        routines and produces a prioritized automation plan tailored to your specific situation.
      </p>
      <p>
        Either way works. The checklist version is faster and produces a rough estimate. The
        Claude-guided version is more thorough — it asks follow-up questions, surfaces
        automations you wouldn&apos;t have thought of, and produces a ranked list of where to
        start based on effort vs. time recovered.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">If using the Claude-guided audit</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          &quot;I want to run a full life automation audit. Walk me through my typical day and
          week — ask me about each area one at a time. For each thing I describe, flag whether
          it&apos;s automatable, partially automatable, or genuinely requires my judgment.
          At the end, give me a ranked list of the top 5 automations by estimated time recovered
          vs. effort to set up.&quot;
        </p>
      </div>
      <p>
        Before starting either version, think about the last two weeks — not your ideal week,
        your actual week. The audit finds real friction, not imagined inefficiency.
      </p>

      {/* ── The 5 domains ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Five Audit Domains
      </h2>
      <p>
        Most recoverable time concentrates in five areas. Work through each checklist and
        estimate your weekly time honestly. The totals will tell you where to focus first.
      </p>

      {/* Domain 1: Email */}
      <AuditDomain
        number="01"
        title="Email & Communications"
        intro="The highest-leverage domain for most people. Email isn't just time-consuming — it's cognitively expensive. Each context switch to process a message costs attention that compounds across the day."
        items={[
          { text: 'I spend more than 45 minutes/day in my inbox', hours: '~3–4 hrs/wk' },
          { text: 'I write similar replies multiple times a week (status updates, follow-ups, intro emails)', hours: '~1–2 hrs/wk' },
          { text: 'I manually sort or file emails rather than having a system', hours: '~1 hr/wk' },
          { text: 'I read emails in the moment rather than in batched processing windows', hours: '~1–2 hrs/wk' },
          { text: 'I spend time deciding which emails actually need a response from me vs. FYI', hours: '~30–60 min/wk' },
        ]}
        totalRange="2–5 hrs/week recoverable"
        skill={
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Link href="/playbooks/smart-email-triage" className="block p-3 bg-[#0d1117] border border-[#30363d] rounded hover:border-[#22d3ee] transition-colors">
              <p className="text-xs font-semibold text-foreground">Smart Email Triage</p>
              <p className="text-xs text-muted-foreground mt-0.5">Categorize, prioritize, and draft replies for a full inbox in minutes.</p>
            </Link>
            <Link href="/playbooks/inbox-zero-manager" className="block p-3 bg-[#0d1117] border border-[#30363d] rounded hover:border-[#22d3ee] transition-colors">
              <p className="text-xs font-semibold text-foreground">Inbox Zero Manager</p>
              <p className="text-xs text-muted-foreground mt-0.5">Full inbox processing — actions, delegates, defers, and done.</p>
            </Link>
          </div>
        }
      />

      {/* Domain 2: Calendar & Scheduling */}
      <AuditDomain
        number="02"
        title="Calendar & Scheduling"
        intro="Scheduling friction is insidious because no single instance feels significant — but the aggregate is real. Back-and-forth scheduling emails, manual calendar management, and unplanned context-switching between tasks accumulate quietly."
        items={[
          { text: 'I send 3+ emails to schedule a single meeting (back-and-forth on availability)', hours: '~30–60 min/wk' },
          { text: 'My calendar doesn\'t reflect my actual priorities — meetings crowd out focused work', hours: '~1–2 hrs/wk lost focus' },
          { text: 'I don\'t have protected time blocks for my highest-leverage work', hours: '~1 hr/wk lost' },
          { text: 'I manually plan my week rather than having a structured weekly planning process', hours: '~30–45 min/wk' },
          { text: 'I frequently context-switch mid-task because meetings aren\'t clustered efficiently', hours: '~1–2 hrs/wk in recovery time' },
        ]}
        totalRange="1.5–3 hrs/week recoverable"
        skill={
          <Link href="/playbooks/calendar-automation" className="block p-3 bg-[#0d1117] border border-[#30363d] rounded hover:border-[#22d3ee] transition-colors">
            <p className="text-xs font-semibold text-foreground">Calendar Automation</p>
            <p className="text-xs text-muted-foreground mt-0.5">Intelligent weekly planning — protect deep work, cluster meetings, align calendar with priorities.</p>
          </Link>
        }
      />

      {/* Domain 3: Files & Information */}
      <AuditDomain
        number="03"
        title="Files, Folders & Information Chaos"
        intro="Information retrieval is an invisible time drain. You don't think of 'searching for a file' as a task — but if you do it ten times a day for 3–5 minutes each, that's 30–50 minutes gone. The organization work to prevent it pays for itself within a week."
        items={[
          { text: 'I spend time searching for files I know I have but can\'t find quickly', hours: '~30–60 min/wk' },
          { text: 'My Downloads folder is chaotic — screenshots, installers, documents all mixed', hours: '~15–30 min/wk in friction' },
          { text: 'I maintain duplicate files across multiple folders or devices', hours: '~15–30 min/wk' },
          { text: 'I have no consistent naming or organization system for project files', hours: '~30–60 min/wk' },
          { text: 'I scroll through long documents to find specific sections I need', hours: '~20–30 min/wk' },
        ]}
        totalRange="1–2 hrs/week recoverable"
        skill={
          <Link href="/playbooks/auto-organize-downloads" className="block p-3 bg-[#0d1117] border border-[#30363d] rounded hover:border-[#22d3ee] transition-colors">
            <p className="text-xs font-semibold text-foreground">Auto-Organize Downloads</p>
            <p className="text-xs text-muted-foreground mt-0.5">Sort thousands of files by type, archive old ones, flag duplicates — in one session.</p>
          </Link>
        }
      />

      {/* Domain 4: Meetings */}
      <AuditDomain
        number="04"
        title="Meeting Overhead"
        intro="The meeting itself is often the smaller time cost. The overhead — prep, note-taking, processing, follow-up, tracking action items — can equal or exceed the meeting duration. For someone in 5–8 meetings a week, this adds up fast."
        items={[
          { text: 'I don\'t have a consistent pre-meeting prep process (arrive without clear goals)', hours: '~15–30 min/wk in wasted meeting time' },
          { text: 'I take raw notes during meetings and never process them into structured actions', hours: '~30–60 min/wk in lost accountability' },
          { text: 'Action items from meetings get lost — no system to track commitments', hours: '~30–60 min/wk in rework and follow-up' },
          { text: 'I write meeting follow-up emails manually rather than using a consistent format', hours: '~20–40 min/wk' },
          { text: 'I attend meetings I don\'t need to be in but haven\'t developed a polite exit system', hours: '~30–90 min/wk' },
        ]}
        totalRange="1.5–3 hrs/week recoverable"
        skill={
          <Link href="/playbooks/meeting-notes-to-actions" className="block p-3 bg-[#0d1117] border border-[#30363d] rounded hover:border-[#22d3ee] transition-colors">
            <p className="text-xs font-semibold text-foreground">Meeting Notes to Actions</p>
            <p className="text-xs text-muted-foreground mt-0.5">Paste raw notes → get decisions, owners, deadlines, and a follow-up email in under a minute.</p>
          </Link>
        }
      />

      {/* Domain 5: Morning/Weekly Admin */}
      <AuditDomain
        number="05"
        title="Daily Startup & Weekly Admin"
        intro="The first 30–60 minutes of each day are disproportionately important — they set the frame for everything that follows. Most people spend that window reactively (inbox, Slack, whatever appeared overnight) rather than from a considered starting position."
        items={[
          { text: 'My morning starts reactively — inbox and messages before I\'ve identified my top priority', hours: '~1–2 hrs/wk in misallocated morning time' },
          { text: 'I don\'t have a consistent weekly planning ritual — the week just happens', hours: '~1–2 hrs/wk in lost direction' },
          { text: 'I track to-dos across 3+ places (notes app, email flags, sticky notes, memory)', hours: '~30–60 min/wk in mental overhead' },
          { text: 'I don\'t do a weekly review — things slip, commitments get forgotten', hours: '~30–60 min/wk in rework' },
          { text: 'Administrative tasks (expenses, reports, status updates) pile up and require catch-up', hours: '~1 hr/wk in catch-up vs. maintenance' },
        ]}
        totalRange="1.5–3 hrs/week recoverable"
        skill={
          <Link href="/playbooks/morning-brief" className="block p-3 bg-[#0d1117] border border-[#30363d] rounded hover:border-[#22d3ee] transition-colors">
            <p className="text-xs font-semibold text-foreground">Morning Brief</p>
            <p className="text-xs text-muted-foreground mt-0.5">Start every day with a 5-minute structured brief — priorities, pending decisions, and one highest-leverage task.</p>
          </Link>
        }
      />

      {/* ── Tallying the audit ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Tallying Your Audit Results
      </h2>
      <p>
        If you worked through the checklists honestly, you likely found more than five hours.
        Most people do. The question is which ones to fix first.
      </p>
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-6">
        <p className="text-sm font-semibold text-foreground mb-3">Prioritization framework</p>
        <div className="space-y-3">
          <div className="flex gap-3 items-start">
            <span className="flex-shrink-0 text-[#22d3ee] font-semibold text-sm">High first</span>
            <p className="text-sm text-muted-foreground">
              Items where the automation is <em>simple to implement</em> and the <em>time recovered is high</em>.
              Email triage and file organization typically live here — one-time setup, immediate daily payback.
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="flex-shrink-0 text-[#22d3ee] font-semibold text-sm">Second</span>
            <p className="text-sm text-muted-foreground">
              Items where the time recovered is significant but setup requires a few more minutes —
              calendar restructuring, meeting processing habits, weekly review ritual.
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="flex-shrink-0 text-[#22d3ee] font-semibold text-sm">Later</span>
            <p className="text-sm text-muted-foreground">
              Items that require behavior change rather than just a tool — stopping reactive mornings,
              declining unnecessary meetings. High value, but not a quick win. Work on these after
              the easier automations are running and you have momentum.
            </p>
          </div>
        </div>
      </div>
      <p>
        A practical rule: implement one automation per week for the next four weeks. By week
        five you have four working automations compounding, and the time you recovered from the
        first ones funds the energy to set up the next ones.
      </p>

      {/* ── Run the full audit with Claude ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Run the Full Audit With Claude
      </h2>
      <p>
        The checklist version gives you an estimate. The{' '}
        <PlaybookLink href="/playbooks/ai-life-automation-audit">AI Life Automation Audit</PlaybookLink>{' '}
        skill gives you a plan. The difference: the skill asks follow-up questions that surface
        automations the checklist doesn&apos;t anticipate, because it&apos;s responding to your
        specific situation rather than a generic list.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Full audit prompt</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          &quot;I want to do a thorough life automation audit. I&apos;ll describe my typical
          day and week — ask me follow-up questions about each area to find the real friction,
          not just the obvious stuff. For each task I mention, classify it: fully automatable,
          partially automatable (AI can draft/structure, I review), or genuinely needs my
          judgment. Then give me a ranked list of the top 5 automations to implement first,
          ordered by time-recovered-per-setup-hour.&quot;
        </p>
      </div>
      <p>
        The &quot;time-recovered-per-setup-hour&quot; ranking is the key output. It tells you
        which automations pay back their setup investment fastest — useful when you&apos;re
        deciding where to spend your first hour of implementation effort.
      </p>

      {/* ── Annual audit ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Once a Year: The Bigger Picture Audit
      </h2>
      <p>
        The five-domain audit above focuses on tactical time — the recurring friction in your
        daily and weekly workflow. Once a year, it&apos;s worth running a more fundamental
        review: not just &quot;how do I do what I do more efficiently&quot; but &quot;am I
        spending my time on the right things at all.&quot;
      </p>
      <p>
        The <PlaybookLink href="/playbooks/annual-life-audit">Annual Life Audit</PlaybookLink>{' '}
        skill handles this larger question. It reviews the past year across all major life
        domains — career, finances, relationships, health, learning, personal projects — and
        helps you identify whether your current allocation of time and attention is actually
        aligned with what matters to you, or whether you&apos;ve drifted into optimizing for
        busyness rather than meaning.
      </p>
      <p>
        The distinction: the weekly automation audit recovers hours. The annual life audit
        redirects them toward what they should have been going to in the first place. Both
        matter — but in sequence. Fix the efficiency layer first, then direct the recovered
        capacity toward something worth having.
      </p>

      {/* ── What to do after the audit ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        After the Audit: Three-Step Implementation
      </h2>
      <ol className="list-decimal list-inside space-y-4 my-4">
        <li className="text-foreground font-medium">
          <span>Pick your highest-leverage automation</span>
          <p className="text-sm text-muted-foreground font-normal mt-1 ml-5">
            The one where the checklist indicated the most time and the Claude Skill setup is
            under ten minutes. Email triage is the most common first choice — it produces
            visible results from the first session and compounds daily.
          </p>
        </li>
        <li className="text-foreground font-medium">
          <span>Set it up and use it for two weeks before adding another</span>
          <p className="text-sm text-muted-foreground font-normal mt-1 ml-5">
            The temptation is to set up everything at once. Resist it. One automation that
            becomes a habit is worth more than four that get used twice and forgotten. Two weeks
            is enough time for a new workflow to become automatic.
          </p>
        </li>
        <li className="text-foreground font-medium">
          <span>Re-run the audit in 90 days</span>
          <p className="text-sm text-muted-foreground font-normal mt-1 ml-5">
            Your workflow will have shifted. New friction will have appeared. Some things
            you thought were problems will have resolved or turned out not to matter. The audit
            is a recurring practice, not a one-time fix.
          </p>
        </li>
      </ol>

      {/* ── CTA ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Four Playbooks
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/ai-life-automation-audit"
          className="block p-4 bg-[#161b22] border border-[#22d3ee]/30 rounded-lg hover:border-[#22d3ee] transition-colors sm:col-span-2"
        >
          <p className="font-semibold text-foreground mb-1">AI Life Automation Audit</p>
          <p className="text-sm text-muted-foreground">The guided version of this audit — Claude walks through your daily and weekly routines, identifies automatable friction, and produces a ranked implementation plan tailored to your situation.</p>
        </Link>
        <Link
          href="/playbooks/calendar-automation"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Calendar Automation</p>
          <p className="text-sm text-muted-foreground">Restructure your week around your actual priorities — protected deep work, clustered meetings, and a realistic weekly plan.</p>
        </Link>
        <Link
          href="/playbooks/auto-organize-downloads"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Auto-Organize Downloads</p>
          <p className="text-sm text-muted-foreground">Sort, archive, and deduplicate thousands of files in one session — then maintain the system with a single monthly prompt.</p>
        </Link>
        <Link
          href="/playbooks/annual-life-audit"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors sm:col-span-2"
        >
          <p className="font-semibold text-foreground mb-1">Annual Life Audit</p>
          <p className="text-sm text-muted-foreground">The once-a-year bigger-picture review — not just how to work more efficiently, but whether you&apos;re working on the right things across every domain of your life.</p>
        </Link>
      </div>
      <p>
        The five hours are there. They&apos;re in the same places for almost everyone — email,
        scheduling, files, meeting overhead, and reactive mornings. The audit takes 20 minutes.
        The first automation takes 10 minutes to set up. By the end of the week, you&apos;ve
        already started getting them back.
      </p>
    </BlogPostLayout>
  );
}
