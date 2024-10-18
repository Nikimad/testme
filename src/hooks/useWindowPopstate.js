import { useRef, useEffect, useCallback } from "react";

const useWindowPopState = (cb) => {
  const isHistoryPopped = useRef(false);

  const handlePop = useCallback(() => {
    isHistoryPopped.current = true;
  }, []);

  const handleCallback = useCallback(
    (cb) => {
      if (isHistoryPopped.current) {
        cb();
      }
      isHistoryPopped.current = false;
    },
    [isHistoryPopped.current]
  );

  useEffect(() => {
    window.addEventListener("popstate", handlePop);
    return () => {
      window.removeEventListener("popstate", handlePop);
    };
  }, [handlePop]);

  useEffect(() => {
    handleCallback(cb);
  }, [handleCallback, cb])
};


export default useWindowPopState;
