"use client";

import Answer from "../Answer";
import Answers from "../Answers";
import QuestionSkip from "../QuestionSkip";

const QuestionInput = ({ name, type, isQuestionSkip, answers, validate }) =>
  isQuestionSkip ? (
    <QuestionSkip name={name} />
  ) : type === "number" ? (
    <Answer name={name} validate={validate} />
  ) : (
    <Answers name={name} type={type} answers={answers} validate={validate} />
  );

export default QuestionInput;
