import { RefObject, useEffect, useRef } from 'react';
import useResetStorage from '@/hooks/use-reset-storage';

function useScrollPersistence(
  scrollContainerRef: RefObject<HTMLElement | null>,
  storageKey: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filterDeps: any[] = [],
) {
  // common
  useResetStorage(storageKey);

  // refs
  const isInitialMount = useRef(true);
  const prevDeps = useRef(filterDeps);

  // effects
  // Restore or reset on mount/filter change
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) {
      return;
    }

    if (isInitialMount.current) {
      isInitialMount.current = false;

      // Navigation (back/forward) → restore saved position
      const saved = +(sessionStorage.getItem(storageKey) || 0);
      if (saved) {
        el.scrollTo({ top: saved, behavior: 'smooth' });
      }
      return;
    }

    // Check if filters changed
    const filtersChanged = !prevDeps.current.every(
      (dep, i) => dep === filterDeps[i],
    );
    prevDeps.current = filterDeps;

    if (filtersChanged) {
      // Filters changed → reset to top and clear saved position
      el.scrollTo({ top: 0 });
      sessionStorage.removeItem(storageKey);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, filterDeps);

  // Save position on scroll
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) {
      return;
    }

    const save = () => sessionStorage.setItem(storageKey, el.scrollTop.toString());
    el.addEventListener('scroll', save);
    return () => el.removeEventListener('scroll', save);
  }, [scrollContainerRef, storageKey]);
}

export default useScrollPersistence;
