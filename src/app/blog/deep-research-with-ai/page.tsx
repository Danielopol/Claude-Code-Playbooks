import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'How to Do Deep Research with AI: A Framework for Thorough Analysis | Claude Code Playbooks Blog',
  description: 'A practical framework for deep research with AI — question decomposition, multi-source synthesis, contradiction detection, and how to produce reports that surface real insight rather than surface-level summaries.',
  alternates: { canonical: '/blog/deep-research-with-ai' },
  openGraph: {
    title: 'How to Do Deep Research with AI: A Framework for Thorough Analysis',
    description: 'A practical framework for deep research with AI — question decomposition, multi-source synthesis, contradiction detection, and how to produce reports that surface real insight rather than surface-level summaries.',
    url: 'https://www.claudecodehq.com/blog/deep-research-with-ai',
    type: 'article',
    publishedTime: '2026-04-26',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Do Deep Research with AI: A Framework for Thorough Analysis',
    description: 'Stop getting surface-level summaries from AI. This framework explains how to do genuinely deep research — question decomposition, multi-source synthesis, and structured reporting.',
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

export default function DeepResearchWithAIPage() {
  return (
    <BlogPostLayout
      title="How to Do Deep Research with AI: A Framework for Thorough Analysis"
      description="A practical framework for deep research with AI — question decomposition, multi-source synthesis, contradiction detection, and how to produce reports that surface real insight rather than surface-level summaries."
      category="guide"
      difficulty="intermediate"
      readingTime="15 min read"
      createdAt="2026-04-26"
      tags={['AI research', 'deep research with AI', 'AI research assistant', 'research synthesis', 'literature review', 'multi-source analysis', 'Claude Code']}
      author="Claude Code Playbooks"
      slug="deep-research-with-ai"
    >
      <p className="text-lg">
        Most people use AI for research the wrong way. They type a question, get a summary, and
        treat the summary as research. That&apos;s not research — that&apos;s a better Google. Real
        research involves decomposing a question, tracking what each source actually says,
        identifying where sources agree and where they contradict each other, finding the gaps no
        existing source addresses, and synthesizing everything into a structured argument with
        evidence behind each claim.
      </p>
      <p>
        <strong className="text-foreground">Deep research with AI</strong> is different from
        shallow research with AI in the same way that a consultant&apos;s report is different from
        a Wikipedia summary. The output reflects not just what&apos;s known, but the structure of
        what&apos;s known, what&apos;s contested, and what nobody has figured out yet. This guide
        walks through a four-layer framework — and the four Claude Code playbooks that make each
        layer operationally fast — so that the AI research your team produces is actually usable
        for high-stakes decisions.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Problem with Surface-Level AI Research
      </h2>
      <p>
        AI is extraordinarily good at one specific thing: retrieving and recombining existing
        knowledge. Asked &quot;what are the challenges of entering the European market?&quot; it
        can produce a competent list in seconds. The problem is that a competent list of challenges
        is not research — it&apos;s the starting point for research.
      </p>
      <p>
        Genuine research asks harder questions. Which challenges matter most for <em>your</em>
        specific industry, business model, and expansion timeline? Where do studies and expert
        opinions actually disagree, and why? What does the evidence say when you triangulate across
        sources rather than reading them one at a time? What does nobody know yet, and does that
        gap affect your decision?
      </p>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#f97316] font-mono text-sm font-bold shrink-0 mt-0.5">Shallow</span>
          <p className="text-sm">
            &quot;What are the pros and cons of launching in Europe?&quot; → A bulleted list of
            generic considerations you could have found in the first three Google results. Useful
            as orientation, not as a basis for a decision.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#22c55e] font-mono text-sm font-bold shrink-0 mt-0.5">Deep</span>
          <p className="text-sm">
            Question decomposed into eight sub-questions. Thirty sources read, synthesized, and
            cross-referenced. Four consensus findings, two direct contradictions between market
            studies, one gap (no good data on SaaS-specific regulatory timelines). Structured
            report with citations, confidence levels, and a recommendation section that reflects
            the uncertainty honestly.
          </p>
        </div>
      </div>
      <p>
        The framework below closes that gap. It doesn&apos;t make AI do magic — it makes AI do
        the systematic work that turns a question into genuine analysis.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Four-Layer Deep Research Framework
      </h2>
      <p>
        Every serious research project has the same underlying shape, whether it&apos;s a
        consulting deliverable, an academic literature review, or a competitive analysis. The
        four layers are: decompose, coordinate, synthesize, and structure. Most AI research
        workflows skip two or three of these.
      </p>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Layer 1: Decompose</p>
          <p className="text-sm">Break the research question into answerable sub-questions. Map dependencies. Prioritize which sub-questions have the most decision weight.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Layer 2: Coordinate</p>
          <p className="text-sm">Track which sources address which sub-questions. Prioritize source types. Know what you&apos;ve covered and what you haven&apos;t.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Layer 3: Synthesize</p>
          <p className="text-sm">Cross-reference sources to find consensus, contradictions, and gaps. Surface patterns invisible in any single source.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Layer 4: Structure</p>
          <p className="text-sm">Organize findings thematically — not source-by-source. Build a narrative where each claim has supporting evidence and a confidence level.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Layer 1: Question Decomposition and Research Scoping
      </h2>
      <p>
        The most common failure in <strong className="text-foreground">AI research</strong> projects
        happens before any research gets done: the question is too broad to answer well, but
        nobody realizes it until three hours later. &quot;What&apos;s the impact of remote work on
        company culture?&quot; is not a research question — it&apos;s a topic. A research question
        is specific enough that you know when you&apos;ve answered it.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/deep-research-coordinator">Deep Research Coordinator</PlaybookLink> playbook
        handles decomposition as its first step. Feed it a broad research question; it breaks it
        into specific, answerable sub-questions, maps which ones are prerequisites for others,
        and identifies which sub-questions carry the most decision weight for your actual use case.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Research question: Should we build our own data infrastructure or use a managed
          cloud provider? Decompose this into answerable sub-questions. Identify which ones I
          need to answer first, which depend on others, and which will have the most impact on
          the final recommendation.&quot;
        </p>
      </div>
      <p>
        What comes back is a research map — not a list of topics, but a structured DAG of
        sub-questions with dependencies and priority weights. This structure becomes the skeleton
        of your research project. Every source you read, every analysis you run, slots into one or
        more nodes on that map. You always know what you&apos;re trying to answer and whether
        you&apos;ve answered it.
      </p>
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        What good decomposition looks like
      </h3>
      <p>
        A question like &quot;impact of remote work on company culture&quot; decomposes into
        something like:
      </p>
      <ul className="list-disc list-inside space-y-1 text-sm">
        <li>How is &quot;company culture&quot; operationalized in the existing literature?</li>
        <li>Which culture dimensions are most affected by remote work (collaboration, trust, onboarding, retention)?</li>
        <li>Does effect size differ by company size, industry, or pre-existing culture type?</li>
        <li>What interventions have companies tried, and what is the evidence of effectiveness?</li>
        <li>What methodological limitations affect the studies in this area?</li>
        <li>What are the gaps — questions no existing study has adequately addressed?</li>
      </ul>
      <p className="mt-4">
        Each of these is answerable. You can find a source that addresses it, or note that no
        source does. That&apos;s what makes decomposition the foundation of deep research.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Layer 2: Coordinated Multi-Source Research
      </h2>
      <p>
        Once the question is decomposed, the coordination challenge emerges: you&apos;re now
        reading 20, 30, or 50 sources and trying to remember what each one said about which
        sub-question. Without a tracking system, you&apos;re guaranteed to miss coverage,
        double-read, and lose the thread of which claims have strong support versus thin support.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/deep-research">Deep Research Assistant</PlaybookLink> playbook
        runs each sub-question as a structured research task — pulling from multiple perspectives
        (empirical studies, practitioner accounts, contrarian views, historical analogues),
        tagging each finding by sub-question, and flagging when coverage is thin or one-sided.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Research sub-question: &apos;What interventions have companies tried to maintain
          culture in remote settings, and what is the evidence of effectiveness?&apos; Cover at
          least four perspectives: empirical studies, practitioner case studies, critical
          views, and historical analogues. Flag where evidence is weak.&quot;
        </p>
      </div>
      <p>
        Running the Deep Research Assistant per sub-question — rather than against the whole
        question at once — is the key design choice. It forces coverage discipline. You get a
        structured finding set per node in your research map, rather than a single sprawling
        response that covers some nodes well and others superficially.
      </p>
      <p>
        For large research projects, the coordinator and assistant roles work together: the
        coordinator manages the overall research map and tracks which sub-questions have been
        addressed, while the deep research assistant digs into individual nodes as assigned.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Layer 3: Cross-Source Synthesis and Contradiction Detection
      </h2>
      <p>
        This is the layer that separates genuine research from a well-organized reading list. Once
        you have findings from 20–30 sources, the synthesis question is: what do they collectively
        say? Not what does each one say, but what emerges when you read them as a body of evidence
        rather than as individual documents?
      </p>
      <p>
        The <PlaybookLink href="/playbooks/multi-source-synthesis">Multi-Source Research Synthesis</PlaybookLink> playbook
        is purpose-built for this. Dump findings from all your sources into one place; it runs
        four analytical passes:
      </p>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Consensus detection</p>
          <p className="text-sm">
            Which claims are supported by multiple independent sources? These are your high-confidence
            findings. Important: multiple sources saying the same thing doesn&apos;t mean they
            independently verified it — the playbook flags citation chains where sources are
            all citing one original study.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Contradiction mapping</p>
          <p className="text-sm">
            Where do sources directly disagree? Contradictions are often the most valuable
            finding — they signal either methodological differences, context-dependence, or
            genuine scientific uncertainty. All three are important to know before making a
            decision.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Gap identification</p>
          <p className="text-sm">
            What questions are implied by your research map but not addressed by any source? Gaps
            are where the evidence doesn&apos;t support a confident conclusion — and where your
            recommendation needs to explicitly acknowledge uncertainty.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Cross-source narrative</p>
          <p className="text-sm">
            A synthesized narrative of the state of knowledge — not &quot;Source A says X and
            Source B says Y,&quot; but &quot;the evidence shows X, with the exception of contexts
            where Y, which may reflect Z.&quot;
          </p>
        </div>
      </div>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Synthesize these 25 sources on remote work culture impacts. Find consensus
          findings, direct contradictions between studies, and gaps no source addresses.
          Flag where multiple sources trace back to the same original study. Produce a
          cross-source narrative with confidence levels per claim.&quot;
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Layer 4: Thematic Structuring (Especially for Academic Research)
      </h2>
      <p>
        The final layer is turning your synthesized findings into a structured document that
        someone else can read and actually use. This is where most AI-assisted research falls
        apart: the findings are solid, but the output is a source-by-source summary instead of a
        thematically organized argument.
      </p>
      <p>
        A source-by-source structure reads like: &quot;Smith (2024) found X. Jones (2023) found Y.
        Chen (2022) found Z.&quot; A thematically organized structure reads like: &quot;The
        evidence shows X [Smith 2024, Jones 2023]. However, this finding may not hold in large
        organizations [Chen 2022, Kim 2021], where Y is more consistently observed.&quot;
        Same evidence, completely different readability and utility.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/literature-review-builder">Literature Review Builder</PlaybookLink> playbook
        handles this transformation for academic and policy research contexts. It takes your
        tagged papers and findings, groups them by emergent theme rather than by source,
        produces a methodology comparison table, identifies under-researched areas, and
        drafts a narrative structured around insight rather than citation.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Build a literature review from these 40 papers on remote work productivity.
          Organize by emergent themes, not by paper. Include a methodology comparison table.
          Flag gaps and under-researched areas. Draft a thematic narrative with proper citations
          and a section on limitations of the current evidence base.&quot;
        </p>
      </div>
      <p>
        For business research rather than academic work, the same principle applies — just in
        a different output format. The Deep Research Coordinator&apos;s final synthesis report
        structures findings by decision relevance, not by source, and explicitly flags the
        confidence level of each recommendation.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        A Complete Deep Research Workflow
      </h2>
      <p>
        Here&apos;s how the four playbooks work together on a real research project:
      </p>
      <ol className="list-decimal list-inside space-y-2 my-4">
        <li>
          <strong className="text-foreground">Define and decompose.</strong> Feed the broad
          question to the Deep Research Coordinator. Get back a research map: sub-questions,
          dependencies, and priority weights. Confirm the scope before doing any research.
        </li>
        <li>
          <strong className="text-foreground">Research sub-questions systematically.</strong> Run
          the Deep Research Assistant on each high-priority sub-question. Multi-perspective
          coverage (empirical, practitioner, critical, historical) for each one.
        </li>
        <li>
          <strong className="text-foreground">Synthesize across sources.</strong> Once you have
          findings from 15+ sources, feed them to the Multi-Source Synthesis playbook. Get
          consensus findings, contradictions, gaps, and a cross-source narrative with confidence
          levels.
        </li>
        <li>
          <strong className="text-foreground">Structure the output.</strong> Use the Literature
          Review Builder (academic) or the Coordinator&apos;s report generator (business) to
          organize findings thematically and produce the final deliverable.
        </li>
        <li>
          <strong className="text-foreground">Human judgment pass.</strong> Review the contradictions
          and gaps explicitly. Make the recommendation — AI can surface what&apos;s known and
          unknown; the judgment call based on that evidence is still yours.
        </li>
      </ol>
      <p>
        For a research project that would traditionally take a week, this workflow typically
        takes a day — with higher source coverage and more explicit contradiction tracking than
        manual research usually achieves.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        What AI Research Is Not
      </h2>
      <p>
        The limitations are real and worth being direct about:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong className="text-foreground">AI does not have access to paywalled literature.</strong>{' '}
          For academic research, you still need institutional access to journals, or open-access
          repositories. The playbooks synthesize what you bring to them — they don&apos;t
          substitute for sourcing.
        </li>
        <li>
          <strong className="text-foreground">AI can confabulate citations.</strong> Any specific
          citation the AI produces should be verified against the original. The synthesis and
          pattern-finding are the valuable contribution; treat specific citations as hypotheses
          to verify, not facts to rely on.
        </li>
        <li>
          <strong className="text-foreground">AI cannot assess source credibility automatically.</strong>{' '}
          It can note that a claim appears in a peer-reviewed study versus a blog post, but the
          domain judgment about whether that specific study is methodologically sound is still
          yours.
        </li>
        <li>
          <strong className="text-foreground">AI cannot make the recommendation.</strong> It can
          surface what the evidence says and where the uncertainty lies. The judgment about what
          to do given that evidence requires context the AI doesn&apos;t have.
        </li>
      </ul>
      <p className="mt-4">
        These are not reasons to avoid AI-assisted research — they&apos;re reasons to use it
        at the right layer. AI handles decomposition, coordination, synthesis, and structuring.
        You handle sourcing, verification, credibility assessment, and recommendation.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Get Started: Pick Your Entry Point
      </h2>
      <p>
        If you&apos;re dealing with a big, messy research question and don&apos;t know where
        to start, begin with the Deep Research Coordinator — decomposition is always the
        highest-leverage first step. If you already have a pile of sources and need to make
        sense of them, go straight to Multi-Source Synthesis. For academic literature reviews,
        the Literature Review Builder is the piece that transforms a reading list into a
        structured argument.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/deep-research-coordinator"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Deep Research Coordinator</p>
          <p className="text-sm text-muted-foreground">Decompose complex questions, coordinate multi-source research, and produce structured reports.</p>
        </Link>
        <Link
          href="/playbooks/deep-research"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Deep Research Assistant</p>
          <p className="text-sm text-muted-foreground">Multi-perspective research on any sub-question — empirical, practitioner, critical, and historical angles.</p>
        </Link>
        <Link
          href="/playbooks/multi-source-synthesis"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Multi-Source Research Synthesis</p>
          <p className="text-sm text-muted-foreground">Cross-reference 20–50 sources to find consensus, contradictions, gaps, and narrative threads.</p>
        </Link>
        <Link
          href="/playbooks/literature-review-builder"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Literature Review Builder</p>
          <p className="text-sm text-muted-foreground">Turn a reading list into a thematic narrative review with methodology comparison and gap analysis.</p>
        </Link>
      </div>
      <p>
        The difference between surface-level AI research and deep research isn&apos;t the model
        — it&apos;s the process. Most people skip decomposition, do linear reading instead of
        cross-source synthesis, and output source summaries instead of thematic arguments. Fix
        the process, and the model you already have becomes dramatically more powerful. Every
        question worth researching is worth researching thoroughly — and thoroughness is now
        a one-day workflow, not a one-week one.
      </p>
    </BlogPostLayout>
  );
}
