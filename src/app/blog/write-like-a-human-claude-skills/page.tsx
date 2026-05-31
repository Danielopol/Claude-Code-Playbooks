import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'How to Write Like a Human Using Claude Skills (Avoid the AI Writing Trap) | Claude Code Playbooks Blog',
  description: 'AI writing reads like AI because it writes like everyone. This guide shows how to use Claude Skills to teach AI how YOU write — researching with real sources, drafting in your voice, and auditing out the tells — so your content sounds human and passes AI detection.',
  alternates: { canonical: '/blog/write-like-a-human-claude-skills' },
  openGraph: {
    title: 'How to Write Like a Human Using Claude Skills (Avoid the AI Writing Trap)',
    description: 'Stop using AI as a generic content blaster. Use Claude Skills to teach AI how you write — research, draft, and audit so your content sounds human.',
    url: 'https://www.claudecodehq.com/blog/write-like-a-human-claude-skills',
    type: 'article',
    publishedTime: '2026-05-31',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Write Like a Human Using Claude Skills (Avoid the AI Writing Trap)',
    description: 'AI writing that sounds human starts by teaching AI how YOU write. Four Claude Skills for research, drafting, and removing the AI tells.',
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

export default function WriteLikeAHumanClaudeSkillsPage() {
  return (
    <BlogPostLayout
      title="How to Write Like a Human Using Claude Skills (Avoid the AI Writing Trap)"
      description="AI writing reads like AI because it writes like everyone. This guide shows how to use Claude Skills to teach AI how YOU write — researching with real sources, drafting in your voice, and auditing out the tells — so your content sounds human and passes AI detection."
      category="guide"
      difficulty="intermediate"
      readingTime="13 min read"
      createdAt="2026-05-31"
      tags={[
        'avoid ai writing',
        'claude skills writing human',
        'ai writing that sounds human',
        'not detected ai writing',
        'human-sounding AI',
        'AI writing patterns',
        'Claude Code',
      ]}
      author="Claude Code Playbooks"
      slug="write-like-a-human-claude-skills"
    >
      <p className="text-lg">
        You can feel it within two sentences. The em dash in every paragraph. The &quot;it&apos;s
        not just X, it&apos;s Y&quot; construction, three times on one page. The throat-clearing
        intro that begins &quot;In today&apos;s fast-paced world.&quot; The rule-of-three that
        repeats under every heading. None of it is wrong, exactly — it&apos;s just
        <em> generic</em>, and readers have learned to recognize generic as a signal that nobody
        really wrote this. That recognition is the AI writing trap, and it&apos;s costing people
        trust, rankings, and replies.
      </p>
      <p>
        Here&apos;s the reframe most advice misses:
        <strong className="text-foreground"> AI writing sounds like AI because it writes like
        everyone.</strong> Ask a model for &quot;a blog post about X&quot; with no other context
        and it returns the statistical average of everything ever written about X — which, by
        definition, sounds like no one in particular. The fix isn&apos;t a magic
        &quot;humanize&quot; button. It&apos;s giving the AI the specifics it&apos;s missing: real
        sources, your actual voice, and a final pass that strips the tells.
      </p>
      <p>
        That&apos;s what <strong className="text-foreground">Claude Skills</strong> are for. A skill
        is a pre-built instruction set that tells Claude exactly how to behave for a task — so
        instead of a generic content blaster, you get a writing partner that knows how
        <em> you</em> write. This guide covers four skills that move content from
        &quot;obviously AI&quot; to &quot;sounds like a person who knows the subject&quot;:
        ground it in <strong className="text-foreground">research</strong>, draft it in your
        <strong className="text-foreground"> voice</strong>, and <strong className="text-foreground">audit
        out</strong> the patterns that give it away.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Why AI Writing Gets Detected (and Distrusted)
      </h2>
      <p>
        Before the skills, it helps to name the actual tells — because &quot;sound more human&quot;
        is useless as an instruction. Detectors and discerning readers flag the same things:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li><strong className="text-foreground">Vocabulary tics</strong> — &quot;delve,&quot; &quot;leverage,&quot; &quot;robust,&quot; &quot;tapestry,&quot; &quot;testament to,&quot; &quot;navigate the landscape.&quot;</li>
        <li><strong className="text-foreground">Structural uniformity</strong> — every paragraph the same length, every section the same shape, the rule-of-three on repeat.</li>
        <li><strong className="text-foreground">Formatting habits</strong> — em dashes everywhere, bold abuse, &quot;it&apos;s not just X, it&apos;s Y.&quot;</li>
        <li><strong className="text-foreground">Vague attribution</strong> — &quot;studies show,&quot; &quot;experts agree,&quot; &quot;many believe&quot; with no actual source.</li>
        <li><strong className="text-foreground">Zero specificity</strong> — no real numbers, no named examples, no opinions a person would actually risk having.</li>
      </ul>
      <p>
        Notice that the last two aren&apos;t style problems — they&apos;re <em>substance</em>
        problems. The most human-sounding writing is specific: it cites a real study, names a real
        example, takes a real position. Which is exactly why research and voice come before the
        cleanup pass.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        1. Ground It in Research — Specificity Is the First Human Tell
      </h2>
      <p>
        Generic content reads as AI because it&apos;s built on nothing. &quot;Remote work has
        changed how teams operate&quot; is the kind of sentence a model produces when it has no
        facts to work with — and a reader skims right past it. Real writers anchor claims to
        specifics: a number, a study, a named company, a dated event. That specificity is the
        single biggest difference between writing that sounds informed and writing that sounds
        auto-generated.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/content-research-writer">Content Research Writer</PlaybookLink> skill
        builds the article on a foundation of verified sources. It researches the topic, pulls
        current statistics and expert perspectives, and weaves cited sources into the narrative —
        so the draft makes specific, defensible claims instead of vague gestures. Content that
        cites real evidence doesn&apos;t just sound more human; it&apos;s more trustworthy and
        ranks better, because it&apos;s actually saying something.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Research and write an article about the future of remote work. Use current
          statistics and real expert perspectives, cite every claim with a credible source, and
          replace any vague generalization with a specific, attributed fact. I want named examples,
          not &apos;studies show.&apos;&quot;
        </p>
      </div>
      <p>
        The discipline this enforces: never let a claim go in without a source behind it. When the
        substance is specific, half the AI tells disappear on their own — because &quot;experts
        agree&quot; becomes &quot;a 2025 Stanford study of 1,200 hybrid workers found,&quot; and no
        detector mistakes that for filler.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes · Difficulty: Intermediate · Best for: content marketers, journalists, analysts, founders, researchers
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        2. Draft in Your Voice — Teach the AI How You Write
      </h2>
      <p>
        This is the step that separates &quot;teach the AI how you write&quot; from &quot;let the AI
        write for you.&quot; The default model voice is an average; your voice is a specific set of
        choices — sentence rhythm, the jokes you make, the words you&apos;d never use, how much you
        hedge, where you get blunt. A skill captures those choices so the draft starts in your
        register instead of starting generic and getting edited toward it.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/blog-post-writer">Blog Post Writer</PlaybookLink> skill
        is the long-form workhorse: feed it a topic, your angle, and your audience, and it returns
        a structured, near-final draft — title options, outline, the post itself, plus a social
        thread and email teaser. The leverage comes from how you configure it. Tell it your tone,
        give it a sample of your past writing to match, name the phrases you ban, and the draft
        arrives sounding like you rather than like a content mill.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Write a blog post about intermittent fasting. Match the voice in the two sample
          posts I&apos;m pasting below — direct, slightly skeptical, short paragraphs, no
          throat-clearing intros. Audience: busy professionals who&apos;ve tried diets before.
          Banned words: delve, leverage, robust, journey. Open with a specific scene, not a
          generalization.&quot;
        </p>
      </div>
      <p>
        For shorter, conversion-focused formats — landing pages, ad variants, nurture emails,
        social — the <PlaybookLink href="/playbooks/content-writer">Content Writer Assistant</PlaybookLink> skill
        does the same job with brand-voice consistency built in. The principle is identical across
        both: the more of <em>your</em> specifics you give the skill up front, the less it falls
        back on the generic average. Voice isn&apos;t something you add at the end — it&apos;s an
        input you supply at the start.
      </p>
      <div className="space-y-2 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#f97316] font-mono text-sm font-bold shrink-0 mt-0.5">Before</span>
          <p className="text-sm">&quot;Write a blog post about X.&quot; You get the statistical average of the internet — correct, generic, unmistakably AI.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#22c55e] font-mono text-sm font-bold shrink-0 mt-0.5">After</span>
          <p className="text-sm">A draft in your rhythm, with your banned words gone and your angle baked in — 80% of the way to publish, in your voice from the first line.</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes · Difficulty: Beginner · Best for: bloggers, content marketers, founders, developer advocates, growth marketers
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        3. Audit Out the Tells — The Final Pass Before You Publish
      </h2>
      <p>
        Even a well-researched draft in your voice will pick up AI patterns — they creep in around
        the edges, in transitions and summary sentences and the third bullet of every list. The
        last step is a deliberate audit specifically for those tells, not a vague &quot;make it
        better&quot; pass. This is the step most people skip, and it&apos;s the one that decides
        whether the piece reads as human.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/avoid-ai-writing">AI Writing Pattern Remover</PlaybookLink> skill
        audits a draft for the exact patterns detectors and readers catch — em dash overuse,
        promotional language, formulaic structures, vague attributions, &quot;it&apos;s not just X,
        it&apos;s Y&quot; constructions — flags each instance with an explanation, and rewrites to
        remove them while preserving your meaning. Crucially, it gives you a summary of what
        changed and why, so you learn the patterns instead of depending on the tool forever.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Audit this draft for AI writing patterns. Flag vocabulary tells, structural
          uniformity (paragraph lengths, rule-of-three), formatting habits (em dash frequency, bold
          abuse), and any vague attributions. Rewrite to remove them while keeping my argument and
          voice intact, and give me a short summary of what you changed and why.&quot;
        </p>
      </div>
      <p>
        Run this as the required last step before anything publishes. Over time, the
        &quot;what changed and why&quot; summaries retrain your own instincts — you start writing
        cleaner first drafts because you&apos;ve internalized the patterns, which is the real goal.
        The skill that helps you write like a human is also the skill that teaches you to.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes · Difficulty: Intermediate · Best for: content marketers, bloggers using AI drafts, technical writers, students, comms teams
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Human-Writing Workflow: Research → Voice → Audit
      </h2>
      <p>
        The four skills form a sequence, and the order matters — you can&apos;t audit your way out
        of a draft that had no substance or voice to begin with:
      </p>
      <ol className="list-decimal list-inside space-y-3 my-4">
        <li>
          <strong className="text-foreground">Content Research Writer</strong> — ground the piece in
          real, cited specifics. Substance is the first human tell.
        </li>
        <li>
          <strong className="text-foreground">Blog Post Writer</strong> — draft long-form in your
          configured voice, with your samples, tone, and banned words as inputs.
        </li>
        <li>
          <strong className="text-foreground">Content Writer Assistant</strong> — same voice
          discipline for short, conversion-focused formats: landing pages, ads, emails, social.
        </li>
        <li>
          <strong className="text-foreground">AI Writing Pattern Remover</strong> — final audit that
          strips the tells and teaches you the patterns as it goes.
        </li>
      </ol>
      <p>
        You don&apos;t need all four for every piece. A quick post might only need the draft and the
        audit; a flagship article earns the full research-first treatment. But the principle holds
        across all of them: <strong className="text-foreground">you supply the specifics — sources,
        voice, opinions — and the skill handles the labor.</strong> That&apos;s the difference
        between AI as a content blaster and AI as a writing partner that knows how you write.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Honest Caveat
      </h2>
      <p>
        &quot;Passes AI detection&quot; is a useful side effect, not the goal — and detectors are
        unreliable enough that chasing a green checkmark is a losing game. The durable goal is
        writing that&apos;s genuinely worth reading: specific, sourced, and written in a voice a
        real person would recognize as theirs. Do that, and the detection question mostly takes care
        of itself, because the reasons content gets flagged as AI are the same reasons it&apos;s
        boring. Fix the boring and you&apos;ve fixed both.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Get the Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/content-research-writer"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Content Research Writer</p>
          <p className="text-sm text-muted-foreground">Research with real citations and write articles grounded in verified, specific sources.</p>
        </Link>
        <Link
          href="/playbooks/blog-post-writer"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Blog Post Writer</p>
          <p className="text-sm text-muted-foreground">Draft full long-form posts in your configured voice — plus titles, a thread, and an email teaser.</p>
        </Link>
        <Link
          href="/playbooks/content-writer"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Content Writer Assistant</p>
          <p className="text-sm text-muted-foreground">Research topics and write blog posts, articles, and copy across formats with consistent voice.</p>
        </Link>
        <Link
          href="/playbooks/avoid-ai-writing"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">AI Writing Pattern Remover</p>
          <p className="text-sm text-muted-foreground">Audit and rewrite drafts to remove the vocabulary, structural, and formatting tells of AI writing.</p>
        </Link>
      </div>
      <p>
        The trap isn&apos;t using AI to write — it&apos;s using it generically. Give it your
        sources, your voice, and a real opinion, then strip the tells on the way out. That&apos;s
        how you write like a human with AI in the loop instead of in the driver&apos;s seat.
      </p>
    </BlogPostLayout>
  );
}
