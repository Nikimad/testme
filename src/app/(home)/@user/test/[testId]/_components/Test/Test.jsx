"use client";

import { useParams } from "next/navigation";
import { useAppSelector } from "@/models/hooks";
import { testsSelectors } from "@/models/tests/selectors";
import { Formik, Form } from "formik";
import Question from "../Question";
import Controls from "../Controls";
import s from "./Test.module.scss";

const Test = () => {
  const { testId } = useParams();

  const test = useAppSelector(testsSelectors.selectById(testId));

  const defaultState = test.questions.reduce(
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


  return (
    <Formik
      initialTouched={defaultState.initialTouched}
      initialValues={defaultState.initialValues}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <Form className={s.test}>
        <h2 className={s.test__title}>{test.title}</h2>
        {test.questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
        <Controls />
      </Form>
    </Formik>
  );
};

export default Test;
