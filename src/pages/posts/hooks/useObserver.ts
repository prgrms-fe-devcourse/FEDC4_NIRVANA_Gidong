import { useCallback, useRef } from 'react';

const useObserver = (callback: () => void) => {
  const observerOption = useRef({ threshold: 1 });
  const observerFn: IntersectionObserverCallback = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && observer !== null) {
          observer.disconnect();
        }
        if (entry.isIntersecting) {
          callback();
        }
      });
    },
    [callback]
  );
  const observer = useRef(
    new IntersectionObserver(observerFn, observerOption.current)
  );

  const observe = useCallback((element: HTMLElement) => {
    if (element !== null) {
      observer.current.observe(element);
    }
  }, []);

  return [observe];
};

export default useObserver;
