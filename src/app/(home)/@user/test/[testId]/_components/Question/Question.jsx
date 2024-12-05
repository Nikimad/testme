import cn from "classnames";
import QuestionInput from "../QuestionInput";
import ErrorMessage from "@/components/ErrorMessage";
import s from "./Question.module.scss";

const Question = ({ question, answers, isInvalid }) => (
  <div className={cn(s.question, { [s.question_wrong]: isInvalid })}>
    <h3 className={s.question__title}>{question.title}</h3>
    <QuestionInput name={question.id} question={question} answers={answers} />
    <ErrorMessage name={question.id} id={`${question.id}-error`} />
  </div>
);

export default Question;
