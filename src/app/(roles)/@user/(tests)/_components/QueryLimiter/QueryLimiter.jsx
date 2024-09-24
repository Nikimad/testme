import { useCallback, useEffect, useRef } from "react";
import { useAppSelector } from "@/models/hooks";
import { useFormikContext } from "formik";
import useWindowRouter from "@/hooks/useWindowRouter";
import { testsSelectors } from "@/models/tests/selectors";

const QueryLimiter = () => {
  const limitsChecked = useRef(false);

  const { replace } = useWindowRouter();

  const {
    status: query,
    setStatus: setQuery,
    setFieldValue,
  } = useFormikContext();

  const totalPages = useAppSelector(testsSelectors.selectTotalPages);
  const totalCount = useAppSelector(testsSelectors.selectTotalCount);

  const handleOutOfLimits = useCallback(() => {

    const queryParams = new URLSearchParams(query);

    const page = queryParams.get("page");
    const per = queryParams.get("per");

    if (page > totalPages || per > totalCount) {
      page > totalPages &&
        (queryParams.set("page", totalPages) ||
          setFieldValue("page", totalPages));

      per > totalCount &&
        (queryParams.set("per", totalCount) ||
          setFieldValue("per", totalCount));

      const newQuery = queryParams.toString();

      setQuery(newQuery);
      replace(newQuery);
    }
  }, [query, totalPages, totalCount, setFieldValue, setQuery, replace]);

  useEffect(() => {
    if (totalCount !== null && !limitsChecked.current) {
      handleOutOfLimits();
      limitsChecked.current = true;
    }
  }, [totalCount, limitsChecked, handleOutOfLimits]);

  return null;
};

export default QueryLimiter;
