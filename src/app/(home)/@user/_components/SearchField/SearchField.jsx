"use client";

import useSearchState from "@/hooks/useSearchState";
import cn from "classnames";

const SearchField = ({
  name,
  defaultValue,
  className,
  enableEmpty,
  routerAction,
  ...props
}) => {
  const { value, valueComparer, searchParam, onChange, onBlur } = useSearchState(
    name,
    defaultValue || props.value,
    routerAction,
    enableEmpty,
  );

  const handleChange = ({ target: { value } }) => onChange(value);
  const handleBlur = ({ target: { value } }) => onBlur(value);

  return (
    <input
      {...props}
      ref={valueComparer}
      name={name}
      className={cn("input", className ?? "")}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      {...(props.type === "radio" && {
        checked: value === (searchParam || defaultValue),
      })}
    />
  );
};

export default SearchField;
