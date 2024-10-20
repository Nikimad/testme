import { useCallback, useContext, useEffect, useState } from "react";
import InertContext from "@/context/InertContext";

const useModal = (openerRef) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalClosed, setIsModalClosed] = useState(false);

  const { setInert, removeInert } = useContext(InertContext);

  const openModal = useCallback(() => {
    isModalOpen || setIsModalOpen(true);
    isModalClosed && setIsModalClosed(false);
    setInert();
  }, [isModalOpen, isModalClosed, setInert]);

  const closeModal = useCallback(() => {
    isModalOpen && setIsModalOpen(false);
    isModalClosed || setIsModalClosed(true);
    removeInert();
  }, [isModalOpen, isModalClosed, removeInert]);

  useEffect(() => {
    isModalClosed && openerRef.current?.focus();
  }, [isModalClosed, openerRef]);

  useEffect(() => {
    return () => {
      isModalOpen && removeInert();
    };
  }, [isModalOpen, removeInert]);

  return { isModalOpen, openModal, closeModal };
};

export default useModal;
