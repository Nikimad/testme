"use client";

import { useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { useAction, useAppSelector } from "@/models/hooks";
import { testsSelectors } from "@/models/tests/selectors";
import { testsActions } from "@/models/tests";

const Status = () => {
  const searchParams = useSearchParams();
  const meta = useAppSelector(testsSelectors.selectMeta);

  const testsTotalCount = useAppSelector(testsSelectors.selectTestsTotal);

  const isLoading = useAppSelector(testsSelectors.selectIsLoading);
  const error = useAppSelector(testsSelectors.selectError);

  const setTests = useAction(testsActions.succes);

  const getStatus = useCallback(() => {
    if (error) return error;
    if (testsTotalCount === 0 || meta.total_pages === 0) {
      testsTotalCount > 0 &&
        meta.total_pages === 0 &&
        setTests({ tests: [], meta, isReset: true });
      return isLoading
        ? "Loading tests..."
        : `No tests ${
            searchParams.size === 0 ? "yet" : "with this search params"
          }`;
    }
    return null;
  }, [error, testsTotalCount, isLoading, meta, searchParams, setTests]);

  return getStatus();
};

export default Status;
