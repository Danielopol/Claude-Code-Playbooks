import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Equity Research Analysts: From Earnings to Initiation | Claude Code Playbooks Blog',
  description: "How equity research analysts use four Claude Skills to compress the research workflow — a 24-hour post-earnings update with beat/miss analysis and revised estimates, a 7am morning note with actionable trade ideas, a structured thesis tracker that flags conviction drift before it becomes a portfolio mistake, and a 30-50 page institutional initiation report built through a 5-task workflow.",
  alternates: { canonical: '/blog/claude-skills-equity-research' },
  openGraph: {
    title: 'Claude Skills for Equity Research Analysts: From Earnings to Initiation',
    description: "How equity research analysts use four Claude Skills to compress the research workflow — a 24-hour post-earnings update with beat/miss analysis and revised estimates, a 7am morning note with actionable trade ideas, a structured thesis tracker that flags conviction drift before it becomes a portfolio mistake, and a 30-50 page institutional initiation report built through a 5-task workflow.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-equity-research',
    type: 'article',
    publishedTime: '2026-06-13T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Equity Research Analysts: From Earnings to Initiation',
    description: "Four Claude Skills for equity research — post-earnings updates, morning notes, thesis tracking, and institutional initiation reports — so analysts spend less time on structure and more time on insight.",
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

export default function ClaudeSkillsEquityResearchPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Equity Research Analysts: From Earnings to Initiation"
      description="How equity research analysts use four Claude Skills to compress the research workflow — a 24-hour post-earnings update with beat/miss analysis and revised estimates, a 7am morning note with actionable trade ideas, a structured thesis tracker that flags conviction drift before it becomes a portfolio mistake, and a 30-50 page institutional initiation report built through a 5-task workflow."
      category="guide"
      difficulty="intermediate"
      readingTime="14 min read"
      createdAt="2026-06-13"
      tags={['claude skills equity research', 'ai earnings analysis', 'ai equity research analyst', 'equity research AI', 'financial modeling AI', 'sell-side AI', 'Claude Code']}
      author="Claude Code Playbooks"
      slug="claude-skills-equity-research"
    >
      <p>
        Equity research is a deadline business dressed up as an intellectual one. Earnings drop after the close. The morning meeting is at 7am. The initiation report that took six weeks of modeling and writing lands the same week as two other companies in your coverage universe reporting. The work is genuinely analytical — but the container it lives in is brutal.
      </p>
      <p className="mt-4">
        The part of equity research that AI can help with is not the part analysts worry about. No serious analyst is worried that Claude will replace their read on management credibility, their sense of whether a new product cycle is real, or their view on valuation in a sector they have covered for a decade. What actually consumes analyst time is structural: building the earnings update framework from scratch at 5pm, drafting the morning note at 6am, maintaining thesis scorecards across a 15-stock coverage universe, and assembling the 40-page initiation report from a dozen separate working documents.
      </p>
      <p className="mt-4">
        Claude Skills handles the structural layer. A Skill is a persistent Claude configuration — system prompt, output format, professional conventions — installed once and invoked instantly. The four Skills below give equity research analysts professional-grade frameworks for every recurring output in the research workflow. The analysis stays with the analyst; the scaffolding gets handled.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Why the Research Workflow Is Structurally Broken
      </h2>
      <p>
        Sell-side and buy-side analysts face the same underlying problem: the outputs of equity research are highly standardized (earnings updates follow the same structure at every firm, morning notes hit the same elements every day, initiation reports follow the same architecture across all banks), but the process for producing them is almost entirely unstructured. Every analyst rebuilds the template from memory, every time, under time pressure.
      </p>
      <p className="mt-4">
        The earnings update is the sharpest example. A company reports after the close. The analyst has 12–18 hours to publish a credible update: revenue beat/miss, EPS beat/miss, guidance versus consensus, updated model, revised price target, and a thesis read. Miss something in that structure — skip the guidance commentary, omit the segment breakdown, bury the thesis implication — and the note reads as incomplete. Build the framework correctly under time pressure and the actual analysis takes an hour. Build the framework slowly and the analysis gets rushed.
      </p>
      <p className="mt-4">
        The four Skills below give analysts the frameworks pre-built and professional. The analyst brings the numbers, the read on management commentary, and the thesis judgment. The Skill provides the structure, the output format, and the institutional conventions.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Earnings Update Report — 24-Hour Deadline, Professional Output
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/er-earnings-analysis">Equity Research Earnings Update Report</PlaybookLink> produces a professional 8–12 page earnings update with beat/miss analysis, updated estimates table (old versus new), revised price target, and thesis read — structured for immediate publication.
      </p>
      <p className="mt-4">
        The Skill handles what takes the most time under deadline pressure: the framework. Revenue beat/miss versus consensus and your estimate. Segment-level breakdown. EPS bridge. Guidance versus street. Updated model with old-versus-new estimates table. Revised price target with methodology. Thesis confirmation or thesis change. Twelve charts. Each section has a professional structure the Skill enforces — so the analyst is filling in analysis, not building architecture at 9pm.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Create an earnings update for Nike Q2 FY24. Revenue was $12.4B vs. $12.6B consensus — a miss. EPS was $1.03 vs. $0.85 consensus — a beat driven by gross margin expansion to 44.6%. Management guided Q3 revenue flat to down 1% versus street at +2%. Inventory is down 14% year-over-year. My thesis is that the DTC mix shift is working but the wholesale channel remains a headwind into FY25. Update my price target from $110 to $105. Format as a full earnings update with an old/new estimates table.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Two hours building the earnings update structure from a blank document after a late-night earnings call. The framework eats the time the analysis needed. The note goes out at midnight, rough around the edges.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Professional 8–12 page earnings update with beat/miss analysis, old/new estimates table, 8–12 charts, revised price target, and thesis read — framework complete in minutes, analyst fills in the actual numbers and insight.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes. Works for sell-side earnings updates and buy-side post-earnings position reviews. Output is DOCX-formatted for immediate publication or internal distribution.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Morning Note — Actionable Intelligence Before the Open
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/er-morning-note">Equity Research Morning Note</PlaybookLink> drafts the pre-market morning note: overnight developments on coverage stocks, earnings reactions, key events for the trading day, and a long/short trade idea with risk parameters.
      </p>
      <p className="mt-4">
        The morning note is not a news summary. PMs and traders already read the news. The value of a morning note is the analyst's opinionated take — what overnight data means for your specific thesis on your specific stocks, and a trade idea with a clear entry rationale and risk frame. The Skill enforces that discipline: top call headline, overnight developments with thesis implications, events today with positioning read, long/short idea with entry level and stop.
      </p>
      <p className="mt-4">
        At 6am, with a 7am meeting hard stop, the morning note cannot be built from scratch. The Skill provides the structure instantly so the analyst can focus on the overnight data that actually matters for the coverage universe.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Draft my morning note for tech coverage. Overnight: NVDA reported above consensus on data center, guiding up 10% for next quarter — stock up 6% in after-hours. MSFT Azure growth reaccelerated to 31% versus 28% last quarter. Today: Fed speakers at 10am and 2pm, CPI tomorrow. My call: the AI capex cycle is broadening from hyperscaler to enterprise — SMCI is the asymmetric long into CPI. Draft with a SMCI long idea, stop at the 200-day.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Writing the morning note by hand at 6am from a blank page. The structure is fine by muscle memory, but the trade idea section always gets rushed. The note is tight on some days and generic on others depending on how tired the analyst is.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Top call headline, overnight developments with thesis implications, key events with positioning read, and a SMCI long idea with entry rationale, risk parameters, and stop level — one-page note ready before the morning meeting.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes. Works for sell-side morning notes distributed to sales desks and buy-side pre-meeting briefings. The opinionated trade idea is the differentiator — generic notes do not need a Skill.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Thesis Tracker — Conviction Monitoring Before It Becomes a Portfolio Mistake
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/er-thesis-tracker">Equity Research Thesis Tracker</PlaybookLink> maintains structured investment theses with scorecard tracking across thesis pillars, a catalyst calendar, and conviction-level monitoring — updated with each new data point.
      </p>
      <p className="mt-4">
        Thesis drift is how positions outlast their rationale. An analyst initiates on a company with a three-pillar thesis: margin expansion driven by mix shift, a new product cycle in 18 months, and international expansion. Twelve months later, mix shift is working, the product cycle slipped to 24 months, and international is a question mark. The position is still in the book. The original initiation recommendation still shows on the coverage page. The thesis has not been formally reassessed.
      </p>
      <p className="mt-4">
        The Skill forces the reassessment. Each pillar of the original thesis has a status — on track, behind, ahead, broken — and a confidence score. New data points are logged with their thesis impact assessed immediately, not accumulated in a mental model that degrades over time. The catalyst calendar tracks what would confirm or refute each pillar. When conviction shifts, the Skill captures when and why.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Update my investment thesis for Apple. Original thesis: services margin expansion to 75%+ by FY26, India manufacturing as a China supply chain hedge, and Vision Pro as an option on spatial computing. Update with latest earnings: services gross margin hit 73.9%, India manufacturing now at 14% of iPhone production (ahead of plan), Vision Pro sales are tracking below break-even unit economics. Revise my conviction scorecard and flag whether Vision Pro has become a thesis impairment or remains an option position.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Thesis lives in the analyst's head and a six-month-old initiation report. New data points accumulate without formal thesis impact assessment. Conviction drifts without anyone noticing. Position is still held six months after the original thesis broke on one pillar.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Updated thesis scorecard showing each pillar status, Vision Pro flagged as an option position not a thesis impairment with explicit reasoning, revised conviction level, and a catalyst calendar showing what data would change the call in either direction.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes. Works across a full coverage universe — run it after every earnings report, every major data point, and every management meeting. The structured log becomes evidence in portfolio review conversations.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Initiating Coverage — Institutional-Quality Reports Without the Six-Week Grind
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/er-initiating-coverage">Equity Research Initiating Coverage Report</PlaybookLink> builds a 30–50 page institutional initiation report through a structured 5-task workflow: company research, financial modeling, valuation, chart creation, and report assembly — producing 10,000–15,000 words, 25–35 charts, 12–20 tables, DCF valuation, comps analysis, and a BUY/HOLD/SELL recommendation.
      </p>
      <p className="mt-4">
        An initiation report is the most labor-intensive output in equity research. It requires synthesizing company history, industry dynamics, competitive positioning, financial model, valuation, and a forward thesis into a coherent narrative that reads as authoritative to both portfolio managers and company management. The structural work — the framework of sections, the chart architecture, the comps table format, the DCF model structure — is the same every time. The intellectual work — the thesis, the variant view, the valuation argument — is unique to each company.
      </p>
      <p className="mt-4">
        The 5-task workflow separates these cleanly. Task 1 builds the company and industry research foundation. Task 2 runs the financial model. Task 3 builds valuation (DCF plus comps). Task 4 creates the chart package. Task 5 assembles the full report. Each task produces institutional-quality intermediate output. The analyst's judgment goes into the thesis, the variant view, and the valuation call — not into formatting tables and building chart templates.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Initiate coverage on Palantir Technologies (PLTR) with a BUY rating. My thesis: PLTR is the only pure-play enterprise AI platform with a proven government track record, and the AIP commercial inflection is underappreciated by the market. Key variant view: consensus models SBC normalization incorrectly — adjusted FCF is 40% above street estimates. Target price $35. Run the full 5-task workflow: company research, model, valuation (DCF + SaaS comps), charts, and report assembly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Six weeks for a senior analyst and one associate to produce a 40-page initiation. Four weeks of that is structural: building the model, formatting the comps, creating the chart package, assembling the sections. Two weeks is actual thesis development.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">30–50 page institutional-quality initiation with 10,000–15,000 words, 25–35 charts, DCF and comps valuation, and a BUY recommendation built through a structured 5-task workflow — the analyst's time goes to the thesis, not the template.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Works for sell-side initiation reports and buy-side deep-dive research memos. The 5-task structure produces publishable intermediate outputs at each stage — not a single massive prompt.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Research System: A Coverage Universe That Runs Like a Practice
      </h2>
      <p>
        The four Skills above are not independent tools — they form a research system. Initiation coverage builds the original thesis and scorecard. The Thesis Tracker maintains it. The Earnings Update Report updates it after every quarterly print. The Morning Note communicates it to the desk every morning with an actionable trade idea.
      </p>
      <p className="mt-4">
        An analyst running a 15-stock coverage universe with this system operates differently from one who does not. The initiation creates a structured thesis document with explicit pillars and a catalyst calendar. After earnings, the Earnings Update updates the model and revises the price target in under an hour. The Thesis Tracker logs the earnings data point and assesses thesis impact immediately, not three weeks later when memory has degraded. The morning note communicates the current conviction read with a trade idea anchored to that thesis.
      </p>
      <p className="mt-4">
        The result is a coverage practice where every position has a current thesis document, where conviction changes are logged and dated, where the morning note reflects a genuine read on overnight data rather than a generic summary, and where an initiation can be published in days rather than weeks. The intellectual work — the analysis, the judgment, the variant view — stays with the analyst. The structural work gets handled.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Get the Equity Research Skills
      </h2>
      <p className="mb-6">
        Each Skill is a one-time install. Open it, follow the setup steps, and it is available in Claude every time you need it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/er-earnings-analysis"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Earnings Update Report</p>
          <p className="text-sm text-muted-foreground">Professional 8–12 page post-earnings update with beat/miss analysis, old/new estimates table, revised price target, and thesis read — built for the 24-hour deadline.</p>
        </Link>
        <Link
          href="/playbooks/er-morning-note"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Morning Note</p>
          <p className="text-sm text-muted-foreground">One-page pre-market note with overnight developments, thesis implications, key events, and an opinionated long/short trade idea with entry level and risk parameters.</p>
        </Link>
        <Link
          href="/playbooks/er-thesis-tracker"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Thesis Tracker</p>
          <p className="text-sm text-muted-foreground">Structured scorecard for each thesis pillar, catalyst calendar, conviction monitoring, and data-point logging — so thesis drift gets flagged before it becomes a portfolio mistake.</p>
        </Link>
        <Link
          href="/playbooks/er-initiating-coverage"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Initiating Coverage Report</p>
          <p className="text-sm text-muted-foreground">30–50 page institutional initiation through a 5-task workflow — company research, model, DCF plus comps, chart package, and report assembly — with a BUY/HOLD/SELL recommendation.</p>
        </Link>
      </div>
    </BlogPostLayout>
  );
}
