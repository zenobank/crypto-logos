import Link from 'next/link';

// components
import { Card } from '@/components/ui/card';
import FavoriteToggle from '@/components/FavoriteToggle';
import LogoCardTags from '@/components/home/LogoCardTags';
import LogoCardContent from '@/components/home/LogoCardContent';

// models
import type LogoItemsResponse from '@/shared/models/logos/logo-items-response';

// custom models
interface Props {
  logo: LogoItemsResponse;
}

export default function LogoCard({ logo }: Props) {
  return (
    <Card className="relative min-h-60 gap-0 bg-transparent px-3.5 py-3 transition-colors hover:bg-accent/50">
      {/* Stretched link covers the whole card */}
      <Link
        className="absolute inset-0 z-0"
        href={`/logo/${logo.id}`}
        aria-label={`View ${logo.name}`}
      />

      {/* Top right icons - above the link */}
      <div className="relative z-10 flex items-center justify-end gap-1">
        <FavoriteToggle logo={logo} />
      </div>

      <LogoCardContent logo={logo}>
        <h3 className="mb-1 text-center text-lg font-medium break-all">
          {logo.name}
        </h3>

        <LogoCardTags
          mainCategory={logo.mainCategory}
          secondaryCategories={logo.secondaryCategories}
        />
      </LogoCardContent>
    </Card>
  );
}
