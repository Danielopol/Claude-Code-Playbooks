import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Agencies: Automate Client Onboarding and Reporting | Claude Code Playbooks Blog',
  description: "How agencies use four Claude Skills to systematize the processes that eat margin — a brand-aware client onboarding workflow that produces the kickoff agenda, discovery questionnaire, and 30/60/90-day plan in one session; white-labeled performance reports with KPIs and strategic recommendations; proposals built from pitch deck through SOW; and QBR presentations that transform a quarter of data into a client-ready strategy conversation.",
  alternates: { canonical: '/blog/claude-skills-agencies' },
  openGraph: {
    title: 'Claude Skills for Agencies: Automate Client Onboarding and Reporting',
    description: "How agencies use four Claude Skills to systematize the processes that eat margin — a brand-aware client onboarding workflow that produces the kickoff agenda, discovery questionnaire, and 30/60/90-day plan in one session; white-labeled performance reports with KPIs and strategic recommendations; proposals built from pitch deck through SOW; and QBR presentations that transform a quarter of data into a client-ready strategy conversation.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-agencies',
    type: 'article',
    publishedTime: '2026-06-17T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Agencies: Automate Client Onboarding and Reporting',
    description: "Four Claude Skills for agencies — client onboarding, performance reports, proposals, and QBRs — brand-aware and repeatable so account teams spend time on strategy, not documents.",
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

export default function ClaudeSkillsAgenciesPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Agencies: Automate Client Onboarding and Reporting"
      description="How agencies use four Claude Skills to systematize the processes that eat margin — a brand-aware client onboarding workflow that produces the kickoff agenda, discovery questionnaire, and 30/60/90-day plan in one session; white-labeled performance reports with KPIs and strategic recommendations; proposals built from pitch deck through SOW; and QBR presentations that transform a quarter of data into a client-ready strategy conversation."
      category="guide"
      difficulty="intermediate"
      readingTime="13 min read"
      createdAt="2026-06-17"
      tags={['claude skills agency', 'ai agency automation', 'automate client reporting ai', 'agency AI', 'client onboarding AI', 'agency reporting AI', 'Claude Code']}
      author="Claude Code Playbooks"
      slug="claude-skills-agencies"
    >
      <p>
        Agencies sell creative thinking and strategic execution — but the work that actually determines whether they are profitable is the operational work that surrounds it. Client onboarding sets the tone for every engagement that follows. Monthly reports either build or erode client confidence. Proposals win or lose business on how well they communicate value. QBRs retain or lose clients based on whether the agency can articulate what a quarter of work actually produced.
      </p>
      <p className="mt-4">
        Every one of these processes is high-stakes and recurring. Every one of them is also, in most agencies, improvised. Each new client onboarding is built from a different template, or no template at all. The monthly report goes out two days late because the account manager built it from scratch in a spreadsheet. The proposal is a modified version of the last proposal, with the client name updated and the scope section adjusted. The QBR deck is assembled the night before from data pulled from four different platforms.
      </p>
      <p className="mt-4">
        The agencies that scale are the ones that systematize these processes. Not because systematization is exciting — it is not — but because when onboarding, reporting, proposals, and QBRs run on a repeatable process, account managers spend their time on strategy and relationships rather than document assembly. That is the margin difference between a boutique that tops out at eight clients and an agency that can run twenty without adding headcount.
      </p>
      <p className="mt-4">
        Claude Skills builds the system. A Skill is a persistent Claude configuration that encodes your agency's brand context, process steps, and output format — installed once and invoked on every engagement. The four Skills below cover the full client lifecycle, from the first kickoff agenda to the quarterly strategy review.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Agency Margin Problem
      </h2>
      <p>
        Agency profitability is deceptively simple: revenue per client minus the hours spent on that client. The hours that clients pay for — strategy, creative, media buying, campaign execution — are the hours that feel like the job. The hours that nobody pays for — onboarding the client, writing the monthly report, building the renewal proposal, preparing the QBR deck — are the hours that eat the margin.
      </p>
      <p className="mt-4">
        At a 10-client agency, an account manager might spend four to six hours per month per client on reporting alone — pulling data, formatting it, writing the narrative, revising after the account director review, and emailing it to the client. That is 40 to 60 hours a month on reports. At 15 clients, the math breaks: either the reports get worse (rushed, less insight, later), or someone gets hired to produce them, compressing the margin in a different direction.
      </p>
      <p className="mt-4">
        The Skills below do not eliminate account management — they eliminate the document-assembly layer of it. The account manager still decides what story to tell the client, which metrics matter, what strategic direction to recommend. What they no longer do is build the document from scratch every month or improvise the onboarding every time a new client signs.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Client Onboarding — A First Engagement That Sets the Standard
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/client-onboarding">Client Onboarding Skill</PlaybookLink> produces the complete onboarding package: kickoff meeting agenda, discovery questionnaire, account setup checklist, and a 30/60/90-day plan — all in the agency's brand voice, adapted to the specific client and engagement scope.
      </p>
      <p className="mt-4">
        The first thirty days of a client engagement determine whether the relationship becomes a long-term retainer or a churned account. Clients who experience a structured, professional onboarding — where the kickoff agenda reflects their business goals, the discovery questionnaire surfaces the right information efficiently, and the 30/60/90-day plan gives them a clear picture of what to expect — start the engagement with confidence. Clients who experience an improvised onboarding — where nobody told them who their day-to-day contact is, or what the approval process for creative looks like — start the engagement with doubt.
      </p>
      <p className="mt-4">
        The Skill builds every onboarding document from the agency's brand context and the specific client's engagement scope. The kickoff agenda is not a generic template — it reflects the client's industry, the engagement type (paid media, SEO, content, full-service), and the stakeholders who will be in the room. The discovery questionnaire asks the questions that actually matter for this type of work. The 30/60/90-day plan commits to specific milestones the client can hold the agency accountable to.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Run client onboarding for our new client, Harrington Legal Group. Engagement: full-service digital marketing — paid search, SEO, and monthly content. Client context: mid-size personal injury law firm, 12 attorneys, Chicago market, previously with a generalist agency they left because of poor reporting and slow response times. Our agency brand: data-driven, proactive communication, dedicated account team. Produce a kickoff agenda for a 60-minute Zoom on July 8th, a discovery questionnaire, an account setup checklist covering all our tools and access requirements, and a 30/60/90-day plan with specific deliverables and success metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Account manager adapts the last client's kickoff deck in two hours the morning of the call. The discovery questionnaire is a generic Google Form. Nobody sent the access request list until day three. The 30/60/90-day plan is a verbal commitment in the kickoff, never documented. Client's first impression: this agency operates the same way the last one did.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Kickoff agenda sent three days before the call, scoped to legal industry and paid search/SEO/content. Discovery questionnaire adapted to the client's specific situation. Access checklist sent the day the contract was signed. 30/60/90-day plan with committed deliverables and metrics. Client's first impression: this agency is different.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 15 minutes. Works for any engagement type — paid media, SEO, content, PR, full-service. The brand context you load into the Skill carries across every onboarding without reentry.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Client Report — White-Labeled Performance Reports That Build Confidence
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/client-report">Client Report Skill</PlaybookLink> generates white-labeled performance reports with KPIs, trend analysis, strategic recommendations, and narrative context — in the agency's brand voice, formatted for client delivery.
      </p>
      <p className="mt-4">
        The monthly report is the most visible recurring deliverable an agency produces. It is also the deliverable most likely to be built by copying last month's report, updating the numbers, and sending it without a meaningful narrative layer. The result is a report that shows what happened but does not tell the client what it means — leaving the client to draw their own conclusions about whether the agency is performing.
      </p>
      <p className="mt-4">
        A report that builds client confidence does three things: it shows the metrics that matter (not every metric), it provides context for the trends (why impressions dropped 12% and why that is not a problem yet, or why it is), and it makes a forward recommendation that demonstrates the agency is thinking ahead rather than just reporting backward. The Skill produces all three, in the agency's brand voice, formatted for the specific client's reporting preferences.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Generate the June performance report for Harrington Legal Group. KPIs: paid search spend $18,400, 847 clicks, 62 conversions (phone calls + form fills) at $296 CPL vs. $340 CPL target — beating target by 13%. Organic sessions up 22% month-over-month, 4 new first-page rankings for personal injury keywords. Content: 3 blog posts published, average 4.2 minutes time-on-page. Context: July is typically slow for personal injury — we are recommending a shift to brand awareness campaigns and SEO content push during the slow period to build Q4 pipeline. Format as a white-labeled report in our agency brand voice: direct, data-first, with one strategic recommendation per channel.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Report built in three hours from a spreadsheet, sent four days late. The narrative section says "performance was strong this month." The client asks what the agency plans to do about July — the account manager sends a follow-up email two days later because nobody thought about it before the report went out.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">White-labeled report with KPI summary, trend narrative (CPL beating target by 13%, why the organic growth is compounding), channel-level strategic recommendations for July's slow season, and a forward-looking Q4 pipeline strategy. Report out the day after month-end. Client responds: "This is exactly what we needed."</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 15 minutes. Works for any channel mix — paid search, paid social, SEO, content, email. The brand context carries forward so each report sounds like the agency, not a template.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Client Proposal — Pitch Deck Through SOW in One Session
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/client-proposal">Client Proposal Skill</PlaybookLink> drafts the complete proposal package: capabilities presentation, pitch deck, scope of work, and service level agreement — in the agency's brand voice, tailored to the prospect's stated needs and context.
      </p>
      <p className="mt-4">
        The proposal problem in agencies is the same as in consulting: the proposal that wins is the one that makes the prospect feel heard. The proposal that copies-and-pastes from the last client's SOW with the name updated is the proposal that loses to a competitor who took the extra hour to customize it. The prospect can tell — not always consciously, but the feeling that the agency understood their specific situation comes through in whether the scope of work maps to what they asked for, whether the timeline reflects their stated deadline, whether the proposal addresses the concern they mentioned in the discovery call.
      </p>
      <p className="mt-4">
        The Skill builds the proposal from the prospect's context rather than from a template. It adapts the capabilities presentation to lead with what matters to this prospect, structures the scope of work around the specific deliverables they described, and includes the SLA terms appropriate to the engagement size and type. The result is a proposal that took one session to produce but reads like it took a week.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Draft a client proposal for Meridian Orthodontics. Context: 6-location orthodontic group in the Phoenix metro, looking to grow new patient volume by 30% in 12 months. Current situation: no paid advertising, website built in 2021, no SEO, active Instagram but no strategy. They mentioned their previous agency "just ran ads" without any strategy or reporting. Budget: $8,000–$12,000/month. Our recommended scope: paid search (Google and Meta), local SEO for all 6 locations, and monthly reporting. Include capabilities presentation emphasizing our healthcare marketing experience, full SOW with deliverables and timeline, pricing options at $9,000 and $11,500/month, and SLA terms.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Modified version of the last healthcare client's SOW. The previous agency objection is not addressed. The capabilities deck leads with services, not with the prospect's problem. Pricing is a single option. Meridian signs with the competitor whose proposal mentioned orthodontics specifically and addressed the "just ran ads" complaint directly.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Capabilities deck leads with local healthcare patient acquisition experience. SOW maps to the 6-location structure with location-level SEO deliverables. Previous agency objection addressed explicitly in the strategy section. Two pricing tiers at $9,000 and $11,500 with a clear scope difference. Meridian signs within a week.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 15 minutes. Works for new business proposals, expansion proposals for existing clients, and competitive rebids. The more specific the prospect context, the more the proposal differentiates.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: QBR Plan — Turn a Quarter of Data into a Retention Conversation
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/qbr-plan">QBR Plan Skill</PlaybookLink> builds the complete quarterly business review: performance summary across all channels, trend analysis, strategic recommendations for the next quarter, and a forward-looking agenda that positions the agency as a strategic partner rather than a vendor reporting on past activity.
      </p>
      <p className="mt-4">
        The QBR is the highest-stakes recurring deliverable in an agency relationship. It is the meeting where clients decide whether the agency is earning its retainer — and the difference between a client who renews and a client who goes to review is almost always whether the QBR made them feel like the agency was thinking about their business as a whole, or just reporting on the deliverables they were contracted to produce.
      </p>
      <p className="mt-4">
        A QBR that retains clients does not start with a quarter of metrics. It starts with the client's business context — what they are trying to accomplish, what changed in their market in the last 90 days, what the competitive landscape looks like — and then shows how the agency's work connected to those goals. The metrics are evidence for the narrative, not the narrative itself. The forward-looking strategy section is what earns the renewal: a clear recommendation for Q3 that demonstrates the agency has been thinking, not just executing.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Build a QBR plan for our Q2 review with Harrington Legal Group. Business context: they hit their Q2 new case goal (38 cases vs. 35 target), a competitor firm (Kellerman & Associates) launched aggressive Google Ads in May and is now bidding on our best-performing keywords. Q2 performance: paid search CPL improved 18% quarter-over-quarter, organic traffic up 41% since January, 4 blog posts ranked on page one. Our Q3 recommendation: maintain paid search with a defensive bidding strategy on branded terms, accelerate the SEO content push to build organic moat before the competitor's domain authority catches up, and test paid social for a younger demographic segment they have not penetrated. Format as a 45-minute QBR agenda with talking points for each section and a one-page executive summary for the CMO who joins only for the first 10 minutes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">QBR deck assembled the night before from four platform dashboards. Forty slides of screenshots. The strategy section is two bullets: "continue what's working" and "explore new opportunities." The CMO asks what the agency plans to do about the new competitor — nobody had a prepared answer. Client puts the account into review.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">45-minute agenda with Q2 performance narrative tied to the client's business goals, competitor context addressed proactively with a defensive paid search strategy, Q3 forward plan with rationale for each recommendation, and a one-page CMO summary ready before the call. Client extends the retainer for two more quarters on the spot.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 15 minutes. Works for quarterly reviews, annual reviews, and mid-year strategic check-ins. The forward-looking strategy section is what clients remember — the metrics are table stakes.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Agency System: Full Client Lifecycle on Process
      </h2>
      <p>
        The four Skills cover the complete client lifecycle. A prospect signs: the Client Proposal Skill built the engagement that won them. The contract is countersigned: the Client Onboarding Skill produces the kickoff package before the ink is dry. Month one closes: the Client Report Skill generates the first performance report the day after month-end. Quarter one closes: the QBR Plan Skill builds the presentation that turns ninety days of data into a strategic conversation about quarter two.
      </p>
      <p className="mt-4">
        What makes this a system rather than four separate tools is the brand context that runs through all of them. Each Skill is configured with the agency's brand voice, positioning, and client communication style. A report generated by the Client Report Skill sounds like the agency. A proposal generated by the Client Proposal Skill reflects the agency's differentiation, not a generic services menu. The onboarding package reads like it was written by an experienced account manager who knows the agency's process, because the Skill encodes that process.
      </p>
      <p className="mt-4">
        Agencies that run this system report the same shift: account managers stop spending Tuesday afternoons building reports and start spending them talking to clients. The proposal that used to take a day to customize now takes an hour. The QBR that used to be assembled in a panic the night before is ready two days in advance. The time that was spent on documents is now spent on the strategic and relationship work that clients actually value — and that the agency can charge for.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Get the Agency Skills
      </h2>
      <p className="mb-6">
        Each Skill is a one-time install. Load your agency's brand context once, and it carries through every client deliverable you produce.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/client-onboarding"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Client Onboarding</p>
          <p className="text-sm text-muted-foreground">Kickoff agenda, discovery questionnaire, account setup checklist, and 30/60/90-day plan — a complete onboarding package that makes every new client's first impression a professional one.</p>
        </Link>
        <Link
          href="/playbooks/client-report"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Client Report</p>
          <p className="text-sm text-muted-foreground">White-labeled performance reports with KPI summary, trend narrative, and strategic recommendations — in the agency's brand voice, out the day after month-end instead of four days late.</p>
        </Link>
        <Link
          href="/playbooks/client-proposal"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Client Proposal</p>
          <p className="text-sm text-muted-foreground">Capabilities presentation, pitch deck, scope of work, and SLA — built from the prospect's context so the proposal reflects what they actually said, not what the last client needed.</p>
        </Link>
        <Link
          href="/playbooks/qbr-plan"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">QBR Plan</p>
          <p className="text-sm text-muted-foreground">Quarterly review agenda with performance narrative, competitor context, forward-looking strategy, and a one-page executive summary — the QBR that earns the renewal instead of triggering the review.</p>
        </Link>
      </div>
    </BlogPostLayout>
  );
}
