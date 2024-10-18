import { useFormikContext, getIn } from "formik";
import Question from "./Question";

const QuestionContainer = ({ question }) => {
  const { errors } = useFormikContext();
  const isInvalid = !!getIn(errors, question.id);

  const type =
    question.question_type === "number"
      ? "number"
      : question.question_type === "single"
      ? "radio"
      : "checkbox";

  return (
    <Question
      question={question}
      type={type}
      isInvalid={isInvalid}
    />
  );
};

export default QuestionContainer;
