import { Suspense } from 'react';
import { Folder } from 'lucide-react';

// helpers
import { getCategoryById } from '@/lib/categories';

// components
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import SearchBar from './SearchBar';
import SortDropdown from './SortDropdown';
import BackButton from './BackButton';
import InfiniteScrollWrapper from './InfiniteScrollWrapper';
import LogosCountBadge from './LogosCountBadge';

// models
import LogosSortBy from '@/shared/models/logos/logos-sort-by';

// custom models
interface Props {
  searchQuery?: string;
  category?: string | null;
  sortBy?: LogosSortBy;
  showCategoryHeader?: boolean;
}

export default function LogosSection({
  searchQuery = '',
  category = '',
  sortBy = LogosSortBy.NameAsc,
  showCategoryHeader = false,
}: Props) {
  // computed
  const categoryName = getCategoryById(category || '')?.name;

  return (
    <div className="flex grow flex-col gap-2">
      <Suspense fallback={<Skeleton className="h-10.5 w-full rounded-md" />}>
        <SearchBar />
      </Suspense>

      <Card className="flex flex-1 flex-col gap-0 overflow-hidden bg-transparent p-0">
        <div className="flex h-12.5 items-center justify-between border-b border-neutral-200 bg-white/80 py-1.5 pr-2 pl-3 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/40">
          <div className="flex items-center gap-2">
            {showCategoryHeader && <BackButton />}
            <Folder className="h-5 w-5" />
            <span className="text-lg">
              <span className="capitalize">
                {showCategoryHeader && categoryName}
              </span>
              <span className="hidden md:inline">
                {showCategoryHeader && category ? ' - ' : ''}
                <LogosCountBadge
                  searchQuery={searchQuery}
                  category={category}
                  categoryPage={showCategoryHeader}
                />
              </span>
            </span>
          </div>
          <SortDropdown value={sortBy} />
        </div>

        <InfiniteScrollWrapper
          searchQuery={searchQuery}
          category={category}
          sortBy={sortBy}
        />
      </Card>
    </div>
  );
}
