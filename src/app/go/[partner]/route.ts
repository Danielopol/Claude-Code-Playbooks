import { track } from '@vercel/analytics/server';
import { NextResponse } from 'next/server';
import { getAffiliate } from '@/lib/affiliates';

export const dynamic = 'force-dynamic';

/**
 * Affiliate redirect. Logging here rather than in the browser counts clicks
 * that ad blockers would hide, and lets a program's link change in one place.
 */
export async function GET(request: Request, { params }: { params: Promise<{ partner: string }> }) {
  const { partner } = await params;
  const affiliate = getAffiliate(partner);

  if (!affiliate?.trackingUrl) {
    return NextResponse.redirect(new URL('/', request.url), { status: 307 });
  }

  let page = '';
  try {
    page = new URL(request.headers.get('referer') ?? '').pathname;
  } catch {}

  try {
    await track('Affiliate Click', { partner: affiliate.slug, page }, { request });
  } catch {}

  return NextResponse.redirect(affiliate.trackingUrl, {
    status: 307,
    headers: { 'X-Robots-Tag': 'noindex, nofollow', 'Cache-Control': 'no-store' },
  });
}
