import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for SEO Agencies: Scale Audits, Content, and Rank Tracking | Claude Code Playbooks Blog',
  description: "Four Claude Skills for scaling SEO work across every client without scaling headcount — deep page audits, quality-gated programmatic SEO, data-driven content gap discovery, and proactive rank drop monitoring.",
  alternates: { canonical: '/blog/claude-skills-seo-agencies' },
  openGraph: {
    title: 'Claude Skills for SEO Agencies: Scale Audits, Content, and Rank Tracking',
    description: "Four Claude Skills for scaling SEO work across every client without scaling headcount — deep page audits, quality-gated programmatic SEO, data-driven content gap discovery, and proactive rank drop monitoring.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-seo-agencies',
    type: 'article',
    publishedTime: '2026-08-17T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for SEO Agencies: Scale Audits, Content, and Rank Tracking',
    description: "Four Claude Skills for scaling SEO work across every client without scaling headcount — deep page audits, quality-gated programmatic SEO, data-driven content gap discovery, and proactive rank drop monitoring.",
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

export default function ClaudeSkillsSeoAgenciesPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for SEO Agencies: Scale Audits, Content, and Rank Tracking"
      description="Four Claude Skills for scaling SEO work across every client without scaling headcount — deep page audits, quality-gated programmatic SEO, data-driven content gap discovery, and proactive rank drop monitoring."
      category="guide"
      difficulty="intermediate"
      readingTime="13 min read"
      createdAt="2026-08-17"
      tags={['claude skills seo', 'ai seo automation', 'scale seo with ai', 'seo audit ai', 'programmatic seo ai', 'content gap analysis', 'rank tracking ai', 'seo agency tools']}
      author="Claude Code Playbooks"
      slug="claude-skills-seo-agencies"
    >
      <p>
        Every SEO agency hits the same ceiling eventually: the work is fundamentally repeatable — audit the page, find the content gap, build out the pages, watch the rankings — but repeatable doesn't mean fast when it's done manually across a growing client roster. Headcount becomes the constraint long before strategy does. The agencies that scale past that ceiling aren't doing fundamentally different SEO work; they've just removed the manual bottleneck from the repeatable parts.
      </p>
      <p>
        These four Claude Skills cover the core repeatable loop — deep audits, at-scale page production with real quality controls, content ideas grounded in actual audience data, and ranking visibility that catches problems before a client notices their traffic dropped.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Go Deeper Than a Site-Wide Audit Tool Ever Will
      </h2>
      <p>
        Site-wide audit tools are good at flagging broad patterns across thousands of URLs, but they're necessarily shallow on any single page. When a landing page needs real optimization work, or a piece of content is up for a refresh, or something needs a pre-publish quality check before it goes live, what's actually needed is a genuinely deep look at one URL — on-page signals, schema, content quality, E-E-A-T signals, and increasingly, AI search readiness.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/page-seo-analysis">Page SEO Analysis</PlaybookLink>{' '}
        Skill does exactly that single-page deep dive — more granular than any site crawl, covering every ranking dimension for one URL at a time. It's the tool for prioritizing which page to fix next, not for surfacing the full list of what's broken sitewide.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Run a full page SEO analysis on this landing page — on-page signals, schema, content quality, E-E-A-T, and AI search readiness"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A site-wide audit tool flags the page as having "issues" without enough specificity to actually prioritize the fix — every deep single-page review done manually eats an analyst's afternoon</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A complete single-URL breakdown across every ranking dimension — on-page signals, schema, content quality, E-E-A-T, AI search readiness — specific enough to act on immediately</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 15 minutes. Use it for landing page optimization, content refresh prioritization, or pre-publish quality checks — one URL at a time.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Build at Scale Without Triggering a Scaled Content Penalty
      </h2>
      <p>
        Programmatic SEO — generating pages at scale from structured data sources like databases, APIs, or CSV files — is one of the highest-leverage plays an agency can run, and also one of the easiest to get penalized for. Google's Scaled Content Abuse policy exists specifically because most programmatic SEO gets built without quality gates, producing thin, near-duplicate pages that trigger index bloat and manual actions instead of rankings.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/programmatic-seo">Programmatic SEO</PlaybookLink>{' '}
        Skill plans and audits at-scale page production with those quality gates built in from the start: template engine design, URL pattern planning, thin content safeguards, and the quality checks that keep a programmatic build from crossing the line into scaled content abuse.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Plan a programmatic SEO build from our product database — template design, URL patterns, and thin content safeguards to avoid a scaled content penalty"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A programmatic page build planned without quality gates — thin, near-duplicate pages at scale that risk index bloat and a Scaled Content Abuse penalty instead of the ranking gains they were meant to produce</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A template engine and URL pattern plan with thin content safeguards and quality gates built in, designed to scale production without crossing into penalty territory</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 15 minutes. Run this before building, not after — retrofitting quality gates onto an already-published programmatic build is a much bigger job.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Find Content Ideas From What Audiences Are Already Saying
      </h2>
      <p>
        A content calendar built on guesswork is a recurring cost for any agency managing multiple clients — someone has to keep coming up with new angles for every niche, every month, without repeating what's already been covered. Meanwhile the actual audience is often already stating exactly what they need, in Reddit threads and X replies and forum posts nobody on the account is tracking.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/content-gap-finder">Content Gap Finder</PlaybookLink>{' '}
        Skill scans Reddit, X, and niche forums for the pain points and questions a niche's audience keeps posting about, ranks them by frequency and emotional intensity, and cross-references them against a client's existing content. What's left — the pain points nobody has addressed yet — becomes the next batch of content, complete with working titles and hooks.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Find content gaps in the personal finance niche for this client — cross-reference against their existing content and give me 5 ready-to-write ideas"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Guessing what to write next for a client while the audience is literally stating what they need in Reddit threads and X replies nobody on the account is tracking</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">25 recurring pain points ranked by frequency and emotional intensity, cross-referenced against existing content, with 5 ready-to-write post ideas including hooks</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Run it weekly per client niche — the pain-point signal shifts over time as conversations move.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Catch Ranking Drops Before the Client Does
      </h2>
      <p>
        Nothing damages an agency-client relationship faster than the client noticing a traffic drop before the agency flags it. Manually checking keyword positions across every client account, every week, doesn't scale past a handful of accounts — and the alternative, checking sporadically, means real ranking declines sometimes go unnoticed until they've already cost meaningful traffic.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/rank-monitor">Rank Monitor</PlaybookLink>{' '}
        Skill sets up ongoing keyword position tracking across Google via Moz and Google Search Console, establishes a baseline, and flags drops greater than five positions automatically. It provides continuous visibility into organic performance — catching declines early enough to act, and also surfacing upward trends worth doubling down on and competitive position shifts that signal a changing market.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Set up rank monitoring for our top 50 target keywords across all client accounts — alert me on any drop greater than 5 positions"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Ranking checks done manually and sporadically across a growing list of client accounts, with real declines sometimes going unnoticed until a client asks why their traffic dropped</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Ongoing position tracking with an established baseline, automatic alerts on drops greater than 5 positions, upward trends surfaced to double down on, and competitive shifts tracked as they happen</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 15 minutes. Set it up once per client account — it runs continuously from there.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Building an Agency Workflow That Scales With Client Count
      </h2>
      <p>
        These four Skills cover distinct stages of the recurring SEO cycle, and each one is designed to run per client without requiring more headcount as the roster grows:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Page SEO Analysis</span> — deep audits for prioritization, landing page work, and pre-publish checks</li>
        <li><span className="text-foreground font-medium">Programmatic SEO</span> — scale page production with quality gates that prevent penalties</li>
        <li><span className="text-foreground font-medium">Content Gap Finder</span> — replace guesswork content planning with audience-sourced topic ideas</li>
        <li><span className="text-foreground font-medium">Rank Monitor</span> — continuous visibility that catches problems before the client's own traffic report does</li>
      </ul>
      <p>
        None of these replace the strategic judgment an SEO agency actually sells — they remove the manual labor from the repeatable parts of that strategy, which is exactly where the headcount ceiling was forming in the first place.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/page-seo-analysis">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Page SEO Analysis</p>
            <p className="text-sm text-muted-foreground">Deep single-URL audits across on-page signals, schema, content quality, and E-E-A-T</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/programmatic-seo">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Programmatic SEO</p>
            <p className="text-sm text-muted-foreground">Template planning and quality gates for at-scale page production without penalty risk</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/content-gap-finder">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Content Gap Finder</p>
            <p className="text-sm text-muted-foreground">Audience-sourced content ideas ranked by frequency and emotional intensity</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/rank-monitor">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Rank Monitor</p>
            <p className="text-sm text-muted-foreground">Continuous keyword position tracking with automatic drop alerts</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
