import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Writers: Automate Research, Drafting, and Publishing | Claude Code Playbooks Blog',
  description: 'A practical guide to Claude writing skills — five playbooks that handle the parts of writing that eat your time without touching the parts that require your voice: ideation, drafting, distribution, cleanup, and fiction continuity.',
  alternates: { canonical: '/blog/claude-skills-for-writers' },
  openGraph: {
    title: 'Claude Skills for Writers: Automate Research, Drafting, and Publishing',
    description: 'Five Claude Skills that handle ideation, drafting, distribution, AI cleanup, and fiction continuity — so you can spend your time on the writing only you can do.',
    url: 'https://www.claudecodehq.com/blog/claude-skills-for-writers',
    type: 'article',
    publishedTime: '2026-05-05',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Writers: Automate Research, Drafting, and Publishing',
    description: 'Claude writing skills that handle the parts of writing that eat your time — ideation, drafting, distribution, AI cleanup, fiction continuity.',
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

export default function ClaudeSkillsForWritersPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Writers: Automate Research, Drafting, and Publishing"
      description="A practical guide to Claude writing skills — five playbooks that handle the parts of writing that eat your time without touching the parts that require your voice: ideation, drafting, distribution, cleanup, and fiction continuity."
      category="guide"
      difficulty="basic"
      readingTime="12 min read"
      createdAt="2026-05-05"
      tags={[
        'claude skills for writers',
        'claude writing skills',
        'claude content creation',
        'AI writing workflow',
        'content automation',
        'Claude Code',
        'writing productivity',
      ]}
      author="Claude Code Playbooks"
      slug="claude-skills-for-writers"
    >
      <p className="text-lg">
        The writing itself is rarely the bottleneck. It&apos;s everything around it — evaluating
        which idea to write next, building the SEO outline, drafting the distribution package
        after you publish, repurposing a newsletter into social posts, cleaning up the AI-isms
        that crept into a draft, making sure your novel&apos;s character descriptions are
        consistent across 300 pages. Writers lose hours every week to tasks that are necessary
        but not the thing they actually want to be doing.
      </p>
      <p>
        <strong className="text-foreground">Claude writing skills</strong> — pre-built instruction
        sets that tell Claude exactly how to behave for a specific writing task — are the
        clearest productivity win for writers who use AI. You set up the skill once (five to ten
        minutes, no coding), and from then on Claude handles the mechanical work so you can
        stay in the creative layer. This guide covers five skills that address the most
        common writer bottlenecks.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        1. Article Pipeline — From Idea to Published Draft
      </h2>
      <p>
        Most writers have more ideas than published articles. The gap isn&apos;t creativity —
        it&apos;s the process of moving an idea from &quot;scribble in notes app&quot; to
        &quot;worth writing&quot; to &quot;outlined&quot; to &quot;drafted.&quot; Each
        transition has friction, and that friction compounds: you never know which idea to
        prioritize, so you either churn on your strongest topic or pick arbitrarily and feel
        vaguely guilty about the rest.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/article-pipeline">Article Writing Pipeline</PlaybookLink> skill
        is a structured system for that exact process. Feed it a list of ideas — rough, half-formed,
        even contradictory — and it scores each one for audience fit and SEO potential. The winner
        gets a detailed outline with keyword strategy built in. Then a polished first draft, saved
        as a file you can open and edit immediately. The whole thing, from idea list to draft,
        in a single session.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Here are 12 ideas I&apos;ve been sitting on. Score them by how strong the angle
          is for my audience (indie SaaS founders) and SEO opportunity. Write the top one as a
          full 1,500-word draft with a keyword strategy, and give me the outlines for the
          runner-up two so I can work on them next.&quot;
        </p>
      </div>
      <p>
        The key discipline this skill instills: you stop treating every idea as equally worth
        writing and start making evidence-based calls about which ones to actually publish. The
        backlog of ideas stops being a source of guilt and becomes a prioritized queue.
      </p>
      <div className="space-y-2 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#f97316] font-mono text-sm font-bold shrink-0 mt-0.5">Before</span>
          <p className="text-sm">15 ideas in a notes app. You pick one more or less at random, spend two hours on an outline, realize the angle isn&apos;t strong enough, abandon it, and feel stuck.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#22c55e] font-mono text-sm font-bold shrink-0 mt-0.5">After</span>
          <p className="text-sm">15 ideas scored. One clear winner with a draft. Two runner-ups with outlines. Publishing cadence: one post per week for three weeks from a single session.</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes · Difficulty: Beginner · Best for: bloggers, newsletter authors, freelancers, developer advocates
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        2. Blog Post Writer — Draft, Title, Thread, and Teaser in One Prompt
      </h2>
      <p>
        Publishing a blog post is a two-part job: writing it and distributing it. Most writers
        are good at the first part and exhausted by the second. After you finish the draft,
        you still need five title options to A/B test, a social thread that repackages the key
        points as standalone value, an email teaser that drives clicks, and CTA variants to
        test at the end. By the time the post is written, all of that feels like a second
        writing session — so it either gets done badly (quickly) or not at all.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/blog-post-writer">Blog Post Writer</PlaybookLink> skill
        collapses the whole package into a single prompt. Describe your topic, your angle, and
        your audience. It produces: five title options, an SEO-structured outline, a polished
        1,800-word draft, an X thread version, an email teaser, and three CTA variants — all
        formatted and ready to use.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Write a blog post about why most SaaS onboarding flows fail at the activation step.
          Audience: product managers at B2B SaaS companies. Conversational but authoritative tone.
          Include a stat-heavy section on activation benchmarks.&quot;
        </p>
      </div>
      <p>
        The output isn&apos;t a starting point — it&apos;s a near-final draft. The skill is
        built by writers who do this work daily, which means the defaults are already calibrated:
        intro hooks that earn the reader&apos;s attention, sections that build on each other
        logically, conclusions that close with action rather than trailing off. You edit the
        10–20% that&apos;s yours; Claude writes the 80% that&apos;s structural.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes · Difficulty: Beginner · Best for: content marketing, solo bloggers, founders doing thought leadership
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        3. Content Repurposer — One Newsletter, Two Weeks of Social Posts
      </h2>
      <p>
        The economics of content distribution are brutal for writers who work alone. You spend
        four hours on a newsletter, publish it, it gets a decent open rate, and then it
        disappears. That same piece could live as six X threads and six LinkedIn posts over the
        next two weeks — but rewriting a newsletter for two platforms, in two different formats,
        takes nearly as long as writing it in the first place. So you don&apos;t. The content
        dies after one use.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/content-repurposer">Content Repurposer</PlaybookLink> skill
        handles the translation layer automatically. Feed it a piece of long-form content —
        newsletter, podcast transcript, article, video script — and it produces platform-native
        posts in the right format for X and LinkedIn. X threads that distill the key argument
        into punchy, standalone points. LinkedIn posts with the professional framing and whitespace
        that performs there. Output saved to a folder, ready to schedule.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Repurpose this week&apos;s newsletter into social content. X audience: indie
          hackers and builders. LinkedIn audience: senior product and marketing managers. I want
          6 X threads and 6 LinkedIn posts — each one standalone, not a teaser. Prioritize the
          most counterintuitive points from the piece.&quot;
        </p>
      </div>
      <p>
        The distinction that makes this skill work well is the &quot;platform-native&quot; framing.
        A LinkedIn post isn&apos;t a trimmed X thread. An X thread isn&apos;t a paragraph broken
        into tweets. The skill understands the format differences — length, tone, how the hook
        works, what kind of ending performs — and writes for each platform as its own medium.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes · Difficulty: Intermediate · Best for: newsletter authors, podcast hosts, solo creators, content teams
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        4. AI Writing Pattern Remover — Make AI-Assisted Drafts Sound Human
      </h2>
      <p>
        If you use AI to help draft content, you already know the problem. The draft is
        structurally sound, the ideas are correct, the length is right — but it reads like
        AI wrote it. Not because of any single word, but because of patterns: the em dash
        overuse, the uniform paragraph lengths, the tendency to start every section with
        &quot;In today&apos;s world...&quot;, the rule-of-three structure that repeats through
        every single point, the vocabulary tics (&quot;delve,&quot; &quot;leverage,&quot;
        &quot;robust&quot;) that appear so often in AI output they&apos;ve become tells.
      </p>
      <p>
        Readers notice this — often before they can articulate why. AI detection tools notice
        it too. The <PlaybookLink href="/playbooks/avoid-ai-writing">AI Writing Pattern Remover</PlaybookLink> skill
        audits drafts specifically for these structural and vocabulary patterns, flags every
        instance with an explanation of why it reads as AI-generated, and rewrites the content
        to preserve your ideas while stripping the tells. You get a diff summary of what changed
        and why — so you learn the patterns rather than just getting a cleaner draft each time.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Audit this article for AI writing patterns. Flag vocabulary tells, structural
          patterns (uniform paragraph lengths, rule-of-three), and formatting habits (em dash
          frequency, bold abuse). Then rewrite it to preserve the argument but sound like a
          specific human voice — direct, slightly informal, no throat-clearing.&quot;
        </p>
      </div>
      <p>
        This skill is most valuable as the last step before publishing AI-assisted drafts —
        but it&apos;s also useful as a diagnostic on your own writing. Many writers have
        unconsciously absorbed AI patterns from reading too much generated content. The audit
        helps you identify and break them regardless of where the draft came from.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes · Difficulty: Beginner · Best for: content marketers, bloggers using AI drafts, comms teams, freelancers
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        5. Book Bible — Keep Your Novel Consistent Across 300 Pages
      </h2>
      <p>
        Continuity errors are the silent draft-killers. Your protagonist&apos;s eyes change color
        between chapters. A character who was described as 5&apos;10&quot; on page 40 is
        suddenly looking up at someone in a scene where they should be looking down. A location
        established as east of the city is later approached from the east. The timeline doesn&apos;t
        add up when you try to calculate how many days have passed. Your beta reader catches all
        of it. You missed all of it, because you were focused on the scene you were writing, not
        the thirty details you established fifty chapters ago.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/book-bible">Book Bible</PlaybookLink> skill creates and
        maintains a living reference document for your fiction — tracking character descriptions,
        relationship maps, timelines, location details, and world rules. Before you write a new
        scene, you ask Claude to check for consistency with existing material. It reads your
        manuscript against the bible and flags any contradictions with exact chapter references.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;I&apos;m about to write Chapter 22. Check my manuscript for any continuity issues
          I should know about — character descriptions, timeline, and location consistency.
          Also check whether Marcus&apos;s injury from Chapter 8 should still be affecting him
          in this scene, given how much time has passed.&quot;
        </p>
      </div>
      <p>
        The skill pays for itself most clearly during revision — when you realize you need to
        change something established early in the book and need to find every downstream reference.
        A bible that&apos;s been maintained through drafting means that find-and-fix takes an
        hour instead of a week. It&apos;s the infrastructure decision that&apos;s always obvious
        in retrospect, never obvious when you&apos;re in the middle of drafting.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes · Difficulty: Intermediate · Best for: novelists, screenwriters, series authors, NaNoWriMo participants
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Writer&apos;s Workflow: How These Skills Fit Together
      </h2>
      <p>
        These five skills aren&apos;t meant to replace your writing — they&apos;re meant to
        surround it. The pattern that works for most writers looks like this:
      </p>
      <ol className="list-decimal list-inside space-y-3 my-4">
        <li>
          <strong className="text-foreground">Article Pipeline</strong> — decide what to write
          next from your idea backlog. Score, outline, draft. End of session: one published-quality
          draft and two ready-to-write outlines.
        </li>
        <li>
          <strong className="text-foreground">Blog Post Writer</strong> — when you need the full
          distribution package alongside the draft: title tests, social thread, email teaser,
          CTAs. Everything to publish and promote in one go.
        </li>
        <li>
          <strong className="text-foreground">AI Writing Pattern Remover</strong> — final pass
          before publishing any AI-assisted draft. Strips the tells, preserves your voice.
        </li>
        <li>
          <strong className="text-foreground">Content Repurposer</strong> — after publishing,
          extend the life of the piece into two weeks of social content. One piece, multiple
          audiences, no rewriting.
        </li>
        <li>
          <strong className="text-foreground">Book Bible</strong> — parallel track for fiction
          writers. Running continuously in the background, keeping the manuscript honest as
          the draft grows.
        </li>
      </ol>
      <p>
        You don&apos;t need all five at once. Start with the one that matches your current
        frustration, set it up (five to ten minutes), and use it on real work. The second skill
        setup is always faster than the first because the pattern is already familiar.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Get the Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/article-pipeline"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Article Writing Pipeline</p>
          <p className="text-sm text-muted-foreground">From idea backlog to scored angles, outlines, and a published-quality first draft.</p>
        </Link>
        <Link
          href="/playbooks/blog-post-writer"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Blog Post Writer</p>
          <p className="text-sm text-muted-foreground">Full draft plus X thread, email teaser, title tests, and CTA variants — one prompt.</p>
        </Link>
        <Link
          href="/playbooks/avoid-ai-writing"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">AI Writing Pattern Remover</p>
          <p className="text-sm text-muted-foreground">Audit and rewrite AI-assisted drafts to remove vocabulary and structural tells.</p>
        </Link>
        <Link
          href="/playbooks/content-repurposer"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Content Repurposer</p>
          <p className="text-sm text-muted-foreground">Turn one newsletter or article into two weeks of platform-native X and LinkedIn posts.</p>
        </Link>
        <Link
          href="/playbooks/book-bible"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors sm:col-span-2"
        >
          <p className="font-semibold text-foreground mb-1">Book Bible — AI Novel Writing Assistant</p>
          <p className="text-sm text-muted-foreground">Maintain character consistency, timeline accuracy, and world rules across your full manuscript.</p>
        </Link>
      </div>
      <p>
        Writing is the part only you can do. The research, the structure, the angle, the voice —
        that&apos;s yours. The pipeline around it doesn&apos;t have to be.
      </p>
    </BlogPostLayout>
  );
}
