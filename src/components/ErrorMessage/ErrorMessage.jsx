"use client";

import cn from "classnames";
import { ErrorMessage as Error } from "formik";
import s from "./ErrorMessage.module.scss";

const ErrorMessage = ({ className, ...props }) => (
  <Error
    className={cn(s.errormessage, className ?? "")}
    aria-live="polite"
    component="span"
    {...props}
  />
);

export default ErrorMessage;
