import cn from "classnames";
import ErrorMessage from "../ErrorMessage";
import s from "./Field.module.scss";

const Field = ({ label, id, name, type, defaultValue, error, isLoading }) => (
  <div className={s.field}>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      name={name}
      type={type}
      defaultValue={defaultValue}
      disabled={isLoading}
      aria-describedby={`${id}-error`}
      className={cn("form__input", s.field__input, {
        [s.field__input_invalid]: error,
      })}
    />
    <ErrorMessage id={id} error={error} className={s.field__error} />
  </div>
);

export default Field;
