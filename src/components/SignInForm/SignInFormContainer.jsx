import * as Yup from "yup";
import validationMessages from "@/helpers/validationMessages";
import useAction from "@/hooks/useAction";
import { authActions } from "@/models/auth";
import { Formik } from "formik";
import SigInForm from "./SignInForm";

const SigInFormContainer = () => {
  const stringRequired = Yup.string().required(validationMessages.required);
  const signIn = useAction(authActions.signin);

  const logout = useAction(authActions.logout);
  const getUser = useAction(authActions.getUser);

  const handleSubmit = (v) => {
    console.log("Submit signin form");
    signIn(v);
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object({
        username: stringRequired,
        password: stringRequired,
      })}
      validateOnChange={false}
      validateOnBlur={false}
      component={SigInForm}
      onSubmit={handleSubmit}
    />
  );
};

export default SigInFormContainer;
