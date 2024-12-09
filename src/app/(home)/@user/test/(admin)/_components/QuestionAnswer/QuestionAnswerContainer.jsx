import { useField } from "formik";
import QuestionAnswer from "./QuestionAnswer";

const QuestionAnswerContainer = ({ id, children }) => {
  const [{ value }] = useField("question_type");
  return value === "number" ? <QuestionAnswer id={id} /> : children;
};

export default QuestionAnswerContainer;
