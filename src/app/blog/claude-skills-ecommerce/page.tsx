import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for E-commerce Sellers: Automate Listings, Ads, and Reviews | Claude Code Playbooks Blog',
  description: "Four Claude Skills for the three biggest recurring e-commerce workloads — Amazon seller operations automation, app store optimization for companion apps, on-brand review responses, and competitor ad pattern extraction.",
  alternates: { canonical: '/blog/claude-skills-ecommerce' },
  openGraph: {
    title: 'Claude Skills for E-commerce Sellers: Automate Listings, Ads, and Reviews',
    description: "Four Claude Skills for the three biggest recurring e-commerce workloads — Amazon seller operations automation, app store optimization for companion apps, on-brand review responses, and competitor ad pattern extraction.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-ecommerce',
    type: 'article',
    publishedTime: '2026-08-19T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for E-commerce Sellers: Automate Listings, Ads, and Reviews',
    description: "Four Claude Skills for the three biggest recurring e-commerce workloads — Amazon seller operations automation, app store optimization for companion apps, on-brand review responses, and competitor ad pattern extraction.",
    images: ['https://www.claudecodehq.com/og-image.png'],
  },
};

function PlaybookLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[#22d3ee] hover:underline font-medium">
      {children}
    </Link>
  );
}

export default function ClaudeSkillsEcommercePage() {
  return (
    <BlogPostLayout
      title="Claude Skills for E-commerce Sellers: Automate Listings, Ads, and Reviews"
      description="Four Claude Skills for the three biggest recurring e-commerce workloads — Amazon seller operations automation, app store optimization for companion apps, on-brand review responses, and competitor ad pattern extraction."
      category="guide"
      difficulty="intermediate"
      readingTime="12 min read"
      createdAt="2026-08-19"
      tags={['claude skills ecommerce', 'ai for amazon sellers', 'ai product listings', 'amazon fba automation', 'ai review response', 'competitor ad analysis', 'ecommerce automation ai', 'app store optimization ai']}
      author="Claude Code Playbooks"
      slug="claude-skills-ecommerce"
    >
      <p>
        E-commerce is a margin business, and margin gets eaten by exactly the kind of work that never shows up on a P&L line item: hours spent tabbing between Seller Central screens, drafting review responses one at a time, and manually squinting at competitor ads trying to reverse-engineer why theirs convert better. None of it is strategic. All of it is necessary, recurring, and directly competing with the time a seller actually needs to spend on sourcing, product development, and growth.
      </p>
      <p>
        These four Claude Skills target the recurring workloads that eat that time — store operations, competitor intelligence, reputation management, and for sellers expanding beyond the marketplace, their own app presence.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Stop Living in Seller Central Tabs
      </h2>
      <p>
        Running an Amazon store means juggling separate Seller Central views for inventory, pricing, ads, and orders, all day, every day — and the cost of missing something isn't abstract. One missed restock alert means a stockout and a ranking penalty that takes weeks to recover from. One pricing mistake against a Buy Box competitor can cost real margin before anyone notices.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/amazon-seller">Amazon Seller Assistant</PlaybookLink>{' '}
        Skill automates the operational core of running a store: inventory alerts before stockouts actually happen, competitive repricing rules that respond to market changes automatically, ad spend optimization across campaigns, and order tracking across the entire catalog — all without the manual tab-switching.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Monitor my inventory levels and adjust pricing for my top 50 SKUs — alert me before stockouts and keep pricing competitive"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Separate Seller Central tabs for inventory, pricing, ads, and orders checked manually all day — one missed restock alert or pricing mistake costing thousands in lost sales or fees</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Automated inventory alerts before stockouts, competitive repricing rules running continuously, ad spend optimization across campaigns, and order tracking across the entire catalog</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Works across FBA, private label, and wholesale operations managing multiple ASINs.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Optimize the Companion App Once the Marketplace Isn't Enough
      </h2>
      <p>
        Sellers who outgrow a pure marketplace presence often end up building a companion app — for loyalty, direct sales, or brand ownership outside Amazon's ecosystem — and immediately run into the same discoverability problem they solved on Amazon, but on a completely different platform. A title stuffed with brand name, a description that reads like a press release, and a keyword field full of duplicates keeps the app invisible while worse competitors rank above it.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/app-store-optimizer">App Store Optimizer</PlaybookLink>{' '}
        Skill handles that discoverability problem for Apple App Store and Google Play listings specifically: keyword research and gap analysis against competitors, metadata optimization for title, subtitle, and description, and a structured A/B testing plan for screenshots and other conversion elements.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Optimize our brand's companion app listing on the App Store — keyword gap analysis against our top competitors and a rewritten title, subtitle, and description"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A companion app invisible in App Store search — the title stuffed with brand name, the description reading like a press release, and competitors with worse apps ranking above it</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A keyword gap analysis against the top 5 competitors, a rewritten title, subtitle, and description built around high-volume search terms, and a 4-week A/B testing plan for screenshots and metadata</p>
        </div>
      </div>

      <p>
        Relevant specifically for sellers who've built or are planning a branded app alongside their marketplace listings — not a replacement for Amazon/Shopify product listing work, but the equivalent optimization layer for the app store surface.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Covers both Apple App Store and Google Play.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Respond to Every Review Without Losing Brand Voice
      </h2>
      <p>
        Review responses are one of the most repetitive parts of running a store and one of the most visible to prospective customers reading through them before buying. Writing a genuinely thoughtful reply to every review — positive, neutral, and the inevitable negative ones — takes real time, and the alternative, generic copy-paste responses, actively signals to shoppers that nobody's paying attention.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/review-response">Review Response</PlaybookLink>{' '}
        Skill generates professional, brand-aligned responses across any review platform — addressing what the reviewer actually said rather than a generic template, maintaining consistent brand voice, and following customer recovery best practices for the negative reviews that need careful handling.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Draft responses for this batch of reviews — keep our brand voice consistent and handle the negative ones with genuine customer recovery, not a generic apology"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Generic copy-paste responses to reviews, or no response at all — signaling to every prospective buyer reading through the reviews that nobody's actually paying attention</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Professional, brand-aligned responses addressing each reviewer's specific points, consistent voice across every reply, and genuine customer recovery language for negative reviews</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 15 minutes. Works across marketplace reviews, Google, Yelp, and any platform where reputation management matters.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Reverse-Engineer What's Actually Converting for Competitors
      </h2>
      <p>
        Competitor ads that are converting well are sitting in public view in the Meta Ad Library right now — the winning hooks, the offer structures, the visual formats that are working are not secret. What's missing isn't access to the data, it's the systematic extraction of the pattern across dozens of ads instead of scrolling through them and eyeballing what seems different.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/competitor-ad-analyzer">Competitor Ad Analyzer</PlaybookLink>{' '}
        Skill does that extraction systematically: pulling competitor ads from Meta Ad Library and Google, identifying the best-performing hooks, offer structures, visual formats, and CTAs, and compiling the result into a swipe file of proven patterns to adapt for your own campaigns.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Analyze competitor ads from Meta Ad Library for the top 5 brands in our category and build a swipe file of winning patterns"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Spending thousands on ads while competitors quietly run campaigns converting 3x better — their winning hooks and offers are public in the Ad Library, just never systematically extracted</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Winning patterns extracted across 5 competitor brands — best-performing hooks, offer structures, visual formats, and CTAs — compiled into a swipe file of 30 proven patterns to adapt</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Pairs naturally with the ad spend optimization in the Amazon Seller Assistant above once patterns are identified.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Covering the Three Biggest Recurring Workloads
      </h2>
      <p>
        These four Skills map onto where e-commerce sellers actually lose time every week:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Store operations</span> — Amazon Seller Assistant handles inventory, pricing, and ad spend continuously</li>
        <li><span className="text-foreground font-medium">Discoverability beyond the marketplace</span> — App Store Optimizer covers the companion app layer for sellers expanding their brand presence</li>
        <li><span className="text-foreground font-medium">Reputation management</span> — Review Response keeps every reply on-brand without the manual per-review time cost</li>
        <li><span className="text-foreground font-medium">Competitive intelligence</span> — Competitor Ad Analyzer turns public ad data into a usable swipe file instead of manual scrolling</li>
      </ul>
      <p>
        None of these require replacing the strategic decisions a seller makes about sourcing, pricing, and positioning — they remove the recurring manual labor that competes with the time those decisions actually deserve.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/amazon-seller">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Amazon Seller Assistant</p>
            <p className="text-sm text-muted-foreground">Inventory alerts, competitive repricing, ad spend optimization, and order tracking</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/app-store-optimizer">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">App Store Optimizer</p>
            <p className="text-sm text-muted-foreground">Keyword research, metadata optimization, and A/B testing for a companion app listing</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/review-response">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Review Response</p>
            <p className="text-sm text-muted-foreground">Brand-aligned replies to every review, with genuine customer recovery for negative ones</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/competitor-ad-analyzer">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Competitor Ad Analyzer</p>
            <p className="text-sm text-muted-foreground">A swipe file of proven hooks, offers, and formats extracted from competitor ads</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
