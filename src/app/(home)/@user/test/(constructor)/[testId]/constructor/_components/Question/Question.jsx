import QuestionField from "../QuestionField";
import s from "./Question.module.scss";

const Question = ({ question, isEdit, name, index, onEdit, onFinish }) => (
  <li className={s.question}>
    {!isEdit ? (
      <div className={s.question__controls}>
        <h4>{question.title}</h4>
        <button type="button" className="pill" onClick={onEdit}>
          Edit
        </button>
      </div>
    ) : (
      <QuestionField name={name} i={index} onFinish={onFinish} />
    )}
  </li>
);

export default Question;
