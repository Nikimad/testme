"use client";

import { useCallback, useState } from "react";
import { useAppSelector } from "@/models/hooks";
import { answersSelectors } from "@/models/answers/selectors";
import Question from "./Question";

const QuestionContainer = ({ questionId, position, question, isLoading }) => {
  const answers = useAppSelector(
    answersSelectors.selectAllByQuestionId(questionId)
  );
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = useCallback(() => isEdit || setIsEdit(true), [isEdit]);
  const handleFinish = useCallback(() => isEdit && setIsEdit(false), [isEdit]);

  return (
    <Question
      questionId={questionId}
      position={position}
      isLoading={isLoading}
      isEdit={isEdit}
      question={question}
      answers={answers}
      onClick={handleEdit}
      onFinish={handleFinish}
    />
  );
};

export default QuestionContainer;
