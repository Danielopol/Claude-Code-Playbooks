import { Metadata } from 'next';
import Link from 'next/link';
import { AffiliateDisclosure, AffiliateLink } from '@/components/AffiliateLink';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Is the CFI All-Access Bundle Worth It in 2026? An Honest Look | Claude Code Playbooks Blog',
  description: "What a CFI All-Access membership includes, what it costs and how it renews, who should buy it, who should skip it, and how it compares with Wall Street Prep, Breaking Into Wall Street and DataCamp. Prices come from each provider's own pages.",
  alternates: { canonical: '/blog/is-cfi-all-access-worth-it-2026' },
  openGraph: {
    title: 'Is the CFI All-Access Bundle Worth It in 2026? An Honest Look',
    description: "What a CFI All-Access membership includes, what it costs and how it renews, who should buy it, who should skip it, and how it compares with Wall Street Prep, Breaking Into Wall Street and DataCamp. Prices come from each provider's own pages.",
    url: 'https://www.claudecodehq.com/blog/is-cfi-all-access-worth-it-2026',
    type: 'article',
    publishedTime: '2026-11-19T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is the CFI All-Access Bundle Worth It in 2026? An Honest Look',
    description: "What a CFI All-Access membership includes, what it costs and how it renews, who should buy it, who should skip it, and how it compares with Wall Street Prep, Breaking Into Wall Street and DataCamp. Prices come from each provider's own pages.",
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

function Verdict({ label, tone, children }: { label: string; tone: 'good' | 'warn'; children: React.ReactNode }) {
  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
      <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${tone === 'good' ? 'text-[#22c55e]' : 'text-[#f97316]'}`}>{label}</p>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

const H2 = 'text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2';
const TH = 'text-left p-3 border-b border-[#30363d] text-foreground';
const TD = 'p-3 border-b border-[#30363d] align-top';

export default function IsCfiAllAccessWorthIt2026Page() {
  return (
    <BlogPostLayout
      title="Is the CFI All-Access Bundle Worth It in 2026? An Honest Look"
      description="What a CFI All-Access membership includes, what it costs and how it renews, who should buy it, who should skip it, and how it compares with Wall Street Prep, Breaking Into Wall Street and DataCamp. Prices come from each provider's own pages."
      category="guide"
      difficulty="basic"
      readingTime="11 min read"
      createdAt="2026-11-19"
      tags={['cfi all access worth it', 'corporate finance institute review', 'cfi vs wall street prep', 'fmva worth it', 'financial modeling course comparison', 'cfi membership price', 'breaking into wall street vs cfi']}
      author="Claude Code Playbooks"
      slug="is-cfi-all-access-worth-it-2026"
    >
      <AffiliateDisclosure className="mb-6" />
      <p>
        &quot;Is it worth it&quot; is the last question people ask before paying for a course, and most pages that answer it are written by someone who earns a commission. This one is too, so here is how it works: we may earn a commission if you buy CFI through a link on this site. We haven&apos;t taken the courses ourselves, so this is not a review of the teaching. It is a decision guide built from what each provider publishes about itself: what you get, what it costs, how it renews, who it suits and who should skip it. Where the numbers come from provider pages, they are as of 19 November 2026.
      </p>

      <h2 className={H2}>What You Actually Buy</h2>
      <p>
        <AffiliateLink partner="cfi">Corporate Finance Institute</AffiliateLink> (CFI) sells an annual membership with two tiers. According to its pricing page:
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className={TH}></th>
              <th className={TH}>Self-Study</th>
              <th className={TH}>Full-Immersion</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr><td className={TD}><strong className="text-foreground">List price (per year)</strong></td><td className={TD}>$497</td><td className={TD}>$847</td></tr>
            <tr><td className={TD}><strong className="text-foreground">Price shown when we checked</strong></td><td className={TD}>$298.20 (40% off)</td><td className={TD}>$508.20 (40% off)</td></tr>
            <tr><td className={TD}><strong className="text-foreground">Courses</strong></td><td className={TD}>250+ on demand</td><td className={TD}>Same</td></tr>
            <tr><td className={TD}><strong className="text-foreground">Certification exams</strong></td><td className={TD}>8, including FMVA and FPAP</td><td className={TD}>Same</td></tr>
            <tr><td className={TD}><strong className="text-foreground">Specializations</strong></td><td className={TD}>14 to 15 (CFI&apos;s own pages differ)</td><td className={TD}>Same</td></tr>
            <tr><td className={TD}><strong className="text-foreground">Extras</strong></td><td className={TD}>575+ CPE/CPD credits</td><td className={TD}>Adds 1-on-1 expert questions (5 a week), an AI tutor, personalized model review, premium templates and partner discounts (PitchBook, FinChat, Koyfin, IBISWorld)</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Two things in that table are easy to miss. The 40% discount looked like a time-limited promotion, so the list price is the number to budget around, and you should check what the page says on the day you buy. And there is no monthly option: the pricing page says CFI doesn&apos;t currently offer monthly billing, and memberships renew annually.
      </p>
      <p>
        The flagship certification, the FMVA (Financial Modeling &amp; Valuation Analyst), is listed as 44 courses in total, of which 18 are required: 15 core courses plus at least 3 of 12 electives. CFI puts the time at 100 to 120 hours, self-paced. It covers 3-statement modeling and DCF valuation. It does not include LBO or merger modeling in the FMVA course list, which sit in a separate Investment Banking &amp; Private Equity Modeling specialization. That matters if those are the skills you came for.
      </p>

      <h2 className={H2}>The Terms to Read Before Paying</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-foreground">Renewal.</strong> Annual, automatic. Put the renewal date in your calendar the day you buy.</li>
        <li><strong className="text-foreground">Refunds.</strong> The pricing page doesn&apos;t state a policy. A course-page FAQ says all payments to CFI are non-refundable except as required by law, so assume you can&apos;t get your money back.</li>
        <li><strong className="text-foreground">Trial.</strong> There is no paid trial, but you can start with a free account and preview courses without a card.</li>
        <li><strong className="text-foreground">Credentials.</strong> CFI describes its accreditation in several different ways across its pages. If a specific employer or exam body needs to recognize the certificate, ask them, and don&apos;t rely on the marketing page.</li>
      </ul>

      <h2 className={H2}>Who Should Buy It</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Verdict label="A good fit" tone="good">
          <ul className="list-disc pl-5 space-y-1">
            <li>You are building a foundation from scratch (accounting, 3-statement models, DCF) and want a structured path with exams, not a pile of videos.</li>
            <li>You will use breadth: the same membership covers modeling, FP&amp;A, credit and data skills.</li>
            <li>You know you finish things you pay for, and you can give it a few hours a week.</li>
          </ul>
        </Verdict>
        <Verdict label="Probably skip it" tone="warn">
          <ul className="list-disc pl-5 space-y-1">
            <li>Your bank or fund already runs an analyst training program.</li>
            <li>You need one narrow skill. A single course elsewhere costs less.</li>
            <li>You want monthly billing or a refund option.</li>
            <li>You learn best by doing real work, and you already build models without notes.</li>
          </ul>
        </Verdict>
      </div>
      <p>
        The honest cost of any membership is the one nobody prints: completion. A $497 plan you use for three weeks costs $497. If your history with online courses is mixed, the free account is the test.
      </p>

      <h2 className={H2}>How It Compares</h2>
      <p>
        Prices below come from each provider&apos;s own pages on 19 November 2026. They vary by country and promotion, so confirm before you buy.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className={TH}>Provider</th>
              <th className={TH}>Pricing shape</th>
              <th className={TH}>What the pages show</th>
              <th className={TH}>Refund</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className={TD}><strong className="text-foreground">CFI</strong></td>
              <td className={TD}>Annual membership, $497 or $847 list</td>
              <td className={TD}>250+ courses, 8 certification exams, FMVA at 100 to 120 hours</td>
              <td className={TD}>Non-refundable except as required by law</td>
            </tr>
            <tr>
              <td className={TD}><strong className="text-foreground">Wall Street Prep</strong></td>
              <td className={TD}>One-off packages. Premium Package $499</td>
              <td className={TD}>Premium Package page lists 7 courses and about 46 hours, including financial statement, DCF, M&amp;A and trading comps modeling</td>
              <td className={TD}>None shown on the pages we read</td>
            </tr>
            <tr>
              <td className={TD}><strong className="text-foreground">Breaking Into Wall Street</strong></td>
              <td className={TD}>Bundles or single courses. Premium $497 with no time limit; Silver $97 for one year</td>
              <td className={TD}>Core Financial Modeling $297; PE Modeling (LBO) $197; IB Interview Guide $197</td>
              <td className={TD}>90-day money-back guarantee on courses</td>
            </tr>
            <tr>
              <td className={TD}><strong className="text-foreground">DataCamp</strong></td>
              <td className={TD}>Free tier, then a subscription (shown as about €12 a month billed annually; varies by country)</td>
              <td className={TD}>810+ courses, Python, SQL and Power BI. Includes a track built with CFI</td>
              <td className={TD}>Check terms</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The structural difference is worth more than any line in the table. CFI and DataCamp are subscriptions: you pay for access, and the price is the same whether you use 3 courses or 30. Wall Street Prep and Breaking Into Wall Street sell packages, and Breaking Into Wall Street&apos;s Premium has no time limit, so you can finish at your own pace. If you want one specialist course (an LBO course, an interview guide), the single-course prices there are lower than a year of CFI. If you want breadth, a subscription makes more sense. We have not compared the teaching quality of any of them.
      </p>

      <h2 className={H2}>Where AI Changes the Decision</h2>
      <p>
        Claude Code is a good tutor for the parts of learning that are explanation and practice: ask it to explain a debt schedule line by line, quiz you, or check a model you built. It will not hand you a structured curriculum, certify that you finished one, or tell you what you don&apos;t know that you don&apos;t know. That is what a course path gives you.
      </p>
      <p>
        The practical split is to pay for structure and use AI for practice. Learn the module, then rebuild the model yourself, then have Claude build the same thing from the same inputs and explain every difference, as in our walkthrough on{' '}
        <PlaybookLink href="/blog/learn-lbo-modeling-then-automate-it-cfi-claude-code">learning LBO modeling and then automating it</PlaybookLink>. The playbooks for{' '}
        <PlaybookLink href="/playbooks/fa-3-statement-model">3-statement models</PlaybookLink>,{' '}
        <PlaybookLink href="/playbooks/financial-modeling">financial modeling</PlaybookLink> and the{' '}
        <PlaybookLink href="/playbooks/financial-analyst-toolkit">Financial Analyst Toolkit</PlaybookLink>{' '}
        are free, and they work with any course you choose.
      </p>

      <h2 className={H2}>How to Decide in Two Weeks</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Open a free CFI account and preview a course in the area you care about.</li>
        <li>Over two weeks, try to complete five study sessions. If you can&apos;t, the problem isn&apos;t the price.</li>
        <li>Price your target skill alone. If one course covers it, buy that course.</li>
        <li>If you need the breadth, buy the plan, set a renewal reminder for 11 months out, and plan your hours. The{' '}
          <PlaybookLink href="/blog/ai-assisted-finance-curriculum-90-days">90-day curriculum</PlaybookLink> is one way to use them.
        </li>
      </ol>
      <p className="text-sm text-muted-foreground">
        This article is for education and isn&apos;t financial or career advice. Prices, plan contents and terms are as published by each provider on 19 November 2026 and change often. Check the current pricing page and terms before you buy. We may earn a commission from CFI.
      </p>
    </BlogPostLayout>
  );
}
