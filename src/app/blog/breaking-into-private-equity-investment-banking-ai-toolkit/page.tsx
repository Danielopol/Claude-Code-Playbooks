import { Metadata } from 'next';
import Link from 'next/link';
import { AffiliateDisclosure, AffiliateLink } from '@/components/AffiliateLink';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Breaking Into PE or IB: The AI-Native Analyst Toolkit | Claude Code Playbooks Blog',
  description: "How to use Claude Code to prepare for private equity and investment banking recruiting without crossing the line: technical drilling with a commit-first rule, paper LBO practice with code-checked answers, a public deal case study, and the rules on AI in tests and interviews.",
  alternates: { canonical: '/blog/breaking-into-private-equity-investment-banking-ai-toolkit' },
  openGraph: {
    title: 'Breaking Into PE or IB: The AI-Native Analyst Toolkit',
    description: "How to use Claude Code to prepare for private equity and investment banking recruiting without crossing the line: technical drilling with a commit-first rule, paper LBO practice with code-checked answers, a public deal case study, and the rules on AI in tests and interviews.",
    url: 'https://www.claudecodehq.com/blog/breaking-into-private-equity-investment-banking-ai-toolkit',
    type: 'article',
    publishedTime: '2026-11-19T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Breaking Into PE or IB: The AI-Native Analyst Toolkit',
    description: "How to use Claude Code to prepare for private equity and investment banking recruiting without crossing the line: technical drilling with a commit-first rule, paper LBO practice with code-checked answers, a public deal case study, and the rules on AI in tests and interviews.",
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

export default function BreakingIntoPrivateEquityInvestmentBankingAiToolkitPage() {
  return (
    <BlogPostLayout
      title="Breaking Into PE or IB: The AI-Native Analyst Toolkit"
      description="How to use Claude Code to prepare for private equity and investment banking recruiting without crossing the line: technical drilling with a commit-first rule, paper LBO practice with code-checked answers, a public deal case study, and the rules on AI in tests and interviews."
      category="guide"
      difficulty="basic"
      readingTime="12 min read"
      createdAt="2026-11-19"
      tags={['break into private equity', 'ib recruiting prep', 'pe interview preparation ai', 'paper lbo practice', 'investment banking interview prep', 'finance recruiting ai', 'claude code finance']}
      author="Claude Code Playbooks"
      slug="breaking-into-private-equity-investment-banking-ai-toolkit"
    >
      <AffiliateDisclosure className="mb-6" />
      <p>
        Recruiting for investment banking and private equity rewards one thing above everything else: being fast and right on technical material under pressure. That is a skill you build by practice, and AI is very good at generating practice. It is also very good at helping you cheat yourself, by producing polished answers you can&apos;t reproduce in a room with no laptop.
      </p>
      <p>
        This guide is the toolkit for using Claude as a training partner, not a crutch. The principle is simple: <strong className="text-foreground">AI helps you prepare; it doesn&apos;t help you perform.</strong> Everything below is designed to make you better at the part where you are on your own.
      </p>

      <h2 className={H2}>Rules of the Road</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-foreground">Follow each firm&apos;s rules on AI in assessments.</strong> Timed modeling tests, case studies and superdays usually forbid outside help, and AI is outside help unless the instructions say otherwise. Read the instructions every time. Being caught is career-ending, and being unprepared without it is survivable.</li>
        <li><strong className="text-foreground">Policies are moving in both directions.</strong> The Financial Times reported in September 2026 that UBS wants graduates and interns joining its 2027 global banking and markets intake to show how they would use AI responsibly. We saw that through secondary coverage. Other firms restrict AI tightly. Don&apos;t assume, and ask your recruiter if it isn&apos;t clear.</li>
        <li><strong className="text-foreground">Never use your employer&apos;s or a client&apos;s confidential information</strong> in practice material, including from a current or past internship. Build on public companies and closed deals.</li>
        <li><strong className="text-foreground">Don&apos;t memorize AI-written answers.</strong> Interviewers ask follow-ups, and a rehearsed answer you can&apos;t extend is easy to spot.</li>
      </ul>

      <h2 className={H2}>What Interviews Commonly Test</h2>
      <p>
        Recruiting guides describe a similar structure across IB and PE: technical questions on accounting and valuation, a deal walkthrough, a paper LBO in a first round, a timed modeling test (often an LBO with a short write-up) later, and fit questions throughout. Timelines are the unstable part. The process has moved around in recent years, with private equity recruiting restarting after a pause and shifting its schedule, and most of what you will read about dates comes from coaching sites with their own interests. Treat any specific date as an estimate, and check current guidance from your school&apos;s career office and recent press before you plan around it.
      </p>

      <h2 className={H2}>The Toolkit</h2>
      <h3 className={H3}>1. A technicals examiner with a commit-first rule</h3>
      <p>
        The failure mode of AI tutoring is reading the answer and thinking you knew it. Prevent that by making Claude withhold the answer until you commit.
      </p>
      <Prompt>
        Quiz me on accounting and valuation technicals for an investment banking analyst interview. Ask one question at a time and wait for my answer. After I answer, tell me whether I was right, what I missed, and one follow-up an interviewer would ask. Track the topics I get wrong and come back to them. Don&apos;t give me the answer before I have tried.
      </Prompt>
      <p>
        Keep a list of what you miss. That list is your study plan, and it is more valuable than any generic set of questions. Cross-check anything Claude states as fact against a textbook or a course, because a confidently wrong explanation of a technical point is the most expensive thing a tutor can give you.
      </p>

      <h3 className={H3}>2. Paper LBO practice, with answers computed by code</h3>
      <p>
        A paper LBO is a mental-math exercise: given an entry price, leverage, growth and an exit multiple, estimate the return. Language models are unreliable at arithmetic, so don&apos;t trust them to produce the answer key. Have Claude generate the case and compute the answer in code, and then you check yourself.
      </p>
      <Prompt>
        Generate a paper LBO case with round numbers: LTM EBITDA, entry multiple, debt as a multiple of EBITDA, interest rate, EBITDA growth, cash conversion and exit multiple. Don&apos;t show the answer. Write the solution as Python and run it. Reveal the result only after I give you my MOIC and IRR, then show where my estimate went wrong.
      </Prompt>
      <p>
        The shortcut every candidate should have memorized comes straight from the arithmetic: with no interim distributions, IRR is the multiple raised to one over the years held, minus one. Over five years, 2.0x is about 15%, 2.5x about 20% and 3.0x about 25%. The tested engine in our{' '}
        <PlaybookLink href="/blog/learn-lbo-modeling-then-automate-it-cfi-claude-code">LBO walkthrough</PlaybookLink>{' '}
        is a good base for the code Claude writes, and it also shows where the return comes from: EBITDA growth, the multiple, debt paydown and fees. Interviewers like candidates who can say which of those is doing the work.
      </p>

      <h3 className={H3}>3. A public deal case study, in your own words</h3>
      <p>
        A case study on a real deal is the best proof you can generate before you have a job. Choose a closed take-private, read the proxy statement and the press release, and then build it:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Sources and uses and a simple LBO with the <PlaybookLink href="/playbooks/fa-lbo-model">LBO Model Builder</PlaybookLink> as your shadow build, after you have built yours.</li>
        <li>A one-page screening memo of whether the target fit a plausible fund&apos;s criteria, using the <PlaybookLink href="/playbooks/pe-deal-screening">Deal Screening Memo</PlaybookLink> format.</li>
        <li>A mock book section, to learn what buyers expect to read. The <PlaybookLink href="/playbooks/ib-cim-builder">CIM Builder</PlaybookLink> shows the structure. Draft from public information only, and label it as an exercise.</li>
      </ul>
      <p>
        Then be able to rebuild the core of it from a blank page. If you can&apos;t explain the model without Claude, it isn&apos;t yours yet, and an interviewer will find that out within two questions.
      </p>

      <h3 className={H3}>4. Behavioral stories you can actually tell</h3>
      <p>
        Fit questions decide more offers than candidates expect. The{' '}
        <PlaybookLink href="/playbooks/interview-mastery-system">Interview Mastery System</PlaybookLink>{' '}
        analyzes a job description against your resume, predicts likely questions and drafts STAR-method answers from your real experience. Use it to structure your stories, then say them aloud until they are yours. A STAR answer should sound like you, so strip anything you wouldn&apos;t say.
      </p>

      <h3 className={H3}>5. Market awareness and a foundation</h3>
      <p>
        Interviewers ask what is happening in markets and whether you have a view. A free <AffiliateLink partner="koyfin">Koyfin</AffiliateLink> plan is a reasonable place to follow charts, sectors and macro series without paying for a terminal. And if your accounting and modeling foundation is the weak link, a structured course such as <AffiliateLink partner="cfi">CFI</AffiliateLink> can give you a path. We cover who should skip it in{' '}
        <PlaybookLink href="/blog/is-cfi-all-access-worth-it-2026">Is the CFI All-Access bundle worth it?</PlaybookLink>{' '}
        Free routes (company filings, textbooks, the playbooks here) cover the same ground if you have the discipline.
      </p>

      <h2 className={H2}>A Six-Week Prep Plan</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className={TH}>Week</th>
              <th className={TH}>Focus</th>
              <th className={TH}>Output</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr><td className={TD}>1</td><td className={TD}>Accounting and valuation technicals</td><td className={TD}>A list of the topics you miss</td></tr>
            <tr><td className={TD}>2</td><td className={TD}>Three-statement and DCF by hand</td><td className={TD}>A balancing model and a DCF</td></tr>
            <tr><td className={TD}>3</td><td className={TD}>LBO mechanics and paper LBOs</td><td className={TD}>20 timed paper LBOs, checked by code</td></tr>
            <tr><td className={TD}>4</td><td className={TD}>Public deal case study</td><td className={TD}>Model, memo and a deal walkthrough</td></tr>
            <tr><td className={TD}>5</td><td className={TD}>Behavioral stories and the &quot;why&quot; answers</td><td className={TD}>Six rehearsed stories and your pitch</td></tr>
            <tr><td className={TD}>6</td><td className={TD}>Mocks with a person</td><td className={TD}>Two live mock interviews with feedback</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        If you have more time, the{' '}
        <PlaybookLink href="/blog/ai-assisted-finance-curriculum-90-days">90-day curriculum</PlaybookLink>{' '}
        builds the foundation these six weeks assume. For the tool landscape you will meet on the job, see{' '}
        <PlaybookLink href="/blog/ai-tools-investment-banking-analysts-2026">AI tools for investment banking analysts</PlaybookLink>, and for the bigger career question, our take on{' '}
        <PlaybookLink href="/blog/will-ai-replace-financial-analysts">whether AI will replace the analyst</PlaybookLink>.
      </p>
      <p>
        One last point, because it is the one that matters on the day. A person across the table is testing whether you can think, and what they remember is how you handle a question you didn&apos;t expect. Practice with AI as hard as you like, and make sure the person who shows up is you.
      </p>
      <p className="text-sm text-muted-foreground">
        This article is for education and isn&apos;t career advice. Recruiting processes, timelines and firm policies on AI change often and differ by firm and region, so confirm them with the firm, your school&apos;s career office and recent sources. We may earn commissions from some products mentioned.
      </p>
    </BlogPostLayout>
  );
}
