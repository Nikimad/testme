"use client";

import useSearchState from "@/hooks/useSearchState";

const Sort = ({ id, value }) => {
  const {
    searchParam,
    onChange,
  } = useSearchState("sort", "created_at_desc");

  const handleChange = ({ target: { value } }) => onChange(value, "replace");

  return (
    <input
      id={id}
      type="radio"
      name="sort"
      className="visually-hidden"
      onChange={handleChange}
      value={value}
      checked={value === (searchParam || "created_at_desc")}
    />
  );
};

export default Sort;
