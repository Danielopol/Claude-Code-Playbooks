import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';
import { AffiliateDisclosure, AffiliateLink } from '@/components/AffiliateLink';

export const metadata: Metadata = {
  title: 'Koyfin vs Fiscal.ai: Which Data Platform for AI-Assisted Research? | Claude Code Playbooks Blog',
  description: "A head-to-head on price, coverage, data export, and MCP support — and which one fits a Claude-powered research workflow.",
  alternates: { canonical: '/blog/koyfin-vs-fiscal-ai' },
  openGraph: {
    title: 'Koyfin vs Fiscal.ai: Which Data Platform for AI-Assisted Research?',
    description: "A head-to-head on price, coverage, data export, and MCP support — and which one fits a Claude-powered research workflow.",
    url: 'https://www.claudecodehq.com/blog/koyfin-vs-fiscal-ai',
    type: 'article',
    publishedTime: '2026-09-28T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koyfin vs Fiscal.ai: Which Data Platform for AI-Assisted Research?',
    description: "A head-to-head on price, coverage, data export, and MCP support — and which one fits a Claude-powered research workflow.",
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

function PostLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[#22d3ee] hover:underline font-medium">
      {children}
    </Link>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return <code className="text-sm bg-[#0d1117] px-1.5 py-0.5 rounded text-[#f97316]">{children}</code>;
}

const rows: [string, string, string][] = [
  ['Entry paid plan', 'Plus — $39/mo', 'Pro — $39/mo billed annually ($49 month-to-month)'],
  ['Next tier', 'Premium — $79/mo', 'Max — $79/mo billed annually'],
  ['Free plan', 'Yes, no screener', 'Yes — 100 large-cap companies, 250 data calls/day'],
  ['Coverage', '100K+ global securities, plus ETFs, mutual funds, fixed income, FX, crypto, macro', '13,000+ public companies across the US, Canada, ADRs, UK & Europe'],
  ['Fundamentals source', 'S&P Capital IQ', 'Each figure links back to its source filing'],
  ['Screener', '5,900+ filter criteria (Plus and up)', 'Not the core product'],
  ['Export fundamentals', 'No — financials, estimates, and valuation are blocked from download', 'Yes, programmatically — through the API and MCP, within your plan'],
  ['Built-in AI', 'None listed', 'AI summaries and research chat (it began life as FinChat)'],
  ['MCP / Claude connection', 'None', 'Official Claude connector at api.fiscal.ai/mcp'],
  ['Best at', 'Screening, charting, portfolios, advisor reporting', 'Feeding verified fundamentals, KPIs, and transcripts to Claude'],
];

export default function KoyfinVsFiscalAiPage() {
  return (
    <BlogPostLayout
      title="Koyfin vs Fiscal.ai: Which Data Platform for AI-Assisted Research?"
      description="A head-to-head on price, coverage, data export, and MCP support — and which one fits a Claude-powered research workflow."
      category="guide"
      difficulty="basic"
      readingTime="10 min read"
      createdAt="2026-09-28"
      tags={['koyfin vs fiscal.ai', 'koyfin alternative', 'fiscal.ai review', 'finchat vs koyfin', 'financial data mcp', 'ai equity research tools']}
      author="Claude Code Playbooks"
      slug="koyfin-vs-fiscal-ai"
    >
      <AffiliateDisclosure className="mb-6" />
      <p>
        <AffiliateLink partner="koyfin">Koyfin</AffiliateLink> and <AffiliateLink partner="fiscal-ai">Fiscal.ai</AffiliateLink> show up in the same searches and start at the same price, $39 a month. They are built for different jobs, though. Koyfin is a research terminal for looking at markets: screening, charting, tracking portfolios. Fiscal.ai is a data platform for sending numbers somewhere else, and that somewhere is increasingly an AI model. Which one you should pay for depends on where your analysis actually happens.
      </p>
      <p>
        If you do your thinking in Claude, that one question settles most of the decision. Here&apos;s the short version first, then the detail behind it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22d3ee] uppercase tracking-wide mb-2">Pick Koyfin if</p>
          <p className="text-sm text-muted-foreground">You screen across a huge universe, live in charts, track portfolios, or report to advisory clients, and your research mostly happens on screen</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22d3ee] uppercase tracking-wide mb-2">Pick Fiscal.ai if</p>
          <p className="text-sm text-muted-foreground">You want Claude to pull fundamentals, KPIs, and transcripts itself, with every figure traceable to its filing</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22d3ee] uppercase tracking-wide mb-2">Use both if</p>
          <p className="text-sm text-muted-foreground">You screen broadly, then need deep, verified numbers on the names that survive. Koyfin does the filtering and Fiscal.ai does the enrichment</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Side by Side
      </h2>
      <div className="overflow-x-auto my-6 rounded-lg border border-[#30363d]">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#161b22] text-left">
              <th className="px-4 py-3 font-semibold text-foreground border-b border-[#30363d]"></th>
              <th className="px-4 py-3 font-semibold text-foreground border-b border-[#30363d]">Koyfin</th>
              <th className="px-4 py-3 font-semibold text-foreground border-b border-[#30363d]">Fiscal.ai</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, koyfin, fiscal]) => (
              <tr key={label} className="border-b border-[#30363d] last:border-0 align-top">
                <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">{label}</td>
                <td className="px-4 py-3 text-muted-foreground">{koyfin}</td>
                <td className="px-4 py-3 text-muted-foreground">{fiscal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-muted-foreground">
        Prices and plan contents were checked in September 2026 and change often, so confirm on each vendor&apos;s pricing page before you buy.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Price
      </h2>
      <p>
        The entry and mid tiers line up almost exactly. Koyfin&apos;s paid ladder is Plus at $39, Premium at $79, then Advisor Core at $209 and Advisor Pro at $299 for wealth management firms. Fiscal.ai&apos;s runs Pro at $39 a month billed annually ($49 month-to-month) and Max at $79. Beyond those sits a separate API &amp; MCP product for developers and teams, priced through Fiscal.ai&apos;s sales team.
      </p>
      <p>
        That last part matters if Claude is your main use. Fiscal.ai&apos;s docs describe paid and commercial API limits as far above the free tier, but they don&apos;t publish which terminal plan unlocks how much MCP access. The free tier is the honest way to find out: it connects to Claude with no credit card, covers 100 large-cap companies, and allows 250 data calls a day. That&apos;s enough to decide whether the workflow earns its price before you pay for anything.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Coverage
      </h2>
      <p>
        Koyfin is the broader platform. Its screener spans more than 100,000 global securities. Beyond equities it covers ETFs, mutual funds, fixed income, FX, crypto, and macro data, plus 11,000+ US separately managed accounts, and it integrates with Schwab, Fidelity, Interactive Brokers, and other custodians for advisors. If your research starts with &quot;show me everything that matches,&quot; Koyfin has the bigger universe.
      </p>
      <p>
        Fiscal.ai goes deeper on a narrower set: 13,000+ public companies across the US, Canada, ADRs, and UK &amp; Europe. Its strength is the kind of data that&apos;s hard to get clean: company-specific KPIs, revenue segments, and adjusted metrics, with every figure linked back to its source filing. For an analyst, that link is what turns a number from &quot;probably right&quot; into something you can defend.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Export: The Difference That Decides It for AI Work
      </h2>
      <p>
        This is where the two platforms split most clearly. Koyfin licenses its fundamentals from S&amp;P Capital IQ, and its own help center says financials, estimates, and valuation data for global equities are restricted from download. You can export a screen to CSV, but the file carries tickers, price, performance, and technicals. It doesn&apos;t carry the fundamentals you screened on.
      </p>
      <p>
        Fiscal.ai exists to move data out. Its API and MCP server deliver fundamentals programmatically, so within your plan&apos;s coverage, Claude can request the numbers and receive them directly, with no spreadsheet in between. If the destination for your data is an AI model, Fiscal.ai is designed for that and Koyfin isn&apos;t.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        MCP and Claude Support
      </h2>
      <p>
        Fiscal.ai is an official Claude connector. From Claude Code, one command connects it:
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4 overflow-x-auto">
        <pre className="text-sm font-mono text-[#f97316] mb-0 whitespace-pre">claude mcp add --transport http fiscal https://api.fiscal.ai/mcp</pre>
      </div>
      <p>
        After that, Claude can pull statements, ratios, ownership, and transcripts on its own. Our <PostLink href="/blog/fiscal-ai-mcp-earnings-note">Fiscal.ai MCP walkthrough</PostLink> covers the full setup, including API-key authentication, and uses it to write an earnings note in about ten minutes.
      </p>
      <p>
        Koyfin&apos;s own product description lists no AI assistant, API, or MCP server. The practical bridge to Claude is the CSV export: you screen in Koyfin, export the ticker list, and let Claude enrich and score each name. Our <PostLink href="/blog/koyfin-claude-pe-deal-screening">Koyfin + Claude deal screening guide</PostLink> walks through that workflow, including how to work around the export restriction.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Which Fits Your Claude Workflow
      </h2>
      <ul className="list-disc list-inside space-y-3 my-4 text-muted-foreground">
        <li>
          <span className="text-foreground font-medium">Single-company deep dives:</span> the{' '}
          <PlaybookLink href="/playbooks/stock-analysis">Stock Analysis</PlaybookLink> Skill combines fundamentals and technicals into one report. Fiscal.ai supplies the fundamentals directly. Koyfin is excellent for the charting side, but you&apos;d be moving the numbers into Claude by hand.
        </li>
        <li>
          <span className="text-foreground font-medium">Sector and landscape work:</span> the{' '}
          <PlaybookLink href="/playbooks/er-sector-overview">Sector Overview</PlaybookLink> Skill needs a comparison table of players and multiples. Koyfin is the better tool for finding the players. Fiscal.ai is the better source for comparable, filing-linked numbers once you have them.
        </li>
        <li>
          <span className="text-foreground font-medium">Valuation and modeling:</span> the{' '}
          <PlaybookLink href="/playbooks/financial-analyst-toolkit">Financial Analyst Toolkit</PlaybookLink> runs DCFs, ratio analysis, and comps from the data you give it. Its output is only as good as those inputs, and inputs Claude can trace to a filing beat numbers retyped from a terminal screen.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Case for Using Both
      </h2>
      <p>
        The two products overlap less than their matching price tags suggest. A common setup is to screen the market in Koyfin, where 5,900+ criteria across 100,000+ securities narrow the field to a few dozen names. Then Claude takes that list and pulls verified fundamentals for each company through Fiscal.ai&apos;s MCP connection. Koyfin does the filtering, which is its strength. Fiscal.ai provides the numbers Koyfin&apos;s license won&apos;t let you export, and Claude does the scoring and writing.
      </p>
      <p>
        If you can only pay for one, the question from the top still decides it. If the output of your research is a chart, a watchlist, or a client report, choose Koyfin. If the output is a note, a memo, or a model that Claude writes from verified data, choose Fiscal.ai. Either way, start with the free tier before paying.
      </p>
      <p className="text-sm text-muted-foreground mt-8">
        Try <AffiliateLink partner="fiscal-ai" className="font-normal">Fiscal.ai</AffiliateLink> (free tier, plus a 7-day trial on paid plans) or{' '}
        <AffiliateLink partner="koyfin" className="font-normal">Koyfin</AffiliateLink> (free plan, with the screener from $39/month). The Fiscal.ai MCP server address is <Code>https://api.fiscal.ai/mcp</Code>.
      </p>
    </BlogPostLayout>
  );
}
