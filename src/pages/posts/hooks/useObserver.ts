import { useRef, useCallback, useState } from 'react';

const useObserver = (callback: () => void) => {
  const observer = useRef(
    new IntersectionObserver(
      (entries, _) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            callback();
          }
        });
      },
      {
        threshold: 0.5
      }
    )
  );

  const observe = useCallback((element: HTMLElement) => {
    observer.current.observe(element);
  }, []);

  const unobserve = useCallback((element: HTMLElement) => {
    observer.current.unobserve(element);
  }, []);

  return [observe, unobserve];
};

export default useObserver;
