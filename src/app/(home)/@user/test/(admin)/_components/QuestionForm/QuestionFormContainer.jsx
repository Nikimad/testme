"use client";

import { useCallback } from "react";
import { useFormikContext } from "formik";
import QuestionForm from "./QuestionForm";

const QuestionFormContainer = ({
  isTestDirty,
  questionId,
  position,
  children,
}) => {
  const {
    values: { title, answer, answers },
    handleSubmit: handleFomikSubmit,
    validateForm,
    setErrors,
  } = useFormikContext();

  const isQuestionDirty = title || answer || answers.length !== 0;

  const handleSubmit = useCallback(
    (e) => {
      if (!isQuestionDirty && !questionId) {
        e.preventDefault();
        e.stopPropagation();
        return isTestDirty ? setErrors({}) : validateForm();
      }
      handleFomikSubmit(e);
    },
    [questionId, isTestDirty, isQuestionDirty, handleFomikSubmit]
  );

  return (
    <QuestionForm
      id={`question${position !== undefined ? `s[${position}]` : ""}${
        questionId ? `-${questionId}` : ""
      }`}
      onSubmit={handleSubmit}
    >
      {children}
    </QuestionForm>
  );
};

export default QuestionFormContainer;
