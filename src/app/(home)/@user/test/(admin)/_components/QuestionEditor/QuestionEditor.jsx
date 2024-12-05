import ControlButton from "../ControlButton";
import QuestionRedactorProvider from "../QuestionRedactorProvider";

const QuestionEditor = ({
  questionId,
  name,
  initialValues,
  onSubmit,
  onReset,
}) => (
  <QuestionRedactorProvider
    questionId={questionId}
    idPrefix={name}
    initialValues={initialValues}
    onSubmit={onSubmit}
    onReset={onReset}
  >
    <div className="justify_sb">
      <ControlButton type="submit" className="pill">
        Done
      </ControlButton>
      <ControlButton type="reset" className="interactivetext">
        Delete
      </ControlButton>
    </div>
  </QuestionRedactorProvider>
);

export default QuestionEditor;
