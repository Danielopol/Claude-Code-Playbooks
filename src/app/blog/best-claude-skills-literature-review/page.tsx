import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

const TITLE = 'Best Claude Skills for Literature Review: Find, Screen, and Synthesize Papers';
const DESCRIPTION =
  'Which Claude skill to use at each stage of a literature review — finding papers, screening and extracting, building a synthesis matrix, and drafting a thematic review — plus a step-by-step way to do a literature review with Claude without inventing citations.';

export const metadata: Metadata = {
  title: `${TITLE} | Claude Code Playbooks Blog`,
  description: DESCRIPTION,
  alternates: { canonical: '/blog/best-claude-skills-literature-review' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.claudecodehq.com/blog/best-claude-skills-literature-review',
    type: 'article',
    publishedTime: '2026-09-26',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'The right Claude skill for each stage of a literature review, and how to use Claude for one without inventing citations.',
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

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
      {children}
    </h2>
  );
}

function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
      <p className="text-sm font-mono text-[#f97316]">{children}</p>
    </div>
  );
}

const STAGES = [
  { stage: 'Find papers', skill: 'Academic Literature Research', href: '/playbooks/academic-search', why: 'Search and shortlist papers with relevance notes' },
  { stage: 'Read one paper fast', skill: 'AlphaXiv Paper Lookup', href: '/playbooks/alphaxiv-paper-lookup', why: 'Structured overview of any arXiv paper, no PDF parsing' },
  { stage: 'Screen and extract', skill: 'Academic Research Assistant', href: '/playbooks/academic-research-assistant', why: 'Search strategy, abstract screening, methodology comparison' },
  { stage: 'Synthesize', skill: 'Literature Review Synthesis', href: '/playbooks/literature-review-synthesis', why: 'Synthesis matrix, consensus vs. debate, gaps' },
  { stage: 'Draft the review', skill: 'Literature Review Builder', href: '/playbooks/literature-review-builder', why: 'Narrative review organized by theme, not by source' },
  { stage: 'All of it, with citation checks', skill: 'Academic Research Skills', href: '/playbooks/academic-research-skills', why: '/ars-lit-review plus /ars-citation-check in one plugin' },
];

export default function BestClaudeSkillsLiteratureReviewPage() {
  return (
    <BlogPostLayout
      title={TITLE}
      description={DESCRIPTION}
      category="guide"
      difficulty="basic"
      readingTime="9 min read"
      createdAt="2026-09-26"
      tags={['claude literature review skill', 'literature review claude', 'claude skills for literature review', 'how to use claude for literature review', 'academic research', 'Claude Code']}
      author="Claude Code Playbooks"
      slug="best-claude-skills-literature-review"
    >
      <p className="text-lg">
        A literature review has four jobs: find the right papers, decide which ones matter,
        work out what they say together, and write that up as an argument. Claude can help
        with all four, but no single prompt does them well. The skills below each handle one
        stage, so you can use the one you&apos;re stuck on or chain them together.
      </p>

      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-6 overflow-x-auto">
        <p className="text-sm font-semibold text-foreground mb-3">Quick answer: which skill for which stage</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-muted-foreground">
              <th className="pb-2 pr-4 font-medium">Stage</th>
              <th className="pb-2 pr-4 font-medium">Skill</th>
              <th className="pb-2 font-medium">What it does</th>
            </tr>
          </thead>
          <tbody>
            {STAGES.map((s) => (
              <tr key={s.href} className="border-t border-[#30363d] align-top">
                <td className="py-2 pr-4 text-foreground">{s.stage}</td>
                <td className="py-2 pr-4"><PlaybookLink href={s.href}>{s.skill}</PlaybookLink></td>
                <td className="py-2">{s.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2>1. Find Papers: Academic Literature Research</H2>
      <p>
        The <PlaybookLink href="/playbooks/academic-search">Academic Literature Research</PlaybookLink>{' '}
        skill turns a topic into a shortlist: papers with relevance notes, methodology summaries,
        and key findings. Use it at the start, when you know the question but not the field&apos;s
        vocabulary yet.
      </p>
      <Prompt>
        Find recent peer-reviewed papers on four-day school weeks and student attendance. Prioritize empirical studies from 2015 onward, note each paper&apos;s method and sample, and tell me which search terms the field actually uses.
      </Prompt>
      <p>
        For arXiv-heavy fields, pair it with{' '}
        <PlaybookLink href="/playbooks/alphaxiv-paper-lookup">AlphaXiv Paper Lookup</PlaybookLink>,
        which returns a structured overview of any arXiv paper (contributions, method, results,
        limitations) so you can decide whether it&apos;s worth a full read.
      </p>

      <H2>2. Screen and Extract: Academic Research Assistant</H2>
      <p>
        Once you have 50 or more candidates, the bottleneck is screening. The{' '}
        <PlaybookLink href="/playbooks/academic-research-assistant">Academic Research Assistant</PlaybookLink>{' '}
        sets up a structured search strategy, screens abstracts against your inclusion criteria,
        and compares methodologies across the studies that make it through. Give it your criteria
        explicitly; screening is only as good as the rules you set.
      </p>
      <Prompt>
        Screen these 85 abstracts. Include: empirical, K-12, US or comparable systems, attendance or achievement outcomes. Exclude: opinion pieces, post-secondary, no comparison group. Give me include/exclude/unsure with a one-line reason for each.
      </Prompt>

      <H2>3. Synthesize: Literature Review Synthesis</H2>
      <p>
        Synthesis is where most reviews stay weak: a list of summaries instead of an account of
        what the studies say together. The{' '}
        <PlaybookLink href="/playbooks/literature-review-synthesis">Literature Review Synthesis</PlaybookLink>{' '}
        skill builds a synthesis matrix (findings mapped across studies), separates areas of
        consensus from active debates, assesses methodological quality, and names the gaps. The
        matrix is the part to keep: it&apos;s your evidence that each claim in the review rests on
        more than one paper.
      </p>

      <H2>4. Draft the Review: Literature Review Builder</H2>
      <p>
        The <PlaybookLink href="/playbooks/literature-review-builder">Literature Review Builder</PlaybookLink>{' '}
        tracks each paper&apos;s method and findings, groups them by theme, and drafts a narrative
        review organized by insight rather than by source. That&apos;s the difference between
        &quot;Smith (2019) found… Jones (2021) found…&quot; and a review that makes an argument.
      </p>
      <Prompt>
        Build a literature review from the 23 included papers. Organize by theme, include a methodology comparison table, and end with the three gaps my study addresses. Use APA 7.
      </Prompt>

      <H2>All Stages in One Plugin: Academic Research Skills</H2>
      <p>
        If you&apos;d rather have one tool than four, the open-source{' '}
        <PlaybookLink href="/playbooks/academic-research-skills">Academic Research Skills</PlaybookLink>{' '}
        plugin for Claude Code runs the whole pipeline: <code className="text-[#22d3ee] text-sm bg-[#161b22] px-1.5 py-0.5 rounded">/ars-plan</code>{' '}
        to sharpen the question, <code className="text-[#22d3ee] text-sm bg-[#161b22] px-1.5 py-0.5 rounded">/ars-lit-review</code>{' '}
        for the review, and <code className="text-[#22d3ee] text-sm bg-[#161b22] px-1.5 py-0.5 rounded">/ars-citation-check</code>{' '}
        to verify references. It pauses for your confirmation at each stage. It&apos;s licensed
        CC BY-NC 4.0, so check that fits your use.
      </p>

      <H2>How to Use Claude for a Literature Review (Step by Step)</H2>
      <ol className="list-decimal list-inside space-y-3 my-4">
        <li>
          <strong className="text-foreground">Write the question and the criteria first.</strong>{' '}
          One research question, plus inclusion and exclusion rules (years, populations, study
          types). Everything downstream depends on these.
        </li>
        <li>
          <strong className="text-foreground">Search in real databases.</strong> Use Claude to
          suggest search strings and synonyms, then run them in Google Scholar, PubMed, Scopus,
          or your field&apos;s database. Don&apos;t accept a paper list that Claude produced from
          memory.
        </li>
        <li>
          <strong className="text-foreground">Screen with Claude, decide yourself.</strong> Let
          Claude sort abstracts into include/exclude/unsure against your criteria, then review
          the unsure pile and spot-check the rest.
        </li>
        <li>
          <strong className="text-foreground">Extract into a table.</strong> One row per paper:
          method, sample, findings, limitations. Give Claude the PDFs or abstracts, not just titles.
        </li>
        <li>
          <strong className="text-foreground">Synthesize from the table.</strong> Ask for themes,
          agreements, contradictions, and gaps, citing the rows each claim comes from.
        </li>
        <li>
          <strong className="text-foreground">Draft, then verify every citation.</strong> Check
          each reference against the source before the draft goes anywhere.
        </li>
      </ol>

      <H2>The One Rule: Never Trust a Citation You Haven&apos;t Opened</H2>
      <p>
        Language models can produce references that look right and don&apos;t exist, or real
        papers attached to claims they don&apos;t make. The skills above reduce this by working
        from sources you provide, but the check stays with you. Before submission, confirm that
        every reference exists, that the details are right, and that the paper actually supports
        the sentence citing it.
      </p>

      <H2>Common Questions</H2>
      <div className="space-y-4 my-4">
        <div>
          <p className="font-semibold text-foreground mb-1">Can Claude do a systematic review?</p>
          <p className="text-sm">
            It can support one: search strings, screening against criteria, extraction tables,
            and PRISMA-style reporting. The protocol, the database searches, and the final
            inclusion decisions still need to be yours and documented. Academic Research Skills
            has a systematic review mode that asks for PRISMA compliance declarations.
          </p>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-1">Which skill should I start with?</p>
          <p className="text-sm">
            Start at the stage you&apos;re stuck on. Most people already have papers and are
            stuck on synthesis, which makes Literature Review Synthesis the most common first
            install.
          </p>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-1">Is it acceptable to use AI for a literature review?</p>
          <p className="text-sm">
            That depends on your institution and venue. Many allow AI assistance with
            disclosure. Check your guidelines before you start, not before you submit.
          </p>
        </div>
      </div>

      <p className="mt-6">
        Once the review is done, the next stage is writing the paper itself. See{' '}
        <Link href="/blog/claude-skills-academic-writing" className="text-[#22d3ee] hover:underline font-medium">
          Claude Skills for Academic Writing
        </Link>{' '}
        for thesis, paper, and peer-review skills, or{' '}
        <Link href="/blog/claude-skills-academic-research" className="text-[#22d3ee] hover:underline font-medium">
          Claude Skills for Academic Research
        </Link>{' '}
        for the full research workflow.
      </p>

      <H2>Get the Literature Review Skills</H2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {STAGES.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
          >
            <p className="font-semibold text-foreground mb-1">{s.skill}</p>
            <p className="text-sm text-muted-foreground">{s.why}</p>
          </Link>
        ))}
      </div>
    </BlogPostLayout>
  );
}
