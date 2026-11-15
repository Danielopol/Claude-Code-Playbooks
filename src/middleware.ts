import { NextResponse } from 'next/server';

/**
 * /_content/* holds the raw playbook MDX in the Cloudflare static assets, where
 * src/lib/playbooks.ts reads it through the ASSETS binding. That binding
 * bypasses this middleware; public requests don't, so they get a 404 and the
 * raw files never become indexable duplicates. wrangler.jsonc sends this path
 * to the Worker first (run_worker_first) so this runs before the asset lookup.
 */
export function middleware() {
  return new NextResponse('Not found', { status: 404, headers: { 'X-Robots-Tag': 'noindex' } });
}

export const config = {
  matcher: '/_content/:path*',
};
