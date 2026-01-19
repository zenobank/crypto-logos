// api
import AppApi from '@/api/app.api';

// models
import ListResponse from '@/shared/models/common/list-response';
import LogoItem from '@/shared/models/logos/logo-item';
import LogosSortBy from '@/shared/models/logos/logos-sort-by';

export function getLogosQueryParams(
  searchQuery: string | null,
  category: string | null,
  sortBy: string | null = LogosSortBy.NameAsc,
  limit: number | null = 20,
) {
  return {
    queryKey: ['logos', searchQuery, category, sortBy],
    queryFn: ({ pageParam = 0 }) =>
      AppApi.getLogos({
        limit: limit || undefined,
        skip: pageParam,
        search: searchQuery || undefined,
        category: category || undefined,
        sortBy: (sortBy as LogosSortBy) || undefined,
      }),
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
