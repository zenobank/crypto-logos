import { NextResponse } from 'next/server';

// lib
import { getLogos } from '@/lib/logos';

// helpers
import toErrorResponse from '@/shared/helpers/to-error-response';
import readOptionalNonEmpty from '@/shared/helpers/read-optional-non-empty';
import readLimit from '@/shared/helpers/read-limit';
import readSkip from '@/shared/helpers/read-skip';

// models
import LogosSortBy from '@/shared/models/logos/logos-sort-by';

// constants
import CACHE_HEADERS from '@/shared/constants/cache-headers';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Supported query params (all optional):
    // - category: string (filters by mainCategory or secondaryCategories; case-insensitive)
    // - search: string (searches across name, categories, websiteLink; case-insensitive)
    // - sortBy: 'name-asc' | 'name-desc' (sort order; default 'name-asc')
    // - limit: number (max items to return; if omitted returns all items)
    // - skip: number (number of items to skip; default 0)
    const categoryResult = readOptionalNonEmpty(searchParams, 'category');
    if (!categoryResult.ok) return categoryResult.error;

    const searchResult = readOptionalNonEmpty(searchParams, 'search');
    if (!searchResult.ok) return searchResult.error;

    const sortByResult = readOptionalNonEmpty(searchParams, 'sortBy');
    if (!sortByResult.ok) return sortByResult.error;

    const sortBy = sortByResult.value as LogosSortBy | null;
    if (sortBy && sortBy !== LogosSortBy.NameAsc && sortBy !== LogosSortBy.NameDesc) {
      return toErrorResponse(400, 'INVALID_SORT_BY', 'sortBy must be \'name-asc\' or \'name-desc\'');
    }

    const limitResult = readLimit(searchParams);
    if (!limitResult.ok) return limitResult.error;

    const skipResult = readSkip(searchParams);
    if (!skipResult.ok) return skipResult.error;

    const data = getLogos({
      category: categoryResult.value || undefined,
      search: searchResult.value || undefined,
      sortBy: sortBy || undefined,
      limit: limitResult.value ?? undefined,
      skip: skipResult.value,
    });

    return NextResponse.json(data, { status: 200, headers: CACHE_HEADERS });
  } catch {
    return toErrorResponse(500, 'INTERNAL_ERROR', 'Unexpected server error.');
  }
}
