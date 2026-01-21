// models
import CategoryListItem from '@/shared/models/categories/category-list-item';

// constants
import { CATEGORY_MAP, CATEGORIES_RESPONSE } from '@/shared/constants/logos-data';

export function getCategories(): CategoryListItem[] {
  return CATEGORIES_RESPONSE;
}

export function getCategoryById(id: string): CategoryListItem | null {
  if (!id) {
    return null;
  }

  return CATEGORY_MAP[id];
}
