import { Metadata } from 'next';
import Link from 'next/link';
import { AffiliateDisclosure, AffiliateLink } from '@/components/AffiliateLink';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Earnings Season Playbook: Preview, Transcript, Model Update, Note | Claude Code Playbooks Blog',
  description: "A repeatable four-stage earnings workflow for Claude Code: preview before the print, transcript analysis with verified quotes, model update, and the note. Built for peak weeks when you cover thirty names and have no time to reinvent the process.",
  alternates: { canonical: '/blog/earnings-season-playbook-ai' },
  openGraph: {
    title: 'Earnings Season Playbook: Preview, Transcript, Model Update, Note',
    description: "A repeatable four-stage earnings workflow for Claude Code: preview before the print, transcript analysis with verified quotes, model update, and the note. Built for peak weeks when you cover thirty names and have no time to reinvent the process.",
    url: 'https://www.claudecodehq.com/blog/earnings-season-playbook-ai',
    type: 'article',
    publishedTime: '2026-10-27T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Earnings Season Playbook: Preview, Transcript, Model Update, Note',
    description: "A repeatable four-stage earnings workflow for Claude Code: preview before the print, transcript analysis with verified quotes, model update, and the note. Built for peak weeks when you cover thirty names and have no time to reinvent the process.",
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

function Code({ children }: { children: React.ReactNode }) {
  return <code className="text-sm bg-[#0d1117] px-1.5 py-0.5 rounded text-[#f97316]">{children}</code>;
}

function CodeBlock({ children }: { children: string }) {
  return (
    <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4 overflow-x-auto">
      <pre className="text-sm font-mono text-[#f97316] mb-0 whitespace-pre">{children}</pre>
    </div>
  );
}

function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
      <p className="text-sm font-mono text-[#f97316] mb-0">{children}</p>
    </div>
  );
}

const H2 = 'text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2';
const H3 = 'text-xl font-semibold text-foreground mt-8 mb-3';
const TH = 'text-left p-3 border-b border-[#30363d] text-foreground';
const TD = 'p-3 border-b border-[#30363d] align-top';

export default function EarningsSeasonPlaybookAiPage() {
  return (
    <BlogPostLayout
      title="Earnings Season Playbook: Preview, Transcript, Model Update, Note"
      description="A repeatable four-stage earnings workflow for Claude Code: preview before the print, transcript analysis with verified quotes, model update, and the note. Built for peak weeks when you cover thirty names and have no time to reinvent the process."
      category="tutorial"
      difficulty="intermediate"
      readingTime="12 min read"
      createdAt="2026-10-27"
      tags={['earnings season workflow', 'ai transcript analysis', 'earnings call ai summary', 'earnings preview ai', 'earnings model update', 'fiscal.ai mcp', 'claude code finance']}
      author="Claude Code Playbooks"
      slug="earnings-season-playbook-ai"
    >
      <AffiliateDisclosure className="mb-6" />
      <p>
        Earnings season is a throughput problem. Four times a year, a coverage list of twenty or thirty names reports inside a few weeks, each one needs a preview, a read of the call, a model update and a note, and the quality of the fourteenth note depends on whether the process is fixed or improvised. By the second week, improvised processes start to slip. This post is the fixed process.
      </p>
      <p>
        It has four stages, each tied to a playbook, and one rule that applies to all of them: <strong className="text-foreground">anything Claude quotes or calculates has to be checkable in seconds.</strong> That rule is what lets you trust the output at volume.
      </p>
      <p className="text-sm text-muted-foreground">
        Last reviewed October 2026, ahead of Q3 reporting. We refresh this guide each season.
      </p>

      <h2 className={H2}>The Four Stages at a Glance</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className={TH}>Stage</th>
              <th className={TH}>When</th>
              <th className={TH}>Playbook</th>
              <th className={TH}>Output</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr><td className={TD}><strong className="text-foreground">1. Preview</strong></td><td className={TD}>Days before the print</td><td className={TD}><PlaybookLink href="/playbooks/er-earnings-preview">Earnings Preview</PlaybookLink></td><td className={TD}>One page: consensus, scenarios, catalysts, implied move</td></tr>
            <tr><td className={TD}><strong className="text-foreground">2. Transcript</strong></td><td className={TD}>Within hours of the call</td><td className={TD}>Transcript prompts (below)</td><td className={TD}>Guidance and tone changes, with verified quotes</td></tr>
            <tr><td className={TD}><strong className="text-foreground">3. Model</strong></td><td className={TD}>Same day or next</td><td className={TD}><PlaybookLink href="/playbooks/er-model-update">Model Update</PlaybookLink></td><td className={TD}>Actuals vs estimates, revised forecasts, thesis check</td></tr>
            <tr><td className={TD}><strong className="text-foreground">4. Note</strong></td><td className={TD}>Next morning</td><td className={TD}><PlaybookLink href="/playbooks/er-earnings-analysis">Earnings Update Report</PlaybookLink></td><td className={TD}>The published note, with citations</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        A fifth step runs alongside all four: the{' '}
        <PlaybookLink href="/playbooks/er-thesis-tracker">Thesis Tracker</PlaybookLink>{' '}
        logs each result against your pillars, marking each as on track, behind or ahead, so a quarter of data points accumulates into a view and not a pile of notes.
      </p>

      <h2 className={H2}>Setup: One Folder per Company, One Rules File for All</h2>
      <CodeBlock>{`earnings/
├── CLAUDE.md              ← rules, format, KPI definitions
├── calendar.md            ← report dates for the season
└── NKE/
    ├── thesis.md          ← pillars and what would change your mind
    ├── kpis.md            ← the 5-8 metrics you actually track
    ├── model.xlsx
    └── q3-2026/           ← preview, transcript, update, note`}</CodeBlock>
      <p>
        The <Code>kpis.md</Code> file is where season-long consistency comes from. List the handful of metrics that matter for the name (same-store sales, net revenue retention, backlog, take rate) and define each one once. Claude then looks for those in every release and transcript instead of improvising what &quot;the important numbers&quot; are.
      </p>

      <h2 className={H2}>Stage 1: Preview</h2>
      <p>
        The preview is where you commit to a view before the information arrives, which is what makes it useful afterward. The playbook produces consensus estimates, bull, base and bear scenarios with price implications, a top-five catalyst checklist and the options-implied move. Add one line to your rules: write down, before the print, the two numbers that would change your mind. When the results arrive, you can compare what happened with what you said you were watching.
      </p>
      <p>
        Estimates need a source. If your data provider includes consensus, use it and cite it. If it doesn&apos;t, Claude should say so instead of inventing a figure. The same applies to implied move: it comes from an options quote or it is marked missing.
      </p>

      <h2 className={H2}>Stage 2: The Transcript</h2>
      <p>
        This is where most of the time is saved, and where most of the risk sits. A transcript is long, the signal is a few sentences, and a model summarizing it is tempted to paraphrase and present the paraphrase as a quote.
      </p>
      <h3 className={H3}>Getting the text</h3>
      <p>
        <AffiliateLink partner="fiscal-ai">Fiscal.ai</AffiliateLink> exposes earnings call transcripts, standardized financials and ratios through its hosted MCP server, so Claude Code can pull the transcript and the matching statements in the same session. The connection is covered in our{' '}
        <PlaybookLink href="/blog/fiscal-ai-mcp-earnings-note">Fiscal.ai MCP walkthrough</PlaybookLink>. Two practical notes for season use: confirm that the company-specific KPIs you track (segment or operating metrics) are available for your names on your plan, and if they aren&apos;t, pull them from the filing or release. And remember the free tier is limited in coverage and calls, so a thirty-name season is a paid-plan workload.
      </p>
      <h3 className={H3}>What to ask for</h3>
      <Prompt>
        Compare this quarter&apos;s call transcript with last quarter&apos;s. List (1) every change in guidance language, with the old and new wording side by side, (2) new risks or topics management raised that were absent last time, (3) topics analysts pushed on in Q&amp;A and whether management answered directly, and (4) the status of each KPI in kpis.md. Quote verbatim, with speaker and section. Don&apos;t characterize tone as a signal; describe what changed.
      </Prompt>
      <p>
        The last sentence matters. Tone shifts are observations, and turning them into a trading signal is a leap you should make yourself.
      </p>
      <h3 className={H3}>Verify every quote with code</h3>
      <p>
        Paraphrase dressed as a quote is the specific error that embarrasses analysts on a client call. The fix is mechanical: check every quoted string against the transcript text. This function returns the quotes that are not there:
      </p>
      <CodeBlock>{`import re


def _norm(s):
    s = re.sub(r"[\\u201c\\u201d]", '"', s)
    s = re.sub(r"[\\u2018\\u2019]", "'", s)
    return re.sub(r"\\s+", " ", s).strip().lower()


def verify_quotes(transcript, quotes):
    """Return the quotes that do NOT appear verbatim (ignoring case,
    whitespace and curly-versus-straight quote marks)."""
    text = _norm(transcript)
    return [q for q in quotes if _norm(q) not in text]`}</CodeBlock>
      <p>
        Tested on a sample transcript, a quote that matched except for curly quote marks and extra spaces passed, and an invented line (&quot;we are raising guidance&quot;) came back as missing. Have Claude run the check on its own output and fix or remove anything that fails before the summary reaches you. Exact-match checking doesn&apos;t prove a quote is representative, but it does guarantee that every quoted word was said.
      </p>

      <h2 className={H2}>Stage 3: Model Update</h2>
      <p>
        With the results and the call in hand, the{' '}
        <PlaybookLink href="/playbooks/er-model-update">Model Update</PlaybookLink>{' '}
        playbook compares actuals with your estimates, revises the forward numbers, shows old against new, recalculates the price target and says whether the thesis changed. Insist on two outputs: a table of actual-versus-estimate for every line you modeled, and a list of every assumption changed with a one-line reason. The second list is what you will want when someone asks why the estimate moved.
      </p>
      <Prompt>
        Update NKE/model.xlsx with the Q3 actuals from the release. Show actual vs. my estimate for every modeled line, then the revised FY and next-year estimates with old and new values. List each assumption you changed and why, citing the transcript or release. Don&apos;t change an assumption that isn&apos;t supported by something in the results or the call. End with whether any pillar in thesis.md is behind or ahead.
      </Prompt>

      <h2 className={H2}>Stage 4: The Note</h2>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/er-earnings-analysis">Earnings Update Report</PlaybookLink>{' '}
        playbook builds the full note: beat and miss analysis, the charts, the estimates table, the revised target and source citations. By this stage most of the content already exists in the preview, the verified transcript findings and the model update, so the note is assembly and judgment. For a morning-meeting version, the{' '}
        <PlaybookLink href="/playbooks/er-morning-note">Morning Note</PlaybookLink>{' '}
        covers the short form, and our{' '}
        <PlaybookLink href="/blog/automate-morning-market-note-claude-code">morning note automation</PlaybookLink>{' '}
        post shows how to have it drafted for you each day.
      </p>

      <h2 className={H2}>Running It at Volume</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-foreground">Batch by stage, not by company.</strong> Run all the previews for the week on Sunday, then transcripts as calls happen. Switching stages for each name wastes the most time.</li>
        <li><strong className="text-foreground">Keep the calendar honest.</strong> Reporting dates move. Build <Code>calendar.md</Code> from company sources and mark anything unconfirmed.</li>
        <li><strong className="text-foreground">Triage ruthlessly.</strong> A name with an in-line quarter and no thesis change gets the short version. Spend the saved time on the three that surprised you.</li>
        <li><strong className="text-foreground">Log what went wrong.</strong> At the end of the season, turn each correction into a rule in <Code>CLAUDE.md</Code>. Next season starts with a better process.</li>
      </ul>
      <p className="text-sm text-muted-foreground">
        This article is for education and isn&apos;t investment advice. Vendor features and plan limits are as of October 2026 and change. Confirm them, and your firm&apos;s rules on using AI with research and non-public information, before you rely on them.
      </p>
    </BlogPostLayout>
  );
}
