// data
import LOGOS_DATA from '@/api/logos.json';

// helpers
import normalizeString from '@/shared/helpers/normalize-string';

// models
import CategoryListItem from '@/shared/models/categories/category-list-item';

const categoriesCounts = LOGOS_DATA.reduce((acc, logo) => {
  const mainCategory = normalizeString(logo.mainCategory);
  acc[mainCategory] = (acc[mainCategory] || 0) + 1;

  logo.secondaryCategories.forEach((category: string) => {
    const sanitizedCategory = normalizeString(category);
    acc[sanitizedCategory] = (acc[sanitizedCategory] || 0) + 1;
  });

  return acc;
}, {} as Record<string, number>);

const categoriesResponse: CategoryListItem[] = Object.keys(categoriesCounts).map(
  (category) => ({ category, count: categoriesCounts[category] }),
);

export async function getCategories(): Promise<CategoryListItem[]> {
  return categoriesResponse;
}
