import cn from "classnames";
import s from "./Option.module.scss";

const Option = ({
  id,
  value,
  className,
  selectedStyle,
  isSelected,
  isPreselect,
  onMouseEnter,
  children,
}) => (
  <li
    id={id}
    tabIndex="-1"
    role="option"
    className={cn(s.option, {
      [className]: className,
      [selectedStyle || s.option_selected]: isPreselect,
    })}
    aria-selected={isSelected}
    onMouseEnter={onMouseEnter}
    data-value={value}
  >
    {children}
  </li>
);

export default Option;
