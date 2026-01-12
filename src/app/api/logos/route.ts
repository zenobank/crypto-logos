import { NextResponse } from "next/server";

// data
import LOGOS_DATA from "@/shared/constants/logos-data";

// helpers
import toErrorResponse from "@/shared/helpers/to-error-response";
import normalizeString from "@/shared/helpers/normalize-string";
import clamp from "@/shared/helpers/clamp";
import readOptionalNonEmpty from "@/shared/helpers/read-optional-non-empty";
import readLimit from "@/shared/helpers/read-limit";
import readSkip from "@/shared/helpers/read-skip";

// models
import type LogoItem from "@/shared/models/logos/logo-item";
import type ListResponse from "@/shared/models/common/list-response";

// personal constants
import CACHE_HEADERS from '@/shared/constants/cache-headers';

// personal models
type PreparedLogo = {
  logo: LogoItem;
  categoryKeys: string[];
  searchText: string;
};

const preparedLogos: PreparedLogo[] = LOGOS_DATA.map((logo) => ({
  logo,
  categoryKeys: [logo.mainCategory, ...logo.secondaryCategories].map(normalizeString).filter(Boolean),
  searchText: normalizeString([logo.name, logo.mainCategory, logo.secondaryCategories.join(" "), logo.websiteLink ?? ""].join(" ")),
}));

function toResponse(payload: ListResponse<LogoItem>) {
  return NextResponse.json(payload, { status: 200, headers: CACHE_HEADERS });
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Supported query params (all optional):
    // - category: string (filters by mainCategory or secondaryCategories; case-insensitive)
    // - search: string (searches across name, categories, websiteLink; case-insensitive)
    // - limit: number (max items to return; if omitted returns all items when skip is also omitted)
    // - skip: number (number of items to skip; default 0; used only when limit or skip is provided)
    const categoryResult = readOptionalNonEmpty(searchParams, "category");
    if (!categoryResult.ok) return categoryResult.error;

    const searchResult = readOptionalNonEmpty(searchParams, "search");
    if (!searchResult.ok) return searchResult.error;

    const categoryKey = categoryResult.value ? normalizeString(categoryResult.value) : null;
    const searchKey = searchResult.value ? normalizeString(searchResult.value) : null;

    const limitResult = readLimit(searchParams);
    if (!limitResult.ok) return limitResult.error;

    const skipResult = readSkip(searchParams);
    if (!skipResult.ok) return skipResult.error;

    const hasLimit = searchParams.has("limit");
    const hasSkip = searchParams.has("skip");
    const hasPaging = hasLimit || hasSkip;

    const filtered = preparedLogos.filter((item) => {
      if (categoryKey && !item.categoryKeys.includes(categoryKey)) return false;
      return !(searchKey && !item.searchText.includes(searchKey));

    });

    const total = filtered.length;

    if (!hasPaging) {
      return toResponse({ data: filtered.map((x) => x.logo), total });
    }

    const skip = skipResult.value;
    const limit = limitResult.value;

    const start = clamp(skip, 0, total);
    const end = limit === null ? total : clamp(start + limit, 0, total);

    const data = filtered.slice(start, end).map((x) => x.logo);

    return toResponse({ data, total });
  } catch {
    return toErrorResponse(500, "INTERNAL_ERROR", "Unexpected server error.");
  }
}