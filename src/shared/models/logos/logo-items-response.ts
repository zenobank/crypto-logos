// models
import LogoItem from '@/shared/models/logos/logo-item';
import CategoryListItem from '@/shared/models/categories/category-list-item';

type LogoCategory = Omit<CategoryListItem, 'count'>;

interface LogoItemsResponse extends Omit<LogoItem, 'mainCategory' | 'secondaryCategories'> {
  mainCategory: LogoCategory;
  secondaryCategories: LogoCategory[];
}

export default LogoItemsResponse;
