// data
import { LOGOS_RESPONSE, LOGOS_BY_CATEGORY, LOGOS_SEARCH_INDEX, CATEGORY_SEARCH_INDEXES } from '@/shared/constants/logos-data';

// helpers
import clamp from '@/shared/helpers/clamp';

// models
import LogoItemsResponse from '@/shared/models/logos/logo-items-response';
import ListResponse from '@/shared/models/common/list-response';
import LogosSortBy from '@/shared/models/logos/logos-sort-by';

// custom models
export interface GetLogosParams {
  limit?: number;
  skip?: number;
  category?: string;
  search?: string;
  sortBy?: LogosSortBy;
}

function getResults(search?: string, category?: string): LogoItemsResponse[] {
  if (!search && !category) {
    return LOGOS_RESPONSE;
  }

  if (!search) {
    return LOGOS_BY_CATEGORY[category!] ?? [];
  }

  const categoryData = category ? CATEGORY_SEARCH_INDEXES[category] : null;

  if (category && !categoryData) {
    return [];
  }

  const { index, logos } = categoryData ?? { index: LOGOS_SEARCH_INDEX, logos: LOGOS_RESPONSE };
  const indices = index.search(search) as number[];
  return indices.map(i => logos[i]);
}

export function getLogos(params: GetLogosParams = {}): ListResponse<LogoItemsResponse> {
  const { category, search, limit, skip = 0, sortBy = LogosSortBy.NameAsc } = params;

  const results = getResults(search, category);

  const sorted = results.toSorted((a, b) =>
    sortBy === LogosSortBy.NameAsc
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

  const total = sorted.length;
  const data = limit === undefined
    ? sorted
    : sorted.slice(clamp(skip, 0, total), clamp(skip + limit, 0, total));

  return { data, total };
}
