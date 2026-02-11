import type { Metadata } from 'next';

// components
import LogosSection from '@/components/home/LogosSection';

const title = 'Crypto Logos - Free PNG and SVG Download';

export async function generateMetadata(): Promise<Metadata> {
  const description = '';

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
      <h1 className="sr-only">{title}</h1>
      <LogosSection />
    </div>
  );
}
