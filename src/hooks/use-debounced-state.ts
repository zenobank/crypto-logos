import { useEffect, useState } from 'react';

function useDebouncedState<T>(initialValue: T, delay: number) {
  // states
  const [state, setState] = useState(initialValue);
  const [debouncedState, setDebouncedState] = useState(initialValue);

  // effects
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedState(state), delay);
    return () => clearTimeout(timeout);
  }, [state, delay]);

  return { state, setState, debouncedState };
}

export default useDebouncedState;
