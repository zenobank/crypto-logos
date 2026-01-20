'use client';

// hooks
import { useFavorites } from '@/providers/FavoritesProvider';

// components
import { Badge } from '@/components/ui/badge';

export default function FavoritesCountBadge() {
  const { favoriteItems } = useFavorites();
  const count = favoriteItems.length;

  if (!count) return null;

  return (
    <Badge
      variant="outline"
      className="text-muted-foreground hover:bg-muted rounded-xl"
    >
      {count}
    </Badge>
  );
}