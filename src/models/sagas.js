import { all } from "redux-saga/effects";
import authSaga from "./auth/sagas";
import testsSaga from "./tests/sagas";

function* rootSaga() {
  yield all([authSaga(), testsSaga()]);
}

export default rootSaga;
