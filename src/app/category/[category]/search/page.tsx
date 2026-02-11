import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';
import type { Metadata } from 'next';

// lib
import { getLogos } from '@/lib/logos';

// queries
import { getLogosQueryParams } from '@/queries/app-queries';

// components
import LogosSection from '@/components/home/LogosSection';

// models
import LogosSortBy from '@/shared/models/logos/logos-sort-by';

// custom models
interface Props {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ q?: string; sort?: string }>;
}

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { category } = await params;
  const { q: searchQuery } = await searchParams;

  // Get the count of logos in this category
  const { total } = getLogos({ category });

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  const title = searchQuery
    ? `Search "${searchQuery}" in ${categoryName} - Crypto Logos`
    : `${categoryName} Logos - Free PNG and SVG Download`;

  const description = searchQuery
    ? `Search results for "${searchQuery}" in ${categoryName} category. Browse ${total} crypto logos in SVG and PNG format.`
    : `Browse and download ${categoryName} Logos. Free, high-quality crypto logos for your project`;

  return {
    title,
    description,
    robots: searchQuery
      ? { index: false, follow: true }
      : { index: true, follow: true },
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

export default async function CategoryPage({ params, searchParams }: Props) {
  // common
  const queryClient = new QueryClient();

  // computed
  const { category } = await params;
  const { q: searchQuery = '', sort = LogosSortBy.NameAsc } =
    await searchParams;
  const sortBy = (
    sort === LogosSortBy.NameDesc ? LogosSortBy.NameDesc : LogosSortBy.NameAsc
  ) as LogosSortBy;

  // prefetch
  await queryClient.prefetchInfiniteQuery(
    getLogosQueryParams(searchQuery, category, sortBy),
  );

  return (
    <div className="flex flex-1 flex-col p-6 max-md:p-4">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <LogosSection
          searchQuery={searchQuery}
          category={category}
          sortBy={sortBy}
          showCategoryHeader
        />
      </HydrationBoundary>
    </div>
  );
}
