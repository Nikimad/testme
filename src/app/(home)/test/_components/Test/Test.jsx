"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import useAction from "@/hooks/useAction";
import { questionsSelectors } from "@/models/questions/selectors";
import { testsSelectors } from "@/models/tests/selectors";
import { testsActions } from "@/models/tests";
import Placeholder from "@/components/Placeholder";
import FormikWrapper from "../FormikWrapper";
import Questions from "../Questions";

const Test = () => {
  const { testId: id } = useParams();
  const isLoading = useSelector(testsSelectors.selectIsLoading);
  const questions = useSelector(questionsSelectors.selectQuestionsByTestId(id));

  const getTest = useAction(testsActions.getTest);

  useEffect(() => {
    if (!questions) getTest(id);
  }, []);

  return (
    <Placeholder isLoading={isLoading}>
      {questions ? (
        <FormikWrapper questions={questions}>
          <Questions questions={questions} />
        </FormikWrapper>
      ) : null}
    </Placeholder>
  );
};

export default Test;
