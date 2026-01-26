import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useStorageState<T=any>(initialState: T, key: string, storage: 'localStorage' | 'sessionStorage' = 'sessionStorage'): [T, (value: T) => void]  {
  // states
  const [state, setState] = useState(window[storage].getItem(key) as T || initialState);

  // effects
  useEffect(() => {
    window[storage].setItem(key, JSON.stringify(state));

    return () => window[storage].removeItem(key);
  }, [state, key, storage]);

  return [state, setState];
}

export default useStorageState;
