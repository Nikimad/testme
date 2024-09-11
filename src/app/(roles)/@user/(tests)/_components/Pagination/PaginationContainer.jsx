"use client";

import { useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { useAppSelector } from "@/models/hooks";
import { selectTestsData } from "@/models/tests/selectors";
import useWindowRouter from "@/hooks/useWindowRouter";
import Pagination from "./Pagination";

const PaginationContainer = () => {
  const searchParams = useSearchParams();
  const { push } = useWindowRouter();
  const {
    meta: { total_pages },
  } = useAppSelector(selectTestsData);

  const handleNavigate = useCallback(
    (pageNumber) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(
        "page",
        pageNumber < 1 ? 1 : pageNumber > total_pages ? total_pages : pageNumber
      );
      push(newSearchParams.toString());
    },
    [searchParams, total_pages, push]
  );

  const handleChange = (e) => handleNavigate(Number(e.target.value));
  const handleToLast = useCallback(
    () => handleNavigate(total_pages),
    [total_pages]
  );
  const handleToFirst = () => handleNavigate(1);

  return (
    <Pagination
      currentPage={Number(searchParams.get("page")) || 1}
      totalPages={total_pages}
      onChange={handleChange}
      onGoToLast={handleToLast}
      onGoToFirst={handleToFirst}
    />
  );
};

export default PaginationContainer;
