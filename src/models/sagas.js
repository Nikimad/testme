import { all } from "redux-saga/effects";
import authSaga from "./auth/sagas";
import testsSaga from "./tests/sagas";
import questionsSaga from "./questions/sagas";

function* rootSaga() {
  yield all([authSaga(), testsSaga(), questionsSaga()]);
}

export default rootSaga;
