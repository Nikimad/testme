import { createPortal } from "react-dom";
import { useRef, useCallback, useEffect } from "react";
import Modal from "./Modal";

const ModalContainer = ({ title, onClose, children }) => {
  const overlay = useRef(null);

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current) onClose();
    },
    [onClose, overlay]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") return onClose();
    },
    [onClose]
  );

  const modalOnRender = useCallback((el) => {
    el?.focus()
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown, onClose]);

  return createPortal(
    <Modal
      overlay={overlay}
      modal={modalOnRender}
      onClose={onClose}
      onDismiss={onClick}
      title={title}
    >
      {children}
    </Modal>,
    document.getElementById("modal-root")
  );
};

export default ModalContainer;
