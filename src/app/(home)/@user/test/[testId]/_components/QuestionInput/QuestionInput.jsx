"use client";

import Answer from "../Answer";
import Answers from "../Answers";
import { ErrorMessage } from "formik";
import s from "./QuestionInput.module.scss";

const QuestionInput = ({ name, type, answer, answers }) => {
  const rightAnswers = [
    answer,
    ...answers.reduce((rightAnswer, { is_right, text }) => {
      if (is_right) {
        rightAnswer = [...rightAnswer, text];
      }
      return rightAnswer;
    }, []),
  ].filter(Boolean);

  const validateAnswer = (value) => {
    const userAnswer = typeof value === "object" ? value : [value];
    let error;
    if (
      userAnswer.length !== rightAnswers.length ||
      userAnswer.every((value) => !rightAnswers.includes(value))
    ) {
      error = `Right answer: ${rightAnswers.join(", ")}`;
    }
    return error;
  };

  return (
    <>
      {type === "number" ? (
        <Answer name={name} validate={validateAnswer} />
      ) : (
        <Answers
          name={name}
          type={type}
          answers={answers}
          validate={validateAnswer}
        />
      )}
      <ErrorMessage
        name={name}
        aria-live="polite"
        id={`${name}-error`}
        className={s.input__error}
        component="span"
      />
    </>
  );
};

export default QuestionInput;
