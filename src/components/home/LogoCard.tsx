import { Palette } from 'lucide-react';

// components
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import FavoriteToggle from '@/components/FavoriteToggle';
import LogoCardTags from '@/components/home/LogoCardTags';
import LogoCardContent from '@/components/home/LogoCardContent';

// models
import type LogoItem from '@/shared/models/logos/logo-item';

// custom models
interface Props {
  logo: LogoItem;
}

export default function LogoCard({ logo }: Props) {
  return (
    <Card className="py-3 px-3.5 gap-0 bg-transparent">
      {/* Top right icons - Palette + Heart */}
      <div className="flex items-center justify-end gap-1">
        {logo.brandKitLink && (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            aria-label={`View ${logo.name} brand kit`}
            asChild
          >
            <a href={logo.brandKitLink} target="_blank" rel="noopener noreferrer">
              <Palette className="h-5 w-5" />
            </a>
          </Button>
        )}
        <FavoriteToggle id={logo.id} />
      </div>

      <LogoCardContent logo={logo}>
        <h3 className="font-medium text-lg text-center mb-1">{logo.name}</h3>

        <LogoCardTags
          mainCategory={logo.mainCategory}
          secondaryCategories={logo.secondaryCategories}
        />
      </LogoCardContent>
    </Card>
  );
}
