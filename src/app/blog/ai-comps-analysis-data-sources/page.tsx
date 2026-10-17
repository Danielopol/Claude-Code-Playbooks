import { Metadata } from 'next';
import Link from 'next/link';
import { AffiliateDisclosure, AffiliateLink } from '@/components/AffiliateLink';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'How to Run Comps Analysis with AI (and Where the Data Actually Comes From) | Claude Code Playbooks Blog',
  description: "Every AI comps demo starts with the numbers already in the sheet. Here is where trading comps data really comes from, what each source costs and misses, and a Claude Code workflow that builds the table with a clean EV bridge and honest gaps.",
  alternates: { canonical: '/blog/ai-comps-analysis-data-sources' },
  openGraph: {
    title: 'How to Run Comps Analysis with AI (and Where the Data Actually Comes From)',
    description: "Every AI comps demo starts with the numbers already in the sheet. Here is where trading comps data really comes from, what each source costs and misses, and a Claude Code workflow that builds the table with a clean EV bridge and honest gaps.",
    url: 'https://www.claudecodehq.com/blog/ai-comps-analysis-data-sources',
    type: 'article',
    publishedTime: '2026-10-17T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Run Comps Analysis with AI (and Where the Data Actually Comes From)',
    description: "Every AI comps demo starts with the numbers already in the sheet. Here is where trading comps data really comes from, what each source costs and misses, and a Claude Code workflow that builds the table with a clean EV bridge and honest gaps.",
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

function CodeBlock({ children }: { children: string }) {
  return (
    <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4 overflow-x-auto">
      <pre className="text-sm font-mono text-[#f97316] mb-0 whitespace-pre">{children}</pre>
    </div>
  );
}

function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
      <p className="text-sm font-mono text-[#f97316] mb-0">{children}</p>
    </div>
  );
}

const H2 = 'text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2';
const H3 = 'text-xl font-semibold text-foreground mt-8 mb-3';
const TH = 'text-left p-3 border-b border-[#30363d] text-foreground';
const TD = 'p-3 border-b border-[#30363d] align-top';

export default function AiCompsAnalysisDataSourcesPage() {
  return (
    <BlogPostLayout
      title="How to Run Comps Analysis with AI (and Where the Data Actually Comes From)"
      description="Every AI comps demo starts with the numbers already in the sheet. Here is where trading comps data really comes from, what each source costs and misses, and a Claude Code workflow that builds the table with a clean EV bridge and honest gaps."
      category="tutorial"
      difficulty="intermediate"
      readingTime="13 min read"
      createdAt="2026-10-17"
      tags={['ai comps analysis', 'comparable company analysis automation', 'trading comps ai', 'comps data sources', 'enterprise value bridge', 'claude code finance', 'fmp api comps']}
      author="Claude Code Playbooks"
      slug="ai-comps-analysis-data-sources"
    >
      <AffiliateDisclosure className="mb-6" />
      <p>
        Every demo of AI building a comps table skips the same step. It starts with a spreadsheet that already has the numbers in it, then shows the model computing multiples and a football field. Anyone who has built a comps sheet knows that is the easy part. The hard part is getting ten companies&apos; enterprise values, trailing figures and estimates onto the same footing, from a source you can defend when the MD asks where a number came from.
      </p>
      <p>
        This post answers that question first and builds the table second. We map what a comps table actually needs, the places that data can come from and what each one costs and leaves out, and then run a Claude Code workflow on a source anyone can use. You&apos;ll see why the answer for forward multiples is different from the answer for trailing ones, and why that matters more than any prompt.
      </p>

      <h2 className={H2}>What a Comps Table Needs, and Which Parts Are Hard</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className={TH}>Input</th>
              <th className={TH}>Difficulty</th>
              <th className={TH}>Why</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr><td className={TD}>Share price and shares outstanding</td><td className={TD}>Easy</td><td className={TD}>Widely available. Check the as-of date.</td></tr>
            <tr><td className={TD}>Debt, cash, minority interest, preferred</td><td className={TD}>Medium</td><td className={TD}>Needed for the EV bridge. Easy to omit one item and shift every multiple.</td></tr>
            <tr><td className={TD}>LTM revenue, EBITDA, net income</td><td className={TD}>Medium</td><td className={TD}>Built from the last four quarters. Definitions of EBITDA differ across vendors.</td></tr>
            <tr><td className={TD}>NTM / forward estimates</td><td className={TD}>Hard</td><td className={TD}>Consensus estimates are the most tightly licensed data in the stack.</td></tr>
            <tr><td className={TD}>The peer set</td><td className={TD}>Judgment</td><td className={TD}>No data source decides this for you.</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        That last row is the one AI does worst without help and the one where a screening tool earns its keep. We&apos;ll get there in step one.
      </p>

      <h2 className={H2}>Where the Data Can Come From</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className={TH}>Source</th>
              <th className={TH}>What you get</th>
              <th className={TH}>The catch</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className={TD}><strong className="text-foreground">Institutional terminals</strong> (Capital IQ, FactSet, Bloomberg, PitchBook)</td>
              <td className={TD}>Standardized financials, EV, consensus estimates, transaction data</td>
              <td className={TD}>Licensed to your firm. Whether Claude may touch the data depends on your agreement.</td>
            </tr>
            <tr>
              <td className={TD}><strong className="text-foreground">Data APIs</strong> (<AffiliateLink partner="fmp">Financial Modeling Prep</AffiliateLink>, <AffiliateLink partner="fiscal-ai">Fiscal.ai</AffiliateLink>)</td>
              <td className={TD}>Standardized statements, ratios and market data you can call from code or MCP</td>
              <td className={TD}>Plan limits on history, coverage and call volume. You are trusting their standardization.</td>
            </tr>
            <tr>
              <td className={TD}><strong className="text-foreground">SEC filings</strong> (EDGAR XBRL API)</td>
              <td className={TD}>As-reported US figures, free, no key</td>
              <td className={TD}>No EV, no prices, and the same item can sit under different tags in different companies&apos; filings. You do the standardizing.</td>
            </tr>
            <tr>
              <td className={TD}><strong className="text-foreground">Screening platforms</strong> (<AffiliateLink partner="koyfin">Koyfin</AffiliateLink>)</td>
              <td className={TD}>Peer discovery, screens, a lookup for sanity checks</td>
              <td className={TD}>Fundamentals can&apos;t be downloaded, so it isn&apos;t a feed for your sheet.</td>
            </tr>
            <tr>
              <td className={TD}><strong className="text-foreground">Free scrapers</strong> (yfinance and similar)</td>
              <td className={TD}>Prices and statements at no cost</td>
              <td className={TD}>Unofficial and unsupported. Fine to learn on, risky to rely on.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The pattern to take from this table: <strong className="text-foreground">peer discovery, trailing numbers and forward estimates are three different data problems</strong>, and no free source solves all three. The SEC&apos;s XBRL API is free, needs no key, and asks for a declared User-Agent and a limit of about ten requests a second, but it gives you reported figures and nothing else. FMP&apos;s free plan allows 250 calls a day and covers statements and market data. Consensus forward estimates are what institutional platforms charge for, and we haven&apos;t found a free route that gives you the same thing.
      </p>
      <p>
        So the honest options for forward multiples are to use a licensed source if you have one, to run trailing multiples only, or to use your own estimates and label them as yours. What you shouldn&apos;t do is let a model produce an NTM EBITDA that no source gave it. We&apos;ll hard-code that rule below.
      </p>

      <h2 className={H2}>The Workflow</h2>
      <h3 className={H3}>Step 1: Pick the peers (a screen, then judgment)</h3>
      <p>
        <AffiliateLink partner="koyfin">Koyfin</AffiliateLink> is useful here. Build a screen on sector, market cap range and growth or margin filters, and export the resulting list. The export won&apos;t include the fundamentals you screened on (Koyfin licenses them from Capital IQ and restricts download of financials, estimates and valuation data), but it doesn&apos;t need to: you only want the tickers. The screen is the peer-discovery step, and the numbers come from elsewhere. Our{' '}
        <PlaybookLink href="/blog/koyfin-claude-pe-deal-screening">Koyfin screening workflow</PlaybookLink> covers that split in more detail.
      </p>
      <p>
        Then have Claude critique the list instead of accepting it. A screen finds companies that look similar on paper, not ones that compete for the same customers.
      </p>
      <Prompt>
        Here are 18 tickers from a Koyfin screen for [target], a [one-line business description]. Propose a peer set of 8 to 10. For each name, give one line on why it&apos;s comparable (business model, customer, scale, growth) and flag any that I should drop because the business is different. List any obvious peers the screen missed.
      </Prompt>
      <h3 className={H3}>Step 2: Pull the inputs, with a source on every field</h3>
      <p>
        For the numbers, use an API with a free tier. With FMP, each peer needs the quarterly income statement, balance sheet and cash flow statement, plus the current quote or profile. That is about four calls per company, or roughly 40 calls for a ten-company set, well inside a free day&apos;s 250. The caching fetch helper from our{' '}
        <PlaybookLink href="/blog/fmp-api-dcf-claude-code">FMP DCF walkthrough</PlaybookLink> works unchanged: it never writes the key into the cache, and reruns cost nothing. If you prefer MCP to REST, the{' '}
        <PlaybookLink href="/blog/fiscal-ai-mcp-earnings-note">Fiscal.ai MCP setup</PlaybookLink> gets you the same kind of statements through a hosted server.
      </p>
      <p>
        Tell Claude to print real field names from one live response before it writes any model code. Do not let it assume them. Whether quarterly history and enough periods are available depends on your plan, so have it report how many quarters came back for each company and stop if there are fewer than four.
      </p>
      <h3 className={H3}>Step 3: Compute with plain, auditable code</h3>
      <p>
        The calculations are simple, which is why they should be code and not a model&apos;s mental arithmetic. Four functions cover the core of a comps table:
      </p>
      <CodeBlock>{`from statistics import median, quantiles


def enterprise_value(market_cap, total_debt, cash, minority_interest=0.0, preferred=0.0):
    """EV = equity value + debt + minority interest + preferred - cash."""
    return market_cap + total_debt + minority_interest + preferred - cash


def ltm(quarters, field):
    """Sum the last four reported quarters. Refuse to guess if any are missing."""
    last4 = sorted(quarters, key=lambda q: q["date"])[-4:]
    if len(last4) < 4 or any(q.get(field) is None for q in last4):
        raise ValueError(f"cannot build LTM {field}: need four reported quarters")
    return sum(q[field] for q in last4)


def multiple(ev, metric):
    """Zero or negative denominators are not meaningful: report NM (None)."""
    return ev / metric if metric and metric > 0 else None


def summarize(values):
    vals = sorted(v for v in values if v is not None)
    if len(vals) < 4:
        return {"n": len(vals), "median": median(vals) if vals else None}
    q1, q2, q3 = quantiles(vals, n=4)
    return {"n": len(vals), "q1": q1, "median": q2, "q3": q3}`}</CodeBlock>
      <p>
        Three design choices in there are deliberate. <Code>ltm</Code> raises an error instead of extrapolating when a quarter is missing. <Code>multiple</Code> returns <Code>None</Code> for a negative denominator, so a loss-making peer shows as NM and doesn&apos;t distort the median. And <Code>summarize</Code> reports how many companies the statistics rest on, because a median of three is a different claim from a median of ten.
      </p>
      <p>
        One more rule: have Claude compute EBITDA the same way for every company, from operating income plus depreciation and amortization, instead of using whatever EBITDA field each source ships. Vendors define it differently, and mixing definitions is the most common reason two comps tables for the same sector disagree.
      </p>
      <h3 className={H3}>Step 4: Build the workbook with the playbook</h3>
      <p>
        With clean inputs, the{' '}
        <PlaybookLink href="/playbooks/fa-comps-analysis">Comparable Company Analysis Builder</PlaybookLink>{' '}
        playbook handles the presentation layer: operating metrics, growth and margins, multiples, quartile statistics, an implied valuation range and a football field chart. Give it your computed table and the target&apos;s metrics and let it do the formatting and the bridge from enterprise value to implied share price.
      </p>
      <Prompt>
        Build the comps workbook from comps.json using the Comps Analysis Builder format. Show LTM multiples only, because we have no sourced forward estimates. Put the source and as-of date for each company&apos;s inputs on a separate tab. Mark any peer with a different fiscal year-end. Apply the implied range to [target]&apos;s LTM EBITDA and show how much of the range comes from the top and bottom quartiles.
      </Prompt>
      <h3 className={H3}>Step 5: Reconcile before anyone sees it</h3>
      <p>
        Pick two peers and tie their LTM revenue and net debt to the latest filings by hand. If the two match, the pipeline is probably sound. If one doesn&apos;t, you have found a field-mapping or period problem before the MD did. Ask Claude to list every adjustment it made and every field it could not source. That list is your review checklist.
      </p>

      <h2 className={H2}>The Four Ways AI Comps Go Wrong</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-foreground">Invented forward numbers.</strong> A model asked for NTM multiples without an estimates source will often produce plausible ones. Require a source on every estimate, and default to trailing-only.
        </li>
        <li>
          <strong className="text-foreground">Incomplete EV bridges.</strong> Leaving out minority interest or preferred stock, or counting leases inconsistently, shifts multiples without any visible error. Use one bridge definition for every company and state it on the sheet.
        </li>
        <li>
          <strong className="text-foreground">Mismatched periods.</strong> A peer with a September year-end next to one with December, or a price from today next to a balance sheet from nine months ago. Show the as-of date on every row.
        </li>
        <li>
          <strong className="text-foreground">Mixed definitions.</strong> EBITDA from three vendors, with and without stock-based compensation and one-offs. Compute it yourself from the statements.
        </li>
      </ul>

      <h2 className={H2}>Where the Comps Go Next</h2>
      <p>
        A comps table is rarely the end of the work. It feeds three other deliverables:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-foreground">Buyer lists.</strong> Once you have the peers and the strategic universe, the{' '}
          <PlaybookLink href="/playbooks/ib-strip-profile">Company Strip Profile Generator</PlaybookLink> turns each buyer into a one-page profile with financials, rationale and M&amp;A history.
        </li>
        <li>
          <strong className="text-foreground">Exit assumptions.</strong> The median and quartile multiples are the evidence behind an exit multiple. Feed them into the{' '}
          <PlaybookLink href="/playbooks/pe-returns-analysis">PE Returns Analysis</PlaybookLink>{' '}
          playbook to see how returns move if the exit lands at the 25th percentile instead of the median.
        </li>
        <li>
          <strong className="text-foreground">The qualitative story.</strong> Multiples say what the market pays, not why. The{' '}
          <PlaybookLink href="/playbooks/fa-competitive-analysis">Competitive Landscape Analysis Deck</PlaybookLink>{' '}
          playbook supplies positioning and moat analysis to explain why your target should trade at the high or low end.
        </li>
      </ul>

      <h2 className={H2}>Which Data Route Fits You</h2>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">You have a Capital IQ or FactSet seat</p>
          <p className="text-sm text-muted-foreground mb-0">Use it for estimates and transaction data, subject to what your licence and your firm&apos;s AI policy allow. Use the workflow above to structure and check the output.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">No terminal, and trailing multiples are enough</p>
          <p className="text-sm text-muted-foreground mb-0">A free screen for the peers and an API free tier for the numbers get you a defensible LTM comps table at no cost. Add a paid tier only when plan limits start to block you.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">You need forward multiples without a terminal</p>
          <p className="text-sm text-muted-foreground mb-0">Check whether a paid tier of the API you use includes analyst estimates, and confirm the licence allows your use. Otherwise present your own estimates, clearly labeled as such.</p>
        </div>
      </div>
      <p>
        The broader tool landscape for banking analysts is covered in our{' '}
        <PlaybookLink href="/blog/ai-tools-investment-banking-analysts-2026">AI tools for investment banking analysts</PlaybookLink>{' '}
        guide, and the data-first comparison of Koyfin and Fiscal.ai is in{' '}
        <PlaybookLink href="/blog/koyfin-vs-fiscal-ai">Koyfin vs Fiscal.ai</PlaybookLink>.
      </p>
      <p className="text-sm text-muted-foreground">
        This article is for education, not investment advice or a valuation opinion. Plan limits and data terms come from vendor documentation as of October 2026 and change, so confirm them, along with the licence terms for any data you load into an AI tool, before you rely on them.
      </p>
    </BlogPostLayout>
  );
}
