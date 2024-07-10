import { useCallback, useState } from "react";
import useScrollLock from "./useScrollLock";

const useModal = (openerRef) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  const openModal = useCallback(() => {
    lockScroll();
    setIsModalOpen(true);
  }, [lockScroll]);
  const closeModal = useCallback(() => {
    unlockScroll();
    setIsModalOpen(false);
    openerRef?.current.focus();
  }, [unlockScroll]);

  return { isModalOpen, openModal, closeModal };
};

export default useModal;
