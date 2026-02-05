// data
import { LOGOS_DATA } from '@/api/logos-data';

// models
import LogoItemsResponse from '@/shared/models/logos/logo-items-response';
import { LogoCategory } from '../models/logos/logo-category';

function normalizeString(value: string): string {
  return String(value ?? '').trim();
}

export function getCategoryLabel(category: LogoCategory): string {
  const map: Record<LogoCategory, string> = {
    stablecoins: 'Stablecoins',
    tokens: 'Tokens',
    chains: 'Blockchains',
    'infrastructure-tools': 'Infrastructure Tools',
    'crypto-banks': 'Crypto Banks',
    wallets: 'Wallets',
    exchanges: 'Exchanges',
    investors: 'Investors',
    nft: 'NFT',
    payments: 'Payments',
    defi: 'DeFi',
    education: 'Education',
    services: 'Services',
  };

  return map[category];
}

// categories
export const CATEGORIES_COUNT = LOGOS_DATA.reduce(
  (acc, logo) => {
    const mainCategory = normalizeString(logo.mainCategory);
    acc[mainCategory] = (acc[mainCategory] || 0) + 1;

    logo.secondaryCategories.forEach((category: string) => {
      const sanitizedCategory = normalizeString(category);
      acc[sanitizedCategory] = (acc[sanitizedCategory] || 0) + 1;
    });

    return acc;
  },
  {} as Record<string, number>,
);

export const CATEGORIES_RESPONSE = Object.keys(CATEGORIES_COUNT).map(
  (category) => ({
    id: category,
    name: getCategoryLabel(category as LogoCategory),
    count: CATEGORIES_COUNT[category],
  }),
);

export const CATEGORY_MAP = CATEGORIES_RESPONSE.reduce(
  (acc, category) => {
    acc[category.id] = category;
    return acc;
  },
  {} as Record<string, (typeof CATEGORIES_RESPONSE)[number]>,
);

// logos (pre-sorted by name ascending for performance)
export const LOGOS_RESPONSE: LogoItemsResponse[] = LOGOS_DATA.map(
  ({ mainCategory, secondaryCategories, ...other }) => ({
    ...other,
    mainCategory: {
      id: mainCategory,
      name: getCategoryLabel(mainCategory as LogoCategory),
    },
    secondaryCategories: secondaryCategories.map((category) => ({
      id: category,
      name: getCategoryLabel(category as LogoCategory),
    })),
  }),
).toSorted((a, b) => a.name.localeCompare(b.name));

// Pre-sorted by name ascending for performance
const LOGOS_BY_CATEGORY_UNSORTED = LOGOS_RESPONSE.reduce(
  (acc, logo) => {
    const categoryId = logo.mainCategory.id;

    acc[categoryId] = acc[categoryId] ?? [];
    acc[categoryId].push(logo);

    logo.secondaryCategories.forEach((category) => {
      acc[category.id] = acc[category.id] ?? [];
      acc[category.id].push(logo);
    });

    return acc;
  },
  {} as Record<string, LogoItemsResponse[]>,
);

export const LOGOS_BY_CATEGORY = Object.fromEntries(
  Object.entries(LOGOS_BY_CATEGORY_UNSORTED).map(([key, logos]) => [
    key,
    logos.toSorted((a, b) => a.name.localeCompare(b.name)),
  ]),
);

// Logo by ID map for O(1) lookup
export const LOGOS_BY_ID = LOGOS_RESPONSE.reduce(
  (acc, logo) => {
    acc[logo.id] = logo;
    return acc;
  },
  {} as Record<string, LogoItemsResponse>,
);
