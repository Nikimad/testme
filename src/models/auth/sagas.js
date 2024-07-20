import { call, put, takeEvery, delay, takeLatest } from "redux-saga/effects";
import { authActions } from ".";
import { _delete, post, get } from "@/helpers/fetchWrapper";

const sin = (data) => post("signin", data);
const sup = (data) => post("signup", data);
const lout = () => _delete("logout");
const gu = () => get("users/current");


function* signup({ payload }) {
  try {
    const user = yield call(sup, { ...payload, is_admin: true });
  } catch (e) {
    yield put(authActions.fetchReject(e));
    yield delay();
    yield put(authActions.resetError());
  }
}

function* signin({ payload }) {
  try {
    const user = yield call(sin, payload);
    yield put(authActions.fetchSuccess(user));
  } catch (e) {
    yield put(authActions.fetchReject(e));
    yield delay();
    yield put(authActions.resetError());
  }
}

function* getUser() {
  try {
    const user = yield call(gu);
    yield put(authActions.fetchSuccess(user));
  } catch (e) {
    yield put(authActions.fetchReject(e));
    yield delay();
    yield put(authActions.resetError());
  }
}

function* logout() {
  try {
    const { success } = yield call(lout);
    if (success) {
      yield put(authActions.fetchSuccess());
    }
  } catch (e) {}
}

export default function* authSaga() {
  yield takeEvery(authActions.signup, signup);
  yield takeLatest(authActions.signin, signin);
  yield takeEvery(authActions.getUser, getUser);
  yield takeEvery(authActions.logout, logout);
}
