"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import useModal from "@/hooks/useModal";
import Test from "./Test";

const TestContainer = ({ test }) => {
  const linkRef = useRef(null);
  const router = useRouter();
  const { isModalOpen, openModal, closeModal } = useModal(linkRef);

  const handleClick = (e) => {
    e.preventDefault();
    openModal();
  };

  const handleConfirm = () => {
    closeModal();
    router.push(`test/${test.id}`);
  };

  return (
    <Test
      test={test}
      linkRef={linkRef}
      isModalOpen={isModalOpen}
      onModalClose={closeModal}
      onClick={handleClick}
      onConfirm={handleConfirm}
    />
  );
};

export default TestContainer;
