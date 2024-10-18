import FieldsContainer from "./FieldsContainer";
import Field from "@/components/Field";
import Error from "@/components/Error";
import Title from "../Title";

const Fields = ({ children }) => (
  <FieldsContainer>
    <Field name="username" label="Username" />
    <Field name="password" label="Password" />
    {children}
    <button type="submit" className="pill">
      <Title />
    </button>
    <Error name="isSignup" />
  </FieldsContainer>
);

export default Fields;
