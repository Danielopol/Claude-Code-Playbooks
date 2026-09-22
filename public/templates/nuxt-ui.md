# Nuxt UI

Build interfaces with `@nuxt/ui` v4 — a Vue component library with 125+ accessible components, built on Reka UI + Tailwind CSS + Tailwind Variants. Works with Nuxt, Vue (Vite), Laravel (Vite + Inertia), and AdonisJS (Vite + Inertia).

## Core Rules (Always Apply)

1. **Always wrap the app in `UApp`** — required for toasts, tooltips, and programmatic overlays. Accepts a `locale` prop for i18n.
2. **Always use semantic colors** — `text-default`, `bg-elevated`, `border-muted`, etc. Never use raw Tailwind palette colors like `text-gray-500`.
3. **Read generated theme files for slot names.** Nuxt: `.nuxt/ui/<component>.ts`; Vue: `node_modules/.nuxt-ui/ui/<component>.ts`. These show every slot, variant, and default class for any component — the fastest way to know a component's real API.
4. **Override priority** (highest wins): `ui` prop / `class` prop → global config → theme defaults.
5. **Icons use `i-{collection}-{name}` format** — `lucide` is the default collection. Browse at icones.js.org.

## For Component API Details

Use the Nuxt UI MCP server for props, slots, events, full documentation, and real-world examples:

```bash
claude mcp add --transport http nuxt-ui https://ui.nuxt.com/mcp
```

Key MCP tools: `search-components` (find by name/category/intent), `search-composables`, `search-icons`, `get-component` (full docs + examples), `get-component-metadata` (props/slots/events, lightweight), `get-example` (real-world code). Use the MCP for *what a component accepts* and *how its API works* — this guide is for *when to use which component* and *how to build well*.

## What to Focus On, By Task

| Task | Focus areas |
|---|---|
| Build a landing page | semantic colors/theming, coding conventions, landing-page patterns |
| Build a dashboard / admin UI | conventions, component-selection decisions (Modal vs Slideover, Select vs SelectMenu), dashboard layout patterns |
| Add a settings page | conventions, form validation and field layout |
| Create a login / signup form | conventions, form validation, auth-form patterns |
| Display data in a table | conventions, component selection, data-table patterns (filters, pagination, sorting, selection) |
| Customize theme / brand colors | semantic-color and theming conventions specifically |
| Add a chat interface | conventions, chat-layout patterns (works with the Vercel AI SDK) |
| Add a modal, slideover, or drawer | conventions, component selection (which overlay fits which interaction) |
| Build site navigation | conventions, component selection, navigation patterns (headers, sidebars, breadcrumbs, tabs) |
| Build a documentation site | conventions, docs-layout patterns (navigation + TOC) |
| Render markdown | component selection, the categorized component index |
| Add a rich text editor | conventions, editor-layout patterns |
| General UI work | conventions, component selection |

Load only what's needed for the current task — don't load everything up front.

## Installation

### Nuxt

```bash
pnpm add @nuxt/ui tailwindcss
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css']
})
```

```css
/* app/assets/css/main.css */
@import "tailwindcss";
@import "@nuxt/ui";
```

```vue
<!-- app.vue -->
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
```

### Vue (Vite)

```bash
pnpm add @nuxt/ui tailwindcss
```

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'

export default defineConfig({
  plugins: [vue(), ui()]
})
```

```ts
// src/main.ts
import './assets/css/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import ui from '@nuxt/ui/vue-plugin'
import App from './App.vue'

const app = createApp(App)
const router = createRouter({ routes: [], history: createWebHistory() })

app.use(router)
app.use(ui)
app.mount('#app')
```

```css
/* src/assets/css/main.css */
@import "tailwindcss";
@import "@nuxt/ui";
```

```vue
<!-- src/App.vue -->
<template>
  <UApp>
    <RouterView />
  </UApp>
</template>
```

Add `class="isolate"` to the root `<div id="app">` in `index.html`. For Inertia, use `ui({ router: 'inertia' })` in `vite.config.ts`.
