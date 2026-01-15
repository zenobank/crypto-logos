'use client';

import { useState } from 'react';

export default function DynamicUrl() {
  // states
  const [url] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.origin;
    }
    return '';
  });

  if (!url) {
    return <span className="text-muted-foreground">Loading...</span>;
  }

  return <span>{url}</span>;
}
