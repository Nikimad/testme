"use client";

import { useCallback } from "react";
import { useFormikContext } from "formik";
import { useAction } from "@/models/hooks";
import { questionsActions } from "@/models/questions";
import QuestionDraft from "./QuestionDraft";

const QuestionDraftContainer = ({ test, children }) => {
  const {
    values: { title, questions },
    submitForm: submitTestForm,
    resetForm: resetTestForm,
    setFieldValue: setTestFieldValue,
  } = useFormikContext();

  const createQuestion = useAction(questionsActions.createQuestion);

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

  return (
    <QuestionDraft
      isTestDirty={test.title !== title}
      onSubmit={handleCreateQuestion}
      onReset={resetTestForm}
    >
      {children}
    </QuestionDraft>
  );
};

export default QuestionDraftContainer;
