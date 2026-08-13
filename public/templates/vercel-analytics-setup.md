# Vercel Analytics & Speed Insights Setup

## Your Role

Wire up Vercel Analytics and Speed Insights into a React/Vite project, and fix the SPA routing gap that causes direct-navigation 404s on Vercel. One-shot setup, not an ongoing workflow.

---

## Tasks

### 1. Install the packages

```bash
npm install @vercel/analytics @vercel/speed-insights
```

### 2. Mount the components

Import from the `/react` entry points — **not** `/next**, even if the project has some Next.js-adjacent tooling. Using the wrong entry point is the most common way this silently does nothing.

```tsx
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
```

Render both inside the root component — typically `src/App.tsx` or `src/main.tsx`, wherever the app's top-level JSX lives:

```tsx
function App() {
  return (
    <>
      {/* existing app content */}
      <Analytics />
      <SpeedInsights />
    </>
  );
}
```

### 3. Fix SPA routing for direct navigation

Vite/React SPAs use client-side routing. Without a rewrite rule, Vercel's server has no idea `/dashboard/settings` should serve `index.html` — a hard refresh or a shared link on any non-root route 404s.

Create `vercel.json` in the project root:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### 4. Verify

- Confirm `<Analytics />` and `<SpeedInsights />` actually render — check the mounted DOM or network tab for the Vercel script requests
- Deploy (or preview-deploy) and hit a nested route directly by URL, not by clicking through the app — this is the only way to catch a routing regression the dev server won't show you, since Vite's dev server already handles client-side routing correctly regardless of `vercel.json`

---

## Common Mistakes

**Wrong import path.** `/next` imports look almost identical to `/react` imports and won't error — they just don't collect anything. If analytics data never shows up in the Vercel dashboard, check this first.

**Skipping `vercel.json`.** Works perfectly in local dev (Vite handles routing itself), then 404s in production the moment someone refreshes on a non-root route or shares a deep link. This gap only shows up after deploying.

**Testing routing only via in-app navigation.** Clicking links inside the app never exercises the server-side routing path. Always test with a direct URL hit or a hard refresh.

---

## Scope

This is a five-minute setup task, not a monitoring workflow — it configures the two packages and the one routing fix, then stops. It doesn't cover custom event tracking, alerting, or dashboard configuration; those are separate, ongoing concerns outside what this task sets up.
