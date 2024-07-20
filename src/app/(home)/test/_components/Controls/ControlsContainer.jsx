import { useRouter } from "next/navigation";
import { useFormikContext } from "formik";
import useModal from "@/hooks/useModal";
import Controls from "./Controls";

const ControlsContainer = ({ defaulInitialState }) => {
  const router = useRouter();
  const {
    values,
    status,
    errors,
    setValues,
    setStatus,
    setErrors,
    setTouched,
    validateForm,
  } = useFormikContext();
  const { isModalOpen, openModal, closeModal } = useModal();

  const wrongAnswersCount = Object.keys(errors).length;
  const rightAnswersCount = Object.keys(values).length - wrongAnswersCount;

  const handleRetry = () => {
    setValues(defaulInitialState.answers);
    setStatus(defaulInitialState.status);
    setTouched(defaulInitialState.touched);
    setErrors(defaulInitialState.errors);
  };
  const handleFinish = () => {
    setStatus("finish");
    validateForm();

    openModal();
  };
  const handleEnd = () => {
    closeModal();
    router.push("/");
  };

  return (
    <Controls
      rightAnswersCount={rightAnswersCount}
      wrongAnswersCount={wrongAnswersCount}
      status={status}
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      onRetry={handleRetry}
      onFinish={handleFinish}
      onEnd={handleEnd}
    />
  );
};

export default ControlsContainer;
