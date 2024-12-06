"use client";

import { getQuestionValidationSchema } from "@/lib/validation";
import { Formik } from "formik";
import QuestionRedactor from "../QuestionRedactor";

const QuestionRedactorProvider = ({
  isTestDirty,
  questionId,
  idPrefix,
  initialValues,
  onSubmit,
  onReset,
  children,
}) => (
  <Formik
    initialStatus={{ questionId }}
    initialValues={
      {
        title: initialValues?.title || "",
        question_type: initialValues?.question_type || "single",
        answer: initialValues?.answer || "",
        answers: initialValues?.answers || [],
      }
    }
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
    <QuestionRedactor isTestDirty={isTestDirty} idPrefix={idPrefix}>
      {children}
    </QuestionRedactor>
  </Formik>
);

export default QuestionRedactorProvider;
