import { createPortal } from "react-dom";
import { useRef, useCallback, useEffect } from "react";
import Modal from "./Modal";
import { usePathname } from "next/navigation";

const ModalContainer = ({ title, onClose, children }) => {
  const pathname = usePathname();

  const overlay = useRef(null);
  const modal = useRef(null);

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

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  useEffect(() => {
    return () => {
      onClose();
    };
  }, [pathname, onClose]);

  useEffect(() => {
    modal.current?.focus();
  }, []);

  return createPortal(
    <Modal
      overlay={overlay}
      modal={modal}
      onClose={onClose}
      onDismiss={onClick}
      title={title}
      children={children}
    />,
    document.getElementById("modal-root")
  );
};

export default ModalContainer;
