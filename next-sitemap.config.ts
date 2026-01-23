import type { IConfig } from 'next-sitemap';
import { LOGOS_DATA } from '@/api/logos-data';

const SERVER_BASE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
}

function getCategories() {
  const categoriesCounts = LOGOS_DATA.reduce(
    (acc, logo) => {
      const mainCategory = normalizeString(logo.mainCategory);
      acc[mainCategory] = (acc[mainCategory] || 0) + 1;

      logo.secondaryCategories.forEach((category) => {
        const sanitizedCategory = normalizeString(category);
        acc[sanitizedCategory] = (acc[sanitizedCategory] || 0) + 1;
      });

      return acc;
    },
    {} as Record<string, number>,
  );

  return Object.keys(categoriesCounts).map((category) => ({
    category,
    count: categoriesCounts[category],
  }));
}

const config: IConfig = {
  siteUrl: SERVER_BASE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  additionalPaths: async () => {
    const categories = getCategories();

    const categoryPaths = categories.map((category) => ({
      loc: `/category/${category.category}`,
      changefreq: 'daily' as const,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }));

    const logoPaths = LOGOS_DATA.map((logo) => ({
      loc: `/logo/${logo.id}`,
      changefreq: 'monthly' as const,
      priority: 0.6,
      lastmod: new Date().toISOString(),
    }));

    return [
      {
        loc: '/',
        changefreq: 'daily' as const,
        priority: 1.0,
        lastmod: new Date().toISOString(),
      },
      ...categoryPaths,
      ...logoPaths,
    ];
  },
};

export default config;
