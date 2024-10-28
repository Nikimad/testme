"use client";

import * as Yup from "yup";
import { usePathname } from "next/navigation";
import { useAction } from "@/models/hooks";
import { authorizationActions } from "@/models/authorization";
import { Formik, Form } from "formik";

const FormikProvider = ({ children }) => {
  const isSignup = usePathname() === "/signup";

  const submitAction = useAction(
    authorizationActions[isSignup ? "signup" : "signin"]
  );
  const handleSubmit = (values) => submitAction(values);

  const validateStringRequired = Yup.string().required(
    "You can't leave this field blank"
  );

  return (
    <Formik
      initialValues={{
        isSignup,
        username: "",
        password: "",
        password_confirmation: "",
      }}
      initialTouched={{ isSignup: true }}
      validationSchema={Yup.object({
        username: validateStringRequired,
        password: validateStringRequired.when("isSignup", {
          is: true,
          then: (schema) =>
            schema.min(6, "Password must be at least 6 characters"),
        }),
        password_confirmation: Yup.mixed().when("isSignup", {
          is: true,
          then: () =>
            validateStringRequired.oneOf(
              [Yup.ref("password")],
              "Password confirmation must match password"
            ),
        }),
      })}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={handleSubmit}
    >
      <Form>{children}</Form>
    </Formik>
  );
};

export default FormikProvider;
