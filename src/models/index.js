import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import auth from "./auth";
import tests from "./tests";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth,
    tests,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
