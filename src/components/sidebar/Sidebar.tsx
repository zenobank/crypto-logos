import { Home, Heart, FileJson } from 'lucide-react';
import { cn } from '@/lib/utils';

// components
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import FavoritesCountBadge from '@/components/FavoritesCountBadge';
import CategoryList from '@/components/sidebar/CategoryList';
import NavLink from '@/components/sidebar/NavLink';

// custom models
interface Props {
  className?: string;
}

// custom constants
const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Favorites', href: '/favorites', icon: Heart },
  { name: 'API Docs', href: '/api-docs', icon: FileJson },
];

export default async function Sidebar({ className }: Props) {
  return (
    <aside className={cn('fixed left-0 top-14 z-40 flex flex-col h-[calc(100vh-3.5rem)] w-64 overflow-y-auto border-r border-border/40 bg-background overscroll-none', className)}>
      <div className="flex-1 flex flex-col gap-4 py-4">
        {/* Main Navigation */}
        <nav className="flex flex-col gap-1 pl-1 pr-2">
          {mainNavigation.map((item) => {
            const Icon = item.icon;
            const isFavorites = item.href === '/favorites';

            return (
              <NavLink
                key={item.name}
                name={item.name}
                href={item.href}
                icon={<Icon className="h-5 w-5 shrink-0" />}
              >
                {isFavorites && (
                  <span className="flex items-center justify-end w-full">
                    <FavoritesCountBadge />
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>

        <Separator />

        {/* Categories */}
        <ScrollArea className="grow h-0 pl-1 pr-2">
          <nav className="flex flex-col gap-1">
            <CategoryList />
          </nav>
        </ScrollArea>
      </div>
    </aside>
  );
}
