import cn from "classnames";
import { Field } from "formik";
import s from "./Input.module.scss";

const Input = ({ isInvalid, className, ...props }) => (
  <Field
    className={cn(s.input, {
      [className]: !!className,
      [s.input_invalid]: isInvalid,
    })}
    {...props}
  />
);

export default Input;
