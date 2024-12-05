"use client";

import { useCallback } from "react";
import { useFormikContext } from "formik";
import Controls from "./Controls";

const ControlsContainer = ({ test, onPreSubmit }) => {
  const {
    values: { title, answer, answers },
  } = useFormikContext();

  const isTestCreated = test.id;
  const isQuestionDirty = title || answer || answers.length;

  const handlePreSubmit = useCallback(
    () => onPreSubmit(isQuestionDirty),
    [isQuestionDirty, onPreSubmit]
  );

  return (
    <Controls
      isTestCreated={isTestCreated}
      isQuestionDirty={isQuestionDirty}
      onPreSubmit={handlePreSubmit}
    />
  );
};

export default ControlsContainer;
