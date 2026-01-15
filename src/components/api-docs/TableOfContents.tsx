'use client';

import { ReactNode, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

// components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// custom models
interface TocItem {
  id: string;
  title: string;
  level: number;
}

// custom constants
const tocItems: TocItem[] = [
  { id: 'introduction', title: 'Introduction', level: 1 },
  { id: 'base-url', title: 'Base URL', level: 1 },
  { id: 'typescript', title: 'TypeScript', level: 1 },
  { id: 'endpoints', title: 'Endpoints', level: 1 },
  { id: 'get-all-logos', title: 'Get all logos', level: 2 },
  { id: 'get-logos-with-limit', title: 'Get logos with limit', level: 2 },
  { id: 'get-logos-by-category', title: 'Get logos by category', level: 2 },
  { id: 'search-logos', title: 'Search logos', level: 2 },
  { id: 'get-categories', title: 'Get categories', level: 2 },
];

// sub-components
function TocLinks({
  activeId,
  onItemClick,
}: {
  activeId: string;
  onItemClick: (id: string) => void;
}): ReactNode {
  return (
    <nav className="space-y-1">
      {tocItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onItemClick(item.id)}
          className={cn(
            'block w-full text-left text-sm transition-colors cursor-pointer',
            item.level === 2 ? 'pl-4' : '',
            activeId === item.id
              ? 'text-neutral-900 dark:text-neutral-100 font-medium'
              : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-300',
          )}
        >
          {item.title}
        </button>
      ))}
    </nav>
  );
}

export default function TableOfContents() {
  // states
  const [activeId, setActiveId] = useState<string>('');

  // effects
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' },
    );

    tocItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // helpers
  function handleClick(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <>
      {/* Mobile Accordion */}
      <div className="sticky top-12.5 z-20 lg:hidden mb-6 bg-white/80 backdrop-blur-sm dark:bg-neutral-900/40">
        <Accordion type="single" collapsible className="border-b border-neutral-200 dark:border-neutral-800 bg-transparent">
          <AccordionItem value="toc" className="border-none">
            <AccordionTrigger className="px-4 py-3 hover:no-underline">
              <span className="text-base font-semibold">On this page</span>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <TocLinks activeId={activeId} onItemClick={handleClick} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block sticky top-20 w-56 shrink-0 h-fit">
        <div className="text-sm font-semibold mb-4">On this page</div>
        <TocLinks activeId={activeId} onItemClick={handleClick} />
      </aside>
    </>
  );
}
