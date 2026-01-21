import { getCategories } from '@/lib/categories';

// components
import CategoryLink from '@/components/sidebar/CategoryLink';

export default function CategoryList() {
  // common
  const categories = getCategories();

  return categories?.map(({ id, name, count }) => (
    <CategoryLink key={id} id={id} name={name} count={count} />
  ));
}
