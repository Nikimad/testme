import Link from "@/components/Link";
import Modal from "@/components/Modal";
import s from "./ListItem.module.scss";

const ListItem = ({
  linkRef,
  isModalOpen,
  onModalClose,
  onClick,
  onConfirm,
  test,
  ...props
}) => (
  <li key={test.id} className={s.listitem}>
    <Link
      test={test}
      href={`test/${test.id}`}
      className={s.listitem__link}
      {...props}
    >
      {test.title}
    </Link>
    <span>{new Date(test.created_at).toDateString()}</span>
    {isModalOpen ? (
      <Modal title="Do you want to start test?" onClose={onModalClose}>
        <p className={s.listitem__modal__content}>
          {test.title}: {test.questions.length} questions
        </p>
        <div className={s.listitem__modal__controls}>
          <Button styleType="pill" onClick={onConfirm}>
            Start test
          </Button>
          <Button styleType="link" onClick={onModalClose}>
            Cancel
          </Button>
        </div>
      </Modal>
    ) : null}
  </li>
);

export default ListItem;
