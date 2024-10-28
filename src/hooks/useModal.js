import { useCallback, useContext, useEffect, useState, useRef } from "react";
import InertContext from "@/context/InertContext";

const useModal = (openerRef) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isModalClosed = useRef(false);

  const { setInert, removeInert } = useContext(InertContext);

  const openModal = useCallback(() => {
    isModalOpen || setIsModalOpen(true);
    isModalClosed.current = false;
    setInert();
  }, [isModalOpen, setInert]);

  const closeModal = useCallback(() => {
    isModalOpen && setIsModalOpen(false);
    isModalClosed.current = true;
    removeInert();
  }, [isModalOpen, removeInert]);

  useEffect(() => {
    isModalClosed.current && openerRef.current?.focus();

    return () => {
      isModalOpen && !isModalClosed.current && closeModal();
    }
  }, [openerRef, isModalOpen, closeModal]);

  return { isModalOpen, openModal, closeModal };
};

export default useModal;
