import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Newsletter Writers: Build a Publishing Machine | Claude Code Playbooks Blog',
  description: "Four Claude Skills that form a self-sustaining newsletter flywheel — audience-sourced content ideas, a scored article pipeline, voice-consistent issue drafting, and automatic social repurposing.",
  alternates: { canonical: '/blog/claude-skills-newsletter' },
  openGraph: {
    title: 'Claude Skills for Newsletter Writers: Build a Publishing Machine',
    description: "Four Claude Skills that form a self-sustaining newsletter flywheel — audience-sourced content ideas, a scored article pipeline, voice-consistent issue drafting, and automatic social repurposing.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-newsletter',
    type: 'article',
    publishedTime: '2026-07-31T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Newsletter Writers: Build a Publishing Machine',
    description: "Four Claude Skills that form a self-sustaining newsletter flywheel — audience-sourced content ideas, a scored article pipeline, voice-consistent issue drafting, and automatic social repurposing.",
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

export default function ClaudeSkillsNewsletterPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Newsletter Writers: Build a Publishing Machine"
      description="Four Claude Skills that form a self-sustaining newsletter flywheel — audience-sourced content ideas, a scored article pipeline, voice-consistent issue drafting, and automatic social repurposing."
      category="guide"
      difficulty="basic"
      readingTime="12 min read"
      createdAt="2026-07-31"
      tags={['claude skills newsletter', 'ai newsletter writing', 'automate newsletter ai', 'newsletter content ideas', 'content repurposing ai', 'newsletter automation', 'ai writing pipeline', 'creator publishing tools']}
      author="Claude Code Playbooks"
      slug="claude-skills-newsletter"
    >
      <p>
        A newsletter that survives past issue #10 isn't the product of one good writing session — it's the product of a system. Where do this week's ideas come from. How do you draft an issue that sounds like you and doesn't repeat what you covered eight weeks ago. What happens to that issue after it's sent — does it just sit in an inbox, or does it keep working for you across other platforms. Most newsletters stall not because the writer ran out of talent, but because they ran out of system, and rebuilding that system from scratch every Monday morning is exhausting.
      </p>
      <p>
        These four Claude Skills form a closed loop rather than four disconnected tools — each one feeds the next, and the output of the last one (repurposed social posts) drives the audience engagement that feeds the first one again.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Mine Your Own Replies for Content Ideas
      </h2>
      <p>
        The best newsletter ideas are usually not new inventions — they're questions your audience has already asked you, objections they've already raised in a reply, patterns in what they compliment or push back on. That signal exists, but it's scattered across weeks of X replies and LinkedIn comments, and by the time you're staring at a blank content calendar on Sunday night, you've forgotten every one of them.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/audience-swipe-file">Audience Swipe File Builder</PlaybookLink>{' '}
        Skill scans your replies and comments automatically, extracts recurring questions, objections, compliments, and requests, and groups them into themes with a ranked frequency count. It runs on an ongoing basis — appending new findings weekly without overwriting what it already found — so after a month you have an actual content goldmine built entirely from conversations you were already having.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Scan my last 4 weeks of X replies and comments and build a swipe file of recurring questions and content ideas"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A blank content calendar every week, even though your best ideas are buried in your own comment sections — people are already telling you what they want, you just never captured it</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A swipe file with 47 audience questions grouped into 8 themes, top 10 recurring pain points ranked by frequency, and 15 content ideas pulled directly from your audience's own words</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Run it weekly or on a schedule — the swipe file compounds the longer it runs.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Score the Backlog and Draft the Winner
      </h2>
      <p>
        Once ideas exist — whether from the swipe file above or just a notes app full of half-formed thoughts — the next bottleneck is deciding which one actually deserves to become this week's piece. Most idea backlogs never shrink because there's no system for evaluating them: some ideas are half-baked, some overlap heavily with each other, and without a scoring method every choice feels arbitrary.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/article-pipeline">Article Writing Pipeline</PlaybookLink>{' '}
        Skill keeps idea generation, scoring, outlining, and drafting in one connected workflow. It scores your backlog by audience fit and SEO potential, builds a detailed outline with keyword strategy for the winner, and produces a polished first draft — saved as a file you can keep editing across sessions rather than losing progress between sittings.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "I have 15 ideas in my swipe file — score them for audience fit, pick the best one, and draft it"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A notes app full of blog ideas that never become articles — some half-baked, some overlapping, and no system to decide which one is actually worth the next writing session</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Ideas scored by audience fit and SEO potential, the winner given a detailed outline with keyword strategy, and a polished 1,500-word first draft saved as a file ready to edit</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 5 minutes. Feed it your idea backlog whenever it's time to decide what to write next.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Draft the Issue in Your Voice, Without Repeating Yourself
      </h2>
      <p>
        A scored, outlined draft is still not a newsletter issue — it needs to sound like you, fit your established template, and not accidentally cover ground you already wrote about two months ago. Every newsletter writer past issue #20 has felt the specific dread of a blank page combined with the nagging suspicion that this topic feels familiar, without any easy way to check.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/newsletter-system">Newsletter System</PlaybookLink>{' '}
        Skill keeps your format template, past issue archive, and voice guide as reference files, and drafts each new issue against them directly — checked automatically against your past 20 issues for topic overlap, with subject line variants and preview text generated alongside the draft, and a running log of what's already been covered.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Help me draft this week's newsletter issue — check it against my past 20 issues for topic overlap and match my usual voice"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A blank page and the dread of repeating a topic covered two months ago, a voice that drifts slightly with every issue, and a template that's never quite the same twice</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A draft matching your established voice and template, automatically checked against the past 20 issues for topic overlap, subject line variants, preview text, and an updated tracking log of topics covered</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 5 minutes. Keep your voice guide and past issues as reference files so every new draft checks against the full archive.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Let One Issue Fuel Two Weeks of Social Content
      </h2>
      <p>
        A newsletter that gets written, sent once, and then disappears is leaving most of its value on the table. Four hours of writing produces a piece that could realistically fuel two weeks of social content — but manually rewriting the same ideas for X and LinkedIn takes almost as long as writing the original issue, so most writers just don't do it consistently.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/content-repurposer">Content Repurposer</PlaybookLink>{' '}
        Skill runs on a weekly schedule and silently turns each newsletter issue into more than ten platform-native social posts: short, punchy X threads and longer, professional LinkedIn posts with clear takeaways — queued automatically in an output folder, ready to publish without any manual rewriting.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Repurpose my latest newsletter issue into social posts — X threads and LinkedIn posts, queue them for the next two weeks"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">4 hours writing a newsletter, published once, and then it disappears — rewriting it for other platforms takes almost as long as the original, so it just never happens</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">One newsletter becomes 12+ platform-native posts — 6 punchy X threads and 6 LinkedIn posts with professional takeaways — automatically queued in your output folder every week</p>
        </div>
      </div>

      <p>
        This is where the loop closes: the social posts this Skill generates are exactly the surface where new replies and comments accumulate — which is what the Audience Swipe File mines for the next cycle of content ideas.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Runs weekly on a schedule once configured — no manual trigger needed after setup.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Flywheel, Not Four Separate Tools
      </h2>
      <p>
        The reason to think of these as one system rather than four independent Skills is that each output becomes the next input, and the cycle closes on itself:
      </p>
      <ol className="list-decimal list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Audience Swipe File</span> — mines replies and comments for what your audience already wants to hear</li>
        <li><span className="text-foreground font-medium">Article Pipeline</span> — scores the resulting idea backlog and drafts the strongest candidate</li>
        <li><span className="text-foreground font-medium">Newsletter System</span> — turns the draft into a voice-consistent, non-repetitive issue</li>
        <li><span className="text-foreground font-medium">Content Repurposer</span> — spreads that issue across social platforms, generating the next round of replies and comments</li>
      </ol>
      <p>
        Run once, this is four useful tools. Run on a recurring weekly cadence, it's a publishing machine that gets easier to feed the longer it runs — because every week's distribution becomes next week's raw material.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/audience-swipe-file">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Audience Swipe File Builder</p>
            <p className="text-sm text-muted-foreground">Recurring content ideas mined automatically from your replies and comments</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/article-pipeline">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Article Writing Pipeline</p>
            <p className="text-sm text-muted-foreground">Score your idea backlog, outline the winner, and draft a polished first pass</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/newsletter-system">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Newsletter System</p>
            <p className="text-sm text-muted-foreground">Voice-consistent issue drafting with automatic topic-repeat checking against your archive</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/content-repurposer">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Content Repurposer</p>
            <p className="text-sm text-muted-foreground">Turn one newsletter issue into 12+ platform-native X and LinkedIn posts weekly</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
