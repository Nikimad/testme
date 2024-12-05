"use client";

import { useFormikContext } from "formik";
import { useCallback } from "react";

const ControlButton = ({ type, className, onClick, children }) => {
  const { submitForm, resetForm } = useFormikContext();
  const handleClick = useCallback(
    () =>
      type === "submit"
        ? submitForm()
        : type === "reset"
        ? resetForm()
        : onClick(),
    [submitForm, resetForm, onClick]
  );
  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default ControlButton;
