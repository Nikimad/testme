import BoxField from "@/components/BoxField";
import s from "./Answers.module.scss";

const Answers = ({ name, type, answers, validate }) => (
  <fieldset className={s.answers} aria-describedby={`${name}-error`}>
    <legend className="visually-hidden">Answers</legend>
    {answers.map((answer) => (
      <div key={answer.id} className={s.answers__answer}>
        <BoxField
          name={name}
          id={`answer_${answer.id}`}
          type={type === "single" ? "radio" : "checkbox"}
          value={answer.text}
          validate={validate}
        />
        <label htmlFor={`answer_${answer.id}`}>{answer.text}</label>
      </div>
    ))}
  </fieldset>
);

export default Answers;
