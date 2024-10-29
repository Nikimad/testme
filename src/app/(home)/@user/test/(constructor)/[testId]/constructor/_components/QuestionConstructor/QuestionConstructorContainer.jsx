"use client";

import { useCallback, useState } from "react";
import { useAction, useAppSelector } from "@/models/hooks";
import { constructorSelectors } from "@/models/constructor/selectors";
import { useFormikContext } from "formik";
import { constructorActions } from "@/models/constructor";
import { REQUIERD_STRING } from "@/lib/messages";

const QuestionConstructorContainer = () => {
  const isLoading = useAppSelector(constructorSelectors.selectIsLoading);
  const error = useAppSelector(constructorSelectors.selectError);

  const {
    values: {
      question: { title, type: question_type },
    },
    setFieldValue,
    setFieldError,
  } = useFormikContext();

  const addQuestion = useAction(constructorActions.addQuestion);

  const handleAddQuestion = useCallback(() => {
    if (!title) return setFieldError("question.title", REQUIERD_STRING);
    setFieldError("question.title");
    addQuestion({ title, question_type });
  }, [REQUIERD_STRING, title, question_type, setFieldError, addQuestion]);

};
