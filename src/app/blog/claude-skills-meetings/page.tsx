import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Meeting Overload: Turn Notes into Action Items Automatically | Claude Code Playbooks Blog',
  description: "How to use four Claude Skills to stop losing work to meeting overhead — a notes-to-actions converter that extracts every decision and task from raw meeting notes in seconds, a meeting intelligence system that builds a searchable knowledge base from recurring meetings, a meeting insights analyzer that surfaces communication patterns and facilitation quality, and a Gmail and Slack summarizer that catches you up on everything you missed without reading every thread.",
  alternates: { canonical: '/blog/claude-skills-meetings' },
  openGraph: {
    title: 'Claude Skills for Meeting Overload: Turn Notes into Action Items Automatically',
    description: "How to use four Claude Skills to stop losing work to meeting overhead — a notes-to-actions converter that extracts every decision and task from raw meeting notes in seconds, a meeting intelligence system that builds a searchable knowledge base from recurring meetings, a meeting insights analyzer that surfaces communication patterns and facilitation quality, and a Gmail and Slack summarizer that catches you up on everything you missed without reading every thread.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-meetings',
    type: 'article',
    publishedTime: '2026-06-27T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Meeting Overload: Turn Notes into Action Items Automatically',
    description: "Four Claude Skills for meetings — notes-to-actions extraction, accountability tracking, communication pattern analysis, and cross-channel summaries — so meetings produce outcomes, not just more overhead.",
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

export default function ClaudeSkillsMeetingsPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Meeting Overload: Turn Notes into Action Items Automatically"
      description="How to use four Claude Skills to stop losing work to meeting overhead — a notes-to-actions converter that extracts every decision and task from raw meeting notes in seconds, a meeting intelligence system that builds accountability across a meeting history, a meeting insights analyzer that surfaces communication patterns and facilitation quality, and a Gmail and Slack summarizer that catches you up on everything you missed without reading every thread."
      category="guide"
      difficulty="basic"
      readingTime="13 min read"
      createdAt="2026-06-27"
      tags={['claude skills meetings', 'ai meeting notes', 'ai action items', 'meeting automation AI', 'meeting notes AI', 'productivity AI', 'Claude Code']}
      author="Claude Code Playbooks"
      slug="claude-skills-meetings"
    >
      <p>
        Meetings produce two kinds of output: the visible kind — decisions recorded, tasks assigned, notes filed — and the invisible kind — things discussed but not captured, action items verbally agreed to but never written down, decisions made in the room that nobody communicated to the people who were not there. Most of the value from meetings lives in the invisible category, which is why the follow-through failure rate is so high. The meeting happened. The work did not.
      </p>
      <p className="mt-4">
        The pattern is consistent enough to be a cliché: the meeting ends, someone says "I'll send a summary," the summary arrives three days later missing half the action items, two people leave with different understandings of who owns what, and by the following week the momentum from the conversation has dissipated into competing priorities. The decision that felt clear in the room requires another meeting to re-establish two weeks later.
      </p>
      <p className="mt-4">
        The four Skills below address the meeting output problem at four distinct failure points: extracting action items from raw notes before they evaporate, building structured accountability from the intelligence in recurring meeting histories, surfacing the communication patterns that determine whether meetings produce real alignment, and bridging the information that arrives in email to the people who live in Slack. Each addresses a different moment where meeting value gets lost.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Where Meeting Value Goes
      </h2>
      <p>
        A 60-minute meeting generates roughly 60 minutes of conversation, which might contain 5 decisions, 8 action items, 3 unresolved questions, and 40 minutes of discussion that provides context but requires no follow-up. The challenge is that all of it arrives in the same format — spoken words or unstructured notes — with no built-in mechanism for separating what is actionable from what is background.
      </p>
      <p className="mt-4">
        Manual extraction is the standard solution, and it fails for predictable reasons. The person who takes notes during the meeting is also trying to follow the conversation, so the notes are incomplete. The person who processes the notes afterward is working from memory and imperfect text, so the action items are vague ("follow up on the vendor issue") rather than specific ("Alex to send the vendor the updated contract terms by Friday"). The owners are implied but not stated. The due dates are approximate. The Slack message sent afterward summarizes what was discussed rather than what was decided.
      </p>
      <p className="mt-4">
        Two weeks later: "Did anyone ever follow up on the vendor thing?" Nobody is sure. Nobody tracked it. The accountability that seemed implied in the meeting never made it into an actual system.
      </p>
      <p className="mt-4">
        The four Skills below automate the extraction and accountability layer so the work from meetings gets captured consistently — not dependent on someone's note-taking quality or post-meeting energy.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Meeting Notes to Action Items — Extract What Matters in Seconds
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/meeting-notes-to-actions">Meeting Notes to Action Items</PlaybookLink> Skill takes raw meeting transcripts or notes — from Otter, Granola, Zoom, or any recording tool — and extracts every decision, action item, owner, deadline, and unresolved question into a structured format, plus a formatted Slack message ready to post to the team channel.
      </p>
      <p className="mt-4">
        The transcript processing problem: a 90-minute meeting generates 14 pages of transcript. Somewhere in those 14 pages are the three things that actually matter: who agreed to do what, what was decided, and what questions are still open. Finding them manually takes 20–30 minutes of careful reading — nearly as long as the meeting itself. And the manual extraction still produces imprecise results because distinguishing "action item with owner" from "interesting idea raised without commitment" requires judgment that is easy to apply in the moment and hard to reconstruct from text.
      </p>
      <p className="mt-4">
        The Skill applies that judgment systematically. It distinguishes decisions from discussion, action items from suggestions, explicit ownership from implied ownership. Each action item comes out with a named owner, a due date if one was mentioned, and a brief statement of what specifically is to be done. Unresolved questions are flagged separately so they can become agenda items for the next meeting rather than falling through the cracks. The formatted Slack message takes the entire structured output and puts it in a channel-ready format — ready to copy, paste, and send.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Extract action items and decisions from this meeting transcript. [paste transcript] Give me: (1) decisions made — what was agreed, who was in the room when it was agreed, (2) action items — each one with the specific task, the person who owns it, and the deadline if one was mentioned (flag as "no deadline set" if none was stated), (3) unresolved questions — things raised but not concluded, (4) parking lot items — topics deferred to a future meeting, (5) a formatted Slack message I can post to #product with a brief summary and the action item list. Be specific — "follow up on the vendor" is not an action item, "Alex sends updated contract terms to vendor by Friday" is.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">90-minute transcript, 14 pages. Skim for action items: 25 minutes. Result: 5 vague bullets ("follow up on X," "check with Y," "look into Z") with no owners and no deadlines. Slack message: "Good meeting today, here are the notes [link]." Two weeks later: nothing happened. Second meeting scheduled to re-establish the same decisions.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Processing time: 45 seconds. Output: 3 decisions with context, 8 action items each with owner and deadline, 2 unresolved questions flagged for next agenda, Slack message ready to post. Alex knows she owns the vendor contract by Friday. The unresolved pricing question is on next week's agenda. Nothing falls through.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Works with transcripts from any meeting tool — Otter, Granola, Zoom auto-captions, Teams, or hand-typed notes. The specificity rule ("Alex sends X by Friday" not "follow up on X") is the key configuration that makes the output actionable rather than approximate.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Meeting Intelligence System — Accountability Across the Full Meeting History
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/meeting-intelligence-system">Meeting Intelligence System</PlaybookLink> Skill processes meeting notes into structured decisions and owned action items, drafts follow-up emails to attendees, formats entries for project trackers, and builds an ongoing project status view across meeting history — so accountability does not evaporate when the meeting window closes.
      </p>
      <p className="mt-4">
        The "let's circle back" failure mode: four people leave a meeting with different understandings of what was decided and who owns what. The implicit accountability that seemed clear in the room — "we agreed Alex would handle the vendor" — never gets documented. Alex thinks she is handling it. The PM thinks they both are. The client thinks neither is. Two weeks later the vendor sends a follow-up to three different people asking why nothing has happened.
      </p>
      <p className="mt-4">
        The Meeting Intelligence System makes the implicit explicit. After each meeting, it produces a structured output: the decisions made (with enough context that someone who was not in the room understands what was decided and why), the action items with named owners and deadlines, a draft follow-up email to all attendees that summarizes decisions and confirms ownership, and formatted entries ready to paste into whatever project tracker the team uses. Over time, as meetings accumulate, it builds a queryable project status view: what has been decided across all meetings, what action items are open, what is overdue, and what is blocked.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Process today's product planning meeting notes. [paste notes] Produce: (1) decisions made — stated clearly enough that someone not in the meeting understands the decision and its rationale, (2) action items with owner, deadline, and a one-sentence description of the specific deliverable, (3) a draft follow-up email to attendees confirming decisions and ownership — professional, concise, no padding, (4) formatted action items ready to paste into Linear (format: title, owner, due date, description), (5) any items that need a decision before they can move forward — flag these as blockers. Add to the ongoing project log.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Meeting ends. Someone says "I'll send a summary." Summary arrives Thursday, two days after the meeting. Three action items, none with owners. No follow-up email. Action items not in Linear. By the following Monday the thread is buried and nobody is sure what was decided on the pricing question. Another meeting is booked.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Meeting ends. Processing: 60 seconds. Follow-up email sent within 5 minutes: 3 decisions confirmed, 6 action items with owners and deadlines. 6 Linear tickets created. Blocker flagged: pricing decision needs CFO sign-off before the Q3 plan can be finalized — that email is drafted too. Nothing ambiguous. Nobody circles back.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes. Works with any messy notes — bullet points, stream-of-consciousness, partial sentences. The project log that builds over time is the feature that makes recurring meetings useful: decisions accumulate into a queryable history instead of disappearing into archived email threads.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Meeting Insights Analyzer — Data on How Your Meetings Actually Run
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/meeting-insights-analyzer">Meeting Insights Analyzer</PlaybookLink> Skill analyzes meeting transcripts for communication patterns, behavioral tendencies, and facilitation effectiveness — producing talk-time distribution, interruption frequency, question-to-statement ratios, decision-making clarity scores, and timestamped feedback on specific facilitation moments.
      </p>
      <p className="mt-4">
        The "productive feeling" problem: a meeting can feel productive — lively discussion, lots of ideas, everyone engaged — while producing no real decisions and leaving two people with concerns they never voiced. Conversely, a meeting can feel awkward and stilted while actually producing clear commitments and genuine alignment. The feeling of a meeting is a poor proxy for its effectiveness, but in the absence of data, feeling is all most managers have to work with.
      </p>
      <p className="mt-4">
        The Insights Analyzer produces the data layer. Who spoke how much — not as a judgment but as a fact, because a meeting where one person speaks 70% of the time and two people say nothing is structurally different from one where speaking time is distributed. How often interruptions occurred and who was interrupted most. How many questions were asked versus statements made — a pattern that often distinguishes facilitated discussion from monologue. How clearly decisions were stated when they were made — whether the decision was explicit ("we are going with option A") or implicit ("that sounds good"). Timestamped examples from the actual transcript, not generalizations.
      </p>
      <p className="mt-4">
        For managers, this turns meeting improvement from "let's try to be more inclusive" into "Jamie spoke 8% of the time in three consecutive meetings despite being the technical lead whose input is most needed — here are the specific moments where she started to contribute and was talked over." That is a coaching conversation that can be had. The vague version cannot.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Analyze this team meeting transcript for communication patterns. [paste transcript] Give me: (1) talk-time distribution — percentage of speaking time per attendee, (2) interruption patterns — who interrupted whom, how many times, with timestamps, (3) questions vs statements — ratio per person, who asked clarifying questions vs who made declarations, (4) decision clarity — for each decision made, was it stated explicitly or left implicit? Rate each 1–5 for clarity, (5) facilitation moments — 3 specific timestamps where the meeting could have gone better with different facilitation, with a note on what I could have done differently. Be specific and use transcript timestamps.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Weekly team sync: "feels productive," decisions "seem clear," team "seems engaged." Retrospective reveals Jamie has been misaligned on the roadmap for six weeks — she thought the decision went a different way. Nobody noticed she barely spoke in any of the syncs where the relevant decisions were made. Six weeks of drift uncovered too late.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Transcript analysis: Jamie spoke 6% of total time across 3 meetings. Interrupted twice at 14:22 and 31:07 — both times when raising technical concerns. Decision clarity: the Q3 scope decision rated 2/5 — stated as "let's go with the lighter version" with no explicit confirmation from Jamie. Coaching plan: direct check-in, structured round-robin for technical decisions. Misalignment caught in week 2, not week 6.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Works best with transcripts that have speaker labels and timestamps — Zoom, Google Meet, or Teams auto-captions provide both. Most useful run consistently across several meetings to identify patterns rather than one-off anomalies.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Gmail-to-Slack Summary — Bridge the Information Gap Between Channels
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/gmail-slack-summary">Gmail-to-Slack Summary Bot</PlaybookLink> Skill monitors Gmail for emails matching defined criteria — client communications, vendor updates, priority senders — summarizes the key points, flags urgent items with priority labels, extracts action items, and posts to the appropriate Slack channel, so the team that lives in Slack does not miss what arrived in email.
      </p>
      <p className="mt-4">
        The human bridge problem: most professional teams communicate primarily in Slack, but important external information — client requests, vendor updates, legal notices, partner communications — arrives by email. Someone on the team has to serve as the relay, reading email and manually summarizing it into the Slack channel where the relevant people will see it. That someone is often the manager, the team lead, or whoever is most senior and therefore has the least time for manual copy-paste work.
      </p>
      <p className="mt-4">
        The cost of being the human bridge is not just time — it is reliability. The relay happens when the person has bandwidth, which means it does not happen consistently. A critical client email arrives Friday afternoon, the person who normally relays it is in back-to-back meetings, and the team finds out Monday morning that something time-sensitive has been sitting in email since Friday. The team's response time to the client is recorded as three days. The actual issue could have been resolved the same day if the information had reached the people who handle it.
      </p>
      <p className="mt-4">
        The Gmail-to-Slack Skill moves the relay from manual to automatic. It monitors Gmail for messages matching defined criteria — emails from specific senders, with specific keywords, above a defined priority threshold — summarizes each one into a structured format (two-sentence summary, key facts, action required if any, urgency flag), and posts to the Slack channel designated for that type of communication. No human relay required. Client emails reach the account team. Vendor updates reach the operations channel. Legal notices reach the compliance team. The right people see the right information the moment it arrives.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Set up a Gmail-to-Slack summary bot. Rules: (1) emails from any of our 10 key clients → summarize and post to #client-updates with priority flag (URGENT if subject contains "urgent," "asap," "critical," or "deadline"), (2) emails from vendors with invoices or renewal notices → post to #ops-finance, (3) any email flagged as high-importance by sender → post to #leadership with full summary. For each post include: sender and subject, 2-sentence summary of the key point, any action item explicitly requested, urgency level, and the time the original email arrived. Do not relay newsletters, automated notifications, or internal emails — only external communications requiring awareness or action.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Client email arrives Friday 3pm. Team lead is in meetings. Slack relay happens Monday 9am when they catch up on email. Client has been waiting 66 hours. They sent a follow-up Saturday. Team lead is now managing a frustrated client while also trying to catch up. Response time logged: 66 hours. Actual issue resolution time: 2 hours once the right person knew about it.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Client email arrives Friday 3pm. #client-updates posts at 3:01pm: "URGENT — Acme Corp (Sarah Chen): Requesting contract amendment before Monday board meeting. Action: review amendment language and confirm by EOD Friday. Arrived: 3:00pm." Account manager sees it at 3:15pm, responds at 3:45pm. Issue resolved before the weekend. Client response time: 45 minutes.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Requires Gmail integration (Gmail MCP or Zapier/Make). The priority filter rules are the critical configuration — set them tightly to ensure only genuinely important external emails get relayed, so the Slack channel stays signal rather than noise.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Meeting System: Capture, Accountability, Improvement, Dissemination
      </h2>
      <p>
        The four Skills address meeting value at four points in the lifecycle. Meeting Notes to Actions handles the immediate capture problem — getting the decisions and action items out of raw notes before they evaporate, in a format specific enough to be tracked. The Meeting Intelligence System handles the ongoing accountability problem — building a structured record of decisions and owned tasks across meeting history, with follow-up emails and project tracker entries that make accountability explicit. The Meeting Insights Analyzer handles the meeting quality problem — producing the data that makes facilitation improvement possible rather than leaving it to intuition. Gmail-to-Slack handles the information dissemination problem — ensuring that communications arriving in email reach the people in Slack without requiring a human relay.
      </p>
      <p className="mt-4">
        Together with the Email and Calendar Skills from earlier in this cluster, the Meeting Skills complete the communication and time management layer. Email gets triaged and replied to. The calendar gets protected and planned. Meetings produce structured output, build accountability over time, improve through data, and disseminate information across channels automatically. The overhead that surrounds professional communication — the manual relay work, the post-meeting extraction work, the communication pattern guesswork — moves to the system layer, leaving the human judgment for the things that actually require it.
      </p>
      <p className="mt-4">
        The specific failure the Skills target is not meeting quantity — reducing meetings requires organizational decisions that Skills cannot make. The failure they target is meeting yield: the ratio of value produced to time invested. A 60-minute meeting that produces 8 clearly owned action items, a shared decision record, and a follow-up email that reaches all stakeholders in 5 minutes has a higher yield than a 60-minute meeting that produces vague notes, implied ownership, and a Slack message that summarizes what was discussed rather than what was decided. The Skills move the yield upward without changing the meeting count.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Get the Meeting Skills
      </h2>
      <p className="mb-6">
        Each Skill is a one-time install. Open it, configure it to your meeting cadence and tools, and it is available every time a transcript needs processing, a follow-up needs sending, or a client email needs relaying.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/meeting-notes-to-actions"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Meeting Notes to Action Items</p>
          <p className="text-sm text-muted-foreground">Raw transcript in, structured output in 45 seconds — decisions, owned action items with deadlines, unresolved questions flagged, and a Slack message ready to post. Specific enough to track, not vague enough to ignore.</p>
        </Link>
        <Link
          href="/playbooks/meeting-intelligence-system"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Meeting Intelligence System</p>
          <p className="text-sm text-muted-foreground">Ongoing accountability across meeting history — decisions recorded with context, action items tracked with owners, follow-up emails drafted, project tracker entries formatted, and a queryable log of what has been decided and what is still open.</p>
        </Link>
        <Link
          href="/playbooks/meeting-insights-analyzer"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Meeting Insights Analyzer</p>
          <p className="text-sm text-muted-foreground">Talk-time distribution, interruption patterns, decision clarity scores, and timestamped facilitation feedback — the data layer that makes meeting improvement specific and coachable instead of vague and aspirational.</p>
        </Link>
        <Link
          href="/playbooks/gmail-slack-summary"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Gmail-to-Slack Summary Bot</p>
          <p className="text-sm text-muted-foreground">Automated relay from Gmail to Slack — client emails, vendor updates, and priority communications summarized and posted to the right channel the moment they arrive. No more human bridge. No more 66-hour response times on Friday emails.</p>
        </Link>
      </div>
    </BlogPostLayout>
  );
}
