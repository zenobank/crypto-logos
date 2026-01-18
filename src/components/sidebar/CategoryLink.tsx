'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

// custom models
interface CategoryLinkProps {
  category: string;
  count: number;
}

export default function CategoryLink({ category, count }: CategoryLinkProps) {
  // common
  const pathname = usePathname();

  // computed
  const href = `/category/${category.toLowerCase()}`;
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-between rounded-lg px-3 py-1.5 transition-colors hover:text-foreground",
        isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
      )}
    >
      <span className="text-base capitalize">{category}</span>
      <span
        className={cn(
          "text-xs px-2 py-0.5 rounded-xl border transition-colors",
          isActive ? "border-accent-foreground/20" : "border-border"
        )}
      >
        {count}
      </span>
    </Link>
  );
}
