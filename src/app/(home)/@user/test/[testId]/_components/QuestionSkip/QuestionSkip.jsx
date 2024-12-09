"use client";

import { useEffect } from "react";
import { useFormikContext } from "formik";

const QuestionSkip = ({ name }) => {
  const {
    submitCount,
    setFieldValue,
  } = useFormikContext();

  useEffect(() => { setFieldValue(name, null) }, [setFieldValue, name, submitCount]);

  return (
    <p>
      Sorry, the question has no answer yet, skipping this question will not
      affect the final results
    </p>
  );
};

export default QuestionSkip;
