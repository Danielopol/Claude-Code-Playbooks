import { Metadata } from 'next';
import Link from 'next/link';
import { AffiliateDisclosure, AffiliateLink } from '@/components/AffiliateLink';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'From Spreadsheet Grunt to Analyst: A 90-Day AI-Assisted Finance Curriculum | Claude Code Playbooks Blog',
  description: "A 13-week plan for learning financial modeling with Claude Code as a tutor, not a shortcut: Excel and data hygiene, three-statement models, DCF, comps, LBO and audit, with a build-it-yourself, shadow-build, diff method and a tested tie-out check.",
  alternates: { canonical: '/blog/ai-assisted-finance-curriculum-90-days' },
  openGraph: {
    title: 'From Spreadsheet Grunt to Analyst: A 90-Day AI-Assisted Finance Curriculum',
    description: "A 13-week plan for learning financial modeling with Claude Code as a tutor, not a shortcut: Excel and data hygiene, three-statement models, DCF, comps, LBO and audit, with a build-it-yourself, shadow-build, diff method and a tested tie-out check.",
    url: 'https://www.claudecodehq.com/blog/ai-assisted-finance-curriculum-90-days',
    type: 'article',
    publishedTime: '2026-11-19T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'From Spreadsheet Grunt to Analyst: A 90-Day AI-Assisted Finance Curriculum',
    description: "A 13-week plan for learning financial modeling with Claude Code as a tutor, not a shortcut: Excel and data hygiene, three-statement models, DCF, comps, LBO and audit, with a build-it-yourself, shadow-build, diff method and a tested tie-out check.",
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

export default function AiAssistedFinanceCurriculum90DaysPage() {
  return (
    <BlogPostLayout
      title="From Spreadsheet Grunt to Analyst: A 90-Day AI-Assisted Finance Curriculum"
      description="A 13-week plan for learning financial modeling with Claude Code as a tutor, not a shortcut: Excel and data hygiene, three-statement models, DCF, comps, LBO and audit, with a build-it-yourself, shadow-build, diff method and a tested tie-out check."
      category="guide"
      difficulty="basic"
      readingTime="13 min read"
      createdAt="2026-11-19"
      tags={['learn financial modeling fast', 'finance analyst roadmap', 'financial modeling curriculum', 'learn finance with ai', 'financial modeling for beginners', '90 day finance plan', 'claude code finance']}
      author="Claude Code Playbooks"
      slug="ai-assisted-finance-curriculum-90-days"
    >
      <AffiliateDisclosure className="mb-6" />
      <p>
        Ninety days is enough to go from &quot;I can use Excel&quot; to &quot;I can build and defend a three-statement model, a DCF, a comps table and a simple LBO.&quot; It is not enough if you let an AI do the building. The skill you are buying is the ability to look at a model and know whether it is right, and you only get that by building models yourself and being wrong a few times.
      </p>
      <p>
        So this curriculum uses Claude Code for what it is good at in a learning context: explaining, quizzing, checking and showing you a second version to compare against. The plan runs 13 weeks at roughly 8 to 10 hours a week, which gives you 100 to 130 hours. That lines up with what CFI says its FMVA certification takes (100 to 120 hours, self-paced), so you can run this alongside a structured course or on its own.
      </p>

      <h2 className={H2}>The Method: Build, Shadow, Diff</h2>
      <p>
        Every phase below uses the same three steps:
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li><strong className="text-foreground">Build it yourself.</strong> From a blank workbook, with the course material or the filings open. It will be slow and it will have errors. That is the point.</li>
        <li><strong className="text-foreground">Shadow-build with Claude.</strong> Give Claude the same inputs and the relevant playbook, and let it build its own version. You don&apos;t look at it until yours is finished.</li>
        <li><strong className="text-foreground">Diff the two.</strong> Every difference is either your mistake, Claude&apos;s mistake or a legitimate choice. Classify each one. This step is where most of the learning happens.</li>
      </ol>
      <p>
        Set Claude up as a tutor with a rule that protects you from yourself:
      </p>
      <Prompt>
        You are my finance tutor. When I ask a modeling question, ask me what I think first and don&apos;t give the answer until I commit to a number or a formula. When I finish a model, find errors by asking me questions that lead me to them, not by fixing them. Give me the correction only after I have tried twice.
      </Prompt>

      <h2 className={H2}>The 13-Week Plan</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className={TH}>Weeks</th>
              <th className={TH}>Focus</th>
              <th className={TH}>Playbook for the shadow build</th>
              <th className={TH}>Deliverable</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr><td className={TD}>1 to 2</td><td className={TD}>Excel habits and clean data</td><td className={TD}><PlaybookLink href="/playbooks/fa-clean-data-xls">Spreadsheet Data Cleaner</PlaybookLink></td><td className={TD}>A messy export cleaned with no hardcodes and a change log</td></tr>
            <tr><td className={TD}>3 to 5</td><td className={TD}>Accounting and the 3-statement model</td><td className={TD}><PlaybookLink href="/playbooks/fa-3-statement-model">3-Statement Model Builder</PlaybookLink></td><td className={TD}>A balancing model of one public company</td></tr>
            <tr><td className={TD}>6 to 7</td><td className={TD}>DCF</td><td className={TD}><PlaybookLink href="/playbooks/fa-dcf-model">DCF Model Builder</PlaybookLink></td><td className={TD}>A DCF with a sensitivity table you can explain</td></tr>
            <tr><td className={TD}>8</td><td className={TD}>Trading comps</td><td className={TD}><PlaybookLink href="/playbooks/financial-modeling">Financial Modeling Assistant</PlaybookLink></td><td className={TD}>A comps table with a clean EV bridge</td></tr>
            <tr><td className={TD}>9 to 10</td><td className={TD}>LBO</td><td className={TD}><PlaybookLink href="/playbooks/fa-lbo-model">LBO Model Builder</PlaybookLink></td><td className={TD}>A single-tranche LBO that ties to a paper check</td></tr>
            <tr><td className={TD}>11 to 12</td><td className={TD}>Audit and communicate</td><td className={TD}><PlaybookLink href="/playbooks/fa-audit-xls">Model Auditor</PlaybookLink></td><td className={TD}>An audit of your own work and a two-page memo</td></tr>
            <tr><td className={TD}>13</td><td className={TD}>Package and review</td><td className={TD}><PlaybookLink href="/playbooks/financial-analyst-toolkit">Financial Analyst Toolkit</PlaybookLink></td><td className={TD}>A portfolio folder and a self-review</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Use the same company all the way through. By week 10 you will have its history, its forecast, a valuation and a buyout case in one place, and the models will feed each other.
      </p>

      <h3 className={H3}>Weeks 1 to 2: Excel habits and clean data</h3>
      <p>
        Most analysts&apos; first real job is cleaning and tying out other people&apos;s numbers. Pull a messy trial balance or a bank export and clean it: consistent dates, no merged cells, numbers stored as numbers. Learn lookups, <Code>SUMIFS</Code>, named ranges and the rule that assumptions live in one place and formulas never contain a typed number. Then give the same file to Claude with the Data Cleaner playbook and diff the change logs.
      </p>

      <h3 className={H3}>Weeks 3 to 5: Accounting and the three-statement model</h3>
      <p>
        Take a public company&apos;s last three years of statements from its 10-K and build the income statement, balance sheet and cash flow statement, then a five-year projection. The three statements must tie, and ties are easy to check with code. Here is a small checker you can run against your model&apos;s outputs. It tests that the balance sheet balances, that ending cash on the cash flow statement equals cash on the balance sheet, and that retained earnings roll forward correctly:
      </p>
      <CodeBlock>{`def check_three_statements(years, tol=0.01):
    """years: list of dicts with keys
       assets, liabilities, equity, cash_bs, cash_cf_end,
       net_income, dividends, retained_earnings.
    Returns a list of (year_index, problem). Empty means every check passed."""
    problems = []
    for i, y in enumerate(years):
        if abs(y["assets"] - (y["liabilities"] + y["equity"])) > tol:
            problems.append((i, "balance sheet does not balance"))
        if abs(y["cash_bs"] - y["cash_cf_end"]) > tol:
            problems.append((i, "cash flow ending cash != balance sheet cash"))
        if i > 0:
            prev = years[i - 1]["retained_earnings"]
            expected = prev + y["net_income"] - y["dividends"]
            if abs(y["retained_earnings"] - expected) > tol:
                problems.append((i, "retained earnings roll-forward is off"))
    return problems`}</CodeBlock>
      <p>
        On a consistent two-year sample it returns an empty list. When we break the second year on purpose (assets off by 10, ending cash off by 5, retained earnings off by 10), it reports all three problems. Use the same discipline in Excel: a check row at the bottom of every statement that must equal zero. Then have Claude build its own version and compare the two, line by line.
      </p>

      <h3 className={H3}>Weeks 6 to 7: DCF</h3>
      <p>
        Discount your own free cash flow forecast. The failure to avoid is a valuation that looks precise and rests on two numbers, the discount rate and the terminal growth rate. Build the sensitivity table by hand, then ask yourself what each cell is telling you. For a code-first version that pulls statements from an API, see our{' '}
        <PlaybookLink href="/blog/fmp-api-dcf-claude-code">DCF walkthrough</PlaybookLink>, which also explains why reported free cash flow has to be adjusted before you discount it at WACC.
      </p>

      <h3 className={H3}>Week 8: Trading comps</h3>
      <p>
        Choose peers for your company, build the enterprise value bridge for each, and compute LTM multiples. The hard part isn&apos;t the arithmetic. It is consistent definitions and a defensible peer set, both of which we cover in{' '}
        <PlaybookLink href="/blog/ai-comps-analysis-data-sources">how to run comps with AI and where the data comes from</PlaybookLink>.
      </p>

      <h3 className={H3}>Weeks 9 to 10: LBO</h3>
      <p>
        Build the five-part skeleton (sources and uses, operating case, debt schedule, exit, returns) and check it against a paper LBO. Our{' '}
        <PlaybookLink href="/blog/learn-lbo-modeling-then-automate-it-cfi-claude-code">LBO walkthrough</PlaybookLink>{' '}
        has a tested engine you can compare yours against, and a returns attribution that shows where the money came from.
      </p>

      <h3 className={H3}>Weeks 11 to 12: Audit and communicate</h3>
      <p>
        Audit your own models with the Model Auditor, then fix what it finds. Then write a two-page memo on the company: the business, the valuation range and the three assumptions that matter most. A model nobody can read is half finished, and writing the memo is how you learn whether you understand your own numbers.
      </p>

      <h3 className={H3}>Week 13: Package it</h3>
      <p>
        Put the models, the memo and your audit notes in one folder with a short README that says what each file does and what you would do next. That folder is your evidence. It&apos;s worth more in an interview than a list of courses.
      </p>

      <h2 className={H2}>Where Paid Courses Fit</h2>
      <p>
        You can run this entirely on free material: company filings, the playbooks and Claude as a tutor. A paid course helps if you want a curated sequence, exams and a certificate. <AffiliateLink partner="cfi">Corporate Finance Institute</AffiliateLink> is organized the way this plan is, with accounting, three-statement, DCF and valuation courses leading into a certification; we explain who should and shouldn&apos;t pay for it in{' '}
        <PlaybookLink href="/blog/is-cfi-all-access-worth-it-2026">Is the CFI All-Access bundle worth it?</PlaybookLink>{' '}
        If you also want Python or SQL alongside the modeling, <AffiliateLink partner="datacamp">DataCamp</AffiliateLink> lists a Finance Fundamentals track built with CFI and a Finance Fundamentals in Python track, each with six courses, and has a free tier that gives you the first chapter of each course. Both are optional, and neither replaces the build-it-yourself step.
      </p>

      <h2 className={H2}>Tripwires: Signs You Are Outsourcing the Learning</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>You can&apos;t explain why a number in Claude&apos;s model is what it is without asking Claude.</li>
        <li>Your model and Claude&apos;s always agree, because you copied its structure early.</li>
        <li>You skip the by-hand step because &quot;it would take too long.&quot; That is the step that makes it faster later.</li>
        <li>You can&apos;t rebuild a simple version from a blank sheet on a bad day.</li>
      </ul>
      <p>
        If two of those are true, go back a week and do that week&apos;s build without the assistant. The plan is meant to be slightly uncomfortable. If you want to see why that matters for your career, read{' '}
        <PlaybookLink href="/blog/will-ai-replace-financial-analysts">AI won&apos;t replace the analyst; it will replace the spreadsheet grind</PlaybookLink>.
      </p>
      <p className="text-sm text-muted-foreground">
        This article is for education and isn&apos;t career or investment advice. Course details are from CFI&apos;s and DataCamp&apos;s own pages as of November 2026 and change, so confirm them before you enroll. Time estimates are guides, not guarantees.
      </p>
    </BlogPostLayout>
  );
}
