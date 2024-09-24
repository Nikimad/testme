import cn from "classnames";
import Status from "./Status";
import s from "./Status.module.scss";

const StatusContainer = ({ className }) => (
  <p className={cn(s.status, className)}>
    <Status />
  </p>
);

export default StatusContainer;
