"use client";

import { useCallback } from "react";
import { useFormikContext } from "formik";
import { useAction } from "@/models/hooks";
import { questionsActions } from "@/models/questions";
import QuestionProvider from "./QuestionProvider";

const QuestionProviderContainer = ({ test, questionId, position, onEditFinish, children }) => {
  const {
    values: { title, questions },
    submitForm: submitTestForm,
    resetForm: resetTestForm,
    setFieldValue: setTestFieldValue,
  } = useFormikContext();

  const createQuestion = useAction(questionsActions.createQuestion);
  const editQuestion = useAction(questionsActions.editQuestion);
  const deleteQuestion = useAction(questionsActions.deleteQuestion);

  const storedQuestion = questions[position];

  const handleCreateQuestion = useCallback(
    (
      { title, question_type, answer, answers },
      { setFieldValue: setFieldQuestionValue }
    ) => {
      const question = {
        title,
        question_type,
        ...(question_type === "number"
          ? { answers: [], answer }
          : { answer: "", answers }),
      };

      if (title) {
        setTestFieldValue("questions", [...questions, question]);
        setFieldQuestionValue("title", "");
        setFieldQuestionValue("answer", "");
        setFieldQuestionValue("answers", []);
      }

      test.id && createQuestion({ testId: test.id, ...question });

      submitTestForm();
    },
    [test, title, questions, createQuestion, submitTestForm, setTestFieldValue]
  );

  const handleEditQuestion = useCallback(
    (editedQuestion) => {
      if (
        storedQuestion.title !== editedQuestion.title ||
        storedQuestion.question_type !== editedQuestion.question_type ||
        (storedQuestion.answer !== editedQuestion.answer &&
          editedQuestion.answer)
      )
        editQuestion({ id: questionId, ...editedQuestion });
      setTestFieldValue(`questions[${position}]`, editedQuestion);
      onEditFinish();
    },
    [questionId, storedQuestion, editQuestion, setTestFieldValue, onEditFinish]
  );

  const handleDeleteQuestion = useCallback(() => {
    deleteQuestion(questionId);
    setTestFieldValue(
      "questions",
      questions.filter((_, i) => i !== position)
    );
  }, [questionId, position, questions, deleteQuestion, setTestFieldValue]);

  const handleSubmit = useCallback(
    (...args) =>
      questionId ? handleEditQuestion(...args) : handleCreateQuestion(...args),
    [questionId, handleCreateQuestion, handleEditQuestion]
  );
  const handleReset = useCallback(
    () => (questionId ? handleDeleteQuestion() : resetTestForm()),
    [questionId, handleDeleteQuestion, resetTestForm]
  );

  return (
    <QuestionProvider
      initialStatus={{ questionId }}
      initialValues={storedQuestion}
      onSubmit={handleSubmit}
      onReset={handleReset}
      children={children}
    />
  );
};

export default QuestionProviderContainer;
