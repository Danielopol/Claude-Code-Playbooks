import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Playbook {
  slug: string;
  category: string;
  lastModified: Date;
}

function getPlaybooks(): Playbook[] {
  const playbooksDirectory = path.join(process.cwd(), 'src/content/playbooks');

  if (!fs.existsSync(playbooksDirectory)) {
    return [];
  }

  const playbooks: Playbook[] = [];
  const files = fs.readdirSync(playbooksDirectory);

  files.forEach((file) => {
    if (file.endsWith('.mdx')) {
      const filePath = path.join(playbooksDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);

      // Use frontmatter createdAt if available, otherwise fall back to file mtime
      const lastModified = data.createdAt
        ? new Date(data.createdAt)
        : fs.statSync(filePath).mtime;

      playbooks.push({
        slug: file.replace('.mdx', ''),
        category: data.category || 'uncategorized',
        lastModified,
      });
    }
  });

  return playbooks;
}

function getUniqueCategories(playbooks: Playbook[]): string[] {
  const categories = new Set<string>();
  playbooks.forEach((playbook) => {
    categories.add(playbook.category);
  });
  return Array.from(categories);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.claudecodehq.com';
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
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-02-25'),
      changeFrequency: 'weekly',
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

  // Playbook pages
  const playbookPages: MetadataRoute.Sitemap = playbooks.map((playbook) => ({
    url: `${baseUrl}/playbooks/${playbook.slug}`,
    lastModified: playbook.lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...playbookPages];
}
