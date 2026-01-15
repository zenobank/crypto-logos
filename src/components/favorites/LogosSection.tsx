'use client';

import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Folder, Trash } from 'lucide-react';

// hooks
import { useFavorites } from '@/providers/FavoritesProvider';

// queries
import { getLogosQueryParams } from '@/queries/app-queries';

// components
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import SearchBar from '@/components/home/SearchBar';
import LogoGrid from '@/components/home/LogoGrid';

// custom models
interface Props {
  searchQuery: string;
}

export default function LogosSection({ searchQuery }: Props) {
  // common
  const { favorites, clearAll, isLoading: isLoadingFavorites } = useFavorites()

  // requests
  const {
    data,
    isLoading,
  } = useInfiniteQuery(getLogosQueryParams(searchQuery, null));

  // computed
  const logos = useMemo(() => {
    if (!data) {
      return [];
    }

    return data.pages
      .flatMap((page) => page.data)
      .filter((el) => favorites.has(el.id))
  }, [data, favorites]);

  const total = logos.length;

  return (
    <div className="grow flex flex-col gap-2">
      <SearchBar value={searchQuery} />

      <Card className="flex-1 flex flex-col p-0 gap-0 overflow-hidden bg-transparent">
        <ScrollArea className="grow flex flex-col h-0">
          <div className="sticky top-0 z-50 flex h-12.5 items-center justify-between py-1.5 pr-2 pl-3 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 backdrop-blur-sm dark:bg-neutral-900/40">
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5" />
              <span className="text-lg">
                Favorites - { total } SVGs
              </span>
            </div>
            {
              !!favorites.size && (
                <Button className="flex item-center" variant="ghost" onClick={clearAll}>
                  <Trash/>
                  <span>Clear All</span>
                </Button>
              )
            }
          </div>

          <LogoGrid
            logos={logos}
            hasMore={false}
            onLoadMore={() => {}}
            isLoading={isLoading || isLoadingFavorites}
          />
        </ScrollArea>
      </Card>
    </div>
  );
}
