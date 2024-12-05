import { createElement } from "react";
import cn from "classnames";
import s from "./SearchbarField.module.scss";

const SearchbarField = ({ component, className, children }) =>
  createElement(
    component ?? "div",
    {
      className: cn(s.field, className ?? ""),
    },
    children
  );

export default SearchbarField;
