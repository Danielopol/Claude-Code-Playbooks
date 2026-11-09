import { Metadata } from 'next';
import Link from 'next/link';
import { CopyButton } from '@/components/CopyButton';
import { getAllPlaybooks } from '@/lib/playbooks';
import { categories } from '@/lib/categories';
import { BASE_URL } from '@/lib/api';

/**
 * Public documentation for the remote MCP server at /api/mcp
 * (src/app/api/mcp/route.ts, tools in src/lib/mcp.ts). Directory listings
 * (Claude Connectors Directory, ChatGPT plugins) link here as the server's
 * documentation URL, so keep the tool list and parameters in step with
 * src/lib/mcp.ts.
 */

const title = 'MCP Server | Claude Code Playbooks';
const description =
  'Connect Claude, Claude Code or any MCP client to the Claude Code Playbooks library. Search playbooks and install CLAUDE.md templates and Skills from chat. Free, read-only, no account needed.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/mcp' },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}/mcp`,
    type: 'website',
    images: [{ url: `${BASE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${BASE_URL}/og-image.jpg`],
  },
};

const MCP_URL = `${BASE_URL}/api/mcp`;
const CLAUDE_CODE_COMMAND = `claude mcp add --transport http claude-code-playbooks ${MCP_URL}`;

const linkClass = 'text-[#22d3ee] hover:underline';
const h2Class = 'text-lg font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2';

function CopyLine({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap rounded-md border border-[#30363d] bg-[#0d1117] px-3 py-2 font-mono text-[13px] text-[#e6edf3]">
        {text}
      </code>
      <CopyButton text={text} className="shrink-0" />
    </div>
  );
}

type Param = { name: string; type: string; description: string };

function ToolCard({
  name,
  toolTitle,
  children,
  params,
  returns,
}: {
  name: string;
  toolTitle: string;
  children: React.ReactNode;
  params: Param[];
  returns: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-[#30363d] bg-[#161b22] p-5">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
        <h3 className="font-mono text-base font-semibold text-[#22d3ee]">{name}</h3>
        <span className="text-sm text-foreground">{toolTitle}</span>
        <span className="ml-auto rounded-full border border-[#22c55e]/40 bg-[#22c55e]/10 px-2 py-0.5 text-xs text-[#86efac]">
          Read-only
        </span>
      </div>
      <p className="mb-4">{children}</p>
      <h4 className="text-xs font-semibold uppercase tracking-wide text-foreground/80 mb-2">Parameters</h4>
      {params.length === 0 ? (
        <p className="mb-4">None.</p>
      ) : (
        <ul className="mb-4 space-y-2">
          {params.map((p) => (
            <li key={p.name}>
              <code className="font-mono text-[13px] text-[#e6edf3]">{p.name}</code>{' '}
              <span className="text-xs text-muted-foreground/80">({p.type})</span>: {p.description}
            </li>
          ))}
        </ul>
      )}
      <h4 className="text-xs font-semibold uppercase tracking-wide text-foreground/80 mb-2">Returns</h4>
      <div>{returns}</div>
    </section>
  );
}

export default function McpDocsPage() {
  const playbooks = getAllPlaybooks();
  const playbookCount = playbooks.length;
  // list_categories only returns categories that have playbooks.
  const categoryCount = categories.filter((c) => playbooks.some((p) => p.category === c.id)).length;

  return (
    <div className="container mx-auto py-12 max-w-3xl">
      <h1 className="text-2xl font-bold mb-3">Claude Code Playbooks MCP Server</h1>
      <p className="text-muted-foreground mb-8">
        Search the library of {playbookCount.toLocaleString('en-US')} playbooks and install CLAUDE.md templates and Skills without leaving your
        AI app. The server is free, read-only and needs no account.
      </p>

      <div className="space-y-4 text-sm text-muted-foreground">
        <div className="rounded-lg border border-[#30363d] bg-[#161b22] p-5">
          <p className="text-foreground font-medium mb-2">Server URL</p>
          <CopyLine text={MCP_URL} />
          <p className="mt-3 text-xs">
            Remote MCP server over Streamable HTTP. Authentication: none.
          </p>
        </div>

        <h2 className={h2Class}>What it does</h2>
        <p>
          The server gives your AI app three tools: one to search the{' '}
          <Link href="/playbooks" className={linkClass}>playbook library</Link>, one to fetch a playbook with its full
          template, and one to list the {categoryCount} categories. Ask for help with a task, and the app can find a
          matching playbook and set it up for you. Claude Code saves the template into your project. In a chat app,
          you get the template to copy along with where to save it.
        </p>
        <p>
          It serves the same playbooks and search ranking as this website, the{' '}
          <a href={`${BASE_URL}/api/v1`} className={linkClass}>JSON API</a> and the{' '}
          <a href="https://www.npmjs.com/package/ccplaybooks" target="_blank" rel="noopener noreferrer" className={linkClass}>
            ccplaybooks
          </a>{' '}
          CLI.
        </p>

        <h2 className={h2Class}>Connect it</h2>

        <h3 className="text-base font-semibold text-foreground">Claude (web, desktop and mobile)</h3>
        <ol className="list-decimal list-inside space-y-2 ml-2">
          <li>
            Open <strong className="text-foreground">Settings → Connectors</strong> and choose{' '}
            <strong className="text-foreground">Add custom connector</strong>.
          </li>
          <li>
            Name it <strong className="text-foreground">Claude Code Playbooks</strong> and paste the server URL above.
            Leave the OAuth fields empty.
          </li>
          <li>
            Turn the connector on in a chat from the tools menu, then ask for a playbook (examples below).
          </li>
        </ol>
        <p>
          On Team and Enterprise plans, an Owner may need to add the connector for the organization first.
        </p>

        <h3 className="text-base font-semibold text-foreground pt-4">Claude Code</h3>
        <p>Run this once in your terminal:</p>
        <CopyLine text={CLAUDE_CODE_COMMAND} />
        <p>
          Add <code className="font-mono text-[13px] text-[#e6edf3]">--scope user</code> to make it available in every
          project. Run <code className="font-mono text-[13px] text-[#e6edf3]">/mcp</code> inside Claude Code to check
          that it is connected.
        </p>

        <h3 className="text-base font-semibold text-foreground pt-4">Other MCP clients</h3>
        <p>
          Any client that supports remote MCP servers over Streamable HTTP can connect to the server URL with no
          authentication. A JSON config usually looks like this:
        </p>
        <pre className="overflow-x-auto rounded-md border border-[#30363d] bg-[#0d1117] px-3 py-2 font-mono text-[13px] text-[#e6edf3]">
          {JSON.stringify({ mcpServers: { 'claude-code-playbooks': { type: 'http', url: MCP_URL } } }, null, 2)}
        </pre>

        <h2 className={h2Class}>Tools</h2>
        <p>
          All three tools only read the public playbook library. They are marked{' '}
          <code className="font-mono text-[13px] text-[#e6edf3]">readOnlyHint: true</code> and{' '}
          <code className="font-mono text-[13px] text-[#e6edf3]">destructiveHint: false</code>, and they never change
          anything on the server or in your accounts.
        </p>

        <div className="space-y-4 pt-2">
          <ToolCard
            name="search_playbooks"
            toolTitle="Search playbooks"
            params={[
              {
                name: 'query',
                type: 'string, optional, up to 200 characters',
                description:
                  'One to three keywords, such as "invoice automation". Every word has to match a playbook title, tag or description. Leave it out to list the newest playbooks.',
              },
              { name: 'category', type: 'string, optional', description: 'A category id from list_categories.' },
              { name: 'difficulty', type: 'string, optional', description: 'beginner, intermediate or advanced.' },
              { name: 'limit', type: 'integer 1 to 25, default 10', description: 'How many results to return.' },
            ]}
            returns={
              <p>
                The total number of matches and, for each result, its slug, title, description, category, difficulty,
                setup time and page URL, ranked by relevance. If nothing matches, it suggests trying broader words.
              </p>
            }
          >
            Finds playbooks by keyword, category or difficulty.
          </ToolCard>

          <ToolCard
            name="get_playbook"
            toolTitle="Get a playbook"
            params={[
              {
                name: 'slug',
                type: 'string, required',
                description: 'The playbook slug from search_playbooks, such as "invoice-automation".',
              },
            ]}
            returns={
              <p>
                What the playbook does, who it is for, its author and source, license details where they apply, and the
                full template. It also says where to save the template: <code className="font-mono text-[13px] text-[#e6edf3]">CLAUDE.md</code>{' '}
                in the project folder, or <code className="font-mono text-[13px] text-[#e6edf3]">.claude/skills/&lt;name&gt;/SKILL.md</code>{' '}
                for a Skill. It includes an attribution comment to keep at the top of the saved file. An unknown slug
                returns an error with up to three similar slugs.
              </p>
            }
          >
            Gets one playbook with its full template.
          </ToolCard>

          <ToolCard
            name="list_categories"
            toolTitle="List categories"
            params={[]}
            returns={<p>Each category&apos;s id, name, description and number of playbooks.</p>}
          >
            Lists the playbook categories, so searches can be narrowed to one.
          </ToolCard>
        </div>

        <h2 className={h2Class}>Example prompts</h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>&quot;Find a playbook for organizing my Downloads folder and set it up in this project.&quot;</li>
          <li>&quot;Is there a playbook for reviewing contracts? Show me the best two and what each one does.&quot;</li>
          <li>&quot;What categories of playbooks are there? List the beginner ones for marketing.&quot;</li>
          <li>&quot;Install the invoice-automation playbook as my CLAUDE.md.&quot;</li>
        </ul>

        <h2 className={h2Class}>How installing works</h2>
        <p>
          A remote server can&apos;t reach your computer, so the server never writes files itself. It sends the template
          and the path to save it at, and your AI app does the rest:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>
            <strong className="text-foreground">Claude Code</strong> and other apps that can edit files save it to the
            right place. If a CLAUDE.md already exists, the server tells the app to ask you before replacing it;
            appending is usually the safer choice.
          </li>
          <li>
            <strong className="text-foreground">Chat apps</strong> show the template in a code block, say where it
            belongs, and link the playbook page so you can download it.
          </li>
        </ul>
        <p>
          Every template starts with an attribution comment naming the playbook and its original source. Some
          templates carry a license notice that has to stay with every copy. See{' '}
          <Link href="/licensing" className={linkClass}>Licensing &amp; Attribution</Link>.
        </p>

        <h2 className={h2Class}>Privacy and data</h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>No account, no sign-in, no API key.</li>
          <li>
            The server only receives the search words, filters or slug your AI app sends, plus standard request details
            such as IP address and time. It can&apos;t see your files, your conversation or your accounts.
          </li>
          <li>
            Search terms aren&apos;t saved, profiled or used for advertising, and tool responses contain no ads or
            affiliate offers.
          </li>
        </ul>
        <p>
          Full details are in the <Link href="/privacy" className={linkClass}>Privacy Policy</Link>.
        </p>

        <h2 className={h2Class}>Limits</h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>Searches return up to 25 results at a time.</li>
          <li>The server only covers the playbooks published on this site.</li>
          <li>Nothing is kept between requests, so there are no saved searches or favorites.</li>
        </ul>

        <h2 className={h2Class}>Troubleshooting</h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>
            <strong className="text-foreground">Opening the URL in a browser shows an error.</strong> That&apos;s
            expected: the URL is for MCP clients, not browsers. Add it to your AI app instead.
          </li>
          <li>
            <strong className="text-foreground">A search finds nothing.</strong> Every word in the query has to match,
            so try one or two broader words, or ask for the list of categories.
          </li>
          <li>
            <strong className="text-foreground">Claude doesn&apos;t use the tools.</strong> Check that the connector is
            turned on for the chat, or run <code className="font-mono text-[13px] text-[#e6edf3]">/mcp</code> in Claude
            Code, then name the library in your prompt: &quot;Search Claude Code Playbooks for…&quot;.
          </li>
        </ul>

        <h2 className={h2Class}>Support</h2>
        <p>
          For help or to report a problem, see <Link href="/support" className={linkClass}>Support</Link> or open an issue
          on{' '}
          <a
            href="https://github.com/Danielopol/Claude-Code-Playbooks/issues"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}
