"use client";

import { usePathname } from "next/navigation";
import { useAction } from "@/models/hooks";
import { authorizationActions } from "@/models/authorization";
import { getAuthorizationValidationSchema } from "@/lib/validation";
import { Formik, Form } from "formik";

const FormikProvider = ({ children }) => {
  const isSignup = usePathname() === "/signup";

  const submitAction = useAction(
    authorizationActions[isSignup ? "signup" : "signin"]
  );
  const handleSubmit = (values) => submitAction(values);

  return (
    <Formik
      initialValues={{
        isSignup,
        username: "",
        password: "",
        password_confirmation: "",
      }}
      initialTouched={{ isSignup: true }}
      validationSchema={getAuthorizationValidationSchema()}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={handleSubmit}
    >
      <Form className="form-grid">{children}</Form>
    </Formik>
  );
};

export default FormikProvider;
