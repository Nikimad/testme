"use client";

import { useCallback } from "react";
import { useAction, useAppSelector } from "@/models/hooks";
import { questionsSelectors } from "@/models/questions/selectors";
import { answersSelectors } from "@/models/answers/selectors";
import { testsActions } from "@/models/tests";
import TestRedactorProvider from "./TestRedactorProvider";

const TestRedactorProviderContainer = ({ test, onDelete }) => {
  const questions = useAppSelector(
    questionsSelectors.selectAllByTestId(test.id)
  );
  const answers = useAppSelector(answersSelectors.selectAll);

  const initialValues = {
    ...test,
    questions: questions.map((question) => ({
      ...question,
      answers: answers.filter(({ questionId }) => questionId === question.id),
    })),
  };

  const createTest = useAction(testsActions.createTest);
  const editTest = useAction(testsActions.editTest);
  const deleteTest = useAction(testsActions.deleteTest);

  const handleSubmit = useCallback(
    ({ title, questions }) => {
      if (!test.id) return createTest({ title, question: questions[0] });
      if (test.title !== title) editTest({ id: test.id, test: { title } });
    },
    [test, createTest, editTest]
  );

  const handleReset = useCallback(() => {
    onDelete();
    deleteTest(test.id);
  }, [test, deleteTest, onDelete]);

  return (
    <TestRedactorProvider
      test={test}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      onReset={handleReset}
    />
  );
};

export default TestRedactorProviderContainer;
