import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Data Analysts: From Raw Tables to Boardroom Charts | Claude Code Playbooks Blog',
  description: "Four Claude Skills covering the full data workflow — plain-English spreadsheet analysis, natural language SQL, publication-quality visualizations, and shareable interactive dashboards.",
  alternates: { canonical: '/blog/claude-skills-data-analysts' },
  openGraph: {
    title: 'Claude Skills for Data Analysts: From Raw Tables to Boardroom Charts',
    description: "Four Claude Skills covering the full data workflow — plain-English spreadsheet analysis, natural language SQL, publication-quality visualizations, and shareable interactive dashboards.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-data-analysts',
    type: 'article',
    publishedTime: '2026-07-08T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Data Analysts: From Raw Tables to Boardroom Charts',
    description: "Four Claude Skills covering the full data workflow — plain-English spreadsheet analysis, natural language SQL, publication-quality visualizations, and shareable interactive dashboards.",
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

export default function ClaudeSkillsDataAnalystsPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Data Analysts: From Raw Tables to Boardroom Charts"
      description="Four Claude Skills covering the full data workflow — plain-English spreadsheet analysis, natural language SQL, publication-quality visualizations, and shareable interactive dashboards."
      category="guide"
      difficulty="basic"
      readingTime="13 min read"
      createdAt="2026-07-08"
      tags={['claude skills data analysis', 'ai data analyst', 'ai sql writer', 'ai spreadsheet analysis', 'ai data visualization', 'ai dashboard builder', 'natural language sql', 'excel ai assistant']}
      author="Claude Code Playbooks"
      slug="claude-skills-data-analysts"
    >
      <p>
        Data work has a shape everyone in the field recognizes: raw numbers come in messy, an answer has to get extracted from them, the extraction has to be visualized, and the visualization has to end up in front of people who will never open the spreadsheet themselves. Each stage has its own skill requirement — formulas, SQL, chart design, presentation software — and most people are fluent in one or two of them, not all four. The gap between "I know what the data says" and "I have something to show the VP" is where analysis stalls.
      </p>
      <p>
        These four Claude Skills cover that full arc, from a raw CSV to a boardroom-ready chart, and they're built for both ends of the data-analysis spectrum — the non-technical manager who's intimidated by pivot tables and the SQL-fluent analyst who just wants to skip the syntax debugging.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Stage 1: Ask Your Spreadsheet Questions in Plain English
      </h2>
      <p>
        The data you need is almost always already in a spreadsheet somewhere. Getting it out requires VLOOKUP, pivot tables, and formula syntax that's easy to forget the moment the tutorial ends. Most people who work with CSV exports and Excel files aren't spreadsheet experts — they're operations staff, marketers, or small business owners who need an answer, not a formula education.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/csv-data-analyst">CSV & Excel Data Analyst</PlaybookLink>{' '}
        Skill skips the formula layer entirely. Ask your question in plain English and get back the answer with supporting numbers, comparison charts, and often insights you didn't think to ask for — no VLOOKUP, no pivot table configuration, no remembering whether it's <code className="text-sm bg-[#0d1117] px-1 rounded">SUMIF</code> or <code className="text-sm bg-[#0d1117] px-1 rounded">SUMIFS</code>.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Which region had the highest growth rate last quarter, and how does that compare to the same quarter last year?"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">The answer is in the spreadsheet somewhere, but getting it out means a pivot table you half-remember how to configure and a formula you'll look up again next quarter</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Instant answer with supporting numbers, a comparison chart, and follow-up insights surfaced automatically — no formulas or pivot tables touched</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 5 minutes. Point it at any CSV or Excel file and start asking questions directly.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Stage 2: Get the Query Right the First Time
      </h2>
      <p>
        For analysts working against an actual database rather than a flat file, the equivalent friction is SQL syntax. You know exactly what you need — customers who signed up in Q1, joined against a revenue table, grouped by product category — but writing the query correctly on the first try means getting the JOINs, the date filtering, and the aggregation logic all right simultaneously. Getting it wrong doesn't throw an error; it silently returns the wrong numbers, and you don't find out until someone questions the report.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/natural-language-sql-writer">Natural Language SQL Writer</PlaybookLink>{' '}
        Skill translates a plain English description into an optimized query for your specific database dialect — PostgreSQL, Snowflake, BigQuery, Redshift, Databricks, MySQL, SQL Server, DuckDB, or SQLite. It uses proper JOIN types, readable CTEs instead of nested subqueries, and includes comments explaining what each section does, so the query is maintainable by the next person who touches it.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Show me monthly revenue by product category for customers who signed up in Q1, on Snowflake"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Twenty minutes writing a query with three JOINs and a CASE statement you can never remember the syntax for, twenty more minutes debugging it after it silently returns wrong numbers</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Optimized SQL with correct JOINs, proper date filtering, GROUP BY with window functions where needed, dialect-tested, and commented so the next person understands the logic</p>
        </div>
      </div>

      <p>
        This is especially valuable for teams that query across multiple database platforms — the dialect differences between PostgreSQL window functions and BigQuery's equivalents are exactly the kind of detail that's easy to get subtly wrong.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Specify your dialect once, then describe queries in plain English going forward.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Stage 3: Turn Default Charts into Presentation-Ready Figures
      </h2>
      <p>
        Once you have the numbers, the next problem is presenting them. Default matplotlib output looks like a homework assignment — default color cycle, tiny axis labels, no annotations, nothing that signals "this was made carefully." Getting from that default state to something presentation-ready is 50 lines of styling code that most analysts write once, forget, and rewrite from scratch next time.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/data-visualization-creator">Data Visualization Creator</PlaybookLink>{' '}
        Skill produces publication-quality visualizations directly — it selects the right chart type for your data (not just whatever you asked for by default), applies professional styling with a colorblind-friendly palette, adds proper labels and annotations, and exports a figure that's ready to drop into a report or deck. It also gives you the underlying Python code, so you can modify and reuse it rather than starting over each time.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Create a publication-quality chart showing user growth by cohort — I need it ready for a board deck"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Default matplotlib colors, labels too small to read on a projector, no annotations calling out the trend that matters — and 50 lines of formatting code standing between you and something presentable</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Right chart type selected for the data, professional styling with a colorblind-friendly palette, proper labels and annotations, export-ready figure, plus the Python code to reproduce or adjust it</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Works with matplotlib, seaborn, or plotly depending on whether you need static or interactive output.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Stage 4: Ship a Dashboard Without Waiting on Engineering
      </h2>
      <p>
        A single chart answers one question. A dashboard lets stakeholders explore several — but building one traditionally means Tableau or Looker licenses you may not have, a Jupyter notebook your team can't access, or a request to engineering that sits in a backlog for three sprints. Most of the time, what's actually needed is much simpler: a handful of charts, a couple of filters, and something anyone can open without installing anything.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/interactive-dashboard-builder">Interactive Dashboard Builder</PlaybookLink>{' '}
        Skill builds exactly that: a self-contained HTML file with Chart.js visualizations, dropdown filters, sortable tables, and professional styling. It opens in any browser with no server and no dependencies — you can email it as an attachment and the recipient just double-clicks to open it.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Build a dashboard showing our Q4 sales data with filters by region and product, and a sortable table underneath"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">No Tableau license, team members can't open your Jupyter notebook, and the engineering request for a proper dashboard is three sprints out — so the data sits in a spreadsheet nobody else can query</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Self-contained HTML file with Chart.js visualizations, dropdown filters by region and product, a sortable table, and professional styling — opens in any browser, shareable as a single email attachment</p>
        </div>
      </div>

      <p>
        Particularly useful for consultants delivering client reports, startups without BI tool budgets, and any team meeting where "can everyone open the file" matters more than enterprise dashboard features.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Describe your data and the filters you need — the output is a single HTML file, ready to share.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Full Workflow, End to End
      </h2>
      <p>
        These four Skills map cleanly onto the natural progression of a data analysis task:
      </p>
      <ol className="list-decimal list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">CSV & Excel Data Analyst</span> — start here for spreadsheet data, ask questions directly in plain English</li>
        <li><span className="text-foreground font-medium">Natural Language SQL Writer</span> — use this instead when the data lives in a database rather than a flat file</li>
        <li><span className="text-foreground font-medium">Data Visualization Creator</span> — once you have your numbers, turn them into a polished figure for a report or deck</li>
        <li><span className="text-foreground font-medium">Interactive Dashboard Builder</span> — when stakeholders need to explore the data themselves rather than view a single static chart</li>
      </ol>
      <p>
        Not every task needs all four. A one-off question for a manager might stop at Skill 1. A recurring executive report probably wants Skills 1 or 2 feeding into Skill 3. An ongoing stakeholder tool is where Skill 4 earns its place. The point isn't to always run the full pipeline — it's that the pipeline exists, end to end, regardless of whether you started as a SQL expert or someone who's never opened a pivot table.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/csv-data-analyst">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">CSV & Excel Data Analyst</p>
            <p className="text-sm text-muted-foreground">Ask spreadsheet questions in plain English — no formulas, no pivot tables</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/natural-language-sql-writer">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Natural Language SQL Writer</p>
            <p className="text-sm text-muted-foreground">Optimized, dialect-specific SQL from plain English — PostgreSQL, BigQuery, Snowflake, and more</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/data-visualization-creator">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Data Visualization Creator</p>
            <p className="text-sm text-muted-foreground">Publication-quality charts with professional styling, right chart type selected automatically</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/interactive-dashboard-builder">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Interactive Dashboard Builder</p>
            <p className="text-sm text-muted-foreground">Self-contained, shareable HTML dashboards — no server, no BI tool license required</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
