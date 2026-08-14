import { MetadataRoute } from 'next';
import { personas } from '@/lib/personas';
import { internalBlogPosts } from '@/lib/blog-internal';
import { getAllPlaybooks } from '@/lib/playbooks';

interface Playbook {
  slug: string;
  category: string;
  lastModified: Date;
}

// Reads the precomputed index (see scripts/build-index.mjs) rather than
// re-scanning src/content/playbooks — that scan was a second full pass over
// every MDX file on top of the one the listing pages already do.
function getPlaybooks(): Playbook[] {
  return getAllPlaybooks().map((p) => ({
    slug: p.slug,
    category: p.category || 'uncategorized',
    lastModified: p.createdAt ? new Date(p.createdAt) : new Date(),
  }));
}

function getUniqueCategories(playbooks: Playbook[]): string[] {
  const categories = new Set<string>();
  playbooks.forEach((playbook) => {
    categories.add(playbook.category);
  });
  return Array.from(categories);
}

/*
 * The canonical host is www. Everything else in the app hardcodes it —
 * metadataBase in layout.tsx, the JSON-LD blocks, llms.txt, the Sitemap
 * directive in robots.txt — and apex 308-redirects to it (next.config.ts).
 *
 * This used to read NEXT_PUBLIC_SITE_URL, which is set to the apex domain in
 * both .env.local and the Vercel project. The result was a sitemap where all
 * 1,339 URLs pointed at a host that redirects, contradicting the canonical
 * tags on the very pages it listed. Google is told to crawl apex, takes a
 * redirect on every URL, then has to reconcile it against a www canonical.
 *
 * Hardcoded so a stray environment variable cannot reintroduce that. If a
 * configurable base URL is ever genuinely needed (staging, previews), it has
 * to be threaded through every location above, not just this one.
 */
const BASE_URL = 'https://www.claudecodehq.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BASE_URL;
  const playbooks = getPlaybooks();
  const categories = getUniqueCategories(playbooks);

  // Use the most recent playbook date as the lastModified for listing pages
  const latestPlaybookDate = playbooks.length > 0
    ? new Date(Math.max(...playbooks.map((p) => p.lastModified.getTime())))
    : new Date('2026-02-25');

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: latestPlaybookDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/playbooks`,
      lastModified: latestPlaybookDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: latestPlaybookDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-02-25'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/getting-started`,
      lastModified: new Date('2026-03-28'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/latest`,
      lastModified: latestPlaybookDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-02-25'),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2026-02-25'),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date('2026-02-25'),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];

  // Category pages — use the most recent playbook date per category
  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => {
    const categoryPlaybooks = playbooks.filter((p) => p.category === category);
    const latestInCategory = categoryPlaybooks.length > 0
      ? new Date(Math.max(...categoryPlaybooks.map((p) => p.lastModified.getTime())))
      : latestPlaybookDate;

    return {
      url: `${baseUrl}/categories/${category}`,
      lastModified: latestInCategory,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    };
  });

  // Persona pages (/for/[persona])
  const personaIndexPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/for`,
      lastModified: latestPlaybookDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const personaPages: MetadataRoute.Sitemap = personas.map((persona) => ({
    url: `${baseUrl}/for/${persona.id}`,
    lastModified: latestPlaybookDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Playbook pages
  const playbookPages: MetadataRoute.Sitemap = playbooks.map((playbook) => ({
    url: `${baseUrl}/playbooks/${playbook.slug}`,
    lastModified: playbook.lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Internal blog post pages
  const blogPostPages: MetadataRoute.Sitemap = internalBlogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.createdAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...personaIndexPage, ...personaPages, ...playbookPages, ...blogPostPages];
}
