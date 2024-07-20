import cn from "classnames";
import s from "./Button.module.scss";

const Button = ({ styleType, className, ...props }) => (
  <button className={cn(s.button, {
    [s.button_pill]: styleType === "pill",
    [s.button_link]: styleType === "link",
    [className ?? ""]: true
})} {...props} />
);

export default Button;
