import ControlButton from "../ControlButton";
import s from "./Question.module.scss";
import QuestionEditor from "../QuestionEditor";

const Question = ({
  questionId,
  position,
  isLoading,
  isEdit,
  question,
  answers,
  onClick,
  onFinish,
}) => (
  <li className={s.question}>
    {!isEdit ? (
      <>
        <h4 className="m_0">{question.title}</h4>
        {question.question_type === "number" ? (
          <p>Answer: {question.answer}</p>
        ) : (
          <>
            <h5 className="m_0">Answers</h5>
            {answers.length > 0 ? (
              <ul className={s.question__answers}>
                {answers.map((answer, i) => (
                  <li key={i}>{answer.text}</li>
                ))}
              </ul>
            ) : (
              <p>Answers is loading...</p>
            )}
          </>
        )}
        <div className="justify_sb">
          {isLoading ? (
            <p>Question is loading...</p>
          ) : (
            <ControlButton type="button" className="pill" onClick={onClick}>
              Edit
            </ControlButton>
          )}
        </div>
      </>
    ) : (
      <QuestionEditor
        questionId={questionId}
        position={position}
        onEditFinish={onFinish}
      />
    )}
  </li>
);

export default Question;
