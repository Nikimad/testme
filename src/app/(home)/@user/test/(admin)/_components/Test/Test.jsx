import TestProvider from "../TestProvider";
import TestForm from "../TestForm";
import QuestionsList from "../QuestionsList";

const Test = ({ test, questions, answers, onDelete }) => (
  <TestProvider
    test={test}
    questions={questions}
    answers={answers}
    onDelete={onDelete}
  >
    <div className="form-grid">
      <TestForm test={test} />
      <QuestionsList questions={questions} />
    </div>
  </TestProvider>
);

export default Test;
