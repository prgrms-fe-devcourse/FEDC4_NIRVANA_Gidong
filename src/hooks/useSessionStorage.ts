import { useState, useEffect } from 'react';

function useSessionStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>, () => void] {
  const storedValue = sessionStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;
  const [value, setValue] = useState<T>(initial);

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const removeValue = () => {
    sessionStorage.removeItem(key);
  };

  return [value, setValue, removeValue];
}

export default useSessionStorage;
