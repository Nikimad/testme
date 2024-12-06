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
      <button type="submit" className="pill">
        Done
      </button>
      <button type="reset" className="interactivetext">
        Delete
      </button>
    </div>
  </QuestionRedactorProvider>
);

export default QuestionEditor;
