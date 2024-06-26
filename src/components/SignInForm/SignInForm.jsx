import AuthForm from "../AuthForm";
import Field from "../Field";

const SigInForm = () => (
  <AuthForm title="Sign in">
    <Field label="Username" name="username" />
    <Field label="Pasword" name="password" />
  </AuthForm>
);

export default SigInForm;
