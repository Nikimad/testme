import cn from "classnames";
import s from "./Combobox.module.scss";

const Combobox = ({
  id,
  comboboxRef,
  isExpanded,
  name,
  value,
  className,
  onClick,
  onBlur,
  onKeyDown,
  children,
}) => (
  <div
    id={id}
    role="combobox"
    tabIndex="0"
    name={name}
    className={cn(s.combobox, {
      [className]: className,
      [s.combobox_focushidden]: isExpanded,
    })}
    onClick={onClick}
    onBlur={onBlur}
    onKeyDown={onKeyDown}
    aria-expanded={isExpanded}
    aria-controls={`${id}-listbox`}
    aria-haspopup={`${id}-listbox`}
    aria-labelledby={`${id}-label`}
    aria-activedescendant={`${id}-${value}`}
    ref={comboboxRef}
  >
    {children}
  </div>
);

export default Combobox;
