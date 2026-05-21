import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'AI for Private Equity and Investment Banking: The Complete Toolkit | Claude Code Playbooks Blog',
  description: 'How PE and IB professionals use Claude Skills across the full deal cycle — deal sourcing and screening, CIM and pitch deck production, IC memos, returns analysis, and portfolio monitoring. Built for practitioners.',
  alternates: { canonical: '/blog/ai-private-equity-investment-banking' },
  openGraph: {
    title: 'AI for Private Equity and Investment Banking: The Complete Toolkit',
    description: 'How PE and IB professionals use Claude Skills across the full deal cycle — deal sourcing, screening, CIM production, IC memos, returns analysis, and portfolio monitoring.',
    url: 'https://www.claudecodehq.com/blog/ai-private-equity-investment-banking',
    type: 'article',
    publishedTime: '2026-05-21',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Private Equity and Investment Banking: The Complete Toolkit',
    description: 'Claude Skills for the full PE/IB deal cycle — sourcing, screening, CIM, IC memos, returns analysis, and portfolio monitoring.',
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

export default function AiPrivateEquityInvestmentBankingPage() {
  return (
    <BlogPostLayout
      title="AI for Private Equity and Investment Banking: The Complete Toolkit"
      description="How PE and IB professionals use Claude Skills across the full deal cycle — deal sourcing and screening, CIM and pitch deck production, IC memos, returns analysis, and portfolio monitoring. Built for practitioners."
      category="guide"
      difficulty="advanced"
      readingTime="15 min read"
      createdAt="2026-05-21"
      tags={['AI private equity', 'AI investment banking', 'AI deal sourcing', 'PE deal screening', 'IB pitch deck AI', 'IC memo AI', 'Claude Code finance']}
      author="Claude Code Playbooks"
      slug="ai-private-equity-investment-banking"
    >
      <p className="text-lg">
        The private equity and investment banking workflows that eat the most analyst time are
        almost always document production and data synthesis — not judgment. Screening a deal
        against fund criteria, drafting a CIM from a data room, building an IC memo structure
        from diligence notes, monitoring a portfolio across twelve companies. The judgment calls
        require senior expertise. The production work mostly requires endurance.
      </p>
      <p>
        Claude Skills flip that ratio. Because a skill holds your firm&apos;s criteria,
        templates, and context permanently, every document starts from your framework rather than
        a blank page. The analyst writes the sections that require genuine synthesis; the skill
        handles the structure, the formatting, and the initial pass that used to take half a day.
      </p>
      <p>
        This guide covers the full toolkit — organized by deal phase, with separate tracks for
        IB and PE workflows — and the specific playbooks that support each stage.
      </p>

      {/* ── Why skills beat templates ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Why Claude Skills Beat Financial Templates
      </h2>
      <p>
        Most finance teams have templates — pitch deck shells, CIM structures, IC memo formats
        inherited from whoever set them up years ago. Templates solve the blank-page problem but
        create a different one: they produce outputs that are structurally correct but substantively
        thin. Analysts fill in the boxes without necessarily building the analysis the boxes are
        supposed to represent.
      </p>
      <p>
        A Claude Skill is different from a template in three ways that matter for deal work:
      </p>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">It knows your criteria</p>
          <p className="text-sm text-muted-foreground">
            A PE deal screening skill that holds your fund&apos;s actual investment criteria —
            sector focus, revenue thresholds, EBITDA minimums, geographic restrictions, deal
            size range — flags mismatches immediately rather than after an analyst spends four
            hours building a model on an ineligible target.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">It synthesizes, not just formats</p>
          <p className="text-sm text-muted-foreground">
            Given a company&apos;s data room documents, a CIM-building skill doesn&apos;t just
            populate a structure — it extracts and synthesizes the relevant information, flags
            gaps that need clarification, and surfaces inconsistencies between the management
            presentation and the financial statements.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">It improves with your feedback</p>
          <p className="text-sm text-muted-foreground">
            A template is static. A CLAUDE.md skill evolves — when a senior banker or partner
            says &quot;we always lead with market size before business model,&quot; you add that
            instruction once and it applies to every subsequent output. Institutional knowledge
            becomes executable, not just tribal.
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          IB TRACK
      ═══════════════════════════════════════ */}
      <h2 className="text-2xl font-semibold text-foreground mt-12 mb-2 border-b border-[#30363d] pb-2">
        Investment Banking Track
      </h2>
      <p className="text-muted-foreground text-sm mb-6">
        Skills for the sell-side deal cycle: new business origination through marketing material production.
      </p>

      {/* IB 1: Pitch Deck */}
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        Pitch Deck — Win the mandate before the process starts
      </h3>
      <p>
        A pitch deck for a sell-side mandate needs to accomplish three things quickly: demonstrate
        you understand the business better than the company thinks you do, establish a credible
        valuation range that passes the smell test, and show a process architecture that gives
        sellers confidence they&apos;ll get the best outcome. Most pitches fail on the first
        point — the analysis is generic enough that it could apply to any company in the sector.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/ib-pitch-deck">IB Pitch Deck</PlaybookLink> skill builds
        the analytical backbone of a sell-side pitch: market positioning analysis, comparable
        transaction set with relevant multiples, preliminary valuation range (EV/EBITDA, EV/Revenue,
        precedent transactions), buyer universe thesis, and process timeline. Feed it the
        company&apos;s public filings or a preliminary data set and it produces a structured
        first draft calibrated to your bank&apos;s format.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompt</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          &quot;Build a sell-side pitch for [Company], a $45M revenue B2B SaaS business in
          facilities management software. LTM EBITDA: $8.2M, growing 22% YoY. Comparable
          transactions: [list]. Produce: market positioning, valuation range with comp set,
          strategic buyer universe rationale, and a 12-week process timeline.&quot;
        </p>
      </div>
      <p>
        The skill is most effective when your CLAUDE.md holds your bank&apos;s pitch format
        preferences, sector coverage focus, and any house views on valuation methodology for
        specific verticals. A pitch for a healthcare IT company should automatically lead with
        different framing than one for an industrial services business.
      </p>

      {/* IB 2: CIM */}
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        CIM Builder — First-draft the book in hours, not days
      </h3>
      <p>
        The Confidential Information Memorandum is the single most labor-intensive document in
        a sell-side process. A thorough CIM requires synthesizing management presentations,
        audited financials, market research, competitive positioning, customer concentration
        analysis, and growth initiatives into a coherent 40–80 page narrative. Analysts
        historically spend two to three weeks on a first draft. Partners spend another week
        rewriting it.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/ib-cim-builder">CIM Builder</PlaybookLink> skill
        compresses the first-draft timeline by doing the synthesis layer: extracting key facts
        from data room documents, building the financial summary tables in the right format,
        drafting the business description and market overview sections, and flagging information
        gaps that need management follow-up. It produces a structured draft with placeholders
        clearly marked — not a finished document, but the 60% draft that takes the most time
        to produce.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompts</p>
        <div className="space-y-2">
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Build the business overview section of the CIM using this management presentation:
            [paste or attach]. Flag any claims that need verification against the financials,
            and note anywhere the narrative contradicts the historical growth rate.&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Here are three years of audited financials. Build the financial summary section:
            income statement bridge, EBITDA reconciliation, revenue breakdown by segment,
            and a normalized EBITDA calculation with addback justifications.&quot;
          </p>
        </div>
      </div>
      <p>
        Pair the CIM Builder with the{' '}
        <PlaybookLink href="/playbooks/ib-teaser">IB Teaser</PlaybookLink> skill for the
        pre-CIM marketing phase — the teaser goes to potential buyers before they sign an NDA
        and needs to generate interest without disclosing identifying information. Different
        document, different skill, same underlying company data.
      </p>

      {/* ═══════════════════════════════════════
          PE TRACK
      ═══════════════════════════════════════ */}
      <h2 className="text-2xl font-semibold text-foreground mt-12 mb-2 border-b border-[#30363d] pb-2">
        Private Equity Track
      </h2>
      <p className="text-muted-foreground text-sm mb-6">
        Skills for the buy-side deal cycle: proprietary deal origination through portfolio value creation.
      </p>

      {/* PE 1: Deal Sourcing */}
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        Deal Sourcing — Build proprietary pipeline before the bankers call
      </h3>
      <p>
        The best PE deals are the ones where you find the company before it runs a process —
        where the relationship is established, the founder trusts you, and you&apos;re not
        competing with seventeen other funds in a banker-run auction. Proprietary deal flow
        requires systematic outreach: identifying targets that fit your thesis, profiling them
        before first contact, and maintaining relationships across a large network of potential
        deals over multi-year horizons.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/pe-deal-sourcing">PE Deal Sourcing</PlaybookLink> skill
        systematizes this work. Feed it your fund&apos;s investment criteria and sector thesis,
        and it generates a structured target identification framework: the specific company
        characteristics that signal fit, the data sources for finding them (industry databases,
        conference attendee lists, trade publication coverage), and outreach sequencing that
        doesn&apos;t feel like cold selling to founder-operators who didn&apos;t ask to be acquired.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompt</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          &quot;Build a deal sourcing system for our thesis: lower-middle-market B2B software
          businesses, $5–25M revenue, founder-owned, serving regulated industries. What are
          the best identification sources, what signals should we screen for, and what does
          a 6-month outreach sequence look like that doesn&apos;t feel transactional?&quot;
        </p>
      </div>

      {/* PE 2: Deal Screening */}
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        Deal Screening — Kill bad deals before you build a model
      </h3>
      <p>
        The purpose of deal screening is to fail fast. Most deals that cross a PE firm&apos;s
        desk don&apos;t fit the fund&apos;s criteria — wrong sector, wrong size, wrong business
        quality, wrong management team, wrong competitive dynamics. The screening phase should
        surface these mismatches in hours, not after a week of analyst time building a model on
        a company that never had a chance.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/pe-deal-screening">PE Deal Screening</PlaybookLink> skill
        runs a structured first-pass evaluation against your fund&apos;s criteria. Feed it a
        CIM, teaser, or basic company information, and it produces: a criteria match/mismatch
        table, preliminary business quality assessment across the key dimensions (recurring
        revenue, customer concentration, competitive moat, management depth), initial red flags
        with specific evidence, and a recommendation on whether to advance to a full diligence
        process.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompt</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          &quot;Screen this CIM against our fund criteria: [paste CIM summary]. Our parameters:
          $10–50M EBITDA, &lt;30% customer concentration in top 5, recurring revenue &gt;60%,
          defensible niche, no turnarounds. Score each criterion, flag red flags with citations
          from the document, and give me a pass/advance/conditional-advance recommendation
          with reasoning.&quot;
        </p>
      </div>
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-semibold text-foreground mb-1">What goes in your screening CLAUDE.md</p>
        <pre className="text-sm font-mono text-[#e6edf3] whitespace-pre-wrap leading-relaxed">{`# Fund Investment Criteria

## Hard Criteria (automatic pass if failed)
- Target EBITDA range: $[X]M – $[Y]M
- Revenue model: [recurring % minimum]
- Geography: [restrictions]
- Sector: [focus / exclusions]
- Deal type: [control buyout / growth equity / etc.]

## Soft Criteria (scored, not automatic)
- Customer concentration
- Management quality signals
- Competitive moat assessment
- Growth quality (organic vs. acquired)

## Automatic Red Flags
- [List specific patterns that are instant disqualifiers]`}</pre>
      </div>

      {/* PE 3: IC Memo */}
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        IC Memo — Build the investment case that survives partner scrutiny
      </h3>
      <p>
        The Investment Committee memo is where deals are made or broken internally. An IC memo
        that presents the thesis clearly, anticipates the objections, and addresses the key risks
        head-on moves efficiently through approval. One that buries the downside, overweights
        management optimism, or fails to present the bear case gives the IC committee no choice
        but to slow the process down with questions that should have been answered in the document.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/pe-ic-memo">PE IC Memo</PlaybookLink> skill builds
        the full IC memo structure from your diligence notes and financial model: investment thesis
        (3–4 sentences, not a paragraph), business overview calibrated to what the IC needs to
        know rather than everything you learned, market and competitive analysis, financial
        summary with entry assumptions, returns analysis across scenarios, key risks with explicit
        mitigants, and the monitoring framework for post-close.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompts</p>
        <div className="space-y-2">
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Draft the IC memo thesis section for [Company]. The investment case in one
            sentence: [describe]. Key support points from diligence: [list]. Lead with the
            strongest evidence for the thesis, then address the bear case proactively.&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Write the risk section of the IC memo. Identified risks from DD: [list].
            For each risk: quantify the potential impact on EBITDA or exit multiple, identify
            the specific mitigant, and note how we&apos;ll monitor post-close.&quot;
          </p>
        </div>
      </div>
      <p>
        The risk section prompt is worth running separately — it&apos;s often the weakest part
        of analyst-drafted memos because analysts are (understandably) invested in the deal
        advancing. A skill with explicit instructions to &quot;quantify the downside and be
        specific about mitigants&quot; produces more rigorous risk analysis than most first drafts.
      </p>

      {/* PE 4: Returns Analysis */}
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        Returns Analysis — Model the full exit spectrum before you commit
      </h3>
      <p>
        Returns analysis in PE is about more than the base case. The base case always looks
        fine — that&apos;s why you&apos;re bringing the deal to IC. What matters is the
        distribution of outcomes: how does the return profile hold up under a revenue miss,
        a multiple compression, a slower-than-expected exit timeline, or a combination? How
        much do you need to be right about, and on what dimensions, to generate an acceptable
        return?
      </p>
      <p>
        The <PlaybookLink href="/playbooks/pe-returns-analysis">PE Returns Analysis</PlaybookLink>{' '}
        skill builds the full scenario matrix — base, bull, and bear cases — across the relevant
        return dimensions: MOIC, IRR, and equity value at exit under each scenario. It flags the
        specific assumptions the returns are most sensitive to, which tells you where to focus
        diligence effort and which deal terms matter most in negotiation.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompt</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          &quot;Build a returns analysis for this deal. Entry: $85M EV, 7.5x EBITDA.
          LTM EBITDA: $11.3M. Debt: $45M at close. Hold period: 4–6 years.
          Base/bull/bear assumptions: [revenue growth, margin expansion, exit multiple].
          Show MOIC and IRR for each scenario, sensitivity table on exit multiple vs.
          EBITDA growth, and flag the two assumptions we should pressure-test hardest.&quot;
        </p>
      </div>
      <p>
        The &quot;flag the two assumptions we should pressure-test hardest&quot; instruction
        is where the skill earns its keep. A returns model that tells you the bear case IRR
        is 8% is less useful than one that tells you your returns are almost entirely driven
        by exit multiple assumptions — and that you should therefore spend diligence time on
        comparable transaction precedents, not revenue forecasting.
      </p>

      {/* PE 5: Portfolio Monitoring */}
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        Portfolio Monitoring &amp; Value Creation — Manage the assets, not just the deals
      </h3>
      <p>
        The deal sourcing and execution skills cover origination through close. The work that
        drives actual fund performance happens after close: identifying value creation
        opportunities, tracking portco performance against the investment thesis, and escalating
        problems before they become permanent impairments.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/pe-portfolio-monitoring">PE Portfolio Monitoring</PlaybookLink>{' '}
        skill maintains a structured view across all portfolio companies — tracking key KPIs
        against budget, flagging variances that breach thresholds, and surfacing early warning
        signals that warrant board attention. The{' '}
        <PlaybookLink href="/playbooks/pe-value-creation-plan">PE Value Creation Plan</PlaybookLink>{' '}
        skill builds the 100-day plan and ongoing value creation roadmap for each portco: the
        specific operational, commercial, and financial levers mapped against expected EBITDA
        impact and timeline.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompts</p>
        <div className="space-y-2">
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Here are monthly KPIs for our five portcos vs. budget: [paste data]. Flag
            any metrics more than 10% off budget, identify which variances are one-time vs.
            structural, and tell me which boards need an agenda item on this at the next meeting.&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Build a value creation plan for [Portco]. Investment thesis: [describe]. Current
            EBITDA: $8.1M. Target at exit: $14M. Generate the initiative list with estimated
            EBITDA impact, execution owner, and 12-month milestones for each lever.&quot;
          </p>
        </div>
      </div>

      {/* ── Due diligence ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Due Diligence: The Connecting Tissue
      </h2>
      <p>
        Across both the IB and PE workflows, due diligence is the phase where the most
        document synthesis happens — and where Claude Skills provide the clearest time savings.
        The <PlaybookLink href="/playbooks/due-diligence-automator">Due Diligence Automator</PlaybookLink>{' '}
        skill processes data room documents systematically: extracting key terms from contracts,
        flagging change-of-control provisions, summarizing customer agreements, identifying
        representations and warranties exposure, and producing a structured DD findings document
        mapped to the IC memo risk section.
      </p>
      <p>
        The specific value here is completeness. Manual data room review is subject to fatigue
        and attention drift — the clause buried on page 40 of a customer contract that limits
        assignment rights gets missed. A skill processing documents systematically doesn&apos;t
        get tired of reading the fifteenth contract.
      </p>

      {/* ── Firm-wide setup ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Setting Up Skills at the Firm Level
      </h2>
      <p>
        The highest-leverage implementation is a shared firm CLAUDE.md that every analyst and
        associate pulls into their project folders. This file holds:
      </p>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Fund investment criteria</p>
          <p className="text-sm text-muted-foreground">
            The specific parameters that define a fundable deal — not the marketing version in
            your deck, but the actual thresholds that would disqualify a company. Hard criteria
            and soft criteria separated clearly.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Document format preferences</p>
          <p className="text-sm text-muted-foreground">
            The section order and content expectations for your IC memo, CIM, and pitch deck.
            Senior partners have strong preferences; encoding them prevents the back-and-forth
            of &quot;we always put market sizing before the business model overview.&quot;
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Sector thesis and market views</p>
          <p className="text-sm text-muted-foreground">
            Your fund&apos;s current sector focus, thematic investment hypotheses, and any
            specific market dynamics you&apos;re tracking. This prevents analysts from writing
            market overviews that contradict your partners&apos; published views.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">House style for financial analysis</p>
          <p className="text-sm text-muted-foreground">
            Preferred valuation methodologies by sector, how you define normalized EBITDA,
            standard addback policy, return threshold expectations. The methodological
            consistency that currently lives only in the heads of your most senior people.
          </p>
        </div>
      </div>
      <p>
        A deal-specific file sits alongside the firm CLAUDE.md: company name, deal stage,
        entry assumptions, current open questions. The skill reads both — firm context plus
        deal context — for outputs that are simultaneously on-standard and deal-specific.
      </p>

      {/* ── CTA grid ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Full PE / IB Toolkit
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {/* IB */}
        <div className="sm:col-span-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Investment Banking</p>
        </div>
        <Link
          href="/playbooks/ib-pitch-deck"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">IB Pitch Deck</p>
          <p className="text-sm text-muted-foreground">Sell-side mandate pitch — comp set, valuation range, buyer universe, and process architecture.</p>
        </Link>
        <Link
          href="/playbooks/ib-cim-builder"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">CIM Builder</p>
          <p className="text-sm text-muted-foreground">First-draft the confidential information memorandum from data room documents — business overview, financial summary, and gap flags.</p>
        </Link>
        {/* PE */}
        <div className="sm:col-span-2 mt-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Private Equity</p>
        </div>
        <Link
          href="/playbooks/pe-deal-screening"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">PE Deal Screening</p>
          <p className="text-sm text-muted-foreground">Criteria match analysis, business quality scorecard, red flags with citations, and pass/advance recommendation.</p>
        </Link>
        <Link
          href="/playbooks/pe-ic-memo"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">PE IC Memo</p>
          <p className="text-sm text-muted-foreground">Full investment committee memo structure — thesis, business overview, market analysis, financials, risks with mitigants, and monitoring plan.</p>
        </Link>
        <Link
          href="/playbooks/pe-returns-analysis"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors sm:col-span-2"
        >
          <p className="font-semibold text-foreground mb-1">PE Returns Analysis</p>
          <p className="text-sm text-muted-foreground">MOIC and IRR across base/bull/bear scenarios, sensitivity table, and identification of the two or three assumptions the returns hinge on.</p>
        </Link>
      </div>
      <p>
        The skills above are the most frequently used across the deal cycle. The full library
        also includes <PlaybookLink href="/playbooks/pe-deal-sourcing">PE Deal Sourcing</PlaybookLink>,{' '}
        <PlaybookLink href="/playbooks/due-diligence-automator">Due Diligence Automator</PlaybookLink>,{' '}
        <PlaybookLink href="/playbooks/pe-value-creation-plan">PE Value Creation Plan</PlaybookLink>,{' '}
        <PlaybookLink href="/playbooks/pe-portfolio-monitoring">PE Portfolio Monitoring</PlaybookLink>,{' '}
        and the full IB process toolkit — teasers, process letters, buyer lists, merger models, and
        deal trackers.
      </p>
    </BlogPostLayout>
  );
}
