import { call, put, takeEvery } from "redux-saga/effects";
import { authorization as authorizationAPI, authorizationEndpoints } from "@/lib/api";
import { authorizationActions } from ".";

const getActionSaga = (endpoint) =>
  function* ({ payload }) {
    try {
      yield put(authorizationActions.start());
      const user = yield call(authorizationAPI[endpoint], payload);
      yield put(authorizationActions.success(!user.success ? user : null));
    } catch (error) {
      yield put(authorizationActions.reject(error));
    } finally {
      yield put(authorizationActions.finish());
    }
  };

export default function* authorizationSaga() {
  yield takeEvery(
    authorizationActions.signin,
    getActionSaga(authorizationEndpoints.signin)
  );
  yield takeEvery(
    authorizationActions.signup,
    getActionSaga(authorizationEndpoints.signup)
  );
  yield takeEvery(
    authorizationActions.logout,
    getActionSaga(authorizationEndpoints.logout)
  );
}
