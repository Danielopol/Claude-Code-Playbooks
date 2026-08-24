import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;
const NOTIFY_EMAIL = process.env.SUBSCRIBE_NOTIFY_EMAIL || 'valentin.marin83@gmail.com';

// Deliberately permissive but real: catches typos and empty submissions
// without rejecting valid unusual addresses.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

interface SubscribeBody {
  email?: string;
  source?: string;
  // Honeypot — real users never fill this; bots do.
  website?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { email, source, website }: SubscribeBody = await request.json();

    // Silently accept bot submissions so they don't retry, but store nothing.
    if (website) {
      return NextResponse.json({ message: 'Thanks for subscribing!' }, { status: 200 });
    }

    const normalized = (email || '').trim().toLowerCase();

    if (!normalized || !EMAIL_RE.test(normalized)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    let stored = false;

    // Primary path: add to the Resend audience, which is the actual list.
    if (AUDIENCE_ID) {
      const { error } = await resend.contacts.create({
        email: normalized,
        unsubscribed: false,
        audienceId: AUDIENCE_ID,
      });

      if (error) {
        // Resend returns an error for addresses already in the audience.
        // That is a success from the subscriber's point of view.
        const alreadyExists = /already exists|duplicate/i.test(error.message ?? '');

        if (alreadyExists) {
          return NextResponse.json(
            { message: "You're already subscribed!" },
            { status: 200 }
          );
        }

        console.error('Resend contacts.create failed:', error);
      } else {
        stored = true;
      }
    } else {
      console.warn('RESEND_AUDIENCE_ID is not set — falling back to email notification.');
    }

    // Fallback path: if the audience write did not happen, mail the address to
    // the owner so a subscriber is never lost to a misconfiguration.
    if (!stored) {
      const { error } = await resend.emails.send({
        from: 'Claude Code Playbooks <onboarding@resend.dev>',
        to: [NOTIFY_EMAIL],
        subject: `New subscriber: ${normalized}`,
        html: `
          <h2>New newsletter subscriber</h2>
          <p><strong>Email:</strong> ${escapeHtml(normalized)}</p>
          <p><strong>Source:</strong> ${escapeHtml(source || 'unknown')}</p>
          <p><em>Sent via the fallback path — the Resend audience write did not
          succeed. Check that RESEND_AUDIENCE_ID is set correctly.</em></p>
        `,
      });

      if (error) {
        console.error('Subscribe fallback email failed:', error);
        // Both paths failed. Tell the truth rather than reporting success.
        return NextResponse.json(
          { error: 'Failed to subscribe. Please try again.' },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ message: 'Thanks for subscribing!' }, { status: 200 });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
