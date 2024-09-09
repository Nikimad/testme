import { useState, useRef, useCallback } from "react";
import InertContext from "@/context/InertContext";

const InertProvider = ({ children }) => {
  const rootRef = useRef(null);
  const scrollTopRef = useRef(0);
  const [isInert, setIsInert] = useState(false);

  const restoreScrollPosition = useCallback(() => {
    window.scrollTo(0, scrollTopRef.current);
  }, [scrollTopRef]);

  const blockScroll = useCallback(() => {
    scrollTopRef.current = window.scrollY;
    if (document.body.scrollHeight > document.body.clientHeight) {
      rootRef.current.style.setProperty("overflow-y", "scroll");
    }
    rootRef.current.style.setProperty("position", "fixed");
    rootRef.current.style.setProperty("width", "100%");
    rootRef.current.style.setProperty("top", `-${scrollTopRef.current}px`);
    restoreScrollPosition();
  }, [scrollTopRef, rootRef, restoreScrollPosition]);

  const unblockScrtoll = useCallback(() => {
    rootRef.current.style.removeProperty("position");
    rootRef.current.style.removeProperty("width");
    rootRef.current.style.removeProperty("top");
    rootRef.current.style.removeProperty("overflow");
    restoreScrollPosition();
  }, [scrollTopRef, rootRef, restoreScrollPosition]);

  const setInert = useCallback(() => {
    if (!isInert) {
      setIsInert(true);
      blockScroll();
    }
  }, [isInert, blockScroll]);

  const removeInert = useCallback(() => {
    if (isInert) {
      setIsInert(false);
      unblockScrtoll();
    }
  }, [isInert, unblockScrtoll]);

  return (
    <InertContext.Provider value={{ setInert, removeInert }}>
      <div id="content-root" ref={rootRef} {...(isInert && { inert: "true" })}>
        {children}
      </div>
      <div id="modal-root"></div>
    </InertContext.Provider>
  );
};

export default InertProvider;
