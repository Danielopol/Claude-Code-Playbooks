import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'How to Use Claude with n8n: readPDF, Anthropic Nodes, and Workflow Automation | Claude Code Playbooks Blog',
  description: 'Step-by-step guide to wiring Claude into n8n using the n8n-nodes-base.anthropic and n8n-nodes-base.readpdf nodes — with full JSON workflow examples.',
  alternates: { canonical: '/blog/claude-n8n-workflow-anthropic-readpdf' },
  openGraph: {
    title: 'How to Use Claude with n8n: readPDF, Anthropic Nodes, and Workflow Automation',
    description: 'Step-by-step guide to wiring Claude into n8n using the n8n-nodes-base.anthropic and n8n-nodes-base.readpdf nodes — with full JSON workflow examples.',
    url: 'https://www.claudecodehq.com/blog/claude-n8n-workflow-anthropic-readpdf',
    type: 'article',
    publishedTime: '2026-05-07',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Use Claude with n8n: readPDF, Anthropic Nodes, and Workflow Automation',
    description: 'Wire Claude into n8n with the Anthropic and readPDF nodes — step-by-step with full JSON examples.',
    images: ['https://www.claudecodehq.com/og-image.jpg'],
  },
};

function C({ children }: { children: React.ReactNode }) {
  return (
    <code className="bg-[#161b22] px-1.5 py-0.5 rounded text-[#22d3ee] text-sm font-mono">
      {children}
    </code>
  );
}

function PlaybookLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[#22d3ee] hover:underline font-medium">
      {children}
    </Link>
  );
}

export default function ClaudeN8nWorkflowPage() {
  return (
    <BlogPostLayout
      title="How to Use Claude with n8n: readPDF, Anthropic Nodes, and Workflow Automation"
      description="Step-by-step guide to wiring Claude into n8n using the n8n-nodes-base.anthropic and n8n-nodes-base.readpdf nodes — with full JSON workflow examples."
      category="tutorial"
      difficulty="intermediate"
      readingTime="14 min read"
      createdAt="2026-05-07"
      tags={['n8n Claude', 'n8n-nodes-base.anthropic', 'n8n-nodes-base.readpdf', 'n8n workflow automation', 'Claude API n8n', 'read PDF n8n', 'n8n AI workflow']}
      author="Claude Code Playbooks"
      slug="claude-n8n-workflow-anthropic-readpdf"
    >
      {/* Quick Answer block */}
      <div className="bg-[#0d1117] border border-[#22d3ee] rounded-lg p-5 my-2">
        <p className="text-xs font-bold text-[#22d3ee] uppercase tracking-widest mb-2">Quick Answer</p>
        <p className="text-foreground font-medium mb-2">
          To use Claude in an n8n workflow, add an <C>n8n-nodes-base.anthropic</C> node and set your Anthropic API key as a credential. To extract text from PDFs before sending to Claude, chain an <C>n8n-nodes-base.readpdf</C> node first — its <C>text</C> output becomes the prompt input for Claude.
        </p>
        <p className="text-sm">
          The two nodes together cover the most common n8n + Claude pattern: ingest a document, extract its text, then have Claude summarize, classify, or answer questions about it — all without writing code.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Why These Two Nodes Together?
      </h2>
      <p>
        n8n ships native integrations for both Anthropic and PDF reading, and they compose naturally.
        The <C>readpdf</C> node handles binary-to-text conversion; the <C>anthropic</C> node handles
        the API call. You connect them with a single wire and the workflow does the rest.
      </p>
      <p>
        This combination unlocks a large class of document-processing automations that previously
        required Python scripts or dedicated document-intelligence SaaS tools:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li>Summarize incoming contracts or invoices the moment they land in a shared inbox</li>
        <li>Classify uploaded research papers by topic and route them to the right Notion database</li>
        <li>Extract structured data from PDF reports and write the results to a Google Sheet</li>
        <li>Answer questions about a PDF using Claude, then post the answer to Slack</li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Setting Up the Anthropic Node (<C>n8n-nodes-base.anthropic</C>)
      </h2>
      <p>
        The Anthropic node is bundled in n8n&apos;s standard node library — no extra install needed.
        It supports <strong className="text-foreground">Text</strong> and <strong className="text-foreground">Chat</strong> operations
        and maps directly to the Anthropic Messages API.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Step 1 — Add credentials</h3>
      <p>
        Go to <strong className="text-foreground">Settings → Credentials → New</strong> in n8n, search for
        &quot;Anthropic&quot;, and paste your API key. The credential type is simply
        &quot;Anthropic API&quot; — one field.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Step 2 — Configure the node</h3>
      <p>In the node editor, the key fields are:</p>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1"><C>resource</C> / <C>operation</C></p>
          <p className="text-sm">Set <C>resource</C> to <C>text</C> and <C>operation</C> to <C>complete</C> for a single-turn call, or use <C>chat</C> / <C>sendMessage</C> for a conversational flow.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1"><C>model</C></p>
          <p className="text-sm">The model ID string — e.g. <C>claude-sonnet-4-6</C> or <C>claude-haiku-4-5-20251001</C>. Use Haiku for high-volume document classification; use Sonnet for extraction and reasoning tasks.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1"><C>prompt</C> (Text operation) or <C>messages</C> (Chat operation)</p>
          <p className="text-sm">Reference the upstream node output here using an expression — e.g. <C>{'{{ $json.text }}'}</C> when chaining after a readPDF node.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1"><C>maxTokensToSample</C></p>
          <p className="text-sm">Cap the response length. 1024 is a safe default for summaries; bump to 4096 for structured extraction where you need complete JSON output.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Minimal workflow JSON — Anthropic node only</h3>
      <p>
        Here is the n8n workflow JSON for a minimal &quot;send a prompt, get a response&quot; setup.
        Import this via <strong className="text-foreground">Workflows → Import from JSON</strong>:
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <pre className="text-sm font-mono text-[#e6edf3] overflow-x-auto whitespace-pre">
{`{
  "nodes": [
    {
      "parameters": {
        "prompt": "Summarize the following text in three bullet points:\\n\\n{{ $json.body }}"
      },
      "type": "n8n-nodes-base.anthropic",
      "typeVersion": 1,
      "position": [460, 300],
      "name": "Claude – Summarize",
      "credentials": {
        "anthropicApi": {
          "name": "Anthropic API"
        }
      }
    }
  ]
}`}
        </pre>
      </div>
      <p>
        The <C>&quot;type&quot;: &quot;n8n-nodes-base.anthropic&quot;</C> field is how n8n identifies the node
        internally. You&apos;ll see this string in exported workflow JSON whenever the Anthropic node appears.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Reading PDFs Before Sending to Claude (<C>n8n-nodes-base.readpdf</C>)
      </h2>
      <p>
        The <C>n8n-nodes-base.readpdf</C> node converts a binary PDF attachment into plain text.
        It has no configuration options — you pass it a binary item and it outputs a <C>text</C> field.
        That <C>text</C> field is what you reference in the Anthropic node&apos;s prompt expression.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Where the binary comes from</h3>
      <p>
        The most common upstream nodes that produce PDF binary data are:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li><strong className="text-foreground">Gmail / Outlook</strong> — attachment extraction from incoming emails</li>
        <li><strong className="text-foreground">HTTP Request</strong> — fetching a PDF from a URL, with response format set to <C>file</C></li>
        <li><strong className="text-foreground">Google Drive / Dropbox</strong> — downloading a file by ID</li>
        <li><strong className="text-foreground">Webhook</strong> — receiving a multipart/form-data upload</li>
      </ul>
      <p>
        In all cases, the binary field is typically called <C>data</C>. The readPDF node picks this
        up automatically unless you override the binary property name.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        The <C>&quot;type&quot;: &quot;n8n-nodes-base.readpdf&quot;</C> node in workflow JSON
      </h3>
      <p>
        When you export a workflow containing a readPDF node, the JSON fragment looks like this:
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <pre className="text-sm font-mono text-[#e6edf3] overflow-x-auto whitespace-pre">
{`{
  "parameters": {
    "options": {}
  },
  "type": "n8n-nodes-base.readpdf",
  "typeVersion": 1,
  "position": [240, 300],
  "name": "Extract PDF Text"
}`}
        </pre>
      </div>
      <p>
        There is no required parameter beyond the node type itself. The node reads whatever binary
        is in the input item&apos;s <C>data</C> property and writes the extracted text to <C>$json.text</C>
        on the output item.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Full Workflow: PDF → readPDF → Claude → Slack
      </h2>
      <p>
        Here is a complete, importable n8n workflow JSON that: watches a Gmail inbox for PDF
        attachments, extracts their text, sends the text to Claude for summarization, and posts
        the summary to Slack.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <pre className="text-sm font-mono text-[#e6edf3] overflow-x-auto whitespace-pre">
{`{
  "name": "PDF Summarizer via Claude",
  "nodes": [
    {
      "parameters": {
        "pollTimes": { "item": [{ "mode": "everyMinute" }] },
        "filters": { "readStatus": "unread" },
        "downloadAttachments": true
      },
      "type": "n8n-nodes-base.gmailTrigger",
      "typeVersion": 1,
      "position": [0, 300],
      "name": "Gmail – New Email with Attachment"
    },
    {
      "parameters": {
        "conditions": {
          "string": [{
            "value1": "={{ $binary.data.mimeType }}",
            "operation": "contains",
            "value2": "pdf"
          }]
        }
      },
      "type": "n8n-nodes-base.if",
      "typeVersion": 1,
      "position": [220, 300],
      "name": "Is PDF?"
    },
    {
      "parameters": { "options": {} },
      "type": "n8n-nodes-base.readpdf",
      "typeVersion": 1,
      "position": [440, 240],
      "name": "Extract PDF Text"
    },
    {
      "parameters": {
        "model": "claude-haiku-4-5-20251001",
        "prompt": "Summarize the following document in 3-5 bullet points. Be concise and focus on the key facts.\\n\\n{{ $json.text }}",
        "maxTokensToSample": 1024
      },
      "type": "n8n-nodes-base.anthropic",
      "typeVersion": 1,
      "position": [660, 240],
      "name": "Claude – Summarize PDF",
      "credentials": {
        "anthropicApi": { "name": "Anthropic API" }
      }
    },
    {
      "parameters": {
        "channel": "#document-summaries",
        "text": "=*New PDF summary:*\\n{{ $json.completion }}"
      },
      "type": "n8n-nodes-base.slack",
      "typeVersion": 2,
      "position": [880, 240],
      "name": "Post to Slack"
    }
  ],
  "connections": {
    "Gmail – New Email with Attachment": {
      "main": [[{ "node": "Is PDF?", "type": "main", "index": 0 }]]
    },
    "Is PDF?": {
      "main": [[{ "node": "Extract PDF Text", "type": "main", "index": 0 }]]
    },
    "Extract PDF Text": {
      "main": [[{ "node": "Claude – Summarize PDF", "type": "main", "index": 0 }]]
    },
    "Claude – Summarize PDF": {
      "main": [[{ "node": "Post to Slack", "type": "main", "index": 0 }]]
    }
  }
}`}
        </pre>
      </div>
      <p>
        Key things to observe in this workflow:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li>The <C>readpdf</C> output is accessed via <C>{'{{ $json.text }}'}</C> in the Anthropic node&apos;s prompt</li>
        <li>Claude&apos;s response is in <C>{'{{ $json.completion }}'}</C> for the Text operation (or <C>{'{{ $json.content[0].text }}'}</C> for the Chat operation)</li>
        <li>Claude Haiku is used here for cost efficiency — swap to Sonnet for complex extraction</li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Structured Extraction: Getting JSON Out of Claude
      </h2>
      <p>
        For workflows that need to write data to a spreadsheet or database, you want Claude to
        return structured JSON rather than prose. Here&apos;s the prompt pattern that works reliably
        with the <C>n8n-nodes-base.anthropic</C> node:
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <pre className="text-sm font-mono text-[#e6edf3] overflow-x-auto whitespace-pre">
{`Extract the following fields from the invoice text and return ONLY valid JSON.
Do not include markdown code fences. Do not include any explanation.

Fields to extract:
- invoice_number (string)
- vendor_name (string)
- total_amount (number)
- due_date (ISO 8601 date string)
- line_items (array of { description, quantity, unit_price, total })

Invoice text:
{{ $json.text }}`}
        </pre>
      </div>
      <p>
        After the Anthropic node, add a <C>n8n-nodes-base.code</C> node to parse the output:
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <pre className="text-sm font-mono text-[#e6edf3] overflow-x-auto whitespace-pre">
{`// Code node — parse Claude's JSON response
const raw = $input.first().json.completion;
const parsed = JSON.parse(raw.trim());
return [{ json: parsed }];`}
        </pre>
      </div>
      <p>
        The parsed object then flows downstream as normal n8n item data — ready to map into a
        Google Sheets row, an Airtable record, or a database insert.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Handling Long PDFs (Token Limits)
      </h2>
      <p>
        Claude Haiku supports up to 200k input tokens; Claude Sonnet the same. Most PDFs fall well
        within that limit. However, <C>n8n-nodes-base.readpdf</C> extracts all text at once — for
        very long documents (500+ pages), you may want to truncate or chunk the text before passing
        it to Claude.
      </p>
      <p>
        Add a Code node between readPDF and the Anthropic node to cap the input:
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <pre className="text-sm font-mono text-[#e6edf3] overflow-x-auto whitespace-pre">
{`// Truncate to first ~100k characters (~75k tokens) to stay well within limits
const MAX_CHARS = 100_000;
const text = $input.first().json.text ?? '';
return [{ json: { text: text.slice(0, MAX_CHARS) } }];`}
        </pre>
      </div>
      <p>
        For genuine multi-part documents, consider a map/loop pattern: split the text into
        overlapping chunks, run Claude on each, then combine the results with a final
        merge-and-consolidate call.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Common Errors and Fixes
      </h2>
      <div className="space-y-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            <C>readpdf</C>: &quot;No binary data found in item&quot;
          </p>
          <p className="text-sm">
            The upstream node didn&apos;t pass a binary field named <C>data</C>. Check the binary
            property name in the previous node (e.g. Gmail attachment might name it
            <C>attachment_0</C>). Open the node output panel, click the binary tab, and copy the
            exact field name — then set it in readPDF&apos;s &quot;Binary Property&quot; option.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            <C>anthropic</C>: &quot;Authentication failed&quot;
          </p>
          <p className="text-sm">
            Your Anthropic credential is missing or the API key is wrong. Go to
            <strong className="text-foreground"> Settings → Credentials</strong>, find the Anthropic credential,
            and re-enter the key from <strong className="text-foreground">console.anthropic.com</strong>.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            <C>anthropic</C>: Empty <C>completion</C> or <C>content</C> field
          </p>
          <p className="text-sm">
            This usually means <C>maxTokensToSample</C> was too low, or the prompt expression
            resolved to an empty string. Check that <C>{'{{ $json.text }}'}</C> is non-empty in
            the previous node&apos;s output before the Anthropic node fires. Add an IF node to
            skip items where <C>text.length === 0</C>.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            JSON.parse fails on Claude&apos;s structured extraction output
          </p>
          <p className="text-sm">
            Claude occasionally wraps JSON in markdown code fences even when told not to. Add a
            cleanup step before parsing:
          </p>
          <div className="mt-2 bg-[#0d1117] rounded p-3">
            <pre className="text-xs font-mono text-[#e6edf3] overflow-x-auto whitespace-pre">
{`const raw = $input.first().json.completion
  .replace(/^\`\`\`json\\n?/i, '')
  .replace(/\`\`\`$/, '')
  .trim();
const parsed = JSON.parse(raw);`}
            </pre>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        More n8n + Claude Workflow Patterns
      </h2>
      <p>
        The readPDF → Anthropic chain is one node pattern. The broader playbook for n8n + Claude
        automation covers webhook triggers, scheduled document processing, multi-step reasoning
        chains, and memory across workflow runs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/n8n-workflow"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">n8n Workflow Playbook</p>
          <p className="text-sm text-muted-foreground">Copy-paste Claude Code instructions for building and debugging n8n automations end-to-end.</p>
        </Link>
        <Link
          href="/playbooks/api-integration"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">API Integration Playbook</p>
          <p className="text-sm text-muted-foreground">Wire Claude into any REST API — auth, retries, pagination, and response mapping.</p>
        </Link>
      </div>
      <p>
        If you want to go further with Claude in agentic pipelines — tool use, multi-step reasoning,
        or building your own Claude-powered integrations beyond n8n — the{' '}
        <PlaybookLink href="/blog/complete-guide-to-mcp-servers">MCP servers guide</PlaybookLink>{' '}
        and the{' '}
        <PlaybookLink href="/blog/how-to-build-an-ai-agent-from-scratch">AI agent walkthrough</PlaybookLink>{' '}
        cover those patterns in detail.
      </p>
    </BlogPostLayout>
  );
}
