import { useCallback, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useAction } from "@/models/hooks";
import { testsActions } from "@/models/tests";

const useSearchState = (
  name,
  defaultValue = "",
  routerAction = "replace",
  enableEmpty
) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(searchParams.get(name) || defaultValue);
  const prevValueRef = useRef(value);

  const searchTests = useAction(testsActions.getTests);

  const getQuery = useCallback(
    (value) => {
      const nextSearchParams = new URLSearchParams(searchParams);
      value ? nextSearchParams.set(name, value) : nextSearchParams.delete(name);
      const query = nextSearchParams.toString();
      return query;
    },
    [name, searchParams]
  );

  const navigate = useCallback(
    (query) => {
      const router = routerAction === "replace" ? window.history.replaceState : window.history.pushState;
      router(null, "", `${pathname}${query && `?${query}`}`);
    },
    [pathname, routerAction]
  );

  const handleSetValue = useCallback(
    (value) =>
      setValue((prevValue) => {
        prevValueRef.current = prevValue;
        return value;
      }),
    []
  );

  const onChange = useCallback(
    (value) => {
      const query = getQuery(value);
      navigate(query);
      if (value || (!value && enableEmpty)) searchTests(query);
      handleSetValue(value);
    },
    [enableEmpty, getQuery, navigate, handleSetValue, searchTests]
  );

  const onBlur = useCallback(
    (value) => {
      if (!value && !enableEmpty) {
        if (prevValueRef.current !== defaultValue) {
          navigate(getQuery(prevValueRef.current));
        }
        setValue((prevValue) => {
          const nextValue = prevValueRef.current;
          prevValueRef.current = prevValue;
          return nextValue;
        });
      }
    },
    [enableEmpty, defaultValue, getQuery, navigate]
  );

  const valueComparer = useCallback(
    (ref) => {
      if (ref) {
        if (
          (ref.value || defaultValue) !=
          (searchParams.get(ref.name) || defaultValue)
        ) {
          handleSetValue(searchParams.get(ref.name) || defaultValue);
          searchTests(searchParams.toString());
        }
      }
    },
    [defaultValue, searchParams, handleSetValue, searchTests]
  );

  return {
    value,
    valueComparer,
    searchParam: searchParams.get(name),
    onChange,
    onBlur,
  };
};

export default useSearchState;
