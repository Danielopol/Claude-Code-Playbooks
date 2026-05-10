import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Best Claude SEO Analysis Tools in 2026 | Claude Code Playbooks Blog',
  description: 'The best Claude SEO analysis tools in 2026 — keyword research, content auditing, authority building, technical SEO, local SEO, and content gap analysis. Each playbook compared by use case so you pick the right one.',
  alternates: { canonical: '/blog/best-claude-seo-analysis-tools-2026' },
  openGraph: {
    title: 'Best Claude SEO Analysis Tools in 2026',
    description: 'The best Claude SEO analysis tools in 2026 — keyword research, content audits, authority building, technical SEO, and local SEO. Compared by use case.',
    url: 'https://www.claudecodehq.com/blog/best-claude-seo-analysis-tools-2026',
    type: 'article',
    publishedTime: '2026-05-09',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Claude SEO Analysis Tools in 2026',
    description: 'Claude SEO playbooks compared by use case — keyword research, content audits, authority building, technical SEO, local SEO, and content gaps.',
    images: ['https://www.claudecodehq.com/og-image.jpg'],
  },
};

function PlaybookLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[#22d3ee] hover:underline font-medium">
      {children}
    </Link>
  );
}

function ToolCard({
  rank,
  title,
  bestFor,
  difficulty,
  timeToSetup,
  href,
  tags,
}: {
  rank: number;
  title: string;
  bestFor: string;
  difficulty: string;
  timeToSetup: string;
  href: string;
  tags: string[];
}) {
  return (
    <Link
      href={href}
      className="block p-5 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
    >
      <div className="flex items-start gap-3 mb-3">
        <span className="text-[#22d3ee] font-mono text-sm font-bold shrink-0 mt-0.5">
          #{rank}
        </span>
        <p className="font-semibold text-foreground leading-tight">{title}</p>
      </div>
      <p className="text-sm mb-3 ml-7">{bestFor}</p>
      <div className="ml-7 flex flex-wrap gap-2">
        <span className="text-xs bg-[#0d1117] border border-[#30363d] rounded px-2 py-0.5 text-muted-foreground">
          {difficulty}
        </span>
        <span className="text-xs bg-[#0d1117] border border-[#30363d] rounded px-2 py-0.5 text-muted-foreground">
          {timeToSetup} setup
        </span>
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs bg-[#0d1117] border border-[#30363d] rounded px-2 py-0.5 text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default function BestClaudeSEOToolsPage() {
  return (
    <BlogPostLayout
      title="Best Claude SEO Analysis Tools in 2026"
      description="The best Claude SEO analysis tools in 2026 — keyword research, content auditing, authority building, technical SEO, local SEO, and content gap analysis. Each playbook compared by use case so you pick the right one."
      category="guide"
      difficulty="intermediate"
      readingTime="14 min read"
      createdAt="2026-05-09"
      tags={[
        'Claude SEO tools',
        'best SEO analysis tools 2026',
        'AI SEO tools',
        'Claude Code SEO',
        'SEO automation',
        'keyword research AI',
        'content audit AI',
        'Claude Code',
      ]}
      author="Claude Code Playbooks"
      slug="best-claude-seo-analysis-tools-2026"
    >
      <p className="text-lg">
        Traditional SEO tools — Ahrefs, SEMrush, Screaming Frog — are excellent at collecting
        data. The gap has always been analysis: what to do with the data once you have it.
        Claude changes that equation. These playbooks don&apos;t compete with data-collection
        tools; they sit on top of them, turning raw exports into structured strategy, audit
        reports into prioritized action plans, and keyword lists into editorial calendars.
      </p>
      <p>
        This guide covers the best Claude SEO playbooks in 2026, organized by the specific
        SEO task each one handles best. Each is a CLAUDE.md skill you download, drop in a
        project folder, and use immediately — no coding, no subscription, no separate tool.
        The comparison at the end maps each playbook to its ideal user so you can pick the
        right one without reading through all eight.
      </p>

      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 my-6">
        <p className="text-sm font-semibold text-foreground mb-1">How Claude SEO playbooks work</p>
        <p className="text-sm text-muted-foreground">
          Each playbook is a CLAUDE.md file — a pre-built instruction set that tells Claude
          exactly how to behave for a specific SEO task. Create a folder for the task, download
          the playbook into it, open Claude Code in that folder, and start working. Claude reads
          the CLAUDE.md automatically and operates in the right mode from your first message.
          No configuration required.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        1. SEO Optimization Assistant — Best All-in-One SEO Workflow
      </h2>
      <p>
        If you only use one SEO playbook, this is it. The{' '}
        <PlaybookLink href="/playbooks/seo-optimizer">SEO Optimization Assistant</PlaybookLink>{' '}
        covers the full on-page SEO lifecycle in a single workflow: keyword research with
        difficulty and volume analysis, on-page optimization (title tags, meta descriptions,
        heading structure, internal links), technical audit of page speed and Core Web Vitals,
        content gap recommendations against top-ranking competitors, and rank tracking setup
        with weekly monitoring.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Optimize our product pages to rank for &apos;best project management software for
          remote teams&apos;. We&apos;re currently on page 3 for this term. Run the full
          optimization workflow.&quot;
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          → Keyword analysis (volume, difficulty, intent), on-page checklist with specific
          fixes, technical audit flags, competitor content gaps, and a rank tracking plan.
        </p>
      </div>
      <p>
        The strength of this playbook is its consistency. Each page gets the same systematic
        treatment — nothing falls through the cracks because you moved from technical to
        on-page mid-session. Ideal for SEO practitioners, small business owners running their
        own SEO, and content writers who need to bake optimization into their workflow rather
        than retrofit it after publishing.
      </p>
      <p className="text-sm text-muted-foreground mt-3">
        ⚡ Best for: ongoing on-page SEO, page-by-page optimization, building a repeatable SEO process · Difficulty: Intermediate
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        2. SEO Content Planner — Best for Editorial Calendar Strategy
      </h2>
      <p>
        Most content calendars are built on instinct. Someone has a hunch about what to write,
        the team produces it, and three months later you discover two of your articles are
        cannibalizing each other&apos;s rankings for the same keyword cluster. Data-driven
        content planning prevents this — but building it manually (keyword research → intent
        classification → clustering → gap analysis → brief creation) takes days.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/seo-content-planner">SEO Content Planner</PlaybookLink>{' '}
        compresses that into one session. Seed keywords expand into 200+ related terms, which
        cluster into topic groups by semantic similarity, classified by search intent
        (informational, commercial, transactional). Competitor content gaps are surfaced, and
        the output is a ready-to-assign editorial calendar with content briefs including target
        keywords, word count, outline, and internal linking recommendations.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Plan our Q3 content calendar targeting the &apos;small business accounting
          software&apos; keyword space. We have 22 existing posts — identify which clusters
          we&apos;ve already covered and where the biggest gaps are.&quot;
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          → 200+ keywords clustered into topic groups, gap analysis against existing content,
          12-week calendar with briefs including keyword targets and outline for each post.
        </p>
      </div>
      <p className="text-sm text-muted-foreground mt-3">
        ⚡ Best for: quarterly content strategy, keyword clustering, eliminating cannibalization, content briefs · Difficulty: Beginner
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        3. SEO Content Auditor — Best for Large-Site Content Analysis
      </h2>
      <p>
        A site with 200+ posts is almost always carrying dead weight: thin content that never
        ranked, pages cannibalizing each other, posts with outdated information eroding
        topical authority, broken internal links sending PageRank nowhere. You know these
        problems exist. You don&apos;t know which specific pages and how many — because a
        manual audit of 200 posts takes weeks.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/seo-content-auditor">SEO Content Auditor</PlaybookLink>{' '}
        runs the full audit systematically. Content quality scores across every page (word
        count, readability, freshness, media usage), keyword cannibalization detection across
        overlapping pages, technical issue flags (broken links, missing meta tags, slow-loading
        pages), and a prioritized action plan ranked by traffic impact potential. The output
        is an exportable audit report your team can act on directly.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Audit our 300-page blog. Find: thin content pages, keyword cannibalization
          pairs, pages missing meta tags, and the 20 posts with the highest update-potential
          given their current rankings. Prioritize by estimated traffic impact.&quot;
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          → Content quality scores for every page, cannibalization map, technical issue list,
          and prioritized action plan with traffic impact estimates.
        </p>
      </div>
      <p className="text-sm text-muted-foreground mt-3">
        ⚡ Best for: large content sites, quarterly SEO audits, pre-redesign cleanup, identifying update-vs-consolidate decisions · Difficulty: Intermediate
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        4. SEO Authority Builder — Best for Link Building Strategy
      </h2>
      <p>
        Domain authority is the SEO metric that takes the longest to move and has the highest
        leverage over rankings. Most sites get stuck — DA 25, competitors at DA 60+, and no
        clear system for closing the gap. Link building is the answer, but the workflow is
        painful: analyze competitor backlinks, find link gaps, identify prospect types, write
        personalized outreach, track progress. Agencies charge thousands a month to manage this.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/seo-authority-builder">SEO Authority Builder</PlaybookLink>{' '}
        reverse-engineers competitor backlink strategies and turns them into a repeatable
        system: competitor link profile analysis identifying their top referring domains, a
        link gap analysis showing what they have that you don&apos;t, outreach email templates
        personalized by prospect type (blogger, journalist, resource page curator), a monthly
        link-building calendar with targets, and a progress dashboard with DA trajectory
        projections.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Build a link acquisition strategy to take our DA from 28 to 45 over 12 months.
          Our top 3 competitors are [domains]. Reverse-engineer their best backlinks and find
          the gaps we should target first.&quot;
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          → Competitor backlink breakdown, link gap list ranked by domain authority, outreach
          templates by prospect type, monthly calendar with targets and DA trajectory.
        </p>
      </div>
      <p className="text-sm text-muted-foreground mt-3">
        ⚡ Best for: building domain authority, link gap analysis, outreach templates, replacing agency spend · Difficulty: Intermediate
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        5. Content Gap Finder — Best for Discovering Untapped Topics
      </h2>
      <p>
        The most valuable content ideas aren&apos;t in keyword tools — they&apos;re in
        community conversations. Reddit threads where your audience vents about their problems.
        X replies where practitioners debate edge cases your existing content never addresses.
        Forum posts asking the question that thousands of people have but nobody in your niche
        has answered well. These are content gap opportunities with built-in demand — you just
        need to surface them systematically.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/content-gap-finder">Content Gap Finder</PlaybookLink>{' '}
        monitors Reddit and X for recurring pain points in your niche, ranks them by frequency
        and emotional intensity, and cross-references the results against your existing content
        to find the gaps. Output: 25+ prioritized pain points with your next 5 post ideas
        including hooks and angles — based on what your audience is actually asking, not what
        a keyword tool says has volume.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Find content gaps in the B2B SaaS marketing niche. Monitor r/SaaS,
          r/marketing, and relevant X conversations. Rank pain points by intensity and
          check which ones our existing blog doesn&apos;t address.&quot;
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          → 25+ ranked pain points with frequency and intensity scores, gap analysis against
          your content, 5 ready-to-write post ideas with hooks.
        </p>
      </div>
      <p className="text-sm text-muted-foreground mt-3">
        ⚡ Best for: running out of ideas, community-driven content strategy, finding underserved niches · Difficulty: Intermediate
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        6. Technical SEO Audit — Best for Site Health and Crawlability
      </h2>
      <p>
        On-page and content SEO is visible. Technical SEO is invisible — and that invisibility
        makes it easy to ignore until it causes rankings to drop. Core Web Vitals scores that
        hurt page experience rankings. Crawlability issues preventing new content from being
        indexed. Structured data markup that&apos;s malformed enough to lose rich snippet
        eligibility. Duplicate content from parameter URLs that splits link equity.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/tech-seo-audit">Technical SEO Audit</PlaybookLink>{' '}
        playbook runs a structured check across Core Web Vitals, crawlability, indexation,
        page speed, and structured data — organized as a prioritized action list rather
        than a raw data dump. Each issue is categorized by severity and estimated ranking
        impact, so your developer knows what to fix first.
      </p>
      <p className="text-sm text-muted-foreground mt-3">
        ⚡ Best for: site migrations, post-redesign audits, diagnosing unexplained ranking drops, pre-launch technical checks · Difficulty: Intermediate
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        7. Local SEO Audit — Best for Location-Based Businesses
      </h2>
      <p>
        Local SEO has different levers than organic SEO — Google Business Profile optimization,
        NAP (name, address, phone) consistency across citations, local pack ranking factors,
        review velocity, and proximity signals. A site that ranks well nationally can still
        perform poorly in local pack results because the local-specific factors haven&apos;t
        been addressed.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/local-seo-audit">Local SEO Audit</PlaybookLink>{' '}
        playbook covers the full local SEO health check: GBP optimization review, NAP
        consistency across your citation profile, local pack ranking factors, review strategy,
        and localized content recommendations. Particularly valuable for multi-location
        businesses where consistent local signals across all locations are operationally
        difficult to maintain.
      </p>
      <p className="text-sm text-muted-foreground mt-3">
        ⚡ Best for: local businesses, multi-location brands, GBP optimization, local pack rankings · Difficulty: Intermediate
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        8. Keyword Research — Best for Standalone Keyword Clustering
      </h2>
      <p>
        When you need focused keyword research without a full content planning workflow —
        mapping search intent for a specific topic area, finding long-tail opportunities in
        a niche, or building the keyword foundation before briefing writers — the{' '}
        <PlaybookLink href="/playbooks/keyword-research">Keyword Research</PlaybookLink>{' '}
        playbook is the right scope. Input a seed keyword set; output a clustered, intent-mapped
        keyword list with difficulty assessment and content recommendations per cluster.
      </p>
      <p>
        The difference from the SEO Content Planner: this playbook is narrower and faster —
        it handles the keyword layer without building the full editorial calendar. Use it
        when you already have a content strategy and need the keyword data to inform specific
        briefs.
      </p>
      <p className="text-sm text-muted-foreground mt-3">
        ⚡ Best for: keyword research for a specific topic cluster, content brief inputs, freelancers serving SEO clients · Difficulty: Intermediate
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Quick Comparison: Which Playbook for Which Job
      </h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-[#30363d]">
              <th className="text-left py-2 pr-4 text-muted-foreground font-medium">Your situation</th>
              <th className="text-left py-2 text-muted-foreground font-medium">Best playbook</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#30363d]">
            <tr>
              <td className="py-2 pr-4">I want to optimize a specific page or set of pages</td>
              <td className="py-2 text-[#22d3ee]">SEO Optimization Assistant</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">I need a data-driven content calendar for next quarter</td>
              <td className="py-2 text-[#22d3ee]">SEO Content Planner</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">My site has 100+ posts and I don&apos;t know what&apos;s working</td>
              <td className="py-2 text-[#22d3ee]">SEO Content Auditor</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">I need to build domain authority against stronger competitors</td>
              <td className="py-2 text-[#22d3ee]">SEO Authority Builder</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">I&apos;ve run out of content ideas my audience actually cares about</td>
              <td className="py-2 text-[#22d3ee]">Content Gap Finder</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">My rankings dropped and I suspect technical issues</td>
              <td className="py-2 text-[#22d3ee]">Technical SEO Audit</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">I run a local business or have multiple locations</td>
              <td className="py-2 text-[#22d3ee]">Local SEO Audit</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">I need keywords for one topic area, not a full calendar</td>
              <td className="py-2 text-[#22d3ee]">Keyword Research</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-6 border-b border-[#30363d] pb-2">
        All Eight Playbooks
      </h2>
      <div className="space-y-3">
        <ToolCard
          rank={1}
          title="SEO Optimization Assistant"
          bestFor="Full on-page SEO workflow — keyword research, on-page fixes, technical flags, and rank tracking in one session."
          difficulty="Intermediate"
          timeToSetup="10 min"
          href="/playbooks/seo-optimizer"
          tags={['on-page SEO', 'keyword research', 'rank tracking']}
        />
        <ToolCard
          rank={2}
          title="SEO Content Planner"
          bestFor="Data-driven editorial calendars — keyword clustering, intent mapping, gap analysis, and content briefs."
          difficulty="Beginner"
          timeToSetup="10 min"
          href="/playbooks/seo-content-planner"
          tags={['content strategy', 'keyword clustering', 'editorial calendar']}
        />
        <ToolCard
          rank={3}
          title="SEO Content Auditor"
          bestFor="Large-site audits — content quality scoring, cannibalization detection, and prioritized action plans."
          difficulty="Intermediate"
          timeToSetup="10 min"
          href="/playbooks/seo-content-auditor"
          tags={['content audit', 'cannibalization', 'large sites']}
        />
        <ToolCard
          rank={4}
          title="SEO Authority Builder"
          bestFor="Link building strategy — competitor backlink analysis, link gaps, outreach templates, and DA tracking."
          difficulty="Intermediate"
          timeToSetup="10 min"
          href="/playbooks/seo-authority-builder"
          tags={['link building', 'domain authority', 'outreach']}
        />
        <ToolCard
          rank={5}
          title="Content Gap Finder"
          bestFor="Community-driven topic discovery — Reddit and X pain points ranked by intensity, mapped against your content."
          difficulty="Intermediate"
          timeToSetup="10 min"
          href="/playbooks/content-gap-finder"
          tags={['content gaps', 'Reddit', 'topic discovery']}
        />
        <ToolCard
          rank={6}
          title="Technical SEO Audit"
          bestFor="Site health — Core Web Vitals, crawlability, indexation, structured data, and page speed issues."
          difficulty="Intermediate"
          timeToSetup="15 min"
          href="/playbooks/tech-seo-audit"
          tags={['technical SEO', 'Core Web Vitals', 'crawlability']}
        />
        <ToolCard
          rank={7}
          title="Local SEO Audit"
          bestFor="Local pack rankings — GBP optimization, NAP consistency, local citations, and review strategy."
          difficulty="Intermediate"
          timeToSetup="15 min"
          href="/playbooks/local-seo-audit"
          tags={['local SEO', 'Google Business Profile', 'citations']}
        />
        <ToolCard
          rank={8}
          title="Keyword Research"
          bestFor="Focused keyword clustering for a specific topic — intent mapping, long-tail discovery, and content recommendations."
          difficulty="Intermediate"
          timeToSetup="15 min"
          href="/playbooks/keyword-research"
          tags={['keyword research', 'search intent', 'clustering']}
        />
      </div>

      <p className="mt-8">
        The ROI on any of these depends on the same thing: matching the playbook to the
        actual bottleneck. If you&apos;re not getting traffic, the Content Planner and SEO
        Optimizer move the needle fastest. If you&apos;re getting traffic but not gaining
        authority, the Authority Builder. If you don&apos;t know why traffic dropped,
        start with the Technical Audit. Pick the one that matches your current pain point,
        set it up in ten minutes, and run it on real work — the comparison between what
        you were doing before and what comes out of the first session tends to make the
        value obvious.
      </p>
    </BlogPostLayout>
  );
}
