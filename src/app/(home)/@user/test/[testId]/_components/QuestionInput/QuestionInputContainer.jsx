import QuestionInput from "./QuestionInput";

const QuestionInputContainer = ({ name, question, answers }) => {
  const type =
    question.question_type === "number"
      ? "number"
      : question.question_type === "single"
      ? "radio"
      : "checkbox";

  const rightAnswers =
    type === "number"
      ? [question.answer]
      : answers.reduce((answersAcc, answer) => {
          if (answer.is_right) {
            answersAcc = [...answersAcc, answer.text];
          }
          return answersAcc;
        }, []);

  const isQuestionSkip =
    (rightAnswers.length < 2 && question.question_type === "multiple") ||
    (rightAnswers.length >= 2 && question.question_type === "single");

  const validateAnswer = (value) => {
    const userAnswer = typeof value === "object" ? value : [value];
    let error;

    if (
      userAnswer.length !== rightAnswers.length ||
      userAnswer.every((value) => !rightAnswers.includes(value))
    ) {
      error = `Right answer: ${rightAnswers.join(", ")}`;
    }

    return error;
  };

  return (
    <QuestionInput
      name={name}
      type={type}
      isQuestionSkip={isQuestionSkip}
      answers={answers}
      validate={validateAnswer}
    />
  );
};

export default QuestionInputContainer;
