import Link from "../Link";
import Modal from "../Modal";

const TestLink = ({ linkRef, isModalOpen, onModalClose, onClick, onConfirm, ...props }) => (
  <>
    <Link linkref={linkRef} onClick={onClick} {...props} />
    {isModalOpen ? (
      <Modal title="Start test?" onClose={onModalClose}>
        <button type="button" onClick={onConfirm}>
          Confirm
        </button>
        <button type="button" onClick={onModalClose}>
          Cancel
        </button>
      </Modal>
    ) : null}
  </>
);

export default TestLink;
