import cn from "classnames";
import List from "./List";
import s from "./List.module.scss";

const ListContainer = ({ className }) => (
  <ul className={cn(s.list, className)}>
    <List />
  </ul>
);

export default ListContainer;
