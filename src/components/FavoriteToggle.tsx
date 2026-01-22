'use client';
import { Heart } from 'lucide-react';

// hooks
import { useFavorites } from '@/providers/FavoritesProvider';

// components
import { Button } from '@/components/ui/button';

// models
import LogoItemsResponse from '@/shared/models/logos/logo-items-response';

// custom models
interface Props {
  logo: LogoItemsResponse;
  variant?: 'default' | 'secondary' | 'outline' | 'ghost';
}

function FavoriteToggle({ logo, variant = 'ghost' }: Props) {
  // common
  const { toggleFavorite, isFavorite: isFavoriteId } = useFavorites();

  // computed
  const isFavorite = isFavoriteId(logo);

  // helpers
  function handleToggleFavorite(): void {
    toggleFavorite(logo);
  }

  return (
    <Button
      variant={variant}
      size="icon"
      onClick={handleToggleFavorite}
      className="h-8 w-8"
      aria-label={isFavorite ? `Remove from favorites` : `Add to favorites`}
    >
      <Heart
        className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`}
      />
    </Button>
  );
}

export default FavoriteToggle;
