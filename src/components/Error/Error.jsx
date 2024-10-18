"use client";

import cn from "classnames";
import { ErrorMessage } from "formik";
import s from "./Error.module.scss";

const Error = ({ className, ...props }) => (
  <ErrorMessage
    {...props}
    aria-live="polite"
    component="span"
    className={cn(s.error, className ?? "")}
  />
);

export default Error;
