"use client";

import { useAppSelector } from "@/models/hooks";
import { testsSelectors } from "@/models/tests/selectors";
import { questionsSelectors } from "@/models/questions/selectors";
import { Formik, Form } from "formik";
import Question from "../Question";
import Controls from "../Controls";
import s from "./Test.module.scss";
import ErrorPage from "@/components/ErrorPage";

const Test = ({ params: { testId } }) => {
  const test = useAppSelector((state) =>
    testsSelectors.selectById(state, testId)
  );
  const questions = useAppSelector(
    questionsSelectors.selectAllByTestId(test?.id)
  );

  const defaultState = questions.reduce(
    (state, { id }) => {
      state.initialValues[id] = "";
      state.initialTouched[id] = true;
      return state;
    },
    {
      initialValues: {},
      initialTouched: {},
    }
  );

  return testId != test?.id ? (
    <ErrorPage text="Test not found" />
  ) : (
    <Formik
      initialTouched={defaultState.initialTouched}
      initialValues={defaultState.initialValues}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={() => {}}
    >
      <Form className={s.test}>
        <h2 className={s.test__title}>{test.title}</h2>
        {questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
        <Controls />
      </Form>
    </Formik>
  );
};

export default Test;
