import { all } from "redux-saga/effects";
import authhorizationSaga from "./authorization/sagas";
import testsSaga from "./tests/sagas";

function* rootSaga() {
  yield all([authhorizationSaga(), testsSaga()]);
}

export default rootSaga;
