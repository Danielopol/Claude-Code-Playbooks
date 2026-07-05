import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for DevOps Engineers: Automate Pipelines and Runbooks | Claude Code Playbooks Blog',
  description: "Four Claude Skills for DevOps engineers — production-ready CI/CD pipeline generation, optimized Docker containerization, n8n-based incident response automation, and structured operational runbook creation.",
  alternates: { canonical: '/blog/claude-skills-devops' },
  openGraph: {
    title: 'Claude Skills for DevOps Engineers: Automate Pipelines and Runbooks',
    description: "Four Claude Skills for DevOps engineers — production-ready CI/CD pipeline generation, optimized Docker containerization, n8n-based incident response automation, and structured operational runbook creation.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-devops',
    type: 'article',
    publishedTime: '2026-07-04T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for DevOps Engineers: Automate Pipelines and Runbooks',
    description: "Four Claude Skills for DevOps engineers — production-ready CI/CD pipeline generation, optimized Docker containerization, n8n-based incident response automation, and structured operational runbook creation.",
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

export default function ClaudeSkillsDevOpsPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for DevOps Engineers: Automate Pipelines and Runbooks"
      description="Four Claude Skills for DevOps engineers — production-ready CI/CD pipeline generation, optimized Docker containerization, n8n-based incident response automation, and structured operational runbook creation."
      category="guide"
      difficulty="intermediate"
      readingTime="13 min read"
      createdAt="2026-07-04"
      tags={['claude skills devops', 'ai devops automation', 'ai ci/cd pipeline', 'github actions generator', 'docker dockerfile generator', 'devops runbook', 'incident response automation', 'devops ai tools']}
      author="Claude Code Playbooks"
      slug="claude-skills-devops"
    >
      <p>
        DevOps engineers automate everything — except the setup work that precedes automation. Every new project starts with the same tax: write the pipeline YAML, figure out the right caching keys, debug why the Docker image is 2 GB, document the deployment procedure before someone asks at 2 AM. None of it is complex. All of it takes time that could go toward the actual infrastructure problems worth solving.
      </p>
      <p>
        These four Claude Skills handle the boilerplate layer. They're built for engineers who already know what good looks like — the value isn't explaining CI/CD, it's generating production-ready configurations for your specific stack without the debugging loop that usually precedes them.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Generate Production-Ready CI/CD Pipelines
      </h2>
      <p>
        The problem with CI/CD pipeline setup isn't conceptual — it's that getting the YAML exactly right for your specific stack, platform, and deployment target requires either prior experience with that exact combination or a long debugging loop. Cache the wrong paths and you lose the build speed benefit. Miss the right trigger configuration and preview deployments don't fire on PRs. Get the secret handling wrong and you have a security problem.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/cicd-pipeline-generator">CI/CD Pipeline Generator</PlaybookLink>{' '}
        Skill generates production-ready pipeline configurations for GitHub Actions, GitLab CI, CircleCI, and Jenkins — with deployment targets including Vercel, Netlify, and AWS. You describe your stack and deployment requirements, and get back a complete workflow with build, lint, and test stages; correct <code className="text-sm bg-[#0d1117] px-1 rounded">node_modules</code> and dependency caching; preview deployments on PRs; and production deploys on merge to main.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Set up GitHub Actions for our Next.js monorepo deploying to AWS ECS — build and test on every PR, deploy to staging on merge to develop, production on merge to main, with Slack notifications on failure"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Hours of YAML debugging, cryptic action version errors, cache misses that make every build cold, and a pipeline that was copy-pasted two years ago and nobody understands anymore</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Complete workflow YAML with correct stage ordering, dependency caching, environment-specific deploy targets, secret handling, and Slack failure notifications — for your actual stack, not a generic template</p>
        </div>
      </div>

      <p>
        Particularly useful when migrating between CI platforms (e.g., CircleCI to GitHub Actions), where the concepts transfer but the syntax differences cause most of the friction. Describe your existing pipeline behavior and it generates the equivalent on the new platform.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 15 minutes. Describe your stack, platform, and deployment targets — the Skill handles the syntax.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Containerize Without the 2 GB Image Problem
      </h2>
      <p>
        "It works on my machine" stopped being acceptable years ago, but a lot of production Dockerfiles are still a liability: installed dev dependencies in the final image, running as root, no build-layer caching, rebuilding everything on every code change. The image is large, the build is slow, and the security posture is worse than it needs to be — but nobody touches it because it works.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/docker-containerization">Docker Containerization</PlaybookLink>{' '}
        Skill generates multi-stage Dockerfiles that separate build and runtime layers — stripping dev dependencies, running as a non-root user, and leveraging layer caching correctly so only changed layers rebuild. For a typical Next.js app, the output image goes from 2 GB to around 200 MB. The Skill also generates Docker Compose configs for local development with hot reload and production configs with health checks, plus deployment scripts for AWS ECS and Google Cloud Run.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Containerize our Node.js API for production — multi-stage build, non-root user, minimal final image, health check endpoint, and a Docker Compose setup for local dev with hot reload"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">2 GB image with dev dependencies, root process, full rebuild on every code change, no health check, and a Dockerfile nobody wants to touch because it somehow works</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Multi-stage Dockerfile with ~200 MB final image, non-root runtime, correct layer caching, health check, Docker Compose for local dev with hot reload, and ECS/Cloud Run deployment scripts</p>
        </div>
      </div>

      <p>
        Works for Next.js, React, and Node.js projects out of the box, with Kubernetes manifest generation available for teams moving toward orchestration.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 15 minutes. Describe your application type and target deployment platform — it generates all config files.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Automate Incident Response Before the 2 AM Call
      </h2>
      <p>
        Most incident response workflows are manual by default: monitor fires an alert, someone gets paged, that person creates a ticket, posts to Slack, updates the status page, and starts debugging — usually in that order, usually at 2 AM, usually with steps missed under pressure. The{' '}
        <PlaybookLink href="/playbooks/devops-automation">DevOps Automation Assistant</PlaybookLink>{' '}
        Skill builds n8n-based workflows that automate the response sequence so engineers can focus on the actual incident rather than the incident management overhead.
      </p>
      <p>
        A typical output: health endpoint monitoring on a configurable interval, automatic incident ticket creation on failure, PagerDuty page to on-call with context already filled in, Slack status update to the right channels, and a resolution notification when the endpoint recovers — all triggered without human intervention. The Skill can also build workflows for deployment validation, rollback triggers, and scheduled maintenance windows.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Build an automated incident response workflow: monitor our API health endpoint every 2 minutes, create a PagerDuty incident on failure, post to #incidents in Slack with error context, and send recovery notification when it comes back up"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Monitoring alert fires to a Slack channel, someone manually creates the ticket, pages on-call, posts the status update — steps get missed at 2 AM, the runbook is a stale Google Doc, the postmortem blames the person not the process</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">n8n workflow that monitors endpoints, creates tickets, pages on-call with context, posts to Slack, and sends recovery notifications automatically — engineers go straight to debugging, not incident coordination</p>
        </div>
      </div>

      <p>
        Built on n8n's IT Ops workflow templates. Integrates with PagerDuty, Slack, Jira, and GitHub. The Skill can also generate monitoring dashboards and alert routing rules for teams setting up observability from scratch.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Requires an n8n instance; the Skill outputs importable workflow JSON.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Turn Tribal Knowledge into Operational Runbooks
      </h2>
      <p>
        Every engineering team has procedures that live in someone's head: how to restart the billing service without losing in-flight transactions, the exact order of steps for the monthly database maintenance window, what to check first when the cache starts returning stale data. That knowledge is a single point of failure. When the person who holds it is unavailable during an incident, the team either improvises or escalates — both options are expensive.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/operational-runbook-creator">Operational Runbook Creator</PlaybookLink>{' '}
        Skill converts your description of a procedure into a structured runbook: prerequisites checklist, step-by-step execution with exact commands, expected output at each step, failure handling branches, rollback procedures, verification checks, escalation contacts, and estimated time per step. The output formats for Confluence, Notion, or any markdown-based wiki.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Create a runbook for our monthly PostgreSQL maintenance window — vacuum, REINDEX, update statistics, check for bloat, with rollback steps if anything goes wrong and escalation contacts if we exceed the maintenance window"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Procedure lives in the senior engineer's head, the Confluence page is from 2023 and missing three steps that were added after the last incident, and on-call coverage for that person is permanently unresolved</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Complete runbook with prerequisites, exact commands, expected output, failure branches, rollback procedure, verification checks, escalation contacts, and time estimates — formatted for your wiki</p>
        </div>
      </div>

      <p>
        Authored by Anthropic's knowledge work team and sourced from their operational runbook templates. Particularly valuable before key engineers leave, when onboarding new SREs, or as part of an incident postmortem action item to document procedures that were improvised during an incident.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Describe the procedure in any level of detail — the Skill structures it into a complete runbook.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Where These Fit in a DevOps Workflow
      </h2>
      <p>
        These Skills cover four distinct phases of the DevOps lifecycle, each targeting a different kind of boilerplate cost:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">New project setup</span> — CI/CD Pipeline Generator and Docker Containerization eliminate the first week of config work</li>
        <li><span className="text-foreground font-medium">Ongoing operations</span> — DevOps Automation removes manual steps from incident response and monitoring workflows</li>
        <li><span className="text-foreground font-medium">Knowledge management</span> — Runbook Creator converts implicit knowledge into explicit, executable procedures</li>
      </ul>
      <p>
        None of them replace engineering judgment — they handle the syntax and structure so judgment can go toward architecture, reliability, and the operational decisions that actually require experience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/cicd-pipeline-generator">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">CI/CD Pipeline Generator</p>
            <p className="text-sm text-muted-foreground">Production-ready GitHub Actions, GitLab CI, CircleCI, and Jenkins configs for any stack and deployment target</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/docker-containerization">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Docker Containerization</p>
            <p className="text-sm text-muted-foreground">Multi-stage Dockerfiles, Docker Compose for local dev, health checks, and ECS/Cloud Run deployment scripts</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/devops-automation">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">DevOps Automation Assistant</p>
            <p className="text-sm text-muted-foreground">n8n-based incident response, monitoring, and deployment workflows — PagerDuty, Slack, Jira integration</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/operational-runbook-creator">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Operational Runbook Creator</p>
            <p className="text-sm text-muted-foreground">Structured runbooks with exact commands, rollback steps, verification checks, and escalation contacts</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
