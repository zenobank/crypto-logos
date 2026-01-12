import { NextResponse } from "next/server";

// data
import LOGOS_DATA from "@/shared/constants/logos-data";

// helpers
import toErrorResponse from "@/shared/helpers/to-error-response";
import normalizeString from "@/shared/helpers/normalize-string";
import clamp from "@/shared/helpers/clamp";
import readPageSize from "@/shared/helpers/read-page-size";
import readOffset from "@/shared/helpers/read-offset";
import readOptionalNonEmpty from "@/shared/helpers/read-optional-non-empty";

// models
import type LogoItem from "@/shared/models/logos/logo-item";
import ListResponse from '@/shared/models/common/list-response';

// personal models
type PreparedLogo = {
  logo: LogoItem;
  categoryKeys: string[];
  searchText: string;
};

// personal constants
const preparedLogos: PreparedLogo[] = LOGOS_DATA
  .map((logo) => ({
    logo,
    categoryKeys: [logo.mainCategory, ...logo.secondaryCategories].map(normalizeString).filter(Boolean),
    searchText: normalizeString([logo.name, logo.mainCategory, logo.secondaryCategories.join(" "), logo.websiteLink ?? ""].join(" ")),
  }));

// request
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const pageSizeResult = readPageSize(searchParams);
    if (!pageSizeResult.ok) return pageSizeResult.error;

    const offsetResult = readOffset(searchParams);
    if (!offsetResult.ok) return offsetResult.error;

    const categoryResult = readOptionalNonEmpty(searchParams, "category");
    if (!categoryResult.ok) return categoryResult.error;

    const searchResult = readOptionalNonEmpty(searchParams, "search");
    if (!searchResult.ok) return searchResult.error;

    const pageSize = pageSizeResult.value;
    const offset = offsetResult.value;

    const categoryKey = categoryResult.value ? normalizeString(categoryResult.value) : null;
    const searchKey = searchResult.value ? normalizeString(searchResult.value) : null;

    const filtered = preparedLogos.filter((item) => {
      if (categoryKey && !item.categoryKeys.includes(categoryKey)) return false;
      if (searchKey && !item.searchText.includes(searchKey)) return false;
      return true;
    });

    const total = filtered.length;

    const start = clamp(offset, 0, total);
    const end = clamp(start + pageSize, 0, total);

    const data = filtered.slice(start, end).map((item) => item.logo);

    const response: ListResponse<LogoItem> = { data, total };

    return NextResponse.json(response, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    return toErrorResponse(500, "INTERNAL_ERROR", "Unexpected server error.");
  }
}