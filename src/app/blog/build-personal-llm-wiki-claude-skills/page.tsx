import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'How to Build a Personal LLM Wiki with Claude Skills (Your Own AI Knowledge Base) | Claude Code Playbooks Blog',
  description: 'What an LLM Wiki is, why it\'s different from Obsidian or Notion, and how to build one using Claude Skills — so your AI assistant always has the context it needs to give you useful answers.',
  alternates: { canonical: '/blog/build-personal-llm-wiki-claude-skills' },
  openGraph: {
    title: 'How to Build a Personal LLM Wiki with Claude Skills (Your Own AI Knowledge Base)',
    description: 'What an LLM Wiki is, why it\'s different from Obsidian or Notion, and how to build one using Claude Skills — so your AI assistant always has the context it needs.',
    url: 'https://www.claudecodehq.com/blog/build-personal-llm-wiki-claude-skills',
    type: 'article',
    publishedTime: '2026-05-24',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Build a Personal LLM Wiki with Claude Skills',
    description: 'An LLM Wiki is a knowledge base designed for your AI to read, not you to browse. Here\'s what that means and how to build one.',
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

export default function BuildPersonalLlmWikiClaudeSkillsPage() {
  return (
    <BlogPostLayout
      title="How to Build a Personal LLM Wiki with Claude Skills (Your Own AI Knowledge Base)"
      description="What an LLM Wiki is, why it's different from Obsidian or Notion, and how to build one using Claude Skills — so your AI assistant always has the context it needs to give you useful answers."
      category="guide"
      difficulty="intermediate"
      readingTime="13 min read"
      createdAt="2026-05-24"
      tags={['llm wiki', 'personal knowledge base ai', 'claude skills knowledge base', 'build llm wiki', 'AI second brain', 'Claude Code', 'personal wiki AI']}
      author="Claude Code Playbooks"
      slug="build-personal-llm-wiki-claude-skills"
    >
      <p className="text-lg">
        Most people who use AI heavily notice the same failure pattern: they get a great
        answer in one session, close the tab, and have to re-explain the same context
        next time. The AI is stateless between sessions. Every conversation starts cold.
        The output quality is directly proportional to how well you brief it — and briefing
        from scratch every time is exhausting.
      </p>
      <p>
        The fix that&apos;s emerging in technically curious circles is the{' '}
        <strong className="text-foreground">personal LLM Wiki</strong> — a structured,
        AI-readable knowledge base about you, your work, and your domain that an AI can
        load as context at the start of a session. Not a notes app. Not a second brain.
        Something specifically designed to make an LLM immediately useful without a briefing.
      </p>
      <p>
        This post explains what an LLM Wiki is, why it&apos;s different from the knowledge
        management tools you already use, and how to build one with Claude Skills — including
        how to populate it from the knowledge you&apos;ve already accumulated in notes,
        conversations, and documents.
      </p>

      {/* ── What is an LLM Wiki ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        What Is an LLM Wiki?
      </h2>
      <p>
        A traditional wiki is a collection of hyperlinked pages designed for humans to
        navigate — you browse a hierarchy, follow links, search for terms. The structure
        serves the human reader&apos;s way of moving through information.
      </p>
      <p>
        An LLM Wiki is organized around a different reader: the AI. It&apos;s a structured
        document (or set of documents) written to give an LLM the context it needs to reason
        about your situation, answer questions about your domain, and make decisions consistent
        with your values and constraints. The human rarely reads it directly — you maintain it
        and the AI uses it.
      </p>
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-6">
        <p className="text-sm font-semibold text-foreground mb-3">The key structural difference</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide mb-2">Traditional notes / wiki</p>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>— Organized for human navigation (hierarchy, links)</li>
              <li>— Written in personal shorthand or stream-of-consciousness</li>
              <li>— Comprehensive: captures everything</li>
              <li>— Retrieval: you search for it</li>
              <li>— Value: a record of what you thought</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-mono text-[#22d3ee] uppercase tracking-wide mb-2">LLM Wiki</p>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li className="text-[#22d3ee]/80">+ Organized for AI consumption (structured sections)</li>
              <li className="text-[#22d3ee]/80">+ Written explicitly, no implied context</li>
              <li className="text-[#22d3ee]/80">+ Curated: contains what the AI needs to know</li>
              <li className="text-[#22d3ee]/80">+ Retrieval: AI reads it automatically</li>
              <li className="text-[#22d3ee]/80">+ Value: makes every AI session immediately useful</li>
            </ul>
          </div>
        </div>
      </div>
      <p>
        The practical implication: your Obsidian vault or Notion workspace is probably not
        already an LLM Wiki, even if it&apos;s comprehensive and well-organized. Notes written
        for yourself are full of implied context that an AI can&apos;t infer — shorthand,
        references to things you understand but never wrote down, emotional subtext, and gaps
        that would be obvious to you but aren&apos;t on the page.
      </p>
      <p>
        An LLM Wiki is explicit by design. It assumes the reader has never met you.
      </p>

      {/* ── Why it's different from a Second Brain ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        How It Differs from a Second Brain
      </h2>
      <p>
        The &quot;second brain&quot; concept — popularized by Tiago Forte and implemented in
        tools like Obsidian, Notion, and Roam — is about externalizing your thinking so you
        can retrieve and recombine it later. The goal is your future self: building a system
        your future self can search through and find useful.
      </p>
      <p>
        An LLM Wiki has a different goal: making the AI immediately useful in the current
        session. It&apos;s not about archiving your thinking — it&apos;s about curating the
        context an AI needs to reason well on your behalf. The two overlap but aren&apos;t
        the same:
      </p>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Second brain: comprehensive capture</p>
          <p className="text-sm text-muted-foreground">
            You want to capture everything — ideas, quotes, meeting notes, random connections.
            More is better. The system is a long-term archive you query over years.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">LLM Wiki: curated context</p>
          <p className="text-sm text-muted-foreground">
            You want the AI to know the things that make the most difference to its output
            quality: your background, your current priorities, your domain knowledge, your
            constraints and preferences. Less is more — a focused, well-maintained wiki
            outperforms an enormous unstructured dump of notes.
          </p>
        </div>
      </div>
      <p>
        The best setup for heavy AI users: a second brain (notes system) for comprehensive
        capture, and an LLM Wiki for curated AI context. The{' '}
        <PlaybookLink href="/playbooks/ai-second-brain">AI Second Brain</PlaybookLink> skill
        bridges the two — it can read your notes system and synthesize the most relevant
        content into the structured AI-readable format your LLM Wiki needs.
      </p>

      {/* ── What goes in an LLM Wiki ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        What Goes In an LLM Wiki
      </h2>
      <p>
        The contents depend on how you use AI. For most people, the high-value sections cluster
        into five categories:
      </p>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">1. Who you are</p>
          <p className="text-sm text-muted-foreground">
            Background, current role, domain expertise, career arc. Not a CV — the specific
            things that change how an AI should frame its answers to you. A cardiologist and
            a graphic designer both asking &quot;explain oxidative stress&quot; want different
            depth and vocabulary. The wiki tells the AI which one you are.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">2. Current context and priorities</p>
          <p className="text-sm text-muted-foreground">
            What you&apos;re working on right now, what matters this quarter, open decisions,
            active projects. This is the section that needs the most frequent updating — monthly
            or when major context changes. It&apos;s also the section with the highest
            immediate impact on output quality.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">3. Domain knowledge and opinions</p>
          <p className="text-sm text-muted-foreground">
            Your considered views on topics in your field — not Wikipedia-level facts, but your
            specific perspective. &quot;I think the consensus on X is wrong because Y.&quot;
            &quot;My framework for evaluating Z is...&quot; This makes AI responses align with
            your actual thinking rather than the generic consensus.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">4. Preferences and constraints</p>
          <p className="text-sm text-muted-foreground">
            How you like to communicate, what format you want responses in, what you consider
            a good answer vs. a great one. Practical constraints: tools you use, things you
            can&apos;t change, resources you have or don&apos;t have. Eliminates suggestions
            that are technically correct but don&apos;t apply to your situation.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">5. Reference materials for specific tasks</p>
          <p className="text-sm text-muted-foreground">
            Definitions that matter in your field, templates you use repeatedly, standards
            you work to, terminology that has specific meaning in your context. The things
            you&apos;d have to explain if a new colleague started tomorrow.
          </p>
        </div>
      </div>

      {/* ── The LLM Wiki playbook ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Building It: The LLM Wiki Skill
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/llm-wiki">LLM Wiki</PlaybookLink> skill is the core
        tool for building and maintaining your personal wiki. It does two things: helps you
        construct the initial wiki through a guided interview that extracts the right information
        in the right structure, and then provides a framework for querying and extending it
        over time.
      </p>
      <p>
        The guided build is where most people start. Rather than staring at a blank document
        and wondering what to include, the skill asks you the right questions and assembles
        your answers into a well-structured wiki document:
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Initial build prompt</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          &quot;Help me build my personal LLM Wiki from scratch. Interview me section by section:
          background and expertise, current work and priorities, domain knowledge and opinions,
          preferences and constraints, and key reference material. Ask follow-up questions to
          make my answers specific — push back on vague answers. After each section, show me
          the wiki text you&apos;re building so I can confirm it&apos;s accurate.&quot;
        </p>
      </div>
      <p>
        The &quot;push back on vague answers&quot; instruction matters. The most common mistake
        in building an LLM Wiki is writing in the same shorthand you use in personal notes.
        &quot;I work on AI stuff&quot; is useless context. &quot;I&apos;m a machine learning
        engineer at a Series B startup building recommendation systems for e-commerce, with
        five years of production ML experience&quot; is the context that changes output quality.
      </p>
      <p>
        The skill will challenge you until the answers are specific enough to be useful. Budget
        45–60 minutes for the initial build. The output is a Markdown file — your LLM Wiki —
        that you put in every project folder alongside your CLAUDE.md skill files.
      </p>
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-4">
        <p className="text-sm font-semibold text-foreground mb-2">What using it looks like afterward</p>
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">
            <span className="text-foreground/60 font-mono text-xs mr-2">Before wiki:</span>
            &quot;I&apos;m a [role] at a [company] and I&apos;m trying to [explain context for 5 minutes]. What&apos;s your recommendation?&quot;
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="text-[#22d3ee] font-mono text-xs mr-2">After wiki:</span>
            &quot;What&apos;s your recommendation?&quot;
          </div>
          <p className="text-xs text-muted-foreground mt-2 italic">
            Claude has already read the wiki. It knows who you are, what you&apos;re working on,
            and your constraints. The answer is immediately calibrated.
          </p>
        </div>
      </div>

      {/* ── Populating from existing knowledge ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Populating From Knowledge You Already Have
      </h2>
      <p>
        Most people with years of experience have the raw material for a great LLM Wiki
        scattered across notes apps, documents, and past conversations. The gap is synthesis —
        extracting the structured, explicit knowledge from the unstructured accumulation.
        Two skills handle this.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        From your notes: AI Second Brain
      </h3>
      <p>
        If you have an Obsidian vault, Notion workspace, or folder of markdown notes, the{' '}
        <PlaybookLink href="/playbooks/ai-second-brain">AI Second Brain</PlaybookLink> skill can
        read through them and extract the content most relevant to your LLM Wiki: your recurring
        opinions on domain topics, the frameworks you use repeatedly, the decisions and their
        reasoning, the terminology that has specific meaning in your context.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompt</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          &quot;Read through my notes from the last 12 months [or paste folder contents]. Extract:
          my recurring opinions and frameworks on [domain], terminology I use with specific
          meaning, patterns in how I think about [topic], and decisions I made with reasoning
          that might inform future decisions. Format the output as sections I can paste into
          my LLM Wiki.&quot;
        </p>
      </div>
      <p>
        For Obsidian users specifically, the{' '}
        <PlaybookLink href="/playbooks/obsidian-knowledge-system">Obsidian Knowledge System</PlaybookLink>{' '}
        skill provides a tighter integration — it understands Obsidian&apos;s file structure and
        linking conventions, and can synthesize vault content into LLM Wiki-ready sections more
        efficiently than a general notes synthesis.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        From your AI conversations: Chat History Mind Mapper
      </h3>
      <p>
        Heavy AI users have a goldmine of knowledge buried in their conversation history —
        problems worked through, decisions made, frameworks developed through back-and-forth
        with an AI. The{' '}
        <PlaybookLink href="/playbooks/chat-history-mind-mapper">Chat History Mind Mapper</PlaybookLink>{' '}
        skill extracts structured intelligence from conversation exports: the decisions and
        their reasoning, recurring themes across sessions, open questions, and the patterns
        in how you think and work.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompt</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          &quot;Here are my exported AI conversations from the last 6 months: [paste or attach].
          Extract the content that belongs in my LLM Wiki: what do I keep coming back to,
          what frameworks do I seem to use repeatedly, what opinions have I developed and
          stated explicitly, what constraints and preferences come up across sessions?
          Format as wiki sections.&quot;
        </p>
      </div>
      <p>
        Run both skills once when you first build your wiki. They bootstrap a knowledge base
        from material you&apos;ve already produced without requiring you to reconstruct it from
        memory — which is slow and produces a thinner result than reading the actual record.
      </p>

      {/* ── Structure of a good LLM Wiki ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        What a Well-Built LLM Wiki Looks Like
      </h2>
      <p>
        Here&apos;s the structure that the LLM Wiki skill produces — annotated so you
        understand why each section is there:
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">LLM Wiki structure</p>
        <pre className="text-sm font-mono text-[#e6edf3] whitespace-pre-wrap leading-relaxed">{`# Personal LLM Wiki — [Your Name]
Last updated: [Date]

## Identity & Background
[Role, domain, years of experience, relevant credentials.
Written explicitly — assumes the reader knows nothing about you.]

## Current Context
### Active Projects
[What you're working on right now with enough detail to matter]

### Open Decisions
[Decisions you're actively wrestling with — the AI can flag relevant info]

### This Quarter's Priorities
[What success looks like in the next 90 days]

## Domain Knowledge & Opinions
### [Topic Area 1]
[Your actual views, not the consensus. What you think and why.]

### [Topic Area 2]
[Frameworks you use, approaches you favor, things you've found don't work]

## Preferences & Constraints
### Communication Style
[How you want responses — length, format, tone, what to avoid]

### Tools & Environment
[What you use, what you don't, what you can't change]

### Decision-Making Style
[How you like to evaluate options, what you over/underweight]

## Reference Material
### Terminology
[Terms that mean specific things in your context]

### Templates & Formats
[Structures you use repeatedly — meeting note format, report structure, etc.]

### Standards & Criteria
[What a good X looks like in your world]`}</pre>
      </div>
      <p>
        The wiki lives as a Markdown file. It goes in the same folder as your project or task,
        alongside your CLAUDE.md skill file. Claude reads both — the wiki provides who you are,
        the skill file provides what Claude should do. Together they produce output calibrated
        to both the task and the person.
      </p>

      {/* ── Maintaining it ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Maintaining Your LLM Wiki
      </h2>
      <p>
        The most common failure mode: building a great wiki and never updating it. Within three
        months it&apos;s stale — your priorities have shifted, you&apos;ve developed new views,
        the projects in your current context section are done. Stale context is worse than no
        context in some ways, because it produces confidently wrong outputs.
      </p>
      <div className="space-y-3 my-4">
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 text-xs text-muted-foreground font-mono mt-0.5 w-20">Monthly</div>
          <p className="text-sm text-muted-foreground">
            Update the Current Context section. Replace completed projects with new ones, update
            open decisions, refresh this quarter&apos;s priorities. Takes 10–15 minutes.
          </p>
        </div>
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 text-xs text-muted-foreground font-mono mt-0.5 w-20">Quarterly</div>
          <p className="text-sm text-muted-foreground">
            Review the Domain Knowledge section. Have any of your views evolved? Are there new
            frameworks you&apos;ve developed? Add what&apos;s new, remove what&apos;s no longer
            accurate.
          </p>
        </div>
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 text-xs text-muted-foreground font-mono mt-0.5 w-20">Ad hoc</div>
          <p className="text-sm text-muted-foreground">
            When you have an insight, develop a new framework, or have a conversation that
            produces something worth keeping — add it to the relevant section. The Chat History
            Mind Mapper skill can do this in bulk periodically.
          </p>
        </div>
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 text-xs text-muted-foreground font-mono mt-0.5 w-20">Annually</div>
          <p className="text-sm text-muted-foreground">
            Full review — rewrite sections that have grown stale, consolidate overlapping entries,
            remove things that no longer apply. The{' '}
            <PlaybookLink href="/playbooks/personal-context-library">Personal Context Library</PlaybookLink>{' '}
            skill helps with this consolidation pass.
          </p>
        </div>
      </div>

      {/* ── The difference it makes ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        What Changes When You Have One
      </h2>
      <p>
        The difference isn&apos;t subtle. With a well-maintained LLM Wiki, questions that
        previously required a paragraph of setup become one-liners. Claude&apos;s recommendations
        stop being generic and start being specific to your situation. Suggestions that don&apos;t
        apply to you (wrong tool, wrong scale, wrong context) stop appearing because the wiki
        has already told Claude what your actual constraints are.
      </p>
      <p>
        The deeper shift: AI stops being a tool you use for isolated tasks and starts functioning
        more like a well-briefed collaborator — one that knows your background, understands your
        priorities, and doesn&apos;t need to be re-introduced every session. The briefing
        overhead disappears. The context compounds.
      </p>
      <p>
        That&apos;s what distinguishes heavy AI users who get dramatically better results from
        those who plateau at &quot;it&apos;s useful sometimes.&quot; The difference is almost
        never model quality. It&apos;s almost always context quality.
      </p>

      {/* ── CTA ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Three Skills
      </h2>
      <div className="grid grid-cols-1 gap-4 my-6">
        <Link
          href="/playbooks/llm-wiki"
          className="block p-5 bg-[#161b22] border border-[#22d3ee]/30 rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">LLM Wiki</p>
          <p className="text-sm text-muted-foreground">Build your personal LLM Wiki through a guided interview — identity, current context, domain opinions, preferences, and reference material. The output is a structured Markdown file Claude reads automatically in every session.</p>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/playbooks/ai-second-brain"
            className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
          >
            <p className="font-semibold text-foreground mb-1">AI Second Brain</p>
            <p className="text-sm text-muted-foreground">Synthesize your notes, vault, or documents into wiki-ready sections — extract recurring opinions, frameworks, and domain knowledge from what you&apos;ve already written.</p>
          </Link>
          <Link
            href="/playbooks/chat-history-mind-mapper"
            className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
          >
            <p className="font-semibold text-foreground mb-1">Chat History Mind Mapper</p>
            <p className="text-sm text-muted-foreground">Extract structured knowledge from your AI conversation exports — decisions, frameworks, recurring themes — and format it as wiki content.</p>
          </Link>
        </div>
      </div>
      <p>
        The LLM Wiki is probably the highest-leverage single thing you can do to improve
        AI output quality — not by changing the model, but by changing the quality of context
        it works from. Build it once, maintain it in 15 minutes a month, and the compounding
        benefits show up in every session afterward.
      </p>
    </BlogPostLayout>
  );
}
