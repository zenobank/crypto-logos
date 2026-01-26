'use client';

import { useRef, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Search, X } from 'lucide-react';

// hooks
import useDebouncedState from '@/hooks/use-debounced-state';
import useStorageState from '@/hooks/use-storage-state';
import useResetStorage from '@/hooks/use-reset-storage';

// components
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

// custom constants
const storageKey = 'searchFocus';

export default function SearchBar() {
  // common
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useResetStorage(storageKey);

  // refs
  const inputRef = useRef<HTMLInputElement>(null);

  // states
  const {
    state: searchQuery,
    setState: setSearchQuery,
    debouncedState: debouncedSearchQuery,
  } = useDebouncedState(searchParams.get('q') ?? '', 300);
  const [searchWasFocused, setSearchWasFocused] = useStorageState<boolean>(false, storageKey);

  // effects
  useEffect(() => {
    const params = new URLSearchParams();
    if (debouncedSearchQuery) {
      params.set('q', debouncedSearchQuery);
    }

    let basePath = pathname || '/';

    if (debouncedSearchQuery) {
      if (!basePath.endsWith('/search')) {
        basePath = basePath.endsWith('/') ? basePath + 'search' : basePath + '/search';
      }
    } else {
      if (basePath.endsWith('/search')) {
        basePath = basePath.slice(0, -7);
        if (!basePath) {
          basePath = '/';
        }
      }
    }

    const url = params.toString() ? `${basePath}?${params.toString()}` : basePath;
    router.replace(url);
    if (searchWasFocused) {
      inputRef.current?.focus();
    }
  }, [debouncedSearchQuery, pathname, router]);

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

  useEffect(() => {
    function onFocus(): void {
      setSearchWasFocused(true);
    }
    function onBlur(): void {
      setSearchWasFocused(false);
    }

    const ref = inputRef.current;

    if (ref) {
      ref.addEventListener('focus', onFocus);
      ref.addEventListener('blur', onBlur);
    }

    return () => {
      if (ref) {
        ref.removeEventListener('focus', onFocus);
        ref.removeEventListener('blur', onBlur);
      }
    }
  }, [inputRef]);

  // helpers
  function handleClear(): void {
    setSearchQuery('');
    inputRef.current?.focus();
  }

  return (
    <div className="relative h-10.5">
      <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        className="h-10.5 pr-20 pl-9"
        type="text"
        placeholder="Search logos..."
        ref={inputRef}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="absolute top-1/2 right-3 flex -translate-y-1/2 items-center gap-2">
        {searchQuery && (
          <button
            onClick={handleClear}
            className="text-muted-foreground transition-colors hover:text-foreground"
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
