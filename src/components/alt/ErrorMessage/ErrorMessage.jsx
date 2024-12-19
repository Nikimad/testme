import cn from "classnames";
import s from "./ErrorMessage.module.scss";

const ErrorMessage = ({ id, error, className, ...props }) =>
  error && (
    <span
      id={`${id}-error`}
      aria-live="polite"
      className={cn(s.errormessage, className ?? "")}
      {...props}
    >
      {typeof error === "string" ? error : error.join(", ")}
    </span>
  );

export default ErrorMessage;
