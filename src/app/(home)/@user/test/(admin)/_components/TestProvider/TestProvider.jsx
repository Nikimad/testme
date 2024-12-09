import { getTestValidationSchema } from "@/lib/validation";
import { Formik } from "formik";

const TestProvider = ({
  initialValues,
  onSubmit,
  onReset,
  children,
}) => (
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
    {children}
  </Formik>
);

export default TestProvider;
