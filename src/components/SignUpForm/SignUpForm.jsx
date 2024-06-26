import AuthForm from "../AuthForm";
import Field from "../Field";

const SigUpForm = () => (
  <AuthForm title="Sign in">
    <Field label="Username" name="username" />
    <Field label="Pasword" name="password" />
    <Field label="Password confirmation" name="password_confirmation" />
  </AuthForm>
);

export default SigUpForm;
