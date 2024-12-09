"use client";

import cn from "classnames";
import Choice from "@/components/Choice";
import { Field } from "formik";
import s from "./Answers.module.scss";

const Answers = ({ name, type, answers, validate }) => (
  <fieldset className={s.answers} aria-describedby={`${name}-error`}>
    <legend className="visually-hidden">Answers</legend>
    {answers.map((answer) => (
      <Choice
        key={answer.id}
        label={answer.text}
        wrapperClassName={s.answers__answer}
        className={s.answers__answer__choice}
      >
        <Field
          name={name}
          id={`answer_${answer.id}`}
          type={type}
          value={answer.text}
          validate={validate}
          className={cn("visually-hidden", s.answers__answer__input)}
        />
      </Choice>
    ))}
  </fieldset>
);

export default Answers;
