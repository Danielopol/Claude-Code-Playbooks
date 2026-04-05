import { BlogPost } from '@/types/blog';
import { blogPosts } from '@/lib/blog';
import { internalBlogPosts } from '@/lib/blog-internal';

/** Get all blog posts (external + internal), sorted by date descending. */
export function getAllBlogPostsMerged(): BlogPost[] {
  return [...blogPosts, ...internalBlogPosts].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getFeaturedBlogPostsMerged(): BlogPost[] {
  return getAllBlogPostsMerged().filter((post) => post.featured);
}
