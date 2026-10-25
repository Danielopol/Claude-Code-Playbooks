import { getPlaybookSource } from '@/lib/playbooks';
import { apiError, apiJson, toDetail } from '@/lib/api';

/**
 * GET /api/v1/playbooks/{slug} — one playbook with its CLAUDE.md template
 * inline, so a CLI can install it in a single request.
 *
 * Same rendering strategy as /playbooks/[slug]: nothing is prerendered at
 * build time (1.2k+ extra renders for little gain); each slug renders on its
 * first request and is then cached until the next deploy (ISR). The MDX and
 * public/templates files are included in the function's trace, so reading
 * them at request time works on Vercel.
 */
export const revalidate = false;

export async function generateStaticParams() {
  return [];
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const playbook = getPlaybookSource(slug);
  if (!playbook) {
    return apiError(404, 'not_found', `No playbook with slug "${slug}".`);
  }
  return apiJson(toDetail(playbook));
}
