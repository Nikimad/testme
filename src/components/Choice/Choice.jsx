import cn from "classnames";
import s from "./Choice.module.scss";

const Choice = ({ className, children }) => (
  <label className={s.wrapper}>
    {children}
    <span className={cn(className ?? "", s.choice)}></span>
  </label>
);

export default Choice;
