import { Folder } from 'lucide-react';

// components
import { Card } from '@/components/ui/card';
import SearchBar from './SearchBar';
import SortDropdown from './SortDropdown';
import BackButton from './BackButton';
import InfiniteScrollWrapper from './InfiniteScrollWrapper';
import LogosCountBadge from './LogosCountBadge';

// models
import LogosSortBy from '@/shared/models/logos/logos-sort-by';
import { getCategoryById } from '@/lib/categories';

// custom models
interface Props {
  searchQuery: string;
  category: string | null;
  sortBy: LogosSortBy;
  showCategoryHeader?: boolean;
}

export default function LogosSection({ searchQuery, category, sortBy, showCategoryHeader = false }: Props) {
  // computed
  const categoryName = getCategoryById(category || '')?.name;

  return (
    <div className="grow flex flex-col gap-2">
      <SearchBar />

      <Card className="flex-1 flex flex-col p-0 gap-0 overflow-hidden bg-transparent">
        <div className="flex h-12.5 items-center justify-between py-1.5 pr-2 pl-3 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 backdrop-blur-sm dark:bg-neutral-900/40">
          <div className="flex items-center gap-2">
            {showCategoryHeader && <BackButton />}
            <Folder className="h-5 w-5" />
            <span className="text-lg">
              <span className="capitalize">{showCategoryHeader && categoryName}</span>
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
