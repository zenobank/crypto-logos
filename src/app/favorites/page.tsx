import React from 'react';
import type { Metadata } from 'next';
import { getLogosQueryParams } from '@/queries/app-queries';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

// components
import LogosSection from '@/components/favorites/LogosSection';

// custom models
interface Props {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Favorites Logos - Free SVG Logos'

  const description = 'Favorites logos in SVG format. Free, high-quality SVG logos for your projects.'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function FavoritesPage({
  searchParams,
}: Props) {
  // common
  const queryClient = new QueryClient();

  // computed
  const { q: searchQuery = '' } = await searchParams;

  // prefetch
  await queryClient.prefetchInfiniteQuery(
    getLogosQueryParams(searchQuery, null),
  );

  return (
    <div className="flex-1 flex flex-col p-6 max-md:p-4">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <LogosSection searchQuery={searchQuery} />
      </HydrationBoundary>
    </div>
  );
}