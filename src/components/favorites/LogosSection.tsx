'use client';

import { useMemo, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Folder, Trash } from 'lucide-react';

// providers
import { useFavorites } from '@/providers/FavoritesProvider';

// queries
import { getLogosQueryParams } from '@/queries/app-queries';

// hooks
import useScrollReset from '@/hooks/use-scroll-reset';

// components
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import SearchBar from '@/components/home/SearchBar';
import LogoGrid from '@/components/home/LogoGrid';

// personal interface
interface Props {
  searchQuery: string;
}

export default function LogosSection({ searchQuery }: Props) {
  // common
  const { favorites, hydrated, clearAll, isLoading: isLoadingFavorites } = useFavorites();
  const { scrollContainerRef } = useScrollReset([searchQuery]);

  // state
  const [initialVisibleIds] = useState<Set<string>>(() => new Set(favorites));

  // computed
  const visibleIds = useMemo(() => {
    const next = new Set(initialVisibleIds);
    for (const id of favorites) next.add(id);
    return next;
  }, [initialVisibleIds, favorites]);

  const canFetch = hydrated && visibleIds.size > 0;

  const { data, isLoading } = useInfiniteQuery({
    ...getLogosQueryParams(searchQuery, null),
    enabled: canFetch,
  });

  const logos = useMemo(() => {
    if (!data || visibleIds.size === 0) return [];

    const out: (typeof data.pages)[number]['data'][number][] = [];
    const seen = new Set<string>();

    for (const page of data.pages) {
      for (const logo of page.data) {
        const id = String(logo.id);

        if (!visibleIds.has(id)) continue;
        if (seen.has(id)) continue;

        seen.add(id);
        out.push(logo);
      }
    }

    return out;
  }, [data, visibleIds]);

  return (
    <div className="grow flex flex-col gap-2">
      <SearchBar value={searchQuery} />

      <Card className="flex-1 flex flex-col p-0 gap-0 overflow-hidden bg-transparent">
        <div className="flex h-12.5 items-center justify-between py-1.5 pr-2 pl-3 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 backdrop-blur-sm dark:bg-neutral-900/40">
          <div className="flex items-center gap-2">
            <Folder className="h-5 w-5" />
            <span className="text-lg">
                Favorites<span className="hidden md:inline"> - {favorites.size} SVG{favorites.size === 1 ? '' : 's'}</span>
              </span>
          </div>

          {!!favorites.size && (
            <Button className="flex item-center" variant="ghost" onClick={clearAll}>
              <Trash />
              <span>Clear All</span>
            </Button>
          )}
        </div>

        <ScrollArea className="grow flex flex-col h-0 py-4" viewportRef={scrollContainerRef}>
          <LogoGrid
            logos={logos}
            hasMore={false}
            onLoadMore={() => {
            }}
            isLoading={isLoading || isLoadingFavorites || !hydrated}
          />
        </ScrollArea>
      </Card>
    </div>
  );
}
