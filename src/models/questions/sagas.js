import { call, put, takeLatest } from "redux-saga/effects";
import getSagaWrapper from "@/lib/getSagaWrapper";
import getOptimisticSaga from "@/lib/getOptimisticSaga";
import { api } from "@/lib/api";
import { questionsActions } from ".";
import { createAnswer } from "../answers/sagas";

const sagaWrapper = getSagaWrapper(questionsActions);

const handlePayload = ({ testId, ...question }) => ({
  testId,
  ...question,
  ...(question.question_type === "number" ? { answers: [] } : { answer: null }),
});

export const createQuestion = sagaWrapper(function* createQuestionSaga({
  payload,
}) {
  const [error, question] = yield call(
    api.createQuestion,
    handlePayload(payload)
  );

  if (question && question.question_type !== "number") {
    for (let i = 0; i < payload.answers.length; i += 1) {
      yield call(createAnswer, {
        payload: {
          questionId: question.id,
          answer: payload.answers[i],
        },
      });
    }
  }

  yield question &&
    put(
      questionsActions.addQuestion({
        testId: payload.testId,
        id: question.id,
        title: question.title,
        question_type: question.question_type,
        answer: question.answer,
      })
    );

  return error;
});

const editQuestion = sagaWrapper(
  getOptimisticSaga(api.editQuestion, handlePayload)
);
const deleteQuestion = sagaWrapper(
  getOptimisticSaga(api.deleteQuestion)
);

export default function* questionsSaga() {
  yield takeLatest(questionsActions.createQuestion, createQuestion);
  yield takeLatest(questionsActions.editQuestion, editQuestion);
  yield takeLatest(questionsActions.deleteQuestion, deleteQuestion);
}
