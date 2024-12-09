"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/models/hooks";
import { testsSelectors } from "@/models/tests/selectors";
import Test from "../Test";

const Creator = () => {
  const [test, setTest] = useState({
    title: "",
    id: null,
  });

  const tests = useAppSelector(testsSelectors.selectAll);

  const testId = tests[tests.length - 1]?.id || null;

  const { current: initialTestId } = useRef(testId);

  const handleDelete = useCallback(() => {
    setTest({
      title: "",
      id: null,
    });
  }, []);


  useEffect(() => {
    if (initialTestId !== testId && test.id !== testId) {
      setTest(tests[tests.length - 1]);
    }
  }, [initialTestId, tests, test, testId]);

  return (
    <Test
      test={test}
      onDelete={handleDelete}
    />
  );
};

export default Creator;
