import { call, put, takeLatest } from "redux-saga/effects";
import getSagaWrapper from "@/lib/getSagaWrapper";
import getOptimisticSaga from "@/lib/getOptimisticSaga";
import normolizeData from "@/lib/normolizeData";
import { api } from "@/lib/api";
import { testsActions } from ".";
import { questionsActions } from "../questions";
import { answersActions } from "../answers";
import { createQuestion } from "../questions/sagas";

const sagaWrapper = getSagaWrapper(testsActions);

const getTests = sagaWrapper(function* getTestsSaga({ payload }) {
  yield put(testsActions.setQuery(payload));
  const [error, data] = yield call(api.getTests, { query: payload });
  if (data) {
    const normolizedData = normolizeData(data.tests);
    yield put(
      testsActions.setTests({
        tests: normolizedData.tests.all,
        meta: data.meta,
      })
    );
    yield put(questionsActions.setQuestions(normolizedData.questions.all));
    yield put(answersActions.setAnswers(normolizedData.answers.all));
  }
  return error;
});

const createTest = sagaWrapper(function* createTestSaga({ payload }) {
  const [error, test] = yield call(api.createTest, payload);
  yield test && put(testsActions.addTest(test));
  yield payload.question &&
    call(createQuestion, {
      payload: { testId: test.id, ...payload.question },
    });
  return error;
});

const editTest = sagaWrapper(getOptimisticSaga(api.editTest));
const deleteTest = sagaWrapper(getOptimisticSaga(api.deleteTest));

export default function* testsSaga() {
  yield takeLatest(testsActions.getTests, getTests);
  yield takeLatest(testsActions.createTest, createTest);
  yield takeLatest(testsActions.editTest, editTest);
  yield takeLatest(testsActions.deleteTest, deleteTest);
}
