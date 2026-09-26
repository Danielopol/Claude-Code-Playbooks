import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

const TITLE = 'Claude Skills for Academic Writing: Thesis, Research Papers, and Peer Review';
const DESCRIPTION =
  'The Claude skills that help at the writing stage of research — structuring a thesis or paper, drafting with verified citations, self-review before submission, responding to reviewers, and grant proposals — and what each one is best at.';

export const metadata: Metadata = {
  title: `${TITLE} | Claude Code Playbooks Blog`,
  description: DESCRIPTION,
  alternates: { canonical: '/blog/claude-skills-academic-writing' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.claudecodehq.com/blog/claude-skills-academic-writing',
    type: 'article',
    publishedTime: '2026-09-26',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Claude skills for thesis writing, research papers, pre-submission review, rebuttals, and grants.',
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

const SKILLS = [
  { job: 'Plan, draft, and review a thesis or paper (any field)', skill: 'Academic Research Skills', href: '/playbooks/academic-research-skills', desc: 'Plugin with /ars-outline, /ars-write, /ars-citation-check, /ars-review, and /ars-revision, pausing for your confirmation at each stage.' },
  { job: 'Fix structure before submission', skill: 'Research Paper Structure Editor', href: '/playbooks/research-paper-structure-editor', desc: 'Reverse outline, claim-evidence map, and adversarial self-review. Written for ML/CV/NLP papers; the method transfers.' },
  { job: 'Write an ML or AI conference paper', skill: 'ML Paper Writing', href: '/playbooks/ml-paper-writing', desc: 'NeurIPS/ICML/ICLR/ACL conventions with a citation-verification workflow and a claim-ledger gate.' },
  { job: 'Respond to reviewers', skill: 'Academic Rebuttal Writer', href: '/playbooks/academic-rebuttal-writer', desc: 'Classifies each comment, picks an Accept/Defend/Clarify/Experiment strategy, and drafts the rebuttal.' },
  { job: 'Write a grant proposal', skill: 'Grant Proposal Writer', href: '/playbooks/grant-proposal-writer', desc: 'First drafts that follow the funder template, built from your prior papers and project data.' },
  { job: 'Keep the prose sounding like you', skill: 'Avoid AI Writing', href: '/playbooks/avoid-ai-writing', desc: 'Flags and rewrites the patterns that make text read as machine-generated.' },
];

export default function ClaudeSkillsAcademicWritingPage() {
  return (
    <BlogPostLayout
      title={TITLE}
      description={DESCRIPTION}
      category="guide"
      difficulty="intermediate"
      readingTime="9 min read"
      createdAt="2026-09-26"
      tags={['claude skills for academic writing', 'claude thesis skill', 'claude research paper writing skill', 'academic writing claude', 'peer review', 'Claude Code']}
      author="Claude Code Playbooks"
      slug="claude-skills-academic-writing"
    >
      <p className="text-lg">
        Most AI advice for researchers stops at finding and summarizing papers. The harder part
        comes after: turning notes into a thesis chapter or paper with a clear argument, getting
        every citation right, surviving review, and writing the rebuttal. These are the Claude
        skills built for that stage.
      </p>

      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-6">
        <p className="text-sm font-semibold text-foreground mb-3">Quick answer: which skill for which job</p>
        <ul className="space-y-2 text-sm">
          {SKILLS.map((s) => (
            <li key={s.href}>
              <span className="text-foreground">{s.job}:</span>{' '}
              <PlaybookLink href={s.href}>{s.skill}</PlaybookLink>
            </li>
          ))}
        </ul>
      </div>

      <H2>For a Thesis or Paper in Any Field: Academic Research Skills</H2>
      <p>
        <PlaybookLink href="/playbooks/academic-research-skills">Academic Research Skills</PlaybookLink>{' '}
        is an open-source Claude Code plugin that covers the writing pipeline end to end.{' '}
        <code className="text-[#22d3ee] text-sm bg-[#161b22] px-1.5 py-0.5 rounded">/ars-outline</code>{' '}
        plans the structure, <code className="text-[#22d3ee] text-sm bg-[#161b22] px-1.5 py-0.5 rounded">/ars-write</code>{' '}
        drafts, <code className="text-[#22d3ee] text-sm bg-[#161b22] px-1.5 py-0.5 rounded">/ars-citation-check</code>{' '}
        verifies references, <code className="text-[#22d3ee] text-sm bg-[#161b22] px-1.5 py-0.5 rounded">/ars-review</code>{' '}
        gives a multi-perspective peer review, and{' '}
        <code className="text-[#22d3ee] text-sm bg-[#161b22] px-1.5 py-0.5 rounded">/ars-revision</code>{' '}
        works through comments. It supports APA 7, Chicago, MLA, IEEE, and Vancouver, and stops
        for your confirmation between stages.
      </p>
      <p>
        For a thesis, the most useful habit is running <code className="text-[#22d3ee] text-sm bg-[#161b22] px-1.5 py-0.5 rounded">/ars-review</code>{' '}
        on each chapter before it goes to your supervisor, so meetings spend time on the argument
        rather than on structure and missing references.
      </p>

      <H2>Before Submission: Research Paper Structure Editor</H2>
      <p>
        The <PlaybookLink href="/playbooks/research-paper-structure-editor">Research Paper Structure Editor</PlaybookLink>{' '}
        checks whether the paper holds together. It builds a reverse outline from each
        paragraph&apos;s topic sentence and checks it against the section&apos;s thesis, maps every
        claim in the Abstract and Introduction to the result that supports it, and runs an
        adversarial self-review. It was written for ML, computer vision, and NLP papers, but a
        claim-evidence map is useful in any empirical field.
      </p>
      <Prompt>
        Review my Introduction and Method sections before I submit. Build a reverse outline, flag paragraphs that don&apos;t serve the section&apos;s point, and list every claim in the Introduction with the result that supports it, or &quot;unsupported&quot;.
      </Prompt>

      <H2>For ML and AI Papers: ML Paper Writing</H2>
      <p>
        <PlaybookLink href="/playbooks/ml-paper-writing">ML Paper Writing</PlaybookLink> targets
        NeurIPS, ICML, ICLR, ACL, AAAI, and COLM. Its strongest feature is the citation workflow:
        search Semantic Scholar, CrossRef, or arXiv, confirm the metadata, check that the claim
        actually appears in the source, and only then add the BibTeX entry. A claim ledger stops
        unsupported claims from reaching the manuscript. For the full project from experiment
        design to submission, see the{' '}
        <PlaybookLink href="/playbooks/ml-research-paper-pipeline">ML Research Paper Pipeline</PlaybookLink>.
      </p>

      <H2>After Review: Academic Rebuttal Writer</H2>
      <p>
        The <PlaybookLink href="/playbooks/academic-rebuttal-writer">Academic Rebuttal Writer</PlaybookLink>{' '}
        classifies each reviewer comment by severity (major, minor, typo, misunderstanding), picks
        a deliberate strategy for each (accept, defend, clarify, or run an experiment), and drafts
        a rebuttal that acknowledges what reviewers got right before addressing their concerns.
        A final tone pass removes defensive language.
      </p>
      <Prompt>
        Here are the three reviews for my paper. Classify every comment, suggest a strategy for each, and draft a rebuttal within the 5,000-character limit. Reviewer 2 misread our baseline; clarify without sounding defensive.
      </Prompt>

      <H2>For Funding: Grant Proposal Writer</H2>
      <p>
        The <PlaybookLink href="/playbooks/grant-proposal-writer">Grant Proposal Writer</PlaybookLink>{' '}
        produces first drafts that follow the funder&apos;s template (for example, an NSF project
        summary, intellectual merit, and broader impacts) using your prior papers and project
        data as source material, and supports resubmissions.
      </p>

      <H2>Keep It in Your Voice: Avoid AI Writing</H2>
      <p>
        Examiners and reviewers increasingly notice AI-sounding prose. The{' '}
        <PlaybookLink href="/playbooks/avoid-ai-writing">Avoid AI Writing</PlaybookLink> skill
        audits a draft for the vocabulary, structure, and formatting patterns that give it away,
        and rewrites them. Run it on anything Claude drafted before it goes out under your name.
      </p>

      <H2>Ground Rules for Academic Writing with Claude</H2>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li><strong className="text-foreground">Your argument, Claude&apos;s scaffolding.</strong> Use Claude for structure, clarity, and checks. The claims and the interpretation should be yours.</li>
        <li><strong className="text-foreground">Verify every reference.</strong> Open each source and confirm it says what the sentence claims.</li>
        <li><strong className="text-foreground">Follow your institution&apos;s rules.</strong> Many require disclosing AI assistance in theses and papers.</li>
        <li><strong className="text-foreground">Keep your drafts.</strong> Save the versions you accept; AI output won&apos;t come out the same twice.</li>
      </ul>

      <p className="mt-6">
        Still at the reading stage? Start with{' '}
        <Link href="/blog/best-claude-skills-literature-review" className="text-[#22d3ee] hover:underline font-medium">
          the best Claude skills for literature review
        </Link>
        .
      </p>

      <H2>Get the Academic Writing Skills</H2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {SKILLS.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
          >
            <p className="font-semibold text-foreground mb-1">{s.skill}</p>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </Link>
        ))}
      </div>
    </BlogPostLayout>
  );
}
