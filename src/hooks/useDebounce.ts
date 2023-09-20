import { useRef, useCallback, useEffect } from 'react';

const useDebounce = <T, U>(
  time: number,
  fn: (...args: T[]) => void,
  dependency: U[]
) => {
  const timer = useRef(null);
  const callback = useRef(fn);

  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  const run = useCallback(() => {
    if (timer && timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      callback.current();
    }, time);
  }, [time]);

  const clear = useCallback(() => {
    timer.current && clearTimeout(timer.current);
  }, []);

  useEffect(() => {
    run();
  }, [...dependency]);

  useEffect(() => clear, [clear]);

  return clear;
};

export default useDebounce;
