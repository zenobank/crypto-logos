'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

// queries
import { getLogosQueryParams } from '@/queries/app-queries';

// custom models
interface Props {
  searchQuery: string;
  category: string | null;
}

export default function LogosCountBadge({ searchQuery, category }: Props) {
  // requests
  const { data } = useInfiniteQuery(getLogosQueryParams(searchQuery, category));

  // computed
  const total = data?.pages[0]?.total ?? 0;

  return <>{total}</>;
}
