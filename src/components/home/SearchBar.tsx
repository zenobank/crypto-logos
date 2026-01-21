'use client';

import { useRef, useEffect } from 'react';
import { useQueryState, parseAsString } from 'nuqs';
import { Search, X } from 'lucide-react';

// components
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export default function SearchBar() {
  // refs
  const inputRef = useRef<HTMLInputElement>(null);

  // state
  const [searchQuery, setSearchQuery] = useQueryState(
    'q',
    parseAsString.withDefault('').withOptions({
      limitUrlUpdates: { method: 'debounce', timeMs: 300 },
      shallow: false,
    })
  );

  // Keyboard shortcut (⌘K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // helpers
  function handleClear(): void {
    setSearchQuery('');
    inputRef.current?.focus();
  }

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        ref={inputRef}
        type="text"
        placeholder="Search logos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-9 h-10.5 pr-20"
      />
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
        {searchQuery && (
          <button
            onClick={handleClear}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        <Badge variant="outline" className="text-xs">
          ⌘K
        </Badge>
      </div>
    </div>
  );
}
