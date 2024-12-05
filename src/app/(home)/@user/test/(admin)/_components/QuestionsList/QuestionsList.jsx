import Question from "../Question";

const QuestionsList = ({ questionsStore, questions }) =>
  questionsStore.length > 0 ? (
    <ul className="form-grid">
      {questionsStore.map((question, i) => (
        <Question
          key={questions[i]?.id || i}
          isLoading={!questions[i]}
          question={question}
          questionId={questions[i]?.id}
          position={i}
          name={`questions[${i}]`}
        />
      ))}
    </ul>
  ) : (
    <p>There are no questions yet</p>
  );

export default QuestionsList;
