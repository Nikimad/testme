import { Form as FormikForm } from "formik";
import s from "./Form.module.scss";

const Form = ({ title, className, children, ...props }) => (
  <>
    <h2 className={s.form__title}>{title}</h2>
    <FormikForm className={className} {...props}>{children}</FormikForm>
  </>
);

export default Form;
