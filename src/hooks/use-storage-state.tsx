import { useEffect, useState } from 'react';

function useStorageState<T=any>(initialState: T, key: string, storage: 'localStorage' | 'sessionStorage' = 'sessionStorage')  {
  // states
  const [state, setState] = useState(window[storage].getItem(key) || initialState);

  // effects
  useEffect(() => {
    window[storage].setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

export default useStorageState;
