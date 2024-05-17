import s from "./Question.module.scss";

const Question = ({ questionId }) => {
  const question = {
    id: questionId,
    title: `Mock question ${questionId}`,
    answers: [
      {
        text: "Mock answer 1",
      },
      {
        text: "Mock answer 2",
      },
      {
        text: "Mock answer 3",
      },
      {
        text: "Mock answer 4",
      },
    ],
  };

  return (
    <>
      <h2>{question.title}</h2>
      <ul className={s.answers}>
        {question.answers.map((answer, i) => (
          <li key={i} className={s.answers__answer}>{answer.text}</li>
        ))}
      </ul>
    </>
  );
};

export default Question;
