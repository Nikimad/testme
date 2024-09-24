import { useCallback, useEffect, useRef } from "react";
import { useFormikContext } from "formik";
import { useAction } from "@/models/hooks";
import useWindowRouter from "@/hooks/useWindowRouter";
import { testsActions } from "@/models/tests";

const QuerySender = () => {
  const { replace } = useWindowRouter();
  const initialized = useRef(false);

  const { status: query } = useFormikContext();
  const prevQuery = useRef(null);

  const getTests = useAction(testsActions.getTests);

  const handleGetTests = useCallback((query) => {
    if (prevQuery.current !== query) {
      getTests(query);
      prevQuery.current = query;
    }
    if (!initialized.current) {
      replace(query);
      initialized.current = true;
    }
  }, [initialized, prevQuery, replace, getTests])

  useEffect(() => {
    handleGetTests(query);
  }, [handleGetTests, query]);

  return null;
};

export default QuerySender;
