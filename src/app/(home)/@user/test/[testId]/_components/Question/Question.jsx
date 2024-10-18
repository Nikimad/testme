import cn from "classnames";
import QuestionInput from "../QuestionInput";

import s from "./Question.module.scss";

const Question = ({ question, type, isInvalid }) => (
  <div className={cn(s.question, { [s.question_wrong]: isInvalid } )}>
    <h3 className={s.question__title}>{question.title}</h3>
    <QuestionInput
      name={question.id}
      type={type}
      answer={question.answer}
      answers={question.answers}
    />
  </div>
);

export default Question;
