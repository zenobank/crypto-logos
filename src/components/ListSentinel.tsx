'use client';

import { useEffect, useRef } from 'react';

// custom models
interface Props {
  hasMore: boolean;
  isLoading: boolean;
  onLoadMore: () => void;
}

function ListSentinel({ hasMore, onLoadMore, isLoading }: Props) {
  // refs
  const sentinelRef = useRef<HTMLDivElement>(null);

  // effects
  useEffect(() => {
    if (!sentinelRef.current || !hasMore || isLoading) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onLoadMore();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, [hasMore, isLoading, onLoadMore]);

  return hasMore && <div ref={sentinelRef} className="absolute bottom-100 h-10 max-md:bottom-20" />;
}

export default ListSentinel;
