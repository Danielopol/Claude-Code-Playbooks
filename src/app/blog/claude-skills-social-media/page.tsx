import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Social Media Managers: Plan, Create, and Schedule Posts | Claude Code Playbooks Blog',
  description: "Four Claude Skills covering the full daily social media workflow — campaign strategy, content calendar planning, batch post generation, and multi-platform scheduling with the right formatting per channel.",
  alternates: { canonical: '/blog/claude-skills-social-media' },
  openGraph: {
    title: 'Claude Skills for Social Media Managers: Plan, Create, and Schedule Posts',
    description: "Four Claude Skills covering the full daily social media workflow — campaign strategy, content calendar planning, batch post generation, and multi-platform scheduling with the right formatting per channel.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-social-media',
    type: 'article',
    publishedTime: '2026-08-12T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Social Media Managers: Plan, Create, and Schedule Posts',
    description: "Four Claude Skills covering the full daily social media workflow — campaign strategy, content calendar planning, batch post generation, and multi-platform scheduling with the right formatting per channel.",
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

export default function ClaudeSkillsSocialMediaPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Social Media Managers: Plan, Create, and Schedule Posts"
      description="Four Claude Skills covering the full daily social media workflow — campaign strategy, content calendar planning, batch post generation, and multi-platform scheduling with the right formatting per channel."
      category="guide"
      difficulty="basic"
      readingTime="12 min read"
      createdAt="2026-08-12"
      tags={['claude skills social media', 'ai social media automation', 'ai content scheduling', 'social media content calendar', 'ai campaign planning', 'batch content creation ai', 'social media management ai', 'ai content pillars']}
      author="Claude Code Playbooks"
      slug="claude-skills-social-media"
    >
      <p>
        It's 4pm and nothing's gone out today — again — because the day filled up with everything except deciding what to post. Social media management has a specific shape to its stress: it's not one hard problem, it's dozens of small decisions repeated daily across multiple platforms, each with its own character limits, audience conventions, and optimal timing. Miss a day and there's no dramatic failure, just a quiet erosion of the consistency that actually drives growth.
      </p>
      <p>
        These four Claude Skills cover the complete daily-to-quarterly workflow — from campaign-level strategy down to the actual scheduled post — so the daily panic gets replaced by a system that was set up once and just runs.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Set the Strategy Before Anything Gets Built
      </h2>
      <p>
        The failure mode that happens before a single post gets written: a campaign launches in three weeks, there's no brief, everyone's building assets without aligned messaging, the timeline has gaps nobody noticed, and nobody defined what success actually looks like — so there's no way to know afterward whether it worked. Posting volume without a strategic foundation just produces more content, not more results.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/campaign-planner">Campaign Planner</PlaybookLink>{' '}
        Skill produces the brief that should exist before any content gets made: objectives, audience personas, key messaging, a channel strategy spanning owned, earned, and paid, a week-by-week content calendar with dependencies mapped, budget allocation, KPIs, and risk mitigations — turning a vague marketing goal into something executable.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Plan a launch campaign for our new premium tier — objectives, audience, channel strategy, timeline, and KPIs"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A campaign launching in 3 weeks with no brief — everyone building assets without aligned messaging, timeline gaps nobody caught, and no defined success metrics to know afterward if it worked</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A complete brief: objectives, audience personas, key messaging, channel strategy across owned/earned/paid, a week-by-week content calendar with dependencies, budget allocation, KPIs, and risk mitigations</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Run this at the start of any campaign, launch, or major push — before content production starts.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Map the Recurring Cadence to Platforms and Pillars
      </h2>
      <p>
        Below the campaign level sits the ongoing, week-in-week-out cadence — the ordinary posting rhythm that isn't tied to a specific launch. That cadence needs its own structure: which content pillars get covered, which platform each topic is best suited for, and how a single core piece gets repurposed across channels instead of each platform requiring entirely separate content from scratch.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/content-calendar">Content Calendar</PlaybookLink>{' '}
        Skill generates that structure directly: a calendar mapping topics to platforms, aligned with defined content pillars, plus a repurposing workflow built in so each core piece produces more than one platform's worth of content.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Plan our Q3 content calendar — map topics to platforms around our core content pillars, with a repurposing plan for each piece"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Ad-hoc, inconsistent content planning done fresh every month, no clear content pillars, and every platform treated as needing entirely separate content from scratch</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A structured calendar mapping topics to platforms, aligned with defined content pillars, and a repurposing workflow that maximizes output from each core piece instead of starting over per channel</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 15 minutes. Run monthly or quarterly as the planning layer underneath the campaign-level strategy above.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Batch a Month of Posts in One Session
      </h2>
      <p>
        With the strategy set and the calendar mapped, what's left is the part that causes the 4pm scramble: actually writing the posts. Doing this daily means facing a blank page under time pressure, every single day, which is exactly the condition under which content quality drops and posting becomes inconsistent.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/social-media-content-engine">Social Media Content Engine</PlaybookLink>{' '}
        Skill turns that daily scramble into a single monthly batch job: it defines content pillars, generates a full month of unique posts per platform in varied formats — text, carousel outlines, poll questions, threads — builds a scheduling calendar with optimal posting times, works out a hashtag strategy per platform, and exports the whole thing ready for a scheduling tool.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Generate 30 days of LinkedIn and Twitter posts for our SaaS product — varied formats, content pillars, and a scheduling calendar with optimal times"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">4pm and nothing's posted today because you couldn't think of what to say — again — the same blank-page panic repeating on a daily cycle across every platform you manage</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">30 unique posts per platform in varied formats, a scheduling calendar with optimal posting times, a hashtag strategy per platform, and an exportable calendar ready to load into your scheduling tool</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 5 minutes. Run once a month — the batch approach is the point, so resist doing this daily.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Distribute Each Post Correctly Per Platform
      </h2>
      <p>
        A month of drafted posts still isn't published content — each one needs platform-specific formatting, needs to respect that platform's character limits and media specs, needs the right hashtag and timing strategy for that specific audience, and ideally needs engagement monitoring set up so results actually get tracked. Manually adapting one content brief for Twitter/X, Instagram, LinkedIn, TikTok, YouTube, and Pinterest separately is its own significant chunk of work even after the writing is done.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/schedule-social">Schedule Social</PlaybookLink>{' '}
        Skill handles that final distribution step: from a single content brief, it generates tailored variations respecting each platform's character limits, media specs, and audience conventions, applies optimized posting times and a hashtag strategy per platform, sets up engagement monitoring, and schedules the actual publish — while preserving the core message consistently across every channel.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Schedule this week's batch of posts across Twitter/X, Instagram, and LinkedIn — respect each platform's format and set optimal posting times"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A month of drafted content still needing manual reformatting for six different platforms, each with its own character limits, media specs, and audience conventions to respect separately</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Platform-specific variations generated from a single brief, optimized posting times and hashtag strategy per platform, engagement monitoring set up, and the core message preserved consistently across every channel</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 15 minutes. Run this as the final step after the Content Engine has produced the month's drafts.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Full Plan-Create-Schedule Arc
      </h2>
      <p>
        These four Skills operate at four different cadences, from quarterly strategy down to weekly distribution:
      </p>
      <ol className="list-decimal list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Campaign Planner</span> — set objectives, audience, and channel strategy at the start of any campaign or launch</li>
        <li><span className="text-foreground font-medium">Content Calendar</span> — map the ongoing monthly or quarterly cadence to platforms and content pillars</li>
        <li><span className="text-foreground font-medium">Social Media Content Engine</span> — batch-generate a full month of platform-specific posts in one sitting</li>
        <li><span className="text-foreground font-medium">Schedule Social</span> — distribute each post with the correct formatting, timing, and hashtags per platform</li>
      </ol>
      <p>
        Run this way, the daily "what do I post today" question disappears entirely — it's already been answered by a monthly batch session, sitting on a calendar that was mapped against a strategy set weeks or months in advance.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/campaign-planner">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Campaign Planner</p>
            <p className="text-sm text-muted-foreground">Full campaign brief with objectives, audience, channel strategy, timeline, and KPIs</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/content-calendar">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Content Calendar</p>
            <p className="text-sm text-muted-foreground">Topics mapped to platforms and content pillars, with a built-in repurposing workflow</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/social-media-content-engine">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Social Media Content Engine</p>
            <p className="text-sm text-muted-foreground">A full month of platform-specific posts generated in a single batch session</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/schedule-social">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Schedule Social</p>
            <p className="text-sm text-muted-foreground">Platform-correct formatting, timing, and hashtags for every scheduled post</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
