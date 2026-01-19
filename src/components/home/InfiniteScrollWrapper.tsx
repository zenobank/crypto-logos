'use client';

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

export default function InfiniteScrollWrapper({ searchQuery, category, sortBy }: Props) {
  // requests
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery(getLogosQueryParams(searchQuery, category, sortBy));

  const { scrollContainerRef } = useScrollReset([searchQuery, category, sortBy]);

  // computed
  const logos = (data || { pages: [] }).pages.flatMap((page) => page.data);

  if (error) {
    return (
      <div className="text-center text-destructive p-6">
        Error loading logos: {(error as Error).message}
      </div>
    );
  }

  return (
    <ScrollArea className="grow flex flex-col h-0 py-4" viewportRef={scrollContainerRef}>
      <LogoGrid
        logos={logos}
        hasMore={hasNextPage}
        onLoadMore={() => fetchNextPage()}
        isLoading={isLoading || isFetchingNextPage}
      />
    </ScrollArea>
  );
}
