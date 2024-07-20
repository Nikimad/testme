import cn from "classnames";
import { Field } from "formik";
import s from "./BoxField.module.scss";

const BoxField = ({ type, className, ...props }) => (
  <>
    <Field className={cn("visually-hidden", s.input)} type={type} {...props} />
    <span
      className={cn(
        s.box,
        className ?? ""
      )}
    ></span>
  </>
);

export default BoxField;
