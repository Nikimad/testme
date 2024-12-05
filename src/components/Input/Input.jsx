"use client";

import cn from "classnames";
import { useFormikContext, getIn } from "formik";
import { Field } from "formik";

const Input = ({ name, className, ...props }) => {
  const { errors } = useFormikContext();
  return (
    <Field
      name={name}
      className={cn("form__input", className ?? "")}
      data-invalid={!!getIn(errors, name)}
      {...props}
    />
  );
};

export default Input;
