// eslint-disable-next-line @typescript-eslint/no-require-imports
const logosData = require('./src/api/logos.json');

function normalizeString(str) {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
}

function getCategories() {
  const categoriesCounts = logosData.reduce((acc, logo) => {
    const mainCategory = normalizeString(logo.mainCategory);
    acc[mainCategory] = (acc[mainCategory] || 0) + 1;

    logo.secondaryCategories.forEach((category) => {
      const sanitizedCategory = normalizeString(category);
      acc[sanitizedCategory] = (acc[sanitizedCategory] || 0) + 1;
    });

    return acc;
  }, {});

  return Object.keys(categoriesCounts).map((category) => ({
    category,
    count: categoriesCounts[category],
  }));
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000',
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
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }));

    return [
      {
        loc: '/',
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/favorites',
        changefreq: 'weekly',
        priority: 0.5,
        lastmod: new Date().toISOString(),
      },
      ...categoryPaths,
    ];
  },
}
