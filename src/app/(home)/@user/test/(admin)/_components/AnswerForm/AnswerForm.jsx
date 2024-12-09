import AnswerProvider from "../AnswerProvider";
import AnswerFields from "../AnswerFields";

const AnswerForm = ({ id, answerId, position, onEditFinish, children }) => (
  <AnswerProvider
    answerId={answerId}
    position={position}
    onEditFinish={onEditFinish}
  >
    <AnswerFields id={id}>{children}</AnswerFields>
  </AnswerProvider>
);

export default AnswerForm;
