import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Slack Teams: Automate Updates, Summaries, and Standups | Claude Code Playbooks Blog',
  description: "Four Claude Skills that eliminate repetitive Slack messaging — standup bots and approval flows, a Gmail-to-Slack summary bot, Microsoft Teams automation, and a unified daily briefing.",
  alternates: { canonical: '/blog/claude-skills-slack' },
  openGraph: {
    title: 'Claude Skills for Slack Teams: Automate Updates, Summaries, and Standups',
    description: "Four Claude Skills that eliminate repetitive Slack messaging — standup bots and approval flows, a Gmail-to-Slack summary bot, Microsoft Teams automation, and a unified daily briefing.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-slack',
    type: 'article',
    publishedTime: '2026-07-22T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Slack Teams: Automate Updates, Summaries, and Standups',
    description: "Four Claude Skills that eliminate repetitive Slack messaging — standup bots and approval flows, a Gmail-to-Slack summary bot, Microsoft Teams automation, and a unified daily briefing.",
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

export default function ClaudeSkillsSlackPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Slack Teams: Automate Updates, Summaries, and Standups"
      description="Four Claude Skills that eliminate repetitive Slack messaging — standup bots and approval flows, a Gmail-to-Slack summary bot, Microsoft Teams automation, and a unified daily briefing."
      category="guide"
      difficulty="basic"
      readingTime="12 min read"
      createdAt="2026-07-22"
      tags={['claude skills slack', 'ai slack automation', 'ai standup bot', 'slack workflow automation', 'gmail to slack', 'microsoft teams automation', 'ai daily briefing', 'slack bot ai']}
      author="Claude Code Playbooks"
      slug="claude-skills-slack"
    >
      <p>
        Slack has become the default surface for team communication, which means it's also become the default surface for a specific kind of repetitive labor: pasting the same standup update every morning, manually routing approval requests between channels, copy-pasting email content because critical information keeps arriving somewhere other than Slack. None of this is difficult work. All of it is the kind of small daily tax that adds up to real hours lost every week across a team.
      </p>
      <p>
        These four Claude Skills target that tax directly — automating the standup, the approval flow, the email bridge, and the "what does my day actually look like" question that opens every morning with five tabs instead of one view.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Automate Standups, Approvals, and Notification Routing
      </h2>
      <p>
        The daily standup is a good idea executed badly in most Slack workspaces: someone has to remember to post the prompt, people paste updates into a channel that scrolls past unread within the hour, and nobody's collecting the actual signal — who's blocked, what needs attention — into something a manager can act on. Approval workflows have a similar shape: requests get routed manually between channels, and anything that sits for more than a day just quietly stalls.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/slack-workflows">Slack Workflow Automation</PlaybookLink>{' '}
        Skill builds the automations that fix both: an async standup bot that collects updates at scheduled times and posts a formatted summary to the team channel, approval flows triggered by external events (like a GitHub webhook) with approve/reject buttons built in, escalation notifications for anything pending too long, and a weekly team activity digest that surfaces the patterns nobody has time to notice manually.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Build an automated standup bot for our team and a PR approval workflow — collect updates at 9 AM, post a formatted summary, and route PR approvals with escalation if they sit over 24 hours"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">20 minutes every morning pasting standup updates into a channel that scrolls past unread, plus approval requests manually routed between channels with no escalation when they stall</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Async standup bot with a formatted summary posted automatically, PR approval workflow with approve/reject buttons and 24-hour escalation, and a weekly team activity digest — all running without manual effort</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Describe the workflows you want — standup timing, approval triggers, escalation rules — and it builds the automation.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Stop Being the Human Email-to-Slack Relay
      </h2>
      <p>
        Teams that live in Slack still receive their most important information by email — client requests, vendor updates, legal notices — and someone has to bridge that gap manually. That someone reads the inbox, decides what's worth surfacing, summarizes it, and posts it to the right channel. Miss an email during a busy week and the team finds out about something important a week too late, once it's already a problem.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/gmail-slack-summary">Gmail-to-Slack Summary Bot</PlaybookLink>{' '}
        Skill automates that bridge: it monitors Gmail for the messages that matter, summarizes the key points, flags urgent items with priority labels, extracts action items, and posts the result directly to the appropriate Slack channel. The team stays informed without anyone manually forwarding anything.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Set up automatic email-to-Slack summaries for client emails — flag anything urgent, extract action items, and post to #client-updates"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">You're the human bridge between email and Slack — copy-pasting summaries between tools, and the one week you're too busy to check email closely is the week something important slips through</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Bot monitors Gmail for client messages, summarizes key points, flags urgent items with priority labels, extracts action items, and posts to the right Slack channel — no manual forwarding required</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Requires Gmail and Slack access, plus an integration layer (Zapier, Make, or native) to connect them.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: The Same Automation for Teams on Microsoft Teams
      </h2>
      <p>
        Not every organization runs on Slack — a large share of enterprise teams run the identical daily workflow on Microsoft Teams instead, and hit the identical friction: manually posting updates to five channels every morning, copy-pasting meeting summaries into chats, recreating the same recurring meeting agenda every week. Teams has real automation capability through the Graph API, but the documentation is dense enough that most teams never configure it.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/microsoft-teams">Microsoft Teams Integration</PlaybookLink>{' '}
        Skill builds the same category of automation for organizations on that platform: standup bots that post prompts and collect responses automatically, blocker summaries routed to the manager channel, follow-up tasks created directly in Planner, and weekly summaries archived without anyone doing it by hand.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Automate our daily standup workflow in Teams — post the prompt at 9 AM, collect responses, summarize blockers to the manager channel, and create follow-up tasks in Planner"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Manual updates posted to five Teams channels every morning, meeting summaries copy-pasted into chats, and automation capability that's never been configured because the Graph API docs are overwhelming</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Automated standup bot posting prompts and collecting responses, blocker summaries routed to managers, follow-up tasks created in Planner automatically, and weekly summaries archived without manual work</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Built for organizations standardized on Microsoft 365 and Teams rather than Slack.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Consolidate Slack into Your Morning View
      </h2>
      <p>
        Automating individual Slack workflows solves the messaging tax, but there's a related morning problem: even with standups and summaries automated, you're still opening Slack as one of five separate tabs — alongside calendar, email, task manager, and weather — just to get oriented for the day. By the time all five are open and skimmed, the first real block of focus time is already gone.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/daily-morning-briefing">Daily Morning Briefing</PlaybookLink>{' '}
        Skill consolidates that view into one unified briefing: today's meetings with prep notes, VIP emails needing responses, tasks due, the day's weather, and — pulling in the automations above — your Slack standup and channel highlights, all in a single pass instead of five separate ones.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Give me my morning briefing — calendar, VIP emails, tasks due, and anything important from Slack overnight"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">20 minutes opening tabs every morning — calendar, email, Slack, task manager, weather — just to piece together what the day actually looks like, momentum already lost by the time you have the full picture</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">One unified view: meetings today with prep notes, VIP emails needing responses, tasks due, current weather, and Slack highlights — the full picture in about 30 seconds</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 15 minutes. Connects to your calendar, email, and Slack once; the briefing runs on request every morning after that.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Putting the Pieces Together
      </h2>
      <p>
        The natural progression across these four Skills:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Slack-based team</span> — start with Slack Workflow Automation for standups and approvals</li>
        <li><span className="text-foreground font-medium">Teams-based organization</span> — use the Microsoft Teams Integration Skill for the same category of automation</li>
        <li><span className="text-foreground font-medium">Critical info still arriving by email</span> — add the Gmail-to-Slack Summary Bot to close that gap</li>
        <li><span className="text-foreground font-medium">Once the individual automations are running</span> — add the Daily Morning Briefing to pull everything into one view instead of checking each channel separately</li>
      </ul>
      <p>
        None of these require IT approval for a new SaaS subscription or an engineering sprint to build — they're configured directly through Claude, against tools your team is already using.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/slack-workflows">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Slack Workflow Automation</p>
            <p className="text-sm text-muted-foreground">Standup bots, approval flows, and notification routing for Slack</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/gmail-slack-summary">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Gmail-to-Slack Summary Bot</p>
            <p className="text-sm text-muted-foreground">Summarize important emails, flag priority, and post automatically to Slack</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/microsoft-teams">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Microsoft Teams Integration</p>
            <p className="text-sm text-muted-foreground">Standup bots, meeting summaries, and Planner integration for Teams-based orgs</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/daily-morning-briefing">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Daily Morning Briefing</p>
            <p className="text-sm text-muted-foreground">Calendar, email, tasks, and Slack highlights consolidated into one 30-second view</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
