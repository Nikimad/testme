import cn from "classnames";
import s from "./Listbox.module.scss";

const ListBox = ({ id, isExpanded, className, children }) => (
  <ul
    id={`${id}-listbox`}
    role="listbox"
    tabIndex="-1"
    className={cn(s.listbox, className ?? "")}
    aria-labelledby={`${id}-label`}
    aria-hidden={!isExpanded}
  >
    { children }
  </ul>
);

export default ListBox;
