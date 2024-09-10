import cn from "classnames";
import s from "./Modal.module.scss";

const Modal = ({ overlay, modal, onClose, onDismiss, title, children }) => (
  <div className={s.modal__overlay} ref={overlay} onClick={onDismiss}>
    <div
      element="div"
      aria-modal="true"
      role="dialog"
      tabIndex="-1"
      ref={modal}
      className={cn("container", s.modal__content)}
    >
      <div className={s.modal__header}>
        <button className={s.modal__button} onClick={onClose}>
          <span className="visually-hidden">Close modal</span>
          <span className={s.modal__button__mark} aria-hidden={true}>&#x2715;</span>
        </button>
        <h2 className={s.modal__title}>{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  </div>
);

export default Modal;
