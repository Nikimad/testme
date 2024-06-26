import * as Yup from "yup";
import validationMessages from "@/helpers/validationMessages";
import useAction from "@/hooks/useAction";
import { authActions } from "@/models/auth";
import { Formik } from "formik";
import SigUpForm from "./SignUpForm";

const SigUpFormContainer = () => {
  const stringRequired = Yup.string().required(validationMessages.required);
  const signUp = useAction(authActions.signup);

  return (
    <Formik
      initialValues={{ username: "", password: "", password_confirmation: "" }}
      validationSchema={Yup.object({
        username: stringRequired,
        password: stringRequired.min(
          6,
          "Password must be at least 6 characters"
        ),
        password_confirmation: stringRequired.oneOf(
          [Yup.ref("password")],
          "Password confirmation must match password"
        ),
      })}
      validateOnChange={false}
      validateOnBlur={false}
      component={SigUpForm}
      onSubmit={signUp}
    />
  );
};

export default SigUpFormContainer;
