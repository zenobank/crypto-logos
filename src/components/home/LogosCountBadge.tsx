'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

// queries
import { getLogosQueryParams } from '@/queries/app-queries';

// custom models
interface Props {
  searchQuery: string;
  category: string | null;
  categoryPage?: boolean;
}

export default function LogosCountBadge({
  searchQuery,
  category,
  categoryPage,
}: Props) {
  // requests
  const { data } = useInfiniteQuery(getLogosQueryParams(searchQuery, category));

  // computed
  const total = data?.pages[0]?.total ?? 0;

  return (
    <>
      {total}
      {categoryPage ? ` Crypto Logo${total === 1 ? '' : 's'}` : ' Crypto Logos'}
    </>
  );
}
