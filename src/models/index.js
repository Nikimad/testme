import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import constructor from "./constructor";
import authorization from "./authorization";
import tests from "./tests";
import rootSaga from "./sagas";

export const makeStore = (preloadedState) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    preloadedState,
    reducer: {
      constructor,
      authorization,
      tests,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
};
