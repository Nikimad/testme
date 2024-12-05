import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authorization from "./authorization";
import tests from "./tests";
import questions from "./questions";
import answers from "./answers";
import rootSaga from "./sagas";

export const makeStore = (preloadedState) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    preloadedState,
    reducer: {
      questions,
      answers,
      authorization,
      tests,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
};
