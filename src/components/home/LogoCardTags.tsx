import Link from 'next/link';
import { MoreHorizontal, Tag } from 'lucide-react';

// components
import { Badge, badgeVariants } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

// custom models
interface LogoCategory {
  id: string;
  name: string;
}

interface LogoCardTagsProps {
  mainCategory: LogoCategory;
  secondaryCategories: LogoCategory[];
}

export default function LogoCardTags({
  mainCategory,
  secondaryCategories,
}: LogoCardTagsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
      <Link className="z-1" href={`/category/${mainCategory.id}`}>
        <Badge
          className="h-5.5 cursor-pointer rounded-full px-3 text-xs capitalize transition-colors hover:bg-accent"
          variant="outline"
        >
          {mainCategory.name}
        </Badge>
      </Link>

      {secondaryCategories && secondaryCategories.length > 0 && (
        <DropdownMenu>
          <DropdownMenuTrigger
            aria-label="View more categories"
            className={cn(
              badgeVariants({ variant: 'outline' }),
              'z-1 h-5.5 cursor-pointer rounded-full px-3 text-xs transition-colors hover:bg-accent',
            )}
          >
            <MoreHorizontal size={32} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="min-w-40">
            {secondaryCategories.map((category) => (
              <DropdownMenuItem key={category.id} asChild>
                <Link
                  href={`/category/${category.id}`}
                  className="cursor-pointer capitalize"
                >
                  <Tag className="mr-2 h-4 w-4" />
                  {category.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}
