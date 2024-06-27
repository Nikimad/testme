import cn from "classnames";
import s from "./Body.module.scss";

const Body = ({ className, children, ...props }) => (
  <body className={cn(s.body, className ?? "")} {...props}>
    {children}
  </body>
);

export default Body;
