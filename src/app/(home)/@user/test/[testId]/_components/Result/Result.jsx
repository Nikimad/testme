"use client";

import { useFormikContext } from "formik";

const Result = () => {
  const { values, errors } = useFormikContext();
  const questionsCount = Object.values(values).length;
  const resultCount = questionsCount - Object.values(errors).length;
  return <>{(resultCount / questionsCount) * 100}%</>;
};

export default Result;
