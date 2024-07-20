import Question from "../Question";

const Questions = ({ questions }) =>
  questions.length > 0 ? (
    questions.map((question) => (
      <Question key={question.id} question={question} />
    ))
  ) : (
    <p>No questions yet</p>
  );

export default Questions;
