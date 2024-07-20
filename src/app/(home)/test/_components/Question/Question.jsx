import cn from "classnames";
import Input from "@/components/Input";
import BoxField from "@/components/BoxField";
import { ErrorMessage } from "formik";
import s from "./Question.module.scss";

const Question = ({ question, isInvalid, isDisabled }) => (
  <div className={cn(s.question, { [s.question_wrong]: isInvalid })}>
    <h2 className={s.question__title}>{question.title}</h2>
    {question.question_type !== "number" ? (
      question.answers.map(({ text, id }) => (
        <label key={id} className={s.question__answer}>
          <BoxField
            className={cn({ [s.question__field_disabled]: isDisabled })}
            disabled={isDisabled}
            type={question.question_type === "single" ? "radio" : "checkbox"}
            name={question.id}
            value={text}
          />
          <span>{text}</span>
        </label>
      ))
    ) : (
      <Input
        className={cn({ [s.question__field_disabled]: isDisabled })}
        disabled={isDisabled}
        id={question.id}
        type="number"
        name={question.id}
      />
    )}
    <span className={s.question__rightanswer}>
      <ErrorMessage name={question.id} />
    </span>
  </div>
);

export default Question;
