import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAction } from "@/models/hooks";
import { testsActions } from "@/models/tests";
import useWindowPopState from "./useWindowPopstate";

const useSearchState = (
  name,
  defaultValue = "",
  routerAction = "replace",
  enableEmptyParam
) => {
  const isHistoryPoped = useRef(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const prevValueRef = useRef(defaultValue);
  const [value, setValue] = useState(
    searchParams.get(name) || prevValueRef.current
  );

  const searchTests = useAction(testsActions.getTests);

  const getNextQuery = useCallback(
    (nextParam) => {
      const nextSearchParams = new URLSearchParams(searchParams);
      nextParam
        ? nextSearchParams.set(name, nextParam)
        : nextSearchParams.delete(name);

      const nextQuery = nextSearchParams.toString();

      return nextQuery;
    },
    [name, searchParams]
  );

  const handleSetValue = useCallback(
    (nextValue) => {
      setValue((prevValue) => {
        if (!nextValue && !enableEmptyParam) {
          prevValueRef.current = prevValue;
        }
        return nextValue;
      });
    },
    [setValue, prevValueRef]
  );

  const onChange = useCallback(
    (nextValue, altRouterAction) => {
      const nextQuery = getNextQuery(nextValue);
      handleSetValue(nextValue);
      router[altRouterAction || routerAction](
        `/${nextQuery && `?${nextQuery}`}`
      );
      (nextValue || (!nextValue && enableEmptyParam)) && searchTests(nextQuery);
    },
    [getNextQuery, router, handleSetValue]
  );

  const onBlur = useCallback(
    (nextValue, altRouterAction) => {
      if (!nextValue && !enableEmptyParam) {
        const nextQuery = getNextQuery(prevValueRef.current);
        handleSetValue(prevValueRef.current);
        router[altRouterAction || routerAction](
          `/${nextQuery && `?${nextQuery}`}`
        );
      }
    },
    [getNextQuery, handleSetValue, enableEmptyParam, router, prevValueRef]
  );

  const restoreValue = useCallback(() => {
    const currentValue = searchParams.get(name) || prevValueRef.current;
    if (value !== currentValue) handleSetValue(currentValue);
  }, [handleSetValue, value, prevValueRef, searchParams]);

  useWindowPopState(restoreValue);

  return {
    value,
    searchParam: searchParams.get(name),
    onChange,
    onBlur,
  };
};

export default useSearchState;
