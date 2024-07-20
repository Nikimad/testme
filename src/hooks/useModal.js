import { useContext } from "react";
import { ModalContext } from "@/components/ModalProvider/ModalProvider";

const useModal = (openerRef) => {;
  const modalProps = useContext(ModalContext);

  return modalProps;
};

export default useModal;
