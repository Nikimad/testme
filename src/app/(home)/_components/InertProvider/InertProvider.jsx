"use client";

import { useState, useRef, useCallback } from "react";
import InertContext from "@/context/InertContext";
import ContentRoot from "../ContentRoot";

const InertProvider = ({ children }) => {
  const rootRef = useRef(null);
  const [isInert, setIsInert] = useState(false);

  const blockScroll = useCallback(() => {
    const isScrollVissible = window.innerHeight < document.documentElement.scrollHeight;
    if (isScrollVissible) {
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

  const unblockScroll = useCallback(() => {
    const restoredScrollPosition = Math.abs(
      rootRef.current.getBoundingClientRect().top
    );

    rootRef.current.removeAttribute("style");

    window.scrollTo(0, restoredScrollPosition);
  }, [rootRef]);

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
      <ContentRoot rootRef={rootRef} isInert={isInert}>
        {children}
      </ContentRoot>
      <div id="modal-root"></div>
    </InertContext.Provider>
  );
};

export default InertProvider;
