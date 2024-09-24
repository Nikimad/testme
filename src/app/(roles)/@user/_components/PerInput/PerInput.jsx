"use client";

import { useCallback } from "react";
import { useAppSelector } from "@/models/hooks";
import { useFormikContext } from "formik";
import { testsSelectors } from "@/models/tests/selectors";
import SearchField from "../SearchField";

const PerInput = (props) => {
  const totalCount = useAppSelector(testsSelectors.selectTotalCount);
  const totalPages = useAppSelector(testsSelectors.selectTotalPages);

  const { setFieldValue } = useFormikContext();

  const handlePage = useCallback((perValue, userParams, queryParams) => {
    const nextTotalpages = Math.ceil(totalCount / perValue);
    if (nextTotalpages !== totalPages && queryParams.get("page") > nextTotalpages) {
      setFieldValue("page", nextTotalpages);
      userParams.set("page", nextTotalpages);
      queryParams.set("page", nextTotalpages);
    }
  }, [totalCount, totalPages]);

  return (
    <SearchField
      name="per"
      id="per"
      type="number"
      min={1}
      max={totalCount || 1}
      sideEffect={handlePage}
      {...props}
    />
  );
};

export default PerInput;
