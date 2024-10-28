"use client";

import { useFormikContext } from "formik";
import QuestionField from "../QuestionField";

const QuestionEditor = () => {
  const {
    status: { questionId },
    values: { questions },
  } = useFormikContext();

  const { question, index } = questions.reduce((acc, question, i) => {
    if (question.id == questionId) {
        acc.question = question;
        acc.index = i;
    }
    return acc;
  }, {
    question: null,
    index: null,
  });

  const name = questionId
    ? `questions[${index}]`
    : "question";

  return <QuestionField name={name} index={index} question={question} />;
};

export default QuestionEditor;
