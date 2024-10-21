"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useAction, useAppSelector } from "@/models/hooks";
import { testsSelectors } from "@/models/tests/selectors";
import { testsActions } from "@/models/tests";
import Test from "../Test";

const Tests = () => {
  const tests = useAppSelector(testsSelectors.selectTests);
  const lastQuery = useAppSelector(testsSelectors.selectQuery);
  const currentQuery = useSearchParams().toString();

  const getTests = useAction(testsActions.getTests);

  useEffect(() => {
    if (lastQuery === null) {
      getTests(currentQuery);
    }
  }, [lastQuery, currentQuery, getTests]);

  return tests.map((test) => <Test key={test.id} test={test} />);
};

export default Tests;
