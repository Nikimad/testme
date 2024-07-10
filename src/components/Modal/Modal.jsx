import s from "./Modal.module.scss";

const Modal = ({ overlay, modal, onClose, onDismiss, title, children }) => (
  <div className={s.modal__overlay} ref={overlay} onClick={onDismiss}>
    <div
      aria-modal="true"
      role="dialog"
      tabIndex="-1"
      ref={modal}
      className={s.modal__content}
    >
      <header className={s.modal__header}>
        <button className={s.modal__button} onClick={onClose}>
          <span className="visually-hidden">Close modal</span>
          <span className={s.modal__button__mark} aria-hidden={true}>+</span>
        </button>
        <h2>{title}</h2>
      </header>
      <main>{children}</main>
    </div>
  </div>
);

export default Modal;
