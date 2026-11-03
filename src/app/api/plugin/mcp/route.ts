import { createMcpHandler } from '@modelcontextprotocol/server';
import { createPlaybooksServer } from '@/lib/mcp';

/**
 * The ChatGPT plugin's MCP endpoint: https://www.claudecodehq.com/api/plugin/mcp
 *
 * The same tools as /api/mcp, limited to the playbooks in the plugin catalog
 * (see src/lib/plugin-catalog.ts), because OpenAI's review only allows content
 * you own or have permission to use. See /api/mcp for the transport notes.
 */
export const dynamic = 'force-dynamic';

const handler = createMcpHandler(() => createPlaybooksServer({ pluginCatalogOnly: true }), {
  onerror: (error) => console.error('[plugin-mcp]', error),
});

/**
 * The SDK answers 406 unless Accept lists both application/json and
 * text/event-stream. Plain HTTP clients, which may include OpenAI's portal
 * scanner, send `*\/*`, JSON only or nothing, so fill in the missing types
 * before the SDK checks. This server never keeps a stream open, so the
 * answer is the same either way.
 */
async function withStreamableAccept(request: Request): Promise<Request> {
  if (request.method !== 'POST') return request;
  const accept = request.headers.get('accept') ?? '';
  if (/application\/json/i.test(accept) && /text\/event-stream/i.test(accept)) return request;
  const headers = new Headers(request.headers);
  headers.set('accept', 'application/json, text/event-stream');
  return new Request(request.url, { method: request.method, headers, body: await request.text() });
}

const serve = async (request: Request) => handler.fetch(await withStreamableAccept(request));

export { serve as GET, serve as POST, serve as DELETE };
