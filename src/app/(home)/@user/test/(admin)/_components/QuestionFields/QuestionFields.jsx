import QuestionTitle from "../QuestionTitle";
import QuestionType from "../QuestionType";
import QuestionAnswer from "../QuestionAnswer";

const QuestionFields = ({ id, children }) => (
  <>
    <QuestionTitle id={id} />
    <QuestionType id={id} />
    <QuestionAnswer id={id}>{children}</QuestionAnswer>
  </>
);

export default QuestionFields;
