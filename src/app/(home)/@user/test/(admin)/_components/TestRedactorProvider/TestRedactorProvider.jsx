import { getTestValidationSchema } from "@/lib/validation";
import { Formik } from "formik";
import TestRedactor from "../TestRedactor";

const TestRedactorProvider = ({ test, initialValues, onSubmit, onReset }) => (
  <Formik
    initialValues={initialValues}
    initialTouched={{
      title: true,
    }}
    validationSchema={getTestValidationSchema()}
    validateOnChange={false}
    validateOnBlur={false}
    onSubmit={onSubmit}
    onReset={onReset}
  >
    <TestRedactor test={test} />
  </Formik>
);

export default TestRedactorProvider;
