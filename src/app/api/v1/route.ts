import { getAllPlaybooks } from '@/lib/playbooks';
import { apiJson, API_VERSION, BASE_URL } from '@/lib/api';

/**
 * GET /api/v1 — a discovery document: what the API offers and where.
 * Static: rendered once at build time.
 */
export const dynamic = 'force-static';

export async function GET() {
  const api = `${BASE_URL}/api/${API_VERSION}`;
  return apiJson({
    name: 'Claude Code Playbooks API',
    version: API_VERSION,
    playbookCount: getAllPlaybooks().length,
    endpoints: {
      search: `${api}/playbooks?q={query}&category={id}&difficulty={level}&tag={tag}&limit={1-100}&offset={n}`,
      playbook: `${api}/playbooks/{slug}`,
      categories: `${api}/categories`,
      rawTemplate: `${BASE_URL}/templates/{slug}.md`,
    },
    terms: `${BASE_URL}/licensing`,
  });
}
