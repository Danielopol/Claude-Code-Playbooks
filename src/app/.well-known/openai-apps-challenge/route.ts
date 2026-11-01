/**
 * Domain verification for the ChatGPT plugin. OpenAI's submission portal issues
 * a token and fetches it from here, expecting the exact token and nothing else.
 *
 * The token lives in OPENAI_APPS_CHALLENGE_TOKEN (set it in Vercel, then
 * redeploy). Without it the route is a plain 404.
 */
export const dynamic = 'force-dynamic';

export function GET() {
  const token = process.env.OPENAI_APPS_CHALLENGE_TOKEN?.trim();
  if (!token) return new Response('Not found', { status: 404 });
  return new Response(token, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}
