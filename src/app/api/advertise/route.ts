import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_EMAIL = process.env.ADVERTISE_NOTIFY_EMAIL || 'valentin.marin83@gmail.com';

// Same verified-domain sender the subscribe route uses.
const NOTIFY_FROM =
  process.env.SUBSCRIBE_NOTIFY_FROM || 'Claude Code Playbooks <playbooks@claudecodehq.com>';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const PLACEMENTS: Record<string, string> = {
  'tool-listing': 'Tool Listing',
  category: 'Category Sponsor',
  'site-wide': 'Site-wide Sponsor',
  'not-sure': 'Not sure yet',
};

interface AdvertiseBody {
  name?: string;
  email?: string;
  tool?: string;
  url?: string;
  placement?: string;
  description?: string;
  // Honeypot — real users never fill this; bots do.
  website?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: AdvertiseBody = await request.json();

    // Silently accept bot submissions so they don't retry, but send nothing.
    if (body.website) {
      return NextResponse.json({ message: 'Thanks — we will be in touch.' }, { status: 200 });
    }

    const name = (body.name || '').trim().slice(0, 120);
    const email = (body.email || '').trim().toLowerCase().slice(0, 200);
    const tool = (body.tool || '').trim().slice(0, 120);
    const url = (body.url || '').trim().slice(0, 500);
    const description = (body.description || '').trim().slice(0, 3000);
    const placement = PLACEMENTS[body.placement || ''] ? body.placement! : 'not-sure';

    if (!name || !tool) {
      return NextResponse.json({ error: 'Please fill in your name and the tool name.' }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }
    if (!/^https?:\/\/[^\s.]+\.[^\s]+$/i.test(url)) {
      return NextResponse.json({ error: 'Please provide the tool URL, starting with https://' }, { status: 400 });
    }
    if (description.length < 20) {
      return NextResponse.json(
        { error: 'Tell us a little more about what the tool does and who it is for.' },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: NOTIFY_FROM,
      to: [NOTIFY_EMAIL],
      // Hitting reply goes straight to the applicant.
      replyTo: email,
      subject: `Advertising application: ${tool} (${PLACEMENTS[placement]})`,
      html: `
        <h2>New advertising application</h2>
        <p><strong>Placement:</strong> ${PLACEMENTS[placement]}</p>
        <p><strong>Tool:</strong> ${escapeHtml(tool)} — <a href="${escapeHtml(url)}">${escapeHtml(url)}</a></p>
        <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
        <hr />
        <h3>What it does and who it is for</h3>
        <div style="background: #1a1a1a; color: #e6edf3; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(description)}</div>
        <hr />
        <p><em>Review for fit before sending payment details. Reply to this email to respond to the applicant.</em></p>
      `,
    });

    if (error) {
      console.error('Advertise application email failed:', error);
      return NextResponse.json(
        { error: 'Something went wrong sending your application. Please email us instead.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: 'Thanks — we will be in touch.' }, { status: 200 });
  } catch (error) {
    console.error('Advertise application error:', error);
    return NextResponse.json(
      { error: 'Something went wrong sending your application. Please email us instead.' },
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
