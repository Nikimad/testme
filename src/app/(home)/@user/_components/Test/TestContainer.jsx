"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import useModal from "@/hooks/useModal";
import Test from "./Test";
import { useAppSelector } from "@/models/hooks";
import { authorizationSelectors } from "@/models/authorization/selectors";

const TestContainer = ({ test }) => {
  const isUserAdmin = useAppSelector(authorizationSelectors.selecIsUserAdmin);
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
      isUserAdmin={isUserAdmin}
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
