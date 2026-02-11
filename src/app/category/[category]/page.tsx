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

// constants
import {
  CATEGORIES_RESPONSE,
  getCategoryLabel,
} from '@/shared/constants/logos-data';

// models
import { LogoCategory } from '@/shared/models/logos/logo-category';

// custom models
interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES_RESPONSE.map(({ id: category }) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;

  const categoryLabel = getCategoryLabel(category as LogoCategory);

  const title = `${categoryLabel} Logos - Free PNG and SVG Download`;
  const description = `Browse and download ${categoryLabel} logos. Free, high-quality crypto logos for your project`;

  return {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `/category/${category}`,
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

export default async function CategoryPage({ params }: Props) {
  // common
  const queryClient = new QueryClient();

  // computed
  const { category } = await params;
  const categoryName = getCategoryLabel(category as LogoCategory);

  // prefetch
  await queryClient.prefetchInfiniteQuery(getLogosQueryParams('', category));

  return (
    <div className="flex flex-1 flex-col p-6 max-md:p-4">
      <h1 className="sr-only">
        {categoryName} Logos - Free SVG and PNG {categoryName} Logos Download
      </h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <LogosSection category={category} showCategoryHeader />
      </HydrationBoundary>
    </div>
  );
}
