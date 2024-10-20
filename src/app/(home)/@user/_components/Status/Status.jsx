"use client";

import { useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { useAppSelector } from "@/models/hooks";
import { testsSelectors } from "@/models/tests/selectors";

const Status = () => {
  const searchParams = useSearchParams();
  const meta = useAppSelector(testsSelectors.selectMeta);

  const isLoading = useAppSelector(testsSelectors.selectIsLoading);
  const error = useAppSelector(testsSelectors.selectError);

  const getStatus = useCallback(() => {
    if (error) return error;

    if (meta.total_pages === 0) {
      return isLoading
        ? "Loading tests..."
        : `No tests ${
            searchParams.size === 0 ? "yet" : "with this search params"
          }`;
    }
    return null;
  }, [error, isLoading, meta, searchParams]);

  return getStatus();
};

export default Status;
