"use client";

import useSearchState from "@/hooks/useSearchState";
import SortInput from "./SortInput";

const SortInputContainer = ({ id, value, className }) => {
  const { searchParam, onChange } = useSearchState("sort", "created_at_desc");

  const handleChange = ({ target: { value } }) => onChange(value, "replace");

  return (
    <SortInput
      id={id}
      value={value}
      isChecked={value === (searchParam || "created_at_desc")}
      onChange={handleChange}
      className={className}
    />
  );
};

export default SortInputContainer;
