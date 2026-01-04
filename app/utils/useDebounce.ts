import { useRef, useEffect } from "react";

function useDebounce(targetFn: (...args: any[]) => void, debounceTime: number) {
  let timerId = useRef(null);

  function debouncedFunction(...args) {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    timerId.current = setTimeout(() => {
      targetFn(...args);
    }, debounceTime);
  }

  useEffect(() => {
    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    };
  }, []);
  return debouncedFunction;
}

export default useDebounce;
