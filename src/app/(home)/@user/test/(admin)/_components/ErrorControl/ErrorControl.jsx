"use client";

import { useAppSelector } from "@/models/hooks";
import { testsSelectors } from "@/models/tests/selectors";
import { questionsSelectors } from "@/models/questions/selectors";
import { answersSelectors } from "@/models/answers/selectors";
import ErrorPage from "@/components/ErrorPage";

const ErrorControl = ({ children }) => {
  const testsError = useAppSelector(testsSelectors.selectError);
  const questionsError = useAppSelector(questionsSelectors.selectError);
  const answersError = useAppSelector(answersSelectors.selectError);
  const error =
    testsError?.error || questionsError?.error || answersError?.error;

  return error ? (
    <ErrorPage text={error === "not_found" ? "Test not found" : error} />
  ) : (
    children
  );
};

export default ErrorControl;
