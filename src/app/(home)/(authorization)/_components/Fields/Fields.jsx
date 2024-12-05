import FieldsContainer from "./FieldsContainer";
import Field from "@/components/Field";
import ErrorMessage from "@/components/ErrorMessage";
import Title from "../Title";

const Fields = ({ children }) => (
  <FieldsContainer>
    <Field id="username" name="username" label="Username" />
    <Field id="password" name="password" label="Password" />
    {children}
    <button type="submit" className="pill">
      <Title />
    </button>
    <ErrorMessage name="isSignup" />
  </FieldsContainer>
);

export default Fields;
