import Link from 'next/link';

// data
import { getRelatedLogos } from '@/shared/constants/related-logos';

// components
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import LogoCardContent from '@/components/home/LogoCardContent';

// custom models
interface Props {
  logoId: string;
  limit?: number;
}

const DEFAULT_LIMIT = 12;
export default function RelatedLogos({ logoId, limit = DEFAULT_LIMIT }: Props) {
  const relatedLogos = getRelatedLogos(logoId).slice(0, limit);

  if (relatedLogos.length === 0) {
    return null;
  }

  return (
    <section className="mt-8">
      <Separator className="mb-6" />
      <h2 className="mb-4 text-xl font-semibold">Related Logos</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {relatedLogos.map((logo) => (
          <Card
            key={logo.id}
            className="relative h-full gap-0 bg-transparent px-3.5 py-3 transition-colors hover:bg-accent/50"
          >
            <Link
              className="absolute inset-0 z-0"
              href={`/logo/${logo.id}`}
              aria-label={`View ${logo.name}`}
            />
            <LogoCardContent logo={logo} loading="lazy">
              <h3 className="text-center text-sm font-medium break-all">
                {logo.name}
              </h3>
            </LogoCardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
