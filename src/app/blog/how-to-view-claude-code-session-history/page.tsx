import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'How to View Claude Code Terminal Session History | Claude Code Playbooks Blog',
  description: 'A complete guide to viewing Claude Code session history — where logs are stored, how to search past sessions by date or keyword, how to recover lost code, and four playbooks that make session management effortless.',
  alternates: { canonical: '/blog/how-to-view-claude-code-session-history' },
  openGraph: {
    title: 'How to View Claude Code Terminal Session History',
    description: 'Where Claude Code stores session history, how to search it, how to recover lost code, and the playbooks that automate the whole process.',
    url: 'https://www.claudecodehq.com/blog/how-to-view-claude-code-session-history',
    type: 'article',
    publishedTime: '2026-05-10',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to View Claude Code Terminal Session History',
    description: 'Find and recover anything Claude Code generated — where session logs live, how to search them, and the playbooks that make history navigation effortless.',
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

function CodeBlock({ children, label }: { children: string; label?: string }) {
  return (
    <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
      {label && (
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">
          {label}
        </p>
      )}
      <pre className="text-sm font-mono text-[#e6edf3] whitespace-pre-wrap leading-relaxed">
        {children}
      </pre>
    </div>
  );
}

export default function HowToViewClaudeCodeSessionHistoryPage() {
  return (
    <BlogPostLayout
      title="How to View Claude Code Terminal Session History"
      description="A complete guide to viewing Claude Code session history — where logs are stored, how to search past sessions by date or keyword, how to recover lost code, and four playbooks that make session management effortless."
      category="tutorial"
      difficulty="basic"
      readingTime="11 min read"
      createdAt="2026-05-10"
      tags={[
        'view Claude Code session history',
        'Claude Code terminal history',
        'Claude Code session logs',
        'recover Claude Code history',
        'claude session history',
        '~/.claude',
        'Claude Code',
      ]}
      author="Claude Code Playbooks"
      slug="how-to-view-claude-code-session-history"
    >
      <p className="text-lg">
        Claude Code automatically saves the full history of every session — the code it wrote,
        files it changed, commands it ran, and every message exchanged. This history lives on
        your machine in a specific directory and is fully searchable. If you&apos;ve ever closed
        a session and realized you needed something from it, the good news is: it&apos;s almost
        certainly still there.
      </p>
      <p>
        This guide explains exactly where Claude Code stores session history, how to navigate
        and search it natively, and four playbooks that automate the tasks most developers
        end up needing repeatedly — recovering lost code, logging decisions as they happen,
        capturing context for the next session, and visualizing conversation history as a
        searchable knowledge base.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Where Claude Code Stores Session History
      </h2>
      <p>
        All Claude Code session data is stored in the{' '}
        <code className="text-[#22d3ee] text-sm bg-[#161b22] px-1.5 py-0.5 rounded">
          ~/.claude/
        </code>{' '}
        directory on your machine. This is your home directory&apos;s hidden{' '}
        <code className="text-[#22d3ee] text-sm bg-[#161b22] px-1.5 py-0.5 rounded">
          .claude
        </code>{' '}
        folder — present on macOS, Linux, and WSL on Windows. Inside it you&apos;ll find:
      </p>
      <CodeBlock label="~/.claude/ directory structure">{`~/.claude/
├── projects/          # One subfolder per project, keyed by directory path
│   └── <project-id>/
│       └── <session-id>.jsonl  # One file per session
├── settings.json      # Your global Claude Code preferences
└── CLAUDE.md          # Your global CLAUDE.md (if set)`}</CodeBlock>
      <p>
        Session files use the{' '}
        <code className="text-[#22d3ee] text-sm bg-[#161b22] px-1.5 py-0.5 rounded">
          .jsonl
        </code>{' '}
        (JSON Lines) format — one JSON object per line, each representing a message,
        tool call, file change, or command execution in the session. Every session gets
        its own file, timestamped in the filename.
      </p>
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-semibold text-foreground mb-1">Windows users</p>
        <p className="text-sm">
          If you&apos;re running Claude Code in WSL, the{' '}
          <code className="text-[#22d3ee] text-sm bg-[#0d1117] px-1.5 py-0.5 rounded">
            ~/.claude/
          </code>{' '}
          directory is inside your WSL home (
          <code className="text-[#22d3ee] text-sm bg-[#0d1117] px-1.5 py-0.5 rounded">
            \\wsl$\Ubuntu\home\yourname\.claude\
          </code>
          ). If running natively on Windows, check{' '}
          <code className="text-[#22d3ee] text-sm bg-[#0d1117] px-1.5 py-0.5 rounded">
            %USERPROFILE%\.claude\
          </code>
          .
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Viewing Session History with the Claude Code CLI
      </h2>
      <p>
        The fastest way to view or resume a past session is with the built-in{' '}
        <code className="text-[#22d3ee] text-sm bg-[#161b22] px-1.5 py-0.5 rounded">
          claude
        </code>{' '}
        CLI. Two flags cover the most common needs:
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        List recent sessions
      </h3>
      <CodeBlock label="terminal">{`# Resume the most recent session in the current project
claude --continue

# Or pick from a list of recent sessions
claude --resume`}</CodeBlock>
      <p>
        <code className="text-[#22d3ee] text-sm bg-[#161b22] px-1.5 py-0.5 rounded">
          claude --resume
        </code>{' '}
        opens an interactive picker showing your recent sessions with timestamps and the
        first message of each session as a preview. Use arrow keys to navigate, Enter
        to resume. Claude reloads the full conversation context from the session file —
        it can see everything that happened, not just the summary.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        Continue the most recent session instantly
      </h3>
      <CodeBlock label="terminal">{`claude --continue`}</CodeBlock>
      <p>
        This picks up exactly where you left off without the picker. Useful when you closed
        the terminal by accident and want to get back immediately. Claude resumes mid-thought
        — if it was in the middle of a task, it can see that and pick back up.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Searching Session History Manually
      </h2>
      <p>
        When you know roughly what you&apos;re looking for — a specific function name, an error
        message, a timestamp — you can search the raw session files directly. They&apos;re
        plain text (JSON Lines), so standard tools work:
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        Search all sessions for a keyword
      </h3>
      <CodeBlock label="terminal">{`# Search all sessions for a function name or string
grep -r "generateInvoice" ~/.claude/projects/

# Show the surrounding context (5 lines before and after)
grep -r -C 5 "database migration" ~/.claude/projects/`}</CodeBlock>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        Find sessions from a specific date
      </h3>
      <CodeBlock label="terminal">{`# List session files modified in the last 7 days
find ~/.claude/projects/ -name "*.jsonl" -mtime -7 -ls

# List sessions from a specific project directory
# (projects are stored by path hash, so navigate by modification date)
ls -lt ~/.claude/projects/*/*.jsonl | head -20`}</CodeBlock>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        Extract code blocks from a session
      </h3>
      <CodeBlock label="terminal">{`# Print all content from a session file in readable form
cat ~/.claude/projects/<id>/<session>.jsonl | python3 -c "
import sys, json
for line in sys.stdin:
    obj = json.loads(line)
    if obj.get('type') == 'assistant' and obj.get('content'):
        for block in obj['content']:
            if isinstance(block, dict) and block.get('type') == 'text':
                print(block['text'])
"`}</CodeBlock>
      <p>
        This works but gets tedious fast for anything beyond a one-off lookup. The four
        playbooks below automate this into repeatable workflows.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Four Playbooks for Session History Management
      </h2>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        1. View &amp; Recover Claude Code Session History — for finding lost code
      </h3>
      <p>
        The most common session history need: you closed a session and want something back.
        Maybe Claude wrote a migration script you never committed. Maybe it refactored a
        function in a way you want to reference. Maybe the terminal crashed mid-session.
        The code is in{' '}
        <code className="text-[#22d3ee] text-sm bg-[#161b22] px-1.5 py-0.5 rounded">
          ~/.claude/
        </code>{' '}
        — you just need to find it.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/session-history-recovery">
          View &amp; Recover Claude Code Session History
        </PlaybookLink>{' '}
        playbook turns the search into a structured workflow. Describe what you&apos;re
        looking for — the approximate date, a file name, a keyword from the conversation,
        a function name — and it scans the{' '}
        <code className="text-[#22d3ee] text-sm bg-[#161b22] px-1.5 py-0.5 rounded">
          ~/.claude/
        </code>{' '}
        directory, extracts matching sessions, reconstructs the relevant code blocks
        with their original file paths and context, and presents them ready to copy or
        re-apply.
      </p>
      <CodeBlock label="example prompt">{`"Find the database migration code Claude wrote for me last Tuesday.
It was for the users table — adding the email_verified column."`}</CodeBlock>
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 my-3 text-sm">
        → Scans session files from that timeframe, finds the migration code block, extracts
        it with the original file path and surrounding context, and offers to re-apply the
        change to the current project.
      </div>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        2. Session Logging Protocol — for capturing decisions as they happen
      </h3>
      <p>
        Session recovery solves the problem of finding past work reactively. The{' '}
        <PlaybookLink href="/playbooks/session-logging-protocol">
          Session Logging Protocol
        </PlaybookLink>{' '}
        playbook solves it proactively: it automatically detects architectural decision
        points during a development session and logs them — the decision made, alternatives
        considered, and the rationale — into a structured, searchable log file alongside
        your code.
      </p>
      <p>
        Six months later, when you or a teammate wonders why a certain design choice was
        made, the answer is in a log file rather than lost with the session. Each entry
        is timestamped and tagged by topic, so the log becomes a searchable institutional
        knowledge base for the project.
      </p>
      <CodeBlock label="example prompt">{`"Start the session logging protocol for this refactoring session.
Log all architectural decisions, including why we chose to extract
the payment module separately instead of keeping it inline."`}</CodeBlock>
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 my-3 text-sm">
        → Produces a structured decision log at{' '}
        <code className="text-[#22d3ee] text-sm bg-[#0d1117] px-1.5 py-0.5 rounded">
          docs/decisions.md
        </code>{' '}
        with timestamped entries for each key decision point, alternatives considered,
        and rationale — updated throughout the session.
      </div>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        3. Session Capture &amp; Handoff — for cross-session continuity
      </h3>
      <p>
        Every time you start a new Claude Code session, you lose the context of the previous
        one. The new session doesn&apos;t know what decisions were made yesterday, what
        blockers are open, or what was left mid-task. The first ten minutes of every
        session become re-explaining.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/session-capture-handoff">
          Session Capture &amp; Handoff
        </PlaybookLink>{' '}
        playbook solves this by running at session end and producing a structured handoff
        note: key decisions made, open questions with context, completed vs. remaining
        tasks, and a file change log with rationale. The next session loads this note
        as its starting context — continuity in two commands.
      </p>
      <CodeBlock label="example prompt">{`"Capture this session for handoff. I'm stopping for the day and want
to continue tomorrow without losing context. Summarize decisions,
open blockers, and what's left on the auth refactor."`}</CodeBlock>
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 my-3 text-sm">
        → A{' '}
        <code className="text-[#22d3ee] text-sm bg-[#0d1117] px-1.5 py-0.5 rounded">
          SESSION_HANDOFF.md
        </code>{' '}
        with decisions, blockers, completed/remaining tasks, and file change log.
        Load it in the next session: &quot;Read SESSION_HANDOFF.md and continue from there.&quot;
      </div>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        4. Chat History Mind Mapper — for knowledge extraction across sessions
      </h3>
      <p>
        If you use Claude Code heavily, you accumulate months of session history. That
        history contains a lot of accumulated problem-solving — approaches that worked, dead
        ends, architectural insights, debugging patterns. It&apos;s institutional knowledge
        that&apos;s effectively invisible because it&apos;s buried in hundreds of session
        files.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/chat-history-mind-mapper">
          Chat History Mind Mapper
        </PlaybookLink>{' '}
        playbook exports your session history, chunks it into summaries, and generates a
        visual mind map organized by topic cluster — surfacing recurring themes, key
        insights, and patterns across sessions. The output is importable into NotebookLM
        or Obsidian, turning scattered session history into a searchable second brain.
      </p>
      <CodeBlock label="example prompt">{`"Map my last 6 months of Claude Code sessions. Cluster by topic area
(auth, database, API layer, devops) and surface the key decisions
and solutions from each cluster."`}</CodeBlock>
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 my-3 text-sm">
        → Session history chunked, summarized, and organized into a visual mind map with
        topic clusters, key insights per cluster, and recurring patterns — ready to
        import into NotebookLM or Obsidian.
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Which Approach to Use
      </h2>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            I need to get back to where I just left off
          </p>
          <p className="text-sm">
            Use <code className="text-[#22d3ee] bg-[#0d1117] px-1.5 py-0.5 rounded text-xs">claude --continue</code>{' '}
            or <code className="text-[#22d3ee] bg-[#0d1117] px-1.5 py-0.5 rounded text-xs">claude --resume</code>.
            Built-in, instant, no playbook needed.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            I lost code Claude wrote in a past session
          </p>
          <p className="text-sm">
            Use the <strong className="text-foreground">Session History Recovery</strong> playbook.
            Describe what you&apos;re looking for; it scans{' '}
            <code className="text-[#22d3ee] bg-[#0d1117] px-1.5 py-0.5 rounded text-xs">~/.claude/</code>{' '}
            and extracts the relevant code.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            I want to document decisions during a session
          </p>
          <p className="text-sm">
            Use the <strong className="text-foreground">Session Logging Protocol</strong>.
            Activate it at session start; it auto-logs key decisions throughout.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            I&apos;m stopping for the day and want to continue seamlessly tomorrow
          </p>
          <p className="text-sm">
            Use the <strong className="text-foreground">Session Capture &amp; Handoff</strong>{' '}
            playbook at session end. Load the handoff note at the start of tomorrow&apos;s session.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            I want to extract knowledge from months of session history
          </p>
          <p className="text-sm">
            Use the <strong className="text-foreground">Chat History Mind Mapper</strong>.
            Export, cluster, and import into NotebookLM or Obsidian.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Common Questions
      </h2>
      <div className="space-y-4 my-4">
        <div>
          <p className="font-semibold text-foreground mb-1">
            &quot;How long does Claude Code keep session history?&quot;
          </p>
          <p className="text-sm">
            Session files in{' '}
            <code className="text-[#22d3ee] text-sm bg-[#161b22] px-1.5 py-0.5 rounded">
              ~/.claude/
            </code>{' '}
            are kept indefinitely — they don&apos;t expire or auto-delete. They only disappear
            if you manually delete them or clear the directory. On a typical development machine,
            the{' '}
            <code className="text-[#22d3ee] text-sm bg-[#161b22] px-1.5 py-0.5 rounded">
              ~/.claude/
            </code>{' '}
            directory stays manageable in size (a few hundred MB) even after years of use.
          </p>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-1">
            &quot;Is my session history private?&quot;
          </p>
          <p className="text-sm">
            Session files stay on your local machine — they&apos;re not synced to Anthropic
            or any cloud service by default. The content of your sessions (code, file paths,
            conversation) lives only on the machine where Claude Code is installed.
          </p>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-1">
            &quot;Can I view session history on a different machine?&quot;
          </p>
          <p className="text-sm">
            Sessions are local, so they don&apos;t automatically transfer between machines.
            You can copy the{' '}
            <code className="text-[#22d3ee] text-sm bg-[#161b22] px-1.5 py-0.5 rounded">
              ~/.claude/projects/
            </code>{' '}
            directory manually to another machine and Claude Code will recognize the session
            files there. The Session Capture &amp; Handoff playbook is a cleaner alternative
            for multi-machine workflows — it produces a portable markdown file instead of
            depending on raw session files.
          </p>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-1">
            &quot;Can I search sessions for a specific file that was changed?&quot;
          </p>
          <p className="text-sm">
            Yes — file modification events are logged as tool calls in the session JSONL.
            The Session History Recovery playbook can search specifically for file-change
            events, making it easy to find &quot;what did Claude do to auth.ts in the session
            last Thursday&quot; without sifting through conversation text manually.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Playbooks
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/session-history-recovery"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">View &amp; Recover Session History</p>
          <p className="text-sm text-muted-foreground">
            Find and extract lost code from past Claude Code sessions by keyword, date, or file.
          </p>
        </Link>
        <Link
          href="/playbooks/session-logging-protocol"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Session Logging Protocol</p>
          <p className="text-sm text-muted-foreground">
            Automatically log design decisions and rationale during sessions into a searchable file.
          </p>
        </Link>
        <Link
          href="/playbooks/session-capture-handoff"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Session Capture &amp; Handoff</p>
          <p className="text-sm text-muted-foreground">
            Capture decisions, blockers, and next steps at session end for seamless continuation.
          </p>
        </Link>
        <Link
          href="/playbooks/chat-history-mind-mapper"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Chat History Mind Mapper</p>
          <p className="text-sm text-muted-foreground">
            Export and visualize months of session history as clustered mind maps for NotebookLM or Obsidian.
          </p>
        </Link>
      </div>
      <p>
        The{' '}
        <code className="text-[#22d3ee] text-sm bg-[#161b22] px-1.5 py-0.5 rounded">
          ~/.claude/
        </code>{' '}
        directory is one of the most underutilized features of Claude Code. Most developers
        discover it only after losing code they wish they&apos;d saved — and then realize
        the history was there all along. The built-in{' '}
        <code className="text-[#22d3ee] text-sm bg-[#161b22] px-1.5 py-0.5 rounded">
          --resume
        </code>{' '}
        and{' '}
        <code className="text-[#22d3ee] text-sm bg-[#161b22] px-1.5 py-0.5 rounded">
          --continue
        </code>{' '}
        flags cover the simple cases. The four playbooks above cover everything else.
      </p>
    </BlogPostLayout>
  );
}
