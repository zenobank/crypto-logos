import FlexSearch from 'flexsearch';

// data
import LOGOS_DATA from '@/api/logos.json';

// models
import LogoItemsResponse from '@/shared/models/logos/logo-items-response';

function normalizeString(value: string): string {
  return String(value ?? '').trim();
}

function getCategoryIdByName(name: string): string {
  return String(name ?? '').trim().toLowerCase().replace(/\s+/g, '-');
}

// categories
export const CATEGORIES_COUNT = LOGOS_DATA.reduce((acc, logo) => {
  const mainCategory = normalizeString(logo.mainCategory);
  acc[mainCategory] = (acc[mainCategory] || 0) + 1;

  logo.secondaryCategories.forEach((category: string) => {
    const sanitizedCategory = normalizeString(category);
    acc[sanitizedCategory] = (acc[sanitizedCategory] || 0) + 1;
  });

  return acc;
}, {} as Record<string, number>);

export const CATEGORIES_RESPONSE = Object.keys(CATEGORIES_COUNT).map(
  (category) => ({
    id: getCategoryIdByName(category),
    name: category,
    count: CATEGORIES_COUNT[category],
  }),
);

export const CATEGORY_MAP = CATEGORIES_RESPONSE.reduce((acc, category) => {
  acc[category.id] = category;
  return acc;
}, {} as Record<string, typeof CATEGORIES_RESPONSE[number]>);

// logos
export const LOGOS_RESPONSE: LogoItemsResponse[] = LOGOS_DATA.map(({ mainCategory, secondaryCategories, ...other }) => ({
  ...other,
  mainCategory: {
    id: getCategoryIdByName(mainCategory),
    name: mainCategory,
  },
  secondaryCategories: secondaryCategories.map((category) => ({
    id: getCategoryIdByName(category),
    name: category,
  })),
})) as unknown as LogoItemsResponse[];

export const LOGOS_BY_CATEGORY = LOGOS_RESPONSE.reduce((acc, logo) => {
  const categoryId = logo.mainCategory.id;

  acc[categoryId] = acc[categoryId] ?? [];
  acc[categoryId].push(logo);

  logo.secondaryCategories.forEach((category) => {
    acc[category.id] = acc[category.id] ?? [];
    acc[category.id].push(logo);
  });

  return acc;
}, {} as Record<string, LogoItemsResponse[]>);

// Global search index (all logos)
export const LOGOS_SEARCH_INDEX = new FlexSearch.Index({
  tokenize: 'forward',
  resolution: 9,
});

// Build global index
LOGOS_RESPONSE.forEach((logo, i) => {
  LOGOS_SEARCH_INDEX.add(i, logo.name);
});

// Per-category search indexes
export const CATEGORY_SEARCH_INDEXES = Object.entries(LOGOS_BY_CATEGORY).reduce((acc, [categoryId, logos]) => {
  const index = new FlexSearch.Index({
    tokenize: 'forward',
    resolution: 9,
  });
  logos.forEach((logo, i) => index.add(i, logo.name));
  acc[categoryId] = { index, logos };
  return acc;
}, {} as Record<string, { index: typeof LOGOS_SEARCH_INDEX; logos: LogoItemsResponse[] }>);
