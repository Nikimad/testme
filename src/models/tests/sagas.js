import {
  all,
  call,
  put,
  takeEvery,
  delay,
  takeLatest,
} from "redux-saga/effects";
import { testsActions } from ".";
import { _delete, post, get } from "@/helpers/fetchWrapper";

const getTestsFetch = (query) => get(`tests${query ? `?${query}` : ""} `);

const postTest = (data) => post("tests", data);

const d = (id) => _delete(`tests/${id}`);

function* getTests({ payload }) {
  try {
    yield delay(400);
    const data = yield call(getTestsFetch, payload);
    yield put(testsActions.fetchSuccess(data));
  } catch (e) {
    yield put(testsActions.fetchReject(e));
  }
}

export default function* testsSaga() {
  yield takeLatest(testsActions.getTests, getTests);
}
