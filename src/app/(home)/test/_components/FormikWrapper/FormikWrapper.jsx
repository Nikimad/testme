import { useCallback } from "react";
import { useParams } from "next/navigation";
import * as Yup from "yup";
import { Formik } from "formik";
import Form from "../Form";
import Controls from "../Controls";

const FormikWrapper = ({ questions, children }) => {
  const { testId } = useParams();

  const { initialValues, initialTouched } = questions?.reduce((acc, { id }) => {
    acc.initialValues[id] = "";
    acc.initialTouched[id] = true;
    return acc;
  }, {
    initialValues: {},
    initialTouched: {},
  });

  const defaultInitialState = {
    answers: initialValues,
    status: "idle",
    errors: {},
    touched: initialTouched,
  };

  const getInitialState = useCallback(() => {
    try {
      const persistentTestData = JSON.parse(localStorage.getItem(testId));
      return persistentTestData;
    } catch {
      return;
    }
  }, [defaultInitialState, questions, testId]);

  const getValidationSchema = useCallback(() => {
    return Yup.object(
      questions?.reduce((schema, question) => {
        const rightAnswers =
          question.question_type === "number"
            ? [question.answer]
            : question.answers.reduce((answers, answer) => {
                if (answer.is_right) {
                  answers = [...answers, answer.text];
                }
                return answers;
              }, []);

        schema[question.id] = Yup.mixed().test(
          "Check answer",
          `Right ${
            question.question_type === "multiple" ? "answers" : "answer"
          }: ${rightAnswers.join(", ")}`,
          (value) => {
            const answers = typeof value === "object" ? value : [value];

            return (
              answers.length === rightAnswers.length &&
              answers.every((value) => rightAnswers.includes(value))
            );
          }
        );

        return schema;
      }, {})
    );
  }, [questions]);

  const initialState = getInitialState() ?? defaultInitialState;
  const validationSchema = getValidationSchema();

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialState.answers}
      initialStatus={initialState.status}
      initialErrors={initialState.errors}
      initialTouched={initialTouched}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={() => {}}
    >
      <Form id={testId}>
        {children}
        <Controls defaulInitialState={defaultInitialState} />
      </Form>
    </Formik>
  );
};

export default FormikWrapper;
