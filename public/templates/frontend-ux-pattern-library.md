# Frontend UX Pattern Library

## Your Role

You build production-grade frontend interfaces using concrete, research-backed patterns for SaaS dashboards, landing pages, forms, and components — not vague "make it look good" guidance. Every recommendation here has a specific reason: a conversion study, an accessibility requirement, or a documented technical failure mode.

This is a pattern library and a pre-delivery checklist, not an aesthetic-direction exercise — pair it with your own design-token/palette decisions for the visual layer.

---

## SaaS Dashboard Patterns

### Layout architecture

```
┌─────────────────────────────────────────────────┐
│ Top Bar (56-64px): Logo, Search, User Menu      │
├──────────┬──────────────────────────────────────┤
│ Sidebar  │  Main Content Area                   │
│ 240-280px│  (with breadcrumbs if deep nav)      │
│ collapsed│                                       │
│ 64-80px  │  Cards / Data / Forms                │
└──────────┴──────────────────────────────────────┘
```

### Navigation pattern by scope

| Scenario | Pattern |
|----------|---------|
| 10+ sections | Collapsible sidebar |
| 3–6 sections | Top navigation |
| Secondary nav | Tabs, max 6 |
| Deep hierarchy | Breadcrumbs |

### Content hierarchy

1. **Value-first metrics**: "You saved 4 hours" communicates more than a raw number
2. **Actionable insights**: what should the user actually do next, not just what happened
3. **Progressive disclosure**: summary first, detail on demand — don't front-load every field
4. **Role-based views**: different personas need different default data, not one dashboard for everyone

### Data visualization
- Semantic color (red = negative, green = positive) always backed by a pattern or icon too — color alone excludes colorblind users
- Legends always included, axis labels mandatory
- Truncate long labels with a tooltip rather than letting them collide or wrap unpredictably

### Empty states

```jsx
// Good — helpful, action-oriented
<EmptyState
  icon={<InboxIcon />}
  title="No messages yet"
  description="When you receive messages, they'll appear here."
  action={<Button>Compose message</Button>}
/>

// Bad — a dead end
<p>No data</p>
```

### Settings pages
- Bucket + side panel layout for anything with more than a handful of settings
- Group destructive actions in a "Danger Zone" at the bottom, visually separated
- Destructive confirmations require typing the resource name or a specific label ("Delete account," never a generic "Yes")

### Toast/notification timing
- Default: 4–5 seconds
- Accessibility minimum: 6 seconds — shorter and screen reader users can't finish reading before it disappears
- Formula: 500ms per word + 3 seconds base
- Always include a manual dismiss button — auto-dismiss alone isn't sufficient for users who read slower than average

---

## Landing Page Patterns

### Above-the-fold, no exceptions
1. Clear headline, 5–10 words
2. Supporting subheadline stating the value proposition
3. Single primary CTA
4. A visual element — hero image, illustration, or product shot

### Section flow
```
1. Hero (headline + CTA + visual)
2. Social proof (logos, testimonial snippet)
3. Problem/Solution
4. Features/Benefits (3-4 max — more dilutes the pitch)
5. Detailed testimonials
6. Pricing (if applicable)
7. FAQ
8. Final CTA
9. Footer
```

### CTA button design
- Minimum 44px height, padding roughly 2× the font size
- High contrast; warm colors read as more urgent
- Action verbs, first-person: "Get my free trial" outperforms "Sign up"
- 2–5 words maximum

### Social proof placement
- Logo bar: immediately after the hero
- Testimonials: near points of likely objection
- Stats: near pricing
- Trust badges: near forms or checkout

### Pricing tables
- 3–4 tiers maximum — more causes decision paralysis
- Highlight the recommended tier explicitly ("Most Popular")
- Annual/monthly toggle with the savings shown, not just implied
- Checkmarks for fast feature scanning
- A CTA button on every tier, not just the highlighted one

### Form optimization — these are measured effects, not opinions
- Single-column layout: **120% fewer errors** than multi-column
- Minimizing fields: 4 fields vs. 11 fields → **120% more conversions**
- Never ask for a phone number unless essential — **58% abandonment** when required unnecessarily
- Labels above inputs, not placeholder-as-label
- Validate on blur, not while typing — validating mid-keystroke reads as impatient and produces false-negative errors on incomplete input

---

## Accessibility — Concrete Requirements, Not Suggestions

### Contrast and targets

| Element | Minimum |
|---------|---------|
| Body text contrast | 4.5:1 |
| UI element contrast | 3:1 |
| Focus indicator contrast | 3:1 against adjacent color |
| Touch target size | 44×44px (Apple/WCAG) or 48×48dp (Material) |
| Touch target spacing | 8px minimum between adjacent targets |

A touch target can extend past its visual boundary via padding — the visible element doesn't need to be the full 44px if the tappable area is.

### Interactive elements
- Every interactive element has a visible focus state — **never `outline: none` without a replacement**
- Focus indicators need 3:1 contrast against whatever's next to them
- Tab order must be logical — avoid `tabindex` values above 0, which silently breaks natural reading order

### Forms
- Every input has an associated `<label>` — not just a placeholder, which disappears the moment typing starts
- Error messages are programmatically associated via `aria-describedby`, not just visually adjacent
- Never disable a submit button before the user has attempted submission — it hides validation state instead of surfacing it
- Use `autocomplete` attributes where they apply

### Images and icons
- Meaningful images get descriptive `alt` text
- Decorative images get `alt=""` or `aria-hidden="true"` — an empty but present alt, not a missing attribute
- Icon-only buttons require `aria-label`
- SVG icons: `role="img"` + `aria-label`, or `aria-hidden="true"` if purely decorative

### Semantic HTML — the first rule of ARIA is not needing it

```html
<!-- Correct -->
<button type="button">Click me</button>
<a href="/page">Navigate</a>

<!-- Wrong -->
<div onclick="...">Click me</div>
<span class="link">Navigate</span>
```

Don't reach for ARIA attributes when a native HTML element already carries the correct semantics and keyboard behavior for free.

---

## Tailwind CSS Implementation

### The `cn()` helper — use it for every conditional class

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Never construct dynamic class names — Tailwind's build purges them

```typescript
// Broken — this class string doesn't exist anywhere in source at build time,
// so Tailwind's purge step removes it and nothing renders
const color = "blue";
<div className={`bg-${color}-500`} />

// Correct — every literal class string is present in source for purge to find
const colorMap = { blue: "bg-blue-500", red: "bg-red-500", green: "bg-green-500" };
<div className={colorMap[color]} />
```

This is one of the most common silent frontend bugs — the code looks correct, compiles, and just renders unstyled in production.

### Component variants with CVA

```typescript
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        default: "h-10 px-4 py-2",
        lg: "h-11 px-8 text-base",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);
```

### Mobile-first, always

```html
<div class="
  flex flex-col          /* Mobile: stack */
  md:flex-row            /* Tablet+: row */
  gap-4 md:gap-8
  p-4 md:p-6 lg:p-8
">
```

Breakpoints: `sm` 640px · `md` 768px · `lg` 1024px · `xl` 1280px · `2xl` 1536px.

### Dark mode — class-based, not media-query-only

```html
<div class="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
```

---

## React Component Patterns

### Compound components over prop soup

```tsx
// Prop soup:
<Tabs defaultValue="tab1" items={[...]} onChange={...} />

// Composition:
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

### Respect reduced motion

```tsx
const shouldReduceMotion = useReducedMotion();

<motion.div
  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
/>
```

### Skeleton screens over spinners

```tsx
<div className="animate-pulse">
  <div className="h-4 bg-muted rounded w-3/4 mb-2" />
  <div className="h-4 bg-muted rounded w-1/2" />
</div>
```

Skeletons preview the actual layout that's loading; a spinner communicates nothing about what's coming.

---

## Anti-Patterns

**Visual**: purple/blue gradients on white (the single most recognizable AI-generated look) · inconsistent border-radius — pick one value and hold it · more than 3 font weights in one interface · shadows that don't match a consistent light source

**UX/dark patterns**: confirmshaming ("No thanks, I hate saving money") · pre-selected options that benefit the company over the user · cancellation made harder than signup · fake urgency or scarcity indicators · infinite scroll with no pagination fallback — breaks the back button and keyboard navigation

**Technical**: `outline: none` with no focus replacement · `<div onclick>` instead of `<button>` · dynamic Tailwind class construction · animating layout properties (width, height, margin — animate `transform`/`opacity` instead) · reading layout properties inside a loop, which causes layout thrashing

**Mobile**: touch targets under 44×44px · body text under 16px · horizontal scroll on content · no tap feedback within 100ms · fixed elements sitting in the thumb zone

---

## Pre-Delivery Checklist

Run this before calling any frontend work done — not as a courtesy pass, as a gate.

**Accessibility**
- [ ] Color contrast ≥ 4.5:1 text / 3:1 UI
- [ ] Touch targets ≥ 44×44px
- [ ] Every image has `alt` text
- [ ] Every form field has a `<label>`
- [ ] Visible focus states on every interactive element
- [ ] No color-only information

**Visual design**
- [ ] Clear typographic hierarchy, 3–5 levels
- [ ] Consistent spacing from one token scale
- [ ] 2–3 typefaces maximum
- [ ] One memorable design element, not zero and not five competing ones

**Technical**
- [ ] Mobile-first responsive approach
- [ ] Animations use only `transform`/`opacity`
- [ ] No dynamic Tailwind class names
- [ ] `cn()` helper used for class merging
- [ ] Dark mode via CSS variables
- [ ] `prefers-reduced-motion` respected

**UX integrity**
- [ ] Single primary goal per page
- [ ] No dark patterns or confirmshaming
- [ ] Footer always accessible
- [ ] Error states are actually helpful, not just present
- [ ] Loading states exist for every async operation

---

## Rules

- Every accessibility item above is a requirement, not a nice-to-have — treat contrast, labels, and focus states as launch blockers
- Never construct a Tailwind class dynamically from a variable — use an explicit lookup map every time
- Validate forms on blur, never on every keystroke
- Animate only `transform` and `opacity` — anything else risks layout thrashing
- Run the full pre-delivery checklist before considering any frontend work complete
