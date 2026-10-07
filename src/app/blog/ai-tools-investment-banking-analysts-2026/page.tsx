import { Metadata } from 'next';
import Link from 'next/link';
import { AffiliateDisclosure, AffiliateLink } from '@/components/AffiliateLink';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'AI Tools for Investment Banking Analysts (2026 Edition) | Claude Code Playbooks Blog',
  description: "A buyer's guide to the AI tools investment banking analysts actually use in 2026: what the bank-bought platforms do, where Claude fits, when Koyfin, Gamma and CFI are worth paying for, and where each one falls short.",
  alternates: { canonical: '/blog/ai-tools-investment-banking-analysts-2026' },
  openGraph: {
    title: 'AI Tools for Investment Banking Analysts (2026 Edition)',
    description: "A buyer's guide to the AI tools investment banking analysts actually use in 2026: what the bank-bought platforms do, where Claude fits, when Koyfin, Gamma and CFI are worth paying for, and where each one falls short.",
    url: 'https://www.claudecodehq.com/blog/ai-tools-investment-banking-analysts-2026',
    type: 'article',
    publishedTime: '2026-10-07T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools for Investment Banking Analysts (2026 Edition)',
    description: "A buyer's guide to the AI tools investment banking analysts actually use in 2026: what the bank-bought platforms do, where Claude fits, when Koyfin, Gamma and CFI are worth paying for, and where each one falls short.",
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

function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
      <p className="text-sm font-mono text-[#f97316] mb-0">{children}</p>
    </div>
  );
}

function Verdict({ label, tone, children }: { label: string; tone: 'good' | 'warn'; children: React.ReactNode }) {
  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
      <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${tone === 'good' ? 'text-[#22c55e]' : 'text-[#f97316]'}`}>{label}</p>
      <p className="text-sm text-muted-foreground mb-0">{children}</p>
    </div>
  );
}

const H2 = 'text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2';
const TH = 'text-left p-3 border-b border-[#30363d] text-foreground';
const TD = 'p-3 border-b border-[#30363d] align-top';

export default function AiToolsInvestmentBankingAnalysts2026Page() {
  return (
    <BlogPostLayout
      title="AI Tools for Investment Banking Analysts (2026 Edition)"
      description="A buyer's guide to the AI tools investment banking analysts actually use in 2026: what the bank-bought platforms do, where Claude fits, when Koyfin, Gamma and CFI are worth paying for, and where each one falls short."
      category="guide"
      difficulty="basic"
      readingTime="13 min read"
      createdAt="2026-10-07"
      tags={['ai tools investment banking', 'ai for ib analysts', 'investment banking automation', 'ib analyst tools 2026', 'ai pitch book', 'ai cim', 'claude investment banking']}
      author="Claude Code Playbooks"
      slug="ai-tools-investment-banking-analysts-2026"
    >
      <AffiliateDisclosure className="mb-6" />
      <p>
        An analyst&apos;s week is mostly production work: a data pack from a CIM, a deck repopulated after the model changed, a merger model with one more sensitivity table, a teaser rewritten for the third time. The judgment calls belong to the associate and the MD. The hours go into moving numbers between Excel, PowerPoint and Word without letting a single one drift.
      </p>
      <p>
        That is exactly where the current generation of AI tools is aimed, and it is why the category has become crowded and confusing. Some of these tools cost thousands of dollars per seat and are bought by the bank. Some cost $12 a month and are bought by whoever has a credit card. Some are training, not software. This guide sorts them by the job they do, says who realistically pays for each, and is blunt about where each falls short.
      </p>
      <p>
        If you want the workflow side, with Claude Skills mapped across the full deal cycle, start with our{' '}
        <PlaybookLink href="/blog/ai-private-equity-investment-banking">AI for private equity and investment banking</PlaybookLink>{' '}
        guide. This page is the buying side: which tool for which task.
      </p>

      <h2 className={H2}>The Short Version</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className={TH}>The job</th>
              <th className={TH}>Tool type</th>
              <th className={TH}>Who usually pays</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className={TD}>Search filings, transcripts, broker research</td>
              <td className={TD}>Research platforms (AlphaSense, Capital IQ, PitchBook)</td>
              <td className={TD}>The bank</td>
            </tr>
            <tr>
              <td className={TD}>Question-answering over a data room or CIM, with citations</td>
              <td className={TD}>Finance-native agents (Rogo, Hebbia)</td>
              <td className={TD}>The bank</td>
            </tr>
            <tr>
              <td className={TD}>Models, data packs, CIM and teaser drafts, deck population</td>
              <td className={TD}>Claude, with playbooks that hold your standards</td>
              <td className={TD}>You, or the bank if it has an enterprise plan</td>
            </tr>
            <tr>
              <td className={TD}>Screening and quick public-company lookups</td>
              <td className={TD}><AffiliateLink partner="koyfin">Koyfin</AffiliateLink></td>
              <td className={TD}>You</td>
            </tr>
            <tr>
              <td className={TD}>Fast internal or idea decks, outside the bank template</td>
              <td className={TD}><AffiliateLink partner="gamma">Gamma</AffiliateLink></td>
              <td className={TD}>You</td>
            </tr>
            <tr>
              <td className={TD}>Modeling and valuation skills you can check AI output against</td>
              <td className={TD}><AffiliateLink partner="cfi">Corporate Finance Institute</AffiliateLink></td>
              <td className={TD}>You</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={H2}>Before Anything Else: You Probably Don&apos;t Pick the Tool</h2>
      <p>
        If you work at a bank, the most important constraint isn&apos;t price or features. It&apos;s your firm&apos;s policy on where client data can go. Deal documents, data room contents and anything containing material non-public information generally cannot be pasted into a consumer AI product, and many firms restrict even approved tools to specific uses. Check with compliance before you build a workflow around any tool on this page.
      </p>
      <p>
        That doesn&apos;t make the rest irrelevant. You can learn and rehearse every workflow below on public companies and closed deals, with no confidential data involved, and then bring it to whatever your firm has approved. Independent advisors, boutiques and anyone outside the large-bank perimeter have more freedom to choose, and they pay for it with their own budget.
      </p>

      <h2 className={H2}>Layer 1: The Platforms Banks Buy</h2>
      <p>
        The market splits into finance-native agents, which read your documents and answer with citations, and research platforms, which index everything public and licensed. Neither is a purchase an individual analyst makes, but you should know what they do, because your MD will ask why your workflow differs.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-foreground">Rogo</strong> is built for investment banking workflows and sold to institutions, not individuals. It is deployed to financial firms under enterprise contracts. One third-party estimate puts it near $3,300 per seat per year, but that figure is unconfirmed, and contracts are negotiated.
        </li>
        <li>
          <strong className="text-foreground">Hebbia</strong> is often described alongside Rogo. It reads dense contracts, CIMs and data rooms and answers questions with citations back to the source passage.
        </li>
        <li>
          <strong className="text-foreground">AlphaSense</strong> aggregates broker research, expert call transcripts, filings and news into one searchable layer, with AI summaries on top.
        </li>
        <li>
          <strong className="text-foreground">Capital IQ, PitchBook and similar databases</strong> remain the sources of record for comps and precedent transactions. Most of the AI tools below depend on them rather than replace them.
        </li>
      </ul>
      <p>
        The trade-off with this layer is control. These platforms are fast to start with and come with security reviews that your firm has already done. But the output follows the vendor&apos;s templates and workflow. When your MD wants the exhibit built the way this group has always built it, the standard tool often can&apos;t.
      </p>

      <h2 className={H2}>Layer 2: Claude, Configured for Your Group&apos;s Standards</h2>
      <p>
        Claude is the general-purpose layer, and what makes it useful for deal work is configuration. A Claude Skill holds your standards, such as section order, how you define adjusted EBITDA, house formatting and what a footnote must say, so every output starts from your group&apos;s conventions instead of a blank prompt.
      </p>
      <p>
        Anthropic has been building for finance directly. It launched Claude for Excel in October 2025 as a beta research preview that works in the Excel sidebar, where Claude can read, analyze, modify and create workbooks and show what it changed. It has also added connectors to financial data providers, including S&amp;P Capital IQ, PitchBook and Daloopa, and press coverage from May 2026 describes Claude working inside Excel and PowerPoint as well as Word. Plan availability and what your firm has switched on vary, so confirm what you actually have.
      </p>
      <p>
        On this site, the investment banking playbooks cover the documents analysts produce most. Each one is a downloadable <Code>CLAUDE.md</Code> that you adapt to your group:
      </p>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            <PlaybookLink href="/playbooks/ib-datapack-builder">Financial Data Pack Builder</PlaybookLink>
          </p>
          <p className="text-sm text-muted-foreground mb-0">
            Turns a CIM, SEC filings or other sources into a standardized Excel workbook with formula-based calculations. The example output is an eight-tab pack covering historicals, balance sheet, cash flow, segments and market analysis.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            <PlaybookLink href="/playbooks/ib-cim-builder">CIM Builder</PlaybookLink> and <PlaybookLink href="/playbooks/ib-teaser">Teaser Writer</PlaybookLink>
          </p>
          <p className="text-sm text-muted-foreground mb-0">
            The sell-side marketing documents. The teaser is the anonymous one-page profile that has to generate interest without revealing the company. The CIM is the full book with executive summary, industry analysis, growth opportunities and financial overview.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            <PlaybookLink href="/playbooks/ib-pitch-deck">Pitch Deck Template Populator</PlaybookLink>
          </p>
          <p className="text-sm text-muted-foreground mb-0">
            Fills your existing pitch template from a source Excel file and checks that the same figure matches across every slide. It is built for the copy-paste-and-pray step, not for designing a deck from scratch.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            <PlaybookLink href="/playbooks/ib-merger-model">Merger Model &amp; Accretion/Dilution</PlaybookLink>
          </p>
          <p className="text-sm text-muted-foreground mb-0">
            Builds pro forma EPS, synergy sensitivities, sources and uses, and breakeven synergies for a given premium.
          </p>
        </div>
      </div>
      <p>
        A good first test of any of them is whether you can verify the output quickly. Ask for the tie-outs yourself:
      </p>
      <Prompt>
        Build the data pack from the attached CIM for [target]. Tag every figure with its source page. Where the CIM&apos;s EBITDA doesn&apos;t reconcile with its own income statement, flag the difference and leave it unresolved. Don&apos;t pick a number. List every adjustment you did not make because the source was ambiguous.
      </Prompt>
      <Prompt>
        Populate the attached pitch template from model.xlsx without changing its layouts or fonts. When you finish, list every figure that appears on more than one slide and confirm they all match. Put anything you couldn&apos;t source in a separate list.
      </Prompt>

      <h2 className={H2}>Koyfin: Good Screen, Wrong Feed for Your Comps Sheet</h2>
      <p>
        <AffiliateLink partner="koyfin">Koyfin</AffiliateLink> is a market-data and analysis platform that individuals can buy: a free plan, then Plus at $39 a month and Premium at $79. The screener, which scans more than 100,000 securities, starts on Plus. It is a clean, fast way to build a peer list, check where a company trades and sanity-check multiples before a call.
      </p>
      <p>
        The catch matters to anyone building comps in Excel. Koyfin licenses its fundamentals from S&amp;P Capital IQ, and its help center says financials, estimates and valuation data are restricted from download. A CSV export gives you tickers, names, sectors and price data, not the multiples you screened on. So Koyfin works as a lookup and screening layer, and your comps sheet still needs a data feed that allows export, either your firm&apos;s Capital IQ or FactSet seat or an API. For how we handle that in practice, see our{' '}
        <PlaybookLink href="/blog/koyfin-claude-pe-deal-screening">Koyfin screening workflow</PlaybookLink> and the{' '}
        <PlaybookLink href="/blog/koyfin-vs-fiscal-ai">Koyfin vs Fiscal.ai comparison</PlaybookLink>.
      </p>
      <p>
        We also haven&apos;t found precedent-transaction data in Koyfin&apos;s listed features. If M&amp;A comps are a core deliverable for you, check this before you buy. The usual sources are PitchBook, Capital IQ or your bank&apos;s own deal database.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Verdict label="Worth it if" tone="good">
          You are an independent advisor, a student or a career switcher who needs public-market screening without a terminal seat, or you want a second screen alongside your bank&apos;s tools.
        </Verdict>
        <Verdict label="Skip it if" tone="warn">
          Your bank already gives you Capital IQ, or you need exportable fundamentals and transaction comps, which Koyfin doesn&apos;t provide.
        </Verdict>
      </div>

      <h2 className={H2}>Gamma: Fast Decks, but Not Your Client&apos;s Pitch Book</h2>
      <p>
        <AffiliateLink partner="gamma">Gamma</AffiliateLink> generates presentations from a prompt or an outline. Third-party pricing shows a free plan, then Plus around $12 a month and Pro around $25, and PowerPoint and PDF export included from Plus. It is quick, and the output looks modern.
      </p>
      <p>
        It is the wrong tool for an investment bank&apos;s client-facing book, for reasons that have nothing to do with taste. A pitch book lives in the bank&apos;s template, linked to Excel, and reviewers expect every table to be an object they can edit. Reports on Gamma&apos;s PowerPoint export describe a meaningful share of content, including charts, coming through as images instead of editable objects, and you would still have to move it into the firm template afterward. Gamma is built around decks that live on the web, not around producing a file for round after round of markup.
      </p>
      <p>
        Where it does fit is everything around the book: an internal sector overview, an early idea deck for a boutique, a one-off presentation for a student case or a pitch competition. For the client-facing deck, the better route is the one in the Layer 2 section above, which populates your own template and cross-checks the numbers.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Verdict label="Worth it if" tone="good">
          You need a presentable deck quickly outside a locked firm template: internal readouts, idea generation, student and recruiting projects.
        </Verdict>
        <Verdict label="Skip it if" tone="warn">
          The deck goes to a client in your bank&apos;s template with linked, editable tables. Use your template plus the populator instead.
        </Verdict>
      </div>

      <h2 className={H2}>CFI: The Tool That Lets You Check the Other Tools</h2>
      <p>
        <AffiliateLink partner="cfi">Corporate Finance Institute</AffiliateLink> is training, not software, and that is why it belongs in this list. Every tool above produces output you are responsible for. An accretion/dilution model with the wrong share count or a DCF with a terminal growth rate above the risk-free rate looks equally clean on screen. The analysts who get the most from AI are the ones who can spot that.
      </p>
      <p>
        CFI&apos;s FMVA certification targets investment banking and corporate finance careers. Its All Access membership has been listed at around $497 a year for the self-study tier and $847 for the full-immersion tier. Check the current price, since regional pricing and promotions vary.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Verdict label="Worth it if" tone="good">
          You are about to start as an analyst, switching into banking, or you want a structured path through modeling and valuation before you automate any of it.
        </Verdict>
        <Verdict label="Skip it if" tone="warn">
          Your bank runs its own analyst training program, or you already build merger and LBO models without notes.
        </Verdict>
      </div>

      <h2 className={H2}>Where AI Fails in Banking Work</h2>
      <p>
        Every tool here shares the same weak points. Build your checking habits around them:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-foreground">Numbers that look right.</strong> A figure can be plausible and wrong. Require source tags on every number, and spot-check them against the document.
        </li>
        <li>
          <strong className="text-foreground">Hardcodes inside formulas.</strong> Ask for assumptions on one tab and formulas everywhere else, then trace a handful of cells back to inputs.
        </li>
        <li>
          <strong className="text-foreground">Unit and sign errors.</strong> Thousands against millions, negative capex, fiscal against calendar year. Ask Claude to state the units on every table.
        </li>
        <li>
          <strong className="text-foreground">Template drift.</strong> A tool that rebuilds a slide instead of filling it will quietly break the firm format. Say so explicitly, and compare before and after.
        </li>
        <li>
          <strong className="text-foreground">Confidentiality.</strong> The most serious one. Know exactly where your data goes before you paste it.
        </li>
        <li>
          <strong className="text-foreground">Balance checks.</strong> Sources must equal uses, the balance sheet must balance, and subtotals must foot. Make those checks part of every prompt, as in the examples above.
        </li>
      </ul>

      <h2 className={H2}>Which Setup Fits You</h2>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">At a bank</p>
          <p className="text-sm text-muted-foreground mb-0">
            Use what compliance approves. Learn the workflows on public data using the playbooks, then bring the habits (source tags, tie-outs, cross-slide checks) into the approved tools. Spend your own money on training, not software.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Boutique or independent advisor</p>
          <p className="text-sm text-muted-foreground mb-0">
            Claude with the data pack, teaser, CIM and merger model playbooks covers most of the production work. Add a market-data source that allows export. Use Koyfin for screening and Gamma for internal decks if they fit your budget.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Student or career switcher</p>
          <p className="text-sm text-muted-foreground mb-0">
            Learn modeling first, then practice the AI workflows on closed public deals. Build a data pack and a merger model on a transaction you can verify against the filings, which also gives you something concrete to show in interviews.
          </p>
        </div>
      </div>
      <p>
        Whichever applies, the order is the same: confirm what you&apos;re allowed to use, learn the model well enough to catch a wrong answer, and then automate the production work. The{' '}
        <PlaybookLink href="/blog/claude-skills-pitch-decks">pitch deck guide</PlaybookLink>,{' '}
        <PlaybookLink href="/blog/claude-skills-excel">Excel guide</PlaybookLink> and{' '}
        <PlaybookLink href="/blog/what-is-an-ic-memo">IC memo explainer</PlaybookLink> cover the adjacent workflows in more depth.
      </p>
    </BlogPostLayout>
  );
}
