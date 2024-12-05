import { createElement } from "react";
import cn from "classnames";
import s from "./SearchbarLabel.module.scss";

const SearchbarLabel = ({ component, className, children, ...props }) =>
  createElement(
    component ?? "label",
    {
      className: cn(s.label, className ?? ""),
      ...props,
    },
    children
  );

export default SearchbarLabel;
