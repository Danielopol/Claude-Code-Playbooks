import { getAllBlogPostsMerged, getFeaturedBlogPostsMerged } from '@/lib/blog-all';
import BlogPageClient from '@/components/BlogPageClient';

export default function BlogPage() {
  const featuredPosts = getFeaturedBlogPostsMerged();
  const allPosts = getAllBlogPostsMerged();

  return <BlogPageClient featuredPosts={featuredPosts} allPosts={allPosts} />;
}
