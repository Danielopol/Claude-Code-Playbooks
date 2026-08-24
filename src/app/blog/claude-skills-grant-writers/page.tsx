import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Grant Writers: Win More Funding with AI Drafts | Claude Code Playbooks Blog',
  description: "Four Claude Skills that strengthen every stage of a grant application — template-exact first drafts, rigorous fact-checking before submission, voice-preserving revision, and the publication record that makes proposals fundable.",
  alternates: { canonical: '/blog/claude-skills-grant-writers' },
  openGraph: {
    title: 'Claude Skills for Grant Writers: Win More Funding with AI Drafts',
    description: "Four Claude Skills that strengthen every stage of a grant application — template-exact first drafts, rigorous fact-checking before submission, voice-preserving revision, and the publication record that makes proposals fundable.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-grant-writers',
    type: 'article',
    publishedTime: '2026-08-24T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Grant Writers: Win More Funding with AI Drafts',
    description: "Four Claude Skills that strengthen every stage of a grant application — template-exact first drafts, rigorous fact-checking before submission, voice-preserving revision, and the publication record that makes proposals fundable.",
    images: ['https://www.claudecodehq.com/og-image.png'],
  },
};

function PlaybookLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[#22d3ee] hover:underline font-medium">
      {children}
    </Link>
  );
}

export default function ClaudeSkillsGrantWritersPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Grant Writers: Win More Funding with AI Drafts"
      description="Four Claude Skills that strengthen every stage of a grant application — template-exact first drafts, rigorous fact-checking before submission, voice-preserving revision, and the publication record that makes proposals fundable."
      category="guide"
      difficulty="advanced"
      readingTime="13 min read"
      createdAt="2026-08-24"
      tags={['claude skills grants', 'ai grant writing', 'ai grant proposal', 'nsf nih grant ai', 'grant proposal revision', 'research paper writing ai', 'ai fact checking', 'academic funding ai']}
      author="Claude Code Playbooks"
      slug="claude-skills-grant-writers"
    >
      <p>
        A grant proposal isn't judged on the strength of the underlying idea alone — reviewers are comparing dozens of strong ideas against each other, and the ones that win are the ones that meet the funder's exact template, back every claim with verifiable evidence, and demonstrate a track record that makes the funder confident the money won't be wasted. Writing that proposal from scratch takes eighty-plus hours, and most of that time is spent wrestling with structure and formatting rather than the actual science.
      </p>
      <p>
        These four Claude Skills strengthen every stage where a proposal actually wins or loses: the first draft, the accuracy of every claim in it, the revision after reviewer feedback, and the publication record that makes a PI fundable in the first place.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Get a Complete First Draft in the Funder's Exact Template
      </h2>
      <p>
        You know the science. Translating it into the funder's exact template — with the right framing for the significance section, the specific structure NSF or NIH expects, a budget justification that reads the way reviewers expect it to — is a genuinely different skill, and it's the one that eats most of those eighty-plus hours before a single sentence of the actual research narrative gets written.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/grant-proposal-writer">Grant Proposal Writer</PlaybookLink>{' '}
        Skill generates a complete first draft from your project context, prior papers, and donor or funder profile — following the application template exactly, applying consistent voice rules, and covering project summary, intellectual merit, broader impacts, research plan, timeline, and budget justification in one pass.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Write a first draft of my NSF CAREER proposal on ML for climate modeling, using my prior papers and project notes as source material"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">80+ hours writing a proposal from scratch, most of it spent wrestling with the funder's exact template format rather than the actual science, framing, and significance of the work</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A complete proposal following the NSF template exactly — project summary, intellectual merit, broader impacts, research plan, timeline, and budget justification — built from your prior papers and project context</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 20 minutes. Feed it prior papers, project notes, and the funder's template — the more source material, the stronger the first draft.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Verify Every Claim Before a Reviewer Does
      </h2>
      <p>
        Grant review panels are exactly the audience most likely to catch an unsupported claim, a misremembered statistic, or a citation that doesn't quite say what the proposal implies it says — and in a competitive review process, one flagged inaccuracy can undermine confidence in the entire proposal, not just the sentence it appeared in. Manually checking every claim in a thirty-page proposal is its own significant undertaking.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/fact-checker">Fact Checker</PlaybookLink>{' '}
        Skill verifies claims systematically before submission: every statement gets a confidence score, sources get cited for verification, unverifiable claims get flagged explicitly, and any bias patterns in how evidence is framed get identified — turning a source of review risk into a solved problem before reviewers ever see the document.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Fact-check this grant proposal before submission — verify every statistic and citation, flag anything unverifiable"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Thirty pages of claims, statistics, and citations that nobody has systematically verified — and reviewers are exactly the audience most likely to catch what wasn't checked</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A structured report with each claim rated by confidence, source citations for verification, unverifiable claims flagged explicitly, statistics corrected where needed, and bias patterns identified before submission</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Run this as the final check before every submission, not just the first — resubmissions carry updated claims that need re-verifying too.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Integrate Reviewer Feedback Without Losing Your Voice
      </h2>
      <p>
        A "revise and resubmit" verdict arrives with three pages of reviewer comments, a co-PI emails contradictory suggestions on top of that, and the resubmission deadline is two weeks out. Integrating everyone's feedback into a single coherent draft — without losing the original voice or breaking the narrative thread the proposal was building — is exactly the kind of high-pressure, detail-heavy work that's easy to get wrong under deadline stress.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/grant-proposal-reviser">Grant Proposal Reviser</PlaybookLink>{' '}
        Skill takes feedback in whatever form it arrives — conversational notes, a structured comments file, or a formal reviewer report — and applies it to the draft while preserving your writing voice, tracking exactly what changed, backing up the original, and generating a response-to-reviewers document mapping each critique to the specific revision that addressed it.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Revise my NIH R01 proposal using these reviewer comments and my co-PI's feedback — preserve my voice and give me a response-to-reviewers document"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Three pages of reviewer comments, contradictory co-PI feedback, a two-week resubmission deadline, and a real risk of losing the narrative thread while integrating everyone's notes at once</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">An updated draft with all feedback addressed, your writing voice preserved, tracked changes showing exactly what was modified, a backup of the original, and a response-to-reviewers document mapping each critique to its revision</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Run the Fact Checker again on the revised draft before resubmitting — new claims added during revision need the same verification pass.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Build the Publication Record That Makes You Fundable
      </h2>
      <p>
        Grant review doesn't happen in a vacuum — a proposal from a PI with a strong, current publication record reads differently to reviewers than an identical proposal from someone whose last paper was two years ago. Results that have been sitting "almost done" for months because academic writing is a genuinely separate skill from doing the research are results that aren't yet doing anything for a fundability case.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/research-paper-writer">Research Paper Writer</PlaybookLink>{' '}
        Skill takes results from "almost done" to submission-ready: publication-ready structure meeting IEEE/ACM standards, an abstract with a clear contribution summary, an introduction with proper motivation and gap statement, related work organized by theme, a methodology section with reproducibility details, and a properly formatted bibliography — the paper that becomes preliminary data or track record for the next grant application.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Write a paper on our federated learning results for IEEE format — I have the results, I need the submission-ready manuscript"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Great results sitting "almost done" for three months because academic writing structure and citation conventions are a different skill than doing the actual research</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A publication-ready draft — abstract, introduction with gap statement, thematically organized related work, a reproducible methodology section, results with statistical analysis, and a formatted bibliography</p>
        </div>
      </div>

      <p>
        This Skill runs in parallel to the grant-writing cycle rather than inside any single proposal — today's published paper becomes tomorrow's stronger track record and next year's preliminary data section.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Treat this as an ongoing activity alongside grant cycles, not a one-time task tied to a single submission.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Strengthening Every Point Where a Proposal Wins or Loses
      </h2>
      <p>
        These four Skills cover the stages of a grant's life that actually determine the outcome:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Grant Proposal Writer</span> — get a complete, template-exact first draft instead of starting from a blank page</li>
        <li><span className="text-foreground font-medium">Fact Checker</span> — verify every claim before a reviewer has the chance to flag it themselves</li>
        <li><span className="text-foreground font-medium">Grant Proposal Reviser</span> — integrate reviewer and co-PI feedback without losing the narrative or the voice</li>
        <li><span className="text-foreground font-medium">Research Paper Writer</span> — keep the publication record current, since that record is part of what makes future proposals fundable</li>
      </ul>
      <p>
        None of these replace the underlying research or the judgment about which funder and framing fit the work — they remove the structural and verification labor that competes with the time a strong proposal actually needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/grant-proposal-writer">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Grant Proposal Writer</p>
            <p className="text-sm text-muted-foreground">Complete first drafts following your funder's exact template and voice</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/fact-checker">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Fact Checker</p>
            <p className="text-sm text-muted-foreground">Confidence-scored claim verification with source citations and bias flags</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/grant-proposal-reviser">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Grant Proposal Reviser</p>
            <p className="text-sm text-muted-foreground">Voice-preserving revisions with change tracking and a response-to-reviewers document</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/research-paper-writer">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Research Paper Writer</p>
            <p className="text-sm text-muted-foreground">Publication-ready manuscripts meeting IEEE/ACM standards, from results to submission</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
