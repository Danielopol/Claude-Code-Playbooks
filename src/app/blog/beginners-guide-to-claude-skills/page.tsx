import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: "The Beginner's Guide to Claude Skills: What They Are and How to Get Started | Claude Code Playbooks Blog",
  description: "A friendly introduction to Claude Skills — what they are, how they work, and how to use your first one in under five minutes. Includes three beginner-friendly examples for organizing files, writing blog posts, and analyzing your spending.",
  alternates: { canonical: '/blog/beginners-guide-to-claude-skills' },
  openGraph: {
    title: "The Beginner's Guide to Claude Skills: What They Are and How to Get Started",
    description: "A friendly introduction to Claude Skills — what they are, how they work, and how to use your first one in under five minutes.",
    url: 'https://www.claudecodehq.com/blog/beginners-guide-to-claude-skills',
    type: 'article',
    publishedTime: '2026-04-30',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Beginner's Guide to Claude Skills: What They Are and How to Get Started",
    description: "What are Claude Skills? A clear, beginner-friendly explanation — plus three real examples you can try in under five minutes.",
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

export default function BeginnersGuideCaudeSkillsPage() {
  return (
    <BlogPostLayout
      title="The Beginner's Guide to Claude Skills: What They Are and How to Get Started"
      description="A friendly introduction to Claude Skills — what they are, how they work, and how to use your first one in under five minutes. Includes three beginner-friendly examples for organizing files, writing blog posts, and analyzing your spending."
      category="tutorial"
      difficulty="basic"
      readingTime="10 min read"
      createdAt="2026-04-30"
      tags={['claude skills', 'what are claude skills', 'claude skills tutorial', 'Claude Code', 'beginner', 'CLAUDE.md', 'playbooks']}
      author="Claude Code Playbooks"
      slug="beginners-guide-to-claude-skills"
    >
      <p className="text-lg">
        If you&apos;ve heard the term &quot;Claude Skills&quot; and wondered what it actually means
        — you&apos;re not alone. It&apos;s one of those phrases that gets thrown around in AI
        communities without much explanation. Is it a feature you have to unlock? A paid add-on?
        Something only developers can use?
      </p>
      <p>
        None of the above. Claude Skills are simple, free, and genuinely useful — and you can use
        your first one in about five minutes. This guide explains what they are, why they work, and
        walks you through three beginner-friendly examples that cover real everyday tasks.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        What Are Claude Skills?
      </h2>
      <p>
        A Claude Skill is a set of instructions that tells Claude how to behave for a specific
        task. Instead of explaining your requirements from scratch every time you use Claude, you
        drop a pre-written instruction file into your project folder. Claude reads it automatically
        and immediately knows exactly what role to play, what format to use, and how to handle
        your specific situation.
      </p>
      <p>
        The instruction file is called a <strong className="text-foreground">CLAUDE.md</strong> file.
        That&apos;s it. The &quot;skill&quot; is really just a well-written CLAUDE.md that someone
        has already crafted for a particular job.
      </p>
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-6">
        <p className="text-sm font-semibold text-foreground mb-2">A concrete analogy</p>
        <p className="text-sm">
          Imagine hiring a contractor. Without instructions, you&apos;d spend the first hour
          explaining your preferences, your style, your constraints. With a good briefing document,
          they hit the ground running. A Claude Skill is the briefing document — written once,
          reused every session.
        </p>
      </div>
      <p>
        The key insight is that <strong className="text-foreground">context is power</strong>.
        A general-purpose AI and a Claude with a well-crafted skill file are night and day.
        The general AI has to guess your preferences, invent a format, and hedge its outputs.
        Claude with a skill already knows your preferences, your format, and your goal — so
        every response is immediately usable.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        How Do Claude Skills Work — Technically?
      </h2>
      <p>
        No coding required. Here&apos;s the complete picture:
      </p>
      <ol className="list-decimal list-inside space-y-3 my-4">
        <li>
          <strong className="text-foreground">You create a folder</strong> on your computer for a
          specific project or task (e.g., <code className="text-[#22d3ee] text-sm bg-[#161b22] px-1.5 py-0.5 rounded">~/Documents/MyBlog</code>).
        </li>
        <li>
          <strong className="text-foreground">You download a skill</strong> (a CLAUDE.md file) and
          put it in that folder. Playbooks on this site are all downloadable skills — click the
          Download button on any playbook page.
        </li>
        <li>
          <strong className="text-foreground">You open Claude Code</strong> from inside that folder.
          Claude automatically reads the CLAUDE.md file and loads the skill.
        </li>
        <li>
          <strong className="text-foreground">You start working.</strong> Claude already knows the
          context and behaves according to the skill&apos;s instructions from your very first
          message.
        </li>
      </ol>
      <p>
        You don&apos;t configure anything. You don&apos;t write any code. The folder is the
        &quot;on switch.&quot;
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Setup in three commands</p>
        <pre className="text-sm font-mono text-[#e6edf3] whitespace-pre-wrap leading-relaxed">{`mkdir ~/Documents/MyProject
# Move your downloaded CLAUDE.md into that folder
cd ~/Documents/MyProject
claude  # Claude reads CLAUDE.md automatically`}</pre>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        What Makes a Good Skill?
      </h2>
      <p>
        A well-crafted CLAUDE.md skill typically defines five things:
      </p>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">1. Role &amp; persona</p>
          <p className="text-sm">Who Claude is in this context — &quot;You are a personal budget analyst&quot; or &quot;You are a blog post editor with an opinionated voice.&quot;</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">2. Task scope</p>
          <p className="text-sm">Exactly what Claude should do and — just as importantly — what it should not do. Scope prevents Claude from going off-piste.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">3. Output format</p>
          <p className="text-sm">The structure of every response — whether that&apos;s a numbered risk list, a markdown blog draft, or a spending breakdown by category.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">4. Edge-case handling</p>
          <p className="text-sm">What to do when something is ambiguous, incomplete, or outside the skill&apos;s scope. Good skills answer &quot;what if&quot; before it happens.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">5. Examples</p>
          <p className="text-sm">Sample inputs and outputs that calibrate Claude&apos;s understanding. The more concrete the example, the more accurate the behavior.</p>
        </div>
      </div>
      <p>
        The best skills on this site were written by people who use them daily — developers,
        researchers, marketers, freelancers — which means the edge cases are handled, the
        format is refined, and the output is immediately usable. You get the benefit of their
        iteration without doing the work.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Three Beginner-Friendly Skills to Try First
      </h2>
      <p>
        The best way to understand what Claude Skills feel like is to use one. Here are three
        beginner-friendly options that each solve a common, concrete problem — no technical
        background required.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        1. Tame your Downloads folder once and for all
      </h3>
      <p>
        Most people have a Downloads folder they&apos;re a little embarrassed about. Screenshots
        mixed with invoices, installers that were supposed to be temporary, PDFs with names like
        &quot;final_v3_REALLYFINAL.pdf.&quot; The folder has become a second desktop — which means
        it&apos;s functionally useless.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/auto-organize-downloads">Auto-Organize Downloads Folder</PlaybookLink> skill
        handles the whole job in one go. Point Claude at your Downloads folder and it sorts every
        file by type (images, documents, videos, installers, archives), flags duplicates, archives
        old files by year, and produces a summary of what went where. 2,000 files organized in
        the time it would take you to make a decision about the first ten.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Organize my Downloads folder. Group by file type, archive anything older than a year,
          and flag duplicates before deleting them.&quot;
        </p>
      </div>
      <p>
        This is a great first skill because the result is immediately visible and satisfying.
        You&apos;ll understand exactly what Claude did, and you&apos;ll have a mental model for
        how skills work in general.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        2. Write a complete blog post with distribution baked in
      </h3>
      <p>
        Writing a blog post is only half the work. After the draft comes the social thread, the
        email teaser, the title variants for A/B testing, the CTA you still haven&apos;t decided
        on. Most writers get the draft done and then stall on the distribution layer — which means
        the post sits unpublished while context evaporates.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/blog-post-writer">Blog Post Writer</PlaybookLink> skill
        collapses all of that into one session. Give it a topic and it produces: five title
        options, an SEO-structured outline, a polished 1,800-word draft, an X thread version, an
        email teaser, and three CTA variants. Everything you need to publish and promote — in
        a single prompt.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Write a blog post about why freelancers should track their time even on flat-rate
          projects. Conversational tone. Target audience: independent consultants.&quot;
        </p>
      </div>
      <p>
        This skill is a good demonstration of the format-definition power of skills — the output
        structure is defined in the CLAUDE.md, so every post comes back in the same shape. No
        formatting back-and-forth. No &quot;can you also give me a social version?&quot; It&apos;s
        already there.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        3. Find out where your money is actually going
      </h3>
      <p>
        Most people have a vague sense of their spending. They know roughly what rent is.
        They&apos;re less sure about groceries. They have no idea about subscriptions — those
        $12.99 and $9.99 charges that add up to $200+/month in things they half-forgot they
        signed up for.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/budget-analyzer">Personal Budget Analyzer</PlaybookLink> skill
        takes your bank statement or transaction CSV and produces a real picture: every
        transaction categorized, monthly spending by category charted, subscription creep surfaced
        (with the exact services and costs), and a realistic suggested budget based on your actual
        habits rather than an imagined ideal.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Analyze my last three months of transactions. Categorize everything, show me what
          I spent the most on, and list every subscription charge.&quot;
        </p>
      </div>
      <p>
        This skill shows Claude Skills at their most personal — it&apos;s analyzing <em>your</em> data
        about <em>your</em> life, locally on your machine, without it going anywhere. That&apos;s
        worth understanding before you try it: Claude Code runs locally, so your financial data
        stays on your computer.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Common Questions From Beginners
      </h2>
      <div className="space-y-4 my-4">
        <div>
          <p className="font-semibold text-foreground mb-1">
            &quot;Do I need to know how to code?&quot;
          </p>
          <p className="text-sm">
            No. The three skills above require zero coding. You create a folder, drop in a file,
            and type your request in plain English. Some advanced skills produce code as their
            output (like the data analysis or pipeline playbooks), but you don&apos;t write any
            to use them.
          </p>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-1">
            &quot;Is Claude Code the same as Claude.ai?&quot;
          </p>
          <p className="text-sm">
            Claude.ai is the web chat interface. Claude Code is a separate tool that runs in your
            terminal — it&apos;s what makes Skills possible, because it can read files from your
            computer (including CLAUDE.md), run commands, and work with local data. You need to
            install Claude Code to use these playbooks;{' '}
            <a
              href="https://docs.anthropic.com/en/docs/claude-code/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22d3ee] hover:underline"
            >
              the installation takes about two minutes
            </a>
            .
          </p>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-1">
            &quot;Can I use a skill more than once?&quot;
          </p>
          <p className="text-sm">
            Yes — that&apos;s the point. The CLAUDE.md file stays in the folder permanently.
            Every time you open Claude Code in that folder, the skill is active. You can run
            the Budget Analyzer skill on a new bank statement export each month. You can write
            a new blog post with the Blog Post Writer skill anytime. The skill is always there.
          </p>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-1">
            &quot;Can I have multiple skills at once?&quot;
          </p>
          <p className="text-sm">
            Each folder has one CLAUDE.md, so each project uses one skill. But you can have as
            many folders as you like — a Downloads folder with the organizer skill, a blog folder
            with the writer skill, a finances folder with the budget skill. Different contexts,
            different skills.
          </p>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-1">
            &quot;Can I edit the CLAUDE.md to customize it?&quot;
          </p>
          <p className="text-sm">
            Absolutely — and this is where skills get powerful. The CLAUDE.md is just a text file.
            Open it in any text editor and adjust it for your preferences. Add your specific format
            requirements, your tone preferences, your company&apos;s terminology. The more you
            customize it, the more it feels like a tool that was built just for you.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        What to Try Next
      </h2>
      <p>
        Once you&apos;ve used one skill and understood the pattern — folder, CLAUDE.md, open
        Claude, ask a question — every other skill works the same way. The only difference is
        the job it does.
      </p>
      <p>
        Browse the full library by the kind of work you do most. There are skills for writing,
        research, finance, coding, legal review, marketing, data analysis, and more — all
        built and tested by people who use them on real work. The beginner-friendly ones are
        labeled clearly; you can filter by difficulty if you want to stay in shallow water
        while you find your footing.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        <Link
          href="/playbooks/auto-organize-downloads"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Auto-Organize Downloads</p>
          <p className="text-sm text-muted-foreground">Sort 2,000 files by type, archive old ones, and flag duplicates — in one command.</p>
        </Link>
        <Link
          href="/playbooks/blog-post-writer"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Blog Post Writer</p>
          <p className="text-sm text-muted-foreground">Full draft + social thread + email teaser + CTAs from a single prompt.</p>
        </Link>
        <Link
          href="/playbooks/budget-analyzer"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Personal Budget Analyzer</p>
          <p className="text-sm text-muted-foreground">See where your money actually goes — subscriptions, categories, and all.</p>
        </Link>
      </div>
      <p>
        The first skill takes five minutes. The second one takes two — because by then you already
        know the pattern. Within an hour you&apos;ll have a sense of what the library can do for
        you, and a short list of skills you want to set up permanently. That&apos;s the usual
        trajectory.
      </p>
    </BlogPostLayout>
  );
}
