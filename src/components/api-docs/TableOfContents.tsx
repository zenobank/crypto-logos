'use client';

import { ReactNode, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

import { ChevronDownIcon } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

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
            'block w-full cursor-pointer text-left text-sm transition-colors',
            item.level === 2 ? 'pl-4' : '',
            activeId === item.id
              ? 'font-medium text-neutral-900 dark:text-neutral-100'
              : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300',
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
      element.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }

  return (
    <>
      {/* Mobile Accordion */}
      <div className="sticky top-12.5 z-20 mb-6 bg-white/80 backdrop-blur-sm lg:hidden dark:bg-neutral-900/40">
        <AccordionPrimitive.Root
          type="single"
          collapsible
          className="border-b border-neutral-200 bg-transparent dark:border-neutral-800"
        >
          <AccordionPrimitive.Item value="toc" className="border-none">
            <AccordionPrimitive.Header asChild>
              <div className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between gap-4 px-4 py-3 text-left outline-none hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <span className="text-base font-semibold">On this page</span>
                  <ChevronDownIcon className="size-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                </AccordionPrimitive.Trigger>
              </div>
            </AccordionPrimitive.Header>
            <AccordionPrimitive.Content className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <div className="px-4 pb-4">
                <TocLinks activeId={activeId} onItemClick={handleClick} />
              </div>
            </AccordionPrimitive.Content>
          </AccordionPrimitive.Item>
        </AccordionPrimitive.Root>
      </div>

      {/* Desktop Sidebar */}
      <aside className="sticky top-20 hidden h-fit w-56 shrink-0 lg:block">
        <div className="mb-4 text-sm font-semibold">On this page</div>
        <TocLinks activeId={activeId} onItemClick={handleClick} />
      </aside>
    </>
  );
}
