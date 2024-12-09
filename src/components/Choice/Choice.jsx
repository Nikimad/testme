import cn from "classnames";
import s from "./Choice.module.scss";

const Choice = ({ wrapperClassName, className, label, children }) => (
  <label className={wrapperClassName ?? ""}>
    {children}
    <span className={cn(className ?? "", s.choice)}></span>
    { label && <span>{label}</span> }
  </label>
);

export default Choice;
