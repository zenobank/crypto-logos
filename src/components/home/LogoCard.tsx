// import { Palette } from 'lucide-react';

// components
import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import FavoriteToggle from '@/components/FavoriteToggle';
import LogoCardTags from '@/components/home/LogoCardTags';
import LogoCardContent from '@/components/home/LogoCardContent';
import LogoCardWrapper from '@/components/home/LogoCardWrapper';

// models
import type LogoItemsResponse from '@/shared/models/logos/logo-items-response';

// custom models
interface Props {
  logo: LogoItemsResponse;
}

export default function LogoCard({ logo }: Props) {
  return (
    <LogoCardWrapper logoId={logo.id}>
      <Card className="grow gap-0 bg-transparent px-3.5 py-3 transition-colors hover:bg-accent/50">
        {/* Top right icons - Palette + Heart */}
        <div
          className="flex items-center justify-end gap-1"
          onClick={(e) => e.stopPropagation()}
        >
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
    </LogoCardWrapper>
  );
}
