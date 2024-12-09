import QuestionFields from "./QuestionFields";

const QuestionFieldsContainer = ({ id, children }) => (
  <QuestionFields id={id}>
    {children}
  </QuestionFields>
);

export default QuestionFieldsContainer;
