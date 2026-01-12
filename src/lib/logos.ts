// data
import LOGOS_DATA from "@/shared/constants/logos-data";

// helpers
import normalizeString from "@/shared/helpers/normalize-string";
import clamp from "@/shared/helpers/clamp";

// models
import type LogoItem from "@/shared/models/logos/logo-item";
import type ListResponse from "@/shared/models/common/list-response";

// custom models
export interface GetLogosParams {
  limit?: number;
  skip?: number;
  category?: string;
  search?: string;
}

type PreparedLogo = {
  logo: LogoItem;
  categoryKeys: string[];
  searchText: string;
};

const preparedLogos: PreparedLogo[] = LOGOS_DATA.map((logo) => ({
  logo,
  categoryKeys: [logo.mainCategory, ...logo.secondaryCategories].map(normalizeString).filter(Boolean),
  searchText: normalizeString(logo.name),
}));

export async function getLogos(params: GetLogosParams = {}): Promise<ListResponse<LogoItem>> {
  const { category, search, limit, skip = 0 } = params;

  const categoryKey = category ? normalizeString(category) : null;
  const searchKey = search ? normalizeString(search) : null;

  const filtered = preparedLogos.filter((item) => {
    if (categoryKey && !item.categoryKeys.includes(categoryKey)) return false;
    return !(searchKey && !item.searchText.includes(searchKey));
  });

  const total = filtered.length;

  // If no pagination params, return all
  if (limit === undefined) {
    return { data: filtered.map((x) => x.logo), total };
  }

  const start = clamp(skip, 0, total);
  const end = clamp(start + limit, 0, total);

  const data = filtered.slice(start, end).map((x) => x.logo);

  return { data, total };
}
