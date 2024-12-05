import Input from "../Input";
import ErrorMessage from "../ErrorMessage";
import s from "./Field.module.scss";

const Field = ({ label, id, name, onRender, children, ...props }) => (
  <div className={s.field}>
    <label htmlFor={`${id}_field`} className={s.field__label}>
      {label}
    </label>
    <div className={s.field__inputcontainer}>
      <Input
        id={`${id}_field`}
        name={name}
        aria-describedby={`${id}_field-error`}
        {...props}
      />
      {children}
    </div>
    <ErrorMessage name={name} id={`${id}_field-error`} className={s.field__error} />
  </div>
);

export default Field;
