import { MutableRefObject, useCallback, useRef } from 'react';

export const useDebounce = (callback: (...args: never[]) => void, delay: number) => {
  const timer = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  return useCallback(
    (...args: never[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
};
