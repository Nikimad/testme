"use client";

import { createContext, useEffect, useRef, useState } from "react";

export const ModalContext = createContext({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

const ModalProviderContainer = ({ children }) => {
  const scrollTopRef = useRef(0);
  const wrapperRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    scrollTopRef.current = window.scrollY;

    if (document.body.scrollHeight > document.body.clientHeight) {
      wrapperRef.current.style.setProperty("overflow-y", "scroll");
    }
    wrapperRef.current.style.setProperty("position", "fixed");
    wrapperRef.current.style.setProperty("width", "100%");
    wrapperRef.current.style.setProperty("top", `-${scrollTopRef.current}px`);

    setIsModalOpen(true);
  };
  const closeModal = () => {
    wrapperRef.current.style.removeProperty("position");
    wrapperRef.current.style.removeProperty("width");
    wrapperRef.current.style.removeProperty("top");
    wrapperRef.current.style.removeProperty("overflow");

    setIsModalOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, scrollTopRef.current);
  }, [isModalOpen]);

  const wrapperProps = isModalOpen
    ? {
        inert: "true",
      }
    : {};

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      <div ref={wrapperRef} {...wrapperProps}>
        {children}
      </div>
    </ModalContext.Provider>
  );
};

export default ModalProviderContainer;
