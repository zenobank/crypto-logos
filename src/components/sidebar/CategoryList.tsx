import { getCategories } from '@/lib/categories';

// components
import CategoryLink from '@/components/sidebar/CategoryLink';

export default async function CategoryList() {
  // common
  const categories = await getCategories();

  return categories?.map(({ category, count }) => (
    <CategoryLink key={category} category={category} count={count} />
  ));
}
