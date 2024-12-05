"use client";

import Answer from "../Answer";
import Answers from "../Answers";

const QuestionInput = ({ name, type, isQuestionSkip, answers, validate }) =>
  isQuestionSkip ? (
    <p>
      Sorry, the question has no answer yet, skipping this question will not
      affect the final results
    </p>
  ) : type === "number" ? (
    <Answer name={name} validate={validate} />
  ) : (
    <Answers name={name} type={type} answers={answers} validate={validate} />
  );

export default QuestionInput;
