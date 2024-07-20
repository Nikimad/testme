import Button from "@/components/Button";
import Modal from "@/components/Modal";
import s from "./Controls.module.scss";

const Controls = ({
  status,
  rightAnswersCount,
  wrongAnswersCount,
  isModalOpen,
  closeModal,
  onRetry,
  onFinish,
  onEnd,
}) => (
  <div className={s.container}>
    {status === "finish" ? (
      <>
        {wrongAnswersCount !== 0 ? (
          <Button type="reset" styleType="pill" onClick={onRetry}>
            Try again
          </Button>
        ) : null}
        <Button
          type="button"
          styleType={wrongAnswersCount !== 0 ? "link" : "pill"}
          onClick={onEnd}
        >
          End test
        </Button>
      </>
    ) : (
      <Button type="submit" styleType="pill" onClick={onFinish}>
        Finish test
      </Button>
    )}
    {isModalOpen ? (
      <Modal title="Test results" onClose={closeModal}>
        <p>Right answers: {rightAnswersCount}</p>
        {wrongAnswersCount !== 0 ? <p>Errors: {wrongAnswersCount}</p> : null}
        <div className={s.container}>
          {wrongAnswersCount !== 0 ? (
            <Button type="button" styleType="pill" onClick={closeModal}>
              See errors
            </Button>
          ) : null}
          <Button
            type="button"
            styleType={wrongAnswersCount !== 0 ? "link" : "pill"}
            onClick={onEnd}
          >
            End test
          </Button>
        </div>
      </Modal>
    ) : null}
  </div>
);

export default Controls;
