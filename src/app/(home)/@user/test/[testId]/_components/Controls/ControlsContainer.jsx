import { useRef } from "react";
import useModal from "@/hooks/useModal";
import Controls from "./Controls";

const ControlsContainer = () => {
  const openerRef = useRef(null);
  const { isModalOpen, openModal, closeModal } = useModal(openerRef);
  return (
    <Controls
      openerRef={openerRef}
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      openModal={openModal}
    />
  );
};

export default ControlsContainer;
