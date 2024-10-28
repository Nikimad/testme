"use client";

import { useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useAppSelector } from "@/models/hooks";
import useSearchState from "@/hooks/useSearchState";
import { testsSelectors } from "@/models/tests/selectors";
import Pagination from "./Pagination";

const PaginationContainer = () => {
  const searchParams = useSearchParams();
  const { value, valueComparer, onChange, onBlur } = useSearchState("page", 1);

  const totalPages = useAppSelector(testsSelectors.selectTotalPages) || 1;

  const handleGoToFirst = useCallback(
    () => onChange(1),
    [onChange]
  );
  const handleGoTo = useCallback(
    ({ target: { value } }) => onChange(value, "push"),
    [onChange]
  );
  const handleGoToLast = useCallback(
    () => onChange(totalPages, "push"),
    [totalPages, onChange]
  );
  const handleBlur = useCallback(({ target: { value }}) => onBlur(value), [onBlur]);

  useEffect(() => {
    const currentPage = searchParams.get("page");
    if (currentPage > totalPages) onChange(totalPages, "replace");
  }, [searchParams, totalPages, onChange]);

  return (
    <Pagination
      inputRef={valueComparer}
      currentPage={value}
      totalPages={totalPages}
      onChange={handleGoTo}
      onBlur={handleBlur}
      onGoToFirst={handleGoToFirst}
      onGoToLast={handleGoToLast}
    />
  );
};

export default PaginationContainer;
