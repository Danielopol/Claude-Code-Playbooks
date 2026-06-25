import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Inbox Zero: Automate Email Triage and Replies with AI | Claude Code Playbooks Blog',
  description: "How to use four Claude Skills to permanently escape email overwhelm — an inbox zero manager that processes every email into action categories with priority scores, a smart triage system that surfaces what needs a response today versus what can wait, an email classifier that sorts bulk mail automatically by type and urgency, and an email drafter that writes context-aware replies in your voice without you writing from scratch.",
  alternates: { canonical: '/blog/claude-skills-inbox-zero' },
  openGraph: {
    title: 'Claude Skills for Inbox Zero: Automate Email Triage and Replies with AI',
    description: "How to use four Claude Skills to permanently escape email overwhelm — an inbox zero manager that processes every email into action categories with priority scores, a smart triage system that surfaces what needs a response today versus what can wait, an email classifier that sorts bulk mail automatically by type and urgency, and an email drafter that writes context-aware replies in your voice without you writing from scratch.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-inbox-zero',
    type: 'article',
    publishedTime: '2026-06-25T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Inbox Zero: Automate Email Triage and Replies with AI',
    description: "Four Claude Skills for email — backlog clearance, smart triage, automatic classification, and AI-drafted replies — so the inbox works for you instead of against you.",
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

export default function ClaudeSkillsInboxZeroPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Inbox Zero: Automate Email Triage and Replies with AI"
      description="How to use four Claude Skills to permanently escape email overwhelm — an inbox zero manager that processes every email into action categories with priority scores, a smart triage system that surfaces what needs a response today versus what can wait, an email classifier that sorts bulk mail automatically by type and urgency, and an email drafter that writes context-aware replies in your voice without you writing from scratch."
      category="guide"
      difficulty="basic"
      readingTime="12 min read"
      createdAt="2026-06-25"
      tags={['claude skills email', 'ai inbox zero', 'ai email triage', 'email automation AI', 'inbox management AI', 'email productivity', 'Claude Code']}
      author="Claude Code Playbooks"
      slug="claude-skills-inbox-zero"
    >
      <p>
        The unread count is the first thing most people see when they open their phone in the morning. For a lot of people, it has stopped being a useful number — it is just a number that is always larger than yesterday. 2,347. Then 2,401. Every time a real attempt is made to clear it, fifty emails get processed before the effort collapses under its own weight. The problem is not laziness. The problem is that a modern inbox is an undifferentiated pile: client urgencies and newsletter editions and automated receipts and LinkedIn notifications and a thread from three months ago that technically needs a reply all exist at the same priority level until a human sorts them.
      </p>
      <p className="mt-4">
        The inbox-as-to-do-list is the trap. When email is used as a task management system — which it is, for most professionals who have not explicitly built another system — the inbox has to be kept visible at all times so nothing important gets missed. That means checking it constantly. That means every low-priority notification interrupts focused work. That means the reply to the sensitive client escalation gets written at the same distracted speed as the unsubscribe to a newsletter.
      </p>
      <p className="mt-4">
        The four Skills below address the email problem at all four pressure points: clearing an existing backlog without burning a full day on it, building an ongoing triage pipeline that sorts incoming mail automatically, classifying what actually needs human attention versus what can be archived, and drafting the replies that take too long to write from scratch. Each works independently. Together they convert the inbox from a source of ambient anxiety into a managed queue.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Why Email Overwhelm Compounds
      </h2>
      <p>
        Email volume has a compounding problem. Every day that the backlog is not processed, it grows. Every day it grows, the prospect of clearing it becomes more daunting. Every day it becomes more daunting, the probability of attempting it decreases. By the time the inbox hits 2,000 unread, most people have made a tacit decision to abandon it — checking only for obviously urgent items, letting the rest accumulate, and living with the background anxiety of the number.
      </p>
      <p className="mt-4">
        The second compounding problem is sorting cost. In an unsorted inbox, reading email requires reading every email. There is no way to know whether the next item is a client escalation or a promotional newsletter until you open it. That friction — the cognitive cost of constant re-prioritization — is what makes processing 500 emails feel like it takes five times as long as processing 100. The work is not reading; the work is sorting while reading.
      </p>
      <p className="mt-4">
        The third problem is drafting friction. Some emails require writing. A reply to a difficult client, a pushback on scope creep, a sensitive performance note, a follow-up after a missed deadline — these emails take 20 minutes not because they contain 20 minutes of information but because the tone must be calibrated carefully and the blank page provides no starting point. That friction is what causes important emails to sit unanswered for days: the reply requires effort that is hard to summon in the middle of a distracted inbox-clearing session.
      </p>
      <p className="mt-4">
        The four Skills below each address one of these compounding problems: backlog clearance, ongoing sorting, classification at scale, and drafting friction.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Inbox Zero Manager — Clear the Backlog Without Burning a Day
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/inbox-zero-manager">Inbox Zero Manager</PlaybookLink> processes an email backlog of any size — 500, 2,000, or more — categorizing every email into urgent, action-required, FYI, and archive buckets, drafting responses in your voice for everything that needs a reply, and flagging bulk-archive candidates so newsletters and automated notifications can be cleared in seconds. Nothing gets sent without your explicit approval.
      </p>
      <p className="mt-4">
        The backlog clearance problem has a specific shape: most people know they need to process old emails, but the activation energy required to start is high because there is no visible end point. Starting means committing to an unknown amount of work. The Inbox Zero Manager changes that by front-loading the categorization — before any reply is written, every email gets sorted. Once the sorting is done, the pile becomes visible: 15 genuinely urgent items, 30 that need a reply, 200 newsletters to bulk-archive, 300 automated notifications to delete. The work is now bounded.
      </p>
      <p className="mt-4">
        The draft-in-your-voice feature is the time compression that makes bulk processing practical. Instead of writing each reply from scratch, the Skill produces a draft calibrated to the context of each email and to the communication style it has learned from the emails you have written. Each draft needs a review, not a rewrite. The review takes 30 seconds. The writing would have taken 10 minutes.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          I have 600 unread emails I need to process. I'm going to paste them in batches. For each batch: categorize each email as URGENT (needs same-day response), ACTION (needs a reply within a week), FYI (read but no reply needed), or ARCHIVE (newsletters, receipts, notifications, automated mail). For the URGENT and ACTION emails: draft a reply in my voice — professional but direct, no filler phrases like "I hope this email finds you well." Flag any that require a decision from me before replying. For the ARCHIVE candidates: list them in a bulk-archive batch I can process in one click. Do not send anything — all drafts are for my review first.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">600 unread. Start processing. Open email 1: newsletter. Open email 2: automated receipt. Open email 3: client question from three weeks ago — now too late to reply without an apology. Fifty emails in, the energy is gone. 550 still unread. Tomorrow the number will be 570.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">600 emails categorized: 12 URGENT, 28 ACTION, 60 FYI, 500 ARCHIVE. 40 reply drafts produced in your voice, ready to review. 500-email bulk-archive batch ready to execute. Total time: 90 minutes to reach inbox zero, including reviewing and sending all 40 replies. Count: 0.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes. Works with Gmail exports, Outlook exports, or pasted email text. Nothing is sent automatically — every draft requires explicit approval before it goes. The bulk-archive batch is the feature that makes large backlogs tractable: 500 low-priority emails disappear in one action instead of fifty.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Smart Email Triage — An Automated Pipeline for the Daily Firehose
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/smart-email-triage">Smart Email Triage</PlaybookLink> Skill builds an automated Gmail classification pipeline with rules for newsletters, receipts, notifications, and action-required emails — automatically labeling and archiving low-priority categories, surfacing a priority inbox that contains only emails needing human response, and generating a daily digest of what was archived so nothing important slips through.
      </p>
      <p className="mt-4">
        The ongoing triage problem is different from the backlog problem. Once the backlog is cleared, the challenge is keeping it clear. The average professional receives 120 emails per day. Of those, perhaps 15–20 require an actual human response. The other 100 are newsletters, automated notifications, receipts, internal announcements, and CC'd threads where no action is required. Manually sorting 100 low-priority emails per day to find 20 that need attention costs 30–45 minutes of daily cognitive overhead.
      </p>
      <p className="mt-4">
        The Smart Email Triage Skill moves that sorting to the system layer. Gmail API integration lets it apply classification rules at the point of arrival — newsletters get labeled and archived before they ever appear in the inbox, receipts go to a receipts folder automatically, CC-only threads get tagged for reference without creating inbox pressure. The priority inbox that remains contains only emails that need a human decision. The daily digest ensures that the automated archiving has not accidentally caught something important. The sorting happens automatically; the reviewing happens only where human judgment is actually required.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Set up a smart email triage pipeline for my Gmail. Rules I want automated: newsletters and marketing → auto-archive with label "newsletters," receipts and order confirmations → label "receipts" and archive, automated notifications (GitHub, Jira, Slack digests) → label "notifications" and archive, anything where I'm CC'd (not TO) → label "FYI" and skip inbox, internal company announcements → label "announcements" and archive. VIP exceptions: any email from [my boss's email] or [key clients] always goes to priority inbox regardless of other rules. Generate a daily digest of everything archived. My priority inbox should show only emails where a human response is required.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">120 emails per day arrive in one pile. First 45 minutes of every morning: manually sorting newsletters, receipts, and Jira notifications to find the 15 emails that actually need a response. Interruptions throughout the day every time a notification email creates false urgency. Inbox is never actually empty.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Priority inbox: 18 emails, all requiring human response. 102 others automatically sorted to labeled folders. Daily digest at 5pm: "Archived today — 23 newsletters, 14 receipts, 41 notifications, 24 announcements. Nothing flagged as likely misclassified." Morning sorting time: zero minutes. Inbox zero maintained daily without effort.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 30 minutes (requires Gmail MCP integration). Works for any volume of incoming email. The VIP exception list is the critical configuration — it ensures that high-value senders always reach the priority inbox regardless of how the email content is classified.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Email Classifier — Sort Any Volume by Type, Priority, and Required Action
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/email-classifier">Email Classifier & Organizer</PlaybookLink> Skill categorizes emails by urgency, required action type, and sender relationship — producing a structured view of any inbox batch that shows exactly which emails need a decision today, which can wait, and which require no action at all.
      </p>
      <p className="mt-4">
        The classification problem at scale: when 500 emails arrive in a week, the manual sorting process requires the same cognitive decision for each one. Is this urgent? Does this need a reply? Is this from a client, a vendor, or an automated system? That micro-decision repeated 500 times is the hidden productivity tax that email imposes. The Email Classifier automates the decision layer — applying consistent rules for urgency and action-type classification across any volume of mail without decision fatigue.
      </p>
      <p className="mt-4">
        The output is a structured view that makes the inbox legible: emails grouped by sender type (client, internal, vendor, newsletter, automated), sorted by urgency within each group, with the required action explicitly stated for each one. A sales rep who gets 300 emails per week can see immediately: 12 prospect emails need replies today, 8 client emails need action this week, 280 can be archived or ignored. The 300-email pile becomes a 20-item action list.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Classify the following 200 emails. For each email, assign: (1) sender type — client, internal team, vendor/partner, prospect, newsletter, or automated, (2) urgency — urgent (same-day), this-week, or no-action, (3) required action — reply, decision, read-only, or archive. Then give me: a summary table sorted by urgency within each sender type, the total count per category, any emails where urgency is unclear and I need to make a judgment call, and a suggested processing order for the 20 highest-priority items.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">200 emails, all at the same visual priority in the inbox. Scroll through looking for client names. Open anything with an urgent-sounding subject line — half of them turn out to be newsletter subject lines written to seem urgent. Spend two hours processing 50 emails while the other 150 wait and anxiety compounds.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">200 emails classified: 8 urgent-client (reply today), 14 this-week-client, 6 urgent-internal, 22 this-week-internal, 150 archive. Suggested processing order starts with the 8 client urgencies. Processing time for the 50 action items: 45 minutes. The 150 archive items: one batch action. Done by 10am.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Works for any email client — no API integration required, just paste or export the email batch. The sender-type grouping is the most useful output for professionals whose inbox mixes client, internal, and automated mail that all arrive with the same visual weight.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Email Drafter — Write the Hard Emails in 30 Seconds Instead of 20 Minutes
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/email-drafter">Professional Email Drafter</PlaybookLink> Skill drafts professional emails for any business scenario — client escalations, scope creep pushback, difficult feedback, follow-ups after missed deadlines — calibrated to the context, the relationship, and the tone that the situation requires. Draft ready in under a minute; review and send in under two.
      </p>
      <p className="mt-4">
        The drafting friction problem: some emails are genuinely hard to write not because the content is complex but because the tone must be precisely calibrated. An email pushing back on scope creep with a major client must be firm enough to hold the boundary without being adversarial enough to damage the relationship. An email delivering disappointing news to a team member must be honest without being demoralizing. A follow-up email after a missed deadline must acknowledge the failure without being excessively apologetic. These calibrations are the reason an email that contains 100 words of actual content takes 20 minutes to write.
      </p>
      <p className="mt-4">
        The Email Drafter takes the context — the situation, the relationship, the outcome you need, and any constraints on tone — and produces a draft that handles the calibration. The draft is not a template with blanks to fill in. It is a complete, context-aware email that can go out after a one-minute review. The 20-minute emails become 2-minute emails. The emails that sat in drafts for three days waiting for the right moment get written and sent today.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Draft an email to a client who is our second-largest account. Context: they have added three features to a fixed-price project that were not in the original scope. We're now 40% over the estimated hours. I need to: flag the scope creep clearly, propose two options (absorb the overrun in exchange for a contract extension, or add a change order for the additional work), and keep the relationship strong — they have a second project starting next quarter. Tone: direct and professional, not apologetic but not adversarial. Do not use filler phrases. I want a clear ask at the end of the email.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Scope creep email: blank draft, 20 minutes of staring, three deleted openings, two versions that sound too aggressive, one version that is too apologetic and does not actually raise the issue clearly. Sent four days late. Client is now confused because the delay made it seem less urgent. The relationship is slightly worse than if it had never been raised.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Draft produced in 45 seconds: acknowledges the features added, quantifies the hours impact, presents two options clearly, proposes a call to align on the path forward, closes with a positive note about the Q4 project. Reviewed, minor edit to the numbers, sent in 2 minutes. Client responds same day. Change order agreed within the week.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Works for any professional email scenario — client communications, internal feedback, vendor negotiations, job-related correspondence. The more context you provide (relationship, desired outcome, tone constraints), the more precise the draft. Most drafts need only light editing before sending.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Email System: Clear, Sort, Classify, Draft
      </h2>
      <p>
        The four Skills address email management at four different moments. The Inbox Zero Manager handles the backlog event — the one-time or periodic clearance of accumulated email that has grown beyond the point where normal processing is possible. The Smart Email Triage handles the ongoing incoming flow — the daily sorting that prevents a new backlog from accumulating. The Email Classifier handles bulk analysis — the classification of any large email batch into a structured action list. The Email Drafter handles the writing friction — the specific emails that take too long to write and therefore sit unanswered.
      </p>
      <p className="mt-4">
        Used in sequence, the workflow for someone starting with an overwhelmed inbox looks like this: the Inbox Zero Manager clears the backlog. The Smart Email Triage is set up to prevent the backlog from returning — sorting incoming mail automatically into priority inbox and labeled archive folders. The Email Classifier handles any batch that accumulates during travel or absence. The Email Drafter handles the replies that would otherwise sit in drafts for days because starting them is too difficult.
      </p>
      <p className="mt-4">
        The output is not just inbox zero — it is email as a managed system rather than an ambient stressor. The unread count that creates background anxiety becomes a managed queue where every item has a known priority and a known next action. The morning that used to start with 45 minutes of sorting starts instead with a 15-minute review of the 15–20 emails that actually need attention. The hard email that used to take 20 minutes to write takes 2. The inbox stops being something to avoid and starts being something to process.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Get the Email Skills
      </h2>
      <p className="mb-6">
        Each Skill is a one-time install. Open it, follow the setup steps, and it is available in Claude every time you face a backlog, need to sort a batch, or need to write an email that requires more than five minutes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/inbox-zero-manager"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Inbox Zero Manager</p>
          <p className="text-sm text-muted-foreground">Backlog clearance at any scale — categorizes every email, drafts replies in your voice, and produces a bulk-archive batch for low-priority mail. Nothing sent without approval. Inbox zero in one session.</p>
        </Link>
        <Link
          href="/playbooks/smart-email-triage"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Smart Email Triage</p>
          <p className="text-sm text-muted-foreground">Automated Gmail classification pipeline — newsletters, receipts, and notifications sorted and archived at arrival, priority inbox surfacing only emails that need human response, daily digest so nothing important slips through.</p>
        </Link>
        <Link
          href="/playbooks/email-classifier"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Email Classifier</p>
          <p className="text-sm text-muted-foreground">Bulk classification by sender type, urgency, and required action — turns 200 undifferentiated emails into a structured table showing exactly what needs attention today, this week, or never.</p>
        </Link>
        <Link
          href="/playbooks/email-drafter"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Email Drafter</p>
          <p className="text-sm text-muted-foreground">Context-aware drafts for any professional email scenario — scope creep, difficult feedback, client escalations — calibrated to tone, relationship, and desired outcome. The 20-minute email in 2 minutes.</p>
        </Link>
      </div>
    </BlogPostLayout>
  );
}
