'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface NewsletterProps {
  className?: string;
  /**
   * `footer` — compact, sits in the site footer.
   * `inline` — bordered card, used at high-intent moments like the template download.
   */
  variant?: 'footer' | 'inline';
  /** Where the signup came from, recorded with the subscriber. */
  source?: string;
  heading?: string;
  subheading?: string;
}

export function Newsletter({
  className,
  variant = 'footer',
  source,
  heading = 'Get weekly playbooks',
  subheading = 'New workflows and tips delivered to your inbox every week.',
}: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: source || variant, website }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage(data.message || 'Thanks for subscribing!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setMessage('Failed to subscribe. Please try again.');
    }
  };

  const isDone = status === 'loading' || status === 'success';

  return (
    <div
      className={cn(
        variant === 'inline' &&
          'rounded-lg border border-[#30363d] bg-[#161b22] p-5',
        className
      )}
    >
      <h3
        className={cn(
          'font-semibold mb-2 flex items-center gap-2',
          variant === 'footer' && 'text-sm text-foreground'
        )}
      >
        {variant === 'inline' && <Mail className="h-4 w-4 text-[#22d3ee]" />}
        {variant === 'footer' && <span className="text-[#22d3ee]">●</span>}
        {heading}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">{subheading}</p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <label className="sr-only" htmlFor={`newsletter-email-${variant}`}>
          Email address
        </label>
        <Input
          id={`newsletter-email-${variant}`}
          type="email"
          name="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isDone}
          className="flex-1 bg-[#0d1117] border-[#30363d]"
        />

        {/* Honeypot: hidden from users, filled by bots. */}
        <input
          type="text"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <Button
          type="submit"
          disabled={isDone}
          className="bg-[#22c55e] text-[#0d1117] hover:bg-[#16a34a] shrink-0"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>

      {message && (
        <p
          role="status"
          aria-live="polite"
          className={cn(
            'text-sm mt-2',
            status === 'success' ? 'text-[#22c55e]' : 'text-red-400'
          )}
        >
          {message}
        </p>
      )}

      {variant === 'inline' && status !== 'success' && (
        <p className="text-xs text-muted-foreground/70 mt-3">
          No spam. Unsubscribe anytime.
        </p>
      )}
    </div>
  );
}
