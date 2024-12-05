"use client";

import { useCallback, useState } from "react";
import { useFormikContext, getIn } from "formik";
import { useAppSelector } from "@/models/hooks";
import { answersSelectors } from "@/models/answers/selectors";
import AnswersList from "./AnswersList";
import insert from "@/lib/insert";

const AnswersListContainer = () => {
  const {
    values: question,
    status: { questionId },
    errors,
  } = useFormikContext();

  const answers = useAppSelector(answersSelectors.selectAllByQuestionId(questionId));

  return (
    <AnswersList
      answersStore={question.answers}
      answers={answers}
      isInvalid={Boolean(getIn(errors, "answers"))}
    />
  );
};

export default AnswersListContainer;
