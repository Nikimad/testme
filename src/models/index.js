import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import auth from "./auth";
import tests from "./tests";
import questions from "./questions";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth,
    tests,
    questions,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
