
import cn from "classnames";
import s from "./Button.module.scss";

const Button = ({ className, ...props }) => <button className={cn(s.button)} { ...props } />;

export default Button;
