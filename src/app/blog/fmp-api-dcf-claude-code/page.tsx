import { Metadata } from 'next';
import Link from 'next/link';
import { AffiliateDisclosure, AffiliateLink } from '@/components/AffiliateLink';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Build a DCF from Live API Data with Claude Code (Financial Modeling Prep) | Claude Code Playbooks Blog',
  description: "Pull financial statements from the Financial Modeling Prep API, let Claude Code build a DCF you can audit line by line, and cross-check it against FMP's own valuation. Includes the working DCF code and the free-tier call budget.",
  alternates: { canonical: '/blog/fmp-api-dcf-claude-code' },
  openGraph: {
    title: 'Build a DCF from Live API Data with Claude Code (Financial Modeling Prep)',
    description: "Pull financial statements from the Financial Modeling Prep API, let Claude Code build a DCF you can audit line by line, and cross-check it against FMP's own valuation. Includes the working DCF code and the free-tier call budget.",
    url: 'https://www.claudecodehq.com/blog/fmp-api-dcf-claude-code',
    type: 'article',
    publishedTime: '2026-10-04T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build a DCF from Live API Data with Claude Code (Financial Modeling Prep)',
    description: "Pull financial statements from the Financial Modeling Prep API, let Claude Code build a DCF you can audit line by line, and cross-check it against FMP's own valuation. Includes the working DCF code and the free-tier call budget.",
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

export default function FmpApiDcfClaudeCodePage() {
  return (
    <BlogPostLayout
      title="Build a DCF from Live API Data with Claude Code (Financial Modeling Prep)"
      description="Pull financial statements from the Financial Modeling Prep API, let Claude Code build a DCF you can audit line by line, and cross-check it against FMP's own valuation. Includes the working DCF code and the free-tier call budget."
      category="tutorial"
      difficulty="intermediate"
      readingTime="12 min read"
      createdAt="2026-10-04"
      tags={['fmp api dcf', 'financial modeling prep api tutorial', 'automate dcf model', 'python dcf claude', 'dcf valuation python', 'claude code finance', 'fmp api python']}
      author="Claude Code Playbooks"
      slug="fmp-api-dcf-claude-code"
    >
      <AffiliateDisclosure className="mb-6" />
      <p>
        Most DCF models start with someone retyping numbers from a 10-K into a spreadsheet. Those numbers go stale the day the next filing lands, and a transposed digit in free cash flow flows straight into the valuation. An API fixes the data problem: every figure comes from a source you can name, and re-running the model next quarter takes a command instead of an afternoon.
      </p>
      <p>
        This walkthrough connects Claude Code to the <AffiliateLink partner="fmp">Financial Modeling Prep</AffiliateLink> (FMP) API, pulls three financial statements and a company profile, and builds a five-year DCF in Python. You keep the assumptions. Claude does the fetching, the cleaning, and the arithmetic, and it hands back a workbook your team can open. We&apos;ll also cross-check the result against FMP&apos;s own DCF endpoint, because the gap between the two numbers is the most useful output of the exercise.
      </p>
      <p>
        One scope note: this is a tutorial on the workflow, not a recommendation to buy or sell any security. The numbers are only as good as the assumptions you feed in.
      </p>

      <h2 className={H2}>Why Build It Instead of Calling the DCF Endpoint</h2>
      <p>
        FMP has a <Code>discounted-cash-flow</Code> endpoint. You pass a ticker and get back a DCF value next to the stock price. It&apos;s a fast sanity check, but you can&apos;t see or change what&apos;s inside it. FMP also documents an advanced DCF endpoint that takes your own assumptions, but a model you compute locally has an advantage the endpoints can&apos;t match: every growth rate, every discount rate and every cell is yours to audit, and an MD can ask &quot;why 9%?&quot; and get an answer.
      </p>
      <p>
        So the plan is to use the API for data and the cheap DCF endpoint as a second opinion, and to keep the valuation logic in code you control.
      </p>

      <h2 className={H2}>What a DCF Needs and Where It Comes From</h2>
      <p>
        FMP serves its current data under a <Code>/stable/</Code> base URL, with separate endpoints for each statement. Map every input your model needs to one source before you write a prompt:
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="text-left p-3 border-b border-[#30363d] text-foreground">DCF input</th>
              <th className="text-left p-3 border-b border-[#30363d] text-foreground">Where it comes from</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="p-3 border-b border-[#30363d]">Revenue, operating income, interest expense, tax</td>
              <td className="p-3 border-b border-[#30363d]"><Code>income-statement</Code></td>
            </tr>
            <tr>
              <td className="p-3 border-b border-[#30363d]">Operating cash flow, capex, free cash flow</td>
              <td className="p-3 border-b border-[#30363d]"><Code>cash-flow-statement</Code></td>
            </tr>
            <tr>
              <td className="p-3 border-b border-[#30363d]">Debt, cash, net debt</td>
              <td className="p-3 border-b border-[#30363d]"><Code>balance-sheet-statement</Code></td>
            </tr>
            <tr>
              <td className="p-3 border-b border-[#30363d]">Price, beta, market cap</td>
              <td className="p-3 border-b border-[#30363d]">Company profile endpoint</td>
            </tr>
            <tr>
              <td className="p-3 border-b border-[#30363d]">Risk-free rate, equity risk premium</td>
              <td className="p-3 border-b border-[#30363d]">Your assumption. Write it down as an explicit input</td>
            </tr>
            <tr>
              <td className="p-3 border-b border-[#30363d]">Cross-check value</td>
              <td className="p-3 border-b border-[#30363d]"><Code>discounted-cash-flow</Code></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The statement endpoints take a <Code>symbol</Code>, a <Code>period</Code> (annual or quarterly) and a <Code>limit</Code> for how many periods to return. The cash flow response includes <Code>freeCashFlow</Code>, <Code>capitalExpenditure</Code> and operating cash flow as separate fields.
      </p>

      <h2 className={H2}>Step 1: Get a Free Key and Keep It Out of the Repo</h2>
      <p>
        FMP&apos;s free Basic plan gives you 250 API calls a day, and signing up doesn&apos;t require a credit card. That&apos;s enough to build and test this entire workflow. Create an account at <Code>financialmodelingprep.com</Code>, copy your key, and put it in an environment variable rather than a file:
      </p>
      <CodeBlock>{`# macOS / Linux
export FMP_API_KEY="your-key-here"

# Windows PowerShell
$env:FMP_API_KEY = "your-key-here"`}</CodeBlock>
      <p>
        There&apos;s a wrinkle worth knowing before you hand this to an agent: FMP authenticates with an <Code>apikey</Code> query parameter, so the key sits inside the URL of every request. Any tool that logs full URLs will log your key too. Tell Claude never to print request URLs or write the key into a file, and add <Code>.env</Code> and the response cache to <Code>.gitignore</Code>.
      </p>

      <h2 className={H2}>Step 2: Set Up the Project and a Caching Fetch Helper</h2>
      <CodeBlock>{`dcf-run/
├── CLAUDE.md          ← DCF Model Builder template + your assumptions
├── fmp.py             ← one fetch helper, everything goes through it
├── dcf.py             ← the valuation math
├── cache/             ← raw API responses (gitignored)
└── output/            ← workbook and valuation summary`}</CodeBlock>
      <p>
        Download the <PlaybookLink href="/playbooks/fa-dcf-model">DCF Model Builder</PlaybookLink> playbook as the base of your <Code>CLAUDE.md</Code>. It covers the WACC build-up, terminal value methods and sensitivity tables, so you don&apos;t have to re-explain valuation conventions on every run. Then ask Claude to write <Code>fmp.py</Code>, or start from this version:
      </p>
      <CodeBlock>{`import json, os, pathlib, requests

BASE = "https://financialmodelingprep.com/stable"
CACHE = pathlib.Path("cache")


def fmp(endpoint, **params):
    """GET one FMP endpoint. Responses are cached so reruns cost zero API calls."""
    tag = "_".join(f"{k}-{v}" for k, v in sorted(params.items()))
    path = CACHE / f"{endpoint}_{tag}.json"
    if path.exists():
        return json.loads(path.read_text())

    r = requests.get(
        f"{BASE}/{endpoint}",
        params={**params, "apikey": os.environ["FMP_API_KEY"]},
        timeout=30,
    )
    r.raise_for_status()
    data = r.json()
    if not isinstance(data, list) or not data:
        raise RuntimeError(f"No usable data for {endpoint} {params}")

    CACHE.mkdir(exist_ok=True)
    path.write_text(json.dumps(data))
    return data`}</CodeBlock>
      <p>
        The cache matters more than it looks. On the free plan, the call budget is the constraint. A single ticker costs five calls: three statements, the profile, and the cross-check endpoint. At 250 calls a day that&apos;s 50 tickers, and every rerun after the first fetch is free because the helper reads from disk. The helper also fails loudly on an empty or malformed response instead of passing it on. Claude shouldn&apos;t build a model on a response it can&apos;t read.
      </p>
      <p>
        Cached filenames never contain the key, and the key never gets written anywhere. Keep it that way.
      </p>

      <h2 className={H2}>Step 3: The Prompt</h2>
      <p>
        Start with a prompt that tells Claude to discover field names instead of assuming them. API schemas drift, and a model that silently reads a missing field as zero produces confident wrong answers.
      </p>
      <Prompt>
        Build a DCF for MSFT using the FMP API. Use the fmp() helper in fmp.py and the FMP_API_KEY environment variable; never print request URLs or write the key anywhere. Pull 5 years of annual income statement, balance sheet and cash flow statement, plus the company profile. Before writing any model code, print the field names from one real response of each endpoint and map them to the inputs in CLAUDE.md. If a field is missing, mark it missing and stop. Don&apos;t substitute a default. Then project 5 years of unlevered free cash flow, propose growth and WACC assumptions with your reasoning from the historical numbers, and wait for my changes before computing the valuation.
      </Prompt>
      <p>
        Two instructions in that prompt do most of the work. &quot;Print the field names first&quot; makes Claude look at the real response before it writes code against it. &quot;Stop on missing&quot; stops a gap in the data from turning into a quietly wrong number. If you want a reference for the second habit, the{' '}
        <PlaybookLink href="/playbooks/financial-data-collector">Financial Data Collector</PlaybookLink>{' '}
        playbook is built around it: every field carries its source or is marked missing, and nothing gets a fallback value. It pulls from yfinance rather than FMP, which also makes it a useful free fallback for a ticker your FMP plan doesn&apos;t cover.
      </p>

      <h2 className={H2}>The Adjustment Most API DCF Tutorials Skip</h2>
      <p>
        FMP reports <Code>freeCashFlow</Code> as operating cash flow minus capital expenditure. Operating cash flow is measured after interest has been paid. If you discount that figure at WACC and then subtract net debt, you charge for the company&apos;s debt twice: once in the cash flow and once in the bridge to equity value.
      </p>
      <p>
        The clean fix is to add back after-tax interest before discounting, which turns reported free cash flow into an unlevered figure. Here&apos;s the valuation core, with the guard that WACC must exceed terminal growth:
      </p>
      <CodeBlock>{`def unlevered_fcf(fcf, interest_expense, tax_rate):
    """Reported FCF is after interest. Add back after-tax interest
    so it can be discounted at WACC."""
    return fcf + interest_expense * (1 - tax_rate)


def dcf_per_share(base_fcf, growth, wacc, terminal_g, net_debt, shares):
    if wacc <= terminal_g:
        raise ValueError("WACC must exceed terminal growth")
    fcf, pv = base_fcf, 0.0
    for year, g in enumerate(growth, start=1):
        fcf *= 1 + g
        pv += fcf / (1 + wacc) ** year
    terminal = fcf * (1 + terminal_g) / (wacc - terminal_g)
    pv += terminal / (1 + wacc) ** len(growth)
    return (pv - net_debt) / shares


def sensitivity(base_fcf, growth, net_debt, shares, waccs, terminal_gs):
    return {
        (w, g): dcf_per_share(base_fcf, growth, w, g, net_debt, shares)
        for w in waccs
        for g in terminal_gs
    }`}</CodeBlock>
      <p>
        The tax rate is the effective rate, income tax expense divided by pre-tax income, taken from the income statement and kept within a sensible range. Have Claude print it so you can see what it used. Note that the cash flow statement adds stock-based compensation back as a non-cash item, which flatters free cash flow at companies that pay heavily in stock. If that applies, tell Claude to deduct it in the base year and say so in the summary.
      </p>

      <h2 className={H2}>Step 4: Set the Assumptions and Run the Sensitivity</h2>
      <p>
        Claude will propose growth rates, a discount rate and a terminal growth rate. Treat that as a first draft, because the assumptions are the model. Put the ones that matter in <Code>CLAUDE.md</Code> as plain, numeric rules:
      </p>
      <CodeBlock>{`## Valuation assumptions
- Projection: 5 years, growth fading toward terminal rate
- Risk-free rate: [your number], equity risk premium: [your number]
- Beta: from the FMP profile, flag if it looks unusual
- Cost of debt: interest expense / total debt, tax-effected
- WACC weights: market cap and total debt
- Terminal growth: 2-3%, never above the risk-free rate
- Always output a WACC x terminal growth sensitivity grid`}</CodeBlock>
      <p>
        The sensitivity grid earns its place because it shows how much of the value rests on two numbers. In a typical DCF the terminal value accounts for well over half of the total, so a one-point swing in WACC can move the answer more than any operating assumption. Present the grid, not a single price.
      </p>

      <h2 className={H2}>Step 5: Cross-Check Against FMP&apos;s Own DCF</h2>
      <p>
        Now call the <Code>discounted-cash-flow</Code> endpoint for the same ticker, which costs one call, and ask Claude to compare it with your result:
      </p>
      <Prompt>
        Fetch FMP&apos;s discounted-cash-flow value for MSFT and compare it with our base case and the sensitivity grid. If the two differ by more than 25%, list the assumptions most likely to explain the gap, such as growth rate, discount rate, how free cash flow was defined, and share count. Don&apos;t adjust our model to match FMP.
      </Prompt>
      <p>
        That last sentence is the important one. The endpoint is a second opinion with inputs you can&apos;t see, so your model shouldn&apos;t chase it. A large gap is a prompt to review your assumptions, and sometimes the answer is that yours were the aggressive ones.
      </p>

      <h2 className={H2}>Step 6: Excel for the Reviewer, and When to Go Further</h2>
      <p>
        Python is the right place to fetch, validate and calculate. The version your MD or client opens is a workbook. Once the numbers are settled, have Claude write them out through the{' '}
        <PlaybookLink href="/playbooks/fa-dcf-model">DCF Model Builder</PlaybookLink>{' '}
        format, with live formulas for the projections, WACC build and sensitivity tables, so a reviewer can change an assumption and watch the value move. For a written valuation summary to go with it, the{' '}
        <PlaybookLink href="/playbooks/dcf-valuation">DCF Valuation Model Builder</PlaybookLink>{' '}
        playbook produces the report layer.
      </p>
      <p>
        A cash-flow-driven DCF is the right size for a quick valuation. When you need projected balance sheet and debt schedules behind the cash flows, for a leveraged company or a deal model, step up to the{' '}
        <PlaybookLink href="/playbooks/fa-3-statement-model">3-Statement Model Builder</PlaybookLink>. Pull the same FMP statements as the historical base, build the integrated projections, and let the DCF read free cash flow from the model instead of from a growth assumption.
      </p>

      <h2 className={H2}>Where This Workflow Breaks</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-foreground">Negative or erratic free cash flow.</strong> Growth rates applied to a negative base give nonsense. Normalize with a multi-year average or switch to a margin-based projection, and say which you chose.
        </li>
        <li>
          <strong className="text-foreground">Banks and insurers.</strong> Free cash flow isn&apos;t a meaningful measure for financial companies, because debt is part of operations. Use a dividend or excess-return model instead.
        </li>
        <li>
          <strong className="text-foreground">Currency mismatches on ADRs.</strong> Statements can be reported in one currency while the stock trades in another. Have Claude check both before it divides by the price.
        </li>
        <li>
          <strong className="text-foreground">Share count.</strong> Use diluted shares and note which period they come from. Basic shares overstate value per share.
        </li>
        <li>
          <strong className="text-foreground">Plan coverage.</strong> What your plan returns, such as how many years, which exchanges and annual versus quarterly data, depends on the tier. On the first run, have Claude print how many periods came back per endpoint. If you get five years of history when the model needs ten, you want to find out before you trust the output.
        </li>
        <li>
          <strong className="text-foreground">Rate limits.</strong> Paid plans cap calls per minute, and the free plan caps them per day. If Claude loops over a watchlist, tell it to stop on a 429 response rather than retry in a tight loop.
        </li>
      </ul>

      <h2 className={H2}>Free or Paid?</h2>
      <p>
        Build everything on the free plan first. It&apos;s the cheapest way to find out whether the endpoints and history you need are included for the tickers you cover. Then decide whether the limits get in your way: the 250-call daily cap, the depth of history, or the lack of coverage for non-US names.
      </p>
      <p>
        FMP&apos;s paid plans were listed at Starter $22, Premium $59 and Ultimate $149 per month when billed annually, with per-minute call limits of 300, 750 and 3,000. Plans change, so check the pricing page before you commit, and confirm that any endpoint your model depends on is included in the tier you pick.
      </p>

      <h2 className={H2}>If the Modeling Theory Is the Gap</h2>
      <p>
        Automating a DCF is only useful if you can tell when the output is wrong. If you&apos;re newer to valuation and the WACC and terminal value steps feel like black boxes, learn them by building a model by hand first. <AffiliateLink partner="cfi">Corporate Finance Institute</AffiliateLink> teaches DCF, LBO and 3-statement modeling, and it&apos;s a sensible way to build the judgment that checks Claude&apos;s work.
      </p>

      <h2 className={H2}>The Short Version</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Get a free FMP key and keep it in an environment variable, since it travels in the URL.</li>
        <li>Route every call through one caching helper so the 250-call budget goes further.</li>
        <li>Make Claude print real field names and stop on missing data.</li>
        <li>Convert reported free cash flow to unlevered before discounting at WACC.</li>
        <li>Present the sensitivity grid, and treat FMP&apos;s own DCF as a second opinion only.</li>
      </ol>
    </BlogPostLayout>
  );
}
