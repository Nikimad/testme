import { _delete, _patch, _post } from "@/lib/_fetch";
import { call, put, takeLatest } from "redux-saga/effects";
import { constructorActions } from ".";
import { constructor as constructorAPI } from "@/lib/api";
import getSagaWrapper from "@/lib/getSagaWrapper";

const sagaWrapper = getSagaWrapper(constructorActions);

const addTest = sagaWrapper(function* addTestSaga({ payload }) {
  const [error, test] = yield call(constructorAPI.addTest, payload);
  yield test && put(constructorActions.addTestSuccess(test));
  return error;
});

const editTest = sagaWrapper(function* editTestSaga({ payload }) {
  const [error] = yield call(constructorAPI.editTest, payload);
  return error;
});

const deleteTest = sagaWrapper(function* deleteTestSaga({ payload }) {
  const [error] = yield call(constructorAPI.deleteTest, payload);
  return error;
});

const addQuestion = sagaWrapper(function* addQuestionSaga({ payload }) {
  const [error, question] = yield call(constructorAPI.addQuestion, payload);
  yield question && put(constructorActions.addQuestionSuccess(question));
  return error;
});

const editQuestion = sagaWrapper(function* editQuestionSaga({ payload }) {
  const [error] = yield call(constructorAPI.editQuestion, payload);
  return error;
});

const deleteQuestion = sagaWrapper(function* deleteQuestionSaga({ payload }) {
  const [error] = yield call(constructorAPI.deleteQuestion, payload);
  return error;
});

export default function* constructorSaga() {
  yield takeLatest(constructorActions.addTest, addTest);
  yield takeLatest(constructorActions.editTest, editTest);
  yield takeLatest(constructorActions.deleteTest, deleteTest);
  yield takeLatest(constructorActions.addQuestion, addQuestion);
  yield takeLatest(constructorActions.editQuestion, editQuestion);
  yield takeLatest(constructorActions.deleteQuestion, deleteQuestion);
}
