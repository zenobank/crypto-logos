'use client';
import { useEffect, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

// queries
import { getLogosQueryParams } from '@/queries/app-queries';

// hooks
import useScrollPersistence from '@/hooks/use-scroll-persistence';

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
  // refs
  const scrollContainerRef = useRef<HTMLElement | null>(null);

  // common
  useScrollPersistence(scrollContainerRef, 'homeScrollPosition', [
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
  const totalLoaded = data?.pages.flatMap(({ data }) => data).length || 0;

  // async helpers
  async function preloadMore(): Promise<void> {
    if (isFetchingNextPage) {
      return;
    }

    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => fetchNextPage());
    } else {
      fetchNextPage();
    }
  }

  async function loadMore(): Promise<void> {
    if (!isFetchingNextPage) {
      fetchNextPage();
    }
  }

  // effects
  // passive pages preload
  useEffect(() => {
    if (!hasNextPage) {
      return;
    }

    preloadMore();
    const interval = setInterval(() => {
      if (!hasNextPage) {
        clearInterval(interval);
        return;
      }

      preloadMore();
    }, 3_000);

    return () => clearInterval(interval);
  }, [searchQuery, category, sortBy, hasNextPage]);

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
