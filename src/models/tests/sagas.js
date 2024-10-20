import { call, put, takeLatest } from "redux-saga/effects";
import { tests as testsAPI } from "@/lib/api";
import { testsActions } from ".";

function* getTests({ payload }) {
  try {
    yield put(testsActions.start());
    yield put(testsActions.setQuery(payload))
    const data = yield call(testsAPI.getTests, { query: payload });
    yield put(
      testsActions.success({ ...data, action: "getTests" })
    );
  } catch (error) {
    yield put(testsActions.reject(error));
  } finally {
    yield put(testsActions.finish());
  }
}

function* getTest({ payload }) {
  try {
    yield put(testsActions.start());
    const test = yield call(testsAPI.getTest, { id: payload });
    yield put(testsActions.success({ test, action: "getTest" }));
  } catch (error) {
    yield put(testsActions.reject(error));
  } finally {
    yield put(testsActions.finish());
  }
}

export default function* testsSaga() {
  yield takeLatest(testsActions.getTests, getTests);
  yield takeLatest(testsActions.getTest, getTest);
}
