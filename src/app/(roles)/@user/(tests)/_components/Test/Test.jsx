import cn from "classnames";
import Link from "next/link";
import TestModal from "../TestModal";
import s from "./Test.module.scss";

const Test = ({
  test,
  linkRef,
  isModalOpen,
  onModalClose,
  onClick,
  onConfirm,
}) => (
  <li className={s.test}>
    <Link
      ref={linkRef}
      href={`test/${test.id}`}
      className={cn("interactivetext", s.test__link)}
      onClick={onClick}
    >
      {test.title}
    </Link>
    <span>{new Date(test.created_at).toDateString()}</span>
    {isModalOpen ? <TestModal test={test} onClose={onModalClose} onConfirm={onConfirm} /> : null}
  </li>
);

export default Test;
