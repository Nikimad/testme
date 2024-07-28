"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import useAction from "@/hooks/useAction";
import { testsSelectors } from "@/models/tests/selectors";
import { questionsSelectors } from "@/models/questions/selectors";
import { testsActions } from "@/models/tests";
import Test from "./Test";

const TestContainer = () => {
  const { testId } = useParams();

  const isLoading = useSelector(testsSelectors.selectIsLoading);
  const questions = useSelector(
    questionsSelectors.selectQuestionsByTestId(testId)
  );

  const getTest = useAction(testsActions.getTest);

  useEffect(() => {
    if (!questions) getTest(testId);
  }, []);

  return <Test isLoading={isLoading} questions={questions ?? []} />;
};

export default TestContainer;
