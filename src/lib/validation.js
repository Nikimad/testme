import * as Yup from "yup";
import * as messages from "./messages";

export const getValidationSchema = (schema) => Yup.object(schema);

const requiredString = Yup.string().required(messages.REQUIERD);

export const getAuthorizationValidationSchema = () => getValidationSchema({
  username: requiredString,
  password: requiredString.when("isSignup", {
    is: true,
    then: (schema) => schema.min(6, messages.MIN_PASSWORD(6)),
  }),
  password_confirmation: Yup.mixed().when("isSignup", {
    is: true,
    then: () =>
      requiredString.oneOf([Yup.ref("password")], messages.PASSWORD_MATCH),
  }),
});

export const getTestValidationSchema = () => getValidationSchema({
  title: requiredString,
});

export const getQuestionValidationSchema = () => getValidationSchema({
  title: requiredString,
  answer: Yup.mixed().when("question_type", {
    is: (value) => value === "number",
    then: () =>
      Yup.number().typeError(messages.NUMBER).required(messages.REQUIERD),
  }),
  answers: Yup.array().when("question_type", {
    is: (value) => value !== "number",
    then: (schema) =>
      schema.test({
        name: "Is there a right answer?",
        message: messages.RIGHTANSWER_REQUIRED,
        test: (answers) => answers.some(({ is_right }) => is_right),
      }),
  }),
});

export const getAnswersValidationSchcema = (initialValues, answers) =>
  getValidationSchema({
    text: requiredString.test({
      name: "Only unique answers",
      message: messages.UNIQUE_ANSWER,
      test: (answerText) =>
        !answers.some(({ text }) => answerText === text) ||
        answerText === initialValues?.text,
    }),
    is_right: Yup.boolean().test({
      name: "Question must have atleast one right answer",
      message: messages.RIGHTANSWER_REQUIRED,
      test: (is_right) =>
        !(
          answers.filter((answer) => answer.is_right).length <= 1 &&
          initialValues?.is_right &&
          !is_right
        ),
    }),
  });
