import { useCallback, useRef } from "react";
import { useAction } from "@/models/hooks";
import { testsActions } from "@/models/tests";
import TestProvider from "./TestProvider";

const TestProviderContainer = ({
  test,
  questions,
  answers,
  onDelete,
  children,
}) => {
  const { current: initialValues } = useRef({
    title: test?.title || "",
    questions:
      questions?.map((question) => ({
        title: question.title || "",
        question_type: question.question_type || "single",
        answer: question.answer || "",
        answers:
          answers?.filter(({ questionId }) => questionId === question.id) || [],
      })) || [],
  });

  const createTest = useAction(testsActions.createTest);
  const editTest = useAction(testsActions.editTest);
  const deleteTest = useAction(testsActions.deleteTest);

  const handleCreateTest = useCallback(
    ({ title, questions }) => createTest({ title, question: questions[0] }),
    [createTest]
  );
  const handleEditTest = useCallback(
    ({ title }) =>
      test.title !== title && editTest({ id: test.id, test: { title } }),
    [test, editTest]
  );

  const handleSubmit = useCallback(
    (newTest) =>
      test.id ? handleEditTest(newTest) : handleCreateTest(newTest),
    [test, handleEditTest, handleCreateTest]
  );

  const handleReset = useCallback(() => {
    onDelete();
    deleteTest(test.id);
  }, [test, deleteTest, onDelete]);

  return (
    <TestProvider
      initialValues={initialValues}
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      {children}
    </TestProvider>
  );
};

export default TestProviderContainer;
