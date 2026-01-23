import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';
import type { Metadata } from 'next';

// queries
import { getLogosQueryParams } from '@/queries/app-queries';

// components
import LogosSection from '@/components/home/LogosSection';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Crypto Logos - Free SVG Logo Collection';
  const description = 'Browse and download 576+ crypto and tech logos in SVG format. Free, high-quality SVG logos for your projects.';

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

export default async function Home() {
  // common
  const queryClient = new QueryClient();

  // prefetch
  await queryClient.prefetchInfiniteQuery(
    getLogosQueryParams('', ''),
  );

  return (
    <div className="flex flex-1 flex-col p-6 max-md:p-4">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <LogosSection />
      </HydrationBoundary>
    </div>
  );
}
