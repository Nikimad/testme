import Modal from "@/components/Modal";
import Buttons from "../Buttons";
import Result from "../Result";
import s from "./Controls.module.scss";

const Controls = ({
  openerRef,
  isModalOpen,
  closeModal,
  openModal,
}) => (
  <div className={s.container}>
    <Buttons mainRef={openerRef} onSubmit={openModal} />
    {isModalOpen && (
      <Modal title="Test results" onClose={closeModal}>
        <h3>Your result: <Result /></h3>
      </Modal>
    )}
  </div>
);

export default Controls;
