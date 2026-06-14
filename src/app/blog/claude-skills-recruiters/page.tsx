import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Recruiters: Screen, Source, and Schedule with AI | Claude Code Playbooks Blog',
  description: "How recruiters use four Claude Skills to run a faster, more consistent hiring process — ranked shortlists from 200 resumes with match scores and red flags, job descriptions that actually attract top candidates, a pipeline tracker with stage conversion rates and stalled-candidate alerts, and compensation benchmarks that replace gut-feel counteroffers with market data.",
  alternates: { canonical: '/blog/claude-skills-recruiters' },
  openGraph: {
    title: 'Claude Skills for Recruiters: Screen, Source, and Schedule with AI',
    description: "How recruiters use four Claude Skills to run a faster, more consistent hiring process — ranked shortlists from 200 resumes with match scores and red flags, job descriptions that actually attract top candidates, a pipeline tracker with stage conversion rates and stalled-candidate alerts, and compensation benchmarks that replace gut-feel counteroffers with market data.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-recruiters',
    type: 'article',
    publishedTime: '2026-06-14T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Recruiters: Screen, Source, and Schedule with AI',
    description: "Four Claude Skills for recruiters — applicant screening, job descriptions, pipeline tracking, and comp benchmarking — so the repetitive work gets handled and the best candidates don't slip through.",
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

export default function ClaudeSkillsRecruitersPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Recruiters: Screen, Source, and Schedule with AI"
      description="How recruiters use four Claude Skills to run a faster, more consistent hiring process — ranked shortlists from 200 resumes with match scores and red flags, job descriptions that actually attract top candidates, a pipeline tracker with stage conversion rates and stalled-candidate alerts, and compensation benchmarks that replace gut-feel counteroffers with market data."
      category="guide"
      difficulty="intermediate"
      readingTime="13 min read"
      createdAt="2026-06-14"
      tags={['claude skills recruiting', 'ai recruiting automation', 'ai candidate screening', 'recruiting AI', 'hiring AI', 'talent acquisition AI', 'Claude Code']}
      author="Claude Code Playbooks"
      slug="claude-skills-recruiters"
    >
      <p>
        Recruiting is one of the highest-leverage jobs in any organization — hire the right people and everything else gets easier; hire wrong and problems compound for years. It is also one of the most operationally exhausting: 200 resumes for one role, 15 open requisitions simultaneously, hiring managers asking for pipeline updates daily, and a compensation decision that needs to be made in 24 hours against a competing offer.
      </p>
      <p className="mt-4">
        The structural problem is that the work most likely to lose a great candidate — slow follow-up, a generic job description that doesn't stand out, a screening process that lets good-fit applicants fall through — is the work that feels least urgent when there are 200 resumes in the inbox. Recruiters end up spending their highest-attention hours on screening volume, leaving the strategic work — writing a compelling JD, building a real pipeline view, making a competitive offer — for the end of the day when the bandwidth is gone.
      </p>
      <p className="mt-4">
        Claude Skills inverts that. A Skill is a persistent Claude configuration — system prompt, evaluation criteria, output format — installed once and available instantly. The four Skills below handle the high-volume mechanical layer of recruiting: screening 200 resumes in one session, generating a JD that actually differentiates the role, tracking pipeline health across all open roles, and benchmarking comp against real market data. The recruiter's attention goes to the work that requires human judgment: relationships, culture reads, negotiation.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Why Recruiting Gets Stuck in the Volume Trap
      </h2>
      <p>
        The recruiting volume trap works like this: a role opens, applications arrive, the recruiter starts screening manually. By resume fifty, standards are drifting — not intentionally, but because humans cannot maintain consistent evaluation criteria across 200 documents. By resume one hundred, the recruiter is pattern-matching on surface signals (school name, company brand) rather than actual job-fit indicators. The shortlist that emerges is not the most qualified fifteen candidates — it is the fifteen who happened to appear when the recruiter was paying attention.
      </p>
      <p className="mt-4">
        Meanwhile, the job description that drove those 200 applications was written in two hours from a template. It reads like every other posting on LinkedIn. The candidates who would have been the best fit saw nothing distinctive about the role and applied to three other companies that week. The pipeline tracker is a spreadsheet with color-coded cells that nobody updates consistently, so the hiring manager's weekly "where are we on this?" question cannot be answered without fifteen minutes of manual reconciliation.
      </p>
      <p className="mt-4">
        And when the finalist candidate comes back with a competing offer, the recruiter makes a counteroffer based on what the budget allows plus a rough sense of market rates — not a benchmarked analysis of where the candidate's comp would land against the 50th percentile for that role in that market.
      </p>
      <p className="mt-4">
        Every one of these failure modes is a mechanical problem, not a judgment problem. Claude Skills handles the mechanical layer.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Applicant Screening — Ranked Shortlist from 200 Resumes
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/applicant-screening">Applicant Screening Assistant</PlaybookLink> scores job applications against your specific requirements, assigns match percentages, flags red flags, and produces a ranked shortlist of your top candidates with interview talking points for each.
      </p>
      <p className="mt-4">
        The key difference from manual screening: the criteria stay consistent from candidate 1 to candidate 200. The Skill evaluates every application against the same requirements in the same order with the same weighting — no fatigue, no pattern-matching drift, no unconscious preference for familiar brand names. A strong candidate who applied on day three does not get screened differently than an identical candidate who applied on day one.
      </p>
      <p className="mt-4">
        The output is not a simple pass/fail — it is a scored shortlist with the reasoning visible: which requirements each candidate meets, which they fall short on, and what an interviewer should probe in a first-round conversation. The hiring manager gets a top fifteen with context, not a stack of resumes with a sticky note.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Screen these 150 applications for our Senior React Developer role. Must-haves: 5+ years React, TypeScript, experience with a production codebase over 100k LOC. Nice-to-haves: GraphQL, AWS, prior startup experience. Hard disqualifiers: no professional React experience, only bootcamp projects. Score each candidate 0–100 against these criteria, flag any red flags in the application, and give me a ranked top 15 with one-line interview talking points per candidate.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Three days reading 150 resumes manually. By resume 60 the standards are drifting. The shortlist reflects who caught the recruiter's eye, not who best fits the role. Two strong candidates applied on day three and never got a close read.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Every candidate scored consistently against the same criteria. Ranked top 15 with match percentages, red flags flagged, hard disqualifiers automatically removed. Interview talking points ready for the hiring manager briefing — in one session.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Works for any role and volume. The more specific the requirements you provide, the more precise the shortlist.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Job Description Generator — JDs That Actually Attract Top Candidates
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/job-description-generator">Job Description Generator</PlaybookLink> produces a compelling job description, structured interview rubric with scoring criteria, hiring timeline, and evaluation scorecard — a complete hiring package designed to attract strong candidates, not just collect applications.
      </p>
      <p className="mt-4">
        The problem with most job descriptions is not that they contain wrong information — it is that they contain the same information as every other posting for the role. A Senior Product Manager JD that lists "cross-functional collaboration," "data-driven decision making," and "5+ years of experience" looks identical to 200 other Senior PM postings. The candidates who would be a great fit see nothing to distinguish it and apply to the three postings that communicated something specific about the role, the team, and the growth path.
      </p>
      <p className="mt-4">
        The Skill asks for context that forces differentiation: what makes this role different from the equivalent role at a competitor, what the first 90 days actually look like, what the growth trajectory is, what kind of person has thrived in this team. The output uses that context to write a JD that communicates the genuine opportunity, not just the requirements.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Create a complete hiring package for a Senior Product Manager, Payments. Context: we are a Series B fintech, 120 people, the payments product is our core revenue driver and this PM will own the full roadmap. The previous PM left to join a later-stage company — we need someone who wants to build, not manage. The growth path is VP Product within 18 months if the roadmap executes. Include a compelling JD, a structured interview rubric with scoring criteria, and a 6-week hiring timeline.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Generic JD assembled from a template in two hours. Posted to LinkedIn, gets 200 applications, 160 of which don't meet basic requirements. The three candidates who would have been perfect fits saw nothing to make the role stand out and didn't apply.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Differentiated JD that communicates the genuine opportunity, VP growth path, and what success looks like in 90 days. Interview rubric with scoring criteria. 6-week hiring timeline. The complete hiring package ready to share with the hiring manager before posting.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes. Works for any role, level, or function. The more context you provide about what makes the role genuinely interesting, the more the output differentiates it.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Recruiting Pipeline Tracker — Visibility Across All Open Roles
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/recruiting-pipeline-tracker">Recruiting Pipeline Tracker</PlaybookLink> tracks candidate status across all open roles with stage-by-stage conversion rates, time-in-stage alerts for stalled candidates, hiring manager dashboards, weekly pipeline health reports, and sourcing channel effectiveness analysis.
      </p>
      <p className="mt-4">
        The failure mode the Skill addresses: your best candidates ghost you because nobody followed up for five days. Not because the recruiter forgot — because with 15 open roles, a candidate who moved to the offer stage on role twelve is not at the top of anyone's mental model when they are spending Tuesday reviewing applications for role seven. The pipeline tracker surfaces who is stalled, in which stage, for how long.
      </p>
      <p className="mt-4">
        The sourcing channel analysis is equally valuable. If LinkedIn is generating 80% of applications but only 20% of hires, and employee referrals are generating 15% of applications but 40% of hires, that ratio should be driving sourcing investment decisions — but only if someone has done the analysis. The Skill calculates it automatically from pipeline data.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Set up a recruiting pipeline tracker for our 12 open roles. We track five stages: applied, phone screen, hiring manager interview, panel, offer. I need: stage-by-stage conversion rates per role, a flag for any candidate who has been in the same stage for more than 5 business days, a hiring manager summary showing role status and next actions, and a sourcing channel analysis breaking down where our hires are actually coming from versus where our applications are coming from.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Pipeline lives in a spreadsheet nobody updates consistently. Hiring manager asks "where are we on the backend role?" and the answer requires 15 minutes of manual reconciliation. A finalist candidate went dark because the follow-up fell through a gap between recruiter and coordinator.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Stage conversion rates per role, stalled-candidate alerts at 5 days, hiring manager dashboard with role status and next actions, weekly pipeline health report, and sourcing channel effectiveness analysis — all from a single pipeline update session.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Works across any number of open roles and any pipeline stage structure. The stalled-candidate alert is the feature that prevents most candidate ghosting.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Compensation Benchmarker — Market Data Before the Counteroffer Conversation
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/compensation-benchmarker">Compensation Benchmarker</PlaybookLink> produces percentile-based compensation benchmarks (25th–90th) for any role, band placement analysis, equity grant modeling, retention risk flags for underpaid employees, and market adjustment recommendations.
      </p>
      <p className="mt-4">
        The gut-feel comp problem: a finalist candidate comes back with a competing offer. The recruiter checks the internal budget, knows roughly what the market pays from memory, and makes a counteroffer. It lands somewhere defensible. But "defensible" is not the same as competitive — and if the offer is below the 50th percentile for the role in that market, the candidate takes the competing offer and tells their network that your company underpays.
      </p>
      <p className="mt-4">
        The Skill replaces the gut-feel decision with a structured analysis: where does the candidate's current comp and the competing offer land against the 25th, 50th, 75th, and 90th percentile for that role, level, and location. What equity grant would be required to make the total comp competitive at the 65th percentile. Which existing employees in the same band are below the 40th percentile and represent a retention risk that should be addressed before the next annual review.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Benchmark compensation for a Senior Software Engineer, IC4 level, in San Francisco. The candidate is currently at $195k base, $50k equity per year. The competing offer is $230k base, $80k equity, $30k signing. Our internal band for this level is $180k–$220k. I need: where the candidate and the competing offer land against SF market percentiles, what total comp at our 75th percentile looks like, whether a signing bonus can bridge the gap without adjusting base, and retention risk flags for our current IC4s if this band hasn't been refreshed since 2023.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Counteroffer built from budget ceiling plus Glassdoor estimates. The candidate takes the competing offer. Three months later, another senior engineer gets a competing offer in the same band and the same conversation repeats because the band still hasn't been refreshed.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Competing offer placed at the 78th percentile SF market. Counter-strategy: $215k base + $25k signing lands at 70th percentile total comp. IC4 band flagged as below 40th percentile for three existing employees — retention risk memo ready for the next comp review cycle.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Works for individual offer decisions and full-team comp reviews. The retention risk flag is the output most recruiters did not know they needed until they see it.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Recruiting System: From Requisition Open to Offer Accepted
      </h2>
      <p>
        The four Skills form a complete recruiting workflow. A role opens: the Job Description Generator produces a differentiated JD with an interview rubric in one session. Applications arrive: the Applicant Screening Assistant scores the full pool and produces a ranked shortlist in hours, not days. Candidates move through stages: the Pipeline Tracker surfaces stalled candidates before they go dark and gives the hiring manager real-time visibility without a status meeting. A finalist emerges: the Compensation Benchmarker produces the offer strategy before the counteroffer conversation happens, not during it.
      </p>
      <p className="mt-4">
        The consistent thread across all four Skills is that the mechanical work — reading 200 resumes against the same criteria, maintaining a pipeline spreadsheet, Googling salary data — gets handled without consuming recruiter attention. The work that actually requires a recruiter — reading candidates as people, building relationships, reading whether a candidate is genuinely excited or just shopping offers — gets more time and better attention because the operational baseline is already covered.
      </p>
      <p className="mt-4">
        High-volume recruiting organizations see the impact first. A recruiter managing 15 open roles simultaneously is making dozens of small prioritization decisions every day about where to spend the next hour. The Skills ensure that none of those decisions get made poorly because of operational overhead — because the overhead is handled.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Get the Recruiting Skills
      </h2>
      <p className="mb-6">
        Each Skill is a one-time install. Open it, follow the setup steps, and it is available in Claude every time you need it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/applicant-screening"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Applicant Screening Assistant</p>
          <p className="text-sm text-muted-foreground">Score every application consistently against your requirements, flag red flags, and produce a ranked shortlist with interview talking points — no drift from resume 1 to resume 200.</p>
        </Link>
        <Link
          href="/playbooks/job-description-generator"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Job Description Generator</p>
          <p className="text-sm text-muted-foreground">Compelling JD that differentiates the role, structured interview rubric with scoring criteria, hiring timeline, and evaluation scorecard — the complete hiring package before the first post.</p>
        </Link>
        <Link
          href="/playbooks/recruiting-pipeline-tracker"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Recruiting Pipeline Tracker</p>
          <p className="text-sm text-muted-foreground">Stage conversion rates, stalled-candidate alerts, hiring manager dashboards, and sourcing channel analysis — visibility across all open roles without a status meeting.</p>
        </Link>
        <Link
          href="/playbooks/compensation-benchmarker"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Compensation Benchmarker</p>
          <p className="text-sm text-muted-foreground">Percentile-based benchmarks for any role and market, equity grant modeling, offer counter-strategy, and retention risk flags for underpaid employees in existing bands.</p>
        </Link>
      </div>
    </BlogPostLayout>
  );
}
