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

const serve = (request: Request) => handler.fetch(request);

export { serve as GET, serve as POST, serve as DELETE };
