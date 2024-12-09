"use client";

import { getQuestionValidationSchema } from "@/lib/validation";
import { Formik } from "formik";

const QuestionProvider = ({
  initialStatus,
  initialValues,
  onSubmit,
  onReset,
  children,
}) => (
  <Formik
    initialStatus={initialStatus}
    initialValues={{
      title: initialValues?.title || "",
      question_type: initialValues?.question_type || "single",
      answer: initialValues?.answer || "",
      answers: initialValues?.answers || [],
    }}
    initialTouched={{
      title: true,
      answer: true,
      answers: true,
    }}
    validationSchema={getQuestionValidationSchema()}
    validateOnChange={false}
    validateOnBlur={false}
    onSubmit={onSubmit}
    onReset={onReset}
  >
    {children}
  </Formik>
);

export default QuestionProvider;
