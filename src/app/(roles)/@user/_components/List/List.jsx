"use client";

import { useAppSelector } from "@/models/hooks";
import { testsSelectors } from "@/models/tests/selectors";
import Test from "../Test";

const List = () => {
  const tests = useAppSelector(testsSelectors.selectAll);
  return tests.map((test) => <Test key={test.id} test={test} />);
};

export default List;
