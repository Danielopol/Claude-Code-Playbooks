import { Metadata } from 'next';
import Link from 'next/link';
import { AffiliateDisclosure, AffiliateLink } from '@/components/AffiliateLink';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude for Accountants: The Month-End Close Stack | Claude Code Playbooks Blog',
  description: "How to wire Claude into a month-end close without giving it the keys to the ledger: QuickBooks exports in, drafts out, a tested reconciliation script, the controls to check, and an honest look at what Intuit's Claude connector can and can't do.",
  alternates: { canonical: '/blog/claude-accountants-month-end-close-stack' },
  openGraph: {
    title: 'Claude for Accountants: The Month-End Close Stack',
    description: "How to wire Claude into a month-end close without giving it the keys to the ledger: QuickBooks exports in, drafts out, a tested reconciliation script, the controls to check, and an honest look at what Intuit's Claude connector can and can't do.",
    url: 'https://www.claudecodehq.com/blog/claude-accountants-month-end-close-stack',
    type: 'article',
    publishedTime: '2026-10-23T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude for Accountants: The Month-End Close Stack',
    description: "How to wire Claude into a month-end close without giving it the keys to the ledger: QuickBooks exports in, drafts out, a tested reconciliation script, the controls to check, and an honest look at what Intuit's Claude connector can and can't do.",
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

export default function ClaudeAccountantsMonthEndCloseStackPage() {
  return (
    <BlogPostLayout
      title="Claude for Accountants: The Month-End Close Stack"
      description="How to wire Claude into a month-end close without giving it the keys to the ledger: QuickBooks exports in, drafts out, a tested reconciliation script, the controls to check, and an honest look at what Intuit's Claude connector can and can't do."
      category="guide"
      difficulty="intermediate"
      readingTime="13 min read"
      createdAt="2026-10-23"
      tags={['month end close automation', 'ai accounting tools', 'accountant ai stack', 'quickbooks claude', 'claude bank reconciliation', 'ai bookkeeping workflow', 'month-end close checklist ai']}
      author="Claude Code Playbooks"
      slug="claude-accountants-month-end-close-stack"
    >
      <AffiliateDisclosure className="mb-6" />
      <p>
        Our guide to <PlaybookLink href="/blog/claude-skills-accountants">Claude Skills for accountants</PlaybookLink> covers what to automate in the close: reconciliation, journal entries, expense audits and statements. This post covers the part that comes first and gets skipped: how the data gets to Claude, what Claude is allowed to touch, and which controls you keep so the close still stands up to review.
      </p>
      <p>
        The answer rests on one principle. <strong className="text-foreground">Claude reads and drafts; a person posts.</strong> Exports go in, reconciliations and proposed entries come out, and nothing enters the ledger except under a human&apos;s credentials. It&apos;s a simple rule, and it decides almost every choice below.
      </p>

      <h2 className={H2}>The Stack, Layer by Layer</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className={TH}>Layer</th>
              <th className={TH}>What happens</th>
              <th className={TH}>Who touches the ledger</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr><td className={TD}><strong className="text-foreground">1. Ledger</strong></td><td className={TD}>QuickBooks (or any system that exports a trial balance and GL detail)</td><td className={TD}>You</td></tr>
            <tr><td className={TD}><strong className="text-foreground">2. Export</strong></td><td className={TD}>Trial balance, GL detail, bank statements and aging reports saved to a close folder</td><td className={TD}>You</td></tr>
            <tr><td className={TD}><strong className="text-foreground">3. Reconcile</strong></td><td className={TD}>Script matches bank to GL; Claude categorizes the leftovers</td><td className={TD}>Nobody. Files only</td></tr>
            <tr><td className={TD}><strong className="text-foreground">4. Adjust</strong></td><td className={TD}>Claude drafts accruals and adjustments with support</td><td className={TD}>You post them</td></tr>
            <tr><td className={TD}><strong className="text-foreground">5. Report</strong></td><td className={TD}>Statements and variance commentary from the adjusted trial balance</td><td className={TD}>Nobody. Files only</td></tr>
            <tr><td className={TD}><strong className="text-foreground">6. Review</strong></td><td className={TD}>Controls check, open-items list, workpapers saved</td><td className={TD}>You sign off</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        The same workflow runs on any ledger that can export a trial balance and general ledger detail. QuickBooks is the ledger we use as the example because it is where the most small-business and bookkeeper work sits, and it now has an official Claude connector. That connector deserves a careful look before you decide how much of the close to route through it.
      </p>

      <h2 className={H2}>QuickBooks and Claude: What the Connector Does and Doesn&apos;t</h2>
      <p>
        Intuit and Anthropic announced a multi-year partnership in February 2026 that brings Intuit products, QuickBooks among them, into Claude through MCP integrations. Intuit&apos;s support article on the QuickBooks connector (updated in October 2026) describes what exists today. In summary:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Verdict label="What it does" tone="good">
          Pulls a live profit and loss and statement of cash flows, benchmarks you against your industry, imports and categorizes transactions into the general ledger, and creates, sends and manages invoices, estimates and payment links. Intuit says QuickBooks data is not used to train Claude.
        </Verdict>
        <Verdict label="What it does not do" tone="warn">
          Intuit lists the use cases as limited to those above. Journal entries, general transaction queries and bank reconciliation aren&apos;t among them. It&apos;s currently US-only, and its setup is described for Claude.ai.
        </Verdict>
      </div>
      <p>
        Two details matter for a close. First, <strong className="text-foreground">the connector is not read-only.</strong> It can create, update and send invoices, and it imports transactions into the ledger, with confirmation required for destructive actions like deletes. If you connect it, connect it deliberately: pick the right company, grant only the permissions you need, and use a QuickBooks user whose rights match the job. Second, it answers questions about live reports, which is useful for a quick &quot;how did we do this month&quot;, but a close needs line-level matching across a thousand transactions. That is file work, and files are where Claude Code is strongest.
      </p>
      <p>
        So use the connector for fast questions and invoicing, and run the close itself from exports. This isn&apos;t a criticism of the connector. It&apos;s a different job. And it keeps the close read-only by construction, which is what an auditor wants to see.
      </p>

      <h2 className={H2}>Layer 2: What to Export</h2>
      <p>
        Create one folder per period and save the exports into it before Claude sees anything. From QuickBooks Online, the reports that matter are the trial balance, the general ledger detail for the period, the A/R and A/P aging summaries, and the reconciliation report for each bank account, along with the bank statements themselves as CSV. Export each one to Excel or CSV, and keep the original files untouched.
      </p>
      <CodeBlock>{`close-2026-09/
├── CLAUDE.md                 ← close rules, materiality, account notes
├── inputs/
│   ├── trial-balance.csv
│   ├── general-ledger.csv
│   ├── bank-operating.csv
│   └── ar-aging.csv
├── work/                     ← scripts and intermediate files
└── output/                   ← reconciliations, draft entries, statements`}</CodeBlock>
      <p>
        That folder is also your workpaper trail. Inputs, scripts, prompts and outputs sit side by side, so anyone can re-run the close and get the same answer.
      </p>

      <h2 className={H2}>Layer 3: Reconcile with Code First, Claude Second</h2>
      <p>
        The <PlaybookLink href="/playbooks/account-reconciliation-assistant">Account Reconciliation Assistant</PlaybookLink> playbook defines the output you want: every transaction matched, variances categorized by root cause, outstanding items aged. For the matching step itself, don&apos;t rely on a model eyeballing two long lists. Matching is deterministic, so let code do it, and use Claude for the part that needs judgment: explaining what the leftovers are.
      </p>
      <CodeBlock>{`from datetime import date
from decimal import Decimal


def match(bank, gl, window_days=3):
    """One-to-one match on exact amount within a date window.
    Returns (pairs, unmatched_bank, unmatched_gl). Nothing is forced to match."""
    gl_left, pairs, unmatched_bank = list(gl), [], []
    for b in sorted(bank, key=lambda r: r["date"]):
        near = [g for g in gl_left
                if g["amount"] == b["amount"]
                and abs((g["date"] - b["date"]).days) <= window_days]
        if near:
            g = min(near, key=lambda g: abs((g["date"] - b["date"]).days))
            gl_left.remove(g)
            pairs.append((b, g))
        else:
            unmatched_bank.append(b)
    return pairs, unmatched_bank, gl_left`}</CodeBlock>
      <p>
        Amounts are <Code>Decimal</Code>, never floats, so cents don&apos;t drift. A bank line pairs with at most one GL line, so a duplicate can&apos;t be matched twice. And anything that doesn&apos;t match stays unmatched instead of being forced into a pair, which is how timing differences and missing entries surface. Run on a small test set, a bank line dated September 30 pairs correctly with a GL entry dated October 1, a bank fee with no GL entry shows up as bank-only, and an uncleared check shows up as GL-only.
      </p>
      <Prompt>
        Run the matching script on inputs/bank-operating.csv and inputs/general-ledger.csv. For every unmatched item on either side, propose a root-cause category: timing difference, missing GL entry, bank fee or interest not booked, amount discrepancy, duplicate posting, or uncleared item. Age the outstanding items. Flag anything over our materiality threshold in CLAUDE.md for priority review. Don&apos;t post or propose to modify anything that you can&apos;t support from the files, and list what you could not categorize.
      </Prompt>

      <h2 className={H2}>Layers 4 and 5: Adjust and Report</h2>
      <p>
        With the reconciliations done, the remaining work is the adjusting entries and the statements. Claude drafts the entries, with the supporting calculation and a reviewer checklist, using the <PlaybookLink href="/playbooks/journal-entry-preparer">Journal Entry Preparer</PlaybookLink>. You review each one and post it yourself in the ledger. Then re-export the adjusted trial balance and generate the statements from it with the{' '}
        <PlaybookLink href="/playbooks/financial-statement-generator">Financial Statement Generator</PlaybookLink>, including period-over-period comparisons and variance commentary.
      </p>
      <p>
        The re-export is the step that keeps the loop honest. Statements are produced from what is actually in the ledger after your postings, and not from Claude&apos;s draft of what you meant to post.
      </p>

      <h2 className={H2}>Layer 6: The Controls Claude Must Pass</h2>
      <p>
        Put these in <Code>CLAUDE.md</Code> as checks that run before any output is called done, and have Claude report each as pass or fail:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-foreground">The trial balance foots.</strong> Total debits equal total credits.</li>
        <li><strong className="text-foreground">Opening balances equal last month&apos;s closing balances.</strong> A silent change to a prior period is the most serious thing a close can contain.</li>
        <li><strong className="text-foreground">Every reconciliation ends at zero difference or an itemized one.</strong> No unexplained plug.</li>
        <li><strong className="text-foreground">The statements tie to the trial balance.</strong> Net income on the P&amp;L flows to equity on the balance sheet.</li>
        <li><strong className="text-foreground">Nothing was changed outside the files.</strong> The run touched only <Code>work/</Code> and <Code>output/</Code>.</li>
        <li><strong className="text-foreground">Open items are listed.</strong> What couldn&apos;t be matched or categorized, with the amounts.</li>
      </ul>
      <p>
        Save the prompt, the scripts and the outputs with the inputs. If a number is questioned in six months, the answer is a re-run, not a recollection.
      </p>

      <h2 className={H2}>For Bookkeepers, Small Businesses and Heavy Automation</h2>
      <p>
        If you hand a messy folder to a CPA at year-end, the{' '}
        <PlaybookLink href="/playbooks/bookkeeping-tax-workspace">Bookkeeping &amp; Tax Prep Workspace</PlaybookLink>{' '}
        playbook organizes the documents, builds a master bookkeeping sheet and produces a one-page briefing with open questions flagged. It is aimed at sole proprietors and freelancers, not at a multi-entity close.
      </p>
      <p>
        If you want to go further and automate recurring work inside QuickBooks itself, such as rules-based categorization and scheduled invoices, the{' '}
        <PlaybookLink href="/playbooks/quickbooks-automation">QuickBooks Automation</PlaybookLink>{' '}
        playbook covers it through Intuit&apos;s developer API. That is a different tier of effort from the connector: it needs a developer app and an authorization setup, and it can write to the books. Test it against a sandbox company before you point it at a real one.
      </p>

      <h2 className={H2}>Learn the Accounting So You Can Review It</h2>
      <p>
        Every layer above produces output that someone has to be able to challenge. A reconciliation that ends in a plug, an accrual with the wrong period, a statement that doesn&apos;t tie: Claude won&apos;t reliably flag its own mistakes, and a reviewer who can&apos;t spot them is just approving. If you&apos;re a junior accountant, a bookkeeper moving into controller work, or an owner doing your own books, <AffiliateLink partner="cfi">Corporate Finance Institute</AffiliateLink> has an accounting catalog that includes accounting fundamentals and three-statement courses. It is a sensible way to build the judgment that checks the machine.
      </p>

      <h2 className={H2}>Who Does What</h2>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Small business owner</p>
          <p className="text-sm text-muted-foreground mb-0">Use the <AffiliateLink partner="quickbooks">QuickBooks</AffiliateLink> connector for quick P&amp;L and cash flow questions and for invoicing, and keep a bookkeeper or CPA on the close and anything that posts to the books.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Bookkeeper with several clients</p>
          <p className="text-sm text-muted-foreground mb-0">Run the export-based close per client, in separate folders and with each client&apos;s data kept apart. Connect any live integration one company at a time, and confirm which file is active before you ask anything.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Controller or accounting manager</p>
          <p className="text-sm text-muted-foreground mb-0">Standardize the folder, the CLAUDE.md controls and the workpaper retention, then judge the tool by whether a reviewer can reperform the close from the folder alone.</p>
        </div>
      </div>

      <h2 className={H2}>Before You Upload Client Data</h2>
      <p>
        Client financial data is confidential, and sending it to an AI service is a disclosure decision. Check your engagement letters, your firm&apos;s policy, and any professional or regulatory rules that apply to you, including those on handling tax return information if you prepare returns. Use accounts and plans whose data terms you have read, and strip identifiers you don&apos;t need.
      </p>
      <p className="text-sm text-muted-foreground">
        This article is for education and isn&apos;t accounting, tax or legal advice. QuickBooks connector details come from Intuit&apos;s support documentation as of October 2026 and change, so confirm availability, supported actions and permissions on Intuit&apos;s current pages before you connect it.
      </p>
    </BlogPostLayout>
  );
}
