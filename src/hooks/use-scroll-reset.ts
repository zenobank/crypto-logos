import { useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useScrollReset(deps: any[] = []) {
  // refs
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // effects
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { scrollContainerRef };
}

export default useScrollReset;
