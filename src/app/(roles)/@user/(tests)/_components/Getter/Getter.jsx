"use client";

import { useCallback, useEffect, useRef } from "react";
import { useAction, useAppSelector } from "@/models/hooks";
import { useSearchParams } from "next/navigation";
import useWindowRouter from "@/hooks/useWindowRouter";
import { testsActions } from "@/models/tests";
import { selectTestsData } from "@/models/tests/selectors";

const Getter = () => {
  const prevQuery = useRef(null);
  const searchParams = useSearchParams();
  const { replace } = useWindowRouter()
  const {
    meta: { total_count },
  } = useAppSelector(selectTestsData);

  const getTests = useAction(testsActions.getTests);

  const isRequestSkip = useCallback(
    (searchParams, total_count) => {
      if (total_count === 0) return false;

      const newSearchParams = new URLSearchParams(searchParams);
      const page = Number(newSearchParams.get("page")) || 1;

      if (page < 1) {
        newSearchParams.set("page", 1);
        replace(newSearchParams.toString());
        return true;
      }

      const per = Number(newSearchParams.get("per")) || 5;
      const nextTotalPages = Math.ceil(total_count / per);

      if (per > total_count) return true;

      if (page > nextTotalPages) {
        newSearchParams.set("page", nextTotalPages);
        replace(newSearchParams.toString());
        return true;
      }

      return prevQuery.current === newSearchParams.toString();
    },
    [prevQuery, replace]
  );

  useEffect(() => {
    if (!isRequestSkip(searchParams, total_count)) {
      const query = searchParams.toString();
      getTests(query);
      prevQuery.current = query;
    }
  }, [getTests, searchParams, total_count]);

  return null;
};

export default Getter;
