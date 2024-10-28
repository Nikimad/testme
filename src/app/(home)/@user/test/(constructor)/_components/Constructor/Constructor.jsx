import ConstructorContainer from "./ConstructorContainer";
import Field from "@/components/Field";

const Constructor = ({ children }) => (
  <ConstructorContainer>
    <h2>Test constructor</h2>
    <Field id="test-title" name="title" label="Title" />
    {children}
  </ConstructorContainer>
);

export default Constructor;
