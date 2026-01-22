'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

// custom models
interface NavLinkProps {
  name: string;
  href: string;
  icon: ReactNode;
  children?: ReactNode;
}

export default function NavLink({ name, href, icon, children }: NavLinkProps) {
  // common
  const pathname = usePathname();

  // computed
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'hover:bg-accent hover:text-accent-foreground flex items-center gap-3 rounded-lg px-3 py-1.5 transition-colors',
        isActive ? 'bg-accent text-accent-foreground' : 'text-muted-foreground',
      )}
    >
      {icon}
      <span className="text-base">{name}</span>
      {children}
    </Link>
  );
}
