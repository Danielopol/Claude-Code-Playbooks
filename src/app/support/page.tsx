import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Support | Claude Code Playbooks',
  description: 'Get help with Claude Code Playbooks, the MCP server, the ChatGPT plugin and the CLI, report a problem, or request a correction or removal.',
  alternates: {
    canonical: '/support',
  },
  openGraph: {
    title: 'Support | Claude Code Playbooks',
    description: 'Get help with Claude Code Playbooks, the MCP server, the ChatGPT plugin and the CLI, report a problem, or request a correction or removal.',
    url: 'https://www.claudecodehq.com/support',
    type: 'website',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Support | Claude Code Playbooks',
    description: 'Get help with Claude Code Playbooks, the MCP server, the ChatGPT plugin and the CLI, report a problem, or request a correction or removal.',
    images: ['https://www.claudecodehq.com/og-image.jpg'],
  },
};

const linkClass = 'text-[#22d3ee] hover:underline';

export default function SupportPage() {
  return (
    <div className="container mx-auto py-12 max-w-3xl">
      <h1 className="text-2xl font-bold mb-8">Support</h1>

      <div className="space-y-8 text-sm text-muted-foreground">
        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Contact us</h2>
          <p>
            For help with the website, the MCP server, the ChatGPT plugin or the CLI, email{' '}
            <a href="mailto:valentin.marin83@gmail.com" className={linkClass}>valentin.marin83@gmail.com</a>. Include the playbook name or page URL and, for a plugin problem, the prompt you used and what happened.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Report a bug</h2>
          <p>
            You can also open an issue on{' '}
            <a href="https://github.com/Danielopol/Claude-Code-Playbooks/issues" target="_blank" rel="noopener noreferrer" className={linkClass}>GitHub</a>.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Corrections and removals</h2>
          <p>
            If you wrote something published here and want it changed or taken down, see{' '}
            <Link href="/licensing" className={linkClass}>Licensing &amp; Attribution</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Your data</h2>
          <p>
            See the <Link href="/privacy" className={linkClass}>Privacy Policy</Link> for what we collect and how to exercise your privacy rights.
          </p>
        </section>
      </div>
    </div>
  );
}
