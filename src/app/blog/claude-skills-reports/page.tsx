import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Reports: Turn Data into Executive-Ready Documents | Claude Code Playbooks Blog',
  description: "Four Claude Skills covering the full data-to-document pipeline — CSV insight analysis, polished report formatting, one-page executive summaries, and ongoing executive dashboards.",
  alternates: { canonical: '/blog/claude-skills-reports' },
  openGraph: {
    title: 'Claude Skills for Reports: Turn Data into Executive-Ready Documents',
    description: "Four Claude Skills covering the full data-to-document pipeline — CSV insight analysis, polished report formatting, one-page executive summaries, and ongoing executive dashboards.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-reports',
    type: 'article',
    publishedTime: '2026-08-30T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Reports: Turn Data into Executive-Ready Documents',
    description: "Four Claude Skills covering the full data-to-document pipeline — CSV insight analysis, polished report formatting, one-page executive summaries, and ongoing executive dashboards.",
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

export default function ClaudeSkillsReportsPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Reports: Turn Data into Executive-Ready Documents"
      description="Four Claude Skills covering the full data-to-document pipeline — CSV insight analysis, polished report formatting, one-page executive summaries, and ongoing executive dashboards."
      category="guide"
      difficulty="basic"
      readingTime="12 min read"
      createdAt="2026-08-30"
      tags={['claude skills reports', 'ai report generator', 'ai executive summary', 'business analytics ai', 'data to document', 'executive dashboard ai', 'automated reporting', 'ai business reports']}
      author="Claude Code Playbooks"
      slug="claude-skills-reports"
    >
      <p>
        Reporting is the one chore that shows up in every function of a business — sales, marketing, finance, operations, product — and it follows the same arc every time regardless of department: pull the data, find what actually matters in it, format it into something presentable, and then, most often, watch leadership skip straight to whatever's on the first page. The work is universal. The failure mode is universal too: a polished thirty-page report that nobody reads past page one because the one page that actually gets read was never written with that in mind.
      </p>
      <p>
        These four Claude Skills cover the full pipeline from raw numbers to something leadership actually reads — finding the insight, formatting the full report, condensing it to the page that matters, and keeping a live view running so the next report isn't starting from zero.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Find What's Actually in the Data First
      </h2>
      <p>
        Sales and revenue data tends to sit in CSV exports untouched until the quarterly review, and by the time anyone looks closely, whatever trend was quietly forming has already had a quarter to compound into a real problem. The data usually does contain the answer — the underperforming region, the rep whose numbers slipped, the product line that's flattening out — it's just not visible without someone actually running the analysis, and that analysis competes with everything else on a busy week.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/business-analytics-reporter">Business Analytics Reporter</PlaybookLink>{' '}
        Skill analyzes sales and revenue data directly from CSV files to surface what's actually going on: revenue trends broken out by product, region, or rep, statistical anomalies flagged automatically, specific weak areas identified with root cause analysis, and concrete recommendations with a projected impact attached to each one.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Analyze our Q1 sales data and find what's underperforming, with root causes and projected impact for each recommendation"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Sales data sitting in CSV files nobody analyzes until the quarterly review, by which point the trend that was missed has already cost real revenue</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Revenue trends by product, region, and rep, statistical anomalies flagged automatically, 3 weak areas identified with root cause analysis, and specific recommendations with projected impact</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Run this before building the formatted report below — it's the insight layer the report should be built around.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Turn the Insight Into a Polished, Presentable Report
      </h2>
      <p>
        Insight is only half the deliverable — stakeholders expect a report that looks professional, with formatted tables, charts for the key metrics, trend commentary, and consistent styling, not a wall of raw numbers with a paragraph of analysis attached. Every month it's the same cycle: pull the data, build the tables, create the visualizations, write the commentary, and format everything so it looks intentional rather than rushed.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/report-generator">Automated Report Generator</PlaybookLink>{' '}
        Skill produces that polished output directly: formatted data tables with conditional highlighting, charts and visualizations for the metrics that matter, trend commentary written in context, an executive summary section, and export-ready formatting for PDF or a presentation deck.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Generate a monthly performance report from this data — formatted tables, charts for key metrics, and trend commentary, export-ready for PDF"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Stakeholders need a polished report by tomorrow and the afternoon is spent wrestling with chart formatting in Excel — the same monthly cycle of pulling data, building tables, and formatting everything to look professional</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A professional report with formatted tables and conditional highlighting, charts for key metrics, trend commentary, an executive summary section, and export-ready formatting for PDF or presentation</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Feed it the analyzed findings from Skill 1 rather than raw data for the strongest result.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Write the One Page That Actually Gets Read
      </h2>
      <p>
        A thirty-page report can be genuinely excellent and still fail at its actual job, because executives want the "so what" in two minutes, not forty-five minutes of context before arriving at the recommendation. The difference between a report that drives a decision and one that quietly collects dust in an inbox is almost always the executive summary — and writing a good one is a distinct skill from writing the full report itself.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/recipe-executive-summary-generator">Executive Summary Generator</PlaybookLink>{' '}
        Skill distills a lengthy detailed report into what a busy leader can actually read in two minutes: key findings with the evidence behind them, the critical implications for strategy, a recommended decision with supporting rationale, the risk of not acting, and suggested next steps — written in language a CEO can scan in ninety seconds.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Write an executive summary for this 40-page market analysis — key findings, implications, a recommended decision, and the risk of inaction, scannable in 90 seconds"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A genuinely thorough 30-page report that nobody reads past the first page, because it was never written with the two-minute reader in mind</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A one-page summary: 3 key findings with evidence, 2 critical implications for strategy, a recommended decision with rationale, the risk of inaction, and suggested next steps — scannable in 90 seconds</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 5 minutes. Write this last, once the full report exists — it's a condensing pass, not a first draft.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Keep a Live View Running Between Reports
      </h2>
      <p>
        A report is a snapshot; a dashboard is ongoing visibility. Once the reporting cycle above has run a few times, leadership usually wants something they can check between formal reports — a live view that bridges the gap between operational activity data and the business outcomes that actually matter to a C-suite audience, without needing to wait for the next monthly cycle to see whether something changed.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/executive-dashboard">Executive Dashboard</PlaybookLink>{' '}
        Skill designs that live view: a dashboard that translates operational metrics into business outcomes for executive decision-making, bridging the gap between activity data and strategic impact so senior leaders get clarity without drowning in operational detail they don't need to see.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Design an executive dashboard that translates our marketing activity metrics into the business outcomes leadership actually cares about"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Leadership waiting on the next monthly report to see whether anything changed, with no live view bridging operational activity data and the business outcomes they actually care about</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A C-suite-ready dashboard translating marketing and operational metrics into business outcomes, giving leadership clarity for faster decisions without drowning them in operational detail</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 15 minutes. Build this once the recurring report cycle above is established — it's the ongoing layer sitting between formal report cycles.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Full Data-to-Document Pipeline
      </h2>
      <p>
        These four Skills map onto a natural sequence from raw data to what leadership actually consumes:
      </p>
      <ol className="list-decimal list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Business Analytics Reporter</span> — find the insight hiding in the raw data first</li>
        <li><span className="text-foreground font-medium">Automated Report Generator</span> — format that insight into a polished, presentable report</li>
        <li><span className="text-foreground font-medium">Executive Summary Generator</span> — condense the full report into the one page that actually gets read</li>
        <li><span className="text-foreground font-medium">Executive Dashboard</span> — maintain ongoing visibility between formal report cycles</li>
      </ol>
      <p>
        Not every report needs all four — a quick internal update might stop at Skill 2, while a board-level quarterly review benefits from the full chain. The point is that the pipeline exists end to end, regardless of which function is producing the report.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/business-analytics-reporter">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Business Analytics Reporter</p>
            <p className="text-sm text-muted-foreground">Weak areas, statistical anomalies, and strategic recommendations from raw CSV data</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/report-generator">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Automated Report Generator</p>
            <p className="text-sm text-muted-foreground">Formatted tables, charts, trend commentary, and export-ready presentation</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/recipe-executive-summary-generator">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Executive Summary Generator</p>
            <p className="text-sm text-muted-foreground">A one-page distillation with findings, implications, and a recommended decision</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/executive-dashboard">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Executive Dashboard</p>
            <p className="text-sm text-muted-foreground">Ongoing C-suite visibility translating activity data into business outcomes</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
