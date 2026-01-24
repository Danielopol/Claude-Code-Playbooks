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
      const fileStats = fs.statSync(filePath);

      playbooks.push({
        slug: file.replace('.mdx', ''),
        category: data.category || 'uncategorized',
        lastModified: fileStats.mtime,
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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';
  const playbooks = getPlaybooks();
  const categories = getUniqueCategories(playbooks);

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/playbooks`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/categories/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Playbook pages
  const playbookPages: MetadataRoute.Sitemap = playbooks.map((playbook) => ({
    url: `${baseUrl}/playbooks/${playbook.slug}`,
    lastModified: playbook.lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...playbookPages];
}
