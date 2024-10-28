"use client";

import { useCallback, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAction, useAppSelector } from "@/models/hooks";

import { REQUIERD_STRING } from "@/lib/messages"

import { constructorSelectors } from "@/models/constructor/selectors";
import { constructorActions } from "@/models/constructor";

import { Form, Formik } from "formik";

const ConstructorContainer = ({ children }) => {
  const { testId } = useParams();

  const test = useAppSelector(constructorSelectors.selectTest);
  const questions = useAppSelector(constructorSelectors.selectQuestions);

  const { replace } = useRouter();

  const addTests = useAction(constructorActions.addTest);
  const editTest = useAction(constructorActions.editTest);
  const deleteTest = useAction(constructorActions.deleteTest);

  const handleSubmit = useCallback(
    ({ title }, { setFieldError }) => {
      if (!title) return setFieldError("title", REQUIERD_STRING);
      if (!test.id) {
        return addTests({ title });
      }
      if (title !== test.title) {
        return editTest({ title, id: test.id });
      }
    },
    [test, addTests, editTest]
  );

  const handleReset = useCallback(() => {
    deleteTest(test.id);
    replace("/");
  }, [test, deleteTest, replace]);

  useEffect(() => {
    if (!testId && test.id) replace(`/test/${test.id}/constructor`);
  }, [test, testId, replace]);

  return (
    <Formik
      initialStatus={{ questionId: null }}
      initialValues={{
        title: test.title,
        questions,
        question: {
          title: "",
          question_type: "single"
        },
      }}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <Form>{children}</Form>
    </Formik>
  );
};

export default ConstructorContainer;
