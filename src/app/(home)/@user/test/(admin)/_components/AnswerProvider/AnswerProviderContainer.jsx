"use client";

import { useCallback } from "react";
import { useFormikContext } from "formik";
import { useAction } from "@/models/hooks";
import { answersActions } from "@/models/answers";
import AnswerProvider from "./AnswerProvider";

const AnswerProviderContainer = ({
  answerId,
  position,
  onEditFinish,
  children,
}) => {
  const {
    values: { answers },
    status: { questionId },
    setFieldValue: setQuestionFieldValue,
  } = useFormikContext();

  const createAnswer = useAction(answersActions.createAnswer);
  const editAnswer = useAction(answersActions.editAnswer);

  const storedAnswer = answers[position];

  const handleCreateAnswer = useCallback(
    (answer, { resetForm }) => {
      setQuestionFieldValue("answers", [...answers, answer]);
      questionId && createAnswer({ questionId, answer });
      resetForm();
    },
    [questionId, answers, createAnswer, setQuestionFieldValue]
  );

  const handleEditAnswer = useCallback(
    (editedAnswer) => {
      if (
        storedAnswer.text !== editedAnswer.text ||
        storedAnswer.is_right !== editedAnswer.is_right
      ) {
        answerId &&
          editAnswer({
            answerId,
            position,
            answer: editedAnswer,
          });
        setQuestionFieldValue(`answers[${position}]`, editedAnswer);
      }
      onEditFinish();
    },
    [
      answerId,
      position,
      storedAnswer,
      setQuestionFieldValue,
      editAnswer,
      onEditFinish,
    ]
  );

  const handleSubmit = useCallback(
    (...args) =>
      answerId ? handleEditAnswer(...args) : handleCreateAnswer(...args),
    [answerId, handleCreateAnswer, handleEditAnswer]
  );

  return (
    <AnswerProvider
      answers={answers}
      initialValues={storedAnswer}
      onSubmit={handleSubmit}
      onReset={onEditFinish}
    >
      {children}
    </AnswerProvider>
  );
};

export default AnswerProviderContainer;
