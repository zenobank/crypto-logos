'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Folder, Trash } from 'lucide-react';

// models
import LogoItemsResponse from '@/shared/models/logos/logo-items-response';

// hooks
import { useFavorites } from '@/providers/FavoritesProvider';
import useScrollPersistence from '@/hooks/use-scroll-persistence';

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
  const {
    favoriteItems,
    hydrated,
    clearAll,
    isLoading: isLoadingFavorites,
  } = useFavorites();
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  useScrollPersistence(scrollContainerRef, 'favoritesScrollPosition', [
    searchQuery,
  ]);

  // states
  const [visibleItems, setVisibleItems] = useState<LogoItemsResponse[]>([]);

  // watchers
  useEffect(() => {
    setVisibleItems((prev) => {
      const map = new Map<string, LogoItemsResponse>();

      for (const item of prev) {
        const id = String(item.id ?? '');
        if (id) map.set(id, item);
      }

      for (const item of favoriteItems) {
        const id = String(item.id ?? '');
        if (id && !map.has(id)) {
          map.set(id, item);
        }
      }

      return Array.from(map.values());
    });
  }, [favoriteItems]);

  // computed
  const logos = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return visibleItems;

    return visibleItems.filter((logo) => {
      const name = String(logo.name ?? '').toLowerCase();
      return name.includes(q);
    });
  }, [visibleItems, searchQuery]);

  const isLoading = isLoadingFavorites || !hydrated;
  const count = favoriteItems.length;

  return (
    <div className="flex grow flex-col gap-2">
      <SearchBar />

      <Card className="flex flex-1 flex-col gap-0 overflow-hidden bg-transparent p-0">
        <div className="flex h-12.5 items-center justify-between border-b border-neutral-200 bg-white/80 py-1.5 pr-2 pl-3 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/40">
          <div className="flex items-center gap-2">
            <Folder className="h-5 w-5" />
            <span className="text-lg">
              Favorites
              <span className="hidden md:inline">
                {' '}
                - {count} Logo{count === 1 ? '' : 's'}
              </span>
            </span>
          </div>

          {!!count && (
            <Button
              className="flex items-center"
              variant="ghost"
              onClick={clearAll}
            >
              <Trash />
              <span>Clear All</span>
            </Button>
          )}
        </div>

        <ScrollArea
          className="flex h-0 grow flex-col py-4"
          viewportRef={scrollContainerRef}
        >
          <LogoGrid
            logos={logos}
            hasMore={false}
            onLoadMore={() => {}}
            isLoading={isLoading}
          />
        </ScrollArea>
      </Card>
    </div>
  );
}
