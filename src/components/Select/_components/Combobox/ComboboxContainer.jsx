import { useRef } from "react";
import Combobox from "./Combobox";

const ComboboxContainer = ({
  id,
  name,
  value,
  isExpanded,
  className,
  onClick,
  onBlur,
  onKeyDown,
  comboboxRef,
  children,
}) => {

  return (
    <Combobox
      id={id}
      name={name}
      className={className}
      comboboxRef={comboboxRef}
      isExpanded={isExpanded}
      onClick={onClick}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      value={value}
    >{children}</Combobox>
  );
};

export default ComboboxContainer;
