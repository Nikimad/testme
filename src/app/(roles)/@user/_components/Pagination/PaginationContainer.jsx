"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useAppSelector } from "@/models/hooks";
import { testsSelectors } from "@/models/tests/selectors";
import useWindowRouter from "@/hooks/useWindowRouter";
import Pagination from "./Pagination";
import { useFormikContext } from "formik";

const PaginationContainer = () => {
  const { status: query, setStatus: setQuery, values } = useFormikContext();
  const { push } = useWindowRouter();
  const totalPages = useAppSelector(testsSelectors.selectTotalPages);

  const handleNavigate = useCallback((page) => {
    const newQueryParams = new URLSearchParams(query);
    newQueryParams.set("page", page);
    const newQuery = newQueryParams.toString();
    setQuery(newQuery);
    push(newQuery);
  }, [query, setQuery, push])

  const handleToLast = useCallback(
    () => handleNavigate(totalPages),
    [totalPages]
  );
  const handleToFirst = () => handleNavigate(1);

  return (
    <Pagination
      currentPage={values["page"]}
      totalPages={totalPages}
      onGoToLast={handleToLast}
      onGoToFirst={handleToFirst}
    />
  );
};

export default PaginationContainer;
