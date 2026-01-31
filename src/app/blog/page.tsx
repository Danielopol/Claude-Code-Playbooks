'use client';

import { useState, useRef, useMemo } from 'react';
import Link from 'next/link';
import { Home, Github, Star, ChevronLeft, ChevronRight, Search, ChevronDown } from 'lucide-react';
import { BlogPostCard } from '@/components/BlogPostCard';
import { BlogPostListItem } from '@/components/BlogPostListItem';
import { getFeaturedBlogPosts, getAllBlogPosts } from '@/lib/blog';
import { BlogPost } from '@/types/blog';

type SortOption = 'default' | 'newest' | 'oldest' | 'title';

export default function BlogPage() {
  const featuredPosts = getFeaturedBlogPosts();
  const allPosts = getAllBlogPosts();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const filteredAndSortedPosts = useMemo(() => {
    let posts = [...allPosts];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.description.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'oldest':
        posts.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        break;
      case 'title':
        posts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        // Default order (already sorted by date desc)
        break;
    }

    return posts;
  }, [allPosts, searchQuery, sortBy]);

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'default', label: 'Default Order' },
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'title', label: 'Title A-Z' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container py-12 md:py-16">
        <div className="text-center mb-8">
          {/* Pixel Art Title */}
          <h1 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-[#f97316] mb-4 tracking-wider leading-relaxed">
            BLOG
          </h1>
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
            Latest articles about <span className="text-[#22d3ee]">Claude Code</span> and AI development
          </p>

          {/* Quick Links */}
          <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#30363d] bg-[#161b22] text-sm text-muted-foreground hover:text-foreground hover:border-[#22d3ee] transition-all"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              href="https://github.com/Danielopol/Claude-Code-Playbooks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#30363d] bg-[#161b22] text-sm text-muted-foreground hover:text-foreground hover:border-[#22d3ee] transition-all"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section Header */}
      <section className="container pb-8">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
            <span className="text-[#22c55e]">*</span>
            <span className="font-bold">Blog</span>
            <span className="text-muted-foreground">(articles/tutorials/guides)</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            <span className="text-[#30363d]">|_</span> Learn how to maximize your AI-powered development with Claude Code
          </p>
        </div>
      </section>

      {/* Featured Posts Carousel */}
      <section className="container pb-12">
        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <Star className="h-5 w-5 text-[#f97316] fill-current" />
          Featured Posts
        </h3>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-[#161b22] border border-[#30363d] flex items-center justify-center hover:border-[#22d3ee] transition-colors ${
              !canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-5 w-5 text-muted-foreground" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-[#161b22] border border-[#30363d] flex items-center justify-center hover:border-[#22d3ee] transition-colors ${
              !canScrollRight ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
      </section>

      {/* Divider */}
      <div className="container pb-8">
        <div className="border-t border-[#30363d]"></div>
      </div>

      {/* Search and Sort */}
      <section className="container pb-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles by title, description, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#161b22] border border-[#30363d] rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#22d3ee] transition-colors"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">SORT BY:</span>
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center gap-2 px-3 py-2 bg-[#161b22] border border-[#30363d] rounded-lg text-sm text-foreground hover:border-[#22d3ee] transition-colors"
              >
                {sortOptions.find((opt) => opt.value === sortBy)?.label}
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>

            {showSortDropdown && (
              <div className="absolute top-full right-0 mt-1 w-40 bg-[#161b22] border border-[#30363d] rounded-lg shadow-lg z-20">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value);
                      setShowSortDropdown(false);
                    }}
                    className={`w-full px-3 py-2 text-left text-sm hover:bg-[#21262d] transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      sortBy === option.value ? 'text-[#22d3ee]' : 'text-foreground'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* All Posts List */}
      <section className="container pb-16">
        <div className="space-y-4">
          {filteredAndSortedPosts.length > 0 ? (
            filteredAndSortedPosts.map((post) => (
              <BlogPostListItem key={post.id} post={post} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
