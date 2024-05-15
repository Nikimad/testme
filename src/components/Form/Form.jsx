import { Form as FormikForm } from "formik";
import StyledContainer from "../StyledContainer";

const Form = ({ title, className, children }) => (
  <StyledContainer>
    <h2>{title}</h2>
    <FormikForm className={className}>{children}</FormikForm>
  </StyledContainer>
);

export default Form;
