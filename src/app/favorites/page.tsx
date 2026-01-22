import React from 'react';
import type { Metadata } from 'next';

// components
import LogosSection from '@/components/favorites/LogosSection';

// custom models
interface Props {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Favorites Logos - Crypto Logos';

  const description =
    'Browse and download your favorite crypto logos in SVG and PNG format';

  return {
    title,
    description,
    robots: {
      index: false,
      follow: true,
    },
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

export default async function FavoritesPage({ searchParams }: Props) {
  // computed
  const { q: searchQuery = '' } = await searchParams;

  return (
    <div className="flex flex-1 flex-col p-6 max-md:p-4">
      <LogosSection searchQuery={searchQuery} />
    </div>
  );
}
