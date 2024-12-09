"use client";

import { useCallback } from "react";
import { useFormikContext } from "formik";
import TestQuestionSubmit from "./TestQuestionSubmit";

const TestQuestionSubmitContainer = ({ isTestCreated, onPreSubmit }) => {
  const {
    values: { title, answer, answers },
  } = useFormikContext();

  const isQuestionDirty = title || answer || answers.length;

  const handleClick = useCallback(
    () => onPreSubmit(isQuestionDirty),
    [isQuestionDirty, onPreSubmit]
  );

  return (
    <TestQuestionSubmit
      isTestCreated={isTestCreated}
      isQuestionDirty={isQuestionDirty}
      onClick={handleClick}
    />
  );
};

export default TestQuestionSubmitContainer;
