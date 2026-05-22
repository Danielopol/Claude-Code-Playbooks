import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Executives: How to Build an AI Chief of Staff in 2026 | Claude Code Playbooks Blog',
  description: 'How executives use Claude Skills to build an AI chief of staff — daily briefings, priority management, decision frameworks, and strategic advisory. Your inbox is 6 apps. Your priorities live in your head. Claude Skills unify both.',
  alternates: { canonical: '/blog/claude-skills-executive-ai-chief-of-staff' },
  openGraph: {
    title: 'Claude Skills for Executives: How to Build an AI Chief of Staff in 2026',
    description: 'How executives use Claude Skills to build an AI chief of staff — daily briefings, priority management, decision frameworks, and strategic advisory.',
    url: 'https://www.claudecodehq.com/blog/claude-skills-executive-ai-chief-of-staff',
    type: 'article',
    publishedTime: '2026-05-22',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Executives: How to Build an AI Chief of Staff in 2026',
    description: 'Your inbox is 6 apps. Your priorities live in your head. These Claude Skills unify both — daily briefings, decision support, and a strategic sounding board.',
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

export default function ClaudeSkillsExecutiveAiChiefOfStaffPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Executives: How to Build an AI Chief of Staff in 2026"
      description="How executives use Claude Skills to build an AI chief of staff — daily briefings, priority management, decision frameworks, and strategic advisory. Your inbox is 6 apps. Your priorities live in your head. Claude Skills unify both."
      category="guide"
      difficulty="basic"
      readingTime="13 min read"
      createdAt="2026-05-22"
      tags={['claude skills executive', 'ai chief of staff', 'claude skills for ceos', 'ai executive assistant', 'executive productivity', 'Claude Code', 'CEO tools']}
      author="Claude Code Playbooks"
      slug="claude-skills-executive-ai-chief-of-staff"
    >
      <p className="text-lg">
        Your inbox lives in Gmail. Your calendar is in Google Calendar. Your tasks are split
        between a notes app and a tool your team uses that you check reluctantly. Slack has
        notifications you&apos;re ignoring. Your actual priorities — the ones that determine
        whether this quarter succeeds — live exclusively in your head.
      </p>
      <p>
        No tool currently has the full picture. And the cognitive overhead of maintaining it
        mentally, session after session, meeting after meeting, compounds into a kind of
        strategic fog: you know what matters, but you spend most of your time on what&apos;s
        in front of you rather than what&apos;s most important.
      </p>
      <p>
        A real chief of staff solves this. They hold context across everything — your priorities,
        your key decisions, your commitments, the things you said you&apos;d follow up on three
        weeks ago. They brief you before you walk into the room. They ask the question that
        challenges your assumption before you make the call. They don&apos;t let important things
        disappear into the operational noise.
      </p>
      <p>
        Claude Skills can replicate this function. Not the relationship, not the presence, not
        the judgment that comes from a decade of working alongside you — but the context-holding,
        the briefing, the decision support, and the accountability structure. For executives who
        don&apos;t have a CoS, or whose CoS is stretched thin, an AI Chief of Staff is a
        meaningful productivity lever. Here&apos;s how to build one.
      </p>

      {/* ── What makes this different from using AI chat ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Why This Is Different From Asking ChatGPT for Help
      </h2>
      <p>
        The failure mode of executives who try to use AI and conclude it&apos;s not useful for
        them: they open a chat window, explain their situation from scratch, get a generic
        response, and close the tab. The problem isn&apos;t the AI — it&apos;s that a cold
        session with no context produces cold output.
      </p>
      <p>
        A Claude Skill works differently. The CLAUDE.md file holds your standing context
        permanently — your priorities for the quarter, your decision-making style, your key
        stakeholders, your constraints, your current open questions. Every session starts with
        Claude already knowing what you&apos;re working on and what matters to you. You don&apos;t
        brief it. It briefs you.
      </p>
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-6">
        <p className="text-sm font-semibold text-foreground mb-3">The difference in practice</p>
        <div className="space-y-3">
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide mb-1">Generic AI chat</p>
            <p className="text-sm text-muted-foreground italic">
              &quot;I&apos;m a CEO of a 60-person B2B SaaS company. We have a board meeting next
              week and I&apos;m trying to decide whether to raise a bridge round or push for
              profitability. Here&apos;s the context: [ten minutes of explaining]...&quot;
            </p>
          </div>
          <div className="border-t border-[#30363d] pt-3">
            <p className="text-xs font-mono text-[#22d3ee] uppercase tracking-wide mb-1">With an AI Chief of Staff skill</p>
            <p className="text-sm text-muted-foreground italic">
              &quot;Board meeting is Thursday. Help me think through the bridge vs. profitability
              decision.&quot;
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Claude already knows: company stage, burn rate, board dynamics, your stated Q3
              priorities, and that you&apos;ve been leaning toward profitability for two months.
              The answer is immediately useful.
            </p>
          </div>
        </div>
      </div>
      <p>
        The setup takes 30–45 minutes once. After that, every session starts from a complete
        picture. That&apos;s the investment — and it pays back within the first week.
      </p>

      {/* ── The three core skills ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Three Core Skills
      </h2>

      {/* Skill 1: Executive Chief of Staff */}
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        1. Executive Chief of Staff — the daily operating layer
      </h3>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/executive-chief-of-staff">Executive Chief of Staff</PlaybookLink>{' '}
        skill is the primary interface. This is the skill you open every morning and every time
        you need to think through something quickly. It knows your role, your company context,
        your team, your current priorities, and your preferred communication style. It functions
        as a persistent operating layer — not a one-off assistant.
      </p>
      <p>
        The core use cases:
      </p>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Morning briefing</p>
          <p className="text-sm text-muted-foreground">
            Start the day with a structured brief: what&apos;s on today&apos;s calendar, what
            decisions are pending, what you said you&apos;d follow up on, and what the one
            highest-leverage thing is to accomplish before anything else. Takes two minutes.
            Replaces the fifteen minutes of context-assembly that used to happen in your head
            while reading emails.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Pre-meeting prep</p>
          <p className="text-sm text-muted-foreground">
            Before any significant meeting, ask for a quick brief: the person&apos;s background,
            the relevant context from previous interactions, what you want to get out of it,
            and what you should be careful about. Arrives prepared without spending an hour
            on research.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Priority triage</p>
          <p className="text-sm text-muted-foreground">
            When the inbox is full and everything appears urgent, paste in the list of demands
            on your attention and ask for a prioritized view: what genuinely moves the needle
            vs. what feels urgent but isn&apos;t, what you should do, delegate, defer, or decline.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Communication drafting</p>
          <p className="text-sm text-muted-foreground">
            Board updates, all-hands memos, investor emails, difficult conversations with
            direct reports. The skill knows your voice and your context — it drafts in your
            register, not a generic corporate register.
          </p>
        </div>
      </div>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompts</p>
        <div className="space-y-2">
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Brief me for today. What&apos;s on my calendar, what decisions have I been
            deferring, and what&apos;s the one thing I should make sure happens today?&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;I have 12 things in my head that need attention this week. Here they are: [list].
            Prioritize them and tell me what the top three actually are, and why.&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Draft my Friday all-hands update. Key news this week: [bullets]. Tone: direct
            and honest, no corporate softening. Under 300 words.&quot;
          </p>
        </div>
      </div>

      {/* Skill 2: Chief of Staff Check-in */}
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        2. Chief of Staff Check-In — the weekly rhythm that keeps you accountable
      </h3>
      <p>
        The Executive Chief of Staff skill handles the daily operational layer. The{' '}
        <PlaybookLink href="/playbooks/chief-of-staff-checkin">Chief of Staff Check-In</PlaybookLink>{' '}
        skill handles the weekly strategic rhythm — the structured review that most executives
        know they should do and rarely do consistently.
      </p>
      <p>
        A real chief of staff runs this meeting with you. They bring the list of commitments
        you made last week, hold you accountable to what didn&apos;t get done, surface the
        pattern of what keeps slipping, and ask the uncomfortable question about whether the
        current week&apos;s plan is actually aligned with the quarter&apos;s priorities.
      </p>
      <p>
        The skill replicates this structure: a weekly session that reviews what you committed to,
        what actually happened, what&apos;s blocking progress on what matters most, and what the
        adjusted plan is for the coming week. It asks the hard questions. It doesn&apos;t let
        you reframe a missed commitment as a strategic pivot without justification.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompts</p>
        <div className="space-y-2">
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Weekly check-in. Last week&apos;s commitments: [list]. What happened: [list].
            Run the review — what got done, what slipped, what&apos;s the honest explanation,
            and what am I going to stop saying I&apos;ll do if I keep not doing it?&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;I&apos;ve now deferred [specific initiative] three weeks in a row. What are
            the possible explanations for that, and what should I actually do about it?&quot;
          </p>
        </div>
      </div>
      <p>
        The second prompt — asking directly about a pattern of deferral — is where this skill
        produces its highest-value output. Most executives have a persistent item they keep
        moving. The skill will name the possible explanations honestly: it&apos;s not actually
        a priority, you&apos;re avoiding a difficult conversation it requires, you don&apos;t
        have enough information to decide, or it&apos;s someone else&apos;s job and you
        haven&apos;t delegated it clearly. That kind of direct challenge is hard to get from
        most people in your organization.
      </p>

      {/* Skill 3: CEO Advisor */}
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        3. CEO Advisor — a strategic sounding board without an agenda
      </h3>
      <p>
        The loneliness-at-the-top problem is real and structural. Everyone in your organization
        has a stake in your decisions. Your board has its own interests. Your investors are
        aligned in some ways and misaligned in others. Your co-founders or leadership team
        are valuable advisors but not fully independent. The person who can tell you you&apos;re
        wrong — without any skin in the game — is genuinely rare.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/ceo-advisor">CEO Advisor</PlaybookLink> skill fills
        a specific gap in this landscape: a sounding board that knows your company deeply,
        has no stake in your decisions, and is designed to challenge your assumptions before
        you commit. It doesn&apos;t tell you what you want to hear. It applies structured
        strategic frameworks — pre-mortem analysis, second-order thinking, devil&apos;s advocate
        — and pushes back on reasoning that isn&apos;t solid.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompts</p>
        <div className="space-y-2">
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;I&apos;m leaning toward [strategic decision]. Challenge my reasoning. What am
            I not seeing, what assumptions am I making that could be wrong, and what does the
            bear case look like if I&apos;m wrong about the key variable?&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Run a pre-mortem on this decision. Assume it&apos;s two years from now and
            this choice turned out to be a significant mistake. What are the three most likely
            explanations for why it went wrong?&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;I&apos;m about to have a difficult conversation with [person/board/investor].
            Steel-man their position for me — what&apos;s the strongest version of the argument
            I&apos;m going to hear, and what are the points I genuinely can&apos;t counter?&quot;
          </p>
        </div>
      </div>
      <p>
        The pre-mortem and steel-man prompts are the highest-leverage uses of this skill. They
        produce the kind of thinking that usually requires an experienced board member or advisor
        who knows your situation well enough to push on the specific weak points — not generic
        strategic advice.
      </p>

      {/* ── Supporting skills ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Supporting Skills for the Executive Stack
      </h2>
      <p>
        The three core skills cover the CoS function. The following skills handle specific
        high-frequency executive tasks that the CoS doesn&apos;t need to own directly:
      </p>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            <PlaybookLink href="/playbooks/inbox-zero-manager">Inbox Zero Manager</PlaybookLink>
          </p>
          <p className="text-sm text-muted-foreground">
            Triage a full inbox in minutes: categorize every thread by required action, draft
            replies for the ones that need a response, identify what can be delegated and to
            whom, and surface anything that requires your personal attention today. The skill
            that makes the inbox a processed queue rather than a source of ambient anxiety.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            <PlaybookLink href="/playbooks/meeting-intelligence-system">Meeting Intelligence System</PlaybookLink>
          </p>
          <p className="text-sm text-muted-foreground">
            Converts meeting notes or transcripts into structured intelligence: decisions made,
            commitments with owners and deadlines, open questions requiring resolution, and the
            follow-up email ready to send. Ensures nothing from a meeting disappears into the
            void — which, at the executive level, is often where accountability breaks down.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            <PlaybookLink href="/playbooks/decision-matrix">Decision Matrix</PlaybookLink>
          </p>
          <p className="text-sm text-muted-foreground">
            For decisions that resist gut instinct — multiple options with competing trade-offs,
            uncertain probabilities, stakeholders with different priorities. The skill builds a
            structured decision matrix: criteria defined and weighted, options scored, sensitivity
            to assumptions tested. Forces the implicit assumptions in your thinking to become
            explicit and examinable.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            <PlaybookLink href="/playbooks/executive-dashboard">Executive Dashboard</PlaybookLink>
          </p>
          <p className="text-sm text-muted-foreground">
            Turns raw business metrics into a structured executive view: the numbers that matter
            this period, period-over-period trends, anomalies worth investigating, and the
            plain-English narrative that explains what&apos;s happening and why. Replaces the
            30-minute weekly data review with a 5-minute brief.
          </p>
        </div>
      </div>

      {/* ── Building your executive CLAUDE.md ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Building Your Executive CLAUDE.md
      </h2>
      <p>
        The quality of your AI Chief of Staff is directly proportional to the quality of the
        context you give it. Here&apos;s what to include in your master executive CLAUDE.md:
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Executive CLAUDE.md template</p>
        <pre className="text-sm font-mono text-[#e6edf3] whitespace-pre-wrap leading-relaxed">{`# Executive Context

## Role & Company
[Your title, company, stage, industry, headcount, key metrics]

## Current Quarter Priorities (3 max)
1. [Priority — what success looks like in one sentence]
2. [Priority — what success looks like in one sentence]
3. [Priority — what success looks like in one sentence]

## Key Decisions Currently Open
- [Decision: what it is, what I'm leaning toward, what's blocking resolution]
- [Decision: same format]

## Key People & Relationships
[Direct reports, board members, key investors, critical external relationships —
one line each on context that matters]

## Communication Style
[How I write and speak — direct/warm/formal/conversational, anything I always/never do]

## My Decision-Making Tendencies (honest version)
[What I tend to over-weight, what I tend to under-weight, biases I'm aware of]

## Current Constraints
[Budget, headcount freeze, board-level mandates, anything I'm working around]

## Last Updated
[Date — review monthly or when major context changes]`}</pre>
      </div>
      <p>
        Two sections deserve particular attention. <strong className="text-foreground">Key
        Decisions Currently Open</strong> is what most executives forget to include and what
        produces the most immediate value — when your CoS skill already knows what you&apos;re
        wrestling with, every relevant conversation and piece of information gets filtered
        through that lens automatically.
      </p>
      <p>
        <strong className="text-foreground">My Decision-Making Tendencies</strong> is uncomfortable
        to write but disproportionately valuable. If you know you tend to over-weight recency
        bias in people decisions, or that you historically under-invest in operational details
        when you&apos;re excited about strategy, encoding that gives your CEO Advisor skill
        the specific angles to challenge you on. A generic AI will give you generic pushback.
        One that knows your specific failure modes will ask the right questions.
      </p>

      {/* ── The daily routine ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        A Practical Daily and Weekly Routine
      </h2>
      <div className="space-y-3 my-4">
        {[
          {
            cadence: 'Daily — 10 min',
            label: 'Morning brief',
            action: 'Open Executive Chief of Staff. Get the day\'s brief: priorities, pending decisions, calendar context, one highest-leverage task.',
          },
          {
            cadence: 'Before any high-stakes meeting',
            label: 'Meeting prep',
            action: 'Ask for a quick context brief on the person, the relationship history, what you want from the meeting, and what to watch for.',
          },
          {
            cadence: 'When inbox overflows',
            label: 'Inbox triage',
            action: 'Paste threads into Inbox Zero Manager. Get categorized actions, draft replies for time-sensitive items, delegation recommendations.',
          },
          {
            cadence: 'After any significant meeting',
            label: 'Meeting debrief',
            action: 'Paste notes into Meeting Intelligence System. Get structured decisions, owners, next actions, and a follow-up draft.',
          },
          {
            cadence: 'Before major decisions',
            label: 'Decision pressure-test',
            action: 'Open CEO Advisor. Run a pre-mortem, steel-man the opposition, and have your assumptions challenged before you commit.',
          },
          {
            cadence: 'Weekly — 30 min',
            label: 'Weekly check-in',
            action: 'Open Chief of Staff Check-In. Review last week\'s commitments, hold yourself accountable on what slipped, set the top three for the coming week.',
          },
        ].map(({ cadence, label, action }) => (
          <div key={label} className="flex gap-4 items-start">
            <div className="flex-shrink-0 text-right min-w-[120px]">
              <p className="text-xs text-muted-foreground font-mono leading-tight">{cadence}</p>
            </div>
            <div className="flex-1 border-l border-[#30363d] pl-4">
              <p className="text-sm font-semibold text-foreground">{label}</p>
              <p className="text-sm text-muted-foreground">{action}</p>
            </div>
          </div>
        ))}
      </div>
      <p>
        The investment in setup is 30–45 minutes to build your CLAUDE.md and install the skills.
        The ongoing cost is 10–15 minutes to keep the context file current — updating priorities
        at the start of each quarter, adding new open decisions, removing resolved ones. That
        maintenance is what keeps the AI Chief of Staff accurate and useful rather than stale.
      </p>

      {/* ── What this doesn't replace ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        What an AI Chief of Staff Doesn&apos;t Replace
      </h2>
      <p>
        Being precise about the limits matters for executives who are evaluating whether this
        is worth their time.
      </p>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Real relationships and trust</p>
          <p className="text-sm text-muted-foreground">
            A human CoS builds relationships with your team, reads the room in a board meeting,
            and earns political capital on your behalf. The AI skill does none of this.
            It&apos;s a cognitive tool, not an organizational actor.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Real-time information</p>
          <p className="text-sm text-muted-foreground">
            Claude Code runs locally and reads files you provide. It doesn&apos;t monitor
            your inbox, listen to your meetings, or pull live data from external systems.
            You bring information to it; it doesn&apos;t gather it autonomously.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Execution and follow-through</p>
          <p className="text-sm text-muted-foreground">
            The AI Chief of Staff advises, drafts, and organizes. It doesn&apos;t send emails,
            book meetings, or ensure your direct reports actually do what was decided.
            Execution still requires humans.
          </p>
        </div>
      </div>
      <p>
        Within those limits, the AI Chief of Staff is most powerful for executives who have
        the judgment and capacity to act on good input — but who are currently constrained
        by the friction of context-assembly and the scarcity of advisors who can give them
        genuinely independent pushback. That&apos;s most senior leaders, most of the time.
      </p>

      {/* ── CTA ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Three Core Skills
      </h2>
      <div className="grid grid-cols-1 gap-4 my-6">
        <Link
          href="/playbooks/executive-chief-of-staff"
          className="block p-5 bg-[#161b22] border border-[#22d3ee]/30 rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Executive Chief of Staff</p>
          <p className="text-sm text-muted-foreground">The daily operating layer — morning briefings, priority triage, pre-meeting prep, and executive communications. Start here.</p>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/playbooks/chief-of-staff-checkin"
            className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
          >
            <p className="font-semibold text-foreground mb-1">Chief of Staff Check-In</p>
            <p className="text-sm text-muted-foreground">Weekly accountability review — commitments vs. reality, pattern analysis, and a reset plan for the week ahead.</p>
          </Link>
          <Link
            href="/playbooks/ceo-advisor"
            className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
          >
            <p className="font-semibold text-foreground mb-1">CEO Advisor</p>
            <p className="text-sm text-muted-foreground">Strategic sounding board with no agenda — pre-mortems, steel-man analysis, and assumption challenges before you commit.</p>
          </Link>
        </div>
      </div>
      <p>
        Build your CLAUDE.md this week — 30 minutes, no coding, just writing down what&apos;s
        already in your head. Use the Executive Chief of Staff skill for one morning brief.
        If it produces something useful from your first prompt, you&apos;ll know within five
        minutes whether this is worth building out further. Most executives who try it do.
      </p>
    </BlogPostLayout>
  );
}
