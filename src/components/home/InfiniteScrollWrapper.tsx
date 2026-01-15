'use client';

import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

// queries
import { getLogosQueryParams } from '@/queries/app-queries';

// components
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
  } = useInfiniteQuery(getLogosQueryParams(searchQuery, category));

  // computed
  const logos = useMemo(() => {
    if (!data) {
      return [];
    }

    return data.pages
      .flatMap((page) => page.data)
      .toSorted(
        (a, b) => sortBy === LogosSortBy.NameAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
      );
  }, [data, sortBy]);

  if (error) {
    return (
      <div className="text-center text-destructive p-6">
        Error loading logos: {(error as Error).message}
      </div>
    );
  }

  return (
    <LogoGrid
      logos={logos}
      hasMore={hasNextPage}
      onLoadMore={() => fetchNextPage()}
      isLoading={isLoading || isFetchingNextPage}
    />
  );
}
