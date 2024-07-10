import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

const useFocusTrap = (ref) => {
  const FOCUSABLE_SELECTORS = [
    "[contenteditable]",
    '[tabindex="0"]:not([disabled])',
    "a[href]",
    "audio[controls]",
    "button:not([disabled])",
    "iframe",
    "input:not([disabled]):not([type='hidden'])",
    "select:not([disabled])",
    "summary",
    "textarea:not([disabled])",
    "video[controls]",
  ].join(",");

  const focusableElements = useRef({});

  const handleFocusIn = useCallback(
    (e) => {
      if (e.key !== "Tab") return;
      
      const activeElement = document.activeElement;

      const firstItem = focusableElements.current[0];
      const lastItem =
        focusableElements.current[focusableElements.current.length - 1];

      if (!e.shiftKey && activeElement === lastItem) {
        firstItem.focus();
        e.preventDefault();
      }

      if (
        (e.shiftKey && activeElement === firstItem) ||
        (e.shiftKey && activeElement === ref.current)
      ) {
        lastItem.focus();
        e.preventDefault();
      }
    },
    [focusableElements]
  );

  useEffect(() => {
    ref.current.focus();
  }, [ref]);

  useEffect(() => {
    focusableElements.current = ref.current.querySelectorAll(FOCUSABLE_SELECTORS);
  }, [ref, FOCUSABLE_SELECTORS]);

  useLayoutEffect(() => {
    ref.current.addEventListener("keydown", handleFocusIn);
    return () => {
      ref.current.removeEventListener("keydown", handleFocusIn);
    };
  }, [ref, handleFocusIn]);
};

export default useFocusTrap;
