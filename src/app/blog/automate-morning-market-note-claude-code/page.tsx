import { Metadata } from 'next';
import Link from 'next/link';
import { AffiliateDisclosure, AffiliateLink } from '@/components/AffiliateLink';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Automate Your Morning Market Note with Claude Code | Claude Code Playbooks Blog',
  description: "Set up an automated pre-market note: a weekly catalyst calendar, a daily Claude Code run that reads overnight news and pulls company data over MCP, and a schedule that has the draft waiting before the open. Includes the config, prompts and failure modes.",
  alternates: { canonical: '/blog/automate-morning-market-note-claude-code' },
  openGraph: {
    title: 'Automate Your Morning Market Note with Claude Code',
    description: "Set up an automated pre-market note: a weekly catalyst calendar, a daily Claude Code run that reads overnight news and pulls company data over MCP, and a schedule that has the draft waiting before the open. Includes the config, prompts and failure modes.",
    url: 'https://www.claudecodehq.com/blog/automate-morning-market-note-claude-code',
    type: 'article',
    publishedTime: '2026-10-14T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automate Your Morning Market Note with Claude Code',
    description: "Set up an automated pre-market note: a weekly catalyst calendar, a daily Claude Code run that reads overnight news and pulls company data over MCP, and a schedule that has the draft waiting before the open. Includes the config, prompts and failure modes.",
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

export default function AutomateMorningMarketNoteClaudeCodePage() {
  return (
    <BlogPostLayout
      title="Automate Your Morning Market Note with Claude Code"
      description="Set up an automated pre-market note: a weekly catalyst calendar, a daily Claude Code run that reads overnight news and pulls company data over MCP, and a schedule that has the draft waiting before the open. Includes the config, prompts and failure modes."
      category="tutorial"
      difficulty="intermediate"
      readingTime="12 min read"
      createdAt="2026-10-14"
      tags={['ai morning note', 'automated market brief', 'pre-market ai summary', 'claude code scheduled task', 'morning meeting note', 'fiscal.ai mcp', 'claude code finance']}
      author="Claude Code Playbooks"
      slug="automate-morning-market-note-claude-code"
    >
      <AffiliateDisclosure className="mb-6" />
      <p>
        The morning note has two halves. The first is mechanical: what happened overnight to the names you cover, what&apos;s on today&apos;s calendar, and what the latest numbers say. The second is the judgment call: what it means and what you&apos;d do about it. Most of the 6am scramble goes to the first half, and it&apos;s the half that doesn&apos;t need you.
      </p>
      <p>
        This walkthrough automates the mechanical half. A scheduled Claude Code run reads overnight news for your watchlist, pulls company data over MCP for the names that moved, checks it against a calendar that a weekly run maintains, and leaves a draft note in a folder before you sit down. You read it, fix it, add the call, and send it. The result is a daily habit that takes ten minutes instead of sixty.
      </p>
      <p>
        One honest caveat up front: a draft built from web search is only as good as its sources. The design below is built around that. Every figure carries a source and a time, and anything the run couldn&apos;t verify says so. You are still the author of whatever you send out.
      </p>

      <h2 className={H2}>What Goes in the Note</h2>
      <p>
        The <PlaybookLink href="/playbooks/er-morning-note">Equity Research Morning Note</PlaybookLink> playbook defines the format sell-side desks use: a one-page note with a top-call headline, overnight earnings reactions, key events today, and a trade idea with risk parameters. It&apos;s the right skeleton, because it forces an opinion instead of a news summary.
      </p>
      <p>
        We split that skeleton by who does what:
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className={TH}>Section</th>
              <th className={TH}>Who does it</th>
              <th className={TH}>From where</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr><td className={TD}>Overnight developments</td><td className={TD}>Claude</td><td className={TD}>News search, each item sourced and timed</td></tr>
            <tr><td className={TD}>Today&apos;s events</td><td className={TD}>Claude</td><td className={TD}>Your catalyst calendar, re-checked against sources</td></tr>
            <tr><td className={TD}>What the numbers say</td><td className={TD}>Claude</td><td className={TD}>Company data over MCP, only for names with an event</td></tr>
            <tr><td className={TD}>Top call and trade idea</td><td className={TD}>You, with Claude&apos;s draft</td><td className={TD}>Your view</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className={H2}>The Data Steps, and What Each Tool Is For</h2>
      <p>
        A morning note touches three kinds of data, and no single tool covers all of them. Be clear about which job each one does.
      </p>
      <h3 className={H3}>Overnight news and market moves: web search</h3>
      <p>
        Claude Code can search the web and read pages. That covers headlines, press releases, filings and the macro prints. It isn&apos;t a market-data terminal. Search results can lag, and a pre-market price from a web page may be minutes or hours old. So the run is told to label every price with its source and time, and you confirm live levels on your own screen.
      </p>
      <h3 className={H3}>Company fundamentals: <AffiliateLink partner="fiscal-ai">Fiscal.ai</AffiliateLink> over MCP</h3>
      <p>
        When a name has an overnight event, say an earnings release, a guidance change or an M&amp;A headline, the useful context is the numbers behind it: the latest reported financials and what management said last time. Fiscal.ai exposes a hosted MCP server, so Claude can query that directly instead of scraping it. It has a free tier covering 100 large-cap companies with 250 calls a day, which applies through MCP as well, and wider coverage on paid plans. The setup is covered in our{' '}
        <PlaybookLink href="/blog/fiscal-ai-mcp-earnings-note">Fiscal.ai MCP walkthrough</PlaybookLink>. Pulling data only for names that moved keeps you well inside the daily call cap.
      </p>
      <h3 className={H3}>Your screen: <AffiliateLink partner="koyfin">Koyfin</AffiliateLink> as the thing you look at</h3>
      <p>
        Koyfin is the dashboard you open at 7am, not an input to the run. It&apos;s excellent for watching a watchlist, charts and macro, but its financials and estimates can&apos;t be exported, so there&apos;s nothing for Claude to read. The note&apos;s job is to tell you which charts to open. We cover the split in{' '}
        <PlaybookLink href="/blog/koyfin-vs-fiscal-ai">Koyfin vs Fiscal.ai</PlaybookLink>.
      </p>

      <h2 className={H2}>Set Up the Project</h2>
      <CodeBlock>{`morning-note/
├── CLAUDE.md          ← note format, rules, your coverage
├── watchlist.csv      ← ticker, name, one line on why you watch it
├── catalysts.md       ← maintained weekly by Claude
├── .mcp.json          ← Fiscal.ai connection
├── run.sh             ← what the scheduler calls
└── notes/             ← one file per day`}</CodeBlock>
      <h3 className={H3}>Connect Fiscal.ai for an unattended run</h3>
      <p>
        The interactive setup uses an OAuth sign-in in your browser, which a scheduled job can&apos;t complete. Use the API-key method instead. Put the key in an environment variable with a name of your own and reference it from <Code>.mcp.json</Code>:
      </p>
      <CodeBlock>{`{
  "mcpServers": {
    "fiscal": {
      "type": "http",
      "url": "https://api.fiscal.ai/mcp",
      "headers": {
        "Authorization": "Bearer \${FISCAL_API_KEY}"
      }
    }
  }
}`}</CodeBlock>
      <p>
        Claude Code expands <Code>{'${VAR}'}</Code> in the <Code>url</Code> and <Code>headers</Code> of HTTP servers. Don&apos;t reuse a name that Claude Code treats as a credential, such as <Code>ANTHROPIC_API_KEY</Code>, because those read as empty inside a remote server&apos;s headers. Keep the key out of the file and out of version control, and add <Code>.mcp.json</Code> to <Code>.gitignore</Code> if it ever contains a literal token.
      </p>
      <h3 className={H3}>Write the rules into CLAUDE.md</h3>
      <p>
        Start from the playbook template, then add the rules that stop a draft from misleading you:
      </p>
      <CodeBlock>{`## Morning note rules
- Format: top call (one line), overnight table, today's events, numbers
  for names with an event, one trade idea with risk, open questions.
- Every price, percentage or figure needs a source and a timestamp from
  THIS run. If a source did not give it, write "not verified". Never
  estimate a number.
- Separate fact from rumor. Mark unconfirmed reports "unconfirmed".
- Pull Fiscal.ai data only for names with a material overnight event.
- Never write buy/sell language as fact. The trade idea is a draft for
  my review and must state what would prove it wrong.
- If US markets are closed today, say so in one line and stop.`}</CodeBlock>

      <h2 className={H2}>The Two Prompts</h2>
      <h3 className={H3}>Weekly: build the catalyst calendar</h3>
      <p>
        Run this on Sunday. The <PlaybookLink href="/playbooks/er-catalyst-calendar">Catalyst Calendar</PlaybookLink> playbook builds the structure: earnings dates, conferences, product launches and macro events, tagged by impact. The daily run then reads the file instead of rediscovering the week every morning.
      </p>
      <Prompt>
        Build catalysts.md for the coming week for every name in watchlist.csv: earnings dates, investor events, product or regulatory decisions, plus the macro releases that matter for them. Give each item a date, a source link and an impact tag. If a date isn&apos;t confirmed by a company source, mark it &quot;unconfirmed&quot;. Overwrite the file.
      </Prompt>
      <h3 className={H3}>Daily: write the note</h3>
      <Prompt>
        Write today&apos;s morning note and save it to notes/ using today&apos;s date as the filename. Read watchlist.csv and catalysts.md. Search for overnight news on each watchlist name and for the market backdrop: index futures, rates, and any major data releases. For names with a material event, pull the latest reported financials and the most recent earnings-call commentary from Fiscal.ai. Follow the rules in CLAUDE.md. End with a list of everything you could not verify.
      </Prompt>
      <p>
        That last sentence matters. A draft that tells you what it didn&apos;t check is more useful than one that sounds complete.
      </p>

      <h2 className={H2}>Schedule It</h2>
      <p>
        Claude Code has three scheduling options, and they behave differently in ways that matter for a 7am deliverable:
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className={TH}></th>
              <th className={TH}>Desktop task</th>
              <th className={TH}>Cloud routine</th>
              <th className={TH}><Code>/loop</Code></th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr><td className={TD}>Runs on</td><td className={TD}>Your machine</td><td className={TD}>Anthropic&apos;s cloud</td><td className={TD}>Your machine</td></tr>
            <tr><td className={TD}>Needs your computer on</td><td className={TD}>Yes, and awake</td><td className={TD}>No</td><td className={TD}>Yes, with the session open</td></tr>
            <tr><td className={TD}>Local files</td><td className={TD}>Yes</td><td className={TD}>No, it uses a fresh clone</td><td className={TD}>Yes</td></tr>
            <tr><td className={TD}>Minimum interval</td><td className={TD}>1 minute</td><td className={TD}>1 hour</td><td className={TD}>1 minute</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        For this workflow, a Desktop scheduled task or a plain cron job is the fit, because the run needs your local watchlist and notes folder. Two behaviors to plan around:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-foreground">A sleeping computer skips the run.</strong> Desktop tasks only fire while the app is running and your computer is awake. When it wakes it makes one catch-up run, so a 6:30 task can land at 9am. Each task also starts a few minutes after its scheduled time. Turn on Keep computer awake, or put a guard in the prompt, as the rule above does for closed markets.
        </li>
        <li>
          <strong className="text-foreground">Don&apos;t use <Code>/loop</Code> for this.</strong> It&apos;s session-scoped, recurring tasks expire after seven days, and runs are deliberately jittered by up to half the interval. A daily task can start up to 30 minutes late. That&apos;s fine for polling a deploy and wrong for a note that needs to be ready at 7.
        </li>
      </ul>
      <p>
        If you&apos;d rather have exact timing under your own control, call Claude Code non-interactively from cron (or Task Scheduler on Windows). The <Code>-p</Code> flag runs a prompt and exits, and <Code>--allowedTools</Code> pre-approves what the run may use:
      </p>
      <CodeBlock>{`#!/usr/bin/env bash
# run.sh — called by cron at 06:30 on weekdays
set -euo pipefail
cd "$(dirname "$0")"

claude -p "Write the morning note for $(date +%F) per CLAUDE.md. Save it as notes/$(date +%F).md." \\
  --allowedTools "Read,Write,WebSearch,WebFetch,mcp__fiscal" \\
  --permission-prompts none \\
  --max-budget-usd 1.00 \\
  --output-format json > "notes/run-$(date +%F).json"

# crontab:  30 6 * * 1-5  /path/to/morning-note/run.sh`}</CodeBlock>
      <p>
        A few notes on that command. Without <Code>--bare</Code>, <Code>claude -p</Code> reads <Code>CLAUDE.md</Code> and connects the servers in <Code>.mcp.json</Code> from the project folder, which is what we want here. (Bare mode skips both, and you&apos;d have to pass them in explicitly.) <Code>mcp__fiscal</Code> allows every tool on the server named <Code>fiscal</Code>. <Code>--permission-prompts none</Code> denies anything not pre-approved instead of hanging with no one to answer, and it needs a recent Claude Code version. <Code>--max-budget-usd</Code> caps spend per run, so a loop gone wrong costs a dollar, not a surprise.
      </p>
      <p>
        Whichever scheduler you use, run it by hand once first and watch for permission prompts. Desktop tasks have a Run now button for exactly this, and any tool the run is stopped on has to be allowed before the first unattended morning.
      </p>

      <h2 className={H2}>What Can Go Wrong</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-foreground">Stale or wrong prices.</strong> This is the most important one. Use the note to decide where to look, not as the price source. The sourcing rule makes the gaps visible.
        </li>
        <li>
          <strong className="text-foreground">Rumors reported as facts.</strong> Overnight news is full of unconfirmed reports. The &quot;unconfirmed&quot; rule helps, but you should read the source on anything you&apos;d act on.
        </li>
        <li>
          <strong className="text-foreground">Holidays and half-days.</strong> A weekday cron fires on market holidays. The closed-markets rule handles it, but it relies on a source confirming it.
        </li>
        <li>
          <strong className="text-foreground">Coverage gaps.</strong> The free Fiscal.ai tier covers large caps. For small caps or non-US names, the note will say the data wasn&apos;t available. Believe it, and don&apos;t let Claude fill in from memory.
        </li>
        <li>
          <strong className="text-foreground">Silent failure.</strong> A job that doesn&apos;t run produces no note and no error. Check that today&apos;s file exists before you rely on it, or have the script write a one-line failure file when the exit code is non-zero.
        </li>
        <li>
          <strong className="text-foreground">Compliance.</strong> If the note goes outside your head or your team, your firm&apos;s research and communications rules apply to it exactly as they would to one you wrote by hand. Check what they require before it goes to clients.
        </li>
      </ul>

      <h2 className={H2}>Make the Habit Stick</h2>
      <p>
        The setup takes an afternoon. What makes it worth having is the five minutes after each note. When the draft gets something wrong, such as a stale number, a missed name or a rumor stated as fact, add one line to <Code>CLAUDE.md</Code> so it can&apos;t happen the same way twice. After a month the rules file is a record of exactly how your desk wants the note written, which is more valuable than any one draft.
      </p>
      <p>
        If you want it delivered alongside your day, the{' '}
        <PlaybookLink href="/playbooks/daily-morning-briefing">Daily Morning Briefing</PlaybookLink>{' '}
        playbook folds calendar, inbox and tasks into the same kind of run. And if you want to go from the note to a full model on a name that moved, the{' '}
        <PlaybookLink href="/blog/fmp-api-dcf-claude-code">DCF walkthrough</PlaybookLink> picks up where this one stops.
      </p>
      <p className="text-sm text-muted-foreground">
        This article is for education, not investment advice. Scheduling behavior and plan limits come from Anthropic&apos;s and the vendors&apos; documentation as of October 2026. Confirm them on the current docs before you rely on them.
      </p>
    </BlogPostLayout>
  );
}
