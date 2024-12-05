import { put } from "redux-saga/effects";

const getSagaWrapper = (actions) => (mainSaga) =>
  function* wrappedSaga(...args) {
    yield put(actions.start());
    const error = yield mainSaga(...args);
    yield error && put(actions.reject(error));
    yield put(actions.finish());
    return error;
  };

export default getSagaWrapper;
