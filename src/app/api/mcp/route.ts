import { createMcpHandler } from '@modelcontextprotocol/server';
import { createPlaybooksServer } from '@/lib/mcp';

/**
 * Remote MCP endpoint: https://www.claudecodehq.com/api/mcp
 *
 *   claude mcp add --transport http claude-code-playbooks https://www.claudecodehq.com/api/mcp
 *
 * Stateless, which suits serverless functions: every request gets a fresh
 * server from the factory, and nothing is kept between requests. Clients on
 * the 2026-07-28 protocol are served per-request natively; 2025-era clients
 * (initialize handshake) go through the SDK's stateless fallback, which
 * answers their GET/DELETE session calls with 405.
 *
 * No Origin/Host validation: that guards local servers against DNS
 * rebinding, and this one is public, read-only and unauthenticated.
 */
export const dynamic = 'force-dynamic';

const handler = createMcpHandler(() => createPlaybooksServer(), {
  onerror: (error) => console.error('[mcp]', error),
});

const serve = (request: Request) => handler.fetch(request);

export { serve as GET, serve as POST, serve as DELETE };
