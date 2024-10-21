"use client";

import { useState, useRef, useCallback } from "react";
import InertContext from "@/context/InertContext";

const InertProvider = ({ children }) => {
  const rootRef = useRef(null);
  const [isInert, setIsInert] = useState(false);

  const blockScroll = useCallback(() => {
    if (
      document.documentElement.scrollHeight === rootRef.current.scrollHeight
    ) {
      rootRef.current.style.setProperty(
        "bottom",
        `-${Math.abs(
          document.documentElement.clientHeight -
            rootRef.current.getBoundingClientRect().bottom
        )}px`
      );
      rootRef.current.style.setProperty("overflow-y", "scroll");
    }
    rootRef.current.style.setProperty("position", "fixed");
    rootRef.current.style.setProperty("width", "100%");
  }, [rootRef]);

  const unblockScroll = useCallback(
    () => rootRef.current.removeAttribute("style"),
    [rootRef]
  );

  const setInert = useCallback(() => {
    blockScroll();
    isInert || setIsInert(true);
  }, [isInert, blockScroll]);

  const removeInert = useCallback(() => {
    unblockScroll();
    isInert && setIsInert(false);
  }, [isInert, unblockScroll]);

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
