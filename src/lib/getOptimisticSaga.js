import { call } from "redux-saga/effects";

const getOptimisticSaga = (callee, handlePayload = (payload) => payload) =>
  function* optimisticSaga({ payload }) {
    const [error] = yield call(callee, handlePayload(payload));
    return error;
  };

export default getOptimisticSaga;
