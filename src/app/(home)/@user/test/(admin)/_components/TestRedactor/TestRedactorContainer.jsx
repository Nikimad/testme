"use client";

import { useCallback } from "react";
import { useFormikContext } from "formik";
import TestRedactor from "./TestRedactor";

const TestRedactorContainer = ({ test, children }) => {
  const { validateForm, submitForm } = useFormikContext();

  const handlePreSubmit = useCallback(
    (isQuestionDirty) => (isQuestionDirty ? validateForm() : submitForm()),
    [submitForm, validateForm]
  );

  return (
    <TestRedactor test={test} onPreSubmit={handlePreSubmit}>
      {children}
    </TestRedactor>
  );
};

export default TestRedactorContainer;
