"use client";

import { getAnswersValidationSchcema } from "@/lib/validation";
import { Formik } from "formik";

const AnswerProvider = ({
  answers,
  initialValues,
  onSubmit,
  onReset,
  children,
}) => (
  <Formik
    initialValues={
      initialValues || {
        text: "",
        is_right: false,
      }
    }
    validationSchema={getAnswersValidationSchcema(initialValues, answers)}
    validateOnChange={false}
    validateOnBlur={false}
    onSubmit={onSubmit}
    onReset={onReset}
  >
    {children}
  </Formik>
);

export default AnswerProvider;
