import cn from "classnames";
import s from "./Spinner.module.scss";

const Spinner = ({ className, children }) => (
  <span className={cn(s.spinner, className ?? "")} aria-hidden="true">
    <span className="visually-hidden" aria-live="polite">
      {children} is loading
    </span>
  </span>
);

export default Spinner;
