"use client";

import useSearchState from "@/hooks/useSearchState";
import SearchbarInput from "./SearchbarInput";

const SearchbarInputContainer = ({
  name,
  defaultValue,
  enableEmpty,
  ...props
}) => {
  const { value, valueComparer, searchParam, onChange, onBlur } =
    useSearchState(name, defaultValue || props.value, enableEmpty);
  const handleChange = ({ target: { value } }) => onChange(value, "replace");
  const handleBlur = ({ target: { value } }) => onBlur(value, "replace");

  return (
    <SearchbarInput
      {...props}
      inputRef={valueComparer}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      {...(props.type === "radio" && {
        checked: value === (searchParam || defaultValue),
      })}
    />
  );
};

export default SearchbarInputContainer;
