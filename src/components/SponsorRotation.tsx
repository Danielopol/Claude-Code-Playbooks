'use client';

import { useEffect, useState } from 'react';

interface SponsorRotationProps {
  /** Rendered rows, one per sponsor, in their server order. */
  items: { key: string; node: React.ReactNode }[];
}

/**
 * Rotates sponsors that share a tier so each one leads equally often. Pages
 * are statically generated, so the order is picked in the browser: the server
 * renders the stored order, then each page view starts the list at a random
 * sponsor. Rows are the same height, so the swap doesn't move the layout.
 */
export function SponsorRotation({ items }: SponsorRotationProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (items.length > 1) setOffset(Math.floor(Math.random() * items.length));
  }, [items.length]);

  const rotated = [...items.slice(offset), ...items.slice(0, offset)];
  return (
    <>
      {rotated.map((item) => (
        <li key={item.key}>{item.node}</li>
      ))}
    </>
  );
}
