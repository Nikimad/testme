import { useFormikContext, getIn } from "formik";
import { useAppSelector } from "@/models/hooks";
import Question from "./Question";
import { answersSelectors } from "@/models/answers/selectors";

const QuestionContainer = ({ question }) => {
  const { errors } = useFormikContext();
  const isInvalid = !!getIn(errors, question.id);
  const answers = useAppSelector(answersSelectors.selectAllByQuestionId(question.id));

  return (
    <Question
      question={question}
      answers={answers}
      isInvalid={isInvalid}
    />
  );
};

export default QuestionContainer;
