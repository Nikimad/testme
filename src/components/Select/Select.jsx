import cn from "classnames";
import Label from "./_components/Label";
import Combobox from "./_components/Combobox";
import ListBox from "./_components/Listbox";
import Option from "./_components/Option";
import s from "./Select.module.scss";

const Select = ({
  label,
  id,
  name,
  value,
  preselect,
  options,
  isExpanded,
  stylesNames,
  onToggle,
  onKeyDown,
  onBlur,
  onMouseOver,
  comboboxRef,
  children,
}) => (
  <div className={cn(s.select, stylesNames.container ?? "")}>
    <Label id={id} comboboxRef={comboboxRef} className={stylesNames.label}>
      {label}
    </Label>
    <Combobox
      id={id}
      name={name}
      className={stylesNames.select}
      isExpanded={isExpanded}
      onKeyDown={onKeyDown}
      onClick={onToggle}
      onBlur={onBlur}
      value={value}
      comboboxRef={comboboxRef}
    >
      {children}
    </Combobox>
    <ListBox id={id} isExpanded={isExpanded} className={stylesNames.popup}>
      {options.map((option, i) => (
        <Option
          key={option.value}
          id={`${id}-${option.value}`}
          className={stylesNames.option}
          selectedStyle={stylesNames.option_selected}
          isPreselected={preselect === i}
          isSelected={option.value === value}
          option={option}
          position={i}
          onMouseOver={onMouseOver}
        >
          {option.label}
        </Option>
      ))}
    </ListBox>
  </div>
);

export default Select;
