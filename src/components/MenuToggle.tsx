'use client';

import { ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';

// components
import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';

// custom models
interface Props {
  children: ReactNode;
}

export default function MenuToggle({ children }: Props) {
  // states
  const [isOpen, setIsOpen] = useState(false);

  // helpers
  function toggle(): void {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Button className="hidden max-md:flex" variant="ghost" size="icon" aria-label="open menu" onClick={toggle}>
        <MenuIcon />
      </Button>
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 bg-background shadow-lg transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        {children}
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300"
          onClick={toggle}
        />
      )}
    </>
  );
}
