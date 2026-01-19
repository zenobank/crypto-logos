// api
import AppApi from '@/api/app.api';

// models
import ListResponse from '@/shared/models/common/list-response';
import LogoItem from '@/shared/models/logos/logo-item';
import LogosSortBy from '@/shared/models/logos/logos-sort-by';

const INITIAL_PAGE_SIZE = 30;
const SUBSEQUENT_PAGE_SIZE = 100;

export function getLogosQueryParams(
  searchQuery: string | null,
  category: string | null,
  sortBy: string | null = LogosSortBy.NameAsc,
) {
  return {
    queryKey: ['logos', searchQuery, category, sortBy],
    queryFn: ({ pageParam = 0 }) => {
      const isFirstPage = pageParam === 0;
      const limit = isFirstPage ? INITIAL_PAGE_SIZE : SUBSEQUENT_PAGE_SIZE;

      return AppApi.getLogos({
        limit,
        skip: pageParam,
        search: searchQuery || undefined,
        category: category || undefined,
        sortBy: (sortBy as LogosSortBy) || undefined,
      });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage: ListResponse<LogoItem>, allPages: ListResponse<LogoItem>[]) => {
      const loadedCount = allPages.reduce((sum, page) => sum + page.data.length, 0);
      return loadedCount < lastPage.total ? loadedCount : undefined;
    },
  }
}

export function getCategoriesQueryParams() {
  return {
    queryKey: ['categories'],
    queryFn: AppApi.getCategories,
  }
}
