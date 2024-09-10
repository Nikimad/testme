import Modal from "@/components/Modal";
import s from "./TestsModal.module.scss";

const TestModal = ({ test, onClose, onConfirm }) => (
  <Modal title="Do you want to start test?" onClose={onClose}>
    <p className={s.modal__content}>
      {test.title}: {test.questions.length} questions
    </p>
    <div className={s.modal__controls}>
      <button className="pill" onClick={onConfirm}>
        Start test
      </button>
      <button className="interactivetext" onClick={onClose}>
        Cancel
      </button>
    </div>
  </Modal>
);

export default TestModal;
