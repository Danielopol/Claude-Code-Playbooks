import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Cybersecurity Teams: Map Controls and Pass Audits Faster | Claude Code Playbooks Blog',
  description: "How security teams use four Claude Skills to accelerate framework mapping and audit readiness — CIS Controls v8 gap assessments with Implementation Group scoping, NIST CSF 2.0 current-to-target profile building, PCI DSS v4.0.1 CDE scoping with the right SAQ, and FedRAMP SSP/POA&M documentation for cloud providers pursuing federal ATO.",
  alternates: { canonical: '/blog/claude-skills-cybersecurity' },
  openGraph: {
    title: 'Claude Skills for Cybersecurity Teams: Map Controls and Pass Audits Faster',
    description: "How security teams use four Claude Skills to accelerate framework mapping and audit readiness — CIS Controls v8 gap assessments with Implementation Group scoping, NIST CSF 2.0 current-to-target profile building, PCI DSS v4.0.1 CDE scoping with the right SAQ, and FedRAMP SSP/POA&M documentation for cloud providers pursuing federal ATO.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-cybersecurity',
    type: 'article',
    publishedTime: '2026-06-12T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Cybersecurity Teams: Map Controls and Pass Audits Faster',
    description: "Four Claude Skills for security framework mapping — CIS Controls, NIST CSF 2.0, PCI DSS v4, and FedRAMP — so security teams spend less time on documentation and more time on actual security.",
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

export default function ClaudeSkillsCybersecurityPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Cybersecurity Teams: Map Controls and Pass Audits Faster"
      description="How security teams use four Claude Skills to accelerate framework mapping and audit readiness — CIS Controls v8 gap assessments with Implementation Group scoping, NIST CSF 2.0 current-to-target profile building, PCI DSS v4.0.1 CDE scoping with the right SAQ, and FedRAMP SSP/POA&M documentation for cloud providers pursuing federal ATO."
      category="guide"
      difficulty="intermediate"
      readingTime="15 min read"
      createdAt="2026-06-12"
      tags={['claude skills cybersecurity', 'ai security controls', 'ai compliance mapping', 'cybersecurity AI', 'NIST CSF AI', 'CIS Controls AI', 'PCI DSS AI', 'FedRAMP AI', 'Claude Code']}
      author="Claude Code Playbooks"
      slug="claude-skills-cybersecurity"
    >
      <p>
        Security teams are drowning in framework documentation. NIST CSF 2.0, CIS Controls v8, PCI DSS v4.0.1, FedRAMP — each framework runs hundreds of pages of controls, sub-requirements, and implementation guidance, all using different vocabulary for overlapping concepts. A security engineer who needs to map their current posture against two frameworks simultaneously faces weeks of cross-referencing before they can write a single gap report.
      </p>
      <p className="mt-4">
        The problem is not technical complexity. Experienced security teams know what access control means in their environment. What kills their time is the documentation work: scoping Implementation Groups, building current-versus-target profiles, determining which SAQ applies to their cardholder data environment, producing a Statement of Applicability. This is reading and writing work, not security engineering work.
      </p>
      <p className="mt-4">
        Claude Skills handles the reading and writing. A Skill is a persistent Claude configuration — system prompt, context, and framework knowledge — installed once and available instantly. The four Skills below cover the four most common security framework use cases. Security engineers stay focused on the actual risk decisions; the framework navigation and documentation get handled.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Framework Proliferation Problem
      </h2>
      <p>
        Every security team faces the same structural tension: boards and enterprise customers demand proof of a structured security program, but the frameworks that provide that proof were written for regulators, not practitioners. CIS Controls v8 has 18 control families and 153 individual safeguards. NIST CSF 2.0 spans six functions and dozens of subcategories. PCI DSS v4.0.1 has 12 requirements with hundreds of testing procedures. FedRAMP Moderate references 325 NIST SP 800-53 controls.
      </p>
      <p className="mt-4">
        These frameworks overlap significantly — access control, logging, incident response, and vendor risk appear in all of them — but each uses different clause numbering, different terminology, and different evidence requirements. A team pursuing both SOC 2 and ISO 27001 already maintains two parallel control inventories. Add CIS Controls and PCI DSS and the documentation overhead becomes a part-time job.
      </p>
      <p className="mt-4">
        The Skills below do not replace security judgment. They do replace the work of knowing which Implementation Group to scope, how to phrase a current profile, which SAQ type applies to a redirect-only integration, and how to structure an SSP outline. That is the work that eats security engineers' weeks without making the organization any more secure.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: CIS Controls v8 Advisor — Scoped Gap Assessments with Framework Crosswalks
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/cis-controls-advisor">CIS Controls v8 Advisor</PlaybookLink> scopes your Implementation Group (IG1, IG2, or IG3), runs a safeguard-level gap assessment across the CIS Top 18, and maps your controls to NIST CSF, ISO 27001, SOC 2, and CMMC.
      </p>
      <p className="mt-4">
        The scoping step matters more than most teams realize. IG1 covers basic cyber hygiene for organizations of any size — 56 safeguards. IG2 adds controls for organizations managing sensitive data — 74 more. IG3 is the full set for mature programs — 23 additional. Starting with IG3 when IG1 is the right scope wastes months of remediation effort on controls that do not apply to your risk profile.
      </p>
      <p className="mt-4">
        The crosswalk output is equally valuable: if you are already pursuing SOC 2 or ISO 27001, knowing which CIS safeguards you already satisfy through existing controls eliminates redundant work and lets you present a unified security narrative to auditors and enterprise customers.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Scope our CIS Controls v8 Implementation Group. We are a 75-person SaaS company handling PII but not payment cards. We have MFA, endpoint protection, and a vulnerability scanner but no formal asset inventory or logging program. Run a gap assessment against the appropriate IG, prioritize the top 10 remediation items by risk impact, and map our existing controls to their NIST CSF equivalents.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Three weeks manually reading the CIS Controls v8 guide, cross-referencing 153 safeguards against current controls, arguing internally about which IG applies, and producing a gap spreadsheet that is already outdated by the time it is finished.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">IG2 scoping confirmed, safeguard-level gap report across all 18 controls, top 10 remediation priorities ranked by risk impact, and a crosswalk showing which existing controls satisfy NIST CSF subcategories — produced in one session.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Works for organizations at any maturity level — useful both for establishing a baseline and for optimizing an existing program.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: NIST CSF Advisor — Current-to-Target Profile and Board-Ready Risk Reporting
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/nist-csf-advisor">NIST CSF Advisor</PlaybookLink> assesses cybersecurity posture against the NIST CSF 2.0 six functions — Govern, Identify, Protect, Detect, Respond, Recover — builds current and target profiles, assigns implementation tiers, and maps the framework to other standards.
      </p>
      <p className="mt-4">
        NIST CSF is the common language boards and regulators use to discuss cyber risk. CSF 2.0 added Govern as a sixth function, making cybersecurity governance an explicit first-class concern. If a CISO cannot show a current profile and a target profile with a clear gap narrative, they cannot credibly demonstrate to the board that cyber risk is being managed rather than merely monitored.
      </p>
      <p className="mt-4">
        The Skill produces the function-by-function gap assessment, the current-versus-target profile in the format auditors and board members expect, an implementation-tier rating, and a prioritized improvement roadmap with effort estimates — everything needed for an executive briefing or a regulatory inquiry.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Assess our cybersecurity posture against NIST CSF 2.0. We are a healthcare-adjacent SaaS company. We have strong Protect controls (MFA, patch management, endpoint detection) but weak Govern controls — no formal cybersecurity policy ownership, no risk register, and no board-level security reporting. Build a current profile, a 12-month target profile, and a gap narrative suitable for a board presentation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">CISO spends two weeks building a CSF profile in a spreadsheet, then another week translating it into board language. The resulting presentation is already a month old when it reaches the audit committee.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Function-by-function assessment across all six CSF 2.0 functions, a current-versus-target profile, an implementation-tier rating, and a board-ready gap narrative with a 12-month improvement roadmap — produced in one session.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Handles both initial assessments and ongoing annual profile updates. Maps to ISO 27001, CIS Controls, and CMMC for teams managing multiple frameworks simultaneously.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: PCI DSS Advisor — CDE Scoping, SAQ Selection, and v4.0.1 Gap Analysis
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/pci-dss-advisor">PCI DSS Advisor</PlaybookLink> scopes the cardholder data environment, selects the correct Self-Assessment Questionnaire type, runs a requirement-by-requirement gap analysis against PCI DSS v4.0.1, and produces a segmentation and testing plan for QSA assessment.
      </p>
      <p className="mt-4">
        PCI DSS v4.0.1 introduced requirements that were previously future-dated and are now mandatory. Teams that passed their last QSA under v3.2.1 may have compliance gaps they are unaware of. The SAQ selection mistake is equally common: organizations using a payment redirect assume they qualify for SAQ A when their specific integration may require SAQ A-EP — a dramatically different set of requirements.
      </p>
      <p className="mt-4">
        The Skill begins with CDE scoping — the highest-stakes decision in PCI compliance — before moving to SAQ selection and gap analysis. Getting the scope wrong means either failing an audit on a technicality or implementing controls across systems that do not actually touch card data.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Scope our PCI DSS cardholder data environment and select the correct SAQ. We use Stripe as our payment processor with a redirect integration — the card data never touches our servers. We do store the last four digits and card brand in our database for display purposes. Our last QSA was under PCI DSS v3.2.1. Run a v4.0.1 gap analysis and identify any newly mandatory requirements we may have missed.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Three rounds of back-and-forth with the QSA to determine CDE scope. Assumed SAQ A applied; QSA determined SAQ A-EP was required based on the JavaScript integration. Remediation cost four months and a reaudit.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">CDE scope confirmed, correct SAQ identified upfront, requirement-by-requirement v4.0.1 gap report with newly mandatory items flagged, and a segmentation and testing plan ready for QSA review — before engaging external assessors.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Works for merchants and service providers at all levels. Covers the full v4.0.1 requirement set including the previously future-dated requirements now in effect.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: FedRAMP Authorization Advisor — SSP, POA&M, and ATO Readiness
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/fedramp-authorization-advisor">FedRAMP Authorization Advisor</PlaybookLink> navigates the full FedRAMP lifecycle: impact level determination, system boundary definition, SSP and SAP/SAR/POA&M documentation, NIST SP 800-53 control mapping, 3PAO assessment preparation, continuous monitoring, and ATO readiness.
      </p>
      <p className="mt-4">
        FedRAMP is the entry requirement for selling cloud services to the US federal government. The authorization package — System Security Plan, Security Assessment Plan, Security Assessment Report, and Plan of Action and Milestones — can run thousands of pages. Impact level errors and system boundary mistakes are the two most common causes of delayed ATOs, sometimes slipping timelines by quarters.
      </p>
      <p className="mt-4">
        The Skill walks through impact categorization first (Low, Moderate, High), then defines the system boundary with a precision that satisfies 3PAO review, outlines the SSP structure against the applicable 800-53 control baseline, and builds the POA&M framework for tracking open findings. For teams already in the FedRAMP process, it handles continuous monitoring documentation and prepares responses to 3PAO findings.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Assess our FedRAMP readiness for Moderate impact authorization. We are a cloud-native analytics platform on AWS GovCloud. We have SOC 2 Type II and ISO 27001 in place. Define our system boundary, confirm the impact level, map our existing controls against the Moderate 800-53 baseline, and outline the SSP structure. Flag any controls where our existing documentation will not satisfy FedRAMP requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">FedRAMP readiness assessment from a consultancy costs $50,000–$150,000 and takes months. The deliverable is a gap report but not the SSP, POA&M, or boundary definition — those are a separate engagement billed separately.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Impact level confirmed, system boundary defined, 800-53 Moderate control gap analysis against existing documentation, SSP outline ready for internal review, and POA&M structure set up — produced internally before engaging a 3PAO.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Covers all three impact levels (Low, Moderate, High), handles the full authorization lifecycle from initial readiness through continuous monitoring, and supports teams mid-authorization as well as those just starting.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Security Framework System: One Source of Truth Across All Frameworks
      </h2>
      <p>
        Security teams pursuing multiple frameworks simultaneously face the same structural problem: every framework has its own gap tracker, its own evidence repository, its own remediation backlog. When a control is implemented, it satisfies requirements in multiple frameworks — but updating four separate trackers is manual, error-prone, and nobody's priority when an incident hits.
      </p>
      <p className="mt-4">
        The Skills above are designed to cross-reference each other. The CIS Controls Advisor produces crosswalks to NIST CSF, ISO 27001, SOC 2, and CMMC. The NIST CSF Advisor maps to CIS Controls and ISO 27001. Running both together on the same control inventory produces a unified view of what you have, what you are missing, and how a single remediation satisfies requirements across multiple frameworks simultaneously.
      </p>
      <p className="mt-4">
        The workflow for a team pursuing SOC 2, ISO 27001, and PCI DSS simultaneously: monthly Compliance Tracker run produces the unified control inventory; CIS Controls Advisor runs the gap assessment and maps to the other frameworks; PCI DSS Advisor scopes the CDE and runs the requirement-level gap. Three separate audit preparations collapse into one shared evidence base.
      </p>
      <p className="mt-4">
        This is the difference between compliance as a recurring sprint and compliance as an operational posture. The framework documentation gets maintained continuously, not assembled from scratch each audit cycle.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Get the Cybersecurity Skills
      </h2>
      <p className="mb-6">
        Each Skill is a one-time install. Open it, follow the setup steps, and it is available in Claude every time you need it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/cis-controls-advisor"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">CIS Controls v8 Advisor</p>
          <p className="text-sm text-muted-foreground">IG scoping, safeguard-level gap assessment, prioritized remediation roadmap, and crosswalks to NIST CSF, ISO 27001, SOC 2, and CMMC.</p>
        </Link>
        <Link
          href="/playbooks/nist-csf-advisor"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">NIST CSF 2.0 Advisor</p>
          <p className="text-sm text-muted-foreground">Current and target profile building across all six CSF 2.0 functions, implementation-tier rating, and board-ready gap narrative with improvement roadmap.</p>
        </Link>
        <Link
          href="/playbooks/pci-dss-advisor"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">PCI DSS v4.0.1 Advisor</p>
          <p className="text-sm text-muted-foreground">CDE scoping, SAQ selection, requirement-by-requirement gap analysis against v4.0.1, and a segmentation and testing plan ready for QSA review.</p>
        </Link>
        <Link
          href="/playbooks/fedramp-authorization-advisor"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">FedRAMP Authorization Advisor</p>
          <p className="text-sm text-muted-foreground">Impact level, system boundary, SSP outline, 800-53 control mapping, and POA&M structure — full authorization lifecycle from readiness through continuous monitoring.</p>
        </Link>
      </div>
    </BlogPostLayout>
  );
}
