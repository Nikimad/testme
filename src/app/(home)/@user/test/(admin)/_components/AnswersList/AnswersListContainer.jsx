"use client";

import { useFormikContext, getIn } from "formik";
import { useAppSelector } from "@/models/hooks";
import { answersSelectors } from "@/models/answers/selectors";
import AnswersList from "./AnswersList";

const AnswersListContainer = ({ id }) => {
  const {
    values: question,
    status: { questionId },
    errors,
  } = useFormikContext();

  const answers = useAppSelector(answersSelectors.selectAllByQuestionId(questionId));

  return (
    <AnswersList
      id={id}
      answersStore={question.answers}
      answers={answers}
      isInvalid={Boolean(getIn(errors, "answers"))}
    />
  );
};

export default AnswersListContainer;
