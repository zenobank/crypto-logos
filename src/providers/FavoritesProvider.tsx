'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from 'react';

// models
import LogoItemsResponse from '@/shared/models/logos/logo-items-response';

// personal interface
type FavoritesContextValue = {
  favoriteItems: LogoItemsResponse[];
  hydrated: boolean;
  isLoading: boolean;
  toggleFavorite: (logo: LogoItemsResponse) => void;
  isFavorite: (logo: LogoItemsResponse) => boolean;
  clearAll: () => void;
};

// personal constants
const STORAGE_KEY = 'crypto-logos-favorites';
const CHANGE_EVENT = 'crypto-logos-favorites:change';

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

function getClientSnapshot() {
  if (typeof window === 'undefined') return null as string | null;
  return window.localStorage.getItem(STORAGE_KEY);
}

function getServerSnapshot() {
  return null as string | null;
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === 'undefined') return () => {};

  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) onStoreChange();
  };

  const onCustom = () => onStoreChange();

  window.addEventListener('storage', onStorage);
  window.addEventListener(CHANGE_EVENT, onCustom);

  return () => {
    window.removeEventListener('storage', onStorage);
    window.removeEventListener(CHANGE_EVENT, onCustom);
  };
}

function parseFavoriteItems(raw: string | null) {
  if (!raw) return [] as LogoItemsResponse[];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    const out: LogoItemsResponse[] = [];
    const seen = new Set<string>();

    for (const value of parsed) {
      if (!value || typeof value !== 'object') continue;

      const id = (value as LogoItemsResponse).id;
      if (!id) continue;

      if (seen.has(id)) continue;
      seen.add(id);

      out.push(value as LogoItemsResponse);
    }

    return out;
  } catch {
    return [];
  }
}

function writeFavoriteItems(items: LogoItemsResponse[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const raw = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );
  const hydrated = useHydrated();
  const isLoading = !hydrated;

  const favoriteItems = useMemo(() => parseFavoriteItems(raw), [raw]);

  const toggleFavorite = useCallback((logo: LogoItemsResponse) => {
    const id = logo.id as string | undefined;
    if (!id) return;

    const current = parseFavoriteItems(getClientSnapshot());
    const index = current.findIndex((x) => x.id === id);

    if (index >= 0) {
      current.splice(index, 1);
      writeFavoriteItems(current);
      return;
    }

    writeFavoriteItems([...current, logo]);
  }, []);

  const clearAll = useCallback(() => {
    writeFavoriteItems([]);
  }, []);

  const isFavorite = useCallback(
    (logo: LogoItemsResponse) => {
      const id = logo.id as string | undefined;
      if (!id) return false;
      return favoriteItems.some((x) => x.id === id);
    },
    [favoriteItems],
  );

  const value = useMemo(
    () => ({
      favoriteItems,
      hydrated,
      isLoading,
      toggleFavorite,
      isFavorite,
      clearAll,
    }),
    [favoriteItems, hydrated, isLoading, toggleFavorite, isFavorite, clearAll],
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx)
    throw new Error('useFavorites must be used within FavoritesProvider');
  return ctx;
}
