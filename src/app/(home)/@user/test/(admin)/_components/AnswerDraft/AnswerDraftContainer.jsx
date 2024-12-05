"use client";

import { useFormikContext } from "formik";
import { useCallback } from "react";
import { useAction } from "@/models/hooks";
import { answersActions } from "@/models/answers";
import AnswerDraft from "./AnswerDraft";

const AnswerDraftContainer = ({ idPrefix }) => {
  const {
    values: { answers },
    status: { questionId },
    setFieldValue,
  } = useFormikContext();

  const createAnswer = useAction(answersActions.createAnswer);

  const handleCreateAnswer = useCallback(
    (answer, { resetForm }) => {
      setFieldValue("answers", [...answers, answer]);
      questionId && createAnswer({ questionId, answer });
      resetForm();
    },
    [questionId, answers, createAnswer, setFieldValue]
  );

  return <AnswerDraft idPrefix={idPrefix} onSubmit={handleCreateAnswer} />;
};

export default AnswerDraftContainer;
