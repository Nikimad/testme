import Link from "../Link";
import Modal from "../Modal";
import Button from "../Button";
import s from "./TestLink.module.scss";

const TestLink = ({
  linkRef,
  isModalOpen,
  onModalClose,
  onClick,
  onConfirm,
  test,
  ...props
}) => (
  <>
    <Link linkref={linkRef} onClick={onClick} {...props} />
    {isModalOpen ? (
      <Modal title="Do you want to start test?" onClose={onModalClose}>
        <p className={s.modal__content}>
          {test.title}: {test.questions.length} questions
        </p>
        <div className={s.modal__controls}>
          <Button styleType="pill" onClick={onConfirm}>
            Start test
          </Button>
          <Button styleType="link" onClick={onModalClose}>
            Cancel
          </Button>
        </div>
      </Modal>
    ) : null}
  </>
);

export default TestLink;
