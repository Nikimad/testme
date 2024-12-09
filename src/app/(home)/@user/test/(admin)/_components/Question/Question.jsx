import QuestionForm from "../QuestionForm";
import QuestionProvider from "../QuestionProvider";
import s from "./Question.module.scss";

const Question = ({
  questionId,
  position,
  isLoading,
  isEdit,
  question,
  answers,
  onClick,
  onEditFinish,
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
            <button type="button" className="pill" onClick={onClick}>
              Edit
            </button>
          )}
        </div>
      </>
    ) : (
      <QuestionProvider
        questionId={questionId}
        position={position}
        onEditFinish={onEditFinish}
      >
        <QuestionForm questionId={questionId} position={position}>
          <div className="justify_sb">
            <button type="submit" className="pill">
              Done
            </button>
            <button type="reset" className="interactivetext">
              Delete
            </button>
          </div>
        </QuestionForm>
      </QuestionProvider>
    )}
  </li>
);

export default Question;
