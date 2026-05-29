import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Academic Research: From Literature Review to Published Insight | Claude Code Playbooks Blog',
  description: 'A concrete, four-stage research workflow built on Claude Skills — discover papers, screen and organize the evidence, synthesize findings into a thematic review, and draft a defensible argument. Built for the way researchers actually work.',
  alternates: { canonical: '/blog/claude-skills-academic-research' },
  openGraph: {
    title: 'Claude Skills for Academic Research: From Literature Review to Published Insight',
    description: 'Four Claude Skills that map to the real research workflow — find papers, screen the evidence, synthesize a thematic review, and draft an argument you can defend.',
    url: 'https://www.claudecodehq.com/blog/claude-skills-academic-research',
    type: 'article',
    publishedTime: '2026-05-29',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Academic Research: From Literature Review to Published Insight',
    description: 'An AI academic research assistant workflow — from AI literature review to a draft argument — using four purpose-built Claude Skills.',
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

export default function ClaudeSkillsAcademicResearchPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Academic Research: From Literature Review to Published Insight"
      description="A concrete, four-stage research workflow built on Claude Skills — discover papers, screen and organize the evidence, synthesize findings into a thematic review, and draft a defensible argument. Built for the way researchers actually work."
      category="guide"
      difficulty="intermediate"
      readingTime="14 min read"
      createdAt="2026-05-29"
      tags={[
        'claude skills academic research',
        'ai academic research assistant',
        'ai literature review',
        'ai research tool',
        'literature review',
        'research synthesis',
        'Claude Code',
      ]}
      author="Claude Code Playbooks"
      slug="claude-skills-academic-research"
    >
      <p className="text-lg">
        The research itself — the original thinking, the argument, the contribution — is the part
        only you can make. Everything before it is overhead: running the same query across five
        databases, screening 200 abstracts down to 30, re-reading a paper for the third time
        because you can&apos;t remember which methodology it used, and staring at a blank document
        titled &quot;Lit Review Draft&quot; while 87 papers blur into one another. That overhead
        is where weeks disappear.
      </p>
      <p>
        An <strong className="text-foreground">AI academic research assistant</strong> doesn&apos;t
        write your contribution for you — and it shouldn&apos;t. What it does is collapse the
        overhead so you reach the thinking faster and with a cleaner evidence base underneath it.
        <strong className="text-foreground"> Claude Skills</strong> — pre-built instruction sets
        that tell Claude exactly how to behave for a specific task — are the practical way to do
        this. You set each one up once (five to ten minutes, no coding), and from then on Claude
        runs the structured, repeatable parts of research while you stay on the judgment calls.
      </p>
      <p>
        This guide walks through four skills mapped to the four stages of a real research workflow:
        <strong className="text-foreground"> discover</strong> the papers,
        <strong className="text-foreground"> screen and organize</strong> the evidence,
        <strong className="text-foreground"> synthesize</strong> findings into a thematic review,
        and <strong className="text-foreground">draft</strong> an argument you can defend. Each
        stage feeds the next.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Stage 1: Discover — Find the Papers That Actually Matter
      </h2>
      <p>
        The fear that drives most literature searches is the fear of the paper you missed — the
        key study a reviewer will name in the first round of comments, the one that would have
        reframed your whole argument if you&apos;d found it in month one instead of month six.
        So you over-search: dozens of queries, hundreds of results, a download folder full of PDFs
        you&apos;ll never open, and no confidence you&apos;ve actually covered the field.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/academic-search">Academic Literature Research</PlaybookLink> skill
        turns a topic into a curated, ranked reading list instead of a pile. Describe what
        you&apos;re investigating and it surfaces high-impact papers with relevance scores,
        short methodology summaries, and synthesized key findings — so you can triage before you
        commit to reading. The point isn&apos;t to read less; it&apos;s to read the right things
        first and know why each one earned its place on the list.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Find recent papers on transformer architectures for protein folding. Prioritize
          high-citation and recent work, give each a relevance score for my focus on
          inference-time efficiency, and summarize the methodology and key finding of each in two
          sentences so I can decide what to read in full.&quot;
        </p>
      </div>
      <p>
        The discipline this enforces is early triage. Instead of bookmarking everything and
        sorting it out &quot;later&quot; (later never comes), you make relevance calls at the
        point of discovery, with a short rationale attached to each paper. By the end of the
        stage you have a defensible reading list, not an anxiety-inducing backlog.
      </p>
      <div className="space-y-2 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#f97316] font-mono text-sm font-bold shrink-0 mt-0.5">Before</span>
          <p className="text-sm">40 browser tabs, three database exports, and a nagging sense you&apos;ve missed the one paper that matters. No way to rank what to read first.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#22c55e] font-mono text-sm font-bold shrink-0 mt-0.5">After</span>
          <p className="text-sm">15 papers ranked by relevance, each with a methodology summary and key finding. A clear reading order and a written rationale for what you included — and what you didn&apos;t.</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes · Difficulty: Advanced · Best for: graduate students, research assistants, professors, systematic reviewers
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Stage 2: Screen &amp; Organize — Turn a Reading List into a Structured Evidence Base
      </h2>
      <p>
        Finding papers is the easy half. The hard, time-eating half is everything after: screening
        each abstract against inclusion criteria, extracting the methodology and sample and key
        result in a consistent format, managing citations so they don&apos;t become a nightmare at
        submission, and — the part most reviews do badly — actually noticing where the gaps in the
        existing research are. This is the work that takes weeks and feels like it should take days.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/academic-research-assistant">Academic Research Assistant</PlaybookLink> skill
        handles this middle layer as a structured, repeatable process. It builds and executes a
        search strategy, screens abstracts for relevance, extracts methodology comparisons in a
        consistent schema, maintains citations and bibliographies, and flags research gaps — the
        under-studied questions where your contribution could land. It transforms a scatter of
        PDFs into an evidence base you can actually reason about.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Review the literature on CRISPR gene therapy for sickle cell disease. Screen
          abstracts against my inclusion criteria (human trials, published 2020 or later),
          extract sample size and primary endpoint for each included study into a comparison
          table, build a citation list in APA, and highlight any research gaps you notice across
          the set.&quot;
        </p>
      </div>
      <p>
        A representative run looks like this: 85 papers screened, 23 key studies retained with
        side-by-side methodology comparisons, a citation map, and three explicit research gaps
        surfaced for you to evaluate. You still make every inclusion decision — but you make it
        against a consistent, transparent extraction rather than your memory of a PDF you skimmed
        last Tuesday.
      </p>
      <p>
        <strong className="text-foreground">The parallel-track companion:</strong> not every
        research task deserves your full attention while you do it. When you need to scope an
        adjacent topic, sanity-check a sub-question, or build background context for a section
        without dropping your primary work, the <PlaybookLink href="/playbooks/background-research">Background Research Processor</PlaybookLink> skill
        runs that research in the background and hands you a compiled, sourced briefing when
        you&apos;re ready for it. It&apos;s the difference between &quot;I&apos;ll look into that
        later&quot; and &quot;that&apos;s already waiting for me.&quot;
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;While I finish writing the methods section, research the debate over reporting
          standards for this type of trial — compile the main positions, who holds them, and the
          key citations, with sources. Have it ready as a briefing when I&apos;m done.&quot;
        </p>
      </div>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes · Difficulty: Intermediate · Best for: PhD students, postdocs, research librarians, systematic reviewers
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Stage 3: Synthesize — From a Stack of Summaries to a Thematic Narrative
      </h2>
      <p>
        Here is where most literature reviews fall apart. You have 40 papers, each one understood
        in isolation, and an advisor (or a journal) who wants a narrative organized by
        <em> insight</em> — not a paper-by-paper march through &quot;Smith (2021) found... Jones
        (2022) found...&quot;. The synthesis is the intellectual work of the review: grouping
        studies by the questions they&apos;re really answering, tracing how the field&apos;s
        thinking evolved, and showing where the evidence converges and where it conflicts. It&apos;s
        also the step people most often defer until the structure has collapsed under its own weight.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/literature-review-builder">Literature Review Builder</PlaybookLink> skill
        is built for exactly this transition. It tracks each source&apos;s methodology, findings,
        and limitations, then groups the set into emergent themes and drafts a thematic narrative
        that shows how the field has developed — organized by insight rather than by source. The
        output includes a methodology comparison table and a gap analysis that names the
        under-researched areas where your work fits.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Build a literature review from these 40 papers on remote work productivity. Group
          them into emergent themes rather than listing them one by one, build a methodology
          comparison table, identify the under-researched areas, and draft a thematic narrative
          with proper citations that shows how the field&apos;s thinking has shifted over time.&quot;
        </p>
      </div>
      <p>
        A typical result: a review organized around five emergent themes, a methodology comparison
        table, a gap analysis identifying three under-researched areas, and a narrative draft with
        citations in place. Crucially, the themes are a starting proposal — you reorganize, rename,
        and reweight them based on what you know the field actually cares about. The skill does the
        clustering grunt work; you do the interpretation.
      </p>
      <div className="space-y-2 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#f97316] font-mono text-sm font-bold shrink-0 mt-0.5">Before</span>
          <p className="text-sm">87 papers in Zotero, a blank doc, and the dawning realization that &quot;summarize each one and stitch them together&quot; produces a list, not a review.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#22c55e] font-mono text-sm font-bold shrink-0 mt-0.5">After</span>
          <p className="text-sm">Papers grouped into themes, a methodology table, a named set of gaps, and a narrative draft organized by insight — ready for you to sharpen with your own argument.</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes · Difficulty: Advanced · Best for: dissertation and thesis writers, postdocs surveying a new field, authors of review articles
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Stage 4: Draft the Argument — Where You Take Over
      </h2>
      <p>
        By the end of stage three you have a thematic narrative, a gap analysis, and a clean
        evidence base. This is the handoff point. The draft argument — your thesis, your
        contribution, the specific claim that the existing literature sets up but hasn&apos;t made —
        is yours to write. The skills got you here weeks faster and with a more defensible
        foundation; they don&apos;t make the move from synthesis to original claim.
      </p>
      <p>
        What the synthesis stage gives you for this final move is leverage. The gap analysis points
        directly at where a contribution is possible. The thematic structure tells you which
        conversation in the field you&apos;re joining. The methodology comparison shows you which
        approaches have been tried and where the open questions sit. You write the argument with
        the whole landscape in view instead of squinting at it through the last three papers you
        happened to read.
      </p>
      <p>
        Use the skills as a sounding board here, not an author. Ask the research assistant to
        pressure-test your claim against the evidence base — &quot;which of these papers would a
        skeptical reviewer cite to push back on this argument, and how would I respond?&quot; — and
        you turn the same evidence into a stress test for your thesis. The published insight is
        still yours. The path to it is just dramatically shorter.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Full Workflow: How the Four Skills Fit Together
      </h2>
      <p>
        These skills are designed as a pipeline. Each stage produces the input for the next, so the
        evidence base stays consistent from first search to final draft:
      </p>
      <ol className="list-decimal list-inside space-y-3 my-4">
        <li>
          <strong className="text-foreground">Academic Literature Research</strong> — discover and
          rank the papers. Output: a curated, relevance-scored reading list with rationale.
        </li>
        <li>
          <strong className="text-foreground">Academic Research Assistant</strong> — screen,
          extract, manage citations, and flag gaps. Output: a structured evidence base with a
          methodology comparison and explicit research gaps.
        </li>
        <li>
          <strong className="text-foreground">Background Research Processor</strong> — parallel
          track. Scope adjacent questions and build context without dropping your primary work.
          Output: compiled, sourced briefings, ready when you are.
        </li>
        <li>
          <strong className="text-foreground">Literature Review Builder</strong> — synthesize into
          a thematic narrative. Output: a review organized by insight, with a gap analysis pointing
          at where your contribution fits.
        </li>
        <li>
          <strong className="text-foreground">You</strong> — draft the argument. The thinking only
          you can do, now resting on a foundation that took days instead of weeks.
        </li>
      </ol>
      <p>
        You don&apos;t have to adopt all four at once. Start at the stage where you&apos;re most
        stuck right now — discovery anxiety, a screening backlog, or a stalled synthesis — set up
        that one skill, and use it on a live project. The next skill is always faster to set up
        than the first, because the pattern is already familiar.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        A Note on Rigor
      </h2>
      <p>
        An AI research tool earns its place by accelerating the mechanical work — searching,
        screening, extracting, clustering — not by replacing scholarly judgment. Verify every
        citation against the source. Read the papers your argument leans on in full; don&apos;t
        cite from a summary. Treat the proposed themes and flagged gaps as a strong first draft of
        your thinking, not a verdict. Used this way, these skills make your review more thorough
        and more defensible — because you spend your hours on interpretation and argument instead
        of on the search box and the citation manager.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Get the Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/academic-search"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Academic Literature Research</p>
          <p className="text-sm text-muted-foreground">Turn a topic into a relevance-scored reading list with methodology summaries and synthesized findings.</p>
        </Link>
        <Link
          href="/playbooks/academic-research-assistant"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Academic Research Assistant</p>
          <p className="text-sm text-muted-foreground">Screen abstracts, compare methodologies, manage citations, and surface research gaps — as a repeatable process.</p>
        </Link>
        <Link
          href="/playbooks/literature-review-builder"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Literature Review Builder</p>
          <p className="text-sm text-muted-foreground">Group papers by theme and draft a narrative review organized by insight rather than by source.</p>
        </Link>
        <Link
          href="/playbooks/background-research"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Background Research Processor</p>
          <p className="text-sm text-muted-foreground">Delegate adjacent research while you focus on primary work, and get a compiled, sourced briefing back.</p>
        </Link>
      </div>
      <p>
        The published insight is the part only you can produce. The search, the screening, the
        extraction, the first-pass synthesis — that pipeline doesn&apos;t have to cost you the
        weeks it always has.
      </p>
    </BlogPostLayout>
  );
}
