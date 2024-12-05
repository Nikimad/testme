import getSagaWrapper from "@/lib/getSagaWrapper";
import getOptimisticSaga from "@/lib/getOptimisticSaga";
import { call, put, takeLatest } from "redux-saga/effects";
import { answersActions } from ".";
import { api } from "@/lib/api";

const sagaWrapper = getSagaWrapper(answersActions);

export const createAnswer = sagaWrapper(function* createAnswerSaga({
  payload,
}) {
  const [error, answer] = yield call(api.createAnswer, payload);
  yield answer &&
    put(
      answersActions.addAnswer({
        questionId: payload.questionId,
        ...answer,
      })
    );
  return error;
});

const editAnswer = sagaWrapper(getOptimisticSaga(api.editAnswer));
const insertAnswer = sagaWrapper(getOptimisticSaga(api.insertAnswer));
const deleteAnswer = sagaWrapper(getOptimisticSaga(api.deleteAnswer));

export default function* answersSaga() {
  yield takeLatest(answersActions.createAnswer, createAnswer);
  yield takeLatest(answersActions.editAnswer, editAnswer);
  yield takeLatest(answersActions.insertAnswer, insertAnswer);
  yield takeLatest(answersActions.deleteAnswer, deleteAnswer);
}
