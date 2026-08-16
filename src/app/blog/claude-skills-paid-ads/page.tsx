import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Paid Ads: Write, Test, and Optimize Campaigns with AI | Claude Code Playbooks Blog',
  description: "Four Claude Skills covering the full paid media loop — pattern-based ad copy generation, properly structured Google Ads campaigns, Facebook and Meta targeting, and statistically rigorous creative testing.",
  alternates: { canonical: '/blog/claude-skills-paid-ads' },
  openGraph: {
    title: 'Claude Skills for Paid Ads: Write, Test, and Optimize Campaigns with AI',
    description: "Four Claude Skills covering the full paid media loop — pattern-based ad copy generation, properly structured Google Ads campaigns, Facebook and Meta targeting, and statistically rigorous creative testing.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-paid-ads',
    type: 'article',
    publishedTime: '2026-08-16T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Paid Ads: Write, Test, and Optimize Campaigns with AI',
    description: "Four Claude Skills covering the full paid media loop — pattern-based ad copy generation, properly structured Google Ads campaigns, Facebook and Meta targeting, and statistically rigorous creative testing.",
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

export default function ClaudeSkillsPaidAdsPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Paid Ads: Write, Test, and Optimize Campaigns with AI"
      description="Four Claude Skills covering the full paid media loop — pattern-based ad copy generation, properly structured Google Ads campaigns, Facebook and Meta targeting, and statistically rigorous creative testing."
      category="guide"
      difficulty="intermediate"
      readingTime="13 min read"
      createdAt="2026-08-16"
      tags={['claude skills paid ads', 'ai ad copy', 'ai ad campaign optimization', 'google ads ai', 'facebook ads ai', 'ppc automation ai', 'ad creative testing', 'ai media buying']}
      author="Claude Code Playbooks"
      slug="claude-skills-paid-ads"
    >
      <p>
        Paid media is unusual among marketing disciplines because the feedback is immediate and quantified — a bad campaign doesn't just underperform quietly, it burns real budget in real time, with a CPA number that proves it. That directness is exactly why the discipline rewards a real system: writing copy based on proven patterns instead of guesses, structuring campaigns instead of accepting platform defaults, and testing creative with actual statistical rigor instead of eyeballing which variant "felt" like it did better.
      </p>
      <p>
        These four Claude Skills cover that full loop — what to write, how to structure the two platforms most performance marketers live in, and how to test creative in a way that produces real, repeatable learning rather than noise.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Write Ad Copy From What Already Won, Not From Scratch
      </h2>
      <p>
        Ad spend keeps climbing and nobody can say with confidence which copy is actually driving conversions, because writing new variations to test means hours of manual work, and most of those variations flop — not because the writer is bad, but because they're guessing instead of working from what the account's own data already proved works.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/ad-copy-generator">Ad Copy Variation Generator</PlaybookLink>{' '}
        Skill analyzes your best-performing ads first, identifies the winning patterns — which hooks worked, which CTA styles, which formats — and then generates new variations built on those patterns, ready to test across Facebook, LinkedIn, Google, and other platforms.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Analyze our top 20 Facebook ads from Q4 and generate 50 new variations based on what's actually working"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Ad spend growing with no clear read on which copy actually converts, and every new test variation is hours of writing based on a hunch rather than a pattern</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Pattern analysis revealing your 3 best-performing hooks, CTA styles, and formats, plus 50 new ad variations built on those patterns and ready to A/B test</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 5 minutes. Feed it historical performance data — the pattern analysis is only as strong as the data behind it.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Fix the Google Ads Structure That's Doubling Your CPC
      </h2>
      <p>
        A lot of Google Ads accounts are still running on the structure they had the day they were set up — broad match keywords with no negative keyword list, a quality score sitting around 4, and every keyword dumped into a single undifferentiated ad group. The result is a cost per click roughly double what a properly structured account would pay for the same traffic, and it compounds every day the structure goes unfixed.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/google-ads-manager">Google Ads Campaign Manager</PlaybookLink>{' '}
        Skill rebuilds that structure properly: campaigns with correctly segmented ad groups, keyword research with the right match types applied, negative keyword lists that stop budget from leaking to irrelevant searches, ad copy variations ready for A/B testing, bid strategy recommendations, and conversion tracking set up correctly from the start.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Set up a Google Ads campaign for our B2B SaaS product — proper ad group structure, keyword research with match types, and a negative keyword list"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">$5,000/month on broad match keywords with no negative keyword list, a quality score of 4, and a single ad group acting as a dumping ground for every keyword — CPC twice what it should be</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Properly structured ad groups, keyword research with correct match types, a working negative keyword list, ad copy variations for testing, bid strategy recommendations, and conversion tracking set up correctly</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Especially worth running on any account that was originally set up by following an outdated tutorial.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Replace "Boost Post" With an Actual Meta Strategy
      </h2>
      <p>
        The Meta ads equivalent of the Google problem above is the "boost post" button with no underlying strategy — a rising CPA, and Meta's own "suggested audience" targeting so broad it effectively targets everyone and no one. Meanwhile, competitors running properly structured campaigns show up consistently, because campaign structure on Meta matters just as much as it does on Google, even though the platform makes it easy to skip.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/facebook-ads">Facebook & Meta Ads Manager</PlaybookLink>{' '}
        Skill builds the campaign structure that "boost post" skips entirely: ad sets properly segmented by audience, creative variations ready for A/B testing, conversion tracking configured correctly, a budget allocation strategy, and automated rules that pause underperforming ads before they burn more spend.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Set up a Facebook ad campaign for our product launch — proper audience segmentation, creative variations for testing, and automated rules to pause underperformers"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Boosting posts with no underlying strategy, a climbing CPA, and Meta's suggested audience targeting everyone and no one — while competitors with real campaign structure show up everywhere</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Ad sets segmented by audience, creative variations for A/B testing, conversion tracking configured properly, a budget allocation strategy, and automated rules pausing underperforming ads before they waste more spend</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Feed it historical performance data if you have it — a fresh account gets a strategy built from best practices instead.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Turn Ad-Hoc A/B Tests Into a Real Testing System
      </h2>
      <p>
        Copy and campaigns are only half of what drives paid performance — the other half is how rigorously creative gets tested. Most testing happens ad-hoc: a couple of variants get launched, whichever one has a lower CPA after a few days gets declared the winner, and the process resets from scratch for the next test with no accumulated learning about what variables actually matter.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/creative-testing-framework">Creative Testing Framework</PlaybookLink>{' '}
        Skill designs a systematic testing program instead — one that maximizes learning velocity while maintaining actual statistical rigor. It produces a complete testing playbook: variable prioritization (what to test first and why), sample size requirements so results are trustworthy rather than noise, an iteration cadence, and documentation standards so each test compounds into the next instead of starting over.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Design a creative testing framework for our paid social program — variable prioritization, sample size requirements, and an iteration cadence"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A couple of ad variants launched, whichever has a lower CPA after a few days declared the winner, and no accumulated learning about what variable actually drove the difference</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A complete testing playbook: variable prioritization, sample size requirements for statistically trustworthy results, a defined iteration cadence, and documentation standards for continuous, compounding creative optimization</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 15 minutes. This is the layer that turns Skills 1 through 3 into a system rather than a series of one-off campaigns.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Closing the Loop
      </h2>
      <p>
        These four Skills feed a continuous cycle rather than four one-time projects:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Ad Copy Generator</span> — write new variations grounded in what already proved to work</li>
        <li><span className="text-foreground font-medium">Google Ads Manager</span> — put that copy into a campaign structure that isn't leaking budget on irrelevant traffic</li>
        <li><span className="text-foreground font-medium">Facebook & Meta Ads Manager</span> — do the same for the platform where "boost post" too often stands in for a real strategy</li>
        <li><span className="text-foreground font-medium">Creative Testing Framework</span> — test what gets launched with actual statistical rigor, so this cycle's winners become next cycle's proven patterns</li>
      </ul>
      <p>
        Run this way, the loop closes on itself: today's winning ad copy, identified by the testing framework, becomes tomorrow's input for the Ad Copy Generator — each cycle compounding on the last instead of starting from a guess every time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/ad-copy-generator">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Ad Copy Variation Generator</p>
            <p className="text-sm text-muted-foreground">Pattern analysis from winning ads plus dozens of new variations ready to test</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/google-ads-manager">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Google Ads Campaign Manager</p>
            <p className="text-sm text-muted-foreground">Properly structured ad groups, keyword research, negative keywords, and bid strategy</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/facebook-ads">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Facebook & Meta Ads Manager</p>
            <p className="text-sm text-muted-foreground">Segmented audiences, creative testing, conversion tracking, and automated pause rules</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/creative-testing-framework">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Creative Testing Framework</p>
            <p className="text-sm text-muted-foreground">Variable prioritization, sample sizes, and iteration cadence for statistically rigorous testing</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
