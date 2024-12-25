import * as yup from "yup";
import { REQUIERD, MIN_PASSWORD, PASSWORD_MATCH } from "@/lib/messages";
import { call, put, takeEvery } from "redux-saga/effects";
import getSagaWrapper from "@/lib/getSagaWrapper";
import getOptimisticSaga from "@/lib/getOptimisticSaga";
import { api, authorizationEndpoints } from "@/lib/api";
import { authorizationActions } from ".";
import validate from "@/lib/validate";

const contextKeyIsSignUp = "$isSignUp";

const requiredString = yup.string().required(REQUIERD);

export const schema = yup.object({
  username: requiredString,
  password: requiredString.when(contextKeyIsSignUp, ([isSignUp], schema) =>
    isSignUp ? schema.min(6, MIN_PASSWORD(6)) : schema
  ),
  password_confirmation: yup
    .mixed()
    .when(contextKeyIsSignUp, ([isSignUp], schema) =>
      isSignUp
        ? requiredString.oneOf([yup.ref("password")], PASSWORD_MATCH)
        : schema
    ),
});

const sagaWrapper = getSagaWrapper(authorizationActions);

const getSignSaga = (endpoint) =>
  sagaWrapper(function* signSaga({ payload }) {
    let error = yield call(validate, schema, payload, {
      isSignUp: endpoint === "signup",
    });
    if (error) return error;
    let user = null;
    [error, user] = yield call(api[endpoint], payload);
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
