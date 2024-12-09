"use client";

import { useCallback } from "react";
import { useFormikContext } from "formik";
import TestForm from "./TestForm";

const TestFormContainer = ({ test }) => {
  const {
    values: { title },
    validateForm,
    submitForm,
  } = useFormikContext();

  const handlePreSubmit = useCallback(
    (isQuestionDirty) => (isQuestionDirty ? validateForm() : submitForm()),
    [submitForm, validateForm]
  );

  return (
    <TestForm
      test={test}
      isTestDirty={test.title !== title}
      onPreSubmit={handlePreSubmit}
    />
  );
};

export default TestFormContainer;
