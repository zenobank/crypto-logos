'use client';

import { useMemo, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Folder, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

// queries
import { getLogosQueryParams } from '@/queries/app-queries';

// components
import SearchBar from './SearchBar';
import SortDropdown from './SortDropdown';
import LogoGrid from './LogoGrid';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// models
import LogosSortBy from '@/shared/models/logos/logos-sort-by';
import { ScrollArea } from '@/components/ui/scroll-area';

// custom models
interface Props {
  searchQuery: string;
  category: string | null;
  showCategoryHeader?: boolean;
}

export default function LogosSection({ searchQuery, category, showCategoryHeader = false }: Props) {
  // hooks
  const router = useRouter();

  // states
  const [sortBy, setSortBy] = useState<LogosSortBy>(LogosSortBy.NameAsc);

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
  const total = data?.pages[0]?.total ?? 0;

  return (
    <div className="grow flex flex-col gap-2">
      <SearchBar value={searchQuery} />

      <Card className="flex-1 flex flex-col p-0 gap-0 overflow-hidden bg-[#0F0F0F]">
        <ScrollArea className="grow flex flex-col h-0">
          <div className="sticky top-0 z-10 flex h-12.5 items-center justify-between py-1.5 pr-2 pl-3 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 backdrop-blur-sm dark:bg-neutral-900/40">
            <div className="flex items-center gap-2">
              {showCategoryHeader && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => router.push('/')}
                  className="h-8 w-8"
                  aria-label="Back to home"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              )}
              <Folder className="h-5 w-5" />
              <span className="text-lg">
                {showCategoryHeader && category
                  ? `${category.charAt(0).toUpperCase() + category.slice(1)} - ${total} SVGs`
                  : `${total} logos`}
              </span>
            </div>
            <SortDropdown value={sortBy} onChange={setSortBy} />
          </div>

          {error && (
            <div className="text-center text-destructive mb-6">
              Error loading logos: {(error as Error).message}
            </div>
          )}

          <LogoGrid
            logos={logos}
            hasMore={hasNextPage}
            onLoadMore={() => fetchNextPage()}
            isLoading={isLoading || isFetchingNextPage}
          />
        </ScrollArea>
      </Card>
    </div>
  );
}
