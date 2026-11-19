import { Metadata } from 'next';
import Link from 'next/link';
import { AffiliateDisclosure, AffiliateLink } from '@/components/AffiliateLink';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: "AI Won't Replace the Analyst. It Will Replace the Spreadsheet Grind | Claude Code Playbooks Blog",
  description: "Will AI replace financial analysts? Our take: it replaces tasks, not accountability, but it squeezes the apprenticeship that builds judgment. What the evidence says, what changes for juniors, what to practice this quarter, and what would change our mind.",
  alternates: { canonical: '/blog/will-ai-replace-financial-analysts' },
  openGraph: {
    title: "AI Won't Replace the Analyst. It Will Replace the Spreadsheet Grind",
    description: "Will AI replace financial analysts? Our take: it replaces tasks, not accountability, but it squeezes the apprenticeship that builds judgment. What the evidence says, what changes for juniors, what to practice this quarter, and what would change our mind.",
    url: 'https://www.claudecodehq.com/blog/will-ai-replace-financial-analysts',
    type: 'article',
    publishedTime: '2026-11-19T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Won't Replace the Analyst. It Will Replace the Spreadsheet Grind",
    description: "Will AI replace financial analysts? Our take: it replaces tasks, not accountability, but it squeezes the apprenticeship that builds judgment. What the evidence says, what changes for juniors, what to practice this quarter, and what would change our mind.",
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

const H2 = 'text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2';
const TH = 'text-left p-3 border-b border-[#30363d] text-foreground';
const TD = 'p-3 border-b border-[#30363d] align-top';

export default function WillAiReplaceFinancialAnalystsPage() {
  return (
    <BlogPostLayout
      title="AI Won't Replace the Analyst. It Will Replace the Spreadsheet Grind"
      description="Will AI replace financial analysts? Our take: it replaces tasks, not accountability, but it squeezes the apprenticeship that builds judgment. What the evidence says, what changes for juniors, what to practice this quarter, and what would change our mind."
      category="guide"
      difficulty="basic"
      readingTime="11 min read"
      createdAt="2026-11-19"
      tags={['will ai replace financial analysts', 'ai in finance jobs', 'future of finance careers', 'ai analyst jobs', 'finance career ai', 'junior analyst ai', 'claude code finance']}
      author="Claude Code Playbooks"
      slug="will-ai-replace-financial-analysts"
    >
      <AffiliateDisclosure className="mb-6" />
      <p>
        Here is our position, so you can disagree with it: AI will replace a large share of the tasks that fill a junior analyst&apos;s week, it will not replace the person who is accountable for the answer, and the real risk is to the way analysts learn. That third part gets less attention than it deserves.
      </p>
      <p>
        We run a site that sells tools and playbooks for Claude, and we earn commissions from some of the products we mention, which is a reason to be sceptical of anything we say about AI. So we&apos;ve tried to separate what the evidence shows from what we think, and to end with the things that would change our mind.
      </p>

      <h2 className={H2}>What the Evidence Says (and Doesn&apos;t)</h2>
      <p>
        The evidence is early, mixed and partly second-hand, so we state it with the caveats attached.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-foreground">The labor-market baseline is not collapsing.</strong> The US Bureau of Labor Statistics lists median pay for financial and investment analysts at $102,740 in May 2025 and projects employment growth of about 7% from 2025 to 2035. Projections are a snapshot built on past patterns, so they can&apos;t price in a technology shift that is still unfolding. They do mean there is no data yet showing the occupation shrinking.
        </li>
        <li>
          <strong className="text-foreground">The tools are aimed at junior work.</strong> Anthropic&apos;s financial services launch included Claude working inside Excel and skills for comparable company analysis, discounted cash flow models, due diligence data packs, teasers and earnings analyses. Those are the tasks that fill an analyst&apos;s first years.
        </li>
        <li>
          <strong className="text-foreground">Banks are changing entry, not announcing mass cuts.</strong> Press reports describe Goldman Sachs restricting headcount growth in an October 2025 memo, while its leadership has said it expects headcount to grow over the next decade. Fortune reported its 2026 intern class was about 100 smaller than the previous year&apos;s. We found no confirmed formal cut to junior analyst classes.
        </li>
        <li>
          <strong className="text-foreground">Some firms now ask for AI skills up front.</strong> The Financial Times reported in September 2026 that UBS wants graduates and interns joining its global banking and markets division in 2027 to show how they would use AI responsibly to improve outcomes. We read this through secondary coverage, not the original article.
        </li>
      </ul>
      <p>
        Put together, the signal is narrower entry-level intake and changed expectations, not the disappearance of the job. It is also precisely the sort of signal that could be the leading edge of something bigger, and we can&apos;t rule that out.
      </p>

      <h2 className={H2}>What Gets Replaced</h2>
      <p>
        Look at the work through the lens of what can be checked quickly against a source. That is the work AI is best at, because mistakes are cheap to catch.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className={TH}>Mostly automated</th>
              <th className={TH}>Mostly human</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr><td className={TD}>Pulling and cleaning data</td><td className={TD}>Deciding which question matters</td></tr>
            <tr><td className={TD}>Populating templates and tying out numbers</td><td className={TD}>Judging whether a number is plausible</td></tr>
            <tr><td className={TD}>First drafts of notes, memos and decks</td><td className={TD}>Having a view and defending it to a skeptical PM or client</td></tr>
            <tr><td className={TD}>Comps tables, data packs, standard models</td><td className={TD}>Choosing the peers, the assumptions and the trade-offs</td></tr>
            <tr><td className={TD}>Summarizing transcripts and filings</td><td className={TD}>Reading what management is not saying</td></tr>
            <tr><td className={TD}>Monitoring against thresholds</td><td className={TD}>Deciding what to do about a breach</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        The right-hand column has one thing in common: someone has to be accountable for it. A model that is wrong costs a client money, and the person whose name is on it answers for it, regardless of who or what built it. That accountability is the reason the job continues to exist even where much of the work is automated. It is not guaranteed forever, but it is the most durable thing in the picture.
      </p>

      <h2 className={H2}>The Real Problem: The Apprenticeship</h2>
      <p>
        The grunt work is also how analysts learn. Building a hundred comps tables is boring, and it is also how you develop a feel for which multiples look off. Tying out a model to a filing at 2 a.m. is how you learn where errors hide. If AI does that work, juniors save the hours, and they also lose the repetitions that built the judgment.
      </p>
      <p>
        This is the argument people tend to skip. A senior reviewer can catch an AI&apos;s mistakes only because they have made those mistakes themselves, by hand. If the next generation never builds anything from scratch, in ten years there is a gap in the people who can tell when the machine is wrong.
      </p>
      <p>
        The answer for an individual is deliberate practice, because the job no longer provides it for free. Build the model by hand, then let AI build one, then explain the difference. We lay out a full version of this in the{' '}
        <PlaybookLink href="/blog/ai-assisted-finance-curriculum-90-days">90-day curriculum</PlaybookLink>.
      </p>

      <h2 className={H2}>Skills That Gain Value</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-foreground">Verification.</strong> Auditing a model you didn&apos;t build, with tie-outs, direction-of-change checks and source tags. Try the{' '}
          <PlaybookLink href="/playbooks/fa-audit-xls">Model Auditor</PlaybookLink> on your own work to see how it feels.
        </li>
        <li><strong className="text-foreground">Data provenance.</strong> Knowing where a number came from, what the source can&apos;t tell you and what the licence allows. See{' '}
          <PlaybookLink href="/blog/ai-comps-analysis-data-sources">where comps data actually comes from</PlaybookLink>.
        </li>
        <li><strong className="text-foreground">Domain depth.</strong> The better you know a sector, the better your questions are, and the questions are now the scarce part.</li>
        <li><strong className="text-foreground">Writing and speaking.</strong> Turning a verified answer into a recommendation someone acts on.</li>
        <li><strong className="text-foreground">AI fluency, used honestly.</strong> Not prompt tricks. Knowing which tasks to hand over, how to constrain them, and how to check the result.</li>
      </ul>

      <h2 className={H2}>What to Do This Quarter</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li><strong className="text-foreground">Pick three recurring tasks</strong> that eat your week, and automate each one with a verification step built in. If you can&apos;t verify the output quickly, don&apos;t automate it yet.</li>
        <li><strong className="text-foreground">Build one model from a blank sheet each month</strong>, with no assistant. Keep your hands in.</li>
        <li><strong className="text-foreground">Use the saved time on judgment work.</strong> Use AI to widen your funnel of ideas (the{' '}
          <PlaybookLink href="/playbooks/er-idea-generation">Idea Generation</PlaybookLink> playbook is built for that), then do the thesis yourself.
        </li>
        <li><strong className="text-foreground">Learn the market from the data side.</strong> A free <AffiliateLink partner="koyfin">Koyfin</AffiliateLink> plan is a good place to practice reading charts, multiples and macro series, because reading the data is the part you can&apos;t outsource.</li>
        <li><strong className="text-foreground">Fill the gaps in your fundamentals.</strong> If you can&apos;t build a balancing three-statement model unaided, fix that first. A structured course such as <AffiliateLink partner="cfi">CFI</AffiliateLink> is one route, and our{' '}
          <PlaybookLink href="/blog/is-cfi-all-access-worth-it-2026">worth-it guide</PlaybookLink> covers who should skip it. Free routes exist too, and the toolkit in the{' '}
          <PlaybookLink href="/playbooks/financial-analyst-toolkit">Financial Analyst Toolkit</PlaybookLink> playbook works with any of them.
        </li>
      </ol>

      <h2 className={H2}>What Would Change Our Mind</h2>
      <p>
        An opinion piece should say what would falsify it. Ours would move toward &quot;AI replaces the role&quot; if we saw:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Large firms stopping junior hiring altogether, not trimming it, with no new entry path appearing.</li>
        <li>AI-built models and notes being accepted without human review, with the firm taking the liability for errors.</li>
        <li>BLS-style employment data for analysts turning down for reasons that point to automation, not the economic cycle.</li>
        <li>Clients paying for research and analysis at a fraction of today&apos;s price because the production cost collapsed.</li>
      </ul>
      <p>
        We would move the other way if the junior intake stabilizes and firms report the AI-trained cohorts performing well. None of these has happened yet, and watching for them is more useful than arguing about the headline.
      </p>
      <p className="text-sm text-muted-foreground">
        This article is opinion and education, not career or investment advice. Labor-market and company information is from public reports as of November 2026, parts of it through secondary coverage, and changes quickly. We may earn commissions from some of the products mentioned.
      </p>
    </BlogPostLayout>
  );
}
