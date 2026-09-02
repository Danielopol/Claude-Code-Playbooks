import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Spreadsheets: Automate Excel Models and Analysis | Claude Code Playbooks Blog',
  description: "Four Claude Skills that eliminate the most repetitive parts of Excel work — live dashboard automation, bulk file merging and formatting, quick founder-scale financial models, and full IB/FP&A-grade 3-statement builds.",
  alternates: { canonical: '/blog/claude-skills-excel' },
  openGraph: {
    title: 'Claude Skills for Spreadsheets: Automate Excel Models and Analysis',
    description: "Four Claude Skills that eliminate the most repetitive parts of Excel work — live dashboard automation, bulk file merging and formatting, quick founder-scale financial models, and full IB/FP&A-grade 3-statement builds.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-excel',
    type: 'article',
    publishedTime: '2026-09-02T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Spreadsheets: Automate Excel Models and Analysis',
    description: "Four Claude Skills that eliminate the most repetitive parts of Excel work — live dashboard automation, bulk file merging and formatting, quick founder-scale financial models, and full IB/FP&A-grade 3-statement builds.",
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

export default function ClaudeSkillsExcelPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Spreadsheets: Automate Excel Models and Analysis"
      description="Four Claude Skills that eliminate the most repetitive parts of Excel work — live dashboard automation, bulk file merging and formatting, quick founder-scale financial models, and full IB/FP&A-grade 3-statement builds."
      category="guide"
      difficulty="intermediate"
      readingTime="13 min read"
      createdAt="2026-09-02"
      tags={['claude skills excel', 'ai spreadsheet automation', 'ai excel models', 'excel automation ai', '3 statement model ai', 'financial modeling ai', 'excel file merging', 'ai xlsx tools']}
      author="Claude Code Playbooks"
      slug="claude-skills-excel"
    >
      <p>
        Excel is the most widely used business tool on earth, and most of what people do in it every week is repetitive in a way that's genuinely automatable: open the same five files, copy data between sheets, refresh a pivot table, email a dashboard. Two hours of clicking that a script could do in thirty seconds — if writing that script didn't require a skill most spreadsheet users never picked up. That gap between "this should be automated" and "I don't know how to automate it" is exactly what these four Claude Skills close.
      </p>
      <p>
        They cover the two ends of what people actually build in Excel: the operational side — live dashboards and bulk file wrangling — and the analytical side — financial models ranging from a quick founder projection to a full IB-grade three-statement build.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Automate the Live Dashboard You Rebuild Every Week
      </h2>
      <p>
        Every Monday, the same five Excel files get opened, data gets copied between sheets, pivot tables get refreshed, formulas get updated, and the finished dashboard gets emailed out — a routine that takes real time and produces nothing new each week except the current numbers plugged into an unchanged template.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/excel-automation">Excel Automation Workflows</PlaybookLink>{' '}
        Skill uses xlwings to control live Excel instances directly rather than just editing files — it can open your actual workbooks, refresh data from source sheets, update pivot tables, format the dashboard, execute VBA where needed, and save a timestamped copy, all on a schedule you set once.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Automate our weekly sales dashboard that pulls from 3 Excel files — refresh the data, update the pivot tables, and save a timestamped copy every Monday at 8 AM"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">The same 5 Excel files opened every Monday, data copied between sheets, pivot tables refreshed, formulas updated, and the dashboard emailed — two hours of clicking that a script could do in 30 seconds</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A script that opens the live Excel files, refreshes data from source sheets, updates pivot tables, formats the dashboard, and saves a timestamped copy — scheduled to run automatically every Monday at 8 AM</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Works with live Excel instances, so VBA macros and real-time dashboard behavior stay intact.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Merge and Format Dozens of Workbooks Without Touching Any of Them by Hand
      </h2>
      <p>
        A different but equally common Excel problem: thirty regional files that all need to become one consolidated summary, each with slightly different column layouts, inconsistent formatting, and no shared structure to merge against automatically in a pivot table. Doing this manually means opening each file, understanding its layout, and copying the right cells into a master sheet — the kind of task that scales terribly as the file count grows.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/xlsx-manipulation">Excel File Manipulation</PlaybookLink>{' '}
        Skill handles that consolidation programmatically using openpyxl: multi-file ingestion across all the source workbooks, data extraction and normalization even when column layouts differ, a merged summary worksheet with aggregated metrics, professional formatting with headers, borders, and conditional highlighting, and automated chart generation from the consolidated result.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Merge data from 30 regional Excel files into one summary workbook, with aggregated metrics by region and a chart of the results"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">30 regional files with different column layouts, no shared structure, and manually updating them all with new formulas and formatting would take all week</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A merged summary worksheet with aggregated metrics by region, data normalized across different original column layouts, formatted output with headers and conditional highlighting, and automated charts from the consolidated data</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Works on the files directly — no live Excel session required, unlike the dashboard automation above.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Build a Quick 3-Statement Model for Founder-Scale Projections
      </h2>
      <p>
        Linking an income statement to a balance sheet to a cash flow statement is where most financial models break — one circular reference and the whole thing spirals into #REF errors that take hours to untangle. For a founder building investor projections, or an analyst who needs quick scenario analysis without rebuilding a spreadsheet from scratch, that fragility is the main obstacle standing between "I need a model" and having one.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/financial-modeling">Financial Modeling Assistant</PlaybookLink>{' '}
        Skill builds an integrated three-statement model with the linkages handled correctly from the start: income statement flowing into balance sheet flowing into cash flow, proper working capital linkages, debt schedules, depreciation, and multi-year projections you can stress-test without the model breaking.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Build a 3-statement model for our SaaS business using last year's financials — 5-year projections I can stress-test"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">One circular reference between the income statement and cash flow and the whole model spirals — the three statements need to talk to each other without Excel melting down</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">An integrated model linking income statement, balance sheet, and cash flow with proper working capital linkages, debt schedules, depreciation, and 5-year projections that hold up under stress-testing</p>
        </div>
      </div>

      <p>
        This is the right choice for founders, MBA students, and analysts who need a working model fast — for a full institutional-grade build with every supporting schedule, the next Skill goes further.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Best suited for investor projections, board forecasts, and quick scenario work rather than a deal-grade deliverable.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Build the Full Institutional-Grade Model With Every Schedule
      </h2>
      <p>
        For financial analysts, investment banking associates, and FP&A teams, a three-statement model needs to go well beyond the three core statements — a debt schedule, a working capital schedule, a depreciation and amortization schedule, scenario toggles, and a ratios dashboard are all standard expectations, and getting the dozens of cross-statement references between them exactly right is where a broken link can silently cascade errors through every projection year without anyone noticing until much later.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/fa-3-statement-model">3-Statement Financial Model Builder</PlaybookLink>{' '}
        Skill builds that full institutional-grade workbook directly: Income Statement, Balance Sheet, Cash Flow Statement, Debt Schedule, Working Capital, D&A Schedule, a Scenarios tab, and a Ratios dashboard — all cross-linked with formula-driven projections and professional formatting throughout.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Build a 3-statement model for Nike with 5-year projections — full supporting schedules for debt, working capital, and D&A, plus a scenarios tab and ratios dashboard"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Dozens of cross-statement references to get exactly right across the debt schedule, working capital, and D&A schedule — one broken link silently cascading errors through every projection year</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">An integrated Excel workbook with Income Statement, Balance Sheet, Cash Flow, Debt Schedule, Working Capital, D&A Schedule, a Scenarios tab, and a Ratios dashboard — all cross-linked with formula-driven projections</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 5 minutes. Built for deal-grade and institutional deliverables — equity research, IB pitch support, and FP&A forecasting.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Matching the Skill to the Spreadsheet Problem
      </h2>
      <p>
        These four Skills split cleanly between operational Excel work and financial modeling, and within each category by scale:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">A recurring dashboard that eats an hour every week</span> — Excel Automation, for live, scheduled refreshes</li>
        <li><span className="text-foreground font-medium">Dozens of files that need consolidating into one</span> — Excel File Manipulation, for bulk merging and formatting</li>
        <li><span className="text-foreground font-medium">A quick model for investor or board projections</span> — Financial Modeling Assistant, fast and founder-scale</li>
        <li><span className="text-foreground font-medium">A full deal-grade or institutional model</span> — the 3-Statement Financial Model Builder, with every supporting schedule</li>
      </ul>
      <p>
        Between the four, the recurring manual Excel work that eats hours every week — refreshing, merging, and rebuilding models from scratch — gets replaced by a workflow set up once and run repeatedly.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/excel-automation">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Excel Automation Workflows</p>
            <p className="text-sm text-muted-foreground">Live Excel control, VBA execution, and scheduled dashboard refreshes via xlwings</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/xlsx-manipulation">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Excel File Manipulation</p>
            <p className="text-sm text-muted-foreground">Bulk file merging, normalization, formatting, and chart generation across workbooks</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/financial-modeling">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Financial Modeling Assistant</p>
            <p className="text-sm text-muted-foreground">A quick, correctly-linked 3-statement model for founder and board-level projections</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/fa-3-statement-model">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">3-Statement Financial Model Builder</p>
            <p className="text-sm text-muted-foreground">Full institutional-grade model with debt, working capital, D&A schedules, and a ratios dashboard</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
