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
      <Card className="grow py-3 px-3.5 gap-0 bg-transparent hover:bg-accent/50 transition-colors">
        {/* Top right icons - Palette + Heart */}
        <div className="flex items-center justify-end gap-1" onClick={(e) => e.stopPropagation()}>
          {/*{logo.brandKitLink && (*/}
          {/*  <Button*/}
          {/*    variant="ghost"*/}
          {/*    size="icon"*/}
          {/*    className="h-8 w-8"*/}
          {/*    aria-label={`View ${logo.name} brand kit`}*/}
          {/*    asChild*/}
          {/*  >*/}
          {/*    <a href={logo.brandKitLink} target="_blank" rel="noopener noreferrer nofollow">*/}
          {/*      <Palette className="h-5 w-5" />*/}
          {/*    </a>*/}
          {/*  </Button>*/}
          {/*)}*/}
          <FavoriteToggle logo={logo} />
        </div>

        <LogoCardContent logo={logo}>
          <h3 className="font-medium text-lg text-center mb-1 break-all">{logo.name}</h3>

          <LogoCardTags
            mainCategory={logo.mainCategory}
            secondaryCategories={logo.secondaryCategories}
          />
        </LogoCardContent>
      </Card>
    </LogoCardWrapper>
  );
}
