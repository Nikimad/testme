import { useCallback, useContext, useEffect, useRef, useState } from "react";
import InertContext from "@/context/InertContext";

const useModal = (openerRef) => {;
  const { setInert, removeInert } = useContext(InertContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isModalWasClosed = useRef(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
    setInert();
    isModalWasClosed.current = false;
  }, [setInert, isModalWasClosed]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    removeInert();
    isModalWasClosed.current = true;
  }, [removeInert, isModalWasClosed]);

  useEffect(() => {
    isModalWasClosed.current && openerRef.current?.focus();
  }, [isModalWasClosed.current, openerRef])

  useEffect(() => {
    return () => {
      isModalOpen && removeInert();
    }
  }, [isModalOpen, removeInert])

  return { isModalOpen, openModal, closeModal };
};

export default useModal;
