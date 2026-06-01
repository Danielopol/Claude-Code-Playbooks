import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Your Editorial Library: Never Lose a Great Idea Again | Claude Code Playbooks Blog',
  description: 'How content creators use four Claude Skills to build an editorial library that actually works — collecting what performs, mining audience ideas, synthesizing notes into insight, and turning the best ideas into published drafts. No more graveyard bookmarks.',
  alternates: { canonical: '/blog/claude-skills-editorial-library' },
  openGraph: {
    title: 'Claude Skills for Your Editorial Library: Never Lose a Great Idea Again',
    description: 'Four Claude Skills that build a real editorial library — collect, mine, synthesize, and execute — so great ideas stop dying in your bookmarks.',
    url: 'https://www.claudecodehq.com/blog/claude-skills-editorial-library',
    type: 'article',
    publishedTime: '2026-06-01',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Your Editorial Library: Never Lose a Great Idea Again',
    description: 'Build an AI editorial library that collects, mines audience ideas, synthesizes your notes, and turns the best into published drafts.',
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

export default function ClaudeSkillsEditorialLibraryPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Your Editorial Library: Never Lose a Great Idea Again"
      description="How content creators use four Claude Skills to build an editorial library that actually works — collecting what performs, mining audience ideas, synthesizing notes into insight, and turning the best ideas into published drafts. No more graveyard bookmarks."
      category="guide"
      difficulty="intermediate"
      readingTime="13 min read"
      createdAt="2026-06-01"
      tags={[
        'ai editorial library',
        'claude skills content library',
        'ai content organization',
        'editorial system ai',
        'content swipe file',
        'content ideas',
        'Claude Code',
      ]}
      author="Claude Code Playbooks"
      slug="claude-skills-editorial-library"
    >
      <p className="text-lg">
        You have a Notion database, a Readwise queue, a dozen open browser tabs, a notes app
        with 200 half-formed thoughts, and a folder of screenshots nobody has looked at since
        February. Somewhere in all of that is the idea for the best piece you&apos;ve ever
        written. You just can&apos;t find it, can&apos;t connect it to anything, and by the
        time you sit down to create, you&apos;re starting from scratch anyway because the
        collection is too chaotic to navigate.
      </p>
      <p>
        The problem isn&apos;t that creators lack ideas. It&apos;s that the systems built to
        hold ideas — the bookmark folder, the swipe file, the note-taking app — are
        <em> passive</em>. They collect but don&apos;t connect. They save but don&apos;t
        synthesize. They grow without becoming more useful. A real{' '}
        <strong className="text-foreground">editorial library</strong> does the opposite:
        it actively surfaces what&apos;s worth using, tells you what your audience is asking
        for, connects your notes into argument, and converts the best material into a draft
        you can actually publish.
      </p>
      <p>
        Four <strong className="text-foreground">Claude Skills</strong> — pre-built instruction
        sets that tell Claude exactly how to behave for a specific task — build that library.
        Each one handles a different job: <strong className="text-foreground">collect</strong>{' '}
        what&apos;s working in your niche,{' '}
        <strong className="text-foreground">mine</strong> your audience for what they want,{' '}
        <strong className="text-foreground">synthesize</strong> your notes into editorial
        intelligence, and <strong className="text-foreground">execute</strong> — turn the best
        idea into a published draft. You set each one up once. Then the library runs.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Why Most Content Libraries Fail
      </h2>
      <p>
        Before the skills, it helps to name the failure mode precisely. Most swipe files and
        bookmark systems die for the same reasons:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li><strong className="text-foreground">Reactive saving.</strong> You bookmark whatever crosses your feed in the moment, with no filter for whether it&apos;s actually good or relevant to your pillars.</li>
        <li><strong className="text-foreground">No retrieval system.</strong> Things go in but never come out. The folder grows; you never open it when you need it.</li>
        <li><strong className="text-foreground">Missing the obvious source.</strong> Your audience is already telling you what they want in your comments and replies. Nobody captures it.</li>
        <li><strong className="text-foreground">Notes that never become arguments.</strong> You read and highlight and take notes, but the synthesis step — &quot;what does all of this actually mean&quot; — never happens.</li>
      </ul>
      <p>
        Each skill below addresses one of these failure modes directly. Together they turn the
        passive graveyard into an active editorial intelligence system.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        1. Collect — Build a Swipe File of What Actually Works
      </h2>
      <p>
        Saving randomly is the enemy of a useful swipe file. The goal isn&apos;t volume —
        it&apos;s signal: examples of content that performed, with enough metadata to tell you
        why, organized by the content pillars you actually write about. That kind of swipe file
        is a strategic asset. A folder of 2,000 unsorted bookmarks is just debt.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/ai-content-collector-curator">
          AI-Powered Content Collector and Curator
        </PlaybookLink>{' '}
        skill does the proactive collection work. Tell it your topic or content pillar and it
        surfaces 20–50 high-performing, recent examples with verified links, engagement metrics,
        hook analysis, and structural breakdowns — all organized by your pillars and ready to
        use. Instead of saving whatever scrolls past, you&apos;re pulling in the best examples
        from the last 30 days on demand.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Find 30 high-performing LinkedIn posts about remote work productivity from the
          last 30 days. Give each one a hook analysis and structural breakdown, note the
          engagement metrics, and organize them by my three content pillars: async culture,
          manager habits, and career growth for remote workers.&quot;
        </p>
      </div>
      <p>
        The structural breakdowns are what make this library useful rather than decorative.
        Knowing a post got 400 shares is interesting. Knowing it got 400 shares because it
        opened with a counterintuitive stat and ended with a single actionable step is
        <em> instructive</em>. You&apos;re not just collecting content — you&apos;re building
        a map of what works and why.
      </p>
      <div className="space-y-2 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#f97316] font-mono text-sm font-bold shrink-0 mt-0.5">Before</span>
          <p className="text-sm">A folder of 800 bookmarks saved reactively. You can&apos;t find anything when you need it and don&apos;t know what actually performed well.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#22c55e] font-mono text-sm font-bold shrink-0 mt-0.5">After</span>
          <p className="text-sm">30 curated examples from the last 30 days, organized by pillar, with hook analysis and structural breakdowns ready to inform your next piece.</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes · Difficulty: Intermediate · Best for: content creators, social media managers, newsletter writers, ghostwriters
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        2. Mine — Your Audience Is Already Writing Your Content Calendar
      </h2>
      <p>
        The most overlooked source of editorial intelligence is the one you already own: your
        own comment sections and reply threads. People tell you exactly what they want to know,
        word for word, in their questions and objections. They hand you recurring pain points,
        phrasing you could lift directly into a hook, and signals of what confuses them enough
        to make them ask out loud. Almost nobody captures it systematically — so it disappears
        into the feed and the questions repeat next week.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/audience-swipe-file">
          Audience Swipe File Builder
        </PlaybookLink>{' '}
        scans your replies and comments over a defined period, groups recurring questions and
        objections into themes, ranks pain points by frequency, and generates content ideas
        drawn directly from your audience&apos;s own language. You end up with a prioritized
        content brief built from what real people actually asked — not from what you guessed
        they might want.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Scan my last 4 weeks of X replies and LinkedIn comments. Group the recurring
          questions and objections into themes, rank the top pain points by how often they
          appear, and give me 15 content ideas written in my audience&apos;s own words — the
          phrases they actually use, not cleaned-up summaries.&quot;
        </p>
      </div>
      <p>
        The &quot;in their own words&quot; instruction is the one that matters most. When your
        audience asks &quot;how do you decide what to cut when you&apos;re already behind
        schedule?&quot; that question is a headline. The skill surfaces those exact phrases so
        you can use them as hooks rather than abstracting them into something blander.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes · Difficulty: Intermediate · Best for: creators with engaged audiences, newsletter writers, personal brand builders, community managers
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        3. Synthesize — Turn Notes into Editorial Intelligence
      </h2>
      <p>
        This is the step that separates a note-taking habit from a thinking system. Most
        creators read widely — books, papers, newsletters, podcasts — and take notes. Those
        notes accumulate, and the connections between them stay invisible. The insight that
        would have come from combining the thing you read last Tuesday with the thing you
        read three months ago never gets made, because nobody sits down to do the synthesis.
        It&apos;s too slow, too open-ended, and there&apos;s always something more pressing.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/ai-editorial-library">
          AI Knowledge Library with Historical Personas
        </PlaybookLink>{' '}
        skill makes the synthesis happen on demand. It works with your notes — atomic,
        Zettelkasten-style, or however you capture them — and produces a fully argued
        editorial drawing on those sources, with citations back to your own material. The
        persona layer adds an unusual dimension: ask for an editorial from the perspective of
        Alan Turing on your AI notes, then have Marie Curie write a response challenging his
        conclusions. The intellectual tension surfaces angles you wouldn&apos;t have found by
        asking &quot;what should I write about this?&quot;
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Write an editorial about attention and creative work from my notes on deep work,
          distraction research, and social media design. Draw on at least 10 of my atomic notes,
          cite them back with the note title, and take a strong position — not a
          &apos;on one hand, on the other hand&apos; summary. Then write a 300-word response
          that challenges the main argument.&quot;
        </p>
      </div>
      <p>
        The output isn&apos;t just a draft — it&apos;s a demonstration of what your notes
        actually contain when you pull them into conversation with each other. Many creators
        discover arguments in their notes they didn&apos;t know they had. The library stops
        being a place ideas go to rest and starts being a place ideas go to develop.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 20 minutes · Difficulty: Advanced · Best for: lifelong learners, Obsidian and Zettelkasten users, writers building thematic bodies of work
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        4. Execute — Turn the Best Idea into a Published Draft
      </h2>
      <p>
        All three stages above produce one thing at the end: a prioritized idea with enough
        context to act on. The swipe file tells you what structure works. The audience mine
        tells you what question to answer and how to phrase the hook. The editorial synthesis
        gives you a strong position built on your own material. Now the idea needs to become
        a piece — with an angle evaluated against your other ideas, an SEO outline, and a
        first draft ready to edit.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/article-pipeline">
          Article Writing Pipeline
        </PlaybookLink>{' '}
        closes that loop. Feed it your idea backlog — even if it&apos;s rough, half-formed,
        contradictory — and it scores each idea by audience fit and SEO potential, picks the
        strongest angle, builds a detailed outline with keyword strategy, then writes a
        polished first draft saved as a file you can open and edit immediately. The ideas
        your library surfaced don&apos;t sit in a queue waiting for you to have a free
        afternoon — they move.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Here are the 8 ideas I pulled from my editorial library this week — the audience
          questions, the synthesized note argument, and three swipe-file-inspired angles. Score
          them by audience fit and SEO potential, write the top one as a complete 1,500-word
          draft with a keyword strategy, and give me outlines for the two runner-ups so I have
          next week covered too.&quot;
        </p>
      </div>
      <p>
        The phrase &quot;next week covered too&quot; is the goal the whole library is building
        toward. When the collection, mining, and synthesis stages are running regularly, you
        never sit down to create from a blank slate again — you sit down to execute against a
        prioritized queue of ideas with context already attached.
      </p>
      <div className="space-y-2 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#f97316] font-mono text-sm font-bold shrink-0 mt-0.5">Before</span>
          <p className="text-sm">Staring at a blank content calendar on Monday. 200 bookmarks, zero usable ideas, and the creeping feeling that you had something good in those notes somewhere.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#22c55e] font-mono text-sm font-bold shrink-0 mt-0.5">After</span>
          <p className="text-sm">Monday starts with a scored list of ideas pulled from your library, the top one already drafted, and outlines for the next two ready to go.</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes · Difficulty: Beginner · Best for: bloggers, content creators, founders doing thought leadership, newsletter authors
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Editorial Library System: How All Four Fit Together
      </h2>
      <p>
        The four skills are a cycle, not a one-time setup. Run them on a cadence that matches
        your publishing rhythm and the library compounds over time:
      </p>
      <ol className="list-decimal list-inside space-y-3 my-4">
        <li>
          <strong className="text-foreground">AI-Powered Content Collector and Curator</strong>{' '}
          — weekly or bi-weekly. Pull 20–30 high-performing examples in your niche, organized
          by pillar with hook and structural analysis. This is your external signal feed.
        </li>
        <li>
          <strong className="text-foreground">Audience Swipe File Builder</strong> — monthly.
          Scan the last 30 days of replies and comments, surface recurring questions and the
          exact phrasing your audience uses. This is your demand signal.
        </li>
        <li>
          <strong className="text-foreground">AI Knowledge Library with Historical Personas</strong>{' '}
          — on demand, whenever you&apos;ve accumulated enough notes on a topic. Synthesize
          your reading into an argued editorial position. This is your insight layer.
        </li>
        <li>
          <strong className="text-foreground">Article Writing Pipeline</strong> — weekly, to
          close the loop. Take the strongest idea from the library, score it against your
          backlog, outline it, draft it. This is your execution layer.
        </li>
      </ol>
      <p>
        None of these runs longer than a focused session. The cadence isn&apos;t demanding —
        it&apos;s the absence of a cadence that makes the blank Monday morning an emergency.
        Start with the skill that addresses your most acute problem right now, use it on real
        work this week, and add the next one when the first is habit.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Compounding Advantage
      </h2>
      <p>
        A passive bookmark folder is worth less each month because it grows without becoming
        more useful. An active editorial library built on these skills is worth more each month
        because the signal quality improves — your swipe file learns your pillars, your audience
        mine deepens, your synthesized notes build a larger body of connected argument to draw
        from. The ideas don&apos;t just stop getting lost. They start building on each other.
      </p>
      <p>
        That&apos;s the shift. Not faster content production, but a system where the best ideas
        you encounter compound into the best content you&apos;ve ever made — instead of dying
        quietly in a folder named &quot;Inspo&quot; you last opened six months ago.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Get the Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/ai-content-collector-curator"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">AI Content Collector and Curator</p>
          <p className="text-sm text-muted-foreground">Pull 20–50 high-performing examples in your niche with engagement data, hook analysis, and structural breakdowns.</p>
        </Link>
        <Link
          href="/playbooks/audience-swipe-file"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Audience Swipe File Builder</p>
          <p className="text-sm text-muted-foreground">Scan your replies and comments to surface recurring questions, pain points, and content ideas in your audience&apos;s own words.</p>
        </Link>
        <Link
          href="/playbooks/ai-editorial-library"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">AI Knowledge Library with Historical Personas</p>
          <p className="text-sm text-muted-foreground">Synthesize your atomic notes into argued editorials — with AI personas that generate and challenge positions from your own material.</p>
        </Link>
        <Link
          href="/playbooks/article-pipeline"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Article Writing Pipeline</p>
          <p className="text-sm text-muted-foreground">Score your idea backlog, outline the winner with a keyword strategy, and produce a publish-ready first draft in one session.</p>
        </Link>
      </div>
      <p>
        The ideas were always there. The library just wasn&apos;t doing its job. These four
        skills give it one.
      </p>
    </BlogPostLayout>
  );
}
