'use client';

import { useRef, useEffect, useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Search, X } from 'lucide-react';

// components
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export default function HeaderSearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  const isSearchPage = pathname === '/search' || pathname.endsWith('/search');
  const [query, setQuery] = useState(isSearchPage ? (searchParams.get('q') ?? '') : '');

  // Sync from URL when on search page
  useEffect(() => {
    if (isSearchPage) {
      setQuery(searchParams.get('q') ?? '');
    }
  }, [searchParams, isSearchPage]);

  // Keyboard shortcut (Cmd+K / Ctrl+K)
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
      inputRef.current?.blur();
    }
  }

  function handleClear() {
    setQuery('');
    inputRef.current?.focus();
  }

  return (
    <form onSubmit={handleSubmit} className="relative hidden w-full max-w-sm md:block">
      <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        ref={inputRef}
        type="text"
        placeholder="Search logos..."
        className="h-9 pr-16 pl-9"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="absolute top-1/2 right-3 flex -translate-y-1/2 items-center gap-2">
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Clear search"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
        <Badge variant="outline" className="text-[10px] leading-none px-1.5 py-0.5">
          ⌘K
        </Badge>
      </div>
    </form>
  );
}
