import cn from "classnames";

const Label = ({ className, children, ...props }) => (
  <label className={cn("form__label", className ?? "")} {...props}>
    {children}
  </label>
);

export default Label;
