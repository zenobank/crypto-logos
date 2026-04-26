// data
import {
  LOGOS_RESPONSE,
  LOGOS_RESPONSE_POPULAR_FIRST,
  LOGOS_BY_CATEGORY,
} from '@/shared/constants/logos-data';

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

function getResults(
  search?: string,
  category?: string,
  sortBy: LogosSortBy = LogosSortBy.NameAsc,
): LogoItemsResponse[] {
  // Default home view (no search, no category, default sort): surface popular first.
  const defaultHomeView =
    !search && !category && sortBy === LogosSortBy.NameAsc;

  const baseLogos = category
    ? (LOGOS_BY_CATEGORY[category] ?? [])
    : defaultHomeView
      ? LOGOS_RESPONSE_POPULAR_FIRST
      : LOGOS_RESPONSE;

  if (!search) {
    return baseLogos;
  }

  const searchLower = search.toLowerCase();
  return baseLogos.filter((logo) =>
    logo.name.toLowerCase().includes(searchLower),
  );
}

export function getLogos(
  params: GetLogosParams = {},
): ListResponse<LogoItemsResponse> {
  const {
    category,
    search,
    limit,
    skip = 0,
    sortBy = LogosSortBy.NameAsc,
  } = params;

  const results = getResults(search, category, sortBy);
  let sorted = results;

  if (search) {
    sorted = results.toSorted((a, b) =>
      sortBy === LogosSortBy.NameAsc
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name),
    );
  } else if (sortBy === LogosSortBy.NameDesc) {
    sorted = results.toReversed();
  }

  const total = sorted.length;
  const data =
    limit === undefined
      ? sorted
      : sorted.slice(clamp(skip, 0, total), clamp(skip + limit, 0, total));

  return { data, total };
}
