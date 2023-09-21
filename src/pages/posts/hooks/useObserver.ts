import { useRef, useCallback } from 'react';

const useObserver = (callback: () => void) => {
  const observer = useRef(
    new IntersectionObserver(
      (entries, _) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (observer !== null) {
              observer.current.disconnect();
            }
            callback();
          }
        });
      },
      {
        threshold: 1
      }
    )
  );

  const observe = useCallback((element: HTMLElement) => {
    if (element !== null) {
      observer.current.observe(element);
    }
  }, []);
  return [observe];
};

export default useObserver;
