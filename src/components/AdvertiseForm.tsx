'use client';

import { useState } from 'react';
import { track } from '@vercel/analytics';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fieldClass =
  'w-full px-3 py-2 bg-[#0d1117] border border-[#30363d] rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#22d3ee]';

const labelClass = 'block text-sm font-medium text-foreground mb-1.5';

export function AdvertiseForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    tool: '',
    url: '',
    placement: 'tool-listing',
    description: '',
    website: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/advertise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        track('Advertise Application', { placement: form.placement });
        setStatus('success');
        setMessage(data.message);
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setMessage('Failed to send. Please try again, or email us instead.');
    }
  };

  if (status === 'success') {
    return (
      <div role="status" className="rounded-lg border border-[#22c55e]/40 bg-[#22c55e]/10 p-6">
        <h3 className="font-semibold text-foreground mb-2">Application received</h3>
        <p className="text-sm text-muted-foreground">
          Thanks. We&apos;ll review {form.tool} for fit and reply to {form.email} within 3 business
          days. If it&apos;s a match, you&apos;ll get a payment link with the reply.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ad-name" className={labelClass}>Your name</label>
          <input id="ad-name" required value={form.name} onChange={update('name')} className={fieldClass} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="ad-email" className={labelClass}>Email</label>
          <input id="ad-email" type="email" required value={form.email} onChange={update('email')} className={fieldClass} autoComplete="email" placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor="ad-tool" className={labelClass}>Tool name</label>
          <input id="ad-tool" required value={form.tool} onChange={update('tool')} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="ad-url" className={labelClass}>Tool URL</label>
          <input id="ad-url" type="url" required value={form.url} onChange={update('url')} className={fieldClass} placeholder="https://" />
        </div>
      </div>

      <div>
        <label htmlFor="ad-placement" className={labelClass}>Placement</label>
        <select id="ad-placement" value={form.placement} onChange={update('placement')} className={fieldClass}>
          <option value="tool-listing">Tool Listing</option>
          <option value="category">Category Sponsor</option>
          <option value="site-wide">Site-wide Sponsor</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="ad-description" className={labelClass}>What does it do, and who is it for?</label>
        <textarea
          id="ad-description"
          required
          minLength={20}
          value={form.description}
          onChange={update('description')}
          className={`${fieldClass} h-32 resize-y`}
          placeholder="e.g. Reference manager that syncs with Claude — built for PhD students and research teams."
        />
      </div>

      {/* Honeypot: hidden from users, filled by bots. */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={update('website')}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {message && (
        <p role="status" aria-live="polite" className="text-sm text-red-400">
          {message}
        </p>
      )}

      <Button
        type="submit"
        disabled={status === 'loading'}
        className="w-full sm:w-auto bg-[#22c55e] text-[#0d1117] hover:bg-[#16a34a] disabled:opacity-50"
      >
        <Send className="h-4 w-4 mr-2" />
        {status === 'loading' ? 'Sending...' : 'Send application'}
      </Button>
      <p className="text-xs text-muted-foreground/70">
        No payment now. You only pay after we confirm the fit.
      </p>
    </form>
  );
}
