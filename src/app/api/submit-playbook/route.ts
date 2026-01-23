import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface PlaybookSubmission {
  type: 'files' | 'description';
  claudeTemplate?: string;
  claudeFileName?: string;
  readmeContent?: string;
  readmeFileName?: string;
  description?: string;
  email?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: PlaybookSubmission = await request.json();

    let subject: string;
    let htmlContent: string;

    if (data.type === 'files') {
      subject = `New Playbook Submission: ${data.claudeFileName || 'CLAUDE.md'}`;
      htmlContent = `
        <h2>New Playbook Submission (Files)</h2>
        <p><strong>Submitter Email:</strong> ${data.email || 'Not provided'}</p>

        <hr />

        <h3>CLAUDE.md Template</h3>
        <p><strong>Filename:</strong> ${data.claudeFileName || 'CLAUDE.md'}</p>
        <pre style="background: #1a1a1a; color: #e6edf3; padding: 16px; border-radius: 8px; overflow-x: auto; white-space: pre-wrap;">${escapeHtml(data.claudeTemplate || '')}</pre>

        <hr />

        <h3>README.md Setup Guide</h3>
        <p><strong>Filename:</strong> ${data.readmeFileName || 'README.md'}</p>
        <pre style="background: #1a1a1a; color: #e6edf3; padding: 16px; border-radius: 8px; overflow-x: auto; white-space: pre-wrap;">${escapeHtml(data.readmeContent || '')}</pre>
      `;
    } else {
      subject = 'New Playbook Submission: Description';
      htmlContent = `
        <h2>New Playbook Submission (Description)</h2>
        <p><strong>Submitter Email:</strong> ${data.email || 'Not provided'}</p>

        <hr />

        <h3>Workflow Description</h3>
        <div style="background: #1a1a1a; color: #e6edf3; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(data.description || '')}</div>

        <hr />

        <p><em>This submission needs to be transformed into CLAUDE.md and README.md files.</em></p>
      `;
    }

    const { error } = await resend.emails.send({
      from: 'Claude Code Playbooks <onboarding@resend.dev>',
      to: ['valentin.marin83@gmail.com'],
      subject,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send submission. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Playbook submitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit playbook. Please try again.' },
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
