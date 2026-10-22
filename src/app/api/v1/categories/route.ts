import { getPlaybooksByCategory } from '@/lib/playbooks';
import { categories } from '@/lib/categories';
import { apiJson, BASE_URL } from '@/lib/api';

/**
 * GET /api/v1/categories — every category with its playbook count, in the
 * order the site lists them. Empty categories are left out, matching the
 * category grid. Static: rendered once at build time.
 */
export const dynamic = 'force-static';

export async function GET() {
  const results = categories
    .map((c) => ({
      id: c.id,
      name: c.name,
      description: c.description,
      vertical: c.vertical,
      count: getPlaybooksByCategory(c.id).length,
      links: { page: `${BASE_URL}/categories/${c.id}` },
    }))
    .filter((c) => c.count > 0);

  return apiJson({ total: results.length, results });
}
