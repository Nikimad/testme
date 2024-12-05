"use client";

import { useCallback } from "react";
import { useFormikContext } from "formik";
import { useAction } from "@/models/hooks";
import { questionsActions } from "@/models/questions";
import QuestionEditor from "./QuestionEditor";

const QuestionEditorContainer = ({ questionId, position, onEditFinish }) => {
  const {
    values: { questions },
    setFieldValue,
  } = useFormikContext();

  const storedQuestion = questions[position];

  const editQuestion = useAction(questionsActions.editQuestion);
  const deleteQuestion = useAction(questionsActions.deleteQuestion);

  const editStoredQuestion = useCallback(
    (editedQuestion) => setFieldValue(`questions[${position}]`, editedQuestion),
    [setFieldValue]
  );
  const deleteStoredQuestion = useCallback(
    () =>
      setFieldValue(
        "questions",
        questions.filter((_, i) => i !== position)
      ),
    [position, questions, setFieldValue]
  );

  const handleEditQuestion = useCallback(
    (editedQuestion) => {
      if (
        storedQuestion.title !== editedQuestion.title ||
        storedQuestion.question_type !== editedQuestion.question_type ||
        storedQuestion.answer !== editedQuestion.answer
      )
        editQuestion({ id: questionId, ...editedQuestion });
      editStoredQuestion(editedQuestion);
      onEditFinish();
    },
    [questionId, storedQuestion, editQuestion, editStoredQuestion, onEditFinish]
  );

  const handleDeleteQuestion = useCallback(() => {
    deleteQuestion(questionId);
    deleteStoredQuestion();
  }, [questionId, deleteQuestion, deleteStoredQuestion]);

  return (
    <QuestionEditor
      questionId={questionId}
      name={`questions[${position}]`}
      initialValues={questions[position]}
      onSubmit={handleEditQuestion}
      onReset={handleDeleteQuestion}
    />
  );
};

export default QuestionEditorContainer;
