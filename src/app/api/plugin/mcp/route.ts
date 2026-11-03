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
 * text/event-stream, and 415 unless Content-Type is application/json. Plain
 * HTTP clients send `*\/*`, JSON only or no Accept, and OpenAI's portal
 * scanner got a 415 on 2026-11-03, so fill in both headers before the SDK
 * checks. This server never keeps a stream open, and the SDK still rejects a
 * body that isn't JSON, so the answer is the same either way.
 */
async function withLenientHeaders(request: Request): Promise<Request> {
  if (request.method !== 'POST') return request;
  const accept = request.headers.get('accept') ?? '';
  const contentType = request.headers.get('content-type') ?? '';
  const acceptOk = /application\/json/i.test(accept) && /text\/event-stream/i.test(accept);
  const contentTypeOk = /^application\/json\s*(;|$)/i.test(contentType);
  if (acceptOk && contentTypeOk) return request;
  const headers = new Headers(request.headers);
  if (!acceptOk) headers.set('accept', 'application/json, text/event-stream');
  if (!contentTypeOk) headers.set('content-type', 'application/json');
  return new Request(request.url, { method: request.method, headers, body: await request.text() });
}

const serve = async (request: Request) => handler.fetch(await withLenientHeaders(request));

export { serve as GET, serve as POST, serve as DELETE };
