# Seo Plan

# /dm:seo-plan

## Purpose

Generate a comprehensive SEO strategy with industry-specific templates, competitive analysis, content roadmap, and phased implementation plan. Covers both traditional SEO and AI search readiness.

## Input Required

- **Business type**: SaaS, ecommerce, local service, publisher/media, agency, or general
- **Website URL**: Existing site (if any) to assess
- **Target audience and markets**: Geographic, demographic, and intent profiles
- **Competitors**: 3-5 competitor URLs for gap analysis
- **Budget and timeline**: Resource constraints
- **KPIs**: What success looks like (traffic, rankings, conversions, AI visibility)

## Process

### 1. Discovery
- Business type, target audience, competitors, goals
- Current site assessment (if exists) — crawl health, content inventory, authority signals
- Budget and timeline constraints
- Key performance indicators (KPIs) aligned to business objectives

### 2. Competitive Analysis
- Identify top 5 competitors
- Analyze their content strategy, schema usage, technical setup
- Identify keyword gaps and content opportunities
- Assess their E-E-A-T signals
- Estimate domain authority and link profiles
- AI visibility comparison — which competitors appear in AI overviews

### 3. Architecture Design
- Design URL hierarchy and content pillars based on business model
- Plan internal linking strategy (hub/spoke, topic clusters)
- Sitemap structure with quality gates applied
- Information architecture for user journeys
- Navigation and breadcrumb planning

### 4. Content Strategy
- Content gaps vs competitors
- Page types and estimated counts
- Blog/resource topics and publishing cadence
- E-E-A-T building plan (author bios, credentials, experience signals)
- Content calendar with priorities
- AI-optimized content structure (entity consistency, citation-worthy formatting)

### 5. Technical Foundation
- Hosting and performance requirements
- Schema markup plan per page type
- Core Web Vitals baseline targets (LCP <2.5s, INP <200ms, CLS <0.1)
- AI search readiness requirements
- Mobile-first considerations
- International SEO setup (if applicable)

### 6. Implementation Roadmap (4 phases)

**Phase 1: Foundation (weeks 1-4)**
- Technical setup and infrastructure
- Core pages (home, about, contact, main services/products)
- Essential schema implementation (Organization, LocalBusiness, BreadcrumbList)
- Analytics and tracking setup (GA4, GSC, rank tracking)

**Phase 2: Expansion (weeks 5-12)**
- Content creation for primary pages
- Blog launch with initial posts
- Internal linking structure buildout
- Local SEO setup (if applicable)
- First E-E-A-T improvements (author pages, credentials)

**Phase 3: Scale (weeks 13-24)**
- Advanced content development (pillar pages, topic clusters)
- Link building and digital PR outreach
- GEO/AEO optimization for AI search visibility
- Performance optimization (CWV, page speed)
- Schema expansion (FAQ, Product, VideoObject as applicable)

**Phase 4: Authority (months 7-12)**
- Thought leadership content
- PR and media mentions
- Advanced schema implementation
- Continuous optimization based on data
- Competitive gap monitoring

## Industry Templates

### SaaS
- Primary pages: features, pricing, integrations, use cases, solutions by role
- Content pillars: product education, industry trends, comparison content, technical guides
- Schema focus: SoftwareApplication, Product, FAQPage (if eligible), HowTo (deprecated — use article format instead)
- Link strategy: integration partner pages, guest posts on tech blogs, product directories

### Local Service
- Primary pages: services, service areas, about, contact, testimonials
- Content pillars: service guides, local area content, FAQ content, case studies
- Schema focus: LocalBusiness, Service, Review, BreadcrumbList, GeoCircle
- Link strategy: local directories, chamber of commerce, local press, community involvement

### eCommerce
- Primary pages: categories, products, brands, collections, buying guides
- Content pillars: product education, comparison content, buying guides, trend content
- Schema focus: Product, ProductGroup, Offer, AggregateRating, BreadcrumbList, ItemList
- Link strategy: product reviews, affiliate partnerships, manufacturer relationships

### Publisher/Media
- Primary pages: sections, topic pages, author pages, about, editorial standards
- Content pillars: news coverage, analysis, opinion, investigative, data journalism
- Schema focus: Article, NewsArticle, Person (authors), Organization, VideoObject
- Link strategy: original research citations, expert sourcing, data exclusives

### Agency
- Primary pages: services, industries, case studies, team, methodology
- Content pillars: industry expertise, methodology content, case studies, thought leadership
- Schema focus: Organization, Service, Person (team), Article
- Link strategy: case study features, speaking engagements, industry publications, client co-marketing

## Output

### Deliverables
- **SEO Strategy Document**: Complete strategic plan with business context, competitive landscape, and strategic direction
- **Competitive Analysis**: Keyword gaps, content gaps, authority comparison, AI visibility comparison
- **Content Calendar**: 12-week content roadmap with topics, formats, keywords, and publishing schedule
- **Implementation Roadmap**: Phased action plan with milestones, responsibilities, and measurement checkpoints
- **Site Architecture Plan**: URL hierarchy, content pillar structure, internal linking strategy
- **Schema Markup Plan**: Per-page-type schema recommendations with JSON-LD templates
- **KPI Dashboard Specification**: Metrics to track, tools needed, reporting cadence

## Agents Used

- **seo-specialist** — Strategy, competitive analysis, technical planning
- **content-creator** — Content strategy and calendar planning
- **competitive-intel** — Competitor analysis and gap identification
- **marketing-strategist** — Business alignment and KPI framework

## Scripts Used

- **competitor-scraper.py** — Competitor site analysis
- **tech-seo-auditor.py** — Current site technical assessment
- **keyword-clusterer.py** — Keyword research and clustering
- **content-scorer.py** — Current content quality baseline
