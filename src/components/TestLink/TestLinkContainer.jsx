import useModal from "@/hooks/useModal";
import TestLink from "./TestLink";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const TestLinkContainer = (props) => {
  const router = useRouter();

  const linkRef = useRef(null);

  const { isModalOpen, openModal, closeModal } = useModal(linkRef);

  const handleClick = (e) => {
    e.preventDefault();
    openModal();
  };

  const handleConfirm = () => {
    closeModal();
    router.push(props.href);
  };

  return (
    <TestLink
      linkRef={linkRef}
      isModalOpen={isModalOpen}
      onModalClose={closeModal}
      onClick={handleClick}
      onConfirm={handleConfirm}
      {...props}
    />
  );
};

export default TestLinkContainer;
