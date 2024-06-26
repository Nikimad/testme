import cn from "classnames";
import { createElement } from "react";
import s from "./LayoutContainer.module.scss";

const LayoutContainer = ({ element, className, children, ...props }) =>
  createElement(
    element ?? "div",
    {
      className: cn(s.container, className ?? ""),
      ...props,
    },
    children
  );

export default LayoutContainer;
