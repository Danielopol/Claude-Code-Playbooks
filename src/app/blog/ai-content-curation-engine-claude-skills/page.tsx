import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'How to Build an AI Content Curation Engine with Claude Skills | Claude Code Playbooks Blog',
  description: 'How to go from scattered bookmarks to a structured AI content curation engine using four Claude Skills — proactive collection, pattern analysis, audience mining, and editorial synthesis.',
  alternates: { canonical: '/blog/ai-content-curation-engine-claude-skills' },
  openGraph: {
    title: 'How to Build an AI Content Curation Engine with Claude Skills',
    description: 'Four Claude Skills that turn scattered bookmarks into a structured curation pipeline — collect, analyze, mine your audience, and synthesize original thinking.',
    url: 'https://www.claudecodehq.com/blog/ai-content-curation-engine-claude-skills',
    type: 'article',
    publishedTime: '2026-05-27',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Build an AI Content Curation Engine with Claude Skills',
    description: 'From scattered bookmarks to a structured AI curation pipeline — four Claude Skills for collection, pattern analysis, audience mining, and editorial synthesis.',
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

export default function AiContentCurationEngineClaudeSkillsPage() {
  return (
    <BlogPostLayout
      title="How to Build an AI Content Curation Engine with Claude Skills"
      description="How to go from scattered bookmarks to a structured AI content curation engine using four Claude Skills — proactive collection, pattern analysis, audience mining, and editorial synthesis."
      category="guide"
      difficulty="intermediate"
      readingTime="13 min read"
      createdAt="2026-05-27"
      tags={[
        'ai content curation',
        'claude skills content curation',
        'automate content curation',
        'ai editorial workflow',
        'content swipe file',
        'content strategy AI',
        'Claude Code',
      ]}
      author="Claude Code Playbooks"
      slug="ai-content-curation-engine-claude-skills"
    >
      <p className="text-lg">
        Everyone has the same problem: a browser folder full of bookmarks they saved with good
        intentions and have never opened again. A notes app with dozens of article links.
        Screenshots of LinkedIn posts that impressed them in the moment. The saving behavior is
        consistent — it&apos;s the retrieval that never works. When it&apos;s actually time to
        create content, write a newsletter, or build a campaign, none of that saved material is
        findable, organized, or synthesized into anything useful.
      </p>
      <p>
        The instinct to save more content is the wrong response to this problem. The issue
        isn&apos;t volume — it&apos;s that reactive, unstructured saving produces a graveyard,
        not a resource. A real content curation system does three things a bookmark folder
        doesn&apos;t: it collects proactively against your specific needs, it analyzes what it
        collects to extract reusable insight, and it synthesizes across sources into something
        original that you own.
      </p>
      <p>
        <strong className="text-foreground">Claude content curation skills</strong> — pre-built
        instruction sets that give Claude a specific curation job with defined inputs and
        outputs — turn scattered saving into a structured pipeline. This guide covers four
        skills that span the full workflow: proactive collection across platforms, deep pattern
        analysis on what makes content work, audience intelligence mining, and editorial
        synthesis that produces original thinking from accumulated material.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Why reactive saving fails — and what a curation engine does instead
      </h2>
      <p>
        The bookmark-and-forget pattern is so universal it&apos;s worth diagnosing precisely.
        When you save content reactively — bookmarking what you happen to encounter —
        the collection has three structural problems:
      </p>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">It&apos;s not organized by your actual needs</p>
          <p className="text-sm text-muted-foreground">
            You saved it because it was interesting, not because it maps to a content pillar,
            a campaign angle, or a recurring audience question. When you need it, you
            can&apos;t find it because the filing system is &quot;things I thought were
            interesting on the day I saw them.&quot;
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">It captures surface, not structure</p>
          <p className="text-sm text-muted-foreground">
            You saved the viral post. You didn&apos;t extract why it went viral — the hook
            mechanic, the emotional arc, the structural pattern. So when you try to &quot;do
            something like that,&quot; you copy the surface and miss the mechanics underneath.
            The inspiration doesn&apos;t transfer.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">It never turns into original thinking</p>
          <p className="text-sm text-muted-foreground">
            Even a well-organized swipe file is someone else&apos;s ideas. The step that
            transforms curation into creation — synthesis, the process of combining multiple
            sources into an original perspective — almost never happens because it requires
            deliberate effort on material that&apos;s hard to access.
          </p>
        </div>
      </div>
      <p>
        An AI curation engine addresses all three: it collects proactively against defined
        pillars, it analyzes what it collects for reusable structural insight, and it
        synthesizes across accumulated material into original output. The four skills below
        each handle one layer of that pipeline.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        1. AI Content Collector &amp; Curator — proactive hunting, not reactive saving
      </h2>
      <p>
        The fundamental shift from a swipe file to a curation engine starts with collection
        discipline. Instead of saving whatever you happen to see, you define your content
        pillars and let the skill hunt across platforms for high-performing, recent examples
        that match them. You specify what you need; the skill finds it systematically.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/ai-content-collector-curator">
          AI-Powered Content Collector and Curator
        </PlaybookLink>{' '}
        skill produces 20 to 50 verified content examples from the last 30 days — Twitter
        threads, LinkedIn posts, YouTube videos, newsletters, Reddit threads — with direct
        links, performance data, and a structured analysis of each entry: why it works, what
        psychological mechanism the hook uses, which of your content pillars it maps to, and
        how you could adapt the framework for your niche.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompts</p>
        <div className="space-y-2">
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Find 30 high-performing LinkedIn posts about B2B SaaS growth from the last 30
            days. My pillars: product-led growth, churn reduction, sales-marketing alignment.
            For each entry: direct link, why it worked, and how I could adapt the structure
            for a CFO audience.&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Collect recent newsletter examples about personal finance that performed well
            on Substack. I want to study subject line formulas, hook styles, and how they
            build to the CTA. Give me 20 examples with structural notes.&quot;
          </p>
        </div>
      </div>
      <p>
        The &quot;last 30 days&quot; constraint is deliberate and important. You&apos;re
        studying what&apos;s working now — current tactics, current audience expectations,
        current platform behavior — not what went viral in 2022. The collection stays
        fresh and directly applicable rather than becoming a museum of past patterns.
      </p>
      <div className="space-y-2 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#f97316] font-mono text-sm font-bold shrink-0 mt-0.5">Before</span>
          <p className="text-sm text-muted-foreground">You scroll LinkedIn for 40 minutes, save 6 posts that catch your eye, and close the tab. Three weeks later you can&apos;t remember why you saved them and the folder has 200 items you&apos;ve never opened.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#22c55e] font-mono text-sm font-bold shrink-0 mt-0.5">After</span>
          <p className="text-sm text-muted-foreground">You run the skill once a week with your three content pillars. 30 verified examples arrive, organized by pillar, with analysis of why each one worked and a fill-in-the-blank adaptation for your niche. You have a working reference for the week&apos;s content in 10 minutes.</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes · Difficulty: Intermediate · Best for: content creators, social media managers, newsletter writers, ghostwriters, personal brand builders
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        2. Content Pattern Deconstruction — extract the mechanics, not just the surface
      </h2>
      <p>
        Collecting examples without understanding why they worked is like collecting recipes
        without knowing how heat works. You can follow the steps, but you can&apos;t adapt,
        improvise, or diagnose when something doesn&apos;t land. The missing layer in most
        swipe files is structural intelligence — the &quot;why&quot; behind the
        &quot;what.&quot;
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/content-pattern-deconstruction">
          Content Pattern Deconstruction Engine
        </PlaybookLink>{' '}
        skill produces a complete deconstruction report on any piece of content: hook
        psychology and the specific mechanism it uses, structural architecture showing how
        each section builds on the previous one, persuasion techniques and how they&apos;re
        deployed, the emotional trajectory from opening to close, and engagement triggers
        that drive comments, shares, and saves. The final output is a reusable fill-in-the-blank
        framework extracted from the specific post — something you can apply to entirely
        different topics in your niche.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompts</p>
        <div className="space-y-2">
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Deconstruct this LinkedIn post that got 50K impressions: [paste content].
            I want the hook psychology, structural architecture, persuasion mechanics, and
            emotional trajectory. Then give me a fill-in-the-blank framework I can adapt
            for B2B SaaS content.&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Analyse these 3 Twitter threads side by side: [paste all three]. What
            structural patterns do they share? Give me the common framework and explain
            why it generates high engagement.&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;This newsletter email got 60% open rate: [paste email]. Deconstruct from
            subject line through CTA. What made each component work?&quot;
          </p>
        </div>
      </div>
      <p>
        The value compound here is significant. Run this skill on the 30 examples your
        collector found, and you stop having a collection and start having a library of
        reusable frameworks. Each deconstruction adds a tool to your craft repertoire —
        a hook type you understand well enough to deploy, a structural pattern you can
        adapt on demand, a persuasion technique you can recognize and apply consciously
        rather than hoping to stumble on it.
      </p>
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-4">
        <p className="text-sm font-semibold text-foreground mb-3">What a full deconstruction covers</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-sm text-muted-foreground">
          <ul className="space-y-1.5">
            <li><span className="text-foreground">A.</span> Overview — content type, platform, performance tier</li>
            <li><span className="text-foreground">B.</span> Hook — type, psychological mechanism, rating</li>
            <li><span className="text-foreground">C.</span> Structure — architecture map, pacing, format innovations</li>
            <li><span className="text-foreground">D.</span> Persuasion — primary techniques, evidence, credibility signals</li>
          </ul>
          <ul className="space-y-1.5">
            <li><span className="text-foreground">E.</span> Emotional mapping — trajectory start to finish, peak moment</li>
            <li><span className="text-foreground">F.</span> Engagement triggers — comment, share, save drivers</li>
            <li><span className="text-foreground">G.</span> Transferable framework — fill-in-the-blank template for your niche</li>
          </ul>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes · Difficulty: Intermediate · Best for: copywriters, content creators, marketing strategists, ghostwriters, social media managers
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        3. Audience Swipe File Builder — mine your own audience for content gold
      </h2>
      <p>
        The best content ideas for your audience aren&apos;t in someone else&apos;s viral
        posts — they&apos;re in your own comment sections and reply threads. People literally
        tell you what they want to hear. They ask questions you could turn into posts.
        They articulate objections that reveal the real friction in your message. They
        compliment specific things that reveal what they actually value. All of this signal
        disappears because nobody captures it systematically.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/audience-swipe-file">
          Audience Swipe File Builder
        </PlaybookLink>{' '}
        skill scans your recent replies, mentions, and comments on X and LinkedIn — four
        weeks of conversations you were already having — and extracts every recurring
        question, objection, compliment, and request. It groups them by theme, writes a
        one-liner for each describing the core tension behind it, and maintains a ranked
        top-10 list of themes by frequency. Set it to run on a weekly schedule and the
        swipe file grows automatically, adding new findings each week without overwriting
        previous entries.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompts</p>
        <div className="space-y-2">
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Scan my last 4 weeks of X replies and LinkedIn comments. Extract every
            recurring question, objection, and request. Group by theme, rank by frequency,
            and write a one-liner for each describing the underlying tension.&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Update my audience swipe file with this week&apos;s replies. Don&apos;t
            overwrite previous entries — append under today&apos;s date and update the
            top-10 theme ranking.&quot;
          </p>
        </div>
      </div>
      <p>
        The ranked themes list is the highest-value output from this skill. Each theme in
        the top 10 is a validated content idea — not something you think your audience
        wants, but something they&apos;ve proven they care about by asking about it
        repeatedly in their own words. The one-liner descriptions are often usable
        directly as hooks: they capture the core tension in the audience&apos;s language,
        not yours.
      </p>
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-4">
        <p className="text-sm font-semibold text-foreground mb-2">Example swipe file output</p>
        <pre className="text-sm font-mono text-[#e6edf3] whitespace-pre-wrap leading-relaxed text-xs">{`## Top 10 Recurring Themes

1. "How do I start?" anxiety (×23)
2. Pricing confidence (×18)
3. Tool overwhelm (×14)
4. Consistency struggles (×12)
5. Audience growth plateau (×11)

---

## 2026-05-20

### Questions
- "How do you decide what to post vs what to save?"
  → Theme: Content allocation tension

### Objections
- "This only works if you already have an audience"
  → Theme: Chicken-and-egg frustration

### Requests
- "Can you break down how you structure your week?"
  → Theme: Behind-the-scenes demand`}</pre>
      </div>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes · Difficulty: Intermediate · Best for: creators with engaged audiences, personal brand builders, newsletter writers, community managers, solopreneurs
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        4. AI Editorial Library — synthesize accumulated material into original thinking
      </h2>
      <p>
        Collection, analysis, and audience intelligence are inputs. The output — the thing
        that makes a curation system worth building — is original thinking that only you
        could have produced, because it synthesizes material through your specific lens and
        accumulated knowledge. Most curation systems never get there. They produce better
        inputs, but the synthesis step still requires manual effort that rarely happens.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/ai-editorial-library">
          AI Knowledge Library with Historical Personas
        </PlaybookLink>{' '}
        skill turns your notes, bookmarks, and saved content into a structured knowledge
        base, then generates original editorials from it. You build atomic notes — one
        insight per file, properly tagged — from the sources you&apos;ve consumed. Then
        you assign personas (historical figures or custom characters with defined
        expertise and voice) to write editorials that synthesize clusters of related
        notes. The output isn&apos;t a summary — it&apos;s a 1,500-word argument, in a
        distinct voice, with citations back to your source notes, that could only exist
        because of the specific material you curated.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompts</p>
        <div className="space-y-2">
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Create atomic notes from this article: [paste or link]. Extract 3-5 key
            ideas, each as a separate note with appropriate tags.&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Look at my notes tagged with &apos;content-strategy&apos; and
            &apos;audience-psychology&apos;. Have the Ada Lovelace persona write an
            editorial synthesizing these ideas — cite specific notes as sources.&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Show me note clusters — which groups of notes share the most tags but
            haven&apos;t been combined into an editorial yet?&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Have a second persona respond to the last editorial, challenging its
            main argument from a different intellectual tradition.&quot;
          </p>
        </div>
      </div>
      <p>
        The persona dialogue feature is where this skill becomes genuinely interesting.
        When two different personas — each with defined expertise, voice, and intellectual
        blind spots — write an editorial and then a response to each other, the result
        is a richer argument than either could produce alone. You end up with a debate
        between perspectives extracted from your own curated material. That&apos;s
        editorial content that no one else has, because no one else curated those exact
        sources through those exact lenses.
      </p>
      <div className="space-y-2 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#f97316] font-mono text-sm font-bold shrink-0 mt-0.5">Before</span>
          <p className="text-sm text-muted-foreground">You have 200 saved articles and a vague sense that you&apos;ve developed views on content strategy over the years. When asked to write something original, you start from scratch anyway because the accumulated material is inaccessible.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#22c55e] font-mono text-sm font-bold shrink-0 mt-0.5">After</span>
          <p className="text-sm text-muted-foreground">100 atomic notes, properly tagged. You ask the skill to find clusters you haven&apos;t synthesized yet. A 1,500-word editorial emerges from your notes on distribution and attention economics — something you could only have written because you&apos;ve been curating that specific intersection for six months.</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 20 minutes · Difficulty: Advanced · Best for: lifelong learners, writers building thematic bodies of work, researchers, curious generalists, Obsidian and Zettelkasten users
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The curation engine: how the four skills chain together
      </h2>
      <p>
        Each skill solves a distinct problem in the curation pipeline. In sequence, they
        form a complete system that turns scattered inputs into original publishable output:
      </p>
      <div className="space-y-3 my-6">
        {[
          {
            step: '1',
            label: 'Content Collector & Curator',
            action: 'Hunt proactively across platforms for 20–50 high-performing recent examples mapped to your content pillars. Replace reactive bookmarking with structured collection.',
            cadence: 'Weekly',
          },
          {
            step: '2',
            label: 'Content Pattern Deconstruction',
            action: 'Deconstruct the best examples from your collection — extract hook mechanics, structural architecture, and transferable frameworks. Build craft, not just a reference library.',
            cadence: 'Per batch of collected content',
          },
          {
            step: '3',
            label: 'Audience Swipe File Builder',
            action: 'Mine your own replies and comments for recurring questions, objections, and requests. Surface the exact topics and tensions your audience has already told you they care about.',
            cadence: 'Weekly (automated)',
          },
          {
            step: '4',
            label: 'AI Editorial Library',
            action: 'Convert accumulated notes and insights into atomic knowledge, then synthesize across sources into original editorials. This is where curation becomes creation.',
            cadence: 'As your note base grows',
          },
        ].map(({ step, label, action, cadence }) => (
          <div key={step} className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/30 flex items-center justify-center text-[#22d3ee] text-xs font-semibold">
              {step}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                <p className="text-sm font-semibold text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground">{cadence}</p>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">{action}</p>
            </div>
          </div>
        ))}
      </div>
      <p>
        You don&apos;t need to run all four simultaneously. The Content Collector and
        Audience Swipe File Builder are the natural starting point — they produce the
        raw material. Add Pattern Deconstruction when you want to extract craft from what
        you&apos;re collecting. Add the Editorial Library when your note base is large
        enough to synthesize across (typically after 4 to 8 weeks of consistent collection).
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Practical tips for building a curation engine that actually runs
      </h2>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Define your pillars before your first collection run</p>
          <p className="text-sm text-muted-foreground">
            The Content Collector is only as targeted as your pillars are specific.
            &quot;Marketing&quot; is not a pillar. &quot;B2B SaaS retention metrics and
            how to communicate them to boards&quot; is. Spend 15 minutes writing 3 to 5
            specific pillars before the first run — the collection quality is dramatically
            better, and the frameworks extracted are immediately applicable.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Automate the weekly collection and audience scan</p>
          <p className="text-sm text-muted-foreground">
            Both the Content Collector and Audience Swipe File Builder are designed to
            run on a weekly schedule. Set them up once and let them run in the background —
            the collection grows without requiring an active decision each week. You review
            the outputs; you don&apos;t manage the process.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Deconstruct in batches, not one at a time</p>
          <p className="text-sm text-muted-foreground">
            The Pattern Deconstruction skill produces the most insight when you analyze
            3 to 5 similar pieces together and ask for the shared structural patterns,
            not just what made each individual piece work. Cross-example analysis reveals
            the underlying formula; single-example analysis reveals the execution.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">One idea per atomic note — no exceptions</p>
          <p className="text-sm text-muted-foreground">
            The Editorial Library&apos;s synthesis quality depends entirely on your note
            quality. The single constraint that matters most: one atomic idea per file.
            A long summary with five ideas in it can&apos;t be recombined with other notes
            efficiently. Five separate atomic notes can each cluster with different
            material and produce five different editorial possibilities.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The four curation skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/ai-content-collector-curator"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">AI Content Collector &amp; Curator</p>
          <p className="text-sm text-muted-foreground">Proactive collection of 20–50 verified high-performing examples mapped to your pillars — with performance data, hook analysis, and adaptation notes.</p>
        </Link>
        <Link
          href="/playbooks/content-pattern-deconstruction"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Content Pattern Deconstruction</p>
          <p className="text-sm text-muted-foreground">Full structural analysis of any piece of content — hook mechanics, emotional arc, persuasion techniques — plus a reusable fill-in-the-blank framework.</p>
        </Link>
        <Link
          href="/playbooks/audience-swipe-file"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Audience Swipe File Builder</p>
          <p className="text-sm text-muted-foreground">Automated weekly scan of your replies and comments — extracts recurring questions, objections, and requests ranked by frequency into a growing swipe file.</p>
        </Link>
        <Link
          href="/playbooks/ai-editorial-library"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">AI Editorial Library</p>
          <p className="text-sm text-muted-foreground">Zettelkasten-powered knowledge base with persona-driven editorial synthesis — turn accumulated notes into original long-form thinking.</p>
        </Link>
      </div>
      <p>
        Content curation is one of those problems that feels solved by the act of saving —
        but the saving is just the start of the job. The four skills above cover the full
        pipeline: collect with intention, extract structural insight, listen to your audience,
        and synthesize into original work. When all four are running, the blank-content-calendar
        problem goes away. You have more validated, analyzed, audience-specific material than
        you can ever publish. The bottleneck shifts from finding ideas to choosing which ones
        to prioritize.
      </p>
    </BlogPostLayout>
  );
}
