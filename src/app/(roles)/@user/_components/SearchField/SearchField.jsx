"use client";

import cn from "classnames";
import { useCallback } from "react";
import useWindowRouter from "@/hooks/useWindowRouter";
import { useFormikContext, Field } from "formik";

const SearchField = ({ className, enablePush, sideEffect, ...props }) => {
  const { push, replace } = useWindowRouter();
  const {
    status: query,
    initialValues,
    setStatus: setQuery,
    setFieldValue,
  } = useFormikContext();

  const handleChange = useCallback(
    ({ target }) => {
      const { name, value, min, max } = target;
      const userParams = new URLSearchParams(query);
      const queryParams = new URLSearchParams(query);
      value ? userParams.set(name, value) : userParams.delete(name);
      if (value > min) queryParams.set(name, +value > max ? max : value);
      if (min === value) queryParams.delete(name);
      sideEffect && sideEffect(value, userParams, queryParams);
      replace(userParams.toString());
      setFieldValue(name, value);
      setQuery(queryParams.toString());
    },
    [query, sideEffect, setFieldValue, push, replace]
  );

  const handleBlur = useCallback(
    (e) => {
      const { name, value, min, max } = e.target;
      const queryParams = new URLSearchParams(query);
      if (value < min || +value > max) {
        setFieldValue(name, queryParams.get(name) || initialValues[name]);
        replace(queryParams.toString());
      }
    },
    [query, initialValues, setFieldValue, replace]
  );

  return (
    <Field
      className={cn("input", className ?? "")}
      onChange={handleChange}
      onBlur={handleBlur}
      {...props}
    />
  );
};

export default SearchField;
