"use client";

import { useAppSelector } from "@/models/hooks";
import { testsSelectors } from "@/models/tests/selectors";
import Test from "../Test";

const Tests = () => {
  const tests = useAppSelector(testsSelectors.selectTests);

  return tests.map((test) => <Test key={test.id} test={test} />);
};

export default Tests;
