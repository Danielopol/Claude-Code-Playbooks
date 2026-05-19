import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Job Seekers: Resumes, Cover Letters, and Interview Prep | Claude Code Playbooks Blog',
  description: 'How to use Claude Skills throughout your job search — tailoring resumes, writing cover letters that get read, researching companies and salary ranges, and preparing for interviews. No coding required.',
  alternates: { canonical: '/blog/claude-skills-job-seekers' },
  openGraph: {
    title: 'Claude Skills for Job Seekers: Resumes, Cover Letters, and Interview Prep',
    description: 'How to use Claude Skills throughout your job search — tailoring resumes, writing cover letters that get read, researching companies and salary ranges, and preparing for interviews.',
    url: 'https://www.claudecodehq.com/blog/claude-skills-job-seekers',
    type: 'article',
    publishedTime: '2026-05-19',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Job Seekers: Resumes, Cover Letters, and Interview Prep',
    description: 'Six Claude Skills that cover every stage of the job search — from resume tailoring to salary negotiation. No technical background needed.',
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

export default function ClaudeSkillsJobSeekersPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Job Seekers: Resumes, Cover Letters, and Interview Prep"
      description="How to use Claude Skills throughout your job search — tailoring resumes, writing cover letters that get read, researching companies and salary ranges, and preparing for interviews. No coding required."
      category="guide"
      difficulty="basic"
      readingTime="13 min read"
      createdAt="2026-05-19"
      tags={['claude skills job search', 'claude resume help', 'claude cover letter', 'job search AI', 'interview prep AI', 'Claude Code', 'career tools']}
      author="Claude Code Playbooks"
      slug="claude-skills-job-seekers"
    >
      <p className="text-lg">
        Job searching is a full-time job — the cliché exists because it&apos;s accurate. Each
        application demands a tailored resume, a custom cover letter, company research, salary
        benchmarking, and interview preparation. Multiply that by twenty or thirty applications and
        the repetitive work alone becomes overwhelming.
      </p>
      <p>
        The frustrating part is that most of the work is the same every time. The research follows
        the same pattern. The cover letter hits the same beats. The interview questions are largely
        predictable. You&apos;re not doing creative work — you&apos;re doing high-stakes
        documentation that just happens to feel personal.
      </p>
      <p>
        Claude Skills are well-matched to exactly this kind of problem. A skill that knows your
        background, your target role, your experience level, and your preferred voice can handle
        the repetitive layer of every application — so you spend your energy on the parts that
        actually require human judgment: the conversations, the relationships, the decisions.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        How to Set Up Your Job Search Folder
      </h2>
      <p>
        Before getting into the individual skills, the most effective setup is a dedicated job
        search folder with a master CLAUDE.md that holds your core context — background, target
        role, constraints — so every session starts from a complete picture rather than a blank
        slate.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Your master job search CLAUDE.md</p>
        <pre className="text-sm font-mono text-[#e6edf3] whitespace-pre-wrap leading-relaxed">{`# Job Search Context

## Background
[Your current or most recent role, industry, years of experience]

## Target Roles
[Job title(s) you're applying for, seniority level]

## Key Strengths
[3-5 accomplishments with numbers — results you've produced]

## Hard Constraints
[Location, remote/hybrid requirement, min salary, industries to avoid]

## Voice & Style
[How you write — formal/conversational, concise/detailed]

## Current Resume
[Paste your base resume text here]`}</pre>
      </div>
      <p>
        Every skill in this guide builds on this foundation. The more specific your context block,
        the less editing every output needs. A resume tailored by a skill that knows your
        background is substantially better than one produced by asking a general AI from scratch.
      </p>
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-6">
        <p className="text-sm font-semibold text-foreground mb-2">Per-application sub-folders</p>
        <p className="text-sm text-muted-foreground">
          For each company you seriously pursue, create a sub-folder (e.g.{' '}
          <code className="text-[#22d3ee] text-xs bg-[#0d1117] px-1.5 py-0.5 rounded">job-search/acme-corp/</code>)
          and paste the job description and any research notes into a text file there. Skills that
          read local files can then work with both your master context and the company-specific
          material simultaneously.
        </p>
      </div>

      {/* ── Skill 1: Resume ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        1. Resume Tailoring — match every application without rewriting from scratch
      </h2>
      <p>
        Sending the same resume to every job is a fast path to silence. ATS systems filter for
        keyword matches before a human ever sees your application, and recruiters who do read resumes
        spend seven seconds on average deciding whether to continue. Generic resumes fail both tests.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/resume-tailor">Resume Tailor</PlaybookLink> skill solves
        this by taking your base resume and a specific job description and producing a tailored
        version — reordered and reworded to surface the experience most relevant to this role,
        with the exact keywords from the posting woven in naturally.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompt</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          &quot;Here&apos;s the job description: [paste JD]. Tailor my resume for this role — surface
          the most relevant experience, match the keywords they&apos;re using, and reorder bullet
          points to lead with what they care about most. Keep everything factually accurate.&quot;
        </p>
      </div>
      <p>
        The key instruction in that prompt — &quot;keep everything factually accurate&quot; — is
        worth including explicitly. You want the skill to reframe and emphasize, not invent. Claude
        will honor this constraint reliably when it&apos;s stated clearly.
      </p>
      <p>
        Expect to spend about five minutes editing the output. The skill handles the heavy lifting;
        you make the judgment calls about what actually sounds like you.
      </p>

      {/* ── Skill 2: Cover Letter ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        2. Cover Letter Writing — say something specific, not something polished
      </h2>
      <p>
        The worst cover letters are polished but generic. They hit the expected beats —
        &quot;I&apos;m excited about this opportunity,&quot; a paragraph about experience, a closing
        paragraph — but say nothing that couldn&apos;t appear on any other application. Hiring
        managers read them in two seconds and move on.
      </p>
      <p>
        The best cover letters are specific: they name something real about the company or role,
        connect it directly to something real in the applicant&apos;s background, and make a
        concrete case for fit. They read like they were written by a person who did their homework,
        not by someone filling in a template.
      </p>
      <p>
        There are two dedicated cover letter skills on the site, each with a slightly different
        strength:
      </p>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            <PlaybookLink href="/playbooks/cover-letter-generator">Cover Letter Generator</PlaybookLink>
          </p>
          <p className="text-sm text-muted-foreground">
            Full cover letter from a job description and your background. Produces a complete,
            send-ready draft that opens with a specific hook, builds a focused case for fit, and
            closes with a clear call to action. Best when you want a complete first draft quickly.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            <PlaybookLink href="/playbooks/cover-letter">Cover Letter</PlaybookLink>
          </p>
          <p className="text-sm text-muted-foreground">
            More iterative — works through the letter section by section and asks clarifying
            questions about which aspects of your background to emphasize. Best when you want
            more control over the direction and are willing to spend a few extra minutes.
          </p>
        </div>
      </div>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompt (Cover Letter Generator)</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          &quot;Write a cover letter for this role: [paste JD]. Open with something specific about
          what this company is working on — not a generic statement about being excited. Connect
          my background to their actual problem. Keep it under 300 words.&quot;
        </p>
      </div>
      <p>
        The &quot;under 300 words&quot; constraint matters. Shorter cover letters get read.
        Longer ones get skimmed or ignored. If you can&apos;t make your case in 250–300 words,
        the case probably isn&apos;t clear enough yet.
      </p>

      {/* ── Skill 3: ATS / Applicant Screening ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        3. Applicant Screening — see your application the way the ATS does
      </h2>
      <p>
        Most job seekers optimize their resumes for human readers without thinking about the
        automated screening layer. At companies that receive hundreds of applications, ATS software
        filters candidates before a human ever reviews them — matching against required skills,
        keywords, and experience levels defined in the job description.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/applicant-screening">Applicant Screening</PlaybookLink>{' '}
        skill flips the perspective. Instead of helping you write your application, it evaluates
        your application the way a screener would — identifying where you match the stated
        requirements, where you have gaps, and what keywords are present or absent. It tells you
        whether you&apos;d make it past the first filter before you submit.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompt</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          &quot;Act as an ATS and recruiter screening this application. Here&apos;s the job
          description: [paste JD]. Here&apos;s my resume: [paste resume]. Score my match,
          identify missing keywords, flag any gaps in requirements, and tell me what
          I should fix before submitting.&quot;
        </p>
      </div>
      <p>
        Use this skill <em>after</em> tailoring your resume with Resume Tailor — it&apos;s the
        QA step before you hit submit. Run it on every application where you&apos;re not obviously
        qualified on paper. The ten minutes it takes can be the difference between getting
        screened out and getting a call.
      </p>

      {/* ── Skill 4: Company Research ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        4. Background Research — know the company before anyone else does
      </h2>
      <p>
        Arriving at an interview without company research is a disqualifying signal. It tells the
        interviewer you didn&apos;t care enough to spend an hour learning about them. But company
        research done well — understanding the business model, recent news, competitive position,
        and what the interviewer&apos;s team is actually working on — takes more than casual
        Googling.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/background-research">Background Research</PlaybookLink>{' '}
        skill structures this work. Give it everything you&apos;ve gathered — the company website,
        recent news articles, the job description, the interviewer&apos;s LinkedIn profile — and
        it synthesizes a focused brief: what the company does and how it makes money, recent
        developments worth knowing, the team&apos;s likely priorities, and specific questions
        you should ask.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompt</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          &quot;I have an interview at [Company] for a [Role] role on [Date]. Here&apos;s what
          I&apos;ve found: [paste research]. Produce a pre-interview brief — business model,
          recent news I should reference, what the [team/department] is likely focused on,
          and 5 smart questions I should ask my interviewer.&quot;
        </p>
      </div>
      <p>
        The five questions at the end of an interview aren&apos;t just courtesy — they&apos;re
        part of the evaluation. Questions that demonstrate you understand the company&apos;s
        actual situation (not just the surface-level pitch) tell interviewers you do your
        homework. This skill produces exactly those questions.
      </p>

      {/* ── Skill 5: Compensation ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        5. Compensation Benchmarker — know your number before they ask
      </h2>
      <p>
        &quot;What are your salary expectations?&quot; is one of the most consequential questions
        in the job search process, and most candidates answer it with insufficient information.
        They either anchor too low (leaving money on the table) or too high (pricing themselves
        out before demonstrating value).
      </p>
      <p>
        The <PlaybookLink href="/playbooks/compensation-benchmarker">Compensation Benchmarker</PlaybookLink>{' '}
        skill takes your role, level, location, industry, and years of experience and produces a
        structured salary analysis — market range for the role, total compensation breakdown
        (base, bonus, equity norms), how your specific profile maps to the range, and a
        recommended ask based on where you sit.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompt</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          &quot;Benchmark compensation for a [Job Title] with [X years] experience in [city/remote],
          [industry]. I have [specific skills/credentials]. What&apos;s the realistic range,
          what&apos;s a strong ask, and what comp components should I be negotiating beyond base?&quot;
        </p>
      </div>
      <p>
        Run this skill before your first conversation with a recruiter — not after. Once you
        anchor to a number, it&apos;s hard to reset. Knowing your market value beforehand also
        changes how you carry yourself in early conversations: you&apos;re evaluating the offer,
        not hoping to be chosen.
      </p>

      {/* ── Skill 6: Interview Prep ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        6. Interview Prep — practice the real questions, not generic ones
      </h2>
      <p>
        Generic interview prep — &quot;tell me about yourself,&quot; &quot;what&apos;s your
        greatest weakness&quot; — produces generic answers. Interviewers hear them dozens of
        times a week and they register as exactly what they are: rehearsed responses to expected
        questions.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/interview-prep">Interview Prep</PlaybookLink> skill takes
        the job description and your background and generates the specific questions this role is
        likely to ask — behavioral questions tailored to the stated responsibilities, technical
        questions matched to the required skills, and culture-fit questions aligned with the
        company&apos;s evident values. Then it helps you build STAR-format answers from your
        actual experience rather than generic templates.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompts</p>
        <div className="space-y-2">
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Generate the 10 most likely interview questions for a [Role] at [Company type],
            based on this JD: [paste JD]. For each question, tell me what the interviewer is
            really trying to assess.&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Help me build a STAR answer for this question: [paste question]. My relevant
            experience: [describe situation]. Push back if my answer is vague or if I&apos;m
            not being specific enough about results.&quot;
          </p>
        </div>
      </div>
      <p>
        The second prompt — &quot;push back if I&apos;m not being specific enough&quot; — is the
        important one. The most common interview answer failure is vagueness: &quot;I improved
        team communication&quot; instead of &quot;I introduced a weekly async update that reduced
        meeting time by 40%.&quot; A skill with that instruction will drill you until your answers
        have real numbers.
      </p>

      {/* ── The full sequence ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Full Application Sequence
      </h2>
      <p>
        Used together, these skills cover every stage of the application process in a logical order:
      </p>
      <div className="space-y-3 my-6">
        {[
          { step: '1', label: 'Find a role', action: 'Save the job description to your application folder' },
          { step: '2', label: 'Resume Tailor', action: 'Tailor your base resume to this specific JD — keywords, reordering, emphasis' },
          { step: '3', label: 'Applicant Screening', action: 'QA the tailored resume against ATS criteria before submitting' },
          { step: '4', label: 'Cover Letter Generator', action: 'Write a specific, under-300-word cover letter that opens with a real hook' },
          { step: '5', label: 'Background Research', action: 'Build your company brief — business model, recent news, smart questions' },
          { step: '6', label: 'Compensation Benchmarker', action: 'Know your number before the recruiter screen' },
          { step: '7', label: 'Interview Prep', action: 'Practice the real questions with STAR answers that have actual numbers' },
        ].map(({ step, label, action }) => (
          <div key={step} className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/30 flex items-center justify-center text-[#22d3ee] text-xs font-semibold">
              {step}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{label}</p>
              <p className="text-sm text-muted-foreground">{action}</p>
            </div>
          </div>
        ))}
      </div>
      <p>
        The whole sequence takes 60–90 minutes per serious application — compared to 3–4 hours
        doing it manually. More importantly, the quality at each stage is higher because you
        have a tool doing the structured work while you focus on the substance.
      </p>

      {/* ── Common questions ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Common Questions From Job Seekers
      </h2>
      <div className="space-y-4 my-4">
        <div>
          <p className="font-semibold text-foreground mb-1">
            &quot;Will a cover letter written with AI be obvious to recruiters?&quot;
          </p>
          <p className="text-sm text-muted-foreground">
            Only if you use it without editing. The skill produces a draft — the specificity and
            voice come from the context you provide and the edits you make afterward. A cover
            letter that mentions a real company initiative and connects it to a real story from
            your background reads like a human wrote it, because a human (you) did the substantive
            work. The skill structured it.
          </p>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-1">
            &quot;Do I need technical skills to use these?&quot;
          </p>
          <p className="text-sm text-muted-foreground">
            No. You create a folder, download a CLAUDE.md file from the playbook page, open Claude
            Code in that folder, and type your request. The hardest part is having your base resume
            and target job description ready to paste in — which you already have.
          </p>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-1">
            &quot;Can I use these if I&apos;m changing careers, not just industries?&quot;
          </p>
          <p className="text-sm text-muted-foreground">
            Yes — and career changers arguably benefit more than lateral movers. The resume
            tailoring and cover letter skills are specifically good at identifying transferable
            skills and reframing experience in the language of a new field. The key is being
            honest in your master context about both where you&apos;re coming from and where
            you&apos;re trying to go.
          </p>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-1">
            &quot;How much editing does the output need?&quot;
          </p>
          <p className="text-sm text-muted-foreground">
            For most people: 10–20 minutes per document. You&apos;ll find phrases that don&apos;t
            quite sound like you, facts that need slight adjustment for accuracy, and tone choices
            you want to nudge. That&apos;s normal and expected. The skill saves you from the blank
            page problem and the structural thinking — you edit, you don&apos;t rewrite.
          </p>
        </div>
      </div>

      {/* ── CTA grid ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Six Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/resume-tailor"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Resume Tailor</p>
          <p className="text-sm text-muted-foreground">Match your resume to each job description — keywords, ordering, and emphasis — without rewriting from scratch every time.</p>
        </Link>
        <Link
          href="/playbooks/cover-letter-generator"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Cover Letter Generator</p>
          <p className="text-sm text-muted-foreground">A specific, under-300-word cover letter with a real hook — not a polished-but-generic template filler.</p>
        </Link>
        <Link
          href="/playbooks/applicant-screening"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Applicant Screening</p>
          <p className="text-sm text-muted-foreground">See your application the way an ATS and recruiter would — keyword gaps, requirement matches, and what to fix before you submit.</p>
        </Link>
        <Link
          href="/playbooks/background-research"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Background Research</p>
          <p className="text-sm text-muted-foreground">A focused pre-interview company brief — business model, recent news, team priorities, and 5 smart questions to ask.</p>
        </Link>
        <Link
          href="/playbooks/compensation-benchmarker"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Compensation Benchmarker</p>
          <p className="text-sm text-muted-foreground">Know your market range before the recruiter asks — base, bonus, equity, and the specific number to anchor with.</p>
        </Link>
        <Link
          href="/playbooks/interview-prep"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Interview Prep</p>
          <p className="text-sm text-muted-foreground">Practice the real questions for this specific role with STAR answers built from your actual experience — not generic rehearsed lines.</p>
        </Link>
      </div>
      <p>
        The job search is hard enough without spending four hours manually customizing every
        application. These skills handle the structural, repetitive work — so the time you do
        spend is on the conversations that actually move things forward.
      </p>
    </BlogPostLayout>
  );
}
