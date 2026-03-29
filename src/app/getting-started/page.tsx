import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Download, Monitor, Terminal, Star, ArrowLeft, AlertTriangle, Info, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Getting Started | Claude Code Playbooks',
  description: 'Install Claude Code on Windows in under 3 minutes. Step-by-step guide for complete beginners — no coding experience needed.',
  openGraph: {
    title: 'Getting Started with Claude Code Playbooks',
    description: 'Install Claude Code on Windows in under 3 minutes. Step-by-step guide for beginners.',
    url: 'https://www.claudecodehq.com/getting-started',
  },
};

function StepCard({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="bg-[#161b22] border-[#30363d]">
      <CardContent className="p-5">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#f97316] text-[#0d1117] text-sm font-bold flex items-center justify-center mt-0.5">
            {number}
          </span>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground text-base mb-2">{title}</h3>
            <div className="text-sm text-muted-foreground space-y-2">{children}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function InfoBox({ children, variant = 'info' }: { children: React.ReactNode; variant?: 'info' | 'warning' | 'tip' }) {
  const styles = {
    info: 'border-l-[#3b82f6] bg-[#3b82f6]/5 text-[#93c5fd]',
    warning: 'border-l-[#f59e0b] bg-[#f59e0b]/5 text-[#fcd34d]',
    tip: 'border-l-[#22c55e] bg-[#22c55e]/5 text-[#86efac]',
  };
  const icons = {
    info: <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />,
    warning: <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" />,
    tip: <Star className="h-4 w-4 flex-shrink-0 mt-0.5" />,
  };
  return (
    <div className={`border-l-4 rounded-r-md px-4 py-3 text-sm flex items-start gap-2 ${styles[variant]}`}>
      {icons[variant]}
      <div>{children}</div>
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg border border-[#30363d] bg-[#161b22]">
      <CheckCircle2 className="h-5 w-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
      <div className="text-sm">{children}</div>
    </div>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-2 bg-[#0d1117] rounded-md px-3 py-2 border border-[#30363d] font-mono text-sm">
      <code className="text-[#e6edf3]">{children}</code>
    </div>
  );
}

function TabButton({ id, label, icon: Icon, active }: { id: string; label: string; icon: React.ElementType; active?: boolean }) {
  return (
    <a
      href={`#${id}`}
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-t-lg border text-sm font-medium transition-all ${
        active
          ? 'bg-[#161b22] border-[#30363d] border-b-[#161b22] text-foreground'
          : 'bg-transparent border-transparent text-muted-foreground hover:text-foreground hover:bg-[#161b22]/50'
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen">
      <div className="container max-w-3xl py-12 md:py-16">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[#22d3ee] transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Playbooks
        </Link>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Install Claude Code on Windows
        </h1>
        <InfoBox variant="info">
          Claude Code is a terminal-based AI coding assistant. It lives in your command line and can read, write, and edit code in your projects.
        </InfoBox>

        {/* What You Need */}
        <div className="mt-10 mb-8">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
            What you need
          </p>
          <div className="grid gap-3">
            <CheckItem>
              <p className="font-medium text-foreground">A Claude account (paid plan recommended)</p>
              <p className="text-muted-foreground mt-1">
                Claude Code is free to install, but you&apos;ll need a Claude Max subscription or Anthropic API credits to actually use it. Max is usually cheaper for heavy use.
              </p>
            </CheckItem>
            <CheckItem>
              <p className="font-medium text-foreground">Windows 10 or 11 (any architecture)</p>
              <p className="text-muted-foreground mt-1">
                ARM64 laptops are fully supported. No WSL (Linux subsystem) required &mdash; Claude Code runs natively on Windows since 2025.
              </p>
            </CheckItem>
          </div>
        </div>

        {/* Choose Your Path */}
        <div className="mb-6">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
            Choose your installation method
          </p>
          <div className="flex gap-1 border-b border-[#30363d]">
            <TabButton id="desktop" label="Claude Desktop App" icon={Monitor} active />
            <TabButton id="cli" label="Claude Code (CLI)" icon={Terminal} />
            <TabButton id="first-steps" label="First Steps" icon={Sparkles} />
          </div>
        </div>

        {/* ─── OPTION A: CLAUDE DESKTOP APP ─── */}
        <section id="desktop" className="mb-16">
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Install Claude Desktop on Windows
          </h2>
          <InfoBox variant="tip">
            This is the easiest way to get started. No terminal needed &mdash; just download and sign in.
          </InfoBox>

          <div className="mt-6 space-y-4">
            <StepCard number={1} title="Go to the download page">
              <p>
                Open your browser and visit{' '}
                <a href="https://claude.ai/download" target="_blank" rel="noopener noreferrer" className="text-[#22d3ee] hover:underline font-medium">
                  claude.ai/download
                </a>
                . Click the <strong className="text-foreground">Windows</strong> button to download the installer.
              </p>
            </StepCard>

            <StepCard number={2} title="Run the installer">
              <p>
                Open the downloaded file (it will be a .exe or .msix installer). Click through the install screens &mdash; all defaults are fine.
              </p>
              <div className="mt-2">
                <InfoBox variant="info">
                  No administrator rights needed. The app installs per-user by default.
                </InfoBox>
              </div>
            </StepCard>

            <StepCard number={3} title="Launch Claude">
              <p>
                Find Claude in your Start menu and open it. It will ask you to sign in with your claude.ai account.
              </p>
            </StepCard>

            <StepCard number={4} title="Sign in and you're done">
              <p>
                After logging in, you&apos;ll see the main chat interface. You can start chatting right away &mdash; just like the web version, but running locally on your computer.
              </p>
            </StepCard>
          </div>

          {/* Bonus: Cowork */}
          <div className="mt-8">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
              Bonus feature: Cowork
            </p>
            <Card className="bg-[#161b22] border-[#30363d]">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground text-base mb-2">
                      Cowork &mdash; let Claude work on your files
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      If you have a paid plan (Pro, Max, Team, Enterprise), look for the <strong className="text-foreground">Cowork</strong> tab inside the app. It lets Claude access your local files, organize folders, write documents, build spreadsheets, and handle long tasks &mdash; all without you lifting a finger. It runs in an isolated virtual machine for safety.
                    </p>
                    <InfoBox variant="info">
                      Cowork is in research preview &mdash; expect it to get even better over time.
                    </InfoBox>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ─── OPTION B: CLAUDE CODE (CLI) ─── */}
        <section id="cli" className="mb-16">
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Install Claude Code on Windows
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            The command-line version gives you full power &mdash; ideal for developers and power users.
          </p>

          {/* Step 1: Git */}
          <div className="mb-6">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
              Step 1 &mdash; Install Git for Windows
            </p>
            <div className="space-y-4">
              <StepCard number={1} title="Download and install Git">
                <p>
                  Claude Code needs Git (and its built-in Bash terminal) to run on Windows. Go to{' '}
                  <a href="https://git-scm.com/download/win" target="_blank" rel="noopener noreferrer" className="text-[#22d3ee] hover:underline font-medium">
                    git-scm.com/download/win
                  </a>{' '}
                  and run the installer. Click &quot;Next&quot; on every screen &mdash; all default options are fine.
                </p>
                <div className="mt-2">
                  <InfoBox variant="info">
                    After installing Git, you&apos;ll have &quot;Git Bash&quot; available &mdash; this is the terminal you&apos;ll use for Claude Code.
                  </InfoBox>
                </div>
              </StepCard>
            </div>
          </div>

          {/* Step 2: Install Claude Code */}
          <div className="mb-6">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
              Step 2 &mdash; Install Claude Code
            </p>
            <div className="space-y-4">
              <StepCard number={2} title="Open PowerShell as Administrator">
                <p>
                  Press the Windows key, type &quot;Terminal&quot; or &quot;PowerShell&quot;, right-click the result, and choose <strong className="text-foreground">Run as administrator</strong>.
                </p>
              </StepCard>

              <StepCard number={3} title="Run the official installer command">
                <p>
                  Paste this command and press Enter. It downloads and installs Claude Code automatically &mdash; no Node.js needed.
                </p>
                <div className="mt-2">
                  <CodeBlock>irm https://claude.ai/install.ps1 | iex</CodeBlock>
                </div>
                <div className="mt-3">
                  <InfoBox variant="warning">
                    If you see an error like &quot;running scripts is disabled&quot;, run this first, then retry:{' '}
                    <code className="text-[#fcd34d]">Set-ExecutionPolicy RemoteSigned -Scope CurrentUser</code>
                  </InfoBox>
                </div>
              </StepCard>

              <StepCard number={4} title="Close PowerShell and open Git Bash">
                <p>
                  Important: you must open a <strong className="text-foreground">new</strong> terminal window for the installation to take effect. Search for &quot;Git Bash&quot; in the Start menu and open it.
                </p>
              </StepCard>

              <StepCard number={5} title="Verify the installation">
                <p>Type this and press Enter:</p>
                <div className="mt-2">
                  <CodeBlock>claude --version</CodeBlock>
                </div>
                <p className="mt-2">
                  If you see a version number (like <code className="text-[#e6edf3]">1.x.x</code>), you&apos;re good to go!
                </p>
                <div className="mt-2">
                  <InfoBox variant="warning">
                    If you see &quot;claude is not recognized&quot;, make sure you opened Git Bash (not regular Command Prompt), or open a brand new terminal window.
                  </InfoBox>
                </div>
              </StepCard>
            </div>
          </div>

          {/* Step 3: Sign In */}
          <div className="mb-6">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
              Step 3 &mdash; Sign in
            </p>
            <div className="space-y-4">
              <StepCard number={6} title="Run Claude for the first time">
                <p>In Git Bash, type:</p>
                <div className="mt-2">
                  <CodeBlock>claude</CodeBlock>
                </div>
                <p className="mt-2">
                  A browser window will open asking you to log in with your Anthropic account. Complete the login &mdash; this is a one-time step.
                </p>
                <div className="mt-2">
                  <InfoBox variant="info">
                    No API key management needed. Claude Code uses OAuth &mdash; just log in like a normal app.
                  </InfoBox>
                </div>
              </StepCard>
            </div>
          </div>
        </section>

        {/* ─── FIRST STEPS: USING A PLAYBOOK ─── */}
        <section id="first-steps" className="mb-16">
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Use Your First Playbook
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Now that Claude is installed, here&apos;s how to use any playbook from this site.
          </p>

          <div className="space-y-4">
            <StepCard number={1} title="Pick a playbook">
              <p>
                <Link href="/playbooks" className="text-[#22d3ee] hover:underline font-medium">
                  Browse the playbooks
                </Link>{' '}
                and find one that matches what you need. Each playbook has a difficulty level and estimated setup time.
              </p>
            </StepCard>

            <StepCard number={2} title="Create a project folder">
              <p>
                Create a new folder on your computer for the project. For example, right-click on your Desktop &rarr; <strong className="text-foreground">New</strong> &rarr; <strong className="text-foreground">Folder</strong> &rarr; name it something like <code className="text-[#e6edf3]">my-project</code>.
              </p>
            </StepCard>

            <StepCard number={3} title="Download the CLAUDE.md template">
              <p>
                On the playbook page, click the <strong className="text-foreground">Download</strong> button. This saves a file called <code className="text-[#e6edf3]">CLAUDE.md</code>. Move this file into the project folder you just created.
              </p>
              <div className="mt-2">
                <InfoBox variant="tip">
                  The CLAUDE.md file is like an instruction manual for Claude. When Claude sees this file in a folder, it knows exactly what to do.
                </InfoBox>
              </div>
            </StepCard>

            <StepCard number={4} title="Open Claude and point it to your folder">
              <p className="mb-2">
                <strong className="text-foreground">Desktop app:</strong> Open Claude Desktop, go to the Cowork tab, and select your project folder.
              </p>
              <p>
                <strong className="text-foreground">CLI (terminal):</strong> In Git Bash, navigate to your folder and run Claude:
              </p>
              <div className="mt-2 space-y-1">
                <CodeBlock>cd ~/Desktop/my-project</CodeBlock>
                <CodeBlock>claude</CodeBlock>
              </div>
            </StepCard>

            <StepCard number={5} title="Start working!">
              <p>
                Claude will automatically read the CLAUDE.md file and understand your workflow. Just tell it what you need in plain English &mdash; for example:
              </p>
              <div className="mt-2 bg-[#0d1117] rounded-md px-3 py-2 border border-[#30363d]">
                <p className="text-sm text-[#e6edf3] italic">&quot;Organize all my tax documents in this folder&quot;</p>
              </div>
              <div className="mt-3">
                <InfoBox variant="tip">
                  That&apos;s it! Claude reads your CLAUDE.md, understands the playbook, and gets to work.
                </InfoBox>
              </div>
            </StepCard>
          </div>
        </section>

        {/* Back to playbooks */}
        <div className="text-center pt-8 border-t border-[#30363d]">
          <p className="text-muted-foreground mb-4">Ready to go?</p>
          <Link
            href="/playbooks"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f97316] text-[#0d1117] font-semibold hover:bg-[#fb923c] transition-all"
          >
            Browse Playbooks
          </Link>
        </div>
      </div>
    </div>
  );
}
