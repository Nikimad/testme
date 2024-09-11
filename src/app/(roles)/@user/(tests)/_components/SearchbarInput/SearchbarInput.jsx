"use client";

import cn from "classnames";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
import useWindowRouter from "@/hooks/useWindowRouter";

const SearchbarInput = ({ name, defaultValue, value, className, ...props }) => {
  const searchParams = useSearchParams();
  const { replace } = useWindowRouter();

  const handleChange = useCallback(
    (e) => {
      const newSearchParams = new URLSearchParams(searchParams);

      e.target.value
        ? newSearchParams.set(name, e.target.value)
        : newSearchParams.delete(name);

      replace(newSearchParams.toString());
    },
    [searchParams, replace]
  );

  return (
    <input
      name={name}
      {...props}
      value={
        (props.type === "number"
          ? Number(searchParams.get(name))
          : value || searchParams.get(name)) || defaultValue
      }
      checked={value === (searchParams.get(name) || defaultValue)}
      className={cn("input", className ?? "")}
      onChange={handleChange}
    />
  );
};

export default SearchbarInput;
