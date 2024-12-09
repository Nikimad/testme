"use client";

import { useField } from "formik";
import QuestionsList from "./QuestionsList";

const QuestionsListContainer = ({ questions }) => {
  const [{ value: questionsStore }] = useField("questions");

  return (
    <QuestionsList questionsStore={questionsStore} questions={questions} />
  );
};

export default QuestionsListContainer;
