import { useFormikContext, getIn } from "formik";
import Question from "./Question";

const QuestionContainer = ({ question }) => {
  const { errors, status } = useFormikContext();
  const isInvalid = getIn(errors, question.id);
  const isDisabled = status === "finish";

  return (
    <Question
      question={question}
      isInvalid={isInvalid}
      isDisabled={isDisabled}
    />
  );
};

export default QuestionContainer;
