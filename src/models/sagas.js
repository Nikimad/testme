import { all } from "redux-saga/effects";
import authhorizationSaga from "./authorization/sagas";
import testsSaga from "./tests/sagas";
import questionsSaga from "./questions/sagas";
import answersSaga from "./answers/sagas";

function* rootSaga() {
  yield all([
    authhorizationSaga(),
    testsSaga(),
    questionsSaga(),
    answersSaga(),
  ]);
}

export default rootSaga;
