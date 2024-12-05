"use client";

import { useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import useModal from "@/hooks/useModal";
import Test from "./Test";
import { useAction, useAppSelector } from "@/models/hooks";
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

  const handleConfirm = useCallback(() => {
    closeModal();
    router.push(`test/${test.id}`);
  }, [test, closeModal, router])

  const handleEdit = useCallback((e) => {
    e.preventDefault();
    router.push(`/test/edit/${test.id}`);
  }, [test, router]);

  return (
    <Test
      isUserAdmin={isUserAdmin}
      test={test}
      linkRef={linkRef}
      isModalOpen={isModalOpen}
      onModalClose={closeModal}
      onClick={handleClick}
      onConfirm={handleConfirm}
      onEdit={handleEdit}
    />
  );
};

export default TestContainer;
