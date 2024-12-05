import QuestionRedactorProvider from "../QuestionRedactorProvider";

const QuestionDraft = ({
  isTestDirty,
  onSubmit,
  onReset,
  children,
}) => (
  <QuestionRedactorProvider
    isTestDirty={isTestDirty}
    idPrefix="question-draft"
    onSubmit={onSubmit}
    onReset={onReset}
  >
    {children}
  </QuestionRedactorProvider>
);

export default QuestionDraft;
