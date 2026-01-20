'use client';

import { useMemo, useRef } from 'react';
import { Folder, Trash } from 'lucide-react';

// models
import LogoItem from '@/shared/models/logos/logo-item';

// hooks
import { useFavorites } from '@/providers/FavoritesProvider';
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

type LogoItemLike = LogoItem & { id?: string | number; name?: string };

export default function LogosSection({ searchQuery }: Props) {
  const { favoriteItems, hydrated, clearAll, isLoading: isLoadingFavorites } = useFavorites();
  const { scrollContainerRef } = useScrollReset([searchQuery]);

  const cacheRef = useRef<Map<string, LogoItem>>(new Map());

  const logos = useMemo(() => {
    for (const item of favoriteItems) {
      const id = String((item as LogoItemLike).id ?? '');
      if (!id) continue;
      if (!cacheRef.current.has(id)) {
        cacheRef.current.set(id, item);
      }
    }

    const list = Array.from(cacheRef.current.values());

    const q = searchQuery.trim().toLowerCase();
    if (!q) return list;

    return list.filter((logo) => {
      const name = String((logo as LogoItemLike).name ?? '').toLowerCase();
      return name.includes(q);
    });
  }, [favoriteItems, searchQuery]);

  const isLoading = isLoadingFavorites || !hydrated;
  const count = favoriteItems.length;

  return (
    <div className="grow flex flex-col gap-2">
      <SearchBar value={searchQuery} />

      <Card className="flex-1 flex flex-col p-0 gap-0 overflow-hidden bg-transparent">
        <div className="flex h-12.5 items-center justify-between py-1.5 pr-2 pl-3 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 backdrop-blur-sm dark:bg-neutral-900/40">
          <div className="flex items-center gap-2">
            <Folder className="h-5 w-5" />
            <span className="text-lg">
              Favorites
              <span className="hidden md:inline">
                {' '}
                - {count} SVG{count === 1 ? '' : 's'}
              </span>
            </span>
          </div>

          {!!count && (
            <Button className="flex items-center" variant="ghost" onClick={clearAll}>
              <Trash />
              <span>Clear All</span>
            </Button>
          )}
        </div>

        <ScrollArea className="grow flex flex-col h-0 py-4" viewportRef={scrollContainerRef}>
          <LogoGrid logos={logos} hasMore={false} onLoadMore={() => {}} isLoading={isLoading} />
        </ScrollArea>
      </Card>
    </div>
  );
}
