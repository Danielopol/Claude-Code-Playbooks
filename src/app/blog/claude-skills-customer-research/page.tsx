import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Customer Research: Mine Feedback for Product Gold | Claude Code Playbooks Blog',
  description: "Four Claude Skills that turn scattered customer feedback into product decisions — confidence-scored single-question research, call pattern synthesis, cross-channel voice-of-customer aggregation, and churn risk scoring with intervention playbooks.",
  alternates: { canonical: '/blog/claude-skills-customer-research' },
  openGraph: {
    title: 'Claude Skills for Customer Research: Mine Feedback for Product Gold',
    description: "Four Claude Skills that turn scattered customer feedback into product decisions — confidence-scored single-question research, call pattern synthesis, cross-channel voice-of-customer aggregation, and churn risk scoring with intervention playbooks.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-customer-research',
    type: 'article',
    publishedTime: '2026-09-08T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Customer Research: Mine Feedback for Product Gold',
    description: "Four Claude Skills that turn scattered customer feedback into product decisions — confidence-scored single-question research, call pattern synthesis, cross-channel voice-of-customer aggregation, and churn risk scoring with intervention playbooks.",
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

export default function ClaudeSkillsCustomerResearchPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Customer Research: Mine Feedback for Product Gold"
      description="Four Claude Skills that turn scattered customer feedback into product decisions — confidence-scored single-question research, call pattern synthesis, cross-channel voice-of-customer aggregation, and churn risk scoring with intervention playbooks."
      category="guide"
      difficulty="basic"
      readingTime="13 min read"
      createdAt="2026-09-08"
      tags={['claude skills customer research', 'ai feedback analysis', 'ai voice of customer', 'customer feedback synthesis', 'churn risk scoring', 'nps analysis ai', 'product feedback ai', 'customer call analysis']}
      author="Claude Code Playbooks"
      slug="claude-skills-customer-research"
    >
      <p>
        Customer feedback exists in more places than any one person can realistically track: NPS surveys, support tickets, sales call notes, G2 reviews, Slack messages from the CS team, individual customer calls. Each piece on its own is an anecdote — useful for whoever happened to read it, forgettable to everyone else. Put enough of them together and they reveal the handful of things customers actually care about, but nobody has time to read all of it and connect the dots manually, so most of that signal just evaporates.
      </p>
      <p>
        These four Claude Skills work at different scales of that problem — from answering one specific customer question with real evidence, to synthesizing a batch of calls, to aggregating every feedback channel into a coherent picture, to turning that picture into retention action before customers actually leave.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Answer One Customer Question With Real Evidence
      </h2>
      <p>
        A customer asks something specific and technical, and answering it well means searching across docs, CRM history, past tickets, and possibly the web — work that takes a support agent real time to do thoroughly, and that gets rushed when the queue is long. The result is an answer sent with maybe sixty percent confidence, multiplied across dozens of tickets a day.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/customer-research-assistant">Customer Research Assistant</PlaybookLink>{' '}
        Skill runs that investigation systematically: searching across internal docs, CRM, support tickets, and web resources, then synthesizing the findings into a structured brief with confidence scoring and recommended next steps — so responses are accurate and well-sourced instead of a best guess made under time pressure.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Research why this customer's integration keeps failing — check our docs, their CRM history, and past tickets"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A complex customer question, 30 minutes spent searching docs, CRM notes, and past tickets, and an answer sent with maybe 60% confidence — multiplied across 50 tickets a day</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A multi-source investigation across docs, CRM history, past tickets, and web resources with confidence-scored findings, root cause analysis, and recommended next steps</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Best for high-stakes or technically complex individual questions, not routine tickets.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Find the Patterns Across a Batch of Customer Calls
      </h2>
      <p>
        Twenty customer calls in a month produce real signal, but that signal is trapped across twenty separate transcripts nobody has time to hold in memory simultaneously. The pattern that three different customers independently raised, the assumption that got quietly invalidated, the feature request that's really the same underlying need said five different ways — all real, all buried.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/customer-call-synthesis">Customer Call Synthesis</PlaybookLink>{' '}
        Skill compiles a batch of call transcripts into a cross-call pattern analysis: validated assumptions, invalidated hypotheses, and recurring feature requests ranked by how often they actually came up, distilled into a research summary ready for a product review.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Synthesize these 20 customer call transcripts from this month — what did we validate, what did we invalidate, and what feature requests came up most?"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">20 customer calls this month, insights trapped in individual transcripts nobody has time to re-read side by side, and a strong sense the patterns are in there somewhere</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Cross-call pattern analysis, top 5 validated assumptions, 3 invalidated hypotheses, recurring feature requests ranked by frequency, and a one-page research summary ready for the product review</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Run this monthly or after any significant batch of customer conversations.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Aggregate Every Channel Into One Coherent Picture
      </h2>
      <p>
        Calls are only one channel. The fuller picture also includes NPS surveys, support tickets, G2 reviews, and Slack messages from the CS team — each one a legitimate source of voice-of-customer signal, each one usually analyzed in isolation by whichever team happens to own that channel. The three things customers actually care about most are visible only when all of these get read together, and almost nobody has the bandwidth to do that reading manually across every channel every quarter.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/recipe-customer-feedback-synthesis">Customer Feedback Synthesizer</PlaybookLink>{' '}
        Skill aggregates feedback across every channel at once: a thematic analysis revealing the top recurring themes, a sentiment breakdown by channel and customer segment, specific feature requests ranked by frequency, NPS driver analysis, and a product recommendations memo with supporting quotes attached to each finding.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Synthesize all customer feedback from Q1 — NPS surveys, support tickets, reviews, and sales call notes together"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Feedback in NPS surveys, support tickets, G2 reviews, sales call notes, and Slack messages — each channel read in isolation by whichever team owns it, with nobody connecting the dots across all of them</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Thematic analysis revealing 5 top themes, sentiment breakdown by channel and segment, 12 feature requests ranked by frequency, NPS driver analysis, and a product recommendations memo with supporting quotes</p>
        </div>
      </div>

      <p>
        This is the Skill to reach for when the goal is a genuine voice-of-customer program rather than a single-channel read — the cross-channel view is what surfaces themes that would otherwise look like noise inside any one channel alone.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Run it quarterly, or whenever a roadmap planning cycle needs data-driven input rather than internal opinion.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Turn Signal Into Retention Action Before It's Too Late
      </h2>
      <p>
        Knowing customers are unhappy and knowing what to do about it are two different problems, and most teams only act on the first once a customer has already churned — a reactive win-back campaign sent after the relationship is effectively over. The behavioral signals that predict churn are usually visible well before that point: declining email engagement, dropping purchase frequency, changed login patterns, escalating support tickets.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/churn-risk">Churn Risk</PlaybookLink>{' '}
        Skill scores customer segments on exactly those behavioral signals, categorizes them into risk tiers, and produces intervention playbooks for each tier — specific actions, timing windows, channel recommendations, and messaging calibrated to both the risk level and the customer's value, aimed at intervening while the relationship is still recoverable rather than after it's gone.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Assess churn risk across our customer segments using engagement, purchase frequency, and support ticket signals, and give me intervention playbooks for the at-risk tiers"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Reactive win-back campaigns sent after customers have already churned, with no early signal captured while the relationship was still recoverable</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Segments scored into risk tiers using behavioral signals, and actionable intervention playbooks per tier with specific actions, timing windows, channel recommendations, and messaging calibrated to risk and customer value</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 15 minutes. This is the action layer that closes the loop on everything the other three Skills surface.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        From Scattered Signal to a Product Decision
      </h2>
      <p>
        These four Skills operate at different scales of the same underlying problem:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Customer Research Assistant</span> — answer one specific, high-stakes customer question with real evidence</li>
        <li><span className="text-foreground font-medium">Customer Call Synthesis</span> — find the patterns across a batch of recent calls</li>
        <li><span className="text-foreground font-medium">Customer Feedback Synthesizer</span> — aggregate every channel into a true voice-of-customer picture</li>
        <li><span className="text-foreground font-medium">Churn Risk</span> — act on what the other three surface, before a relationship is unrecoverable</li>
      </ul>
      <p>
        Product, marketing, and customer success all draw from the same underlying feedback — these Skills just make it possible to actually use all of it, instead of whichever slice happened to land in front of the person with time to read it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/customer-research-assistant">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Customer Research Assistant</p>
            <p className="text-sm text-muted-foreground">Multi-source, confidence-scored research for a single customer question</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/customer-call-synthesis">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Customer Call Synthesis</p>
            <p className="text-sm text-muted-foreground">Cross-call pattern analysis with validated assumptions and ranked feature requests</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/recipe-customer-feedback-synthesis">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Customer Feedback Synthesizer</p>
            <p className="text-sm text-muted-foreground">Cross-channel themes, sentiment, and a product recommendations memo with quotes</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/churn-risk">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Churn Risk</p>
            <p className="text-sm text-muted-foreground">Behavioral risk scoring with specific, tier-calibrated intervention playbooks</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
