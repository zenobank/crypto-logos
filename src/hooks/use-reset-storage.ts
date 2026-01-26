import { useEffect } from 'react';

function useResetStorage(storageKey: string, storage: 'localStorage' | 'sessionStorage' = 'sessionStorage') {
  useEffect(() => {
    function listener(): void {
      window[storage].removeItem(storageKey);
    }

    window.addEventListener('beforeunload', listener);
    return () => window.removeEventListener('beforeunload', listener);
  }, [storageKey, storage]);
}

export default useResetStorage;
