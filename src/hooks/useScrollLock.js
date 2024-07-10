import { useRef, useCallback } from "react";

const useScrollLock = () => {
  const scrollOffset = useRef(0);

  const lockScroll = useCallback(() => {
    const scrollBarOffset = window.innerWidth - document.body.offsetWidth;
    scrollOffset.current = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollOffset.current}px`;
    document.body.style.width = "100%";
    document.body.style.paddingRight = `${scrollBarOffset}px`;
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.paddingRight = "";
    window.scrollTo(0, scrollOffset.current);
  }, []);
;

  return {
    lockScroll,
    unlockScroll,
  };
};

export default useScrollLock;
