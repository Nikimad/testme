"use client";

import { useAppSelector } from "@/models/hooks";
import { useField } from "formik";
import { questionsSelectors } from "@/models/questions/selectors";
import QuestionsList from "./QuestionsList";

const QuestionsListContainer = ({ test }) => {
  const questions = useAppSelector(questionsSelectors.selectAllByTestId(test.id));

  const [{ value: questionsStore }] = useField("questions");

  return (
    <QuestionsList questionsStore={questionsStore} questions={questions} />
  );
};

export default QuestionsListContainer;
