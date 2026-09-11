import type { Sponsor } from '@/types/sponsor';

/*
 * Paying sponsors and tool listings. Add an entry once the customer has paid;
 * placements appear and disappear on their own according to their dates.
 *
 * Dates are checked when a page is generated: within a day on playbook,
 * category and /tools pages (they regenerate daily), and at the next deploy on
 * blog posts. Redeploy to apply a change everywhere immediately.
 *
 * Several sponsors can run at once — cards stack in this order: site-wide,
 * then category, then tool listings. One entry can hold several placements.
 *
 * Put logos in public/sponsors/.
 *
 * Example:
 *
 *   {
 *     slug: 'acme-research',
 *     name: 'Acme Research',
 *     tagline: 'Reference manager that syncs your library with Claude.',
 *     description:
 *       'Acme keeps your papers, notes and citations in one library and exposes it to Claude, so literature reviews start from what you have already read.',
 *     url: 'https://acme.example.com',
 *     logo: '/sponsors/acme-research.png',
 *     topics: ['academic-research'],
 *     pricing: 'Free plan · from $9/mo',
 *     listing: { start: '2026-09-15', end: '2027-09-14' },
 *     category: { start: '2026-09-15', end: '2026-12-14', topics: ['academic-research'] },
 *   },
 */
export const sponsors: Sponsor[] = [];
