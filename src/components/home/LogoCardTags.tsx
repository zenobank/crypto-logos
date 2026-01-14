import Link from 'next/link';
import { MoreHorizontal, Tag } from 'lucide-react';

// components
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// custom models
interface LogoCardTagsProps {
  mainCategory: string;
  secondaryCategories: string[];
}

export default function LogoCardTags({ mainCategory, secondaryCategories }: LogoCardTagsProps) {
  return (
    <div className="flex items-center justify-center gap-2 mb-3 flex-wrap">
      <Link href={`/category/${mainCategory.toLowerCase()}`}>
        <Badge className="capitalize h-5.5 text-xs rounded-full px-3 cursor-pointer hover:bg-accent transition-colors" variant="outline">
          {mainCategory}
        </Badge>
      </Link>

      {secondaryCategories && secondaryCategories.length > 0 && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Badge className="h-5.5 text-xs rounded-full px-3 cursor-pointer hover:bg-accent transition-colors" variant="outline">
              <MoreHorizontal size={32} />
            </Badge>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="min-w-40">
            {secondaryCategories.map((category) => (
              <DropdownMenuItem key={category} asChild>
                <Link
                  href={`/category/${category.toLowerCase()}`}
                  className="cursor-pointer capitalize"
                >
                  <Tag className="h-4 w-4 mr-2" />
                  {category}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}
