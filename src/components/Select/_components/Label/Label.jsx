import cn from "classnames";
import s from "./Label.module.scss";

const Label = ({ id, className, onClick, children }) => (
  <span
    id={`${id}-label`}
    className={cn(s.label, className ?? "")}
    onClick={onClick}
  >
    {children}
  </span>
);

export default Label;
