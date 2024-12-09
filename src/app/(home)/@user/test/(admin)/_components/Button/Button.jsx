"use client";

import { useFormikContext } from "formik";
import { useCallback } from "react";

const Button = ({ type, className, onClick, children }) => {
  const { submitForm, resetForm } = useFormikContext();
  const handleClick = useCallback(
    () =>
      type === "submit"
        ? submitForm()
        : type === "reset"
        ? resetForm()
        : onClick(),
    [type, submitForm, resetForm, onClick]
  );
  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
