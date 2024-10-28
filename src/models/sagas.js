import { all } from "redux-saga/effects";
import constructorSaga from "./constructor/sagas";
import authhorizationSaga from "./authorization/sagas";
import testsSaga from "./tests/sagas";

function* rootSaga() {
  yield all([constructorSaga(), authhorizationSaga(), testsSaga()]);
}

export default rootSaga;
