import { Metadata } from 'next';
import Link from 'next/link';
import { AffiliateDisclosure, AffiliateLink } from '@/components/AffiliateLink';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Code + Fiscal.ai MCP: Write an Earnings Note in 10 Minutes | Claude Code Playbooks Blog',
  description: "Connect Claude Code to Fiscal.ai's hosted MCP server for live financials, ratios, and transcripts, then pair it with the Equity Research Skills to draft a complete earnings note in about 10 minutes.",
  alternates: { canonical: '/blog/fiscal-ai-mcp-earnings-note' },
  openGraph: {
    title: 'Claude Code + Fiscal.ai MCP: Write an Earnings Note in 10 Minutes',
    description: "Connect Claude Code to Fiscal.ai's hosted MCP server for live financials, ratios, and transcripts, then pair it with the Equity Research Skills to draft a complete earnings note in about 10 minutes.",
    url: 'https://www.claudecodehq.com/blog/fiscal-ai-mcp-earnings-note',
    type: 'article',
    publishedTime: '2026-09-22T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Code + Fiscal.ai MCP: Write an Earnings Note in 10 Minutes',
    description: "Connect Claude Code to Fiscal.ai's hosted MCP server for live financials, ratios, and transcripts, then pair it with the Equity Research Skills to draft a complete earnings note in about 10 minutes.",
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

function Code({ children }: { children: React.ReactNode }) {
  return <code className="text-sm bg-[#0d1117] px-1.5 py-0.5 rounded text-[#f97316]">{children}</code>;
}

export default function FiscalAiMcpEarningsNotePage() {
  return (
    <BlogPostLayout
      title="Claude Code + Fiscal.ai MCP: Write an Earnings Note in 10 Minutes"
      description="Connect Claude Code to Fiscal.ai's hosted MCP server for live financials, ratios, and transcripts, then pair it with the Equity Research Skills to draft a complete earnings note in about 10 minutes."
      category="mcp"
      difficulty="intermediate"
      readingTime="11 min read"
      createdAt="2026-09-22"
      tags={['fiscal.ai mcp', 'claude mcp financial data', 'ai earnings note', 'automate equity research note', 'claude code mcp setup', 'equity research ai', 'financial data mcp server']}
      author="Claude Code Playbooks"
      slug="fiscal-ai-mcp-earnings-note"
    >
      <AffiliateDisclosure className="mb-6" />
      <p>
        The Equity Research Skills we've covered before — <PlaybookLink href="/playbooks/er-earnings-analysis">earnings updates</PlaybookLink>,{' '}
        <PlaybookLink href="/playbooks/er-morning-note">morning notes</PlaybookLink>, <PlaybookLink href="/playbooks/er-model-update">model updates</PlaybookLink> — are genuinely good at structure: they know what a morning note is supposed to look like, how a model update should compare actuals to estimates, what an earnings summary needs to cover. What they don't have on their own is the data. Claude can write a flawless-looking note built on numbers you typed in from memory, and it will read exactly as confidently wrong as one built on numbers you got right.
      </p>
      <p>
        That's the actual gap this post closes. <AffiliateLink partner="fiscal-ai">Fiscal.ai</AffiliateLink> runs a hosted MCP server — a live connection Claude Code can query directly for financial statements, ratios, filings, and transcripts, the same way it would call any other tool. Wire it in once, and every Skill above stops working from numbers you paste in and starts working from numbers it looked up itself.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        What the Fiscal.ai MCP Server Actually Is
      </h2>
      <p>
        This isn't a local tool you install and run — it's a remote, hosted MCP endpoint at{' '}
        <Code>https://api.fiscal.ai/mcp</Code>. Claude Code connects to it over HTTP the same way it connects to any other MCP server; there's no separate service to keep running on your machine. Once connected, it exposes company profiles, standardized and as-reported financial statements (income statement, balance sheet, cash flow), financial ratios and metrics, daily and intraday pricing, insider and institutional ownership data, corporate actions and events calendars, filings and earnings call transcripts, and news and fund letters.
      </p>
      <p>
        For an earnings note specifically, the pieces that matter most are the standardized financials (so this quarter lines up cleanly against last quarter and the year-ago quarter without you reconciling different reporting formats by hand), the transcripts (so you can pull management's actual language on guidance instead of paraphrasing from memory), and the ratio data (so valuation multiples come from a consistent source instead of a mix of your model and whatever a search result said).
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Connecting Claude Code to Fiscal.ai
      </h2>
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm text-muted-foreground mb-0">
          <span className="text-foreground font-medium">No Fiscal.ai account yet?</span> You need one before either command below will authenticate. Every plan starts with a 7-day free trial that includes the MCP connection, so you can run the whole workflow before paying anything.{' '}
          <AffiliateLink partner="fiscal-ai">Create a Fiscal.ai account →</AffiliateLink>
        </p>
      </div>
      <p>
        There are two ways to authenticate, and they grant identical access to your Fiscal.ai account — pick whichever fits your setup.
      </p>
      <p>
        <strong className="text-foreground">OAuth</strong> — Claude Code opens a browser window, you sign in, and there's no key to manage or accidentally commit to a repo:
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          claude mcp add --transport http fiscal https://api.fiscal.ai/mcp
        </p>
      </div>
      <p>
        <strong className="text-foreground">API key</strong> — if you'd rather skip the browser step (useful in CI, a headless environment, or if OAuth isn't practical for your setup), pass your Fiscal.ai key as a bearer token instead:
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0 whitespace-pre-wrap">
          {`claude mcp add --transport http fiscal https://api.fiscal.ai/mcp \\
  --header "Authorization: Bearer YOUR-API-KEY"`}
        </p>
      </div>
      <p>
        Either command registers the server under the name <Code>fiscal</Code>, and its tools become available in your next Claude Code session — no separate config file to edit. One honest caveat: Fiscal.ai's free plan connects and works, but company coverage and rate limits are the free-plan ones. For daily coverage of a real watchlist rather than occasional lookups, you'll want a paid plan — the same tradeoff as any data vendor, not something specific to the MCP layer.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The 10-Minute Earnings Note
      </h2>
      <p>
        Here's the actual workflow, roughly timed, combining the live data connection with the Skills built for the output format. The example below is for a company that just reported — swap in your own ticker and coverage name.
      </p>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Minutes 0–3: Pull the quarter and update the model</h3>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Pull Nike's Q3 actuals from Fiscal.ai — income statement, balance sheet, and cash flow — and update my model with the reported figures versus our prior estimates"
        </p>
      </div>
      <p>
        This is where the <PlaybookLink href="/playbooks/er-model-update">Equity Research Model Update</PlaybookLink> Skill does its job with real inputs instead of hand-typed ones: actuals plugged in directly from the MCP connection, forward estimates revised, price target recalculated, and a clear flag on whether anything that changed is thesis-altering or just noise.
      </p>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Minutes 3–6: Pull the transcript and check guidance language</h3>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Pull the earnings call transcript and summarize what management said about forward guidance, margin trajectory, and anything analysts pushed back on in Q&A"
        </p>
      </div>
      <p>
        This is the step that used to mean either paying for a transcript service separately or reading forty pages of a call transcript yourself to find the three sentences that actually moved the stock. With transcripts available through the same MCP connection, that search happens directly against the source text, not a secondhand summary.
      </p>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Minutes 6–10: Draft the note itself</h3>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Draft this morning's note on Nike — top call headline, the earnings reaction, what changed in the model, and a trade idea with risk parameters, readable in under 2 minutes"
        </p>
      </div>
      <p>
        This is the <PlaybookLink href="/playbooks/er-morning-note">Equity Research Morning Note</PlaybookLink> Skill, now working from the actuals and transcript context pulled in the two steps above rather than from a blank page. If a fuller written summary of the print itself is what's needed instead of the tight morning-note format, the <PlaybookLink href="/playbooks/er-earnings-analysis">Equity Research Earnings Update</PlaybookLink> Skill covers that longer form using the same underlying data.
      </p>
      <p>
        Ten minutes is a realistic target for a name you already cover with an existing model — the MCP connection removes the data-gathering tax, not the analytical judgment. The thesis call is still yours; what's gone is the twenty minutes of copying numbers between tabs before you could even start making it.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        If You Don't Have Fiscal.ai Yet
      </h2>
      <p>
        For practice, coursework, or a quick DCF where institutional-grade coverage isn't the point, the{' '}
        <PlaybookLink href="/playbooks/financial-data-collector">Financial Data Collector</PlaybookLink>{' '}
        Skill pulls free data from yfinance into structured JSON — market data, historical financials, WACC inputs, and estimates, with every field tagged by source or explicitly marked missing rather than silently defaulted. It won't give you the standardized cross-quarter financials, ownership data, or transcripts that make the workflow above genuinely fast, but it's a real, honest starting point that doesn't require a paid data connection at all.
      </p>
      <p>
        The difference in practice: yfinance gets you a model you can defend the math on. A live MCP connection to institutional data gets you a model and a note you can defend to a PM before the 7am call.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Skills, and the Data Layer Under Them
      </h2>
      <ul className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Structure and judgment</span> — <PlaybookLink href="/playbooks/er-earnings-analysis">Earnings Analysis</PlaybookLink>, <PlaybookLink href="/playbooks/er-morning-note">Morning Note</PlaybookLink>, and <PlaybookLink href="/playbooks/er-model-update">Model Update</PlaybookLink> know the formats; they still need real numbers to be right about anything</li>
        <li><span className="text-foreground font-medium">Live institutional data</span> — Fiscal.ai's MCP connector at <Code>https://api.fiscal.ai/mcp</Code> supplies standardized financials, ratios, ownership, and transcripts directly to Claude Code</li>
        <li><span className="text-foreground font-medium">Free alternative</span> — <PlaybookLink href="/playbooks/financial-data-collector">Financial Data Collector</PlaybookLink> covers the same shape of workflow from free sources when institutional coverage isn't required</li>
      </ul>
      <p className="text-sm text-muted-foreground">
        Fiscal.ai's own MCP integration docs cover the full tool list and additional client setups (Claude Desktop, Cursor, VS Code, and others) beyond what's needed for the Claude Code walkthrough above, at{' '}
        <AffiliateLink partner="fiscal-ai" className="font-normal">fiscal.ai</AffiliateLink>.
      </p>
    </BlogPostLayout>
  );
}
