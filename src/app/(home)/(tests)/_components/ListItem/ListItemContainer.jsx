import { useRef } from "react";
import { useRouter } from "next/navigation";
import useModal from "@/hooks/useModal";
import ListItem from "./ListItem";

const ListItemContainer = (props) => {
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
    <ListItem
      linkRef={linkRef}
      isModalOpen={isModalOpen}
      onModalClose={closeModal}
      onClick={handleClick}
      onConfirm={handleConfirm}
      {...props}
    />
  );
};

export default ListItemContainer;
