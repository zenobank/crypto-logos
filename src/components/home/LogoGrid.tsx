import { ReactNode } from 'react';

// components
import { Skeleton } from '@/components/ui/skeleton';
import ListSentinel from '@/components/ListSentinel';
import LogoCard from './LogoCard';

// models
import type LogoItemsResponse from '@/shared/models/logos/logo-items-response';

// custom models
interface Props {
  logos: LogoItemsResponse[];
  hasMore: boolean;
  onLoadMore: () => void;
  isLoading: boolean;
  EmptyState?: ReactNode;
}

export default function LogoGrid({ logos, hasMore, onLoadMore, isLoading, EmptyState }: Props) {
  if (logos.length === 0 && !isLoading) {
    return EmptyState ? (
      <>{EmptyState}</>
    ) : (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">No logos found</p>
        <p className="text-sm text-muted-foreground mt-2">
          Try adjusting your search query
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-4 px-3">
        {logos.map((logo) => (
          <LogoCard
            key={logo.id}
            logo={logo}
          />
        ))}

        {/* Loading skeletons */}
        {isLoading &&
          Array.from({ length: 6 }).map((_, i) => (
            <div key={`skeleton-${i}`} className="space-y-4">
              <Skeleton className="h-48 w-full" />
            </div>
          ))}
      </div>

      {/* Sentinel element for infinite scroll */}
      <ListSentinel hasMore={hasMore} onLoadMore={onLoadMore} isLoading={isLoading} />
    </div>
  );
}
