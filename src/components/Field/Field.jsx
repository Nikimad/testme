import cn from "classnames";
import Input from "../Input";
import Error from "../Error";
import s from "./Field.module.scss";

const Field = ({ isLabelHidden, label, name, ...props }) => (
  <div className={s.field}>
    <label
      htmlFor={`${name}_field`}
      className={cn(s.field__label, { ["visually-hidden"]: isLabelHidden })}
    >
      {label}
    </label>
    <Input
      key={name}
      id={`${name}_field`}
      name={name}
      aria-describedby={`${name}_field-error`}
      {...props}
    />
    <Error name={name} id={`${name}_field-error`} />
  </div>
);

export default Field;
