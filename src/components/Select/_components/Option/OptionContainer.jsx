import { useCallback } from "react";
import Option from "./Option";

const OptionContainer = ({
  id,
  isSelected,
  isPreselected,
  option,
  position,
  className,
  selectedStyle,
  onMouseOver,
  children,
}) => {
  const handleMouseEnter = useCallback(
    () => onMouseOver(position),
    [position, onMouseOver]
  );

  return (
    <Option
      id={id}
      value={option.value}
      isSelected={isSelected}
      isPreselect={isPreselected}
      onMouseEnter={handleMouseEnter}
      className={className}
      selectedStyle={selectedStyle}
    >
      {children}
    </Option>
  );
};

export default OptionContainer;
