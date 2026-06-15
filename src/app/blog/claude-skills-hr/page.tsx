import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for HR Managers: Automate Onboarding, Reviews, and Policies | Claude Code Playbooks Blog',
  description: "How HR managers use four Claude Skills to handle the three most document-heavy processes in people ops — structured onboarding programs with day-by-day schedules and 30/60/90 milestones, balanced performance reviews with specific examples and growth plans, employee handbook updates that stay compliant with current language, and full HR workflow automation that replaces tribal knowledge with repeatable processes.",
  alternates: { canonical: '/blog/claude-skills-hr' },
  openGraph: {
    title: 'Claude Skills for HR Managers: Automate Onboarding, Reviews, and Policies',
    description: "How HR managers use four Claude Skills to handle the three most document-heavy processes in people ops — structured onboarding programs with day-by-day schedules and 30/60/90 milestones, balanced performance reviews with specific examples and growth plans, employee handbook updates that stay compliant with current language, and full HR workflow automation that replaces tribal knowledge with repeatable processes.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-hr',
    type: 'article',
    publishedTime: '2026-06-15T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for HR Managers: Automate Onboarding, Reviews, and Policies',
    description: "Four Claude Skills for HR — onboarding programs, performance reviews, handbook updates, and workflow automation — so HR managers spend less time on documents and more time on people.",
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

export default function ClaudeSkillsHRPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for HR Managers: Automate Onboarding, Reviews, and Policies"
      description="How HR managers use four Claude Skills to handle the three most document-heavy processes in people ops — structured onboarding programs with day-by-day schedules and 30/60/90 milestones, balanced performance reviews with specific examples and growth plans, employee handbook updates that stay compliant with current language, and full HR workflow automation that replaces tribal knowledge with repeatable processes."
      category="guide"
      difficulty="intermediate"
      readingTime="14 min read"
      createdAt="2026-06-15"
      tags={['claude skills hr', 'ai hr automation', 'ai performance reviews', 'HR AI', 'onboarding AI', 'employee handbook AI', 'people ops AI', 'Claude Code']}
      author="Claude Code Playbooks"
      slug="claude-skills-hr"
    >
      <p>
        HR managers are asked to do two fundamentally different things simultaneously: build a culture of trust and human connection, and maintain an enormous volume of documentation that underpins every people process in the organization. These two demands are in constant tension — the documentation work (onboarding checklists, performance reviews, policy updates) consumes exactly the time and cognitive bandwidth that should be going toward the human work.
      </p>
      <p className="mt-4">
        The documentation problem compounds in a specific way. Onboarding programs drift because the Google Doc nobody owns gets out of date. Performance reviews go generic because managers write eight blank evaluations the week they are due and default to vague praise. The employee handbook still references the 2022 PTO policy and the office that closed last year because handbook updates feel urgent only the week a new hire asks why the policy they received doesn't match what they were told in the interview. And the underlying workflows — account provisioning, buddy assignment, orientation scheduling — run on tribal knowledge rather than repeatable process.
      </p>
      <p className="mt-4">
        Claude Skills handles the documentation layer. A Skill is a persistent Claude configuration installed once and available instantly. The four Skills below cover the three highest-volume HR documentation processes and the automation layer that can run them without manual intervention. HR managers keep ownership of the human decisions — who to hire, how to develop someone, what culture to build — while the paperwork gets handled.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Documentation Tax on People Work
      </h2>
      <p>
        Every HR process that matters to employees — joining the company, getting feedback on their performance, understanding their rights and benefits — is mediated by documentation. When that documentation is good, employees feel supported and the company runs smoothly. When it is bad, the damage compounds: a disorganized first week drives early attrition, a vague performance review fails to develop the employee and creates legal exposure if the relationship later deteriorates, an outdated handbook creates compliance risk the company does not know it is carrying.
      </p>
      <p className="mt-4">
        The paradox is that producing good HR documentation requires sustained attention at exactly the moments when HR managers are busiest. Onboarding documentation needs to be prepared before a new hire's first day — which is also when the offer was just accepted and multiple stakeholders are asking for status updates. Performance review season requires thoughtful, specific feedback for every direct report — which is also when the quarter is closing and headcount planning is underway. The handbook needs updating whenever a policy changes — which is also when the policy change itself required weeks of deliberation and approval.
      </p>
      <p className="mt-4">
        The Skills below compress the documentation work so the attention it requires does not crowd out the relationship work it is supposed to support.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Onboarding Documentation — A First Week That Actually Works
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/recipe-onboarding-checklist">Onboarding Documentation &amp; Checklists</PlaybookLink> Skill builds a complete onboarding program: pre-start checklist covering IT, access, and equipment; a day-by-day schedule for weeks one through four; a role-specific technical setup guide; a 30/60/90-day milestone framework; buddy program guidelines; and manager check-in templates.
      </p>
      <p className="mt-4">
        The failure mode it addresses: a new hire's first week is a mess of forgotten laptop requests, missing access permissions, and "ask Sarah — she knows how that works." Bad onboarding doubles ramp time and drives early attrition. The cost of losing someone in the first ninety days — recruiting fees, manager time, lost productivity, the impact on team morale — easily exceeds six months of that employee's salary. The root cause is almost always a lack of structure, not a lack of goodwill.
      </p>
      <p className="mt-4">
        The Skill produces an onboarding kit that can be reused for every new hire in a given role, customized to the specific person's start date and team context. The day-by-day schedule ensures that week one is planned before it starts, not improvised as it unfolds. The 30/60/90 milestone framework gives both the new hire and their manager a shared definition of what success looks like — which means the 90-day conversation is a progress review, not a surprise.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Build an onboarding program for a new Senior Product Manager joining our 80-person SaaS company on July 7th. She will report to the VP Product, own the growth product line, and work closely with engineering leads across two teams. We use Notion, Linear, Figma, and Slack. Pre-start checklist for IT and access, day-by-day schedule for weeks 1–4, a 30/60/90 milestone framework with specific success criteria, buddy program guidelines, and manager check-in templates for weeks 1, 4, and 12.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">New hire shows up on day one, laptop isn't ready, Notion access is pending, nobody told engineering she was starting. The first week is improvised. By day 30 she has not met two of her key stakeholders. Early attrition risk is already elevated.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Pre-start checklist sent two weeks before day one. Day-by-day schedule through week four. 30/60/90 milestones agreed with the manager before the start date. Buddy assigned. Check-in templates ready. The first week runs off a plan, not tribal knowledge.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes. Works for any role and team size. Reuse the same program structure across hires in the same role — customize the role-specific sections rather than rebuilding from scratch each time.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Performance Review Writer — Specific Feedback Without the Blank-Page Paralysis
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/recipe-performance-review-writer">Performance Review Writer</PlaybookLink> generates thorough, balanced performance reviews with specific accomplishments and metrics, rating justifications aligned to rubric, strength areas with examples, development areas with actionable suggestions, and a 90-day growth plan.
      </p>
      <p className="mt-4">
        Review season creates a specific failure mode: managers write eight blank reviews the week they are due. The reviews that emerge are either generically positive ("great team player, strong communicator") or vague about development areas in ways that provide no actual guidance. Both outcomes fail the employee — the generic praise does not help them understand what to keep doing, and the vague development feedback does not tell them what to change.
      </p>
      <p className="mt-4">
        The Skill requires the manager to provide specific input — the accomplishments they observed, the behaviors they want to reinforce, the gaps they have seen. It then structures that input into a review that meets the formal requirements of a performance document: specific, measurable language; examples tied to outcomes; rating justification that would hold up in a calibration conversation; development recommendations with clear next actions. The manager's judgment stays central — the Skill structures it, not replaces it.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Write a performance review for Marcus, a senior software engineer. Strengths: delivered the payments API refactor three weeks ahead of schedule with zero production incidents, consistently unblocks junior engineers without being asked, excellent written technical documentation. Development area: communication in cross-functional meetings — tends to go quiet when non-engineers are present, misses opportunities to advocate for technical constraints early. Rating: Exceeds expectations on delivery, meets expectations on collaboration. Include a 90-day growth plan focused on the communication gap.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Manager writes eight reviews in two days, all starting to blur together. Marcus gets "strong technical skills, great team player" with a vague note about "improving stakeholder communication." He leaves the review unsure what to actually change or how.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Balanced review with specific accomplishments tied to outcomes, rating justification for both dimensions, strength areas with examples, communication development area with concrete next actions, and a 90-day growth plan Marcus can act on from day one.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Works for annual reviews, quarterly check-ins, and mid-cycle feedback. The more specific the input you provide, the more specific the output — garbage-in-garbage-out applies, but the Skill structures and elevates whatever concrete observations the manager brings.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Employee Handbook Updater — Compliance-Aligned Policies in Plain Language
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/recipe-employee-handbook-updater">Employee Handbook &amp; Policy Updates</PlaybookLink> Skill drafts and updates handbook sections and HR policies with consistent formatting, plain language, compliance notes for relevant state laws, and a change log documenting what was updated and why.
      </p>
      <p className="mt-4">
        Handbook neglect has a predictable pattern: a company launches with a handbook assembled from templates, updates the PTO policy in 2023, adds a remote work section in 2024, but never updates the rest of the document to reflect the changes. The handbook now contains internally contradictory information. The dress code section still describes the pre-pandemic office. The section on office hours predates the shift to flexible scheduling. New hires read it and ask questions because the document does not match what they were told in the interview.
      </p>
      <p className="mt-4">
        The legal exposure is the less visible problem. Employment law changes at the state level faster than most HR teams can track — leave requirements, pay transparency obligations, non-compete enforceability — and an outdated handbook can inadvertently make promises the company does not keep or fail to make disclosures the company is legally required to provide.
      </p>
      <p className="mt-4">
        The Skill updates individual handbook sections without requiring a full document rewrite. It matches the formatting and tone of existing sections, flags relevant state law compliance considerations, writes in employee-friendly plain language, and produces a change log so the next update can start from a clear record of what was last changed and when.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Update our employee handbook with three policy changes: (1) PTO policy changed from accrual-based to unlimited, with a minimum of 10 days encouraged; (2) remote work policy updated to allow fully remote for all roles except those requiring physical presence; (3) parental leave expanded from 8 weeks to 16 weeks for primary caregivers and 4 weeks for secondary caregivers. We operate in California, New York, and Texas. Match the formatting of the existing sections I will paste below. Include a change log and flag any state-law considerations for each policy.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Three policy changes approved, three Slack messages sent, nobody updated the handbook. Six months later a new hire asks a question, HR checks the handbook, finds it still says the old policy. A California employee files an inquiry because the unlimited PTO policy wasn't documented correctly under CA law.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Three updated handbook sections in consistent formatting, plain-language policy explanations, California and New York compliance flags for the PTO and parental leave changes, and a change log documenting version, date, and nature of each update — ready for legal review before publishing.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Update individual sections without touching the rest of the document. The compliance flag output is not legal advice — it identifies areas to review with counsel, not a substitute for it.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: HR Process Automation — Replace Tribal Knowledge with Repeatable Workflows
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/hr-automation">HR Process Automation</PlaybookLink> Skill designs and implements full HR workflow automation: new hire account creation across all tools, welcome email sequences, onboarding buddy assignment, orientation meeting scheduling, offboarding access revocation, and pipeline tracking — replacing the 47-step Google Doc with a workflow that runs automatically.
      </p>
      <p className="mt-4">
        This Skill addresses the layer beneath the documentation: the manual work that executes the documentation. An onboarding checklist is only as good as the process that ensures each item gets done. If account provisioning requires a Slack message to IT, a separate request to the engineering manager, and a reminder email three days later because nobody saw the first message, the onboarding program is still running on tribal knowledge — just tribal knowledge with a nicer document attached.
      </p>
      <p className="mt-4">
        The Skill designs workflow automation using tools like n8n that trigger on events: a new hire record created, an offboarding ticket opened, a role change approved. The workflow creates accounts across every tool the employee needs, sends the welcome email sequence, assigns the onboarding buddy, schedules the orientation meetings, and tracks completion — without manual coordination at each step. Offboarding revokes access automatically, eliminating the security risk of access that persists after departure.
      </p>
      <p className="mt-4">
        This Skill is more technical than the other three — it requires working with workflow automation tools. For HR teams that have never automated a process before, starting with the documentation Skills above and moving to automation once the processes are well-defined is the recommended path.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Design an automated employee onboarding workflow for our company. Tools we use: Google Workspace for email and calendar, Notion for documentation, GitHub for engineering, Figma for design, Slack for communication, Rippling for HRIS. When a new hire record is created in Rippling: create Google Workspace account, add to relevant Slack channels based on department, provision Notion access, add to GitHub org if engineering hire, send welcome email with first-day logistics, assign onboarding buddy from the same team, and schedule a kickoff meeting with their manager for day one. Track completion status for each step.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">IT provisioning is a Slack thread. The buddy assignment is a calendar invite that sometimes gets missed. The welcome email is sent manually. Engineering hires miss GitHub access half the time until they ask. Every onboarding is slightly different based on who handled it.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">New hire record created in Rippling triggers the full workflow automatically: accounts provisioned across all tools, Slack channels joined, welcome email sent, buddy assigned, day-one kickoff scheduled, completion tracked. Every onboarding is identical.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes to design the workflow with the Skill; implementation time varies by tool stack and automation platform. Works for onboarding, offboarding, role changes, and any other event-driven HR process.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The HR System: Documentation That Stays Current
      </h2>
      <p>
        The four Skills form a complete people-ops documentation system. The Onboarding Checklist defines what a great first week looks like for each role. The HR Process Automation Skill runs that program without manual coordination at every step. The Performance Review Writer ensures that the feedback employees receive at review time is specific and actionable rather than generic. The Handbook Updater keeps the policy foundation current with every change, in a format that employees can read and that holds up to compliance scrutiny.
      </p>
      <p className="mt-4">
        What the system replaces is not HR judgment — it is HR overhead. The decision about what a good onboarding program should include, what feedback is honest and constructive, what policies are appropriate for the company's culture and legal obligations — those stay with the HR manager. What gets automated is the blank-page problem: the paralysis of building from scratch under time pressure, the inconsistency of tribal knowledge, the documentation drift that makes every HR document gradually less accurate over time.
      </p>
      <p className="mt-4">
        HR managers who use these Skills report the same shift: they spend less time staring at blank documents and more time in the conversations that actually require their expertise — the new hire who is struggling in week three, the manager who needs coaching on how to deliver difficult feedback, the policy question that requires judgment rather than documentation. The documentation layer runs. The people layer gets the attention it deserves.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Get the HR Skills
      </h2>
      <p className="mb-6">
        Each Skill is a one-time install. Open it, follow the setup steps, and it is available in Claude every time you need it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/recipe-onboarding-checklist"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Onboarding Documentation &amp; Checklists</p>
          <p className="text-sm text-muted-foreground">Pre-start checklist, day-by-day schedule for weeks 1–4, 30/60/90 milestones, buddy program guidelines, and manager check-in templates — a complete onboarding program before day one.</p>
        </Link>
        <Link
          href="/playbooks/recipe-performance-review-writer"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Performance Review Writer</p>
          <p className="text-sm text-muted-foreground">Specific, balanced reviews with accomplishments tied to outcomes, rating justifications, strength and development areas with examples, and a 90-day growth plan — from the manager's observations, not a template.</p>
        </Link>
        <Link
          href="/playbooks/recipe-employee-handbook-updater"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Employee Handbook &amp; Policy Updates</p>
          <p className="text-sm text-muted-foreground">Updated handbook sections in consistent formatting, plain-language policy explanations, state-law compliance flags, and a change log — so the handbook reflects current policy, not 2022 policy.</p>
        </Link>
        <Link
          href="/playbooks/hr-automation"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">HR Process Automation</p>
          <p className="text-sm text-muted-foreground">Automated onboarding and offboarding workflows — account provisioning, welcome emails, buddy assignment, orientation scheduling, and access revocation — running without manual coordination at every step.</p>
        </Link>
      </div>
    </BlogPostLayout>
  );
}
