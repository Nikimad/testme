import { call, put, takeEvery } from "redux-saga/effects";
import getSagaWrapper from "@/lib/getSagaWrapper";
import getOptimisticSaga from "@/lib/getOptimisticSaga";
import { api, authorizationEndpoints } from "@/lib/api";
import { authorizationActions } from ".";

const sagaWrapper = getSagaWrapper(authorizationActions);

const getSignSaga = (endpoint) =>
  sagaWrapper(function* signSaga({ payload }) {
    const [error, user] = yield call(api[endpoint], payload);
    yield user && put(authorizationActions.setUser(user));
    return error;
  });

const logout = sagaWrapper(getOptimisticSaga(api.logout));

export default function* authorizationSaga() {
  yield takeEvery(
    authorizationActions.signin,
    getSignSaga(authorizationEndpoints.signin)
  );
  yield takeEvery(
    authorizationActions.signup,
    getSignSaga(authorizationEndpoints.signup)
  );
  yield takeEvery(authorizationActions.logout, logout);
}
