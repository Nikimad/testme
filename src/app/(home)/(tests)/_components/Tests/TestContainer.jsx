"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import useAction from "@/hooks/useAction";
import { testsSelectors } from "@/models/tests/selectors";
import { testsActions } from "@/models/tests";
import Tests from "./Tests";

const TestsContainer = () => {
  const searchParams = useSearchParams();

  const isLoading = useSelector(testsSelectors.selectIsLoading);

  const getTests = useAction(testsActions.getTests);

  useEffect(() => {
    getTests(searchParams.toString().toLowerCase());
  }, [getTests, searchParams]);

  return <Tests isLoading={isLoading} />;
};

export default TestsContainer;