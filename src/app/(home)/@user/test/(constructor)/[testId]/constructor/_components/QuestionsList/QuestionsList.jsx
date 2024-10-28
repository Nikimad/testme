"use client";

import { useFormikContext } from "formik";
import Question from "../Question";

const QuestionsList = () => {
  const {
    values: { questions },
  } = useFormikContext();

  return questions.map((question, i) => (
    <Question
      key={question.id}
      index={i}
      name={`questions[${i}]`}
      question={questions[i]}
    />
  ));
};

export default QuestionsList;
