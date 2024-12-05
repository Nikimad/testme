"use client";

import { useCallback } from "react";
import { useFormikContext } from "formik";
import QuestionRedactor from "./QuestionRedactor";

const QuestionRedactorContainer = ({ isTestDirty, idPrefix, children }) => {
  const {
    status,
    values: { title, question_type, answer, answers },
    handleSubmit: handleFomikSubmit,
    validateForm,
    setErrors,
  } = useFormikContext();
  const isQuestionDirty = title || answer || answers.length !== 0;

  const handleSubmit = useCallback(
    (e) => {
      if (!isQuestionDirty && !status.questionId) {
        e.preventDefault();
        e.stopPropagation();
        return isTestDirty ? setErrors({}) : validateForm();
      }
      handleFomikSubmit(e);
    },
    [status, isTestDirty, isQuestionDirty, handleFomikSubmit]
  );

  return (
    <QuestionRedactor
      idPrefix={idPrefix}
      onSubmit={handleSubmit}
      type={question_type}
    >
      {children}
    </QuestionRedactor>
  );
};

export default QuestionRedactorContainer;
