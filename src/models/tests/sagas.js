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

const getTestsFetch = (params) =>
  get(
    `tests${
      params.query
        ? `?${params.query}`
        : Object.hasOwn(params, "id")
        ? `/${params.id}`
        : ""
    }`
  );

const postTest = (data) => post("tests", data);
const postQuestion = ({ id, ...data }) => post(`/tests/${id}/questions`, data);
const postAnswer = ({ id, ...data }) => post(`/questions/${id}/answers`, data);

const d = (id) => _delete(`tests/${id}`);
const dq = (id) => _delete(`questions/${id}`);

function* getTests({ payload }) {
  try {
    yield delay(400);
    const data = yield call(getTestsFetch, { query: payload });
    yield put(testsActions.fetchSuccess(data));
  } catch (e) {
    yield put(testsActions.fetchReject(e));
  }
}

function* getTest({ payload }) {
  try {
    const test = yield call(getTestsFetch, { id: payload });
    yield put(testsActions.fetchSuccess(test));
  } catch (e) {
    yield put(testsActions.fetchReject(e));
  }
}

export default function* testsSaga() {
  yield takeLatest(testsActions.getTests, getTests);
  yield takeLatest(testsActions.getTest, getTest);
}
