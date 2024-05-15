import cn from "classnames";
import { Field as FormikField, ErrorMessage } from "formik";
import s from "./Field.module.scss";

const Field = ({ isInvalid, label, name, ...props }) => (
  <div className={s.field}>
    <label htmlFor={`${name}_field`} className={s.field__label}>
      {label}
    </label>
    <FormikField
      id={`${name}_field`}
      name={name}
      aria-describedby={`${name}_field-error`}
      {...props}
      className={cn(s.field__input, { [s.field__input_invalid]: isInvalid })}
    />
    <span
      id={`${name}_field-error`}
      aria-live="polite"
      className={s.field__error}
    >
      <ErrorMessage name={name} />
    </span>
  </div>
);

export default Field;
