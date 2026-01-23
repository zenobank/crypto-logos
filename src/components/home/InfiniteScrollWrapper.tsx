'use client';
import { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

// queries
import { getLogosQueryParams } from '@/queries/app-queries';

// hooks
import useScrollReset from '@/hooks/use-scroll-reset';

// components
import { ScrollArea } from '@/components/ui/scroll-area';
import LogoGrid from './LogoGrid';

// models
import LogosSortBy from '@/shared/models/logos/logos-sort-by';

// custom models
interface Props {
  searchQuery: string;
  category: string | null;
  sortBy: LogosSortBy;
}

export default function InfiniteScrollWrapper({
  searchQuery,
  category,
  sortBy,
}: Props) {
  // common
  const { scrollContainerRef } = useScrollReset([
    searchQuery,
    category,
    sortBy,
  ]);

  // requests
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery(getLogosQueryParams(searchQuery, category, sortBy));

  // computed
  const logos = (data || { pages: [] }).pages.flatMap((page) => page.data);

  // effects
  // passive pages preload
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hasNextPage) {
        clearInterval(interval);
        return;
      }

      preloadMore();
    }, 3_000);

    return () => clearInterval(interval);
  }, [searchQuery, category, sortBy]);

  // async helpers
  async function preloadMore(): Promise<void> {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => fetchNextPage());
    } else {
      fetchNextPage();
    }
  }

  async function loadMore(): Promise<void> {
    fetchNextPage();
  }

  if (error) {
    return (
      <div className="p-6 text-center text-destructive">
        Error loading logos: {(error as Error).message}
      </div>
    );
  }

  return (
    <ScrollArea
      className="flex h-0 grow flex-col py-4"
      viewportRef={scrollContainerRef}
    >
      <LogoGrid
        logos={logos}
        hasMore={hasNextPage}
        onLoadMore={loadMore}
        isLoading={isLoading || isFetchingNextPage}
      />
    </ScrollArea>
  );
}
