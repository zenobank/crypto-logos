import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ExternalLink, Download } from 'lucide-react';

// data
import { LOGOS_BY_ID } from '@/shared/constants/logos-data';

// components
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import LogoDisplaySection from '@/components/logo-detail/LogoDisplaySection';
import LogoDetailDownloads from '@/components/logo-detail/LogoDetailDownloads';
import { Image } from '@/components/ui/image';
import FavoriteToggle from '@/components/FavoriteToggle';

// custom models
interface Props {
  params: Promise<{ id: string }>;
}

export const dynamic = 'force-static';
export const revalidate = 2_592_000; // 1 month

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const logo = LOGOS_BY_ID[id];

  if (!logo) {
    return {
      title: 'Logo Not Found - Crypto Logos',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${logo.name} Logo - Crypto Logos`;
  const description = `Download ${logo.name} logo or embed it to your website or application seamlessly.`;
  const allImages = [
    ...logo.logo.icon.light,
    ...(logo.logo.icon.dark || []),
    ...(logo.logo.text?.light || []),
    ...(logo.logo.text?.dark || []),
  ];
  const images = allImages
    .filter(({ format }) => format !== 'svg')
    .map(({ url }) => url);

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      images,
    },
    twitter: {
      card: 'summary',
      title,
      description,
      images,
    },
  };
}

export default async function LogoDetailPage({ params }: Props) {
  // common
  const { id } = await params;
  const logo = LOGOS_BY_ID[id];

  if (!logo) {
    notFound();
  }

  // computed
  const allCategories = [logo.mainCategory, ...logo.secondaryCategories];
  const logoIconLight = logo.logo.icon.light[0]?.url;
  const logoIconDark = logo.logo.icon.dark?.[0]?.url || logoIconLight;

  return (
    <div className="flex-1 flex flex-col p-6 max-md:p-4 max-w-4xl mx-auto w-full">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm mb-6">
        <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
          Home
        </Link>
        <span className="text-muted-foreground">/</span>
        <span>{logo.name}</span>
      </nav>

      {/* Title and tags */}
      <div className="mb-6">
        <div className="flex items-center justify-between gap-2">
          <h1 className="inline-flex items-center gap-1 text-3xl font-bold mb-3">
            <span>{logo.name}</span>
            <Image className="inline-block w-8 h-8 ml-2 dark:hidden" src={logoIconLight} alt={logo.name} width={32} height={32} />
            <Image className="inline-block w-8 h-8 ml-2 not-dark:hidden" src={logoIconDark} alt={logo.name} width={32} height={32} />
          </h1>
          <FavoriteToggle variant="outline" logo={logo} />
        </div>
        <div className="flex flex-wrap gap-2">
          {allCategories.map((category) => (
            <Link key={category.id} href={`/category/${category.id}`}>
              <Badge variant="secondary" className="capitalize cursor-pointer hover:bg-accent">
                {category.name}
              </Badge>
            </Link>
          ))}
        </div>
      </div>

      {/* Logo display */}
      <div className="mb-8">
        <LogoDisplaySection logo={logo} />
      </div>

      <Separator className="mb-8" />

      {/* Downloads */}
      <LogoDetailDownloads logo={logo} />

      <Separator className="my-8" />

      {/* Links */}
      {(logo.websiteLink || logo.brandKitLink) && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Links</h2>
          <div className="flex flex-wrap gap-3">
            {logo.websiteLink && (
              <Button variant="outline" asChild>
                <a href={logo.websiteLink} target="_blank" rel="noopener noreferrer nofollow">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Website
                </a>
              </Button>
            )}
            {logo.brandKitLink && (
              <Button variant="outline" asChild>
                <a href={logo.brandKitLink} target="_blank" rel="noopener noreferrer nofollow">
                  <Download className="h-4 w-4 mr-2" />
                  Brand Kit
                </a>
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
