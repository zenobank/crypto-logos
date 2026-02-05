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
import { CATEGORIES_RESPONSE } from '@/shared/constants/logos-data';

// custom models
interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES_RESPONSE.map(({ id: category }) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;

  const { total } = getLogos({ category });
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  const title = `${categoryName} Logos - ${total} Free SVG Logos`;
  const description = `Browse and download the major ${categoryName} logos. Free, high-quality logos for your projects.`;

  return {
    title,
    description,
    robots: { index: true, follow: true },
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

  // prefetch
  await queryClient.prefetchInfiniteQuery(getLogosQueryParams('', category));

  return (
    <div className="flex flex-1 flex-col p-6 max-md:p-4">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <LogosSection category={category} showCategoryHeader />
      </HydrationBoundary>
    </div>
  );
}
