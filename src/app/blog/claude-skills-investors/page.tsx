import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Investors: Automate Deal Screening and Due Diligence | Claude Code Playbooks Blog',
  description: "How investment professionals use four Claude Skills across the deal lifecycle — a structured pass/fail screening memo from any CIM in minutes, a sector-tailored due diligence checklist with red flag escalation across seven workstreams, systematic data room review with severity-ranked findings and missing document alerts, and an IC-ready investment memo with thesis, risk framework, and recommendation.",
  alternates: { canonical: '/blog/claude-skills-investors' },
  openGraph: {
    title: 'Claude Skills for Investors: Automate Deal Screening and Due Diligence',
    description: "How investment professionals use four Claude Skills across the deal lifecycle — a structured pass/fail screening memo from any CIM in minutes, a sector-tailored due diligence checklist with red flag escalation across seven workstreams, systematic data room review with severity-ranked findings and missing document alerts, and an IC-ready investment memo with thesis, risk framework, and recommendation.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-investors',
    type: 'article',
    publishedTime: '2026-06-19T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Investors: Automate Deal Screening and Due Diligence',
    description: "Four Claude Skills for investment professionals — deal screening, DD checklists, data room review, and IC memos — covering the full deal lifecycle from first CIM to committee recommendation.",
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

export default function ClaudeSkillsInvestorsPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Investors: Automate Deal Screening and Due Diligence"
      description="How investment professionals use four Claude Skills across the deal lifecycle — a structured pass/fail screening memo from any CIM in minutes, a sector-tailored due diligence checklist with red flag escalation across seven workstreams, systematic data room review with severity-ranked findings and missing document alerts, and an IC-ready investment memo with thesis, risk framework, and recommendation."
      category="guide"
      difficulty="intermediate"
      readingTime="14 min read"
      createdAt="2026-06-19"
      tags={['claude skills investors', 'ai deal screening', 'ai due diligence', 'private equity AI', 'VC AI', 'investment memo AI', 'deal flow AI', 'Claude Code']}
      author="Claude Code Playbooks"
      slug="claude-skills-investors"
    >
      <p>
        Investment professionals face two compounding time pressures that pull in opposite directions. On the front end, deal flow volume demands fast, consistent screening — ten new CIMs this week, another eight next week, each one requiring enough attention to identify the one that deserves a first call without spending hours on the nine that do not. On the back end, diligence depth demands the opposite — systematic, comprehensive coverage across every workstream, because the risk that gets missed in a 400-document data room is the one that surfaces as a post-close surprise.
      </p>
      <p className="mt-4">
        Both pressures are real, and they compete for the same analyst hours. The associate who spends three hours thoroughly screening a CIM has three fewer hours for diligence on the deal that passed screening last week. The team that races through a data room to hit a deadline risks missing the litigation disclosure buried in a subsidiary's documents, or the customer concentration that changes the revenue quality argument entirely.
      </p>
      <p className="mt-4">
        Claude Skills changes the time budget. A Skill is a persistent Claude configuration — system prompt, framework logic, structured output format — installed once and invoked on every deal. The four Skills below cover the full deal lifecycle: screening the CIM, structuring the diligence workstream, reviewing the data room, and writing the IC memo. Each Skill handles the structural layer of the work — the extraction, organization, and first-pass analysis — so the investment professional's time goes to the judgment layer: whether the thesis is real, whether the risk is acceptable, whether the deal is worth doing.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Deal Flow Time Problem
      </h2>
      <p>
        The screening problem is a volume-versus-quality tradeoff that every PE and VC firm navigates differently but nobody solves cleanly. Spending 30 minutes on every CIM is the right answer from a diligence quality perspective — you will not miss a deal — but at 10 CIMs a week, that is 5 hours of associate time before a single first call is scheduled. Spending 10 minutes on every CIM is the practical answer most teams land on, but consistency degrades: the ninth CIM on a Friday afternoon does not get the same attention as the second CIM on Monday morning, and the one you skimmed too fast was the one worth calling.
      </p>
      <p className="mt-4">
        The data room problem is the mirror image. Diligence timelines compress. Management wants to sign an LOI before a competitor does. The data room opens on a Monday and closing is in three weeks. The associate starts at document one and works through, flagging issues in a spreadsheet, hoping to cover the most important workstreams before the deadline. The coverage is inconsistent — some workstreams get detailed review, others get a skim — because 400 documents in three weeks is heroic manual effort, not systematic analysis.
      </p>
      <p className="mt-4">
        The IC memo problem is the final compression point. The investment thesis has been in the deal team's heads for weeks. The first call happened, the management presentation was impressive, the preliminary diligence confirmed the headline metrics. Now the IC meeting is Thursday and the memo is a bulleted email that does not do the deal justice — the thesis is not structured, the risk framework is not complete, and the recommendation does not follow cleanly from the analysis.
      </p>
      <p className="mt-4">
        The four Skills below address each pressure point in deal sequence.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Deal Screening Memo — Pass/Fail in Minutes, Not Hours
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/pe-deal-screening">Deal Screening Memo</PlaybookLink> Skill processes any CIM, teaser, or broker material against your fund's investment criteria and produces a one-page screening memo: extracted deal facts, a pass/fail criteria table, bull and bear cases, a clear verdict (Pass / Further Diligence / Hard Pass), and key questions for a first call.
      </p>
      <p className="mt-4">
        The verdict structure matters as much as the speed. A screening output that just flags whether deal facts match criteria misses the actual screening judgment — the bull case that makes this interesting despite one criterion miss, the bear case that explains why a deal that looks fine on paper has a structural problem. The Skill produces both cases explicitly, which means the deal team can evaluate the screening output rather than just accept or reject the verdict. The partner who reads the screening memo sees not just "Pass" but the reasoning that makes the pass defensible.
      </p>
      <p className="mt-4">
        The key questions section is the most immediately useful output for a first call. Rather than arriving at the management call with general curiosity, the deal team arrives with the five specific questions that the screening memo flagged as unresolved — the customer concentration that needs explaining, the margin profile that differs from sector peers, the two-year revenue CAGR that assumes a product launch that hasn't happened yet.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Screen this CIM against our fund criteria. Fund criteria: B2B software or tech-enabled services, $10M–$50M EBITDA, recurring revenue above 70%, US-based, control buyout or majority stake. [paste CIM summary or key facts] Produce a one-page screening memo: extracted deal facts mapped to each criterion, a pass/fail table, a 3-bullet bull case and 3-bullet bear case, a verdict of Pass / Further Diligence / Hard Pass with one-sentence rationale, and the 5 questions I should ask on the first management call.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">10 CIMs arrive Monday morning. Associate reads each one, takes notes, flags three as worth discussing. Two hours later the notes are inconsistent — different facts extracted for different deals, no structured criteria table, no bull/bear framing. The fourth CIM that was worth a call got skimmed too fast and went into the pass pile.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">10 CIMs screened consistently against the same fund criteria. Each produces a one-page memo with a structured verdict and bull/bear case. Three Pass verdicts, one Further Diligence, six Hard Pass — with documented reasoning for each. First call prep questions ready before the calendar invite goes out.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes. Works for PE buyout, growth equity, and VC screens. Load your fund's specific investment criteria once into the Skill and it applies them consistently to every deal.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Due Diligence Checklist Generator — Tailored Workstreams Before the Data Room Opens
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/pe-dd-checklist">Due Diligence Checklist Generator</PlaybookLink> produces comprehensive, sector-tailored diligence checklists across all workstreams — financial, commercial, legal, operational, HR, IT, and ESG — with priority rankings, status tracking columns, and a red flag escalation framework calibrated to the deal's complexity and sector.
      </p>
      <p className="mt-4">
        The generic DD checklist problem: the checklist built for a healthcare services acquisition is not the right checklist for a software business or a manufacturing company. Healthcare services diligence requires specific items around reimbursement risk, CMS compliance, physician contract structure, and payor concentration that do not appear on a generic checklist. Software diligence requires items around ARR quality, churn cohort analysis, technical debt assessment, and IP ownership that a healthcare checklist will miss. Using a generic checklist means either spending time on irrelevant items or missing sector-specific risks.
      </p>
      <p className="mt-4">
        The Skill generates the checklist from the deal's sector, size, and complexity before the data room opens — so the deal team knows exactly what they are looking for before they start reviewing documents, rather than discovering gaps halfway through diligence when the timeline is compressing. The red flag escalation framework defines which findings require immediate partner attention versus which go into the standard findings log.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Generate a DD checklist for a $200M healthcare services platform acquisition. Target is a behavioral health outpatient group with 40 locations across 8 states, 85% Medicaid/Medicare revenue, 600 clinical staff. Deal type: control buyout. Generate sector-specific checklists for each workstream: financial, commercial, legal, operational, HR, IT, and regulatory/compliance. Include Medicaid rate risk and CMS compliance items specific to behavioral health. Prioritize items high/medium/low. Add a status tracking column. Define red flag criteria for items that require immediate escalation versus standard findings log.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Generic DD checklist adapted from the last deal. Behavioral health-specific items — Medicaid rate risk, CMS conditions of participation, state licensing by location — are not on the standard checklist. Two weeks into diligence, the legal workstream surfaces a CMS compliance issue that should have been a Day 1 priority item. The timeline compresses.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Behavioral health-specific checklist across 7 workstreams before the data room opens. Medicaid reimbursement risk and CMS compliance flagged as high-priority items in the regulatory workstream. Red flag criteria defined: any CMS conditions of participation finding escalates immediately. Deal team knows what they are looking for from day one.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes. Works for any sector, deal size, and transaction type. The sector-specific items are the output that a generic checklist template cannot produce — load the deal context and the Skill generates the items that matter for this specific business.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Due Diligence Automator — Systematic Data Room Coverage at Scale
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/due-diligence-automator">Due Diligence Automator</PlaybookLink> reviews data room documents across all standard categories — corporate structure, contracts, IP, employment, litigation, and compliance — with risk findings flagged by severity, missing document alerts, and a summary report for the deal team.
      </p>
      <p className="mt-4">
        The 400-document data room problem requires systematic coverage, not heroic manual effort. The risk of missing a material finding is not evenly distributed across documents — the customer contract with the change-of-control clause that triggers termination, the IP assignment gap that creates ownership ambiguity, the employment agreement for a key person who was not disclosed as a flight risk — these findings are in specific document categories that require careful reading, not the kind of fast skimming that happens when 400 documents need to be processed in ten business days.
      </p>
      <p className="mt-4">
        The Skill provides coverage infrastructure: a systematic framework that processes each document category with consistent attention, flags severity by risk level, and identifies what is missing from the data room as prominently as what is present. A missing document — the audit management letter that should be there but is not, the consent from a key customer that was not provided — is often more significant than any single finding within the documents that were shared.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Review this data room for our Series B investment in a B2B SaaS company. Data room includes corporate documents, customer contracts (top 20 customers), employment agreements for C-suite and key engineers, IP assignments, vendor contracts, and litigation history. Systematic review across all categories: flag any change-of-control provisions in customer contracts, identify IP ownership gaps especially for code written before incorporation, check non-compete and non-solicitation terms for key engineers, note any missing items that should be in a standard data room for a SaaS company at this stage. Rate each finding High / Medium / Low severity. Produce a deal team summary report with the top 5 findings and a missing documents list.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Associate works through 400 documents in a spreadsheet over 8 business days. Customer contracts get detailed review. Vendor contracts get a skim. IP assignment documents are flagged for legal counsel to review "when they have time." Post-close, the IP ownership gap on the core product surfaces in a patent dispute. It was in the data room.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Systematic review across all document categories. Top 5 findings: (1) High — three of top 20 customers have change-of-control termination rights; (2) High — IP assignment gap for code written by two founders before incorporation; (3) Medium — two key engineers have non-solicitation terms that expire within 12 months. Missing: audit management letter for FY2024. Deal team briefed before management presentation.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 15 minutes. Works for PE data room review, VC due diligence, and M&A deal reviews. The missing document list is often the most valuable output — what is absent from the data room tells you as much as what is present.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Investment Memo Writer — IC-Ready Before Thursday
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/investment-memo">Investment Memo Writer</PlaybookLink> produces a professional investment memorandum for any deal type — VC, PE, or public markets — with structured investment thesis, market analysis, competitive positioning, financial overview, risk framework with mitigants, and a clear recommendation with proposed terms.
      </p>
      <p className="mt-4">
        The IC memo problem is not that the investment team does not know the deal — after weeks of screening, management calls, and diligence, they know it well. The problem is that the knowledge exists as a set of distributed judgments across the deal team, not as a structured argument that an investment committee member who has not been in every meeting can evaluate in 30 minutes. The IC memo's job is to make the investment thesis legible and the risk framework complete for a reader who is coming to it fresh.
      </p>
      <p className="mt-4">
        The Skill structures the memo in the format that IC-ready memos follow: an executive summary that leads with the recommendation, not the background; an investment thesis organized around two or three discrete arguments supported by evidence from diligence; a risk framework that names each material risk explicitly with a specific mitigant for each — not "we are aware of competition" but "the three competitors who address this market share the following structural disadvantages"; and a recommendation that follows logically from the analysis rather than appearing as a conclusion dropped after a summary of facts.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Write an investment memo for our Series B investment in Veridian Health, a B2B SaaS company. Deal facts: $8.2M ARR, 118% NRR, 92% gross margin, 40% YoY growth, healthcare compliance workflow automation for mid-market hospitals. Investment thesis: (1) compliance burden is regulatory-driven and non-discretionary, creating durable demand; (2) NRR indicates strong product-market fit and expansion within existing accounts; (3) $200M+ ARR opportunity in an under-penetrated market with no clear category leader. Key risks: sales cycle length (avg 9 months), dependency on one enterprise account (22% of ARR), and recent CFO departure. We are leading at $28M pre-money, $6M check. Format as a full IC memo: executive summary with recommendation, investment thesis, market analysis, competitive positioning, financial overview, risk framework with mitigants for each risk, recommendation with proposed terms.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">IC meeting is Thursday. The memo is a 12-slide deck with company background, financial highlights, and a thesis that says "strong growth with defensible market position." The risk section is one slide with three bullets. A committee member asks about the enterprise account concentration — the deal team has an answer but it is not in the memo. The vote is deferred for two weeks to allow a "more complete memo."</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">IC memo leads with recommendation: invest at $28M pre-money. Three-pillar thesis structured with evidence from diligence. Risk framework names each risk explicitly: enterprise concentration mitigant is contractual MFN clause and expansion pipeline covering 3× the concentrated revenue within 18 months. CFO departure mitigant is interim CFO identified and interim offer accepted. Committee votes to proceed. Closing in 6 weeks.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Works for VC deal memos, PE acquisition recommendations, and public market investment theses. The risk framework with mitigants is the section that most memos underinvest in — and the section that IC members probe hardest.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Deal Lifecycle System: From First CIM to IC Vote
      </h2>
      <p>
        The four Skills form a complete deal workflow. A CIM arrives: the Deal Screening Memo produces a structured pass/fail verdict and first-call questions in minutes, not hours. The deal passes screening: the DD Checklist Generator builds sector-specific workstream checklists before the data room opens, so the team knows exactly what they are looking for. The data room opens: the Due Diligence Automator provides systematic coverage across all document categories, flagging material findings and missing documents before the deadline compresses. Diligence closes: the Investment Memo Writer structures the deal team's thesis and risk framework into an IC-ready memo that a committee member can evaluate without having been in every management call.
      </p>
      <p className="mt-4">
        Each Skill handles the structural layer of its phase — the extraction of deal facts from the CIM, the organization of checklist items by workstream and priority, the systematic categorization of data room findings by severity, the structuring of thesis arguments into IC memo format. The investment judgment stays with the deal team: whether the bull case is credible, whether the risk is acceptable at this price, whether the mitigants are real or paper-thin, whether to recommend investing or passing.
      </p>
      <p className="mt-4">
        Investment firms that run this system report the same shift: deal teams screen more deals without missing good ones, diligence is more systematic without requiring more analyst hours, and IC memos are better structured without requiring the deal team to become better writers. The intellectual work — evaluating the business, assessing the management team, forming a view on valuation — is what investment professionals are paid for. The structural work gets handled.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Get the Investment Skills
      </h2>
      <p className="mb-6">
        Each Skill is a one-time install. Use them across the deal lifecycle — independently for a specific phase or in sequence for the full workflow.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/pe-deal-screening"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Deal Screening Memo</p>
          <p className="text-sm text-muted-foreground">Pass/fail criteria table, bull and bear cases, verdict with rationale, and first-call questions — from any CIM or teaser in minutes, applied consistently to every deal in the pipeline.</p>
        </Link>
        <Link
          href="/playbooks/pe-dd-checklist"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Due Diligence Checklist Generator</p>
          <p className="text-sm text-muted-foreground">Sector-tailored workstream checklists across financial, commercial, legal, operational, HR, IT, and ESG — with priority rankings and red flag escalation criteria before the data room opens.</p>
        </Link>
        <Link
          href="/playbooks/due-diligence-automator"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Due Diligence Automator</p>
          <p className="text-sm text-muted-foreground">Systematic data room review across all document categories — severity-ranked findings, missing document alerts, and a deal team summary report. Systematic coverage instead of heroic manual effort.</p>
        </Link>
        <Link
          href="/playbooks/investment-memo"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Investment Memo Writer</p>
          <p className="text-sm text-muted-foreground">IC-ready memo with structured investment thesis, market analysis, competitive positioning, financial overview, risk framework with mitigants, and recommendation with proposed terms — for VC, PE, or public markets.</p>
        </Link>
      </div>
    </BlogPostLayout>
  );
}
