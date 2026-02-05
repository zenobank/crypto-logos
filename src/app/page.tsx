import type { Metadata } from 'next';

// components
import LogosSection from '@/components/home/LogosSection';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Crypto Logos - Download Crypto Logos';
  const description =
    'Browse and download the major crypto and tech logos. Free, high-quality logos for your projects.';

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
  return (
    <div className="flex flex-1 flex-col p-6 max-md:p-4">
      <LogosSection />
    </div>
  );
}
