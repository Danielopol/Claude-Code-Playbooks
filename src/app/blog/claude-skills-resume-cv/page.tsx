import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

const TITLE = 'Claude Skills for Resume & CV Writing (Plus Cover Letters and ATS Checks)';
const DESCRIPTION =
  'The Claude skills for each job-application document: tailoring a resume to a posting with an ATS keyword check, building a clean CV you can update in one place, writing cover letters that sound specific, and prepping interview answers from your real experience.';

export const metadata: Metadata = {
  title: `${TITLE} | Claude Code Playbooks Blog`,
  description: DESCRIPTION,
  alternates: { canonical: '/blog/claude-skills-resume-cv' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.claudecodehq.com/blog/claude-skills-resume-cv',
    type: 'article',
    publishedTime: '2026-09-26',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Claude skills for resume tailoring, ATS keyword checks, CV building, and cover letters.',
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
  { job: 'Tailor a resume to one job posting', skill: 'Resume Tailoring Assistant', href: '/playbooks/resume-tailor', desc: 'Reorders skills, rewrites bullets with the posting’s keywords, and gives an ATS match score with gaps.' },
  { job: 'Tailor for several applications at once', skill: 'Resume Tailoring System', href: '/playbooks/resume-tailoring', desc: 'A version per posting plus a sheet comparing what changed in each.' },
  { job: 'Build or redesign the CV itself', skill: 'CV & Resume Builder', href: '/playbooks/cv-builder', desc: 'Content in one YAML file, rendered to a themed PDF with rendercv.' },
  { job: 'Write a cover letter', skill: 'Cover Letter Writer', href: '/playbooks/cover-letter', desc: 'Matches your experience to the posting and says why this company specifically.' },
  { job: 'Cover letter that tells a career story', skill: 'Cover Letter Generator', href: '/playbooks/cover-letter-generator', desc: 'Connects specific achievements to the role and the company’s recent work.' },
  { job: 'Prepare for the interview', skill: 'Interview Mastery System', href: '/playbooks/interview-mastery-system', desc: 'Predicts questions from the posting and drafts STAR answers from your real projects.' },
];

export default function ClaudeSkillsResumeCvPage() {
  return (
    <BlogPostLayout
      title={TITLE}
      description={DESCRIPTION}
      category="guide"
      difficulty="basic"
      readingTime="8 min read"
      createdAt="2026-09-26"
      tags={['claude resume skill', 'claude cv skill', 'claude cover letter skill', 'ats resume claude', 'resume tailoring', 'job search', 'Claude Code']}
      author="Claude Code Playbooks"
      slug="claude-skills-resume-cv"
    >
      <p className="text-lg">
        Asking Claude to &quot;improve my resume&quot; gets you a generic rewrite. What actually
        moves applications forward is narrower: matching one resume to one posting, keeping your
        CV easy to update, and writing a cover letter that couldn&apos;t have been sent to any
        other company. Each skill below does one of those jobs.
      </p>

      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-6">
        <p className="text-sm font-semibold text-foreground mb-3">Quick answer: which skill for which document</p>
        <ul className="space-y-2 text-sm">
          {SKILLS.map((s) => (
            <li key={s.href}>
              <span className="text-foreground">{s.job}:</span>{' '}
              <PlaybookLink href={s.href}>{s.skill}</PlaybookLink>
            </li>
          ))}
        </ul>
      </div>

      <H2>Best Claude Skill for Resume Tailoring and ATS: Resume Tailoring Assistant</H2>
      <p>
        The <PlaybookLink href="/playbooks/resume-tailor">Resume Tailoring Assistant</PlaybookLink>{' '}
        takes your resume and one job posting and returns a tailored version: skills reordered
        to match the posting&apos;s priorities, bullets rewritten with the keywords the posting
        uses, quantified achievements brought forward, and an ATS keyword match score with a list
        of gaps.
      </p>
      <Prompt>
        Tailor my resume for this data engineering role. Keep every claim true to my experience, use the posting&apos;s wording where it matches what I&apos;ve done, and list the requirements I don&apos;t cover so I can address them in the cover letter.
      </Prompt>
      <p>
        Applying to several roles at once? The{' '}
        <PlaybookLink href="/playbooks/resume-tailoring">Resume Tailoring System</PlaybookLink>{' '}
        produces a version per posting and a tracking sheet of what changed in each, so you know
        which resume went where.
      </p>

      <H2>Best Claude Skill for Building a CV: CV &amp; Resume Builder</H2>
      <p>
        If the problem is the document itself (fighting Word margins, keeping three versions in
        sync), the <PlaybookLink href="/playbooks/cv-builder">CV &amp; Resume Builder</PlaybookLink>{' '}
        keeps your content in one YAML file and renders it to a themed PDF with rendercv. Update a
        role once and every version picks it up. It suits academic CVs and long-form CVs as well as
        one-page resumes.
      </p>

      <H2>Best Claude Skills for Cover Letters</H2>
      <p>
        Two options, depending on what the letter needs to do. The{' '}
        <PlaybookLink href="/playbooks/cover-letter">Cover Letter Writer</PlaybookLink> matches
        your experience to the posting and explains why this company in particular, in a
        confident tone. The{' '}
        <PlaybookLink href="/playbooks/cover-letter-generator">Cover Letter Generator</PlaybookLink>{' '}
        leans on story: it connects your achievements into a coherent career narrative and
        references the company&apos;s recent work. Career changers usually want the second.
      </p>
      <Prompt>
        Write a cover letter for this Senior Designer role using my resume. Open with the project most relevant to their product, address the one requirement I&apos;m light on, and keep it under 250 words.
      </Prompt>

      <H2>Then Prep the Interview</H2>
      <p>
        The <PlaybookLink href="/playbooks/interview-mastery-system">Interview Mastery System</PlaybookLink>{' '}
        reads the posting against your resume, predicts likely questions, and drafts STAR-method
        answers from your actual projects, plus questions to ask them.
      </p>

      <H2>Rules That Keep an AI-Tailored Resume Credible</H2>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li><strong className="text-foreground">Never add experience you don&apos;t have.</strong> Tailoring means choosing and rewording, not inventing. Interviewers ask about every line.</li>
        <li><strong className="text-foreground">Use the posting&apos;s words for things you&apos;ve really done.</strong> That&apos;s what ATS keyword matching rewards.</li>
        <li><strong className="text-foreground">Keep formatting simple for ATS.</strong> Standard section headings, no text inside images or complex tables.</li>
        <li><strong className="text-foreground">Read it aloud before sending.</strong> Cut anything that doesn&apos;t sound like you, especially in the cover letter.</li>
        <li><strong className="text-foreground">Be careful with personal data.</strong> Remove your address and phone number from what you paste if you don&apos;t need them in the output.</li>
      </ul>

      <p className="mt-6">
        For the whole job search, including company research and salary ranges, see{' '}
        <Link href="/blog/claude-skills-job-seekers" className="text-[#22d3ee] hover:underline font-medium">
          Claude Skills for Job Seekers
        </Link>
        .
      </p>

      <H2>Get the Resume and CV Skills</H2>
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
