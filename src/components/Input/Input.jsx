"use client";

import cn from "classnames";
import { useFormikContext, getIn } from "formik";
import { Field } from "formik";
import s from "./Input.module.scss";

const Input = ({ name, className, ...props }) => {
  const { errors } = useFormikContext();
  return (
    <Field
      name={name}
      className={cn(s.input, className ?? "")}
      data-invalid={!!getIn(errors, name)}
      {...props}
    />
  );
};

export default Input;
