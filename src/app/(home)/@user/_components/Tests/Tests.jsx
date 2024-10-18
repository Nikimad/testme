"use client";

import { useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useAction, useAppSelector } from "@/models/hooks";
import useWindowPopState from "@/hooks/useWindowPopstate";
import { testsSelectors } from "@/models/tests/selectors";
import { testsActions } from "@/models/tests";
import Test from "../Test";

const Tests = () => {
  const lastQuery = useAppSelector(testsSelectors.selectQuery);
  const tests = useAppSelector(testsSelectors.selectTests);
  const currentQuery = useSearchParams().toString();

  const getTests = useAction(testsActions.getTests);

  const restoreQuery = useCallback(() => {
    if (lastQuery !== currentQuery) {
      getTests(currentQuery);
    }
  }, [getTests, lastQuery, currentQuery]);

  useWindowPopState(restoreQuery);

  useEffect(() => {
    restoreQuery()
  }, []);

  return tests.map((test) => <Test key={test.id} test={test} />);
};

export default Tests;
