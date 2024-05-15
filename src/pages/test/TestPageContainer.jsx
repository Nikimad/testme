import TestPage from "./TestPage";

const TestPageContainer = ({ params: { testId } }) => {
  const test = {
    title: "Test mock",
  };
  const questionsIds = [];
  const totalQuestions = questionsIds.length;

  return (
    <TestPage
      title={test.title}
      totalQuestions={totalQuestions}
      nextHref={`${testId}/question/${questionsIds[0]}`}
    />
  );
};

export default TestPageContainer;
