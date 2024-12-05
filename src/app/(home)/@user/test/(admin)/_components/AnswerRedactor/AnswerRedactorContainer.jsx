"use client";

import { getAnswersValidationSchcema } from "@/lib/validation";
import { Formik, useFormikContext } from "formik";
import AnswerRedactor from "./AnswerRedactor";

const AnswerRedactorContainer = ({
  idPrefix,
  initialValues,
  onSubmit,
  onReset,
  children,
}) => {
  const {
    values: { answers },
  } = useFormikContext();

  return (
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
      {({ values, errors }) => (
        <AnswerRedactor
          idPrefix={idPrefix || ""}
          isChecked={values.is_right}
          isInvalid={Boolean(errors.text)}
        >
          {children}
        </AnswerRedactor>
      )}
    </Formik>
  );
};

export default AnswerRedactorContainer;
