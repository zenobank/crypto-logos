import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useStorageState<T=any>(initialState: T, key: string, storage: 'localStorage' | 'sessionStorage' = 'sessionStorage'): [T, (value: T) => void]  {
  // states
  const [state, setState] = useState<T>(initialState);

  // effects
  useEffect(() => {
    const stored = window[storage].getItem(key);
    if (stored) setState(stored as T);
  }, [key, storage]);

  useEffect(() => {
    window[storage].setItem(key, JSON.stringify(state));

    return () => window[storage].removeItem(key);
  }, [state, key, storage]);

  return [state, setState];
}

export default useStorageState;
