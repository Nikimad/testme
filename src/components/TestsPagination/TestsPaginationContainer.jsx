"use client";

import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { testsSelectors } from "@/models/tests/selectors";
import TestsPagination from "./TestsPagination";

const TestsPaginationContainer = () => {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") ?? "1";
  const { total_pages } = useSelector(testsSelectors.selectMeta);
  const pages = [...Array(total_pages).keys()].map((_, i) => i + 1);
  const currentPageIndex = pages.indexOf(Number(currentPage));

  const pagination =
    total_pages === 7
      ? pages
      : total_pages - currentPageIndex > 6
      ? [
          ...pages.slice(
            currentPageIndex - 1 < 0 ? currentPageIndex : currentPageIndex - 1,
            currentPageIndex - 1 < 0
              ? currentPageIndex + 3
              : currentPageIndex + 2
          ),
          null,
          ...pages.slice(-3),
        ]
      : pages.slice(-7);

  return (
    <TestsPagination
      pagination={pagination}
      currentPage={currentPage}
      lastPage={total_pages}
    />
  );
};

export default TestsPaginationContainer;
