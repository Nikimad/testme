import cn from "classnames";
import { Form as FormikForm } from "formik";
import s from "./Form.module.scss";

const Form = ({ title, className, children }) => (
  <div className={cn(s.form__wrapper, { [className]: Boolean(className) })}>
    <h2>{title}</h2>
    <FormikForm className={s.form}>{children}</FormikForm>
  </div>
);

export default Form;
